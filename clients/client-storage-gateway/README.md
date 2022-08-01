<!-- generated file, do not edit directly -->

# @aws-sdk/client-storage-gateway

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-storage-gateway/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-storage-gateway)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-storage-gateway.svg)](https://www.npmjs.com/package/@aws-sdk/client-storage-gateway)

## Description

AWS SDK for JavaScript StorageGateway Client for Node.js, Browser and React Native.

<fullname>Storage Gateway Service</fullname>

<p>Storage Gateway is the service that connects an on-premises software appliance
with cloud-based storage to provide seamless and secure integration between an
organization's on-premises IT environment and the Amazon Web Services storage
infrastructure. The service enables you to securely upload data to the Amazon Web Services Cloud for cost effective backup and rapid disaster recovery.</p>

<p>Use the following links to get started using the <i>Storage Gateway
Service API Reference</i>:</p>

<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">Storage Gateway required request headers</a>: Describes the required
headers that you must send with every POST request to Storage Gateway.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing requests</a>: Storage Gateway requires that you authenticate
every request you send; this topic describes how sign such a request.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about Storage Gateway errors.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in Storage Gateway</a>: Contains detailed descriptions of all Storage Gateway operations, their request parameters, response elements, possible errors, and
examples of requests and responses.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">Storage Gateway
endpoints and quotas</a>: Provides a list of each Amazon Web Services Region
and the endpoints available for use with Storage Gateway.</p>
</li>
</ul>

<note>
<p>Storage Gateway resource IDs are in uppercase. When you use these resource IDs
with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change
your resource ID to lowercase to use it with the EC2 API. For example, in Storage
Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use
this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>.
Otherwise, the EC2 API might not behave as expected.</p>
</note>

<important>
<p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway
volumes are changing to a longer format. Starting in December 2016, all new volumes and
snapshots will be created with a 17-character string. Starting in April 2016, you will
be able to use these longer IDs so you can test your systems with the new format. For
more information, see <a href="http://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and
EBS resource IDs</a>.</p>

<p>For example, a volume Amazon Resource Name (ARN) with the longer volume ID format
looks like the following:</p>

<p>
<code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p>

<p>A snapshot ID with the longer ID format looks like the following:
<code>snap-78e226633445566ee</code>.</p>

<p>For more information, see <a href="http://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement:
Heads-up – Longer Storage Gateway volume and snapshot IDs coming in
2016</a>.</p>
</important>

## Installing

To install the this package, simply type add or install @aws-sdk/client-storage-gateway
using your favorite package manager:

- `npm install @aws-sdk/client-storage-gateway`
- `yarn add @aws-sdk/client-storage-gateway`
- `pnpm add @aws-sdk/client-storage-gateway`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `StorageGatewayClient` and
the commands you need, for example `ActivateGatewayCommand`:

```js
// ES5 example
const { StorageGatewayClient, ActivateGatewayCommand } = require("@aws-sdk/client-storage-gateway");
```

```ts
// ES6+ example
import { StorageGatewayClient, ActivateGatewayCommand } from "@aws-sdk/client-storage-gateway";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new StorageGatewayClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ActivateGatewayCommand(params);
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
import * as AWS from "@aws-sdk/client-storage-gateway";
const client = new AWS.StorageGateway({ region: "REGION" });

// async/await.
try {
  const data = await client.activateGateway(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .activateGateway(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.activateGateway(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-storage-gateway` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
