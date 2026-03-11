<!-- generated file, do not edit directly -->

# @aws-sdk/client-managedblockchain-query

## Description

AWS SDK for JavaScript ManagedBlockchainQuery Client for Node.js, Browser and React Native.

<p>Amazon Managed Blockchain (AMB) Query provides you with convenient access to multi-blockchain network data, which makes
it easier for you to extract contextual data related to blockchain activity. You can use AMB Query to
read data from public blockchain networks, such as Bitcoin Mainnet and Ethereum Mainnet. You can
also get information such as the current and historical balances of addresses, or you can get a
list of blockchain transactions for a given time period. Additionally, you can get details of a
given transaction, such as transaction events, which you can further analyze or use in business
logic for your applications.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-managedblockchain-query`
- `yarn add @aws-sdk/client-managedblockchain-query`
- `pnpm add @aws-sdk/client-managedblockchain-query`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ManagedBlockchainQueryClient` and
the commands you need, for example `ListTokenBalancesCommand`:

```js
// ES5 example
const { ManagedBlockchainQueryClient, ListTokenBalancesCommand } = require("@aws-sdk/client-managedblockchain-query");
```

```ts
// ES6+ example
import { ManagedBlockchainQueryClient, ListTokenBalancesCommand } from "@aws-sdk/client-managedblockchain-query";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new ManagedBlockchainQueryClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListTokenBalancesCommand(params);
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

`ManagedBlockchainQuery` extends `ManagedBlockchainQueryClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`ManagedBlockchainQueryClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { ManagedBlockchainQuery } from "@aws-sdk/client-managedblockchain-query";

const client = new ManagedBlockchainQuery({ region: "REGION" });

// async/await.
try {
  const data = await client.listTokenBalances(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTokenBalances(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listTokenBalances(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-managedblockchain-query` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchGetTokenBalance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/BatchGetTokenBalanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/BatchGetTokenBalanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/BatchGetTokenBalanceCommandOutput/)
</details>
<details>
<summary>
GetAssetContract
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/GetAssetContractCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/GetAssetContractCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/GetAssetContractCommandOutput/)
</details>
<details>
<summary>
GetTokenBalance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/GetTokenBalanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/GetTokenBalanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/GetTokenBalanceCommandOutput/)
</details>
<details>
<summary>
GetTransaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/GetTransactionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/GetTransactionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/GetTransactionCommandOutput/)
</details>
<details>
<summary>
ListAssetContracts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/ListAssetContractsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListAssetContractsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListAssetContractsCommandOutput/)
</details>
<details>
<summary>
ListFilteredTransactionEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/ListFilteredTransactionEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListFilteredTransactionEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListFilteredTransactionEventsCommandOutput/)
</details>
<details>
<summary>
ListTokenBalances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/ListTokenBalancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListTokenBalancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListTokenBalancesCommandOutput/)
</details>
<details>
<summary>
ListTransactionEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/ListTransactionEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListTransactionEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListTransactionEventsCommandOutput/)
</details>
<details>
<summary>
ListTransactions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/managedblockchain-query/command/ListTransactionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListTransactionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-managedblockchain-query/Interface/ListTransactionsCommandOutput/)
</details>
