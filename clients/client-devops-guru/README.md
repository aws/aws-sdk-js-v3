<!-- generated file, do not edit directly -->

# @aws-sdk/client-devops-guru

## Description

AWS SDK for JavaScript DevOpsGuru Client for Node.js, Browser and React Native.

<p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in
business critical operational applications. You specify the Amazon Web Services resources that you
want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those
resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an
<i>insight</i> that includes recommendations, related events, and
related metrics that can help you improve your operational applications. For more
information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
<p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight
is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each
insight to help you manage and track your work addressing insights. </p>
<p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-devops-guru
using your favorite package manager:

- `npm install @aws-sdk/client-devops-guru`
- `yarn add @aws-sdk/client-devops-guru`
- `pnpm add @aws-sdk/client-devops-guru`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DevOpsGuruClient` and
the commands you need, for example `ListEventsCommand`:

```js
// ES5 example
const { DevOpsGuruClient, ListEventsCommand } = require("@aws-sdk/client-devops-guru");
```

```ts
// ES6+ example
import { DevOpsGuruClient, ListEventsCommand } from "@aws-sdk/client-devops-guru";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DevOpsGuruClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListEventsCommand(params);
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
import * as AWS from "@aws-sdk/client-devops-guru";
const client = new AWS.DevOpsGuru({ region: "REGION" });

// async/await.
try {
  const data = await client.listEvents(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listEvents(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listEvents(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-devops-guru` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddNotificationChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/addnotificationchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/addnotificationchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/addnotificationchannelcommandoutput.html)

</details>
<details>
<summary>
DeleteInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/deleteinsightcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/deleteinsightcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/deleteinsightcommandoutput.html)

</details>
<details>
<summary>
DescribeAccountHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeaccounthealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeaccounthealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeaccounthealthcommandoutput.html)

</details>
<details>
<summary>
DescribeAccountOverview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeaccountoverviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeaccountoverviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeaccountoverviewcommandoutput.html)

</details>
<details>
<summary>
DescribeAnomaly
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeanomalycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeanomalycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeanomalycommandoutput.html)

</details>
<details>
<summary>
DescribeEventSourcesConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeeventsourcesconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeeventsourcesconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeeventsourcesconfigcommandoutput.html)

</details>
<details>
<summary>
DescribeFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describefeedbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describefeedbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describefeedbackcommandoutput.html)

</details>
<details>
<summary>
DescribeInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeinsightcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeinsightcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeinsightcommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeorganizationhealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeorganizationhealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeorganizationhealthcommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationOverview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeorganizationoverviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeorganizationoverviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeorganizationoverviewcommandoutput.html)

</details>
<details>
<summary>
DescribeOrganizationResourceCollectionHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeorganizationresourcecollectionhealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeorganizationresourcecollectionhealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeorganizationresourcecollectionhealthcommandoutput.html)

</details>
<details>
<summary>
DescribeResourceCollectionHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeresourcecollectionhealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeresourcecollectionhealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeresourcecollectionhealthcommandoutput.html)

</details>
<details>
<summary>
DescribeServiceIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/describeserviceintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeserviceintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/describeserviceintegrationcommandoutput.html)

</details>
<details>
<summary>
GetCostEstimation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/getcostestimationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/getcostestimationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/getcostestimationcommandoutput.html)

</details>
<details>
<summary>
GetResourceCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/getresourcecollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/getresourcecollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/getresourcecollectioncommandoutput.html)

</details>
<details>
<summary>
ListAnomaliesForInsight
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/listanomaliesforinsightcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listanomaliesforinsightcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listanomaliesforinsightcommandoutput.html)

</details>
<details>
<summary>
ListAnomalousLogGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/listanomalousloggroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listanomalousloggroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listanomalousloggroupscommandoutput.html)

</details>
<details>
<summary>
ListEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/listeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listeventscommandoutput.html)

</details>
<details>
<summary>
ListInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/listinsightscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listinsightscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listinsightscommandoutput.html)

</details>
<details>
<summary>
ListMonitoredResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/listmonitoredresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listmonitoredresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listmonitoredresourcescommandoutput.html)

</details>
<details>
<summary>
ListNotificationChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/listnotificationchannelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listnotificationchannelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listnotificationchannelscommandoutput.html)

</details>
<details>
<summary>
ListOrganizationInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/listorganizationinsightscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listorganizationinsightscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listorganizationinsightscommandoutput.html)

</details>
<details>
<summary>
ListRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/listrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/listrecommendationscommandoutput.html)

</details>
<details>
<summary>
PutFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/putfeedbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/putfeedbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/putfeedbackcommandoutput.html)

</details>
<details>
<summary>
RemoveNotificationChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/removenotificationchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/removenotificationchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/removenotificationchannelcommandoutput.html)

</details>
<details>
<summary>
SearchInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/searchinsightscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/searchinsightscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/searchinsightscommandoutput.html)

</details>
<details>
<summary>
SearchOrganizationInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/searchorganizationinsightscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/searchorganizationinsightscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/searchorganizationinsightscommandoutput.html)

</details>
<details>
<summary>
StartCostEstimation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/startcostestimationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/startcostestimationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/startcostestimationcommandoutput.html)

</details>
<details>
<summary>
UpdateEventSourcesConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/updateeventsourcesconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/updateeventsourcesconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/updateeventsourcesconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateResourceCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/updateresourcecollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/updateresourcecollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/updateresourcecollectioncommandoutput.html)

</details>
<details>
<summary>
UpdateServiceIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/classes/updateserviceintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/updateserviceintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-devops-guru/interfaces/updateserviceintegrationcommandoutput.html)

</details>
