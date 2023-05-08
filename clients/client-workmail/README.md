<!-- generated file, do not edit directly -->

# @aws-sdk/client-workmail

## Description

AWS SDK for JavaScript WorkMail Client for Node.js, Browser and React Native.

<p>WorkMail is a secure, managed business email and calendaring service with support for
existing desktop and mobile email clients. You can access your email, contacts, and
calendars using Microsoft Outlook, your browser, or other native iOS and Android email
applications. You can integrate WorkMail with your existing corporate directory and control
both the keys that encrypt your data and the location in which your data is
stored.</p>
<p>The WorkMail API is designed for the following scenarios:</p>
<ul>
<li>
<p>Listing and describing organizations</p>
</li>
</ul>
<ul>
<li>
<p>Managing users</p>
</li>
</ul>
<ul>
<li>
<p>Managing groups</p>
</li>
</ul>
<ul>
<li>
<p>Managing resources</p>
</li>
</ul>
<p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not
only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management
users and roles to help facilitate access, trust, and permission policies. By creating a
role and allowing an IAM user to access the WorkMail site, the IAM user gains full
administrative visibility into the entire WorkMail organization (or as set in the IAM
policy). This includes, but is not limited to, the ability to create, update, and delete
users, groups, and resources. This allows developers to perform the scenarios listed above,
as well as give users the ability to grant access on a selective basis using the IAM
model.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-workmail
using your favorite package manager:

- `npm install @aws-sdk/client-workmail`
- `yarn add @aws-sdk/client-workmail`
- `pnpm add @aws-sdk/client-workmail`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkMailClient` and
the commands you need, for example `AssociateDelegateToResourceCommand`:

```js
// ES5 example
const { WorkMailClient, AssociateDelegateToResourceCommand } = require("@aws-sdk/client-workmail");
```

```ts
// ES6+ example
import { WorkMailClient, AssociateDelegateToResourceCommand } from "@aws-sdk/client-workmail";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WorkMailClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateDelegateToResourceCommand(params);
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
import * as AWS from "@aws-sdk/client-workmail";
const client = new AWS.WorkMail({ region: "REGION" });

