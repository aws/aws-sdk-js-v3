<!-- generated file, do not edit directly -->

# @aws-sdk/client-config-service

## Description

AWS SDK for JavaScript ConfigService Client for Node.js, Browser and React Native.

<fullname>Config</fullname>

<p>Config provides a way to keep track of the configurations
of all the Amazon Web Services resources associated with your Amazon Web Services account. You can
use Config to get the current and historical configurations of
each Amazon Web Services resource and also to get information about the relationship
between the resources. An Amazon Web Services resource can be an Amazon Compute
Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
elastic network Interface (ENI), or a security group. For a complete
list of resources currently supported by Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resources</a>.</p>
<p>You can access and manage Config through the Amazon Web Services Management
Console, the Amazon Web Services Command Line Interface (Amazon Web Services CLI), the Config
API, or the Amazon Web Services SDKs for Config. This reference guide contains
documentation for the Config API and the Amazon Web Services CLI commands that
you can use to manage Config. The Config API uses the
Signature Version 4 protocol for signing requests. For more
information about how to sign a request with this protocol, see
<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
Version 4 Signing Process</a>. For detailed information
about Config features and their associated actions or commands,
as well as how to work with Amazon Web Services Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is Config</a> in the <i>Config Developer
Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-config-service
using your favorite package manager:

- `npm install @aws-sdk/client-config-service`
- `yarn add @aws-sdk/client-config-service`
- `pnpm add @aws-sdk/client-config-service`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ConfigServiceClient` and
the commands you need, for example `ListStoredQueriesCommand`:

```js
// ES5 example
const { ConfigServiceClient, ListStoredQueriesCommand } = require("@aws-sdk/client-config-service");
```

```ts
// ES6+ example
import { ConfigServiceClient, ListStoredQueriesCommand } from "@aws-sdk/client-config-service";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ConfigServiceClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListStoredQueriesCommand(params);
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
import * as AWS from "@aws-sdk/client-config-service";
const client = new AWS.ConfigService({ region: "REGION" });

