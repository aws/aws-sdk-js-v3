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

To install the this package, simply type add or install @aws-sdk/client-waf-regional
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

const params = {
  /** input parameters */
};
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/associatewebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/associatewebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/associatewebaclcommandoutput.html)

</details>
<details>
<summary>
CreateByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createbytematchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createbytematchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createbytematchsetcommandoutput.html)

</details>
<details>
<summary>
CreateGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/creategeomatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/creategeomatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/creategeomatchsetcommandoutput.html)

</details>
<details>
<summary>
CreateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createipsetcommandoutput.html)

</details>
<details>
<summary>
CreateRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createratebasedrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createratebasedrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createratebasedrulecommandoutput.html)

</details>
<details>
<summary>
CreateRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createregexmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createregexmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createregexmatchsetcommandoutput.html)

</details>
<details>
<summary>
CreateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createregexpatternsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createregexpatternsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createregexpatternsetcommandoutput.html)

</details>
<details>
<summary>
CreateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createrulecommandoutput.html)

</details>
<details>
<summary>
CreateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createrulegroupcommandoutput.html)

</details>
<details>
<summary>
CreateSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createsizeconstraintsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createsizeconstraintsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createsizeconstraintsetcommandoutput.html)

</details>
<details>
<summary>
CreateSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createsqlinjectionmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createsqlinjectionmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createsqlinjectionmatchsetcommandoutput.html)

</details>
<details>
<summary>
CreateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createwebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createwebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createwebaclcommandoutput.html)

</details>
<details>
<summary>
CreateWebACLMigrationStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createwebaclmigrationstackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createwebaclmigrationstackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createwebaclmigrationstackcommandoutput.html)

</details>
<details>
<summary>
CreateXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/createxssmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createxssmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/createxssmatchsetcommandoutput.html)

</details>
<details>
<summary>
DeleteByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deletebytematchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletebytematchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletebytematchsetcommandoutput.html)

</details>
<details>
<summary>
DeleteGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deletegeomatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletegeomatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletegeomatchsetcommandoutput.html)

</details>
<details>
<summary>
DeleteIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deleteipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteipsetcommandoutput.html)

</details>
<details>
<summary>
DeleteLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deleteloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeletePermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deletepermissionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletepermissionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletepermissionpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deleteratebasedrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteratebasedrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteratebasedrulecommandoutput.html)

</details>
<details>
<summary>
DeleteRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deleteregexmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteregexmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteregexmatchsetcommandoutput.html)

</details>
<details>
<summary>
DeleteRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deleteregexpatternsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteregexpatternsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleteregexpatternsetcommandoutput.html)

</details>
<details>
<summary>
DeleteRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deleterulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleterulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleterulecommandoutput.html)

</details>
<details>
<summary>
DeleteRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deleterulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleterulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deleterulegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deletesizeconstraintsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletesizeconstraintsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletesizeconstraintsetcommandoutput.html)

</details>
<details>
<summary>
DeleteSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deletesqlinjectionmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletesqlinjectionmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletesqlinjectionmatchsetcommandoutput.html)

</details>
<details>
<summary>
DeleteWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deletewebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletewebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletewebaclcommandoutput.html)

</details>
<details>
<summary>
DeleteXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/deletexssmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletexssmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/deletexssmatchsetcommandoutput.html)

</details>
<details>
<summary>
DisassociateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/disassociatewebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/disassociatewebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/disassociatewebaclcommandoutput.html)

</details>
<details>
<summary>
GetByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getbytematchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getbytematchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getbytematchsetcommandoutput.html)

</details>
<details>
<summary>
GetChangeToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getchangetokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getchangetokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getchangetokencommandoutput.html)

</details>
<details>
<summary>
GetChangeTokenStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getchangetokenstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getchangetokenstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getchangetokenstatuscommandoutput.html)

</details>
<details>
<summary>
GetGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getgeomatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getgeomatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getgeomatchsetcommandoutput.html)

</details>
<details>
<summary>
GetIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getipsetcommandoutput.html)

</details>
<details>
<summary>
GetLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getpermissionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getpermissionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getpermissionpolicycommandoutput.html)

</details>
<details>
<summary>
GetRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getratebasedrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getratebasedrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getratebasedrulecommandoutput.html)

</details>
<details>
<summary>
GetRateBasedRuleManagedKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getratebasedrulemanagedkeyscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getratebasedrulemanagedkeyscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getratebasedrulemanagedkeyscommandoutput.html)

</details>
<details>
<summary>
GetRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getregexmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getregexmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getregexmatchsetcommandoutput.html)

</details>
<details>
<summary>
GetRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getregexpatternsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getregexpatternsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getregexpatternsetcommandoutput.html)

</details>
<details>
<summary>
GetRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getrulecommandoutput.html)

