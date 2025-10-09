<!-- generated file, do not edit directly -->

# @aws-sdk/client-quicksight

## Description

AWS SDK for JavaScript QuickSight Client for Node.js, Browser and React Native.

<fullname>Amazon QuickSight API Reference</fullname>

<p>Amazon Quick Sight is a fully managed, serverless business intelligence service for the
Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your
organization. This API reference contains documentation for a programming interface that
you can use to manage Amazon Quick Sight. </p>

## Installing

To install this package, simply type add or install @aws-sdk/client-quicksight
using your favorite package manager:

- `npm install @aws-sdk/client-quicksight`
- `yarn add @aws-sdk/client-quicksight`
- `pnpm add @aws-sdk/client-quicksight`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `QuickSightClient` and
the commands you need, for example `ListBrandsCommand`:

```js
// ES5 example
const { QuickSightClient, ListBrandsCommand } = require("@aws-sdk/client-quicksight");
```

```ts
// ES6+ example
import { QuickSightClient, ListBrandsCommand } from "@aws-sdk/client-quicksight";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new QuickSightClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListBrandsCommand(params);
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
import * as AWS from "@aws-sdk/client-quicksight";
const client = new AWS.QuickSight({ region: "REGION" });

// async/await.
try {
  const data = await client.listBrands(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBrands(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBrands(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-quicksight` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchCreateTopicReviewedAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/BatchCreateTopicReviewedAnswerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/BatchCreateTopicReviewedAnswerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/BatchCreateTopicReviewedAnswerCommandOutput/)

</details>
<details>
<summary>
BatchDeleteTopicReviewedAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/BatchDeleteTopicReviewedAnswerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/BatchDeleteTopicReviewedAnswerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/BatchDeleteTopicReviewedAnswerCommandOutput/)

</details>
<details>
<summary>
CancelIngestion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CancelIngestionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CancelIngestionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CancelIngestionCommandOutput/)

</details>
<details>
<summary>
CreateAccountCustomization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateAccountCustomizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateAccountCustomizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateAccountCustomizationCommandOutput/)

</details>
<details>
<summary>
CreateAccountSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateAccountSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateAccountSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateAccountSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateActionConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateActionConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateActionConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateActionConnectorCommandOutput/)

</details>
<details>
<summary>
CreateAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateAnalysisCommandOutput/)

</details>
<details>
<summary>
CreateBrand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateBrandCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateBrandCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateBrandCommandOutput/)

</details>
<details>
<summary>
CreateCustomPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateCustomPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateCustomPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateCustomPermissionsCommandOutput/)

</details>
<details>
<summary>
CreateDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateDashboardCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateDashboardCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateDashboardCommandOutput/)

</details>
<details>
<summary>
CreateDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateDataSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateDataSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateDataSetCommandOutput/)

</details>
<details>
<summary>
CreateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateDataSourceCommandOutput/)

</details>
<details>
<summary>
CreateFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateFolderCommandOutput/)

</details>
<details>
<summary>
CreateFolderMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateFolderMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateFolderMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateFolderMembershipCommandOutput/)

</details>
<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateGroupCommandOutput/)

</details>
<details>
<summary>
CreateGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateGroupMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateGroupMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateGroupMembershipCommandOutput/)

</details>
<details>
<summary>
CreateIAMPolicyAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateIAMPolicyAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateIAMPolicyAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateIAMPolicyAssignmentCommandOutput/)

</details>
<details>
<summary>
CreateIngestion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateIngestionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateIngestionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateIngestionCommandOutput/)

</details>
<details>
<summary>
CreateNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateNamespaceCommandOutput/)

</details>
<details>
<summary>
CreateRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateRefreshScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateRefreshScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateRefreshScheduleCommandOutput/)

</details>
<details>
<summary>
CreateRoleMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateRoleMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateRoleMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateRoleMembershipCommandOutput/)

</details>
<details>
<summary>
CreateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateTemplateCommandOutput/)

