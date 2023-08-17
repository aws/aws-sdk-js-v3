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

To install the this package, simply type add or install @aws-sdk/client-elasticache
using your favorite package manager:

- `npm install @aws-sdk/client-elasticache`
- `yarn add @aws-sdk/client-elasticache`
- `pnpm add @aws-sdk/client-elasticache`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ElastiCacheClient` and
the commands you need, for example `AddTagsToResourceCommand`:

```js
// ES5 example
const { ElastiCacheClient, AddTagsToResourceCommand } = require("@aws-sdk/client-elasticache");
```

```ts
// ES6+ example
import { ElastiCacheClient, AddTagsToResourceCommand } from "@aws-sdk/client-elasticache";
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
const command = new AddTagsToResourceCommand(params);
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
  const data = await client.addTagsToResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addTagsToResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addTagsToResource(params, (err, data) => {
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
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/addtagstoresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/addtagstoresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/addtagstoresourcecommandoutput.html)

</details>
<details>
<summary>
AuthorizeCacheSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/authorizecachesecuritygroupingresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/authorizecachesecuritygroupingresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/authorizecachesecuritygroupingresscommandoutput.html)

</details>
<details>
<summary>
BatchApplyUpdateAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/batchapplyupdateactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/batchapplyupdateactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/batchapplyupdateactioncommandoutput.html)

</details>
<details>
<summary>
BatchStopUpdateAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/batchstopupdateactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/batchstopupdateactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/batchstopupdateactioncommandoutput.html)

</details>
<details>
<summary>
CompleteMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/completemigrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/completemigrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/completemigrationcommandoutput.html)

</details>
<details>
<summary>
CopySnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/copysnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/copysnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/copysnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateCacheCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createcacheclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createcacheclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createcacheclustercommandoutput.html)

</details>
<details>
<summary>
CreateCacheParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createcacheparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createcacheparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createcacheparametergroupcommandoutput.html)

</details>
<details>
<summary>
CreateCacheSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createcachesecuritygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createcachesecuritygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createcachesecuritygroupcommandoutput.html)

</details>
<details>
<summary>
CreateCacheSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createcachesubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createcachesubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createcachesubnetgroupcommandoutput.html)

</details>
<details>
<summary>
CreateGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createglobalreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createglobalreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createglobalreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
CreateReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
CreateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createsnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createusercommandoutput.html)

</details>
<details>
<summary>
CreateUserGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/createusergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createusergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/createusergroupcommandoutput.html)

</details>
<details>
<summary>
DecreaseNodeGroupsInGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/decreasenodegroupsinglobalreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/decreasenodegroupsinglobalreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/decreasenodegroupsinglobalreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
DecreaseReplicaCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/decreasereplicacountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/decreasereplicacountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/decreasereplicacountcommandoutput.html)

</details>
<details>
<summary>
DeleteCacheCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deletecacheclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletecacheclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletecacheclustercommandoutput.html)

</details>
<details>
<summary>
DeleteCacheParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deletecacheparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletecacheparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletecacheparametergroupcommandoutput.html)

</details>
<details>
<summary>
DeleteCacheSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deletecachesecuritygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletecachesecuritygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletecachesecuritygroupcommandoutput.html)

</details>
<details>
<summary>
DeleteCacheSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deletecachesubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletecachesubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletecachesubnetgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deleteglobalreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deleteglobalreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deleteglobalreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deletereplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletereplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletereplicationgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deletesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deletesnapshotcommandoutput.html)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deleteusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deleteusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deleteusercommandoutput.html)

</details>
<details>
<summary>
DeleteUserGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/deleteusergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deleteusergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/deleteusergroupcommandoutput.html)

</details>
<details>
<summary>
DescribeCacheClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describecacheclusterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecacheclusterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecacheclusterscommandoutput.html)

</details>
<details>
<summary>
DescribeCacheEngineVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describecacheengineversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecacheengineversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecacheengineversionscommandoutput.html)

</details>
<details>
<summary>
DescribeCacheParameterGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describecacheparametergroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecacheparametergroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecacheparametergroupscommandoutput.html)

</details>
<details>
<summary>
DescribeCacheParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describecacheparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecacheparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecacheparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeCacheSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describecachesecuritygroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecachesecuritygroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecachesecuritygroupscommandoutput.html)

</details>
<details>
<summary>
DescribeCacheSubnetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describecachesubnetgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecachesubnetgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describecachesubnetgroupscommandoutput.html)

