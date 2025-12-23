<!-- generated file, do not edit directly -->

# @aws-sdk/client-waf

## Description

AWS SDK for JavaScript WAF Client for Node.js, Browser and React Native.

<note>
<p>This is <b>AWS WAF Classic</b> documentation. For
more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
WAF Classic</a> in the developer guide.</p>
<p>
<b>For the latest version of AWS
WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
</note>
<p>This is the <i>AWS WAF Classic API Reference</i> for using AWS WAF Classic with Amazon CloudFront. The AWS WAF Classic actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF Classic API actions,
data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the
<a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-waf
using your favorite package manager:
- `npm install @aws-sdk/client-waf`
- `yarn add @aws-sdk/client-waf`
- `pnpm add @aws-sdk/client-waf`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WAFClient` and
the commands you need, for example `ListIPSetsCommand`:

```js
// ES5 example
const { WAFClient, ListIPSetsCommand } = require("@aws-sdk/client-waf");
```

```ts
// ES6+ example
import { WAFClient, ListIPSetsCommand } from "@aws-sdk/client-waf";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WAFClient({ region: "REGION" });

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
import * as AWS from "@aws-sdk/client-waf";
const client = new AWS.WAF({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-waf` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateByteMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateByteMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateByteMatchSetCommandOutput/)
</details>
<details>
<summary>
CreateGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateGeoMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateGeoMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateGeoMatchSetCommandOutput/)
</details>
<details>
<summary>
CreateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateIPSetCommandOutput/)
</details>
<details>
<summary>
CreateRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateRateBasedRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRateBasedRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRateBasedRuleCommandOutput/)
</details>
<details>
<summary>
CreateRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateRegexMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRegexMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRegexMatchSetCommandOutput/)
</details>
<details>
<summary>
CreateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRegexPatternSetCommandOutput/)
</details>
<details>
<summary>
CreateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRuleCommandOutput/)
</details>
<details>
<summary>
CreateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateRuleGroupCommandOutput/)
</details>
<details>
<summary>
CreateSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateSizeConstraintSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateSizeConstraintSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateSizeConstraintSetCommandOutput/)
</details>
<details>
<summary>
CreateSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateSqlInjectionMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateSqlInjectionMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateSqlInjectionMatchSetCommandOutput/)
</details>
<details>
<summary>
CreateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateWebACLCommandOutput/)
</details>
<details>
<summary>
CreateWebACLMigrationStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateWebACLMigrationStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateWebACLMigrationStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateWebACLMigrationStackCommandOutput/)
</details>
<details>
<summary>
CreateXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/CreateXssMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateXssMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/CreateXssMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteByteMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteByteMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteByteMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteGeoMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteGeoMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteGeoMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteIPSetCommandOutput/)
</details>
<details>
<summary>
DeleteLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
DeletePermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeletePermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeletePermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeletePermissionPolicyCommandOutput/)
</details>
<details>
<summary>
DeleteRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteRateBasedRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRateBasedRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRateBasedRuleCommandOutput/)
</details>
<details>
<summary>
DeleteRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteRegexMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRegexMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRegexMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRegexPatternSetCommandOutput/)
</details>
<details>
<summary>
DeleteRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRuleCommandOutput/)
</details>
<details>
<summary>
DeleteRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteRuleGroupCommandOutput/)
</details>
<details>
<summary>
DeleteSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteSizeConstraintSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteSizeConstraintSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteSizeConstraintSetCommandOutput/)
</details>
<details>
<summary>
DeleteSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteSqlInjectionMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteSqlInjectionMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteSqlInjectionMatchSetCommandOutput/)
</details>
<details>
<summary>
DeleteWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteWebACLCommandOutput/)
</details>
<details>
<summary>
DeleteXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/DeleteXssMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteXssMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/DeleteXssMatchSetCommandOutput/)
</details>
<details>
<summary>
GetByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetByteMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetByteMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetByteMatchSetCommandOutput/)
</details>
<details>
<summary>
GetChangeToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetChangeTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetChangeTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetChangeTokenCommandOutput/)
</details>
<details>
<summary>
GetChangeTokenStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetChangeTokenStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetChangeTokenStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetChangeTokenStatusCommandOutput/)
</details>
<details>
<summary>
GetGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetGeoMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetGeoMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetGeoMatchSetCommandOutput/)
</details>
<details>
<summary>
GetIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetIPSetCommandOutput/)
</details>
<details>
<summary>
GetLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
GetPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetPermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetPermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetPermissionPolicyCommandOutput/)
</details>
<details>
<summary>
GetRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetRateBasedRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRateBasedRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRateBasedRuleCommandOutput/)
</details>
<details>
<summary>
GetRateBasedRuleManagedKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetRateBasedRuleManagedKeysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRateBasedRuleManagedKeysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRateBasedRuleManagedKeysCommandOutput/)
</details>
<details>
<summary>
GetRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetRegexMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRegexMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRegexMatchSetCommandOutput/)
</details>
<details>
<summary>
GetRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRegexPatternSetCommandOutput/)
</details>
<details>
<summary>
GetRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRuleCommandOutput/)
</details>
<details>
<summary>
GetRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetRuleGroupCommandOutput/)
</details>
<details>
<summary>
GetSampledRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetSampledRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetSampledRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetSampledRequestsCommandOutput/)
</details>
<details>
<summary>
GetSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetSizeConstraintSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetSizeConstraintSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetSizeConstraintSetCommandOutput/)
</details>
<details>
<summary>
GetSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetSqlInjectionMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetSqlInjectionMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetSqlInjectionMatchSetCommandOutput/)
</details>
<details>
<summary>
GetWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetWebACLCommandOutput/)
</details>
<details>
<summary>
GetXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/GetXssMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetXssMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/GetXssMatchSetCommandOutput/)
</details>
<details>
<summary>
ListActivatedRulesInRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListActivatedRulesInRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListActivatedRulesInRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListActivatedRulesInRuleGroupCommandOutput/)
</details>
<details>
<summary>
ListByteMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListByteMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListByteMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListByteMatchSetsCommandOutput/)
</details>
<details>
<summary>
ListGeoMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListGeoMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListGeoMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListGeoMatchSetsCommandOutput/)
</details>
<details>
<summary>
ListIPSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListIPSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListIPSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListIPSetsCommandOutput/)
</details>
<details>
<summary>
ListLoggingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListLoggingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListLoggingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListLoggingConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListRateBasedRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListRateBasedRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRateBasedRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRateBasedRulesCommandOutput/)
</details>
<details>
<summary>
ListRegexMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListRegexMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRegexMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRegexMatchSetsCommandOutput/)
</details>
<details>
<summary>
ListRegexPatternSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListRegexPatternSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRegexPatternSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRegexPatternSetsCommandOutput/)
</details>
<details>
<summary>
ListRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRuleGroupsCommandOutput/)
</details>
<details>
<summary>
ListRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListRulesCommandOutput/)
</details>
<details>
<summary>
ListSizeConstraintSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListSizeConstraintSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListSizeConstraintSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListSizeConstraintSetsCommandOutput/)
</details>
<details>
<summary>
ListSqlInjectionMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListSqlInjectionMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListSqlInjectionMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListSqlInjectionMatchSetsCommandOutput/)
</details>
<details>
<summary>
ListSubscribedRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListSubscribedRuleGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListSubscribedRuleGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListSubscribedRuleGroupsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListWebACLs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListWebACLsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListWebACLsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListWebACLsCommandOutput/)
</details>
<details>
<summary>
ListXssMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/ListXssMatchSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListXssMatchSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/ListXssMatchSetsCommandOutput/)
</details>
<details>
<summary>
PutLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/PutLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/PutLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/PutLoggingConfigurationCommandOutput/)
</details>
<details>
<summary>
PutPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/PutPermissionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/PutPermissionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/PutPermissionPolicyCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateByteMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateByteMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateByteMatchSetCommandOutput/)
</details>
<details>
<summary>
UpdateGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateGeoMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateGeoMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateGeoMatchSetCommandOutput/)
</details>
<details>
<summary>
UpdateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateIPSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateIPSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateIPSetCommandOutput/)
</details>
<details>
<summary>
UpdateRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateRateBasedRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRateBasedRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRateBasedRuleCommandOutput/)
</details>
<details>
<summary>
UpdateRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateRegexMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRegexMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRegexMatchSetCommandOutput/)
</details>
<details>
<summary>
UpdateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateRegexPatternSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRegexPatternSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRegexPatternSetCommandOutput/)
</details>
<details>
<summary>
UpdateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRuleCommandOutput/)
</details>
<details>
<summary>
UpdateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateRuleGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRuleGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateRuleGroupCommandOutput/)
</details>
<details>
<summary>
UpdateSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateSizeConstraintSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateSizeConstraintSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateSizeConstraintSetCommandOutput/)
</details>
<details>
<summary>
UpdateSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateSqlInjectionMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateSqlInjectionMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateSqlInjectionMatchSetCommandOutput/)
</details>
<details>
<summary>
UpdateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateWebACLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateWebACLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateWebACLCommandOutput/)
</details>
<details>
<summary>
UpdateXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/waf/command/UpdateXssMatchSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateXssMatchSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-waf/Interface/UpdateXssMatchSetCommandOutput/)
</details>
