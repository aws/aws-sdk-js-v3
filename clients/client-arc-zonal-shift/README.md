<!-- generated file, do not edit directly -->

# @aws-sdk/client-arc-zonal-shift

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-arc-zonal-shift/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-arc-zonal-shift)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-arc-zonal-shift.svg)](https://www.npmjs.com/package/@aws-sdk/client-arc-zonal-shift)

## Description

AWS SDK for JavaScript ARCZonalShift Client for Node.js, Browser and React Native.

<p>This is the API Reference Guide for the zonal shift feature of Amazon Route 53 Application Recovery Controller. This guide is for developers who need detailed information about
zonal shift API actions, data types, and errors.</p>
<p>Zonal shift is in preview release for Amazon Route 53 Application Recovery Controller and is subject to change.</p>
<p>Zonal shift in Route 53 ARC enables you to move traffic for a load balancer resource away from an Availability Zone. Starting
a zonal shift helps your application recover immediately, for example, from a developer's bad code deployment
or from an AWS infrastructure failure in a single Availability Zone, reducing the impact and time lost from an issue
in one zone. </p>
<p>Supported AWS resources are automatically registered with Route 53 ARC. Resources that are registered for zonal shifts
in Route 53 ARC are managed resources in Route 53 ARC. You can start a zonal shift for any managed resource in your account in a Region.
At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
<p>Zonal shifts are temporary. You must specify an expiration when you start a zonal shift, of up to three days initially.
If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration.
You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone.</p>
<p>For more information about using zonal shift, see the
<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html">Amazon Route 53 Application Recovery Controller Developer Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-arc-zonal-shift
using your favorite package manager:

- `npm install @aws-sdk/client-arc-zonal-shift`
- `yarn add @aws-sdk/client-arc-zonal-shift`
- `pnpm add @aws-sdk/client-arc-zonal-shift`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ARCZonalShiftClient` and
the commands you need, for example `CancelZonalShiftCommand`:

```js
// ES5 example
const { ARCZonalShiftClient, CancelZonalShiftCommand } = require("@aws-sdk/client-arc-zonal-shift");
```

```ts
// ES6+ example
import { ARCZonalShiftClient, CancelZonalShiftCommand } from "@aws-sdk/client-arc-zonal-shift";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ARCZonalShiftClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CancelZonalShiftCommand(params);
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
import * as AWS from "@aws-sdk/client-arc-zonal-shift";
const client = new AWS.ARCZonalShift({ region: "REGION" });

// async/await.
try {
  const data = await client.cancelZonalShift(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelZonalShift(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelZonalShift(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-arc-zonal-shift` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
