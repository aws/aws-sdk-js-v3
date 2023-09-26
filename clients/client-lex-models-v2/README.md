<!-- generated file, do not edit directly -->

# @aws-sdk/client-lex-models-v2

## Description

AWS SDK for JavaScript LexModelsV2 Client for Node.js, Browser and React Native.

<p></p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-lex-models-v2
using your favorite package manager:

- `npm install @aws-sdk/client-lex-models-v2`
- `yarn add @aws-sdk/client-lex-models-v2`
- `pnpm add @aws-sdk/client-lex-models-v2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LexModelsV2Client` and
the commands you need, for example `ListBotsCommand`:

```js
// ES5 example
const { LexModelsV2Client, ListBotsCommand } = require("@aws-sdk/client-lex-models-v2");
```

```ts
// ES6+ example
import { LexModelsV2Client, ListBotsCommand } from "@aws-sdk/client-lex-models-v2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LexModelsV2Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListBotsCommand(params);
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
import * as AWS from "@aws-sdk/client-lex-models-v2";
const client = new AWS.LexModelsV2({ region: "REGION" });

// async/await.
try {
  const data = await client.listBots(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBots(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBots(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lex-models-v2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchCreateCustomVocabularyItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/batchcreatecustomvocabularyitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/batchcreatecustomvocabularyitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/batchcreatecustomvocabularyitemcommandoutput.html)

</details>
<details>
<summary>
BatchDeleteCustomVocabularyItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/batchdeletecustomvocabularyitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/batchdeletecustomvocabularyitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/batchdeletecustomvocabularyitemcommandoutput.html)

</details>
<details>
<summary>
BatchUpdateCustomVocabularyItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/batchupdatecustomvocabularyitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/batchupdatecustomvocabularyitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/batchupdatecustomvocabularyitemcommandoutput.html)

</details>
<details>
<summary>
BuildBotLocale
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/buildbotlocalecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/buildbotlocalecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/buildbotlocalecommandoutput.html)

</details>
<details>
<summary>
CreateBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createbotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createbotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createbotcommandoutput.html)

</details>
<details>
<summary>
CreateBotAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createbotaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createbotaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createbotaliascommandoutput.html)

</details>
<details>
<summary>
CreateBotLocale
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createbotlocalecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createbotlocalecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createbotlocalecommandoutput.html)

</details>
<details>
<summary>
CreateBotVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createbotversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createbotversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createbotversioncommandoutput.html)

</details>
<details>
<summary>
CreateExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createexportcommandoutput.html)

</details>
<details>
<summary>
CreateIntent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createintentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createintentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createintentcommandoutput.html)

</details>
<details>
<summary>
CreateResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createresourcepolicycommandoutput.html)

</details>
<details>
<summary>
CreateResourcePolicyStatement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createresourcepolicystatementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createresourcepolicystatementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createresourcepolicystatementcommandoutput.html)

</details>
<details>
<summary>
CreateSlot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createslotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createslotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createslotcommandoutput.html)

</details>
<details>
<summary>
CreateSlotType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createslottypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createslottypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createslottypecommandoutput.html)

</details>
<details>
<summary>
CreateTestSetDiscrepancyReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createtestsetdiscrepancyreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createtestsetdiscrepancyreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createtestsetdiscrepancyreportcommandoutput.html)

</details>
<details>
<summary>
CreateUploadUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/createuploadurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createuploadurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/createuploadurlcommandoutput.html)

</details>
<details>
<summary>
DeleteBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deletebotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletebotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletebotcommandoutput.html)

</details>
<details>
<summary>
DeleteBotAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deletebotaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletebotaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletebotaliascommandoutput.html)

</details>
<details>
<summary>
DeleteBotLocale
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deletebotlocalecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletebotlocalecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletebotlocalecommandoutput.html)

</details>
<details>
<summary>
DeleteBotVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deletebotversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletebotversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletebotversioncommandoutput.html)

</details>
<details>
<summary>
DeleteCustomVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deletecustomvocabularycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletecustomvocabularycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletecustomvocabularycommandoutput.html)

</details>
<details>
<summary>
DeleteExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deleteexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteexportcommandoutput.html)

</details>
<details>
<summary>
DeleteImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deleteimportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteimportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteimportcommandoutput.html)

</details>
<details>
<summary>
DeleteIntent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deleteintentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteintentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteintentcommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicyStatement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deleteresourcepolicystatementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteresourcepolicystatementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteresourcepolicystatementcommandoutput.html)

</details>
<details>
<summary>
DeleteSlot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deleteslotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteslotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteslotcommandoutput.html)

</details>
<details>
<summary>
DeleteSlotType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deleteslottypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteslottypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteslottypecommandoutput.html)

</details>
<details>
<summary>
DeleteTestSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deletetestsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletetestsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deletetestsetcommandoutput.html)

</details>
<details>
<summary>
DeleteUtterances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/deleteutterancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteutterancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/deleteutterancescommandoutput.html)

</details>
<details>
<summary>
DescribeBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describebotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotcommandoutput.html)

</details>
<details>
<summary>
DescribeBotAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describebotaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotaliascommandoutput.html)

</details>
<details>
<summary>
DescribeBotLocale
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describebotlocalecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotlocalecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotlocalecommandoutput.html)

</details>
<details>
<summary>
DescribeBotRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describebotrecommendationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotrecommendationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotrecommendationcommandoutput.html)

</details>
<details>
<summary>
DescribeBotVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describebotversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describebotversioncommandoutput.html)

</details>
<details>
<summary>
DescribeCustomVocabularyMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describecustomvocabularymetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describecustomvocabularymetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describecustomvocabularymetadatacommandoutput.html)

</details>
<details>
<summary>
DescribeExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describeexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeexportcommandoutput.html)

</details>
<details>
<summary>
DescribeImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describeimportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeimportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeimportcommandoutput.html)

</details>
<details>
<summary>
DescribeIntent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describeintentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeintentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeintentcommandoutput.html)

</details>
<details>
<summary>
DescribeResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describeresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DescribeSlot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describeslotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeslotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeslotcommandoutput.html)

</details>
<details>
<summary>
DescribeSlotType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describeslottypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeslottypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describeslottypecommandoutput.html)

</details>
<details>
<summary>
DescribeTestExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describetestexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describetestexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describetestexecutioncommandoutput.html)

</details>
<details>
<summary>
DescribeTestSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describetestsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describetestsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describetestsetcommandoutput.html)

</details>
<details>
<summary>
DescribeTestSetDiscrepancyReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describetestsetdiscrepancyreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describetestsetdiscrepancyreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describetestsetdiscrepancyreportcommandoutput.html)

</details>
<details>
<summary>
DescribeTestSetGeneration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/describetestsetgenerationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describetestsetgenerationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/describetestsetgenerationcommandoutput.html)

</details>
<details>
<summary>
GetTestExecutionArtifactsUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/gettestexecutionartifactsurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/gettestexecutionartifactsurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/gettestexecutionartifactsurlcommandoutput.html)

</details>
<details>
<summary>
ListAggregatedUtterances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listaggregatedutterancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listaggregatedutterancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listaggregatedutterancescommandoutput.html)

</details>
<details>
<summary>
ListBotAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listbotaliasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotaliasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotaliasescommandoutput.html)

</details>
<details>
<summary>
ListBotLocales
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listbotlocalescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotlocalescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotlocalescommandoutput.html)

</details>
<details>
<summary>
ListBotRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listbotrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotrecommendationscommandoutput.html)

</details>
<details>
<summary>
ListBots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listbotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotscommandoutput.html)

</details>
<details>
<summary>
ListBotVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listbotversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbotversionscommandoutput.html)

</details>
<details>
<summary>
ListBuiltInIntents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listbuiltinintentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbuiltinintentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbuiltinintentscommandoutput.html)

</details>
<details>
<summary>
ListBuiltInSlotTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listbuiltinslottypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbuiltinslottypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listbuiltinslottypescommandoutput.html)

</details>
<details>
<summary>
ListCustomVocabularyItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listcustomvocabularyitemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listcustomvocabularyitemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listcustomvocabularyitemscommandoutput.html)

</details>
<details>
<summary>
ListExports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listexportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listexportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listexportscommandoutput.html)

</details>
<details>
<summary>
ListImports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listimportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listimportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listimportscommandoutput.html)

</details>
<details>
<summary>
ListIntentMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listintentmetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listintentmetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listintentmetricscommandoutput.html)

</details>
<details>
<summary>
ListIntentPaths
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listintentpathscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listintentpathscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listintentpathscommandoutput.html)

</details>
<details>
<summary>
ListIntents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listintentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listintentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listintentscommandoutput.html)

</details>
<details>
<summary>
ListIntentStageMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listintentstagemetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listintentstagemetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listintentstagemetricscommandoutput.html)

</details>
<details>
<summary>
ListRecommendedIntents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listrecommendedintentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listrecommendedintentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listrecommendedintentscommandoutput.html)

</details>
<details>
<summary>
ListSessionAnalyticsData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listsessionanalyticsdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listsessionanalyticsdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listsessionanalyticsdatacommandoutput.html)

</details>
<details>
<summary>
ListSessionMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listsessionmetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listsessionmetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listsessionmetricscommandoutput.html)

</details>
<details>
<summary>
ListSlots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listslotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listslotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listslotscommandoutput.html)

</details>
<details>
<summary>
ListSlotTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listslottypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listslottypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listslottypescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTestExecutionResultItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listtestexecutionresultitemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtestexecutionresultitemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtestexecutionresultitemscommandoutput.html)

</details>
<details>
<summary>
ListTestExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listtestexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtestexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtestexecutionscommandoutput.html)

</details>
<details>
<summary>
ListTestSetRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listtestsetrecordscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtestsetrecordscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtestsetrecordscommandoutput.html)

</details>
<details>
<summary>
ListTestSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listtestsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtestsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listtestsetscommandoutput.html)

</details>
<details>
<summary>
ListUtteranceAnalyticsData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listutteranceanalyticsdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listutteranceanalyticsdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listutteranceanalyticsdatacommandoutput.html)

</details>
<details>
<summary>
ListUtteranceMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/listutterancemetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listutterancemetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/listutterancemetricscommandoutput.html)

</details>
<details>
<summary>
SearchAssociatedTranscripts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/searchassociatedtranscriptscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/searchassociatedtranscriptscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/searchassociatedtranscriptscommandoutput.html)

</details>
<details>
<summary>
StartBotRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/startbotrecommendationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/startbotrecommendationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/startbotrecommendationcommandoutput.html)

</details>
<details>
<summary>
StartImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/startimportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/startimportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/startimportcommandoutput.html)

</details>
<details>
<summary>
StartTestExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/starttestexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/starttestexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/starttestexecutioncommandoutput.html)

</details>
<details>
<summary>
StartTestSetGeneration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/starttestsetgenerationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/starttestsetgenerationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/starttestsetgenerationcommandoutput.html)

</details>
<details>
<summary>
StopBotRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/stopbotrecommendationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/stopbotrecommendationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/stopbotrecommendationcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateBot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updatebotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatebotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatebotcommandoutput.html)

</details>
<details>
<summary>
UpdateBotAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updatebotaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatebotaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatebotaliascommandoutput.html)

</details>
<details>
<summary>
UpdateBotLocale
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updatebotlocalecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatebotlocalecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatebotlocalecommandoutput.html)

</details>
<details>
<summary>
UpdateBotRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updatebotrecommendationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatebotrecommendationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatebotrecommendationcommandoutput.html)

</details>
<details>
<summary>
UpdateExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updateexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateexportcommandoutput.html)

</details>
<details>
<summary>
UpdateIntent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updateintentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateintentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateintentcommandoutput.html)

</details>
<details>
<summary>
UpdateResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updateresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateresourcepolicycommandoutput.html)

</details>
<details>
<summary>
UpdateSlot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updateslotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateslotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateslotcommandoutput.html)

</details>
<details>
<summary>
UpdateSlotType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updateslottypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateslottypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updateslottypecommandoutput.html)

</details>
<details>
<summary>
UpdateTestSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/classes/updatetestsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatetestsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-models-v2/interfaces/updatetestsetcommandoutput.html)

</details>