</details>
<details>
<summary>
DescribeEngineDefaultParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describeenginedefaultparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeenginedefaultparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeenginedefaultparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describeeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeeventscommandoutput.html)

</details>
<details>
<summary>
DescribeGlobalReplicationGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describeglobalreplicationgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeglobalreplicationgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeglobalreplicationgroupscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describereplicationgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describereplicationgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describereplicationgroupscommandoutput.html)

</details>
<details>
<summary>
DescribeReservedCacheNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describereservedcachenodescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describereservedcachenodescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describereservedcachenodescommandoutput.html)

</details>
<details>
<summary>
DescribeReservedCacheNodesOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describereservedcachenodesofferingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describereservedcachenodesofferingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describereservedcachenodesofferingscommandoutput.html)

</details>
<details>
<summary>
DescribeServiceUpdates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describeserviceupdatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeserviceupdatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeserviceupdatescommandoutput.html)

</details>
<details>
<summary>
DescribeSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describesnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describesnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describesnapshotscommandoutput.html)

</details>
<details>
<summary>
DescribeUpdateActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describeupdateactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeupdateactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeupdateactionscommandoutput.html)

</details>
<details>
<summary>
DescribeUserGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describeusergroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeusergroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeusergroupscommandoutput.html)

</details>
<details>
<summary>
DescribeUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/describeuserscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeuserscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/describeuserscommandoutput.html)

</details>
<details>
<summary>
DisassociateGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/disassociateglobalreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/disassociateglobalreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/disassociateglobalreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
FailoverGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/failoverglobalreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/failoverglobalreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/failoverglobalreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
IncreaseNodeGroupsInGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/increasenodegroupsinglobalreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/increasenodegroupsinglobalreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/increasenodegroupsinglobalreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
IncreaseReplicaCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/increasereplicacountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/increasereplicacountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/increasereplicacountcommandoutput.html)

</details>
<details>
<summary>
ListAllowedNodeTypeModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/listallowednodetypemodificationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/listallowednodetypemodificationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/listallowednodetypemodificationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ModifyCacheCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/modifycacheclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifycacheclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifycacheclustercommandoutput.html)

</details>
<details>
<summary>
ModifyCacheParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/modifycacheparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifycacheparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifycacheparametergroupcommandoutput.html)

</details>
<details>
<summary>
ModifyCacheSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/modifycachesubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifycachesubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifycachesubnetgroupcommandoutput.html)

</details>
<details>
<summary>
ModifyGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/modifyglobalreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyglobalreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyglobalreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
ModifyReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/modifyreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
ModifyReplicationGroupShardConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/modifyreplicationgroupshardconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyreplicationgroupshardconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyreplicationgroupshardconfigurationcommandoutput.html)

</details>
<details>
<summary>
ModifyUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/modifyusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyusercommandoutput.html)

</details>
<details>
<summary>
ModifyUserGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/modifyusergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyusergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/modifyusergroupcommandoutput.html)

</details>
<details>
<summary>
PurchaseReservedCacheNodesOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/purchasereservedcachenodesofferingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/purchasereservedcachenodesofferingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/purchasereservedcachenodesofferingcommandoutput.html)

</details>
<details>
<summary>
RebalanceSlotsInGlobalReplicationGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/rebalanceslotsinglobalreplicationgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/rebalanceslotsinglobalreplicationgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/rebalanceslotsinglobalreplicationgroupcommandoutput.html)

</details>
<details>
<summary>
RebootCacheCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/rebootcacheclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/rebootcacheclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/rebootcacheclustercommandoutput.html)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/removetagsfromresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/removetagsfromresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/removetagsfromresourcecommandoutput.html)

</details>
<details>
<summary>
ResetCacheParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/resetcacheparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/resetcacheparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/resetcacheparametergroupcommandoutput.html)

</details>
<details>
<summary>
RevokeCacheSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/revokecachesecuritygroupingresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/revokecachesecuritygroupingresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/revokecachesecuritygroupingresscommandoutput.html)

</details>
<details>
<summary>
StartMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/startmigrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/startmigrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/startmigrationcommandoutput.html)

</details>
<details>
<summary>
TestFailover
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/testfailovercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/testfailovercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/testfailovercommandoutput.html)

</details>
<details>
<summary>
TestMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/classes/testmigrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/testmigrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticache/interfaces/testmigrationcommandoutput.html)

</details>
