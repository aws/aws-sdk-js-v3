<!-- generated file, do not edit directly -->

# @aws-sdk/client-sagemaker-a2i-runtime

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-sagemaker-a2i-runtime/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-sagemaker-a2i-runtime)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-sagemaker-a2i-runtime.svg)](https://www.npmjs.com/package/@aws-sdk/client-sagemaker-a2i-runtime)

## Description

AWS SDK for JavaScript SageMakerA2IRuntime Client for Node.js, Browser and React Native.

<p>Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning
application. When an AI application can't evaluate data with a high degree of confidence,
human reviewers can take over. This human review is called a human review workflow. To create
and start a human review workflow, you need three resources: a <i>worker task
template</i>, a <i>flow definition</i>, and a <i>human
loop</i>.</p>
<p>For information about these resources and prerequisites for using Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html">Get Started with
Amazon Augmented AI</a> in the Amazon SageMaker Developer Guide.</p>
<p>This API reference includes information about API actions and data types that you can use
to interact with Amazon A2I programmatically. Use this guide to:</p>
<ul>
<li>
<p>Start a human loop with the <code>StartHumanLoop</code> operation when using
Amazon A2I with a <i>custom task type</i>. To learn more about the
difference between custom and built-in task types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-task-types-general.html">Use Task Types </a>. To learn
how to start a human loop using this API, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html#a2i-instructions-starthumanloop">Create and Start a Human Loop for a Custom Task Type </a> in the
Amazon SageMaker Developer Guide.</p>
</li>
<li>
<p>Manage your human loops. You can list all human loops that you have created, describe
individual human loops, and stop and delete human loops. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-monitor-humanloop-results.html">Monitor and Manage Your Human Loop </a> in the Amazon SageMaker Developer Guide.</p>
</li>
</ul>
<p>Amazon A2I integrates APIs from various AWS services to create and start human review
workflows for those services. To learn how Amazon A2I uses these APIs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html">Use APIs in
Amazon A2I</a> in the Amazon SageMaker Developer Guide.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-sagemaker-a2i-runtime
using your favorite package manager:

- `npm install @aws-sdk/client-sagemaker-a2i-runtime`
- `yarn add @aws-sdk/client-sagemaker-a2i-runtime`
- `pnpm add @aws-sdk/client-sagemaker-a2i-runtime`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SageMakerA2IRuntimeClient` and
the commands you need, for example `DeleteHumanLoopCommand`:

```js
// ES5 example
const { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime");
```

```ts
// ES6+ example
import { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SageMakerA2IRuntimeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new DeleteHumanLoopCommand(params);
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
import * as AWS from "@aws-sdk/client-sagemaker-a2i-runtime";
const client = new AWS.SageMakerA2IRuntime({ region: "REGION" });

// async/await.
try {
  const data = await client.deleteHumanLoop(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .deleteHumanLoop(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.deleteHumanLoop(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sagemaker-a2i-runtime` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
