<!-- generated file, do not edit directly -->

# @aws-sdk/client-global-accelerator

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-global-accelerator/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-global-accelerator)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-global-accelerator.svg)](https://www.npmjs.com/package/@aws-sdk/client-global-accelerator)

## Description

AWS SDK for JavaScript GlobalAccelerator Client for Node.js, Browser and React Native.

<fullname>Global Accelerator</fullname>

<p>This is the <i>Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the
<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>
<p>Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance
of your applications for local and global users. Depending on the type of accelerator you choose, you can
gain additional benefits. </p>
<ul>
<li>
<p>By using a standard accelerator, you can improve availability of your internet applications
that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services
global network. </p>
</li>
<li>
<p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you
can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p>
</li>
</ul>
<important>
<p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
on AWS CLI commands.</p>
</important>

<p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses
are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack,
Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses.
With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure
these entry points to be IPv4 addresses from your own IP address ranges that you bring toGlobal Accelerator (BYOIP). </p>

<p>For a standard accelerator,
they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases
the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers,
Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing
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
<p>For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based
on health, client location, and policies that you configure. The service reacts instantly to
changes in health or configuration to ensure that internet traffic from clients is always
directed to healthy endpoints.</p>
<p>For more information about understanding and using Global Accelerator, see the
<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>

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
// a client can be shared by different commands.
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
  // process err and data.
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
  const data = await client.addCustomRoutingEndpoints(params);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-global-accelerator` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
