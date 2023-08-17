<!-- generated file, do not edit directly -->

# @aws-sdk/client-sso-admin

## Description

AWS SDK for JavaScript SSOAdmin Client for Node.js, Browser and React Native.

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create, or connect, your workforce identities and manage their
access centrally across AWS accounts and applications. IAM Identity Center is the recommended
approach for workforce authentication and authorization in AWS, for organizations of any size
and type.</p>
<note>
<p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
<code>identitystore</code> API namespaces will continue to retain their original name for
backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
</note>
<p>This reference guide provides information on single sign-on operations which could be used for
access management of AWS accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User
Guide</a>.</p>
<p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as
principals. For more information about how to work with principals and principal IDs in IAM Identity Center,
see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API
Reference</a>.</p>
<note>
<p>AWS provides SDKs that consist of libraries and sample code for various programming
languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a
convenient way to create programmatic access to IAM Identity Center and other AWS services. For more
information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-sso-admin
using your favorite package manager:

- `npm install @aws-sdk/client-sso-admin`
- `yarn add @aws-sdk/client-sso-admin`
- `pnpm add @aws-sdk/client-sso-admin`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SSOAdminClient` and
the commands you need, for example `AttachCustomerManagedPolicyReferenceToPermissionSetCommand`:

```js
// ES5 example
const {
  SSOAdminClient,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
} = require("@aws-sdk/client-sso-admin");
```

```ts
// ES6+ example
import { SSOAdminClient, AttachCustomerManagedPolicyReferenceToPermissionSetCommand } from "@aws-sdk/client-sso-admin";
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
const command = new AttachCustomerManagedPolicyReferenceToPermissionSetCommand(params);
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
  const data = await client.attachCustomerManagedPolicyReferenceToPermissionSet(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .attachCustomerManagedPolicyReferenceToPermissionSet(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.attachCustomerManagedPolicyReferenceToPermissionSet(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/attachcustomermanagedpolicyreferencetopermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/attachcustomermanagedpolicyreferencetopermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/attachcustomermanagedpolicyreferencetopermissionsetcommandoutput.html)

</details>
<details>
<summary>
AttachManagedPolicyToPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/attachmanagedpolicytopermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/attachmanagedpolicytopermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/attachmanagedpolicytopermissionsetcommandoutput.html)

</details>
<details>
<summary>
CreateAccountAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/createaccountassignmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/createaccountassignmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/createaccountassignmentcommandoutput.html)

</details>
<details>
<summary>
CreateInstanceAccessControlAttributeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/createinstanceaccesscontrolattributeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/createinstanceaccesscontrolattributeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/createinstanceaccesscontrolattributeconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreatePermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/createpermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/createpermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/createpermissionsetcommandoutput.html)

</details>
<details>
<summary>
DeleteAccountAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/deleteaccountassignmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deleteaccountassignmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deleteaccountassignmentcommandoutput.html)

</details>
<details>
<summary>
DeleteInlinePolicyFromPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/deleteinlinepolicyfrompermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deleteinlinepolicyfrompermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deleteinlinepolicyfrompermissionsetcommandoutput.html)

</details>
<details>
<summary>
DeleteInstanceAccessControlAttributeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/deleteinstanceaccesscontrolattributeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deleteinstanceaccesscontrolattributeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deleteinstanceaccesscontrolattributeconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeletePermissionsBoundaryFromPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/deletepermissionsboundaryfrompermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deletepermissionsboundaryfrompermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deletepermissionsboundaryfrompermissionsetcommandoutput.html)

</details>
<details>
<summary>
DeletePermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/deletepermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deletepermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/deletepermissionsetcommandoutput.html)

</details>
<details>
<summary>
DescribeAccountAssignmentCreationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/describeaccountassignmentcreationstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describeaccountassignmentcreationstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describeaccountassignmentcreationstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeAccountAssignmentDeletionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/describeaccountassignmentdeletionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describeaccountassignmentdeletionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describeaccountassignmentdeletionstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeInstanceAccessControlAttributeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/describeinstanceaccesscontrolattributeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describeinstanceaccesscontrolattributeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describeinstanceaccesscontrolattributeconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribePermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/describepermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describepermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describepermissionsetcommandoutput.html)

