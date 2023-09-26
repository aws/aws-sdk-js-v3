<!-- generated file, do not edit directly -->

# @aws-sdk/client-lookoutmetrics

## Description

AWS SDK for JavaScript LookoutMetrics Client for Node.js, Browser and React Native.

<p>This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service
with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon
Lookout for Metrics Developer Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-lookoutmetrics
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/activateanomalydetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/activateanomalydetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/activateanomalydetectorcommandoutput.html)

</details>
<details>
<summary>
BackTestAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/backtestanomalydetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/backtestanomalydetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/backtestanomalydetectorcommandoutput.html)

</details>
<details>
<summary>
CreateAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/createalertcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/createalertcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/createalertcommandoutput.html)

</details>
<details>
<summary>
CreateAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/createanomalydetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/createanomalydetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/createanomalydetectorcommandoutput.html)

</details>
<details>
<summary>
CreateMetricSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/createmetricsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/createmetricsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/createmetricsetcommandoutput.html)

</details>
<details>
<summary>
DeactivateAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/deactivateanomalydetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/deactivateanomalydetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/deactivateanomalydetectorcommandoutput.html)

</details>
<details>
<summary>
DeleteAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/deletealertcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/deletealertcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/deletealertcommandoutput.html)

</details>
<details>
<summary>
DeleteAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/deleteanomalydetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/deleteanomalydetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/deleteanomalydetectorcommandoutput.html)

</details>
<details>
<summary>
DescribeAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/describealertcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/describealertcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/describealertcommandoutput.html)

</details>
<details>
<summary>
DescribeAnomalyDetectionExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/describeanomalydetectionexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/describeanomalydetectionexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/describeanomalydetectionexecutionscommandoutput.html)

</details>
<details>
<summary>
DescribeAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/describeanomalydetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/describeanomalydetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/describeanomalydetectorcommandoutput.html)

</details>
<details>
<summary>
DescribeMetricSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/describemetricsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/describemetricsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/describemetricsetcommandoutput.html)

</details>
<details>
<summary>
DetectMetricSetConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/detectmetricsetconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/detectmetricsetconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/detectmetricsetconfigcommandoutput.html)

</details>
<details>
<summary>
GetAnomalyGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/getanomalygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/getanomalygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/getanomalygroupcommandoutput.html)

</details>
<details>
<summary>
GetDataQualityMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/getdataqualitymetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/getdataqualitymetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/getdataqualitymetricscommandoutput.html)

</details>
<details>
<summary>
GetFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/getfeedbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/getfeedbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/getfeedbackcommandoutput.html)

</details>
<details>
<summary>
GetSampleData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/getsampledatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/getsampledatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/getsampledatacommandoutput.html)

</details>
<details>
<summary>
ListAlerts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/listalertscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listalertscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listalertscommandoutput.html)

</details>
<details>
<summary>
ListAnomalyDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/listanomalydetectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listanomalydetectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listanomalydetectorscommandoutput.html)

</details>
<details>
<summary>
ListAnomalyGroupRelatedMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/listanomalygrouprelatedmetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listanomalygrouprelatedmetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listanomalygrouprelatedmetricscommandoutput.html)

</details>
<details>
<summary>
ListAnomalyGroupSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/listanomalygroupsummariescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listanomalygroupsummariescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listanomalygroupsummariescommandoutput.html)

</details>
<details>
<summary>
ListAnomalyGroupTimeSeries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/listanomalygrouptimeseriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listanomalygrouptimeseriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listanomalygrouptimeseriescommandoutput.html)

</details>
<details>
<summary>
ListMetricSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/listmetricsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listmetricsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listmetricsetscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/putfeedbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/putfeedbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/putfeedbackcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/updatealertcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/updatealertcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/updatealertcommandoutput.html)

</details>
<details>
<summary>
UpdateAnomalyDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/updateanomalydetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/updateanomalydetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/updateanomalydetectorcommandoutput.html)

</details>
<details>
<summary>
UpdateMetricSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/classes/updatemetricsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/updatemetricsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lookoutmetrics/interfaces/updatemetricsetcommandoutput.html)

</details>
