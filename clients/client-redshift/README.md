<!-- generated file, do not edit directly -->

# @aws-sdk/client-redshift

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-redshift/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-redshift)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-redshift.svg)](https://www.npmjs.com/package/@aws-sdk/client-redshift)

## Description

AWS SDK for JavaScript Redshift Client for Node.js, Browser and React Native.

<fullname>Amazon Redshift</fullname>

<p>
<b>Overview</b>
</p>
<p>This is an interface reference for Amazon Redshift. It contains documentation for one of
the programming or command line interfaces you can use to manage Amazon Redshift clusters.
Note that Amazon Redshift is asynchronous, which means that some interfaces may require
techniques, such as polling or asynchronous callback handlers, to determine when a
command has been applied. In this reference, the parameter descriptions indicate whether
a change is applied immediately, on the next instance reboot, or during the next
maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to
<a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the
Amazon Redshift Management Interfaces</a>.</p>
<p>Amazon Redshift manages all the work of setting up, operating, and scaling a data
warehouse: provisioning capacity, monitoring and backing up the cluster, and applying
patches and upgrades to the Amazon Redshift engine. You can focus on using your data to
acquire new insights for your business and customers.</p>
<p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading
the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p>

<p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design,
build, query, and maintain the databases that make up your data warehouse. </p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-redshift
using your favorite package manager:

- `npm install @aws-sdk/client-redshift`
- `yarn add @aws-sdk/client-redshift`
- `pnpm add @aws-sdk/client-redshift`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RedshiftClient` and
the commands you need, for example `AcceptReservedNodeExchangeCommand`:

```js
// ES5 example
const { RedshiftClient, AcceptReservedNodeExchangeCommand } = require("@aws-sdk/client-redshift");
```

```ts
// ES6+ example
import { RedshiftClient, AcceptReservedNodeExchangeCommand } from "@aws-sdk/client-redshift";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new RedshiftClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptReservedNodeExchangeCommand(params);
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
import * as AWS from "@aws-sdk/client-redshift";
const client = new AWS.Redshift({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptReservedNodeExchange(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptReservedNodeExchange(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptReservedNodeExchange(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-redshift` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
