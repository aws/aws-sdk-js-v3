<!-- generated file, do not edit directly -->

# @aws-sdk/client-frauddetector

## Description

AWS SDK for JavaScript FraudDetector Client for Node.js, Browser and React Native.

<p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
detailed information about Amazon Fraud Detector API actions, data types, and errors. For
more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
<p>We provide the Query API as well as AWS software development kits (SDK) for Amazon Fraud Detector in Java and Python programming languages.</p>
<p>The Amazon Fraud Detector Query API provides HTTPS requests that use the HTTP verb GET or POST and a Query parameter <code>Action</code>. AWS SDK provides libraries,
sample code, tutorials, and other resources for software developers who prefer to build applications using language-specific APIs instead of submitting a request over
HTTP or HTTPS. These libraries provide basic functions that automatically take care of tasks such as cryptographically signing your requests, retrying requests, and
handling error responses, so that it is easier for you to get started. For more information about the AWS SDKs, go to <a href="https://aws.amazon.com/developer/tools/">Tools to build on AWS</a> page,
scroll down to the <b>SDK</b> section, and choose plus (+) sign to expand the section.
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-frauddetector
using your favorite package manager:

- `npm install @aws-sdk/client-frauddetector`
- `yarn add @aws-sdk/client-frauddetector`
- `pnpm add @aws-sdk/client-frauddetector`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `FraudDetectorClient` and
the commands you need, for example `ListEventPredictionsCommand`:

```js
// ES5 example
const { FraudDetectorClient, ListEventPredictionsCommand } = require("@aws-sdk/client-frauddetector");
```

```ts
// ES6+ example
import { FraudDetectorClient, ListEventPredictionsCommand } from "@aws-sdk/client-frauddetector";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new FraudDetectorClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListEventPredictionsCommand(params);
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
import * as AWS from "@aws-sdk/client-frauddetector";
const client = new AWS.FraudDetector({ region: "REGION" });

// async/await.
try {
  const data = await client.listEventPredictions(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listEventPredictions(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listEventPredictions(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-frauddetector` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchCreateVariable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/batchcreatevariablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/batchcreatevariablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/batchcreatevariablecommandoutput.html)

</details>
<details>
<summary>
BatchGetVariable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/batchgetvariablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/batchgetvariablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/batchgetvariablecommandoutput.html)

</details>
<details>
<summary>
CancelBatchImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/cancelbatchimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/cancelbatchimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/cancelbatchimportjobcommandoutput.html)

</details>
<details>
<summary>
CancelBatchPredictionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/cancelbatchpredictionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/cancelbatchpredictionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/cancelbatchpredictionjobcommandoutput.html)

</details>
<details>
<summary>
CreateBatchImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/createbatchimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createbatchimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createbatchimportjobcommandoutput.html)

</details>
<details>
<summary>
CreateBatchPredictionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/createbatchpredictionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createbatchpredictionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createbatchpredictionjobcommandoutput.html)

</details>
<details>
<summary>
CreateDetectorVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/createdetectorversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createdetectorversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createdetectorversioncommandoutput.html)

</details>
<details>
<summary>
CreateList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/createlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createlistcommandoutput.html)

</details>
<details>
<summary>
CreateModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/createmodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createmodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createmodelcommandoutput.html)

</details>
<details>
<summary>
CreateModelVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/createmodelversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createmodelversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createmodelversioncommandoutput.html)

</details>
<details>
<summary>
CreateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/createrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createrulecommandoutput.html)

</details>
<details>
<summary>
CreateVariable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/createvariablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createvariablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/createvariablecommandoutput.html)

</details>
<details>
<summary>
DeleteBatchImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletebatchimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletebatchimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletebatchimportjobcommandoutput.html)

</details>
<details>
<summary>
DeleteBatchPredictionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletebatchpredictionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletebatchpredictionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletebatchpredictionjobcommandoutput.html)

</details>
<details>
<summary>
DeleteDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletedetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletedetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletedetectorcommandoutput.html)

</details>
<details>
<summary>
DeleteDetectorVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletedetectorversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletedetectorversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletedetectorversioncommandoutput.html)

</details>
<details>
<summary>
DeleteEntityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deleteentitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteentitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteentitytypecommandoutput.html)

</details>
<details>
<summary>
DeleteEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deleteeventcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteeventcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteeventcommandoutput.html)

</details>
<details>
<summary>
DeleteEventsByEventType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deleteeventsbyeventtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteeventsbyeventtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteeventsbyeventtypecommandoutput.html)

</details>
<details>
<summary>
DeleteEventType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deleteeventtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteeventtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteeventtypecommandoutput.html)

</details>
<details>
<summary>
DeleteExternalModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deleteexternalmodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteexternalmodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteexternalmodelcommandoutput.html)

</details>
<details>
<summary>
DeleteLabel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletelabelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletelabelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletelabelcommandoutput.html)

</details>
<details>
<summary>
DeleteList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletelistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletelistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletelistcommandoutput.html)

</details>
<details>
<summary>
DeleteModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletemodelcommandoutput.html)

</details>
<details>
<summary>
DeleteModelVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletemodelversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletemodelversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletemodelversioncommandoutput.html)

</details>
<details>
<summary>
DeleteOutcome
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deleteoutcomecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteoutcomecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleteoutcomecommandoutput.html)

</details>
<details>
<summary>
DeleteRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deleterulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleterulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deleterulecommandoutput.html)

