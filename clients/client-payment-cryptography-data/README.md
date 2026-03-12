<!-- generated file, do not edit directly -->

# @aws-sdk/client-payment-cryptography-data

## Description

AWS SDK for JavaScript PaymentCryptographyData Client for Node.js, Browser and React Native.

<p>You use the Amazon Web Services Payment Cryptography Data Plane to manage how encryption keys are used for payment-related transaction processing and associated cryptographic operations. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations in Amazon Web Services Payment Cryptography. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.html">Data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>To manage your encryption keys, you use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/Welcome.html">Amazon Web Services Payment Cryptography Control Plane</a>. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. </p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-payment-cryptography-data`
- `yarn add @aws-sdk/client-payment-cryptography-data`
- `pnpm add @aws-sdk/client-payment-cryptography-data`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PaymentCryptographyDataClient` and
the commands you need, for example `DecryptDataCommand`:

```js
// ES5 example
const { PaymentCryptographyDataClient, DecryptDataCommand } = require("@aws-sdk/client-payment-cryptography-data");
```

```ts
// ES6+ example
import { PaymentCryptographyDataClient, DecryptDataCommand } from "@aws-sdk/client-payment-cryptography-data";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new PaymentCryptographyDataClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new DecryptDataCommand(params);
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

`PaymentCryptographyData` extends `PaymentCryptographyDataClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`PaymentCryptographyDataClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { PaymentCryptographyData } from "@aws-sdk/client-payment-cryptography-data";

const client = new PaymentCryptographyData({ region: "REGION" });

// async/await.
try {
  const data = await client.decryptData(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .decryptData(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.decryptData(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-payment-cryptography-data` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DecryptData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/DecryptDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/DecryptDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/DecryptDataCommandOutput/)
</details>
<details>
<summary>
EncryptData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/EncryptDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/EncryptDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/EncryptDataCommandOutput/)
</details>
<details>
<summary>
GenerateAs2805KekValidation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/GenerateAs2805KekValidationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GenerateAs2805KekValidationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GenerateAs2805KekValidationCommandOutput/)
</details>
<details>
<summary>
GenerateCardValidationData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/GenerateCardValidationDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GenerateCardValidationDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GenerateCardValidationDataCommandOutput/)
</details>
<details>
<summary>
GenerateMac
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/GenerateMacCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GenerateMacCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GenerateMacCommandOutput/)
</details>
<details>
<summary>
GenerateMacEmvPinChange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/GenerateMacEmvPinChangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GenerateMacEmvPinChangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GenerateMacEmvPinChangeCommandOutput/)
</details>
<details>
<summary>
GeneratePinData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/GeneratePinDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GeneratePinDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/GeneratePinDataCommandOutput/)
</details>
<details>
<summary>
ReEncryptData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/ReEncryptDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/ReEncryptDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/ReEncryptDataCommandOutput/)
</details>
<details>
<summary>
TranslateKeyMaterial
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/TranslateKeyMaterialCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/TranslateKeyMaterialCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/TranslateKeyMaterialCommandOutput/)
</details>
<details>
<summary>
TranslatePinData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/TranslatePinDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/TranslatePinDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/TranslatePinDataCommandOutput/)
</details>
<details>
<summary>
VerifyAuthRequestCryptogram
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/VerifyAuthRequestCryptogramCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/VerifyAuthRequestCryptogramCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/VerifyAuthRequestCryptogramCommandOutput/)
</details>
<details>
<summary>
VerifyCardValidationData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/VerifyCardValidationDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/VerifyCardValidationDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/VerifyCardValidationDataCommandOutput/)
</details>
<details>
<summary>
VerifyMac
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/VerifyMacCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/VerifyMacCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/VerifyMacCommandOutput/)
</details>
<details>
<summary>
VerifyPinData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/payment-cryptography-data/command/VerifyPinDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/VerifyPinDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-payment-cryptography-data/Interface/VerifyPinDataCommandOutput/)
</details>
