<!-- generated file, do not edit directly -->

# @aws-sdk/client-application-discovery-service

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-application-discovery-service/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-application-discovery-service)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-application-discovery-service.svg)](https://www.npmjs.com/package/@aws-sdk/client-application-discovery-service)

## Description

AWS SDK for JavaScript ApplicationDiscoveryService Client for Node.js, Browser and React Native.

<fullname>Amazon Web Services Application Discovery Service</fullname>

<p>Amazon Web Services Application Discovery Service helps you plan application migration projects. It
automatically identifies servers, virtual machines (VMs), and network dependencies in your
on-premises data centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">Amazon Web Services Application Discovery Service FAQ</a>.
Application Discovery Service offers three ways of performing discovery and
collecting data about your on-premises servers:</p>

<ul>
<li>
<p>
<b>Agentless discovery</b> is recommended for environments
that use VMware vCenter Server. This mode doesn't require you to install an agent on each
host. It does not work in non-VMware environments.</p>

<ul>
<li>
<p>Agentless discovery gathers server information regardless of the operating
systems, which minimizes the time required for initial on-premises infrastructure
assessment.</p>
</li>
<li>
<p>Agentless discovery doesn't collect information about network dependencies, only
agent-based discovery collects that information.</p>
</li>
</ul>
</li>
</ul>

<ul>
<li>
<p>
<b>Agent-based discovery</b> collects a richer set of data
than agentless discovery by using the Amazon Web Services Application Discovery Agent, which you install
on one or more hosts in your data center.</p>

<ul>
<li>
<p> The agent captures infrastructure and application information, including an
inventory of running processes, system performance information, resource utilization,
and network dependencies.</p>
</li>
<li>
<p>The information collected by agents is secured at rest and in transit to the
Application Discovery Service database in the cloud. </p>
</li>
</ul>
</li>
</ul>

<ul>
<li>
<p>
<b>Amazon Web Services Partner Network (APN) solutions</b> integrate with
Application Discovery Service, enabling you to import details of your on-premises
environment directly into Migration Hub without using the discovery connector or discovery
agent.</p>

<ul>
<li>
<p>Third-party application discovery tools can query Amazon Web Services Application Discovery
Service, and they can write to the Application Discovery Service database using the
public API.</p>
</li>
<li>
<p>In this way, you can import data into Migration Hub and view it, so that you can
associate applications with servers and track migrations.</p>
</li>
</ul>
</li>
</ul>

<p>
<b>Recommendations</b>
</p>
<p>We recommend that you use agent-based discovery for non-VMware environments, and
whenever you want to collect information about network dependencies. You can run agent-based
and agentless discovery simultaneously. Use agentless discovery to complete the initial
infrastructure assessment quickly, and then install agents on select hosts to collect
additional information.</p>

<p>
<b>Working With This Guide</b>
</p>

<p>This API reference provides descriptions, syntax, and usage examples for each of the
actions and data types for Application Discovery Service. The topic for each action shows the
API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to
access an API that is tailored to the programming language or platform that you're using. For
more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services
SDKs</a>.</p>

<note>
<ul>
<li>
<p>Remember that you must set your Migration Hub home region before you call any of
these APIs.</p>
</li>
<li>
<p>You must make API calls for write actions (create, notify, associate, disassociate,
import, or put) while in your home region, or a <code>HomeRegionNotSetException</code>
error is returned.</p>
</li>
<li>
<p>API calls for read actions (list, describe, stop, and delete) are permitted outside
of your home region.</p>
</li>
<li>
<p>Although it is unlikely, the Migration Hub home region could change. If you call
APIs outside the home region, an <code>InvalidInputException</code> is returned.</p>
</li>
<li>
<p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home
region.</p>
</li>
</ul>
</note>

<p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">Amazon Web Services Application
Discovery Service User Guide</a>.</p>

<important>
<p>All data is handled according to the <a href="http://aws.amazon.com/privacy/">Amazon Web Services
Privacy Policy</a>. You can operate Application Discovery Service offline to inspect
collected data before it is shared with the service.</p>
</important>

## Installing

To install the this package, simply type add or install @aws-sdk/client-application-discovery-service
using your favorite package manager:

- `npm install @aws-sdk/client-application-discovery-service`
- `yarn add @aws-sdk/client-application-discovery-service`
- `pnpm add @aws-sdk/client-application-discovery-service`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ApplicationDiscoveryServiceClient` and
the commands you need, for example `AssociateConfigurationItemsToApplicationCommand`:

```js
// ES5 example
const {
  ApplicationDiscoveryServiceClient,
  AssociateConfigurationItemsToApplicationCommand,
} = require("@aws-sdk/client-application-discovery-service");
```

```ts
// ES6+ example
import {
  ApplicationDiscoveryServiceClient,
  AssociateConfigurationItemsToApplicationCommand,
} from "@aws-sdk/client-application-discovery-service";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ApplicationDiscoveryServiceClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateConfigurationItemsToApplicationCommand(params);
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
import * as AWS from "@aws-sdk/client-application-discovery-service";
const client = new AWS.ApplicationDiscoveryService({ region: "REGION" });

// async/await.
try {
  const data = await client.associateConfigurationItemsToApplication(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateConfigurationItemsToApplication(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateConfigurationItemsToApplication(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-application-discovery-service` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
