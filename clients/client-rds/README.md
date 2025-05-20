<!-- generated file, do not edit directly -->

# @aws-sdk/client-rds

## Description

AWS SDK for JavaScript RDS Client for Node.js, Browser and React Native.

<fullname>Amazon Relational Database Service</fullname>

<p></p>
<p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and
scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational
database and manages common database administration tasks, freeing up developers to focus on what makes their applications
and businesses unique.</p>
<p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server,
Oracle, Db2, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools
you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS
automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS
is flexible: you can scale your DB instance's compute resources and storage capacity to meet your
application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for
the resources you use.</p>
<p>This interface reference for Amazon RDS contains documentation for a programming or command line interface
you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might
require techniques such as polling or callback functions to determine when a command has been applied. In this
reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot,
or during the maintenance window. The reference structure is as follows, and we list following some related topics
from the user guide.</p>
<p>
<b>Amazon RDS API Reference</b>
</p>
<ul>
<li>
<p>For the alphabetical list of API actions, see
<a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p>
</li>
<li>
<p>For the alphabetical list of data types, see
<a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p>
</li>
<li>
<p>For a list of common query parameters, see
<a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p>
</li>
<li>
<p>For descriptions of the error codes, see
<a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
</li>
</ul>
<p>
<b>Amazon RDS User Guide</b>
</p>
<ul>
<li>
<p>For a summary of the Amazon RDS interfaces, see
<a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p>
</li>
<li>
<p>For more information about how to use the Query API, see
<a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-rds
using your favorite package manager:

