<!-- generated file, do not edit directly -->

# @aws-sdk/client-workspaces-web

## Description

AWS SDK for JavaScript WorkSpacesWeb Client for Node.js, Browser and React Native.

<p>WorkSpaces Web is a low cost, fully managed WorkSpace built specifically to facilitate
secure, web-based workloads. WorkSpaces Web makes it easy for customers to safely provide
their employees with access to internal websites and SaaS web applications without the
administrative burden of appliances or specialized client software. WorkSpaces Web provides
simple policy tools tailored for user interactions, while offloading common tasks like
capacity management, scaling, and maintaining browser images.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-workspaces-web
using your favorite package manager:

- `npm install @aws-sdk/client-workspaces-web`
- `yarn add @aws-sdk/client-workspaces-web`
- `pnpm add @aws-sdk/client-workspaces-web`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkSpacesWebClient` and
the commands you need, for example `AssociateBrowserSettingsCommand`:

```js
// ES5 example
const { WorkSpacesWebClient, AssociateBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web");
```

```ts
// ES6+ example
import { WorkSpacesWebClient, AssociateBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WorkSpacesWebClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateBrowserSettingsCommand(params);
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
import * as AWS from "@aws-sdk/client-workspaces-web";
const client = new AWS.WorkSpacesWeb({ region: "REGION" });

// async/await.
try {
  const data = await client.associateBrowserSettings(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateBrowserSettings(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateBrowserSettings(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-workspaces-web` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateBrowserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/associatebrowsersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associatebrowsersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associatebrowsersettingscommandoutput.html)

</details>
<details>
<summary>
AssociateIpAccessSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/associateipaccesssettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associateipaccesssettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associateipaccesssettingscommandoutput.html)

</details>
<details>
<summary>
AssociateNetworkSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/associatenetworksettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associatenetworksettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associatenetworksettingscommandoutput.html)

</details>
<details>
<summary>
AssociateTrustStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/associatetruststorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associatetruststorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associatetruststorecommandoutput.html)

</details>
<details>
<summary>
AssociateUserAccessLoggingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/associateuseraccessloggingsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associateuseraccessloggingsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associateuseraccessloggingsettingscommandoutput.html)

</details>
<details>
<summary>
AssociateUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/associateusersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associateusersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/associateusersettingscommandoutput.html)

</details>
<details>
<summary>
CreateBrowserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/createbrowsersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createbrowsersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createbrowsersettingscommandoutput.html)

</details>
<details>
<summary>
CreateIdentityProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/createidentityprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createidentityprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createidentityprovidercommandoutput.html)

</details>
<details>
<summary>
CreateIpAccessSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/createipaccesssettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createipaccesssettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createipaccesssettingscommandoutput.html)

</details>
<details>
<summary>
CreateNetworkSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/createnetworksettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createnetworksettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createnetworksettingscommandoutput.html)

</details>
<details>
<summary>
CreatePortal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/createportalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createportalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createportalcommandoutput.html)

</details>
<details>
<summary>
CreateTrustStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/createtruststorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createtruststorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createtruststorecommandoutput.html)

</details>
<details>
<summary>
CreateUserAccessLoggingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/createuseraccessloggingsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createuseraccessloggingsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createuseraccessloggingsettingscommandoutput.html)

</details>
<details>
<summary>
CreateUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/createusersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createusersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/createusersettingscommandoutput.html)

</details>
<details>
<summary>
DeleteBrowserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/deletebrowsersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deletebrowsersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deletebrowsersettingscommandoutput.html)

</details>
<details>
<summary>
DeleteIdentityProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/deleteidentityprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteidentityprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteidentityprovidercommandoutput.html)

</details>
<details>
<summary>
DeleteIpAccessSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/deleteipaccesssettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteipaccesssettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteipaccesssettingscommandoutput.html)

</details>
<details>
<summary>
DeleteNetworkSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/deletenetworksettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deletenetworksettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deletenetworksettingscommandoutput.html)

</details>
<details>
<summary>
DeletePortal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/deleteportalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteportalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteportalcommandoutput.html)

</details>
<details>
<summary>
DeleteTrustStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/deletetruststorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deletetruststorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deletetruststorecommandoutput.html)

</details>
<details>
<summary>
DeleteUserAccessLoggingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/deleteuseraccessloggingsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteuseraccessloggingsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteuseraccessloggingsettingscommandoutput.html)

</details>
<details>
<summary>
DeleteUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/deleteusersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteusersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/deleteusersettingscommandoutput.html)

</details>
<details>
<summary>
DisassociateBrowserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/disassociatebrowsersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociatebrowsersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociatebrowsersettingscommandoutput.html)

</details>
<details>
<summary>
DisassociateIpAccessSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/disassociateipaccesssettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociateipaccesssettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociateipaccesssettingscommandoutput.html)

</details>
<details>
<summary>
DisassociateNetworkSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/disassociatenetworksettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociatenetworksettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociatenetworksettingscommandoutput.html)

</details>
<details>
<summary>
DisassociateTrustStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/disassociatetruststorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociatetruststorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociatetruststorecommandoutput.html)

</details>
<details>
<summary>
DisassociateUserAccessLoggingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/disassociateuseraccessloggingsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociateuseraccessloggingsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociateuseraccessloggingsettingscommandoutput.html)

</details>
<details>
<summary>
DisassociateUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/disassociateusersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociateusersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/disassociateusersettingscommandoutput.html)

</details>
<details>
<summary>
GetBrowserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/getbrowsersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getbrowsersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getbrowsersettingscommandoutput.html)

</details>
<details>
<summary>
GetIdentityProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/getidentityprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getidentityprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getidentityprovidercommandoutput.html)

</details>
<details>
<summary>
GetIpAccessSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/getipaccesssettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getipaccesssettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getipaccesssettingscommandoutput.html)

</details>
<details>
<summary>
GetNetworkSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/getnetworksettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getnetworksettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getnetworksettingscommandoutput.html)

</details>
<details>
<summary>
GetPortal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/getportalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getportalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getportalcommandoutput.html)

</details>
<details>
<summary>
GetPortalServiceProviderMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/getportalserviceprovidermetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getportalserviceprovidermetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getportalserviceprovidermetadatacommandoutput.html)

</details>
<details>
<summary>
GetTrustStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/gettruststorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/gettruststorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/gettruststorecommandoutput.html)

</details>
<details>
<summary>
GetTrustStoreCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/gettruststorecertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/gettruststorecertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/gettruststorecertificatecommandoutput.html)

</details>
<details>
<summary>
GetUserAccessLoggingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/getuseraccessloggingsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getuseraccessloggingsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getuseraccessloggingsettingscommandoutput.html)

</details>
<details>
<summary>
GetUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/getusersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getusersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/getusersettingscommandoutput.html)

</details>
<details>
<summary>
ListBrowserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listbrowsersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listbrowsersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listbrowsersettingscommandoutput.html)

</details>
<details>
<summary>
ListIdentityProviders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listidentityproviderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listidentityproviderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listidentityproviderscommandoutput.html)

</details>
<details>
<summary>
ListIpAccessSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listipaccesssettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listipaccesssettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listipaccesssettingscommandoutput.html)

</details>
<details>
<summary>
ListNetworkSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listnetworksettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listnetworksettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listnetworksettingscommandoutput.html)

</details>
<details>
<summary>
ListPortals
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listportalscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listportalscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listportalscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTrustStoreCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listtruststorecertificatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listtruststorecertificatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listtruststorecertificatescommandoutput.html)

</details>
<details>
<summary>
ListTrustStores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listtruststorescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listtruststorescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listtruststorescommandoutput.html)

</details>
<details>
<summary>
ListUserAccessLoggingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listuseraccessloggingsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listuseraccessloggingsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listuseraccessloggingsettingscommandoutput.html)

</details>
<details>
<summary>
ListUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/listusersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listusersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/listusersettingscommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateBrowserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/updatebrowsersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updatebrowsersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updatebrowsersettingscommandoutput.html)

</details>
<details>
<summary>
UpdateIdentityProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/updateidentityprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateidentityprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateidentityprovidercommandoutput.html)

</details>
<details>
<summary>
UpdateIpAccessSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/updateipaccesssettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateipaccesssettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateipaccesssettingscommandoutput.html)

</details>
<details>
<summary>
UpdateNetworkSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/updatenetworksettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updatenetworksettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updatenetworksettingscommandoutput.html)

</details>
<details>
<summary>
UpdatePortal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/updateportalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateportalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateportalcommandoutput.html)

</details>
<details>
<summary>
UpdateTrustStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/updatetruststorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updatetruststorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updatetruststorecommandoutput.html)

</details>
<details>
<summary>
UpdateUserAccessLoggingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/updateuseraccessloggingsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateuseraccessloggingsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateuseraccessloggingsettingscommandoutput.html)

</details>
<details>
<summary>
UpdateUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/classes/updateusersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateusersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-web/interfaces/updateusersettingscommandoutput.html)

</details>
