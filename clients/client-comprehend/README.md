<!-- generated file, do not edit directly -->

# @aws-sdk/client-comprehend

## Description

AWS SDK for JavaScript Comprehend Client for Node.js, Browser and React Native.

<p>Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents.
Use these actions to determine the topics contained in your documents, the topics they
discuss, the predominant sentiment expressed in them, the predominant language used, and
more.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-comprehend
using your favorite package manager:

- `npm install @aws-sdk/client-comprehend`
- `yarn add @aws-sdk/client-comprehend`
- `pnpm add @aws-sdk/client-comprehend`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ComprehendClient` and
the commands you need, for example `ListDatasetsCommand`:

```js
// ES5 example
const { ComprehendClient, ListDatasetsCommand } = require("@aws-sdk/client-comprehend");
```

```ts
// ES6+ example
import { ComprehendClient, ListDatasetsCommand } from "@aws-sdk/client-comprehend";
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
const command = new ListDatasetsCommand(params);
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
  const data = await client.listDatasets(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDatasets(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDatasets(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/BatchDetectDominantLanguageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectDominantLanguageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectDominantLanguageCommandOutput/)

</details>
<details>
<summary>
BatchDetectEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/BatchDetectEntitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectEntitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectEntitiesCommandOutput/)

</details>
<details>
<summary>
BatchDetectKeyPhrases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/BatchDetectKeyPhrasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectKeyPhrasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectKeyPhrasesCommandOutput/)

</details>
<details>
<summary>
BatchDetectSentiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/BatchDetectSentimentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectSentimentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectSentimentCommandOutput/)

</details>
<details>
<summary>
BatchDetectSyntax
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/BatchDetectSyntaxCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectSyntaxCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectSyntaxCommandOutput/)

</details>
<details>
<summary>
BatchDetectTargetedSentiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/BatchDetectTargetedSentimentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectTargetedSentimentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/BatchDetectTargetedSentimentCommandOutput/)

</details>
<details>
<summary>
ClassifyDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ClassifyDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ClassifyDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ClassifyDocumentCommandOutput/)

</details>
<details>
<summary>
ContainsPiiEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ContainsPiiEntitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ContainsPiiEntitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ContainsPiiEntitiesCommandOutput/)

</details>
<details>
<summary>
CreateDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/CreateDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateDatasetCommandOutput/)

</details>
<details>
<summary>
CreateDocumentClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/CreateDocumentClassifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateDocumentClassifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateDocumentClassifierCommandOutput/)

</details>
<details>
<summary>
CreateEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/CreateEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateEndpointCommandOutput/)

</details>
<details>
<summary>
CreateEntityRecognizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/CreateEntityRecognizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateEntityRecognizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateEntityRecognizerCommandOutput/)

</details>
<details>
<summary>
CreateFlywheel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/CreateFlywheelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateFlywheelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/CreateFlywheelCommandOutput/)

</details>
<details>
<summary>
DeleteDocumentClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DeleteDocumentClassifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteDocumentClassifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteDocumentClassifierCommandOutput/)

</details>
<details>
<summary>
DeleteEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DeleteEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteEntityRecognizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DeleteEntityRecognizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteEntityRecognizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteEntityRecognizerCommandOutput/)

</details>
<details>
<summary>
DeleteFlywheel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DeleteFlywheelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteFlywheelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteFlywheelCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DescribeDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeDatasetCommandOutput/)

</details>
<details>
<summary>
DescribeDocumentClassificationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeDocumentClassificationJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeDocumentClassificationJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeDocumentClassificationJobCommandOutput/)

</details>
<details>
<summary>
DescribeDocumentClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeDocumentClassifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeDocumentClassifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeDocumentClassifierCommandOutput/)

</details>
<details>
<summary>
DescribeDominantLanguageDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeDominantLanguageDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeDominantLanguageDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeDominantLanguageDetectionJobCommandOutput/)

</details>
<details>
<summary>
DescribeEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeEndpointCommandOutput/)