// async/await.
try {
  const data = await client.listStoredQueries(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listStoredQueries(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listStoredQueries(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-config-service` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchGetAggregateResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/batchgetaggregateresourceconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/batchgetaggregateresourceconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/batchgetaggregateresourceconfigcommandoutput.html)

</details>
<details>
<summary>
BatchGetResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/batchgetresourceconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/batchgetresourceconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/batchgetresourceconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteAggregationAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteaggregationauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteaggregationauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteaggregationauthorizationcommandoutput.html)

</details>
<details>
<summary>
DeleteConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteconfigrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteconfigrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteconfigrulecommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationAggregator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteconfigurationaggregatorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteconfigurationaggregatorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteconfigurationaggregatorcommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteconfigurationrecordercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteconfigurationrecordercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteconfigurationrecordercommandoutput.html)

</details>
<details>
<summary>
DeleteConformancePack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteconformancepackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteconformancepackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteconformancepackcommandoutput.html)

</details>
<details>
<summary>
DeleteDeliveryChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deletedeliverychannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deletedeliverychannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deletedeliverychannelcommandoutput.html)

</details>
<details>
<summary>
DeleteEvaluationResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteevaluationresultscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteevaluationresultscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteevaluationresultscommandoutput.html)

</details>
<details>
<summary>
DeleteOrganizationConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteorganizationconfigrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteorganizationconfigrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteorganizationconfigrulecommandoutput.html)

</details>
<details>
<summary>
DeleteOrganizationConformancePack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteorganizationconformancepackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteorganizationconformancepackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteorganizationconformancepackcommandoutput.html)

</details>
<details>
<summary>
DeletePendingAggregationRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deletependingaggregationrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deletependingaggregationrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deletependingaggregationrequestcommandoutput.html)

</details>
<details>
<summary>
DeleteRemediationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteremediationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteremediationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteremediationconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteRemediationExceptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteremediationexceptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteremediationexceptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteremediationexceptionscommandoutput.html)

</details>
<details>
<summary>
DeleteResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteresourceconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteresourceconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteresourceconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteRetentionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deleteretentionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteretentionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deleteretentionconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteStoredQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deletestoredquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deletestoredquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deletestoredquerycommandoutput.html)

</details>
<details>
<summary>
DeliverConfigSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/deliverconfigsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deliverconfigsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/deliverconfigsnapshotcommandoutput.html)

</details>
<details>
<summary>
DescribeAggregateComplianceByConfigRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeaggregatecompliancebyconfigrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeaggregatecompliancebyconfigrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeaggregatecompliancebyconfigrulescommandoutput.html)

</details>
<details>
<summary>
DescribeAggregateComplianceByConformancePacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeaggregatecompliancebyconformancepackscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeaggregatecompliancebyconformancepackscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeaggregatecompliancebyconformancepackscommandoutput.html)

</details>
<details>
<summary>
DescribeAggregationAuthorizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeaggregationauthorizationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeaggregationauthorizationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeaggregationauthorizationscommandoutput.html)

</details>
<details>
<summary>
DescribeComplianceByConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describecompliancebyconfigrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describecompliancebyconfigrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describecompliancebyconfigrulecommandoutput.html)

</details>
<details>
<summary>
DescribeComplianceByResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describecompliancebyresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describecompliancebyresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describecompliancebyresourcecommandoutput.html)

</details>
<details>
<summary>
DescribeConfigRuleEvaluationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconfigruleevaluationstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigruleevaluationstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigruleevaluationstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeConfigRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconfigrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigrulescommandoutput.html)

</details>
<details>
<summary>
DescribeConfigurationAggregators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconfigurationaggregatorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigurationaggregatorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigurationaggregatorscommandoutput.html)

</details>
<details>
<summary>
DescribeConfigurationAggregatorSourcesStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconfigurationaggregatorsourcesstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigurationaggregatorsourcesstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigurationaggregatorsourcesstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeConfigurationRecorders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconfigurationrecorderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigurationrecorderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigurationrecorderscommandoutput.html)

</details>
<details>
<summary>
DescribeConfigurationRecorderStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconfigurationrecorderstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigurationrecorderstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconfigurationrecorderstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeConformancePackCompliance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconformancepackcompliancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconformancepackcompliancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconformancepackcompliancecommandoutput.html)

</details>
<details>
<summary>
DescribeConformancePacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconformancepackscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconformancepackscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconformancepackscommandoutput.html)

</details>
<details>
<summary>
DescribeConformancePackStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeconformancepackstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconformancepackstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeconformancepackstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeDeliveryChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describedeliverychannelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describedeliverychannelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describedeliverychannelscommandoutput.html)

</details>
<details>
<summary>
DescribeDeliveryChannelStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describedeliverychannelstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describedeliverychannelstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describedeliverychannelstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationConfigRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeorganizationconfigrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeorganizationconfigrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeorganizationconfigrulescommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationConfigRuleStatuses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeorganizationconfigrulestatusescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeorganizationconfigrulestatusescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeorganizationconfigrulestatusescommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationConformancePacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeorganizationconformancepackscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeorganizationconformancepackscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeorganizationconformancepackscommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationConformancePackStatuses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeorganizationconformancepackstatusescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeorganizationconformancepackstatusescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeorganizationconformancepackstatusescommandoutput.html)

</details>
<details>
<summary>
DescribePendingAggregationRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describependingaggregationrequestscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describependingaggregationrequestscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describependingaggregationrequestscommandoutput.html)

</details>
<details>
<summary>
DescribeRemediationConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeremediationconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeremediationconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeremediationconfigurationscommandoutput.html)

</details>
<details>
<summary>
DescribeRemediationExceptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeremediationexceptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeremediationexceptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeremediationexceptionscommandoutput.html)

</details>
<details>
<summary>
DescribeRemediationExecutionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeremediationexecutionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeremediationexecutionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeremediationexecutionstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeRetentionConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/describeretentionconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeretentionconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/describeretentionconfigurationscommandoutput.html)

</details>
<details>
<summary>
GetAggregateComplianceDetailsByConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getaggregatecompliancedetailsbyconfigrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregatecompliancedetailsbyconfigrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregatecompliancedetailsbyconfigrulecommandoutput.html)

</details>
<details>
<summary>
GetAggregateConfigRuleComplianceSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getaggregateconfigrulecompliancesummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregateconfigrulecompliancesummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregateconfigrulecompliancesummarycommandoutput.html)

</details>
<details>
<summary>
GetAggregateConformancePackComplianceSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getaggregateconformancepackcompliancesummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregateconformancepackcompliancesummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregateconformancepackcompliancesummarycommandoutput.html)

</details>
<details>
<summary>
GetAggregateDiscoveredResourceCounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getaggregatediscoveredresourcecountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregatediscoveredresourcecountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregatediscoveredresourcecountscommandoutput.html)

</details>
<details>
<summary>
GetAggregateResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getaggregateresourceconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregateresourceconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getaggregateresourceconfigcommandoutput.html)

</details>
<details>
<summary>
GetComplianceDetailsByConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getcompliancedetailsbyconfigrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcompliancedetailsbyconfigrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcompliancedetailsbyconfigrulecommandoutput.html)

</details>
<details>
<summary>
GetComplianceDetailsByResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getcompliancedetailsbyresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcompliancedetailsbyresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcompliancedetailsbyresourcecommandoutput.html)

</details>
<details>
<summary>
GetComplianceSummaryByConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getcompliancesummarybyconfigrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcompliancesummarybyconfigrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcompliancesummarybyconfigrulecommandoutput.html)

</details>
<details>
<summary>
GetComplianceSummaryByResourceType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getcompliancesummarybyresourcetypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcompliancesummarybyresourcetypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcompliancesummarybyresourcetypecommandoutput.html)

</details>
<details>
<summary>
GetConformancePackComplianceDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getconformancepackcompliancedetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getconformancepackcompliancedetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getconformancepackcompliancedetailscommandoutput.html)

</details>
<details>
<summary>
GetConformancePackComplianceSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getconformancepackcompliancesummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getconformancepackcompliancesummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getconformancepackcompliancesummarycommandoutput.html)

</details>
<details>
<summary>
GetCustomRulePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getcustomrulepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcustomrulepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getcustomrulepolicycommandoutput.html)

</details>
<details>
<summary>
GetDiscoveredResourceCounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getdiscoveredresourcecountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getdiscoveredresourcecountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getdiscoveredresourcecountscommandoutput.html)

</details>
<details>
<summary>
GetOrganizationConfigRuleDetailedStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getorganizationconfigruledetailedstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getorganizationconfigruledetailedstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getorganizationconfigruledetailedstatuscommandoutput.html)

</details>
<details>
<summary>
GetOrganizationConformancePackDetailedStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getorganizationconformancepackdetailedstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getorganizationconformancepackdetailedstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getorganizationconformancepackdetailedstatuscommandoutput.html)

</details>
<details>
<summary>
GetOrganizationCustomRulePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getorganizationcustomrulepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getorganizationcustomrulepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getorganizationcustomrulepolicycommandoutput.html)

</details>
<details>
<summary>
GetResourceConfigHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getresourceconfighistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getresourceconfighistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getresourceconfighistorycommandoutput.html)

</details>
<details>
<summary>
GetResourceEvaluationSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getresourceevaluationsummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getresourceevaluationsummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getresourceevaluationsummarycommandoutput.html)

</details>
<details>
<summary>
GetStoredQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/getstoredquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getstoredquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/getstoredquerycommandoutput.html)

</details>
<details>
<summary>
ListAggregateDiscoveredResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/listaggregatediscoveredresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listaggregatediscoveredresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listaggregatediscoveredresourcescommandoutput.html)

</details>
<details>
<summary>
ListConformancePackComplianceScores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/listconformancepackcompliancescorescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listconformancepackcompliancescorescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listconformancepackcompliancescorescommandoutput.html)

</details>
<details>
<summary>
ListDiscoveredResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/listdiscoveredresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listdiscoveredresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listdiscoveredresourcescommandoutput.html)

</details>
<details>
<summary>
ListResourceEvaluations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/listresourceevaluationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listresourceevaluationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listresourceevaluationscommandoutput.html)

</details>
<details>
<summary>
ListStoredQueries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/liststoredqueriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/liststoredqueriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/liststoredqueriescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutAggregationAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putaggregationauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putaggregationauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putaggregationauthorizationcommandoutput.html)

</details>
<details>
<summary>
PutConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putconfigrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putconfigrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putconfigrulecommandoutput.html)

</details>
<details>
<summary>
PutConfigurationAggregator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putconfigurationaggregatorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putconfigurationaggregatorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putconfigurationaggregatorcommandoutput.html)

</details>
<details>
<summary>
PutConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putconfigurationrecordercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putconfigurationrecordercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putconfigurationrecordercommandoutput.html)

</details>
<details>
<summary>
PutConformancePack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putconformancepackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putconformancepackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putconformancepackcommandoutput.html)

</details>
<details>
<summary>
PutDeliveryChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putdeliverychannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putdeliverychannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putdeliverychannelcommandoutput.html)

</details>
<details>
<summary>
PutEvaluations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putevaluationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putevaluationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putevaluationscommandoutput.html)

</details>
<details>
<summary>
PutExternalEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putexternalevaluationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putexternalevaluationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putexternalevaluationcommandoutput.html)

</details>
<details>
<summary>
PutOrganizationConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putorganizationconfigrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putorganizationconfigrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putorganizationconfigrulecommandoutput.html)

</details>
<details>
<summary>
PutOrganizationConformancePack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putorganizationconformancepackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putorganizationconformancepackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putorganizationconformancepackcommandoutput.html)

</details>
<details>
<summary>
PutRemediationConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putremediationconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putremediationconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putremediationconfigurationscommandoutput.html)

</details>
<details>
<summary>
PutRemediationExceptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putremediationexceptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putremediationexceptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putremediationexceptionscommandoutput.html)

</details>
<details>
<summary>
PutResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putresourceconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putresourceconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putresourceconfigcommandoutput.html)

</details>
<details>
<summary>
PutRetentionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putretentionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putretentionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putretentionconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutStoredQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/putstoredquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putstoredquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/putstoredquerycommandoutput.html)

</details>
<details>
<summary>
SelectAggregateResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/selectaggregateresourceconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/selectaggregateresourceconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/selectaggregateresourceconfigcommandoutput.html)

</details>
<details>
<summary>
SelectResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/selectresourceconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/selectresourceconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/selectresourceconfigcommandoutput.html)

</details>
<details>
<summary>
StartConfigRulesEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/startconfigrulesevaluationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/startconfigrulesevaluationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/startconfigrulesevaluationcommandoutput.html)

</details>
<details>
<summary>
StartConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/startconfigurationrecordercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/startconfigurationrecordercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/startconfigurationrecordercommandoutput.html)

</details>
<details>
<summary>
StartRemediationExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/startremediationexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/startremediationexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/startremediationexecutioncommandoutput.html)

</details>
<details>
<summary>
StartResourceEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/startresourceevaluationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/startresourceevaluationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/startresourceevaluationcommandoutput.html)

</details>
<details>
<summary>
StopConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/stopconfigurationrecordercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/stopconfigurationrecordercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/stopconfigurationrecordercommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-config-service/interfaces/untagresourcecommandoutput.html)

</details>
