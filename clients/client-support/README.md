<!-- generated file, do not edit directly -->

# @aws-sdk/client-support

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-support/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-support)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-support.svg)](https://www.npmjs.com/package/@aws-sdk/client-support)

## Description

AWS SDK for JavaScript Support Client for Node.js, Browser and React Native.

<fullname>Amazon Web Services Support</fullname>

<p>The <i>Amazon Web Services Support API Reference</i> is intended for programmers who need detailed
information about the Amazon Web Services Support operations and data types. You can use the API to manage
your support cases programmatically. The Amazon Web Services Support API uses HTTP methods that return
results in JSON format.</p>
<note>
<ul>
<li>
<p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
API. </p>
</li>
<li>
<p>If you call the Amazon Web Services Support API from an account that doesn't have a
Business, Enterprise On-Ramp, or Enterprise Support plan, the
<code>SubscriptionRequiredException</code> error message appears. For
information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
</li>
</ul>
</note>
<p>You can also use the Amazon Web Services Support API to access features for <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">Trusted Advisor</a>. You can return a list of
checks and their descriptions, get check results, specify checks to refresh, and get the
refresh status of checks.</p>
<p>You can manage your support cases with the following Amazon Web Services Support API operations:</p>
<ul>
<li>
<p>The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations
create Amazon Web Services Support cases, retrieve information about cases, and resolve cases.</p>
</li>
<li>
<p>The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add communications and attachments to Amazon Web Services Support
cases.</p>
</li>
<li>
<p>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return Amazon Web Service names, service codes, service categories, and problem
severity levels. You use these values when you call the <a>CreateCase</a> operation.</p>
</li>
</ul>
<p>You can also use the Amazon Web Services Support API to call the  Trusted Advisor operations. For more
information, see <a href="https://docs.aws.amazon.com/">Trusted Advisor</a> in the
<i>Amazon Web Services Support User Guide</i>.</p>
<p>For authentication of requests, Amazon Web Services Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
Process</a>.</p>
<p>For more information about this service and the endpoints to use, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html">About the
Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-support
using your favorite package manager:

- `npm install @aws-sdk/client-support`
- `yarn add @aws-sdk/client-support`
- `pnpm add @aws-sdk/client-support`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SupportClient` and
the commands you need, for example `AddAttachmentsToSetCommand`:

```js
// ES5 example
const { SupportClient, AddAttachmentsToSetCommand } = require("@aws-sdk/client-support");
```

```ts
// ES6+ example
import { SupportClient, AddAttachmentsToSetCommand } from "@aws-sdk/client-support";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SupportClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddAttachmentsToSetCommand(params);
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
import * as AWS from "@aws-sdk/client-support";
const client = new AWS.Support({ region: "REGION" });

// async/await.
try {
  const data = await client.addAttachmentsToSet(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addAttachmentsToSet(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addAttachmentsToSet(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-support` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
