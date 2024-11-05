<!-- generated file, do not edit directly -->

# @aws-sdk/client-chime

## Description

AWS SDK for JavaScript Chime Client for Node.js, Browser and React Native.

<important>
<p>
<b>Most of these APIs are no longer supported and will not be updated.</b> We recommend using the latest versions in the
<a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/welcome.html">Amazon Chime SDK API reference</a>, in the Amazon Chime SDK.</p>
<p>Using the latest versions requires migrating to dedicated namespaces. For more information, refer to
<a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
<i>Amazon Chime SDK Developer Guide</i>.</p>
</important>
<p>The Amazon Chime application programming interface (API) is designed so administrators can
perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
Connectors. This guide provides detailed information about the Amazon Chime API,
including operations, types, inputs and outputs, and error codes.</p>
<p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls for Amazon Chime. We recommend using an AWS SDK or the
AWS CLI. The page for each API action contains a <i>See Also</i> section that includes links to information about using the action with a language-specific
AWS SDK or the AWS CLI.</p>
<dl>
<dt>Using an AWS SDK</dt>
<dd>
<p>
You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the
<a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.
</p>
</dd>
<dt>Using the AWS CLI</dt>
<dd>
<p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see
<a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a>
in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the
<a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
<i>AWS CLI Command Reference</i>.
</p>
</dd>
<dt>Using REST APIs</dt>
<dd>
<p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports Signature Version 4. For more information, see
<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>
in the <i>Amazon Web Services General Reference</i>.</p>
<p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
</dd>
</dl>
<p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see
<a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a>
in the <i>Amazon Chime Administration Guide</i>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-chime
using your favorite package manager:

- `npm install @aws-sdk/client-chime`
- `yarn add @aws-sdk/client-chime`
- `pnpm add @aws-sdk/client-chime`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ChimeClient` and
the commands you need, for example `ListAccountsCommand`:

```js
// ES5 example
const { ChimeClient, ListAccountsCommand } = require("@aws-sdk/client-chime");
```

```ts
// ES6+ example
import { ChimeClient, ListAccountsCommand } from "@aws-sdk/client-chime";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ChimeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAccountsCommand(params);
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
import * as AWS from "@aws-sdk/client-chime";
const client = new AWS.Chime({ region: "REGION" });

