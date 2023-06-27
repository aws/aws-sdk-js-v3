<!-- generated file, do not edit directly -->

# @aws-sdk/client-verifiedpermissions

## Description

AWS SDK for JavaScript VerifiedPermissions Client for Node.js, Browser and React Native.

<p>Amazon Verified Permissions is a permissions management service from Amazon Web Services. You can use Verified Permissions to manage
permissions for your application, and authorize user access based on those permissions.
Using Verified Permissions, application developers can grant access based on information about the
users, resources, and requested actions. You can also evaluate additional information
like group membership, attributes of the resources, and session context, such as time of
request and IP addresses. Verified Permissions manages these permissions by letting you create and
store authorization policies for your applications, such as consumer-facing web sites
and enterprise business systems.</p>
<p>Verified Permissions uses Cedar as the policy language to express your permission requirements.
Cedar supports both role-based access control (RBAC) and attribute-based access
control (ABAC) authorization models.</p>
<p>For more information about configuring, administering, and using Amazon Verified Permissions in your
applications, see the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/">Amazon Verified Permissions User Guide</a>.</p>
<p>For more information about the Cedar policy language, see the <a href="https://docs.cedarpolicy.com/">Cedar Policy Language Guide</a>.</p>
<important>
<p>When you write Cedar policies that reference principals, resources and actions,
you can define the unique identifiers used for each of those elements. We strongly
recommend that you follow these best practices:</p>
<ul>
<li>
<p>
<b>Use values like universally unique identifiers
(UUIDs) for all principal and resource identifiers.</b>
</p>
<p>For example, if user <code>jane</code> leaves the company, and you later
let someone else use the name <code>jane</code>, then that new user
automatically gets access to everything granted by policies that still
reference <code>User::"jane"</code>. Cedar can’t distinguish between the
new user and the old. This applies to both principal and resource
identifiers. Always use identifiers that are guaranteed unique and never
reused to ensure that you don’t unintentionally grant access because of the
presence of an old identifier in a policy.</p>
<p>Where you use a UUID for an entity, we recommend that you follow it with
the // comment specifier and the ‘friendly’ name of your entity. This helps
to make your policies easier to understand. For example: principal ==
User::"a1b2c3d4-e5f6-a1b2-c3d4-EXAMPLE11111", // alice</p>
</li>
<li>
<p>
<b>Do not include personally identifying, confidential,
or sensitive information as part of the unique identifier for your
principals or resources.</b> These identifiers are included in
log entries shared in CloudTrail trails.</p>
</li>
</ul>
</important>
<p>Several operations return structures that appear similar, but have different purposes.
As new functionality is added to the product, the structure used in a parameter of one
operation might need to change in a way that wouldn't make sense for the same parameter
in a different operation. To help you understand the purpose of each, the following
naming convention is used for the structures:</p>
<ul>
<li>
<p>Parameter type structures that end in <code>Detail</code> are used in
<code>Get</code> operations.</p>
</li>
<li>
<p>Parameter type structures that end in <code>Item</code> are used in
<code>List</code> operations.</p>
</li>
<li>
<p>Parameter type structures that use neither suffix are used in the mutating
(create and update) operations.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-verifiedpermissions
using your favorite package manager:

- `npm install @aws-sdk/client-verifiedpermissions`
- `yarn add @aws-sdk/client-verifiedpermissions`
- `pnpm add @aws-sdk/client-verifiedpermissions`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `VerifiedPermissionsClient` and
the commands you need, for example `CreateIdentitySourceCommand`:

```js
// ES5 example
const { VerifiedPermissionsClient, CreateIdentitySourceCommand } = require("@aws-sdk/client-verifiedpermissions");
```

```ts
// ES6+ example
import { VerifiedPermissionsClient, CreateIdentitySourceCommand } from "@aws-sdk/client-verifiedpermissions";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new VerifiedPermissionsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateIdentitySourceCommand(params);
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
import * as AWS from "@aws-sdk/client-verifiedpermissions";
const client = new AWS.VerifiedPermissions({ region: "REGION" });

// async/await.
try {
  const data = await client.createIdentitySource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createIdentitySource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createIdentitySource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-verifiedpermissions` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateIdentitySource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/createidentitysourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/createidentitysourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/createidentitysourcecommandoutput.html)

</details>
<details>
<summary>
CreatePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/createpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/createpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/createpolicycommandoutput.html)

</details>
<details>
<summary>
CreatePolicyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/createpolicystorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/createpolicystorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/createpolicystorecommandoutput.html)

</details>
<details>
<summary>
CreatePolicyTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/createpolicytemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/createpolicytemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/createpolicytemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteIdentitySource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/deleteidentitysourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/deleteidentitysourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/deleteidentitysourcecommandoutput.html)

</details>
<details>
<summary>
DeletePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/deletepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/deletepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/deletepolicycommandoutput.html)

</details>
<details>
<summary>
DeletePolicyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/deletepolicystorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/deletepolicystorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/deletepolicystorecommandoutput.html)

</details>
<details>
<summary>
DeletePolicyTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/deletepolicytemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/deletepolicytemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/deletepolicytemplatecommandoutput.html)

</details>
<details>
<summary>
GetIdentitySource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/getidentitysourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getidentitysourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getidentitysourcecommandoutput.html)

</details>
<details>
<summary>
GetPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/getpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getpolicycommandoutput.html)

</details>
<details>
<summary>
GetPolicyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/getpolicystorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getpolicystorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getpolicystorecommandoutput.html)

</details>
<details>
<summary>
GetPolicyTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/getpolicytemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getpolicytemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getpolicytemplatecommandoutput.html)

</details>
<details>
<summary>
GetSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/getschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/getschemacommandoutput.html)

</details>
<details>
<summary>
IsAuthorized
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/isauthorizedcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/isauthorizedcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/isauthorizedcommandoutput.html)

</details>
<details>
<summary>
IsAuthorizedWithToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/isauthorizedwithtokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/isauthorizedwithtokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/isauthorizedwithtokencommandoutput.html)

</details>
<details>
<summary>
ListIdentitySources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/listidentitysourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/listidentitysourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/listidentitysourcescommandoutput.html)

</details>
<details>
<summary>
ListPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/listpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/listpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/listpoliciescommandoutput.html)

</details>
<details>
<summary>
ListPolicyStores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/listpolicystorescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/listpolicystorescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/listpolicystorescommandoutput.html)

</details>
<details>
<summary>
ListPolicyTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/listpolicytemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/listpolicytemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/listpolicytemplatescommandoutput.html)

</details>
<details>
<summary>
PutSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/putschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/putschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/putschemacommandoutput.html)

</details>
<details>
<summary>
UpdateIdentitySource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/updateidentitysourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/updateidentitysourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/updateidentitysourcecommandoutput.html)

</details>
<details>
<summary>
UpdatePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/updatepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/updatepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/updatepolicycommandoutput.html)

</details>
<details>
<summary>
UpdatePolicyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/updatepolicystorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/updatepolicystorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/updatepolicystorecommandoutput.html)

</details>
<details>
<summary>
UpdatePolicyTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/classes/updatepolicytemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/updatepolicytemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-verifiedpermissions/interfaces/updatepolicytemplatecommandoutput.html)

</details>