</details>
<details>
<summary>
GetRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getrulegroupcommandoutput.html)

</details>
<details>
<summary>
GetSampledRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getsampledrequestscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getsampledrequestscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getsampledrequestscommandoutput.html)

</details>
<details>
<summary>
GetSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getsizeconstraintsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getsizeconstraintsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getsizeconstraintsetcommandoutput.html)

</details>
<details>
<summary>
GetSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getsqlinjectionmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getsqlinjectionmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getsqlinjectionmatchsetcommandoutput.html)

</details>
<details>
<summary>
GetWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getwebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getwebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getwebaclcommandoutput.html)

</details>
<details>
<summary>
GetWebACLForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getwebaclforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getwebaclforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getwebaclforresourcecommandoutput.html)

</details>
<details>
<summary>
GetXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/getxssmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getxssmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/getxssmatchsetcommandoutput.html)

</details>
<details>
<summary>
ListActivatedRulesInRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listactivatedrulesinrulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listactivatedrulesinrulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listactivatedrulesinrulegroupcommandoutput.html)

</details>
<details>
<summary>
ListByteMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listbytematchsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listbytematchsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listbytematchsetscommandoutput.html)

</details>
<details>
<summary>
ListGeoMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listgeomatchsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listgeomatchsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listgeomatchsetscommandoutput.html)

</details>
<details>
<summary>
ListIPSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listipsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listipsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listipsetscommandoutput.html)

</details>
<details>
<summary>
ListLoggingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listloggingconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listloggingconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listloggingconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListRateBasedRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listratebasedrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listratebasedrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listratebasedrulescommandoutput.html)

</details>
<details>
<summary>
ListRegexMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listregexmatchsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listregexmatchsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listregexmatchsetscommandoutput.html)

</details>
<details>
<summary>
ListRegexPatternSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listregexpatternsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listregexpatternsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listregexpatternsetscommandoutput.html)

</details>
<details>
<summary>
ListResourcesForWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listresourcesforwebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listresourcesforwebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listresourcesforwebaclcommandoutput.html)

</details>
<details>
<summary>
ListRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listrulegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listrulegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listrulegroupscommandoutput.html)

</details>
<details>
<summary>
ListRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listrulescommandoutput.html)

</details>
<details>
<summary>
ListSizeConstraintSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listsizeconstraintsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listsizeconstraintsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listsizeconstraintsetscommandoutput.html)

</details>
<details>
<summary>
ListSqlInjectionMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listsqlinjectionmatchsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listsqlinjectionmatchsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listsqlinjectionmatchsetscommandoutput.html)

</details>
<details>
<summary>
ListSubscribedRuleGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listsubscribedrulegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listsubscribedrulegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listsubscribedrulegroupscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWebACLs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listwebaclscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listwebaclscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listwebaclscommandoutput.html)

</details>
<details>
<summary>
ListXssMatchSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/listxssmatchsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listxssmatchsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/listxssmatchsetscommandoutput.html)

</details>
<details>
<summary>
PutLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/putloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/putloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/putloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutPermissionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/putpermissionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/putpermissionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/putpermissionpolicycommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateByteMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updatebytematchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatebytematchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatebytematchsetcommandoutput.html)

</details>
<details>
<summary>
UpdateGeoMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updategeomatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updategeomatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updategeomatchsetcommandoutput.html)

</details>
<details>
<summary>
UpdateIPSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updateipsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updateipsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updateipsetcommandoutput.html)

</details>
<details>
<summary>
UpdateRateBasedRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updateratebasedrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updateratebasedrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updateratebasedrulecommandoutput.html)

</details>
<details>
<summary>
UpdateRegexMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updateregexmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updateregexmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updateregexmatchsetcommandoutput.html)

</details>
<details>
<summary>
UpdateRegexPatternSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updateregexpatternsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updateregexpatternsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updateregexpatternsetcommandoutput.html)

</details>
<details>
<summary>
UpdateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updaterulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updaterulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updaterulecommandoutput.html)

</details>
<details>
<summary>
UpdateRuleGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updaterulegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updaterulegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updaterulegroupcommandoutput.html)

</details>
<details>
<summary>
UpdateSizeConstraintSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updatesizeconstraintsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatesizeconstraintsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatesizeconstraintsetcommandoutput.html)

</details>
<details>
<summary>
UpdateSqlInjectionMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updatesqlinjectionmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatesqlinjectionmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatesqlinjectionmatchsetcommandoutput.html)

</details>
<details>
<summary>
UpdateWebACL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updatewebaclcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatewebaclcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatewebaclcommandoutput.html)

</details>
<details>
<summary>
UpdateXssMatchSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/classes/updatexssmatchsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatexssmatchsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-waf-regional/interfaces/updatexssmatchsetcommandoutput.html)

</details>
