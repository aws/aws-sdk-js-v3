<!-- generated file, do not edit directly -->

# @aws-sdk/client-partnercentral-selling

## Description

AWS SDK for JavaScript PartnerCentralSelling Client for Node.js, Browser and React Native.

<fullname>AWS Partner Central API for Selling</fullname>

<p>
<b>AWS Partner Central API for Selling Reference
Guide</b>
</p>
<p>This Amazon Web Services (AWS) Partner Central API reference is designed to help
<a href="http://aws.amazon.com/partners/programs/">AWS Partners</a> integrate
Customer Relationship Management (CRM) systems with AWS Partner Central. Partners can
automate interactions with AWS Partner Central, which helps to ensure effective
engagements in joint business activities.</p>
<p>The API provides standard AWS API functionality. Access it by either using API <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/API_Operations.html">Actions</a> or by using an AWS SDK that's tailored to your programming language
or platform. For more information, see <a href="http://aws.amazon.com/getting-started">Getting Started with AWS</a> and <a href="http://aws.amazon.com/developer/tools/">Tools to Build on AWS</a>.</p>
<p class="title">
<b>Features offered by AWS Partner Central API</b>
</p>
<ol>
<li>
<p>
<b>Opportunity management:</b> Manages coselling
opportunities through API actions such as <code>CreateOpportunity</code>,
<code>UpdateOpportunity</code>, <code>ListOpportunities</code>,
<code>GetOpportunity</code>, and <code>AssignOpportunity</code>.</p>
</li>
<li>
<p>
<b>AWS referral management:</b> Manages referrals
shared by AWS using actions such as <code>ListEngagementInvitations</code>,
<code>GetEngagementInvitation</code>,
<code>StartEngagementByAcceptingInvitation</code>, and
<code>RejectEngagementInvitation</code>.</p>
</li>
<li>
<p>
<b>Entity association:</b> Associates related
entities such as <i>AWS Products</i>, <i>Partner
Solutions</i>, and <i>AWS Marketplace Private
Offers</i> with opportunities using the actions
<code>AssociateOpportunity</code>, and
<code>DisassociateOpportunity</code>.</p>
</li>
<li>
<p>
<b>View AWS opportunity details:</b> Retrieves
real-time summaries of AWS opportunities using the
<code>GetAWSOpportunitySummary</code> action.</p>
</li>
<li>
<p>
<b>List solutions:</b> Provides list APIs for
listing partner offers using <code>ListSolutions</code>.</p>
</li>
<li>
<p>
<b>Event subscription:</b> Subscribe to real-time
opportunity updates through AWS EventBridge by using actions such as
<i>Opportunity Created</i>, <i>Opportunity
Updated</i>, <i>Engagement Invitation Accepted</i>,
<i>Engagement Invitation Rejected</i>, and
<i>Engagement Invitation Created</i>.</p>
</li>
</ol>

## Installing

To install this package, simply type add or install @aws-sdk/client-partnercentral-selling
using your favorite package manager:

- `npm install @aws-sdk/client-partnercentral-selling`
- `yarn add @aws-sdk/client-partnercentral-selling`
- `pnpm add @aws-sdk/client-partnercentral-selling`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PartnerCentralSellingClient` and
the commands you need, for example `ListEngagementsCommand`:

```js
// ES5 example
const { PartnerCentralSellingClient, ListEngagementsCommand } = require("@aws-sdk/client-partnercentral-selling");
```

```ts
// ES6+ example
import { PartnerCentralSellingClient, ListEngagementsCommand } from "@aws-sdk/client-partnercentral-selling";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PartnerCentralSellingClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListEngagementsCommand(params);
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
import * as AWS from "@aws-sdk/client-partnercentral-selling";
const client = new AWS.PartnerCentralSelling({ region: "REGION" });