</details>
<details>
<summary>
CreateTemplateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateTemplateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateTemplateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateTemplateAliasCommandOutput/)

</details>
<details>
<summary>
CreateTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateThemeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateThemeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateThemeCommandOutput/)

</details>
<details>
<summary>
CreateThemeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateThemeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateThemeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateThemeAliasCommandOutput/)

</details>
<details>
<summary>
CreateTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateTopicCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateTopicCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateTopicCommandOutput/)

</details>
<details>
<summary>
CreateTopicRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateTopicRefreshScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateTopicRefreshScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateTopicRefreshScheduleCommandOutput/)

</details>
<details>
<summary>
CreateVPCConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/CreateVPCConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateVPCConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/CreateVPCConnectionCommandOutput/)

</details>
<details>
<summary>
DeleteAccountCustomization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteAccountCustomizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteAccountCustomizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteAccountCustomizationCommandOutput/)

</details>
<details>
<summary>
DeleteAccountCustomPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteAccountCustomPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteAccountCustomPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteAccountCustomPermissionCommandOutput/)

</details>
<details>
<summary>
DeleteAccountSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteAccountSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteAccountSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteAccountSubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteActionConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteActionConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteActionConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteActionConnectorCommandOutput/)

</details>
<details>
<summary>
DeleteAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteAnalysisCommandOutput/)

</details>
<details>
<summary>
DeleteBrand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteBrandCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteBrandCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteBrandCommandOutput/)

</details>
<details>
<summary>
DeleteBrandAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteBrandAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteBrandAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteBrandAssignmentCommandOutput/)

</details>
<details>
<summary>
DeleteCustomPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteCustomPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteCustomPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteCustomPermissionsCommandOutput/)

</details>
<details>
<summary>
DeleteDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteDashboardCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDashboardCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDashboardCommandOutput/)

</details>
<details>
<summary>
DeleteDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteDataSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDataSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDataSetCommandOutput/)

</details>
<details>
<summary>
DeleteDataSetRefreshProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteDataSetRefreshPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDataSetRefreshPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDataSetRefreshPropertiesCommandOutput/)

</details>
<details>
<summary>
DeleteDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDataSourceCommandOutput/)

</details>
<details>
<summary>
DeleteDefaultQBusinessApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteDefaultQBusinessApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDefaultQBusinessApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteDefaultQBusinessApplicationCommandOutput/)

</details>
<details>
<summary>
DeleteFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteFolderCommandOutput/)

</details>
<details>
<summary>
DeleteFolderMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteFolderMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteFolderMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteFolderMembershipCommandOutput/)

</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteGroupCommandOutput/)

</details>
<details>
<summary>
DeleteGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteGroupMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteGroupMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteGroupMembershipCommandOutput/)

</details>
<details>
<summary>
DeleteIAMPolicyAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteIAMPolicyAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteIAMPolicyAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteIAMPolicyAssignmentCommandOutput/)

</details>
<details>
<summary>
DeleteIdentityPropagationConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteIdentityPropagationConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteIdentityPropagationConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteIdentityPropagationConfigCommandOutput/)

</details>
<details>
<summary>
DeleteNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteNamespaceCommandOutput/)

</details>
<details>
<summary>
DeleteRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteRefreshScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteRefreshScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteRefreshScheduleCommandOutput/)

</details>
<details>
<summary>
DeleteRoleCustomPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteRoleCustomPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteRoleCustomPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteRoleCustomPermissionCommandOutput/)

</details>
<details>
<summary>
DeleteRoleMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteRoleMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteRoleMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteRoleMembershipCommandOutput/)

</details>
<details>
<summary>
DeleteTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteTemplateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteTemplateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteTemplateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteTemplateAliasCommandOutput/)

</details>
<details>
<summary>
DeleteTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteThemeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteThemeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteThemeCommandOutput/)

</details>
<details>
<summary>
DeleteThemeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteThemeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteThemeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteThemeAliasCommandOutput/)

</details>
<details>
<summary>
DeleteTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteTopicCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteTopicCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteTopicCommandOutput/)

