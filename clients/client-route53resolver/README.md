<!-- generated file, do not edit directly -->

# @aws-sdk/client-route53resolver

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

To install this package, simply type add or install @aws-sdk/client-route53resolver
using your favorite package manager:

- `npm install @aws-sdk/client-route53resolver`
- `yarn add @aws-sdk/client-route53resolver`
- `pnpm add @aws-sdk/client-route53resolver`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Route53ResolverClient` and
the commands you need, for example `ListResolverRulesCommand`:

```js
// ES5 example
const { Route53ResolverClient, ListResolverRulesCommand } = require("@aws-sdk/client-route53resolver");
```

```ts
// ES6+ example
import { Route53ResolverClient, ListResolverRulesCommand } from "@aws-sdk/client-route53resolver";
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
const command = new ListResolverRulesCommand(params);
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
  const data = await client.listResolverRules(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listResolverRules(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listResolverRules(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-route53resolver` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/AssociateFirewallRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/AssociateFirewallRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/AssociateFirewallRuleGroupCommandOutput/)

</details>
<details>
<summary>
AssociateResolverEndpointIpAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/AssociateResolverEndpointIpAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/AssociateResolverEndpointIpAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/AssociateResolverEndpointIpAddressCommandOutput/)

</details>
<details>
<summary>
AssociateResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/AssociateResolverQueryLogConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/AssociateResolverQueryLogConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/AssociateResolverQueryLogConfigCommandOutput/)

</details>
<details>
<summary>
AssociateResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/AssociateResolverRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/AssociateResolverRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/AssociateResolverRuleCommandOutput/)

</details>
<details>
<summary>
CreateFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/CreateFirewallDomainListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateFirewallDomainListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateFirewallDomainListCommandOutput/)

</details>
<details>
<summary>
CreateFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/CreateFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateFirewallRuleCommandOutput/)

</details>
<details>
<summary>
CreateFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/CreateFirewallRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateFirewallRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateFirewallRuleGroupCommandOutput/)

</details>
<details>
<summary>
CreateOutpostResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/CreateOutpostResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateOutpostResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateOutpostResolverCommandOutput/)

</details>
<details>
<summary>
CreateResolverEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/CreateResolverEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateResolverEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateResolverEndpointCommandOutput/)

</details>
<details>
<summary>
CreateResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/CreateResolverQueryLogConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateResolverQueryLogConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateResolverQueryLogConfigCommandOutput/)

</details>
<details>
<summary>
CreateResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/CreateResolverRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateResolverRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/CreateResolverRuleCommandOutput/)

</details>
<details>
<summary>
DeleteFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DeleteFirewallDomainListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteFirewallDomainListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteFirewallDomainListCommandOutput/)

</details>
<details>
<summary>
DeleteFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DeleteFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteFirewallRuleCommandOutput/)

</details>
<details>
<summary>
DeleteFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DeleteFirewallRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteFirewallRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteFirewallRuleGroupCommandOutput/)

</details>
<details>
<summary>
DeleteOutpostResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DeleteOutpostResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteOutpostResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteOutpostResolverCommandOutput/)

</details>
<details>
<summary>
DeleteResolverEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DeleteResolverEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteResolverEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteResolverEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DeleteResolverQueryLogConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteResolverQueryLogConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteResolverQueryLogConfigCommandOutput/)

</details>
<details>
<summary>
DeleteResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DeleteResolverRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteResolverRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DeleteResolverRuleCommandOutput/)

</details>
<details>
<summary>
DisassociateFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DisassociateFirewallRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DisassociateFirewallRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DisassociateFirewallRuleGroupCommandOutput/)

</details>
<details>
<summary>
DisassociateResolverEndpointIpAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DisassociateResolverEndpointIpAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DisassociateResolverEndpointIpAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DisassociateResolverEndpointIpAddressCommandOutput/)

</details>
<details>
<summary>
DisassociateResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DisassociateResolverQueryLogConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DisassociateResolverQueryLogConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DisassociateResolverQueryLogConfigCommandOutput/)

</details>
<details>
<summary>
DisassociateResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/DisassociateResolverRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DisassociateResolverRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/DisassociateResolverRuleCommandOutput/)

</details>
<details>
<summary>
GetFirewallConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetFirewallConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallConfigCommandOutput/)

</details>
<details>
<summary>
GetFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetFirewallDomainListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallDomainListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallDomainListCommandOutput/)

</details>
<details>
<summary>
GetFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetFirewallRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallRuleGroupCommandOutput/)

</details>
<details>
<summary>
GetFirewallRuleGroupAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetFirewallRuleGroupAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallRuleGroupAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallRuleGroupAssociationCommandOutput/)

</details>
<details>
<summary>
GetFirewallRuleGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetFirewallRuleGroupPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallRuleGroupPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetFirewallRuleGroupPolicyCommandOutput/)

</details>
<details>
<summary>
GetOutpostResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetOutpostResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetOutpostResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetOutpostResolverCommandOutput/)

</details>
<details>
<summary>
GetResolverConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverConfigCommandOutput/)

</details>
<details>
<summary>
GetResolverDnssecConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverDnssecConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverDnssecConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverDnssecConfigCommandOutput/)

</details>
<details>
<summary>
GetResolverEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverEndpointCommandOutput/)

</details>
<details>
<summary>
GetResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverQueryLogConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverQueryLogConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverQueryLogConfigCommandOutput/)

</details>
<details>
<summary>
GetResolverQueryLogConfigAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverQueryLogConfigAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverQueryLogConfigAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverQueryLogConfigAssociationCommandOutput/)

</details>
<details>
<summary>
GetResolverQueryLogConfigPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverQueryLogConfigPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverQueryLogConfigPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverQueryLogConfigPolicyCommandOutput/)

</details>
<details>
<summary>
GetResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverRuleCommandOutput/)

</details>
<details>
<summary>
GetResolverRuleAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverRuleAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverRuleAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverRuleAssociationCommandOutput/)

</details>
<details>
<summary>
GetResolverRulePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/GetResolverRulePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverRulePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/GetResolverRulePolicyCommandOutput/)

</details>
<details>
<summary>
ImportFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ImportFirewallDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ImportFirewallDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ImportFirewallDomainsCommandOutput/)

</details>
<details>
<summary>
ListFirewallConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListFirewallConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallConfigsCommandOutput/)

</details>
<details>
<summary>
ListFirewallDomainLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListFirewallDomainListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallDomainListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallDomainListsCommandOutput/)

</details>
<details>
<summary>
ListFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListFirewallDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallDomainsCommandOutput/)

</details>
<details>
<summary>
ListFirewallRuleGroupAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListFirewallRuleGroupAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallRuleGroupAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallRuleGroupAssociationsCommandOutput/)

</details>
<details>
<summary>
ListFirewallRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListFirewallRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallRuleGroupsCommandOutput/)

</details>
<details>
<summary>
ListFirewallRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListFirewallRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListFirewallRulesCommandOutput/)

</details>
<details>
<summary>
ListOutpostResolvers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListOutpostResolversCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListOutpostResolversCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListOutpostResolversCommandOutput/)

</details>
<details>
<summary>
ListResolverConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListResolverConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverConfigsCommandOutput/)

</details>
<details>
<summary>
ListResolverDnssecConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListResolverDnssecConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverDnssecConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverDnssecConfigsCommandOutput/)

</details>
<details>
<summary>
ListResolverEndpointIpAddresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListResolverEndpointIpAddressesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverEndpointIpAddressesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverEndpointIpAddressesCommandOutput/)

</details>
<details>
<summary>
ListResolverEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListResolverEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverEndpointsCommandOutput/)

</details>
<details>
<summary>
ListResolverQueryLogConfigAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListResolverQueryLogConfigAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverQueryLogConfigAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverQueryLogConfigAssociationsCommandOutput/)

</details>
<details>
<summary>
ListResolverQueryLogConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListResolverQueryLogConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverQueryLogConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverQueryLogConfigsCommandOutput/)

</details>
<details>
<summary>
ListResolverRuleAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListResolverRuleAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverRuleAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverRuleAssociationsCommandOutput/)

</details>
<details>
<summary>
ListResolverRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListResolverRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListResolverRulesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutFirewallRuleGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/PutFirewallRuleGroupPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/PutFirewallRuleGroupPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/PutFirewallRuleGroupPolicyCommandOutput/)

</details>
<details>
<summary>
PutResolverQueryLogConfigPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/PutResolverQueryLogConfigPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/PutResolverQueryLogConfigPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/PutResolverQueryLogConfigPolicyCommandOutput/)

</details>
<details>
<summary>
PutResolverRulePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/PutResolverRulePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/PutResolverRulePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/PutResolverRulePolicyCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateFirewallConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateFirewallConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateFirewallConfigCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateFirewallDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateFirewallDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateFirewallDomainsCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateFirewallRuleCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallRuleGroupAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateFirewallRuleGroupAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateFirewallRuleGroupAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateFirewallRuleGroupAssociationCommandOutput/)

</details>
<details>
<summary>
UpdateOutpostResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateOutpostResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateOutpostResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateOutpostResolverCommandOutput/)

</details>
<details>
<summary>
UpdateResolverConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateResolverConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateResolverConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateResolverConfigCommandOutput/)

</details>
<details>
<summary>
UpdateResolverDnssecConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateResolverDnssecConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateResolverDnssecConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateResolverDnssecConfigCommandOutput/)

</details>
<details>
<summary>
UpdateResolverEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateResolverEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateResolverEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateResolverEndpointCommandOutput/)

</details>
<details>
<summary>
UpdateResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53resolver/command/UpdateResolverRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateResolverRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53resolver/Interface/UpdateResolverRuleCommandOutput/)

</details>
