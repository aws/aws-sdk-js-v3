<!-- generated file, do not edit directly -->

# @aws-sdk/client-wafv2

## Description

AWS SDK for JavaScript WAFV2 Client for Node.js, Browser and React Native.

<fullname>WAF</fullname>
<note>

<p>This is the latest version of the <b>WAF</b> API,
released in November, 2019. The names of the entities that you use to access this API,
like endpoints and namespaces, all have the versioning information added, like "V2" or
"v2", to distinguish from the prior version. We recommend migrating your resources to
this version, because it has a number of significant improvements.</p>
<p>If you used WAF prior to this release, you can't use this WAFV2 API to access any
WAF resources that you created before. WAF Classic support will end on September 30, 2025. </p>
<p>For information about WAF, including how to migrate your WAF Classic resources to this version,
see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
</note>
<p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS
requests that are forwarded to an Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync
GraphQL API, Amazon Cognito user pool, App Runner service, or Amazon Web Services Verified Access instance. WAF also lets you control access to your content,
to protect the Amazon Web Services resource that WAF is monitoring. Based on conditions that
you specify, such as the IP addresses that requests originate from or the values of query
strings, the protected resource responds to requests with either the requested content, an HTTP 403 status code
(Forbidden), or with a custom response. </p>
<p>This API guide is for developers who need detailed information about WAF API actions,
data types, and errors. For detailed information about WAF features and guidance for configuring and using
WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer
Guide</a>.</p>
<p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/waf.html">WAF endpoints and quotas</a>. </p>
<ul>
<li>
<p>For regional applications, you can use any of the endpoints in the list.
A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance. </p>
</li>
<li>
<p>For Amazon CloudFront applications, you must use the API endpoint listed for
US East (N. Virginia): us-east-1.</p>
</li>
</ul>
<p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the
programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-wafv2
using your favorite package manager:

- `npm install @aws-sdk/client-wafv2`
- `yarn add @aws-sdk/client-wafv2`
- `pnpm add @aws-sdk/client-wafv2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WAFV2Client` and
the commands you need, for example `ListAPIKeysCommand`:

```js
// ES5 example
const { WAFV2Client, ListAPIKeysCommand } = require("@aws-sdk/client-wafv2");
```

