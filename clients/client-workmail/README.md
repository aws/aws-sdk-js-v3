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
To install this package, simply type add or install @aws-sdk/client-workmail
using your favorite package manager:
- `npm install @aws-sdk/client-workmail`
- `yarn add @aws-sdk/client-workmail`
- `pnpm add @aws-sdk/client-workmail`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkMailClient` and
the commands you need, for example `ListGroupsCommand`:

```js
// ES5 example
const { WorkMailClient, ListGroupsCommand } = require("@aws-sdk/client-workmail");
```

```ts
// ES6+ example
import { WorkMailClient, ListGroupsCommand } from "@aws-sdk/client-workmail";
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

const params = { /** input parameters */ };
const command = new ListGroupsCommand(params);
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
  const data = await client.listGroups(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listGroups(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listGroups(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/AssociateDelegateToResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/AssociateDelegateToResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/AssociateDelegateToResourceCommandOutput/)
</details>
<details>
<summary>
AssociateMemberToGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/AssociateMemberToGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/AssociateMemberToGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/AssociateMemberToGroupCommandOutput/)
</details>
<details>
<summary>
AssumeImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/AssumeImpersonationRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/AssumeImpersonationRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/AssumeImpersonationRoleCommandOutput/)
</details>
<details>
<summary>
CancelMailboxExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CancelMailboxExportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CancelMailboxExportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CancelMailboxExportJobCommandOutput/)
</details>
<details>
<summary>
CreateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateAliasCommandOutput/)
</details>
<details>
<summary>
CreateAvailabilityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateAvailabilityConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateAvailabilityConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateAvailabilityConfigurationCommandOutput/)
</details>
<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateGroupCommandOutput/)
</details>
<details>
<summary>
CreateIdentityCenterApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateIdentityCenterApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateIdentityCenterApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateIdentityCenterApplicationCommandOutput/)
</details>
<details>
<summary>
CreateImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateImpersonationRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateImpersonationRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateImpersonationRoleCommandOutput/)
</details>
<details>
<summary>
CreateMobileDeviceAccessRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateMobileDeviceAccessRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateMobileDeviceAccessRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateMobileDeviceAccessRuleCommandOutput/)
</details>
<details>
<summary>
CreateOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateOrganizationCommandOutput/)
</details>
<details>
<summary>
CreateResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateResourceCommandOutput/)
</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/CreateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/CreateUserCommandOutput/)
</details>
<details>
<summary>
DeleteAccessControlRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteAccessControlRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteAccessControlRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteAccessControlRuleCommandOutput/)
</details>
<details>
<summary>
DeleteAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteAliasCommandOutput/)
</details>
<details>
<summary>
DeleteAvailabilityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteAvailabilityConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteAvailabilityConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteAvailabilityConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteEmailMonitoringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteEmailMonitoringConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteEmailMonitoringConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteEmailMonitoringConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteGroupCommandOutput/)
</details>
<details>
<summary>
DeleteIdentityCenterApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteIdentityCenterApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteIdentityCenterApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteIdentityCenterApplicationCommandOutput/)
</details>
<details>
<summary>
DeleteIdentityProviderConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteIdentityProviderConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteIdentityProviderConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteIdentityProviderConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteImpersonationRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteImpersonationRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteImpersonationRoleCommandOutput/)
</details>
<details>
<summary>
DeleteMailboxPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteMailboxPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteMailboxPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteMailboxPermissionsCommandOutput/)
</details>
<details>
<summary>
DeleteMobileDeviceAccessOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteMobileDeviceAccessOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteMobileDeviceAccessOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteMobileDeviceAccessOverrideCommandOutput/)
</details>
<details>
<summary>
DeleteMobileDeviceAccessRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteMobileDeviceAccessRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteMobileDeviceAccessRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteMobileDeviceAccessRuleCommandOutput/)
</details>
<details>
<summary>
DeleteOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteOrganizationCommandOutput/)
</details>
<details>
<summary>
DeletePersonalAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeletePersonalAccessTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeletePersonalAccessTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeletePersonalAccessTokenCommandOutput/)
</details>
<details>
<summary>
DeleteResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteResourceCommandOutput/)
</details>
<details>
<summary>
DeleteRetentionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteRetentionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteRetentionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteRetentionPolicyCommandOutput/)
</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeleteUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeleteUserCommandOutput/)
</details>
<details>
<summary>
DeregisterFromWorkMail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeregisterFromWorkMailCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeregisterFromWorkMailCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeregisterFromWorkMailCommandOutput/)
</details>
<details>
<summary>
DeregisterMailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DeregisterMailDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeregisterMailDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DeregisterMailDomainCommandOutput/)
</details>
<details>
<summary>
DescribeEmailMonitoringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeEmailMonitoringConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeEmailMonitoringConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeEmailMonitoringConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeEntity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeEntityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeEntityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeEntityCommandOutput/)
</details>
<details>
<summary>
DescribeGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeGroupCommandOutput/)
</details>
<details>
<summary>
DescribeIdentityProviderConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeIdentityProviderConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeIdentityProviderConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeIdentityProviderConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeInboundDmarcSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeInboundDmarcSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeInboundDmarcSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeInboundDmarcSettingsCommandOutput/)
</details>
<details>
<summary>
DescribeMailboxExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeMailboxExportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeMailboxExportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeMailboxExportJobCommandOutput/)
</details>
<details>
<summary>
DescribeOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeOrganizationCommandOutput/)
</details>
<details>
<summary>
DescribeResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeResourceCommandOutput/)
</details>
<details>
<summary>
DescribeUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DescribeUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DescribeUserCommandOutput/)
</details>
<details>
<summary>
DisassociateDelegateFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DisassociateDelegateFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DisassociateDelegateFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DisassociateDelegateFromResourceCommandOutput/)
</details>
<details>
<summary>
DisassociateMemberFromGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/DisassociateMemberFromGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DisassociateMemberFromGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/DisassociateMemberFromGroupCommandOutput/)
</details>
<details>
<summary>
GetAccessControlEffect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetAccessControlEffectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetAccessControlEffectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetAccessControlEffectCommandOutput/)
</details>
<details>
<summary>
GetDefaultRetentionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetDefaultRetentionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetDefaultRetentionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetDefaultRetentionPolicyCommandOutput/)
</details>
<details>
<summary>
GetImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetImpersonationRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetImpersonationRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetImpersonationRoleCommandOutput/)
</details>
<details>
<summary>
GetImpersonationRoleEffect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetImpersonationRoleEffectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetImpersonationRoleEffectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetImpersonationRoleEffectCommandOutput/)
</details>
<details>
<summary>
GetMailboxDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetMailboxDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetMailboxDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetMailboxDetailsCommandOutput/)
</details>
<details>
<summary>
GetMailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetMailDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetMailDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetMailDomainCommandOutput/)
</details>
<details>
<summary>
GetMobileDeviceAccessEffect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetMobileDeviceAccessEffectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetMobileDeviceAccessEffectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetMobileDeviceAccessEffectCommandOutput/)
</details>
<details>
<summary>
GetMobileDeviceAccessOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetMobileDeviceAccessOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetMobileDeviceAccessOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetMobileDeviceAccessOverrideCommandOutput/)
</details>
<details>
<summary>
GetPersonalAccessTokenMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/GetPersonalAccessTokenMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetPersonalAccessTokenMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/GetPersonalAccessTokenMetadataCommandOutput/)
</details>
<details>
<summary>
ListAccessControlRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListAccessControlRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListAccessControlRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListAccessControlRulesCommandOutput/)
</details>
<details>
<summary>
ListAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListAliasesCommandOutput/)
</details>
<details>
<summary>
ListAvailabilityConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListAvailabilityConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListAvailabilityConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListAvailabilityConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListGroupMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListGroupMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListGroupMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListGroupMembersCommandOutput/)
</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListGroupsCommandOutput/)
</details>
<details>
<summary>
ListGroupsForEntity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListGroupsForEntityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListGroupsForEntityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListGroupsForEntityCommandOutput/)
</details>
<details>
<summary>
ListImpersonationRoles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListImpersonationRolesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListImpersonationRolesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListImpersonationRolesCommandOutput/)
</details>
<details>
<summary>
ListMailboxExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListMailboxExportJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMailboxExportJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMailboxExportJobsCommandOutput/)
</details>
<details>
<summary>
ListMailboxPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListMailboxPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMailboxPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMailboxPermissionsCommandOutput/)
</details>
<details>
<summary>
ListMailDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListMailDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMailDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMailDomainsCommandOutput/)
</details>
<details>
<summary>
ListMobileDeviceAccessOverrides
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListMobileDeviceAccessOverridesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMobileDeviceAccessOverridesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMobileDeviceAccessOverridesCommandOutput/)
</details>
<details>
<summary>
ListMobileDeviceAccessRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListMobileDeviceAccessRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMobileDeviceAccessRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListMobileDeviceAccessRulesCommandOutput/)
</details>
<details>
<summary>
ListOrganizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListOrganizationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListOrganizationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListOrganizationsCommandOutput/)
</details>
<details>
<summary>
ListPersonalAccessTokens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListPersonalAccessTokensCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListPersonalAccessTokensCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListPersonalAccessTokensCommandOutput/)
</details>
<details>
<summary>
ListResourceDelegates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListResourceDelegatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListResourceDelegatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListResourceDelegatesCommandOutput/)
</details>
<details>
<summary>
ListResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListResourcesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ListUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ListUsersCommandOutput/)
</details>
<details>
<summary>
PutAccessControlRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/PutAccessControlRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutAccessControlRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutAccessControlRuleCommandOutput/)
</details>
<details>
<summary>
PutEmailMonitoringConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/PutEmailMonitoringConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutEmailMonitoringConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutEmailMonitoringConfigurationCommandOutput/)
</details>
<details>
<summary>
PutIdentityProviderConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/PutIdentityProviderConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutIdentityProviderConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutIdentityProviderConfigurationCommandOutput/)
</details>
<details>
<summary>
PutInboundDmarcSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/PutInboundDmarcSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutInboundDmarcSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutInboundDmarcSettingsCommandOutput/)
</details>
<details>
<summary>
PutMailboxPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/PutMailboxPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutMailboxPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutMailboxPermissionsCommandOutput/)
</details>
<details>
<summary>
PutMobileDeviceAccessOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/PutMobileDeviceAccessOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutMobileDeviceAccessOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutMobileDeviceAccessOverrideCommandOutput/)
</details>
<details>
<summary>
PutRetentionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/PutRetentionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutRetentionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/PutRetentionPolicyCommandOutput/)
</details>
<details>
<summary>
RegisterMailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/RegisterMailDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/RegisterMailDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/RegisterMailDomainCommandOutput/)
</details>
<details>
<summary>
RegisterToWorkMail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/RegisterToWorkMailCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/RegisterToWorkMailCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/RegisterToWorkMailCommandOutput/)
</details>
<details>
<summary>
ResetPassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/ResetPasswordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ResetPasswordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/ResetPasswordCommandOutput/)
</details>
<details>
<summary>
StartMailboxExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/StartMailboxExportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/StartMailboxExportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/StartMailboxExportJobCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
TestAvailabilityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/TestAvailabilityConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/TestAvailabilityConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/TestAvailabilityConfigurationCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAvailabilityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdateAvailabilityConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateAvailabilityConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateAvailabilityConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateDefaultMailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdateDefaultMailDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateDefaultMailDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateDefaultMailDomainCommandOutput/)
</details>
<details>
<summary>
UpdateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateGroupCommandOutput/)
</details>
<details>
<summary>
UpdateImpersonationRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdateImpersonationRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateImpersonationRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateImpersonationRoleCommandOutput/)
</details>
<details>
<summary>
UpdateMailboxQuota
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdateMailboxQuotaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateMailboxQuotaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateMailboxQuotaCommandOutput/)
</details>
<details>
<summary>
UpdateMobileDeviceAccessRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdateMobileDeviceAccessRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateMobileDeviceAccessRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateMobileDeviceAccessRuleCommandOutput/)
</details>
<details>
<summary>
UpdatePrimaryEmailAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdatePrimaryEmailAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdatePrimaryEmailAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdatePrimaryEmailAddressCommandOutput/)
</details>
<details>
<summary>
UpdateResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdateResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateResourceCommandOutput/)
</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workmail/command/UpdateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workmail/Interface/UpdateUserCommandOutput/)
</details>
