<!-- generated file, do not edit directly -->

# @aws-sdk/client-devops-guru

## Description

AWS SDK for JavaScript DevOpsGuru Client for Node.js, Browser and React Native.

<p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in
business critical operational applications. You specify the Amazon Web Services resources that you
want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those
resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an
<i>insight</i> that includes recommendations, related events, and
related metrics that can help you improve your operational applications. For more
information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
<p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight
is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each
insight to help you manage and track your work addressing insights. </p>
<p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>

## Installing
To install this package, simply type add or install @aws-sdk/client-devops-guru
using your favorite package manager:
- `npm install @aws-sdk/client-devops-guru`
- `yarn add @aws-sdk/client-devops-guru`
- `pnpm add @aws-sdk/client-devops-guru`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DevOpsGuruClient` and
the commands you need, for example `ListEventsCommand`:

```js
// ES5 example
const { DevOpsGuruClient, ListEventsCommand } = require("@aws-sdk/client-devops-guru");
```

```ts
// ES6+ example
import { DevOpsGuruClient, ListEventsCommand } from "@aws-sdk/client-devops-guru";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DevOpsGuruClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListEventsCommand(params);
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
import * as AWS from "@aws-sdk/client-devops-guru";
const client = new AWS.DevOpsGuru({ region: "REGION" });

// async/await.
try {
  const data = await client.listEvents(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listEvents(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listEvents(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-devops-guru` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddNotificationChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/AddNotificationChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/AddNotificationChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/AddNotificationChannelCommandOutput/)
</details>
<details>
<summary>
DeleteInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DeleteInsightCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DeleteInsightCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DeleteInsightCommandOutput/)
</details>
<details>
<summary>
DescribeAccountHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeAccountHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeAccountHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeAccountHealthCommandOutput/)
</details>
<details>
<summary>
DescribeAccountOverview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeAccountOverviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeAccountOverviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeAccountOverviewCommandOutput/)
</details>
<details>
<summary>
DescribeAnomaly
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeAnomalyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeAnomalyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeAnomalyCommandOutput/)
</details>
<details>
<summary>
DescribeEventSourcesConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeEventSourcesConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeEventSourcesConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeEventSourcesConfigCommandOutput/)
</details>
<details>
<summary>
DescribeFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeFeedbackCommandOutput/)
</details>
<details>
<summary>
DescribeInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeInsightCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeInsightCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeInsightCommandOutput/)
</details>
<details>
<summary>
DescribeOrganizationHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeOrganizationHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeOrganizationHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeOrganizationHealthCommandOutput/)
</details>
<details>
<summary>
DescribeOrganizationOverview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeOrganizationOverviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeOrganizationOverviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeOrganizationOverviewCommandOutput/)
</details>
<details>
<summary>
DescribeOrganizationResourceCollectionHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeOrganizationResourceCollectionHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeOrganizationResourceCollectionHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeOrganizationResourceCollectionHealthCommandOutput/)
</details>
<details>
<summary>
DescribeResourceCollectionHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeResourceCollectionHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeResourceCollectionHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeResourceCollectionHealthCommandOutput/)
</details>
<details>
<summary>
DescribeServiceIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/DescribeServiceIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeServiceIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/DescribeServiceIntegrationCommandOutput/)
</details>
<details>
<summary>
GetCostEstimation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/GetCostEstimationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/GetCostEstimationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/GetCostEstimationCommandOutput/)
</details>
<details>
<summary>
GetResourceCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/GetResourceCollectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/GetResourceCollectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/GetResourceCollectionCommandOutput/)
</details>
<details>
<summary>
ListAnomaliesForInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/ListAnomaliesForInsightCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListAnomaliesForInsightCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListAnomaliesForInsightCommandOutput/)
</details>
<details>
<summary>
ListAnomalousLogGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/ListAnomalousLogGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListAnomalousLogGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListAnomalousLogGroupsCommandOutput/)
</details>
<details>
<summary>
ListEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/ListEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListEventsCommandOutput/)
</details>
<details>
<summary>
ListInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/ListInsightsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListInsightsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListInsightsCommandOutput/)
</details>
<details>
<summary>
ListMonitoredResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/ListMonitoredResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListMonitoredResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListMonitoredResourcesCommandOutput/)
</details>
<details>
<summary>
ListNotificationChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/ListNotificationChannelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListNotificationChannelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListNotificationChannelsCommandOutput/)
</details>
<details>
<summary>
ListOrganizationInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/ListOrganizationInsightsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListOrganizationInsightsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListOrganizationInsightsCommandOutput/)
</details>
<details>
<summary>
ListRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/ListRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/ListRecommendationsCommandOutput/)
</details>
<details>
<summary>
PutFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/PutFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/PutFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/PutFeedbackCommandOutput/)
</details>
<details>
<summary>
RemoveNotificationChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/RemoveNotificationChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/RemoveNotificationChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/RemoveNotificationChannelCommandOutput/)
</details>
<details>
<summary>
SearchInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/SearchInsightsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/SearchInsightsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/SearchInsightsCommandOutput/)
</details>
<details>
<summary>
SearchOrganizationInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/SearchOrganizationInsightsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/SearchOrganizationInsightsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/SearchOrganizationInsightsCommandOutput/)
</details>
<details>
<summary>
StartCostEstimation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/StartCostEstimationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/StartCostEstimationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/StartCostEstimationCommandOutput/)
</details>
<details>
<summary>
UpdateEventSourcesConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/UpdateEventSourcesConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/UpdateEventSourcesConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/UpdateEventSourcesConfigCommandOutput/)
</details>
<details>
<summary>
UpdateResourceCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/UpdateResourceCollectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/UpdateResourceCollectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/UpdateResourceCollectionCommandOutput/)
</details>
<details>
<summary>
UpdateServiceIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/devops-guru/command/UpdateServiceIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/UpdateServiceIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-devops-guru/Interface/UpdateServiceIntegrationCommandOutput/)
</details>
