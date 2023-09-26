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

To install the this package, simply type add or install @aws-sdk/client-database-migration-service
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
const {
  DatabaseMigrationServiceClient,
  ListTagsForResourceCommand,
} = require("@aws-sdk/client-database-migration-service");
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/addtagstoresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/addtagstoresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/addtagstoresourcecommandoutput.html)

</details>
<details>
<summary>
ApplyPendingMaintenanceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/applypendingmaintenanceactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/applypendingmaintenanceactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/applypendingmaintenanceactioncommandoutput.html)

</details>
<details>
<summary>
BatchStartRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/batchstartrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/batchstartrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/batchstartrecommendationscommandoutput.html)

</details>
<details>
<summary>
CancelReplicationTaskAssessmentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/cancelreplicationtaskassessmentruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/cancelreplicationtaskassessmentruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/cancelreplicationtaskassessmentruncommandoutput.html)

</details>
<details>
<summary>
CreateDataProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createdataprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createdataprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createdataprovidercommandoutput.html)

</details>
<details>
<summary>
CreateEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createendpointcommandoutput.html)

</details>
<details>
<summary>
CreateEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
CreateFleetAdvisorCollector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createfleetadvisorcollectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createfleetadvisorcollectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createfleetadvisorcollectorcommandoutput.html)

</details>
<details>
<summary>
CreateInstanceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createinstanceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createinstanceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createinstanceprofilecommandoutput.html)

</details>
<details>
<summary>
CreateMigrationProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createmigrationprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createmigrationprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createmigrationprojectcommandoutput.html)

</details>
<details>
<summary>
CreateReplicationConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createreplicationconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createreplicationconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createreplicationconfigcommandoutput.html)

</details>
<details>
<summary>
CreateReplicationInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createreplicationinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createreplicationinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createreplicationinstancecommandoutput.html)

</details>
<details>
<summary>
CreateReplicationSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createreplicationsubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createreplicationsubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createreplicationsubnetgroupcommandoutput.html)

</details>
<details>
<summary>
CreateReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/createreplicationtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createreplicationtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/createreplicationtaskcommandoutput.html)

</details>
<details>
<summary>
DeleteCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletecertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletecertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletecertificatecommandoutput.html)

</details>
<details>
<summary>
DeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deleteconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deleteconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deleteconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteDataProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletedataprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletedataprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletedataprovidercommandoutput.html)

</details>
<details>
<summary>
DeleteEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deleteendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deleteendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deleteendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deleteeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deleteeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deleteeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
DeleteFleetAdvisorCollector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletefleetadvisorcollectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletefleetadvisorcollectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletefleetadvisorcollectorcommandoutput.html)

</details>
<details>
<summary>
DeleteFleetAdvisorDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletefleetadvisordatabasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletefleetadvisordatabasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletefleetadvisordatabasescommandoutput.html)

</details>
<details>
<summary>
DeleteInstanceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deleteinstanceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deleteinstanceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deleteinstanceprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteMigrationProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletemigrationprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletemigrationprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletemigrationprojectcommandoutput.html)

</details>
<details>
<summary>
DeleteReplicationConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletereplicationconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteReplicationInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletereplicationinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationinstancecommandoutput.html)

</details>
<details>
<summary>
DeleteReplicationSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletereplicationsubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationsubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationsubnetgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletereplicationtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationtaskcommandoutput.html)

</details>
<details>
<summary>
DeleteReplicationTaskAssessmentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/deletereplicationtaskassessmentruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationtaskassessmentruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/deletereplicationtaskassessmentruncommandoutput.html)

</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeaccountattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeaccountattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeaccountattributescommandoutput.html)

</details>
<details>
<summary>
DescribeApplicableIndividualAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeapplicableindividualassessmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeapplicableindividualassessmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeapplicableindividualassessmentscommandoutput.html)

</details>
<details>
<summary>
DescribeCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describecertificatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describecertificatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describecertificatescommandoutput.html)

</details>
<details>
<summary>
DescribeConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeconnectionscommandoutput.html)

</details>
<details>
<summary>
DescribeConversionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeconversionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeconversionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeconversionconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeDataProviders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describedataproviderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describedataproviderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describedataproviderscommandoutput.html)

</details>
<details>
<summary>
DescribeEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeendpointscommandoutput.html)

</details>
<details>
<summary>
DescribeEndpointSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeendpointsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeendpointsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeendpointsettingscommandoutput.html)

</details>
<details>
<summary>
DescribeEndpointTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeendpointtypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeendpointtypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeendpointtypescommandoutput.html)

