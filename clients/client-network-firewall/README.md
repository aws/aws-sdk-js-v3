<!-- generated file, do not edit directly -->

# @aws-sdk/client-network-firewall

## Description

AWS SDK for JavaScript NetworkFirewall Client for Node.js, Browser and React Native.

<p>This is the API Reference for Network Firewall. This guide is for developers who need
detailed information about the Network Firewall API actions, data types, and errors. </p>
<p>The REST API requires you to handle connection details, such as calculating
signatures, handling request retries, and error handling. For general information
about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p>
<p>To view the complete list of Amazon Web Services Regions where Network Firewall is available, see
<a href="https://docs.aws.amazon.com/general/latest/gr/network-firewall.html">Service
endpoints and quotas</a> in the <i>Amazon Web Services General
Reference</i>.
</p>
<p>To access Network Firewall using the IPv4 REST API endpoint:
<code>https://network-firewall.<region>.amazonaws.com </code>
</p>
<p>To access Network Firewall using the Dualstack (IPv4 and IPv6) REST API endpoint:
<code>https://network-firewall.<region>.aws.api </code>
</p>
<p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to
the programming language or platform that you're using. For more information, see
<a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
<p>For descriptions of Network Firewall features, including and step-by-step
instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer
Guide</a>.</p>
<p>Network Firewall is a stateful, managed, network firewall and intrusion detection and
prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the
perimeter of your VPC. This includes filtering traffic going to and coming from an internet
gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible
with Suricata, a free, open source network analysis and threat detection engine.
Network Firewall supports Suricata version 7.0.3. For information about Suricata,
see the <a href="https://suricata.io/">Suricata website</a> and the
<a href="https://suricata.readthedocs.io/en/suricata-7.0.3/">Suricata User Guide</a>. </p>
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
<p>In Network Firewall, define the firewall behavior as follows: </p>
<ol>
<li>
<p>Create stateless and stateful rule groups,
to define the components of the network traffic filtering behavior that you want your firewall to have. </p>
</li>
<li>
<p>Create a firewall policy that uses your rule groups and
specifies additional default traffic filtering behavior. </p>
</li>
</ol>
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
<p>After your firewall is established, you can add firewall endpoints for new Availability Zones by following the prior steps for the Amazon VPC setup and
firewall subnet definitions. You can also add endpoints to Availability Zones that you're using in the firewall, either for the same VPC
or for another VPC, by following the prior steps for the Amazon VPC setup, and defining the new VPC subnets as VPC endpoint associations. </p>

## Installing

To install this package, simply type add or install @aws-sdk/client-network-firewall
using your favorite package manager:

- `npm install @aws-sdk/client-network-firewall`
- `yarn add @aws-sdk/client-network-firewall`
- `pnpm add @aws-sdk/client-network-firewall`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `NetworkFirewallClient` and
the commands you need, for example `ListFirewallsCommand`:

```js
// ES5 example
const { NetworkFirewallClient, ListFirewallsCommand } = require("@aws-sdk/client-network-firewall");
```

```ts
// ES6+ example
import { NetworkFirewallClient, ListFirewallsCommand } from "@aws-sdk/client-network-firewall";
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
const command = new ListFirewallsCommand(params);
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
  const data = await client.listFirewalls(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listFirewalls(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listFirewalls(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-network-firewall` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptNetworkFirewallTransitGatewayAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/AcceptNetworkFirewallTransitGatewayAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/AcceptNetworkFirewallTransitGatewayAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput/)

</details>
<details>
<summary>
AssociateAvailabilityZones
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/AssociateAvailabilityZonesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/AssociateAvailabilityZonesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/AssociateAvailabilityZonesCommandOutput/)

</details>
<details>
<summary>
AssociateFirewallPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/AssociateFirewallPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/AssociateFirewallPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/AssociateFirewallPolicyCommandOutput/)

</details>
<details>
<summary>
AssociateSubnets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/AssociateSubnetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/AssociateSubnetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/AssociateSubnetsCommandOutput/)

</details>
<details>
<summary>
CreateFirewall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/CreateFirewallCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateFirewallCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateFirewallCommandOutput/)

</details>
<details>
<summary>
CreateFirewallPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/CreateFirewallPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateFirewallPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateFirewallPolicyCommandOutput/)

</details>
<details>
<summary>
CreateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/CreateRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateRuleGroupCommandOutput/)

</details>
<details>
<summary>
CreateTLSInspectionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/CreateTLSInspectionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateTLSInspectionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateTLSInspectionConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateVpcEndpointAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/CreateVpcEndpointAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateVpcEndpointAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/CreateVpcEndpointAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteFirewall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DeleteFirewallCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteFirewallCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteFirewallCommandOutput/)

</details>
<details>
<summary>
DeleteFirewallPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DeleteFirewallPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteFirewallPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteFirewallPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkFirewallTransitGatewayAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DeleteNetworkFirewallTransitGatewayAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteNetworkFirewallTransitGatewayAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DeleteRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteRuleGroupCommandOutput/)

