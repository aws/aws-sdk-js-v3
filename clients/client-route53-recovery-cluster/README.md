# @aws-sdk/client-route53-recovery-cluster

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-route53-recovery-cluster/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-route53-recovery-cluster)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-route53-recovery-cluster.svg)](https://www.npmjs.com/package/@aws-sdk/client-route53-recovery-cluster)

## Description

AWS SDK for JavaScript Route53RecoveryCluster Client for Node.js, Browser and React Native.

<p>Welcome to the Amazon Route 53 Application Recovery Controller API Reference Guide for Recovery Control Data Plane .</p>
<p>Recovery control in Route 53 Application Recovery Controller includes extremely reliable routing controls that enable you to recover applications
by rerouting traffic, for example, across Availability Zones or AWS Regions. Routing controls are simple on/off switches
hosted on a cluster. A cluster is a set of five redundant regional endpoints against which you can execute API calls to update or
get the state of routing controls. You use routing controls to failover traffic to recover your application
across Availability Zones or Regions.</p>
<p>This API guide includes information about how to get and update routing control states in Route 53 Application Recovery Controller.</p>
<p>For more information about Route 53 Application Recovery Controller, see the following:</p>
<ul>
<li>
<p>You can create clusters, routing controls, and control panels by using the control plane API for Recovery
Control. For more information, see <a href="https://docs.aws.amazon.com/recovery-cluster/latest/api/">Amazon Route 53 Application Recovery Controller Recovery Control API Reference</a>.</p>
</li>
<li>
<p>Route 53 Application Recovery Controller also provides continuous readiness checks to ensure that your applications are scaled to handle failover traffic.
For more information about the related API actions, see <a href="https://docs.aws.amazon.com/recovery-readiness/latest/api/">Amazon Route 53 Application Recovery Controller Recovery Readiness API Reference</a>.</p>
</li>
<li>
<p>For more information about creating resilient applications and preparing for recovery readiness with Route 53 Application Recovery Controller,
see the <a href="r53recovery/latest/dg/">Amazon Route 53 Application Recovery Controller Developer Guide</a>.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-route53-recovery-cluster
using your favorite package manager:

- `npm install @aws-sdk/client-route53-recovery-cluster`
- `yarn add @aws-sdk/client-route53-recovery-cluster`
- `pnpm add @aws-sdk/client-route53-recovery-cluster`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Route53RecoveryClusterClient` and
the commands you need, for example `GetRoutingControlStateCommand`:

```js
// ES5 example
const {
  Route53RecoveryClusterClient,
  GetRoutingControlStateCommand,
} = require("@aws-sdk/client-route53-recovery-cluster");
```

```ts
// ES6+ example
import { Route53RecoveryClusterClient, GetRoutingControlStateCommand } from "@aws-sdk/client-route53-recovery-cluster";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new Route53RecoveryClusterClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new GetRoutingControlStateCommand(params);
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
import * as AWS from "@aws-sdk/client-route53-recovery-cluster";
const client = new AWS.Route53RecoveryCluster({ region: "REGION" });

// async/await.
try {
  const data = await client.getRoutingControlState(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getRoutingControlState(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.getRoutingControlState(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-route53-recovery-cluster` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
