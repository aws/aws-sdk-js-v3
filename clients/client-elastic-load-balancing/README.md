<!-- generated file, do not edit directly -->

# @aws-sdk/client-elastic-load-balancing

## Description

AWS SDK for JavaScript ElasticLoadBalancing Client for Node.js, Browser and React Native.

<fullname>Elastic Load Balancing</fullname>

<p>A load balancer can distribute incoming traffic across your EC2 instances.
This enables you to increase the availability of your application. The load balancer
also monitors the health of its registered instances and ensures that it routes traffic
only to healthy instances. You configure your load balancer to accept incoming traffic
by specifying one or more listeners, which are configured with a protocol and port
number for connections from clients to the load balancer and a protocol and port number
for connections from the load balancer to the instances.</p>
<p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers,
and Classic Load Balancers. You can select a load balancer based on your application needs. For more
information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p>
<p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers.
The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p>

<p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>.
Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p>

<p>All Elastic Load Balancing operations are <i>idempotent</i>, which means
that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK
response code.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-elastic-load-balancing
using your favorite package manager:

- `npm install @aws-sdk/client-elastic-load-balancing`
- `yarn add @aws-sdk/client-elastic-load-balancing`
- `pnpm add @aws-sdk/client-elastic-load-balancing`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ElasticLoadBalancingClient` and
the commands you need, for example `DescribeAccountLimitsCommand`:

```js
// ES5 example
const { ElasticLoadBalancingClient, DescribeAccountLimitsCommand } = require("@aws-sdk/client-elastic-load-balancing");
```

```ts
// ES6+ example
import { ElasticLoadBalancingClient, DescribeAccountLimitsCommand } from "@aws-sdk/client-elastic-load-balancing";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ElasticLoadBalancingClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new DescribeAccountLimitsCommand(params);
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
import * as AWS from "@aws-sdk/client-elastic-load-balancing";
const client = new AWS.ElasticLoadBalancing({ region: "REGION" });

// async/await.
try {
  const data = await client.describeAccountLimits(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .describeAccountLimits(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.describeAccountLimits(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-elastic-load-balancing` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/AddTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/AddTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/AddTagsCommandOutput/)

</details>
<details>
<summary>
ApplySecurityGroupsToLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/ApplySecurityGroupsToLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/ApplySecurityGroupsToLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/ApplySecurityGroupsToLoadBalancerCommandOutput/)

</details>
<details>
<summary>
AttachLoadBalancerToSubnets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/AttachLoadBalancerToSubnetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/AttachLoadBalancerToSubnetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/AttachLoadBalancerToSubnetsCommandOutput/)

</details>
<details>
<summary>
ConfigureHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/ConfigureHealthCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/ConfigureHealthCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/ConfigureHealthCheckCommandOutput/)

</details>
<details>
<summary>
CreateAppCookieStickinessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/CreateAppCookieStickinessPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateAppCookieStickinessPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateAppCookieStickinessPolicyCommandOutput/)

</details>
<details>
<summary>
CreateLBCookieStickinessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/CreateLBCookieStickinessPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateLBCookieStickinessPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateLBCookieStickinessPolicyCommandOutput/)

</details>
<details>
<summary>
CreateLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/CreateLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateLoadBalancerCommandOutput/)

</details>
<details>
<summary>
CreateLoadBalancerListeners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/CreateLoadBalancerListenersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateLoadBalancerListenersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateLoadBalancerListenersCommandOutput/)

</details>
<details>
<summary>
CreateLoadBalancerPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/CreateLoadBalancerPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateLoadBalancerPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/CreateLoadBalancerPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DeleteLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DeleteLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DeleteLoadBalancerCommandOutput/)

</details>
<details>
<summary>
DeleteLoadBalancerListeners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DeleteLoadBalancerListenersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DeleteLoadBalancerListenersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DeleteLoadBalancerListenersCommandOutput/)

</details>
<details>
<summary>
DeleteLoadBalancerPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DeleteLoadBalancerPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DeleteLoadBalancerPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DeleteLoadBalancerPolicyCommandOutput/)

</details>
<details>
<summary>
DeregisterInstancesFromLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DeregisterInstancesFromLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DeregisterInstancesFromLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DeregisterInstancesFromLoadBalancerCommandOutput/)

</details>
<details>
<summary>
DescribeAccountLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DescribeAccountLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeAccountLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeAccountLimitsCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DescribeInstanceHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeInstanceHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeInstanceHealthCommandOutput/)

</details>
<details>
<summary>
DescribeLoadBalancerAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DescribeLoadBalancerAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeLoadBalancerAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeLoadBalancerAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeLoadBalancerPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DescribeLoadBalancerPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeLoadBalancerPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeLoadBalancerPoliciesCommandOutput/)

</details>
<details>
<summary>
DescribeLoadBalancerPolicyTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DescribeLoadBalancerPolicyTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeLoadBalancerPolicyTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeLoadBalancerPolicyTypesCommandOutput/)

</details>
<details>
<summary>
DescribeLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DescribeLoadBalancersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeLoadBalancersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeLoadBalancersCommandOutput/)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DescribeTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DescribeTagsCommandOutput/)

</details>
<details>
<summary>
DetachLoadBalancerFromSubnets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DetachLoadBalancerFromSubnetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DetachLoadBalancerFromSubnetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DetachLoadBalancerFromSubnetsCommandOutput/)

</details>
<details>
<summary>
DisableAvailabilityZonesForLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/DisableAvailabilityZonesForLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DisableAvailabilityZonesForLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/DisableAvailabilityZonesForLoadBalancerCommandOutput/)

</details>
<details>
<summary>
EnableAvailabilityZonesForLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/EnableAvailabilityZonesForLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/EnableAvailabilityZonesForLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/EnableAvailabilityZonesForLoadBalancerCommandOutput/)

</details>
<details>
<summary>
ModifyLoadBalancerAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/ModifyLoadBalancerAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/ModifyLoadBalancerAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/ModifyLoadBalancerAttributesCommandOutput/)

</details>
<details>
<summary>
RegisterInstancesWithLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/RegisterInstancesWithLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/RegisterInstancesWithLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/RegisterInstancesWithLoadBalancerCommandOutput/)

</details>
<details>
<summary>
RemoveTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/RemoveTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/RemoveTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/RemoveTagsCommandOutput/)

</details>
<details>
<summary>
SetLoadBalancerListenerSSLCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/SetLoadBalancerListenerSSLCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/SetLoadBalancerListenerSSLCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/SetLoadBalancerListenerSSLCertificateCommandOutput/)

</details>
<details>
<summary>
SetLoadBalancerPoliciesForBackendServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/SetLoadBalancerPoliciesForBackendServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/SetLoadBalancerPoliciesForBackendServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/SetLoadBalancerPoliciesForBackendServerCommandOutput/)

</details>
<details>
<summary>
SetLoadBalancerPoliciesOfListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-load-balancing/command/SetLoadBalancerPoliciesOfListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/SetLoadBalancerPoliciesOfListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-load-balancing/Interface/SetLoadBalancerPoliciesOfListenerCommandOutput/)

</details>
