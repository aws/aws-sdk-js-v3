<!-- generated file, do not edit directly -->

# @aws-sdk/client-elasticache

## Description

AWS SDK for JavaScript ElastiCache Client for Node.js, Browser and React Native.

<fullname>Amazon ElastiCache</fullname>

<p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale
a distributed cache in the cloud.</p>
<p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory
cache with less of the administrative burden involved in launching and managing a
distributed cache. The service makes setup, scaling, and cluster failure handling much
simpler than in a self-managed cache deployment.</p>
<p>In addition, through integration with Amazon CloudWatch, customers get enhanced
visibility into the key performance statistics associated with their cache and can
receive alarms if a part of their cache runs hot.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-elasticache
using your favorite package manager:

- `npm install @aws-sdk/client-elasticache`
- `yarn add @aws-sdk/client-elasticache`
- `pnpm add @aws-sdk/client-elasticache`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ElastiCacheClient` and
the commands you need, for example `ListTagsForResourceCommand`:

```js
// ES5 example
const { ElastiCacheClient, ListTagsForResourceCommand } = require("@aws-sdk/client-elasticache");
```

```ts
// ES6+ example
import { ElastiCacheClient, ListTagsForResourceCommand } from "@aws-sdk/client-elasticache";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ElastiCacheClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListTagsForResourceCommand(params);
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
import * as AWS from "@aws-sdk/client-elasticache";
const client = new AWS.ElastiCache({ region: "REGION" });