- `npm install @aws-sdk/client-rds`
- `yarn add @aws-sdk/client-rds`
- `pnpm add @aws-sdk/client-rds`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RDSClient` and
the commands you need, for example `ListTagsForResourceCommand`:

```js
// ES5 example
const { RDSClient, ListTagsForResourceCommand } = require("@aws-sdk/client-rds");
```

```ts
// ES6+ example
import { RDSClient, ListTagsForResourceCommand } from "@aws-sdk/client-rds";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new RDSClient({ region: "REGION" });

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
import * as AWS from "@aws-sdk/client-rds";
const client = new AWS.RDS({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-rds` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/AddRoleToDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AddRoleToDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AddRoleToDBClusterCommandOutput/)

</details>
<details>
<summary>
AddRoleToDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/AddRoleToDBInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AddRoleToDBInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AddRoleToDBInstanceCommandOutput/)

</details>
<details>
<summary>
AddSourceIdentifierToSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/AddSourceIdentifierToSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AddSourceIdentifierToSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AddSourceIdentifierToSubscriptionCommandOutput/)

</details>
<details>
<summary>
AddTagsToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/AddTagsToResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AddTagsToResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AddTagsToResourceCommandOutput/)

</details>
<details>
<summary>
ApplyPendingMaintenanceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ApplyPendingMaintenanceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ApplyPendingMaintenanceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ApplyPendingMaintenanceActionCommandOutput/)

</details>
<details>
<summary>
AuthorizeDBSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/AuthorizeDBSecurityGroupIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AuthorizeDBSecurityGroupIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/AuthorizeDBSecurityGroupIngressCommandOutput/)

</details>
<details>
<summary>
BacktrackDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/BacktrackDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/BacktrackDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/BacktrackDBClusterCommandOutput/)

</details>
<details>
<summary>
CancelExportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CancelExportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CancelExportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CancelExportTaskCommandOutput/)

</details>
<details>
<summary>
CopyDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CopyDBClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyDBClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyDBClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
CopyDBClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CopyDBClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyDBClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyDBClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
CopyDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CopyDBParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyDBParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyDBParameterGroupCommandOutput/)

</details>
<details>
<summary>
CopyDBSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CopyDBSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyDBSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyDBSnapshotCommandOutput/)

</details>
<details>
<summary>
CopyOptionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CopyOptionGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyOptionGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CopyOptionGroupCommandOutput/)

</details>
<details>
<summary>
CreateBlueGreenDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateBlueGreenDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateBlueGreenDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateBlueGreenDeploymentCommandOutput/)

</details>
<details>
<summary>
CreateCustomDBEngineVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateCustomDBEngineVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateCustomDBEngineVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateCustomDBEngineVersionCommandOutput/)

</details>
<details>
<summary>
CreateDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBClusterCommandOutput/)

</details>
<details>
<summary>
CreateDBClusterEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBClusterEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBClusterEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBClusterEndpointCommandOutput/)

</details>
<details>
<summary>
CreateDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
CreateDBClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBInstanceCommandOutput/)

</details>
<details>
<summary>
CreateDBInstanceReadReplica
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBInstanceReadReplicaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBInstanceReadReplicaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBInstanceReadReplicaCommandOutput/)

</details>
<details>
<summary>
CreateDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBParameterGroupCommandOutput/)

</details>
<details>
<summary>
CreateDBProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBProxyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBProxyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBProxyCommandOutput/)

</details>
<details>
<summary>
CreateDBProxyEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBProxyEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBProxyEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBProxyEndpointCommandOutput/)

</details>
<details>
<summary>
CreateDBSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBSecurityGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBSecurityGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBSecurityGroupCommandOutput/)

</details>
<details>
<summary>
CreateDBShardGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBShardGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBShardGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBShardGroupCommandOutput/)

</details>
<details>
<summary>
CreateDBSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateDBSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateDBSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateDBSubnetGroupCommandOutput/)

</details>
<details>
<summary>
CreateEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateEventSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateGlobalClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateGlobalClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateGlobalClusterCommandOutput/)

</details>
<details>
<summary>
CreateIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateIntegrationCommandOutput/)

</details>
<details>
<summary>
CreateOptionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateOptionGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateOptionGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateOptionGroupCommandOutput/)

</details>
<details>
<summary>
CreateTenantDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/CreateTenantDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateTenantDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/CreateTenantDatabaseCommandOutput/)

</details>
<details>
<summary>
DeleteBlueGreenDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteBlueGreenDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteBlueGreenDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteBlueGreenDeploymentCommandOutput/)

</details>
<details>
<summary>
DeleteCustomDBEngineVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteCustomDBEngineVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteCustomDBEngineVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteCustomDBEngineVersionCommandOutput/)

</details>
<details>
<summary>
DeleteDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterCommandOutput/)

</details>
<details>
<summary>
DeleteDBClusterAutomatedBackup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBClusterAutomatedBackupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterAutomatedBackupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterAutomatedBackupCommandOutput/)

</details>
<details>
<summary>
DeleteDBClusterEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBClusterEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
DeleteDBClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBInstanceCommandOutput/)

</details>
<details>
<summary>
DeleteDBInstanceAutomatedBackup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBInstanceAutomatedBackupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBInstanceAutomatedBackupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBInstanceAutomatedBackupCommandOutput/)

</details>
<details>
<summary>
DeleteDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBParameterGroupCommandOutput/)

</details>
<details>
<summary>
DeleteDBProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBProxyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBProxyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBProxyCommandOutput/)

</details>
<details>
<summary>
DeleteDBProxyEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBProxyEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBProxyEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBProxyEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteDBSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBSecurityGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBSecurityGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBSecurityGroupCommandOutput/)

</details>
<details>
<summary>
DeleteDBShardGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBShardGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBShardGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBShardGroupCommandOutput/)

</details>
<details>
<summary>
DeleteDBSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteDBSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteDBSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteDBSubnetGroupCommandOutput/)

</details>
<details>
<summary>
DeleteEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteEventSubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteGlobalClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteGlobalClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteGlobalClusterCommandOutput/)

</details>
<details>
<summary>
DeleteIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteIntegrationCommandOutput/)

</details>
<details>
<summary>
DeleteOptionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteOptionGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteOptionGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteOptionGroupCommandOutput/)

</details>
<details>
<summary>
DeleteTenantDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeleteTenantDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteTenantDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeleteTenantDatabaseCommandOutput/)

</details>
<details>
<summary>
DeregisterDBProxyTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DeregisterDBProxyTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeregisterDBProxyTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DeregisterDBProxyTargetsCommandOutput/)

</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeAccountAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeAccountAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeAccountAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeBlueGreenDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeBlueGreenDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeBlueGreenDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeBlueGreenDeploymentsCommandOutput/)

</details>
<details>
<summary>
DescribeCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeCertificatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeCertificatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeCertificatesCommandOutput/)

</details>
<details>
<summary>
DescribeDBClusterAutomatedBackups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBClusterAutomatedBackupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterAutomatedBackupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterAutomatedBackupsCommandOutput/)

</details>
<details>
<summary>
DescribeDBClusterBacktracks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBClusterBacktracksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterBacktracksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterBacktracksCommandOutput/)

</details>
<details>
<summary>
DescribeDBClusterEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBClusterEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterEndpointsCommandOutput/)

</details>
<details>
<summary>
DescribeDBClusterParameterGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBClusterParameterGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterParameterGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterParameterGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeDBClusterParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBClusterParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterParametersCommandOutput/)

</details>
<details>
<summary>
DescribeDBClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClustersCommandOutput/)

</details>
<details>
<summary>
DescribeDBClusterSnapshotAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBClusterSnapshotAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterSnapshotAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterSnapshotAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeDBClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBClusterSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBClusterSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeDBEngineVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBEngineVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBEngineVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBEngineVersionsCommandOutput/)

</details>
<details>
<summary>
DescribeDBInstanceAutomatedBackups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBInstanceAutomatedBackupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBInstanceAutomatedBackupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBInstanceAutomatedBackupsCommandOutput/)

</details>
<details>
<summary>
DescribeDBInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeDBLogFiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBLogFilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBLogFilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBLogFilesCommandOutput/)

</details>
<details>
<summary>
DescribeDBMajorEngineVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBMajorEngineVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBMajorEngineVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBMajorEngineVersionsCommandOutput/)

</details>
<details>
<summary>
DescribeDBParameterGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBParameterGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBParameterGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBParameterGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeDBParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBParametersCommandOutput/)

</details>
<details>
<summary>
DescribeDBProxies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBProxiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBProxiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBProxiesCommandOutput/)

</details>
<details>
<summary>
DescribeDBProxyEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBProxyEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBProxyEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBProxyEndpointsCommandOutput/)

</details>
<details>
<summary>
DescribeDBProxyTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBProxyTargetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBProxyTargetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBProxyTargetGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeDBProxyTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBProxyTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBProxyTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBProxyTargetsCommandOutput/)

</details>
<details>
<summary>
DescribeDBRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBRecommendationsCommandOutput/)

</details>
<details>
<summary>
DescribeDBSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBSecurityGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSecurityGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSecurityGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeDBShardGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBShardGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBShardGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBShardGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeDBSnapshotAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBSnapshotAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSnapshotAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSnapshotAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeDBSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeDBSnapshotTenantDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBSnapshotTenantDatabasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSnapshotTenantDatabasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSnapshotTenantDatabasesCommandOutput/)

</details>
<details>
<summary>
DescribeDBSubnetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeDBSubnetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSubnetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeDBSubnetGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeEngineDefaultClusterParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeEngineDefaultClusterParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEngineDefaultClusterParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEngineDefaultClusterParametersCommandOutput/)

</details>
<details>
<summary>
DescribeEngineDefaultParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeEngineDefaultParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEngineDefaultParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEngineDefaultParametersCommandOutput/)

</details>
<details>
<summary>
DescribeEventCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeEventCategoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEventCategoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEventCategoriesCommandOutput/)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEventsCommandOutput/)

</details>
<details>
<summary>
DescribeEventSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeEventSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEventSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeEventSubscriptionsCommandOutput/)

</details>
<details>
<summary>
DescribeExportTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeExportTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeExportTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeExportTasksCommandOutput/)

</details>
<details>
<summary>
DescribeGlobalClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeGlobalClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeGlobalClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeGlobalClustersCommandOutput/)

</details>
<details>
<summary>
DescribeIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeIntegrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeIntegrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeIntegrationsCommandOutput/)

</details>
<details>
<summary>
DescribeOptionGroupOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeOptionGroupOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeOptionGroupOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeOptionGroupOptionsCommandOutput/)

</details>
<details>
<summary>
DescribeOptionGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeOptionGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeOptionGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeOptionGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeOrderableDBInstanceOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeOrderableDBInstanceOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeOrderableDBInstanceOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeOrderableDBInstanceOptionsCommandOutput/)

</details>
<details>
<summary>
DescribePendingMaintenanceActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribePendingMaintenanceActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribePendingMaintenanceActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribePendingMaintenanceActionsCommandOutput/)

</details>
<details>
<summary>
DescribeReservedDBInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeReservedDBInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeReservedDBInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeReservedDBInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeReservedDBInstancesOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeReservedDBInstancesOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeReservedDBInstancesOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeReservedDBInstancesOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeSourceRegions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeSourceRegionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeSourceRegionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeSourceRegionsCommandOutput/)

</details>
<details>
<summary>
DescribeTenantDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeTenantDatabasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeTenantDatabasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeTenantDatabasesCommandOutput/)

</details>
<details>
<summary>
DescribeValidDBInstanceModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DescribeValidDBInstanceModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeValidDBInstanceModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DescribeValidDBInstanceModificationsCommandOutput/)

</details>
<details>
<summary>
DisableHttpEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DisableHttpEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DisableHttpEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DisableHttpEndpointCommandOutput/)

</details>
<details>
<summary>
DownloadDBLogFilePortion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/DownloadDBLogFilePortionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DownloadDBLogFilePortionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/DownloadDBLogFilePortionCommandOutput/)

</details>
<details>
<summary>
EnableHttpEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/EnableHttpEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/EnableHttpEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/EnableHttpEndpointCommandOutput/)

</details>
<details>
<summary>
FailoverDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/FailoverDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/FailoverDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/FailoverDBClusterCommandOutput/)

</details>
<details>
<summary>
FailoverGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/FailoverGlobalClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/FailoverGlobalClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/FailoverGlobalClusterCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ModifyActivityStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyActivityStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyActivityStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyActivityStreamCommandOutput/)

</details>
<details>
<summary>
ModifyCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyCertificatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyCertificatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyCertificatesCommandOutput/)

</details>
<details>
<summary>
ModifyCurrentDBClusterCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyCurrentDBClusterCapacityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyCurrentDBClusterCapacityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyCurrentDBClusterCapacityCommandOutput/)

</details>
<details>
<summary>
ModifyCustomDBEngineVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyCustomDBEngineVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyCustomDBEngineVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyCustomDBEngineVersionCommandOutput/)

</details>
<details>
<summary>
ModifyDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBClusterCommandOutput/)

</details>
<details>
<summary>
ModifyDBClusterEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBClusterEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBClusterEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBClusterEndpointCommandOutput/)

</details>
<details>
<summary>
ModifyDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
ModifyDBClusterSnapshotAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBClusterSnapshotAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBClusterSnapshotAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBClusterSnapshotAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBInstanceCommandOutput/)

</details>
<details>
<summary>
ModifyDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBParameterGroupCommandOutput/)

</details>
<details>
<summary>
ModifyDBProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBProxyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBProxyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBProxyCommandOutput/)

</details>
<details>
<summary>
ModifyDBProxyEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBProxyEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBProxyEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBProxyEndpointCommandOutput/)

</details>
<details>
<summary>
ModifyDBProxyTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBProxyTargetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBProxyTargetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBProxyTargetGroupCommandOutput/)

</details>
<details>
<summary>
ModifyDBRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBRecommendationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBRecommendationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBRecommendationCommandOutput/)

</details>
<details>
<summary>
ModifyDBShardGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBShardGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBShardGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBShardGroupCommandOutput/)

</details>
<details>
<summary>
ModifyDBSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBSnapshotCommandOutput/)

</details>
<details>
<summary>
ModifyDBSnapshotAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBSnapshotAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBSnapshotAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBSnapshotAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyDBSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyDBSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyDBSubnetGroupCommandOutput/)

</details>
<details>
<summary>
ModifyEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyEventSubscriptionCommandOutput/)

</details>
<details>
<summary>
ModifyGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyGlobalClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyGlobalClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyGlobalClusterCommandOutput/)

</details>
<details>
<summary>
ModifyIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyIntegrationCommandOutput/)

</details>
<details>
<summary>
ModifyOptionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyOptionGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyOptionGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyOptionGroupCommandOutput/)

</details>
<details>
<summary>
ModifyTenantDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ModifyTenantDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyTenantDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ModifyTenantDatabaseCommandOutput/)

</details>
<details>
<summary>
PromoteReadReplica
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/PromoteReadReplicaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/PromoteReadReplicaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/PromoteReadReplicaCommandOutput/)

</details>
<details>
<summary>
PromoteReadReplicaDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/PromoteReadReplicaDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/PromoteReadReplicaDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/PromoteReadReplicaDBClusterCommandOutput/)

</details>
<details>
<summary>
PurchaseReservedDBInstancesOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/PurchaseReservedDBInstancesOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/PurchaseReservedDBInstancesOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/PurchaseReservedDBInstancesOfferingCommandOutput/)

</details>
<details>
<summary>
RebootDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RebootDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RebootDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RebootDBClusterCommandOutput/)

</details>
<details>
<summary>
RebootDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RebootDBInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RebootDBInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RebootDBInstanceCommandOutput/)

</details>
<details>
<summary>
RebootDBShardGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RebootDBShardGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RebootDBShardGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RebootDBShardGroupCommandOutput/)

</details>
<details>
<summary>
RegisterDBProxyTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RegisterDBProxyTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RegisterDBProxyTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RegisterDBProxyTargetsCommandOutput/)

</details>
<details>
<summary>
RemoveFromGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RemoveFromGlobalClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveFromGlobalClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveFromGlobalClusterCommandOutput/)

</details>
<details>
<summary>
RemoveRoleFromDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RemoveRoleFromDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveRoleFromDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveRoleFromDBClusterCommandOutput/)

</details>
<details>
<summary>
RemoveRoleFromDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RemoveRoleFromDBInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveRoleFromDBInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveRoleFromDBInstanceCommandOutput/)

</details>
<details>
<summary>
RemoveSourceIdentifierFromSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RemoveSourceIdentifierFromSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveSourceIdentifierFromSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveSourceIdentifierFromSubscriptionCommandOutput/)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RemoveTagsFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveTagsFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RemoveTagsFromResourceCommandOutput/)

</details>
<details>
<summary>
ResetDBClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ResetDBClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ResetDBClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ResetDBClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
ResetDBParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/ResetDBParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ResetDBParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/ResetDBParameterGroupCommandOutput/)

</details>
<details>
<summary>
RestoreDBClusterFromS3
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RestoreDBClusterFromS3Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBClusterFromS3CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBClusterFromS3CommandOutput/)

</details>
<details>
<summary>
RestoreDBClusterFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RestoreDBClusterFromSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBClusterFromSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBClusterFromSnapshotCommandOutput/)

</details>
<details>
<summary>
RestoreDBClusterToPointInTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RestoreDBClusterToPointInTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBClusterToPointInTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBClusterToPointInTimeCommandOutput/)

</details>
<details>
<summary>
RestoreDBInstanceFromDBSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RestoreDBInstanceFromDBSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBInstanceFromDBSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBInstanceFromDBSnapshotCommandOutput/)

</details>
<details>
<summary>
RestoreDBInstanceFromS3
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RestoreDBInstanceFromS3Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBInstanceFromS3CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBInstanceFromS3CommandOutput/)

</details>
<details>
<summary>
RestoreDBInstanceToPointInTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RestoreDBInstanceToPointInTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBInstanceToPointInTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RestoreDBInstanceToPointInTimeCommandOutput/)

</details>
<details>
<summary>
RevokeDBSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/RevokeDBSecurityGroupIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RevokeDBSecurityGroupIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/RevokeDBSecurityGroupIngressCommandOutput/)

</details>
<details>
<summary>
StartActivityStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StartActivityStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartActivityStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartActivityStreamCommandOutput/)

</details>
<details>
<summary>
StartDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StartDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartDBClusterCommandOutput/)

</details>
<details>
<summary>
StartDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StartDBInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartDBInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartDBInstanceCommandOutput/)

</details>
<details>
<summary>
StartDBInstanceAutomatedBackupsReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StartDBInstanceAutomatedBackupsReplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartDBInstanceAutomatedBackupsReplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartDBInstanceAutomatedBackupsReplicationCommandOutput/)

</details>
<details>
<summary>
StartExportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StartExportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartExportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StartExportTaskCommandOutput/)

</details>
<details>
<summary>
StopActivityStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StopActivityStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StopActivityStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StopActivityStreamCommandOutput/)

</details>
<details>
<summary>
StopDBCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StopDBClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StopDBClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StopDBClusterCommandOutput/)

</details>
<details>
<summary>
StopDBInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StopDBInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StopDBInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StopDBInstanceCommandOutput/)

</details>
<details>
<summary>
StopDBInstanceAutomatedBackupsReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/StopDBInstanceAutomatedBackupsReplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StopDBInstanceAutomatedBackupsReplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/StopDBInstanceAutomatedBackupsReplicationCommandOutput/)

</details>
<details>
<summary>
SwitchoverBlueGreenDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/SwitchoverBlueGreenDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/SwitchoverBlueGreenDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/SwitchoverBlueGreenDeploymentCommandOutput/)

</details>
<details>
<summary>
SwitchoverGlobalCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/SwitchoverGlobalClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/SwitchoverGlobalClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/SwitchoverGlobalClusterCommandOutput/)

</details>
<details>
<summary>
SwitchoverReadReplica
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/rds/command/SwitchoverReadReplicaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/SwitchoverReadReplicaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds/Interface/SwitchoverReadReplicaCommandOutput/)

</details>
