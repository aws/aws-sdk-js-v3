<!-- generated file, do not edit directly -->

# @aws-sdk/client-payment-cryptography

## Description

AWS SDK for JavaScript PaymentCryptography Client for Node.js, Browser and React Native.

<p>You use the Amazon Web Services Payment Cryptography Control Plane to manage the encryption keys you use for payment-related cryptographic operations. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security-iam.html">Identity and access management</a> in the <i>Amazon Web Services Payment Cryptography User Guide.</i>
</p>
<p>To use encryption keys for payment-related transaction processing and associated cryptographic operations, you use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/Welcome.html">Amazon Web Services Payment Cryptography Data Plane</a>. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations. </p>
<p>All Amazon Web Services Payment Cryptography API calls must be signed and transmitted using Transport Layer Security (TLS). We recommend you always use the latest supported TLS version for logging API requests. </p>
<p>Amazon Web Services Payment Cryptography supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to Amazon Web Services Payment Cryptography, who made the request, when it was made, and so on. If you don't conﬁgure a trail, you can still view the most recent events in the CloudTrail console. For more information, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-payment-cryptography
using your favorite package manager:

- `npm install @aws-sdk/client-payment-cryptography`
- `yarn add @aws-sdk/client-payment-cryptography`
- `pnpm add @aws-sdk/client-payment-cryptography`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PaymentCryptographyClient` and
the commands you need, for example `CreateAliasCommand`:

```js
// ES5 example
const { PaymentCryptographyClient, CreateAliasCommand } = require("@aws-sdk/client-payment-cryptography");
```

```ts
// ES6+ example
import { PaymentCryptographyClient, CreateAliasCommand } from "@aws-sdk/client-payment-cryptography";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PaymentCryptographyClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateAliasCommand(params);
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
import * as AWS from "@aws-sdk/client-payment-cryptography";
const client = new AWS.PaymentCryptography({ region: "REGION" });

// async/await.
try {
  const data = await client.createAlias(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createAlias(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createAlias(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-payment-cryptography` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/createaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/createaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/createaliascommandoutput.html)

</details>
<details>
<summary>
CreateKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/createkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/createkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/createkeycommandoutput.html)

</details>
<details>
<summary>
DeleteAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/deletealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/deletealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/deletealiascommandoutput.html)

</details>
<details>
<summary>
DeleteKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/deletekeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/deletekeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/deletekeycommandoutput.html)

</details>
<details>
<summary>
ExportKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/exportkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/exportkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/exportkeycommandoutput.html)

</details>
<details>
<summary>
GetAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/getaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getaliascommandoutput.html)

</details>
<details>
<summary>
GetKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/getkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getkeycommandoutput.html)

</details>
<details>
<summary>
GetParametersForExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/getparametersforexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getparametersforexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getparametersforexportcommandoutput.html)

</details>
<details>
<summary>
GetParametersForImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/getparametersforimportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getparametersforimportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getparametersforimportcommandoutput.html)

</details>
<details>
<summary>
GetPublicKeyCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/getpublickeycertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getpublickeycertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/getpublickeycertificatecommandoutput.html)

</details>
<details>
<summary>
ImportKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/importkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/importkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/importkeycommandoutput.html)

</details>
<details>
<summary>
ListAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/listaliasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/listaliasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/listaliasescommandoutput.html)

</details>
<details>
<summary>
ListKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/listkeyscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/listkeyscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/listkeyscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
RestoreKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/restorekeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/restorekeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/restorekeycommandoutput.html)

</details>
<details>
<summary>
StartKeyUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/startkeyusagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/startkeyusagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/startkeyusagecommandoutput.html)

</details>
<details>
<summary>
StopKeyUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/stopkeyusagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/stopkeyusagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/stopkeyusagecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/classes/updatealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/updatealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-payment-cryptography/interfaces/updatealiascommandoutput.html)

</details>
