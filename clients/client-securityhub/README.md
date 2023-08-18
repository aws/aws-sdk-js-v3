<!-- generated file, do not edit directly -->

# @aws-sdk/client-securityhub

## Description

AWS SDK for JavaScript SecurityHub Client for Node.js, Browser and React Native.

<p>Security Hub provides you with a comprehensive view of the security state of
your Amazon Web Services environment and resources. It also provides you with the readiness
status of your environment based on controls from supported security standards. Security Hub collects security data from Amazon Web Services accounts, services, and
integrated third-party products and helps you analyze security trends in your environment
to identify the highest priority security issues. For more information about Security Hub, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">
<i>Security Hub User
Guide</i>
</a>.</p>
<p>When you use operations in the Security Hub API, the requests are executed only in
the Amazon Web Services Region that is currently active or in the specific Amazon Web Services Region that you specify in your request. Any configuration or settings change
that results from the operation is applied only to that Region. To make the same change in
other Regions, run the same command for each Region in which you want to apply the change.</p>
<p>For example, if your Region is set to <code>us-west-2</code>, when you use <code>CreateMembers</code> to add a member account to Security Hub, the association of
the member account with the administrator account is created only in the <code>us-west-2</code>
Region. Security Hub must be enabled for the member account in the same Region that the invitation
was sent from.</p>
<p>The following throttling limits apply to using Security Hub API operations.</p>
<ul>
<li>
<p>
<code>BatchEnableStandards</code> - <code>RateLimit</code> of 1 request per
second. <code>BurstLimit</code> of 1 request per second.</p>
</li>
<li>
<p>
<code>GetFindings</code> - <code>RateLimit</code> of 3 requests per second.
<code>BurstLimit</code> of 6 requests per second.</p>
</li>
<li>
<p>
<code>BatchImportFindings</code> - <code>RateLimit</code> of 10 requests per second.
<code>BurstLimit</code> of 30 requests per second.</p>
</li>
<li>
<p>
<code>BatchUpdateFindings</code> - <code>RateLimit</code> of 10 requests per second.
<code>BurstLimit</code> of 30 requests per second.</p>
</li>
<li>
<p>
<code>UpdateStandardsControl</code> - <code>RateLimit</code> of 1 request per
second. <code>BurstLimit</code> of 5 requests per second.</p>
</li>
<li>
<p>All other operations - <code>RateLimit</code> of 10 requests per second.
<code>BurstLimit</code> of 30 requests per second.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-securityhub
using your favorite package manager:

