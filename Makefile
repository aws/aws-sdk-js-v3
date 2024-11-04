# This is the public Makefile containing some build commands.
# You can implement some additional personal commands such as login and sync in Makefile.private.mk (unversioned).

# fetch AWS testing credentials
login:
	make -f Makefile.private.mk login

# Sync your development fork with upstream.
# Recommended contents:
# gh repo sync {your_github_account_name}/aws-sdk-js-v3 -b main
# git fetch --all
sync:
	make -f Makefile.private.mk sync

test-unit: build-s3-browser-bundle
	npx vitest run -c vitest.config.ts
	npx vitest run -c vitest.config.browser.ts
	npx vitest run -c vitest.config.clients.unit.ts
	npx jest -c jest.config.js

test-protocols: build-s3-browser-bundle
	npx vitest run -c vitest.config.protocols.integ.ts

test-integration: build-s3-browser-bundle
	rm -rf ./clients/client-sso/node_modules/\@smithy # todo(yarn) incompatible redundant nesting.
	npx vitest run -c vitest.config.integ.ts
	npx jest -c jest.config.integ.js
	make test-protocols;

test-e2e: build-s3-browser-bundle
	npx vitest run -c vitest.config.e2e.ts
	npx vitest run -c vitest.config.browser.e2e.ts

build-s3-browser-bundle:
	node ./clients/client-s3/test/browser-build/esbuild

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
