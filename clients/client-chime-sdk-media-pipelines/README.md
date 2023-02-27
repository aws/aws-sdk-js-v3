<!-- generated file, do not edit directly -->

# @aws-sdk/client-chime-sdk-media-pipelines

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-chime-sdk-media-pipelines/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-chime-sdk-media-pipelines)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-chime-sdk-media-pipelines.svg)](https://www.npmjs.com/package/@aws-sdk/client-chime-sdk-media-pipelines)

## Description

AWS SDK for JavaScript ChimeSDKMediaPipelines Client for Node.js, Browser and React Native.

<p>The Amazon Chime SDK media pipeline APIs in this section allow software developers to
create Amazon Chime SDK media pipelines that capture, concatenate, or stream your Amazon Chime SDK meetings. For more information about media pipleines, see <a href="http://amazonaws.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Media_Pipelines.html">Amazon Chime SDK media pipelines</a>. </p>

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
the commands you need, for example `CreateMediaCapturePipelineCommand`:

```js
// ES5 example
const {
  ChimeSDKMediaPipelinesClient,
  CreateMediaCapturePipelineCommand,
} = require("@aws-sdk/client-chime-sdk-media-pipelines");
```

```ts
// ES6+ example
import {
  ChimeSDKMediaPipelinesClient,
  CreateMediaCapturePipelineCommand,
} from "@aws-sdk/client-chime-sdk-media-pipelines";
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
const command = new CreateMediaCapturePipelineCommand(params);
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
  const data = await client.createMediaCapturePipeline(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createMediaCapturePipeline(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createMediaCapturePipeline(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/createmediacapturepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/createmediacapturepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/createmediacapturepipelinecommandoutput.html)

</details>
<details>
<summary>
CreateMediaConcatenationPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/createmediaconcatenationpipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/createmediaconcatenationpipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/createmediaconcatenationpipelinecommandoutput.html)

</details>
<details>
<summary>
CreateMediaLiveConnectorPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/createmedialiveconnectorpipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/createmedialiveconnectorpipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/createmedialiveconnectorpipelinecommandoutput.html)

</details>
<details>
<summary>
DeleteMediaCapturePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/deletemediacapturepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/deletemediacapturepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/deletemediacapturepipelinecommandoutput.html)

</details>
<details>
<summary>
DeleteMediaPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/deletemediapipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/deletemediapipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/deletemediapipelinecommandoutput.html)

</details>
<details>
<summary>
GetMediaCapturePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/getmediacapturepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/getmediacapturepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/getmediacapturepipelinecommandoutput.html)

</details>
<details>
<summary>
GetMediaPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/getmediapipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/getmediapipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/getmediapipelinecommandoutput.html)

</details>
<details>
<summary>
ListMediaCapturePipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/listmediacapturepipelinescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/listmediacapturepipelinescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/listmediacapturepipelinescommandoutput.html)

</details>
<details>
<summary>
ListMediaPipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/listmediapipelinescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/listmediapipelinescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/listmediapipelinescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime sdk media pipelines/interfaces/untagresourcecommandoutput.html)

</details>