</details>
<details>
<summary>
DeleteVariable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/deletevariablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletevariablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/deletevariablecommandoutput.html)

</details>
<details>
<summary>
DescribeDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/describedetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/describedetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/describedetectorcommandoutput.html)

</details>
<details>
<summary>
DescribeModelVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/describemodelversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/describemodelversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/describemodelversionscommandoutput.html)

</details>
<details>
<summary>
GetBatchImportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getbatchimportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getbatchimportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getbatchimportjobscommandoutput.html)

</details>
<details>
<summary>
GetBatchPredictionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getbatchpredictionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getbatchpredictionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getbatchpredictionjobscommandoutput.html)

</details>
<details>
<summary>
GetDeleteEventsByEventTypeStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getdeleteeventsbyeventtypestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getdeleteeventsbyeventtypestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getdeleteeventsbyeventtypestatuscommandoutput.html)

</details>
<details>
<summary>
GetDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getdetectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getdetectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getdetectorscommandoutput.html)

</details>
<details>
<summary>
GetDetectorVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getdetectorversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getdetectorversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getdetectorversioncommandoutput.html)

</details>
<details>
<summary>
GetEntityTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getentitytypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getentitytypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getentitytypescommandoutput.html)

</details>
<details>
<summary>
GetEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/geteventcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/geteventcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/geteventcommandoutput.html)

</details>
<details>
<summary>
GetEventPrediction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/geteventpredictioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/geteventpredictioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/geteventpredictioncommandoutput.html)

</details>
<details>
<summary>
GetEventPredictionMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/geteventpredictionmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/geteventpredictionmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/geteventpredictionmetadatacommandoutput.html)

</details>
<details>
<summary>
GetEventTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/geteventtypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/geteventtypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/geteventtypescommandoutput.html)

</details>
<details>
<summary>
GetExternalModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getexternalmodelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getexternalmodelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getexternalmodelscommandoutput.html)

</details>
<details>
<summary>
GetKMSEncryptionKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getkmsencryptionkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getkmsencryptionkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getkmsencryptionkeycommandoutput.html)

</details>
<details>
<summary>
GetLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getlabelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getlabelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getlabelscommandoutput.html)

</details>
<details>
<summary>
GetListElements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getlistelementscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getlistelementscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getlistelementscommandoutput.html)

</details>
<details>
<summary>
GetListsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getlistsmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getlistsmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getlistsmetadatacommandoutput.html)

</details>
<details>
<summary>
GetModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getmodelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getmodelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getmodelscommandoutput.html)

</details>
<details>
<summary>
GetModelVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getmodelversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getmodelversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getmodelversioncommandoutput.html)

</details>
<details>
<summary>
GetOutcomes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getoutcomescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getoutcomescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getoutcomescommandoutput.html)

</details>
<details>
<summary>
GetRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getrulescommandoutput.html)

</details>
<details>
<summary>
GetVariables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/getvariablescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getvariablescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/getvariablescommandoutput.html)

</details>
<details>
<summary>
ListEventPredictions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/listeventpredictionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/listeventpredictionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/listeventpredictionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/putdetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putdetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putdetectorcommandoutput.html)

</details>
<details>
<summary>
PutEntityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/putentitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putentitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putentitytypecommandoutput.html)

</details>
<details>
<summary>
PutEventType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/puteventtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/puteventtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/puteventtypecommandoutput.html)

</details>
<details>
<summary>
PutExternalModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/putexternalmodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putexternalmodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putexternalmodelcommandoutput.html)

</details>
<details>
<summary>
PutKMSEncryptionKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/putkmsencryptionkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putkmsencryptionkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putkmsencryptionkeycommandoutput.html)

</details>
<details>
<summary>
PutLabel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/putlabelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putlabelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putlabelcommandoutput.html)

</details>
<details>
<summary>
PutOutcome
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/putoutcomecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putoutcomecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/putoutcomecommandoutput.html)

</details>
<details>
<summary>
SendEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/sendeventcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/sendeventcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/sendeventcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDetectorVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updatedetectorversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatedetectorversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatedetectorversioncommandoutput.html)

</details>
<details>
<summary>
UpdateDetectorVersionMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updatedetectorversionmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatedetectorversionmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatedetectorversionmetadatacommandoutput.html)

</details>
<details>
<summary>
UpdateDetectorVersionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updatedetectorversionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatedetectorversionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatedetectorversionstatuscommandoutput.html)

</details>
<details>
<summary>
UpdateEventLabel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updateeventlabelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updateeventlabelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updateeventlabelcommandoutput.html)

</details>
<details>
<summary>
UpdateList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updatelistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatelistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatelistcommandoutput.html)

</details>
<details>
<summary>
UpdateModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updatemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatemodelcommandoutput.html)

</details>
<details>
<summary>
UpdateModelVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updatemodelversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatemodelversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatemodelversioncommandoutput.html)

</details>
<details>
<summary>
UpdateModelVersionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updatemodelversionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatemodelversionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatemodelversionstatuscommandoutput.html)

</details>
<details>
<summary>
UpdateRuleMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updaterulemetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updaterulemetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updaterulemetadatacommandoutput.html)

</details>
<details>
<summary>
UpdateRuleVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updateruleversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updateruleversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updateruleversioncommandoutput.html)

</details>
<details>
<summary>
UpdateVariable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/classes/updatevariablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatevariablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-frauddetector/interfaces/updatevariablecommandoutput.html)

</details>