// async/await.
try {
  const data = await client.listEngagements(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listEngagements(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listEngagements(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-partnercentral-selling` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptEngagementInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/AcceptEngagementInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/AcceptEngagementInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/AcceptEngagementInvitationCommandOutput/)

</details>
<details>
<summary>
AssignOpportunity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/AssignOpportunityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/AssignOpportunityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/AssignOpportunityCommandOutput/)

</details>
<details>
<summary>
AssociateOpportunity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/AssociateOpportunityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/AssociateOpportunityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/AssociateOpportunityCommandOutput/)

</details>
<details>
<summary>
CreateEngagement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/CreateEngagementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateEngagementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateEngagementCommandOutput/)

</details>
<details>
<summary>
CreateEngagementInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/CreateEngagementInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateEngagementInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateEngagementInvitationCommandOutput/)

</details>
<details>
<summary>
CreateOpportunity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/CreateOpportunityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateOpportunityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateOpportunityCommandOutput/)

</details>
<details>
<summary>
CreateResourceSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/CreateResourceSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateResourceSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateResourceSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateResourceSnapshotJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/CreateResourceSnapshotJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateResourceSnapshotJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/CreateResourceSnapshotJobCommandOutput/)

</details>
<details>
<summary>
DeleteResourceSnapshotJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/DeleteResourceSnapshotJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/DeleteResourceSnapshotJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/DeleteResourceSnapshotJobCommandOutput/)

</details>
<details>
<summary>
DisassociateOpportunity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/DisassociateOpportunityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/DisassociateOpportunityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/DisassociateOpportunityCommandOutput/)

</details>
<details>
<summary>
GetAwsOpportunitySummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/GetAwsOpportunitySummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetAwsOpportunitySummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetAwsOpportunitySummaryCommandOutput/)

</details>
<details>
<summary>
GetEngagement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/GetEngagementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetEngagementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetEngagementCommandOutput/)

</details>
<details>
<summary>
GetEngagementInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/GetEngagementInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetEngagementInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetEngagementInvitationCommandOutput/)

</details>
<details>
<summary>
GetOpportunity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/GetOpportunityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetOpportunityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetOpportunityCommandOutput/)

</details>
<details>
<summary>
GetResourceSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/GetResourceSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetResourceSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetResourceSnapshotCommandOutput/)

</details>
<details>
<summary>
GetResourceSnapshotJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/GetResourceSnapshotJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetResourceSnapshotJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetResourceSnapshotJobCommandOutput/)

</details>
<details>
<summary>
GetSellingSystemSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/GetSellingSystemSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetSellingSystemSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/GetSellingSystemSettingsCommandOutput/)

</details>
<details>
<summary>
ListEngagementByAcceptingInvitationTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListEngagementByAcceptingInvitationTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementByAcceptingInvitationTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementByAcceptingInvitationTasksCommandOutput/)

</details>
<details>
<summary>
ListEngagementFromOpportunityTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListEngagementFromOpportunityTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementFromOpportunityTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementFromOpportunityTasksCommandOutput/)

</details>
<details>
<summary>
ListEngagementInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListEngagementInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementInvitationsCommandOutput/)

</details>
<details>
<summary>
ListEngagementMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListEngagementMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementMembersCommandOutput/)

</details>
<details>
<summary>
ListEngagementResourceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListEngagementResourceAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementResourceAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementResourceAssociationsCommandOutput/)

</details>
<details>
<summary>
ListEngagements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListEngagementsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListEngagementsCommandOutput/)

</details>
<details>
<summary>
ListOpportunities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListOpportunitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListOpportunitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListOpportunitiesCommandOutput/)

</details>
<details>
<summary>
ListResourceSnapshotJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListResourceSnapshotJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListResourceSnapshotJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListResourceSnapshotJobsCommandOutput/)

</details>
<details>
<summary>
ListResourceSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListResourceSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListResourceSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListResourceSnapshotsCommandOutput/)

</details>
<details>
<summary>
ListSolutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/ListSolutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListSolutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/ListSolutionsCommandOutput/)

</details>
<details>
<summary>
PutSellingSystemSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/PutSellingSystemSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/PutSellingSystemSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/PutSellingSystemSettingsCommandOutput/)

</details>
<details>
<summary>
RejectEngagementInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/RejectEngagementInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/RejectEngagementInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/RejectEngagementInvitationCommandOutput/)

</details>
<details>
<summary>
StartEngagementByAcceptingInvitationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/StartEngagementByAcceptingInvitationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/StartEngagementByAcceptingInvitationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/StartEngagementByAcceptingInvitationTaskCommandOutput/)

</details>
<details>
<summary>
StartEngagementFromOpportunityTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/StartEngagementFromOpportunityTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/StartEngagementFromOpportunityTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/StartEngagementFromOpportunityTaskCommandOutput/)

</details>
<details>
<summary>
StartResourceSnapshotJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/StartResourceSnapshotJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/StartResourceSnapshotJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/StartResourceSnapshotJobCommandOutput/)

</details>
<details>
<summary>
StopResourceSnapshotJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/StopResourceSnapshotJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/StopResourceSnapshotJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/StopResourceSnapshotJobCommandOutput/)

</details>
<details>
<summary>
SubmitOpportunity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/SubmitOpportunityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/SubmitOpportunityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/SubmitOpportunityCommandOutput/)

</details>
<details>
<summary>
UpdateOpportunity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-selling/command/UpdateOpportunityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/UpdateOpportunityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-selling/Interface/UpdateOpportunityCommandOutput/)

</details>
