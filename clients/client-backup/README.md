<!-- generated file, do not edit directly -->

# @aws-sdk/client-backup

## Description

AWS SDK for JavaScript Backup Client for Node.js, Browser and React Native.

<fullname>Backup</fullname>

<p>Backup is a unified backup service designed to protect Amazon Web Services
services and their associated data. Backup simplifies the creation, migration,
restoration, and deletion of backups, while also providing reporting and
auditing.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-backup
using your favorite package manager:

- `npm install @aws-sdk/client-backup`
- `yarn add @aws-sdk/client-backup`
- `pnpm add @aws-sdk/client-backup`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `BackupClient` and
the commands you need, for example `ListBackupJobsCommand`:

```js
// ES5 example
const { BackupClient, ListBackupJobsCommand } = require("@aws-sdk/client-backup");
```

```ts
// ES6+ example
import { BackupClient, ListBackupJobsCommand } from "@aws-sdk/client-backup";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new BackupClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListBackupJobsCommand(params);
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
import * as AWS from "@aws-sdk/client-backup";
const client = new AWS.Backup({ region: "REGION" });

// async/await.
try {
  const data = await client.listBackupJobs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBackupJobs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBackupJobs(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-backup` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateBackupVaultMpaApprovalTeam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/AssociateBackupVaultMpaApprovalTeamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/AssociateBackupVaultMpaApprovalTeamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/AssociateBackupVaultMpaApprovalTeamCommandOutput/)

</details>
<details>
<summary>
CancelLegalHold
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CancelLegalHoldCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CancelLegalHoldCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CancelLegalHoldCommandOutput/)

</details>
<details>
<summary>
CreateBackupPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateBackupPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateBackupPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateBackupPlanCommandOutput/)

</details>
<details>
<summary>
CreateBackupSelection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateBackupSelectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateBackupSelectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateBackupSelectionCommandOutput/)

</details>
<details>
<summary>
CreateBackupVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateBackupVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateBackupVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateBackupVaultCommandOutput/)

</details>
<details>
<summary>
CreateFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateFrameworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateFrameworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateFrameworkCommandOutput/)

</details>
<details>
<summary>
CreateLegalHold
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateLegalHoldCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateLegalHoldCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateLegalHoldCommandOutput/)

</details>
<details>
<summary>
CreateLogicallyAirGappedBackupVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateLogicallyAirGappedBackupVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateLogicallyAirGappedBackupVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateLogicallyAirGappedBackupVaultCommandOutput/)

</details>
<details>
<summary>
CreateReportPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateReportPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateReportPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateReportPlanCommandOutput/)

</details>
<details>
<summary>
CreateRestoreAccessBackupVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateRestoreAccessBackupVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateRestoreAccessBackupVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateRestoreAccessBackupVaultCommandOutput/)

</details>
<details>
<summary>
CreateRestoreTestingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateRestoreTestingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateRestoreTestingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateRestoreTestingPlanCommandOutput/)

</details>
<details>
<summary>
CreateRestoreTestingSelection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateRestoreTestingSelectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateRestoreTestingSelectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateRestoreTestingSelectionCommandOutput/)

</details>
<details>
<summary>
CreateTieringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/CreateTieringConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateTieringConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/CreateTieringConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteBackupPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteBackupPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupPlanCommandOutput/)

</details>
<details>
<summary>
DeleteBackupSelection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteBackupSelectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupSelectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupSelectionCommandOutput/)

</details>
<details>
<summary>
DeleteBackupVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteBackupVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupVaultCommandOutput/)

</details>
<details>
<summary>
DeleteBackupVaultAccessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteBackupVaultAccessPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupVaultAccessPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupVaultAccessPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteBackupVaultLockConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteBackupVaultLockConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupVaultLockConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupVaultLockConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteBackupVaultNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteBackupVaultNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupVaultNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteBackupVaultNotificationsCommandOutput/)

</details>
<details>
<summary>
DeleteFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteFrameworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteFrameworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteFrameworkCommandOutput/)

