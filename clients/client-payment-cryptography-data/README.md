<!-- generated file, do not edit directly -->

# @aws-sdk/client-payment-cryptography-data

## Description

AWS SDK for JavaScript PaymentCryptographyData Client for Node.js, Browser and React Native.

<p>You use the Amazon Web Services Payment Cryptography Data Plane to manage how encryption keys are used for payment-related transaction processing and associated cryptographic operations. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations in Amazon Web Services Payment Cryptography. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.html">Data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
<p>To manage your encryption keys, you use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/Welcome.html">Amazon Web Services Payment Cryptography Control Plane</a>. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. </p>

## Installing

To install this package, simply type add or install @aws-sdk/client-payment-cryptography-data
using your favorite package manager:

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

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PaymentCryptographyDataClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new DecryptDataCommand(params);
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
import * as AWS from "@aws-sdk/client-payment-cryptography-data";
const client = new AWS.PaymentCryptographyData({ region: "REGION" });

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

// callbacks.
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