// async/await.
try {
  const data = await client.associateDelegateToResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateDelegateToResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateDelegateToResource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-workmail` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateDelegateToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/associatedelegatetoresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/associatedelegatetoresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/associatedelegatetoresourcecommandoutput.html)

</details>
<details>
<summary>
AssociateMemberToGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/associatemembertogroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/associatemembertogroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/associatemembertogroupcommandoutput.html)

</details>
<details>
<summary>
AssumeImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/assumeimpersonationrolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/assumeimpersonationrolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/assumeimpersonationrolecommandoutput.html)

</details>
<details>
<summary>
CancelMailboxExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/cancelmailboxexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/cancelmailboxexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/cancelmailboxexportjobcommandoutput.html)

</details>
<details>
<summary>
CreateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/createaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createaliascommandoutput.html)

</details>
<details>
<summary>
CreateAvailabilityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/createavailabilityconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createavailabilityconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createavailabilityconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/creategroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/creategroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/creategroupcommandoutput.html)

</details>
<details>
<summary>
CreateImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/createimpersonationrolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createimpersonationrolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createimpersonationrolecommandoutput.html)

</details>
<details>
<summary>
CreateMobileDeviceAccessRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/createmobiledeviceaccessrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createmobiledeviceaccessrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createmobiledeviceaccessrulecommandoutput.html)

</details>
<details>
<summary>
CreateOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/createorganizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createorganizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createorganizationcommandoutput.html)

</details>
<details>
<summary>
CreateResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/createresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createresourcecommandoutput.html)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/createusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/createusercommandoutput.html)

</details>
<details>
<summary>
DeleteAccessControlRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deleteaccesscontrolrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteaccesscontrolrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteaccesscontrolrulecommandoutput.html)

</details>
<details>
<summary>
DeleteAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deletealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletealiascommandoutput.html)

</details>
<details>
<summary>
DeleteAvailabilityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deleteavailabilityconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteavailabilityconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteavailabilityconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteEmailMonitoringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deleteemailmonitoringconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteemailmonitoringconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteemailmonitoringconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deletegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deleteimpersonationrolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteimpersonationrolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteimpersonationrolecommandoutput.html)

</details>
<details>
<summary>
DeleteMailboxPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deletemailboxpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletemailboxpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletemailboxpermissionscommandoutput.html)

</details>
<details>
<summary>
DeleteMobileDeviceAccessOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deletemobiledeviceaccessoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletemobiledeviceaccessoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletemobiledeviceaccessoverridecommandoutput.html)

</details>
<details>
<summary>
DeleteMobileDeviceAccessRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deletemobiledeviceaccessrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletemobiledeviceaccessrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deletemobiledeviceaccessrulecommandoutput.html)

</details>
<details>
<summary>
DeleteOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deleteorganizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteorganizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteorganizationcommandoutput.html)

</details>
<details>
<summary>
DeleteResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deleteresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteresourcecommandoutput.html)

</details>
<details>
<summary>
DeleteRetentionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deleteretentionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteretentionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteretentionpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deleteusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deleteusercommandoutput.html)

</details>
<details>
<summary>
DeregisterFromWorkMail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deregisterfromworkmailcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deregisterfromworkmailcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deregisterfromworkmailcommandoutput.html)

</details>
<details>
<summary>
DeregisterMailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/deregistermaildomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deregistermaildomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/deregistermaildomaincommandoutput.html)

</details>
<details>
<summary>
DescribeEmailMonitoringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/describeemailmonitoringconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeemailmonitoringconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeemailmonitoringconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/describegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describegroupcommandoutput.html)

</details>
<details>
<summary>
DescribeInboundDmarcSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/describeinbounddmarcsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeinbounddmarcsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeinbounddmarcsettingscommandoutput.html)

</details>
<details>
<summary>
DescribeMailboxExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/describemailboxexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describemailboxexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describemailboxexportjobcommandoutput.html)

</details>
<details>
<summary>
DescribeOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/describeorganizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeorganizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeorganizationcommandoutput.html)

</details>
<details>
<summary>
DescribeResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/describeresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeresourcecommandoutput.html)

</details>
<details>
<summary>
DescribeUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/describeusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/describeusercommandoutput.html)

</details>
<details>
<summary>
DisassociateDelegateFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/disassociatedelegatefromresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/disassociatedelegatefromresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/disassociatedelegatefromresourcecommandoutput.html)

</details>
<details>
<summary>
DisassociateMemberFromGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/disassociatememberfromgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/disassociatememberfromgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/disassociatememberfromgroupcommandoutput.html)

</details>
<details>
<summary>
GetAccessControlEffect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/getaccesscontroleffectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getaccesscontroleffectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getaccesscontroleffectcommandoutput.html)

</details>
<details>
<summary>
GetDefaultRetentionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/getdefaultretentionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getdefaultretentionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getdefaultretentionpolicycommandoutput.html)

</details>
<details>
<summary>
GetImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/getimpersonationrolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getimpersonationrolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getimpersonationrolecommandoutput.html)

</details>
<details>
<summary>
GetImpersonationRoleEffect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/getimpersonationroleeffectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getimpersonationroleeffectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getimpersonationroleeffectcommandoutput.html)

</details>
<details>
<summary>
GetMailboxDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/getmailboxdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getmailboxdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getmailboxdetailscommandoutput.html)

</details>
<details>
<summary>
GetMailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/getmaildomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getmaildomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getmaildomaincommandoutput.html)

</details>
<details>
<summary>
GetMobileDeviceAccessEffect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/getmobiledeviceaccesseffectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getmobiledeviceaccesseffectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getmobiledeviceaccesseffectcommandoutput.html)

</details>
<details>
<summary>
GetMobileDeviceAccessOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/getmobiledeviceaccessoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getmobiledeviceaccessoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/getmobiledeviceaccessoverridecommandoutput.html)

</details>
<details>
<summary>
ListAccessControlRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listaccesscontrolrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listaccesscontrolrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listaccesscontrolrulescommandoutput.html)

</details>
<details>
<summary>
ListAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listaliasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listaliasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listaliasescommandoutput.html)

</details>
<details>
<summary>
ListAvailabilityConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listavailabilityconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listavailabilityconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listavailabilityconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListGroupMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listgroupmemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listgroupmemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listgroupmemberscommandoutput.html)

</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listgroupscommandoutput.html)

</details>
<details>
<summary>
ListImpersonationRoles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listimpersonationrolescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listimpersonationrolescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listimpersonationrolescommandoutput.html)

</details>
<details>
<summary>
ListMailboxExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listmailboxexportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmailboxexportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmailboxexportjobscommandoutput.html)

</details>
<details>
<summary>
ListMailboxPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listmailboxpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmailboxpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmailboxpermissionscommandoutput.html)

</details>
<details>
<summary>
ListMailDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listmaildomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmaildomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmaildomainscommandoutput.html)

</details>
<details>
<summary>
ListMobileDeviceAccessOverrides
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listmobiledeviceaccessoverridescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmobiledeviceaccessoverridescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmobiledeviceaccessoverridescommandoutput.html)

</details>
<details>
<summary>
ListMobileDeviceAccessRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listmobiledeviceaccessrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmobiledeviceaccessrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listmobiledeviceaccessrulescommandoutput.html)

</details>
<details>
<summary>
ListOrganizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listorganizationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listorganizationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listorganizationscommandoutput.html)

</details>
<details>
<summary>
ListResourceDelegates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listresourcedelegatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listresourcedelegatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listresourcedelegatescommandoutput.html)

</details>
<details>
<summary>
ListResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listresourcescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/listuserscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listuserscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/listuserscommandoutput.html)

</details>
<details>
<summary>
PutAccessControlRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/putaccesscontrolrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putaccesscontrolrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putaccesscontrolrulecommandoutput.html)

</details>
<details>
<summary>
PutEmailMonitoringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/putemailmonitoringconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putemailmonitoringconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putemailmonitoringconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutInboundDmarcSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/putinbounddmarcsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putinbounddmarcsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putinbounddmarcsettingscommandoutput.html)

</details>
<details>
<summary>
PutMailboxPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/putmailboxpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putmailboxpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putmailboxpermissionscommandoutput.html)

</details>
<details>
<summary>
PutMobileDeviceAccessOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/putmobiledeviceaccessoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putmobiledeviceaccessoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putmobiledeviceaccessoverridecommandoutput.html)

</details>
<details>
<summary>
PutRetentionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/putretentionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putretentionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/putretentionpolicycommandoutput.html)

</details>
<details>
<summary>
RegisterMailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/registermaildomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/registermaildomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/registermaildomaincommandoutput.html)

</details>
<details>
<summary>
RegisterToWorkMail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/registertoworkmailcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/registertoworkmailcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/registertoworkmailcommandoutput.html)

</details>
<details>
<summary>
ResetPassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/resetpasswordcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/resetpasswordcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/resetpasswordcommandoutput.html)

</details>
<details>
<summary>
StartMailboxExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/startmailboxexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/startmailboxexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/startmailboxexportjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TestAvailabilityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/testavailabilityconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/testavailabilityconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/testavailabilityconfigurationcommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAvailabilityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/updateavailabilityconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updateavailabilityconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updateavailabilityconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateDefaultMailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/updatedefaultmaildomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updatedefaultmaildomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updatedefaultmaildomaincommandoutput.html)

</details>
<details>
<summary>
UpdateImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/updateimpersonationrolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updateimpersonationrolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updateimpersonationrolecommandoutput.html)

</details>
<details>
<summary>
UpdateMailboxQuota
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/updatemailboxquotacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updatemailboxquotacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updatemailboxquotacommandoutput.html)

</details>
<details>
<summary>
UpdateMobileDeviceAccessRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/updatemobiledeviceaccessrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updatemobiledeviceaccessrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updatemobiledeviceaccessrulecommandoutput.html)

</details>
<details>
<summary>
UpdatePrimaryEmailAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/updateprimaryemailaddresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updateprimaryemailaddresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updateprimaryemailaddresscommandoutput.html)

</details>
<details>
<summary>
UpdateResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/classes/updateresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updateresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workmail/interfaces/updateresourcecommandoutput.html)

</details>
