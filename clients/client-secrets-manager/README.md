<!-- generated file, do not edit directly -->

# @aws-sdk/client-secrets-manager

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-secrets-manager/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-secrets-manager)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-secrets-manager.svg)](https://www.npmjs.com/package/@aws-sdk/client-secrets-manager)

## Description

AWS SDK for JavaScript SecretsManager Client for Node.js, Browser and React Native.

<fullname>Amazon Web Services Secrets Manager</fullname>

<p>Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p>

<p>This guide provides descriptions of the Secrets Manager API. For more information about using this
service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">Amazon Web Services Secrets Manager User Guide</a>.</p>

<p>
<b>API Version</b>
</p>

<p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p>

<p>
<b>Support and Feedback for Amazon Web Services Secrets Manager</b>
</p>
<p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">Amazon Web Services Secrets Manager Discussion Forum</a>. For more
information about the Amazon Web Services Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums
Help</a>.</p>

<p>
<b>Logging API Requests</b>
</p>
<p>Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services
account and delivers log files to an Amazon S3 bucket. By using information that's collected
by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the
request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services
CloudTrail, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging
Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Secrets Manager User Guide</i>.
To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">Amazon Web Services CloudTrail User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-secrets-manager
using your favorite package manager:

- `npm install @aws-sdk/client-secrets-manager`
- `yarn add @aws-sdk/client-secrets-manager`
- `pnpm add @aws-sdk/client-secrets-manager`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SecretsManagerClient` and
the commands you need, for example `CancelRotateSecretCommand`:

```js
// ES5 example
const { SecretsManagerClient, CancelRotateSecretCommand } = require("@aws-sdk/client-secrets-manager");
```

```ts
// ES6+ example
import { SecretsManagerClient, CancelRotateSecretCommand } from "@aws-sdk/client-secrets-manager";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SecretsManagerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CancelRotateSecretCommand(params);
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
import * as AWS from "@aws-sdk/client-secrets-manager";
const client = new AWS.SecretsManager({ region: "REGION" });

// async/await.
try {
  const data = await client.cancelRotateSecret(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelRotateSecret(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelRotateSecret(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-secrets-manager` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
