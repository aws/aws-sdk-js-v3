<!-- generated file, do not edit directly -->

# @aws-sdk/client-compute-optimizer

## Description

AWS SDK for JavaScript ComputeOptimizer Client for Node.js, Browser and React Native.

<p>Compute Optimizer is a service that analyzes the configuration and utilization
metrics of your Amazon Web Services compute resources, such as Amazon EC2
instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate.
It reports whether your resources are optimal, and generates
optimization recommendations to reduce the cost and improve the performance of your
workloads. Compute Optimizer also provides recent utilization metric data, in addition
to projected utilization metric data for the recommendations, which you can use to
evaluate which recommendation provides the best price-performance trade-off. The
analysis of your usage patterns can help you decide when to move or resize your running
resources, and still meet your performance and capacity requirements. For more
information about Compute Optimizer, including the required permissions to use the
service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">Compute Optimizer User Guide</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-compute-optimizer
using your favorite package manager:

- `npm install @aws-sdk/client-compute-optimizer`
- `yarn add @aws-sdk/client-compute-optimizer`
- `pnpm add @aws-sdk/client-compute-optimizer`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ComputeOptimizerClient` and
the commands you need, for example `GetEnrollmentStatusCommand`:

```js
// ES5 example
const { ComputeOptimizerClient, GetEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer");
```

```ts
// ES6+ example
import { ComputeOptimizerClient, GetEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ComputeOptimizerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new GetEnrollmentStatusCommand(params);
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
import * as AWS from "@aws-sdk/client-compute-optimizer";
const client = new AWS.ComputeOptimizer({ region: "REGION" });

// async/await.
try {
  const data = await client.getEnrollmentStatus(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getEnrollmentStatus(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.getEnrollmentStatus(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-compute-optimizer` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DeleteRecommendationPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/DeleteRecommendationPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/DeleteRecommendationPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/DeleteRecommendationPreferencesCommandOutput/)

</details>
<details>
<summary>
DescribeRecommendationExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/DescribeRecommendationExportJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/DescribeRecommendationExportJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/DescribeRecommendationExportJobsCommandOutput/)

</details>
<details>
<summary>
ExportAutoScalingGroupRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/ExportAutoScalingGroupRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportAutoScalingGroupRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportAutoScalingGroupRecommendationsCommandOutput/)

</details>
<details>
<summary>
ExportEBSVolumeRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/ExportEBSVolumeRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportEBSVolumeRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportEBSVolumeRecommendationsCommandOutput/)

</details>
<details>
<summary>
ExportEC2InstanceRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/ExportEC2InstanceRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportEC2InstanceRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportEC2InstanceRecommendationsCommandOutput/)

</details>
<details>
<summary>
ExportECSServiceRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/ExportECSServiceRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportECSServiceRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportECSServiceRecommendationsCommandOutput/)

</details>
<details>
<summary>
ExportIdleRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/ExportIdleRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportIdleRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportIdleRecommendationsCommandOutput/)

</details>
<details>
<summary>
ExportLambdaFunctionRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/ExportLambdaFunctionRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportLambdaFunctionRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportLambdaFunctionRecommendationsCommandOutput/)

</details>
<details>
<summary>
ExportLicenseRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/ExportLicenseRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportLicenseRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportLicenseRecommendationsCommandOutput/)

</details>
<details>
<summary>
ExportRDSDatabaseRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/ExportRDSDatabaseRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportRDSDatabaseRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/ExportRDSDatabaseRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetAutoScalingGroupRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetAutoScalingGroupRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetAutoScalingGroupRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetAutoScalingGroupRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetEBSVolumeRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetEBSVolumeRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEBSVolumeRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEBSVolumeRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetEC2InstanceRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetEC2InstanceRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEC2InstanceRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEC2InstanceRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetEC2RecommendationProjectedMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetEC2RecommendationProjectedMetricsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEC2RecommendationProjectedMetricsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEC2RecommendationProjectedMetricsCommandOutput/)

</details>
<details>
<summary>
GetECSServiceRecommendationProjectedMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetECSServiceRecommendationProjectedMetricsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetECSServiceRecommendationProjectedMetricsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetECSServiceRecommendationProjectedMetricsCommandOutput/)

</details>
<details>
<summary>
GetECSServiceRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetECSServiceRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetECSServiceRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetECSServiceRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetEffectiveRecommendationPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetEffectiveRecommendationPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEffectiveRecommendationPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEffectiveRecommendationPreferencesCommandOutput/)

</details>
<details>
<summary>
GetEnrollmentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetEnrollmentStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEnrollmentStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEnrollmentStatusCommandOutput/)

</details>
<details>
<summary>
GetEnrollmentStatusesForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetEnrollmentStatusesForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEnrollmentStatusesForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetEnrollmentStatusesForOrganizationCommandOutput/)

</details>
<details>
<summary>
GetIdleRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetIdleRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetIdleRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetIdleRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetLambdaFunctionRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetLambdaFunctionRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetLambdaFunctionRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetLambdaFunctionRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetLicenseRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetLicenseRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetLicenseRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetLicenseRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetRDSDatabaseRecommendationProjectedMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetRDSDatabaseRecommendationProjectedMetricsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetRDSDatabaseRecommendationProjectedMetricsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetRDSDatabaseRecommendationProjectedMetricsCommandOutput/)

</details>
<details>
<summary>
GetRDSDatabaseRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetRDSDatabaseRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetRDSDatabaseRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetRDSDatabaseRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetRecommendationPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetRecommendationPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetRecommendationPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetRecommendationPreferencesCommandOutput/)

</details>
<details>
<summary>
GetRecommendationSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/GetRecommendationSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetRecommendationSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/GetRecommendationSummariesCommandOutput/)

</details>
<details>
<summary>
PutRecommendationPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/PutRecommendationPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/PutRecommendationPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/PutRecommendationPreferencesCommandOutput/)

</details>
<details>
<summary>
UpdateEnrollmentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer/command/UpdateEnrollmentStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/UpdateEnrollmentStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer/Interface/UpdateEnrollmentStatusCommandOutput/)

</details>
