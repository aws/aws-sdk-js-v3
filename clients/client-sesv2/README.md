# @aws-sdk/client-sesv2

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-sesv2/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-sesv2)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-sesv2.svg)](https://www.npmjs.com/package/@aws-sdk/client-sesv2)

## Description

AWS SDK for JavaScript SESv2 Client for Node.js, Browser and React Native.

<fullname>Amazon SES API v2</fullname>

<p>Welcome to the Amazon SES API v2 Reference. This guide provides information about the Amazon SES API v2,
including supported operations, data types, parameters, and schemas.</p>
<p>
<a href="https://aws.amazon.com/pinpoint">Amazon SES</a> is an AWS service that
you can use to send email messages to your customers.</p>
<p>If you're new to Amazon SES API v2, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer
Guide</a>. The <i>Amazon SES Developer Guide</i> provides information
and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>
<p>The Amazon SES API v2 is available in several AWS Regions and it provides an endpoint for each
of these Regions. For a list of all the Regions and endpoints where the API is currently
available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ses_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To
learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the
<i>Amazon Web Services General Reference</i>.</p>
<p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones
are physically isolated from each other, but are united by private, low-latency,
high-throughput, and highly redundant network connections. These Availability Zones
enable us to provide very high levels of availability and redundancy, while also
minimizing latency. To learn more about the number of Availability Zones that are
available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-sesv2
using your favorite package manager:

- `npm install @aws-sdk/client-sesv2`
- `yarn add @aws-sdk/client-sesv2`
- `pnpm add @aws-sdk/client-sesv2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SESv2Client` and
the commands you need, for example `CreateConfigurationSetCommand`:

```js
// ES5 example
const { SESv2Client, CreateConfigurationSetCommand } = require("@aws-sdk/client-sesv2");
```

```ts
// ES6+ example
import { SESv2Client, CreateConfigurationSetCommand } from "@aws-sdk/client-sesv2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by difference commands.
const client = new SESv2Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateConfigurationSetCommand(params);
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
import * as AWS from "@aws-sdk/client-sesv2";
const client = new AWS.SESv2({ region: "REGION" });

// async/await.
try {
  const data = client.createConfigurationSet(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createConfigurationSet(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createConfigurationSet(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sesv2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
