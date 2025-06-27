<!-- generated file, do not edit directly -->

# @aws-sdk/client-cost-explorer

## Description

AWS SDK for JavaScript CostExplorer Client for Node.js, Browser and React Native.

<p>You can use the Cost Explorer API to programmatically query your cost and usage data.
You can query for aggregated data such as total monthly costs or total daily usage. You can
also query for granular data. This might include the number of daily write operations for
Amazon DynamoDB database tables in your production environment. </p>
<p>Service Endpoint</p>
<p>The Cost Explorer API provides the following endpoint:</p>
<ul>
<li>
<p>
<code>https://ce.us-east-1.amazonaws.com</code>
</p>
</li>
</ul>
<p>For information about the costs that are associated with the Cost Explorer API, see
<a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost
Management Pricing</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-cost-explorer
using your favorite package manager:

- `npm install @aws-sdk/client-cost-explorer`
- `yarn add @aws-sdk/client-cost-explorer`
- `pnpm add @aws-sdk/client-cost-explorer`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CostExplorerClient` and
the commands you need, for example `ListCostAllocationTagsCommand`:

```js
// ES5 example
const { CostExplorerClient, ListCostAllocationTagsCommand } = require("@aws-sdk/client-cost-explorer");
```

```ts
// ES6+ example
import { CostExplorerClient, ListCostAllocationTagsCommand } from "@aws-sdk/client-cost-explorer";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CostExplorerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListCostAllocationTagsCommand(params);
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
import * as AWS from "@aws-sdk/client-cost-explorer";
const client = new AWS.CostExplorer({ region: "REGION" });

