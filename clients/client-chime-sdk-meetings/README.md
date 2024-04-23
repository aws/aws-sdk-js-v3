<!-- generated file, do not edit directly -->

# @aws-sdk/client-chime-sdk-meetings

## Description

AWS SDK for JavaScript ChimeSDKMeetings Client for Node.js, Browser and React Native.

<p>The Amazon Chime SDK meetings APIs in this section allow software developers to create Amazon Chime SDK meetings, set the Amazon Web Services Regions for meetings, create and manage users, and send and
receive meeting notifications. For more information about the meeting APIs, see
<a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Meetings.html">Amazon Chime SDK meetings</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-chime-sdk-meetings
using your favorite package manager:

- `npm install @aws-sdk/client-chime-sdk-meetings`
- `yarn add @aws-sdk/client-chime-sdk-meetings`
- `pnpm add @aws-sdk/client-chime-sdk-meetings`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ChimeSDKMeetingsClient` and
the commands you need, for example `ListAttendeesCommand`:

```js
// ES5 example
const { ChimeSDKMeetingsClient, ListAttendeesCommand } = require("@aws-sdk/client-chime-sdk-meetings");
```

```ts
// ES6+ example
import { ChimeSDKMeetingsClient, ListAttendeesCommand } from "@aws-sdk/client-chime-sdk-meetings";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ChimeSDKMeetingsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAttendeesCommand(params);
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
import * as AWS from "@aws-sdk/client-chime-sdk-meetings";
const client = new AWS.ChimeSDKMeetings({ region: "REGION" });

// async/await.
try {
  const data = await client.listAttendees(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAttendees(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAttendees(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-chime-sdk-meetings` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchCreateAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/BatchCreateAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/BatchCreateAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/BatchCreateAttendeeCommandOutput/)

</details>
<details>
<summary>
BatchUpdateAttendeeCapabilitiesExcept
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/BatchUpdateAttendeeCapabilitiesExceptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/BatchUpdateAttendeeCapabilitiesExceptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/BatchUpdateAttendeeCapabilitiesExceptCommandOutput/)

</details>
<details>
<summary>
CreateAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/CreateAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/CreateAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/CreateAttendeeCommandOutput/)

</details>
<details>
<summary>
CreateMeeting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/CreateMeetingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/CreateMeetingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/CreateMeetingCommandOutput/)

</details>
<details>
<summary>
CreateMeetingWithAttendees
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/CreateMeetingWithAttendeesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/CreateMeetingWithAttendeesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/CreateMeetingWithAttendeesCommandOutput/)

</details>
<details>
<summary>
DeleteAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/DeleteAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/DeleteAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/DeleteAttendeeCommandOutput/)

</details>
<details>
<summary>
DeleteMeeting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/DeleteMeetingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/DeleteMeetingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/DeleteMeetingCommandOutput/)

</details>
<details>
<summary>
GetAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/GetAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/GetAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/GetAttendeeCommandOutput/)

</details>
<details>
<summary>
GetMeeting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/GetMeetingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/GetMeetingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/GetMeetingCommandOutput/)

</details>
<details>
<summary>
ListAttendees
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/ListAttendeesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/ListAttendeesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/ListAttendeesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
StartMeetingTranscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/StartMeetingTranscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/StartMeetingTranscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/StartMeetingTranscriptionCommandOutput/)

</details>
<details>
<summary>
StopMeetingTranscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/StopMeetingTranscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/StopMeetingTranscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/StopMeetingTranscriptionCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAttendeeCapabilities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-meetings/command/UpdateAttendeeCapabilitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/UpdateAttendeeCapabilitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-meetings/Interface/UpdateAttendeeCapabilitiesCommandOutput/)

</details>
