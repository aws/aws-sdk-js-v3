<!-- generated file, do not edit directly -->

# @aws-sdk/client-network-firewall

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-network-firewall/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-network-firewall)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-network-firewall.svg)](https://www.npmjs.com/package/@aws-sdk/client-network-firewall)

## Description

AWS SDK for JavaScript NetworkFirewall Client for Node.js, Browser and React Native.

<p>This is the API Reference for Network Firewall. This guide is for developers who need
detailed information about the Network Firewall API actions, data types, and errors. </p>
<ul>
<li>
<p>The REST API requires you to handle connection details, such as calculating
signatures, handling request retries, and error handling. For general information
about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p>
<p>To access Network Firewall using the REST API endpoint:
<code>https://network-firewall.<region>.amazonaws.com </code>
</p>
</li>
<li>
<p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to
the programming language or platform that you're using. For more information, see
<a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
</li>
<li>
<p>For descriptions of Network Firewall features, including and step-by-step
instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer
Guide</a>.</p>
</li>
</ul>
<p>Network Firewall is a stateful, managed, network firewall and intrusion detection and
prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the
perimeter of your VPC. This includes filtering traffic going to and coming from an internet
gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible
with Suricata, a free, open source network analysis and threat detection engine.
Network Firewall supports Suricata version 5.0.2. For information about Suricata,
see the <a href="https://suricata.io/">Suricata website</a>.</p>
<p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways.
The following are just a few examples: </p>
<ul>
<li>
<p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and
block all other forms of traffic.</p>
</li>
<li>
<p>Use custom lists of known bad domains to limit the types of domain names that your
applications can access.</p>
</li>
<li>
<p>Perform deep packet inspection on traffic entering or leaving your VPC.</p>
</li>
<li>
<p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the
port used.</p>
</li>
</ul>
<p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in
Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p>
<p>To start using Network Firewall, do the following: </p>
<ol>
<li>
<p>(Optional) If you don't already have a VPC that you want to protect, create it in
Amazon VPC. </p>
</li>
<li>
<p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a
subnet for the sole use of Network Firewall. </p>
</li>
<li>
<p>In Network Firewall, create stateless and stateful rule groups,
to define the components of the network traffic filtering behavior that you want your firewall to have. </p>
</li>
<li>
<p>In Network Firewall, create a firewall policy that uses your rule groups and
specifies additional default traffic filtering behavior. </p>
</li>
<li>
<p>In Network Firewall, create a firewall and specify your new firewall policy and
VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you
specify, with the behavior that's defined in the firewall policy.</p>
</li>
<li>
<p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall
endpoints.</p>
</li>
</ol>

## Installing

To install the this package, simply type add or install @aws-sdk/client-network-firewall
using your favorite package manager:

- `npm install @aws-sdk/client-network-firewall`
- `yarn add @aws-sdk/client-network-firewall`
- `pnpm add @aws-sdk/client-network-firewall`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `NetworkFirewallClient` and
the commands you need, for example `AssociateFirewallPolicyCommand`:

```js
// ES5 example
const { NetworkFirewallClient, AssociateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall");
```

```ts
// ES6+ example
import { NetworkFirewallClient, AssociateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new NetworkFirewallClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateFirewallPolicyCommand(params);
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
import * as AWS from "@aws-sdk/client-network-firewall";
const client = new AWS.NetworkFirewall({ region: "REGION" });

// async/await.
try {
  const data = await client.associateFirewallPolicy(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateFirewallPolicy(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateFirewallPolicy(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-network-firewall` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
