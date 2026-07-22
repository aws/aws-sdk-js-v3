<!-- generated file, do not edit directly -->

# @aws-sdk/client-sustainability

## Description

AWS SDK for JavaScript Sustainability Client for Node.js, Browser and React Native.

<p>The AWS Sustainability service provides programmatic access to estimated environmental impact data for your Amazon Web Services usage. Use the AWS Sustainability service to retrieve, analyze, and track the environmental impact of your cloud infrastructure over time. </p> <p>With the AWS Sustainability service, you can:</p> <ul> <li> <p>Retrieve estimated carbon emissions and water allocation for your Amazon Web Services usage across different time periods </p> </li> <li> <p>Group environmental impact data by dimensions such as account, region, and service</p> </li> <li> <p>Filter environmental impact data to focus on specific accounts, regions, or services</p> </li> <li> <p>Access multiple carbon emissions calculation methodologies including Location-based Method (LBM) and Market-based Method (MBM) </p> </li> <li> <p>Aggregate environmental impact data at various time granularities including monthly, quarterly, and yearly periods </p> </li> </ul> <p> The API supports pagination for efficient data retrieval and provides dimension values to help you understand the available grouping and filtering options for your account. </p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-sustainability`
- `yarn add @aws-sdk/client-sustainability`
- `pnpm add @aws-sdk/client-sustainability`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SustainabilityClient` and
the commands you need, for example `GetEstimatedCarbonEmissionsCommand`:

```js
// ES5 example
const { SustainabilityClient, GetEstimatedCarbonEmissionsCommand } = require("@aws-sdk/client-sustainability");
```

```ts
// ES6+ example
import { SustainabilityClient, GetEstimatedCarbonEmissionsCommand } from "@aws-sdk/client-sustainability";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new SustainabilityClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new GetEstimatedCarbonEmissionsCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`Sustainability` extends `SustainabilityClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`SustainabilityClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { Sustainability } from "@aws-sdk/client-sustainability";

const client = new Sustainability({ region: "REGION" });

// async/await.
try {
  const data = await client.getEstimatedCarbonEmissions(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getEstimatedCarbonEmissions(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.getEstimatedCarbonEmissions(params, (err, data) => {
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

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sustainability` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
GetEstimatedCarbonEmissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sustainability/command/GetEstimatedCarbonEmissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sustainability/Interface/GetEstimatedCarbonEmissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sustainability/Interface/GetEstimatedCarbonEmissionsCommandOutput/)
</details>
<details>
<summary>
GetEstimatedCarbonEmissionsDimensionValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sustainability/command/GetEstimatedCarbonEmissionsDimensionValuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sustainability/Interface/GetEstimatedCarbonEmissionsDimensionValuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sustainability/Interface/GetEstimatedCarbonEmissionsDimensionValuesCommandOutput/)
</details>
<details>
<summary>
GetEstimatedWaterAllocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sustainability/command/GetEstimatedWaterAllocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sustainability/Interface/GetEstimatedWaterAllocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sustainability/Interface/GetEstimatedWaterAllocationCommandOutput/)
</details>
<details>
<summary>
GetEstimatedWaterAllocationDimensionValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sustainability/command/GetEstimatedWaterAllocationDimensionValuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sustainability/Interface/GetEstimatedWaterAllocationDimensionValuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sustainability/Interface/GetEstimatedWaterAllocationDimensionValuesCommandOutput/)
</details>