</details>
<details>
<summary>
DeleteTopicRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteTopicRefreshScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteTopicRefreshScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteTopicRefreshScheduleCommandOutput/)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteUserCommandOutput/)

</details>
<details>
<summary>
DeleteUserByPrincipalId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteUserByPrincipalIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteUserByPrincipalIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteUserByPrincipalIdCommandOutput/)

</details>
<details>
<summary>
DeleteUserCustomPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteUserCustomPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteUserCustomPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteUserCustomPermissionCommandOutput/)

</details>
<details>
<summary>
DeleteVPCConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DeleteVPCConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteVPCConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DeleteVPCConnectionCommandOutput/)

</details>
<details>
<summary>
DescribeAccountCustomization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAccountCustomizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAccountCustomizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAccountCustomizationCommandOutput/)

</details>
<details>
<summary>
DescribeAccountCustomPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAccountCustomPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAccountCustomPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAccountCustomPermissionCommandOutput/)

</details>
<details>
<summary>
DescribeAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAccountSettingsCommandOutput/)

</details>
<details>
<summary>
DescribeAccountSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAccountSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAccountSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAccountSubscriptionCommandOutput/)

</details>
<details>
<summary>
DescribeActionConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeActionConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeActionConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeActionConnectorCommandOutput/)

</details>
<details>
<summary>
DescribeActionConnectorPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeActionConnectorPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeActionConnectorPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeActionConnectorPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAnalysisCommandOutput/)

</details>
<details>
<summary>
DescribeAnalysisDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAnalysisDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAnalysisDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAnalysisDefinitionCommandOutput/)

</details>
<details>
<summary>
DescribeAnalysisPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAnalysisPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAnalysisPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAnalysisPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeAssetBundleExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAssetBundleExportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAssetBundleExportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAssetBundleExportJobCommandOutput/)

</details>
<details>
<summary>
DescribeAssetBundleImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeAssetBundleImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAssetBundleImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeAssetBundleImportJobCommandOutput/)

</details>
<details>
<summary>
DescribeBrand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeBrandCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeBrandCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeBrandCommandOutput/)

</details>
<details>
<summary>
DescribeBrandAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeBrandAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeBrandAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeBrandAssignmentCommandOutput/)

</details>
<details>
<summary>
DescribeBrandPublishedVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeBrandPublishedVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeBrandPublishedVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeBrandPublishedVersionCommandOutput/)

</details>
<details>
<summary>
DescribeCustomPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeCustomPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeCustomPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeCustomPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDashboardCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardCommandOutput/)

</details>
<details>
<summary>
DescribeDashboardDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDashboardDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardDefinitionCommandOutput/)

</details>
<details>
<summary>
DescribeDashboardPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDashboardPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeDashboardSnapshotJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDashboardSnapshotJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardSnapshotJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardSnapshotJobCommandOutput/)

</details>
<details>
<summary>
DescribeDashboardSnapshotJobResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDashboardSnapshotJobResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardSnapshotJobResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardSnapshotJobResultCommandOutput/)

</details>
<details>
<summary>
DescribeDashboardsQAConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDashboardsQAConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardsQAConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDashboardsQAConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDataSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSetCommandOutput/)

</details>
<details>
<summary>
DescribeDataSetPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDataSetPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSetPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSetPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeDataSetRefreshProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDataSetRefreshPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSetRefreshPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSetRefreshPropertiesCommandOutput/)

</details>
<details>
<summary>
DescribeDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSourceCommandOutput/)

</details>
<details>
<summary>
DescribeDataSourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDataSourcePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSourcePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDataSourcePermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeDefaultQBusinessApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeDefaultQBusinessApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDefaultQBusinessApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeDefaultQBusinessApplicationCommandOutput/)

</details>
<details>
<summary>
DescribeFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeFolderCommandOutput/)

</details>
<details>
<summary>
DescribeFolderPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeFolderPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeFolderPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeFolderPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeFolderResolvedPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeFolderResolvedPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeFolderResolvedPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeFolderResolvedPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeGroupCommandOutput/)