</details>
<details>
<summary>
DescribeEngineVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeengineversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeengineversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeengineversionscommandoutput.html)

</details>
<details>
<summary>
DescribeEventCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeeventcategoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeeventcategoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeeventcategoriescommandoutput.html)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeeventscommandoutput.html)

</details>
<details>
<summary>
DescribeEventSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeeventsubscriptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeeventsubscriptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeeventsubscriptionscommandoutput.html)

</details>
<details>
<summary>
DescribeExtensionPackAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeextensionpackassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeextensionpackassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeextensionpackassociationscommandoutput.html)

</details>
<details>
<summary>
DescribeFleetAdvisorCollectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describefleetadvisorcollectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisorcollectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisorcollectorscommandoutput.html)

</details>
<details>
<summary>
DescribeFleetAdvisorDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describefleetadvisordatabasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisordatabasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisordatabasescommandoutput.html)

</details>
<details>
<summary>
DescribeFleetAdvisorLsaAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describefleetadvisorlsaanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisorlsaanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisorlsaanalysiscommandoutput.html)

</details>
<details>
<summary>
DescribeFleetAdvisorSchemaObjectSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describefleetadvisorschemaobjectsummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisorschemaobjectsummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisorschemaobjectsummarycommandoutput.html)

</details>
<details>
<summary>
DescribeFleetAdvisorSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describefleetadvisorschemascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisorschemascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describefleetadvisorschemascommandoutput.html)

</details>
<details>
<summary>
DescribeInstanceProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeinstanceprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeinstanceprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeinstanceprofilescommandoutput.html)

</details>
<details>
<summary>
DescribeMetadataModelAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describemetadatamodelassessmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelassessmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelassessmentscommandoutput.html)

</details>
<details>
<summary>
DescribeMetadataModelConversions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describemetadatamodelconversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelconversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelconversionscommandoutput.html)

</details>
<details>
<summary>
DescribeMetadataModelExportsAsScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describemetadatamodelexportsasscriptcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelexportsasscriptcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelexportsasscriptcommandoutput.html)

</details>
<details>
<summary>
DescribeMetadataModelExportsToTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describemetadatamodelexportstotargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelexportstotargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelexportstotargetcommandoutput.html)

</details>
<details>
<summary>
DescribeMetadataModelImports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describemetadatamodelimportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelimportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemetadatamodelimportscommandoutput.html)

</details>
<details>
<summary>
DescribeMigrationProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describemigrationprojectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemigrationprojectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describemigrationprojectscommandoutput.html)

</details>
<details>
<summary>
DescribeOrderableReplicationInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeorderablereplicationinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeorderablereplicationinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeorderablereplicationinstancescommandoutput.html)

</details>
<details>
<summary>
DescribePendingMaintenanceActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describependingmaintenanceactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describependingmaintenanceactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describependingmaintenanceactionscommandoutput.html)

</details>
<details>
<summary>
DescribeRecommendationLimitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describerecommendationlimitationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describerecommendationlimitationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describerecommendationlimitationscommandoutput.html)

</details>
<details>
<summary>
DescribeRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describerecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describerecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describerecommendationscommandoutput.html)

</details>
<details>
<summary>
DescribeRefreshSchemasStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describerefreshschemasstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describerefreshschemasstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describerefreshschemasstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationconfigscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationinstancescommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationInstanceTaskLogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationinstancetasklogscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationinstancetasklogscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationinstancetasklogscommandoutput.html)

</details>
<details>
<summary>
DescribeReplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationSubnetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationsubnetgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationsubnetgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationsubnetgroupscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationTableStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationtablestatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtablestatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtablestatisticscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationTaskAssessmentResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationtaskassessmentresultscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtaskassessmentresultscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtaskassessmentresultscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationTaskAssessmentRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationtaskassessmentrunscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtaskassessmentrunscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtaskassessmentrunscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationTaskIndividualAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationtaskindividualassessmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtaskindividualassessmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtaskindividualassessmentscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describereplicationtaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describereplicationtaskscommandoutput.html)

</details>
<details>
<summary>
DescribeSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describeschemascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeschemascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describeschemascommandoutput.html)

</details>
<details>
<summary>
DescribeTableStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/describetablestatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describetablestatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/describetablestatisticscommandoutput.html)

</details>
<details>
<summary>
ExportMetadataModelAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/exportmetadatamodelassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/exportmetadatamodelassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/exportmetadatamodelassessmentcommandoutput.html)

