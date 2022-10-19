<!-- generated file, do not edit directly -->

# @aws-sdk/client-support-app

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-support-app/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-support-app)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-support-app.svg)](https://www.npmjs.com/package/@aws-sdk/client-support-app)

## Description

AWS SDK for JavaScript SupportApp Client for Node.js, Browser and React Native.

<fullname>Amazon Web Services Support App in Slack</fullname>

<p>You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your
Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can
perform the following tasks directly in your Slack channel:</p>
<ul>
<li>
<p>Create, search, update, and resolve your support cases</p>
</li>
<li>
<p>Request service quota increases for your account</p>
</li>
<li>
<p>Invite Amazon Web Services Support agents to your channel so that you can chat directly about your
support cases</p>
</li>
</ul>
<p>For more information about how to perform these actions in Slack, see the following
documentation in the <i>Amazon Web Services Support User Guide</i>:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html">Amazon Web Services Support App in Slack</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/awssupport/latest/user/joining-a-live-chat-session.html">Joining a live chat session with Amazon Web Services Support</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/awssupport/latest/user/service-quota-increase.html">Requesting service quota increases</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-commands.html">Amazon Web Services Support App commands in Slack</a>
</p>
</li>
</ul>
<p>You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack
configurations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a
Slack workspace to enable the Amazon Web Services Support App</a>.</p>
<note>
<ul>
<li>
<p>You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API. </p>
</li>
<li>
<p>For more information about the Amazon Web Services Support App endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/awssupport.html#awssupport_app_region">Amazon Web Services Support App in Slack endpoints</a> in the <i>Amazon Web Services General
Reference</i>.</p>
</li>
</ul>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-support-app
using your favorite package manager:

- `npm install @aws-sdk/client-support-app`
- `yarn add @aws-sdk/client-support-app`
- `pnpm add @aws-sdk/client-support-app`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SupportAppClient` and
the commands you need, for example `CreateSlackChannelConfigurationCommand`:

```js
// ES5 example
const { SupportAppClient, CreateSlackChannelConfigurationCommand } = require("@aws-sdk/client-support-app");
```

```ts
// ES6+ example
import { SupportAppClient, CreateSlackChannelConfigurationCommand } from "@aws-sdk/client-support-app";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SupportAppClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateSlackChannelConfigurationCommand(params);
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
import * as AWS from "@aws-sdk/client-support-app";
const client = new AWS.SupportApp({ region: "REGION" });

// async/await.
try {
  const data = await client.createSlackChannelConfiguration(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createSlackChannelConfiguration(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createSlackChannelConfiguration(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-support-app` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
