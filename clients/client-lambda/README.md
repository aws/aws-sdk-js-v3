<!-- generated file, do not edit directly -->

# @aws-sdk/client-lambda

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-lambda/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-lambda)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-lambda.svg)](https://www.npmjs.com/package/@aws-sdk/client-lambda)

## Description

AWS SDK for JavaScript Lambda Client for Node.js, Browser and React Native.

<fullname>Lambda</fullname>

<p>
<b>Overview</b>
</p>
<p>Lambda is a compute service that lets you run code without provisioning or managing servers.
Lambda runs your code on a high-availability compute infrastructure and performs all of the
administration of the compute resources, including server and operating system maintenance, capacity provisioning
and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any
type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p>
<p>The <i>Lambda API Reference</i> provides information about
each of the API methods, including details about the parameters in each API request and
response. </p>
<p></p>
<p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command
line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for
Amazon Web Services</a>. </p>
<p>For a list of Region-specific endpoints that Lambda supports,
see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html/">Lambda
endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p>
<p>When making the API calls, you will need to
authenticate your request by providing a signature. Lambda supports signature version 4. For more information,
see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the
<i>Amazon Web Services General Reference.</i>. </p>
<p>
<b>CA certificates</b>
</p>

<p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers
can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your
computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate
environment and do not manage your own computer, you might need to ask an administrator to assist with the
update process. The following list shows minimum operating system and Java versions:</p>
<ul>
<li>
<p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one
of the required CAs in their trust list. </p>
</li>
<li>
<p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and
later versions contain at least one of the required CAs in their trust list. </p>
</li>
<li>
<p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the
required CAs in their default trusted CA list. </p>
</li>
<li>
<p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December
2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p>
</li>
</ul>
<p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or
programmatically, you will need to ensure your client machines support any of the following CAs: </p>
<ul>
<li>
<p>Amazon Root CA 1</p>
</li>
<li>
<p>Starfield Services Root Certificate Authority - G2</p>
</li>
<li>
<p>Starfield Class 2 Certification Authority</p>
</li>
</ul>
<p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer
up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a>
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-lambda
using your favorite package manager:

- `npm install @aws-sdk/client-lambda`
- `yarn add @aws-sdk/client-lambda`
- `pnpm add @aws-sdk/client-lambda`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LambdaClient` and
the commands you need, for example `AddLayerVersionPermissionCommand`:

```js
// ES5 example
const { LambdaClient, AddLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda");
```

```ts
// ES6+ example
import { LambdaClient, AddLayerVersionPermissionCommand } from "@aws-sdk/client-lambda";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LambdaClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddLayerVersionPermissionCommand(params);
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
import * as AWS from "@aws-sdk/client-lambda";
const client = new AWS.Lambda({ region: "REGION" });

// async/await.
try {
  const data = await client.addLayerVersionPermission(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addLayerVersionPermission(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addLayerVersionPermission(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lambda` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
