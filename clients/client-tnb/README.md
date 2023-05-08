<!-- generated file, do not edit directly -->

# @aws-sdk/client-tnb

## Description

AWS SDK for JavaScript Tnb Client for Node.js, Browser and React Native.

<p> Amazon Web Services Telco Network Builder (TNB) is a network automation service that helps you deploy and manage telecom networks. AWS TNB helps you with the lifecycle management of your telecommunication network functions throughout planning, deployment, and post-deployment activities.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-tnb
using your favorite package manager:

- `npm install @aws-sdk/client-tnb`
- `yarn add @aws-sdk/client-tnb`
- `pnpm add @aws-sdk/client-tnb`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `TnbClient` and
the commands you need, for example `CancelSolNetworkOperationCommand`:

```js
// ES5 example
const { TnbClient, CancelSolNetworkOperationCommand } = require("@aws-sdk/client-tnb");
```

```ts
// ES6+ example
import { TnbClient, CancelSolNetworkOperationCommand } from "@aws-sdk/client-tnb";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new TnbClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CancelSolNetworkOperationCommand(params);
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
import * as AWS from "@aws-sdk/client-tnb";
const client = new AWS.Tnb({ region: "REGION" });

// async/await.
try {
  const data = await client.cancelSolNetworkOperation(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelSolNetworkOperation(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelSolNetworkOperation(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-tnb` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelSolNetworkOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/cancelsolnetworkoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/cancelsolnetworkoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/cancelsolnetworkoperationcommandoutput.html)

</details>
<details>
<summary>
CreateSolFunctionPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/createsolfunctionpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/createsolfunctionpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/createsolfunctionpackagecommandoutput.html)

</details>
<details>
<summary>
CreateSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/createsolnetworkinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/createsolnetworkinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/createsolnetworkinstancecommandoutput.html)

</details>
<details>
<summary>
CreateSolNetworkPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/createsolnetworkpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/createsolnetworkpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/createsolnetworkpackagecommandoutput.html)

</details>
<details>
<summary>
DeleteSolFunctionPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/deletesolfunctionpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/deletesolfunctionpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/deletesolfunctionpackagecommandoutput.html)

</details>
<details>
<summary>
DeleteSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/deletesolnetworkinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/deletesolnetworkinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/deletesolnetworkinstancecommandoutput.html)

</details>
<details>
<summary>
DeleteSolNetworkPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/deletesolnetworkpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/deletesolnetworkpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/deletesolnetworkpackagecommandoutput.html)

</details>
<details>
<summary>
GetSolFunctionInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolfunctioninstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolfunctioninstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolfunctioninstancecommandoutput.html)

</details>
<details>
<summary>
GetSolFunctionPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolfunctionpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolfunctionpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolfunctionpackagecommandoutput.html)

</details>
<details>
<summary>
GetSolFunctionPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolfunctionpackagecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolfunctionpackagecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolfunctionpackagecontentcommandoutput.html)

</details>
<details>
<summary>
GetSolFunctionPackageDescriptor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolfunctionpackagedescriptorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolfunctionpackagedescriptorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolfunctionpackagedescriptorcommandoutput.html)

</details>
<details>
<summary>
GetSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolnetworkinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkinstancecommandoutput.html)

</details>
<details>
<summary>
GetSolNetworkOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolnetworkoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkoperationcommandoutput.html)

</details>
<details>
<summary>
GetSolNetworkPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolnetworkpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkpackagecommandoutput.html)

</details>
<details>
<summary>
GetSolNetworkPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolnetworkpackagecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkpackagecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkpackagecontentcommandoutput.html)

</details>
<details>
<summary>
GetSolNetworkPackageDescriptor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/getsolnetworkpackagedescriptorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkpackagedescriptorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/getsolnetworkpackagedescriptorcommandoutput.html)

</details>
<details>
<summary>
InstantiateSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/instantiatesolnetworkinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/instantiatesolnetworkinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/instantiatesolnetworkinstancecommandoutput.html)

</details>
<details>
<summary>
ListSolFunctionInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/listsolfunctioninstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolfunctioninstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolfunctioninstancescommandoutput.html)

</details>
<details>
<summary>
ListSolFunctionPackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/listsolfunctionpackagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolfunctionpackagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolfunctionpackagescommandoutput.html)

</details>
<details>
<summary>
ListSolNetworkInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/listsolnetworkinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolnetworkinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolnetworkinstancescommandoutput.html)

</details>
<details>
<summary>
ListSolNetworkOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/listsolnetworkoperationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolnetworkoperationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolnetworkoperationscommandoutput.html)

</details>
<details>
<summary>
ListSolNetworkPackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/listsolnetworkpackagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolnetworkpackagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listsolnetworkpackagescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutSolFunctionPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/putsolfunctionpackagecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/putsolfunctionpackagecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/putsolfunctionpackagecontentcommandoutput.html)

</details>
<details>
<summary>
PutSolNetworkPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/putsolnetworkpackagecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/putsolnetworkpackagecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/putsolnetworkpackagecontentcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TerminateSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/terminatesolnetworkinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/terminatesolnetworkinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/terminatesolnetworkinstancecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateSolFunctionPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/updatesolfunctionpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/updatesolfunctionpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/updatesolfunctionpackagecommandoutput.html)

</details>
<details>
<summary>
UpdateSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/updatesolnetworkinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/updatesolnetworkinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/updatesolnetworkinstancecommandoutput.html)

</details>
<details>
<summary>
UpdateSolNetworkPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/updatesolnetworkpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/updatesolnetworkpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/updatesolnetworkpackagecommandoutput.html)

</details>
<details>
<summary>
ValidateSolFunctionPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/validatesolfunctionpackagecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/validatesolfunctionpackagecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/validatesolfunctionpackagecontentcommandoutput.html)

</details>
<details>
<summary>
ValidateSolNetworkPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/classes/validatesolnetworkpackagecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/validatesolnetworkpackagecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-tnb/interfaces/validatesolnetworkpackagecontentcommandoutput.html)

</details>