</details>
<details>
<summary>
DescribeGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeGroupMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeGroupMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeGroupMembershipCommandOutput/)

</details>
<details>
<summary>
DescribeIAMPolicyAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeIAMPolicyAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeIAMPolicyAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeIAMPolicyAssignmentCommandOutput/)

</details>
<details>
<summary>
DescribeIngestion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeIngestionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeIngestionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeIngestionCommandOutput/)

</details>
<details>
<summary>
DescribeIpRestriction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeIpRestrictionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeIpRestrictionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeIpRestrictionCommandOutput/)

</details>
<details>
<summary>
DescribeKeyRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeKeyRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeKeyRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeKeyRegistrationCommandOutput/)

</details>
<details>
<summary>
DescribeNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeNamespaceCommandOutput/)

</details>
<details>
<summary>
DescribeQPersonalizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeQPersonalizationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeQPersonalizationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeQPersonalizationConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeQuickSightQSearchConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeQuickSightQSearchConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeQuickSightQSearchConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeQuickSightQSearchConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeRefreshScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeRefreshScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeRefreshScheduleCommandOutput/)

</details>
<details>
<summary>
DescribeRoleCustomPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeRoleCustomPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeRoleCustomPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeRoleCustomPermissionCommandOutput/)

</details>
<details>
<summary>
DescribeTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTemplateCommandOutput/)

</details>
<details>
<summary>
DescribeTemplateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeTemplateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTemplateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTemplateAliasCommandOutput/)

</details>
<details>
<summary>
DescribeTemplateDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeTemplateDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTemplateDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTemplateDefinitionCommandOutput/)

</details>
<details>
<summary>
DescribeTemplatePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeTemplatePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTemplatePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTemplatePermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeThemeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeThemeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeThemeCommandOutput/)

</details>
<details>
<summary>
DescribeThemeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeThemeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeThemeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeThemeAliasCommandOutput/)

</details>
<details>
<summary>
DescribeThemePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeThemePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeThemePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeThemePermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeTopicCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTopicCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTopicCommandOutput/)

</details>
<details>
<summary>
DescribeTopicPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeTopicPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTopicPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTopicPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeTopicRefresh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeTopicRefreshCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTopicRefreshCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTopicRefreshCommandOutput/)

</details>
<details>
<summary>
DescribeTopicRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeTopicRefreshScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTopicRefreshScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeTopicRefreshScheduleCommandOutput/)

</details>
<details>
<summary>
DescribeUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeUserCommandOutput/)

</details>
<details>
<summary>
DescribeVPCConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/DescribeVPCConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeVPCConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/DescribeVPCConnectionCommandOutput/)

</details>
<details>
<summary>
GenerateEmbedUrlForAnonymousUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/GenerateEmbedUrlForAnonymousUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GenerateEmbedUrlForAnonymousUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GenerateEmbedUrlForAnonymousUserCommandOutput/)

</details>
<details>
<summary>
GenerateEmbedUrlForRegisteredUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/GenerateEmbedUrlForRegisteredUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GenerateEmbedUrlForRegisteredUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GenerateEmbedUrlForRegisteredUserCommandOutput/)

</details>
<details>
<summary>
GenerateEmbedUrlForRegisteredUserWithIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/GenerateEmbedUrlForRegisteredUserWithIdentityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput/)

</details>
<details>
<summary>
GetDashboardEmbedUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/GetDashboardEmbedUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GetDashboardEmbedUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GetDashboardEmbedUrlCommandOutput/)

</details>
<details>
<summary>
GetFlowMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/GetFlowMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GetFlowMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GetFlowMetadataCommandOutput/)

</details>
<details>
<summary>
GetFlowPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/GetFlowPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GetFlowPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GetFlowPermissionsCommandOutput/)

</details>
<details>
<summary>
GetSessionEmbedUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/GetSessionEmbedUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GetSessionEmbedUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/GetSessionEmbedUrlCommandOutput/)

</details>
<details>
<summary>
ListActionConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListActionConnectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListActionConnectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListActionConnectorsCommandOutput/)

