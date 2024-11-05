<!-- generated file, do not edit directly -->

# @aws-sdk/client-kms

## Description

AWS SDK for JavaScript KMS Client for Node.js, Browser and React Native.

<fullname>Key Management Service</fullname>

<p>Key Management Service (KMS) is an encryption and key management web service. This guide describes
the KMS operations that you can call programmatically. For general information about KMS,
see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/">
<i>Key Management Service Developer Guide</i>
</a>.</p>
<note>
<p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p>
<p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming
languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a
convenient way to create programmatic access to KMS and other Amazon Web Services services. For example,
the SDKs take care of tasks such as signing requests (see below), managing errors, and
retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to
download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
Services</a>.</p>
</note>
<p>We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to KMS.</p>
<p>If you need to use FIPS 140-2 validated cryptographic modules when communicating with
Amazon Web Services, use the FIPS endpoint in your preferred Amazon Web Services Region. For more information about the
available FIPS endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/kms.html#kms_region">Service endpoints</a> in the Key Management Service topic of
the <i>Amazon Web Services General Reference</i>.</p>
<p>All KMS API calls must be signed and be transmitted using Transport Layer Security
(TLS). KMS recommends you always use the latest supported TLS version. Clients must also
support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman
(DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7
and later support these modes.</p>
<p>
<b>Signing Requests</b>
</p>
<p>Requests must be signed using an access key ID and a secret access key. We strongly
recommend that you do not use your Amazon Web Services account root access key ID and secret access key for
everyday work. You can use the access key ID and secret access key for an IAM user or you
can use the Security Token Service (STS) to generate temporary security credentials and use those to sign
requests. </p>
<p>All KMS requests must be signed with <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
<p>
<b>Logging API Requests</b>
</p>
<p>KMS supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your
Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the
information collected by CloudTrail, you can determine what requests were made to KMS, who made
the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it
on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p>
<p>
<b>Additional Resources</b>
</p>
<p>For more information about credentials and request signing, see the following:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">Amazon Web Services
Security Credentials</a> - This topic provides general information about the types
of credentials used to access Amazon Web Services.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary
Security Credentials</a> - This section of the <i>IAM User Guide</i>
describes how to create and use temporary security credentials.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version
4 Signing Process</a> - This set of topics walks you through the process of signing
a request using an access key ID and a secret access key.</p>
</li>
</ul>
<p>
<b>Commonly Used API Operations</b>
</p>
<p>Of the API operations discussed in this guide, the following will prove the most useful
for most applications. You will likely perform operations other than these, such as creating
keys and assigning policies, by using the console.</p>
<ul>
<li>
<p>
<a>Encrypt</a>
</p>
</li>
<li>
<p>
<a>Decrypt</a>
</p>
</li>
<li>
<p>
<a>GenerateDataKey</a>
</p>
</li>
<li>
<p>
<a>GenerateDataKeyWithoutPlaintext</a>
</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-kms
using your favorite package manager:

- `npm install @aws-sdk/client-kms`
- `yarn add @aws-sdk/client-kms`
- `pnpm add @aws-sdk/client-kms`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `KMSClient` and
the commands you need, for example `ListAliasesCommand`:

```js
// ES5 example
const { KMSClient, ListAliasesCommand } = require("@aws-sdk/client-kms");
```

```ts
// ES6+ example
import { KMSClient, ListAliasesCommand } from "@aws-sdk/client-kms";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new KMSClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAliasesCommand(params);
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
import * as AWS from "@aws-sdk/client-kms";
const client = new AWS.KMS({ region: "REGION" });

// async/await.
try {
  const data = await client.listAliases(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAliases(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAliases(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-kms` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelKeyDeletion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/CancelKeyDeletionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CancelKeyDeletionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CancelKeyDeletionCommandOutput/)

</details>
<details>
<summary>
ConnectCustomKeyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ConnectCustomKeyStoreCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ConnectCustomKeyStoreCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ConnectCustomKeyStoreCommandOutput/)

</details>
<details>
<summary>
CreateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/CreateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CreateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CreateAliasCommandOutput/)

</details>
<details>
<summary>
CreateCustomKeyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/CreateCustomKeyStoreCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CreateCustomKeyStoreCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CreateCustomKeyStoreCommandOutput/)

</details>
<details>
<summary>
CreateGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/CreateGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CreateGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CreateGrantCommandOutput/)

</details>
<details>
<summary>
CreateKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/CreateKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CreateKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/CreateKeyCommandOutput/)

</details>
<details>
<summary>
Decrypt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DecryptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DecryptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DecryptCommandOutput/)

</details>
<details>
<summary>
DeleteAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DeleteAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DeleteAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DeleteAliasCommandOutput/)

</details>
<details>
<summary>
DeleteCustomKeyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DeleteCustomKeyStoreCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DeleteCustomKeyStoreCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DeleteCustomKeyStoreCommandOutput/)

</details>
<details>
<summary>
DeleteImportedKeyMaterial
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DeleteImportedKeyMaterialCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DeleteImportedKeyMaterialCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DeleteImportedKeyMaterialCommandOutput/)

</details>
<details>
<summary>
DeriveSharedSecret
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DeriveSharedSecretCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DeriveSharedSecretCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DeriveSharedSecretCommandOutput/)

</details>
<details>
<summary>
DescribeCustomKeyStores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DescribeCustomKeyStoresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DescribeCustomKeyStoresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DescribeCustomKeyStoresCommandOutput/)

