<!-- generated file, do not edit directly -->

# @aws-sdk/client-chime-sdk-media-pipelines

## Description

AWS SDK for JavaScript ChimeSDKMediaPipelines Client for Node.js, Browser and React Native.

<p>The Amazon Chime SDK media pipeline APIs in this section allow software developers to
create Amazon Chime SDK media pipelines that capture, concatenate, or stream your Amazon Chime SDK meetings. For more information about media pipelines, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_Operations_Amazon_Chime_SDK_Media_Pipelines.html">Amazon Chime SDK media pipelines</a>. </p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-chime-sdk-media-pipelines
using your favorite package manager:

- `npm install @aws-sdk/client-chime-sdk-media-pipelines`
- `yarn add @aws-sdk/client-chime-sdk-media-pipelines`
- `pnpm add @aws-sdk/client-chime-sdk-media-pipelines`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ChimeSDKMediaPipelinesClient` and
the commands you need, for example `ListMediaPipelinesCommand`:

```js
// ES5 example
const {
  ChimeSDKMediaPipelinesClient,
  ListMediaPipelinesCommand,
} = require("@aws-sdk/client-chime-sdk-media-pipelines");
```

```ts
// ES6+ example
import { ChimeSDKMediaPipelinesClient, ListMediaPipelinesCommand } from "@aws-sdk/client-chime-sdk-media-pipelines";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ChimeSDKMediaPipelinesClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListMediaPipelinesCommand(params);
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
import * as AWS from "@aws-sdk/client-chime-sdk-media-pipelines";
const client = new AWS.ChimeSDKMediaPipelines({ region: "REGION" });

// async/await.
try {
  const data = await client.listMediaPipelines(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listMediaPipelines(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listMediaPipelines(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-chime-sdk-media-pipelines` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateMediaCapturePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/CreateMediaCapturePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaCapturePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaCapturePipelineCommandOutput/)

</details>
<details>
<summary>
CreateMediaConcatenationPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/CreateMediaConcatenationPipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaConcatenationPipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaConcatenationPipelineCommandOutput/)

</details>
<details>
<summary>
CreateMediaInsightsPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/CreateMediaInsightsPipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaInsightsPipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaInsightsPipelineCommandOutput/)

</details>
<details>
<summary>
CreateMediaInsightsPipelineConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/CreateMediaInsightsPipelineConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaInsightsPipelineConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaInsightsPipelineConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateMediaLiveConnectorPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/CreateMediaLiveConnectorPipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaLiveConnectorPipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaLiveConnectorPipelineCommandOutput/)

</details>
<details>
<summary>
CreateMediaPipelineKinesisVideoStreamPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/CreateMediaPipelineKinesisVideoStreamPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaPipelineKinesisVideoStreamPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaPipelineKinesisVideoStreamPoolCommandOutput/)

</details>
<details>
<summary>
CreateMediaStreamPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/CreateMediaStreamPipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaStreamPipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/CreateMediaStreamPipelineCommandOutput/)

</details>
<details>
<summary>
DeleteMediaCapturePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/DeleteMediaCapturePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/DeleteMediaCapturePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/DeleteMediaCapturePipelineCommandOutput/)

</details>
<details>
<summary>
DeleteMediaInsightsPipelineConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/DeleteMediaInsightsPipelineConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/DeleteMediaInsightsPipelineConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/DeleteMediaInsightsPipelineConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteMediaPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/DeleteMediaPipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/DeleteMediaPipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/DeleteMediaPipelineCommandOutput/)

</details>
<details>
<summary>
DeleteMediaPipelineKinesisVideoStreamPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/DeleteMediaPipelineKinesisVideoStreamPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/DeleteMediaPipelineKinesisVideoStreamPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/DeleteMediaPipelineKinesisVideoStreamPoolCommandOutput/)

</details>
<details>
<summary>
GetMediaCapturePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/GetMediaCapturePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetMediaCapturePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetMediaCapturePipelineCommandOutput/)

</details>
<details>
<summary>
GetMediaInsightsPipelineConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/GetMediaInsightsPipelineConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetMediaInsightsPipelineConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetMediaInsightsPipelineConfigurationCommandOutput/)

</details>
<details>
<summary>
GetMediaPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/GetMediaPipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetMediaPipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetMediaPipelineCommandOutput/)

</details>
<details>
<summary>
GetMediaPipelineKinesisVideoStreamPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/GetMediaPipelineKinesisVideoStreamPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetMediaPipelineKinesisVideoStreamPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetMediaPipelineKinesisVideoStreamPoolCommandOutput/)

</details>
<details>
<summary>
GetSpeakerSearchTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/GetSpeakerSearchTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetSpeakerSearchTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetSpeakerSearchTaskCommandOutput/)

</details>
<details>
<summary>
GetVoiceToneAnalysisTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/GetVoiceToneAnalysisTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetVoiceToneAnalysisTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/GetVoiceToneAnalysisTaskCommandOutput/)

</details>
<details>
<summary>
ListMediaCapturePipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/ListMediaCapturePipelinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListMediaCapturePipelinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListMediaCapturePipelinesCommandOutput/)

</details>
<details>
<summary>
ListMediaInsightsPipelineConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/ListMediaInsightsPipelineConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListMediaInsightsPipelineConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListMediaInsightsPipelineConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListMediaPipelineKinesisVideoStreamPools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/ListMediaPipelineKinesisVideoStreamPoolsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListMediaPipelineKinesisVideoStreamPoolsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListMediaPipelineKinesisVideoStreamPoolsCommandOutput/)

</details>
<details>
<summary>
ListMediaPipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/ListMediaPipelinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListMediaPipelinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListMediaPipelinesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
StartSpeakerSearchTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/StartSpeakerSearchTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/StartSpeakerSearchTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/StartSpeakerSearchTaskCommandOutput/)

</details>
<details>
<summary>
StartVoiceToneAnalysisTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/StartVoiceToneAnalysisTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/StartVoiceToneAnalysisTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/StartVoiceToneAnalysisTaskCommandOutput/)

</details>
<details>
<summary>
StopSpeakerSearchTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/StopSpeakerSearchTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/StopSpeakerSearchTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/StopSpeakerSearchTaskCommandOutput/)

</details>
<details>
<summary>
StopVoiceToneAnalysisTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/StopVoiceToneAnalysisTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/StopVoiceToneAnalysisTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/StopVoiceToneAnalysisTaskCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateMediaInsightsPipelineConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/UpdateMediaInsightsPipelineConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/UpdateMediaInsightsPipelineConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/UpdateMediaInsightsPipelineConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateMediaInsightsPipelineStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/UpdateMediaInsightsPipelineStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/UpdateMediaInsightsPipelineStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/UpdateMediaInsightsPipelineStatusCommandOutput/)

</details>
<details>
<summary>
UpdateMediaPipelineKinesisVideoStreamPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-media-pipelines/command/UpdateMediaPipelineKinesisVideoStreamPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/UpdateMediaPipelineKinesisVideoStreamPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-media-pipelines/Interface/UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput/)

</details>
