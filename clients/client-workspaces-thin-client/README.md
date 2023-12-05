<!-- generated file, do not edit directly -->

# @aws-sdk/client-workspaces-thin-client

## Description

AWS SDK for JavaScript WorkSpacesThinClient Client for Node.js, Browser and React Native.

<p>Amazon WorkSpaces Thin Client is a affordable device built to work with Amazon Web Services End User
Computing (EUC) virtual desktops to provide users with a complete cloud desktop
solution. WorkSpaces Thin Client is a compact device designed to connect up to two monitors and USB
devices like a keyboard, mouse, headset, and webcam. To maximize endpoint security, WorkSpaces Thin Client
devices do not allow local data storage or installation of unapproved applications. The
WorkSpaces Thin Client device ships preloaded with device management software.</p>
<p>You can use these APIs to complete WorkSpaces Thin Client tasks, such as creating environments or
viewing devices. For more information about WorkSpaces Thin Client, including the required permissions to
use the service, see the <a href="https://docs.aws.amazon.com/workspaces-thin-client/latest/ag/">Amazon WorkSpaces Thin Client Administrator Guide</a>. For
more information about using the Command Line Interface (CLI) to manage
your WorkSpaces Thin Client resources, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces-thin-client/index.html">WorkSpaces Thin Client section of the
CLI Reference</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-workspaces-thin-client
using your favorite package manager:

- `npm install @aws-sdk/client-workspaces-thin-client`
- `yarn add @aws-sdk/client-workspaces-thin-client`
- `pnpm add @aws-sdk/client-workspaces-thin-client`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkSpacesThinClientClient` and
the commands you need, for example `ListDevicesCommand`:

```js
// ES5 example
const { WorkSpacesThinClientClient, ListDevicesCommand } = require("@aws-sdk/client-workspaces-thin-client");
```

```ts
// ES6+ example
import { WorkSpacesThinClientClient, ListDevicesCommand } from "@aws-sdk/client-workspaces-thin-client";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WorkSpacesThinClientClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListDevicesCommand(params);
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
import * as AWS from "@aws-sdk/client-workspaces-thin-client";
const client = new AWS.WorkSpacesThinClient({ region: "REGION" });

// async/await.
try {
  const data = await client.listDevices(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDevices(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDevices(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-workspaces-thin-client` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/createenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/createenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/createenvironmentcommandoutput.html)

</details>
<details>
<summary>
DeleteDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/deletedevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/deletedevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/deletedevicecommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/deleteenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/deleteenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/deleteenvironmentcommandoutput.html)

</details>
<details>
<summary>
DeregisterDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/deregisterdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/deregisterdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/deregisterdevicecommandoutput.html)

</details>
<details>
<summary>
GetDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/getdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/getdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/getdevicecommandoutput.html)

</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/getenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/getenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/getenvironmentcommandoutput.html)

</details>
<details>
<summary>
GetSoftwareSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/getsoftwaresetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/getsoftwaresetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/getsoftwaresetcommandoutput.html)

</details>
<details>
<summary>
ListDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/listdevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/listdevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/listdevicescommandoutput.html)

</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/listenvironmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/listenvironmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/listenvironmentscommandoutput.html)

</details>
<details>
<summary>
ListSoftwareSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/listsoftwaresetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/listsoftwaresetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/listsoftwaresetscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/updatedevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/updatedevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/updatedevicecommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/updateenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/updateenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/updateenvironmentcommandoutput.html)

</details>
<details>
<summary>
UpdateSoftwareSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/classes/updatesoftwaresetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/updatesoftwaresetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces-thin-client/interfaces/updatesoftwaresetcommandoutput.html)

</details>
