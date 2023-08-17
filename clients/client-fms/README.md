<!-- generated file, do not edit directly -->

# @aws-sdk/client-fms

## Description

AWS SDK for JavaScript FMS Client for Node.js, Browser and React Native.

<p>This is the <i>Firewall Manager API Reference</i>. This guide is for
developers who need detailed information about the Firewall Manager API actions, data
types, and errors. For detailed information about Firewall Manager features, see the
<a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">Firewall Manager Developer Guide</a>.</p>
<p>Some API actions require explicit resource permissions. For information, see the developer guide topic
<a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a>.
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-fms
using your favorite package manager:

- `npm install @aws-sdk/client-fms`
- `yarn add @aws-sdk/client-fms`
- `pnpm add @aws-sdk/client-fms`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `FMSClient` and
the commands you need, for example `AssociateAdminAccountCommand`:

```js
// ES5 example
const { FMSClient, AssociateAdminAccountCommand } = require("@aws-sdk/client-fms");
```

```ts
// ES6+ example
import { FMSClient, AssociateAdminAccountCommand } from "@aws-sdk/client-fms";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new FMSClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateAdminAccountCommand(params);
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
import * as AWS from "@aws-sdk/client-fms";
const client = new AWS.FMS({ region: "REGION" });

// async/await.
try {
  const data = await client.associateAdminAccount(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateAdminAccount(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateAdminAccount(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-fms` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/associateadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/associateadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/associateadminaccountcommandoutput.html)

</details>
<details>
<summary>
AssociateThirdPartyFirewall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/associatethirdpartyfirewallcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/associatethirdpartyfirewallcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/associatethirdpartyfirewallcommandoutput.html)

</details>
<details>
<summary>
BatchAssociateResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/batchassociateresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/batchassociateresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/batchassociateresourcecommandoutput.html)

</details>
<details>
<summary>
BatchDisassociateResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/batchdisassociateresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/batchdisassociateresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/batchdisassociateresourcecommandoutput.html)

</details>
<details>
<summary>
DeleteAppsList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/deleteappslistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deleteappslistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deleteappslistcommandoutput.html)

</details>
<details>
<summary>
DeleteNotificationChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/deletenotificationchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deletenotificationchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deletenotificationchannelcommandoutput.html)

</details>
<details>
<summary>
DeletePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/deletepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deletepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deletepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteProtocolsList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/deleteprotocolslistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deleteprotocolslistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deleteprotocolslistcommandoutput.html)

</details>
<details>
<summary>
DeleteResourceSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/deleteresourcesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deleteresourcesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/deleteresourcesetcommandoutput.html)

</details>
<details>
<summary>
DisassociateAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/disassociateadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/disassociateadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/disassociateadminaccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateThirdPartyFirewall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/disassociatethirdpartyfirewallcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/disassociatethirdpartyfirewallcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/disassociatethirdpartyfirewallcommandoutput.html)

</details>
<details>
<summary>
GetAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getadminaccountcommandoutput.html)

</details>
<details>
<summary>
GetAdminScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getadminscopecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getadminscopecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getadminscopecommandoutput.html)

</details>
<details>
<summary>
GetAppsList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getappslistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getappslistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getappslistcommandoutput.html)

</details>
<details>
<summary>
GetComplianceDetail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getcompliancedetailcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getcompliancedetailcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getcompliancedetailcommandoutput.html)

</details>
<details>
<summary>
GetNotificationChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getnotificationchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getnotificationchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getnotificationchannelcommandoutput.html)

</details>
<details>
<summary>
GetPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getpolicycommandoutput.html)

</details>
<details>
<summary>
GetProtectionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getprotectionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getprotectionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getprotectionstatuscommandoutput.html)

</details>
<details>
<summary>
GetProtocolsList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getprotocolslistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getprotocolslistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getprotocolslistcommandoutput.html)

</details>
<details>
<summary>
GetResourceSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getresourcesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getresourcesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getresourcesetcommandoutput.html)

</details>
<details>
<summary>
GetThirdPartyFirewallAssociationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getthirdpartyfirewallassociationstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getthirdpartyfirewallassociationstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getthirdpartyfirewallassociationstatuscommandoutput.html)

</details>
<details>
<summary>
GetViolationDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/getviolationdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getviolationdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/getviolationdetailscommandoutput.html)

</details>
<details>
<summary>
ListAdminAccountsForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listadminaccountsfororganizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listadminaccountsfororganizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listadminaccountsfororganizationcommandoutput.html)

</details>
<details>
<summary>
ListAdminsManagingAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listadminsmanagingaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listadminsmanagingaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listadminsmanagingaccountcommandoutput.html)

</details>
<details>
<summary>
ListAppsLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listappslistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listappslistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listappslistscommandoutput.html)

</details>
<details>
<summary>
ListComplianceStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listcompliancestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listcompliancestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listcompliancestatuscommandoutput.html)

</details>
<details>
<summary>
ListDiscoveredResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listdiscoveredresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listdiscoveredresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listdiscoveredresourcescommandoutput.html)

</details>
<details>
<summary>
ListMemberAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listmemberaccountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listmemberaccountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listmemberaccountscommandoutput.html)

</details>
<details>
<summary>
ListPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listpoliciescommandoutput.html)

</details>
<details>
<summary>
ListProtocolsLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listprotocolslistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listprotocolslistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listprotocolslistscommandoutput.html)

</details>
<details>
<summary>
ListResourceSetResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listresourcesetresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listresourcesetresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listresourcesetresourcescommandoutput.html)

</details>
<details>
<summary>
ListResourceSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listresourcesetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listresourcesetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listresourcesetscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListThirdPartyFirewallFirewallPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/listthirdpartyfirewallfirewallpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listthirdpartyfirewallfirewallpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/listthirdpartyfirewallfirewallpoliciescommandoutput.html)

</details>
<details>
<summary>
PutAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/putadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putadminaccountcommandoutput.html)

</details>
<details>
<summary>
PutAppsList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/putappslistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putappslistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putappslistcommandoutput.html)

</details>
<details>
<summary>
PutNotificationChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/putnotificationchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putnotificationchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putnotificationchannelcommandoutput.html)

</details>
<details>
<summary>
PutPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/putpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putpolicycommandoutput.html)

</details>
<details>
<summary>
PutProtocolsList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/putprotocolslistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putprotocolslistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putprotocolslistcommandoutput.html)

</details>
<details>
<summary>
PutResourceSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/putresourcesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putresourcesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/putresourcesetcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-fms/interfaces/untagresourcecommandoutput.html)

</details>
