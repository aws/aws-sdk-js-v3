<!-- generated file, do not edit directly -->

# @aws-sdk/client-glacier

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-glacier/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-glacier)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-glacier.svg)](https://www.npmjs.com/package/@aws-sdk/client-glacier)

## Description

AWS SDK for JavaScript Glacier Client for Node.js, Browser and React Native.

<p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p>

<p>Glacier is an extremely low-cost storage service that provides secure,
durable, and easy-to-use storage for data backup and archival. With Glacier,
customers can store their data cost effectively for months, years, or decades.
Glacier also enables customers to offload the administrative burdens of operating and
scaling storage to AWS, so they don't have to worry about capacity planning, hardware
provisioning, data replication, hardware failure and recovery, or time-consuming hardware
migrations.</p>

<p>Glacier is a great storage choice when low storage cost is paramount and your
data is rarely retrieved. If your
application requires fast or frequent access to your data, consider using Amazon S3. For
more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service
(Amazon S3)</a>.</p>

<p>You can store any kind of data in any format. There is no maximum limit on the total
amount of data you can store in Glacier.</p>

<p>If you are a first-time user of Glacier, we recommend that you begin by
reading the following sections in the <i>Amazon S3 Glacier Developer
Guide</i>:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is
Amazon S3 Glacier</a> - This section of the Developer Guide describes the
underlying data model, the operations it supports, and the AWS SDKs that you can use
to interact with the service.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started
with Amazon S3 Glacier</a> - The Getting Started section walks you through the
process of creating a vault, uploading archives, creating jobs to download archives,
retrieving the job output, and deleting archives.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-glacier
using your favorite package manager:

- `npm install @aws-sdk/client-glacier`
- `yarn add @aws-sdk/client-glacier`
- `pnpm add @aws-sdk/client-glacier`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GlacierClient` and
the commands you need, for example `AbortMultipartUploadCommand`:

```js
// ES5 example
const { GlacierClient, AbortMultipartUploadCommand } = require("@aws-sdk/client-glacier");
```

```ts
// ES6+ example
import { GlacierClient, AbortMultipartUploadCommand } from "@aws-sdk/client-glacier";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GlacierClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AbortMultipartUploadCommand(params);
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
import * as AWS from "@aws-sdk/client-glacier";
const client = new AWS.Glacier({ region: "REGION" });

// async/await.
try {
  const data = await client.abortMultipartUpload(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .abortMultipartUpload(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.abortMultipartUpload(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-glacier` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
