<!-- generated file, do not edit directly -->

# @aws-sdk/client-partnercentral-revenue-measurement

## Description

AWS SDK for JavaScript PartnerCentralRevenueMeasurement Client for Node.js, Browser and React Native.

<p>AWS Partner Central Revenue Measurement API for creating, managing, and tracking revenue attributions and their allocations with deal entities such as offers and opportunities.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-partnercentral-revenue-measurement`
- `yarn add @aws-sdk/client-partnercentral-revenue-measurement`
- `pnpm add @aws-sdk/client-partnercentral-revenue-measurement`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PartnerCentralRevenueMeasurementClient` and
the commands you need, for example `ListRevenueAttributionsCommand`:

```js
// ES5 example
const { PartnerCentralRevenueMeasurementClient, ListRevenueAttributionsCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement");
```

```ts
// ES6+ example
import { PartnerCentralRevenueMeasurementClient, ListRevenueAttributionsCommand } from "@aws-sdk/client-partnercentral-revenue-measurement";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new PartnerCentralRevenueMeasurementClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListRevenueAttributionsCommand(params);
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

`PartnerCentralRevenueMeasurement` extends `PartnerCentralRevenueMeasurementClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`PartnerCentralRevenueMeasurementClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { PartnerCentralRevenueMeasurement } from "@aws-sdk/client-partnercentral-revenue-measurement";

const client = new PartnerCentralRevenueMeasurement({ region: "REGION" });

// async/await.
try {
  const data = await client.listRevenueAttributions(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listRevenueAttributions(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listRevenueAttributions(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-partnercentral-revenue-measurement` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateMarketplaceRevenueShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/CreateMarketplaceRevenueShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/CreateMarketplaceRevenueShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/CreateMarketplaceRevenueShareCommandOutput/)
</details>
<details>
<summary>
CreateMarketplaceRevenueShareAllocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/CreateMarketplaceRevenueShareAllocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/CreateMarketplaceRevenueShareAllocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/CreateMarketplaceRevenueShareAllocationCommandOutput/)
</details>
<details>
<summary>
CreateRevenueAttribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/CreateRevenueAttributionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/CreateRevenueAttributionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/CreateRevenueAttributionCommandOutput/)
</details>
<details>
<summary>
GetMarketplaceRevenueShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/GetMarketplaceRevenueShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetMarketplaceRevenueShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetMarketplaceRevenueShareCommandOutput/)
</details>
<details>
<summary>
GetMarketplaceRevenueShareAllocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/GetMarketplaceRevenueShareAllocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetMarketplaceRevenueShareAllocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetMarketplaceRevenueShareAllocationCommandOutput/)
</details>
<details>
<summary>
GetRevenueAttribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/GetRevenueAttributionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetRevenueAttributionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetRevenueAttributionCommandOutput/)
</details>
<details>
<summary>
GetRevenueAttributionAllocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/GetRevenueAttributionAllocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetRevenueAttributionAllocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetRevenueAttributionAllocationCommandOutput/)
</details>
<details>
<summary>
GetRevenueAttributionAllocationsTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/GetRevenueAttributionAllocationsTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetRevenueAttributionAllocationsTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/GetRevenueAttributionAllocationsTaskCommandOutput/)
</details>
<details>
<summary>
ListMarketplaceRevenueShareAllocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/ListMarketplaceRevenueShareAllocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListMarketplaceRevenueShareAllocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListMarketplaceRevenueShareAllocationsCommandOutput/)
</details>
<details>
<summary>
ListMarketplaceRevenueShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/ListMarketplaceRevenueSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListMarketplaceRevenueSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListMarketplaceRevenueSharesCommandOutput/)
</details>
<details>
<summary>
ListRevenueAttributionAllocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/ListRevenueAttributionAllocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListRevenueAttributionAllocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListRevenueAttributionAllocationsCommandOutput/)
</details>
<details>
<summary>
ListRevenueAttributions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/ListRevenueAttributionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListRevenueAttributionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListRevenueAttributionsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
StartRevenueAttributionAllocationsTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/StartRevenueAttributionAllocationsTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/StartRevenueAttributionAllocationsTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/StartRevenueAttributionAllocationsTaskCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateMarketplaceRevenueShareAllocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/UpdateMarketplaceRevenueShareAllocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/UpdateMarketplaceRevenueShareAllocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/UpdateMarketplaceRevenueShareAllocationCommandOutput/)
</details>
<details>
<summary>
UpdateRevenueAttribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-revenue-measurement/command/UpdateRevenueAttributionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/UpdateRevenueAttributionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-revenue-measurement/Interface/UpdateRevenueAttributionCommandOutput/)
</details>
