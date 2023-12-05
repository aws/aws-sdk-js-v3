<!-- generated file, do not edit directly -->

# @aws-sdk/client-ivs-realtime

## Description

AWS SDK for JavaScript IVSRealTime Client for Node.js, Browser and React Native.

<p>
<b>Introduction</b>
</p>
<p>The Amazon Interactive Video Service (IVS) real-time API is REST compatible, using a standard HTTP
API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses,
including errors.
</p>
<p>Terminology:</p>
<ul>
<li>
<p>A <i>stage</i>  is a virtual space where participants can exchange video in real time.</p>
</li>
<li>
<p>A <i>participant token</i> is a token that authenticates a participant when they join a stage.</p>
</li>
<li>
<p>A <i>participant object</i> represents participants (people) in the stage and
contains information about them. When a token is created, it includes a participant ID;
when a participant uses that token to join a stage, the participant is associated with
that participant ID. There is a 1:1 mapping between participant tokens and
participants.</p>
</li>
<li>
<p>Server-side composition: The <i>composition</i> process composites participants
of a stage into a single video and forwards it to a set of outputs (e.g., IVS channels).
Composition endpoints support this process.</p>
</li>
<li>
<p>Server-side composition: A <i>composition</i> controls the look of the outputs,
including how participants are positioned in the video.</p>
</li>
</ul>
<p>
<b>Resources</b>
</p>
<p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started.html">Getting Started with Amazon IVS Real-Time Streaming</a>):</p>
<ul>
<li>
<p>
<b>Stage</b> — A stage is a virtual space where participants can exchange video in real time.</p>
</li>
</ul>
<p>
<b>Tagging</b>
</p>
<p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
comprises a <i>key</i> and a <i>value</i>, both set by you. For
example, you might set a tag as <code>topic:nature</code> to label a particular video
category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to
tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific
constraints beyond what is documented there.</p>
<p>Tags can help you identify and organize your AWS resources. For example, you can use the
same tag for different resources to indicate that they are related. You can also use tags to
manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p>
<p>The Amazon IVS real-time API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and
<a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p>
<p>At most 50 tags can be applied to a resource.</p>
<p>
<b>Stages Endpoints</b>
</p>
<ul>
<li>
<p>
<a>CreateParticipantToken</a> — Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire.</p>
</li>
<li>
<p>
<a>CreateStage</a> — Creates a new stage (and optionally participant tokens).</p>
</li>
<li>
<p>
<a>DeleteStage</a> — Shuts down and deletes the specified stage (disconnecting all participants).</p>
</li>
<li>
<p>
<a>DisconnectParticipant</a> — Disconnects a specified participant and revokes the participant permanently from a specified stage.</p>
</li>
<li>
<p>
<a>GetParticipant</a> — Gets information about the specified
participant token.</p>
</li>
<li>
<p>
<a>GetStage</a> — Gets information for the specified stage.</p>
</li>
<li>
<p>
<a>GetStageSession</a> — Gets information for the specified stage
session.</p>
</li>
<li>
<p>
<a>ListParticipantEvents</a> — Lists events for a specified
participant that occurred during a specified stage session.</p>
</li>
<li>
<p>
<a>ListParticipants</a> — Lists all participants in a specified stage
session.</p>
</li>
<li>
<p>
<a>ListStages</a> — Gets summary information about all stages in your account, in the AWS region where the API request is processed.</p>
</li>
<li>
<p>
<a>ListStageSessions</a> — Gets all sessions for a specified stage.</p>
</li>
<li>
<p>
<a>UpdateStage</a> — Updates a stage’s configuration.</p>
</li>
</ul>
<p>
<b>Composition Endpoints</b>
</p>
<ul>
<li>
<p>
<a>GetComposition</a> — Gets information about the specified
Composition resource.</p>
</li>
<li>
<p>
<a>ListCompositions</a> — Gets summary information about all
Compositions in your account, in the AWS region where the API request is processed.</p>
</li>
<li>
<p>
<a>StartComposition</a> — Starts a Composition from a stage based on
the configuration provided in the request.</p>
</li>
<li>
<p>
<a>StopComposition</a> — Stops and deletes a Composition resource.
Any broadcast from the Composition resource is stopped.</p>
</li>
</ul>
<p>
<b>EncoderConfiguration Endpoints</b>
</p>
<ul>
<li>
<p>
<a>CreateEncoderConfiguration</a> — Creates an EncoderConfiguration object.</p>
</li>
<li>
<p>
<a>DeleteEncoderConfiguration</a> — Deletes an EncoderConfiguration
resource. Ensures that no Compositions are using this template; otherwise, returns an
error.</p>
</li>
<li>
<p>
<a>GetEncoderConfiguration</a> — Gets information about the specified
EncoderConfiguration resource.</p>
</li>
<li>
<p>
<a>ListEncoderConfigurations</a> — Gets summary information about all
EncoderConfigurations in your account, in the AWS region where the API request is
processed.</p>
</li>
</ul>
<p>
<b>StorageConfiguration Endpoints</b>
</p>
<ul>
<li>
<p>
<a>CreateStorageConfiguration</a> — Creates a new storage configuration, used to enable
recording to Amazon S3.</p>
</li>
<li>
<p>
<a>DeleteStorageConfiguration</a> — Deletes the storage configuration for the specified ARN.</p>
</li>
<li>
<p>
<a>GetStorageConfiguration</a> — Gets the storage configuration for the specified ARN.</p>
</li>
<li>
<p>
<a>ListStorageConfigurations</a> — Gets summary information about all storage configurations in your
account, in the AWS region where the API request is processed.</p>
</li>
</ul>
<p>
<b>Tags Endpoints</b>
</p>
<ul>
<li>
<p>
<a>ListTagsForResource</a> — Gets information about AWS tags for the
specified ARN.</p>
</li>
<li>
<p>
<a>TagResource</a> — Adds or updates tags for the AWS resource with
the specified ARN.</p>
</li>
<li>
<p>
<a>UntagResource</a> — Removes tags from the resource with the
specified ARN.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-ivs-realtime
using your favorite package manager:

