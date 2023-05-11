<!-- generated file, do not edit directly -->

# @aws-sdk/client-ivs-realtime

## Description

AWS SDK for JavaScript IVSRealTime Client for Node.js, Browser and React Native.

<p>
<b>Introduction</b>
</p>
<p>The Amazon Interactive Video Service (IVS) stage API is REST compatible, using a standard HTTP
API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses,
including errors.
</p>
<p>Terminology:</p>
<ul>
<li>
<p>The IVS stage API sometimes is referred to as the IVS <i>RealTime</i>
API.</p>
</li>
<li>
<p>A <i>participant token</i> is an authorization token used to publish/subscribe
to a stage.</p>
</li>
<li>
<p>A <i>participant object</i> represents participants
(people) in the stage and contains information about them. When a token is created, it
includes a participant ID; when a participant uses that token to join a stage, the
participant is associated with that participant ID There is a 1:1 mapping between
participant tokens and participants.</p>
</li>
</ul>
<p>
<b>Resources</b>
</p>
<p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html">Getting Started with Amazon IVS</a>):</p>
<ul>
<li>
<p>
<b>Stage</b> — A stage is a virtual space where multiple participants can exchange audio and video in real time.</p>
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
<p>The Amazon IVS stage API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and
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
the commands you need, for example `CreateParticipantTokenCommand`:

```js
// ES5 example
const { IVSRealTimeClient, CreateParticipantTokenCommand } = require("@aws-sdk/client-ivs-realtime");
```

```ts
// ES6+ example
import { IVSRealTimeClient, CreateParticipantTokenCommand } from "@aws-sdk/client-ivs-realtime";
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
const command = new CreateParticipantTokenCommand(params);
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
  const data = await client.createParticipantToken(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createParticipantToken(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createParticipantToken(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ivs-realtime` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateParticipantToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/createparticipanttokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/createparticipanttokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/createparticipanttokencommandoutput.html)

</details>
<details>
<summary>
CreateStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/createstagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/createstagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/createstagecommandoutput.html)

</details>
<details>
<summary>
DeleteStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/deletestagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/deletestagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/deletestagecommandoutput.html)

</details>
<details>
<summary>
DisconnectParticipant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/disconnectparticipantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/disconnectparticipantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/disconnectparticipantcommandoutput.html)

</details>
<details>
<summary>
GetParticipant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/getparticipantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/getparticipantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/getparticipantcommandoutput.html)

</details>
<details>
<summary>
GetStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/getstagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/getstagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/getstagecommandoutput.html)

</details>
<details>
<summary>
GetStageSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/getstagesessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/getstagesessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/getstagesessioncommandoutput.html)

</details>
<details>
<summary>
ListParticipantEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/listparticipanteventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/listparticipanteventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/listparticipanteventscommandoutput.html)

</details>
<details>
<summary>
ListParticipants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/listparticipantscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/listparticipantscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/listparticipantscommandoutput.html)

</details>
<details>
<summary>
ListStages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/liststagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/liststagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/liststagescommandoutput.html)

</details>
<details>
<summary>
ListStageSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/liststagesessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/liststagesessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/liststagesessionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/classes/updatestagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/updatestagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ivs-realtime/interfaces/updatestagecommandoutput.html)

</details>
