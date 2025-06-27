<!-- generated file, do not edit directly -->

# @aws-sdk/client-ssm-guiconnect

## Description

AWS SDK for JavaScript SSMGuiConnect Client for Node.js, Browser and React Native.

<fullname>AWS Systems Manager GUI Connect</fullname>

<p>Systems Manager GUI Connect, a component of Fleet Manager, lets you connect to your Window
Server-type Amazon Elastic Compute Cloud (Amazon EC2) instances using the Remote Desktop Protocol (RDP). GUI
Connect, which is powered by <a href="https://docs.aws.amazon.com/dcv/latest/adminguide/what-is-dcv.html">Amazon DCV</a>, provides you
with secure connectivity to your Windows Server instances directly from the Systems Manager console.
You can have up to four simultaneous connections in a single browser window. In the
console, GUI Connect is also referred to as Fleet Manager Remote Desktop.</p>
<p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">
<i>Amazon Web Services Systems Manager User
Guide</i>
</a>. To get started, see the following user guide topics:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up
Amazon Web Services Systems Manager</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html">Connect to a Windows Server managed instance using Remote Desktop</a>
</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-ssm-guiconnect
using your favorite package manager:

- `npm install @aws-sdk/client-ssm-guiconnect`
- `yarn add @aws-sdk/client-ssm-guiconnect`
- `pnpm add @aws-sdk/client-ssm-guiconnect`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SSMGuiConnectClient` and
the commands you need, for example `GetConnectionRecordingPreferencesCommand`:

```js
// ES5 example
const { SSMGuiConnectClient, GetConnectionRecordingPreferencesCommand } = require("@aws-sdk/client-ssm-guiconnect");
```

```ts
// ES6+ example
import { SSMGuiConnectClient, GetConnectionRecordingPreferencesCommand } from "@aws-sdk/client-ssm-guiconnect";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SSMGuiConnectClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new GetConnectionRecordingPreferencesCommand(params);
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
import * as AWS from "@aws-sdk/client-ssm-guiconnect";
const client = new AWS.SSMGuiConnect({ region: "REGION" });

// async/await.
try {
  const data = await client.getConnectionRecordingPreferences(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getConnectionRecordingPreferences(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.getConnectionRecordingPreferences(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ssm-guiconnect` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DeleteConnectionRecordingPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm-guiconnect/command/DeleteConnectionRecordingPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm-guiconnect/Interface/DeleteConnectionRecordingPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm-guiconnect/Interface/DeleteConnectionRecordingPreferencesCommandOutput/)

</details>
<details>
<summary>
GetConnectionRecordingPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm-guiconnect/command/GetConnectionRecordingPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm-guiconnect/Interface/GetConnectionRecordingPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm-guiconnect/Interface/GetConnectionRecordingPreferencesCommandOutput/)

</details>
<details>
<summary>
UpdateConnectionRecordingPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm-guiconnect/command/UpdateConnectionRecordingPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm-guiconnect/Interface/UpdateConnectionRecordingPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm-guiconnect/Interface/UpdateConnectionRecordingPreferencesCommandOutput/)

</details>
