<!-- generated file, do not edit directly -->

# @aws-sdk/client-comprehend

## Description

AWS SDK for JavaScript Comprehend Client for Node.js, Browser and React Native.

<p>Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents.
Use these actions to determine the topics contained in your documents, the topics they
discuss, the predominant sentiment expressed in them, the predominant language used, and
more.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-comprehend
using your favorite package manager:

- `npm install @aws-sdk/client-comprehend`
- `yarn add @aws-sdk/client-comprehend`
- `pnpm add @aws-sdk/client-comprehend`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ComprehendClient` and
the commands you need, for example `BatchDetectDominantLanguageCommand`:

```js
// ES5 example
const { ComprehendClient, BatchDetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend");
```

```ts
// ES6+ example
import { ComprehendClient, BatchDetectDominantLanguageCommand } from "@aws-sdk/client-comprehend";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ComprehendClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BatchDetectDominantLanguageCommand(params);
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
import * as AWS from "@aws-sdk/client-comprehend";
const client = new AWS.Comprehend({ region: "REGION" });

// async/await.
try {
  const data = await client.batchDetectDominantLanguage(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchDetectDominantLanguage(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchDetectDominantLanguage(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-comprehend` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchDetectDominantLanguage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/batchdetectdominantlanguagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectdominantlanguagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectdominantlanguagecommandoutput.html)

</details>
<details>
<summary>
BatchDetectEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/batchdetectentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectentitiescommandoutput.html)

</details>
<details>
<summary>
BatchDetectKeyPhrases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/batchdetectkeyphrasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectkeyphrasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectkeyphrasescommandoutput.html)

</details>
<details>
<summary>
BatchDetectSentiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/batchdetectsentimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectsentimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectsentimentcommandoutput.html)

</details>
<details>
<summary>
BatchDetectSyntax
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/batchdetectsyntaxcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectsyntaxcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetectsyntaxcommandoutput.html)

</details>
<details>
<summary>
BatchDetectTargetedSentiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/batchdetecttargetedsentimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetecttargetedsentimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/batchdetecttargetedsentimentcommandoutput.html)

</details>
<details>
<summary>
ClassifyDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/classifydocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/classifydocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/classifydocumentcommandoutput.html)

</details>
<details>
<summary>
ContainsPiiEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/containspiientitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/containspiientitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/containspiientitiescommandoutput.html)

</details>
<details>
<summary>
CreateDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/createdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createdatasetcommandoutput.html)

</details>
<details>
<summary>
CreateDocumentClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/createdocumentclassifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createdocumentclassifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createdocumentclassifiercommandoutput.html)

</details>
<details>
<summary>
CreateEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/createendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createendpointcommandoutput.html)

</details>
<details>
<summary>
CreateEntityRecognizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/createentityrecognizercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createentityrecognizercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createentityrecognizercommandoutput.html)

</details>
<details>
<summary>
CreateFlywheel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/createflywheelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createflywheelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/createflywheelcommandoutput.html)

</details>
<details>
<summary>
DeleteDocumentClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/deletedocumentclassifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deletedocumentclassifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deletedocumentclassifiercommandoutput.html)

</details>
<details>
<summary>
DeleteEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/deleteendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deleteendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deleteendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteEntityRecognizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/deleteentityrecognizercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deleteentityrecognizercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deleteentityrecognizercommandoutput.html)

</details>
<details>
<summary>
DeleteFlywheel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/deleteflywheelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deleteflywheelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deleteflywheelcommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DescribeDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describedatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describedatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describedatasetcommandoutput.html)

</details>
<details>
<summary>
DescribeDocumentClassificationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describedocumentclassificationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describedocumentclassificationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describedocumentclassificationjobcommandoutput.html)

</details>
<details>
<summary>
DescribeDocumentClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describedocumentclassifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describedocumentclassifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describedocumentclassifiercommandoutput.html)

</details>
<details>
<summary>
DescribeDominantLanguageDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describedominantlanguagedetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describedominantlanguagedetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describedominantlanguagedetectionjobcommandoutput.html)

</details>
<details>
<summary>
DescribeEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describeendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeendpointcommandoutput.html)

</details>
<details>
<summary>
DescribeEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describeentitiesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeentitiesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeentitiesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
DescribeEntityRecognizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describeentityrecognizercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeentityrecognizercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeentityrecognizercommandoutput.html)

</details>
<details>
<summary>
DescribeEventsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describeeventsdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeeventsdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeeventsdetectionjobcommandoutput.html)

</details>
<details>
<summary>
DescribeFlywheel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describeflywheelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeflywheelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeflywheelcommandoutput.html)

</details>
<details>
<summary>
DescribeFlywheelIteration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describeflywheeliterationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeflywheeliterationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeflywheeliterationcommandoutput.html)

</details>
<details>
<summary>
DescribeKeyPhrasesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describekeyphrasesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describekeyphrasesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describekeyphrasesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
DescribePiiEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describepiientitiesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describepiientitiesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describepiientitiesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
DescribeResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describeresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describeresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DescribeSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describesentimentdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describesentimentdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describesentimentdetectionjobcommandoutput.html)

</details>
<details>
<summary>
DescribeTargetedSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describetargetedsentimentdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describetargetedsentimentdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describetargetedsentimentdetectionjobcommandoutput.html)

</details>
<details>
<summary>
DescribeTopicsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/describetopicsdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describetopicsdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/describetopicsdetectionjobcommandoutput.html)

</details>
<details>
<summary>
DetectDominantLanguage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/detectdominantlanguagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectdominantlanguagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectdominantlanguagecommandoutput.html)

</details>
<details>
<summary>
DetectEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/detectentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectentitiescommandoutput.html)

</details>
<details>
<summary>
DetectKeyPhrases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/detectkeyphrasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectkeyphrasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectkeyphrasescommandoutput.html)

</details>
<details>
<summary>
DetectPiiEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/detectpiientitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectpiientitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectpiientitiescommandoutput.html)

</details>
<details>
<summary>
DetectSentiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/detectsentimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectsentimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectsentimentcommandoutput.html)

</details>
<details>
<summary>
DetectSyntax
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/detectsyntaxcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectsyntaxcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detectsyntaxcommandoutput.html)

</details>
<details>
<summary>
DetectTargetedSentiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/detecttargetedsentimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detecttargetedsentimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/detecttargetedsentimentcommandoutput.html)

</details>
<details>
<summary>
ImportModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/importmodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/importmodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/importmodelcommandoutput.html)

</details>
<details>
<summary>
ListDatasets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listdatasetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdatasetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdatasetscommandoutput.html)

</details>
<details>
<summary>
ListDocumentClassificationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listdocumentclassificationjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdocumentclassificationjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdocumentclassificationjobscommandoutput.html)

</details>
<details>
<summary>
ListDocumentClassifiers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listdocumentclassifierscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdocumentclassifierscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdocumentclassifierscommandoutput.html)

</details>
<details>
<summary>
ListDocumentClassifierSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listdocumentclassifiersummariescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdocumentclassifiersummariescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdocumentclassifiersummariescommandoutput.html)

</details>
<details>
<summary>
ListDominantLanguageDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listdominantlanguagedetectionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdominantlanguagedetectionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listdominantlanguagedetectionjobscommandoutput.html)

</details>
<details>
<summary>
ListEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listendpointscommandoutput.html)

</details>
<details>
<summary>
ListEntitiesDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listentitiesdetectionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listentitiesdetectionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listentitiesdetectionjobscommandoutput.html)

</details>
<details>
<summary>
ListEntityRecognizers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listentityrecognizerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listentityrecognizerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listentityrecognizerscommandoutput.html)

</details>
<details>
<summary>
ListEntityRecognizerSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listentityrecognizersummariescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listentityrecognizersummariescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listentityrecognizersummariescommandoutput.html)

</details>
<details>
<summary>
ListEventsDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listeventsdetectionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listeventsdetectionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listeventsdetectionjobscommandoutput.html)

</details>
<details>
<summary>
ListFlywheelIterationHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listflywheeliterationhistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listflywheeliterationhistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listflywheeliterationhistorycommandoutput.html)

</details>
<details>
<summary>
ListFlywheels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listflywheelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listflywheelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listflywheelscommandoutput.html)

</details>
<details>
<summary>
ListKeyPhrasesDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listkeyphrasesdetectionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listkeyphrasesdetectionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listkeyphrasesdetectionjobscommandoutput.html)

</details>
<details>
<summary>
ListPiiEntitiesDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listpiientitiesdetectionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listpiientitiesdetectionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listpiientitiesdetectionjobscommandoutput.html)

</details>
<details>
<summary>
ListSentimentDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listsentimentdetectionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listsentimentdetectionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listsentimentdetectionjobscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTargetedSentimentDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listtargetedsentimentdetectionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listtargetedsentimentdetectionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listtargetedsentimentdetectionjobscommandoutput.html)

</details>
<details>
<summary>
ListTopicsDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/listtopicsdetectionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listtopicsdetectionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/listtopicsdetectionjobscommandoutput.html)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/putresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/putresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/putresourcepolicycommandoutput.html)

</details>
<details>
<summary>
StartDocumentClassificationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/startdocumentclassificationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startdocumentclassificationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startdocumentclassificationjobcommandoutput.html)

</details>
<details>
<summary>
StartDominantLanguageDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/startdominantlanguagedetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startdominantlanguagedetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startdominantlanguagedetectionjobcommandoutput.html)

</details>
<details>
<summary>
StartEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/startentitiesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startentitiesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startentitiesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StartEventsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/starteventsdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/starteventsdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/starteventsdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StartFlywheelIteration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/startflywheeliterationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startflywheeliterationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startflywheeliterationcommandoutput.html)

</details>
<details>
<summary>
StartKeyPhrasesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/startkeyphrasesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startkeyphrasesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startkeyphrasesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StartPiiEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/startpiientitiesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startpiientitiesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startpiientitiesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StartSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/startsentimentdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startsentimentdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/startsentimentdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StartTargetedSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/starttargetedsentimentdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/starttargetedsentimentdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/starttargetedsentimentdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StartTopicsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/starttopicsdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/starttopicsdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/starttopicsdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StopDominantLanguageDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stopdominantlanguagedetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopdominantlanguagedetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopdominantlanguagedetectionjobcommandoutput.html)

</details>
<details>
<summary>
StopEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stopentitiesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopentitiesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopentitiesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StopEventsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stopeventsdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopeventsdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopeventsdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StopKeyPhrasesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stopkeyphrasesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopkeyphrasesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopkeyphrasesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StopPiiEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stoppiientitiesdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stoppiientitiesdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stoppiientitiesdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StopSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stopsentimentdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopsentimentdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stopsentimentdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StopTargetedSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stoptargetedsentimentdetectionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stoptargetedsentimentdetectionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stoptargetedsentimentdetectionjobcommandoutput.html)

</details>
<details>
<summary>
StopTrainingDocumentClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stoptrainingdocumentclassifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stoptrainingdocumentclassifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stoptrainingdocumentclassifiercommandoutput.html)

</details>
<details>
<summary>
StopTrainingEntityRecognizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/stoptrainingentityrecognizercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stoptrainingentityrecognizercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/stoptrainingentityrecognizercommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/updateendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/updateendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/updateendpointcommandoutput.html)

</details>
<details>
<summary>
UpdateFlywheel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/classes/updateflywheelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/updateflywheelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-comprehend/interfaces/updateflywheelcommandoutput.html)

</details>
