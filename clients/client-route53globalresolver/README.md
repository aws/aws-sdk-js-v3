<!-- generated file, do not edit directly -->

# @aws-sdk/client-route53globalresolver

## Description

AWS SDK for JavaScript Route53GlobalResolver Client for Node.js, Browser and React Native.

<p> Amazon Route 53 Global Resolver is a global, internet-accessible DNS resolver that enables customers to resolve and forward traffic for both public and private domains while ensuring security and authenticity of queries over the internet. Route 53 Global Resolver supports DNS-over-port 53 (Do53), DNS-over-TLS (DoT), and DNS-over-HTTPS (DoH) protocols through global anycast IP addresses. </p>

## Installing
To install this package, simply type add or install @aws-sdk/client-route53globalresolver
using your favorite package manager:
- `npm install @aws-sdk/client-route53globalresolver`
- `yarn add @aws-sdk/client-route53globalresolver`
- `pnpm add @aws-sdk/client-route53globalresolver`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Route53GlobalResolverClient` and
the commands you need, for example `ListAccessSourcesCommand`:

```js
// ES5 example
const { Route53GlobalResolverClient, ListAccessSourcesCommand } = require("@aws-sdk/client-route53globalresolver");
```

```ts
// ES6+ example
import { Route53GlobalResolverClient, ListAccessSourcesCommand } from "@aws-sdk/client-route53globalresolver";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new Route53GlobalResolverClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListAccessSourcesCommand(params);
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
import * as AWS from "@aws-sdk/client-route53globalresolver";
const client = new AWS.Route53GlobalResolver({ region: "REGION" });

