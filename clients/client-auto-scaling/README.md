<!-- generated file, do not edit directly -->

# @aws-sdk/client-auto-scaling

## Description

AWS SDK for JavaScript AutoScaling Client for Node.js, Browser and React Native.

<fullname>Amazon EC2 Auto Scaling</fullname>

<p>The <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAutoScalingGroups.html">DescribeAutoScalingGroups</a> API operation might be throttled when retrieving details for an Auto Scaling group that contains many instances. By default, this operation returns details for all instances in the group.
To help prevent throttling, you can set the <code>IncludeInstances</code> parameter to <code>false</code> to exclude instance details from the response.</p>
<p>Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances
based on user-defined scaling policies, scheduled actions, and health checks.</p>
<p>For more information, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a> and the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html">Amazon EC2 Auto Scaling API Reference</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-auto-scaling
using your favorite package manager:

- `npm install @aws-sdk/client-auto-scaling`
- `yarn add @aws-sdk/client-auto-scaling`
- `pnpm add @aws-sdk/client-auto-scaling`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AutoScalingClient` and
the commands you need, for example `DescribePoliciesCommand`:

```js
// ES5 example
const { AutoScalingClient, DescribePoliciesCommand } = require("@aws-sdk/client-auto-scaling");
```

```ts
// ES6+ example
import { AutoScalingClient, DescribePoliciesCommand } from "@aws-sdk/client-auto-scaling";
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
const command = new DescribePoliciesCommand(params);
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
  const data = await client.describePolicies(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .describePolicies(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.describePolicies(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/AttachInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/AttachInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/AttachInstancesCommandOutput/)

</details>
<details>
<summary>
AttachLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/AttachLoadBalancersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/AttachLoadBalancersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/AttachLoadBalancersCommandOutput/)

</details>
<details>
<summary>
AttachLoadBalancerTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/AttachLoadBalancerTargetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/AttachLoadBalancerTargetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/AttachLoadBalancerTargetGroupsCommandOutput/)

</details>
<details>
<summary>
AttachTrafficSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/AttachTrafficSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/AttachTrafficSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/AttachTrafficSourcesCommandOutput/)

</details>
<details>
<summary>
BatchDeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/BatchDeleteScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/BatchDeleteScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/BatchDeleteScheduledActionCommandOutput/)

</details>
<details>
<summary>
BatchPutScheduledUpdateGroupAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/BatchPutScheduledUpdateGroupActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/BatchPutScheduledUpdateGroupActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/BatchPutScheduledUpdateGroupActionCommandOutput/)

</details>
<details>
<summary>
CancelInstanceRefresh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/CancelInstanceRefreshCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CancelInstanceRefreshCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CancelInstanceRefreshCommandOutput/)

</details>
<details>
<summary>
CompleteLifecycleAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/CompleteLifecycleActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CompleteLifecycleActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CompleteLifecycleActionCommandOutput/)

</details>
<details>
<summary>
CreateAutoScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/CreateAutoScalingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CreateAutoScalingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CreateAutoScalingGroupCommandOutput/)

</details>
<details>
<summary>
CreateLaunchConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/CreateLaunchConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CreateLaunchConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CreateLaunchConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateOrUpdateTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/CreateOrUpdateTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CreateOrUpdateTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/CreateOrUpdateTagsCommandOutput/)

</details>
<details>
<summary>
DeleteAutoScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DeleteAutoScalingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteAutoScalingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteAutoScalingGroupCommandOutput/)

</details>
<details>
<summary>
DeleteLaunchConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DeleteLaunchConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteLaunchConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteLaunchConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteLifecycleHook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DeleteLifecycleHookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteLifecycleHookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteLifecycleHookCommandOutput/)

</details>
<details>
<summary>
DeleteNotificationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DeleteNotificationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteNotificationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteNotificationConfigurationCommandOutput/)

</details>
<details>
<summary>
DeletePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DeletePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeletePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeletePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DeleteScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteScheduledActionCommandOutput/)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DeleteTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteTagsCommandOutput/)

</details>
<details>
<summary>
DeleteWarmPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DeleteWarmPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteWarmPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DeleteWarmPoolCommandOutput/)

</details>
<details>
<summary>
DescribeAccountLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeAccountLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAccountLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAccountLimitsCommandOutput/)

</details>
<details>
<summary>
DescribeAdjustmentTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeAdjustmentTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAdjustmentTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAdjustmentTypesCommandOutput/)

</details>
<details>
<summary>
DescribeAutoScalingGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeAutoScalingGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAutoScalingGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAutoScalingGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeAutoScalingInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeAutoScalingInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAutoScalingInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAutoScalingInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeAutoScalingNotificationTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeAutoScalingNotificationTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAutoScalingNotificationTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeAutoScalingNotificationTypesCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceRefreshes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeInstanceRefreshesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeInstanceRefreshesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeInstanceRefreshesCommandOutput/)

</details>
<details>
<summary>
DescribeLaunchConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeLaunchConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLaunchConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLaunchConfigurationsCommandOutput/)

</details>
<details>
<summary>
DescribeLifecycleHooks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeLifecycleHooksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLifecycleHooksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLifecycleHooksCommandOutput/)

</details>
<details>
<summary>
DescribeLifecycleHookTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeLifecycleHookTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLifecycleHookTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLifecycleHookTypesCommandOutput/)

</details>
<details>
<summary>
DescribeLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeLoadBalancersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLoadBalancersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLoadBalancersCommandOutput/)

