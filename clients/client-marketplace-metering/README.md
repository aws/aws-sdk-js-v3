<!-- generated file, do not edit directly -->

# @aws-sdk/client-marketplace-metering

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-marketplace-metering/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-marketplace-metering)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-marketplace-metering.svg)](https://www.npmjs.com/package/@aws-sdk/client-marketplace-metering)

## Description

AWS SDK for JavaScript MarketplaceMetering Client for Node.js, Browser and React Native.

<fullname>AWS Marketplace Metering Service</fullname>

<p>This reference provides descriptions of the low-level AWS Marketplace Metering Service
API.</p>
<p>AWS Marketplace sellers can use this API to submit usage data for custom usage
dimensions.</p>
<p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">AWS Marketplace metering and entitlement API permissions</a> in the
<i>AWS Marketplace Seller Guide.</i>
</p>
<p>
<b>Submitting Metering Records</b>
</p>
<ul>
<li>
<p>
<i>MeterUsage</i> - Submits the metering record for an AWS
Marketplace product. <code>MeterUsage</code> is called from an EC2 instance or a
container running on EKS or ECS.</p>
</li>
<li>
<p>
<i>BatchMeterUsage</i> - Submits the metering record for a set of
customers. <code>BatchMeterUsage</code> is called from a software-as-a-service
(SaaS) application.</p>
</li>
</ul>
<p>
<b>Accepting New Customers</b>
</p>
<ul>
<li>
<p>
<i>ResolveCustomer</i> - Called by a SaaS application during the
registration process. When a buyer visits your website during the registration
process, the buyer submits a Registration Token through the browser. The
Registration Token is resolved through this API to obtain a
<code>CustomerIdentifier</code>

along with the <code>CustomerAWSAccountId</code> and
<code>ProductCode</code>.</p>

</li>
</ul>
<p>
<b>Entitlement and Metering for Paid Container Products</b>
</p>
<ul>
<li>
<p>Paid container software products sold through AWS Marketplace must integrate
with the AWS Marketplace Metering Service and call the
<code>RegisterUsage</code> operation for software entitlement and metering.
Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call
<code>RegisterUsage</code>, but you can do so if you want to receive usage
data in your seller reports. For more information on using the
<code>RegisterUsage</code> operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p>
</li>
</ul>
<p>
<code>BatchMeterUsage</code> API calls are captured by AWS CloudTrail. You can use
Cloudtrail to verify that the SaaS metering records that you sent are accurate by
searching for records with the <code>eventName</code> of <code>BatchMeterUsage</code>.
You can also use CloudTrail to audit records over time. For more information, see the
<i>
<a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>.</i>
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-marketplace-metering
using your favorite package manager:

- `npm install @aws-sdk/client-marketplace-metering`
- `yarn add @aws-sdk/client-marketplace-metering`
- `pnpm add @aws-sdk/client-marketplace-metering`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MarketplaceMeteringClient` and
the commands you need, for example `BatchMeterUsageCommand`:

```js
// ES5 example
const { MarketplaceMeteringClient, BatchMeterUsageCommand } = require("@aws-sdk/client-marketplace-metering");
```

```ts
// ES6+ example
import { MarketplaceMeteringClient, BatchMeterUsageCommand } from "@aws-sdk/client-marketplace-metering";
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
const command = new BatchMeterUsageCommand(params);
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
  const data = await client.batchMeterUsage(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchMeterUsage(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchMeterUsage(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-marketplace-metering` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
