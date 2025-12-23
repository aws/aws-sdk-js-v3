<!-- generated file, do not edit directly -->

# @aws-sdk/client-kinesis-video

## Description

AWS SDK for JavaScript KinesisVideo Client for Node.js, Browser and React Native.

<p></p>

## Installing
To install this package, simply type add or install @aws-sdk/client-kinesis-video
using your favorite package manager:
- `npm install @aws-sdk/client-kinesis-video`
- `yarn add @aws-sdk/client-kinesis-video`
- `pnpm add @aws-sdk/client-kinesis-video`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `KinesisVideoClient` and
the commands you need, for example `ListStreamsCommand`:

```js
// ES5 example
const { KinesisVideoClient, ListStreamsCommand } = require("@aws-sdk/client-kinesis-video");
```

```ts
// ES6+ example
import { KinesisVideoClient, ListStreamsCommand } from "@aws-sdk/client-kinesis-video";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new KinesisVideoClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListStreamsCommand(params);
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
import * as AWS from "@aws-sdk/client-kinesis-video";
const client = new AWS.KinesisVideo({ region: "REGION" });

// async/await.
try {
  const data = await client.listStreams(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listStreams(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listStreams(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-kinesis-video` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateSignalingChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/CreateSignalingChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/CreateSignalingChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/CreateSignalingChannelCommandOutput/)
</details>
<details>
<summary>
CreateStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/CreateStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/CreateStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/CreateStreamCommandOutput/)
</details>
<details>
<summary>
DeleteEdgeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DeleteEdgeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DeleteEdgeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DeleteEdgeConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteSignalingChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DeleteSignalingChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DeleteSignalingChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DeleteSignalingChannelCommandOutput/)
</details>
<details>
<summary>
DeleteStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DeleteStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DeleteStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DeleteStreamCommandOutput/)
</details>
<details>
<summary>
DescribeEdgeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DescribeEdgeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeEdgeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeEdgeConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeImageGenerationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DescribeImageGenerationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeImageGenerationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeImageGenerationConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeMappedResourceConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DescribeMappedResourceConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeMappedResourceConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeMappedResourceConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeMediaStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DescribeMediaStorageConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeMediaStorageConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeMediaStorageConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeNotificationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DescribeNotificationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeNotificationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeNotificationConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeSignalingChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DescribeSignalingChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeSignalingChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeSignalingChannelCommandOutput/)
</details>
<details>
<summary>
DescribeStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DescribeStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeStreamCommandOutput/)
</details>
<details>
<summary>
DescribeStreamStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/DescribeStreamStorageConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeStreamStorageConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/DescribeStreamStorageConfigurationCommandOutput/)
</details>
<details>
<summary>
GetDataEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/GetDataEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/GetDataEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/GetDataEndpointCommandOutput/)
</details>
<details>
<summary>
GetSignalingChannelEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/GetSignalingChannelEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/GetSignalingChannelEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/GetSignalingChannelEndpointCommandOutput/)
</details>
<details>
<summary>
ListEdgeAgentConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/ListEdgeAgentConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListEdgeAgentConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListEdgeAgentConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListSignalingChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/ListSignalingChannelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListSignalingChannelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListSignalingChannelsCommandOutput/)
</details>
<details>
<summary>
ListStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/ListStreamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListStreamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListStreamsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListTagsForStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/ListTagsForStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListTagsForStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/ListTagsForStreamCommandOutput/)
</details>
<details>
<summary>
StartEdgeConfigurationUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/StartEdgeConfigurationUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/StartEdgeConfigurationUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/StartEdgeConfigurationUpdateCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
TagStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/TagStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/TagStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/TagStreamCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UntagStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UntagStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UntagStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UntagStreamCommandOutput/)
</details>
<details>
<summary>
UpdateDataRetention
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UpdateDataRetentionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateDataRetentionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateDataRetentionCommandOutput/)
</details>
<details>
<summary>
UpdateImageGenerationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UpdateImageGenerationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateImageGenerationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateImageGenerationConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateMediaStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UpdateMediaStorageConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateMediaStorageConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateMediaStorageConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateNotificationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UpdateNotificationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateNotificationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateNotificationConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateSignalingChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UpdateSignalingChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateSignalingChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateSignalingChannelCommandOutput/)
</details>
<details>
<summary>
UpdateStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UpdateStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateStreamCommandOutput/)
</details>
<details>
<summary>
UpdateStreamStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kinesis-video/command/UpdateStreamStorageConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateStreamStorageConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kinesis-video/Interface/UpdateStreamStorageConfigurationCommandOutput/)
</details>
