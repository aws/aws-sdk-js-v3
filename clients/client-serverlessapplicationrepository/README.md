<!-- generated file, do not edit directly -->

# @aws-sdk/client-serverlessapplicationrepository

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-serverlessapplicationrepository/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-serverlessapplicationrepository)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-serverlessapplicationrepository.svg)](https://www.npmjs.com/package/@aws-sdk/client-serverlessapplicationrepository)

## Description

AWS SDK for JavaScript ServerlessApplicationRepository Client for Node.js, Browser and React Native.

<p>The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find
and deploy serverless applications in the AWS Cloud. For more information about serverless applications,
see Serverless Computing and Applications on the AWS website.</p><p>The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of
all levels can get started with serverless computing without needing to learn anything new. You can use category
keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots.
You can also search for applications by name, publisher, or event source. To use an application, you simply choose it,
configure any required fields, and deploy it with a few clicks. </p><p>You can also easily publish applications, sharing them publicly with the community at large, or privately
within your team or across your organization. To publish a serverless application (or app), you can use the
AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the
code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.
For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs
GitHub repository.</p><p>The AWS Serverless Application Repository Developer Guide contains more information about the two developer
experiences available:</p><ul>
<li>
<p>Consuming Applications – Browse for applications and view information about them, including
source code and readme files. Also install, configure, and deploy applications of your choosing. </p>
<p>Publishing Applications – Configure and upload applications to make them available to other
developers, and publish new versions of applications. </p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-serverlessapplicationrepository
using your favorite package manager:

- `npm install @aws-sdk/client-serverlessapplicationrepository`
- `yarn add @aws-sdk/client-serverlessapplicationrepository`
- `pnpm add @aws-sdk/client-serverlessapplicationrepository`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ServerlessApplicationRepositoryClient` and
the commands you need, for example `CreateApplicationCommand`:

```js
// ES5 example
const {
  ServerlessApplicationRepositoryClient,
  CreateApplicationCommand,
} = require("@aws-sdk/client-serverlessapplicationrepository");
```

```ts
// ES6+ example
import {
  ServerlessApplicationRepositoryClient,
  CreateApplicationCommand,
} from "@aws-sdk/client-serverlessapplicationrepository";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ServerlessApplicationRepositoryClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateApplicationCommand(params);
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
import * as AWS from "@aws-sdk/client-serverlessapplicationrepository";
const client = new AWS.ServerlessApplicationRepository({ region: "REGION" });

// async/await.
try {
  const data = await client.createApplication(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createApplication(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createApplication(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-serverlessapplicationrepository` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
