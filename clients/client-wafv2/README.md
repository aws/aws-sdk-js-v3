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
WAF resources that you created before. You can access your old rules, web ACLs, and
other WAF resources only through the WAF Classic APIs. The WAF Classic APIs
have retained the prior names, endpoints, and namespaces. </p>
<p>For information, including how to migrate your WAF resources to this version,
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
<p>We currently provide two versions of the WAF API: this API and the prior versions,
the classic WAF APIs. This new API provides the same functionality as the older versions,
with the following major improvements:</p>
<ul>
<li>
<p>You use one API for both global and regional applications. Where you need to
distinguish the scope, you specify a <code>Scope</code> parameter and set it to
<code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
</li>
<li>
<p>You can define a web ACL or rule group with a single call, and update it with a
single call. You define all rule specifications in JSON format, and pass them to your
rule group or web ACL calls.</p>
</li>
<li>
<p>The limits WAF places on the use of rules more closely reflects the cost of
running each type of rule. Rule groups include capacity settings, so you know the
maximum cost of a rule group when you use it.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-wafv2
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/associatewebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/associatewebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/associatewebaclcommandoutput.html)

</details>
<details>
<summary>
CheckCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/checkcapacitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/checkcapacitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/checkcapacitycommandoutput.html)

</details>
<details>
<summary>
CreateAPIKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/createapikeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createapikeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createapikeycommandoutput.html)

</details>
<details>
<summary>
CreateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/createipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createipsetcommandoutput.html)

</details>
<details>
<summary>
CreateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/createregexpatternsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createregexpatternsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createregexpatternsetcommandoutput.html)

</details>
<details>
<summary>
CreateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/createrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createrulegroupcommandoutput.html)

</details>
<details>
<summary>
CreateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/createwebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createwebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/createwebaclcommandoutput.html)

</details>
<details>
<summary>
DeleteFirewallManagerRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/deletefirewallmanagerrulegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deletefirewallmanagerrulegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deletefirewallmanagerrulegroupscommandoutput.html)

</details>
<details>
<summary>
DeleteIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/deleteipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deleteipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deleteipsetcommandoutput.html)

</details>
<details>
<summary>
DeleteLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/deleteloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deleteloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deleteloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeletePermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/deletepermissionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deletepermissionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deletepermissionpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/deleteregexpatternsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deleteregexpatternsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deleteregexpatternsetcommandoutput.html)

</details>
<details>
<summary>
DeleteRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/deleterulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deleterulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deleterulegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/deletewebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deletewebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/deletewebaclcommandoutput.html)

</details>
<details>
<summary>
DescribeAllManagedProducts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/describeallmanagedproductscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/describeallmanagedproductscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/describeallmanagedproductscommandoutput.html)

</details>
<details>
<summary>
DescribeManagedProductsByVendor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/describemanagedproductsbyvendorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/describemanagedproductsbyvendorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/describemanagedproductsbyvendorcommandoutput.html)

</details>
<details>
<summary>
DescribeManagedRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/describemanagedrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/describemanagedrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/describemanagedrulegroupcommandoutput.html)

</details>
<details>
<summary>
DisassociateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/disassociatewebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/disassociatewebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/disassociatewebaclcommandoutput.html)

</details>
<details>
<summary>
GenerateMobileSdkReleaseUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/generatemobilesdkreleaseurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/generatemobilesdkreleaseurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/generatemobilesdkreleaseurlcommandoutput.html)

</details>
<details>
<summary>
GetDecryptedAPIKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getdecryptedapikeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getdecryptedapikeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getdecryptedapikeycommandoutput.html)

</details>
<details>
<summary>
GetIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getipsetcommandoutput.html)

</details>
<details>
<summary>
GetLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetManagedRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getmanagedrulesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getmanagedrulesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getmanagedrulesetcommandoutput.html)

</details>
<details>
<summary>
GetMobileSdkRelease
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getmobilesdkreleasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getmobilesdkreleasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getmobilesdkreleasecommandoutput.html)

</details>
<details>
<summary>
GetPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getpermissionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getpermissionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getpermissionpolicycommandoutput.html)

</details>
<details>
<summary>
GetRateBasedStatementManagedKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getratebasedstatementmanagedkeyscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getratebasedstatementmanagedkeyscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getratebasedstatementmanagedkeyscommandoutput.html)

</details>
<details>
<summary>
GetRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getregexpatternsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getregexpatternsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getregexpatternsetcommandoutput.html)

</details>
<details>
<summary>
GetRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getrulegroupcommandoutput.html)

</details>
<details>
<summary>
GetSampledRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getsampledrequestscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getsampledrequestscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getsampledrequestscommandoutput.html)

</details>
<details>
<summary>
GetWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getwebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getwebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getwebaclcommandoutput.html)

</details>
<details>
<summary>
GetWebACLForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/getwebaclforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getwebaclforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/getwebaclforresourcecommandoutput.html)

</details>
<details>
<summary>
ListAPIKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listapikeyscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listapikeyscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listapikeyscommandoutput.html)

</details>
<details>
<summary>
ListAvailableManagedRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listavailablemanagedrulegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listavailablemanagedrulegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listavailablemanagedrulegroupscommandoutput.html)

</details>
<details>
<summary>
ListAvailableManagedRuleGroupVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listavailablemanagedrulegroupversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listavailablemanagedrulegroupversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listavailablemanagedrulegroupversionscommandoutput.html)

</details>
<details>
<summary>
ListIPSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listipsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listipsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listipsetscommandoutput.html)

</details>
<details>
<summary>
ListLoggingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listloggingconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listloggingconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listloggingconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListManagedRuleSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listmanagedrulesetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listmanagedrulesetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listmanagedrulesetscommandoutput.html)

</details>
<details>
<summary>
ListMobileSdkReleases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listmobilesdkreleasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listmobilesdkreleasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listmobilesdkreleasescommandoutput.html)

</details>
<details>
<summary>
ListRegexPatternSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listregexpatternsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listregexpatternsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listregexpatternsetscommandoutput.html)

</details>
<details>
<summary>
ListResourcesForWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listresourcesforwebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listresourcesforwebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listresourcesforwebaclcommandoutput.html)

</details>
<details>
<summary>
ListRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listrulegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listrulegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listrulegroupscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWebACLs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/listwebaclscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listwebaclscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/listwebaclscommandoutput.html)

</details>
<details>
<summary>
PutLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/putloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/putloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/putloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutManagedRuleSetVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/putmanagedrulesetversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/putmanagedrulesetversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/putmanagedrulesetversionscommandoutput.html)

</details>
<details>
<summary>
PutPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/putpermissionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/putpermissionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/putpermissionpolicycommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/updateipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updateipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updateipsetcommandoutput.html)

</details>
<details>
<summary>
UpdateManagedRuleSetVersionExpiryDate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/updatemanagedrulesetversionexpirydatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updatemanagedrulesetversionexpirydatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updatemanagedrulesetversionexpirydatecommandoutput.html)

</details>
<details>
<summary>
UpdateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/updateregexpatternsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updateregexpatternsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updateregexpatternsetcommandoutput.html)

</details>
<details>
<summary>
UpdateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/updaterulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updaterulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updaterulegroupcommandoutput.html)

</details>
<details>
<summary>
UpdateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/classes/updatewebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updatewebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wafv2/interfaces/updatewebaclcommandoutput.html)

</details>
