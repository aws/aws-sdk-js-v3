# @aws-sdk/client-proton

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-proton/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-proton)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-proton.svg)](https://www.npmjs.com/package/@aws-sdk/client-proton)

## Description

AWS SDK for JavaScript Proton Client for Node.js, Browser and React Native.

<p>This is the AWS Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the AWS Proton service.</p>
<p>The documentation for each action shows the Query API request parameters and the XML response.</p>
<p>Alternatively, you can use the AWS CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS Command Line Interface User Guide</a>.</p>
<p>The AWS Proton service is a two-pronged automation framework. Administrators create service templates to provide standardized
infrastructure and deployment tooling for serverless and container based applications. Developers, in turn, select from the available
service templates to automate their application or service deployments.</p>
<p>Because administrators define the infrastructure and tooling that AWS Proton deploys and manages, they need permissions to use all of the
listed API operations.</p>
<p>When developers select a specific infrastructure and tooling set, AWS Proton deploys their applications. To monitor their applications
that are running on AWS Proton, developers need permissions to the service <i>create</i>, <i>list</i>,
<i>update</i> and <i>delete</i> API operations and the service instance <i>list</i> and
<i>update</i> API operations.</p>
<p>To learn more about AWS Proton administration, see the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/Welcome.html">AWS Proton
Administrator Guide</a>.</p>
<p>To learn more about deploying serverless and containerized applications on AWS Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">AWS Proton User Guide</a>.</p>
<p>
<b>Ensuring Idempotency</b>
</p>
<p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows of the operation are
complete. Operations might also time out or encounter other server issues before they're complete, even if the request already returned a
result. This might make it difficult to determine whether the request succeeded. Moreover, you might need to retry the request multiple
times to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the
operation occurs multiple times. This means that you might create more resources than you intended.</p>
<p>
<i>Idempotency</i> ensures that an API request action completes no more than one time. With an idempotent request, if the
original request action completes successfully, any subsequent retries complete successfully without performing any further actions.
However, the result might contain updated information, such as the current creation status.</p>
<p>The following lists of APIs are grouped according to methods that ensure idempotency.</p>
<p>
<b>Idempotent create APIs with a client token</b>
</p>
<p>The API actions in this list support idempotency with the use of a <i>client token</i>. The corresponding AWS CLI
commands also support idempotency using a client token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. To
make an idempotent API request using one of these actions, specify a client token in the request. We recommend that you
<i>don't</i> reuse the same client token for other API requests. If you don’t provide a client token for these APIs, a
default client token is automatically provided by SDKs.</p>
<p>Given a request action that has succeeded:</p>
<p>If you retry the request using the same client token and the same parameters, the retry succeeds without performing any further actions
other than returning the original resource detail data in the response.</p>
<p>If you retry the request using the same client token, but one or more of the parameters are different, the retry throws a
<code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p>
<p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new resource is
created.</p>
<p>If the original resource is deleted and you retry the request, a new resource is created.</p>
<p>Idempotent create APIs with a client token:</p>
<ul>
<li>
<p>CreateEnvironmentTemplateVersion</p>
</li>
<li>
<p>CreateServiceTemplateVersion</p>
</li>
<li>
<p>CreateEnvironmentAccountConnection</p>
</li>
</ul>
<p>
<b>Idempotent create APIs</b>
</p>
<p>Given a request action that has succeeded:</p>
<p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been modified, the retry
succeeds without performing any further actions other than returning the original resource detail data in the response.</p>
<p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p>
<p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an
<code>IdempotentParameterMismatch</code> error.</p>
<p>Idempotent create APIs:</p>
<ul>
<li>
<p>CreateEnvironmentTemplate</p>
</li>
<li>
<p>CreateServiceTemplate</p>
</li>
<li>
<p>CreateEnvironment</p>
</li>
<li>
<p>CreateService</p>
</li>
</ul>
<p>
<b>Idempotent delete APIs</b>
</p>
<p>Given a request action that has succeeded:</p>
<p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in the response.</p>
<p>If you retry and the resource doesn't exist, the response is empty.</p>
<p>In both cases, the retry succeeds.</p>
<p>Idempotent delete APIs:</p>
<ul>
<li>
<p>DeleteEnvironmentTemplate</p>
</li>
<li>
<p>DeleteEnvironmentTemplateVersion</p>
</li>
<li>
<p>DeleteServiceTemplate</p>
</li>
<li>
<p>DeleteServiceTemplateVersion</p>
</li>
<li>
<p>DeleteEnvironmentAccountConnection</p>
</li>
</ul>
<p>
<b>Asynchronous idempotent delete APIs</b>
</p>
<p>Given a request action that has succeeded:</p>
<p>If you retry the request with an API from this group, if the original request delete operation status is
<code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any further actions.</p>
<p>If the original request delete operation is complete, a retry returns an empty response.</p>
<p>Asynchronous idempotent delete APIs:</p>
<ul>
<li>
<p>DeleteEnvironment</p>
</li>
<li>
<p>DeleteService</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-proton
using your favorite package manager:

- `npm install @aws-sdk/client-proton`
- `yarn add @aws-sdk/client-proton`
- `pnpm add @aws-sdk/client-proton`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ProtonClient` and
the commands you need, for example `AcceptEnvironmentAccountConnectionCommand`:

```js
// ES5 example
const { ProtonClient, AcceptEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton");
```

```ts
// ES6+ example
import { ProtonClient, AcceptEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ProtonClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptEnvironmentAccountConnectionCommand(params);
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
import * as AWS from "@aws-sdk/client-proton";
const client = new AWS.Proton({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptEnvironmentAccountConnection(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptEnvironmentAccountConnection(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptEnvironmentAccountConnection(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-proton` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