- `npm install @aws-sdk/client-ivs-realtime`
- `yarn add @aws-sdk/client-ivs-realtime`
- `pnpm add @aws-sdk/client-ivs-realtime`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IVSRealTimeClient` and
the commands you need, for example `ListStagesCommand`:

```js
// ES5 example
const { IVSRealTimeClient, ListStagesCommand } = require("@aws-sdk/client-ivs-realtime");
```

```ts
// ES6+ example
import { IVSRealTimeClient, ListStagesCommand } from "@aws-sdk/client-ivs-realtime";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IVSRealTimeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListStagesCommand(params);
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
import * as AWS from "@aws-sdk/client-ivs-realtime";
const client = new AWS.IVSRealTime({ region: "REGION" });

// async/await.
try {
  const data = await client.listStages(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listStages(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listStages(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ivs-realtime` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateEncoderConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/CreateEncoderConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/CreateEncoderConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/CreateEncoderConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateParticipantToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/CreateParticipantTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/CreateParticipantTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/CreateParticipantTokenCommandOutput/)

</details>
<details>
<summary>
CreateStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/CreateStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/CreateStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/CreateStageCommandOutput/)

</details>
<details>
<summary>
CreateStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/CreateStorageConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/CreateStorageConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/CreateStorageConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteEncoderConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/DeleteEncoderConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/DeleteEncoderConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/DeleteEncoderConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/DeleteStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/DeleteStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/DeleteStageCommandOutput/)

</details>
<details>
<summary>
DeleteStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/DeleteStorageConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/DeleteStorageConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/DeleteStorageConfigurationCommandOutput/)

</details>
<details>
<summary>
DisconnectParticipant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/DisconnectParticipantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/DisconnectParticipantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/DisconnectParticipantCommandOutput/)

</details>
<details>
<summary>
GetComposition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/GetCompositionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetCompositionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetCompositionCommandOutput/)

</details>
<details>
<summary>
GetEncoderConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/GetEncoderConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetEncoderConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetEncoderConfigurationCommandOutput/)

</details>
<details>
<summary>
GetParticipant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/GetParticipantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetParticipantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetParticipantCommandOutput/)

</details>
<details>
<summary>
GetStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/GetStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetStageCommandOutput/)

</details>
<details>
<summary>
GetStageSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/GetStageSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetStageSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetStageSessionCommandOutput/)

</details>
<details>
<summary>
GetStorageConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/GetStorageConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetStorageConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/GetStorageConfigurationCommandOutput/)

</details>
<details>
<summary>
ListCompositions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/ListCompositionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListCompositionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListCompositionsCommandOutput/)

</details>
<details>
<summary>
ListEncoderConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/ListEncoderConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListEncoderConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListEncoderConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListParticipantEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/ListParticipantEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListParticipantEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListParticipantEventsCommandOutput/)

</details>
<details>
<summary>
ListParticipants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/ListParticipantsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListParticipantsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListParticipantsCommandOutput/)

</details>
<details>
<summary>
ListStages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/ListStagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListStagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListStagesCommandOutput/)

</details>
<details>
<summary>
ListStageSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/ListStageSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListStageSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListStageSessionsCommandOutput/)

</details>
<details>
<summary>
ListStorageConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/ListStorageConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListStorageConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListStorageConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
StartComposition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/StartCompositionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/StartCompositionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/StartCompositionCommandOutput/)

</details>
<details>
<summary>
StopComposition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/StopCompositionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/StopCompositionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/StopCompositionCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs-realtime/command/UpdateStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/UpdateStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs-realtime/Interface/UpdateStageCommandOutput/)

</details>
