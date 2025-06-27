<!-- generated file, do not edit directly -->

# @aws-sdk/client-global-accelerator

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
on Amazon Web Services CLI commands.</p>
</important>
<p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses
are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack,
Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses.
With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure
these entry points to be IPv4 addresses from your own IP address ranges that you bring to Global Accelerator (BYOIP). </p>
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

To install this package, simply type add or install @aws-sdk/client-global-accelerator
using your favorite package manager:

- `npm install @aws-sdk/client-global-accelerator`
- `yarn add @aws-sdk/client-global-accelerator`
- `pnpm add @aws-sdk/client-global-accelerator`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GlobalAcceleratorClient` and
the commands you need, for example `ListAcceleratorsCommand`:

```js
// ES5 example
const { GlobalAcceleratorClient, ListAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator");
```

```ts
// ES6+ example
import { GlobalAcceleratorClient, ListAcceleratorsCommand } from "@aws-sdk/client-global-accelerator";
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
const command = new ListAcceleratorsCommand(params);
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
  const data = await client.listAccelerators(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAccelerators(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAccelerators(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-global-accelerator` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddCustomRoutingEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/AddCustomRoutingEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/AddCustomRoutingEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/AddCustomRoutingEndpointsCommandOutput/)

</details>
<details>
<summary>
AddEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/AddEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/AddEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/AddEndpointsCommandOutput/)

</details>
<details>
<summary>
AdvertiseByoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/AdvertiseByoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/AdvertiseByoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/AdvertiseByoipCidrCommandOutput/)

</details>
<details>
<summary>
AllowCustomRoutingTraffic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/AllowCustomRoutingTrafficCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/AllowCustomRoutingTrafficCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/AllowCustomRoutingTrafficCommandOutput/)

</details>
<details>
<summary>
CreateAccelerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/CreateAcceleratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateAcceleratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateAcceleratorCommandOutput/)

</details>
<details>
<summary>
CreateCrossAccountAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/CreateCrossAccountAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateCrossAccountAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateCrossAccountAttachmentCommandOutput/)

</details>
<details>
<summary>
CreateCustomRoutingAccelerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/CreateCustomRoutingAcceleratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateCustomRoutingAcceleratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateCustomRoutingAcceleratorCommandOutput/)

</details>
<details>
<summary>
CreateCustomRoutingEndpointGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/CreateCustomRoutingEndpointGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateCustomRoutingEndpointGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateCustomRoutingEndpointGroupCommandOutput/)

</details>
<details>
<summary>
CreateCustomRoutingListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/CreateCustomRoutingListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateCustomRoutingListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateCustomRoutingListenerCommandOutput/)

</details>
<details>
<summary>
CreateEndpointGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/CreateEndpointGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateEndpointGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateEndpointGroupCommandOutput/)

</details>
<details>
<summary>
CreateListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/CreateListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/CreateListenerCommandOutput/)

</details>
<details>
<summary>
DeleteAccelerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DeleteAcceleratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteAcceleratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteAcceleratorCommandOutput/)

</details>
<details>
<summary>
DeleteCrossAccountAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DeleteCrossAccountAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteCrossAccountAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteCrossAccountAttachmentCommandOutput/)

</details>
<details>
<summary>
DeleteCustomRoutingAccelerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DeleteCustomRoutingAcceleratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteCustomRoutingAcceleratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteCustomRoutingAcceleratorCommandOutput/)

</details>
<details>
<summary>
DeleteCustomRoutingEndpointGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DeleteCustomRoutingEndpointGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteCustomRoutingEndpointGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteCustomRoutingEndpointGroupCommandOutput/)

</details>
<details>
<summary>
DeleteCustomRoutingListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DeleteCustomRoutingListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteCustomRoutingListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteCustomRoutingListenerCommandOutput/)

</details>
<details>
<summary>
DeleteEndpointGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DeleteEndpointGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteEndpointGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteEndpointGroupCommandOutput/)

</details>
<details>
<summary>
DeleteListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DeleteListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeleteListenerCommandOutput/)

</details>
<details>
<summary>
DenyCustomRoutingTraffic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DenyCustomRoutingTrafficCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DenyCustomRoutingTrafficCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DenyCustomRoutingTrafficCommandOutput/)

</details>
<details>
<summary>
DeprovisionByoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DeprovisionByoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeprovisionByoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DeprovisionByoipCidrCommandOutput/)

</details>
<details>
<summary>
DescribeAccelerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeAcceleratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeAcceleratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeAcceleratorCommandOutput/)

</details>
<details>
<summary>
DescribeAcceleratorAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeAcceleratorAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeAcceleratorAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeAcceleratorAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeCrossAccountAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeCrossAccountAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCrossAccountAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCrossAccountAttachmentCommandOutput/)

</details>
<details>
<summary>
DescribeCustomRoutingAccelerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeCustomRoutingAcceleratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCustomRoutingAcceleratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCustomRoutingAcceleratorCommandOutput/)

</details>
<details>
<summary>
DescribeCustomRoutingAcceleratorAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeCustomRoutingAcceleratorAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCustomRoutingAcceleratorAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCustomRoutingAcceleratorAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeCustomRoutingEndpointGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeCustomRoutingEndpointGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCustomRoutingEndpointGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCustomRoutingEndpointGroupCommandOutput/)

</details>
<details>
<summary>
DescribeCustomRoutingListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeCustomRoutingListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCustomRoutingListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeCustomRoutingListenerCommandOutput/)

</details>
<details>
<summary>
DescribeEndpointGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeEndpointGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeEndpointGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeEndpointGroupCommandOutput/)

</details>
<details>
<summary>
DescribeListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/DescribeListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/DescribeListenerCommandOutput/)

</details>
<details>
<summary>
ListAccelerators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListAcceleratorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListAcceleratorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListAcceleratorsCommandOutput/)

</details>
<details>
<summary>
ListByoipCidrs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListByoipCidrsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListByoipCidrsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListByoipCidrsCommandOutput/)

</details>
<details>
<summary>
ListCrossAccountAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListCrossAccountAttachmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCrossAccountAttachmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCrossAccountAttachmentsCommandOutput/)

</details>
<details>
<summary>
ListCrossAccountResourceAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListCrossAccountResourceAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCrossAccountResourceAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCrossAccountResourceAccountsCommandOutput/)

</details>
<details>
<summary>
ListCrossAccountResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListCrossAccountResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCrossAccountResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCrossAccountResourcesCommandOutput/)

</details>
<details>
<summary>
ListCustomRoutingAccelerators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListCustomRoutingAcceleratorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingAcceleratorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingAcceleratorsCommandOutput/)

</details>
<details>
<summary>
ListCustomRoutingEndpointGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListCustomRoutingEndpointGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingEndpointGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingEndpointGroupsCommandOutput/)

</details>
<details>
<summary>
ListCustomRoutingListeners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListCustomRoutingListenersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingListenersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingListenersCommandOutput/)

</details>
<details>
<summary>
ListCustomRoutingPortMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListCustomRoutingPortMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingPortMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingPortMappingsCommandOutput/)

</details>
<details>
<summary>
ListCustomRoutingPortMappingsByDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListCustomRoutingPortMappingsByDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingPortMappingsByDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListCustomRoutingPortMappingsByDestinationCommandOutput/)

</details>
<details>
<summary>
ListEndpointGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListEndpointGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListEndpointGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListEndpointGroupsCommandOutput/)

</details>
<details>
<summary>
ListListeners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListListenersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListListenersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListListenersCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ProvisionByoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/ProvisionByoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ProvisionByoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/ProvisionByoipCidrCommandOutput/)

</details>
<details>
<summary>
RemoveCustomRoutingEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/RemoveCustomRoutingEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/RemoveCustomRoutingEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/RemoveCustomRoutingEndpointsCommandOutput/)

</details>
<details>
<summary>
RemoveEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/RemoveEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/RemoveEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/RemoveEndpointsCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAccelerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UpdateAcceleratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateAcceleratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateAcceleratorCommandOutput/)

</details>
<details>
<summary>
UpdateAcceleratorAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UpdateAcceleratorAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateAcceleratorAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateAcceleratorAttributesCommandOutput/)

</details>
<details>
<summary>
UpdateCrossAccountAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UpdateCrossAccountAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateCrossAccountAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateCrossAccountAttachmentCommandOutput/)

</details>
<details>
<summary>
UpdateCustomRoutingAccelerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UpdateCustomRoutingAcceleratorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateCustomRoutingAcceleratorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateCustomRoutingAcceleratorCommandOutput/)

</details>
<details>
<summary>
UpdateCustomRoutingAcceleratorAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UpdateCustomRoutingAcceleratorAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateCustomRoutingAcceleratorAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateCustomRoutingAcceleratorAttributesCommandOutput/)

</details>
<details>
<summary>
UpdateCustomRoutingListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UpdateCustomRoutingListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateCustomRoutingListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateCustomRoutingListenerCommandOutput/)

</details>
<details>
<summary>
UpdateEndpointGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UpdateEndpointGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateEndpointGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateEndpointGroupCommandOutput/)

</details>
<details>
<summary>
UpdateListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/UpdateListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/UpdateListenerCommandOutput/)

</details>
<details>
<summary>
WithdrawByoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/global-accelerator/command/WithdrawByoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/WithdrawByoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-global-accelerator/Interface/WithdrawByoipCidrCommandOutput/)

</details>
