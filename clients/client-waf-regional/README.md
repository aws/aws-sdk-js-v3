<!-- generated file, do not edit directly -->

# @aws-sdk/client-waf-regional

## Description

AWS SDK for JavaScript WAFRegional Client for Node.js, Browser and React Native.

<note>
<p>This is <b>AWS WAF Classic Regional</b> documentation. For
more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
WAF Classic</a> in the developer guide.</p>
<p>
<b>For the latest version of AWS
WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
</note>
<p>This is the <i>AWS WAF Regional Classic API Reference</i> for using AWS WAF Classic with the AWS resources, Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. The AWS WAF Classic actions and data types listed in the reference are available for protecting Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. You can use these actions and data types by means of the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Regions and Endpoints</a>. This guide is for developers who need detailed information about the AWS WAF Classic API actions, data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the
<a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
WAF Classic</a> in the developer guide.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-waf-regional
using your favorite package manager:
- `npm install @aws-sdk/client-waf-regional`
- `yarn add @aws-sdk/client-waf-regional`
- `pnpm add @aws-sdk/client-waf-regional`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WAFRegionalClient` and
the commands you need, for example `ListIPSetsCommand`:

```js
// ES5 example
const { WAFRegionalClient, ListIPSetsCommand } = require("@aws-sdk/client-waf-regional");
```

```ts
// ES6+ example
import { WAFRegionalClient, ListIPSetsCommand } from "@aws-sdk/client-waf-regional";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WAFRegionalClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListIPSetsCommand(params);
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
import * as AWS from "@aws-sdk/client-waf-regional";
const client = new AWS.WAFRegional({ region: "REGION" });

