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

## Client Commands (Operations List)

<details>
<summary>
AssociateFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/associatefirewallrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/associatefirewallrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/associatefirewallrulegroupcommandoutput.html)

</details>
<details>
<summary>
AssociateResolverEndpointIpAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/associateresolverendpointipaddresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/associateresolverendpointipaddresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/associateresolverendpointipaddresscommandoutput.html)

</details>
<details>
<summary>
AssociateResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/associateresolverquerylogconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/associateresolverquerylogconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/associateresolverquerylogconfigcommandoutput.html)

</details>
<details>
<summary>
AssociateResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/associateresolverrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/associateresolverrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/associateresolverrulecommandoutput.html)

</details>
<details>
<summary>
CreateFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/createfirewalldomainlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createfirewalldomainlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createfirewalldomainlistcommandoutput.html)

</details>
<details>
<summary>
CreateFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/createfirewallrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createfirewallrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createfirewallrulecommandoutput.html)

</details>
<details>
<summary>
CreateFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/createfirewallrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createfirewallrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createfirewallrulegroupcommandoutput.html)

</details>
<details>
<summary>
CreateResolverEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/createresolverendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createresolverendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createresolverendpointcommandoutput.html)

</details>
<details>
<summary>
CreateResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/createresolverquerylogconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createresolverquerylogconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createresolverquerylogconfigcommandoutput.html)

</details>
<details>
<summary>
CreateResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/createresolverrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createresolverrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/createresolverrulecommandoutput.html)

</details>
<details>
<summary>
DeleteFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/deletefirewalldomainlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deletefirewalldomainlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deletefirewalldomainlistcommandoutput.html)

</details>
<details>
<summary>
DeleteFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/deletefirewallrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deletefirewallrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deletefirewallrulecommandoutput.html)

</details>
<details>
<summary>
DeleteFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/deletefirewallrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deletefirewallrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deletefirewallrulegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteResolverEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/deleteresolverendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deleteresolverendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deleteresolverendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/deleteresolverquerylogconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deleteresolverquerylogconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deleteresolverquerylogconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/deleteresolverrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deleteresolverrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/deleteresolverrulecommandoutput.html)

</details>
<details>
<summary>
DisassociateFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/disassociatefirewallrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/disassociatefirewallrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/disassociatefirewallrulegroupcommandoutput.html)

</details>
<details>
<summary>
DisassociateResolverEndpointIpAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/disassociateresolverendpointipaddresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/disassociateresolverendpointipaddresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/disassociateresolverendpointipaddresscommandoutput.html)

</details>
<details>
<summary>
DisassociateResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/disassociateresolverquerylogconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/disassociateresolverquerylogconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/disassociateresolverquerylogconfigcommandoutput.html)

</details>
<details>
<summary>
DisassociateResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/disassociateresolverrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/disassociateresolverrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/disassociateresolverrulecommandoutput.html)

</details>
<details>
<summary>
GetFirewallConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getfirewallconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewallconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewallconfigcommandoutput.html)

</details>
<details>
<summary>
GetFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getfirewalldomainlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewalldomainlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewalldomainlistcommandoutput.html)

</details>
<details>
<summary>
GetFirewallRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getfirewallrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewallrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewallrulegroupcommandoutput.html)

</details>
<details>
<summary>
GetFirewallRuleGroupAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getfirewallrulegroupassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewallrulegroupassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewallrulegroupassociationcommandoutput.html)

</details>
<details>
<summary>
GetFirewallRuleGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getfirewallrulegrouppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewallrulegrouppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getfirewallrulegrouppolicycommandoutput.html)

</details>
<details>
<summary>
GetResolverConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverconfigcommandoutput.html)

</details>
<details>
<summary>
GetResolverDnssecConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverdnssecconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverdnssecconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverdnssecconfigcommandoutput.html)

</details>
<details>
<summary>
GetResolverEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverendpointcommandoutput.html)

</details>
<details>
<summary>
GetResolverQueryLogConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverquerylogconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverquerylogconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverquerylogconfigcommandoutput.html)

</details>
<details>
<summary>
GetResolverQueryLogConfigAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverquerylogconfigassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverquerylogconfigassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverquerylogconfigassociationcommandoutput.html)

