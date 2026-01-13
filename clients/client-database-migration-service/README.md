<!-- generated file, do not edit directly -->

# @aws-sdk/client-database-migration-service

## Description

AWS SDK for JavaScript DatabaseMigrationService Client for Node.js, Browser and React Native.

<fullname>Database Migration Service</fullname>
<p>Database Migration Service (DMS) can migrate your data to and from the most
widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL
Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise
(ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as
heterogeneous migrations between different database platforms, such as Oracle to MySQL or
SQL Server to PostgreSQL.</p>
<p>For more information about DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is Database Migration Service?</a>
in the <i>Database Migration Service User Guide.</i>
</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-database-migration-service
using your favorite package manager:
- `npm install @aws-sdk/client-database-migration-service`
- `yarn add @aws-sdk/client-database-migration-service`
- `pnpm add @aws-sdk/client-database-migration-service`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DatabaseMigrationServiceClient` and
the commands you need, for example `ListTagsForResourceCommand`:

```js
// ES5 example
const { DatabaseMigrationServiceClient, ListTagsForResourceCommand } = require("@aws-sdk/client-database-migration-service");
```

```ts
// ES6+ example
import { DatabaseMigrationServiceClient, ListTagsForResourceCommand } from "@aws-sdk/client-database-migration-service";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DatabaseMigrationServiceClient({ region: "REGION" });

const params = { /** input parameters */ };
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
import * as AWS from "@aws-sdk/client-database-migration-service";
const client = new AWS.DatabaseMigrationService({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-database-migration-service` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/AddTagsToResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/AddTagsToResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/AddTagsToResourceCommandOutput/)
</details>
<details>
<summary>
ApplyPendingMaintenanceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ApplyPendingMaintenanceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ApplyPendingMaintenanceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ApplyPendingMaintenanceActionCommandOutput/)
</details>
<details>
<summary>
BatchStartRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/BatchStartRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/BatchStartRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/BatchStartRecommendationsCommandOutput/)
</details>
<details>
<summary>
CancelMetadataModelConversion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CancelMetadataModelConversionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CancelMetadataModelConversionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CancelMetadataModelConversionCommandOutput/)
</details>
<details>
<summary>
CancelMetadataModelCreation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CancelMetadataModelCreationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CancelMetadataModelCreationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CancelMetadataModelCreationCommandOutput/)
</details>
<details>
<summary>
CancelReplicationTaskAssessmentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CancelReplicationTaskAssessmentRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CancelReplicationTaskAssessmentRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CancelReplicationTaskAssessmentRunCommandOutput/)
</details>
<details>
<summary>
CreateDataMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateDataMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateDataMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateDataMigrationCommandOutput/)
</details>
<details>
<summary>
CreateDataProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateDataProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateDataProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateDataProviderCommandOutput/)
</details>
<details>
<summary>
CreateEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateEndpointCommandOutput/)
</details>
<details>
<summary>
CreateEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateEventSubscriptionCommandOutput/)
</details>
<details>
<summary>
CreateFleetAdvisorCollector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateFleetAdvisorCollectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateFleetAdvisorCollectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateFleetAdvisorCollectorCommandOutput/)
</details>
<details>
<summary>
CreateInstanceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateInstanceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateInstanceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateInstanceProfileCommandOutput/)
</details>
<details>
<summary>
CreateMigrationProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateMigrationProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateMigrationProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateMigrationProjectCommandOutput/)
</details>
<details>
<summary>
CreateReplicationConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateReplicationConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateReplicationConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateReplicationConfigCommandOutput/)
</details>
<details>
<summary>
CreateReplicationInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateReplicationInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateReplicationInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateReplicationInstanceCommandOutput/)
</details>
<details>
<summary>
CreateReplicationSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateReplicationSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateReplicationSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateReplicationSubnetGroupCommandOutput/)
</details>
<details>
<summary>
CreateReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/CreateReplicationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateReplicationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/CreateReplicationTaskCommandOutput/)
</details>
<details>
<summary>
DeleteCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteCertificateCommandOutput/)
</details>
<details>
<summary>
DeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteConnectionCommandOutput/)
</details>
<details>
<summary>
DeleteDataMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteDataMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteDataMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteDataMigrationCommandOutput/)
</details>
<details>
<summary>
DeleteDataProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteDataProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteDataProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteDataProviderCommandOutput/)
</details>
<details>
<summary>
DeleteEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteEndpointCommandOutput/)
</details>
<details>
<summary>
DeleteEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteEventSubscriptionCommandOutput/)
</details>
<details>
<summary>
DeleteFleetAdvisorCollector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteFleetAdvisorCollectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteFleetAdvisorCollectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteFleetAdvisorCollectorCommandOutput/)
</details>
<details>
<summary>
DeleteFleetAdvisorDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteFleetAdvisorDatabasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteFleetAdvisorDatabasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteFleetAdvisorDatabasesCommandOutput/)
</details>
<details>
<summary>
DeleteInstanceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteInstanceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteInstanceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteInstanceProfileCommandOutput/)
</details>
<details>
<summary>
DeleteMigrationProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteMigrationProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteMigrationProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteMigrationProjectCommandOutput/)
</details>
<details>
<summary>
DeleteReplicationConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteReplicationConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationConfigCommandOutput/)
</details>
<details>
<summary>
DeleteReplicationInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteReplicationInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationInstanceCommandOutput/)
</details>
<details>
<summary>
DeleteReplicationSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteReplicationSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationSubnetGroupCommandOutput/)
</details>
<details>
<summary>
DeleteReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteReplicationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationTaskCommandOutput/)
</details>
<details>
<summary>
DeleteReplicationTaskAssessmentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DeleteReplicationTaskAssessmentRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationTaskAssessmentRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DeleteReplicationTaskAssessmentRunCommandOutput/)
</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeAccountAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeAccountAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeAccountAttributesCommandOutput/)
</details>
<details>
<summary>
DescribeApplicableIndividualAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeApplicableIndividualAssessmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeApplicableIndividualAssessmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeApplicableIndividualAssessmentsCommandOutput/)
</details>
<details>
<summary>
DescribeCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeCertificatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeCertificatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeCertificatesCommandOutput/)
</details>
<details>
<summary>
DescribeConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeConnectionsCommandOutput/)
</details>
<details>
<summary>
DescribeConversionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeConversionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeConversionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeConversionConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeDataMigrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeDataMigrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeDataMigrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeDataMigrationsCommandOutput/)
</details>
<details>
<summary>
DescribeDataProviders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeDataProvidersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeDataProvidersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeDataProvidersCommandOutput/)
</details>
<details>
<summary>
DescribeEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEndpointsCommandOutput/)
</details>
<details>
<summary>
DescribeEndpointSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeEndpointSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEndpointSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEndpointSettingsCommandOutput/)
</details>
<details>
<summary>
DescribeEndpointTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeEndpointTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEndpointTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEndpointTypesCommandOutput/)
</details>
<details>
<summary>
DescribeEngineVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeEngineVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEngineVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEngineVersionsCommandOutput/)
</details>
<details>
<summary>
DescribeEventCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeEventCategoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEventCategoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEventCategoriesCommandOutput/)
</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEventsCommandOutput/)
</details>
<details>
<summary>
DescribeEventSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeEventSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEventSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeEventSubscriptionsCommandOutput/)
</details>
<details>
<summary>
DescribeExtensionPackAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeExtensionPackAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeExtensionPackAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeExtensionPackAssociationsCommandOutput/)
</details>
<details>
<summary>
DescribeFleetAdvisorCollectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeFleetAdvisorCollectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorCollectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorCollectorsCommandOutput/)
</details>
<details>
<summary>
DescribeFleetAdvisorDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeFleetAdvisorDatabasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorDatabasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorDatabasesCommandOutput/)
</details>
<details>
<summary>
DescribeFleetAdvisorLsaAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeFleetAdvisorLsaAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorLsaAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorLsaAnalysisCommandOutput/)
</details>
<details>
<summary>
DescribeFleetAdvisorSchemaObjectSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeFleetAdvisorSchemaObjectSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorSchemaObjectSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorSchemaObjectSummaryCommandOutput/)
</details>
<details>
<summary>
DescribeFleetAdvisorSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeFleetAdvisorSchemasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorSchemasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeFleetAdvisorSchemasCommandOutput/)
</details>
<details>
<summary>
DescribeInstanceProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeInstanceProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeInstanceProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeInstanceProfilesCommandOutput/)
</details>
<details>
<summary>
DescribeMetadataModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMetadataModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelCommandOutput/)
</details>
<details>
<summary>
DescribeMetadataModelAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMetadataModelAssessmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelAssessmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelAssessmentsCommandOutput/)
</details>
<details>
<summary>
DescribeMetadataModelChildren
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMetadataModelChildrenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelChildrenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelChildrenCommandOutput/)
</details>
<details>
<summary>
DescribeMetadataModelConversions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMetadataModelConversionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelConversionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelConversionsCommandOutput/)
</details>
<details>
<summary>
DescribeMetadataModelCreations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMetadataModelCreationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelCreationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelCreationsCommandOutput/)
</details>
<details>
<summary>
DescribeMetadataModelExportsAsScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMetadataModelExportsAsScriptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelExportsAsScriptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelExportsAsScriptCommandOutput/)
</details>
<details>
<summary>
DescribeMetadataModelExportsToTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMetadataModelExportsToTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelExportsToTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelExportsToTargetCommandOutput/)
</details>
<details>
<summary>
DescribeMetadataModelImports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMetadataModelImportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelImportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMetadataModelImportsCommandOutput/)
</details>
<details>
<summary>
DescribeMigrationProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeMigrationProjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMigrationProjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeMigrationProjectsCommandOutput/)
</details>
<details>
<summary>
DescribeOrderableReplicationInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeOrderableReplicationInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeOrderableReplicationInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeOrderableReplicationInstancesCommandOutput/)
</details>
<details>
<summary>
DescribePendingMaintenanceActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribePendingMaintenanceActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribePendingMaintenanceActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribePendingMaintenanceActionsCommandOutput/)
</details>
<details>
<summary>
DescribeRecommendationLimitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeRecommendationLimitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeRecommendationLimitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeRecommendationLimitationsCommandOutput/)
</details>
<details>
<summary>
DescribeRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeRecommendationsCommandOutput/)
</details>
<details>
<summary>
DescribeRefreshSchemasStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeRefreshSchemasStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeRefreshSchemasStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeRefreshSchemasStatusCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationConfigsCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationInstancesCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationInstanceTaskLogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationInstanceTaskLogsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationInstanceTaskLogsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationInstanceTaskLogsCommandOutput/)
</details>
<details>
<summary>
DescribeReplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationsCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationSubnetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationSubnetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationSubnetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationSubnetGroupsCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationTableStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationTableStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTableStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTableStatisticsCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationTaskAssessmentResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationTaskAssessmentResultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTaskAssessmentResultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTaskAssessmentResultsCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationTaskAssessmentRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationTaskAssessmentRunsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTaskAssessmentRunsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTaskAssessmentRunsCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationTaskIndividualAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationTaskIndividualAssessmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTaskIndividualAssessmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTaskIndividualAssessmentsCommandOutput/)
</details>
<details>
<summary>
DescribeReplicationTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeReplicationTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeReplicationTasksCommandOutput/)
</details>
<details>
<summary>
DescribeSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeSchemasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeSchemasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeSchemasCommandOutput/)
</details>
<details>
<summary>
DescribeTableStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/DescribeTableStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeTableStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/DescribeTableStatisticsCommandOutput/)
</details>
<details>
<summary>
ExportMetadataModelAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ExportMetadataModelAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ExportMetadataModelAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ExportMetadataModelAssessmentCommandOutput/)
</details>
<details>
<summary>
GetTargetSelectionRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/GetTargetSelectionRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/GetTargetSelectionRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/GetTargetSelectionRulesCommandOutput/)
</details>
<details>
<summary>
ImportCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ImportCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ImportCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ImportCertificateCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ModifyConversionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyConversionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyConversionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyConversionConfigurationCommandOutput/)
</details>
<details>
<summary>
ModifyDataMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyDataMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyDataMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyDataMigrationCommandOutput/)
</details>
<details>
<summary>
ModifyDataProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyDataProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyDataProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyDataProviderCommandOutput/)
</details>
<details>
<summary>
ModifyEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyEndpointCommandOutput/)
</details>
<details>
<summary>
ModifyEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyEventSubscriptionCommandOutput/)
</details>
<details>
<summary>
ModifyInstanceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyInstanceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyInstanceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyInstanceProfileCommandOutput/)
</details>
<details>
<summary>
ModifyMigrationProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyMigrationProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyMigrationProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyMigrationProjectCommandOutput/)
</details>
<details>
<summary>
ModifyReplicationConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyReplicationConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyReplicationConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyReplicationConfigCommandOutput/)
</details>
<details>
<summary>
ModifyReplicationInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyReplicationInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyReplicationInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyReplicationInstanceCommandOutput/)
</details>
<details>
<summary>
ModifyReplicationSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyReplicationSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyReplicationSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyReplicationSubnetGroupCommandOutput/)
</details>
<details>
<summary>
ModifyReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ModifyReplicationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyReplicationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ModifyReplicationTaskCommandOutput/)
</details>
<details>
<summary>
MoveReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/MoveReplicationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/MoveReplicationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/MoveReplicationTaskCommandOutput/)
</details>
<details>
<summary>
RebootReplicationInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/RebootReplicationInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/RebootReplicationInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/RebootReplicationInstanceCommandOutput/)
</details>
<details>
<summary>
RefreshSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/RefreshSchemasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/RefreshSchemasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/RefreshSchemasCommandOutput/)
</details>
<details>
<summary>
ReloadReplicationTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ReloadReplicationTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ReloadReplicationTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ReloadReplicationTablesCommandOutput/)
</details>
<details>
<summary>
ReloadTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/ReloadTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ReloadTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/ReloadTablesCommandOutput/)
</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/RemoveTagsFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/RemoveTagsFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/RemoveTagsFromResourceCommandOutput/)
</details>
<details>
<summary>
RunFleetAdvisorLsaAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/RunFleetAdvisorLsaAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/RunFleetAdvisorLsaAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/RunFleetAdvisorLsaAnalysisCommandOutput/)
</details>
<details>
<summary>
StartDataMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartDataMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartDataMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartDataMigrationCommandOutput/)
</details>
<details>
<summary>
StartExtensionPackAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartExtensionPackAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartExtensionPackAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartExtensionPackAssociationCommandOutput/)
</details>
<details>
<summary>
StartMetadataModelAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartMetadataModelAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelAssessmentCommandOutput/)
</details>
<details>
<summary>
StartMetadataModelConversion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartMetadataModelConversionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelConversionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelConversionCommandOutput/)
</details>
<details>
<summary>
StartMetadataModelCreation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartMetadataModelCreationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelCreationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelCreationCommandOutput/)
</details>
<details>
<summary>
StartMetadataModelExportAsScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartMetadataModelExportAsScriptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelExportAsScriptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelExportAsScriptCommandOutput/)
</details>
<details>
<summary>
StartMetadataModelExportToTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartMetadataModelExportToTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelExportToTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelExportToTargetCommandOutput/)
</details>
<details>
<summary>
StartMetadataModelImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartMetadataModelImportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelImportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartMetadataModelImportCommandOutput/)
</details>
<details>
<summary>
StartRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartRecommendationsCommandOutput/)
</details>
<details>
<summary>
StartReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartReplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartReplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartReplicationCommandOutput/)
</details>
<details>
<summary>
StartReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartReplicationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartReplicationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartReplicationTaskCommandOutput/)
</details>
<details>
<summary>
StartReplicationTaskAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartReplicationTaskAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartReplicationTaskAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartReplicationTaskAssessmentCommandOutput/)
</details>
<details>
<summary>
StartReplicationTaskAssessmentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StartReplicationTaskAssessmentRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartReplicationTaskAssessmentRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StartReplicationTaskAssessmentRunCommandOutput/)
</details>
<details>
<summary>
StopDataMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StopDataMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StopDataMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StopDataMigrationCommandOutput/)
</details>
<details>
<summary>
StopReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StopReplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StopReplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StopReplicationCommandOutput/)
</details>
<details>
<summary>
StopReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/StopReplicationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StopReplicationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/StopReplicationTaskCommandOutput/)
</details>
<details>
<summary>
TestConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/TestConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/TestConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/TestConnectionCommandOutput/)
</details>
<details>
<summary>
UpdateSubscriptionsToEventBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/database-migration-service/command/UpdateSubscriptionsToEventBridgeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/UpdateSubscriptionsToEventBridgeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-database-migration-service/Interface/UpdateSubscriptionsToEventBridgeCommandOutput/)
</details>
