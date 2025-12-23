<!-- generated file, do not edit directly -->

# @aws-sdk/client-keyspaces

## Description

AWS SDK for JavaScript Keyspaces Client for Node.js, Browser and React Native.

<p>Amazon Keyspaces (for Apache Cassandra) is a scalable, highly available, and managed Apache Cassandra-compatible database service. Amazon Keyspaces makes it easy to migrate, run, and scale Cassandra workloads in the Amazon Web Services Cloud. With just a few clicks on the Amazon Web Services Management Console or a few lines of code, you can create keyspaces and tables in Amazon Keyspaces, without deploying any infrastructure or installing software. </p> <p>In addition to supporting Cassandra Query Language (CQL) requests via open-source Cassandra drivers, Amazon Keyspaces supports data definition language (DDL) operations to manage keyspaces and tables using the Amazon Web Services SDK and CLI, as well as infrastructure as code (IaC) services and tools such as CloudFormation and Terraform. This API reference describes the supported DDL operations in detail.</p> <p>For the list of all supported CQL APIs, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cassandra-apis.html">Supported Cassandra APIs, operations, and data types in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>To learn how Amazon Keyspaces API actions are recorded with CloudTrail, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail">Amazon Keyspaces information in CloudTrail</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For more information about Amazon Web Services APIs, for example how to implement retry logic or how to sign Amazon Web Services API requests, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a> in the <i>General Reference</i>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-keyspaces
using your favorite package manager:
- `npm install @aws-sdk/client-keyspaces`
- `yarn add @aws-sdk/client-keyspaces`
- `pnpm add @aws-sdk/client-keyspaces`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `KeyspacesClient` and
the commands you need, for example `ListKeyspacesCommand`:

```js
// ES5 example
const { KeyspacesClient, ListKeyspacesCommand } = require("@aws-sdk/client-keyspaces");
```

```ts
// ES6+ example
import { KeyspacesClient, ListKeyspacesCommand } from "@aws-sdk/client-keyspaces";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new KeyspacesClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListKeyspacesCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

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

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-keyspaces";
const client = new AWS.Keyspaces({ region: "REGION" });

// async/await.
try {
  const data = await client.listKeyspaces(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listKeyspaces(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listKeyspaces(params, (err, data) => {
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

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-keyspaces` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateKeyspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/CreateKeyspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/CreateKeyspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/CreateKeyspaceCommandOutput/)
</details>
<details>
<summary>
CreateTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/CreateTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/CreateTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/CreateTableCommandOutput/)
</details>
<details>
<summary>
CreateType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/CreateTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/CreateTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/CreateTypeCommandOutput/)
</details>
<details>
<summary>
DeleteKeyspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/DeleteKeyspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/DeleteKeyspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/DeleteKeyspaceCommandOutput/)
</details>
<details>
<summary>
DeleteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/DeleteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/DeleteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/DeleteTableCommandOutput/)
</details>
<details>
<summary>
DeleteType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/DeleteTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/DeleteTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/DeleteTypeCommandOutput/)
</details>
<details>
<summary>
GetKeyspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/GetKeyspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/GetKeyspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/GetKeyspaceCommandOutput/)
</details>
<details>
<summary>
GetTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/GetTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/GetTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/GetTableCommandOutput/)
</details>
<details>
<summary>
GetTableAutoScalingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/GetTableAutoScalingSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/GetTableAutoScalingSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/GetTableAutoScalingSettingsCommandOutput/)
</details>
<details>
<summary>
GetType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/GetTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/GetTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/GetTypeCommandOutput/)
</details>
<details>
<summary>
ListKeyspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/ListKeyspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/ListKeyspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/ListKeyspacesCommandOutput/)
</details>
<details>
<summary>
ListTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/ListTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/ListTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/ListTablesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/ListTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/ListTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/ListTypesCommandOutput/)
</details>
<details>
<summary>
RestoreTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/RestoreTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/RestoreTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/RestoreTableCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateKeyspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/UpdateKeyspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/UpdateKeyspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/UpdateKeyspaceCommandOutput/)
</details>
<details>
<summary>
UpdateTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/keyspaces/command/UpdateTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/UpdateTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-keyspaces/Interface/UpdateTableCommandOutput/)
</details>
