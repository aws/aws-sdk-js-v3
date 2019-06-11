# AWS SDK for JavaScript V3 Developer Preview

[![Build Status](https://travis-ci.org/aws/aws-sdk-js-v3.svg?branch=master)](https://travis-ci.org/aws/aws-sdk-js-v3)
[![codecov](https://codecov.io/gh/aws/aws-sdk-js-v3/branch/master/graph/badge.svg)](https://codecov.io/gh/aws/aws-sdk-js-v3)
[![Greenkeeper badge](https://badges.greenkeeper.io/aws/aws-sdk-js-v3.svg)](https://greenkeeper.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

The **AWS SDK for JavaScript V3 Developer Preview** is a rewrite of V2 with some great new features. As with version 2, it enables you to easily work with [Amazon Web Services](https://aws.amazon.com/), but has been written in TypeScript and adds several frequently requested features, like modularized packages.

Many aspects of the SDK have been refactored and cleaned up, in addition to generating service client packages instead of hydrating services at SDK runtime. The Developer Preview is your chance to influence the direction of the new AWS SDK for JavaScript. Tell us what you like, tell us what you don’t like. Your feedback matters to us.

## Production Readiness

This project is still in its early stages. We want feedback from you, and may make breaking changes in future releases while the SDK is still in developer preview.

The new AWS SDK for JavaScript will also be able to run alongside the version 2.x SDK in the same package to allow partial migration to the new product. As we get close to general availability for version 3, we’ll share a more detailed plan on how we’ll support the 2.x line.

## Getting started

Let’s walk through setting up a project that depends on DynamoDB from the SDK and makes a simple service call. The following steps use npm as an example. These steps assume you have node.js and npm already installed.

1. Create a new node.js project.
2. Inside of the project, run: `npm install --save @aws-sdk/client-dynamodb-v2-node@preview`
3. Create a new file called index.js, create a DynamoDB service client and send a request.

```javascript
const {
  DynamoDBClient
} = require("@aws-sdk/client-dynamodb-node/DynamoDBClient");
const {
  ListTablesCommand
} = require("@aws-sdk/client-dynamodb-node/commands/ListTablesCommand");
async function example() {
  const client = new DynamoDBClient({ region: "us-west-2" });
  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    console.log(results.TableNames.join("\n"));
  } catch (err) {
    console.error(err);
  }
}
example();
```

For users want to use V2-like interfaces, you can import client with only the service name(e.g DynamoDB), and call the operation name directly from the client:

```javascript
const { DynamoDB } = require("@aws-sdk/client-dynamodb-node");
async function example() {
  const client = new DynamoDB({ region: "us-west-2" });
  try {
    const results = await client.listTables({});
    console.log(results.TableNames.join("\n"));
  } catch (err) {
    console.error(err);
  }
}
example();
```

Note that this client is subject to change. It might be removed with SDK V3 comes closer to production-ready.

## New features

### Modularized packages

The SDK is now split up across multiple packages. The 2.x version of the SDK contained support for every service. This made it very easy to use multiple services in a project. Due to the limitations around reducing the size of the SDK when only using a handful of services or operations, many customers requested having separate packages for each service client. We have also split up the core parts of the SDK so that service clients only pull in what they need. For example, a service sends responses in JSON will no longer need to also have an XML parser as a dependency.

For those that were already importing services as sub-modules from the version 2.x SDK, the import statement doesn’t look too different. Here’s an example of importing the AWS Lambda service in version 2.0 of the SDK, and the Developer Preview:

```javascript
// import the Lambda client constructor in version 2.0 of the SDK
const Lambda = require("aws-sdk/clients/lambda");

// import the Lambda client constructor in the node.js version of the Developer Preview
const { Lambda } = require("@aws-sdk/client-lambda-node");
```

It is also possible to import both versions of the Lambda client by changing the variable name the Lambda constructor is stored in.
Separate packages for browser and node.js

In addition to publishing separate packages for each service client, each package has both a browser and node.js version. In version 2.x of the SDK we made use of the browser field in package.json to make it possible to write code against the aws-sdk package that could be used in either browsers or node.js. This has a few limitations. To import the SDK into a project, it is necessary to use build tools that know how to parse the browser field to get the browser version of the SDK. This causes problems in Electron apps where the node.js version of the SDK is wanted, but build tools are also being used to create a JavaScript bundle as this would cause the browser version of the SDK to be used. For TypeScript support, this also required node.js and dom typings to be present.

By publishing separate packages for node.js and browser environments, we’ve removed the guesswork around which version your builds will use. This also allows us to use environment-specific typings. For example, streams are implemented with different interfaces in node.js and browsers. Depending on which package you are using, the typings will reflect the streams for the environment you’ve chosen.

### Modeled exceptions

The SDK now support parsing the modeled traits from exceptions sent from AWS services. For example, DynamoDB's transaction operations conduct multiple sequential operations with a single API request. When a request fail, you need to know which operation the request fails at. In this circumstance, knowing the failed reason is critical. Now you can access these information by accessing the modeled traits in exception object. Here is a JS example:

```javascript
const {
  DynamoDBClient,
  TransactGetItemsCommand
} = require("@aws-sdk/client-dynamodb-node");
const ddb = new DynamoDBClient({});
const transactGet = new TransactGetItemsCommand({
  TransactItems: []
});
try {
  const data = await ddb.send(transactGet);
} catch (exception) {
  if (exception.name === "TransactionCanceledException") {
    const { CancellationReasons, Message } = exception.details;
    //exception object contains error code and message.
    //exception.details contains additional information parsed from service
  }
}
```

The SDK provides tagged union of all the exceptions types that is possible to be thrown by each operation. If you are using Typescript, you can cast the exception to the tagged union and the intellisense will hint you each member of the exception you'd like to handle. Here is the TypeScript example

```typescript
import { TransactGetItemsExceptionsUnion } from "@aws-sdk/client-dynamodb-node";
try {
  const data = await ddb.send(transactGet);
} catch (e) {
  const exception: TransactGetItemsExceptionsUnion = e;
  if (exception.name === "TransactionCanceledException") {
    const { CancellationReasons, Message } = exception.details;
  }
}
```

### API changes

We’ve made several public API changes to improve consistency, make the SDK easier to use, and remove deprecated or confusing APIs. The following are some of the bigger changes included in the new AWS SDK for JavaScript Developer Preview.

#### Configuration

In version 2.x of the SDK, service configuration could be passed to individual client constructors.
However, these configurations would first be merged automatically into a copy of the global SDK configuration: `AWS.config`.
Also, calling `AWS.config.update({/* params *})` only updated configuration for service clients instantiated after the update call was made, not any existing clients.

This behavior was a frequent source of confusion, and made it difficult to add configuration to the global object that only affects a subset of service clients in a forward-compatible way.
In the Developer Preview, there is no longer a global configuration managed by the SDK.
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
lambda.middlewareStack.add(
  (next, context) => args => {
    args.request.headers["Custom-Header"] = "value";
    return next(args);
  },
  {
    step: "build"
  }
);

lambda.putObject(params);
```

In the above example, we’re adding a middleware to our S3 client’s middleware stack.
The first argument is a function that accepts next, the next middleware in the stack to call, and context, an object that contains some information about the operation being called.
It returns a function that accepts args, an object that contains the parameters passed to the operation and the request, and returns the result from calling the next middleware with args.

### Giving feedback and contributing

You can provide feedback to us in several ways. Both positive and negative feedback is appreciated.
While the SDK is in preview, you may encounter bugs while using it.
If you do, please feel free to open an issue on our GitHub repository.
Our GitHub issues page also includes work we know still needs to be done before exiting a preview state.

#### Feedback

**GitHub issues**. Customers who are comfortable giving public feedback can open a GitHub issue in the new repository.
This is the preferred mechanism to give feedback so that other customers can engage in the conversation, +1 issues, etc.
Issues you open will be evaluated, and included in our roadmap for the GA launch.

**Gitter channel**. For informal discussion or general feedback, you may join the [Gitter chat](https://gitter.im/aws/aws-sdk-js-v3).
The Gitter channel is also a great place to get help with the Developer Preview from other developers. JS SDK team doesn't
track the discussion daily, so feel free to open an issue if your question cannot be answered there.

#### Contributing

You can open pull requests for fixes or additions to the new AWS SDK for JavaScript Developer Preview.
All pull requests must be submitted under the Apache 2.0 license and will be reviewed by an SDK team member prior to merging.
Accompanying unit tests are appreciated. See [Contributing](CONTRIBUTING.md) for more information.
