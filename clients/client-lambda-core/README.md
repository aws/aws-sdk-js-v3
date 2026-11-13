<!-- generated file, do not edit directly -->

# @aws-sdk/client-lambda-core

## Description

AWS SDK for JavaScript LambdaCore Client for Node.js, Browser and React Native.

<fullname>Lambda</fullname> <p> <b>Overview</b> </p> <p>Lambda Core is a set of APIs for managing shared infrastructure resources used by Lambda. The Lambda Core API provides operations for:</p> <ol> <li> <p>Creating and managing network connectors that enable Lambda MicroVMs and Lambda Web Functions to access resources in your Amazon Virtual Private Cloud (Amazon VPC).</p> </li> <li> <p>Creating customer-managed runtimes which can be used with Lambda Event Functions.</p> </li> </ol> <p>Network connectors provision elastic network interfaces (ENIs) in your VPC subnets, providing a managed network path from Lambda compute environments to private resources such as Amazon RDS databases, Amazon ElastiCache clusters, and internal APIs. You create a network connector once and attach it to one or more Lambda MicroVMs or Lambda Web Functions at run time.</p> <p>A customer-managed runtime is a Lambda runtime that you create and manage as a standalone resource. Lambda Event Functions can use your customer-managed runtime instead of using one of the built-in Lambda-managed runtimes. Customer-managed runtimes enable you to create customized runtimes for your workloads, and give you control over runtime updates and the deprecation lifecycle.</p> <p>The <i>Lambda Core API Reference</i> provides information about each of the API methods, including details about the parameters in each API request and response.</p> <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p>For a list of Region-specific endpoints that Lambda supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html">Lambda endpoints and quotas</a> in the <i>Amazon Web Services General Reference.</i> </p> <p>When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the <i>Amazon Web Services General Reference.</i> </p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-lambda-core`
- `yarn add @aws-sdk/client-lambda-core`
- `pnpm add @aws-sdk/client-lambda-core`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LambdaCoreClient` and
the commands you need, for example `ListRuntimesCommand`:

```js
// ES5 example
const { LambdaCoreClient, ListRuntimesCommand } = require("@aws-sdk/client-lambda-core");
```

```ts
// ES6+ example
import { LambdaCoreClient, ListRuntimesCommand } from "@aws-sdk/client-lambda-core";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new LambdaCoreClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListRuntimesCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`LambdaCore` extends `LambdaCoreClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`LambdaCoreClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { LambdaCore } from "@aws-sdk/client-lambda-core";

const client = new LambdaCore({ region: "REGION" });

// async/await.
try {
  const data = await client.listRuntimes(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listRuntimes(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listRuntimes(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lambda-core` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateNetworkConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/CreateNetworkConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/CreateNetworkConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/CreateNetworkConnectorCommandOutput/)
</details>
<details>
<summary>
CreateRuntime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/CreateRuntimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/CreateRuntimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/CreateRuntimeCommandOutput/)
</details>
<details>
<summary>
CreateRuntimeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/CreateRuntimeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/CreateRuntimeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/CreateRuntimeAliasCommandOutput/)
</details>
<details>
<summary>
CreateRuntimeVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/CreateRuntimeVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/CreateRuntimeVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/CreateRuntimeVersionCommandOutput/)
</details>
<details>
<summary>
DeleteNetworkConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/DeleteNetworkConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/DeleteNetworkConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/DeleteNetworkConnectorCommandOutput/)
</details>
<details>
<summary>
DeleteRuntime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/DeleteRuntimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/DeleteRuntimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/DeleteRuntimeCommandOutput/)
</details>
<details>
<summary>
DeleteRuntimeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/DeleteRuntimeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/DeleteRuntimeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/DeleteRuntimeAliasCommandOutput/)
</details>
<details>
<summary>
DeleteRuntimeVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/DeleteRuntimeVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/DeleteRuntimeVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/DeleteRuntimeVersionCommandOutput/)
</details>
<details>
<summary>
GetNetworkConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/GetNetworkConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/GetNetworkConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/GetNetworkConnectorCommandOutput/)
</details>
<details>
<summary>
GetRuntime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/GetRuntimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/GetRuntimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/GetRuntimeCommandOutput/)
</details>
<details>
<summary>
GetRuntimeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/GetRuntimeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/GetRuntimeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/GetRuntimeAliasCommandOutput/)
</details>
<details>
<summary>
GetRuntimeVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/GetRuntimeVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/GetRuntimeVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/GetRuntimeVersionCommandOutput/)
</details>
<details>
<summary>
ListNetworkConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/ListNetworkConnectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListNetworkConnectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListNetworkConnectorsCommandOutput/)
</details>
<details>
<summary>
ListNetworkConnectorVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/ListNetworkConnectorVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListNetworkConnectorVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListNetworkConnectorVersionsCommandOutput/)
</details>
<details>
<summary>
ListRuntimeAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/ListRuntimeAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListRuntimeAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListRuntimeAliasesCommandOutput/)
</details>
<details>
<summary>
ListRuntimes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/ListRuntimesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListRuntimesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListRuntimesCommandOutput/)
</details>
<details>
<summary>
ListRuntimeVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/ListRuntimeVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListRuntimeVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/ListRuntimeVersionsCommandOutput/)
</details>
<details>
<summary>
RestoreRuntime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/RestoreRuntimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/RestoreRuntimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/RestoreRuntimeCommandOutput/)
</details>
<details>
<summary>
UpdateNetworkConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/UpdateNetworkConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/UpdateNetworkConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/UpdateNetworkConnectorCommandOutput/)
</details>
<details>
<summary>
UpdateRuntime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/UpdateRuntimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/UpdateRuntimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/UpdateRuntimeCommandOutput/)
</details>
<details>
<summary>
UpdateRuntimeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/UpdateRuntimeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/UpdateRuntimeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/UpdateRuntimeAliasCommandOutput/)
</details>
<details>
<summary>
UpdateRuntimeVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda-core/command/UpdateRuntimeVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/UpdateRuntimeVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda-core/Interface/UpdateRuntimeVersionCommandOutput/)
</details>
