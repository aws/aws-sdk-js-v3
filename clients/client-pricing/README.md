<!-- generated file, do not edit directly -->

# @aws-sdk/client-pricing

## Description

AWS SDK for JavaScript Pricing Client for Node.js, Browser and React Native.

<p>The Amazon Web Services Price List API is a centralized and convenient way to programmatically
query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List uses standardized product attributes such as <code>Location</code>,
<code>Storage Class</code>, and <code>Operating System</code>, and provides prices at
the SKU level. You can use the Amazon Web Services Price List to do the following:</p>
<ul>
<li>
<p>Build cost control and scenario planning tools</p>
</li>
<li>
<p>Reconcile billing data</p>
</li>
<li>
<p>Forecast future spend for budgeting purposes</p>
</li>
<li>
<p>Provide cost benefit analysis that compare your internal workloads with Amazon Web Services</p>
</li>
</ul>
<p>Use <code>GetServices</code> without a service code to retrieve the service codes for
all Amazon Web Services services, then <code>GetServices</code> with a service code to
retrieve the attribute names for that service. After you have the service code and
attribute names, you can use <code>GetAttributeValues</code> to see what values are
available for an attribute. With the service code and an attribute name and value, you can
use <code>GetProducts</code> to find specific products that you're interested in, such as
an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code>
<code>volumeType</code>.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">Using the
Amazon Web Services Price List API</a> in the <i>Billing User
Guide</i>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-pricing
using your favorite package manager:

- `npm install @aws-sdk/client-pricing`
- `yarn add @aws-sdk/client-pricing`
- `pnpm add @aws-sdk/client-pricing`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PricingClient` and
the commands you need, for example `ListPriceListsCommand`:

```js
// ES5 example
const { PricingClient, ListPriceListsCommand } = require("@aws-sdk/client-pricing");
```

```ts
// ES6+ example
import { PricingClient, ListPriceListsCommand } from "@aws-sdk/client-pricing";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PricingClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListPriceListsCommand(params);
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
import * as AWS from "@aws-sdk/client-pricing";
const client = new AWS.Pricing({ region: "REGION" });

// async/await.
try {
  const data = await client.listPriceLists(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listPriceLists(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listPriceLists(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-pricing` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DescribeServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pricing/command/DescribeServicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/DescribeServicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/DescribeServicesCommandOutput/)

</details>
<details>
<summary>
GetAttributeValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pricing/command/GetAttributeValuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/GetAttributeValuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/GetAttributeValuesCommandOutput/)

</details>
<details>
<summary>
GetPriceListFileUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pricing/command/GetPriceListFileUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/GetPriceListFileUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/GetPriceListFileUrlCommandOutput/)

</details>
<details>
<summary>
GetProducts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pricing/command/GetProductsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/GetProductsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/GetProductsCommandOutput/)

</details>
<details>
<summary>
ListPriceLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pricing/command/ListPriceListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/ListPriceListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pricing/Interface/ListPriceListsCommandOutput/)

</details>
