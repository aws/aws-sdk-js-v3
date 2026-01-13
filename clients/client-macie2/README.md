<!-- generated file, do not edit directly -->

# @aws-sdk/client-macie2

## Description

AWS SDK for JavaScript Macie2 Client for Node.js, Browser and React Native.

<p>Amazon Macie</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-macie2
using your favorite package manager:
- `npm install @aws-sdk/client-macie2`
- `yarn add @aws-sdk/client-macie2`
- `pnpm add @aws-sdk/client-macie2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Macie2Client` and
the commands you need, for example `ListMembersCommand`:

```js
// ES5 example
const { Macie2Client, ListMembersCommand } = require("@aws-sdk/client-macie2");
```

```ts
// ES6+ example
import { Macie2Client, ListMembersCommand } from "@aws-sdk/client-macie2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new Macie2Client({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListMembersCommand(params);
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
import * as AWS from "@aws-sdk/client-macie2";
const client = new AWS.Macie2({ region: "REGION" });

// async/await.
try {
  const data = await client.listMembers(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listMembers(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listMembers(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-macie2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/AcceptInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/AcceptInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/AcceptInvitationCommandOutput/)
</details>
<details>
<summary>
BatchGetCustomDataIdentifiers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/BatchGetCustomDataIdentifiersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/BatchGetCustomDataIdentifiersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/BatchGetCustomDataIdentifiersCommandOutput/)
</details>
<details>
<summary>
BatchUpdateAutomatedDiscoveryAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/BatchUpdateAutomatedDiscoveryAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/BatchUpdateAutomatedDiscoveryAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/BatchUpdateAutomatedDiscoveryAccountsCommandOutput/)
</details>
<details>
<summary>
CreateAllowList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/CreateAllowListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateAllowListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateAllowListCommandOutput/)
</details>
<details>
<summary>
CreateClassificationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/CreateClassificationJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateClassificationJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateClassificationJobCommandOutput/)
</details>
<details>
<summary>
CreateCustomDataIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/CreateCustomDataIdentifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateCustomDataIdentifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateCustomDataIdentifierCommandOutput/)
</details>
<details>
<summary>
CreateFindingsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/CreateFindingsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateFindingsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateFindingsFilterCommandOutput/)
</details>
<details>
<summary>
CreateInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/CreateInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateInvitationsCommandOutput/)
</details>
<details>
<summary>
CreateMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/CreateMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateMemberCommandOutput/)
</details>
<details>
<summary>
CreateSampleFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/CreateSampleFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateSampleFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/CreateSampleFindingsCommandOutput/)
</details>
<details>
<summary>
DeclineInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DeclineInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeclineInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeclineInvitationsCommandOutput/)
</details>
<details>
<summary>
DeleteAllowList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DeleteAllowListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteAllowListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteAllowListCommandOutput/)
</details>
<details>
<summary>
DeleteCustomDataIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DeleteCustomDataIdentifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteCustomDataIdentifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteCustomDataIdentifierCommandOutput/)
</details>
<details>
<summary>
DeleteFindingsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DeleteFindingsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteFindingsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteFindingsFilterCommandOutput/)
</details>
<details>
<summary>
DeleteInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DeleteInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteInvitationsCommandOutput/)
</details>
<details>
<summary>
DeleteMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DeleteMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DeleteMemberCommandOutput/)
</details>
<details>
<summary>
DescribeBuckets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DescribeBucketsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DescribeBucketsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DescribeBucketsCommandOutput/)
</details>
<details>
<summary>
DescribeClassificationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DescribeClassificationJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DescribeClassificationJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DescribeClassificationJobCommandOutput/)
</details>
<details>
<summary>
DescribeOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DescribeOrganizationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DescribeOrganizationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DescribeOrganizationConfigurationCommandOutput/)
</details>
<details>
<summary>
DisableMacie
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DisableMacieCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisableMacieCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisableMacieCommandOutput/)
</details>
<details>
<summary>
DisableOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DisableOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisableOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisableOrganizationAdminAccountCommandOutput/)
</details>
<details>
<summary>
DisassociateFromAdministratorAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DisassociateFromAdministratorAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisassociateFromAdministratorAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisassociateFromAdministratorAccountCommandOutput/)
</details>
<details>
<summary>
DisassociateFromMasterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DisassociateFromMasterAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisassociateFromMasterAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisassociateFromMasterAccountCommandOutput/)
</details>
<details>
<summary>
DisassociateMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/DisassociateMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisassociateMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/DisassociateMemberCommandOutput/)
</details>
<details>
<summary>
EnableMacie
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/EnableMacieCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/EnableMacieCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/EnableMacieCommandOutput/)
</details>
<details>
<summary>
EnableOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/EnableOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/EnableOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/EnableOrganizationAdminAccountCommandOutput/)
</details>
<details>
<summary>
GetAdministratorAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetAdministratorAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetAdministratorAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetAdministratorAccountCommandOutput/)
</details>
<details>
<summary>
GetAllowList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetAllowListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetAllowListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetAllowListCommandOutput/)
</details>
<details>
<summary>
GetAutomatedDiscoveryConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetAutomatedDiscoveryConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetAutomatedDiscoveryConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetAutomatedDiscoveryConfigurationCommandOutput/)
</details>
<details>
<summary>
GetBucketStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetBucketStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetBucketStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetBucketStatisticsCommandOutput/)
</details>
<details>
<summary>
GetClassificationExportConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetClassificationExportConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetClassificationExportConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetClassificationExportConfigurationCommandOutput/)
</details>
<details>
<summary>
GetClassificationScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetClassificationScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetClassificationScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetClassificationScopeCommandOutput/)
</details>
<details>
<summary>
GetCustomDataIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetCustomDataIdentifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetCustomDataIdentifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetCustomDataIdentifierCommandOutput/)
</details>
<details>
<summary>
GetFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetFindingsCommandOutput/)
</details>
<details>
<summary>
GetFindingsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetFindingsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetFindingsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetFindingsFilterCommandOutput/)
</details>
<details>
<summary>
GetFindingsPublicationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetFindingsPublicationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetFindingsPublicationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetFindingsPublicationConfigurationCommandOutput/)
</details>
<details>
<summary>
GetFindingStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetFindingStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetFindingStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetFindingStatisticsCommandOutput/)
</details>
<details>
<summary>
GetInvitationsCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetInvitationsCountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetInvitationsCountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetInvitationsCountCommandOutput/)
</details>
<details>
<summary>
GetMacieSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetMacieSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetMacieSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetMacieSessionCommandOutput/)
</details>
<details>
<summary>
GetMasterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetMasterAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetMasterAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetMasterAccountCommandOutput/)
</details>
<details>
<summary>
GetMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetMemberCommandOutput/)
</details>
<details>
<summary>
GetResourceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetResourceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetResourceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetResourceProfileCommandOutput/)
</details>
<details>
<summary>
GetRevealConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetRevealConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetRevealConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetRevealConfigurationCommandOutput/)
</details>
<details>
<summary>
GetSensitiveDataOccurrences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetSensitiveDataOccurrencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetSensitiveDataOccurrencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetSensitiveDataOccurrencesCommandOutput/)
</details>
<details>
<summary>
GetSensitiveDataOccurrencesAvailability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetSensitiveDataOccurrencesAvailabilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetSensitiveDataOccurrencesAvailabilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetSensitiveDataOccurrencesAvailabilityCommandOutput/)
</details>
<details>
<summary>
GetSensitivityInspectionTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetSensitivityInspectionTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetSensitivityInspectionTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetSensitivityInspectionTemplateCommandOutput/)
</details>
<details>
<summary>
GetUsageStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetUsageStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetUsageStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetUsageStatisticsCommandOutput/)
</details>
<details>
<summary>
GetUsageTotals
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/GetUsageTotalsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetUsageTotalsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/GetUsageTotalsCommandOutput/)
</details>
<details>
<summary>
ListAllowLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListAllowListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListAllowListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListAllowListsCommandOutput/)
</details>
<details>
<summary>
ListAutomatedDiscoveryAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListAutomatedDiscoveryAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListAutomatedDiscoveryAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListAutomatedDiscoveryAccountsCommandOutput/)
</details>
<details>
<summary>
ListClassificationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListClassificationJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListClassificationJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListClassificationJobsCommandOutput/)
</details>
<details>
<summary>
ListClassificationScopes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListClassificationScopesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListClassificationScopesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListClassificationScopesCommandOutput/)
</details>
<details>
<summary>
ListCustomDataIdentifiers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListCustomDataIdentifiersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListCustomDataIdentifiersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListCustomDataIdentifiersCommandOutput/)
</details>
<details>
<summary>
ListFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListFindingsCommandOutput/)
</details>
<details>
<summary>
ListFindingsFilters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListFindingsFiltersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListFindingsFiltersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListFindingsFiltersCommandOutput/)
</details>
<details>
<summary>
ListInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListInvitationsCommandOutput/)
</details>
<details>
<summary>
ListManagedDataIdentifiers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListManagedDataIdentifiersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListManagedDataIdentifiersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListManagedDataIdentifiersCommandOutput/)
</details>
<details>
<summary>
ListMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListMembersCommandOutput/)
</details>
<details>
<summary>
ListOrganizationAdminAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListOrganizationAdminAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListOrganizationAdminAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListOrganizationAdminAccountsCommandOutput/)
</details>
<details>
<summary>
ListResourceProfileArtifacts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListResourceProfileArtifactsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListResourceProfileArtifactsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListResourceProfileArtifactsCommandOutput/)
</details>
<details>
<summary>
ListResourceProfileDetections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListResourceProfileDetectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListResourceProfileDetectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListResourceProfileDetectionsCommandOutput/)
</details>
<details>
<summary>
ListSensitivityInspectionTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListSensitivityInspectionTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListSensitivityInspectionTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListSensitivityInspectionTemplatesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PutClassificationExportConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/PutClassificationExportConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/PutClassificationExportConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/PutClassificationExportConfigurationCommandOutput/)
</details>
<details>
<summary>
PutFindingsPublicationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/PutFindingsPublicationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/PutFindingsPublicationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/PutFindingsPublicationConfigurationCommandOutput/)
</details>
<details>
<summary>
SearchResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/SearchResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/SearchResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/SearchResourcesCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
TestCustomDataIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/TestCustomDataIdentifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/TestCustomDataIdentifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/TestCustomDataIdentifierCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAllowList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateAllowListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateAllowListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateAllowListCommandOutput/)
</details>
<details>
<summary>
UpdateAutomatedDiscoveryConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateAutomatedDiscoveryConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateAutomatedDiscoveryConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateAutomatedDiscoveryConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateClassificationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateClassificationJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateClassificationJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateClassificationJobCommandOutput/)
</details>
<details>
<summary>
UpdateClassificationScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateClassificationScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateClassificationScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateClassificationScopeCommandOutput/)
</details>
<details>
<summary>
UpdateFindingsFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateFindingsFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateFindingsFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateFindingsFilterCommandOutput/)
</details>
<details>
<summary>
UpdateMacieSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateMacieSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateMacieSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateMacieSessionCommandOutput/)
</details>
<details>
<summary>
UpdateMemberSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateMemberSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateMemberSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateMemberSessionCommandOutput/)
</details>
<details>
<summary>
UpdateOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateOrganizationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateOrganizationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateOrganizationConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateResourceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateResourceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateResourceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateResourceProfileCommandOutput/)
</details>
<details>
<summary>
UpdateResourceProfileDetections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateResourceProfileDetectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateResourceProfileDetectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateResourceProfileDetectionsCommandOutput/)
</details>
<details>
<summary>
UpdateRevealConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateRevealConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateRevealConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateRevealConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateSensitivityInspectionTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/macie2/command/UpdateSensitivityInspectionTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateSensitivityInspectionTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-macie2/Interface/UpdateSensitivityInspectionTemplateCommandOutput/)
</details>
