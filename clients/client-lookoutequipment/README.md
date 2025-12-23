<!-- generated file, do not edit directly -->

# @aws-sdk/client-lookoutequipment

## Description

AWS SDK for JavaScript LookoutEquipment Client for Node.js, Browser and React Native.

<p>Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify
anomalies in machines from sensor data for use in predictive maintenance. </p>

## Installing
To install this package, simply type add or install @aws-sdk/client-lookoutequipment
using your favorite package manager:
- `npm install @aws-sdk/client-lookoutequipment`
- `yarn add @aws-sdk/client-lookoutequipment`
- `pnpm add @aws-sdk/client-lookoutequipment`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LookoutEquipmentClient` and
the commands you need, for example `ListModelsCommand`:

```js
// ES5 example
const { LookoutEquipmentClient, ListModelsCommand } = require("@aws-sdk/client-lookoutequipment");
```

```ts
// ES6+ example
import { LookoutEquipmentClient, ListModelsCommand } from "@aws-sdk/client-lookoutequipment";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LookoutEquipmentClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListModelsCommand(params);
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
import * as AWS from "@aws-sdk/client-lookoutequipment";
const client = new AWS.LookoutEquipment({ region: "REGION" });

// async/await.
try {
  const data = await client.listModels(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listModels(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listModels(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lookoutequipment` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/CreateDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateDatasetCommandOutput/)
</details>
<details>
<summary>
CreateInferenceScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/CreateInferenceSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateInferenceSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateInferenceSchedulerCommandOutput/)
</details>
<details>
<summary>
CreateLabel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/CreateLabelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateLabelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateLabelCommandOutput/)
</details>
<details>
<summary>
CreateLabelGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/CreateLabelGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateLabelGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateLabelGroupCommandOutput/)
</details>
<details>
<summary>
CreateModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/CreateModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateModelCommandOutput/)
</details>
<details>
<summary>
CreateRetrainingScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/CreateRetrainingSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateRetrainingSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/CreateRetrainingSchedulerCommandOutput/)
</details>
<details>
<summary>
DeleteDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DeleteDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteDatasetCommandOutput/)
</details>
<details>
<summary>
DeleteInferenceScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DeleteInferenceSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteInferenceSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteInferenceSchedulerCommandOutput/)
</details>
<details>
<summary>
DeleteLabel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DeleteLabelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteLabelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteLabelCommandOutput/)
</details>
<details>
<summary>
DeleteLabelGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DeleteLabelGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteLabelGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteLabelGroupCommandOutput/)
</details>
<details>
<summary>
DeleteModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DeleteModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteModelCommandOutput/)
</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteResourcePolicyCommandOutput/)
</details>
<details>
<summary>
DeleteRetrainingScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DeleteRetrainingSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteRetrainingSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DeleteRetrainingSchedulerCommandOutput/)
</details>
<details>
<summary>
DescribeDataIngestionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeDataIngestionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeDataIngestionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeDataIngestionJobCommandOutput/)
</details>
<details>
<summary>
DescribeDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeDatasetCommandOutput/)
</details>
<details>
<summary>
DescribeInferenceScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeInferenceSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeInferenceSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeInferenceSchedulerCommandOutput/)
</details>
<details>
<summary>
DescribeLabel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeLabelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeLabelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeLabelCommandOutput/)
</details>
<details>
<summary>
DescribeLabelGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeLabelGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeLabelGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeLabelGroupCommandOutput/)
</details>
<details>
<summary>
DescribeModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeModelCommandOutput/)
</details>
<details>
<summary>
DescribeModelVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeModelVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeModelVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeModelVersionCommandOutput/)
</details>
<details>
<summary>
DescribeResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeResourcePolicyCommandOutput/)
</details>
<details>
<summary>
DescribeRetrainingScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/DescribeRetrainingSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeRetrainingSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/DescribeRetrainingSchedulerCommandOutput/)
</details>
<details>
<summary>
ImportDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ImportDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ImportDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ImportDatasetCommandOutput/)
</details>
<details>
<summary>
ImportModelVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ImportModelVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ImportModelVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ImportModelVersionCommandOutput/)
</details>
<details>
<summary>
ListDataIngestionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListDataIngestionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListDataIngestionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListDataIngestionJobsCommandOutput/)
</details>
<details>
<summary>
ListDatasets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListDatasetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListDatasetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListDatasetsCommandOutput/)
</details>
<details>
<summary>
ListInferenceEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListInferenceEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListInferenceEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListInferenceEventsCommandOutput/)
</details>
<details>
<summary>
ListInferenceExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListInferenceExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListInferenceExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListInferenceExecutionsCommandOutput/)
</details>
<details>
<summary>
ListInferenceSchedulers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListInferenceSchedulersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListInferenceSchedulersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListInferenceSchedulersCommandOutput/)
</details>
<details>
<summary>
ListLabelGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListLabelGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListLabelGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListLabelGroupsCommandOutput/)
</details>
<details>
<summary>
ListLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListLabelsCommandOutput/)
</details>
<details>
<summary>
ListModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListModelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListModelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListModelsCommandOutput/)
</details>
<details>
<summary>
ListModelVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListModelVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListModelVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListModelVersionsCommandOutput/)
</details>
<details>
<summary>
ListRetrainingSchedulers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListRetrainingSchedulersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListRetrainingSchedulersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListRetrainingSchedulersCommandOutput/)
</details>
<details>
<summary>
ListSensorStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListSensorStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListSensorStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListSensorStatisticsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/PutResourcePolicyCommandOutput/)
</details>
<details>
<summary>
StartDataIngestionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/StartDataIngestionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StartDataIngestionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StartDataIngestionJobCommandOutput/)
</details>
<details>
<summary>
StartInferenceScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/StartInferenceSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StartInferenceSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StartInferenceSchedulerCommandOutput/)
</details>
<details>
<summary>
StartRetrainingScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/StartRetrainingSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StartRetrainingSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StartRetrainingSchedulerCommandOutput/)
</details>
<details>
<summary>
StopInferenceScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/StopInferenceSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StopInferenceSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StopInferenceSchedulerCommandOutput/)
</details>
<details>
<summary>
StopRetrainingScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/StopRetrainingSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StopRetrainingSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/StopRetrainingSchedulerCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateActiveModelVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/UpdateActiveModelVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateActiveModelVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateActiveModelVersionCommandOutput/)
</details>
<details>
<summary>
UpdateInferenceScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/UpdateInferenceSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateInferenceSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateInferenceSchedulerCommandOutput/)
</details>
<details>
<summary>
UpdateLabelGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/UpdateLabelGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateLabelGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateLabelGroupCommandOutput/)
</details>
<details>
<summary>
UpdateModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/UpdateModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateModelCommandOutput/)
</details>
<details>
<summary>
UpdateRetrainingScheduler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutequipment/command/UpdateRetrainingSchedulerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateRetrainingSchedulerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutequipment/Interface/UpdateRetrainingSchedulerCommandOutput/)
</details>
