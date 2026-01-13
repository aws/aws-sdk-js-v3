<!-- generated file, do not edit directly -->

# @aws-sdk/client-chime-sdk-identity

## Description

AWS SDK for JavaScript ChimeSDKIdentity Client for Node.js, Browser and React Native.

<p>The Amazon Chime SDK Identity APIs in this section allow software developers to create
and manage unique instances of their messaging applications. These APIs provide the
overarching framework for creating and sending messages. For more information about the
identity APIs, refer to <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Identity.html">Amazon Chime SDK identity</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-chime-sdk-identity
using your favorite package manager:
- `npm install @aws-sdk/client-chime-sdk-identity`
- `yarn add @aws-sdk/client-chime-sdk-identity`
- `pnpm add @aws-sdk/client-chime-sdk-identity`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ChimeSDKIdentityClient` and
the commands you need, for example `ListAppInstancesCommand`:

```js
// ES5 example
const { ChimeSDKIdentityClient, ListAppInstancesCommand } = require("@aws-sdk/client-chime-sdk-identity");
```

```ts
// ES6+ example
import { ChimeSDKIdentityClient, ListAppInstancesCommand } from "@aws-sdk/client-chime-sdk-identity";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ChimeSDKIdentityClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListAppInstancesCommand(params);
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
import * as AWS from "@aws-sdk/client-chime-sdk-identity";
const client = new AWS.ChimeSDKIdentity({ region: "REGION" });

// async/await.
try {
  const data = await client.listAppInstances(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAppInstances(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAppInstances(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-chime-sdk-identity` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAppInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/CreateAppInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/CreateAppInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/CreateAppInstanceCommandOutput/)
</details>
<details>
<summary>
CreateAppInstanceAdmin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/CreateAppInstanceAdminCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/CreateAppInstanceAdminCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/CreateAppInstanceAdminCommandOutput/)
</details>
<details>
<summary>
CreateAppInstanceBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/CreateAppInstanceBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/CreateAppInstanceBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/CreateAppInstanceBotCommandOutput/)
</details>
<details>
<summary>
CreateAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/CreateAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/CreateAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/CreateAppInstanceUserCommandOutput/)
</details>
<details>
<summary>
DeleteAppInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DeleteAppInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeleteAppInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeleteAppInstanceCommandOutput/)
</details>
<details>
<summary>
DeleteAppInstanceAdmin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DeleteAppInstanceAdminCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeleteAppInstanceAdminCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeleteAppInstanceAdminCommandOutput/)
</details>
<details>
<summary>
DeleteAppInstanceBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DeleteAppInstanceBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeleteAppInstanceBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeleteAppInstanceBotCommandOutput/)
</details>
<details>
<summary>
DeleteAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DeleteAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeleteAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeleteAppInstanceUserCommandOutput/)
</details>
<details>
<summary>
DeregisterAppInstanceUserEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DeregisterAppInstanceUserEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeregisterAppInstanceUserEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DeregisterAppInstanceUserEndpointCommandOutput/)
</details>
<details>
<summary>
DescribeAppInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DescribeAppInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceCommandOutput/)
</details>
<details>
<summary>
DescribeAppInstanceAdmin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DescribeAppInstanceAdminCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceAdminCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceAdminCommandOutput/)
</details>
<details>
<summary>
DescribeAppInstanceBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DescribeAppInstanceBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceBotCommandOutput/)
</details>
<details>
<summary>
DescribeAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DescribeAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceUserCommandOutput/)
</details>
<details>
<summary>
DescribeAppInstanceUserEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/DescribeAppInstanceUserEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceUserEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/DescribeAppInstanceUserEndpointCommandOutput/)
</details>
<details>
<summary>
GetAppInstanceRetentionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/GetAppInstanceRetentionSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/GetAppInstanceRetentionSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/GetAppInstanceRetentionSettingsCommandOutput/)
</details>
<details>
<summary>
ListAppInstanceAdmins
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/ListAppInstanceAdminsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstanceAdminsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstanceAdminsCommandOutput/)
</details>
<details>
<summary>
ListAppInstanceBots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/ListAppInstanceBotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstanceBotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstanceBotsCommandOutput/)
</details>
<details>
<summary>
ListAppInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/ListAppInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstancesCommandOutput/)
</details>
<details>
<summary>
ListAppInstanceUserEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/ListAppInstanceUserEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstanceUserEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstanceUserEndpointsCommandOutput/)
</details>
<details>
<summary>
ListAppInstanceUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/ListAppInstanceUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstanceUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListAppInstanceUsersCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PutAppInstanceRetentionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/PutAppInstanceRetentionSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/PutAppInstanceRetentionSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/PutAppInstanceRetentionSettingsCommandOutput/)
</details>
<details>
<summary>
PutAppInstanceUserExpirationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/PutAppInstanceUserExpirationSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/PutAppInstanceUserExpirationSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/PutAppInstanceUserExpirationSettingsCommandOutput/)
</details>
<details>
<summary>
RegisterAppInstanceUserEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/RegisterAppInstanceUserEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/RegisterAppInstanceUserEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/RegisterAppInstanceUserEndpointCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAppInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/UpdateAppInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UpdateAppInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UpdateAppInstanceCommandOutput/)
</details>
<details>
<summary>
UpdateAppInstanceBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/UpdateAppInstanceBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UpdateAppInstanceBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UpdateAppInstanceBotCommandOutput/)
</details>
<details>
<summary>
UpdateAppInstanceUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/UpdateAppInstanceUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UpdateAppInstanceUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UpdateAppInstanceUserCommandOutput/)
</details>
<details>
<summary>
UpdateAppInstanceUserEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/chime-sdk-identity/command/UpdateAppInstanceUserEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UpdateAppInstanceUserEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-chime-sdk-identity/Interface/UpdateAppInstanceUserEndpointCommandOutput/)
</details>
