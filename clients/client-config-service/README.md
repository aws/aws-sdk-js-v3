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

To install this package, simply type add or install @aws-sdk/client-config-service
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-config-service` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/AssociateResourceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/AssociateResourceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/AssociateResourceTypesCommandOutput/)

</details>
<details>
<summary>
BatchGetAggregateResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/BatchGetAggregateResourceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/BatchGetAggregateResourceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/BatchGetAggregateResourceConfigCommandOutput/)

</details>
<details>
<summary>
BatchGetResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/BatchGetResourceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/BatchGetResourceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/BatchGetResourceConfigCommandOutput/)

</details>
<details>
<summary>
DeleteAggregationAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteAggregationAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteAggregationAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteAggregationAuthorizationCommandOutput/)

</details>
<details>
<summary>
DeleteConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteConfigRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteConfigRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteConfigRuleCommandOutput/)

</details>
<details>
<summary>
DeleteConfigurationAggregator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteConfigurationAggregatorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteConfigurationAggregatorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteConfigurationAggregatorCommandOutput/)

</details>
<details>
<summary>
DeleteConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteConfigurationRecorderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteConfigurationRecorderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteConfigurationRecorderCommandOutput/)

</details>
<details>
<summary>
DeleteConformancePack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteConformancePackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteConformancePackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteConformancePackCommandOutput/)

</details>
<details>
<summary>
DeleteDeliveryChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteDeliveryChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteDeliveryChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteDeliveryChannelCommandOutput/)

</details>
<details>
<summary>
DeleteEvaluationResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteEvaluationResultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteEvaluationResultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteEvaluationResultsCommandOutput/)

</details>
<details>
<summary>
DeleteOrganizationConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteOrganizationConfigRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteOrganizationConfigRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteOrganizationConfigRuleCommandOutput/)

</details>
<details>
<summary>
DeleteOrganizationConformancePack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteOrganizationConformancePackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteOrganizationConformancePackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteOrganizationConformancePackCommandOutput/)

</details>
<details>
<summary>
DeletePendingAggregationRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeletePendingAggregationRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeletePendingAggregationRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeletePendingAggregationRequestCommandOutput/)

</details>
<details>
<summary>
DeleteRemediationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteRemediationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteRemediationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteRemediationConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteRemediationExceptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteRemediationExceptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteRemediationExceptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteRemediationExceptionsCommandOutput/)

</details>
<details>
<summary>
DeleteResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteResourceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteResourceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteResourceConfigCommandOutput/)

</details>
<details>
<summary>
DeleteRetentionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteRetentionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteRetentionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteRetentionConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteServiceLinkedConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteServiceLinkedConfigurationRecorderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteServiceLinkedConfigurationRecorderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteServiceLinkedConfigurationRecorderCommandOutput/)

</details>
<details>
<summary>
DeleteStoredQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeleteStoredQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteStoredQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeleteStoredQueryCommandOutput/)

</details>
<details>
<summary>
DeliverConfigSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DeliverConfigSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeliverConfigSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DeliverConfigSnapshotCommandOutput/)

</details>
<details>
<summary>
DescribeAggregateComplianceByConfigRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeAggregateComplianceByConfigRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeAggregateComplianceByConfigRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeAggregateComplianceByConfigRulesCommandOutput/)

</details>
<details>
<summary>
DescribeAggregateComplianceByConformancePacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeAggregateComplianceByConformancePacksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeAggregateComplianceByConformancePacksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeAggregateComplianceByConformancePacksCommandOutput/)

</details>
<details>
<summary>
DescribeAggregationAuthorizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeAggregationAuthorizationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeAggregationAuthorizationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeAggregationAuthorizationsCommandOutput/)

</details>
<details>
<summary>
DescribeComplianceByConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeComplianceByConfigRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeComplianceByConfigRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeComplianceByConfigRuleCommandOutput/)

</details>
<details>
<summary>
DescribeComplianceByResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeComplianceByResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeComplianceByResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeComplianceByResourceCommandOutput/)

</details>
<details>
<summary>
DescribeConfigRuleEvaluationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConfigRuleEvaluationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigRuleEvaluationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigRuleEvaluationStatusCommandOutput/)

</details>
<details>
<summary>
DescribeConfigRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConfigRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigRulesCommandOutput/)

</details>
<details>
<summary>
DescribeConfigurationAggregators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConfigurationAggregatorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigurationAggregatorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigurationAggregatorsCommandOutput/)

</details>
<details>
<summary>
DescribeConfigurationAggregatorSourcesStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConfigurationAggregatorSourcesStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigurationAggregatorSourcesStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigurationAggregatorSourcesStatusCommandOutput/)

</details>
<details>
<summary>
DescribeConfigurationRecorders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConfigurationRecordersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigurationRecordersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigurationRecordersCommandOutput/)

</details>
<details>
<summary>
DescribeConfigurationRecorderStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConfigurationRecorderStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigurationRecorderStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConfigurationRecorderStatusCommandOutput/)

</details>
<details>
<summary>
DescribeConformancePackCompliance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConformancePackComplianceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConformancePackComplianceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConformancePackComplianceCommandOutput/)

</details>
<details>
<summary>
DescribeConformancePacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConformancePacksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConformancePacksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConformancePacksCommandOutput/)

</details>
<details>
<summary>
DescribeConformancePackStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeConformancePackStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConformancePackStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeConformancePackStatusCommandOutput/)

</details>
<details>
<summary>
DescribeDeliveryChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeDeliveryChannelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeDeliveryChannelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeDeliveryChannelsCommandOutput/)

</details>
<details>
<summary>
DescribeDeliveryChannelStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeDeliveryChannelStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeDeliveryChannelStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeDeliveryChannelStatusCommandOutput/)

</details>
<details>
<summary>
DescribeOrganizationConfigRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeOrganizationConfigRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeOrganizationConfigRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeOrganizationConfigRulesCommandOutput/)

</details>
<details>
<summary>
DescribeOrganizationConfigRuleStatuses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeOrganizationConfigRuleStatusesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeOrganizationConfigRuleStatusesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeOrganizationConfigRuleStatusesCommandOutput/)

</details>
<details>
<summary>
DescribeOrganizationConformancePacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeOrganizationConformancePacksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeOrganizationConformancePacksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeOrganizationConformancePacksCommandOutput/)

</details>
<details>
<summary>
DescribeOrganizationConformancePackStatuses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeOrganizationConformancePackStatusesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeOrganizationConformancePackStatusesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeOrganizationConformancePackStatusesCommandOutput/)

</details>
<details>
<summary>
DescribePendingAggregationRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribePendingAggregationRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribePendingAggregationRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribePendingAggregationRequestsCommandOutput/)

</details>
<details>
<summary>
DescribeRemediationConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeRemediationConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeRemediationConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeRemediationConfigurationsCommandOutput/)

</details>
<details>
<summary>
DescribeRemediationExceptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeRemediationExceptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeRemediationExceptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeRemediationExceptionsCommandOutput/)

</details>
<details>
<summary>
DescribeRemediationExecutionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeRemediationExecutionStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeRemediationExecutionStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeRemediationExecutionStatusCommandOutput/)

</details>
<details>
<summary>
DescribeRetentionConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DescribeRetentionConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeRetentionConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DescribeRetentionConfigurationsCommandOutput/)

</details>
<details>
<summary>
DisassociateResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/DisassociateResourceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DisassociateResourceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/DisassociateResourceTypesCommandOutput/)

</details>
<details>
<summary>
GetAggregateComplianceDetailsByConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetAggregateComplianceDetailsByConfigRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateComplianceDetailsByConfigRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateComplianceDetailsByConfigRuleCommandOutput/)

</details>
<details>
<summary>
GetAggregateConfigRuleComplianceSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetAggregateConfigRuleComplianceSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateConfigRuleComplianceSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateConfigRuleComplianceSummaryCommandOutput/)

</details>
<details>
<summary>
GetAggregateConformancePackComplianceSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetAggregateConformancePackComplianceSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateConformancePackComplianceSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateConformancePackComplianceSummaryCommandOutput/)

</details>
<details>
<summary>
GetAggregateDiscoveredResourceCounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetAggregateDiscoveredResourceCountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateDiscoveredResourceCountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateDiscoveredResourceCountsCommandOutput/)

</details>
<details>
<summary>
GetAggregateResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetAggregateResourceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateResourceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetAggregateResourceConfigCommandOutput/)

</details>
<details>
<summary>
GetComplianceDetailsByConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetComplianceDetailsByConfigRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetComplianceDetailsByConfigRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetComplianceDetailsByConfigRuleCommandOutput/)

</details>
<details>
<summary>
GetComplianceDetailsByResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetComplianceDetailsByResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetComplianceDetailsByResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetComplianceDetailsByResourceCommandOutput/)

</details>
<details>
<summary>
GetComplianceSummaryByConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetComplianceSummaryByConfigRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetComplianceSummaryByConfigRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetComplianceSummaryByConfigRuleCommandOutput/)

</details>
<details>
<summary>
GetComplianceSummaryByResourceType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetComplianceSummaryByResourceTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetComplianceSummaryByResourceTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetComplianceSummaryByResourceTypeCommandOutput/)

</details>
<details>
<summary>
GetConformancePackComplianceDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetConformancePackComplianceDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetConformancePackComplianceDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetConformancePackComplianceDetailsCommandOutput/)

</details>
<details>
<summary>
GetConformancePackComplianceSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetConformancePackComplianceSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetConformancePackComplianceSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetConformancePackComplianceSummaryCommandOutput/)

</details>
<details>
<summary>
GetCustomRulePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetCustomRulePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetCustomRulePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetCustomRulePolicyCommandOutput/)

</details>
<details>
<summary>
GetDiscoveredResourceCounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetDiscoveredResourceCountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetDiscoveredResourceCountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetDiscoveredResourceCountsCommandOutput/)

</details>
<details>
<summary>
GetOrganizationConfigRuleDetailedStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetOrganizationConfigRuleDetailedStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetOrganizationConfigRuleDetailedStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetOrganizationConfigRuleDetailedStatusCommandOutput/)

</details>
<details>
<summary>
GetOrganizationConformancePackDetailedStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetOrganizationConformancePackDetailedStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetOrganizationConformancePackDetailedStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetOrganizationConformancePackDetailedStatusCommandOutput/)

</details>
<details>
<summary>
GetOrganizationCustomRulePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetOrganizationCustomRulePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetOrganizationCustomRulePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetOrganizationCustomRulePolicyCommandOutput/)

</details>
<details>
<summary>
GetResourceConfigHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetResourceConfigHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetResourceConfigHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetResourceConfigHistoryCommandOutput/)

</details>
<details>
<summary>
GetResourceEvaluationSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetResourceEvaluationSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetResourceEvaluationSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetResourceEvaluationSummaryCommandOutput/)

</details>
<details>
<summary>
GetStoredQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/GetStoredQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetStoredQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/GetStoredQueryCommandOutput/)

</details>
<details>
<summary>
ListAggregateDiscoveredResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/ListAggregateDiscoveredResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListAggregateDiscoveredResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListAggregateDiscoveredResourcesCommandOutput/)

</details>
<details>
<summary>
ListConfigurationRecorders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/ListConfigurationRecordersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListConfigurationRecordersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListConfigurationRecordersCommandOutput/)

</details>
<details>
<summary>
ListConformancePackComplianceScores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/ListConformancePackComplianceScoresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListConformancePackComplianceScoresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListConformancePackComplianceScoresCommandOutput/)

</details>
<details>
<summary>
ListDiscoveredResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/ListDiscoveredResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListDiscoveredResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListDiscoveredResourcesCommandOutput/)

</details>
<details>
<summary>
ListResourceEvaluations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/ListResourceEvaluationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListResourceEvaluationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListResourceEvaluationsCommandOutput/)

</details>
<details>
<summary>
ListStoredQueries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/ListStoredQueriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListStoredQueriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListStoredQueriesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutAggregationAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutAggregationAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutAggregationAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutAggregationAuthorizationCommandOutput/)

</details>
<details>
<summary>
PutConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutConfigRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutConfigRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutConfigRuleCommandOutput/)

</details>
<details>
<summary>
PutConfigurationAggregator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutConfigurationAggregatorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutConfigurationAggregatorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutConfigurationAggregatorCommandOutput/)

</details>
<details>
<summary>
PutConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutConfigurationRecorderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutConfigurationRecorderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutConfigurationRecorderCommandOutput/)

</details>
<details>
<summary>
PutConformancePack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutConformancePackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutConformancePackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutConformancePackCommandOutput/)

</details>
<details>
<summary>
PutDeliveryChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutDeliveryChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutDeliveryChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutDeliveryChannelCommandOutput/)

</details>
<details>
<summary>
PutEvaluations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutEvaluationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutEvaluationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutEvaluationsCommandOutput/)

</details>
<details>
<summary>
PutExternalEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutExternalEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutExternalEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutExternalEvaluationCommandOutput/)

</details>
<details>
<summary>
PutOrganizationConfigRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutOrganizationConfigRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutOrganizationConfigRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutOrganizationConfigRuleCommandOutput/)

</details>
<details>
<summary>
PutOrganizationConformancePack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutOrganizationConformancePackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutOrganizationConformancePackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutOrganizationConformancePackCommandOutput/)

</details>
<details>
<summary>
PutRemediationConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutRemediationConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutRemediationConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutRemediationConfigurationsCommandOutput/)

</details>
<details>
<summary>
PutRemediationExceptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutRemediationExceptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutRemediationExceptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutRemediationExceptionsCommandOutput/)

</details>
<details>
<summary>
PutResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutResourceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutResourceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutResourceConfigCommandOutput/)

</details>
<details>
<summary>
PutRetentionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutRetentionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutRetentionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutRetentionConfigurationCommandOutput/)

</details>
<details>
<summary>
PutServiceLinkedConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutServiceLinkedConfigurationRecorderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutServiceLinkedConfigurationRecorderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutServiceLinkedConfigurationRecorderCommandOutput/)

</details>
<details>
<summary>
PutStoredQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/PutStoredQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutStoredQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/PutStoredQueryCommandOutput/)

</details>
<details>
<summary>
SelectAggregateResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/SelectAggregateResourceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/SelectAggregateResourceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/SelectAggregateResourceConfigCommandOutput/)

</details>
<details>
<summary>
SelectResourceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/SelectResourceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/SelectResourceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/SelectResourceConfigCommandOutput/)

</details>
<details>
<summary>
StartConfigRulesEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/StartConfigRulesEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StartConfigRulesEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StartConfigRulesEvaluationCommandOutput/)

</details>
<details>
<summary>
StartConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/StartConfigurationRecorderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StartConfigurationRecorderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StartConfigurationRecorderCommandOutput/)

</details>
<details>
<summary>
StartRemediationExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/StartRemediationExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StartRemediationExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StartRemediationExecutionCommandOutput/)

</details>
<details>
<summary>
StartResourceEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/StartResourceEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StartResourceEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StartResourceEvaluationCommandOutput/)

</details>
<details>
<summary>
StopConfigurationRecorder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/StopConfigurationRecorderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StopConfigurationRecorderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/StopConfigurationRecorderCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/config-service/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-config-service/Interface/UntagResourceCommandOutput/)

</details>
