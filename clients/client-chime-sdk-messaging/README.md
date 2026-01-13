<!-- generated file, do not edit directly -->

# @aws-sdk/client-chime-sdk-messaging

## Description

AWS SDK for JavaScript ChimeSDKMessaging Client for Node.js, Browser and React Native.

<p>The Amazon Chime SDK messaging APIs in this section allow software developers to send
and receive messages in custom messaging applications. These APIs depend on the frameworks
provided by the Amazon Chime SDK identity APIs. For more information about the messaging
APIs, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_Operations_Amazon_Chime_SDK_Messaging.html">Amazon Chime SDK messaging</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-chime-sdk-messaging
using your favorite package manager:
- `npm install @aws-sdk/client-chime-sdk-messaging`
- `yarn add @aws-sdk/client-chime-sdk-messaging`
- `pnpm add @aws-sdk/client-chime-sdk-messaging`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ChimeSDKMessagingClient` and
the commands you need, for example `ListChannelFlowsCommand`:

```js
// ES5 example
const { ChimeSDKMessagingClient, ListChannelFlowsCommand } = require("@aws-sdk/client-chime-sdk-messaging");
```

```ts
// ES6+ example
import { ChimeSDKMessagingClient, ListChannelFlowsCommand } from "@aws-sdk/client-chime-sdk-messaging";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ChimeSDKMessagingClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListChannelFlowsCommand(params);
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
import * as AWS from "@aws-sdk/client-chime-sdk-messaging";
const client = new AWS.ChimeSDKMessaging({ region: "REGION" });