</details>
<details>
<summary>
DeleteRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteRecoveryPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteRecoveryPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteRecoveryPointCommandOutput/)

</details>
<details>
<summary>
DeleteReportPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteReportPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteReportPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteReportPlanCommandOutput/)

</details>
<details>
<summary>
DeleteRestoreTestingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteRestoreTestingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteRestoreTestingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteRestoreTestingPlanCommandOutput/)

</details>
<details>
<summary>
DeleteRestoreTestingSelection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteRestoreTestingSelectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteRestoreTestingSelectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteRestoreTestingSelectionCommandOutput/)

</details>
<details>
<summary>
DeleteTieringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DeleteTieringConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteTieringConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DeleteTieringConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeBackupJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeBackupJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeBackupJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeBackupJobCommandOutput/)

</details>
<details>
<summary>
DescribeBackupVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeBackupVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeBackupVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeBackupVaultCommandOutput/)

</details>
<details>
<summary>
DescribeCopyJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeCopyJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeCopyJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeCopyJobCommandOutput/)

</details>
<details>
<summary>
DescribeFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeFrameworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeFrameworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeFrameworkCommandOutput/)

</details>
<details>
<summary>
DescribeGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeGlobalSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeGlobalSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeGlobalSettingsCommandOutput/)

</details>
<details>
<summary>
DescribeProtectedResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeProtectedResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeProtectedResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeProtectedResourceCommandOutput/)

</details>
<details>
<summary>
DescribeRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeRecoveryPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeRecoveryPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeRecoveryPointCommandOutput/)

</details>
<details>
<summary>
DescribeRegionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeRegionSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeRegionSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeRegionSettingsCommandOutput/)

</details>
<details>
<summary>
DescribeReportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeReportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeReportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeReportJobCommandOutput/)

</details>
<details>
<summary>
DescribeReportPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeReportPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeReportPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeReportPlanCommandOutput/)

</details>
<details>
<summary>
DescribeRestoreJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DescribeRestoreJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeRestoreJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DescribeRestoreJobCommandOutput/)

</details>
<details>
<summary>
DisassociateBackupVaultMpaApprovalTeam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DisassociateBackupVaultMpaApprovalTeamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DisassociateBackupVaultMpaApprovalTeamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DisassociateBackupVaultMpaApprovalTeamCommandOutput/)

</details>
<details>
<summary>
DisassociateRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DisassociateRecoveryPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DisassociateRecoveryPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DisassociateRecoveryPointCommandOutput/)

</details>
<details>
<summary>
DisassociateRecoveryPointFromParent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/DisassociateRecoveryPointFromParentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DisassociateRecoveryPointFromParentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/DisassociateRecoveryPointFromParentCommandOutput/)

</details>
<details>
<summary>
ExportBackupPlanTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ExportBackupPlanTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ExportBackupPlanTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ExportBackupPlanTemplateCommandOutput/)

</details>
<details>
<summary>
GetBackupPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetBackupPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupPlanCommandOutput/)

</details>
<details>
<summary>
GetBackupPlanFromJSON
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetBackupPlanFromJSONCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupPlanFromJSONCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupPlanFromJSONCommandOutput/)

</details>
<details>
<summary>
GetBackupPlanFromTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetBackupPlanFromTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupPlanFromTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupPlanFromTemplateCommandOutput/)

</details>
<details>
<summary>
GetBackupSelection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetBackupSelectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupSelectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupSelectionCommandOutput/)

</details>
<details>
<summary>
GetBackupVaultAccessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetBackupVaultAccessPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupVaultAccessPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupVaultAccessPolicyCommandOutput/)

</details>
<details>
<summary>
GetBackupVaultNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetBackupVaultNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupVaultNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetBackupVaultNotificationsCommandOutput/)

</details>
<details>
<summary>
GetLegalHold
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetLegalHoldCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetLegalHoldCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetLegalHoldCommandOutput/)

</details>
<details>
<summary>
GetRecoveryPointIndexDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetRecoveryPointIndexDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRecoveryPointIndexDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRecoveryPointIndexDetailsCommandOutput/)

