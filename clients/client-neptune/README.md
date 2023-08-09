<!-- generated file, do not edit directly -->

# @aws-sdk/client-neptune

## Description

AWS SDK for JavaScript Neptune Client for Node.js, Browser and React Native.

<fullname>Amazon Neptune</fullname>

<p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it
easy to build and run applications that work with highly connected datasets. The core of
Amazon Neptune is a purpose-built, high-performance graph database engine optimized for
storing billions of relationships and querying the graph with milliseconds latency. Amazon
Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query
languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that
efficiently navigate highly connected datasets. Neptune powers graph use cases such as
recommendation engines, fraud detection, knowledge graphs, drug discovery, and network
security.</p>
<p>This interface reference for Amazon Neptune contains documentation for a programming or
command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is
asynchronous, which means that some interfaces might require techniques such as polling or
callback functions to determine when a command has been applied. In this reference, the
parameter descriptions indicate whether a command is applied immediately, on the next instance
reboot, or during the maintenance window. The reference structure is as follows, and we list
following some related topics from the user guide.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-neptune
using your favorite package manager:

- `npm install @aws-sdk/client-neptune`
- `yarn add @aws-sdk/client-neptune`
- `pnpm add @aws-sdk/client-neptune`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `NeptuneClient` and
the commands you need, for example `AddRoleToDBClusterCommand`:

```js
// ES5 example
const { NeptuneClient, AddRoleToDBClusterCommand } = require("@aws-sdk/client-neptune");
```

```ts
// ES6+ example
import { NeptuneClient, AddRoleToDBClusterCommand } from "@aws-sdk/client-neptune";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new NeptuneClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddRoleToDBClusterCommand(params);
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
import * as AWS from "@aws-sdk/client-neptune";
const client = new AWS.Neptune({ region: "REGION" });

// async/await.
try {
  const data = await client.addRoleToDBCluster(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addRoleToDBCluster(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addRoleToDBCluster(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-neptune` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddRoleToDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/addroletodbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/addroletodbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/addroletodbclustercommandoutput.html)

</details>
<details>
<summary>
AddSourceIdentifierToSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/addsourceidentifiertosubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/addsourceidentifiertosubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/addsourceidentifiertosubscriptioncommandoutput.html)

</details>
<details>
<summary>
AddTagsToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/addtagstoresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/addtagstoresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/addtagstoresourcecommandoutput.html)

</details>
<details>
<summary>
ApplyPendingMaintenanceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/applypendingmaintenanceactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/applypendingmaintenanceactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/applypendingmaintenanceactioncommandoutput.html)

</details>
<details>
<summary>
CopyDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/copydbclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/copydbclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/copydbclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
CopyDBClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/copydbclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/copydbclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/copydbclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
CopyDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/copydbparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/copydbparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/copydbparametergroupcommandoutput.html)

</details>
<details>
<summary>
CreateDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createdbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbclustercommandoutput.html)

</details>
<details>
<summary>
CreateDBClusterEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createdbclusterendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbclusterendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbclusterendpointcommandoutput.html)

</details>
<details>
<summary>
CreateDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createdbclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
CreateDBClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createdbclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createdbinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbinstancecommandoutput.html)

</details>
<details>
<summary>
CreateDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createdbparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbparametergroupcommandoutput.html)

</details>
<details>
<summary>
CreateDBSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createdbsubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbsubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createdbsubnetgroupcommandoutput.html)

</details>
<details>
<summary>
CreateEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
CreateGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/createglobalclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createglobalclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/createglobalclustercommandoutput.html)

</details>
<details>
<summary>
DeleteDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deletedbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbclustercommandoutput.html)

</details>
<details>
<summary>
DeleteDBClusterEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deletedbclusterendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbclusterendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbclusterendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deletedbclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
DeleteDBClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deletedbclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
DeleteDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deletedbinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbinstancecommandoutput.html)

</details>
<details>
<summary>
DeleteDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deletedbparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbparametergroupcommandoutput.html)

</details>
<details>
<summary>
DeleteDBSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deletedbsubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbsubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deletedbsubnetgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deleteeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deleteeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deleteeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
DeleteGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/deleteglobalclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deleteglobalclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/deleteglobalclustercommandoutput.html)

</details>
<details>
<summary>
DescribeDBClusterEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbclusterendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclusterendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclusterendpointscommandoutput.html)

</details>
<details>
<summary>
DescribeDBClusterParameterGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbclusterparametergroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclusterparametergroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclusterparametergroupscommandoutput.html)

</details>
<details>
<summary>
DescribeDBClusterParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbclusterparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclusterparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclusterparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeDBClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbclusterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclusterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclusterscommandoutput.html)

</details>
<details>
<summary>
DescribeDBClusterSnapshotAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbclustersnapshotattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclustersnapshotattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclustersnapshotattributescommandoutput.html)

