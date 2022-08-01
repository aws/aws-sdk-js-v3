<!-- generated file, do not edit directly -->

# @aws-sdk/client-iot

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-iot/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-iot.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot)

## Description

AWS SDK for JavaScript IoT Client for Node.js, Browser and React Native.

<fullname>IoT</fullname>

<p>IoT provides secure, bi-directional communication between Internet-connected
devices (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services
cloud. You can discover your custom IoT-Data endpoint to communicate with, configure
rules for data processing and integration with other services, organize resources
associated with each device (Registry), configure logging, and create and manage
policies and credentials to authenticate devices.</p>
<p>The service endpoints that expose this API are listed in
<a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html">Amazon Web Services IoT Core Endpoints and Quotas</a>.
You must use the endpoint for the region that has the resources you want to access.</p>
<p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services
Signature Version 4</a> to sign the request is:
<i>execute-api</i>.</p>
<p>For more information about how IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer
Guide</a>.</p>
<p>For information about how to use the credentials provider for IoT, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html">Authorizing Direct Calls to Amazon Web Services Services</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-iot
using your favorite package manager:

- `npm install @aws-sdk/client-iot`
- `yarn add @aws-sdk/client-iot`
- `pnpm add @aws-sdk/client-iot`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IoTClient` and
the commands you need, for example `AcceptCertificateTransferCommand`:

```js
// ES5 example
const { IoTClient, AcceptCertificateTransferCommand } = require("@aws-sdk/client-iot");
```

```ts
// ES6+ example
import { IoTClient, AcceptCertificateTransferCommand } from "@aws-sdk/client-iot";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IoTClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptCertificateTransferCommand(params);
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
import * as AWS from "@aws-sdk/client-iot";
const client = new AWS.IoT({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptCertificateTransfer(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptCertificateTransfer(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptCertificateTransfer(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-iot` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
