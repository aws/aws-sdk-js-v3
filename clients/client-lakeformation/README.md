<!-- generated file, do not edit directly -->

# @aws-sdk/client-lakeformation

## Description

AWS SDK for JavaScript LakeFormation Client for Node.js, Browser and React Native.

<fullname>Lake Formation</fullname>

<p>Defines the public endpoint for the Lake Formation service.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-lakeformation
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/AddLFTagsToResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/AddLFTagsToResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/AddLFTagsToResourceCommandOutput/)

</details>
<details>
<summary>
AssumeDecoratedRoleWithSAML
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/AssumeDecoratedRoleWithSAMLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/AssumeDecoratedRoleWithSAMLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/AssumeDecoratedRoleWithSAMLCommandOutput/)

</details>
<details>
<summary>
BatchGrantPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/BatchGrantPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/BatchGrantPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/BatchGrantPermissionsCommandOutput/)

</details>
<details>
<summary>
BatchRevokePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/BatchRevokePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/BatchRevokePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/BatchRevokePermissionsCommandOutput/)

</details>
<details>
<summary>
CancelTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/CancelTransactionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CancelTransactionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CancelTransactionCommandOutput/)

</details>
<details>
<summary>
CommitTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/CommitTransactionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CommitTransactionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CommitTransactionCommandOutput/)

</details>
<details>
<summary>
CreateDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/CreateDataCellsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CreateDataCellsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CreateDataCellsFilterCommandOutput/)

</details>
<details>
<summary>
CreateLakeFormationIdentityCenterConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/CreateLakeFormationIdentityCenterConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CreateLakeFormationIdentityCenterConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CreateLakeFormationIdentityCenterConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateLakeFormationOptIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/CreateLakeFormationOptInCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CreateLakeFormationOptInCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CreateLakeFormationOptInCommandOutput/)

</details>
<details>
<summary>
CreateLFTag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/CreateLFTagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CreateLFTagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/CreateLFTagCommandOutput/)

</details>
<details>
<summary>
DeleteDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DeleteDataCellsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteDataCellsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteDataCellsFilterCommandOutput/)

</details>
<details>
<summary>
DeleteLakeFormationIdentityCenterConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DeleteLakeFormationIdentityCenterConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteLakeFormationIdentityCenterConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteLakeFormationIdentityCenterConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteLakeFormationOptIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DeleteLakeFormationOptInCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteLakeFormationOptInCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteLakeFormationOptInCommandOutput/)

</details>
<details>
<summary>
DeleteLFTag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DeleteLFTagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteLFTagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteLFTagCommandOutput/)

</details>
<details>
<summary>
DeleteObjectsOnCancel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DeleteObjectsOnCancelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteObjectsOnCancelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeleteObjectsOnCancelCommandOutput/)

</details>
<details>
<summary>
DeregisterResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DeregisterResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeregisterResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DeregisterResourceCommandOutput/)

</details>
<details>
<summary>
DescribeLakeFormationIdentityCenterConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DescribeLakeFormationIdentityCenterConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DescribeLakeFormationIdentityCenterConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DescribeLakeFormationIdentityCenterConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DescribeResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DescribeResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DescribeResourceCommandOutput/)

</details>
<details>
<summary>
DescribeTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/DescribeTransactionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DescribeTransactionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/DescribeTransactionCommandOutput/)

</details>
<details>
<summary>
ExtendTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/ExtendTransactionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ExtendTransactionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ExtendTransactionCommandOutput/)

</details>
<details>
<summary>
GetDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetDataCellsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetDataCellsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetDataCellsFilterCommandOutput/)

</details>
<details>
<summary>
GetDataLakePrincipal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetDataLakePrincipalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetDataLakePrincipalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetDataLakePrincipalCommandOutput/)

</details>
<details>
<summary>
GetDataLakeSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetDataLakeSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetDataLakeSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetDataLakeSettingsCommandOutput/)

</details>
<details>
<summary>
GetEffectivePermissionsForPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetEffectivePermissionsForPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetEffectivePermissionsForPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetEffectivePermissionsForPathCommandOutput/)

</details>
<details>
<summary>
GetLFTag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetLFTagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetLFTagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetLFTagCommandOutput/)

</details>
<details>
<summary>
GetQueryState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetQueryStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetQueryStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetQueryStateCommandOutput/)

