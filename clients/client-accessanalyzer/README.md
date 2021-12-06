# @aws-sdk/client-accessanalyzer

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-accessanalyzer/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-accessanalyzer)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-accessanalyzer.svg)](https://www.npmjs.com/package/@aws-sdk/client-accessanalyzer)

## Description

AWS SDK for JavaScript AccessAnalyzer Client for Node.js, Browser and React Native.

<p>Identity and Access Management Access Analyzer helps identify potential resource-access risks by enabling you to
identify any policies that grant access to an external principal. It does this by using
logic-based reasoning to analyze resource-based policies in your Amazon Web Services environment. An
external principal can be another Amazon Web Services account, a root user, an IAM user or role, a
federated user, an Amazon Web Services service, or an anonymous user. You can also use IAM Access Analyzer to
preview and validate public and cross-account access to your resources before deploying
permissions changes. This guide describes the Identity and Access Management Access Analyzer operations that you can
call programmatically. For general information about IAM Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">Identity and Access Management Access Analyzer</a> in the <b>IAM User Guide</b>.</p>
<p>To start using IAM Access Analyzer, you first need to create an analyzer.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-accessanalyzer
using your favorite package manager:

- `npm install @aws-sdk/client-accessanalyzer`
- `yarn add @aws-sdk/client-accessanalyzer`
- `pnpm add @aws-sdk/client-accessanalyzer`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AccessAnalyzerClient` and
the commands you need, for example `ApplyArchiveRuleCommand`:

```js
// ES5 example
const { AccessAnalyzerClient, ApplyArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer");
```

```ts
// ES6+ example
import { AccessAnalyzerClient, ApplyArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AccessAnalyzerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ApplyArchiveRuleCommand(params);
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
import * as AWS from "@aws-sdk/client-accessanalyzer";
const client = new AWS.AccessAnalyzer({ region: "REGION" });

// async/await.
try {
  const data = await client.applyArchiveRule(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .applyArchiveRule(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.applyArchiveRule(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-accessanalyzer` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
