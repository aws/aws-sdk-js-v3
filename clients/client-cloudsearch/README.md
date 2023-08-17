<!-- generated file, do not edit directly -->

# @aws-sdk/client-cloudsearch

## Description

AWS SDK for JavaScript CloudSearch Client for Node.js, Browser and React Native.

<fullname>Amazon CloudSearch Configuration Service</fullname>

<p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
<p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-cloudsearch
using your favorite package manager:

- `npm install @aws-sdk/client-cloudsearch`
- `yarn add @aws-sdk/client-cloudsearch`
- `pnpm add @aws-sdk/client-cloudsearch`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CloudSearchClient` and
the commands you need, for example `BuildSuggestersCommand`:

```js
// ES5 example
const { CloudSearchClient, BuildSuggestersCommand } = require("@aws-sdk/client-cloudsearch");
```

```ts
// ES6+ example
import { CloudSearchClient, BuildSuggestersCommand } from "@aws-sdk/client-cloudsearch";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CloudSearchClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BuildSuggestersCommand(params);
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
import * as AWS from "@aws-sdk/client-cloudsearch";
const client = new AWS.CloudSearch({ region: "REGION" });

// async/await.
try {
  const data = await client.buildSuggesters(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .buildSuggesters(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.buildSuggesters(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-cloudsearch` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BuildSuggesters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/buildsuggesterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/buildsuggesterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/buildsuggesterscommandoutput.html)

</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/createdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/createdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/createdomaincommandoutput.html)

</details>
<details>
<summary>
DefineAnalysisScheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/defineanalysisschemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/defineanalysisschemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/defineanalysisschemecommandoutput.html)

</details>
<details>
<summary>
DefineExpression
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/defineexpressioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/defineexpressioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/defineexpressioncommandoutput.html)

</details>
<details>
<summary>
DefineIndexField
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/defineindexfieldcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/defineindexfieldcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/defineindexfieldcommandoutput.html)

</details>
<details>
<summary>
DefineSuggester
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/definesuggestercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/definesuggestercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/definesuggestercommandoutput.html)

</details>
<details>
<summary>
DeleteAnalysisScheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/deleteanalysisschemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deleteanalysisschemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deleteanalysisschemecommandoutput.html)

</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/deletedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deletedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deletedomaincommandoutput.html)

</details>
<details>
<summary>
DeleteExpression
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/deleteexpressioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deleteexpressioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deleteexpressioncommandoutput.html)

</details>
<details>
<summary>
DeleteIndexField
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/deleteindexfieldcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deleteindexfieldcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deleteindexfieldcommandoutput.html)

</details>
<details>
<summary>
DeleteSuggester
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/deletesuggestercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deletesuggestercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/deletesuggestercommandoutput.html)

</details>
<details>
<summary>
DescribeAnalysisSchemes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describeanalysisschemescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeanalysisschemescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeanalysisschemescommandoutput.html)

</details>
<details>
<summary>
DescribeAvailabilityOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describeavailabilityoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeavailabilityoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeavailabilityoptionscommandoutput.html)

</details>
<details>
<summary>
DescribeDomainEndpointOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describedomainendpointoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describedomainendpointoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describedomainendpointoptionscommandoutput.html)

</details>
<details>
<summary>
DescribeDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describedomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describedomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describedomainscommandoutput.html)

</details>
<details>
<summary>
DescribeExpressions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describeexpressionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeexpressionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeexpressionscommandoutput.html)

</details>
<details>
<summary>
DescribeIndexFields
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describeindexfieldscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeindexfieldscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeindexfieldscommandoutput.html)

</details>
<details>
<summary>
DescribeScalingParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describescalingparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describescalingparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describescalingparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeServiceAccessPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describeserviceaccesspoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeserviceaccesspoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describeserviceaccesspoliciescommandoutput.html)

</details>
<details>
<summary>
DescribeSuggesters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/describesuggesterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describesuggesterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/describesuggesterscommandoutput.html)

</details>
<details>
<summary>
IndexDocuments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/indexdocumentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/indexdocumentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/indexdocumentscommandoutput.html)

</details>
<details>
<summary>
ListDomainNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/listdomainnamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/listdomainnamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/listdomainnamescommandoutput.html)

</details>
<details>
<summary>
UpdateAvailabilityOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/updateavailabilityoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/updateavailabilityoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/updateavailabilityoptionscommandoutput.html)

</details>
<details>
<summary>
UpdateDomainEndpointOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/updatedomainendpointoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/updatedomainendpointoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/updatedomainendpointoptionscommandoutput.html)

</details>
<details>
<summary>
UpdateScalingParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/updatescalingparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/updatescalingparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/updatescalingparameterscommandoutput.html)

</details>
<details>
<summary>
UpdateServiceAccessPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/classes/updateserviceaccesspoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/updateserviceaccesspoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudsearch/interfaces/updateserviceaccesspoliciescommandoutput.html)

</details>
