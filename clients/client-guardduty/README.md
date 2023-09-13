<!-- generated file, do not edit directly -->

# @aws-sdk/client-guardduty

## Description

AWS SDK for JavaScript GuardDuty Client for Node.js, Browser and React Native.

<p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
the following data sources: VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event
logs, EKS audit logs, DNS logs, and Amazon EBS volume data.
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

To install the this package, simply type add or install @aws-sdk/client-guardduty
using your favorite package manager:

- `npm install @aws-sdk/client-guardduty`
- `yarn add @aws-sdk/client-guardduty`
- `pnpm add @aws-sdk/client-guardduty`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GuardDutyClient` and
the commands you need, for example `AcceptAdministratorInvitationCommand`:

```js
// ES5 example
const { GuardDutyClient, AcceptAdministratorInvitationCommand } = require("@aws-sdk/client-guardduty");
```

```ts
// ES6+ example
import { GuardDutyClient, AcceptAdministratorInvitationCommand } from "@aws-sdk/client-guardduty";
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
const command = new AcceptAdministratorInvitationCommand(params);
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
  const data = await client.acceptAdministratorInvitation(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptAdministratorInvitation(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptAdministratorInvitation(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/acceptadministratorinvitationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/acceptadministratorinvitationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/acceptadministratorinvitationcommandoutput.html)

</details>
<details>
<summary>
AcceptInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/acceptinvitationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/acceptinvitationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/acceptinvitationcommandoutput.html)

</details>
<details>
<summary>
ArchiveFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/archivefindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/archivefindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/archivefindingscommandoutput.html)

</details>
<details>
<summary>
CreateDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/createdetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createdetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createdetectorcommandoutput.html)

</details>
<details>
<summary>
CreateFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/createfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createfiltercommandoutput.html)

</details>
<details>
<summary>
CreateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/createipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createipsetcommandoutput.html)

</details>
<details>
<summary>
CreateMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/creatememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/creatememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/creatememberscommandoutput.html)

</details>
<details>
<summary>
CreatePublishingDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/createpublishingdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createpublishingdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createpublishingdestinationcommandoutput.html)

</details>
<details>
<summary>
CreateSampleFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/createsamplefindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createsamplefindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createsamplefindingscommandoutput.html)

</details>
<details>
<summary>
CreateThreatIntelSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/createthreatintelsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createthreatintelsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/createthreatintelsetcommandoutput.html)

</details>
<details>
<summary>
DeclineInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/declineinvitationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/declineinvitationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/declineinvitationscommandoutput.html)

</details>
<details>
<summary>
DeleteDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/deletedetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletedetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletedetectorcommandoutput.html)

</details>
<details>
<summary>
DeleteFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/deletefiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletefiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletefiltercommandoutput.html)

</details>
<details>
<summary>
DeleteInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/deleteinvitationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deleteinvitationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deleteinvitationscommandoutput.html)

</details>
<details>
<summary>
DeleteIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/deleteipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deleteipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deleteipsetcommandoutput.html)

</details>
<details>
<summary>
DeleteMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/deletememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletememberscommandoutput.html)

</details>
<details>
<summary>
DeletePublishingDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/deletepublishingdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletepublishingdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletepublishingdestinationcommandoutput.html)

</details>
<details>
<summary>
DeleteThreatIntelSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/deletethreatintelsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletethreatintelsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/deletethreatintelsetcommandoutput.html)

</details>
<details>
<summary>
DescribeMalwareScans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/describemalwarescanscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/describemalwarescanscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/describemalwarescanscommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/describeorganizationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/describeorganizationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/describeorganizationconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribePublishingDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/describepublishingdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/describepublishingdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/describepublishingdestinationcommandoutput.html)

</details>
<details>
<summary>
DisableOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/disableorganizationadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/disableorganizationadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/disableorganizationadminaccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateFromAdministratorAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/disassociatefromadministratoraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/disassociatefromadministratoraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/disassociatefromadministratoraccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateFromMasterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/disassociatefrommasteraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/disassociatefrommasteraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/disassociatefrommasteraccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/disassociatememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/disassociatememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/disassociatememberscommandoutput.html)

</details>
<details>
<summary>
EnableOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/enableorganizationadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/enableorganizationadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/enableorganizationadminaccountcommandoutput.html)

</details>
<details>
<summary>
GetAdministratorAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getadministratoraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getadministratoraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getadministratoraccountcommandoutput.html)

</details>
<details>
<summary>
GetCoverageStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getcoveragestatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getcoveragestatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getcoveragestatisticscommandoutput.html)

