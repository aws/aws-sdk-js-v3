<!-- generated file, do not edit directly -->

# @aws-sdk/client-lakeformation

## Description

AWS SDK for JavaScript LakeFormation Client for Node.js, Browser and React Native.

<fullname>Lake Formation</fullname>

<p>Defines the public endpoint for the Lake Formation service.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-lakeformation
using your favorite package manager:

- `npm install @aws-sdk/client-lakeformation`
- `yarn add @aws-sdk/client-lakeformation`
- `pnpm add @aws-sdk/client-lakeformation`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LakeFormationClient` and
the commands you need, for example `ListLFTagsCommand`:

```js
// ES5 example
const { LakeFormationClient, ListLFTagsCommand } = require("@aws-sdk/client-lakeformation");
```

```ts
// ES6+ example
import { LakeFormationClient, ListLFTagsCommand } from "@aws-sdk/client-lakeformation";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LakeFormationClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListLFTagsCommand(params);
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
import * as AWS from "@aws-sdk/client-lakeformation";
const client = new AWS.LakeFormation({ region: "REGION" });

// async/await.
try {
  const data = await client.listLFTags(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listLFTags(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listLFTags(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lakeformation` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddLFTagsToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/addlftagstoresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/addlftagstoresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/addlftagstoresourcecommandoutput.html)

</details>
<details>
<summary>
AssumeDecoratedRoleWithSAML
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/assumedecoratedrolewithsamlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/assumedecoratedrolewithsamlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/assumedecoratedrolewithsamlcommandoutput.html)

</details>
<details>
<summary>
BatchGrantPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/batchgrantpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/batchgrantpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/batchgrantpermissionscommandoutput.html)

</details>
<details>
<summary>
BatchRevokePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/batchrevokepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/batchrevokepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/batchrevokepermissionscommandoutput.html)

</details>
<details>
<summary>
CancelTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/canceltransactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/canceltransactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/canceltransactioncommandoutput.html)

</details>
<details>
<summary>
CommitTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/committransactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/committransactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/committransactioncommandoutput.html)

</details>
<details>
<summary>
CreateDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/createdatacellsfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/createdatacellsfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/createdatacellsfiltercommandoutput.html)

</details>
<details>
<summary>
CreateLakeFormationOptIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/createlakeformationoptincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/createlakeformationoptincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/createlakeformationoptincommandoutput.html)

</details>
<details>
<summary>
CreateLFTag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/createlftagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/createlftagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/createlftagcommandoutput.html)

</details>
<details>
<summary>
DeleteDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/deletedatacellsfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deletedatacellsfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deletedatacellsfiltercommandoutput.html)

</details>
<details>
<summary>
DeleteLakeFormationOptIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/deletelakeformationoptincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deletelakeformationoptincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deletelakeformationoptincommandoutput.html)

</details>
<details>
<summary>
DeleteLFTag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/deletelftagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deletelftagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deletelftagcommandoutput.html)

</details>
<details>
<summary>
DeleteObjectsOnCancel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/deleteobjectsoncancelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deleteobjectsoncancelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deleteobjectsoncancelcommandoutput.html)

</details>
<details>
<summary>
DeregisterResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/deregisterresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deregisterresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/deregisterresourcecommandoutput.html)

</details>
<details>
<summary>
DescribeResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/describeresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/describeresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/describeresourcecommandoutput.html)

</details>
<details>
<summary>
DescribeTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/describetransactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/describetransactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/describetransactioncommandoutput.html)

</details>
<details>
<summary>
ExtendTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/extendtransactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/extendtransactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/extendtransactioncommandoutput.html)

</details>
<details>
<summary>
GetDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/getdatacellsfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getdatacellsfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getdatacellsfiltercommandoutput.html)

</details>
<details>
<summary>
GetDataLakeSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/getdatalakesettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getdatalakesettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getdatalakesettingscommandoutput.html)

</details>
<details>
<summary>
GetEffectivePermissionsForPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/geteffectivepermissionsforpathcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/geteffectivepermissionsforpathcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/geteffectivepermissionsforpathcommandoutput.html)

</details>
<details>
<summary>
GetLFTag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/getlftagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getlftagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getlftagcommandoutput.html)

</details>
<details>
<summary>
GetQueryState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/getquerystatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getquerystatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getquerystatecommandoutput.html)

</details>
<details>
<summary>
GetQueryStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/getquerystatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getquerystatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getquerystatisticscommandoutput.html)

</details>
<details>
<summary>
GetResourceLFTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/getresourcelftagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getresourcelftagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getresourcelftagscommandoutput.html)

</details>
<details>
<summary>
GetTableObjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/gettableobjectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/gettableobjectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/gettableobjectscommandoutput.html)

</details>
<details>
<summary>
GetTemporaryGluePartitionCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/gettemporarygluepartitioncredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/gettemporarygluepartitioncredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/gettemporarygluepartitioncredentialscommandoutput.html)

</details>
<details>
<summary>
GetTemporaryGlueTableCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/gettemporarygluetablecredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/gettemporarygluetablecredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/gettemporarygluetablecredentialscommandoutput.html)

</details>
<details>
<summary>
GetWorkUnitResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/getworkunitresultscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getworkunitresultscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getworkunitresultscommandoutput.html)

</details>
<details>
<summary>
GetWorkUnits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/getworkunitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getworkunitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/getworkunitscommandoutput.html)

</details>
<details>
<summary>
GrantPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/grantpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/grantpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/grantpermissionscommandoutput.html)

</details>
<details>
<summary>
ListDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/listdatacellsfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listdatacellsfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listdatacellsfiltercommandoutput.html)

</details>
<details>
<summary>
ListLakeFormationOptIns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/listlakeformationoptinscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listlakeformationoptinscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listlakeformationoptinscommandoutput.html)

</details>
<details>
<summary>
ListLFTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/listlftagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listlftagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listlftagscommandoutput.html)

</details>
<details>
<summary>
ListPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/listpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listpermissionscommandoutput.html)

</details>
<details>
<summary>
ListResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/listresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listresourcescommandoutput.html)

</details>
<details>
<summary>
ListTableStorageOptimizers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/listtablestorageoptimizerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listtablestorageoptimizerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listtablestorageoptimizerscommandoutput.html)

</details>
<details>
<summary>
ListTransactions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/listtransactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listtransactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/listtransactionscommandoutput.html)

</details>
<details>
<summary>
PutDataLakeSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/putdatalakesettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/putdatalakesettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/putdatalakesettingscommandoutput.html)

</details>
<details>
<summary>
RegisterResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/registerresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/registerresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/registerresourcecommandoutput.html)

</details>
<details>
<summary>
RemoveLFTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/removelftagsfromresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/removelftagsfromresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/removelftagsfromresourcecommandoutput.html)

</details>
<details>
<summary>
RevokePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/revokepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/revokepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/revokepermissionscommandoutput.html)

</details>
<details>
<summary>
SearchDatabasesByLFTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/searchdatabasesbylftagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/searchdatabasesbylftagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/searchdatabasesbylftagscommandoutput.html)

</details>
<details>
<summary>
SearchTablesByLFTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/searchtablesbylftagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/searchtablesbylftagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/searchtablesbylftagscommandoutput.html)

</details>
<details>
<summary>
StartQueryPlanning
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/startqueryplanningcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/startqueryplanningcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/startqueryplanningcommandoutput.html)

</details>
<details>
<summary>
StartTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/starttransactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/starttransactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/starttransactioncommandoutput.html)

</details>
<details>
<summary>
UpdateDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/updatedatacellsfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updatedatacellsfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updatedatacellsfiltercommandoutput.html)

</details>
<details>
<summary>
UpdateLFTag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/updatelftagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updatelftagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updatelftagcommandoutput.html)

</details>
<details>
<summary>
UpdateResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/updateresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updateresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updateresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateTableObjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/updatetableobjectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updatetableobjectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updatetableobjectscommandoutput.html)

</details>
<details>
<summary>
UpdateTableStorageOptimizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/classes/updatetablestorageoptimizercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updatetablestorageoptimizercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lakeformation/interfaces/updatetablestorageoptimizercommandoutput.html)

</details>
