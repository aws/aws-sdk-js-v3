# @aws-sdk/client-global-accelerator

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-global-accelerator/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-global-accelerator)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-global-accelerator.svg)](https://www.npmjs.com/package/@aws-sdk/client-global-accelerator)

## Description

AWS SDK for JavaScript GlobalAccelerator Client for Node.js, Browser and React Native.

<fullname>AWS Global Accelerator</fullname>

<p>This is the <i>AWS Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
AWS Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the
<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/Welcome.html">AWS Global Accelerator Developer Guide</a>.</p>

<p>AWS Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance
of your applications for local and global users. Depending on the type of accelerator you choose, you can
gain additional benefits. </p>
<ul>
<li>
<p>By using a standard accelerator, you can improve availability of your internet applications
that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the AWS
global network. </p>
</li>
<li>
<p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you
can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p>
</li>
</ul>
<important>
<p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
US West (Oregon) Region to create or update accelerators.</p>
</important>
<p>By default, Global Accelerator provides you with two static IP addresses that you associate with your accelerator. With
a standard accelerator, instead of using the
IP addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges
that you bring to Global Accelerator. The static IP addresses are anycast from the AWS edge network. For a standard accelerator,
they distribute incoming application traffic across multiple endpoint resources in multiple AWS Regions, which increases
the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers,
Amazon EC2 instances, or Elastic IP addresses that are located in one AWS Region or multiple Regions. For custom routing
accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that
are virtual private cloud (VPC) subnets.</p>

<important>
<p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you
disable the accelerator and it no longer accepts or routes traffic. However, when you
<i>delete</i> an accelerator, you lose the static IP addresses that
are assigned to it, so you can no longer route traffic by using them. You can use
IAM policies like tag-based permissions with Global Accelerator to limit the users who have
permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p>
</important>
<p>For standard accelerators, Global Accelerator uses the AWS global network to route traffic to the optimal regional endpoint based
on health, client location, and policies that you configure. The service reacts instantly to
changes in health or configuration to ensure that internet traffic from clients is always
directed to healthy endpoints.</p>

<p>For a list of the AWS Regions where Global Accelerator and other services are currently supported, see the
<a href="https://docs.aws.amazon.com/about-aws/global-infrastructure/regional-product-services/">AWS
Region Table</a>.</p>

<p>AWS Global Accelerator includes the following components:</p>
<dl>
<dt>Static IP addresses</dt>
<dd>
<p>Global Accelerator provides you with a set of two static IP addresses that are anycast from the AWS edge
network. If you bring your own IP address range to AWS (BYOIP) to use with a standard accelerator, you
can instead assign IP addresses from your own pool to use with your accelerator. For more information,
see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">
Bring your own IP addresses (BYOIP) in AWS Global Accelerator</a>.</p>
<p>The IP addresses serve as single fixed entry points for your clients. If you already have Elastic
Load Balancing load balancers, Amazon EC2 instances, or Elastic IP address resources set up for your applications,
you can easily add those to a standard accelerator in Global Accelerator. This allows Global Accelerator to use static IP addresses
to access the resources.</p>
<p>The static IP addresses remain assigned to your accelerator for as long as it exists, even
if you disable the accelerator and it no longer accepts or routes traffic.
However, when you <i>delete</i> an accelerator, you lose the
static IP addresses that are assigned to it, so you can no longer route
traffic by using them. You can use IAM policies like tag-based permissions
with Global Accelerator to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p>
</dd>
<dt>Accelerator</dt>
<dd>
<p>An accelerator directs traffic to endpoints over the AWS global network to improve the
performance of your internet applications. Each accelerator includes one or more listeners.</p>
<p>There are two types of accelerators:</p>
<ul>
<li>
<p>A <i>standard</i> accelerator directs traffic to the optimal AWS endpoint based
on several factors, including the user’s location, the health of the endpoint, and the endpoint weights
that you configure. This improves the availability and performance of your applications.
Endpoints can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses.</p>
</li>
<li>
<p>A <i>custom routing</i> accelerator directs traffic to one of possibly thousands of
Amazon EC2 instances running in a single or multiple virtual private
clouds (VPCs). With custom routing, listener ports are mapped to
statically associate port ranges with VPC subnets, which
allows Global Accelerator to determine an EC2 instance IP address at the time of
connection. By default, all port mapping destinations in a VPC
subnet can't receive traffic. You can choose to configure all
destinations in the subnet to receive traffic, or to specify
individual port mappings that can receive traffic.</p>
</li>
</ul>
<p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-accelerator-types.html">Types of accelerators</a>.</p>
</dd>
<dt>DNS name</dt>
<dd>
<p>Global Accelerator assigns each accelerator a default Domain Name System (DNS) name, similar to
<code>a1234567890abcdef.awsglobalaccelerator.com</code>, that points to
the static IP addresses that Global Accelerator assigns to you or that you choose from your
own IP address range. Depending on the use
case, you can use your accelerator's static IP addresses or DNS name to
route traffic to your accelerator, or set up DNS records to route traffic using
your own custom domain name.</p>
</dd>
<dt>Network zone</dt>
<dd>
<p>A network zone services the static IP addresses for your accelerator from a unique IP subnet. Similar to an
AWS Availability Zone, a network zone is an isolated unit with its own set of physical infrastructure.
When you configure an accelerator, by default, Global Accelerator allocates two IPv4 addresses for it. If one IP address from a
network zone becomes unavailable due to IP address blocking by certain client networks, or network
disruptions, then client applications can retry on the healthy static IP address from the other isolated
network zone.</p>
</dd>
<dt>Listener</dt>
<dd>
<p>A listener processes inbound connections from clients to Global Accelerator, based on the port (or port range)
and protocol (or protocols) that you configure. A listener can be configured for TCP, UDP, or both TCP and UDP protocols. Each
listener has one or more endpoint groups associated with it, and traffic is forwarded
to endpoints in one of the groups. You associate endpoint groups with listeners by specifying the Regions that you
want to distribute traffic to. With a standard accelerator, traffic is distributed to optimal endpoints within the endpoint
groups associated with a listener.</p>
</dd>
<dt>Endpoint group</dt>
<dd>
<p>Each endpoint group is associated with a specific AWS Region. Endpoint groups include one or
more endpoints in the Region. With a standard accelerator, you can increase or reduce the percentage of
traffic that would be otherwise directed to an endpoint group by adjusting a
setting called a <i>traffic dial</i>. The traffic dial lets
you easily do performance testing or blue/green deployment testing, for example, for new
releases across different AWS Regions. </p>
</dd>
<dt>Endpoint</dt>
<dd>
<p>An endpoint is a resource that Global Accelerator directs traffic to.</p>
<p>Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP
addresses. An Application Load Balancer endpoint can be internet-facing or internal. Traffic for
standard accelerators is routed to endpoints based on the health of the
endpoint along with configuration options that you choose, such as endpoint
weights. For each endpoint, you can configure weights, which are numbers
that you can use to specify the proportion of traffic to route to each one.
This can be useful, for example, to do performance testing within a
Region.</p>
<p>Endpoints for custom routing accelerators are virtual private cloud (VPC) subnets with one
or many EC2 instances.</p>
</dd>
</dl>

## Installing

To install the this package, simply type add or install @aws-sdk/client-global-accelerator
using your favorite package manager:

- `npm install @aws-sdk/client-global-accelerator`
- `yarn add @aws-sdk/client-global-accelerator`
- `pnpm add @aws-sdk/client-global-accelerator`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GlobalAcceleratorClient` and
the commands you need, for example `AddCustomRoutingEndpointsCommand`:

```js
// ES5 example
const { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator");
```

```ts
// ES6+ example
import { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by difference commands.
const client = new GlobalAcceleratorClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddCustomRoutingEndpointsCommand(params);
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
  // proccess err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-global-accelerator";
const client = new AWS.GlobalAccelerator({ region: "REGION" });

// async/await.
try {
  const data = client.addCustomRoutingEndpoints(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addCustomRoutingEndpoints(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addCustomRoutingEndpoints(params, (err, data) => {
  // proccess err and data.
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-global-accelerator` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
