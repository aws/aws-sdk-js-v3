<!-- generated file, do not edit directly -->

# @aws-sdk/client-application-auto-scaling

## Description

AWS SDK for JavaScript ApplicationAutoScaling Client for Node.js, Browser and React Native.

<p>With Application Auto Scaling, you can configure automatic scaling for the following
resources:</p>
<ul>
<li>
<p>Amazon AppStream 2.0 fleets</p>
</li>
<li>
<p>Amazon Aurora Replicas</p>
</li>
<li>
<p>Amazon Comprehend document classification and entity recognizer endpoints</p>
</li>
<li>
<p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p>
</li>
<li>
<p>Amazon ECS services</p>
</li>
<li>
<p>Amazon ElastiCache for Redis clusters (replication groups)</p>
</li>
<li>
<p>Amazon EMR clusters</p>
</li>
<li>
<p>Amazon Keyspaces (for Apache Cassandra) tables</p>
</li>
<li>
<p>Lambda function provisioned concurrency</p>
</li>
<li>
<p>Amazon Managed Streaming for Apache Kafka broker storage</p>
</li>
<li>
<p>Amazon Neptune clusters</p>
</li>
<li>
<p>Amazon SageMaker endpoint variants</p>
</li>
<li>
<p>Amazon SageMaker inference components</p>
</li>
<li>
<p>Amazon SageMaker serverless endpoint provisioned concurrency</p>
</li>
<li>
<p>Spot Fleets (Amazon EC2)</p>
</li>
<li>
<p>Pool of WorkSpaces</p>
</li>
<li>
<p>Custom resources provided by your own applications or services</p>
</li>
</ul>
<p>To learn more about Application Auto Scaling, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User
Guide</a>.</p>
<p>
<b>API Summary</b>
</p>
<p>The Application Auto Scaling service API includes three key sets of actions: </p>
<ul>
<li>
<p>Register and manage scalable targets - Register Amazon Web Services or custom resources as scalable
targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and
retrieve information on existing scalable targets.</p>
</li>
<li>
<p>Configure and manage automatic scaling - Define scaling policies to dynamically scale
your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions,
and retrieve your recent scaling activity history.</p>
</li>
<li>
<p>Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by
calling the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html">RegisterScalableTarget</a> API action for any Application Auto Scaling scalable target. You can
suspend and resume (individually or in combination) scale-out activities that are
triggered by a scaling policy, scale-in activities that are triggered by a scaling policy,
and scheduled scaling.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-application-auto-scaling
using your favorite package manager:

- `npm install @aws-sdk/client-application-auto-scaling`
- `yarn add @aws-sdk/client-application-auto-scaling`
- `pnpm add @aws-sdk/client-application-auto-scaling`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ApplicationAutoScalingClient` and
the commands you need, for example `ListTagsForResourceCommand`:

```js
// ES5 example
const {
  ApplicationAutoScalingClient,
  ListTagsForResourceCommand,
} = require("@aws-sdk/client-application-auto-scaling");
```

```ts
// ES6+ example
import { ApplicationAutoScalingClient, ListTagsForResourceCommand } from "@aws-sdk/client-application-auto-scaling";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ApplicationAutoScalingClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListTagsForResourceCommand(params);
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
import * as AWS from "@aws-sdk/client-application-auto-scaling";
const client = new AWS.ApplicationAutoScaling({ region: "REGION" });

// async/await.
try {
  const data = await client.listTagsForResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTagsForResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTagsForResource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-application-auto-scaling` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DeleteScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/DeleteScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DeleteScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DeleteScalingPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/DeleteScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DeleteScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DeleteScheduledActionCommandOutput/)

</details>
<details>
<summary>
DeregisterScalableTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/DeregisterScalableTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DeregisterScalableTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DeregisterScalableTargetCommandOutput/)

</details>
<details>
<summary>
DescribeScalableTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/DescribeScalableTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DescribeScalableTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DescribeScalableTargetsCommandOutput/)

</details>
<details>
<summary>
DescribeScalingActivities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/DescribeScalingActivitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DescribeScalingActivitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DescribeScalingActivitiesCommandOutput/)

</details>
<details>
<summary>
DescribeScalingPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/DescribeScalingPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DescribeScalingPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DescribeScalingPoliciesCommandOutput/)

</details>
<details>
<summary>
DescribeScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/DescribeScheduledActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DescribeScheduledActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/DescribeScheduledActionsCommandOutput/)

</details>
<details>
<summary>
GetPredictiveScalingForecast
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/GetPredictiveScalingForecastCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/GetPredictiveScalingForecastCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/GetPredictiveScalingForecastCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/PutScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/PutScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/PutScalingPolicyCommandOutput/)

</details>
<details>
<summary>
PutScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/PutScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/PutScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/PutScheduledActionCommandOutput/)

</details>
<details>
<summary>
RegisterScalableTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/RegisterScalableTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/RegisterScalableTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/RegisterScalableTargetCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-auto-scaling/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-auto-scaling/Interface/UntagResourceCommandOutput/)

</details>
