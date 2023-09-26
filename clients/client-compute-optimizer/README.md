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

To install the this package, simply type add or install @aws-sdk/client-compute-optimizer
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/deleterecommendationpreferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/deleterecommendationpreferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/deleterecommendationpreferencescommandoutput.html)

</details>
<details>
<summary>
DescribeRecommendationExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/describerecommendationexportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/describerecommendationexportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/describerecommendationexportjobscommandoutput.html)

</details>
<details>
<summary>
ExportAutoScalingGroupRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/exportautoscalinggrouprecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportautoscalinggrouprecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportautoscalinggrouprecommendationscommandoutput.html)

</details>
<details>
<summary>
ExportEBSVolumeRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/exportebsvolumerecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportebsvolumerecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportebsvolumerecommendationscommandoutput.html)

</details>
<details>
<summary>
ExportEC2InstanceRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/exportec2instancerecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportec2instancerecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportec2instancerecommendationscommandoutput.html)

</details>
<details>
<summary>
ExportECSServiceRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/exportecsservicerecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportecsservicerecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportecsservicerecommendationscommandoutput.html)

</details>
<details>
<summary>
ExportLambdaFunctionRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/exportlambdafunctionrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportlambdafunctionrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportlambdafunctionrecommendationscommandoutput.html)

</details>
<details>
<summary>
ExportLicenseRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/exportlicenserecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportlicenserecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/exportlicenserecommendationscommandoutput.html)

</details>
<details>
<summary>
GetAutoScalingGroupRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getautoscalinggrouprecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getautoscalinggrouprecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getautoscalinggrouprecommendationscommandoutput.html)

</details>
<details>
<summary>
GetEBSVolumeRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getebsvolumerecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getebsvolumerecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getebsvolumerecommendationscommandoutput.html)

</details>
<details>
<summary>
GetEC2InstanceRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getec2instancerecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getec2instancerecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getec2instancerecommendationscommandoutput.html)

</details>
<details>
<summary>
GetEC2RecommendationProjectedMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getec2recommendationprojectedmetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getec2recommendationprojectedmetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getec2recommendationprojectedmetricscommandoutput.html)

</details>
<details>
<summary>
GetECSServiceRecommendationProjectedMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getecsservicerecommendationprojectedmetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getecsservicerecommendationprojectedmetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getecsservicerecommendationprojectedmetricscommandoutput.html)

</details>
<details>
<summary>
GetECSServiceRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getecsservicerecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getecsservicerecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getecsservicerecommendationscommandoutput.html)

</details>
<details>
<summary>
GetEffectiveRecommendationPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/geteffectiverecommendationpreferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/geteffectiverecommendationpreferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/geteffectiverecommendationpreferencescommandoutput.html)

</details>
<details>
<summary>
GetEnrollmentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getenrollmentstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getenrollmentstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getenrollmentstatuscommandoutput.html)

</details>
<details>
<summary>
GetEnrollmentStatusesForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getenrollmentstatusesfororganizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getenrollmentstatusesfororganizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getenrollmentstatusesfororganizationcommandoutput.html)

</details>
<details>
<summary>
GetLambdaFunctionRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getlambdafunctionrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getlambdafunctionrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getlambdafunctionrecommendationscommandoutput.html)

</details>
<details>
<summary>
GetLicenseRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getlicenserecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getlicenserecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getlicenserecommendationscommandoutput.html)

</details>
<details>
<summary>
GetRecommendationPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getrecommendationpreferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getrecommendationpreferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getrecommendationpreferencescommandoutput.html)

</details>
<details>
<summary>
GetRecommendationSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/getrecommendationsummariescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getrecommendationsummariescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/getrecommendationsummariescommandoutput.html)

</details>
<details>
<summary>
PutRecommendationPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/putrecommendationpreferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/putrecommendationpreferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/putrecommendationpreferencescommandoutput.html)

</details>
<details>
<summary>
UpdateEnrollmentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/classes/updateenrollmentstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/updateenrollmentstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-compute-optimizer/interfaces/updateenrollmentstatuscommandoutput.html)

</details>