</details>
<details>
<summary>
DescribeDBClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbclustersnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclustersnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbclustersnapshotscommandoutput.html)

</details>
<details>
<summary>
DescribeDBEngineVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbengineversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbengineversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbengineversionscommandoutput.html)

</details>
<details>
<summary>
DescribeDBInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbinstancescommandoutput.html)

</details>
<details>
<summary>
DescribeDBParameterGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbparametergroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbparametergroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbparametergroupscommandoutput.html)

</details>
<details>
<summary>
DescribeDBParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeDBSubnetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describedbsubnetgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbsubnetgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describedbsubnetgroupscommandoutput.html)

</details>
<details>
<summary>
DescribeEngineDefaultClusterParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describeenginedefaultclusterparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeenginedefaultclusterparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeenginedefaultclusterparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeEngineDefaultParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describeenginedefaultparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeenginedefaultparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeenginedefaultparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeEventCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describeeventcategoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeeventcategoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeeventcategoriescommandoutput.html)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describeeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeeventscommandoutput.html)

</details>
<details>
<summary>
DescribeEventSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describeeventsubscriptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeeventsubscriptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeeventsubscriptionscommandoutput.html)

</details>
<details>
<summary>
DescribeGlobalClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describeglobalclusterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeglobalclusterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeglobalclusterscommandoutput.html)

</details>
<details>
<summary>
DescribeOrderableDBInstanceOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describeorderabledbinstanceoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeorderabledbinstanceoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describeorderabledbinstanceoptionscommandoutput.html)

</details>
<details>
<summary>
DescribePendingMaintenanceActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describependingmaintenanceactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describependingmaintenanceactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describependingmaintenanceactionscommandoutput.html)

</details>
<details>
<summary>
DescribeValidDBInstanceModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/describevaliddbinstancemodificationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describevaliddbinstancemodificationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/describevaliddbinstancemodificationscommandoutput.html)

</details>
<details>
<summary>
FailoverDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/failoverdbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/failoverdbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/failoverdbclustercommandoutput.html)

</details>
<details>
<summary>
FailoverGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/failoverglobalclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/failoverglobalclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/failoverglobalclustercommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ModifyDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifydbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbclustercommandoutput.html)

</details>
<details>
<summary>
ModifyDBClusterEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifydbclusterendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbclusterendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbclusterendpointcommandoutput.html)

</details>
<details>
<summary>
ModifyDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifydbclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
ModifyDBClusterSnapshotAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifydbclustersnapshotattributecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbclustersnapshotattributecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbclustersnapshotattributecommandoutput.html)

</details>
<details>
<summary>
ModifyDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifydbinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbinstancecommandoutput.html)

</details>
<details>
<summary>
ModifyDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifydbparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbparametergroupcommandoutput.html)

</details>
<details>
<summary>
ModifyDBSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifydbsubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbsubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifydbsubnetgroupcommandoutput.html)

</details>
<details>
<summary>
ModifyEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifyeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifyeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifyeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
ModifyGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/modifyglobalclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifyglobalclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/modifyglobalclustercommandoutput.html)

</details>
<details>
<summary>
PromoteReadReplicaDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/promotereadreplicadbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/promotereadreplicadbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/promotereadreplicadbclustercommandoutput.html)

</details>
<details>
<summary>
RebootDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/rebootdbinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/rebootdbinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/rebootdbinstancecommandoutput.html)

</details>
<details>
<summary>
RemoveFromGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/removefromglobalclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/removefromglobalclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/removefromglobalclustercommandoutput.html)

</details>
<details>
<summary>
RemoveRoleFromDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/removerolefromdbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/removerolefromdbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/removerolefromdbclustercommandoutput.html)

</details>
<details>
<summary>
RemoveSourceIdentifierFromSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/removesourceidentifierfromsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/removesourceidentifierfromsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/removesourceidentifierfromsubscriptioncommandoutput.html)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/removetagsfromresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/removetagsfromresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/removetagsfromresourcecommandoutput.html)

</details>
<details>
<summary>
ResetDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/resetdbclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/resetdbclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/resetdbclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
ResetDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/resetdbparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/resetdbparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/resetdbparametergroupcommandoutput.html)

</details>
<details>
<summary>
RestoreDBClusterFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/restoredbclusterfromsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/restoredbclusterfromsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/restoredbclusterfromsnapshotcommandoutput.html)

</details>
<details>
<summary>
RestoreDBClusterToPointInTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/restoredbclustertopointintimecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/restoredbclustertopointintimecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/restoredbclustertopointintimecommandoutput.html)

</details>
<details>
<summary>
StartDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/startdbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/startdbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/startdbclustercommandoutput.html)

</details>
<details>
<summary>
StopDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/classes/stopdbclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/stopdbclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/interfaces/stopdbclustercommandoutput.html)

</details>