</details>
<details>
<summary>
DescribeEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeEntitiesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeEntitiesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeEntitiesDetectionJobCommandOutput/)

</details>
<details>
<summary>
DescribeEntityRecognizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeEntityRecognizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeEntityRecognizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeEntityRecognizerCommandOutput/)

</details>
<details>
<summary>
DescribeEventsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeEventsDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeEventsDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeEventsDetectionJobCommandOutput/)

</details>
<details>
<summary>
DescribeFlywheel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeFlywheelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeFlywheelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeFlywheelCommandOutput/)

</details>
<details>
<summary>
DescribeFlywheelIteration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeFlywheelIterationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeFlywheelIterationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeFlywheelIterationCommandOutput/)

</details>
<details>
<summary>
DescribeKeyPhrasesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeKeyPhrasesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeKeyPhrasesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeKeyPhrasesDetectionJobCommandOutput/)

</details>
<details>
<summary>
DescribePiiEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribePiiEntitiesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribePiiEntitiesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribePiiEntitiesDetectionJobCommandOutput/)

</details>
<details>
<summary>
DescribeResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DescribeSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeSentimentDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeSentimentDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeSentimentDetectionJobCommandOutput/)

</details>
<details>
<summary>
DescribeTargetedSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeTargetedSentimentDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeTargetedSentimentDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeTargetedSentimentDetectionJobCommandOutput/)

</details>
<details>
<summary>
DescribeTopicsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DescribeTopicsDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeTopicsDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DescribeTopicsDetectionJobCommandOutput/)

</details>
<details>
<summary>
DetectDominantLanguage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DetectDominantLanguageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectDominantLanguageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectDominantLanguageCommandOutput/)

</details>
<details>
<summary>
DetectEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DetectEntitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectEntitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectEntitiesCommandOutput/)

</details>
<details>
<summary>
DetectKeyPhrases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DetectKeyPhrasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectKeyPhrasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectKeyPhrasesCommandOutput/)

</details>
<details>
<summary>
DetectPiiEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DetectPiiEntitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectPiiEntitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectPiiEntitiesCommandOutput/)

</details>
<details>
<summary>
DetectSentiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DetectSentimentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectSentimentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectSentimentCommandOutput/)

</details>
<details>
<summary>
DetectSyntax
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DetectSyntaxCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectSyntaxCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectSyntaxCommandOutput/)

</details>
<details>
<summary>
DetectTargetedSentiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DetectTargetedSentimentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectTargetedSentimentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectTargetedSentimentCommandOutput/)

</details>
<details>
<summary>
DetectToxicContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/DetectToxicContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectToxicContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/DetectToxicContentCommandOutput/)

</details>
<details>
<summary>
ImportModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ImportModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ImportModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ImportModelCommandOutput/)

</details>
<details>
<summary>
ListDatasets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListDatasetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDatasetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDatasetsCommandOutput/)

</details>
<details>
<summary>
ListDocumentClassificationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListDocumentClassificationJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDocumentClassificationJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDocumentClassificationJobsCommandOutput/)

</details>
<details>
<summary>
ListDocumentClassifiers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListDocumentClassifiersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDocumentClassifiersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDocumentClassifiersCommandOutput/)

</details>
<details>
<summary>
ListDocumentClassifierSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListDocumentClassifierSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDocumentClassifierSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDocumentClassifierSummariesCommandOutput/)

</details>
<details>
<summary>
ListDominantLanguageDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListDominantLanguageDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDominantLanguageDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListDominantLanguageDetectionJobsCommandOutput/)

</details>
<details>
<summary>
ListEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEndpointsCommandOutput/)

</details>
<details>
<summary>
ListEntitiesDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListEntitiesDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEntitiesDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEntitiesDetectionJobsCommandOutput/)

</details>
<details>
<summary>
ListEntityRecognizers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListEntityRecognizersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEntityRecognizersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEntityRecognizersCommandOutput/)

