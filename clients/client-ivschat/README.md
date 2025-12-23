<!-- generated file, do not edit directly -->

# @aws-sdk/client-ivschat

## Description

AWS SDK for JavaScript Ivschat Client for Node.js, Browser and React Native.

<p>
<b>Introduction</b>
</p>
<p>The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat
resources. You also need to integrate with the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging
API</a>, to enable users to interact with chat rooms in real time.</p>
<p>The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat
HTTPS service endpoints, see the Amazon IVS Chat information on the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the
<i>AWS General Reference</i>. </p>
<p>This document describes HTTP operations. There is a separate <i>messaging</i> API
for managing Chat resources; see the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging API
Reference</a>.</p>
<p>
<b>Notes on terminology:</b>
</p>
<ul>
<li>
<p>You create service applications using the Amazon IVS Chat API. We refer to these as
<i>applications</i>.</p>
</li>
<li>
<p>You create front-end client applications (browser and Android/iOS apps) using the
Amazon IVS Chat Messaging API. We refer to these as <i>clients</i>. </p>
</li>
</ul>
<p>
<b>Resources</b>
</p>
<p>The following resources are part of Amazon IVS Chat:</p>
<ul>
<li>
<p>
<b>LoggingConfiguration</b> — A configuration that allows customers to store and record sent messages in a chat room. See the Logging Configuration endpoints for more information.</p>
</li>
<li>
<p>
<b>Room</b> — The central Amazon IVS Chat resource through
which clients connect to and exchange chat messages. See the Room endpoints for more
information.</p>
</li>
</ul>
<p>
<b>Tagging</b>
</p>
<p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
comprises a <i>key</i> and a <i>value</i>, both set by you. For
example, you might set a tag as <code>topic:nature</code> to label a particular video
category. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no service-specific
constraints beyond what is documented there.</p>
<p>Tags can help you identify and organize your AWS resources. For example, you can use the
same tag for different resources to indicate that they are related. You can also use tags to
manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p>
<p>The Amazon IVS Chat API has these tag-related operations: <a>TagResource</a>, <a>UntagResource</a>, and
<a>ListTagsForResource</a>. The following resource supports tagging: Room.</p>
<p>At most 50 tags can be applied to a resource.</p>
<p>
<b>API Access Security</b>
</p>
<p>Your Amazon IVS Chat applications (service applications and clients) must be authenticated
and authorized to access Amazon IVS Chat resources. Note the differences between these
concepts:</p>
<ul>
<li>
<p>
<i>Authentication</i> is about verifying identity. Requests to the
Amazon IVS Chat API must be signed to verify your identity.</p>
</li>
<li>
<p>
<i>Authorization</i> is about granting permissions. Your IAM roles need
to have permissions for Amazon IVS Chat API requests.</p>
</li>
</ul>
<p>Users (viewers) connect to a room using secure access tokens that you create using the
<a>CreateChatToken</a> operation through the AWS SDK. You call CreateChatToken for
every user’s chat session, passing identity and authorization information about the
user.</p>
<p>
<b>Signing API Requests</b>
</p>
<p>HTTP API requests must be signed with an AWS SigV4 signature using your AWS security
credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the
underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API
directly, it’s your responsibility to sign the requests.</p>
<p>You generate a signature using valid AWS credentials for an IAM role that has permission
to perform the requested action. For example, DeleteMessage requests must be made using an IAM
role that has the <code>ivschat:DeleteMessage</code> permission.</p>
<p>For more information:</p>
<ul>
<li>
<p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests
(Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services
General Reference</i>.</p>
</li>
<li>
<p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on
the Security page of the <i>Amazon IVS User Guide</i>.</p>
</li>
</ul>
<p>
<b>Amazon Resource Names (ARNs)</b>
</p>
<p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a
resource unambiguously across all of AWS, such as in IAM policies and API calls. For more
information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names</a> in the <i>AWS General
Reference</i>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-ivschat
using your favorite package manager:
- `npm install @aws-sdk/client-ivschat`
- `yarn add @aws-sdk/client-ivschat`
- `pnpm add @aws-sdk/client-ivschat`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IvschatClient` and
the commands you need, for example `ListRoomsCommand`:

```js
// ES5 example
const { IvschatClient, ListRoomsCommand } = require("@aws-sdk/client-ivschat");
```

```ts
// ES6+ example
import { IvschatClient, ListRoomsCommand } from "@aws-sdk/client-ivschat";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IvschatClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListRoomsCommand(params);
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
import * as AWS from "@aws-sdk/client-ivschat";
const client = new AWS.Ivschat({ region: "REGION" });

// async/await.
try {
  const data = await client.listRooms(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listRooms(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listRooms(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ivschat` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateChatToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/CreateChatTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/CreateChatTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/CreateChatTokenCommandOutput/)
</details>
<details>
<summary>
CreateLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/CreateLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/CreateLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/CreateLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
CreateRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/CreateRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/CreateRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/CreateRoomCommandOutput/)
</details>
<details>
<summary>
DeleteLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/DeleteLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/DeleteLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/DeleteLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/DeleteMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/DeleteMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/DeleteMessageCommandOutput/)
</details>
<details>
<summary>
DeleteRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/DeleteRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/DeleteRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/DeleteRoomCommandOutput/)
</details>
<details>
<summary>
DisconnectUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/DisconnectUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/DisconnectUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/DisconnectUserCommandOutput/)
</details>
<details>
<summary>
GetLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/GetLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/GetLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/GetLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
GetRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/GetRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/GetRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/GetRoomCommandOutput/)
</details>
<details>
<summary>
ListLoggingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/ListLoggingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/ListLoggingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/ListLoggingConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListRooms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/ListRoomsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/ListRoomsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/ListRoomsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
SendEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/SendEventCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/SendEventCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/SendEventCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/UpdateLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/UpdateLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/UpdateLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivschat/command/UpdateRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/UpdateRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivschat/Interface/UpdateRoomCommandOutput/)
</details>
