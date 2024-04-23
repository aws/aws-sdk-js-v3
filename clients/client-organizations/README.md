<!-- generated file, do not edit directly -->

# @aws-sdk/client-organizations

## Description

AWS SDK for JavaScript Organizations Client for Node.js, Browser and React Native.

<p>Organizations is a web service that enables you to consolidate your multiple
Amazon Web Services accounts into an <i>organization</i> and centrally manage your
accounts and their resources.</p>
<p>This guide provides descriptions of the Organizations operations. For more
information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p>
<p>
<b>Support and feedback for Organizations</b>
</p>
<p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in
the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support forum</a>. For
more information about the Amazon Web Services support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
<p>
<b>Endpoint to call When using the CLI or the Amazon Web Services
SDK</b>
</p>
<p>For the current release of Organizations, specify the <code>us-east-1</code> region
for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of
China. If calling from one of the Amazon Web Services Regions in China, then specify
<code>cn-northwest-1</code>. You can do this in the CLI by using these parameters
and commands:</p>
<ul>
<li>
<p>Use the following parameter with each command to specify both the endpoint and
its region:</p>
<p>
<code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
<i>(from commercial Amazon Web Services Regions outside of China)</i>
</p>
<p>or</p>
<p>
<code>--endpoint-url
https://organizations.cn-northwest-1.amazonaws.com.cn</code>
<i>(from Amazon Web Services Regions in China)</i>
</p>
</li>
<li>
<p>Use the default endpoint, but configure your default region with this
command:</p>
<p>
<code>aws configure set default.region us-east-1</code>
<i>(from commercial Amazon Web Services Regions outside of China)</i>
</p>
<p>or</p>
<p>
<code>aws configure set default.region cn-northwest-1</code>
<i>(from Amazon Web Services Regions in China)</i>
</p>
</li>
<li>
<p>Use the following parameter with each command to specify the endpoint:</p>
<p>
<code>--region us-east-1</code>
<i>(from commercial Amazon Web Services Regions outside of China)</i>
</p>
<p>or</p>
<p>
<code>--region cn-northwest-1</code>
<i>(from Amazon Web Services Regions in China)</i>
</p>
</li>
</ul>
<p>
<b>Recording API Requests</b>
</p>
<p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your
Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected
by CloudTrail, you can determine which requests the Organizations service received, who made the
request and when, and so on. For more about Organizations and its support for CloudTrail, see
<a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging
Organizations API calls with CloudTrail</a> in the
<i>Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it
on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-organizations
using your favorite package manager:

- `npm install @aws-sdk/client-organizations`
- `yarn add @aws-sdk/client-organizations`
- `pnpm add @aws-sdk/client-organizations`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `OrganizationsClient` and
the commands you need, for example `ListRootsCommand`:

```js
// ES5 example
const { OrganizationsClient, ListRootsCommand } = require("@aws-sdk/client-organizations");
```

```ts
// ES6+ example
import { OrganizationsClient, ListRootsCommand } from "@aws-sdk/client-organizations";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new OrganizationsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListRootsCommand(params);
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
import * as AWS from "@aws-sdk/client-organizations";
const client = new AWS.Organizations({ region: "REGION" });

// async/await.
try {
  const data = await client.listRoots(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listRoots(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listRoots(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-organizations` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptHandshake
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/AcceptHandshakeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/AcceptHandshakeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/AcceptHandshakeCommandOutput/)

</details>
<details>
<summary>
AttachPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/AttachPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/AttachPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/AttachPolicyCommandOutput/)

</details>
<details>
<summary>
CancelHandshake
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/CancelHandshakeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CancelHandshakeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CancelHandshakeCommandOutput/)

</details>
<details>
<summary>
CloseAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/CloseAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CloseAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CloseAccountCommandOutput/)

</details>
<details>
<summary>
CreateAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/CreateAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreateAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreateAccountCommandOutput/)

</details>
<details>
<summary>
CreateGovCloudAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/CreateGovCloudAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreateGovCloudAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreateGovCloudAccountCommandOutput/)

</details>
<details>
<summary>
CreateOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/CreateOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreateOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreateOrganizationCommandOutput/)

</details>
<details>
<summary>
CreateOrganizationalUnit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/CreateOrganizationalUnitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreateOrganizationalUnitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreateOrganizationalUnitCommandOutput/)

</details>
<details>
<summary>
CreatePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/CreatePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreatePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/CreatePolicyCommandOutput/)

</details>
<details>
<summary>
DeclineHandshake
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DeclineHandshakeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeclineHandshakeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeclineHandshakeCommandOutput/)

</details>
<details>
<summary>
DeleteOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DeleteOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeleteOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeleteOrganizationCommandOutput/)

</details>
<details>
<summary>
DeleteOrganizationalUnit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DeleteOrganizationalUnitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeleteOrganizationalUnitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeleteOrganizationalUnitCommandOutput/)

</details>
<details>
<summary>
DeletePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DeletePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeletePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeletePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DeregisterDelegatedAdministrator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DeregisterDelegatedAdministratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeregisterDelegatedAdministratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DeregisterDelegatedAdministratorCommandOutput/)