</details>
<details>
<summary>
GetRecoveryPointRestoreMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetRecoveryPointRestoreMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRecoveryPointRestoreMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRecoveryPointRestoreMetadataCommandOutput/)

</details>
<details>
<summary>
GetRestoreJobMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetRestoreJobMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRestoreJobMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRestoreJobMetadataCommandOutput/)

</details>
<details>
<summary>
GetRestoreTestingInferredMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetRestoreTestingInferredMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRestoreTestingInferredMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRestoreTestingInferredMetadataCommandOutput/)

</details>
<details>
<summary>
GetRestoreTestingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetRestoreTestingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRestoreTestingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRestoreTestingPlanCommandOutput/)

</details>
<details>
<summary>
GetRestoreTestingSelection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetRestoreTestingSelectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRestoreTestingSelectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetRestoreTestingSelectionCommandOutput/)

</details>
<details>
<summary>
GetSupportedResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetSupportedResourceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetSupportedResourceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetSupportedResourceTypesCommandOutput/)

</details>
<details>
<summary>
GetTieringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/GetTieringConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetTieringConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/GetTieringConfigurationCommandOutput/)

</details>
<details>
<summary>
ListBackupJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListBackupJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupJobsCommandOutput/)

</details>
<details>
<summary>
ListBackupJobSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListBackupJobSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupJobSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupJobSummariesCommandOutput/)

</details>
<details>
<summary>
ListBackupPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListBackupPlansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupPlansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupPlansCommandOutput/)

</details>
<details>
<summary>
ListBackupPlanTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListBackupPlanTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupPlanTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupPlanTemplatesCommandOutput/)

</details>
<details>
<summary>
ListBackupPlanVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListBackupPlanVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupPlanVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupPlanVersionsCommandOutput/)

</details>
<details>
<summary>
ListBackupSelections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListBackupSelectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupSelectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupSelectionsCommandOutput/)

</details>
<details>
<summary>
ListBackupVaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListBackupVaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupVaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListBackupVaultsCommandOutput/)

</details>
<details>
<summary>
ListCopyJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListCopyJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListCopyJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListCopyJobsCommandOutput/)

</details>
<details>
<summary>
ListCopyJobSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListCopyJobSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListCopyJobSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListCopyJobSummariesCommandOutput/)

</details>
<details>
<summary>
ListFrameworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListFrameworksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListFrameworksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListFrameworksCommandOutput/)

</details>
<details>
<summary>
ListIndexedRecoveryPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListIndexedRecoveryPointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListIndexedRecoveryPointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListIndexedRecoveryPointsCommandOutput/)

</details>
<details>
<summary>
ListLegalHolds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListLegalHoldsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListLegalHoldsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListLegalHoldsCommandOutput/)

</details>
<details>
<summary>
ListProtectedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListProtectedResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListProtectedResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListProtectedResourcesCommandOutput/)

</details>
<details>
<summary>
ListProtectedResourcesByBackupVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListProtectedResourcesByBackupVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListProtectedResourcesByBackupVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListProtectedResourcesByBackupVaultCommandOutput/)

</details>
<details>
<summary>
ListRecoveryPointsByBackupVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRecoveryPointsByBackupVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRecoveryPointsByBackupVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRecoveryPointsByBackupVaultCommandOutput/)

</details>
<details>
<summary>
ListRecoveryPointsByLegalHold
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRecoveryPointsByLegalHoldCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRecoveryPointsByLegalHoldCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRecoveryPointsByLegalHoldCommandOutput/)

</details>
<details>
<summary>
ListRecoveryPointsByResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRecoveryPointsByResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRecoveryPointsByResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRecoveryPointsByResourceCommandOutput/)

</details>
<details>
<summary>
ListReportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListReportJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListReportJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListReportJobsCommandOutput/)

</details>
<details>
<summary>
ListReportPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListReportPlansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListReportPlansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListReportPlansCommandOutput/)

