<!-- generated file, do not edit directly -->

# @aws-sdk/client-machine-learning

## Description

AWS SDK for JavaScript MachineLearning Client for Node.js, Browser and React Native.

Definition of the public APIs
exposed by Amazon Machine Learning

## Installing
To install this package, simply type add or install @aws-sdk/client-machine-learning
using your favorite package manager:
- `npm install @aws-sdk/client-machine-learning`
- `yarn add @aws-sdk/client-machine-learning`
- `pnpm add @aws-sdk/client-machine-learning`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MachineLearningClient` and
the commands you need, for example `DescribeMLModelsCommand`:

```js
// ES5 example
const { MachineLearningClient, DescribeMLModelsCommand } = require("@aws-sdk/client-machine-learning");
```

```ts
// ES6+ example
import { MachineLearningClient, DescribeMLModelsCommand } from "@aws-sdk/client-machine-learning";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MachineLearningClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new DescribeMLModelsCommand(params);
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
import * as AWS from "@aws-sdk/client-machine-learning";
const client = new AWS.MachineLearning({ region: "REGION" });

// async/await.
try {
  const data = await client.describeMLModels(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .describeMLModels(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.describeMLModels(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-machine-learning` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/AddTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/AddTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/AddTagsCommandOutput/)
</details>
<details>
<summary>
CreateBatchPrediction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/CreateBatchPredictionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateBatchPredictionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateBatchPredictionCommandOutput/)
</details>
<details>
<summary>
CreateDataSourceFromRDS
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/CreateDataSourceFromRDSCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateDataSourceFromRDSCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateDataSourceFromRDSCommandOutput/)
</details>
<details>
<summary>
CreateDataSourceFromRedshift
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/CreateDataSourceFromRedshiftCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateDataSourceFromRedshiftCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateDataSourceFromRedshiftCommandOutput/)
</details>
<details>
<summary>
CreateDataSourceFromS3
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/CreateDataSourceFromS3Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateDataSourceFromS3CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateDataSourceFromS3CommandOutput/)
</details>
<details>
<summary>
CreateEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/CreateEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateEvaluationCommandOutput/)
</details>
<details>
<summary>
CreateMLModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/CreateMLModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateMLModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateMLModelCommandOutput/)
</details>
<details>
<summary>
CreateRealtimeEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/CreateRealtimeEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateRealtimeEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/CreateRealtimeEndpointCommandOutput/)
</details>
<details>
<summary>
DeleteBatchPrediction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DeleteBatchPredictionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteBatchPredictionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteBatchPredictionCommandOutput/)
</details>
<details>
<summary>
DeleteDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DeleteDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteDataSourceCommandOutput/)
</details>
<details>
<summary>
DeleteEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DeleteEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteEvaluationCommandOutput/)
</details>
<details>
<summary>
DeleteMLModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DeleteMLModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteMLModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteMLModelCommandOutput/)
</details>
<details>
<summary>
DeleteRealtimeEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DeleteRealtimeEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteRealtimeEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteRealtimeEndpointCommandOutput/)
</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DeleteTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DeleteTagsCommandOutput/)
</details>
<details>
<summary>
DescribeBatchPredictions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DescribeBatchPredictionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeBatchPredictionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeBatchPredictionsCommandOutput/)
</details>
<details>
<summary>
DescribeDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DescribeDataSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeDataSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeDataSourcesCommandOutput/)
</details>
<details>
<summary>
DescribeEvaluations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DescribeEvaluationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeEvaluationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeEvaluationsCommandOutput/)
</details>
<details>
<summary>
DescribeMLModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DescribeMLModelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeMLModelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeMLModelsCommandOutput/)
</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/DescribeTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/DescribeTagsCommandOutput/)
</details>
<details>
<summary>
GetBatchPrediction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GetBatchPredictionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetBatchPredictionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetBatchPredictionCommandOutput/)
</details>
<details>
<summary>
GetDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GetDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetDataSourceCommandOutput/)
</details>
<details>
<summary>
GetEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GetEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetEvaluationCommandOutput/)
</details>
<details>
<summary>
GetMLModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/GetMLModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetMLModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/GetMLModelCommandOutput/)
</details>
<details>
<summary>
Predict
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/PredictCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PredictCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/PredictCommandOutput/)
</details>
<details>
<summary>
UpdateBatchPrediction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/UpdateBatchPredictionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UpdateBatchPredictionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UpdateBatchPredictionCommandOutput/)
</details>
<details>
<summary>
UpdateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/UpdateDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UpdateDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UpdateDataSourceCommandOutput/)
</details>
<details>
<summary>
UpdateEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/UpdateEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UpdateEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UpdateEvaluationCommandOutput/)
</details>
<details>
<summary>
UpdateMLModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/machine-learning/command/UpdateMLModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UpdateMLModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-machine-learning/Interface/UpdateMLModelCommandOutput/)
</details>
