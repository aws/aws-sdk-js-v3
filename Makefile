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

# Runs build for all packages using Turborepo
turbo-build:
	(cd scripts/remote-cache && yarn)
	node scripts/remote-cache/ start&
	sleep 3
	npx turbo run build --api="http://localhost:3000" --team="aws-sdk-js" --token="xyz"
	node scripts/remote-cache/ stop

# Runs single-client codegen for all clients using Turborepo
turbo-generate-clients:
	(cd scripts/remote-cache && yarn)
	node scripts/remote-cache/ start&
	sleep 3
	npx turbo run generate:client --filter=@aws-sdk/client-* --api="http://localhost:3000" --team="aws-sdk-js" --token="xyz"
	node scripts/remote-cache/ stop
	