</details>
<details>
<summary>
ListAnalyses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListAnalysesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListAnalysesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListAnalysesCommandOutput/)

</details>
<details>
<summary>
ListAssetBundleExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListAssetBundleExportJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListAssetBundleExportJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListAssetBundleExportJobsCommandOutput/)

</details>
<details>
<summary>
ListAssetBundleImportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListAssetBundleImportJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListAssetBundleImportJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListAssetBundleImportJobsCommandOutput/)

</details>
<details>
<summary>
ListBrands
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListBrandsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListBrandsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListBrandsCommandOutput/)

</details>
<details>
<summary>
ListCustomPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListCustomPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListCustomPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListCustomPermissionsCommandOutput/)

</details>
<details>
<summary>
ListDashboards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListDashboardsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListDashboardsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListDashboardsCommandOutput/)

</details>
<details>
<summary>
ListDashboardVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListDashboardVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListDashboardVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListDashboardVersionsCommandOutput/)

</details>
<details>
<summary>
ListDataSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListDataSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListDataSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListDataSetsCommandOutput/)

</details>
<details>
<summary>
ListDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListDataSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListDataSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListDataSourcesCommandOutput/)

</details>
<details>
<summary>
ListFlows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListFlowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListFlowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListFlowsCommandOutput/)

</details>
<details>
<summary>
ListFolderMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListFolderMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListFolderMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListFolderMembersCommandOutput/)

</details>
<details>
<summary>
ListFolders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListFoldersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListFoldersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListFoldersCommandOutput/)

</details>
<details>
<summary>
ListFoldersForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListFoldersForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListFoldersForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListFoldersForResourceCommandOutput/)

</details>
<details>
<summary>
ListGroupMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListGroupMembershipsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListGroupMembershipsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListGroupMembershipsCommandOutput/)

</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListGroupsCommandOutput/)

</details>
<details>
<summary>
ListIAMPolicyAssignments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListIAMPolicyAssignmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListIAMPolicyAssignmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListIAMPolicyAssignmentsCommandOutput/)

</details>
<details>
<summary>
ListIAMPolicyAssignmentsForUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListIAMPolicyAssignmentsForUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListIAMPolicyAssignmentsForUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListIAMPolicyAssignmentsForUserCommandOutput/)

</details>
<details>
<summary>
ListIdentityPropagationConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListIdentityPropagationConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListIdentityPropagationConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListIdentityPropagationConfigsCommandOutput/)

</details>
<details>
<summary>
ListIngestions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListIngestionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListIngestionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListIngestionsCommandOutput/)

</details>
<details>
<summary>
ListNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListNamespacesCommandOutput/)

</details>
<details>
<summary>
ListRefreshSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListRefreshSchedulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListRefreshSchedulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListRefreshSchedulesCommandOutput/)

</details>
<details>
<summary>
ListRoleMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListRoleMembershipsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListRoleMembershipsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListRoleMembershipsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTemplateAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListTemplateAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTemplateAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTemplateAliasesCommandOutput/)

</details>
<details>
<summary>
ListTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTemplatesCommandOutput/)

</details>
<details>
<summary>
ListTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListTemplateVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTemplateVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTemplateVersionsCommandOutput/)

</details>
<details>
<summary>
ListThemeAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListThemeAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListThemeAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListThemeAliasesCommandOutput/)

</details>
<details>
<summary>
ListThemes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListThemesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListThemesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListThemesCommandOutput/)

</details>
<details>
<summary>
ListThemeVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListThemeVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListThemeVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListThemeVersionsCommandOutput/)

</details>
<details>
<summary>
ListTopicRefreshSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListTopicRefreshSchedulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTopicRefreshSchedulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTopicRefreshSchedulesCommandOutput/)

</details>
<details>
<summary>
ListTopicReviewedAnswers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListTopicReviewedAnswersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTopicReviewedAnswersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTopicReviewedAnswersCommandOutput/)

</details>
<details>
<summary>
ListTopics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListTopicsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTopicsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListTopicsCommandOutput/)

