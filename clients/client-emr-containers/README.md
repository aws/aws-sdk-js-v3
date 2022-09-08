<!-- generated file, do not edit directly -->

# @aws-sdk/client-emr-containers

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-emr-containers/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-emr-containers)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-emr-containers.svg)](https://www.npmjs.com/package/@aws-sdk/client-emr-containers)

## Description

AWS SDK for JavaScript EMRContainers Client for Node.js, Browser and React Native.

<p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run
open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With
this deployment option, you can focus on running analytics workloads while Amazon EMR on
EKS builds, configures, and manages containers for open-source applications. For more
information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is Amazon EMR on
EKS</a>.</p>
<p>
<i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The
<code>emr-containers</code> prefix is used in the following scenarios: </p>
<ul>
<li>
<p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws
emr-containers start-job-run</code>.</p>
</li>
<li>
<p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example,
<code>"Action": [ "emr-containers:StartJobRun"]</code>. For more information, see
<a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p>
</li>
<li>
<p>It is the prefix used in Amazon EMR on EKS service endpoints. For example,
<code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see
<a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKS Service Endpoints</a>.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-emr-containers
using your favorite package manager:

- `npm install @aws-sdk/client-emr-containers`
- `yarn add @aws-sdk/client-emr-containers`
- `pnpm add @aws-sdk/client-emr-containers`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `EMRContainersClient` and
the commands you need, for example `CancelJobRunCommand`:

```js
// ES5 example
const { EMRContainersClient, CancelJobRunCommand } = require("@aws-sdk/client-emr-containers");
```

```ts
// ES6+ example
import { EMRContainersClient, CancelJobRunCommand } from "@aws-sdk/client-emr-containers";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new EMRContainersClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CancelJobRunCommand(params);
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
import * as AWS from "@aws-sdk/client-emr-containers";
const client = new AWS.EMRContainers({ region: "REGION" });

// async/await.
try {
  const data = await client.cancelJobRun(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelJobRun(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelJobRun(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-emr-containers` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