</details>
<details>
<summary>
GetResolverQueryLogConfigPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverquerylogconfigpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverquerylogconfigpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverquerylogconfigpolicycommandoutput.html)

</details>
<details>
<summary>
GetResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverrulecommandoutput.html)

</details>
<details>
<summary>
GetResolverRuleAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverruleassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverruleassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverruleassociationcommandoutput.html)

</details>
<details>
<summary>
GetResolverRulePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/getresolverrulepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverrulepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/getresolverrulepolicycommandoutput.html)

</details>
<details>
<summary>
ImportFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/importfirewalldomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/importfirewalldomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/importfirewalldomainscommandoutput.html)

</details>
<details>
<summary>
ListFirewallConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listfirewallconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewallconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewallconfigscommandoutput.html)

</details>
<details>
<summary>
ListFirewallDomainLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listfirewalldomainlistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewalldomainlistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewalldomainlistscommandoutput.html)

</details>
<details>
<summary>
ListFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listfirewalldomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewalldomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewalldomainscommandoutput.html)

</details>
<details>
<summary>
ListFirewallRuleGroupAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listfirewallrulegroupassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewallrulegroupassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewallrulegroupassociationscommandoutput.html)

</details>
<details>
<summary>
ListFirewallRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listfirewallrulegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewallrulegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewallrulegroupscommandoutput.html)

</details>
<details>
<summary>
ListFirewallRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listfirewallrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewallrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listfirewallrulescommandoutput.html)

</details>
<details>
<summary>
ListResolverConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listresolverconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverconfigscommandoutput.html)

</details>
<details>
<summary>
ListResolverDnssecConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listresolverdnssecconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverdnssecconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverdnssecconfigscommandoutput.html)

</details>
<details>
<summary>
ListResolverEndpointIpAddresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listresolverendpointipaddressescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverendpointipaddressescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverendpointipaddressescommandoutput.html)

</details>
<details>
<summary>
ListResolverEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listresolverendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverendpointscommandoutput.html)

</details>
<details>
<summary>
ListResolverQueryLogConfigAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listresolverquerylogconfigassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverquerylogconfigassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverquerylogconfigassociationscommandoutput.html)

</details>
<details>
<summary>
ListResolverQueryLogConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listresolverquerylogconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverquerylogconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverquerylogconfigscommandoutput.html)

</details>
<details>
<summary>
ListResolverRuleAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listresolverruleassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverruleassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverruleassociationscommandoutput.html)

</details>
<details>
<summary>
ListResolverRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listresolverrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listresolverrulescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutFirewallRuleGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/putfirewallrulegrouppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/putfirewallrulegrouppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/putfirewallrulegrouppolicycommandoutput.html)

</details>
<details>
<summary>
PutResolverQueryLogConfigPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/putresolverquerylogconfigpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/putresolverquerylogconfigpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/putresolverquerylogconfigpolicycommandoutput.html)

</details>
<details>
<summary>
PutResolverRulePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/putresolverrulepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/putresolverrulepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/putresolverrulepolicycommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateFirewallConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/updatefirewallconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updatefirewallconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updatefirewallconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/updatefirewalldomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updatefirewalldomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updatefirewalldomainscommandoutput.html)

</details>
<details>
<summary>
UpdateFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/updatefirewallrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updatefirewallrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updatefirewallrulecommandoutput.html)

</details>
<details>
<summary>
UpdateFirewallRuleGroupAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/updatefirewallrulegroupassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updatefirewallrulegroupassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updatefirewallrulegroupassociationcommandoutput.html)

</details>
<details>
<summary>
UpdateResolverConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/updateresolverconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updateresolverconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updateresolverconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateResolverDnssecConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/updateresolverdnssecconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updateresolverdnssecconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updateresolverdnssecconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateResolverEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/updateresolverendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updateresolverendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updateresolverendpointcommandoutput.html)

</details>
<details>
<summary>
UpdateResolverRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/classes/updateresolverrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updateresolverrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route53resolver/interfaces/updateresolverrulecommandoutput.html)

</details>