// async/await.
try {
  const data = await client.listCostAllocationTags(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listCostAllocationTags(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listCostAllocationTags(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-cost-explorer` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAnomalyMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/CreateAnomalyMonitorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/CreateAnomalyMonitorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/CreateAnomalyMonitorCommandOutput/)

</details>
<details>
<summary>
CreateAnomalySubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/CreateAnomalySubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/CreateAnomalySubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/CreateAnomalySubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateCostCategoryDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/CreateCostCategoryDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/CreateCostCategoryDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/CreateCostCategoryDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteAnomalyMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/DeleteAnomalyMonitorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/DeleteAnomalyMonitorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/DeleteAnomalyMonitorCommandOutput/)

</details>
<details>
<summary>
DeleteAnomalySubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/DeleteAnomalySubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/DeleteAnomalySubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/DeleteAnomalySubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteCostCategoryDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/DeleteCostCategoryDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/DeleteCostCategoryDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/DeleteCostCategoryDefinitionCommandOutput/)

</details>
<details>
<summary>
DescribeCostCategoryDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/DescribeCostCategoryDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/DescribeCostCategoryDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/DescribeCostCategoryDefinitionCommandOutput/)

</details>
<details>
<summary>
GetAnomalies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetAnomaliesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetAnomaliesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetAnomaliesCommandOutput/)

</details>
<details>
<summary>
GetAnomalyMonitors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetAnomalyMonitorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetAnomalyMonitorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetAnomalyMonitorsCommandOutput/)

</details>
<details>
<summary>
GetAnomalySubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetAnomalySubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetAnomalySubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetAnomalySubscriptionsCommandOutput/)

</details>
<details>
<summary>
GetApproximateUsageRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetApproximateUsageRecordsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetApproximateUsageRecordsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetApproximateUsageRecordsCommandOutput/)

</details>
<details>
<summary>
GetCommitmentPurchaseAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetCommitmentPurchaseAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCommitmentPurchaseAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCommitmentPurchaseAnalysisCommandOutput/)

</details>
<details>
<summary>
GetCostAndUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetCostAndUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostAndUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostAndUsageCommandOutput/)

</details>
<details>
<summary>
GetCostAndUsageComparisons
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetCostAndUsageComparisonsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostAndUsageComparisonsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostAndUsageComparisonsCommandOutput/)

</details>
<details>
<summary>
GetCostAndUsageWithResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetCostAndUsageWithResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostAndUsageWithResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostAndUsageWithResourcesCommandOutput/)

</details>
<details>
<summary>
GetCostCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetCostCategoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostCategoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostCategoriesCommandOutput/)

</details>
<details>
<summary>
GetCostComparisonDrivers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetCostComparisonDriversCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostComparisonDriversCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostComparisonDriversCommandOutput/)

</details>
<details>
<summary>
GetCostForecast
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetCostForecastCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostForecastCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetCostForecastCommandOutput/)

</details>
<details>
<summary>
GetDimensionValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetDimensionValuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetDimensionValuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetDimensionValuesCommandOutput/)

</details>
<details>
<summary>
GetReservationCoverage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetReservationCoverageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetReservationCoverageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetReservationCoverageCommandOutput/)

</details>
<details>
<summary>
GetReservationPurchaseRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetReservationPurchaseRecommendationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetReservationPurchaseRecommendationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetReservationPurchaseRecommendationCommandOutput/)

</details>
<details>
<summary>
GetReservationUtilization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetReservationUtilizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetReservationUtilizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetReservationUtilizationCommandOutput/)

</details>
<details>
<summary>
GetRightsizingRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetRightsizingRecommendationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetRightsizingRecommendationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetRightsizingRecommendationCommandOutput/)

</details>
<details>
<summary>
GetSavingsPlanPurchaseRecommendationDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetSavingsPlanPurchaseRecommendationDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlanPurchaseRecommendationDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlanPurchaseRecommendationDetailsCommandOutput/)

</details>
<details>
<summary>
GetSavingsPlansCoverage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetSavingsPlansCoverageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlansCoverageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlansCoverageCommandOutput/)

</details>
<details>
<summary>
GetSavingsPlansPurchaseRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetSavingsPlansPurchaseRecommendationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlansPurchaseRecommendationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlansPurchaseRecommendationCommandOutput/)

</details>
<details>
<summary>
GetSavingsPlansUtilization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetSavingsPlansUtilizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlansUtilizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlansUtilizationCommandOutput/)

</details>
<details>
<summary>
GetSavingsPlansUtilizationDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetSavingsPlansUtilizationDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlansUtilizationDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetSavingsPlansUtilizationDetailsCommandOutput/)

</details>
<details>
<summary>
GetTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetTagsCommandOutput/)

</details>
<details>
<summary>
GetUsageForecast
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/GetUsageForecastCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetUsageForecastCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/GetUsageForecastCommandOutput/)

</details>
<details>
<summary>
ListCommitmentPurchaseAnalyses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/ListCommitmentPurchaseAnalysesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListCommitmentPurchaseAnalysesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListCommitmentPurchaseAnalysesCommandOutput/)

</details>
<details>
<summary>
ListCostAllocationTagBackfillHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/ListCostAllocationTagBackfillHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListCostAllocationTagBackfillHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListCostAllocationTagBackfillHistoryCommandOutput/)

</details>
<details>
<summary>
ListCostAllocationTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/ListCostAllocationTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListCostAllocationTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListCostAllocationTagsCommandOutput/)

</details>
<details>
<summary>
ListCostCategoryDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/ListCostCategoryDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListCostCategoryDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListCostCategoryDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListSavingsPlansPurchaseRecommendationGeneration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/ListSavingsPlansPurchaseRecommendationGenerationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListSavingsPlansPurchaseRecommendationGenerationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListSavingsPlansPurchaseRecommendationGenerationCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ProvideAnomalyFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/ProvideAnomalyFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ProvideAnomalyFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/ProvideAnomalyFeedbackCommandOutput/)

</details>
<details>
<summary>
StartCommitmentPurchaseAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/StartCommitmentPurchaseAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/StartCommitmentPurchaseAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/StartCommitmentPurchaseAnalysisCommandOutput/)

</details>
<details>
<summary>
StartCostAllocationTagBackfill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/StartCostAllocationTagBackfillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/StartCostAllocationTagBackfillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/StartCostAllocationTagBackfillCommandOutput/)

</details>
<details>
<summary>
StartSavingsPlansPurchaseRecommendationGeneration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/StartSavingsPlansPurchaseRecommendationGenerationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/StartSavingsPlansPurchaseRecommendationGenerationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/StartSavingsPlansPurchaseRecommendationGenerationCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAnomalyMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/UpdateAnomalyMonitorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UpdateAnomalyMonitorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UpdateAnomalyMonitorCommandOutput/)

</details>
<details>
<summary>
UpdateAnomalySubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/UpdateAnomalySubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UpdateAnomalySubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UpdateAnomalySubscriptionCommandOutput/)

</details>
<details>
<summary>
UpdateCostAllocationTagsStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/UpdateCostAllocationTagsStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UpdateCostAllocationTagsStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UpdateCostAllocationTagsStatusCommandOutput/)

</details>
<details>
<summary>
UpdateCostCategoryDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cost-explorer/command/UpdateCostCategoryDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UpdateCostCategoryDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cost-explorer/Interface/UpdateCostCategoryDefinitionCommandOutput/)

</details>
