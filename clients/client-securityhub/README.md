<!-- generated file, do not edit directly -->

# @aws-sdk/client-securityhub

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-securityhub/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-securityhub)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-securityhub.svg)](https://www.npmjs.com/package/@aws-sdk/client-securityhub)

## Description

AWS SDK for JavaScript SecurityHub Client for Node.js, Browser and React Native.

<p>Security Hub provides you with a comprehensive view of the security state of your Amazon Web Services environment and resources. It also provides you with the readiness status
of your environment based on controls from supported security standards. Security Hub collects
security data from Amazon Web Services accounts, services, and integrated third-party products and helps
you analyze security trends in your environment to identify the highest priority security
issues. For more information about Security Hub, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">
<i>Security HubUser
Guide</i>
</a>.</p>
<p>When you use operations in the Security Hub API, the requests are executed only in the Amazon Web Services
Region that is currently active or in the specific Amazon Web Services Region that you specify in your
request. Any configuration or settings change that results from the operation is applied
only to that Region. To make the same change in other Regions, execute the same command for
each Region to apply the change to.</p>
<p>For example, if your Region is set to <code>us-west-2</code>, when you use <code>CreateMembers</code> to add a member account to Security Hub, the association of
the member account with the administrator account is created only in the <code>us-west-2</code>
Region. Security Hub must be enabled for the member account in the same Region that the invitation
was sent from.</p>
<p>The following throttling limits apply to using Security Hub API operations.</p>
<ul>
<li>
<p>
<code>BatchEnableStandards</code> - <code>RateLimit</code> of 1
request per second, <code>BurstLimit</code> of 1 request per second.</p>
</li>
<li>
<p>
<code>GetFindings</code> - <code>RateLimit</code> of 3 requests per second.
<code>BurstLimit</code> of 6 requests per second.</p>
</li>
<li>
<p>
<code>BatchImportFindings</code> - <code>RateLimit</code> of 10 requests per second.
<code>BurstLimit</code> of 30 requests per second.</p>
</li>
<li>
<p>
<code>BatchUpdateFindings</code> - <code>RateLimit</code> of 10 requests per second.
<code>BurstLimit</code> of 30 requests per second.</p>
</li>
<li>
<p>
<code>UpdateStandardsControl</code> - <code>RateLimit</code> of
1 request per second, <code>BurstLimit</code> of 5 requests per second.</p>
</li>
<li>
<p>All other operations - <code>RateLimit</code> of 10 requests per second.
<code>BurstLimit</code> of 30 requests per second.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-securityhub
using your favorite package manager:

- `npm install @aws-sdk/client-securityhub`
- `yarn add @aws-sdk/client-securityhub`
- `pnpm add @aws-sdk/client-securityhub`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SecurityHubClient` and
the commands you need, for example `AcceptAdministratorInvitationCommand`:

```js
// ES5 example
const { SecurityHubClient, AcceptAdministratorInvitationCommand } = require("@aws-sdk/client-securityhub");
```

```ts
// ES6+ example
import { SecurityHubClient, AcceptAdministratorInvitationCommand } from "@aws-sdk/client-securityhub";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SecurityHubClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptAdministratorInvitationCommand(params);
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
import * as AWS from "@aws-sdk/client-securityhub";
const client = new AWS.SecurityHub({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptAdministratorInvitation(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptAdministratorInvitation(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptAdministratorInvitation(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-securityhub` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
