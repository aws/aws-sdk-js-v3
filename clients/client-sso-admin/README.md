<!-- generated file, do not edit directly -->

# @aws-sdk/client-sso-admin

## Description

AWS SDK for JavaScript SSOAdmin Client for Node.js, Browser and React Native.

<p>IAM Identity Center (successor to Single Sign-On) helps you securely create, or connect, your workforce identities and manage
their access centrally across Amazon Web Services accounts and applications. IAM Identity Center is the recommended
approach for workforce authentication and authorization in Amazon Web Services, for organizations of
any size and type.</p>
<note>
<p>IAM Identity Center uses the <code>sso</code> and <code>identitystore</code> API
namespaces.</p>
</note>
<p>This reference guide provides information on single sign-on operations which could be
used for access management of Amazon Web Services accounts. For information about IAM Identity Center features, see
the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center
User Guide</a>.</p>
<p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as
principals. For more information about how to work with principals and principal IDs in
IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API
Reference</a>.</p>
<note>
<p>Amazon Web Services provides SDKs that consist of libraries and sample code for various
programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The
SDKs provide a convenient way to create programmatic access to IAM Identity Center and other Amazon Web Services
services. For more information about the Amazon Web Services SDKs, including how to download and
install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
Services</a>.</p>
</note>

## Installing

To install this package, simply type add or install @aws-sdk/client-sso-admin
using your favorite package manager:

- `npm install @aws-sdk/client-sso-admin`
- `yarn add @aws-sdk/client-sso-admin`
- `pnpm add @aws-sdk/client-sso-admin`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SSOAdminClient` and
the commands you need, for example `ListInstancesCommand`:

```js
// ES5 example
const { SSOAdminClient, ListInstancesCommand } = require("@aws-sdk/client-sso-admin");
```

```ts
// ES6+ example
import { SSOAdminClient, ListInstancesCommand } from "@aws-sdk/client-sso-admin";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SSOAdminClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListInstancesCommand(params);
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
import * as AWS from "@aws-sdk/client-sso-admin";
const client = new AWS.SSOAdmin({ region: "REGION" });

