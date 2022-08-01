<!-- generated file, do not edit directly -->

# @aws-sdk/client-opsworkscm

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-opsworkscm/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-opsworkscm)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-opsworkscm.svg)](https://www.npmjs.com/package/@aws-sdk/client-opsworkscm)

## Description

AWS SDK for JavaScript OpsWorksCM Client for Node.js, Browser and React Native.

<fullname>AWS OpsWorks CM</fullname>

<p>AWS OpsWorks for configuration management (CM) is a service that runs and manages
configuration management servers. You can use AWS OpsWorks CM to create and manage AWS
OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove
nodes for the servers to manage.</p>
<p>
<b>Glossary of terms</b>
</p>
<ul>
<li>
<p>
<b>Server</b>: A configuration management server that can be
highly-available. The configuration management server runs on
an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational
Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration
manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start
or stop servers. After you create servers, they continue to run until they are deleted.</p>
</li>
<li>
<p>
<b>Engine</b>: The engine is the specific configuration manager
that you want to use. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.</p>
</li>
<li>
<p>
<b>Backup</b>: This
is an application-level backup of the data that the configuration manager
stores. AWS OpsWorks CM
creates an S3 bucket for backups when you launch the first
server. A backup maintains a snapshot of a server's configuration-related
attributes at the time the backup starts.</p>
</li>
<li>
<p>
<b>Events</b>:
Events are always related to a server. Events are written
during server creation, when health checks run, when backups
are created, when system maintenance is performed, etc. When you delete a server, the server's events are
also deleted.</p>
</li>
<li>
<p>
<b>Account attributes</b>:
Every account has attributes that are assigned in the AWS OpsWorks CM
database. These attributes store information about configuration limits (servers,
backups, etc.) and your customer account.
</p>
</li>
</ul>
<p>
<b>Endpoints</b>
</p>
<p>AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers
can only be accessed or managed within the endpoint in which they are created.</p>
<ul>
<li>
<p>opsworks-cm.us-east-1.amazonaws.com</p>
</li>
<li>
<p>opsworks-cm.us-east-2.amazonaws.com</p>
</li>
<li>
<p>opsworks-cm.us-west-1.amazonaws.com</p>
</li>
<li>
<p>opsworks-cm.us-west-2.amazonaws.com</p>
</li>
<li>
<p>opsworks-cm.ap-northeast-1.amazonaws.com</p>
</li>
<li>
<p>opsworks-cm.ap-southeast-1.amazonaws.com</p>
</li>
<li>
<p>opsworks-cm.ap-southeast-2.amazonaws.com</p>
</li>
<li>
<p>opsworks-cm.eu-central-1.amazonaws.com</p>
</li>
<li>
<p>opsworks-cm.eu-west-1.amazonaws.com</p>
</li>
</ul>
<p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/opsworks-service.html">AWS OpsWorks endpoints and quotas</a> in the AWS General Reference.</p>
<p>
<b>Throttling limits</b>
</p>
<p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-opsworkscm
using your favorite package manager:

- `npm install @aws-sdk/client-opsworkscm`
- `yarn add @aws-sdk/client-opsworkscm`
- `pnpm add @aws-sdk/client-opsworkscm`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `OpsWorksCMClient` and
the commands you need, for example `AssociateNodeCommand`:

```js
// ES5 example
const { OpsWorksCMClient, AssociateNodeCommand } = require("@aws-sdk/client-opsworkscm");
```

```ts
// ES6+ example
import { OpsWorksCMClient, AssociateNodeCommand } from "@aws-sdk/client-opsworkscm";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new OpsWorksCMClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateNodeCommand(params);
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
import * as AWS from "@aws-sdk/client-opsworkscm";
const client = new AWS.OpsWorksCM({ region: "REGION" });

// async/await.
try {
  const data = await client.associateNode(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateNode(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateNode(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-opsworkscm` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