</details>
<details>
<summary>
DescribeLoadBalancerTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeLoadBalancerTargetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLoadBalancerTargetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeLoadBalancerTargetGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeMetricCollectionTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeMetricCollectionTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeMetricCollectionTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeMetricCollectionTypesCommandOutput/)

</details>
<details>
<summary>
DescribeNotificationConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeNotificationConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeNotificationConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeNotificationConfigurationsCommandOutput/)

</details>
<details>
<summary>
DescribePolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribePoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribePoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribePoliciesCommandOutput/)

</details>
<details>
<summary>
DescribeScalingActivities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeScalingActivitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeScalingActivitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeScalingActivitiesCommandOutput/)

</details>
<details>
<summary>
DescribeScalingProcessTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeScalingProcessTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeScalingProcessTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeScalingProcessTypesCommandOutput/)

</details>
<details>
<summary>
DescribeScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeScheduledActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeScheduledActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeScheduledActionsCommandOutput/)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeTagsCommandOutput/)

</details>
<details>
<summary>
DescribeTerminationPolicyTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeTerminationPolicyTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeTerminationPolicyTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeTerminationPolicyTypesCommandOutput/)

</details>
<details>
<summary>
DescribeTrafficSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeTrafficSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeTrafficSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeTrafficSourcesCommandOutput/)

</details>
<details>
<summary>
DescribeWarmPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DescribeWarmPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeWarmPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DescribeWarmPoolCommandOutput/)

</details>
<details>
<summary>
DetachInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DetachInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DetachInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DetachInstancesCommandOutput/)

</details>
<details>
<summary>
DetachLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DetachLoadBalancersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DetachLoadBalancersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DetachLoadBalancersCommandOutput/)

</details>
<details>
<summary>
DetachLoadBalancerTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DetachLoadBalancerTargetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DetachLoadBalancerTargetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DetachLoadBalancerTargetGroupsCommandOutput/)

</details>
<details>
<summary>
DetachTrafficSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DetachTrafficSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DetachTrafficSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DetachTrafficSourcesCommandOutput/)

</details>
<details>
<summary>
DisableMetricsCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/DisableMetricsCollectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DisableMetricsCollectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/DisableMetricsCollectionCommandOutput/)

</details>
<details>
<summary>
EnableMetricsCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/EnableMetricsCollectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/EnableMetricsCollectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/EnableMetricsCollectionCommandOutput/)

</details>
<details>
<summary>
EnterStandby
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/EnterStandbyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/EnterStandbyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/EnterStandbyCommandOutput/)

</details>
<details>
<summary>
ExecutePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/ExecutePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/ExecutePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/ExecutePolicyCommandOutput/)

</details>
<details>
<summary>
ExitStandby
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/ExitStandbyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/ExitStandbyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/ExitStandbyCommandOutput/)

</details>
<details>
<summary>
GetPredictiveScalingForecast
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/GetPredictiveScalingForecastCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/GetPredictiveScalingForecastCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/GetPredictiveScalingForecastCommandOutput/)

</details>
<details>
<summary>
LaunchInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/LaunchInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/LaunchInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/LaunchInstancesCommandOutput/)

</details>
<details>
<summary>
PutLifecycleHook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/PutLifecycleHookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutLifecycleHookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutLifecycleHookCommandOutput/)

</details>
<details>
<summary>
PutNotificationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/PutNotificationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutNotificationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutNotificationConfigurationCommandOutput/)

</details>
<details>
<summary>
PutScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/PutScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutScalingPolicyCommandOutput/)

</details>
<details>
<summary>
PutScheduledUpdateGroupAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/PutScheduledUpdateGroupActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutScheduledUpdateGroupActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutScheduledUpdateGroupActionCommandOutput/)

</details>
<details>
<summary>
PutWarmPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/PutWarmPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutWarmPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/PutWarmPoolCommandOutput/)

</details>
<details>
<summary>
RecordLifecycleActionHeartbeat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/RecordLifecycleActionHeartbeatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/RecordLifecycleActionHeartbeatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/RecordLifecycleActionHeartbeatCommandOutput/)

</details>
<details>
<summary>
ResumeProcesses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/ResumeProcessesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/ResumeProcessesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/ResumeProcessesCommandOutput/)

</details>
<details>
<summary>
RollbackInstanceRefresh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/RollbackInstanceRefreshCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/RollbackInstanceRefreshCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/RollbackInstanceRefreshCommandOutput/)

</details>
<details>
<summary>
SetDesiredCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/SetDesiredCapacityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/SetDesiredCapacityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/SetDesiredCapacityCommandOutput/)

</details>
<details>
<summary>
SetInstanceHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/SetInstanceHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/SetInstanceHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/SetInstanceHealthCommandOutput/)

</details>
<details>
<summary>
SetInstanceProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/SetInstanceProtectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/SetInstanceProtectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/SetInstanceProtectionCommandOutput/)

</details>
<details>
<summary>
StartInstanceRefresh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/StartInstanceRefreshCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/StartInstanceRefreshCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/StartInstanceRefreshCommandOutput/)

</details>
<details>
<summary>
SuspendProcesses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/SuspendProcessesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/SuspendProcessesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/SuspendProcessesCommandOutput/)

</details>
<details>
<summary>
TerminateInstanceInAutoScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/TerminateInstanceInAutoScalingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/TerminateInstanceInAutoScalingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/TerminateInstanceInAutoScalingGroupCommandOutput/)

</details>
<details>
<summary>
UpdateAutoScalingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auto-scaling/command/UpdateAutoScalingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/UpdateAutoScalingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auto-scaling/Interface/UpdateAutoScalingGroupCommandOutput/)

</details>
