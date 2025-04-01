<!-- generated file, do not edit directly -->

# @aws-sdk/client-lookoutmetrics

## Description

AWS SDK for JavaScript LookoutMetrics Client for Node.js, Browser and React Native.

<p>This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service
with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon
Lookout for Metrics Developer Guide</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-lookoutmetrics
using your favorite package manager:

- `npm install @aws-sdk/client-lookoutmetrics`
- `yarn add @aws-sdk/client-lookoutmetrics`
- `pnpm add @aws-sdk/client-lookoutmetrics`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LookoutMetricsClient` and
the commands you need, for example `ListAlertsCommand`:

```js
// ES5 example
const { LookoutMetricsClient, ListAlertsCommand } = require("@aws-sdk/client-lookoutmetrics");
```

```ts
// ES6+ example
import { LookoutMetricsClient, ListAlertsCommand } from "@aws-sdk/client-lookoutmetrics";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LookoutMetricsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAlertsCommand(params);
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
import * as AWS from "@aws-sdk/client-lookoutmetrics";
const client = new AWS.LookoutMetrics({ region: "REGION" });

// async/await.
try {
  const data = await client.listAlerts(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAlerts(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAlerts(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lookoutmetrics` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ActivateAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/ActivateAnomalyDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ActivateAnomalyDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ActivateAnomalyDetectorCommandOutput/)

</details>
<details>
<summary>
BackTestAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/BackTestAnomalyDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/BackTestAnomalyDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/BackTestAnomalyDetectorCommandOutput/)

</details>
<details>
<summary>
CreateAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/CreateAlertCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/CreateAlertCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/CreateAlertCommandOutput/)

</details>
<details>
<summary>
CreateAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/CreateAnomalyDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/CreateAnomalyDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/CreateAnomalyDetectorCommandOutput/)

</details>
<details>
<summary>
CreateMetricSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/CreateMetricSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/CreateMetricSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/CreateMetricSetCommandOutput/)

</details>
<details>
<summary>
DeactivateAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/DeactivateAnomalyDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DeactivateAnomalyDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DeactivateAnomalyDetectorCommandOutput/)

</details>
<details>
<summary>
DeleteAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/DeleteAlertCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DeleteAlertCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DeleteAlertCommandOutput/)

</details>
<details>
<summary>
DeleteAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/DeleteAnomalyDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DeleteAnomalyDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DeleteAnomalyDetectorCommandOutput/)

</details>
<details>
<summary>
DescribeAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/DescribeAlertCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DescribeAlertCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DescribeAlertCommandOutput/)

</details>
<details>
<summary>
DescribeAnomalyDetectionExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/DescribeAnomalyDetectionExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DescribeAnomalyDetectionExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DescribeAnomalyDetectionExecutionsCommandOutput/)

</details>
<details>
<summary>
DescribeAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/DescribeAnomalyDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DescribeAnomalyDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DescribeAnomalyDetectorCommandOutput/)

</details>
<details>
<summary>
DescribeMetricSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/DescribeMetricSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DescribeMetricSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DescribeMetricSetCommandOutput/)

</details>
<details>
<summary>
DetectMetricSetConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/DetectMetricSetConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DetectMetricSetConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/DetectMetricSetConfigCommandOutput/)

</details>
<details>
<summary>
GetAnomalyGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/GetAnomalyGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/GetAnomalyGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/GetAnomalyGroupCommandOutput/)

</details>
<details>
<summary>
GetDataQualityMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/GetDataQualityMetricsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/GetDataQualityMetricsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/GetDataQualityMetricsCommandOutput/)

</details>
<details>
<summary>
GetFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/GetFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/GetFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/GetFeedbackCommandOutput/)

</details>
<details>
<summary>
GetSampleData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/GetSampleDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/GetSampleDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/GetSampleDataCommandOutput/)

</details>
<details>
<summary>
ListAlerts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/ListAlertsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAlertsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAlertsCommandOutput/)

</details>
<details>
<summary>
ListAnomalyDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/ListAnomalyDetectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAnomalyDetectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAnomalyDetectorsCommandOutput/)

</details>
<details>
<summary>
ListAnomalyGroupRelatedMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/ListAnomalyGroupRelatedMetricsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAnomalyGroupRelatedMetricsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAnomalyGroupRelatedMetricsCommandOutput/)

</details>
<details>
<summary>
ListAnomalyGroupSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/ListAnomalyGroupSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAnomalyGroupSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAnomalyGroupSummariesCommandOutput/)

</details>
<details>
<summary>
ListAnomalyGroupTimeSeries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/ListAnomalyGroupTimeSeriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAnomalyGroupTimeSeriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListAnomalyGroupTimeSeriesCommandOutput/)

</details>
<details>
<summary>
ListMetricSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/ListMetricSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListMetricSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListMetricSetsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/PutFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/PutFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/PutFeedbackCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/UpdateAlertCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/UpdateAlertCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/UpdateAlertCommandOutput/)

</details>
<details>
<summary>
UpdateAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/UpdateAnomalyDetectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/UpdateAnomalyDetectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/UpdateAnomalyDetectorCommandOutput/)

</details>
<details>
<summary>
UpdateMetricSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lookoutmetrics/command/UpdateMetricSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/UpdateMetricSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lookoutmetrics/Interface/UpdateMetricSetCommandOutput/)

</details>
