<!-- generated file, do not edit directly -->

# @aws-sdk/client-lex-model-building-service

## Description

AWS SDK for JavaScript LexModelBuildingService Client for Node.js, Browser and React Native.

<fullname>Amazon Lex Build-Time Actions</fullname>
<p> Amazon Lex is an AWS service for building conversational voice and text
interfaces. Use these actions to create, update, and delete conversational
bots for new and existing client applications. </p>

## Installing
To install this package, simply type add or install @aws-sdk/client-lex-model-building-service
using your favorite package manager:
- `npm install @aws-sdk/client-lex-model-building-service`
- `yarn add @aws-sdk/client-lex-model-building-service`
- `pnpm add @aws-sdk/client-lex-model-building-service`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LexModelBuildingServiceClient` and
the commands you need, for example `ListTagsForResourceCommand`:

```js
// ES5 example
const { LexModelBuildingServiceClient, ListTagsForResourceCommand } = require("@aws-sdk/client-lex-model-building-service");
```

```ts
// ES6+ example
import { LexModelBuildingServiceClient, ListTagsForResourceCommand } from "@aws-sdk/client-lex-model-building-service";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LexModelBuildingServiceClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListTagsForResourceCommand(params);
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
import * as AWS from "@aws-sdk/client-lex-model-building-service";
const client = new AWS.LexModelBuildingService({ region: "REGION" });

// async/await.
try {
  const data = await client.listTagsForResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTagsForResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTagsForResource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lex-model-building-service` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateBotVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/CreateBotVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/CreateBotVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/CreateBotVersionCommandOutput/)
</details>
<details>
<summary>
CreateIntentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/CreateIntentVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/CreateIntentVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/CreateIntentVersionCommandOutput/)
</details>
<details>
<summary>
CreateSlotTypeVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/CreateSlotTypeVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/CreateSlotTypeVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/CreateSlotTypeVersionCommandOutput/)
</details>
<details>
<summary>
DeleteBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteBotCommandOutput/)
</details>
<details>
<summary>
DeleteBotAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteBotAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteBotAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteBotAliasCommandOutput/)
</details>
<details>
<summary>
DeleteBotChannelAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteBotChannelAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteBotChannelAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteBotChannelAssociationCommandOutput/)
</details>
<details>
<summary>
DeleteBotVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteBotVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteBotVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteBotVersionCommandOutput/)
</details>
<details>
<summary>
DeleteIntent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteIntentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteIntentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteIntentCommandOutput/)
</details>
<details>
<summary>
DeleteIntentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteIntentVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteIntentVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteIntentVersionCommandOutput/)
</details>
<details>
<summary>
DeleteSlotType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteSlotTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteSlotTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteSlotTypeCommandOutput/)
</details>
<details>
<summary>
DeleteSlotTypeVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteSlotTypeVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteSlotTypeVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteSlotTypeVersionCommandOutput/)
</details>
<details>
<summary>
DeleteUtterances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/DeleteUtterancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteUtterancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/DeleteUtterancesCommandOutput/)
</details>
<details>
<summary>
GetBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotCommandOutput/)
</details>
<details>
<summary>
GetBotAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBotAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotAliasCommandOutput/)
</details>
<details>
<summary>
GetBotAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBotAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotAliasesCommandOutput/)
</details>
<details>
<summary>
GetBotChannelAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBotChannelAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotChannelAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotChannelAssociationCommandOutput/)
</details>
<details>
<summary>
GetBotChannelAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBotChannelAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotChannelAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotChannelAssociationsCommandOutput/)
</details>
<details>
<summary>
GetBots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotsCommandOutput/)
</details>
<details>
<summary>
GetBotVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBotVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBotVersionsCommandOutput/)
</details>
<details>
<summary>
GetBuiltinIntent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBuiltinIntentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBuiltinIntentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBuiltinIntentCommandOutput/)
</details>
<details>
<summary>
GetBuiltinIntents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBuiltinIntentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBuiltinIntentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBuiltinIntentsCommandOutput/)
</details>
<details>
<summary>
GetBuiltinSlotTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetBuiltinSlotTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBuiltinSlotTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetBuiltinSlotTypesCommandOutput/)
</details>
<details>
<summary>
GetExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetExportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetExportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetExportCommandOutput/)
</details>
<details>
<summary>
GetImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetImportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetImportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetImportCommandOutput/)
</details>
<details>
<summary>
GetIntent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetIntentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetIntentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetIntentCommandOutput/)
</details>
<details>
<summary>
GetIntents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetIntentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetIntentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetIntentsCommandOutput/)
</details>
<details>
<summary>
GetIntentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetIntentVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetIntentVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetIntentVersionsCommandOutput/)
</details>
<details>
<summary>
GetMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetMigrationCommandOutput/)
</details>
<details>
<summary>
GetMigrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetMigrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetMigrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetMigrationsCommandOutput/)
</details>
<details>
<summary>
GetSlotType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetSlotTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetSlotTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetSlotTypeCommandOutput/)
</details>
<details>
<summary>
GetSlotTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetSlotTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetSlotTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetSlotTypesCommandOutput/)
</details>
<details>
<summary>
GetSlotTypeVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetSlotTypeVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetSlotTypeVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetSlotTypeVersionsCommandOutput/)
</details>
<details>
<summary>
GetUtterancesView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/GetUtterancesViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetUtterancesViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/GetUtterancesViewCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PutBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/PutBotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/PutBotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/PutBotCommandOutput/)
</details>
<details>
<summary>
PutBotAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/PutBotAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/PutBotAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/PutBotAliasCommandOutput/)
</details>
<details>
<summary>
PutIntent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/PutIntentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/PutIntentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/PutIntentCommandOutput/)
</details>
<details>
<summary>
PutSlotType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/PutSlotTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/PutSlotTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/PutSlotTypeCommandOutput/)
</details>
<details>
<summary>
StartImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/StartImportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/StartImportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/StartImportCommandOutput/)
</details>
<details>
<summary>
StartMigration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/StartMigrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/StartMigrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/StartMigrationCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-model-building-service/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lex-model-building-service/Interface/UntagResourceCommandOutput/)
</details>
