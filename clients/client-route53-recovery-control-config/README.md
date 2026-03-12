<!-- generated file, do not edit directly -->

# @aws-sdk/client-route53-recovery-control-config

## Description

AWS SDK for JavaScript Route53RecoveryControlConfig Client for Node.js, Browser and React Native.

<p>Recovery Control Configuration API Reference for Amazon Route 53 Application Recovery Controller</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-route53-recovery-control-config`
- `yarn add @aws-sdk/client-route53-recovery-control-config`
- `pnpm add @aws-sdk/client-route53-recovery-control-config`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Route53RecoveryControlConfigClient` and
the commands you need, for example `ListClustersCommand`:

```js
// ES5 example
const { Route53RecoveryControlConfigClient, ListClustersCommand } = require("@aws-sdk/client-route53-recovery-control-config");
```

```ts
// ES6+ example
import { Route53RecoveryControlConfigClient, ListClustersCommand } from "@aws-sdk/client-route53-recovery-control-config";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new Route53RecoveryControlConfigClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListClustersCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`Route53RecoveryControlConfig` extends `Route53RecoveryControlConfigClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`Route53RecoveryControlConfigClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { Route53RecoveryControlConfig } from "@aws-sdk/client-route53-recovery-control-config";

const client = new Route53RecoveryControlConfig({ region: "REGION" });

// async/await.
try {
  const data = await client.listClusters(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listClusters(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listClusters(params, (err, data) => {
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

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-route53-recovery-control-config` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/CreateClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/CreateClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/CreateClusterCommandOutput/)
</details>
<details>
<summary>
CreateControlPanel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/CreateControlPanelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/CreateControlPanelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/CreateControlPanelCommandOutput/)
</details>
<details>
<summary>
CreateRoutingControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/CreateRoutingControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/CreateRoutingControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/CreateRoutingControlCommandOutput/)
</details>
<details>
<summary>
CreateSafetyRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/CreateSafetyRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/CreateSafetyRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/CreateSafetyRuleCommandOutput/)
</details>
<details>
<summary>
DeleteCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/DeleteClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DeleteClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DeleteClusterCommandOutput/)
</details>
<details>
<summary>
DeleteControlPanel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/DeleteControlPanelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DeleteControlPanelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DeleteControlPanelCommandOutput/)
</details>
<details>
<summary>
DeleteRoutingControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/DeleteRoutingControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DeleteRoutingControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DeleteRoutingControlCommandOutput/)
</details>
<details>
<summary>
DeleteSafetyRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/DeleteSafetyRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DeleteSafetyRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DeleteSafetyRuleCommandOutput/)
</details>
<details>
<summary>
DescribeCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/DescribeClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DescribeClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DescribeClusterCommandOutput/)
</details>
<details>
<summary>
DescribeControlPanel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/DescribeControlPanelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DescribeControlPanelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DescribeControlPanelCommandOutput/)
</details>
<details>
<summary>
DescribeRoutingControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/DescribeRoutingControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DescribeRoutingControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DescribeRoutingControlCommandOutput/)
</details>
<details>
<summary>
DescribeSafetyRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/DescribeSafetyRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DescribeSafetyRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/DescribeSafetyRuleCommandOutput/)
</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/GetResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/GetResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/GetResourcePolicyCommandOutput/)
</details>
<details>
<summary>
ListAssociatedRoute53HealthChecks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/ListAssociatedRoute53HealthChecksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListAssociatedRoute53HealthChecksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListAssociatedRoute53HealthChecksCommandOutput/)
</details>
<details>
<summary>
ListClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/ListClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListClustersCommandOutput/)
</details>
<details>
<summary>
ListControlPanels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/ListControlPanelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListControlPanelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListControlPanelsCommandOutput/)
</details>
<details>
<summary>
ListRoutingControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/ListRoutingControlsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListRoutingControlsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListRoutingControlsCommandOutput/)
</details>
<details>
<summary>
ListSafetyRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/ListSafetyRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListSafetyRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListSafetyRulesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/UpdateClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UpdateClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UpdateClusterCommandOutput/)
</details>
<details>
<summary>
UpdateControlPanel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/UpdateControlPanelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UpdateControlPanelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UpdateControlPanelCommandOutput/)
</details>
<details>
<summary>
UpdateRoutingControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/UpdateRoutingControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UpdateRoutingControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UpdateRoutingControlCommandOutput/)
</details>
<details>
<summary>
UpdateSafetyRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-control-config/command/UpdateSafetyRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UpdateSafetyRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-control-config/Interface/UpdateSafetyRuleCommandOutput/)
</details>
