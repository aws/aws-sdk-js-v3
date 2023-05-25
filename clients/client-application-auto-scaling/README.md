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
<p>Amazon SageMaker Serverless endpoint provisioned concurrency</p>
</li>
<li>
<p>Spot Fleets (Amazon EC2)</p>
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

To install the this package, simply type add or install @aws-sdk/client-application-auto-scaling
using your favorite package manager:

- `npm install @aws-sdk/client-application-auto-scaling`
- `yarn add @aws-sdk/client-application-auto-scaling`
- `pnpm add @aws-sdk/client-application-auto-scaling`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ApplicationAutoScalingClient` and
the commands you need, for example `DeleteScalingPolicyCommand`:

```js
// ES5 example
const {
  ApplicationAutoScalingClient,
  DeleteScalingPolicyCommand,
} = require("@aws-sdk/client-application-auto-scaling");
```

```ts
// ES6+ example
import { ApplicationAutoScalingClient, DeleteScalingPolicyCommand } from "@aws-sdk/client-application-auto-scaling";
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
const command = new DeleteScalingPolicyCommand(params);
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
  const data = await client.deleteScalingPolicy(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .deleteScalingPolicy(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.deleteScalingPolicy(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/deletescalingpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/deletescalingpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/deletescalingpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/deletescheduledactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/deletescheduledactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/deletescheduledactioncommandoutput.html)

</details>
<details>
<summary>
DeregisterScalableTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/deregisterscalabletargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/deregisterscalabletargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/deregisterscalabletargetcommandoutput.html)

</details>
<details>
<summary>
DescribeScalableTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/describescalabletargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/describescalabletargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/describescalabletargetscommandoutput.html)

</details>
<details>
<summary>
DescribeScalingActivities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/describescalingactivitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/describescalingactivitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/describescalingactivitiescommandoutput.html)

</details>
<details>
<summary>
DescribeScalingPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/describescalingpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/describescalingpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/describescalingpoliciescommandoutput.html)

</details>
<details>
<summary>
DescribeScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/describescheduledactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/describescheduledactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/describescheduledactionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/putscalingpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/putscalingpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/putscalingpolicycommandoutput.html)

</details>
<details>
<summary>
PutScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/putscheduledactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/putscheduledactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/putscheduledactioncommandoutput.html)

</details>
<details>
<summary>
RegisterScalableTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/registerscalabletargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/registerscalabletargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/registerscalabletargetcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-application-auto-scaling/interfaces/untagresourcecommandoutput.html)

</details>
