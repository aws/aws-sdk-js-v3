# @aws-sdk/client-cloudformation

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-cloudformation/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloudformation)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-cloudformation.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloudformation)

## Description

AWS SDK for JavaScript CloudFormation Client for Node.js, Browser and React Native.

<fullname>AWS CloudFormation</fullname>

<p>CloudFormation allows you to create and manage Amazon Web Services infrastructure deployments
predictably and repeatedly. You can use CloudFormation to leverage Amazon Web Services products, such
as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification
Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly
scalable, cost-effective applications without creating or configuring the underlying Amazon Web Services
infrastructure.</p>
<p>With CloudFormation, you declare all of your resources and dependencies in a
template file. The template defines a collection of resources as a single unit called a
stack. CloudFormation creates and deletes all member resources of the stack together
and manages all dependencies between the resources for you.</p>
<p>For more information about CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">CloudFormation Product Page</a>.</p>
<p>CloudFormation makes use of other Amazon Web Services products. If you need additional
technical information about a specific Amazon Web Services product, you can find the product's technical
documentation at <a href="https://docs.aws.amazon.com/">
<code>docs.aws.amazon.com</code>
</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-cloudformation
using your favorite package manager:

- `npm install @aws-sdk/client-cloudformation`
- `yarn add @aws-sdk/client-cloudformation`
- `pnpm add @aws-sdk/client-cloudformation`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CloudFormationClient` and
the commands you need, for example `ActivateTypeCommand`:

```js
// ES5 example
const { CloudFormationClient, ActivateTypeCommand } = require("@aws-sdk/client-cloudformation");
```

```ts
// ES6+ example
import { CloudFormationClient, ActivateTypeCommand } from "@aws-sdk/client-cloudformation";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CloudFormationClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ActivateTypeCommand(params);
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
import * as AWS from "@aws-sdk/client-cloudformation";
const client = new AWS.CloudFormation({ region: "REGION" });

// async/await.
try {
  const data = await client.activateType(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .activateType(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.activateType(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-cloudformation` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
