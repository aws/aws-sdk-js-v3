<!-- generated file, do not edit directly -->

# @aws-sdk/client-rolesanywhere

## Description

AWS SDK for JavaScript RolesAnywhere Client for Node.js, Browser and React Native.

<p>Identity and Access Management Roles Anywhere provides a secure way for your workloads such as
servers, containers, and applications that run outside of Amazon Web Services to obtain
temporary Amazon Web Services credentials. Your workloads can use the same IAM policies and roles you have for native Amazon Web Services applications to access Amazon Web Services resources. Using IAM Roles Anywhere eliminates the need to
manage long-term credentials for workloads running outside of Amazon Web Services.</p>
<p>
To use IAM Roles Anywhere, your workloads must use X.509 certificates
issued by their certificate authority (CA). You register the CA with IAM
Roles Anywhere as a trust anchor to establish trust between your public key infrastructure
(PKI) and IAM Roles Anywhere. If you don't manage your own PKI system, you
can use Private Certificate Authority to create a CA and then use that to establish trust with
IAM Roles Anywhere.
</p>
<p>This guide describes the IAM Roles Anywhere operations that you can call
programmatically. For more information about IAM Roles Anywhere, see the
<a href="https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html">IAM Roles Anywhere User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-rolesanywhere
using your favorite package manager:

- `npm install @aws-sdk/client-rolesanywhere`
- `yarn add @aws-sdk/client-rolesanywhere`
- `pnpm add @aws-sdk/client-rolesanywhere`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RolesAnywhereClient` and
the commands you need, for example `CreateProfileCommand`:

```js
// ES5 example
const { RolesAnywhereClient, CreateProfileCommand } = require("@aws-sdk/client-rolesanywhere");
```

```ts
// ES6+ example
import { RolesAnywhereClient, CreateProfileCommand } from "@aws-sdk/client-rolesanywhere";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new RolesAnywhereClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateProfileCommand(params);
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
import * as AWS from "@aws-sdk/client-rolesanywhere";
const client = new AWS.RolesAnywhere({ region: "REGION" });

// async/await.
try {
  const data = await client.createProfile(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createProfile(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createProfile(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-rolesanywhere` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/createprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/createprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/createprofilecommandoutput.html)

</details>
<details>
<summary>
CreateTrustAnchor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/createtrustanchorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/createtrustanchorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/createtrustanchorcommandoutput.html)

</details>
<details>
<summary>
DeleteCrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/deletecrlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/deletecrlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/deletecrlcommandoutput.html)

</details>
<details>
<summary>
DeleteProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/deleteprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/deleteprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/deleteprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteTrustAnchor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/deletetrustanchorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/deletetrustanchorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/deletetrustanchorcommandoutput.html)

</details>
<details>
<summary>
DisableCrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/disablecrlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/disablecrlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/disablecrlcommandoutput.html)

</details>
<details>
<summary>
DisableProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/disableprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/disableprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/disableprofilecommandoutput.html)

</details>
<details>
<summary>
DisableTrustAnchor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/disabletrustanchorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/disabletrustanchorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/disabletrustanchorcommandoutput.html)

</details>
<details>
<summary>
EnableCrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/enablecrlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/enablecrlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/enablecrlcommandoutput.html)

</details>
<details>
<summary>
EnableProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/enableprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/enableprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/enableprofilecommandoutput.html)

</details>
<details>
<summary>
EnableTrustAnchor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/enabletrustanchorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/enabletrustanchorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/enabletrustanchorcommandoutput.html)

</details>
<details>
<summary>
GetCrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/getcrlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/getcrlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/getcrlcommandoutput.html)

</details>
<details>
<summary>
GetProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/getprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/getprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/getprofilecommandoutput.html)

</details>
<details>
<summary>
GetSubject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/getsubjectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/getsubjectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/getsubjectcommandoutput.html)

</details>
<details>
<summary>
GetTrustAnchor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/gettrustanchorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/gettrustanchorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/gettrustanchorcommandoutput.html)

</details>
<details>
<summary>
ImportCrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/importcrlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/importcrlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/importcrlcommandoutput.html)

</details>
<details>
<summary>
ListCrls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/listcrlscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listcrlscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listcrlscommandoutput.html)

</details>
<details>
<summary>
ListProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/listprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listprofilescommandoutput.html)

</details>
<details>
<summary>
ListSubjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/listsubjectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listsubjectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listsubjectscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTrustAnchors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/listtrustanchorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listtrustanchorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/listtrustanchorscommandoutput.html)

</details>
<details>
<summary>
PutNotificationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/putnotificationsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/putnotificationsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/putnotificationsettingscommandoutput.html)

</details>
<details>
<summary>
ResetNotificationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/resetnotificationsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/resetnotificationsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/resetnotificationsettingscommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateCrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/updatecrlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/updatecrlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/updatecrlcommandoutput.html)

</details>
<details>
<summary>
UpdateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/updateprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/updateprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/updateprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateTrustAnchor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/classes/updatetrustanchorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/updatetrustanchorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rolesanywhere/interfaces/updatetrustanchorcommandoutput.html)

</details>