</details>
<details>
<summary>
ImportCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/importcertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/importcertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/importcertificatecommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ModifyConversionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifyconversionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyconversionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyconversionconfigurationcommandoutput.html)

</details>
<details>
<summary>
ModifyDataProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifydataprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifydataprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifydataprovidercommandoutput.html)

</details>
<details>
<summary>
ModifyEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifyendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyendpointcommandoutput.html)

</details>
<details>
<summary>
ModifyEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifyeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
ModifyInstanceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifyinstanceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyinstanceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyinstanceprofilecommandoutput.html)

</details>
<details>
<summary>
ModifyMigrationProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifymigrationprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifymigrationprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifymigrationprojectcommandoutput.html)

</details>
<details>
<summary>
ModifyReplicationConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifyreplicationconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyreplicationconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyreplicationconfigcommandoutput.html)

</details>
<details>
<summary>
ModifyReplicationInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifyreplicationinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyreplicationinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyreplicationinstancecommandoutput.html)

</details>
<details>
<summary>
ModifyReplicationSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifyreplicationsubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyreplicationsubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyreplicationsubnetgroupcommandoutput.html)

</details>
<details>
<summary>
ModifyReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/modifyreplicationtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyreplicationtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/modifyreplicationtaskcommandoutput.html)

</details>
<details>
<summary>
MoveReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/movereplicationtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/movereplicationtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/movereplicationtaskcommandoutput.html)

</details>
<details>
<summary>
RebootReplicationInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/rebootreplicationinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/rebootreplicationinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/rebootreplicationinstancecommandoutput.html)

</details>
<details>
<summary>
RefreshSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/refreshschemascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/refreshschemascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/refreshschemascommandoutput.html)

</details>
<details>
<summary>
ReloadReplicationTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/reloadreplicationtablescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/reloadreplicationtablescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/reloadreplicationtablescommandoutput.html)

</details>
<details>
<summary>
ReloadTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/reloadtablescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/reloadtablescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/reloadtablescommandoutput.html)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/removetagsfromresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/removetagsfromresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/removetagsfromresourcecommandoutput.html)

</details>
<details>
<summary>
RunFleetAdvisorLsaAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/runfleetadvisorlsaanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/runfleetadvisorlsaanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/runfleetadvisorlsaanalysiscommandoutput.html)

</details>
<details>
<summary>
StartExtensionPackAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startextensionpackassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startextensionpackassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startextensionpackassociationcommandoutput.html)

</details>
<details>
<summary>
StartMetadataModelAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startmetadatamodelassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelassessmentcommandoutput.html)

</details>
<details>
<summary>
StartMetadataModelConversion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startmetadatamodelconversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelconversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelconversioncommandoutput.html)

</details>
<details>
<summary>
StartMetadataModelExportAsScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startmetadatamodelexportasscriptcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelexportasscriptcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelexportasscriptcommandoutput.html)

</details>
<details>
<summary>
StartMetadataModelExportToTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startmetadatamodelexporttotargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelexporttotargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelexporttotargetcommandoutput.html)

</details>
<details>
<summary>
StartMetadataModelImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startmetadatamodelimportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelimportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startmetadatamodelimportcommandoutput.html)

</details>
<details>
<summary>
StartRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startrecommendationscommandoutput.html)

</details>
<details>
<summary>
StartReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startreplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startreplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startreplicationcommandoutput.html)

</details>
<details>
<summary>
StartReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startreplicationtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startreplicationtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startreplicationtaskcommandoutput.html)

</details>
<details>
<summary>
StartReplicationTaskAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startreplicationtaskassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startreplicationtaskassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startreplicationtaskassessmentcommandoutput.html)

</details>
<details>
<summary>
StartReplicationTaskAssessmentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/startreplicationtaskassessmentruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startreplicationtaskassessmentruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/startreplicationtaskassessmentruncommandoutput.html)

</details>
<details>
<summary>
StopReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/stopreplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/stopreplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/stopreplicationcommandoutput.html)

</details>
<details>
<summary>
StopReplicationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/stopreplicationtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/stopreplicationtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/stopreplicationtaskcommandoutput.html)

</details>
<details>
<summary>
TestConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/testconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/testconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/testconnectioncommandoutput.html)

</details>
<details>
<summary>
UpdateSubscriptionsToEventBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/classes/updatesubscriptionstoeventbridgecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/updatesubscriptionstoeventbridgecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-database-migration-service/interfaces/updatesubscriptionstoeventbridgecommandoutput.html)

</details>