</details>
<details>
<summary>
ListUserGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListUserGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListUserGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListUserGroupsCommandOutput/)

</details>
<details>
<summary>
ListUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListUsersCommandOutput/)

</details>
<details>
<summary>
ListVPCConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/ListVPCConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListVPCConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/ListVPCConnectionsCommandOutput/)

</details>
<details>
<summary>
PredictQAResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/PredictQAResultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/PredictQAResultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/PredictQAResultsCommandOutput/)

</details>
<details>
<summary>
PutDataSetRefreshProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/PutDataSetRefreshPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/PutDataSetRefreshPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/PutDataSetRefreshPropertiesCommandOutput/)

</details>
<details>
<summary>
RegisterUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/RegisterUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/RegisterUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/RegisterUserCommandOutput/)

</details>
<details>
<summary>
RestoreAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/RestoreAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/RestoreAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/RestoreAnalysisCommandOutput/)

</details>
<details>
<summary>
SearchActionConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchActionConnectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchActionConnectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchActionConnectorsCommandOutput/)

</details>
<details>
<summary>
SearchAnalyses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchAnalysesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchAnalysesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchAnalysesCommandOutput/)

</details>
<details>
<summary>
SearchDashboards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchDashboardsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchDashboardsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchDashboardsCommandOutput/)

</details>
<details>
<summary>
SearchDataSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchDataSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchDataSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchDataSetsCommandOutput/)

</details>
<details>
<summary>
SearchDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchDataSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchDataSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchDataSourcesCommandOutput/)

</details>
<details>
<summary>
SearchFlows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchFlowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchFlowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchFlowsCommandOutput/)

</details>
<details>
<summary>
SearchFolders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchFoldersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchFoldersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchFoldersCommandOutput/)

</details>
<details>
<summary>
SearchGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchGroupsCommandOutput/)

</details>
<details>
<summary>
SearchTopics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/SearchTopicsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchTopicsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/SearchTopicsCommandOutput/)

</details>
<details>
<summary>
StartAssetBundleExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/StartAssetBundleExportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/StartAssetBundleExportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/StartAssetBundleExportJobCommandOutput/)

</details>
<details>
<summary>
StartAssetBundleImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/StartAssetBundleImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/StartAssetBundleImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/StartAssetBundleImportJobCommandOutput/)

</details>
<details>
<summary>
StartDashboardSnapshotJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/StartDashboardSnapshotJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/StartDashboardSnapshotJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/StartDashboardSnapshotJobCommandOutput/)

</details>
<details>
<summary>
StartDashboardSnapshotJobSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/StartDashboardSnapshotJobScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/StartDashboardSnapshotJobScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/StartDashboardSnapshotJobScheduleCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAccountCustomization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateAccountCustomizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAccountCustomizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAccountCustomizationCommandOutput/)

</details>
<details>
<summary>
UpdateAccountCustomPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateAccountCustomPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAccountCustomPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAccountCustomPermissionCommandOutput/)

</details>
<details>
<summary>
UpdateAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAccountSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateActionConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateActionConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateActionConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateActionConnectorCommandOutput/)

</details>
<details>
<summary>
UpdateActionConnectorPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateActionConnectorPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateActionConnectorPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateActionConnectorPermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAnalysisCommandOutput/)

</details>
<details>
<summary>
UpdateAnalysisPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateAnalysisPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAnalysisPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateAnalysisPermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateApplicationWithTokenExchangeGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateApplicationWithTokenExchangeGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateApplicationWithTokenExchangeGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateApplicationWithTokenExchangeGrantCommandOutput/)

</details>
<details>
<summary>
UpdateBrand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateBrandCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateBrandCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateBrandCommandOutput/)

</details>
<details>
<summary>
UpdateBrandAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateBrandAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateBrandAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateBrandAssignmentCommandOutput/)

</details>
<details>
<summary>
UpdateBrandPublishedVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateBrandPublishedVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateBrandPublishedVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateBrandPublishedVersionCommandOutput/)

