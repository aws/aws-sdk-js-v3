<!-- generated file, do not edit directly -->

# @aws-sdk/client-accessanalyzer

## Description

AWS SDK for JavaScript AccessAnalyzer Client for Node.js, Browser and React Native.

<p>Identity and Access Management Access Analyzer helps identify potential resource-access risks by enabling you to
identify any policies that grant access to an external principal. It does this by using
logic-based reasoning to analyze resource-based policies in your Amazon Web Services environment. An
external principal can be another Amazon Web Services account, a root user, an IAM user or role, a
federated user, an Amazon Web Services service, or an anonymous user. You can also use IAM Access Analyzer to
preview and validate public and cross-account access to your resources before deploying
permissions changes. This guide describes the Identity and Access Management Access Analyzer operations that you can
call programmatically. For general information about IAM Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">Identity and Access Management Access Analyzer</a> in the <b>IAM User Guide</b>.</p>
<p>To start using IAM Access Analyzer, you first need to create an analyzer.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-accessanalyzer
using your favorite package manager:

- `npm install @aws-sdk/client-accessanalyzer`
- `yarn add @aws-sdk/client-accessanalyzer`
- `pnpm add @aws-sdk/client-accessanalyzer`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AccessAnalyzerClient` and
the commands you need, for example `ApplyArchiveRuleCommand`:

```js
// ES5 example
const { AccessAnalyzerClient, ApplyArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer");
```

```ts
// ES6+ example
import { AccessAnalyzerClient, ApplyArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AccessAnalyzerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ApplyArchiveRuleCommand(params);
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
import * as AWS from "@aws-sdk/client-accessanalyzer";
const client = new AWS.AccessAnalyzer({ region: "REGION" });

// async/await.
try {
  const data = await client.applyArchiveRule(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .applyArchiveRule(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.applyArchiveRule(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-accessanalyzer` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ApplyArchiveRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/applyarchiverulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/applyarchiverulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/applyarchiverulecommandoutput.html)

</details>
<details>
<summary>
CancelPolicyGeneration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/cancelpolicygenerationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/cancelpolicygenerationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/cancelpolicygenerationcommandoutput.html)

</details>
<details>
<summary>
CreateAccessPreview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/createaccesspreviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/createaccesspreviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/createaccesspreviewcommandoutput.html)

</details>
<details>
<summary>
CreateAnalyzer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/createanalyzercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/createanalyzercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/createanalyzercommandoutput.html)

</details>
<details>
<summary>
CreateArchiveRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/createarchiverulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/createarchiverulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/createarchiverulecommandoutput.html)

</details>
<details>
<summary>
DeleteAnalyzer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/deleteanalyzercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/deleteanalyzercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/deleteanalyzercommandoutput.html)

</details>
<details>
<summary>
DeleteArchiveRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/deletearchiverulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/deletearchiverulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/deletearchiverulecommandoutput.html)

</details>
<details>
<summary>
GetAccessPreview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/getaccesspreviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getaccesspreviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getaccesspreviewcommandoutput.html)

</details>
<details>
<summary>
GetAnalyzedResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/getanalyzedresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getanalyzedresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getanalyzedresourcecommandoutput.html)

</details>
<details>
<summary>
GetAnalyzer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/getanalyzercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getanalyzercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getanalyzercommandoutput.html)

</details>
<details>
<summary>
GetArchiveRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/getarchiverulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getarchiverulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getarchiverulecommandoutput.html)

</details>
<details>
<summary>
GetFinding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/getfindingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getfindingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getfindingcommandoutput.html)

</details>
<details>
<summary>
GetGeneratedPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/getgeneratedpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getgeneratedpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/getgeneratedpolicycommandoutput.html)

</details>
<details>
<summary>
ListAccessPreviewFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/listaccesspreviewfindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listaccesspreviewfindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listaccesspreviewfindingscommandoutput.html)

</details>
<details>
<summary>
ListAccessPreviews
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/listaccesspreviewscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listaccesspreviewscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listaccesspreviewscommandoutput.html)

</details>
<details>
<summary>
ListAnalyzedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/listanalyzedresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listanalyzedresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listanalyzedresourcescommandoutput.html)

</details>
<details>
<summary>
ListAnalyzers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/listanalyzerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listanalyzerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listanalyzerscommandoutput.html)

</details>
<details>
<summary>
ListArchiveRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/listarchiverulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listarchiverulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listarchiverulescommandoutput.html)

</details>
<details>
<summary>
ListFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/listfindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listfindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listfindingscommandoutput.html)

</details>
<details>
<summary>
ListPolicyGenerations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/listpolicygenerationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listpolicygenerationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listpolicygenerationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
StartPolicyGeneration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/startpolicygenerationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/startpolicygenerationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/startpolicygenerationcommandoutput.html)

</details>
<details>
<summary>
StartResourceScan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/startresourcescancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/startresourcescancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/startresourcescancommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateArchiveRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/updatearchiverulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/updatearchiverulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/updatearchiverulecommandoutput.html)

</details>
<details>
<summary>
UpdateFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/updatefindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/updatefindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/updatefindingscommandoutput.html)

</details>
<details>
<summary>
ValidatePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/classes/validatepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/validatepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-accessanalyzer/interfaces/validatepolicycommandoutput.html)

</details>