// async/await.
try {
  const data = await client.listInstances(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listInstances(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listInstances(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sso-admin` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AttachCustomerManagedPolicyReferenceToPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/AttachCustomerManagedPolicyReferenceToPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput/)

</details>
<details>
<summary>
AttachManagedPolicyToPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/AttachManagedPolicyToPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/AttachManagedPolicyToPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/AttachManagedPolicyToPermissionSetCommandOutput/)

</details>
<details>
<summary>
CreateAccountAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/CreateAccountAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateAccountAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateAccountAssignmentCommandOutput/)

</details>
<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/CreateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateApplicationCommandOutput/)

</details>
<details>
<summary>
CreateApplicationAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/CreateApplicationAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateApplicationAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateApplicationAssignmentCommandOutput/)

</details>
<details>
<summary>
CreateInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/CreateInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateInstanceCommandOutput/)

</details>
<details>
<summary>
CreateInstanceAccessControlAttributeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/CreateInstanceAccessControlAttributeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateInstanceAccessControlAttributeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateInstanceAccessControlAttributeConfigurationCommandOutput/)

</details>
<details>
<summary>
CreatePermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/CreatePermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreatePermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreatePermissionSetCommandOutput/)

</details>
<details>
<summary>
CreateTrustedTokenIssuer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/CreateTrustedTokenIssuerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateTrustedTokenIssuerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/CreateTrustedTokenIssuerCommandOutput/)

</details>
<details>
<summary>
DeleteAccountAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteAccountAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteAccountAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteAccountAssignmentCommandOutput/)

</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationCommandOutput/)

</details>
<details>
<summary>
DeleteApplicationAccessScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteApplicationAccessScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationAccessScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationAccessScopeCommandOutput/)

</details>
<details>
<summary>
DeleteApplicationAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteApplicationAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationAssignmentCommandOutput/)

</details>
<details>
<summary>
DeleteApplicationAuthenticationMethod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteApplicationAuthenticationMethodCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationAuthenticationMethodCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationAuthenticationMethodCommandOutput/)

</details>
<details>
<summary>
DeleteApplicationGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteApplicationGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteApplicationGrantCommandOutput/)

</details>
<details>
<summary>
DeleteInlinePolicyFromPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteInlinePolicyFromPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteInlinePolicyFromPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteInlinePolicyFromPermissionSetCommandOutput/)

</details>
<details>
<summary>
DeleteInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteInstanceCommandOutput/)

</details>
<details>
<summary>
DeleteInstanceAccessControlAttributeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteInstanceAccessControlAttributeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteInstanceAccessControlAttributeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteInstanceAccessControlAttributeConfigurationCommandOutput/)

</details>
<details>
<summary>
DeletePermissionsBoundaryFromPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeletePermissionsBoundaryFromPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeletePermissionsBoundaryFromPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeletePermissionsBoundaryFromPermissionSetCommandOutput/)

</details>
<details>
<summary>
DeletePermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeletePermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeletePermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeletePermissionSetCommandOutput/)

</details>
<details>
<summary>
DeleteTrustedTokenIssuer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DeleteTrustedTokenIssuerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteTrustedTokenIssuerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DeleteTrustedTokenIssuerCommandOutput/)

</details>
<details>
<summary>
DescribeAccountAssignmentCreationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribeAccountAssignmentCreationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeAccountAssignmentCreationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeAccountAssignmentCreationStatusCommandOutput/)

</details>
<details>
<summary>
DescribeAccountAssignmentDeletionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribeAccountAssignmentDeletionStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeAccountAssignmentDeletionStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeAccountAssignmentDeletionStatusCommandOutput/)

</details>
<details>
<summary>
DescribeApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribeApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeApplicationCommandOutput/)

</details>
<details>
<summary>
DescribeApplicationAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribeApplicationAssignmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeApplicationAssignmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeApplicationAssignmentCommandOutput/)

</details>
<details>
<summary>
DescribeApplicationProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribeApplicationProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeApplicationProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeApplicationProviderCommandOutput/)

</details>
<details>
<summary>
DescribeInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribeInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeInstanceCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceAccessControlAttributeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribeInstanceAccessControlAttributeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeInstanceAccessControlAttributeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeInstanceAccessControlAttributeConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribePermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribePermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribePermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribePermissionSetCommandOutput/)

</details>
<details>
<summary>
DescribePermissionSetProvisioningStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribePermissionSetProvisioningStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribePermissionSetProvisioningStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribePermissionSetProvisioningStatusCommandOutput/)

</details>
<details>
<summary>
DescribeTrustedTokenIssuer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DescribeTrustedTokenIssuerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeTrustedTokenIssuerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DescribeTrustedTokenIssuerCommandOutput/)

</details>
<details>
<summary>
DetachCustomerManagedPolicyReferenceFromPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DetachCustomerManagedPolicyReferenceFromPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput/)

</details>
<details>
<summary>
DetachManagedPolicyFromPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/DetachManagedPolicyFromPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DetachManagedPolicyFromPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/DetachManagedPolicyFromPermissionSetCommandOutput/)

</details>
<details>
<summary>
GetApplicationAccessScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/GetApplicationAccessScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetApplicationAccessScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetApplicationAccessScopeCommandOutput/)

</details>
<details>
<summary>
GetApplicationAssignmentConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/GetApplicationAssignmentConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetApplicationAssignmentConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetApplicationAssignmentConfigurationCommandOutput/)

</details>
<details>
<summary>
GetApplicationAuthenticationMethod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/GetApplicationAuthenticationMethodCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetApplicationAuthenticationMethodCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetApplicationAuthenticationMethodCommandOutput/)

</details>
<details>
<summary>
GetApplicationGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/GetApplicationGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetApplicationGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetApplicationGrantCommandOutput/)

</details>
<details>
<summary>
GetInlinePolicyForPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/GetInlinePolicyForPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetInlinePolicyForPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetInlinePolicyForPermissionSetCommandOutput/)

</details>
<details>
<summary>
GetPermissionsBoundaryForPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/GetPermissionsBoundaryForPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetPermissionsBoundaryForPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/GetPermissionsBoundaryForPermissionSetCommandOutput/)

</details>
<details>
<summary>
ListAccountAssignmentCreationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListAccountAssignmentCreationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountAssignmentCreationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountAssignmentCreationStatusCommandOutput/)

</details>
<details>
<summary>
ListAccountAssignmentDeletionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListAccountAssignmentDeletionStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountAssignmentDeletionStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountAssignmentDeletionStatusCommandOutput/)

</details>
<details>
<summary>
ListAccountAssignments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListAccountAssignmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountAssignmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountAssignmentsCommandOutput/)

</details>
<details>
<summary>
ListAccountAssignmentsForPrincipal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListAccountAssignmentsForPrincipalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountAssignmentsForPrincipalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountAssignmentsForPrincipalCommandOutput/)

</details>
<details>
<summary>
ListAccountsForProvisionedPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListAccountsForProvisionedPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountsForProvisionedPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListAccountsForProvisionedPermissionSetCommandOutput/)

</details>
<details>
<summary>
ListApplicationAccessScopes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListApplicationAccessScopesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationAccessScopesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationAccessScopesCommandOutput/)

</details>
<details>
<summary>
ListApplicationAssignments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListApplicationAssignmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationAssignmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationAssignmentsCommandOutput/)

</details>
<details>
<summary>
ListApplicationAssignmentsForPrincipal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListApplicationAssignmentsForPrincipalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationAssignmentsForPrincipalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationAssignmentsForPrincipalCommandOutput/)

</details>
<details>
<summary>
ListApplicationAuthenticationMethods
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListApplicationAuthenticationMethodsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationAuthenticationMethodsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationAuthenticationMethodsCommandOutput/)

</details>
<details>
<summary>
ListApplicationGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListApplicationGrantsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationGrantsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationGrantsCommandOutput/)

</details>
<details>
<summary>
ListApplicationProviders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListApplicationProvidersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationProvidersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationProvidersCommandOutput/)

</details>
<details>
<summary>
ListApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListApplicationsCommandOutput/)

</details>
<details>
<summary>
ListCustomerManagedPolicyReferencesInPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListCustomerManagedPolicyReferencesInPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListCustomerManagedPolicyReferencesInPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput/)

</details>
<details>
<summary>
ListInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListInstancesCommandOutput/)

</details>
<details>
<summary>
ListManagedPoliciesInPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListManagedPoliciesInPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListManagedPoliciesInPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListManagedPoliciesInPermissionSetCommandOutput/)

</details>
<details>
<summary>
ListPermissionSetProvisioningStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListPermissionSetProvisioningStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListPermissionSetProvisioningStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListPermissionSetProvisioningStatusCommandOutput/)

</details>
<details>
<summary>
ListPermissionSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListPermissionSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListPermissionSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListPermissionSetsCommandOutput/)

</details>
<details>
<summary>
ListPermissionSetsProvisionedToAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListPermissionSetsProvisionedToAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListPermissionSetsProvisionedToAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListPermissionSetsProvisionedToAccountCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTrustedTokenIssuers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ListTrustedTokenIssuersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListTrustedTokenIssuersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ListTrustedTokenIssuersCommandOutput/)

</details>
<details>
<summary>
ProvisionPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/ProvisionPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ProvisionPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/ProvisionPermissionSetCommandOutput/)

</details>
<details>
<summary>
PutApplicationAccessScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/PutApplicationAccessScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutApplicationAccessScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutApplicationAccessScopeCommandOutput/)

</details>
<details>
<summary>
PutApplicationAssignmentConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/PutApplicationAssignmentConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutApplicationAssignmentConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutApplicationAssignmentConfigurationCommandOutput/)

</details>
<details>
<summary>
PutApplicationAuthenticationMethod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/PutApplicationAuthenticationMethodCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutApplicationAuthenticationMethodCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutApplicationAuthenticationMethodCommandOutput/)

</details>
<details>
<summary>
PutApplicationGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/PutApplicationGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutApplicationGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutApplicationGrantCommandOutput/)

</details>
<details>
<summary>
PutInlinePolicyToPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/PutInlinePolicyToPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutInlinePolicyToPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutInlinePolicyToPermissionSetCommandOutput/)

</details>
<details>
<summary>
PutPermissionsBoundaryToPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/PutPermissionsBoundaryToPermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutPermissionsBoundaryToPermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/PutPermissionsBoundaryToPermissionSetCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/UpdateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdateApplicationCommandOutput/)

</details>
<details>
<summary>
UpdateInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/UpdateInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdateInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdateInstanceCommandOutput/)

</details>
<details>
<summary>
UpdateInstanceAccessControlAttributeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/UpdateInstanceAccessControlAttributeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdateInstanceAccessControlAttributeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdateInstanceAccessControlAttributeConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdatePermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/UpdatePermissionSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdatePermissionSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdatePermissionSetCommandOutput/)

</details>
<details>
<summary>
UpdateTrustedTokenIssuer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sso-admin/command/UpdateTrustedTokenIssuerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdateTrustedTokenIssuerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sso-admin/Interface/UpdateTrustedTokenIssuerCommandOutput/)

</details>