// async/await.
try {
  const data = await client.listTagsForResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTagsForResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTagsForResource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-elasticache` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddTagsToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/AddTagsToResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/AddTagsToResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/AddTagsToResourceCommandOutput/)

</details>
<details>
<summary>
AuthorizeCacheSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/AuthorizeCacheSecurityGroupIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/AuthorizeCacheSecurityGroupIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/AuthorizeCacheSecurityGroupIngressCommandOutput/)

</details>
<details>
<summary>
BatchApplyUpdateAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/BatchApplyUpdateActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/BatchApplyUpdateActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/BatchApplyUpdateActionCommandOutput/)

</details>
<details>
<summary>
BatchStopUpdateAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/BatchStopUpdateActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/BatchStopUpdateActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/BatchStopUpdateActionCommandOutput/)

</details>
<details>
<summary>
CompleteMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CompleteMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CompleteMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CompleteMigrationCommandOutput/)

</details>
<details>
<summary>
CopyServerlessCacheSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CopyServerlessCacheSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CopyServerlessCacheSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CopyServerlessCacheSnapshotCommandOutput/)

</details>
<details>
<summary>
CopySnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CopySnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CopySnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CopySnapshotCommandOutput/)

</details>
<details>
<summary>
CreateCacheCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateCacheClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateCacheClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateCacheClusterCommandOutput/)

</details>
<details>
<summary>
CreateCacheParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateCacheParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateCacheParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateCacheParameterGroupCommandOutput/)

</details>
<details>
<summary>
CreateCacheSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateCacheSecurityGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateCacheSecurityGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateCacheSecurityGroupCommandOutput/)

</details>
<details>
<summary>
CreateCacheSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateCacheSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateCacheSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateCacheSubnetGroupCommandOutput/)

</details>
<details>
<summary>
CreateGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateGlobalReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateGlobalReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateGlobalReplicationGroupCommandOutput/)

</details>
<details>
<summary>
CreateReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateReplicationGroupCommandOutput/)

</details>
<details>
<summary>
CreateServerlessCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateServerlessCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateServerlessCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateServerlessCacheCommandOutput/)

</details>
<details>
<summary>
CreateServerlessCacheSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateServerlessCacheSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateServerlessCacheSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateServerlessCacheSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateUserCommandOutput/)

</details>
<details>
<summary>
CreateUserGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/CreateUserGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateUserGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/CreateUserGroupCommandOutput/)

</details>
<details>
<summary>
DecreaseNodeGroupsInGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DecreaseNodeGroupsInGlobalReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DecreaseNodeGroupsInGlobalReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput/)

</details>
<details>
<summary>
DecreaseReplicaCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DecreaseReplicaCountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DecreaseReplicaCountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DecreaseReplicaCountCommandOutput/)

</details>
<details>
<summary>
DeleteCacheCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteCacheClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteCacheClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteCacheClusterCommandOutput/)

</details>
<details>
<summary>
DeleteCacheParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteCacheParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteCacheParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteCacheParameterGroupCommandOutput/)

</details>
<details>
<summary>
DeleteCacheSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteCacheSecurityGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteCacheSecurityGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteCacheSecurityGroupCommandOutput/)

</details>
<details>
<summary>
DeleteCacheSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteCacheSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteCacheSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteCacheSubnetGroupCommandOutput/)

</details>
<details>
<summary>
DeleteGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteGlobalReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteGlobalReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteGlobalReplicationGroupCommandOutput/)

</details>
<details>
<summary>
DeleteReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteReplicationGroupCommandOutput/)

</details>
<details>
<summary>
DeleteServerlessCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteServerlessCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteServerlessCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteServerlessCacheCommandOutput/)

</details>
<details>
<summary>
DeleteServerlessCacheSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteServerlessCacheSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteServerlessCacheSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteServerlessCacheSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteUserCommandOutput/)

</details>
<details>
<summary>
DeleteUserGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DeleteUserGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteUserGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DeleteUserGroupCommandOutput/)

</details>
<details>
<summary>
DescribeCacheClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeCacheClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheClustersCommandOutput/)

</details>
<details>
<summary>
DescribeCacheEngineVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeCacheEngineVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheEngineVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheEngineVersionsCommandOutput/)

</details>
<details>
<summary>
DescribeCacheParameterGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeCacheParameterGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheParameterGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheParameterGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeCacheParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeCacheParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheParametersCommandOutput/)

</details>
<details>
<summary>
DescribeCacheSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeCacheSecurityGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheSecurityGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheSecurityGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeCacheSubnetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeCacheSubnetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheSubnetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeCacheSubnetGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeEngineDefaultParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeEngineDefaultParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeEngineDefaultParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeEngineDefaultParametersCommandOutput/)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeEventsCommandOutput/)

</details>
<details>
<summary>
DescribeGlobalReplicationGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeGlobalReplicationGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeGlobalReplicationGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeGlobalReplicationGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeReplicationGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeReplicationGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeReplicationGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeReplicationGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeReservedCacheNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeReservedCacheNodesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeReservedCacheNodesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeReservedCacheNodesCommandOutput/)

</details>
<details>
<summary>
DescribeReservedCacheNodesOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeReservedCacheNodesOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeReservedCacheNodesOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeReservedCacheNodesOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeServerlessCaches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeServerlessCachesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeServerlessCachesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeServerlessCachesCommandOutput/)

</details>
<details>
<summary>
DescribeServerlessCacheSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeServerlessCacheSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeServerlessCacheSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeServerlessCacheSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeServiceUpdates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeServiceUpdatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeServiceUpdatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeServiceUpdatesCommandOutput/)

</details>
<details>
<summary>
DescribeSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeUpdateActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeUpdateActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeUpdateActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeUpdateActionsCommandOutput/)

</details>
<details>
<summary>
DescribeUserGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeUserGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeUserGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeUserGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DescribeUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DescribeUsersCommandOutput/)

</details>
<details>
<summary>
DisassociateGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/DisassociateGlobalReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DisassociateGlobalReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/DisassociateGlobalReplicationGroupCommandOutput/)

</details>
<details>
<summary>
ExportServerlessCacheSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ExportServerlessCacheSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ExportServerlessCacheSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ExportServerlessCacheSnapshotCommandOutput/)

</details>
<details>
<summary>
FailoverGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/FailoverGlobalReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/FailoverGlobalReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/FailoverGlobalReplicationGroupCommandOutput/)

</details>
<details>
<summary>
IncreaseNodeGroupsInGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/IncreaseNodeGroupsInGlobalReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/IncreaseNodeGroupsInGlobalReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput/)

</details>
<details>
<summary>
IncreaseReplicaCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/IncreaseReplicaCountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/IncreaseReplicaCountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/IncreaseReplicaCountCommandOutput/)

</details>
<details>
<summary>
ListAllowedNodeTypeModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ListAllowedNodeTypeModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ListAllowedNodeTypeModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ListAllowedNodeTypeModificationsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ModifyCacheCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyCacheClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyCacheClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyCacheClusterCommandOutput/)

</details>
<details>
<summary>
ModifyCacheParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyCacheParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyCacheParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyCacheParameterGroupCommandOutput/)

</details>
<details>
<summary>
ModifyCacheSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyCacheSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyCacheSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyCacheSubnetGroupCommandOutput/)

</details>
<details>
<summary>
ModifyGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyGlobalReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyGlobalReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyGlobalReplicationGroupCommandOutput/)

</details>
<details>
<summary>
ModifyReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyReplicationGroupCommandOutput/)

</details>
<details>
<summary>
ModifyReplicationGroupShardConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyReplicationGroupShardConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyReplicationGroupShardConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyReplicationGroupShardConfigurationCommandOutput/)

</details>
<details>
<summary>
ModifyServerlessCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyServerlessCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyServerlessCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyServerlessCacheCommandOutput/)

</details>
<details>
<summary>
ModifyUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyUserCommandOutput/)

</details>
<details>
<summary>
ModifyUserGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ModifyUserGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyUserGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ModifyUserGroupCommandOutput/)

</details>
<details>
<summary>
PurchaseReservedCacheNodesOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/PurchaseReservedCacheNodesOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/PurchaseReservedCacheNodesOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/PurchaseReservedCacheNodesOfferingCommandOutput/)

</details>
<details>
<summary>
RebalanceSlotsInGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/RebalanceSlotsInGlobalReplicationGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/RebalanceSlotsInGlobalReplicationGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/RebalanceSlotsInGlobalReplicationGroupCommandOutput/)

</details>
<details>
<summary>
RebootCacheCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/RebootCacheClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/RebootCacheClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/RebootCacheClusterCommandOutput/)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/RemoveTagsFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/RemoveTagsFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/RemoveTagsFromResourceCommandOutput/)

</details>
<details>
<summary>
ResetCacheParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/ResetCacheParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ResetCacheParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/ResetCacheParameterGroupCommandOutput/)

</details>
<details>
<summary>
RevokeCacheSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/RevokeCacheSecurityGroupIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/RevokeCacheSecurityGroupIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/RevokeCacheSecurityGroupIngressCommandOutput/)

</details>
<details>
<summary>
StartMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/StartMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/StartMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/StartMigrationCommandOutput/)

</details>
<details>
<summary>
TestFailover
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/TestFailoverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/TestFailoverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/TestFailoverCommandOutput/)

</details>
<details>
<summary>
TestMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticache/command/TestMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/TestMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticache/Interface/TestMigrationCommandOutput/)

</details>
