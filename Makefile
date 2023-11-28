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

s3x:
	cp ./workspace/s3/s3-express.json ./codegen/sdk-codegen/aws-models/s3.json
	node ./scripts/cli-dispatcher/ s3 - gen
	node ./scripts/cli-dispatcher/ s3 - build

s3:
	git checkout origin/main ./codegen/sdk-codegen/aws-models/s3.json
	git checkout origin/main ./clients/client-s3

# Runs build for all packages using Turborepo
turbo-build:
	(cd scripts/remote-cache && yarn)
	node scripts/remote-cache/ start&
	sleep 3
	npx turbo run build --api="http://localhost:3000" --team="aws-sdk-js" --token="xyz"
	node scripts/remote-cache/ stop

protocols:
	yarn generate-clients -g codegen/sdk-codegen/aws-models/rekognitionstreaming.json
	git checkout HEAD clients/client-rekognitionstreaming
	yarn test:protocols

server-protocols:
	yarn generate-clients -s
	yarn test:server-protocols

bytes-cjs:
	make turbo-build
	node scripts/remote-cache/ start&
	npx turbo run build:cjs --api="http://localhost:3000" --team="aws-sdk-js" --token="xyz"
	node scripts/remote-cache/ stop