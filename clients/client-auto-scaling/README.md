<!-- generated file, do not edit directly -->

# @aws-sdk/client-auto-scaling

## Description

AWS SDK for JavaScript AutoScaling Client for Node.js, Browser and React Native.

<fullname>Amazon EC2 Auto Scaling</fullname>

<p>Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances
based on user-defined scaling policies, scheduled actions, and health checks.</p>
<p>For more information, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/">Amazon EC2 Auto Scaling User Guide</a> and the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html">Amazon EC2 Auto Scaling API Reference</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-auto-scaling
using your favorite package manager:

- `npm install @aws-sdk/client-auto-scaling`
- `yarn add @aws-sdk/client-auto-scaling`
- `pnpm add @aws-sdk/client-auto-scaling`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AutoScalingClient` and
the commands you need, for example `AttachInstancesCommand`:

```js
// ES5 example
const { AutoScalingClient, AttachInstancesCommand } = require("@aws-sdk/client-auto-scaling");
```

```ts
// ES6+ example
import { AutoScalingClient, AttachInstancesCommand } from "@aws-sdk/client-auto-scaling";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AutoScalingClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AttachInstancesCommand(params);
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
import * as AWS from "@aws-sdk/client-auto-scaling";
const client = new AWS.AutoScaling({ region: "REGION" });