// async/await.
try {
  const data = await client.listAccessSources(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAccessSources(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAccessSources(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-route53globalresolver` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/AssociateHostedZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/AssociateHostedZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/AssociateHostedZoneCommandOutput/)
</details>
<details>
<summary>
BatchCreateFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/BatchCreateFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/BatchCreateFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/BatchCreateFirewallRuleCommandOutput/)
</details>
<details>
<summary>
BatchDeleteFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/BatchDeleteFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/BatchDeleteFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/BatchDeleteFirewallRuleCommandOutput/)
</details>
<details>
<summary>
BatchUpdateFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/BatchUpdateFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/BatchUpdateFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/BatchUpdateFirewallRuleCommandOutput/)
</details>
<details>
<summary>
CreateAccessSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/CreateAccessSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateAccessSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateAccessSourceCommandOutput/)
</details>
<details>
<summary>
CreateAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/CreateAccessTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateAccessTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateAccessTokenCommandOutput/)
</details>
<details>
<summary>
CreateDNSView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/CreateDNSViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateDNSViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateDNSViewCommandOutput/)
</details>
<details>
<summary>
CreateFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/CreateFirewallDomainListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateFirewallDomainListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateFirewallDomainListCommandOutput/)
</details>
<details>
<summary>
CreateFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/CreateFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateFirewallRuleCommandOutput/)
</details>
<details>
<summary>
CreateGlobalResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/CreateGlobalResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateGlobalResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/CreateGlobalResolverCommandOutput/)
</details>
<details>
<summary>
DeleteAccessSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/DeleteAccessSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteAccessSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteAccessSourceCommandOutput/)
</details>
<details>
<summary>
DeleteAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/DeleteAccessTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteAccessTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteAccessTokenCommandOutput/)
</details>
<details>
<summary>
DeleteDNSView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/DeleteDNSViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteDNSViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteDNSViewCommandOutput/)
</details>
<details>
<summary>
DeleteFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/DeleteFirewallDomainListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteFirewallDomainListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteFirewallDomainListCommandOutput/)
</details>
<details>
<summary>
DeleteFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/DeleteFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteFirewallRuleCommandOutput/)
</details>
<details>
<summary>
DeleteGlobalResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/DeleteGlobalResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteGlobalResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DeleteGlobalResolverCommandOutput/)
</details>
<details>
<summary>
DisableDNSView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/DisableDNSViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DisableDNSViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DisableDNSViewCommandOutput/)
</details>
<details>
<summary>
DisassociateHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/DisassociateHostedZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DisassociateHostedZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/DisassociateHostedZoneCommandOutput/)
</details>
<details>
<summary>
EnableDNSView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/EnableDNSViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/EnableDNSViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/EnableDNSViewCommandOutput/)
</details>
<details>
<summary>
GetAccessSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/GetAccessSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetAccessSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetAccessSourceCommandOutput/)
</details>
<details>
<summary>
GetAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/GetAccessTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetAccessTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetAccessTokenCommandOutput/)
</details>
<details>
<summary>
GetDNSView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/GetDNSViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetDNSViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetDNSViewCommandOutput/)
</details>
<details>
<summary>
GetFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/GetFirewallDomainListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetFirewallDomainListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetFirewallDomainListCommandOutput/)
</details>
<details>
<summary>
GetFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/GetFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetFirewallRuleCommandOutput/)
</details>
<details>
<summary>
GetGlobalResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/GetGlobalResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetGlobalResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetGlobalResolverCommandOutput/)
</details>
<details>
<summary>
GetHostedZoneAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/GetHostedZoneAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetHostedZoneAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetHostedZoneAssociationCommandOutput/)
</details>
<details>
<summary>
GetManagedFirewallDomainList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/GetManagedFirewallDomainListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetManagedFirewallDomainListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/GetManagedFirewallDomainListCommandOutput/)
</details>
<details>
<summary>
ImportFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ImportFirewallDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ImportFirewallDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ImportFirewallDomainsCommandOutput/)
</details>
<details>
<summary>
ListAccessSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListAccessSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListAccessSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListAccessSourcesCommandOutput/)
</details>
<details>
<summary>
ListAccessTokens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListAccessTokensCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListAccessTokensCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListAccessTokensCommandOutput/)
</details>
<details>
<summary>
ListDNSViews
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListDNSViewsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListDNSViewsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListDNSViewsCommandOutput/)
</details>
<details>
<summary>
ListFirewallDomainLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListFirewallDomainListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListFirewallDomainListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListFirewallDomainListsCommandOutput/)
</details>
<details>
<summary>
ListFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListFirewallDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListFirewallDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListFirewallDomainsCommandOutput/)
</details>
<details>
<summary>
ListFirewallRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListFirewallRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListFirewallRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListFirewallRulesCommandOutput/)
</details>
<details>
<summary>
ListGlobalResolvers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListGlobalResolversCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListGlobalResolversCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListGlobalResolversCommandOutput/)
</details>
<details>
<summary>
ListHostedZoneAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListHostedZoneAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListHostedZoneAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListHostedZoneAssociationsCommandOutput/)
</details>
<details>
<summary>
ListManagedFirewallDomainLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListManagedFirewallDomainListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListManagedFirewallDomainListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListManagedFirewallDomainListsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAccessSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/UpdateAccessSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateAccessSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateAccessSourceCommandOutput/)
</details>
<details>
<summary>
UpdateAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/UpdateAccessTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateAccessTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateAccessTokenCommandOutput/)
</details>
<details>
<summary>
UpdateDNSView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/UpdateDNSViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateDNSViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateDNSViewCommandOutput/)
</details>
<details>
<summary>
UpdateFirewallDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/UpdateFirewallDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateFirewallDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateFirewallDomainsCommandOutput/)
</details>
<details>
<summary>
UpdateFirewallRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/UpdateFirewallRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateFirewallRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateFirewallRuleCommandOutput/)
</details>
<details>
<summary>
UpdateGlobalResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/UpdateGlobalResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateGlobalResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateGlobalResolverCommandOutput/)
</details>
<details>
<summary>
UpdateHostedZoneAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53globalresolver/command/UpdateHostedZoneAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateHostedZoneAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53globalresolver/Interface/UpdateHostedZoneAssociationCommandOutput/)
</details>
