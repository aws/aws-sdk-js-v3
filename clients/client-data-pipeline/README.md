<!-- generated file, do not edit directly -->

# @aws-sdk/client-data-pipeline

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-data-pipeline/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-data-pipeline)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-data-pipeline.svg)](https://www.npmjs.com/package/@aws-sdk/client-data-pipeline)

## Description

AWS SDK for JavaScript DataPipeline Client for Node.js, Browser and React Native.

<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline
handles the details of scheduling and ensuring that data dependencies are met so that your application
can focus on processing the data.</p>

<p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner.
AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing
database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use
AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide
custom data management.</p>

<p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline
and define data sources, schedules, dependencies, and the transforms to be performed on the data.
Use the second set in your task runner application to receive the next task ready for processing.
The logic for performing the task, such as querying the data, running data analysis, or converting
the data from one format to another, is contained within the task runner. The task runner performs
the task assigned to it by the web service, reporting progress to the web service as it does so.
When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-data-pipeline
using your favorite package manager:

- `npm install @aws-sdk/client-data-pipeline`
- `yarn add @aws-sdk/client-data-pipeline`
- `pnpm add @aws-sdk/client-data-pipeline`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DataPipelineClient` and
the commands you need, for example `ActivatePipelineCommand`:

```js
// ES5 example
const { DataPipelineClient, ActivatePipelineCommand } = require("@aws-sdk/client-data-pipeline");
```

```ts
// ES6+ example
import { DataPipelineClient, ActivatePipelineCommand } from "@aws-sdk/client-data-pipeline";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DataPipelineClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ActivatePipelineCommand(params);
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
import * as AWS from "@aws-sdk/client-data-pipeline";
const client = new AWS.DataPipeline({ region: "REGION" });

// async/await.
try {
  const data = await client.activatePipeline(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .activatePipeline(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.activatePipeline(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-data-pipeline` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
