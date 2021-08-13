# AWS SDK for JavaScript v3

![Build Status](https://codebuild.us-west-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiMmtFajZWQmNUbEhidnBKN1VncjRrNVI3d0JUcFpGWUd3STh4T3N3Rnljc1BMaEIrYm9HU2t4YTV1RlE1YmlnUG9XM3luY0Ftc2tBc0xTeVFJMkVOa24wPSIsIml2UGFyYW1ldGVyU3BlYyI6IlBDMDl6UEROK1dlU1h1OWciLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=main)
[![codecov](https://codecov.io/gh/aws/aws-sdk-js-v3/branch/main/graph/badge.svg)](https://codecov.io/gh/aws/aws-sdk-js-v3)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=aws/aws-sdk-js-v3)](https://dependabot.com)

The **AWS SDK for JavaScript v3** is a rewrite of v2 with some great new features.
As with version 2, it enables you to easily work with [Amazon Web Services](https://aws.amazon.com/),
but has a [modular architecture](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/) with a separate package for each service.
It also includes many frequently requested features, such as a [first-class TypeScript support](https://aws.amazon.com/blogs/developer/first-class-typescript-support-in-modular-aws-sdk-for-javascript/)
and a [new middleware stack](https://aws.amazon.com/blogs/developer/middleware-stack-modular-aws-sdk-js/).
For more details, visit blog post on [general availability of Modular AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-aws-sdk-for-javascript-is-now-generally-available/).

To get started with JavaScript SDK version 3, visit our
[Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/).

If you are starting a new project with AWS SDK for JavaScript v3, then you can refer
[aws-sdk-js-notes-app](https://github.com/aws-samples/aws-sdk-js-notes-app) which shows examples of calling
multiple AWS Services in a note taking application.
If you are migrating from v2 to v3, then you can visit our [self-guided workshop](https://github.com/aws-samples/aws-sdk-js-v3-workshop)
which builds as basic version of note taking application using AWS SDK for JavaScript v2
and provides step-by-step migration instructions to v3.

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

# Table of Contents

1. [Getting Started](#getting-started)
1. [New Features](#new-features)
   1. [Modularized packages](#modularized-packages)
   1. [API consistency changes](#api-changes)
      1. [Configuration](#configuration)
      1. [Middleware Stack](#Middleware)
   1. [How to upgrade](#other-changes)
1. [High Level Concepts in V3](#high-level-concepts)
   1. [Generated Packages](#generated-code)
   1. [Paginators](#paginators)
   1. [Abort Controller](#abort-controller)
   1. [Middleware Stack](#middleware-stack)
1. [Install from Source](#install-from-Source)
1. [Giving feedback and contributing](#giving-feedback-and-contributing)

## Getting Started

Let’s walk through setting up a project that depends on DynamoDB from the SDK and makes a simple service call. The following steps use yarn as an example. These steps assume you have Node.js and yarn already installed.

1. Create a new Node.js project.
2. Inside of the project, run: `yarn add @aws-sdk/client-dynamodb`. Adding packages results in update in lock file, [yarn.lock](https://yarnpkg.com/getting-started/qa/#should-lockfiles-be-committed-to-the-repository) or [package-lock.json](https://docs.npmjs.com/configuring-npm/package-lock-json). You **should** commit your lock file along with your code to avoid potential breaking changes.

3. Create a new file called index.js, create a DynamoDB service client and send a request.

```javascript
const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");

(async () => {
  const client = new DynamoDBClient({ region: "us-west-2" });
  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    console.log(results.TableNames.join("\n"));
  } catch (err) {
    console.error(err);
  }
})();
```

If you want to use non-modular (v2-like) interfaces, you can import client with only the service name (e.g DynamoDB), and call the operation name directly from the client:

```javascript
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

(async () => {
  const client = new DynamoDB({ region: "us-west-2" });
  try {
    const results = await client.listTables({});
    console.log(results.TableNames.join("\n"));
  } catch (err) {
    console.error(err);
  }
})();
```

If you use tree shaking to reduce bundle size, using non-modular interface will increase the bundle size as compared to using modular interface.

<!-- Uncomment when numbers are available for gamma clients
In our workshop code, a lambda with DynamoDBClient and a command takes ~18kB while DynamoDB takes ~26 kB ([details](https://github.com/aws-samples/aws-sdk-js-v3-workshop/blob/dc3ad778b04dfe3f8f277dca67162da79c937eca/Exercise1/backend/README.md#reduce-bundle-size-by-just-importing-dynamodb)) -->

If you are consuming modular AWS SDK for JavaScript on react-native environments, you will need
to add and import following polyfills in your react-native application:

- [react-native-get-random-values](https://www.npmjs.com/package/react-native-get-random-values)
- [react-native-url-polyfill](https://www.npmjs.com/package/react-native-url-polyfill)

```js
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
```

## New features

### Modularized packages

The SDK is now split up across multiple packages. The 2.x version of the SDK contained support for every service. This made it very easy to use multiple services in a project. Due to the limitations around reducing the size of the SDK when only using a handful of services or operations, many customers requested having separate packages for each service client. We have also split up the core parts of the SDK so that service clients only pull in what they need. For example, a service sends responses in JSON will no longer need to also have an XML parser as a dependency.

For those that were already importing services as sub-modules from the v2 SDK, the import statement doesn’t look too different. Here’s an example of importing the AWS Lambda service in v2 of the SDK, and the v3 SDK:

```javascript
// import the Lambda client constructor in v2 of the SDK
const Lambda = require("aws-sdk/clients/lambda");

// import the Lambda client constructor in v3 SDK
const { Lambda } = require("@aws-sdk/client-lambda");
```

It is also possible to import both versions of the Lambda client by changing the variable name the Lambda constructor is stored in.

### API changes

We’ve made several public API changes to improve consistency, make the SDK easier to use, and remove deprecated or confusing APIs. The following are some of the big changes included in the new AWS SDK for JavaScript v3.

#### Configuration

In version 2.x of the SDK, service configuration could be passed to individual client constructors.
However, these configurations would first be merged automatically into a copy of the global SDK configuration: `AWS.config`.

Also, calling `AWS.config.update({/* params */})` only updated configuration for service clients instantiated after the update call was made, not any existing clients.

This behavior was a frequent source of confusion, and made it difficult to add configuration to the global object that only affects a subset of service clients in a forward-compatible way.
In v3, there is no longer a global configuration managed by the SDK.
Configuration must be passed to each service client that is instantiated.
It is still possible to share the same configuration across multiple clients but that configuration will not be automatically merged with a global state.

#### Middleware

Version 2.x of the SDK allows modifying a request throughout multiple stages of a request’s lifecycle by attaching event listeners to a request.
Some feedback we received frequently was that it can be difficult to debug what went wrong during a request’s lifecycle.
We’ve switched to using a middleware stack to control the lifecycle of an operation call now.
This gives us a few benefits. Each middleware in the stack calls the next middleware after making any changes to the request object.
This also makes debugging issues in the stack much easier since you can see exactly which middleware have been called leading up to an error.
Here’s an example of adding a custom header using middleware:

```javascript
const client = new DynamoDB({ region: "us-west-2" });
client.middlewareStack.add(
  (next, context) => (args) => {
    args.request.headers["Custom-Header"] = "value";
    console.log("\n -- printed from inside middleware -- \n");
    return next(args);
  },
  {
    step: "build",
  }
);
await client.listTables({});
```

In the above example, we’re adding a middleware to our DynamoDB client’s middleware stack.
The first argument is a function that accepts next, the next middleware in the stack to call, and context, an object that contains some information about the operation being called.
It returns a function that accepts args, an object that contains the parameters passed to the operation and the request, and returns the result from calling the next middleware with args.

#### Other Changes

If you are looking for a breakdown of the API changes from AWS SDK for JavaScript v2 to v3,
we have them listed in [UPGRADING.md](https://github.com/aws/aws-sdk-js-v3/blob/main/UPGRADING.md).

### Install from Source

All clients have been published to NPM and can be installed as described above. If you want to play with latest clients, you can build from source as follows:

1. Clone this repository to local by:

   ```
   git clone https://github.com/aws/aws-sdk-js-v3.git
   ```

1. Under the repository root directory, run following command to link and build the whole library, the process may take several minutes:

   ```
   yarn && yarn test:all
   ```

   For more information, please refer to [contributing guide](https://github.com/aws/aws-sdk-js-v3/blob/main/CONTRIBUTING.md#setup-and-testing).

1. After the repository is successfully built, change directory to the client that you want to install, for example:

   ```
   cd clients/client-dynamodb
   ```

1. Pack the client:

   ```
   yarn pack .
   ```

   `yarn pack` will create an archive file in the client package folder, e.g. `aws-sdk-client-dynamodb-v3.0.0.tgz`.

1. Change directory to the project you are working on and move the archive to the location to store the vendor packages:

   ```
   mv path/to/aws-sdk-js-v3/clients/client-dynamodb/aws-sdk-client-dynamodb-v3.0.0.tgz ./path/to/vendors/folder
   ```

1. Install the package to your project:

   ```
   yarn add ./path/to/vendors/folder/aws-sdk-client-dynamodb-v3.0.0.tgz
   ```

### Giving feedback and contributing

You can provide feedback to us in several ways. Both positive and negative feedback is appreciated.
If you do, please feel free to [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose) on our GitHub repository.
Our GitHub issues page also includes work we know still needs to be done to reach full feature parity with v2 SDK.

#### Feedback

**GitHub issues**. Customers who are comfortable giving public feedback can open a GitHub issue in the new repository.
This is the preferred mechanism to give feedback so that other customers can engage in the conversation, +1 issues, etc.
Issues you open will be evaluated, and included in our roadmap for the GA launch.

**Gitter channel**. For informal discussion or general feedback, you may join the [Gitter chat](https://gitter.im/aws/aws-sdk-js-v3).
The Gitter channel is also a great place to get help with v3 from other developers. JS SDK team doesn't
track the discussion daily, so feel free to open a GitHub issue if your question is not answered there.

#### Contributing

You can open pull requests for fixes or additions to the new AWS SDK for JavaScript v3.
All pull requests must be submitted under the Apache 2.0 license and will be reviewed by an SDK team member prior to merging.
Accompanying unit tests are appreciated. See [Contributing](CONTRIBUTING.md) for more information.

## High Level Concepts

This is an introduction to some of the high level concepts behind AWS SDK for JavaScript (v3)
which are shared between services and might make your life easier. Please consult the user
guide and API reference for service specific details.

#### Terminology:

**Bare-bones clients/commands**: This refers to a modular way of consuming individual operations on JS SDK clients. It results in less code being imported and thus more performant. It is otherwise equivalent to the aggregated clients/commands.

```javascript
// this imports a bare-bones version of S3 that exposes the .send operation
import { S3Client } from "@aws-sdk/client-s3"

// this imports just the getObject operation from S3
import { GetObjectCommand } from "@aws-sdk/client-s3"

//usage
const bareBonesS3 = new S3Client({...});
await bareBonesS3.send(new GetObjectCommand({...}));
```

**Aggregated clients/commands**: This refers to a way of consuming clients that contain all operations on them. Under the hood this calls the bare-bones commands. This imports all commands on a particular client and results in more code being imported and thus less performant. This is 1:1 with v2's style.

```javascript
// this imports an aggregated version of S3 that exposes the .send operation
import { S3 } from "@aws-sdk/client-s3"

// No need to import an operation as all operations are already on the S3 prototype

//usage
const aggregatedS3 = new S3({...});
await aggregatedS3.getObject({...}));
```

### Generated Code

The v3 codebase is generated from internal AWS models that AWS services expose. We use [smithy-typescript](https://github.com/awslabs/smithy-typescript) to generate all code in the `/clients` subdirectory. These packages always have a prefix of `@aws-sdk/client-XXXX` and are one-to-one with AWS services and service operations. You should be importing `@aws-sdk/client-XXXX` for most usage.

Clients depend on common "utility" code in `/packages`. The code in `/packages` is manually written and outside of special cases (like credenitials or abort controller) is generally not very useful alone.

Lastly we have higher level libraries in `/lib`. These are javascript specific libraries that wrap client operations to make them easier to work with. Popular examples are `@aws-sdk/lib-dynamodb` which [simplifies working with items in Amazon DynamoDB](https://github.com/aws/aws-sdk-js-v3/blob/main/lib/lib-dynamodb/README.md) or `@aws-sdk/lib-storage` which exposes the `Upload` function and [simplifies parallel uploads in S3's multipartUpload](https://github.com/aws/aws-sdk-js-v3/blob/main/lib/lib-storage/README.md).

1. `/packages`. This sub directory is where most manual code updates are done. These are published to NPM under `@aws-sdk/XXXX` and have no special prefix.
1. `/clients`. This sub directory is code generated and depends on code published from `/packages` . It is 1:1 with AWS services and operations. Manual edits should generally not occur here. These are published to NPM under `@aws-sdk/client-XXXX`.
1. `/lib`. This sub directory depends on generated code published from `/clients`. It wraps existing AWS services and operations to make them easier to work with in Javascript. These are published to NPM under `@aws-sdk/lib-XXXX`

### Paginators

Many AWS operations return paginated results when the response object is too large to return in a single response. In AWS SDK for JavaScript v2, the response contains a token you can use to retrieve the next page of results. You then need to write additional functions to process pages of results.

In AWS SDK for JavaScript v3 we’ve improved pagination using async generator functions, which are similar to generator functions, with the following differences:

- When called, async generator functions return an object, an async generator whose methods (`next`, `throw`, and `return`) return promises for { `value`, `done` }, instead of directly returning { `value`, `done` }. This automatically makes the returned async generator objects async iterators.
- await expressions and `for await (x of y)` statements are allowed.
- The behavior of `yield*` is modified to support delegation to async iterables.

The Async Iterators were added in the ES2018 iteration of JavaScript. They are supported by Node.js 10.x+ and by all modern browsers, including Chrome 63+, Firefox 57+, Safari 11.1+, and Edge 79+. If you’re using TypeScript v2.3+, you can compile Async Iterators to older versions of JavaScript.

An async iterator is much like an iterator, except that its `next()` method returns a promise for a { `value`, `done` } pair. As an implicit aspect of the Async Iteration protocol, the next promise is not requested until the previous one resolves. This is a simple, yet a very powerful pattern.

#### Example Pagination Usage

In v3, the clients expose paginateOperationName APIs that are written using async generators, allowing you to use async iterators in a for await..of loop. You can perform the paginateListTables operation from `@aws-sdk/client-dynamodb` as follows:

```javascript
const {
  DynamoDBClient,
  paginateListTables,
} = require("@aws-sdk/client-dynamodb");

...
const paginatorConfig = {
  client: new DynamoDBClient({}),
  pageSize: 25
};
const commandParams = {};
const paginator = paginateListTables(paginatorConfig, commandParams);

const tableNames = [];
for await (const page of paginator) {
  // page contains a single paginated output.
  tableNames.push(...page.TableNames);
}
...

```

Or simplified:

```javascript
...
const client = new DynamoDBClient({});

const tableNames = [];
for await (const page of paginateListTables({ client }, {})) {
    // page contains a single paginated output.
    tableNames.push(...page.TableNames);
}
...
```

### Abort Controller

In v3, we support the AbortController interface which allows you to abort requests as and when desired.

The [AbortController Interface](https://dom.spec.whatwg.org/#interface-abortcontroller) provides an `abort()` method that toggles the state of a corresponding AbortSignal object. Most APIs accept an AbortSignal object, and respond to `abort()` by rejecting any unsettled promise with an “AbortError”.

```javascript
// Returns a new controller whose signal is set to a newly created AbortSignal object.
const controller = new AbortController();

// Returns the AbortSignal object associated with controller.
const signal = controller.signal;

// Invoking this method will set controller’s AbortSignal's aborted flag
// and signal to any observers that the associated activity is to be aborted.
controller.abort();
```

#### AbortController Usage

In JavaScript SDK v3, we added an implementation of WHATWG AbortController interface in `@aws-sdk/abort-controller`. To use it, you need to send `AbortController.signal` as `abortSignal` in the httpOptions parameter when calling `.send()` operation on the client as follows:

```javascript
const { AbortController } = require("@aws-sdk/abort-controller");
const { S3Client, CreateBucketCommand } = require("@aws-sdk/client-s3");

...

const abortController = new AbortController();
const client = new S3Client(clientParams);

const requestPromise = client.send(new CreateBucketCommand(commandParams), {
  abortSignal: abortController.signal,
});

// The abortController can be aborted any time.
// The request will not be created if abortSignal is already aborted.
// The request will be destroyed if abortSignal is aborted before response is returned.
abortController.abort();

// This will fail with "AbortError" as abortSignal is aborted.
await requestPromise;
```

For a full pagination deep dive please check out our [blog post](https://aws.amazon.com/blogs/developer/pagination-using-async-iterators-in-modular-aws-sdk-for-javascript/).

#### AbortController Example

The following code snippet shows how to upload a file using S3's putObject API in the browser with support to abort the upload. First, create a controller using the `AbortController()` constructor, then grab a reference to its associated AbortSignal object using the AbortController.signal property. When the `PutObjectCommand` is called with `.send()` operation, pass in AbortController.signal as abortSignal in the httpOptions parameter. This will allow you to abort the PutObject operation by calling `abortController.abort()`.

```javascript
const abortController = new AbortController();
const abortSignal = abortController.signal;

const uploadBtn = document.querySelector('.upload');
const abortBtn = document.querySelector('.abort');

uploadBtn.addEventListener('click', uploadObject);

abortBtn.addEventListener('click', function() {
  abortController.abort();
  console.log('Upload aborted');
});

const uploadObject = async (file) => {
  ...
  const client = new S3Client(clientParams);
  try {
    await client.send(new PutObjectCommand(commandParams), { abortSignal });
  } catch(e) {
    if (e.name === "AbortError") {
      uploadProgress.textContent = 'Upload aborted: ' + e.message;
    }
    ...
  }
}
```

For a full abort controller deep dive please check out our [blog post](https://aws.amazon.com/blogs/developer/abortcontroller-in-modular-aws-sdk-for-javascript/).

### Middleware Stack

The JavaScript SDK maintains a series of asynchronous actions. These series include actions that serialize input parameters into the data over the wire and deserialize response data into JavaScript objects. Such actions are implemented using functions called middleware and executed in a specific order. The object that hosts all the middleware including the ordering information is called a Middleware Stack. You can add your custom actions to the SDK and/or remove the default ones.

When an API call is made, SDK sorts the middleware according to the step it belongs to and its priority within each step. The input parameters pass through each middleware. An HTTP request gets created and updated along the process. The HTTP Handler sends a request to the service, and receives a response. A response object is passed back through the same middleware stack in reverse, and is deserialized into a JavaScript object.

A middleware is a higher-order function that transfers user input and/or HTTP request, then delegates to “next” middleware. It also transfers the result from “next” middleware. A middleware function also has access to context parameter, which optionally contains data to be shared across middleware.

For example, you can use middleware to add a custom header like S3 object metadata:

```javascript
const { S3 } = require("@aws-sdk/client-s3");
const client = new S3({ region: "us-west-2" });
// Middleware added to client, applies to all commands.
client.middlewareStack.add(
  (next, context) => async (args) => {
    args.request.headers["x-amz-meta-foo"] = "bar";
    const result = next(args);
    // result.response contains data returned from next middleware.
    return result;
  },
  {
    step: "build",
    name: "addFooMetadataMiddleware",
    tags: ["METADATA", "FOO"],
  }
);

await client.putObject(params);
```

Specifying the absolute location of your middleware
The example above adds middleware to `build` step of middleware stack. The middleware stack contains five steps to manage a request’s lifecycle:

- The **initialize** lifecycle step initializes an API call. This step typically adds default input values to a command. The HTTP request has not yet been constructed.
- The **serialize** lifecycle step constructs an HTTP request for the API call. Example of typical serialization tasks include input validation and building an HTTP request from user input. The downstream middleware will have access to serialized HTTP request object in callback’s parameter `args.request`.
- The **build** lifecycle step builds on top of serialized HTTP request. Examples of typical build tasks include injecting HTTP headers that describe a stable aspect of the request, such as `Content-Length` or a body checksum. Any request alterations will be applied to all retries.
- The **finalizeRequest** lifecycle step prepares the request to be sent over the wire. The request in this stage is semantically complete and should therefore only be altered to match the recipient’s expectations. Examples of typical finalization tasks include request signing, performing retries and injecting hop-by-hop headers.
- The **deserialize** lifecycle step deserializes the raw response object to a structured response. The upstream middleware have access to deserialized data in next callbacks return value: `result.output`.
  Each middleware must be added to a specific step. By default each middleware in the same step has undifferentiated order. In some cases, you might want to execute a middleware before or after another middleware in the same step. You can achieve it by specifying its `priority`.

```javascript
client.middlewareStack.add(middleware, {
  step: "initialize",
  priority: "high", // or "low".
});
```

For a full middleware stack deep dive please check out our [blog post](https://aws.amazon.com/blogs/developer/middleware-stack-modular-aws-sdk-js/).