</details>
<details>
<summary>
DescribeAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DescribeAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeAccountCommandOutput/)

</details>
<details>
<summary>
DescribeCreateAccountStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DescribeCreateAccountStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeCreateAccountStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeCreateAccountStatusCommandOutput/)

</details>
<details>
<summary>
DescribeEffectivePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DescribeEffectivePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeEffectivePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeEffectivePolicyCommandOutput/)

</details>
<details>
<summary>
DescribeHandshake
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DescribeHandshakeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeHandshakeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeHandshakeCommandOutput/)

</details>
<details>
<summary>
DescribeOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DescribeOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeOrganizationCommandOutput/)

</details>
<details>
<summary>
DescribeOrganizationalUnit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DescribeOrganizationalUnitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeOrganizationalUnitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeOrganizationalUnitCommandOutput/)

</details>
<details>
<summary>
DescribePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DescribePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribePolicyCommandOutput/)

</details>
<details>
<summary>
DescribeResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DescribeResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DescribeResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DetachPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DetachPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DetachPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DetachPolicyCommandOutput/)

</details>
<details>
<summary>
DisableAWSServiceAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DisableAWSServiceAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DisableAWSServiceAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DisableAWSServiceAccessCommandOutput/)

</details>
<details>
<summary>
DisablePolicyType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/DisablePolicyTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DisablePolicyTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/DisablePolicyTypeCommandOutput/)

</details>
<details>
<summary>
EnableAllFeatures
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/EnableAllFeaturesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/EnableAllFeaturesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/EnableAllFeaturesCommandOutput/)

</details>
<details>
<summary>
EnableAWSServiceAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/EnableAWSServiceAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/EnableAWSServiceAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/EnableAWSServiceAccessCommandOutput/)

</details>
<details>
<summary>
EnablePolicyType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/EnablePolicyTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/EnablePolicyTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/EnablePolicyTypeCommandOutput/)

</details>
<details>
<summary>
InviteAccountToOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/InviteAccountToOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/InviteAccountToOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/InviteAccountToOrganizationCommandOutput/)

</details>
<details>
<summary>
LeaveOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/LeaveOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/LeaveOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/LeaveOrganizationCommandOutput/)

</details>
<details>
<summary>
ListAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListAccountsCommandOutput/)

</details>
<details>
<summary>
ListAccountsForParent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListAccountsForParentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListAccountsForParentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListAccountsForParentCommandOutput/)

</details>
<details>
<summary>
ListAWSServiceAccessForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListAWSServiceAccessForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListAWSServiceAccessForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListAWSServiceAccessForOrganizationCommandOutput/)

</details>
<details>
<summary>
ListChildren
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListChildrenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListChildrenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListChildrenCommandOutput/)

</details>
<details>
<summary>
ListCreateAccountStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListCreateAccountStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListCreateAccountStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListCreateAccountStatusCommandOutput/)

</details>
<details>
<summary>
ListDelegatedAdministrators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListDelegatedAdministratorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListDelegatedAdministratorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListDelegatedAdministratorsCommandOutput/)

</details>
<details>
<summary>
ListDelegatedServicesForAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListDelegatedServicesForAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListDelegatedServicesForAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListDelegatedServicesForAccountCommandOutput/)

</details>
<details>
<summary>
ListHandshakesForAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListHandshakesForAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListHandshakesForAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListHandshakesForAccountCommandOutput/)

</details>
<details>
<summary>
ListHandshakesForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListHandshakesForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListHandshakesForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListHandshakesForOrganizationCommandOutput/)

</details>
<details>
<summary>
ListOrganizationalUnitsForParent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListOrganizationalUnitsForParentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListOrganizationalUnitsForParentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListOrganizationalUnitsForParentCommandOutput/)

</details>
<details>
<summary>
ListParents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListParentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListParentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListParentsCommandOutput/)

</details>
<details>
<summary>
ListPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListPoliciesCommandOutput/)

</details>
<details>
<summary>
ListPoliciesForTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListPoliciesForTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListPoliciesForTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListPoliciesForTargetCommandOutput/)

</details>
<details>
<summary>
ListRoots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListRootsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListRootsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListRootsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTargetsForPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/ListTargetsForPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListTargetsForPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/ListTargetsForPolicyCommandOutput/)

</details>
<details>
<summary>
MoveAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/MoveAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/MoveAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/MoveAccountCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
RegisterDelegatedAdministrator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/RegisterDelegatedAdministratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/RegisterDelegatedAdministratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/RegisterDelegatedAdministratorCommandOutput/)

</details>
<details>
<summary>
RemoveAccountFromOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/RemoveAccountFromOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/RemoveAccountFromOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/RemoveAccountFromOrganizationCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateOrganizationalUnit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/UpdateOrganizationalUnitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/UpdateOrganizationalUnitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/UpdateOrganizationalUnitCommandOutput/)

</details>
<details>
<summary>
UpdatePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/organizations/command/UpdatePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/UpdatePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-organizations/Interface/UpdatePolicyCommandOutput/)

</details>
