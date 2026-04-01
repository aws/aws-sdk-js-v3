# This is the public Makefile containing some build commands.
# You can implement some additional personal commands such as login and sync in Makefile.private.mk (unversioned).

.PHONY: login sync bundles test-unit test-types test-indices test-protocols test-schema test-integration test-endpoints test-e2e test-bundlers build-s3-browser-bundle build-signature-v4-multi-region-browser-bundle clean-nested link-smithy unlink-smithy copy-smithy gen-auth b-auth tpk unbuilt turbo-clean server-protocols

# fetch AWS testing credentials
login:
	make -f Makefile.private.mk login

# Sync your development fork with upstream.
# Recommended contents:
# gh repo sync {your_github_account_name}/aws-sdk-js-v3 -b main
# git fetch --all
sync:
	make -f Makefile.private.mk sync

bundles: build-s3-browser-bundle build-signature-v4-multi-region-browser-bundle

test-unit: bundles
	yarn g:vitest run -c vitest.config.mts
	yarn g:vitest run -c vitest.config.browser.mts
	yarn g:vitest run -c vitest.config.clients.unit.mts
	npx jest -c jest.config.js

test-codegen:
	cp ./private/aws-protocoltests-restjson-schema/package.json ./tmp/pkg.json.bak
	cp ./private/aws-protocoltests-restjson-schema/CHANGELOG.md ./tmp/changelog.bak
	rm -rf ./private/aws-protocoltests-restjson-schema
	yarn generate-clients -p
	node ./scripts/restore-pkg-version.js ./tmp/pkg.json.bak ./private/aws-protocoltests-restjson-schema/package.json
	cp ./tmp/changelog.bak ./private/aws-protocoltests-restjson-schema/CHANGELOG.md
	git diff --exit-code ./

# typecheck for test code.
test-types: reset-test-credentials
	npx tsc -p tsconfig.test.json

test-indices:
	node ./scripts/validation/client-index-tests.mjs

test-protocols: bundles
	yarn g:vitest run -c vitest.config.protocols.integ.mts

snapshot-compare:
	NODE_OPTIONS='--max-old-space-size=8192' SNAPSHOT_MODE=compare \
	yarn g:vitest run -c vitest.config.snapshots.integ.mts

snapshot-write:
	NODE_OPTIONS='--max-old-space-size=8192' SNAPSHOT_MODE=write \
	yarn g:vitest run -c vitest.config.snapshots.integ.mts

test-schema: bundles
	yarn g:vitest run -c vitest.config.protocols-schema.integ.mts

# run public API tests (no network requests).
test-integration: bundles
	rm -rf ./clients/client-sso/node_modules/\@smithy # todo(yarn) incompatible redundant nesting.
	node ./scripts/validation/no-generic-byte-arrays.js
	node ./scripts/compilation/Inliner.spec.js
	yarn g:vitest run -c vitest.config.integ.mts
	make test-protocols
	make test-types
	make snapshot-compare
	make test-indices
	make test-endpoints

test-endpoints:
	npx jest -c ./tests/endpoints-2.0/jest.config.js --bail --verbose false

# run all e2e tests (real services).
test-e2e: bundles
	yarn g:vitest run -c vitest.config.e2e.mts --retry=4 --test-timeout=60000 --hook-timeout=60000
	make test-browser-cross-platform
	make test-bundlers
	make test-canary

test-x: test-browser-cross-platform

# e2e tests run in browser, but using tests that also run in Node.js
test-browser-cross-platform:
	node ./scripts/browser-testing/writeTestCredentials.mjs
	yarn g:vitest run -c vitest.config.cross-platform.e2e.mts --retry=4 --test-timeout=60000 --hook-timeout=60000; \
		EXIT_CODE=$$?; \
		make reset-test-credentials; \
		exit $$EXIT_CODE;

reset-test-credentials:
	echo "export const testCredentials = {}" > ./scripts/browser-testing/aws.testCredentials.browser.ts

test-bundlers:
	(cd ./tests/bundlers && make build test)

test-canary:
	node ./tests/canary/canary-runner.js

build-s3-browser-bundle:
	node ./clients/client-s3/test/browser-build/esbuild

build-signature-v4-multi-region-browser-bundle:
	node ./packages-internal/signature-v4-multi-region/test-browser/browser-build/esbuild.js

# removes nested node_modules folders
clean-nested:
	rm -rf ./lib/*/node_modules
	rm -rf ./packages/*/node_modules
	rm -rf ./packages-internal/*/node_modules
	rm -rf ./clients/*/node_modules
	rm -rf ./private/*/node_modules

link-smithy:
	rm -rf ./node_modules/\@smithy
	ln -s ../../smithy-typescript/packages/ ./node_modules/\@smithy

unlink-smithy:
	rm ./node_modules/\@smithy
	yarn --check-files

copy-smithy:
	node ./scripts/copy-smithy-dist-files

# format Java code.
jfmt:
	(cd codegen && ./gradlew spotlessApply)

# run turbo build for packages only.
tpk:
	node ./scripts/turbo build --filter='./{packages,packages-internal}/*'

# builds only packages that have no build at all.
# for development only - packages may be stale.
unbuilt:
	node scripts/build-only-unbuilt.js

# Clears the Turborepo local build cache
turbo-clean:
	@read -p "Are you sure you want to delete your local cache? [y/N]: " ans && [ $${ans:-N} = y ]
	@echo "\nDeleted cache folders: \n--------"
	@find . -name '.turbo' -type d -prune -print -exec rm -rf '{}' + && echo '\n'

server-protocols:
	yarn generate-clients -s
	yarn test:server-protocols
