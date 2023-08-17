<!-- generated file, do not edit directly -->

# @aws-sdk/client-kinesis-video

## Description

AWS SDK for JavaScript KinesisVideo Client for Node.js, Browser and React Native.

<p></p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-kinesis-video
using your favorite package manager:

- `npm install @aws-sdk/client-kinesis-video`
- `yarn add @aws-sdk/client-kinesis-video`
- `pnpm add @aws-sdk/client-kinesis-video`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `KinesisVideoClient` and
the commands you need, for example `CreateSignalingChannelCommand`:

```js
// ES5 example
const { KinesisVideoClient, CreateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video");
```

```ts
// ES6+ example
import { KinesisVideoClient, CreateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video";
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

const params = {
  /** input parameters */
};
const command = new CreateSignalingChannelCommand(params);
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
  const data = await client.createSignalingChannel(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createSignalingChannel(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createSignalingChannel(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/createsignalingchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/createsignalingchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/createsignalingchannelcommandoutput.html)

</details>
<details>
<summary>
CreateStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/createstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/createstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/createstreamcommandoutput.html)

</details>
<details>
<summary>
DeleteEdgeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/deleteedgeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/deleteedgeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/deleteedgeconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteSignalingChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/deletesignalingchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/deletesignalingchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/deletesignalingchannelcommandoutput.html)

</details>
<details>
<summary>
DeleteStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/deletestreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/deletestreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/deletestreamcommandoutput.html)

</details>
<details>
<summary>
DescribeEdgeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/describeedgeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describeedgeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describeedgeconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeImageGenerationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/describeimagegenerationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describeimagegenerationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describeimagegenerationconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeMappedResourceConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/describemappedresourceconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describemappedresourceconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describemappedresourceconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeMediaStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/describemediastorageconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describemediastorageconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describemediastorageconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeNotificationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/describenotificationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describenotificationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describenotificationconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeSignalingChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/describesignalingchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describesignalingchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describesignalingchannelcommandoutput.html)

</details>
<details>
<summary>
DescribeStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/describestreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describestreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/describestreamcommandoutput.html)

</details>
<details>
<summary>
GetDataEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/getdataendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/getdataendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/getdataendpointcommandoutput.html)

</details>
<details>
<summary>
GetSignalingChannelEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/getsignalingchannelendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/getsignalingchannelendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/getsignalingchannelendpointcommandoutput.html)

</details>
<details>
<summary>
ListEdgeAgentConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/listedgeagentconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/listedgeagentconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/listedgeagentconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListSignalingChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/listsignalingchannelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/listsignalingchannelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/listsignalingchannelscommandoutput.html)

</details>
<details>
<summary>
ListStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/liststreamscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/liststreamscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/liststreamscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTagsForStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/listtagsforstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/listtagsforstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/listtagsforstreamcommandoutput.html)

</details>
<details>
<summary>
StartEdgeConfigurationUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/startedgeconfigurationupdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/startedgeconfigurationupdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/startedgeconfigurationupdatecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TagStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/tagstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/tagstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/tagstreamcommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/untagstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/untagstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/untagstreamcommandoutput.html)

</details>
<details>
<summary>
UpdateDataRetention
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/updatedataretentioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatedataretentioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatedataretentioncommandoutput.html)

</details>
<details>
<summary>
UpdateImageGenerationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/updateimagegenerationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updateimagegenerationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updateimagegenerationconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateMediaStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/updatemediastorageconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatemediastorageconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatemediastorageconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateNotificationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/updatenotificationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatenotificationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatenotificationconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateSignalingChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/updatesignalingchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatesignalingchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatesignalingchannelcommandoutput.html)

</details>
<details>
<summary>
UpdateStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/classes/updatestreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatestreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis-video/interfaces/updatestreamcommandoutput.html)

</details>