// async/await.
try {
  const data = await client.listIPSets(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listIPSets(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listIPSets(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-waf-regional` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/AssociateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/AssociateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/AssociateWebACLCommandOutput/)
</details>
<details>
<summary>
CreateByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateByteMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateByteMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateByteMatchSetCommandOutput/)
</details>
<details>
<summary>
CreateGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateGeoMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateGeoMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateGeoMatchSetCommandOutput/)
</details>
<details>
<summary>
CreateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateIPSetCommandOutput/)
</details>
<details>
<summary>
CreateRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateRateBasedRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRateBasedRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRateBasedRuleCommandOutput/)
</details>
<details>
<summary>
CreateRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateRegexMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRegexMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRegexMatchSetCommandOutput/)
</details>
<details>
<summary>
CreateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRegexPatternSetCommandOutput/)
</details>
<details>
<summary>
CreateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRuleCommandOutput/)
</details>
<details>
<summary>
CreateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateRuleGroupCommandOutput/)
</details>
<details>
<summary>
CreateSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateSizeConstraintSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateSizeConstraintSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateSizeConstraintSetCommandOutput/)
</details>
<details>
<summary>
CreateSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateSqlInjectionMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateSqlInjectionMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateSqlInjectionMatchSetCommandOutput/)
</details>
<details>
<summary>
CreateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateWebACLCommandOutput/)
</details>
<details>
<summary>
CreateWebACLMigrationStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateWebACLMigrationStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateWebACLMigrationStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateWebACLMigrationStackCommandOutput/)
</details>
<details>
<summary>
CreateXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/CreateXssMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateXssMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/CreateXssMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteByteMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteByteMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteByteMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteGeoMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteGeoMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteGeoMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteIPSetCommandOutput/)
</details>
<details>
<summary>
DeleteLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
DeletePermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeletePermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeletePermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeletePermissionPolicyCommandOutput/)
</details>
<details>
<summary>
DeleteRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteRateBasedRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRateBasedRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRateBasedRuleCommandOutput/)
</details>
<details>
<summary>
DeleteRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteRegexMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRegexMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRegexMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRegexPatternSetCommandOutput/)
</details>
<details>
<summary>
DeleteRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRuleCommandOutput/)
</details>
<details>
<summary>
DeleteRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteRuleGroupCommandOutput/)
</details>
<details>
<summary>
DeleteSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteSizeConstraintSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteSizeConstraintSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteSizeConstraintSetCommandOutput/)
</details>
<details>
<summary>
DeleteSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteSqlInjectionMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteSqlInjectionMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteSqlInjectionMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteWebACLCommandOutput/)
</details>
<details>
<summary>
DeleteXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DeleteXssMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteXssMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DeleteXssMatchSetCommandOutput/)
</details>
<details>
<summary>
DisassociateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/DisassociateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DisassociateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/DisassociateWebACLCommandOutput/)
</details>
<details>
<summary>
GetByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetByteMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetByteMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetByteMatchSetCommandOutput/)
</details>
<details>
<summary>
GetChangeToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetChangeTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetChangeTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetChangeTokenCommandOutput/)
</details>
<details>
<summary>
GetChangeTokenStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetChangeTokenStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetChangeTokenStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetChangeTokenStatusCommandOutput/)
</details>
<details>
<summary>
GetGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetGeoMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetGeoMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetGeoMatchSetCommandOutput/)
</details>
<details>
<summary>
GetIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetIPSetCommandOutput/)
</details>
<details>
<summary>
GetLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
GetPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetPermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetPermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetPermissionPolicyCommandOutput/)
</details>
<details>
<summary>
GetRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetRateBasedRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRateBasedRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRateBasedRuleCommandOutput/)
</details>
<details>
<summary>
GetRateBasedRuleManagedKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetRateBasedRuleManagedKeysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRateBasedRuleManagedKeysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRateBasedRuleManagedKeysCommandOutput/)
</details>
<details>
<summary>
GetRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetRegexMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRegexMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRegexMatchSetCommandOutput/)
</details>
<details>
<summary>
GetRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRegexPatternSetCommandOutput/)
</details>
<details>
<summary>
GetRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRuleCommandOutput/)
</details>
<details>
<summary>
GetRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetRuleGroupCommandOutput/)
</details>
<details>
<summary>
GetSampledRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetSampledRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetSampledRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetSampledRequestsCommandOutput/)
</details>
<details>
<summary>
GetSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetSizeConstraintSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetSizeConstraintSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetSizeConstraintSetCommandOutput/)
</details>
<details>
<summary>
GetSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetSqlInjectionMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetSqlInjectionMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetSqlInjectionMatchSetCommandOutput/)
</details>
<details>
<summary>
GetWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetWebACLCommandOutput/)
</details>
<details>
<summary>
GetWebACLForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetWebACLForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetWebACLForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetWebACLForResourceCommandOutput/)
</details>
<details>
<summary>
GetXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/GetXssMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetXssMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/GetXssMatchSetCommandOutput/)
</details>
<details>
<summary>
ListActivatedRulesInRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListActivatedRulesInRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListActivatedRulesInRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListActivatedRulesInRuleGroupCommandOutput/)
</details>
<details>
<summary>
ListByteMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListByteMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListByteMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListByteMatchSetsCommandOutput/)
</details>
<details>
<summary>
ListGeoMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListGeoMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListGeoMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListGeoMatchSetsCommandOutput/)
</details>
<details>
<summary>
ListIPSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListIPSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListIPSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListIPSetsCommandOutput/)
</details>
<details>
<summary>
ListLoggingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListLoggingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListLoggingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListLoggingConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListRateBasedRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListRateBasedRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRateBasedRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRateBasedRulesCommandOutput/)
</details>
<details>
<summary>
ListRegexMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListRegexMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRegexMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRegexMatchSetsCommandOutput/)
</details>
<details>
<summary>
ListRegexPatternSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListRegexPatternSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRegexPatternSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRegexPatternSetsCommandOutput/)
</details>
<details>
<summary>
ListResourcesForWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListResourcesForWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListResourcesForWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListResourcesForWebACLCommandOutput/)
</details>
<details>
<summary>
ListRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRuleGroupsCommandOutput/)
</details>
<details>
<summary>
ListRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListRulesCommandOutput/)
</details>
<details>
<summary>
ListSizeConstraintSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListSizeConstraintSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListSizeConstraintSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListSizeConstraintSetsCommandOutput/)
</details>
<details>
<summary>
ListSqlInjectionMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListSqlInjectionMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListSqlInjectionMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListSqlInjectionMatchSetsCommandOutput/)
</details>
<details>
<summary>
ListSubscribedRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListSubscribedRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListSubscribedRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListSubscribedRuleGroupsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListWebACLs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListWebACLsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListWebACLsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListWebACLsCommandOutput/)
</details>
<details>
<summary>
ListXssMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/ListXssMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListXssMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/ListXssMatchSetsCommandOutput/)
</details>
<details>
<summary>
PutLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/PutLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/PutLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/PutLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
PutPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/PutPermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/PutPermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/PutPermissionPolicyCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateByteMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateByteMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateByteMatchSetCommandOutput/)
</details>
<details>
<summary>
UpdateGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateGeoMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateGeoMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateGeoMatchSetCommandOutput/)
</details>
<details>
<summary>
UpdateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateIPSetCommandOutput/)
</details>
<details>
<summary>
UpdateRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateRateBasedRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRateBasedRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRateBasedRuleCommandOutput/)
</details>
<details>
<summary>
UpdateRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateRegexMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRegexMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRegexMatchSetCommandOutput/)
</details>
<details>
<summary>
UpdateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRegexPatternSetCommandOutput/)
</details>
<details>
<summary>
UpdateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRuleCommandOutput/)
</details>
<details>
<summary>
UpdateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateRuleGroupCommandOutput/)
</details>
<details>
<summary>
UpdateSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateSizeConstraintSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateSizeConstraintSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateSizeConstraintSetCommandOutput/)
</details>
<details>
<summary>
UpdateSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateSqlInjectionMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateSqlInjectionMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateSqlInjectionMatchSetCommandOutput/)
</details>
<details>
<summary>
UpdateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateWebACLCommandOutput/)
</details>
<details>
<summary>
UpdateXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf-regional/command/UpdateXssMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateXssMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf-regional/Interface/UpdateXssMatchSetCommandOutput/)
</details>
