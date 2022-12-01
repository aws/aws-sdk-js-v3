<!-- generated file, do not edit directly -->

# @aws-sdk/client-codecatalyst

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-codecatalyst/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-codecatalyst)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-codecatalyst.svg)](https://www.npmjs.com/package/@aws-sdk/client-codecatalyst)

## Description

AWS SDK for JavaScript CodeCatalyst Client for Node.js, Browser and React Native.

<note>
<p>
<b>Amazon CodeCatalyst is in preview release and subject to change.</b>
</p>
</note>
<p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst
API to work with the following objects. </p>
<p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p>
<ul>
<li>
<p>
<a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p>
</li>
<li>
<p>
<a>CreateDevEnvironment</a>, which creates a Dev Environment,
where you can quickly work on the code stored in the source repositories of your project.</p>
</li>
<li>
<p>
<a>CreateProject</a> which creates a project in a specified space.</p>
</li>
<li>
<p>
<a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p>
</li>
<li>
<p>
<a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p>
</li>
<li>
<p>
<a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p>
</li>
<li>
<p>
<a>GetProject</a>, which returns information about a project.</p>
</li>
<li>
<p>
<a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source
repository.</p>
</li>
<li>
<p>
<a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes
and the billing plan for the space.</p>
</li>
<li>
<p>
<a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p>
</li>
<li>
<p>
<a>ListDevEnvironments</a>, which retrives a list of Dev Environments in a project.</p>
</li>
<li>
<p>
<a>ListProjects</a>, which retrieves a list of projects in a space.</p>
</li>
<li>
<p>
<a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p>
</li>
<li>
<p>
<a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p>
</li>
<li>
<p>
<a>ListSpaces</a>, which retrieves a list of spaces.</p>
</li>
<li>
<p>
<a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p>
</li>
<li>
<p>
<a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p>
</li>
<li>
<p>
<a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p>
</li>
<li>
<p>
<a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p>
</li>
<li>
<p>
<a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p>
</li>
</ul>
<p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p>
<ul>
<li>
<p>
<a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p>
</li>
<li>
<p>
<a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p>
</li>
<li>
<p>
<a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-codecatalyst
using your favorite package manager:

- `npm install @aws-sdk/client-codecatalyst`
- `yarn add @aws-sdk/client-codecatalyst`
- `pnpm add @aws-sdk/client-codecatalyst`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeCatalystClient` and
the commands you need, for example `CreateAccessTokenCommand`:

```js
// ES5 example
const { CodeCatalystClient, CreateAccessTokenCommand } = require("@aws-sdk/client-codecatalyst");
```

```ts
// ES6+ example
import { CodeCatalystClient, CreateAccessTokenCommand } from "@aws-sdk/client-codecatalyst";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeCatalystClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateAccessTokenCommand(params);
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
import * as AWS from "@aws-sdk/client-codecatalyst";
const client = new AWS.CodeCatalyst({ region: "REGION" });

// async/await.
try {
  const data = await client.createAccessToken(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createAccessToken(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createAccessToken(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codecatalyst` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