</details>
<details>
<summary>
ListRestoreAccessBackupVaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRestoreAccessBackupVaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreAccessBackupVaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreAccessBackupVaultsCommandOutput/)

</details>
<details>
<summary>
ListRestoreJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRestoreJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreJobsCommandOutput/)

</details>
<details>
<summary>
ListRestoreJobsByProtectedResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRestoreJobsByProtectedResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreJobsByProtectedResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreJobsByProtectedResourceCommandOutput/)

</details>
<details>
<summary>
ListRestoreJobSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRestoreJobSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreJobSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreJobSummariesCommandOutput/)

</details>
<details>
<summary>
ListRestoreTestingPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRestoreTestingPlansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreTestingPlansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreTestingPlansCommandOutput/)

</details>
<details>
<summary>
ListRestoreTestingSelections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListRestoreTestingSelectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreTestingSelectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListRestoreTestingSelectionsCommandOutput/)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListTagsCommandOutput/)

</details>
<details>
<summary>
ListTieringConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/ListTieringConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListTieringConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/ListTieringConfigurationsCommandOutput/)

</details>
<details>
<summary>
PutBackupVaultAccessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/PutBackupVaultAccessPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/PutBackupVaultAccessPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/PutBackupVaultAccessPolicyCommandOutput/)

</details>
<details>
<summary>
PutBackupVaultLockConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/PutBackupVaultLockConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/PutBackupVaultLockConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/PutBackupVaultLockConfigurationCommandOutput/)

</details>
<details>
<summary>
PutBackupVaultNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/PutBackupVaultNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/PutBackupVaultNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/PutBackupVaultNotificationsCommandOutput/)

</details>
<details>
<summary>
PutRestoreValidationResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/PutRestoreValidationResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/PutRestoreValidationResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/PutRestoreValidationResultCommandOutput/)

</details>
<details>
<summary>
RevokeRestoreAccessBackupVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/RevokeRestoreAccessBackupVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/RevokeRestoreAccessBackupVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/RevokeRestoreAccessBackupVaultCommandOutput/)

</details>
<details>
<summary>
StartBackupJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/StartBackupJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StartBackupJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StartBackupJobCommandOutput/)

</details>
<details>
<summary>
StartCopyJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/StartCopyJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StartCopyJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StartCopyJobCommandOutput/)

</details>
<details>
<summary>
StartReportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/StartReportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StartReportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StartReportJobCommandOutput/)

</details>
<details>
<summary>
StartRestoreJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/StartRestoreJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StartRestoreJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StartRestoreJobCommandOutput/)

</details>
<details>
<summary>
StopBackupJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/StopBackupJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StopBackupJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/StopBackupJobCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateBackupPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateBackupPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateBackupPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateBackupPlanCommandOutput/)

</details>
<details>
<summary>
UpdateFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateFrameworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateFrameworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateFrameworkCommandOutput/)

</details>
<details>
<summary>
UpdateGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateGlobalSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateGlobalSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateGlobalSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateRecoveryPointIndexSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateRecoveryPointIndexSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRecoveryPointIndexSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRecoveryPointIndexSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateRecoveryPointLifecycle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateRecoveryPointLifecycleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRecoveryPointLifecycleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRecoveryPointLifecycleCommandOutput/)

</details>
<details>
<summary>
UpdateRegionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateRegionSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRegionSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRegionSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateReportPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateReportPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateReportPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateReportPlanCommandOutput/)

</details>
<details>
<summary>
UpdateRestoreTestingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateRestoreTestingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRestoreTestingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRestoreTestingPlanCommandOutput/)

</details>
<details>
<summary>
UpdateRestoreTestingSelection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateRestoreTestingSelectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRestoreTestingSelectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateRestoreTestingSelectionCommandOutput/)

</details>
<details>
<summary>
UpdateTieringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup/command/UpdateTieringConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateTieringConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup/Interface/UpdateTieringConfigurationCommandOutput/)

</details>
