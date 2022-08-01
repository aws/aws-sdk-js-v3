<!-- generated file, do not edit directly -->

# @aws-sdk/client-route53resolver

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-route53resolver/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-route53resolver)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-route53resolver.svg)](https://www.npmjs.com/package/@aws-sdk/client-route53resolver)

## Description

AWS SDK for JavaScript Route53Resolver Client for Node.js, Browser and React Native.

<p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC
from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names
such as domain names for EC2 instances or Elastic Load Balancing load balancers.
Resolver performs recursive lookups against public name servers for all other domain
names.</p>

<p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p>

<p>
<b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b>
</p>

<p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers
to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone.
For more information, see
<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers
on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

<p>
<b>Conditionally forward queries from a VPC to resolvers on your network</b>
</p>

<p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network.
To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward
(such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to.
If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match
(acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see
<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver
Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

<p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose
whether to forward queries from your VPCs to your network (outbound queries), from your
network to your VPCs (inbound queries), or both.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-route53resolver
using your favorite package manager:

- `npm install @aws-sdk/client-route53resolver`
- `yarn add @aws-sdk/client-route53resolver`
- `pnpm add @aws-sdk/client-route53resolver`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Route53ResolverClient` and
the commands you need, for example `AssociateFirewallRuleGroupCommand`:

```js
// ES5 example
const { Route53ResolverClient, AssociateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver");
```

```ts
// ES6+ example
import { Route53ResolverClient, AssociateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new Route53ResolverClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateFirewallRuleGroupCommand(params);
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
import * as AWS from "@aws-sdk/client-route53resolver";
const client = new AWS.Route53Resolver({ region: "REGION" });

// async/await.
try {
  const data = await client.associateFirewallRuleGroup(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateFirewallRuleGroup(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateFirewallRuleGroup(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-route53resolver` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
