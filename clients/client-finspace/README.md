<!-- generated file, do not edit directly -->

# @aws-sdk/client-finspace

## Description

AWS SDK for JavaScript Finspace Client for Node.js, Browser and React Native.

<p>The FinSpace management service provides the APIs for managing FinSpace environments.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-finspace
using your favorite package manager:
- `npm install @aws-sdk/client-finspace`
- `yarn add @aws-sdk/client-finspace`
- `pnpm add @aws-sdk/client-finspace`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `FinspaceClient` and
the commands you need, for example `ListEnvironmentsCommand`:

```js
// ES5 example
const { FinspaceClient, ListEnvironmentsCommand } = require("@aws-sdk/client-finspace");
```

```ts
// ES6+ example
import { FinspaceClient, ListEnvironmentsCommand } from "@aws-sdk/client-finspace";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new FinspaceClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListEnvironmentsCommand(params);
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
import * as AWS from "@aws-sdk/client-finspace";
const client = new AWS.Finspace({ region: "REGION" });

// async/await.
try {
  const data = await client.listEnvironments(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listEnvironments(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listEnvironments(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-finspace` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateEnvironmentCommandOutput/)
</details>
<details>
<summary>
CreateKxChangeset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateKxChangesetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxChangesetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxChangesetCommandOutput/)
</details>
<details>
<summary>
CreateKxCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateKxClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxClusterCommandOutput/)
</details>
<details>
<summary>
CreateKxDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateKxDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxDatabaseCommandOutput/)
</details>
<details>
<summary>
CreateKxDataview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateKxDataviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxDataviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxDataviewCommandOutput/)
</details>
<details>
<summary>
CreateKxEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateKxEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxEnvironmentCommandOutput/)
</details>
<details>
<summary>
CreateKxScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateKxScalingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxScalingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxScalingGroupCommandOutput/)
</details>
<details>
<summary>
CreateKxUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateKxUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxUserCommandOutput/)
</details>
<details>
<summary>
CreateKxVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/CreateKxVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/CreateKxVolumeCommandOutput/)
</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteEnvironmentCommandOutput/)
</details>
<details>
<summary>
DeleteKxCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteKxClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxClusterCommandOutput/)
</details>
<details>
<summary>
DeleteKxClusterNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteKxClusterNodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxClusterNodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxClusterNodeCommandOutput/)
</details>
<details>
<summary>
DeleteKxDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteKxDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxDatabaseCommandOutput/)
</details>
<details>
<summary>
DeleteKxDataview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteKxDataviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxDataviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxDataviewCommandOutput/)
</details>
<details>
<summary>
DeleteKxEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteKxEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxEnvironmentCommandOutput/)
</details>
<details>
<summary>
DeleteKxScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteKxScalingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxScalingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxScalingGroupCommandOutput/)
</details>
<details>
<summary>
DeleteKxUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteKxUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxUserCommandOutput/)
</details>
<details>
<summary>
DeleteKxVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/DeleteKxVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/DeleteKxVolumeCommandOutput/)
</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetEnvironmentCommandOutput/)
</details>
<details>
<summary>
GetKxChangeset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxChangesetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxChangesetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxChangesetCommandOutput/)
</details>
<details>
<summary>
GetKxCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxClusterCommandOutput/)
</details>
<details>
<summary>
GetKxConnectionString
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxConnectionStringCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxConnectionStringCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxConnectionStringCommandOutput/)
</details>
<details>
<summary>
GetKxDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxDatabaseCommandOutput/)
</details>
<details>
<summary>
GetKxDataview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxDataviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxDataviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxDataviewCommandOutput/)
</details>
<details>
<summary>
GetKxEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxEnvironmentCommandOutput/)
</details>
<details>
<summary>
GetKxScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxScalingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxScalingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxScalingGroupCommandOutput/)
</details>
<details>
<summary>
GetKxUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxUserCommandOutput/)
</details>
<details>
<summary>
GetKxVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/GetKxVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/GetKxVolumeCommandOutput/)
</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListEnvironmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListEnvironmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListEnvironmentsCommandOutput/)
</details>
<details>
<summary>
ListKxChangesets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxChangesetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxChangesetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxChangesetsCommandOutput/)
</details>
<details>
<summary>
ListKxClusterNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxClusterNodesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxClusterNodesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxClusterNodesCommandOutput/)
</details>
<details>
<summary>
ListKxClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxClustersCommandOutput/)
</details>
<details>
<summary>
ListKxDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxDatabasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxDatabasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxDatabasesCommandOutput/)
</details>
<details>
<summary>
ListKxDataviews
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxDataviewsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxDataviewsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxDataviewsCommandOutput/)
</details>
<details>
<summary>
ListKxEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxEnvironmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxEnvironmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxEnvironmentsCommandOutput/)
</details>
<details>
<summary>
ListKxScalingGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxScalingGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxScalingGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxScalingGroupsCommandOutput/)
</details>
<details>
<summary>
ListKxUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxUsersCommandOutput/)
</details>
<details>
<summary>
ListKxVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListKxVolumesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxVolumesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListKxVolumesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateEnvironmentCommandOutput/)
</details>
<details>
<summary>
UpdateKxClusterCodeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateKxClusterCodeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxClusterCodeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxClusterCodeConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateKxClusterDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateKxClusterDatabasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxClusterDatabasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxClusterDatabasesCommandOutput/)
</details>
<details>
<summary>
UpdateKxDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateKxDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxDatabaseCommandOutput/)
</details>
<details>
<summary>
UpdateKxDataview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateKxDataviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxDataviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxDataviewCommandOutput/)
</details>
<details>
<summary>
UpdateKxEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateKxEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxEnvironmentCommandOutput/)
</details>
<details>
<summary>
UpdateKxEnvironmentNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateKxEnvironmentNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxEnvironmentNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxEnvironmentNetworkCommandOutput/)
</details>
<details>
<summary>
UpdateKxUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateKxUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxUserCommandOutput/)
</details>
<details>
<summary>
UpdateKxVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/finspace/command/UpdateKxVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-finspace/Interface/UpdateKxVolumeCommandOutput/)
</details>
