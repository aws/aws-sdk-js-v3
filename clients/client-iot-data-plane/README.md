# @aws-sdk/client-iot-data-plane

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-iot-data-plane/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot-data-plane)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-iot-data-plane.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot-data-plane)

## Description

AWS SDK for JavaScript IoTDataPlane Client for Node.js, Browser and React Native.

<fullname>AWS IoT</fullname>

<p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors,
actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and
things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a
persistent representation of your things and their state in the AWS cloud.</p>
<p>Find the endpoint address for actions in the AWS IoT data plane by running this CLI command:</p>
<p>
<code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code>
</p>
<p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">AWS Signature Version 4</a>
to sign requests is: <i>iotdevicegateway</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-iot-data-plane
using your favorite package manager:

- `npm install @aws-sdk/client-iot-data-plane`
- `yarn add @aws-sdk/client-iot-data-plane`
- `pnpm add @aws-sdk/client-iot-data-plane`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IoTDataPlaneClient` and
the commands you need, for example `DeleteThingShadowCommand`:

```js
// ES5 example
const { IoTDataPlaneClient, DeleteThingShadowCommand } = require("@aws-sdk/client-iot-data-plane");
```

```ts
// ES6+ example
import { IoTDataPlaneClient, DeleteThingShadowCommand } from "@aws-sdk/client-iot-data-plane";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IoTDataPlaneClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new DeleteThingShadowCommand(params);
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
import * as AWS from "@aws-sdk/client-iot-data-plane";
const client = new AWS.IoTDataPlane({ region: "REGION" });

// async/await.
try {
  const data = await client.deleteThingShadow(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .deleteThingShadow(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.deleteThingShadow(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-iot-data-plane` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
