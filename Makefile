# This is the public Makefile containing some build commands.
# You can implement some additional personal commands such as login and sync in Makefile.private.mk (unversioned).

.PHONY: bundles test-unit test-integration test-protocols test-e2e

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
	yarn g:vitest run -c vitest.config.ts
	yarn g:vitest run -c vitest.config.browser.ts
	yarn g:vitest run -c vitest.config.clients.unit.ts
	npx jest -c jest.config.js

# typecheck for test code.
test-types:
	npx tsc -p tsconfig.test.json

test-protocols: bundles
	yarn g:vitest run -c vitest.config.protocols.integ.ts

test-schema: bundles
	yarn g:vitest run -c vitest.config.protocols-schema.integ.ts

test-integration: bundles
	rm -rf ./clients/client-sso/node_modules/\@smithy # todo(yarn) incompatible redundant nesting.
	yarn g:vitest run -c vitest.config.integ.mts
	npx jest -c jest.config.integ.js
	make test-protocols
	make test-types
	make test-endpoints

test-endpoints:
	npx jest -c ./tests/endpoints-2.0/jest.config.js --bail --verbose false

test-e2e: bundles
	yarn g:vitest run -c vitest.config.e2e.mts --retry=4
	yarn g:vitest run -c vitest.config.browser.e2e.ts --retry=4
	make test-bundlers

test-bundlers:
	(cd ./tests/bundlers && make build test)

build-s3-browser-bundle:
	node ./clients/client-s3/test/browser-build/esbuild

build-signature-v4-multi-region-browser-bundle:
	node ./packages/signature-v4-multi-region/test-browser/browser-build/esbuild.js

# removes nested node_modules folders
clean-nested:
	rm -rf ./lib/*/node_modules
	rm -rf ./packages/*/node_modules
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

gen-auth:
	node ./scripts/cli-dispatcher client sso - gen;
	node ./scripts/cli-dispatcher client sts - gen;
	node ./scripts/cli-dispatcher client sso-oidc - gen;
	node ./scripts/cli-dispatcher client cognito identity - gen;

b-auth:
	node ./scripts/cli-dispatcher client sso - deps;
	node ./scripts/cli-dispatcher client sts - b;
	node ./scripts/cli-dispatcher client sso-oidc - b;
	node ./scripts/cli-dispatcher client cognito identity - b;

# Runs build for all packages using Turborepo
turbo-build:
	(cd scripts/remote-cache && yarn)
	node scripts/remote-cache/ start&
	sleep 3
	npx turbo run build --api="http://localhost:3000" --team="aws-sdk-js" --token="xyz"
	node scripts/remote-cache/ stop

# run turbo build for packages only.
tpk:
	npx turbo run build --filter='./packages/*'

# Clears the Turborepo local build cache
turbo-clean:
	@read -p "Are you sure you want to delete your local cache? [y/N]: " ans && [ $${ans:-N} = y ]
	@echo "\nDeleted cache folders: \n--------"
	@find . -name '.turbo' -type d -prune -print -exec rm -rf '{}' + && echo '\n'

server-protocols:
	yarn generate-clients -s
	yarn test:server-protocols