</details>
<details>
<summary>
DescribePermissionSetProvisioningStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/describepermissionsetprovisioningstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describepermissionsetprovisioningstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/describepermissionsetprovisioningstatuscommandoutput.html)

</details>
<details>
<summary>
DetachCustomerManagedPolicyReferenceFromPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/detachcustomermanagedpolicyreferencefrompermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/detachcustomermanagedpolicyreferencefrompermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/detachcustomermanagedpolicyreferencefrompermissionsetcommandoutput.html)

</details>
<details>
<summary>
DetachManagedPolicyFromPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/detachmanagedpolicyfrompermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/detachmanagedpolicyfrompermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/detachmanagedpolicyfrompermissionsetcommandoutput.html)

</details>
<details>
<summary>
GetInlinePolicyForPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/getinlinepolicyforpermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/getinlinepolicyforpermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/getinlinepolicyforpermissionsetcommandoutput.html)

</details>
<details>
<summary>
GetPermissionsBoundaryForPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/getpermissionsboundaryforpermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/getpermissionsboundaryforpermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/getpermissionsboundaryforpermissionsetcommandoutput.html)

</details>
<details>
<summary>
ListAccountAssignmentCreationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listaccountassignmentcreationstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listaccountassignmentcreationstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listaccountassignmentcreationstatuscommandoutput.html)

</details>
<details>
<summary>
ListAccountAssignmentDeletionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listaccountassignmentdeletionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listaccountassignmentdeletionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listaccountassignmentdeletionstatuscommandoutput.html)

</details>
<details>
<summary>
ListAccountAssignments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listaccountassignmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listaccountassignmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listaccountassignmentscommandoutput.html)

</details>
<details>
<summary>
ListAccountsForProvisionedPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listaccountsforprovisionedpermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listaccountsforprovisionedpermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listaccountsforprovisionedpermissionsetcommandoutput.html)

</details>
<details>
<summary>
ListCustomerManagedPolicyReferencesInPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listcustomermanagedpolicyreferencesinpermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listcustomermanagedpolicyreferencesinpermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listcustomermanagedpolicyreferencesinpermissionsetcommandoutput.html)

</details>
<details>
<summary>
ListInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listinstancescommandoutput.html)

</details>
<details>
<summary>
ListManagedPoliciesInPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listmanagedpoliciesinpermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listmanagedpoliciesinpermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listmanagedpoliciesinpermissionsetcommandoutput.html)

</details>
<details>
<summary>
ListPermissionSetProvisioningStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listpermissionsetprovisioningstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listpermissionsetprovisioningstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listpermissionsetprovisioningstatuscommandoutput.html)

</details>
<details>
<summary>
ListPermissionSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listpermissionsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listpermissionsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listpermissionsetscommandoutput.html)

</details>
<details>
<summary>
ListPermissionSetsProvisionedToAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listpermissionsetsprovisionedtoaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listpermissionsetsprovisionedtoaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listpermissionsetsprovisionedtoaccountcommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ProvisionPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/provisionpermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/provisionpermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/provisionpermissionsetcommandoutput.html)

</details>
<details>
<summary>
PutInlinePolicyToPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/putinlinepolicytopermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/putinlinepolicytopermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/putinlinepolicytopermissionsetcommandoutput.html)

</details>
<details>
<summary>
PutPermissionsBoundaryToPermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/putpermissionsboundarytopermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/putpermissionsboundarytopermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/putpermissionsboundarytopermissionsetcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateInstanceAccessControlAttributeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/updateinstanceaccesscontrolattributeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/updateinstanceaccesscontrolattributeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/updateinstanceaccesscontrolattributeconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdatePermissionSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/classes/updatepermissionsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/updatepermissionsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sso-admin/interfaces/updatepermissionsetcommandoutput.html)

</details>
