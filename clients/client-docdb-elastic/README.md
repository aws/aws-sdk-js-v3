<!-- generated file, do not edit directly -->

# @aws-sdk/client-docdb-elastic

## Description

AWS SDK for JavaScript DocDBElastic Client for Node.js, Browser and React Native.

<fullname>Amazon DocumentDB elastic clusters</fullname>

<p>Amazon DocumentDB elastic-clusters support workloads with millions of reads/writes per second and petabytes of storage capacity.
Amazon DocumentDB elastic clusters also simplify how developers interact with Amazon DocumentDB elastic-clusters by eliminating the need to choose, manage or upgrade instances.</p>
<p>Amazon DocumentDB elastic-clusters were created to:</p>
<ul>
<li>
<p>provide a solution for customers looking for a database that provides virtually limitless scale with rich query capabilities and MongoDB API compatibility.</p>
</li>
<li>
<p>give customers higher connection limits, and to reduce downtime from patching.</p>
</li>
<li>
<p>continue investing in a cloud-native, elastic, and class leading architecture for JSON workloads.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-docdb-elastic
using your favorite package manager:

- `npm install @aws-sdk/client-docdb-elastic`
- `yarn add @aws-sdk/client-docdb-elastic`
- `pnpm add @aws-sdk/client-docdb-elastic`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DocDBElasticClient` and
the commands you need, for example `ListClustersCommand`:

```js
// ES5 example
const { DocDBElasticClient, ListClustersCommand } = require("@aws-sdk/client-docdb-elastic");
```

```ts
// ES6+ example
import { DocDBElasticClient, ListClustersCommand } from "@aws-sdk/client-docdb-elastic";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DocDBElasticClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListClustersCommand(params);
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
import * as AWS from "@aws-sdk/client-docdb-elastic";
const client = new AWS.DocDBElastic({ region: "REGION" });

// async/await.
try {
  const data = await client.listClusters(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listClusters(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listClusters(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-docdb-elastic` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ApplyPendingMaintenanceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/ApplyPendingMaintenanceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ApplyPendingMaintenanceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ApplyPendingMaintenanceActionCommandOutput/)

</details>
<details>
<summary>
CopyClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/CopyClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/CopyClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/CopyClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/CreateClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/CreateClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/CreateClusterCommandOutput/)

</details>
<details>
<summary>
CreateClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/CreateClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/CreateClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/CreateClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/DeleteClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/DeleteClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/DeleteClusterCommandOutput/)

</details>
<details>
<summary>
DeleteClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/DeleteClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/DeleteClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/DeleteClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
GetCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/GetClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/GetClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/GetClusterCommandOutput/)

</details>
<details>
<summary>
GetClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/GetClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/GetClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/GetClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
GetPendingMaintenanceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/GetPendingMaintenanceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/GetPendingMaintenanceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/GetPendingMaintenanceActionCommandOutput/)

</details>
<details>
<summary>
ListClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/ListClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ListClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ListClustersCommandOutput/)

</details>
<details>
<summary>
ListClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/ListClusterSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ListClusterSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ListClusterSnapshotsCommandOutput/)

</details>
<details>
<summary>
ListPendingMaintenanceActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/ListPendingMaintenanceActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ListPendingMaintenanceActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ListPendingMaintenanceActionsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
RestoreClusterFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/RestoreClusterFromSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/RestoreClusterFromSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/RestoreClusterFromSnapshotCommandOutput/)

</details>
<details>
<summary>
StartCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/StartClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/StartClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/StartClusterCommandOutput/)

</details>
<details>
<summary>
StopCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/StopClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/StopClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/StopClusterCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/docdb-elastic/command/UpdateClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/UpdateClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-docdb-elastic/Interface/UpdateClusterCommandOutput/)

</details>