</details>
<details>
<summary>
UpdateCustomPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateCustomPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateCustomPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateCustomPermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDashboardCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardCommandOutput/)

</details>
<details>
<summary>
UpdateDashboardLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDashboardLinksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardLinksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardLinksCommandOutput/)

</details>
<details>
<summary>
UpdateDashboardPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDashboardPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardPermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateDashboardPublishedVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDashboardPublishedVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardPublishedVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardPublishedVersionCommandOutput/)

</details>
<details>
<summary>
UpdateDashboardsQAConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDashboardsQAConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardsQAConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDashboardsQAConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDataSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDataSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDataSetCommandOutput/)

</details>
<details>
<summary>
UpdateDataSetPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDataSetPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDataSetPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDataSetPermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDataSourceCommandOutput/)

</details>
<details>
<summary>
UpdateDataSourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDataSourcePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDataSourcePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDataSourcePermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateDefaultQBusinessApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateDefaultQBusinessApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDefaultQBusinessApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateDefaultQBusinessApplicationCommandOutput/)

</details>
<details>
<summary>
UpdateFlowPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateFlowPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateFlowPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateFlowPermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateFolderCommandOutput/)

</details>
<details>
<summary>
UpdateFolderPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateFolderPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateFolderPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateFolderPermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateGroupCommandOutput/)

</details>
<details>
<summary>
UpdateIAMPolicyAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateIAMPolicyAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateIAMPolicyAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateIAMPolicyAssignmentCommandOutput/)

</details>
<details>
<summary>
UpdateIdentityPropagationConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateIdentityPropagationConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateIdentityPropagationConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateIdentityPropagationConfigCommandOutput/)

</details>
<details>
<summary>
UpdateIpRestriction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateIpRestrictionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateIpRestrictionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateIpRestrictionCommandOutput/)

</details>
<details>
<summary>
UpdateKeyRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateKeyRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateKeyRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateKeyRegistrationCommandOutput/)

</details>
<details>
<summary>
UpdatePublicSharingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdatePublicSharingSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdatePublicSharingSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdatePublicSharingSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateQPersonalizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateQPersonalizationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateQPersonalizationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateQPersonalizationConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateQuickSightQSearchConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateQuickSightQSearchConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateQuickSightQSearchConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateQuickSightQSearchConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateRefreshScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateRefreshScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateRefreshScheduleCommandOutput/)

</details>
<details>
<summary>
UpdateRoleCustomPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateRoleCustomPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateRoleCustomPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateRoleCustomPermissionCommandOutput/)

</details>
<details>
<summary>
UpdateSPICECapacityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateSPICECapacityConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateSPICECapacityConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateSPICECapacityConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateTemplateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateTemplateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTemplateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTemplateAliasCommandOutput/)

</details>
<details>
<summary>
UpdateTemplatePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateTemplatePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTemplatePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTemplatePermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateThemeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateThemeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateThemeCommandOutput/)

</details>
<details>
<summary>
UpdateThemeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateThemeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateThemeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateThemeAliasCommandOutput/)

</details>
<details>
<summary>
UpdateThemePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateThemePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateThemePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateThemePermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateTopicCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTopicCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTopicCommandOutput/)

</details>
<details>
<summary>
UpdateTopicPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateTopicPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTopicPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTopicPermissionsCommandOutput/)

</details>
<details>
<summary>
UpdateTopicRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateTopicRefreshScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTopicRefreshScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateTopicRefreshScheduleCommandOutput/)

</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateUserCommandOutput/)

</details>
<details>
<summary>
UpdateUserCustomPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateUserCustomPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateUserCustomPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateUserCustomPermissionCommandOutput/)

</details>
<details>
<summary>
UpdateVPCConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/quicksight/command/UpdateVPCConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateVPCConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-quicksight/Interface/UpdateVPCConnectionCommandOutput/)

</details>
