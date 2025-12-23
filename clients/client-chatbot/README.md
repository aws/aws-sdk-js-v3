<!-- generated file, do not edit directly -->

# @aws-sdk/client-chatbot

## Description

AWS SDK for JavaScript Chatbot Client for Node.js, Browser and React Native.

<p>The <i>AWS Chatbot API Reference</i> provides descriptions, API request parameters, and the XML response for each of the AWS Chatbot API actions.</p>
<p>AWS Chatbot APIs are currently available in the following Regions:</p>
<ul>
<li>
<p>US East (Ohio) - <code>us-east-2</code>
</p>
</li>
<li>
<p>US West (Oregon) - <code>us-west-2</code>
</p>
</li>
<li>
<p>Asia Pacific (Singapore) - <code>ap-southeast-1</code>
</p>
</li>
<li>
<p>Europe (Ireland) - <code>eu-west-1</code>
</p>
</li>
</ul>
<p>The AWS Chatbot console can only be used in US East (Ohio). Your configuration data however, is stored in each of the relevant available Regions.</p>
<note>
<p>Your AWS CloudTrail events are logged in whatever Region you call from, not US East (N. Virginia) by default.</p>
</note>

## Installing
To install this package, simply type add or install @aws-sdk/client-chatbot
using your favorite package manager:
- `npm install @aws-sdk/client-chatbot`
- `yarn add @aws-sdk/client-chatbot`
- `pnpm add @aws-sdk/client-chatbot`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ChatbotClient` and
the commands you need, for example `ListCustomActionsCommand`:

```js
// ES5 example
const { ChatbotClient, ListCustomActionsCommand } = require("@aws-sdk/client-chatbot");
```

```ts
// ES6+ example
import { ChatbotClient, ListCustomActionsCommand } from "@aws-sdk/client-chatbot";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ChatbotClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListCustomActionsCommand(params);
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
import * as AWS from "@aws-sdk/client-chatbot";
const client = new AWS.Chatbot({ region: "REGION" });

// async/await.
try {
  const data = await client.listCustomActions(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listCustomActions(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listCustomActions(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-chatbot` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateToConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/AssociateToConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/AssociateToConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/AssociateToConfigurationCommandOutput/)
</details>
<details>
<summary>
CreateChimeWebhookConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/CreateChimeWebhookConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/CreateChimeWebhookConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/CreateChimeWebhookConfigurationCommandOutput/)
</details>
<details>
<summary>
CreateCustomAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/CreateCustomActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/CreateCustomActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/CreateCustomActionCommandOutput/)
</details>
<details>
<summary>
CreateMicrosoftTeamsChannelConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/CreateMicrosoftTeamsChannelConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/CreateMicrosoftTeamsChannelConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/CreateMicrosoftTeamsChannelConfigurationCommandOutput/)
</details>
<details>
<summary>
CreateSlackChannelConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/CreateSlackChannelConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/CreateSlackChannelConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/CreateSlackChannelConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteChimeWebhookConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DeleteChimeWebhookConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteChimeWebhookConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteChimeWebhookConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteCustomAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DeleteCustomActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteCustomActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteCustomActionCommandOutput/)
</details>
<details>
<summary>
DeleteMicrosoftTeamsChannelConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DeleteMicrosoftTeamsChannelConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteMicrosoftTeamsChannelConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteMicrosoftTeamsChannelConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteMicrosoftTeamsConfiguredTeam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DeleteMicrosoftTeamsConfiguredTeamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteMicrosoftTeamsConfiguredTeamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteMicrosoftTeamsConfiguredTeamCommandOutput/)
</details>
<details>
<summary>
DeleteMicrosoftTeamsUserIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DeleteMicrosoftTeamsUserIdentityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteMicrosoftTeamsUserIdentityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteMicrosoftTeamsUserIdentityCommandOutput/)
</details>
<details>
<summary>
DeleteSlackChannelConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DeleteSlackChannelConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteSlackChannelConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteSlackChannelConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteSlackUserIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DeleteSlackUserIdentityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteSlackUserIdentityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteSlackUserIdentityCommandOutput/)
</details>
<details>
<summary>
DeleteSlackWorkspaceAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DeleteSlackWorkspaceAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteSlackWorkspaceAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DeleteSlackWorkspaceAuthorizationCommandOutput/)
</details>
<details>
<summary>
DescribeChimeWebhookConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DescribeChimeWebhookConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DescribeChimeWebhookConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DescribeChimeWebhookConfigurationsCommandOutput/)
</details>
<details>
<summary>
DescribeSlackChannelConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DescribeSlackChannelConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DescribeSlackChannelConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DescribeSlackChannelConfigurationsCommandOutput/)
</details>
<details>
<summary>
DescribeSlackUserIdentities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DescribeSlackUserIdentitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DescribeSlackUserIdentitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DescribeSlackUserIdentitiesCommandOutput/)
</details>
<details>
<summary>
DescribeSlackWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DescribeSlackWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DescribeSlackWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DescribeSlackWorkspacesCommandOutput/)
</details>
<details>
<summary>
DisassociateFromConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/DisassociateFromConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DisassociateFromConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/DisassociateFromConfigurationCommandOutput/)
</details>
<details>
<summary>
GetAccountPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/GetAccountPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/GetAccountPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/GetAccountPreferencesCommandOutput/)
</details>
<details>
<summary>
GetCustomAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/GetCustomActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/GetCustomActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/GetCustomActionCommandOutput/)
</details>
<details>
<summary>
GetMicrosoftTeamsChannelConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/GetMicrosoftTeamsChannelConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/GetMicrosoftTeamsChannelConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/GetMicrosoftTeamsChannelConfigurationCommandOutput/)
</details>
<details>
<summary>
ListAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/ListAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListAssociationsCommandOutput/)
</details>
<details>
<summary>
ListCustomActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/ListCustomActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListCustomActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListCustomActionsCommandOutput/)
</details>
<details>
<summary>
ListMicrosoftTeamsChannelConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/ListMicrosoftTeamsChannelConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListMicrosoftTeamsChannelConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListMicrosoftTeamsChannelConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListMicrosoftTeamsConfiguredTeams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/ListMicrosoftTeamsConfiguredTeamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListMicrosoftTeamsConfiguredTeamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListMicrosoftTeamsConfiguredTeamsCommandOutput/)
</details>
<details>
<summary>
ListMicrosoftTeamsUserIdentities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/ListMicrosoftTeamsUserIdentitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListMicrosoftTeamsUserIdentitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListMicrosoftTeamsUserIdentitiesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAccountPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/UpdateAccountPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateAccountPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateAccountPreferencesCommandOutput/)
</details>
<details>
<summary>
UpdateChimeWebhookConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/UpdateChimeWebhookConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateChimeWebhookConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateChimeWebhookConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateCustomAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/UpdateCustomActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateCustomActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateCustomActionCommandOutput/)
</details>
<details>
<summary>
UpdateMicrosoftTeamsChannelConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/UpdateMicrosoftTeamsChannelConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateMicrosoftTeamsChannelConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateMicrosoftTeamsChannelConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateSlackChannelConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chatbot/command/UpdateSlackChannelConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateSlackChannelConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chatbot/Interface/UpdateSlackChannelConfigurationCommandOutput/)
</details>
