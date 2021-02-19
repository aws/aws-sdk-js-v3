# @aws-sdk/client-kms

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-kms/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-kms)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-kms.svg)](https://www.npmjs.com/package/@aws-sdk/client-kms)

## Description

AWS SDK for JavaScript KMS Client for Node.js, Browser and React Native.

<fullname>AWS Key Management Service</fullname>

<p>AWS Key Management Service (AWS KMS) is an encryption and key management web service. This guide describes
the AWS KMS operations that you can call programmatically. For general information about AWS KMS,
see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/">
<i>AWS Key Management Service Developer Guide</i>
</a>.</p>
<note>
<p>AWS provides SDKs that consist of libraries and sample code for various programming
languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a
convenient way to create programmatic access to AWS KMS and other AWS services. For example,
the SDKs take care of tasks such as signing requests (see below), managing errors, and
retrying requests automatically. For more information about the AWS SDKs, including how to
download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
Services</a>.</p>
</note>
<p>We recommend that you use the AWS SDKs to make programmatic API calls to AWS KMS.</p>
<p>Clients must support TLS (Transport Layer Security) 1.0. We recommend TLS 1.2. Clients
must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral
Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems
such as Java 7 and later support these modes.</p>
<p>
<b>Signing Requests</b>
</p>
<p>Requests must be signed by using an access key ID and a secret access key. We strongly
recommend that you <i>do not</i> use your AWS account (root) access key ID and
secret key for everyday work with AWS KMS. Instead, use the access key ID and secret access key
for an IAM user. You can also use the AWS Security Token Service to generate temporary
security credentials that you can use to sign requests.</p>
<p>All AWS KMS operations require <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
<p>
<b>Logging API Requests</b>
</p>
<p>AWS KMS supports AWS CloudTrail, a service that logs AWS API calls and related events for your AWS
account and delivers them to an Amazon S3 bucket that you specify. By using the information
collected by CloudTrail, you can determine what requests were made to AWS KMS, who made the request,
when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find
your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">AWS CloudTrail User Guide</a>.</p>
<p>
<b>Additional Resources</b>
</p>
<p>For more information about credentials and request signing, see the following:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS Security
Credentials</a> - This topic provides general information about the types of
credentials used for accessing AWS.</p>
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

To install the this package, simply type add or install @aws-sdk/client-kms
using your favorite package manager:

- `npm install @aws-sdk/client-kms`
- `yarn add @aws-sdk/client-kms`
- `pnpm add @aws-sdk/client-kms`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `KMSClient` and
the commands you need, for example `CancelKeyDeletionCommand`:

```js
// ES5 example
const { KMSClient, CancelKeyDeletionCommand } = require("@aws-sdk/client-kms");
```

```ts
// ES6+ example
import { KMSClient, CancelKeyDeletionCommand } from "@aws-sdk/client-kms";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by difference commands.
const client = new KMSClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CancelKeyDeletionCommand(params);
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
  // proccess err and data.
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
  const data = client.cancelKeyDeletion(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelKeyDeletion(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelKeyDeletion(params, (err, data) => {
  // proccess err and data.
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
