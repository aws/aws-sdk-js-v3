<!-- generated file, do not edit directly -->

# @aws-sdk/client-marketplace-metering

## Description

AWS SDK for JavaScript MarketplaceMetering Client for Node.js, Browser and React Native.

<fullname>Amazon Web Services Marketplace Metering Service</fullname>

<p>This reference provides descriptions of the low-level Marketplace Metering Service API.</p>
<p>Amazon Web Services Marketplace sellers can use this API to submit usage data for custom usage
dimensions.</p>
<p>For information about the permissions that you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">Amazon Web Services Marketplace metering and entitlement API permissions</a> in the <i>Amazon Web Services Marketplace
Seller Guide.</i>
</p>
<p>
<b>Submitting metering records</b>
</p>
<p>
<i>MeterUsage</i>
</p>
<ul>
<li>
<p>Submits the metering record for an Amazon Web Services Marketplace product.</p>
</li>
<li>
<p>Called from: Amazon Elastic Compute Cloud (Amazon EC2) instance or a container running on either
Amazon Elastic Kubernetes Service (Amazon EKS) or Amazon Elastic Container Service (Amazon ECS)</p>
</li>
<li>
<p>Supported product types: Amazon Machine Images (AMIs) and containers</p>
</li>
<li>
<p>Vendor-metered tagging: Supported allocation tagging</p>
</li>
</ul>
<p>
<i>BatchMeterUsage</i>
</p>
<ul>
<li>
<p>Submits the metering record for a set of customers.
<code>BatchMeterUsage</code> API calls are captured by CloudTrail. You can use
CloudTrail to verify that the software as a subscription (SaaS) metering records that
you sent are accurate by searching for records with the <code>eventName</code>
of <code>BatchMeterUsage</code>. You can also use CloudTrail to audit records over
time. For more information, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">CloudTrail User
Guide</a>.</p>
</li>
<li>
<p>Called from: SaaS applications</p>
</li>
<li>
<p>Supported product type: SaaS</p>
</li>
<li>
<p>Vendor-metered tagging: Supports allocation tagging</p>
</li>
</ul>
<p>
<b>Accepting new customers</b>
</p>
<p>
<i>ResolveCustomer</i>
</p>
<ul>
<li>
<p>Resolves the registration token that the buyer submits through the browser
during the registration process. Obtains a <code>CustomerIdentifier</code> along
with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p>
</li>
<li>
<p>Called from: SaaS application during the registration process</p>
</li>
<li>
<p>Supported product type: SaaS</p>
</li>
<li>
<p>Vendor-metered tagging: Not applicable</p>
</li>
</ul>
<p>
<b>Entitlement and metering for paid container
products</b>
</p>
<p>
<i>RegisteredUsage</i>
</p>
<ul>
<li>
<p>Provides software entitlement and metering. Paid container software products
sold through Amazon Web Services Marketplace must integrate with the Marketplace Metering Service and call the
<code>RegisterUsage</code> operation. Free and Bring Your Own License model
(BYOL) products for Amazon ECS or Amazon EKS aren't required to call
<code>RegisterUsage</code>. However, you can do so if you want to receive
usage data in your seller reports. For more information about using the
<code>RegisterUsage</code> operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-based products</a>.</p>
</li>
<li>
<p>Called from: Paid container software products</p>
</li>
<li>
<p>Supported product type: Containers</p>
</li>
<li>
<p>Vendor-metered tagging: Not applicable</p>
</li>
</ul>
<p>
<b>Entitlement custom metering for container
products</b>
</p>
<ul>
<li>
<p>MeterUsage API is available in GovCloud Regions but only supports AMI
FCP products in GovCloud Regions. Flexible Consumption Pricing (FCP) Container
products aren’t supported in GovCloud Regions: us-gov-west-1 and us-gov-east-1.
For more information, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-based products</a>.</p>
</li>
<li>
<p>Custom metering for container products are called using the
MeterUsage API. The API is used for FCP AMI and FCP Container product
metering.</p>
</li>
</ul>
<p>
<b>Custom metering for Amazon EKS is available in 17
Amazon Web Services Regions</b>
</p>
<ul>
<li>
<p>The metering service supports Amazon ECS and EKS for Flexible Consumption Pricing
(FCP) products using MeterUsage API. Amazon ECS is supported in all
Amazon Web Services Regions that MeterUsage API is available except for
GovCloud.</p>
</li>
<li>
<p>Amazon EKS is supported in the following: us-east-1, us-east-2, us-west-1,
us-west-2, eu-west-1, eu-central-1, eu-west-2, eu-west-3, eu-north-1, ap-east-1,
ap-southeast-1, ap-northeast-1, ap-southeast-2, ap-northeast-2, ap-south-1,
ca-central-1, sa-east-1.</p>
<note>
<p>For questions about adding Amazon Web Services Regions for metering, contact <a href="mailto://aws.amazon.com/marketplace/management/contact-us/">Amazon Web Services
Marketplace Seller Operations</a>.</p>
</note>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-marketplace-metering
using your favorite package manager:

- `npm install @aws-sdk/client-marketplace-metering`
- `yarn add @aws-sdk/client-marketplace-metering`
- `pnpm add @aws-sdk/client-marketplace-metering`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MarketplaceMeteringClient` and
the commands you need, for example `ResolveCustomerCommand`:

```js
// ES5 example
const { MarketplaceMeteringClient, ResolveCustomerCommand } = require("@aws-sdk/client-marketplace-metering");
```

```ts
// ES6+ example
import { MarketplaceMeteringClient, ResolveCustomerCommand } from "@aws-sdk/client-marketplace-metering";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MarketplaceMeteringClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ResolveCustomerCommand(params);
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
import * as AWS from "@aws-sdk/client-marketplace-metering";
const client = new AWS.MarketplaceMetering({ region: "REGION" });

// async/await.
try {
  const data = await client.resolveCustomer(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .resolveCustomer(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.resolveCustomer(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-marketplace-metering` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchMeterUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/marketplace-metering/command/BatchMeterUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-metering/Interface/BatchMeterUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-metering/Interface/BatchMeterUsageCommandOutput/)

</details>
<details>
<summary>
MeterUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/marketplace-metering/command/MeterUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-metering/Interface/MeterUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-metering/Interface/MeterUsageCommandOutput/)

</details>
<details>
<summary>
RegisterUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/marketplace-metering/command/RegisterUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-metering/Interface/RegisterUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-metering/Interface/RegisterUsageCommandOutput/)

</details>
<details>
<summary>
ResolveCustomer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/marketplace-metering/command/ResolveCustomerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-metering/Interface/ResolveCustomerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-metering/Interface/ResolveCustomerCommandOutput/)

</details>