// async/await.
try {
  const data = await client.listAccounts(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAccounts(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAccounts(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-chime` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociatePhoneNumbersWithVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/AssociatePhoneNumbersWithVoiceConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/AssociatePhoneNumbersWithVoiceConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/AssociatePhoneNumbersWithVoiceConnectorCommandOutput/)

</details>
<details>
<summary>
AssociatePhoneNumbersWithVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/AssociatePhoneNumbersWithVoiceConnectorGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput/)

</details>
<details>
<summary>
AssociatePhoneNumberWithUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/AssociatePhoneNumberWithUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/AssociatePhoneNumberWithUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/AssociatePhoneNumberWithUserCommandOutput/)

</details>
<details>
<summary>
AssociateSigninDelegateGroupsWithAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/AssociateSigninDelegateGroupsWithAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/AssociateSigninDelegateGroupsWithAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/AssociateSigninDelegateGroupsWithAccountCommandOutput/)

</details>
<details>
<summary>
BatchCreateAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/BatchCreateAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchCreateAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchCreateAttendeeCommandOutput/)

</details>
<details>
<summary>
BatchCreateChannelMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/BatchCreateChannelMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchCreateChannelMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchCreateChannelMembershipCommandOutput/)

</details>
<details>
<summary>
BatchCreateRoomMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/BatchCreateRoomMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchCreateRoomMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchCreateRoomMembershipCommandOutput/)

</details>
<details>
<summary>
BatchDeletePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/BatchDeletePhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchDeletePhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchDeletePhoneNumberCommandOutput/)

</details>
<details>
<summary>
BatchSuspendUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/BatchSuspendUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchSuspendUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchSuspendUserCommandOutput/)

</details>
<details>
<summary>
BatchUnsuspendUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/BatchUnsuspendUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchUnsuspendUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchUnsuspendUserCommandOutput/)

</details>
<details>
<summary>
BatchUpdatePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/BatchUpdatePhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchUpdatePhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchUpdatePhoneNumberCommandOutput/)

</details>
<details>
<summary>
BatchUpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/BatchUpdateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchUpdateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/BatchUpdateUserCommandOutput/)

</details>
<details>
<summary>
CreateAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAccountCommandOutput/)

</details>
<details>
<summary>
CreateAppInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateAppInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAppInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAppInstanceCommandOutput/)

</details>
<details>
<summary>
CreateAppInstanceAdmin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateAppInstanceAdminCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAppInstanceAdminCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAppInstanceAdminCommandOutput/)

</details>
<details>
<summary>
CreateAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAppInstanceUserCommandOutput/)

</details>
<details>
<summary>
CreateAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateAttendeeCommandOutput/)

</details>
<details>
<summary>
CreateBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateBotCommandOutput/)

</details>
<details>
<summary>
CreateChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateChannelCommandOutput/)

</details>
<details>
<summary>
CreateChannelBan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateChannelBanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateChannelBanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateChannelBanCommandOutput/)

</details>
<details>
<summary>
CreateChannelMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateChannelMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateChannelMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateChannelMembershipCommandOutput/)

</details>
<details>
<summary>
CreateChannelModerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateChannelModeratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateChannelModeratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateChannelModeratorCommandOutput/)

</details>
<details>
<summary>
CreateMediaCapturePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateMediaCapturePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateMediaCapturePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateMediaCapturePipelineCommandOutput/)

</details>
<details>
<summary>
CreateMeeting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateMeetingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateMeetingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateMeetingCommandOutput/)

</details>
<details>
<summary>
CreateMeetingDialOut
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateMeetingDialOutCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateMeetingDialOutCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateMeetingDialOutCommandOutput/)

</details>
<details>
<summary>
CreateMeetingWithAttendees
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateMeetingWithAttendeesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateMeetingWithAttendeesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateMeetingWithAttendeesCommandOutput/)

</details>
<details>
<summary>
CreatePhoneNumberOrder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreatePhoneNumberOrderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreatePhoneNumberOrderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreatePhoneNumberOrderCommandOutput/)

</details>
<details>
<summary>
CreateProxySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateProxySessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateProxySessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateProxySessionCommandOutput/)

</details>
<details>
<summary>
CreateRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateRoomCommandOutput/)

</details>
<details>
<summary>
CreateRoomMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateRoomMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateRoomMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateRoomMembershipCommandOutput/)

</details>
<details>
<summary>
CreateSipMediaApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateSipMediaApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateSipMediaApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateSipMediaApplicationCommandOutput/)

</details>
<details>
<summary>
CreateSipMediaApplicationCall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateSipMediaApplicationCallCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateSipMediaApplicationCallCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateSipMediaApplicationCallCommandOutput/)

</details>
<details>
<summary>
CreateSipRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateSipRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateSipRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateSipRuleCommandOutput/)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateUserCommandOutput/)

</details>
<details>
<summary>
CreateVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateVoiceConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateVoiceConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateVoiceConnectorCommandOutput/)

</details>
<details>
<summary>
CreateVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/CreateVoiceConnectorGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateVoiceConnectorGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/CreateVoiceConnectorGroupCommandOutput/)

</details>
<details>
<summary>
DeleteAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAccountCommandOutput/)

</details>
<details>
<summary>
DeleteAppInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteAppInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAppInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAppInstanceCommandOutput/)

</details>
<details>
<summary>
DeleteAppInstanceAdmin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteAppInstanceAdminCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAppInstanceAdminCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAppInstanceAdminCommandOutput/)

</details>
<details>
<summary>
DeleteAppInstanceStreamingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteAppInstanceStreamingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAppInstanceStreamingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAppInstanceStreamingConfigurationsCommandOutput/)

</details>
<details>
<summary>
DeleteAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAppInstanceUserCommandOutput/)

</details>
<details>
<summary>
DeleteAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteAttendeeCommandOutput/)

</details>
<details>
<summary>
DeleteChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelCommandOutput/)

</details>
<details>
<summary>
DeleteChannelBan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteChannelBanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelBanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelBanCommandOutput/)

</details>
<details>
<summary>
DeleteChannelMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteChannelMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelMembershipCommandOutput/)

</details>
<details>
<summary>
DeleteChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelMessageCommandOutput/)

</details>
<details>
<summary>
DeleteChannelModerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteChannelModeratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelModeratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteChannelModeratorCommandOutput/)

</details>
<details>
<summary>
DeleteEventsConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteEventsConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteEventsConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteEventsConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteMediaCapturePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteMediaCapturePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteMediaCapturePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteMediaCapturePipelineCommandOutput/)

</details>
<details>
<summary>
DeleteMeeting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteMeetingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteMeetingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteMeetingCommandOutput/)

</details>
<details>
<summary>
DeletePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeletePhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeletePhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeletePhoneNumberCommandOutput/)

</details>
<details>
<summary>
DeleteProxySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteProxySessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteProxySessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteProxySessionCommandOutput/)

</details>
<details>
<summary>
DeleteRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteRoomCommandOutput/)

</details>
<details>
<summary>
DeleteRoomMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteRoomMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteRoomMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteRoomMembershipCommandOutput/)

</details>
<details>
<summary>
DeleteSipMediaApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteSipMediaApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteSipMediaApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteSipMediaApplicationCommandOutput/)

</details>
<details>
<summary>
DeleteSipRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteSipRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteSipRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteSipRuleCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteVoiceConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceConnectorEmergencyCallingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteVoiceConnectorEmergencyCallingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteVoiceConnectorGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorGroupCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceConnectorOrigination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteVoiceConnectorOriginationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorOriginationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorOriginationCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceConnectorProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteVoiceConnectorProxyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorProxyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorProxyCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceConnectorStreamingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteVoiceConnectorStreamingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorStreamingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorStreamingConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceConnectorTermination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteVoiceConnectorTerminationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorTerminationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorTerminationCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceConnectorTerminationCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DeleteVoiceConnectorTerminationCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorTerminationCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DeleteVoiceConnectorTerminationCredentialsCommandOutput/)

</details>
<details>
<summary>
DescribeAppInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeAppInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeAppInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeAppInstanceCommandOutput/)

</details>
<details>
<summary>
DescribeAppInstanceAdmin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeAppInstanceAdminCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeAppInstanceAdminCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeAppInstanceAdminCommandOutput/)

</details>
<details>
<summary>
DescribeAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeAppInstanceUserCommandOutput/)

</details>
<details>
<summary>
DescribeChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelCommandOutput/)

</details>
<details>
<summary>
DescribeChannelBan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeChannelBanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelBanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelBanCommandOutput/)

</details>
<details>
<summary>
DescribeChannelMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeChannelMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelMembershipCommandOutput/)

</details>
<details>
<summary>
DescribeChannelMembershipForAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeChannelMembershipForAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelMembershipForAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelMembershipForAppInstanceUserCommandOutput/)

</details>
<details>
<summary>
DescribeChannelModeratedByAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeChannelModeratedByAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelModeratedByAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelModeratedByAppInstanceUserCommandOutput/)

</details>
<details>
<summary>
DescribeChannelModerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DescribeChannelModeratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelModeratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DescribeChannelModeratorCommandOutput/)

</details>
<details>
<summary>
DisassociatePhoneNumberFromUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DisassociatePhoneNumberFromUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DisassociatePhoneNumberFromUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DisassociatePhoneNumberFromUserCommandOutput/)

</details>
<details>
<summary>
DisassociatePhoneNumbersFromVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DisassociatePhoneNumbersFromVoiceConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DisassociatePhoneNumbersFromVoiceConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DisassociatePhoneNumbersFromVoiceConnectorCommandOutput/)

</details>
<details>
<summary>
DisassociatePhoneNumbersFromVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput/)

</details>
<details>
<summary>
DisassociateSigninDelegateGroupsFromAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/DisassociateSigninDelegateGroupsFromAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DisassociateSigninDelegateGroupsFromAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/DisassociateSigninDelegateGroupsFromAccountCommandOutput/)

</details>
<details>
<summary>
GetAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAccountCommandOutput/)

</details>
<details>
<summary>
GetAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAccountSettingsCommandOutput/)

</details>
<details>
<summary>
GetAppInstanceRetentionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetAppInstanceRetentionSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAppInstanceRetentionSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAppInstanceRetentionSettingsCommandOutput/)

</details>
<details>
<summary>
GetAppInstanceStreamingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetAppInstanceStreamingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAppInstanceStreamingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAppInstanceStreamingConfigurationsCommandOutput/)

</details>
<details>
<summary>
GetAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetAttendeeCommandOutput/)

</details>
<details>
<summary>
GetBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetBotCommandOutput/)

</details>
<details>
<summary>
GetChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetChannelMessageCommandOutput/)

</details>
<details>
<summary>
GetEventsConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetEventsConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetEventsConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetEventsConfigurationCommandOutput/)

</details>
<details>
<summary>
GetGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetGlobalSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetGlobalSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetGlobalSettingsCommandOutput/)

</details>
<details>
<summary>
GetMediaCapturePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetMediaCapturePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetMediaCapturePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetMediaCapturePipelineCommandOutput/)

</details>
<details>
<summary>
GetMeeting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetMeetingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetMeetingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetMeetingCommandOutput/)

</details>
<details>
<summary>
GetMessagingSessionEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetMessagingSessionEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetMessagingSessionEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetMessagingSessionEndpointCommandOutput/)

</details>
<details>
<summary>
GetPhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetPhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetPhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetPhoneNumberCommandOutput/)

</details>
<details>
<summary>
GetPhoneNumberOrder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetPhoneNumberOrderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetPhoneNumberOrderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetPhoneNumberOrderCommandOutput/)

</details>
<details>
<summary>
GetPhoneNumberSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetPhoneNumberSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetPhoneNumberSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetPhoneNumberSettingsCommandOutput/)

</details>
<details>
<summary>
GetProxySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetProxySessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetProxySessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetProxySessionCommandOutput/)

</details>
<details>
<summary>
GetRetentionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetRetentionSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetRetentionSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetRetentionSettingsCommandOutput/)

</details>
<details>
<summary>
GetRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetRoomCommandOutput/)

</details>
<details>
<summary>
GetSipMediaApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetSipMediaApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetSipMediaApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetSipMediaApplicationCommandOutput/)

</details>
<details>
<summary>
GetSipMediaApplicationLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetSipMediaApplicationLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetSipMediaApplicationLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetSipMediaApplicationLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
GetSipRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetSipRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetSipRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetSipRuleCommandOutput/)

</details>
<details>
<summary>
GetUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetUserCommandOutput/)

</details>
<details>
<summary>
GetUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetUserSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetUserSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetUserSettingsCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnectorEmergencyCallingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorEmergencyCallingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorEmergencyCallingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorEmergencyCallingConfigurationCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorGroupCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnectorLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnectorOrigination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorOriginationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorOriginationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorOriginationCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnectorProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorProxyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorProxyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorProxyCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnectorStreamingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorStreamingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorStreamingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorStreamingConfigurationCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnectorTermination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorTerminationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorTerminationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorTerminationCommandOutput/)

</details>
<details>
<summary>
GetVoiceConnectorTerminationHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/GetVoiceConnectorTerminationHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorTerminationHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/GetVoiceConnectorTerminationHealthCommandOutput/)

</details>
<details>
<summary>
InviteUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/InviteUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/InviteUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/InviteUsersCommandOutput/)

</details>
<details>
<summary>
ListAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAccountsCommandOutput/)

</details>
<details>
<summary>
ListAppInstanceAdmins
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListAppInstanceAdminsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAppInstanceAdminsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAppInstanceAdminsCommandOutput/)

</details>
<details>
<summary>
ListAppInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListAppInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAppInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAppInstancesCommandOutput/)

</details>
<details>
<summary>
ListAppInstanceUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListAppInstanceUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAppInstanceUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAppInstanceUsersCommandOutput/)

</details>
<details>
<summary>
ListAttendees
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListAttendeesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAttendeesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAttendeesCommandOutput/)

</details>
<details>
<summary>
ListAttendeeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListAttendeeTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAttendeeTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListAttendeeTagsCommandOutput/)

</details>
<details>
<summary>
ListBots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListBotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListBotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListBotsCommandOutput/)

</details>
<details>
<summary>
ListChannelBans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListChannelBansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelBansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelBansCommandOutput/)

</details>
<details>
<summary>
ListChannelMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListChannelMembershipsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelMembershipsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelMembershipsCommandOutput/)

</details>
<details>
<summary>
ListChannelMembershipsForAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListChannelMembershipsForAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelMembershipsForAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelMembershipsForAppInstanceUserCommandOutput/)

</details>
<details>
<summary>
ListChannelMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListChannelMessagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelMessagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelMessagesCommandOutput/)

</details>
<details>
<summary>
ListChannelModerators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListChannelModeratorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelModeratorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelModeratorsCommandOutput/)

</details>
<details>
<summary>
ListChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListChannelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelsCommandOutput/)

</details>
<details>
<summary>
ListChannelsModeratedByAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListChannelsModeratedByAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelsModeratedByAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListChannelsModeratedByAppInstanceUserCommandOutput/)

</details>
<details>
<summary>
ListMediaCapturePipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListMediaCapturePipelinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListMediaCapturePipelinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListMediaCapturePipelinesCommandOutput/)

</details>
<details>
<summary>
ListMeetings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListMeetingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListMeetingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListMeetingsCommandOutput/)

</details>
<details>
<summary>
ListMeetingTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListMeetingTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListMeetingTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListMeetingTagsCommandOutput/)

</details>
<details>
<summary>
ListPhoneNumberOrders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListPhoneNumberOrdersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListPhoneNumberOrdersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListPhoneNumberOrdersCommandOutput/)

</details>
<details>
<summary>
ListPhoneNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListPhoneNumbersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListPhoneNumbersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListPhoneNumbersCommandOutput/)

</details>
<details>
<summary>
ListProxySessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListProxySessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListProxySessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListProxySessionsCommandOutput/)

</details>
<details>
<summary>
ListRoomMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListRoomMembershipsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListRoomMembershipsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListRoomMembershipsCommandOutput/)

</details>
<details>
<summary>
ListRooms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListRoomsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListRoomsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListRoomsCommandOutput/)

</details>
<details>
<summary>
ListSipMediaApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListSipMediaApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListSipMediaApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListSipMediaApplicationsCommandOutput/)

</details>
<details>
<summary>
ListSipRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListSipRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListSipRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListSipRulesCommandOutput/)

</details>
<details>
<summary>
ListSupportedPhoneNumberCountries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListSupportedPhoneNumberCountriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListSupportedPhoneNumberCountriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListSupportedPhoneNumberCountriesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListUsersCommandOutput/)

</details>
<details>
<summary>
ListVoiceConnectorGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListVoiceConnectorGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListVoiceConnectorGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListVoiceConnectorGroupsCommandOutput/)

</details>
<details>
<summary>
ListVoiceConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListVoiceConnectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListVoiceConnectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListVoiceConnectorsCommandOutput/)

</details>
<details>
<summary>
ListVoiceConnectorTerminationCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ListVoiceConnectorTerminationCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListVoiceConnectorTerminationCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ListVoiceConnectorTerminationCredentialsCommandOutput/)

</details>
<details>
<summary>
LogoutUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/LogoutUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/LogoutUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/LogoutUserCommandOutput/)

</details>
<details>
<summary>
PutAppInstanceRetentionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutAppInstanceRetentionSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutAppInstanceRetentionSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutAppInstanceRetentionSettingsCommandOutput/)

</details>
<details>
<summary>
PutAppInstanceStreamingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutAppInstanceStreamingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutAppInstanceStreamingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutAppInstanceStreamingConfigurationsCommandOutput/)

</details>
<details>
<summary>
PutEventsConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutEventsConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutEventsConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutEventsConfigurationCommandOutput/)

</details>
<details>
<summary>
PutRetentionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutRetentionSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutRetentionSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutRetentionSettingsCommandOutput/)

</details>
<details>
<summary>
PutSipMediaApplicationLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutSipMediaApplicationLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutSipMediaApplicationLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutSipMediaApplicationLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
PutVoiceConnectorEmergencyCallingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutVoiceConnectorEmergencyCallingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorEmergencyCallingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorEmergencyCallingConfigurationCommandOutput/)

</details>
<details>
<summary>
PutVoiceConnectorLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutVoiceConnectorLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
PutVoiceConnectorOrigination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutVoiceConnectorOriginationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorOriginationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorOriginationCommandOutput/)

</details>
<details>
<summary>
PutVoiceConnectorProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutVoiceConnectorProxyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorProxyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorProxyCommandOutput/)

</details>
<details>
<summary>
PutVoiceConnectorStreamingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutVoiceConnectorStreamingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorStreamingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorStreamingConfigurationCommandOutput/)

</details>
<details>
<summary>
PutVoiceConnectorTermination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutVoiceConnectorTerminationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorTerminationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorTerminationCommandOutput/)

</details>
<details>
<summary>
PutVoiceConnectorTerminationCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/PutVoiceConnectorTerminationCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorTerminationCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/PutVoiceConnectorTerminationCredentialsCommandOutput/)

</details>
<details>
<summary>
RedactChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/RedactChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RedactChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RedactChannelMessageCommandOutput/)

</details>
<details>
<summary>
RedactConversationMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/RedactConversationMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RedactConversationMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RedactConversationMessageCommandOutput/)

</details>
<details>
<summary>
RedactRoomMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/RedactRoomMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RedactRoomMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RedactRoomMessageCommandOutput/)

</details>
<details>
<summary>
RegenerateSecurityToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/RegenerateSecurityTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RegenerateSecurityTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RegenerateSecurityTokenCommandOutput/)

</details>
<details>
<summary>
ResetPersonalPIN
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ResetPersonalPINCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ResetPersonalPINCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ResetPersonalPINCommandOutput/)

</details>
<details>
<summary>
RestorePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/RestorePhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RestorePhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/RestorePhoneNumberCommandOutput/)

</details>
<details>
<summary>
SearchAvailablePhoneNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/SearchAvailablePhoneNumbersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/SearchAvailablePhoneNumbersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/SearchAvailablePhoneNumbersCommandOutput/)

</details>
<details>
<summary>
SendChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/SendChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/SendChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/SendChannelMessageCommandOutput/)

</details>
<details>
<summary>
StartMeetingTranscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/StartMeetingTranscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/StartMeetingTranscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/StartMeetingTranscriptionCommandOutput/)

</details>
<details>
<summary>
StopMeetingTranscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/StopMeetingTranscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/StopMeetingTranscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/StopMeetingTranscriptionCommandOutput/)

</details>
<details>
<summary>
TagAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/TagAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/TagAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/TagAttendeeCommandOutput/)

</details>
<details>
<summary>
TagMeeting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/TagMeetingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/TagMeetingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/TagMeetingCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagAttendee
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UntagAttendeeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UntagAttendeeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UntagAttendeeCommandOutput/)

</details>
<details>
<summary>
UntagMeeting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UntagMeetingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UntagMeetingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UntagMeetingCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateAccountCommandOutput/)

</details>
<details>
<summary>
UpdateAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateAccountSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateAppInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateAppInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateAppInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateAppInstanceCommandOutput/)

</details>
<details>
<summary>
UpdateAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateAppInstanceUserCommandOutput/)

</details>
<details>
<summary>
UpdateBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateBotCommandOutput/)

</details>
<details>
<summary>
UpdateChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateChannelCommandOutput/)

</details>
<details>
<summary>
UpdateChannelMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateChannelMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateChannelMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateChannelMessageCommandOutput/)

</details>
<details>
<summary>
UpdateChannelReadMarker
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateChannelReadMarkerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateChannelReadMarkerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateChannelReadMarkerCommandOutput/)

</details>
<details>
<summary>
UpdateGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateGlobalSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateGlobalSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateGlobalSettingsCommandOutput/)

</details>
<details>
<summary>
UpdatePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdatePhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdatePhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdatePhoneNumberCommandOutput/)

</details>
<details>
<summary>
UpdatePhoneNumberSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdatePhoneNumberSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdatePhoneNumberSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdatePhoneNumberSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateProxySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateProxySessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateProxySessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateProxySessionCommandOutput/)

</details>
<details>
<summary>
UpdateRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateRoomCommandOutput/)

</details>
<details>
<summary>
UpdateRoomMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateRoomMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateRoomMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateRoomMembershipCommandOutput/)

</details>
<details>
<summary>
UpdateSipMediaApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateSipMediaApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateSipMediaApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateSipMediaApplicationCommandOutput/)

</details>
<details>
<summary>
UpdateSipMediaApplicationCall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateSipMediaApplicationCallCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateSipMediaApplicationCallCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateSipMediaApplicationCallCommandOutput/)

</details>
<details>
<summary>
UpdateSipRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateSipRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateSipRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateSipRuleCommandOutput/)

</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateUserCommandOutput/)

</details>
<details>
<summary>
UpdateUserSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateUserSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateUserSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateUserSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateVoiceConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateVoiceConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateVoiceConnectorCommandOutput/)

</details>
<details>
<summary>
UpdateVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/UpdateVoiceConnectorGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateVoiceConnectorGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/UpdateVoiceConnectorGroupCommandOutput/)

</details>
<details>
<summary>
ValidateE911Address
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime/command/ValidateE911AddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ValidateE911AddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime/Interface/ValidateE911AddressCommandOutput/)

</details>
