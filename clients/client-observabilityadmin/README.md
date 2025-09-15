<!-- generated file, do not edit directly -->

# @aws-sdk/client-observabilityadmin

## Description

AWS SDK for JavaScript ObservabilityAdmin Client for Node.js, Browser and React Native.

<p>
You can use Amazon CloudWatch Observability Admin to discover and understand the state of telemetry configuration in CloudWatch for your Amazon Web Services Organization or account. This simplifies the process of auditing your telemetry collection configurations across multiple resource types within your Amazon Web Services Organization or account. By providing a consolidated view, it allows you to easily review and manage telemetry settings, helping you ensure proper monitoring and data collection across your Amazon Web Services environment.
For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/telemetry-config-cloudwatch.html">Auditing CloudWatch telemetry conﬁgurations</a> in the CloudWatch User Guide.</p>
<p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html">Identity and access management for Amazon CloudWatch</a> in the CloudWatch User Guide.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-observabilityadmin
using your favorite package manager:

- `npm install @aws-sdk/client-observabilityadmin`
- `yarn add @aws-sdk/client-observabilityadmin`
- `pnpm add @aws-sdk/client-observabilityadmin`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ObservabilityAdminClient` and
the commands you need, for example `ListResourceTelemetryCommand`:

```js
// ES5 example
const { ObservabilityAdminClient, ListResourceTelemetryCommand } = require("@aws-sdk/client-observabilityadmin");
```

```ts
// ES6+ example
import { ObservabilityAdminClient, ListResourceTelemetryCommand } from "@aws-sdk/client-observabilityadmin";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ObservabilityAdminClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListResourceTelemetryCommand(params);
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
import * as AWS from "@aws-sdk/client-observabilityadmin";
const client = new AWS.ObservabilityAdmin({ region: "REGION" });

// async/await.
try {
  const data = await client.listResourceTelemetry(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listResourceTelemetry(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listResourceTelemetry(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-observabilityadmin` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateCentralizationRuleForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/CreateCentralizationRuleForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/CreateCentralizationRuleForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/CreateCentralizationRuleForOrganizationCommandOutput/)

</details>
<details>
<summary>
CreateTelemetryRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/CreateTelemetryRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/CreateTelemetryRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/CreateTelemetryRuleCommandOutput/)

</details>
<details>
<summary>
CreateTelemetryRuleForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/CreateTelemetryRuleForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/CreateTelemetryRuleForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/CreateTelemetryRuleForOrganizationCommandOutput/)

</details>
<details>
<summary>
DeleteCentralizationRuleForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/DeleteCentralizationRuleForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/DeleteCentralizationRuleForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/DeleteCentralizationRuleForOrganizationCommandOutput/)

</details>
<details>
<summary>
DeleteTelemetryRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/DeleteTelemetryRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/DeleteTelemetryRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/DeleteTelemetryRuleCommandOutput/)

</details>
<details>
<summary>
DeleteTelemetryRuleForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/DeleteTelemetryRuleForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/DeleteTelemetryRuleForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/DeleteTelemetryRuleForOrganizationCommandOutput/)

</details>
<details>
<summary>
GetCentralizationRuleForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/GetCentralizationRuleForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetCentralizationRuleForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetCentralizationRuleForOrganizationCommandOutput/)

</details>
<details>
<summary>
GetTelemetryEvaluationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/GetTelemetryEvaluationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetTelemetryEvaluationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetTelemetryEvaluationStatusCommandOutput/)

</details>
<details>
<summary>
GetTelemetryEvaluationStatusForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/GetTelemetryEvaluationStatusForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetTelemetryEvaluationStatusForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetTelemetryEvaluationStatusForOrganizationCommandOutput/)

</details>
<details>
<summary>
GetTelemetryRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/GetTelemetryRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetTelemetryRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetTelemetryRuleCommandOutput/)

</details>
<details>
<summary>
GetTelemetryRuleForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/GetTelemetryRuleForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetTelemetryRuleForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/GetTelemetryRuleForOrganizationCommandOutput/)

</details>
<details>
<summary>
ListCentralizationRulesForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/ListCentralizationRulesForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListCentralizationRulesForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListCentralizationRulesForOrganizationCommandOutput/)

</details>
<details>
<summary>
ListResourceTelemetry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/ListResourceTelemetryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListResourceTelemetryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListResourceTelemetryCommandOutput/)

</details>
<details>
<summary>
ListResourceTelemetryForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/ListResourceTelemetryForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListResourceTelemetryForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListResourceTelemetryForOrganizationCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTelemetryRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/ListTelemetryRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListTelemetryRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListTelemetryRulesCommandOutput/)

</details>
<details>
<summary>
ListTelemetryRulesForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/ListTelemetryRulesForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListTelemetryRulesForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/ListTelemetryRulesForOrganizationCommandOutput/)

</details>
<details>
<summary>
StartTelemetryEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/StartTelemetryEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/StartTelemetryEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/StartTelemetryEvaluationCommandOutput/)

</details>
<details>
<summary>
StartTelemetryEvaluationForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/StartTelemetryEvaluationForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/StartTelemetryEvaluationForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/StartTelemetryEvaluationForOrganizationCommandOutput/)

</details>
<details>
<summary>
StopTelemetryEvaluation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/StopTelemetryEvaluationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/StopTelemetryEvaluationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/StopTelemetryEvaluationCommandOutput/)

</details>
<details>
<summary>
StopTelemetryEvaluationForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/StopTelemetryEvaluationForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/StopTelemetryEvaluationForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/StopTelemetryEvaluationForOrganizationCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateCentralizationRuleForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/UpdateCentralizationRuleForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/UpdateCentralizationRuleForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/UpdateCentralizationRuleForOrganizationCommandOutput/)

</details>
<details>
<summary>
UpdateTelemetryRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/UpdateTelemetryRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/UpdateTelemetryRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/UpdateTelemetryRuleCommandOutput/)

</details>
<details>
<summary>
UpdateTelemetryRuleForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/observabilityadmin/command/UpdateTelemetryRuleForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/UpdateTelemetryRuleForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-observabilityadmin/Interface/UpdateTelemetryRuleForOrganizationCommandOutput/)

</details>