</details>
<details>
<summary>
DeleteTLSInspectionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DeleteTLSInspectionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteTLSInspectionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteTLSInspectionConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteVpcEndpointAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DeleteVpcEndpointAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteVpcEndpointAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DeleteVpcEndpointAssociationCommandOutput/)

</details>
<details>
<summary>
DescribeFirewall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeFirewallCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeFirewallCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeFirewallCommandOutput/)

</details>
<details>
<summary>
DescribeFirewallMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeFirewallMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeFirewallMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeFirewallMetadataCommandOutput/)

</details>
<details>
<summary>
DescribeFirewallPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeFirewallPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeFirewallPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeFirewallPolicyCommandOutput/)

</details>
<details>
<summary>
DescribeFlowOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeFlowOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeFlowOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeFlowOperationCommandOutput/)

</details>
<details>
<summary>
DescribeLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DescribeRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeRuleGroupCommandOutput/)

</details>
<details>
<summary>
DescribeRuleGroupMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeRuleGroupMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeRuleGroupMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeRuleGroupMetadataCommandOutput/)

</details>
<details>
<summary>
DescribeTLSInspectionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeTLSInspectionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeTLSInspectionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeTLSInspectionConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpointAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DescribeVpcEndpointAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeVpcEndpointAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DescribeVpcEndpointAssociationCommandOutput/)

</details>
<details>
<summary>
DisassociateAvailabilityZones
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DisassociateAvailabilityZonesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DisassociateAvailabilityZonesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DisassociateAvailabilityZonesCommandOutput/)

</details>
<details>
<summary>
DisassociateSubnets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/DisassociateSubnetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DisassociateSubnetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/DisassociateSubnetsCommandOutput/)

</details>
<details>
<summary>
GetAnalysisReportResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/GetAnalysisReportResultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/GetAnalysisReportResultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/GetAnalysisReportResultsCommandOutput/)

</details>
<details>
<summary>
ListAnalysisReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListAnalysisReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListAnalysisReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListAnalysisReportsCommandOutput/)

</details>
<details>
<summary>
ListFirewallPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListFirewallPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListFirewallPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListFirewallPoliciesCommandOutput/)

</details>
<details>
<summary>
ListFirewalls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListFirewallsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListFirewallsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListFirewallsCommandOutput/)

</details>
<details>
<summary>
ListFlowOperationResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListFlowOperationResultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListFlowOperationResultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListFlowOperationResultsCommandOutput/)

</details>
<details>
<summary>
ListFlowOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListFlowOperationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListFlowOperationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListFlowOperationsCommandOutput/)

</details>
<details>
<summary>
ListRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListRuleGroupsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTLSInspectionConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListTLSInspectionConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListTLSInspectionConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListTLSInspectionConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListVpcEndpointAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/ListVpcEndpointAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListVpcEndpointAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/ListVpcEndpointAssociationsCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
RejectNetworkFirewallTransitGatewayAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/RejectNetworkFirewallTransitGatewayAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/RejectNetworkFirewallTransitGatewayAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/RejectNetworkFirewallTransitGatewayAttachmentCommandOutput/)

</details>
<details>
<summary>
StartAnalysisReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/StartAnalysisReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/StartAnalysisReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/StartAnalysisReportCommandOutput/)

</details>
<details>
<summary>
StartFlowCapture
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/StartFlowCaptureCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/StartFlowCaptureCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/StartFlowCaptureCommandOutput/)

</details>
<details>
<summary>
StartFlowFlush
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/StartFlowFlushCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/StartFlowFlushCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/StartFlowFlushCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAvailabilityZoneChangeProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateAvailabilityZoneChangeProtectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateAvailabilityZoneChangeProtectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateAvailabilityZoneChangeProtectionCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallAnalysisSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateFirewallAnalysisSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallAnalysisSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallAnalysisSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallDeleteProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateFirewallDeleteProtectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallDeleteProtectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallDeleteProtectionCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallDescription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateFirewallDescriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallDescriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallDescriptionCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallEncryptionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateFirewallEncryptionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallEncryptionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallEncryptionConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateFirewallPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallPolicyCommandOutput/)

</details>
<details>
<summary>
UpdateFirewallPolicyChangeProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateFirewallPolicyChangeProtectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallPolicyChangeProtectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateFirewallPolicyChangeProtectionCommandOutput/)

</details>
<details>
<summary>
UpdateLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateRuleGroupCommandOutput/)

</details>
<details>
<summary>
UpdateSubnetChangeProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateSubnetChangeProtectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateSubnetChangeProtectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateSubnetChangeProtectionCommandOutput/)

</details>
<details>
<summary>
UpdateTLSInspectionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/network-firewall/command/UpdateTLSInspectionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateTLSInspectionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-network-firewall/Interface/UpdateTLSInspectionConfigurationCommandOutput/)

</details>
