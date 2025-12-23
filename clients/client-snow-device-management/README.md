<!-- generated file, do not edit directly -->

# @aws-sdk/client-snow-device-management

## Description

AWS SDK for JavaScript SnowDeviceManagement Client for Node.js, Browser and React Native.

<p>Amazon Web Services Snow Device Management documentation.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-snow-device-management
using your favorite package manager:
- `npm install @aws-sdk/client-snow-device-management`
- `yarn add @aws-sdk/client-snow-device-management`
- `pnpm add @aws-sdk/client-snow-device-management`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SnowDeviceManagementClient` and
the commands you need, for example `ListDevicesCommand`:

```js
// ES5 example
const { SnowDeviceManagementClient, ListDevicesCommand } = require("@aws-sdk/client-snow-device-management");
```

```ts
// ES6+ example
import { SnowDeviceManagementClient, ListDevicesCommand } from "@aws-sdk/client-snow-device-management";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SnowDeviceManagementClient({ region: "REGION" });

const params = { /** input parameters */ };
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
import * as AWS from "@aws-sdk/client-snow-device-management";
const client = new AWS.SnowDeviceManagement({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-snow-device-management` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/CancelTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/CancelTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/CancelTaskCommandOutput/)
</details>
<details>
<summary>
CreateTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/CreateTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/CreateTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/CreateTaskCommandOutput/)
</details>
<details>
<summary>
DescribeDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/DescribeDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/DescribeDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/DescribeDeviceCommandOutput/)
</details>
<details>
<summary>
DescribeDeviceEc2Instances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/DescribeDeviceEc2InstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/DescribeDeviceEc2InstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/DescribeDeviceEc2InstancesCommandOutput/)
</details>
<details>
<summary>
DescribeExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/DescribeExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/DescribeExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/DescribeExecutionCommandOutput/)
</details>
<details>
<summary>
DescribeTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/DescribeTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/DescribeTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/DescribeTaskCommandOutput/)
</details>
<details>
<summary>
ListDeviceResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/ListDeviceResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListDeviceResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListDeviceResourcesCommandOutput/)
</details>
<details>
<summary>
ListDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/ListDevicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListDevicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListDevicesCommandOutput/)
</details>
<details>
<summary>
ListExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/ListExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListExecutionsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/ListTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/ListTasksCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/snow-device-management/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-snow-device-management/Interface/UntagResourceCommandOutput/)
</details>
