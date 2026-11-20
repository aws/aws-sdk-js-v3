<!-- generated file, do not edit directly -->

# @aws-sdk/client-payments

## Description

AWS SDK for JavaScript Payments Client for Node.js, Browser and React Native.

<p>Amazon Web Services Payments manages how money moves between you and Amazon Web Services. It holds the payment instruments you use to pay Amazon Web Services and to receive money from Amazon Web Services, such as cards and bank accounts. It collects payment for your Amazon Web Services invoices, applies your payments and credit memos to them, and returns refunds.</p> <p>A payment instrument is a channel that moves money between you and Amazon Web Services, and its payment method is the kind of instrument, such as a card or a bank account. A financial record is an invoice or credit memo. It shows how much of its amount is outstanding, processing, settled, and canceled as Amazon Web Services applies payments and credits.</p> <p>With the Amazon Web Services Payments API, you can read your financial records and account balances, and read your payment instruments and their status.</p> <p>The Amazon Web Services Payments API provides the following endpoint:</p> <p> <code>https://payments.us-east-1.api.aws</code> </p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-payments`
- `yarn add @aws-sdk/client-payments`
- `pnpm add @aws-sdk/client-payments`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PaymentsClient` and
the commands you need, for example `ListPaymentInstrumentsCommand`:

```js
// ES5 example
const { PaymentsClient, ListPaymentInstrumentsCommand } = require("@aws-sdk/client-payments");
```

```ts
// ES6+ example
import { PaymentsClient, ListPaymentInstrumentsCommand } from "@aws-sdk/client-payments";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new PaymentsClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListPaymentInstrumentsCommand(params);
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

`Payments` extends `PaymentsClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`PaymentsClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { Payments } from "@aws-sdk/client-payments";

const client = new Payments({ region: "REGION" });

// async/await.
try {
  const data = await client.listPaymentInstruments(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listPaymentInstruments(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listPaymentInstruments(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-payments` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchGetFinancialRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payments/command/BatchGetFinancialRecordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/BatchGetFinancialRecordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/BatchGetFinancialRecordCommandOutput/)
</details>
<details>
<summary>
GetAccountBalance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payments/command/GetAccountBalanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/GetAccountBalanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/GetAccountBalanceCommandOutput/)
</details>
<details>
<summary>
GetFinancialRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payments/command/GetFinancialRecordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/GetFinancialRecordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/GetFinancialRecordCommandOutput/)
</details>
<details>
<summary>
GetPaymentInstrument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payments/command/GetPaymentInstrumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/GetPaymentInstrumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/GetPaymentInstrumentCommandOutput/)
</details>
<details>
<summary>
ListFinancialRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payments/command/ListFinancialRecordsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/ListFinancialRecordsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/ListFinancialRecordsCommandOutput/)
</details>
<details>
<summary>
ListPaymentInstruments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payments/command/ListPaymentInstrumentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/ListPaymentInstrumentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payments/Interface/ListPaymentInstrumentsCommandOutput/)
</details>
