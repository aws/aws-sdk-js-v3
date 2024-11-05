<!-- generated file, do not edit directly -->

# @aws-sdk/client-guardduty

## Description

AWS SDK for JavaScript GuardDuty Client for Node.js, Browser and React Native.

<p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
the following foundational data sources - VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event
logs, EKS audit logs, DNS logs, Amazon EBS volume data, runtime activity belonging to container workloads, such
as Amazon EKS, Amazon ECS (including Amazon Web Services Fargate), and Amazon EC2 instances.
It uses threat intelligence
feeds, such as lists of malicious IPs and domains, and machine learning to identify
unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment.
This can include issues like escalations of privileges, uses of exposed credentials, or
communication with malicious IPs, domains, or presence of malware on your Amazon EC2 instances
and container workloads. For example, GuardDuty can detect compromised EC2 instances and
container workloads serving malware, or mining bitcoin. </p>
<p>GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such as
unauthorized infrastructure deployments like EC2 instances deployed in a Region that has never
been used, or unusual API calls like a password policy change to reduce password strength. </p>
<p>GuardDuty informs you about the status of your Amazon Web Services environment by producing security
findings that you can view in the GuardDuty console or through Amazon EventBridge. For more
information, see the <i>
<a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon
GuardDuty User Guide</a>
</i>. </p>

## Installing

To install this package, simply type add or install @aws-sdk/client-guardduty
using your favorite package manager:

- `npm install @aws-sdk/client-guardduty`
- `yarn add @aws-sdk/client-guardduty`
- `pnpm add @aws-sdk/client-guardduty`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GuardDutyClient` and
the commands you need, for example `ListDetectorsCommand`:

```js
// ES5 example
const { GuardDutyClient, ListDetectorsCommand } = require("@aws-sdk/client-guardduty");
```

```ts
// ES6+ example
import { GuardDutyClient, ListDetectorsCommand } from "@aws-sdk/client-guardduty";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GuardDutyClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListDetectorsCommand(params);
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
import * as AWS from "@aws-sdk/client-guardduty";
const client = new AWS.GuardDuty({ region: "REGION" });