```ts
// ES6+ example
import { WAFV2Client, ListAPIKeysCommand } from "@aws-sdk/client-wafv2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WAFV2Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAPIKeysCommand(params);
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
import * as AWS from "@aws-sdk/client-wafv2";
const client = new AWS.WAFV2({ region: "REGION" });

// async/await.
try {
  const data = await client.listAPIKeys(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAPIKeys(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAPIKeys(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-wafv2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/AssociateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/AssociateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/AssociateWebACLCommandOutput/)

</details>
<details>
<summary>
CheckCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/CheckCapacityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CheckCapacityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CheckCapacityCommandOutput/)

</details>
<details>
<summary>
CreateAPIKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/CreateAPIKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateAPIKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateAPIKeyCommandOutput/)

</details>
<details>
<summary>
CreateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/CreateIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateIPSetCommandOutput/)

</details>
<details>
<summary>
CreateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/CreateRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateRegexPatternSetCommandOutput/)

</details>
<details>
<summary>
CreateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/CreateRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateRuleGroupCommandOutput/)

</details>
<details>
<summary>
CreateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/CreateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/CreateWebACLCommandOutput/)

</details>
<details>
<summary>
DeleteAPIKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DeleteAPIKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteAPIKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteAPIKeyCommandOutput/)

</details>
<details>
<summary>
DeleteFirewallManagerRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DeleteFirewallManagerRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteFirewallManagerRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteFirewallManagerRuleGroupsCommandOutput/)

</details>
<details>
<summary>
DeleteIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DeleteIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteIPSetCommandOutput/)

</details>
<details>
<summary>
DeleteLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DeleteLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
DeletePermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DeletePermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeletePermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeletePermissionPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DeleteRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteRegexPatternSetCommandOutput/)

</details>
<details>
<summary>
DeleteRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DeleteRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteRuleGroupCommandOutput/)

</details>
<details>
<summary>
DeleteWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DeleteWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DeleteWebACLCommandOutput/)

</details>
<details>
<summary>
DescribeAllManagedProducts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DescribeAllManagedProductsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DescribeAllManagedProductsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DescribeAllManagedProductsCommandOutput/)

</details>
<details>
<summary>
DescribeManagedProductsByVendor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DescribeManagedProductsByVendorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DescribeManagedProductsByVendorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DescribeManagedProductsByVendorCommandOutput/)

</details>
<details>
<summary>
DescribeManagedRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DescribeManagedRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DescribeManagedRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DescribeManagedRuleGroupCommandOutput/)

</details>
<details>
<summary>
DisassociateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/DisassociateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DisassociateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/DisassociateWebACLCommandOutput/)

</details>
<details>
<summary>
GenerateMobileSdkReleaseUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GenerateMobileSdkReleaseUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GenerateMobileSdkReleaseUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GenerateMobileSdkReleaseUrlCommandOutput/)

</details>
<details>
<summary>
GetDecryptedAPIKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetDecryptedAPIKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetDecryptedAPIKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetDecryptedAPIKeyCommandOutput/)

</details>
<details>
<summary>
GetIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetIPSetCommandOutput/)

</details>
<details>
<summary>
GetLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
GetManagedRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetManagedRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetManagedRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetManagedRuleSetCommandOutput/)

</details>
<details>
<summary>
GetMobileSdkRelease
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetMobileSdkReleaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetMobileSdkReleaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetMobileSdkReleaseCommandOutput/)

</details>
<details>
<summary>
GetPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetPermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetPermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetPermissionPolicyCommandOutput/)

</details>
<details>
<summary>
GetRateBasedStatementManagedKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetRateBasedStatementManagedKeysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetRateBasedStatementManagedKeysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetRateBasedStatementManagedKeysCommandOutput/)

</details>
<details>
<summary>
GetRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetRegexPatternSetCommandOutput/)

</details>
<details>
<summary>
GetRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetRuleGroupCommandOutput/)

</details>
<details>
<summary>
GetSampledRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetSampledRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetSampledRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetSampledRequestsCommandOutput/)

</details>
<details>
<summary>
GetWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetWebACLCommandOutput/)

</details>
<details>
<summary>
GetWebACLForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/GetWebACLForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetWebACLForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/GetWebACLForResourceCommandOutput/)

</details>
<details>
<summary>
ListAPIKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListAPIKeysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListAPIKeysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListAPIKeysCommandOutput/)

</details>
<details>
<summary>
ListAvailableManagedRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListAvailableManagedRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListAvailableManagedRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListAvailableManagedRuleGroupsCommandOutput/)

</details>
<details>
<summary>
ListAvailableManagedRuleGroupVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListAvailableManagedRuleGroupVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListAvailableManagedRuleGroupVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListAvailableManagedRuleGroupVersionsCommandOutput/)

</details>
<details>
<summary>
ListIPSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListIPSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListIPSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListIPSetsCommandOutput/)

</details>
<details>
<summary>
ListLoggingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListLoggingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListLoggingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListLoggingConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListManagedRuleSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListManagedRuleSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListManagedRuleSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListManagedRuleSetsCommandOutput/)

</details>
<details>
<summary>
ListMobileSdkReleases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListMobileSdkReleasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListMobileSdkReleasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListMobileSdkReleasesCommandOutput/)

</details>
<details>
<summary>
ListRegexPatternSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListRegexPatternSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListRegexPatternSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListRegexPatternSetsCommandOutput/)

</details>
<details>
<summary>
ListResourcesForWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListResourcesForWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListResourcesForWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListResourcesForWebACLCommandOutput/)

</details>
<details>
<summary>
ListRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListRuleGroupsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListWebACLs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/ListWebACLsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListWebACLsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/ListWebACLsCommandOutput/)

</details>
<details>
<summary>
PutLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/PutLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/PutLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/PutLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
PutManagedRuleSetVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/PutManagedRuleSetVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/PutManagedRuleSetVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/PutManagedRuleSetVersionsCommandOutput/)

</details>
<details>
<summary>
PutPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/PutPermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/PutPermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/PutPermissionPolicyCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/UpdateIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateIPSetCommandOutput/)

</details>
<details>
<summary>
UpdateManagedRuleSetVersionExpiryDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/UpdateManagedRuleSetVersionExpiryDateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateManagedRuleSetVersionExpiryDateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateManagedRuleSetVersionExpiryDateCommandOutput/)

</details>
<details>
<summary>
UpdateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/UpdateRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateRegexPatternSetCommandOutput/)

</details>
<details>
<summary>
UpdateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/UpdateRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateRuleGroupCommandOutput/)

</details>
<details>
<summary>
UpdateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wafv2/command/UpdateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wafv2/Interface/UpdateWebACLCommandOutput/)

</details>
