# AWS SDK for JavaScript v3 gamma

![Build Status](https://codebuild.us-west-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiMmtFajZWQmNUbEhidnBKN1VncjRrNVI3d0JUcFpGWUd3STh4T3N3Rnljc1BMaEIrYm9HU2t4YTV1RlE1YmlnUG9XM3luY0Ftc2tBc0xTeVFJMkVOa24wPSIsIml2UGFyYW1ldGVyU3BlYyI6IlBDMDl6UEROK1dlU1h1OWciLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)
[![codecov](https://codecov.io/gh/aws/aws-sdk-js-v3/branch/master/graph/badge.svg)](https://codecov.io/gh/aws/aws-sdk-js-v3)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=aws/aws-sdk-js-v3)](https://dependabot.com)

The **AWS SDK for JavaScript v3 gamma** is a rewrite of V2 with some great new features. As with version 2, it enables you to easily work with [Amazon Web Services](https://aws.amazon.com/), but has been written in TypeScript and adds several frequently requested features, like modularized packages.

Many aspects of the SDK have been refactored and cleaned up, in addition to generating service client packages instead of hydrating services at SDK runtime. The v3 gamma is your chance to influence the direction of the new AWS SDK for JavaScript. Tell us what you like, tell us what you don’t like by [opening an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose). Your feedback matters to us.

## Production Readiness

This project is in gamma. We want feedback from you, and may make breaking changes in future releases while the SDK is still in gamma.

The new AWS SDK for JavaScript will also be able to run alongside the version 2.x SDK in the same package to allow partial migration to the new product. As we get close to general availability for version 3, we’ll share a more detailed plan on how we’ll support the 2.x line.

## Getting started

Let’s walk through setting up a project that depends on DynamoDB from the SDK and makes a simple service call. The following steps use yarn as an example. These steps assume you have Node.js and yarn already installed.

1. Create a new Node.js project.
2. Inside of the project, run: `yarn add @aws-sdk/client-dynamodb@gamma`. Adding packages results in update in [lock file](https://docs.npmjs.com/configuring-npm/package-locks.html), `yarn.lock` or `package-lock.json`. You **should** commit your lock file along with your code to avoid potential breaking changes.

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

## New features

### Modularized packages

The SDK is now split up across multiple packages. The 2.x version of the SDK contained support for every service. This made it very easy to use multiple services in a project. Due to the limitations around reducing the size of the SDK when only using a handful of services or operations, many customers requested having separate packages for each service client. We have also split up the core parts of the SDK so that service clients only pull in what they need. For example, a service sends responses in JSON will no longer need to also have an XML parser as a dependency.

For those that were already importing services as sub-modules from the version 2.x SDK, the import statement doesn’t look too different. Here’s an example of importing the AWS Lambda service in version 2.0 of the SDK, and the gamma:

```javascript
// import the Lambda client constructor in version 2.0 of the SDK
const Lambda = require("aws-sdk/clients/lambda");

// import the Lambda client constructor in version 3.0 gamma
const { Lambda } = require("@aws-sdk/client-lambda");
```

It is also possible to import both versions of the Lambda client by changing the variable name the Lambda constructor is stored in.

### API changes

We’ve made several public API changes to improve consistency, make the SDK easier to use, and remove deprecated or confusing APIs. The following are some of the big changes included in the new AWS SDK for JavaScript v3 gamma.

#### Configuration

In version 2.x of the SDK, service configuration could be passed to individual client constructors.
However, these configurations would first be merged automatically into a copy of the global SDK configuration: `AWS.config`.

Also, calling `AWS.config.update({/* params *})` only updated configuration for service clients instantiated after the update call was made, not any existing clients.

This behavior was a frequent source of confusion, and made it difficult to add configuration to the global object that only affects a subset of service clients in a forward-compatible way.
In v3 gamma, there is no longer a global configuration managed by the SDK.
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

   For more information, please refer to [contributing guide](https://github.com/aws/aws-sdk-js-v3/blob/master/CONTRIBUTING.md#setup-and-testing).

1. After the repository is successfully built, change directory to the client that you want to install, for example:

   ```
   cd clients/client-dynamodb
   ```

1. Pack the client:

   ```
   yarn pack .
   ```

   `yarn pack` will create an archive file in the client package folder, e.g. `aws-sdk-client-dynamodb-v1.0.0-gamma.1.tgz`.

1. Change directory to the project you are working on and move the archive to the location to store the vendor packages:

   ```
   mv path/to/aws-sdk-js-v3/clients/client-dynamodb/aws-sdk-client-dynamodb-v1.0.0-gamma.1.tgz ./path/to/vendors/folder
   ```

1. Install the package to your project:

   ```
   yarn add ./path/to/vendors/folder/aws-sdk-client-dynamodb-v1.0.0-gamma.1.tgz
   ```

### Giving feedback and contributing

You can provide feedback to us in several ways. Both positive and negative feedback is appreciated.
While the SDK is in gamma, you may encounter bugs while using it.
If you do, please feel free to [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose) on our GitHub repository.
Our GitHub issues page also includes work we know still needs to be done before exiting the gamma state.

#### Feedback

**GitHub issues**. Customers who are comfortable giving public feedback can open a GitHub issue in the new repository.
This is the preferred mechanism to give feedback so that other customers can engage in the conversation, +1 issues, etc.
Issues you open will be evaluated, and included in our roadmap for the GA launch.

**Gitter channel**. For informal discussion or general feedback, you may join the [Gitter chat](https://gitter.im/aws/aws-sdk-js-v3).
The Gitter channel is also a great place to get help with v3 gamma from other developers. JS SDK team doesn't
track the discussion daily, so feel free to open a GitHub issue if your question is not answered there.

#### Contributing

You can open pull requests for fixes or additions to the new AWS SDK for JavaScript v3 gamma.
All pull requests must be submitted under the Apache 2.0 license and will be reviewed by an SDK team member prior to merging.
Accompanying unit tests are appreciated. See [Contributing](CONTRIBUTING.md) for more information.
