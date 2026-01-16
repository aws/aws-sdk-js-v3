# `@aws-sdk/config`

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/config/latest.svg)](https://www.npmjs.com/package/@aws-sdk/config)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/config.svg)](https://www.npmjs.com/package/@aws-sdk/config)

This package exports dependency implementations for configuring the AWS SDK for JavaScript v3
clients that may be used in your application code.

For an overview of configuration options on SDK clients,
see [supplemental-docs/CLIENTS.md](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md).

## Table of Contents

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Usage](#usage)
- [`@aws-sdk/config/credentials`](#aws-sdkconfigcredentials)
- [`@aws-sdk/config/logger`](#aws-sdkconfiglogger)
- [`@aws-sdk/config/protocol`](#aws-sdkconfigprotocol)
- [`@aws-sdk/config/requestHandler`](#aws-sdkconfigrequesthandler)
- [`@aws-sdk/config/retryStrategy`](#aws-sdkconfigretrystrategy)
- [`@aws-sdk/config/typecheck`](#aws-sdkconfigtypecheck)
  - [Compile-time transforms](#compile-time-transforms)
  - [Runtime Typecheck](#runtime-typecheck)

<!-- TOC end -->

## Usage

Install this alongside your SDK client packages(s) to access optional SDK plugins and injectable
dependency implementations.

```json5
{
  name: "your-app",
  dependencies: {
    "@aws-sdk/client-s3": "<=3.x.y",
    // where 3.x.y is a version of your choosing.
    "@aws-sdk/client-dynamodb": "<=3.x.y",
    "@aws-sdk/config": "<=3.x.y",
  },
}
```

The elements exported from this package are organized into submodules accessible by import paths.

## `@aws-sdk/config/credentials`

This module includes the same API exported from `@aws-sdk/credential-providers`.

```js
// example: credentials
import { fromIni } from "@aws-sdk/config/credentials";

new S3Client({
  credentials: fromIni(),
});
```

See [@aws-sdk/credential-providers](https://www.npmjs.com/package/@aws-sdk/credential-providers)
for the complete API.

See
also [CLIENTS.md#credentials](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md#credentials-credentials).

## `@aws-sdk/config/logger`

This module exports a helper for log level filtering.

```js
// example: logger
import { LogLevel } from "@aws-sdk/config/logger";

new S3Client({
  logger: new LogLevel("debug", console),
});
```

See [CLIENTS.md#logger](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md#logger-logger)
for implementing your own logger.

## `@aws-sdk/config/protocol`

This module exports a selection of AWS Protocols, which you can use for protocol selection override or extend
to customize serialization behavior (advanced usage).

```js
// example: protocol selection.
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { AwsSmithyRpcV2CborProtocol } from "@aws-sdk/config/protocol";

new CloudWatchClient({
  protocol: AwsSmithyRpcV2CborProtocol,
});
```

```js
// example: protocol extension.
import { AwsRestXmlProtocol } from "@aws-sdk/config/protocol";

new S3Client({
  protocol: class CustomAwsRestXmlProtocol extends AwsRestXmlProtocol {},
});
```

See [CLIENTS.md#protocol](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md#protocol-protocol).

## `@aws-sdk/config/requestHandler`

This module exports the two common HTTP request handler implementations
for extension.

```js
// example: requestHandler extension.
import { NodeHttpHandler, FetchHttpHandler } from "@aws-sdk/config/requestHandler";

new S3Client({
  requestHandler: new (class extends NodeHttpHandler {
    async handle(request) {
      return super.handle(request);
    }
  })(),
});
```

See [CLIENTS.md#requestHandler](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md#request-handler-requesthandler).

## `@aws-sdk/config/retryStrategy`

This module exports the SDK retry strategy implementations. Please keep in mind that
typically, you won't need to customize the retry behavior of the SDK, and that
`maxAttempts` and `retryMode` can be configured with simple values that do not need imports.

See [CLIENTS.md#retryStrategy](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md#retry-strategy-retrystrategy-retrymode-maxattempts).

```js
// example: retryStrategy with custom backoff.
import { ConfiguredRetryStrategy } from "@aws-sdk/config/retryStrategy";

new S3Client({
  retryStrategy: new ConfiguredRetryStrategy(
    // attempts
    5,

    // backoff 1 additional second per attempt
    (attempt: number) => 500 + attempt * 1_000
  ),
});
```

## `@aws-sdk/config/typecheck`

This module exports compile-time type transform helpers and runtime typechecking components.

### Compile-time transforms

For compile-time type transform helpers, see usage at [@smithy/types](https://www.npmjs.com/package/@smithy/types).

```ts
// example: type transformers.
import type { AssertiveClient, BrowserClient, NodeJsClient, UncheckedClient } from "@aws-sdk/config/typecheck";

// UncheckedClient makes output fields non-nullable.
// You should still perform type checks as you deem
// necessary, but the SDK will no longer prompt you
// with nullability errors.
const s3 = new S3({}) as UncheckedClient<S3>;

// this transform narrows the type of output streams to Node.js Readable.
const s3Nodejs = new S3Client({}) as NodeJsClient<S3Client>;

// this transform narrows the type of output streams to web ReadableStream.
const s3Browser = new S3Client({}) as BrowserClient<S3Client>;
```

### Runtime Typecheck

Refer to [SCHEMAS.md](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/SCHEMAS.md) for an introduciton
to how the SDK uses schemas to serialize and deserialize data structures. Schemas are also
used by the runtime typecheck plugin.

```js
// example: runtime typecheck usage with SDK client
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { getRuntimeTypecheckPlugin } from "@aws-sdk/config/typecheck";

const ddb = new DynamoDB();

ddb.middlewareStack.use(
  // requires AWS SDK v3.953.0+ for shape checking.
  // requires AWS SDK v3.969.0+ for required member checks.
  getRuntimeTypecheckPlugin({
    logger: console,
    // throw means stop execution,
    // other values correspond to logger channel.
    input: "throw" || "error" || "warn" || "info" || "debug",
  })
);

await ddb
  .getItem({
    Key: {
      id: {
        S: new Date("wrong type"),
      },
    },
  })
  .catch(console.error);

/*
Error: DynamoDBClient->GetItemCommand input validation:
        {}.TableName: is required.
        {}.Key["id"].S: expected string, got object.
<... stack trace ...>
 */

// standalone usage
import { GetItemInput$ } from "@aws-sdk/client-dynamodb";
import { validateSchema } from "@aws-sdk/config/typecheck";

const errors = validateSchema(GetItemInput$, {
  Key: {
    id: {
      S: new Date("wrong type"),
    },
  },
});

console.log(errors.join("\n"));

/*
{}.TableName: is required.
{}.Key["id"].S: expected string, got object.
 */
```