// async/await.
try {
  const data = await client.listDetectors(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDetectors(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDetectors(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-guardduty` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptAdministratorInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/AcceptAdministratorInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/AcceptAdministratorInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/AcceptAdministratorInvitationCommandOutput/)

</details>
<details>
<summary>
AcceptInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/AcceptInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/AcceptInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/AcceptInvitationCommandOutput/)

</details>
<details>
<summary>
ArchiveFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ArchiveFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ArchiveFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ArchiveFindingsCommandOutput/)

</details>
<details>
<summary>
CreateDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/CreateDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateDetectorCommandOutput/)

</details>
<details>
<summary>
CreateFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/CreateFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateFilterCommandOutput/)

</details>
<details>
<summary>
CreateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/CreateIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateIPSetCommandOutput/)

</details>
<details>
<summary>
CreateMalwareProtectionPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/CreateMalwareProtectionPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateMalwareProtectionPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateMalwareProtectionPlanCommandOutput/)

</details>
<details>
<summary>
CreateMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/CreateMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateMembersCommandOutput/)

</details>
<details>
<summary>
CreatePublishingDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/CreatePublishingDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreatePublishingDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreatePublishingDestinationCommandOutput/)

</details>
<details>
<summary>
CreateSampleFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/CreateSampleFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateSampleFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateSampleFindingsCommandOutput/)

</details>
<details>
<summary>
CreateThreatIntelSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/CreateThreatIntelSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateThreatIntelSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/CreateThreatIntelSetCommandOutput/)

</details>
<details>
<summary>
DeclineInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeclineInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeclineInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeclineInvitationsCommandOutput/)

</details>
<details>
<summary>
DeleteDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeleteDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteDetectorCommandOutput/)

</details>
<details>
<summary>
DeleteFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeleteFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteFilterCommandOutput/)

</details>
<details>
<summary>
DeleteInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeleteInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteInvitationsCommandOutput/)

</details>
<details>
<summary>
DeleteIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeleteIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteIPSetCommandOutput/)

</details>
<details>
<summary>
DeleteMalwareProtectionPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeleteMalwareProtectionPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteMalwareProtectionPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteMalwareProtectionPlanCommandOutput/)

</details>
<details>
<summary>
DeleteMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeleteMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteMembersCommandOutput/)

</details>
<details>
<summary>
DeletePublishingDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeletePublishingDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeletePublishingDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeletePublishingDestinationCommandOutput/)

</details>
<details>
<summary>
DeleteThreatIntelSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DeleteThreatIntelSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteThreatIntelSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DeleteThreatIntelSetCommandOutput/)

</details>
<details>
<summary>
DescribeMalwareScans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DescribeMalwareScansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DescribeMalwareScansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DescribeMalwareScansCommandOutput/)

</details>
<details>
<summary>
DescribeOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DescribeOrganizationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DescribeOrganizationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DescribeOrganizationConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribePublishingDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DescribePublishingDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DescribePublishingDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DescribePublishingDestinationCommandOutput/)

</details>
<details>
<summary>
DisableOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DisableOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DisableOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DisableOrganizationAdminAccountCommandOutput/)

</details>
<details>
<summary>
DisassociateFromAdministratorAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DisassociateFromAdministratorAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DisassociateFromAdministratorAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DisassociateFromAdministratorAccountCommandOutput/)

</details>
<details>
<summary>
DisassociateFromMasterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DisassociateFromMasterAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DisassociateFromMasterAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DisassociateFromMasterAccountCommandOutput/)

</details>
<details>
<summary>
DisassociateMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/DisassociateMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DisassociateMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/DisassociateMembersCommandOutput/)

</details>
<details>
<summary>
EnableOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/EnableOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/EnableOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/EnableOrganizationAdminAccountCommandOutput/)

</details>
<details>
<summary>
GetAdministratorAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetAdministratorAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetAdministratorAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetAdministratorAccountCommandOutput/)

</details>
<details>
<summary>
GetCoverageStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetCoverageStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetCoverageStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetCoverageStatisticsCommandOutput/)

</details>
<details>
<summary>
GetDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetDetectorCommandOutput/)

</details>
<details>
<summary>
GetFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetFilterCommandOutput/)

</details>
<details>
<summary>
GetFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetFindingsCommandOutput/)

</details>
<details>
<summary>
GetFindingsStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetFindingsStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetFindingsStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetFindingsStatisticsCommandOutput/)

</details>
<details>
<summary>
GetInvitationsCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetInvitationsCountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetInvitationsCountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetInvitationsCountCommandOutput/)

</details>
<details>
<summary>
GetIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetIPSetCommandOutput/)

</details>
<details>
<summary>
GetMalwareProtectionPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetMalwareProtectionPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMalwareProtectionPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMalwareProtectionPlanCommandOutput/)

</details>
<details>
<summary>
GetMalwareScanSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetMalwareScanSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMalwareScanSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMalwareScanSettingsCommandOutput/)

</details>
<details>
<summary>
GetMasterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetMasterAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMasterAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMasterAccountCommandOutput/)

</details>
<details>
<summary>
GetMemberDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetMemberDetectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMemberDetectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMemberDetectorsCommandOutput/)

</details>
<details>
<summary>
GetMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetMembersCommandOutput/)

</details>
<details>
<summary>
GetOrganizationStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetOrganizationStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetOrganizationStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetOrganizationStatisticsCommandOutput/)

</details>
<details>
<summary>
GetRemainingFreeTrialDays
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetRemainingFreeTrialDaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetRemainingFreeTrialDaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetRemainingFreeTrialDaysCommandOutput/)

</details>
<details>
<summary>
GetThreatIntelSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetThreatIntelSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetThreatIntelSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetThreatIntelSetCommandOutput/)

</details>
<details>
<summary>
GetUsageStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/GetUsageStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetUsageStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/GetUsageStatisticsCommandOutput/)

</details>
<details>
<summary>
InviteMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/InviteMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/InviteMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/InviteMembersCommandOutput/)

</details>
<details>
<summary>
ListCoverage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListCoverageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListCoverageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListCoverageCommandOutput/)

</details>
<details>
<summary>
ListDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListDetectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListDetectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListDetectorsCommandOutput/)

</details>
<details>
<summary>
ListFilters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListFiltersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListFiltersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListFiltersCommandOutput/)

</details>
<details>
<summary>
ListFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListFindingsCommandOutput/)

</details>
<details>
<summary>
ListInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListInvitationsCommandOutput/)

</details>
<details>
<summary>
ListIPSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListIPSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListIPSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListIPSetsCommandOutput/)

</details>
<details>
<summary>
ListMalwareProtectionPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListMalwareProtectionPlansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListMalwareProtectionPlansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListMalwareProtectionPlansCommandOutput/)

</details>
<details>
<summary>
ListMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListMembersCommandOutput/)

</details>
<details>
<summary>
ListOrganizationAdminAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListOrganizationAdminAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListOrganizationAdminAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListOrganizationAdminAccountsCommandOutput/)

</details>
<details>
<summary>
ListPublishingDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListPublishingDestinationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListPublishingDestinationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListPublishingDestinationsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListThreatIntelSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/ListThreatIntelSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListThreatIntelSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/ListThreatIntelSetsCommandOutput/)

</details>
<details>
<summary>
StartMalwareScan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/StartMalwareScanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/StartMalwareScanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/StartMalwareScanCommandOutput/)

</details>
<details>
<summary>
StartMonitoringMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/StartMonitoringMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/StartMonitoringMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/StartMonitoringMembersCommandOutput/)

</details>
<details>
<summary>
StopMonitoringMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/StopMonitoringMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/StopMonitoringMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/StopMonitoringMembersCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UnarchiveFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UnarchiveFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UnarchiveFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UnarchiveFindingsCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateDetectorCommandOutput/)

</details>
<details>
<summary>
UpdateFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateFilterCommandOutput/)

</details>
<details>
<summary>
UpdateFindingsFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateFindingsFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateFindingsFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateFindingsFeedbackCommandOutput/)

</details>
<details>
<summary>
UpdateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateIPSetCommandOutput/)

</details>
<details>
<summary>
UpdateMalwareProtectionPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateMalwareProtectionPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateMalwareProtectionPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateMalwareProtectionPlanCommandOutput/)

</details>
<details>
<summary>
UpdateMalwareScanSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateMalwareScanSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateMalwareScanSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateMalwareScanSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateMemberDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateMemberDetectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateMemberDetectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateMemberDetectorsCommandOutput/)

</details>
<details>
<summary>
UpdateOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateOrganizationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateOrganizationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateOrganizationConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdatePublishingDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdatePublishingDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdatePublishingDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdatePublishingDestinationCommandOutput/)

</details>
<details>
<summary>
UpdateThreatIntelSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/guardduty/command/UpdateThreatIntelSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateThreatIntelSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-guardduty/Interface/UpdateThreatIntelSetCommandOutput/)

</details>
