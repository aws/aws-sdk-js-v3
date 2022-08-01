<!-- generated file, do not edit directly -->

# @aws-sdk/client-cloud9

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-cloud9/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloud9)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-cloud9.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloud9)

## Description

AWS SDK for JavaScript Cloud9 Client for Node.js, Browser and React Native.

<fullname>Cloud9</fullname>

<p>Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and
release software in the cloud.</p>
<p>For more information about Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">Cloud9 User Guide</a>.</p>
<p>Cloud9 supports these operations:</p>
<ul>
<li>
<p>
<code>CreateEnvironmentEC2</code>: Creates an Cloud9 development environment, launches
an Amazon EC2 instance, and then connects from the instance to the environment.</p>
</li>
<li>
<p>
<code>CreateEnvironmentMembership</code>: Adds an environment member to an
environment.</p>
</li>
<li>
<p>
<code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is
connected to the environment, also terminates the instance.</p>
</li>
<li>
<p>
<code>DeleteEnvironmentMembership</code>: Deletes an environment member from an
environment.</p>
</li>
<li>
<p>
<code>DescribeEnvironmentMemberships</code>: Gets information about environment
members for an environment.</p>
</li>
<li>
<p>
<code>DescribeEnvironments</code>: Gets information about environments.</p>
</li>
<li>
<p>
<code>DescribeEnvironmentStatus</code>: Gets status information for an
environment.</p>
</li>
<li>
<p>
<code>ListEnvironments</code>: Gets a list of environment identifiers.</p>
</li>
<li>
<p>
<code>ListTagsForResource</code>: Gets the tags for an environment.</p>
</li>
<li>
<p>
<code>TagResource</code>: Adds tags to an environment.</p>
</li>
<li>
<p>
<code>UntagResource</code>: Removes tags from an environment.</p>
</li>
<li>
<p>
<code>UpdateEnvironment</code>: Changes the settings of an existing
environment.</p>
</li>
<li>
<p>
<code>UpdateEnvironmentMembership</code>: Changes the settings of an existing
environment member for an environment.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-cloud9
using your favorite package manager:

- `npm install @aws-sdk/client-cloud9`
- `yarn add @aws-sdk/client-cloud9`
- `pnpm add @aws-sdk/client-cloud9`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Cloud9Client` and
the commands you need, for example `CreateEnvironmentEC2Command`:

```js
// ES5 example
const { Cloud9Client, CreateEnvironmentEC2Command } = require("@aws-sdk/client-cloud9");
```

```ts
// ES6+ example
import { Cloud9Client, CreateEnvironmentEC2Command } from "@aws-sdk/client-cloud9";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new Cloud9Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateEnvironmentEC2Command(params);
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
import * as AWS from "@aws-sdk/client-cloud9";
const client = new AWS.Cloud9({ region: "REGION" });

// async/await.
try {
  const data = await client.createEnvironmentEC2(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createEnvironmentEC2(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createEnvironmentEC2(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-cloud9` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
