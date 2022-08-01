<!-- generated file, do not edit directly -->

# @aws-sdk/client-chime

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-chime/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-chime)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-chime.svg)](https://www.npmjs.com/package/@aws-sdk/client-chime)

## Description

AWS SDK for JavaScript Chime Client for Node.js, Browser and React Native.

<p>The Amazon Chime API (application programming interface) is designed for developers to
perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
Connectors. This guide provides detailed information about the Amazon Chime API,
including operations, types, inputs and outputs, and error codes. It also includes API actions for use with the Amazon Chime SDK, which developers use to build their own communication applications. For more information about the
Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">
Using the Amazon Chime SDK
</a> in the <i>Amazon Chime Developer Guide</i>.</p>
<p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls. We recommend using an AWS SDK or the
AWS CLI. Each API operation includes links to information about using it with a language-specific AWS SDK or the AWS CLI.</p>
<dl>
<dt>Using an AWS SDK</dt>
<dd>
<p>
You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the
<a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.
</p>
</dd>
<dt>Using the AWS CLI</dt>
<dd>
<p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see
<a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a>
in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the
<a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
<i>AWS CLI Command Reference</i>.
</p>
</dd>
<dt>Using REST APIs</dt>
<dd>
<p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports signature version 4. For more information, see
<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>
in the <i>Amazon Web Services General Reference</i>.</p>

<p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
</dd>
</dl>

<p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see
<a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a>
in the <i>Amazon Chime Administration Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-chime
using your favorite package manager:

- `npm install @aws-sdk/client-chime`
- `yarn add @aws-sdk/client-chime`
- `pnpm add @aws-sdk/client-chime`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ChimeClient` and
the commands you need, for example `AssociatePhoneNumbersWithVoiceConnectorCommand`:

```js
// ES5 example
const { ChimeClient, AssociatePhoneNumbersWithVoiceConnectorCommand } = require("@aws-sdk/client-chime");
```

```ts
// ES6+ example
import { ChimeClient, AssociatePhoneNumbersWithVoiceConnectorCommand } from "@aws-sdk/client-chime";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ChimeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociatePhoneNumbersWithVoiceConnectorCommand(params);
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
import * as AWS from "@aws-sdk/client-chime";
const client = new AWS.Chime({ region: "REGION" });

// async/await.
try {
  const data = await client.associatePhoneNumbersWithVoiceConnector(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associatePhoneNumbersWithVoiceConnector(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associatePhoneNumbersWithVoiceConnector(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-chime` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