// async/await.
try {
  const data = await client.attachInstances(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .attachInstances(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.attachInstances(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-auto-scaling` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AttachInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/attachinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/attachinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/attachinstancescommandoutput.html)

</details>
<details>
<summary>
AttachLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/attachloadbalancerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/attachloadbalancerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/attachloadbalancerscommandoutput.html)

</details>
<details>
<summary>
AttachLoadBalancerTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/attachloadbalancertargetgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/attachloadbalancertargetgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/attachloadbalancertargetgroupscommandoutput.html)

</details>
<details>
<summary>
AttachTrafficSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/attachtrafficsourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/attachtrafficsourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/attachtrafficsourcescommandoutput.html)

</details>
<details>
<summary>
BatchDeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/batchdeletescheduledactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/batchdeletescheduledactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/batchdeletescheduledactioncommandoutput.html)

</details>
<details>
<summary>
BatchPutScheduledUpdateGroupAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/batchputscheduledupdategroupactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/batchputscheduledupdategroupactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/batchputscheduledupdategroupactioncommandoutput.html)

</details>
<details>
<summary>
CancelInstanceRefresh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/cancelinstancerefreshcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/cancelinstancerefreshcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/cancelinstancerefreshcommandoutput.html)

</details>
<details>
<summary>
CompleteLifecycleAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/completelifecycleactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/completelifecycleactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/completelifecycleactioncommandoutput.html)

</details>
<details>
<summary>
CreateAutoScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/createautoscalinggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/createautoscalinggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/createautoscalinggroupcommandoutput.html)

</details>
<details>
<summary>
CreateLaunchConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/createlaunchconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/createlaunchconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/createlaunchconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateOrUpdateTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/createorupdatetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/createorupdatetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/createorupdatetagscommandoutput.html)

</details>
<details>
<summary>
DeleteAutoScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/deleteautoscalinggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deleteautoscalinggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deleteautoscalinggroupcommandoutput.html)

</details>
<details>
<summary>
DeleteLaunchConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/deletelaunchconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletelaunchconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletelaunchconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteLifecycleHook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/deletelifecyclehookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletelifecyclehookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletelifecyclehookcommandoutput.html)

</details>
<details>
<summary>
DeleteNotificationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/deletenotificationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletenotificationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletenotificationconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeletePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/deletepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/deletescheduledactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletescheduledactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletescheduledactioncommandoutput.html)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/deletetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletetagscommandoutput.html)

</details>
<details>
<summary>
DeleteWarmPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/deletewarmpoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletewarmpoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/deletewarmpoolcommandoutput.html)

</details>
<details>
<summary>
DescribeAccountLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeaccountlimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeaccountlimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeaccountlimitscommandoutput.html)

</details>
<details>
<summary>
DescribeAdjustmentTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeadjustmenttypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeadjustmenttypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeadjustmenttypescommandoutput.html)

</details>
<details>
<summary>
DescribeAutoScalingGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeautoscalinggroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeautoscalinggroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeautoscalinggroupscommandoutput.html)

</details>
<details>
<summary>
DescribeAutoScalingInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeautoscalinginstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeautoscalinginstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeautoscalinginstancescommandoutput.html)

</details>
<details>
<summary>
DescribeAutoScalingNotificationTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeautoscalingnotificationtypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeautoscalingnotificationtypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeautoscalingnotificationtypescommandoutput.html)

</details>
<details>
<summary>
DescribeInstanceRefreshes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeinstancerefreshescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeinstancerefreshescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeinstancerefreshescommandoutput.html)

</details>
<details>
<summary>
DescribeLaunchConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describelaunchconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describelaunchconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describelaunchconfigurationscommandoutput.html)

</details>
<details>
<summary>
DescribeLifecycleHooks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describelifecyclehookscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describelifecyclehookscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describelifecyclehookscommandoutput.html)

</details>
<details>
<summary>
DescribeLifecycleHookTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describelifecyclehooktypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describelifecyclehooktypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describelifecyclehooktypescommandoutput.html)

</details>
<details>
<summary>
DescribeLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeloadbalancerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeloadbalancerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeloadbalancerscommandoutput.html)

</details>
<details>
<summary>
DescribeLoadBalancerTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeloadbalancertargetgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeloadbalancertargetgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeloadbalancertargetgroupscommandoutput.html)

</details>
<details>
<summary>
DescribeMetricCollectionTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describemetriccollectiontypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describemetriccollectiontypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describemetriccollectiontypescommandoutput.html)

</details>
<details>
<summary>
DescribeNotificationConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describenotificationconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describenotificationconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describenotificationconfigurationscommandoutput.html)

</details>
<details>
<summary>
DescribePolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describepoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describepoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describepoliciescommandoutput.html)

</details>
<details>
<summary>
DescribeScalingActivities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describescalingactivitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describescalingactivitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describescalingactivitiescommandoutput.html)

</details>
<details>
<summary>
DescribeScalingProcessTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describescalingprocesstypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describescalingprocesstypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describescalingprocesstypescommandoutput.html)

</details>
<details>
<summary>
DescribeScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describescheduledactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describescheduledactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describescheduledactionscommandoutput.html)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describetagscommandoutput.html)

</details>
<details>
<summary>
DescribeTerminationPolicyTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describeterminationpolicytypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeterminationpolicytypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describeterminationpolicytypescommandoutput.html)

</details>
<details>
<summary>
DescribeTrafficSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describetrafficsourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describetrafficsourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describetrafficsourcescommandoutput.html)

</details>
<details>
<summary>
DescribeWarmPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/describewarmpoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describewarmpoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/describewarmpoolcommandoutput.html)

</details>
<details>
<summary>
DetachInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/detachinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/detachinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/detachinstancescommandoutput.html)

</details>
<details>
<summary>
DetachLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/detachloadbalancerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/detachloadbalancerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/detachloadbalancerscommandoutput.html)

</details>
<details>
<summary>
DetachLoadBalancerTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/detachloadbalancertargetgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/detachloadbalancertargetgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/detachloadbalancertargetgroupscommandoutput.html)

</details>
<details>
<summary>
DetachTrafficSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/detachtrafficsourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/detachtrafficsourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/detachtrafficsourcescommandoutput.html)

</details>
<details>
<summary>
DisableMetricsCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/disablemetricscollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/disablemetricscollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/disablemetricscollectioncommandoutput.html)

</details>
<details>
<summary>
EnableMetricsCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/enablemetricscollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/enablemetricscollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/enablemetricscollectioncommandoutput.html)

</details>
<details>
<summary>
EnterStandby
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/enterstandbycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/enterstandbycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/enterstandbycommandoutput.html)

</details>
<details>
<summary>
ExecutePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/executepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/executepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/executepolicycommandoutput.html)

</details>
<details>
<summary>
ExitStandby
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/exitstandbycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/exitstandbycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/exitstandbycommandoutput.html)

</details>
<details>
<summary>
GetPredictiveScalingForecast
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/getpredictivescalingforecastcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/getpredictivescalingforecastcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/getpredictivescalingforecastcommandoutput.html)

</details>
<details>
<summary>
PutLifecycleHook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/putlifecyclehookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putlifecyclehookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putlifecyclehookcommandoutput.html)

</details>
<details>
<summary>
PutNotificationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/putnotificationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putnotificationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putnotificationconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/putscalingpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putscalingpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putscalingpolicycommandoutput.html)

</details>
<details>
<summary>
PutScheduledUpdateGroupAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/putscheduledupdategroupactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putscheduledupdategroupactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putscheduledupdategroupactioncommandoutput.html)

</details>
<details>
<summary>
PutWarmPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/putwarmpoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putwarmpoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/putwarmpoolcommandoutput.html)

</details>
<details>
<summary>
RecordLifecycleActionHeartbeat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/recordlifecycleactionheartbeatcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/recordlifecycleactionheartbeatcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/recordlifecycleactionheartbeatcommandoutput.html)

</details>
<details>
<summary>
ResumeProcesses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/resumeprocessescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/resumeprocessescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/resumeprocessescommandoutput.html)

</details>
<details>
<summary>
RollbackInstanceRefresh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/rollbackinstancerefreshcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/rollbackinstancerefreshcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/rollbackinstancerefreshcommandoutput.html)

</details>
<details>
<summary>
SetDesiredCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/setdesiredcapacitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/setdesiredcapacitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/setdesiredcapacitycommandoutput.html)

</details>
<details>
<summary>
SetInstanceHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/setinstancehealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/setinstancehealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/setinstancehealthcommandoutput.html)

</details>
<details>
<summary>
SetInstanceProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/setinstanceprotectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/setinstanceprotectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/setinstanceprotectioncommandoutput.html)

</details>
<details>
<summary>
StartInstanceRefresh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/startinstancerefreshcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/startinstancerefreshcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/startinstancerefreshcommandoutput.html)

</details>
<details>
<summary>
SuspendProcesses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/suspendprocessescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/suspendprocessescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/suspendprocessescommandoutput.html)

</details>
<details>
<summary>
TerminateInstanceInAutoScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/terminateinstanceinautoscalinggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/terminateinstanceinautoscalinggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/terminateinstanceinautoscalinggroupcommandoutput.html)

</details>
<details>
<summary>
UpdateAutoScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/classes/updateautoscalinggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/updateautoscalinggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auto-scaling/interfaces/updateautoscalinggroupcommandoutput.html)

</details>
