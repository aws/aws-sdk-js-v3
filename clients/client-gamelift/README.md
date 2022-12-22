<!-- generated file, do not edit directly -->

# @aws-sdk/client-gamelift

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-gamelift/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-gamelift)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-gamelift.svg)](https://www.npmjs.com/package/@aws-sdk/client-gamelift)

## Description

AWS SDK for JavaScript GameLift Client for Node.js, Browser and React Native.

<p>Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the
cloud, including tools for deploying, operating, and scaling game servers. Built on
Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance,
high-reliability, low-cost game servers while dynamically scaling your resource usage to
meet player demand. </p>
<p>
<b>About GameLift solutions</b>
</p>
<p>Get more information on these GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">GameLift Developer Guide</a>.</p>
<ul>
<li>
<p>GameLift managed hosting -- GameLift offers a fully managed service to set up
and maintain computing machines for hosting, manage game session and player
session life cycle, and handle security, storage, and performance tracking. You
can use automatic scaling tools to balance player demand and hosting costs,
configure your game session management to minimize player latency, and add
FlexMatch for matchmaking.</p>
</li>
<li>
<p>Managed hosting with Realtime Servers -- With GameLift Realtime Servers, you can quickly configure
and set up ready-to-go game servers for your game. Realtime Servers provides a game server
framework with core GameLift infrastructure already built in. Then use the full
range of GameLift managed hosting features, including FlexMatch, for your
game.</p>
</li>
<li>
<p>GameLift FleetIQ -- Use GameLift FleetIQ as a standalone service while hosting your games using EC2
instances and Auto Scaling groups. GameLift FleetIQ provides optimizations for game
hosting, including boosting the viability of low-cost Spot Instances gaming. For
a complete solution, pair the GameLift FleetIQ and FlexMatch standalone services.</p>
</li>
<li>
<p>GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a
customizable matchmaking service for multiplayer games. Use FlexMatch as
integrated with GameLift managed hosting or incorporate FlexMatch as a standalone
service into your own hosting solution.</p>
</li>
</ul>
<p>
<b>About this API Reference</b>
</p>
<p>This reference guide describes the low-level service API for Amazon GameLift. With each topic
in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI
reference. Useful links:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">GameLift API
operations listed by tasks</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> GameLift tools
and resources</a>
</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-gamelift
using your favorite package manager:

- `npm install @aws-sdk/client-gamelift`
- `yarn add @aws-sdk/client-gamelift`
- `pnpm add @aws-sdk/client-gamelift`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GameLiftClient` and
the commands you need, for example `AcceptMatchCommand`:

```js
// ES5 example
const { GameLiftClient, AcceptMatchCommand } = require("@aws-sdk/client-gamelift");
```

```ts
// ES6+ example
import { GameLiftClient, AcceptMatchCommand } from "@aws-sdk/client-gamelift";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GameLiftClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptMatchCommand(params);
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
import * as AWS from "@aws-sdk/client-gamelift";
const client = new AWS.GameLift({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptMatch(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptMatch(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptMatch(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-gamelift` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