</details>
<details>
<summary>
GetDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getdetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getdetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getdetectorcommandoutput.html)

</details>
<details>
<summary>
GetFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getfiltercommandoutput.html)

</details>
<details>
<summary>
GetFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getfindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getfindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getfindingscommandoutput.html)

</details>
<details>
<summary>
GetFindingsStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getfindingsstatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getfindingsstatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getfindingsstatisticscommandoutput.html)

</details>
<details>
<summary>
GetInvitationsCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getinvitationscountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getinvitationscountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getinvitationscountcommandoutput.html)

</details>
<details>
<summary>
GetIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getipsetcommandoutput.html)

</details>
<details>
<summary>
GetMalwareScanSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getmalwarescansettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getmalwarescansettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getmalwarescansettingscommandoutput.html)

</details>
<details>
<summary>
GetMasterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getmasteraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getmasteraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getmasteraccountcommandoutput.html)

</details>
<details>
<summary>
GetMemberDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getmemberdetectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getmemberdetectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getmemberdetectorscommandoutput.html)

</details>
<details>
<summary>
GetMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getmemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getmemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getmemberscommandoutput.html)

</details>
<details>
<summary>
GetRemainingFreeTrialDays
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getremainingfreetrialdayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getremainingfreetrialdayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getremainingfreetrialdayscommandoutput.html)

</details>
<details>
<summary>
GetThreatIntelSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getthreatintelsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getthreatintelsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getthreatintelsetcommandoutput.html)

</details>
<details>
<summary>
GetUsageStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/getusagestatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getusagestatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/getusagestatisticscommandoutput.html)

</details>
<details>
<summary>
InviteMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/invitememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/invitememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/invitememberscommandoutput.html)

</details>
<details>
<summary>
ListCoverage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listcoveragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listcoveragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listcoveragecommandoutput.html)

</details>
<details>
<summary>
ListDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listdetectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listdetectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listdetectorscommandoutput.html)

</details>
<details>
<summary>
ListFilters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listfilterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listfilterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listfilterscommandoutput.html)

</details>
<details>
<summary>
ListFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listfindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listfindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listfindingscommandoutput.html)

</details>
<details>
<summary>
ListInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listinvitationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listinvitationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listinvitationscommandoutput.html)

</details>
<details>
<summary>
ListIPSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listipsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listipsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listipsetscommandoutput.html)

</details>
<details>
<summary>
ListMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listmemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listmemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listmemberscommandoutput.html)

</details>
<details>
<summary>
ListOrganizationAdminAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listorganizationadminaccountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listorganizationadminaccountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listorganizationadminaccountscommandoutput.html)

</details>
<details>
<summary>
ListPublishingDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listpublishingdestinationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listpublishingdestinationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listpublishingdestinationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListThreatIntelSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/listthreatintelsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listthreatintelsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/listthreatintelsetscommandoutput.html)

</details>
<details>
<summary>
StartMalwareScan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/startmalwarescancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/startmalwarescancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/startmalwarescancommandoutput.html)

</details>
<details>
<summary>
StartMonitoringMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/startmonitoringmemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/startmonitoringmemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/startmonitoringmemberscommandoutput.html)

</details>
<details>
<summary>
StopMonitoringMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/stopmonitoringmemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/stopmonitoringmemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/stopmonitoringmemberscommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UnarchiveFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/unarchivefindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/unarchivefindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/unarchivefindingscommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updatedetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatedetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatedetectorcommandoutput.html)

</details>
<details>
<summary>
UpdateFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updatefiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatefiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatefiltercommandoutput.html)

</details>
<details>
<summary>
UpdateFindingsFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updatefindingsfeedbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatefindingsfeedbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatefindingsfeedbackcommandoutput.html)

</details>
<details>
<summary>
UpdateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updateipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updateipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updateipsetcommandoutput.html)

</details>
<details>
<summary>
UpdateMalwareScanSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updatemalwarescansettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatemalwarescansettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatemalwarescansettingscommandoutput.html)

</details>
<details>
<summary>
UpdateMemberDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updatememberdetectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatememberdetectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatememberdetectorscommandoutput.html)

</details>
<details>
<summary>
UpdateOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updateorganizationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updateorganizationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updateorganizationconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdatePublishingDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updatepublishingdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatepublishingdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatepublishingdestinationcommandoutput.html)

</details>
<details>
<summary>
UpdateThreatIntelSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/classes/updatethreatintelsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatethreatintelsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-guardduty/interfaces/updatethreatintelsetcommandoutput.html)

</details>
