# @aws-sdk/client-ssm

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-ssm/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-ssm)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-ssm.svg)](https://www.npmjs.com/package/@aws-sdk/client-ssm)

## Description

AWS SDK for JavaScript SSM Client for Node.js, Browser and React Native.

<p>Amazon Web Services Systems Manager is a collection of capabilities that helps you automate management tasks such as
collecting system inventory, applying operating system (OS) patches, automating the creation of
Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale.
Systems Manager lets you remotely and securely manage the configuration of your managed instances. A
<i>managed instance</i> is any Amazon Elastic Compute Cloud instance (EC2 instance), or any
on-premises server or virtual machine (VM) in your hybrid environment that has been configured
for Systems Manager.</p>
<p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>.</p>
<p>To get started, verify prerequisites and configure managed instances. For more information,
see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up
Amazon Web Services Systems Manager</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
<p class="title">
<b>Related resources</b>
</p>
<ul>
<li>
<p>For information about how to use a Query API, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API requests</a>. </p>
</li>
<li>
<p>For information about other API operations you can perform on EC2 instances, see the
<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>.</p>
</li>
<li>
<p>For information about AppConfig, a capability of Systems Manager, see the <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/">AppConfig User Guide</a> and the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/">AppConfig API
Reference</a>.</p>
</li>
<li>
<p>For information about Incident Manager, a capability of Systems Manager, see the <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/">Incident Manager User Guide</a>
and the <a href="https://docs.aws.amazon.com/incident-manager/latest/APIReference/">Incident Manager API
Reference</a>.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-ssm
using your favorite package manager:

- `npm install @aws-sdk/client-ssm`
- `yarn add @aws-sdk/client-ssm`
- `pnpm add @aws-sdk/client-ssm`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SSMClient` and
the commands you need, for example `AddTagsToResourceCommand`:

```js
// ES5 example
const { SSMClient, AddTagsToResourceCommand } = require("@aws-sdk/client-ssm");
```

```ts
// ES6+ example
import { SSMClient, AddTagsToResourceCommand } from "@aws-sdk/client-ssm";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SSMClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddTagsToResourceCommand(params);
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
import * as AWS from "@aws-sdk/client-ssm";
const client = new AWS.SSM({ region: "REGION" });

// async/await.
try {
  const data = await client.addTagsToResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addTagsToResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addTagsToResource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ssm` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