- `npm install @aws-sdk/client-securityhub`
- `yarn add @aws-sdk/client-securityhub`
- `pnpm add @aws-sdk/client-securityhub`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SecurityHubClient` and
the commands you need, for example `AcceptAdministratorInvitationCommand`:

```js
// ES5 example
const { SecurityHubClient, AcceptAdministratorInvitationCommand } = require("@aws-sdk/client-securityhub");
```

```ts
// ES6+ example
import { SecurityHubClient, AcceptAdministratorInvitationCommand } from "@aws-sdk/client-securityhub";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SecurityHubClient({ region: "REGION" });

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
import * as AWS from "@aws-sdk/client-securityhub";
const client = new AWS.SecurityHub({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-securityhub` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/acceptadministratorinvitationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/acceptadministratorinvitationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/acceptadministratorinvitationcommandoutput.html)

</details>
<details>
<summary>
AcceptInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/acceptinvitationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/acceptinvitationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/acceptinvitationcommandoutput.html)

</details>
<details>
<summary>
BatchDeleteAutomationRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchdeleteautomationrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchdeleteautomationrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchdeleteautomationrulescommandoutput.html)

</details>
<details>
<summary>
BatchDisableStandards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchdisablestandardscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchdisablestandardscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchdisablestandardscommandoutput.html)

</details>
<details>
<summary>
BatchEnableStandards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchenablestandardscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchenablestandardscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchenablestandardscommandoutput.html)

</details>
<details>
<summary>
BatchGetAutomationRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchgetautomationrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchgetautomationrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchgetautomationrulescommandoutput.html)

</details>
<details>
<summary>
BatchGetSecurityControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchgetsecuritycontrolscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchgetsecuritycontrolscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchgetsecuritycontrolscommandoutput.html)

</details>
<details>
<summary>
BatchGetStandardsControlAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchgetstandardscontrolassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchgetstandardscontrolassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchgetstandardscontrolassociationscommandoutput.html)

</details>
<details>
<summary>
BatchImportFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchimportfindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchimportfindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchimportfindingscommandoutput.html)

</details>
<details>
<summary>
BatchUpdateAutomationRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchupdateautomationrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchupdateautomationrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchupdateautomationrulescommandoutput.html)

</details>
<details>
<summary>
BatchUpdateFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchupdatefindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchupdatefindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchupdatefindingscommandoutput.html)

</details>
<details>
<summary>
BatchUpdateStandardsControlAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/batchupdatestandardscontrolassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchupdatestandardscontrolassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/batchupdatestandardscontrolassociationscommandoutput.html)

</details>
<details>
<summary>
CreateActionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/createactiontargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/createactiontargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/createactiontargetcommandoutput.html)

</details>
<details>
<summary>
CreateAutomationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/createautomationrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/createautomationrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/createautomationrulecommandoutput.html)

</details>
<details>
<summary>
CreateFindingAggregator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/createfindingaggregatorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/createfindingaggregatorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/createfindingaggregatorcommandoutput.html)

</details>
<details>
<summary>
CreateInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/createinsightcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/createinsightcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/createinsightcommandoutput.html)

</details>
<details>
<summary>
CreateMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/creatememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/creatememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/creatememberscommandoutput.html)

</details>
<details>
<summary>
DeclineInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/declineinvitationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/declineinvitationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/declineinvitationscommandoutput.html)

</details>
<details>
<summary>
DeleteActionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/deleteactiontargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deleteactiontargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deleteactiontargetcommandoutput.html)

</details>
<details>
<summary>
DeleteFindingAggregator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/deletefindingaggregatorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deletefindingaggregatorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deletefindingaggregatorcommandoutput.html)

</details>
<details>
<summary>
DeleteInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/deleteinsightcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deleteinsightcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deleteinsightcommandoutput.html)

</details>
<details>
<summary>
DeleteInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/deleteinvitationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deleteinvitationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deleteinvitationscommandoutput.html)

</details>
<details>
<summary>
DeleteMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/deletememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deletememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/deletememberscommandoutput.html)

</details>
<details>
<summary>
DescribeActionTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/describeactiontargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describeactiontargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describeactiontargetscommandoutput.html)

</details>
<details>
<summary>
DescribeHub
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/describehubcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describehubcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describehubcommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/describeorganizationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describeorganizationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describeorganizationconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeProducts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/describeproductscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describeproductscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describeproductscommandoutput.html)

</details>
<details>
<summary>
DescribeStandards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/describestandardscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describestandardscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describestandardscommandoutput.html)

</details>
<details>
<summary>
DescribeStandardsControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/describestandardscontrolscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describestandardscontrolscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/describestandardscontrolscommandoutput.html)

</details>
<details>
<summary>
DisableImportFindingsForProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/disableimportfindingsforproductcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disableimportfindingsforproductcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disableimportfindingsforproductcommandoutput.html)

</details>
<details>
<summary>
DisableOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/disableorganizationadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disableorganizationadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disableorganizationadminaccountcommandoutput.html)

</details>
<details>
<summary>
DisableSecurityHub
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/disablesecurityhubcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disablesecurityhubcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disablesecurityhubcommandoutput.html)

</details>
<details>
<summary>
DisassociateFromAdministratorAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/disassociatefromadministratoraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disassociatefromadministratoraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disassociatefromadministratoraccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateFromMasterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/disassociatefrommasteraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disassociatefrommasteraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disassociatefrommasteraccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/disassociatememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disassociatememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/disassociatememberscommandoutput.html)

</details>
<details>
<summary>
EnableImportFindingsForProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/enableimportfindingsforproductcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/enableimportfindingsforproductcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/enableimportfindingsforproductcommandoutput.html)

</details>
<details>
<summary>
EnableOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/enableorganizationadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/enableorganizationadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/enableorganizationadminaccountcommandoutput.html)

</details>
<details>
<summary>
EnableSecurityHub
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/enablesecurityhubcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/enablesecurityhubcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/enablesecurityhubcommandoutput.html)

</details>
<details>
<summary>
GetAdministratorAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getadministratoraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getadministratoraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getadministratoraccountcommandoutput.html)

</details>
<details>
<summary>
GetEnabledStandards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getenabledstandardscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getenabledstandardscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getenabledstandardscommandoutput.html)

</details>
<details>
<summary>
GetFindingAggregator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getfindingaggregatorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getfindingaggregatorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getfindingaggregatorcommandoutput.html)

</details>
<details>
<summary>
GetFindingHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getfindinghistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getfindinghistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getfindinghistorycommandoutput.html)

</details>
<details>
<summary>
GetFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getfindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getfindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getfindingscommandoutput.html)

</details>
<details>
<summary>
GetInsightResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getinsightresultscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getinsightresultscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getinsightresultscommandoutput.html)

</details>
<details>
<summary>
GetInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getinsightscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getinsightscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getinsightscommandoutput.html)

</details>
<details>
<summary>
GetInvitationsCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getinvitationscountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getinvitationscountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getinvitationscountcommandoutput.html)

</details>
<details>
<summary>
GetMasterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getmasteraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getmasteraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getmasteraccountcommandoutput.html)

</details>
<details>
<summary>
GetMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/getmemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getmemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/getmemberscommandoutput.html)

</details>
<details>
<summary>
InviteMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/invitememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/invitememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/invitememberscommandoutput.html)

</details>
<details>
<summary>
ListAutomationRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/listautomationrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listautomationrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listautomationrulescommandoutput.html)

</details>
<details>
<summary>
ListEnabledProductsForImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/listenabledproductsforimportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listenabledproductsforimportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listenabledproductsforimportcommandoutput.html)

</details>
<details>
<summary>
ListFindingAggregators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/listfindingaggregatorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listfindingaggregatorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listfindingaggregatorscommandoutput.html)

</details>
<details>
<summary>
ListInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/listinvitationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listinvitationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listinvitationscommandoutput.html)

</details>
<details>
<summary>
ListMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/listmemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listmemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listmemberscommandoutput.html)

</details>
<details>
<summary>
ListOrganizationAdminAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/listorganizationadminaccountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listorganizationadminaccountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listorganizationadminaccountscommandoutput.html)

</details>
<details>
<summary>
ListSecurityControlDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/listsecuritycontroldefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listsecuritycontroldefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listsecuritycontroldefinitionscommandoutput.html)

</details>
<details>
<summary>
ListStandardsControlAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/liststandardscontrolassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/liststandardscontrolassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/liststandardscontrolassociationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateActionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/updateactiontargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updateactiontargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updateactiontargetcommandoutput.html)

</details>
<details>
<summary>
UpdateFindingAggregator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/updatefindingaggregatorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updatefindingaggregatorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updatefindingaggregatorcommandoutput.html)

</details>
<details>
<summary>
UpdateFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/updatefindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updatefindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updatefindingscommandoutput.html)

</details>
<details>
<summary>
UpdateInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/updateinsightcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updateinsightcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updateinsightcommandoutput.html)

</details>
<details>
<summary>
UpdateOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/updateorganizationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updateorganizationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updateorganizationconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateSecurityHubConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/updatesecurityhubconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updatesecurityhubconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updatesecurityhubconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateStandardsControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/classes/updatestandardscontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updatestandardscontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securityhub/interfaces/updatestandardscontrolcommandoutput.html)

</details>
