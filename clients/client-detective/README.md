<!-- generated file, do not edit directly -->

# @aws-sdk/client-detective

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-detective/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-detective)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-detective.svg)](https://www.npmjs.com/package/@aws-sdk/client-detective)

## Description

AWS SDK for JavaScript Detective Client for Node.js, Browser and React Native.

<p>Detective uses machine learning and purpose-built visualizations to help you to
analyze and investigate security issues across your Amazon Web Services (Amazon Web Services) workloads. Detective automatically extracts time-based events such
as login attempts, API calls, and network traffic from CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by
Amazon GuardDuty.</p>
<p>The Detective API primarily supports the creation and management of behavior
graphs. A behavior graph contains the extracted data from a set of member accounts, and is
created and managed by an administrator account.</p>
<p>To add a member account to the behavior graph, the administrator account sends an
invitation to the account. When the account accepts the invitation, it becomes a member
account in the behavior graph.</p>
<p>Detective is also integrated with Organizations. The organization
management account designates the Detective administrator account for the
organization. That account becomes the administrator account for the organization behavior
graph. The Detective administrator account is also the delegated administrator
account for Detective in Organizations.</p>
<p>The Detective administrator account can enable any organization account as a
member account in the organization behavior graph. The organization accounts do not receive
invitations. The Detective administrator account can also invite other accounts to
the organization behavior graph.</p>
<p>Every behavior graph is specific to a Region. You can only use the API to manage
behavior graphs that belong to the Region that is associated with the currently selected
endpoint.</p>
<p>The administrator account for a behavior graph can use the Detective API to do
the following:</p>
<ul>
<li>
<p>Enable and disable Detective. Enabling Detective creates a new
behavior graph.</p>
</li>
<li>
<p>View the list of member accounts in a behavior graph.</p>
</li>
<li>
<p>Add member accounts to a behavior graph.</p>
</li>
<li>
<p>Remove member accounts from a behavior graph.</p>
</li>
<li>
<p>Apply tags to a behavior graph.</p>
</li>
</ul>
<p>The organization management account can use the Detective API to select the
delegated administrator for Detective.</p>
<p>The Detective administrator account for an organization can use the Detective API to do the following:</p>
<ul>
<li>
<p>Perform all of the functions of an administrator account.</p>
</li>
<li>
<p>Determine whether to automatically enable new organization accounts as member
accounts in the organization behavior graph.</p>
</li>
</ul>
<p>An invited member account can use the Detective API to do the following:</p>
<ul>
<li>
<p>View the list of behavior graphs that they are invited to.</p>
</li>
<li>
<p>Accept an invitation to contribute to a behavior graph.</p>
</li>
<li>
<p>Decline an invitation to contribute to a behavior graph.</p>
</li>
<li>
<p>Remove their account from a behavior graph.</p>
</li>
</ul>
<p>All API actions are logged as CloudTrail events. See <a href="https://docs.aws.amazon.com/detective/latest/adminguide/logging-using-cloudtrail.html">Logging Detective API Calls with CloudTrail</a>.</p>
<note>
<p>We replaced the term "master account" with the term "administrator account." An
administrator account is used to centrally manage multiple accounts. In the case of
Detective, the administrator account manages the accounts in their behavior
graph.</p>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-detective
using your favorite package manager:

- `npm install @aws-sdk/client-detective`
- `yarn add @aws-sdk/client-detective`
- `pnpm add @aws-sdk/client-detective`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DetectiveClient` and
the commands you need, for example `AcceptInvitationCommand`:

```js
// ES5 example
const { DetectiveClient, AcceptInvitationCommand } = require("@aws-sdk/client-detective");
```

```ts
// ES6+ example
import { DetectiveClient, AcceptInvitationCommand } from "@aws-sdk/client-detective";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DetectiveClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptInvitationCommand(params);
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
import * as AWS from "@aws-sdk/client-detective";
const client = new AWS.Detective({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptInvitation(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptInvitation(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptInvitation(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-detective` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
