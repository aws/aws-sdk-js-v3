<!-- generated file, do not edit directly -->

# @aws-sdk/client-datasync

## Description

AWS SDK for JavaScript DataSync Client for Node.js, Browser and React Native.

<fullname>DataSync</fullname>

<p>DataSync is an online data movement and discovery service that simplifies data migration
and helps you quickly, easily, and securely transfer your file or object data to, from, and
between Amazon Web Services storage services.</p>
<p>This API interface reference includes documentation for using DataSync
programmatically. For complete information, see the <i>
<a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User
Guide</a>
</i>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-datasync
using your favorite package manager:

- `npm install @aws-sdk/client-datasync`
- `yarn add @aws-sdk/client-datasync`
- `pnpm add @aws-sdk/client-datasync`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DataSyncClient` and
the commands you need, for example `ListAgentsCommand`:

```js
// ES5 example
const { DataSyncClient, ListAgentsCommand } = require("@aws-sdk/client-datasync");
```

```ts
// ES6+ example
import { DataSyncClient, ListAgentsCommand } from "@aws-sdk/client-datasync";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DataSyncClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAgentsCommand(params);
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
import * as AWS from "@aws-sdk/client-datasync";
const client = new AWS.DataSync({ region: "REGION" });

// async/await.
try {
  const data = await client.listAgents(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAgents(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAgents(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-datasync` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddStorageSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/AddStorageSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/AddStorageSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/AddStorageSystemCommandOutput/)

</details>
<details>
<summary>
CancelTaskExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CancelTaskExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CancelTaskExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CancelTaskExecutionCommandOutput/)

</details>
<details>
<summary>
CreateAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateAgentCommandOutput/)

</details>
<details>
<summary>
CreateLocationAzureBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationAzureBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationAzureBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationAzureBlobCommandOutput/)

</details>
<details>
<summary>
CreateLocationEfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationEfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationEfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationEfsCommandOutput/)

</details>
<details>
<summary>
CreateLocationFsxLustre
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationFsxLustreCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationFsxLustreCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationFsxLustreCommandOutput/)

</details>
<details>
<summary>
CreateLocationFsxOntap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationFsxOntapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationFsxOntapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationFsxOntapCommandOutput/)

</details>
<details>
<summary>
CreateLocationFsxOpenZfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationFsxOpenZfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationFsxOpenZfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationFsxOpenZfsCommandOutput/)

</details>
<details>
<summary>
CreateLocationFsxWindows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationFsxWindowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationFsxWindowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationFsxWindowsCommandOutput/)

</details>
<details>
<summary>
CreateLocationHdfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationHdfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationHdfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationHdfsCommandOutput/)

</details>
<details>
<summary>
CreateLocationNfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationNfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationNfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationNfsCommandOutput/)

</details>
<details>
<summary>
CreateLocationObjectStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationObjectStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationObjectStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationObjectStorageCommandOutput/)

</details>
<details>
<summary>
CreateLocationS3
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationS3Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationS3CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationS3CommandOutput/)

</details>
<details>
<summary>
CreateLocationSmb
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateLocationSmbCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationSmbCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateLocationSmbCommandOutput/)

</details>
<details>
<summary>
CreateTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/CreateTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/CreateTaskCommandOutput/)

</details>
<details>
<summary>
DeleteAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DeleteAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DeleteAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DeleteAgentCommandOutput/)

</details>
<details>
<summary>
DeleteLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DeleteLocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DeleteLocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DeleteLocationCommandOutput/)

</details>
<details>
<summary>
DeleteTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DeleteTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DeleteTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DeleteTaskCommandOutput/)

</details>
<details>
<summary>
DescribeAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeAgentCommandOutput/)

</details>
<details>
<summary>
DescribeDiscoveryJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeDiscoveryJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeDiscoveryJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeDiscoveryJobCommandOutput/)

</details>
<details>
<summary>
DescribeLocationAzureBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationAzureBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationAzureBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationAzureBlobCommandOutput/)

</details>
<details>
<summary>
DescribeLocationEfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationEfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationEfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationEfsCommandOutput/)

</details>
<details>
<summary>
DescribeLocationFsxLustre
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationFsxLustreCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationFsxLustreCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationFsxLustreCommandOutput/)

</details>
<details>
<summary>
DescribeLocationFsxOntap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationFsxOntapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationFsxOntapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationFsxOntapCommandOutput/)

</details>
<details>
<summary>
DescribeLocationFsxOpenZfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationFsxOpenZfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationFsxOpenZfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationFsxOpenZfsCommandOutput/)

</details>
<details>
<summary>
DescribeLocationFsxWindows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationFsxWindowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationFsxWindowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationFsxWindowsCommandOutput/)

</details>
<details>
<summary>
DescribeLocationHdfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationHdfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationHdfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationHdfsCommandOutput/)

</details>
<details>
<summary>
DescribeLocationNfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationNfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationNfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationNfsCommandOutput/)

</details>
<details>
<summary>
DescribeLocationObjectStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationObjectStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationObjectStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationObjectStorageCommandOutput/)

</details>
<details>
<summary>
DescribeLocationS3
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationS3Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationS3CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationS3CommandOutput/)

</details>
<details>
<summary>
DescribeLocationSmb
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeLocationSmbCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationSmbCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeLocationSmbCommandOutput/)

</details>
<details>
<summary>
DescribeStorageSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeStorageSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeStorageSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeStorageSystemCommandOutput/)

</details>
<details>
<summary>
DescribeStorageSystemResourceMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeStorageSystemResourceMetricsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeStorageSystemResourceMetricsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeStorageSystemResourceMetricsCommandOutput/)

</details>
<details>
<summary>
DescribeStorageSystemResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeStorageSystemResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeStorageSystemResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeStorageSystemResourcesCommandOutput/)

</details>
<details>
<summary>
DescribeTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeTaskCommandOutput/)

</details>
<details>
<summary>
DescribeTaskExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/DescribeTaskExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeTaskExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/DescribeTaskExecutionCommandOutput/)

</details>
<details>
<summary>
GenerateRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/GenerateRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/GenerateRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/GenerateRecommendationsCommandOutput/)

</details>
<details>
<summary>
ListAgents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/ListAgentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListAgentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListAgentsCommandOutput/)

</details>
<details>
<summary>
ListDiscoveryJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/ListDiscoveryJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListDiscoveryJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListDiscoveryJobsCommandOutput/)

</details>
<details>
<summary>
ListLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/ListLocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListLocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListLocationsCommandOutput/)

</details>
<details>
<summary>
ListStorageSystems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/ListStorageSystemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListStorageSystemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListStorageSystemsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTaskExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/ListTaskExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListTaskExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListTaskExecutionsCommandOutput/)

</details>
<details>
<summary>
ListTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/ListTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/ListTasksCommandOutput/)

</details>
<details>
<summary>
RemoveStorageSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/RemoveStorageSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/RemoveStorageSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/RemoveStorageSystemCommandOutput/)

</details>
<details>
<summary>
StartDiscoveryJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/StartDiscoveryJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/StartDiscoveryJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/StartDiscoveryJobCommandOutput/)

</details>
<details>
<summary>
StartTaskExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/StartTaskExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/StartTaskExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/StartTaskExecutionCommandOutput/)

</details>
<details>
<summary>
StopDiscoveryJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/StopDiscoveryJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/StopDiscoveryJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/StopDiscoveryJobCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateAgentCommandOutput/)

</details>
<details>
<summary>
UpdateDiscoveryJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateDiscoveryJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateDiscoveryJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateDiscoveryJobCommandOutput/)

</details>
<details>
<summary>
UpdateLocationAzureBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationAzureBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationAzureBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationAzureBlobCommandOutput/)

</details>
<details>
<summary>
UpdateLocationEfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationEfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationEfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationEfsCommandOutput/)

</details>
<details>
<summary>
UpdateLocationFsxLustre
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationFsxLustreCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationFsxLustreCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationFsxLustreCommandOutput/)

</details>
<details>
<summary>
UpdateLocationFsxOntap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationFsxOntapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationFsxOntapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationFsxOntapCommandOutput/)

</details>
<details>
<summary>
UpdateLocationFsxOpenZfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationFsxOpenZfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationFsxOpenZfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationFsxOpenZfsCommandOutput/)

</details>
<details>
<summary>
UpdateLocationFsxWindows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationFsxWindowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationFsxWindowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationFsxWindowsCommandOutput/)

</details>
<details>
<summary>
UpdateLocationHdfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationHdfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationHdfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationHdfsCommandOutput/)

</details>
<details>
<summary>
UpdateLocationNfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationNfsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationNfsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationNfsCommandOutput/)

</details>
<details>
<summary>
UpdateLocationObjectStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationObjectStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationObjectStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationObjectStorageCommandOutput/)

</details>
<details>
<summary>
UpdateLocationS3
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationS3Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationS3CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationS3CommandOutput/)

</details>
<details>
<summary>
UpdateLocationSmb
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateLocationSmbCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationSmbCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateLocationSmbCommandOutput/)

</details>
<details>
<summary>
UpdateStorageSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateStorageSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateStorageSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateStorageSystemCommandOutput/)

</details>
<details>
<summary>
UpdateTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateTaskCommandOutput/)

</details>
<details>
<summary>
UpdateTaskExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datasync/command/UpdateTaskExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateTaskExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datasync/Interface/UpdateTaskExecutionCommandOutput/)

</details>
