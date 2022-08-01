<!-- generated file, do not edit directly -->

# @aws-sdk/client-appconfigdata

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-appconfigdata/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-appconfigdata)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-appconfigdata.svg)](https://www.npmjs.com/package/@aws-sdk/client-appconfigdata)

## Description

AWS SDK for JavaScript AppConfigData Client for Node.js, Browser and React Native.

<p>AppConfig Data provides the data plane APIs your application uses to retrieve configuration data.
Here's how it works:</p>
<p>Your application retrieves configuration data by first establishing a configuration
session using the AppConfig Data <a>StartConfigurationSession</a> API action. Your session's
client then makes periodic calls to <a>GetLatestConfiguration</a> to check for
and retrieve the latest data available.</p>
<p>When calling <code>StartConfigurationSession</code>, your code sends the following
information:</p>
<ul>
<li>
<p>Identifiers (ID or name) of an AppConfig application, environment, and
configuration profile that the session tracks.</p>
</li>
<li>
<p>(Optional) The minimum amount of time the session's client must wait between calls
to <code>GetLatestConfiguration</code>.</p>
</li>
</ul>
<p>In response, AppConfig provides an <code>InitialConfigurationToken</code> to be given to
the session's client and used the first time it calls <code>GetLatestConfiguration</code>
for that session.</p>
<p>When calling <code>GetLatestConfiguration</code>, your client code sends the most recent
<code>ConfigurationToken</code> value it has and receives in response:</p>
<ul>
<li>
<p>
<code>NextPollConfigurationToken</code>: the <code>ConfigurationToken</code> value
to use on the next call to <code>GetLatestConfiguration</code>.</p>
</li>
<li>
<p>
<code>NextPollIntervalInSeconds</code>: the duration the client should wait before
making its next call to <code>GetLatestConfiguration</code>. This duration may vary
over the course of the session, so it should be used instead of the value sent on the
<code>StartConfigurationSession</code> call.</p>
</li>
<li>
<p>The configuration: the latest data intended for the session. This may be empty if
the client already has the latest version of the configuration.</p>
</li>
</ul>
<p>For more information and to view example CLI commands that show how to retrieve a
configuration using the AppConfig Data <code>StartConfigurationSession</code> and
<code>GetLatestConfiguration</code> API actions, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Receiving the
configuration</a> in the <i>AppConfig User Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-appconfigdata
using your favorite package manager:

- `npm install @aws-sdk/client-appconfigdata`
- `yarn add @aws-sdk/client-appconfigdata`
- `pnpm add @aws-sdk/client-appconfigdata`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppConfigDataClient` and
the commands you need, for example `GetLatestConfigurationCommand`:

```js
// ES5 example
const { AppConfigDataClient, GetLatestConfigurationCommand } = require("@aws-sdk/client-appconfigdata");
```

```ts
// ES6+ example
import { AppConfigDataClient, GetLatestConfigurationCommand } from "@aws-sdk/client-appconfigdata";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AppConfigDataClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new GetLatestConfigurationCommand(params);
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
import * as AWS from "@aws-sdk/client-appconfigdata";
const client = new AWS.AppConfigData({ region: "REGION" });

// async/await.
try {
  const data = await client.getLatestConfiguration(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getLatestConfiguration(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.getLatestConfiguration(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-appconfigdata` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