</details>
<details>
<summary>
ListEntityRecognizerSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListEntityRecognizerSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEntityRecognizerSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEntityRecognizerSummariesCommandOutput/)

</details>
<details>
<summary>
ListEventsDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListEventsDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEventsDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListEventsDetectionJobsCommandOutput/)

</details>
<details>
<summary>
ListFlywheelIterationHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListFlywheelIterationHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListFlywheelIterationHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListFlywheelIterationHistoryCommandOutput/)

</details>
<details>
<summary>
ListFlywheels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListFlywheelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListFlywheelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListFlywheelsCommandOutput/)

</details>
<details>
<summary>
ListKeyPhrasesDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListKeyPhrasesDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListKeyPhrasesDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListKeyPhrasesDetectionJobsCommandOutput/)

</details>
<details>
<summary>
ListPiiEntitiesDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListPiiEntitiesDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListPiiEntitiesDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListPiiEntitiesDetectionJobsCommandOutput/)

</details>
<details>
<summary>
ListSentimentDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListSentimentDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListSentimentDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListSentimentDetectionJobsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTargetedSentimentDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListTargetedSentimentDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListTargetedSentimentDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListTargetedSentimentDetectionJobsCommandOutput/)

</details>
<details>
<summary>
ListTopicsDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/ListTopicsDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListTopicsDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/ListTopicsDetectionJobsCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
StartDocumentClassificationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartDocumentClassificationJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartDocumentClassificationJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartDocumentClassificationJobCommandOutput/)

</details>
<details>
<summary>
StartDominantLanguageDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartDominantLanguageDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartDominantLanguageDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartDominantLanguageDetectionJobCommandOutput/)

</details>
<details>
<summary>
StartEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartEntitiesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartEntitiesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartEntitiesDetectionJobCommandOutput/)

</details>
<details>
<summary>
StartEventsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartEventsDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartEventsDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartEventsDetectionJobCommandOutput/)

</details>
<details>
<summary>
StartFlywheelIteration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartFlywheelIterationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartFlywheelIterationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartFlywheelIterationCommandOutput/)

</details>
<details>
<summary>
StartKeyPhrasesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartKeyPhrasesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartKeyPhrasesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartKeyPhrasesDetectionJobCommandOutput/)

</details>
<details>
<summary>
StartPiiEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartPiiEntitiesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartPiiEntitiesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartPiiEntitiesDetectionJobCommandOutput/)

</details>
<details>
<summary>
StartSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartSentimentDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartSentimentDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartSentimentDetectionJobCommandOutput/)

</details>
<details>
<summary>
StartTargetedSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartTargetedSentimentDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartTargetedSentimentDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartTargetedSentimentDetectionJobCommandOutput/)

</details>
<details>
<summary>
StartTopicsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StartTopicsDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartTopicsDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StartTopicsDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopDominantLanguageDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopDominantLanguageDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopDominantLanguageDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopDominantLanguageDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopEntitiesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopEntitiesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopEntitiesDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopEventsDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopEventsDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopEventsDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopEventsDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopKeyPhrasesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopKeyPhrasesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopKeyPhrasesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopKeyPhrasesDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopPiiEntitiesDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopPiiEntitiesDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopPiiEntitiesDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopPiiEntitiesDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopSentimentDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopSentimentDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopSentimentDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopTargetedSentimentDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopTargetedSentimentDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopTargetedSentimentDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopTargetedSentimentDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopTrainingDocumentClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopTrainingDocumentClassifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopTrainingDocumentClassifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopTrainingDocumentClassifierCommandOutput/)

</details>
<details>
<summary>
StopTrainingEntityRecognizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/StopTrainingEntityRecognizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopTrainingEntityRecognizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/StopTrainingEntityRecognizerCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/UpdateEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/UpdateEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/UpdateEndpointCommandOutput/)

</details>
<details>
<summary>
UpdateFlywheel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehend/command/UpdateFlywheelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/UpdateFlywheelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehend/Interface/UpdateFlywheelCommandOutput/)

</details>