</details>
<details>
<summary>
GetQueryStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetQueryStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetQueryStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetQueryStatisticsCommandOutput/)

</details>
<details>
<summary>
GetResourceLFTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetResourceLFTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetResourceLFTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetResourceLFTagsCommandOutput/)

</details>
<details>
<summary>
GetTableObjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetTableObjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetTableObjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetTableObjectsCommandOutput/)

</details>
<details>
<summary>
GetTemporaryGluePartitionCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetTemporaryGluePartitionCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetTemporaryGluePartitionCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetTemporaryGluePartitionCredentialsCommandOutput/)

</details>
<details>
<summary>
GetTemporaryGlueTableCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetTemporaryGlueTableCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetTemporaryGlueTableCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetTemporaryGlueTableCredentialsCommandOutput/)

</details>
<details>
<summary>
GetWorkUnitResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetWorkUnitResultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetWorkUnitResultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetWorkUnitResultsCommandOutput/)

</details>
<details>
<summary>
GetWorkUnits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GetWorkUnitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetWorkUnitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GetWorkUnitsCommandOutput/)

</details>
<details>
<summary>
GrantPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/GrantPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GrantPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/GrantPermissionsCommandOutput/)

</details>
<details>
<summary>
ListDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/ListDataCellsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListDataCellsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListDataCellsFilterCommandOutput/)

</details>
<details>
<summary>
ListLakeFormationOptIns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/ListLakeFormationOptInsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListLakeFormationOptInsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListLakeFormationOptInsCommandOutput/)

</details>
<details>
<summary>
ListLFTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/ListLFTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListLFTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListLFTagsCommandOutput/)

</details>
<details>
<summary>
ListPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/ListPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListPermissionsCommandOutput/)

</details>
<details>
<summary>
ListResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/ListResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListResourcesCommandOutput/)

</details>
<details>
<summary>
ListTableStorageOptimizers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/ListTableStorageOptimizersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListTableStorageOptimizersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListTableStorageOptimizersCommandOutput/)

</details>
<details>
<summary>
ListTransactions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/ListTransactionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListTransactionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/ListTransactionsCommandOutput/)

</details>
<details>
<summary>
PutDataLakeSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/PutDataLakeSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/PutDataLakeSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/PutDataLakeSettingsCommandOutput/)

</details>
<details>
<summary>
RegisterResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/RegisterResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/RegisterResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/RegisterResourceCommandOutput/)

</details>
<details>
<summary>
RemoveLFTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/RemoveLFTagsFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/RemoveLFTagsFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/RemoveLFTagsFromResourceCommandOutput/)

</details>
<details>
<summary>
RevokePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/RevokePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/RevokePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/RevokePermissionsCommandOutput/)

</details>
<details>
<summary>
SearchDatabasesByLFTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/SearchDatabasesByLFTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/SearchDatabasesByLFTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/SearchDatabasesByLFTagsCommandOutput/)

</details>
<details>
<summary>
SearchTablesByLFTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/SearchTablesByLFTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/SearchTablesByLFTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/SearchTablesByLFTagsCommandOutput/)

</details>
<details>
<summary>
StartQueryPlanning
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/StartQueryPlanningCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/StartQueryPlanningCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/StartQueryPlanningCommandOutput/)

</details>
<details>
<summary>
StartTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/StartTransactionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/StartTransactionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/StartTransactionCommandOutput/)

</details>
<details>
<summary>
UpdateDataCellsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/UpdateDataCellsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateDataCellsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateDataCellsFilterCommandOutput/)

</details>
<details>
<summary>
UpdateLakeFormationIdentityCenterConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/UpdateLakeFormationIdentityCenterConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateLakeFormationIdentityCenterConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateLakeFormationIdentityCenterConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateLFTag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/UpdateLFTagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateLFTagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateLFTagCommandOutput/)

</details>
<details>
<summary>
UpdateResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/UpdateResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateResourceCommandOutput/)

</details>
<details>
<summary>
UpdateTableObjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/UpdateTableObjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateTableObjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateTableObjectsCommandOutput/)

</details>
<details>
<summary>
UpdateTableStorageOptimizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lakeformation/command/UpdateTableStorageOptimizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateTableStorageOptimizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lakeformation/Interface/UpdateTableStorageOptimizerCommandOutput/)

</details>
