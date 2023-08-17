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

To install the this package, simply type add or install @aws-sdk/client-elastic-load-balancing
using your favorite package manager:

- `npm install @aws-sdk/client-elastic-load-balancing`
- `yarn add @aws-sdk/client-elastic-load-balancing`
- `pnpm add @aws-sdk/client-elastic-load-balancing`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ElasticLoadBalancingClient` and
the commands you need, for example `AddTagsCommand`:

```js
// ES5 example
const { ElasticLoadBalancingClient, AddTagsCommand } = require("@aws-sdk/client-elastic-load-balancing");
```

```ts
// ES6+ example
import { ElasticLoadBalancingClient, AddTagsCommand } from "@aws-sdk/client-elastic-load-balancing";
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
const command = new AddTagsCommand(params);
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
  const data = await client.addTags(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addTags(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addTags(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/addtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/addtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/addtagscommandoutput.html)

</details>
<details>
<summary>
ApplySecurityGroupsToLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/applysecuritygroupstoloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/applysecuritygroupstoloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/applysecuritygroupstoloadbalancercommandoutput.html)

</details>
<details>
<summary>
AttachLoadBalancerToSubnets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/attachloadbalancertosubnetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/attachloadbalancertosubnetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/attachloadbalancertosubnetscommandoutput.html)

</details>
<details>
<summary>
ConfigureHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/configurehealthcheckcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/configurehealthcheckcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/configurehealthcheckcommandoutput.html)

</details>
<details>
<summary>
CreateAppCookieStickinessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/createappcookiestickinesspolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createappcookiestickinesspolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createappcookiestickinesspolicycommandoutput.html)

</details>
<details>
<summary>
CreateLBCookieStickinessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/createlbcookiestickinesspolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createlbcookiestickinesspolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createlbcookiestickinesspolicycommandoutput.html)

</details>
<details>
<summary>
CreateLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/createloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createloadbalancercommandoutput.html)

</details>
<details>
<summary>
CreateLoadBalancerListeners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/createloadbalancerlistenerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createloadbalancerlistenerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createloadbalancerlistenerscommandoutput.html)

</details>
<details>
<summary>
CreateLoadBalancerPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/createloadbalancerpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createloadbalancerpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/createloadbalancerpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/deleteloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/deleteloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/deleteloadbalancercommandoutput.html)

</details>
<details>
<summary>
DeleteLoadBalancerListeners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/deleteloadbalancerlistenerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/deleteloadbalancerlistenerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/deleteloadbalancerlistenerscommandoutput.html)

</details>
<details>
<summary>
DeleteLoadBalancerPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/deleteloadbalancerpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/deleteloadbalancerpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/deleteloadbalancerpolicycommandoutput.html)

</details>
<details>
<summary>
DeregisterInstancesFromLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/deregisterinstancesfromloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/deregisterinstancesfromloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/deregisterinstancesfromloadbalancercommandoutput.html)

</details>
<details>
<summary>
DescribeAccountLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/describeaccountlimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeaccountlimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeaccountlimitscommandoutput.html)

</details>
<details>
<summary>
DescribeInstanceHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/describeinstancehealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeinstancehealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeinstancehealthcommandoutput.html)

</details>
<details>
<summary>
DescribeLoadBalancerAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/describeloadbalancerattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeloadbalancerattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeloadbalancerattributescommandoutput.html)

</details>
<details>
<summary>
DescribeLoadBalancerPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/describeloadbalancerpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeloadbalancerpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeloadbalancerpoliciescommandoutput.html)

</details>
<details>
<summary>
DescribeLoadBalancerPolicyTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/describeloadbalancerpolicytypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeloadbalancerpolicytypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeloadbalancerpolicytypescommandoutput.html)

</details>
<details>
<summary>
DescribeLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/describeloadbalancerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeloadbalancerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describeloadbalancerscommandoutput.html)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/describetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/describetagscommandoutput.html)

</details>
<details>
<summary>
DetachLoadBalancerFromSubnets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/detachloadbalancerfromsubnetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/detachloadbalancerfromsubnetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/detachloadbalancerfromsubnetscommandoutput.html)

</details>
<details>
<summary>
DisableAvailabilityZonesForLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/disableavailabilityzonesforloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/disableavailabilityzonesforloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/disableavailabilityzonesforloadbalancercommandoutput.html)

</details>
<details>
<summary>
EnableAvailabilityZonesForLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/enableavailabilityzonesforloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/enableavailabilityzonesforloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/enableavailabilityzonesforloadbalancercommandoutput.html)

</details>
<details>
<summary>
ModifyLoadBalancerAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/modifyloadbalancerattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/modifyloadbalancerattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/modifyloadbalancerattributescommandoutput.html)

</details>
<details>
<summary>
RegisterInstancesWithLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/registerinstanceswithloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/registerinstanceswithloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/registerinstanceswithloadbalancercommandoutput.html)

</details>
<details>
<summary>
RemoveTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/removetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/removetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/removetagscommandoutput.html)

</details>
<details>
<summary>
SetLoadBalancerListenerSSLCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/setloadbalancerlistenersslcertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/setloadbalancerlistenersslcertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/setloadbalancerlistenersslcertificatecommandoutput.html)

</details>
<details>
<summary>
SetLoadBalancerPoliciesForBackendServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/setloadbalancerpoliciesforbackendservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/setloadbalancerpoliciesforbackendservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/setloadbalancerpoliciesforbackendservercommandoutput.html)

</details>
<details>
<summary>
SetLoadBalancerPoliciesOfListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/classes/setloadbalancerpoliciesoflistenercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/setloadbalancerpoliciesoflistenercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-load-balancing/interfaces/setloadbalancerpoliciesoflistenercommandoutput.html)

</details>