// async/await.
try {
  const data = await client.listChannelFlows(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listChannelFlows(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listChannelFlows(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-chime-sdk-messaging` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateChannelFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/AssociateChannelFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/AssociateChannelFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/AssociateChannelFlowCommandOutput/)
</details>
<details>
<summary>
BatchCreateChannelMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/BatchCreateChannelMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/BatchCreateChannelMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/BatchCreateChannelMembershipCommandOutput/)
</details>
<details>
<summary>
ChannelFlowCallback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ChannelFlowCallbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ChannelFlowCallbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ChannelFlowCallbackCommandOutput/)
</details>
<details>
<summary>
CreateChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/CreateChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelCommandOutput/)
</details>
<details>
<summary>
CreateChannelBan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/CreateChannelBanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelBanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelBanCommandOutput/)
</details>
<details>
<summary>
CreateChannelFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/CreateChannelFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelFlowCommandOutput/)
</details>
<details>
<summary>
CreateChannelMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/CreateChannelMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelMembershipCommandOutput/)
</details>
<details>
<summary>
CreateChannelModerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/CreateChannelModeratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelModeratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/CreateChannelModeratorCommandOutput/)
</details>
<details>
<summary>
DeleteChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DeleteChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelCommandOutput/)
</details>
<details>
<summary>
DeleteChannelBan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DeleteChannelBanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelBanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelBanCommandOutput/)
</details>
<details>
<summary>
DeleteChannelFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DeleteChannelFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelFlowCommandOutput/)
</details>
<details>
<summary>
DeleteChannelMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DeleteChannelMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelMembershipCommandOutput/)
</details>
<details>
<summary>
DeleteChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DeleteChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelMessageCommandOutput/)
</details>
<details>
<summary>
DeleteChannelModerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DeleteChannelModeratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelModeratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteChannelModeratorCommandOutput/)
</details>
<details>
<summary>
DeleteMessagingStreamingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DeleteMessagingStreamingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteMessagingStreamingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DeleteMessagingStreamingConfigurationsCommandOutput/)
</details>
<details>
<summary>
DescribeChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DescribeChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelCommandOutput/)
</details>
<details>
<summary>
DescribeChannelBan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DescribeChannelBanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelBanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelBanCommandOutput/)
</details>
<details>
<summary>
DescribeChannelFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DescribeChannelFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelFlowCommandOutput/)
</details>
<details>
<summary>
DescribeChannelMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DescribeChannelMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelMembershipCommandOutput/)
</details>
<details>
<summary>
DescribeChannelMembershipForAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DescribeChannelMembershipForAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelMembershipForAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelMembershipForAppInstanceUserCommandOutput/)
</details>
<details>
<summary>
DescribeChannelModeratedByAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DescribeChannelModeratedByAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelModeratedByAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelModeratedByAppInstanceUserCommandOutput/)
</details>
<details>
<summary>
DescribeChannelModerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DescribeChannelModeratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelModeratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DescribeChannelModeratorCommandOutput/)
</details>
<details>
<summary>
DisassociateChannelFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/DisassociateChannelFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DisassociateChannelFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/DisassociateChannelFlowCommandOutput/)
</details>
<details>
<summary>
GetChannelMembershipPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/GetChannelMembershipPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetChannelMembershipPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetChannelMembershipPreferencesCommandOutput/)
</details>
<details>
<summary>
GetChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/GetChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetChannelMessageCommandOutput/)
</details>
<details>
<summary>
GetChannelMessageStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/GetChannelMessageStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetChannelMessageStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetChannelMessageStatusCommandOutput/)
</details>
<details>
<summary>
GetMessagingSessionEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/GetMessagingSessionEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetMessagingSessionEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetMessagingSessionEndpointCommandOutput/)
</details>
<details>
<summary>
GetMessagingStreamingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/GetMessagingStreamingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetMessagingStreamingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/GetMessagingStreamingConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListChannelBans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelBansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelBansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelBansCommandOutput/)
</details>
<details>
<summary>
ListChannelFlows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelFlowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelFlowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelFlowsCommandOutput/)
</details>
<details>
<summary>
ListChannelMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelMembershipsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelMembershipsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelMembershipsCommandOutput/)
</details>
<details>
<summary>
ListChannelMembershipsForAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelMembershipsForAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelMembershipsForAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelMembershipsForAppInstanceUserCommandOutput/)
</details>
<details>
<summary>
ListChannelMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelMessagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelMessagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelMessagesCommandOutput/)
</details>
<details>
<summary>
ListChannelModerators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelModeratorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelModeratorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelModeratorsCommandOutput/)
</details>
<details>
<summary>
ListChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelsCommandOutput/)
</details>
<details>
<summary>
ListChannelsAssociatedWithChannelFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelsAssociatedWithChannelFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelsAssociatedWithChannelFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelsAssociatedWithChannelFlowCommandOutput/)
</details>
<details>
<summary>
ListChannelsModeratedByAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListChannelsModeratedByAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelsModeratedByAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListChannelsModeratedByAppInstanceUserCommandOutput/)
</details>
<details>
<summary>
ListSubChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListSubChannelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListSubChannelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListSubChannelsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PutChannelExpirationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/PutChannelExpirationSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/PutChannelExpirationSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/PutChannelExpirationSettingsCommandOutput/)
</details>
<details>
<summary>
PutChannelMembershipPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/PutChannelMembershipPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/PutChannelMembershipPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/PutChannelMembershipPreferencesCommandOutput/)
</details>
<details>
<summary>
PutMessagingStreamingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/PutMessagingStreamingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/PutMessagingStreamingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/PutMessagingStreamingConfigurationsCommandOutput/)
</details>
<details>
<summary>
RedactChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/RedactChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/RedactChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/RedactChannelMessageCommandOutput/)
</details>
<details>
<summary>
SearchChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/SearchChannelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/SearchChannelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/SearchChannelsCommandOutput/)
</details>
<details>
<summary>
SendChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/SendChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/SendChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/SendChannelMessageCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/UpdateChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UpdateChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UpdateChannelCommandOutput/)
</details>
<details>
<summary>
UpdateChannelFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/UpdateChannelFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UpdateChannelFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UpdateChannelFlowCommandOutput/)
</details>
<details>
<summary>
UpdateChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/UpdateChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UpdateChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UpdateChannelMessageCommandOutput/)
</details>
<details>
<summary>
UpdateChannelReadMarker
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-messaging/command/UpdateChannelReadMarkerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UpdateChannelReadMarkerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-messaging/Interface/UpdateChannelReadMarkerCommandOutput/)
</details>
