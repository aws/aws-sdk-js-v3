<!-- generated file, do not edit directly -->

# @aws-sdk/client-appconfig

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-appconfig/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-appconfig)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-appconfig.svg)](https://www.npmjs.com/package/@aws-sdk/client-appconfig)

## Description

AWS SDK for JavaScript AppConfig Client for Node.js, Browser and React Native.

<p>Use AppConfig, a capability of Amazon Web Services Systems Manager, to create, manage, and quickly
deploy application configurations. AppConfig supports controlled deployments to
applications of any size and includes built-in validation checks and monitoring. You can
use AppConfig with applications hosted on Amazon EC2 instances, Lambda, containers,
mobile applications, or IoT devices.</p>
<p>To prevent errors when deploying application configurations, especially for production
systems where a simple typo could cause an unexpected outage, AppConfig includes
validators. A validator provides a syntactic or semantic check to ensure that the
configuration you want to deploy works as intended. To validate your application
configuration data, you provide a schema or an Amazon Web Services Lambda function that runs against
the configuration. The configuration deployment or update can only proceed when the
configuration data is valid.</p>
<p>During a configuration deployment, AppConfig monitors the application to
ensure that the deployment is successful. If the system encounters an error, AppConfig rolls back the change to minimize impact for your application users. You can
configure a deployment strategy for each application or environment that includes
deployment criteria, including velocity, bake time, and alarms to monitor. Similar to error
monitoring, if a deployment triggers an alarm, AppConfig automatically rolls back
to the previous version. </p>
<p>AppConfig supports multiple use cases. Here are some examples:</p>
<ul>
<li>
<p>
<b>Feature flags</b>: Use AppConfig to turn on
new features that require a timely deployment, such as a product launch or
announcement. </p>
</li>
<li>
<p>
<b>Application tuning</b>: Use AppConfig to
carefully introduce changes to your application that can only be tested with
production traffic.</p>
</li>
<li>
<p>
<b>Allow list</b>: Use AppConfig to allow
premium subscribers to access paid content. </p>
</li>
<li>
<p>
<b>Operational issues</b>: Use AppConfig to
reduce stress on your application when a dependency or other external factor impacts
the system.</p>
</li>
</ul>
<p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-appconfig
using your favorite package manager:

- `npm install @aws-sdk/client-appconfig`
- `yarn add @aws-sdk/client-appconfig`
- `pnpm add @aws-sdk/client-appconfig`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppConfigClient` and
the commands you need, for example `CreateApplicationCommand`:

```js
// ES5 example
const { AppConfigClient, CreateApplicationCommand } = require("@aws-sdk/client-appconfig");
```

```ts
// ES6+ example
import { AppConfigClient, CreateApplicationCommand } from "@aws-sdk/client-appconfig";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AppConfigClient({ region: "REGION" });

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
import * as AWS from "@aws-sdk/client-appconfig";
const client = new AWS.AppConfig({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-appconfig` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
