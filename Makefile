.PHONY: build

build:
	lerna run --scope \
	"@aws-sdk/client-s3" \
	--include-dependencies build

test:
	lerna run --scope \
	"@aws-sdk/client-s3" \
	--include-dependencies build
	node tests/e2e/list-buckets.js

publish:
	echo NYI