</details>
<details>
<summary>
DescribeKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DescribeKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DescribeKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DescribeKeyCommandOutput/)

</details>
<details>
<summary>
DisableKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DisableKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DisableKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DisableKeyCommandOutput/)

</details>
<details>
<summary>
DisableKeyRotation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DisableKeyRotationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DisableKeyRotationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DisableKeyRotationCommandOutput/)

</details>
<details>
<summary>
DisconnectCustomKeyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/DisconnectCustomKeyStoreCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DisconnectCustomKeyStoreCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/DisconnectCustomKeyStoreCommandOutput/)

</details>
<details>
<summary>
EnableKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/EnableKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/EnableKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/EnableKeyCommandOutput/)

</details>
<details>
<summary>
EnableKeyRotation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/EnableKeyRotationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/EnableKeyRotationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/EnableKeyRotationCommandOutput/)

</details>
<details>
<summary>
Encrypt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/EncryptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/EncryptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/EncryptCommandOutput/)

</details>
<details>
<summary>
GenerateDataKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GenerateDataKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateDataKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateDataKeyCommandOutput/)

</details>
<details>
<summary>
GenerateDataKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GenerateDataKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateDataKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateDataKeyPairCommandOutput/)

</details>
<details>
<summary>
GenerateDataKeyPairWithoutPlaintext
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GenerateDataKeyPairWithoutPlaintextCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateDataKeyPairWithoutPlaintextCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateDataKeyPairWithoutPlaintextCommandOutput/)

</details>
<details>
<summary>
GenerateDataKeyWithoutPlaintext
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GenerateDataKeyWithoutPlaintextCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateDataKeyWithoutPlaintextCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateDataKeyWithoutPlaintextCommandOutput/)

</details>
<details>
<summary>
GenerateMac
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GenerateMacCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateMacCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateMacCommandOutput/)

</details>
<details>
<summary>
GenerateRandom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GenerateRandomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateRandomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GenerateRandomCommandOutput/)

</details>
<details>
<summary>
GetKeyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GetKeyPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GetKeyPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GetKeyPolicyCommandOutput/)

</details>
<details>
<summary>
GetKeyRotationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GetKeyRotationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GetKeyRotationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GetKeyRotationStatusCommandOutput/)

</details>
<details>
<summary>
GetParametersForImport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GetParametersForImportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GetParametersForImportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GetParametersForImportCommandOutput/)

</details>
<details>
<summary>
GetPublicKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/GetPublicKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GetPublicKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/GetPublicKeyCommandOutput/)

</details>
<details>
<summary>
ImportKeyMaterial
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ImportKeyMaterialCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ImportKeyMaterialCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ImportKeyMaterialCommandOutput/)

</details>
<details>
<summary>
ListAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ListAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListAliasesCommandOutput/)

</details>
<details>
<summary>
ListGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ListGrantsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListGrantsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListGrantsCommandOutput/)

</details>
<details>
<summary>
ListKeyPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ListKeyPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListKeyPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListKeyPoliciesCommandOutput/)

</details>
<details>
<summary>
ListKeyRotations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ListKeyRotationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListKeyRotationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListKeyRotationsCommandOutput/)

</details>
<details>
<summary>
ListKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ListKeysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListKeysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListKeysCommandOutput/)

</details>
<details>
<summary>
ListResourceTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ListResourceTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListResourceTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListResourceTagsCommandOutput/)

</details>
<details>
<summary>
ListRetirableGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ListRetirableGrantsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListRetirableGrantsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ListRetirableGrantsCommandOutput/)

</details>
<details>
<summary>
PutKeyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/PutKeyPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/PutKeyPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/PutKeyPolicyCommandOutput/)

</details>
<details>
<summary>
ReEncrypt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ReEncryptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ReEncryptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ReEncryptCommandOutput/)

</details>
<details>
<summary>
ReplicateKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ReplicateKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ReplicateKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ReplicateKeyCommandOutput/)

</details>
<details>
<summary>
RetireGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/RetireGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/RetireGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/RetireGrantCommandOutput/)

</details>
<details>
<summary>
RevokeGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/RevokeGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/RevokeGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/RevokeGrantCommandOutput/)

</details>
<details>
<summary>
RotateKeyOnDemand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/RotateKeyOnDemandCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/RotateKeyOnDemandCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/RotateKeyOnDemandCommandOutput/)

</details>
<details>
<summary>
ScheduleKeyDeletion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/ScheduleKeyDeletionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ScheduleKeyDeletionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/ScheduleKeyDeletionCommandOutput/)

</details>
<details>
<summary>
Sign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/SignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/SignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/SignCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/UpdateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UpdateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UpdateAliasCommandOutput/)

</details>
<details>
<summary>
UpdateCustomKeyStore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/UpdateCustomKeyStoreCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UpdateCustomKeyStoreCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UpdateCustomKeyStoreCommandOutput/)

</details>
<details>
<summary>
UpdateKeyDescription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/UpdateKeyDescriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UpdateKeyDescriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UpdateKeyDescriptionCommandOutput/)

</details>
<details>
<summary>
UpdatePrimaryRegion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/UpdatePrimaryRegionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UpdatePrimaryRegionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/UpdatePrimaryRegionCommandOutput/)

</details>
<details>
<summary>
Verify
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/VerifyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/VerifyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/VerifyCommandOutput/)

</details>
<details>
<summary>
VerifyMac
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/command/VerifyMacCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/VerifyMacCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-kms/Interface/VerifyMacCommandOutput/)

</details>
