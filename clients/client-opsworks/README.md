<!-- generated file, do not edit directly -->

# @aws-sdk/client-opsworks

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-opsworks/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-opsworks)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-opsworks.svg)](https://www.npmjs.com/package/@aws-sdk/client-opsworks)

## Description

AWS SDK for JavaScript OpsWorks Client for Node.js, Browser and React Native.

<fullname>AWS OpsWorks</fullname>

<p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and
usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error
codes. </p>
<p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for
overseeing the complete application lifecycle. For information about this product, go to the
<a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p>

<p>
<b>SDKs and CLI</b>
</p>
<p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for
.NET</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS
SDK for PHP 2</a>
</p>
</li>
<li>
<p>
<a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a>
</p>
</li>
<li>
<p>
<a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a>
</p>
</li>
<li>
<p>
<a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for
Python(Boto)</a>
</p>
</li>
</ul>

<p>
<b>Endpoints</b>
</p>
<p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks
can only be accessed or managed within the endpoint in which they are created.</p>
<ul>
<li>
<p>opsworks.us-east-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.us-east-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.us-west-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.us-west-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p>
</li>
<li>
<p>opsworks.eu-west-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.eu-west-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.eu-west-3.amazonaws.com</p>
</li>
<li>
<p>opsworks.eu-central-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-northeast-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-northeast-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-south-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-southeast-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-southeast-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.sa-east-1.amazonaws.com</p>
</li>
</ul>
<p>
<b>Chef Versions</b>
</p>
<p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you
use the <code>ConfigurationManager</code> parameter to specify the Chef version.
The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information,
see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p>
<note>
<p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-opsworks
using your favorite package manager:

- `npm install @aws-sdk/client-opsworks`
- `yarn add @aws-sdk/client-opsworks`
- `pnpm add @aws-sdk/client-opsworks`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `OpsWorksClient` and
the commands you need, for example `AssignInstanceCommand`:

```js
// ES5 example
const { OpsWorksClient, AssignInstanceCommand } = require("@aws-sdk/client-opsworks");
```

```ts
// ES6+ example
import { OpsWorksClient, AssignInstanceCommand } from "@aws-sdk/client-opsworks";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new OpsWorksClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssignInstanceCommand(params);
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
import * as AWS from "@aws-sdk/client-opsworks";
const client = new AWS.OpsWorks({ region: "REGION" });

// async/await.
try {
  const data = await client.assignInstance(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .assignInstance(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.assignInstance(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-opsworks` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
