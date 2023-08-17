<!-- generated file, do not edit directly -->

# @aws-sdk/client-cloudwatch-logs

## Description

AWS SDK for JavaScript CloudWatchLogs Client for Node.js, Browser and React Native.

<p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from
EC2 instances, CloudTrail, and other sources. You can then retrieve the associated
log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use
CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch
Logs SDK.</p>
<p>You can use CloudWatch Logs to:</p>
<ul>
<li>
<p>
<b>Monitor logs from EC2 instances in real time</b>: You
can use CloudWatch Logs to monitor applications and systems using log data. For example,
CloudWatch Logs can track the number of errors that occur in your application logs. Then,
it can send you a notification whenever the rate of errors exceeds a threshold that you
specify. CloudWatch Logs uses your log data for monitoring so no code changes are
required. For example, you can monitor application logs for specific literal terms (such
as "NullReferenceException"). You can also count the number of occurrences of a literal
term at a particular position in log data (such as "404" status codes in an Apache access
log). When the term you are searching for is found, CloudWatch Logs reports the data to a
CloudWatch metric that you specify.</p>
</li>
<li>
<p>
<b>Monitor CloudTrail logged events</b>: You can
create alarms in CloudWatch and receive notifications of particular API activity as
captured by CloudTrail. You can use the notification to perform troubleshooting.</p>
</li>
<li>
<p>
<b>Archive log data</b>: You can use CloudWatch Logs to
store your log data in highly durable storage. You can change the log retention setting so
that any log events earlier than this setting are automatically deleted. The CloudWatch
Logs agent helps to quickly send both rotated and non-rotated log data off of a host and
into the log service. You can then access the raw log data when you need it.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-cloudwatch-logs
using your favorite package manager:

- `npm install @aws-sdk/client-cloudwatch-logs`
- `yarn add @aws-sdk/client-cloudwatch-logs`
- `pnpm add @aws-sdk/client-cloudwatch-logs`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CloudWatchLogsClient` and
the commands you need, for example `AssociateKmsKeyCommand`:

```js
// ES5 example
const { CloudWatchLogsClient, AssociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs");
```

```ts
// ES6+ example
import { CloudWatchLogsClient, AssociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CloudWatchLogsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateKmsKeyCommand(params);
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
import * as AWS from "@aws-sdk/client-cloudwatch-logs";
const client = new AWS.CloudWatchLogs({ region: "REGION" });

// async/await.
try {
  const data = await client.associateKmsKey(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateKmsKey(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateKmsKey(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-cloudwatch-logs` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateKmsKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/associatekmskeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/associatekmskeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/associatekmskeycommandoutput.html)

</details>
<details>
<summary>
CancelExportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/cancelexporttaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/cancelexporttaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/cancelexporttaskcommandoutput.html)

</details>
<details>
<summary>
CreateExportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/createexporttaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/createexporttaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/createexporttaskcommandoutput.html)

</details>
<details>
<summary>
CreateLogGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/createloggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/createloggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/createloggroupcommandoutput.html)

</details>
<details>
<summary>
CreateLogStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/createlogstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/createlogstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/createlogstreamcommandoutput.html)

</details>
<details>
<summary>
DeleteAccountPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deleteaccountpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deleteaccountpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deleteaccountpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteDataProtectionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deletedataprotectionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletedataprotectionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletedataprotectionpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deletedestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletedestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletedestinationcommandoutput.html)

</details>
<details>
<summary>
DeleteLogGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deleteloggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deleteloggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deleteloggroupcommandoutput.html)

</details>
<details>
<summary>
DeleteLogStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deletelogstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletelogstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletelogstreamcommandoutput.html)

</details>
<details>
<summary>
DeleteMetricFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deletemetricfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletemetricfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletemetricfiltercommandoutput.html)

</details>
<details>
<summary>
DeleteQueryDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deletequerydefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletequerydefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletequerydefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteRetentionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deleteretentionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deleteretentionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deleteretentionpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteSubscriptionFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/deletesubscriptionfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletesubscriptionfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/deletesubscriptionfiltercommandoutput.html)

</details>
<details>
<summary>
DescribeAccountPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describeaccountpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describeaccountpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describeaccountpoliciescommandoutput.html)

</details>
<details>
<summary>
DescribeDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describedestinationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describedestinationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describedestinationscommandoutput.html)

</details>
<details>
<summary>
DescribeExportTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describeexporttaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describeexporttaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describeexporttaskscommandoutput.html)

</details>
<details>
<summary>
DescribeLogGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describeloggroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describeloggroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describeloggroupscommandoutput.html)

</details>
<details>
<summary>
DescribeLogStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describelogstreamscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describelogstreamscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describelogstreamscommandoutput.html)

</details>
<details>
<summary>
DescribeMetricFilters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describemetricfilterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describemetricfilterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describemetricfilterscommandoutput.html)

</details>
<details>
<summary>
DescribeQueries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describequeriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describequeriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describequeriescommandoutput.html)

</details>
<details>
<summary>
DescribeQueryDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describequerydefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describequerydefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describequerydefinitionscommandoutput.html)

</details>
<details>
<summary>
DescribeResourcePolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describeresourcepoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describeresourcepoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describeresourcepoliciescommandoutput.html)

</details>
<details>
<summary>
DescribeSubscriptionFilters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/describesubscriptionfilterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describesubscriptionfilterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/describesubscriptionfilterscommandoutput.html)

</details>
<details>
<summary>
DisassociateKmsKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/disassociatekmskeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/disassociatekmskeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/disassociatekmskeycommandoutput.html)

</details>
<details>
<summary>
FilterLogEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/filterlogeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/filterlogeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/filterlogeventscommandoutput.html)

</details>
<details>
<summary>
GetDataProtectionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/getdataprotectionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getdataprotectionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getdataprotectionpolicycommandoutput.html)

</details>
<details>
<summary>
GetLogEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/getlogeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getlogeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getlogeventscommandoutput.html)

</details>
<details>
<summary>
GetLogGroupFields
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/getloggroupfieldscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getloggroupfieldscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getloggroupfieldscommandoutput.html)

</details>
<details>
<summary>
GetLogRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/getlogrecordcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getlogrecordcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getlogrecordcommandoutput.html)

</details>
<details>
<summary>
GetQueryResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/getqueryresultscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getqueryresultscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/getqueryresultscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTagsLogGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/listtagsloggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/listtagsloggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/listtagsloggroupcommandoutput.html)

</details>
<details>
<summary>
PutAccountPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putaccountpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putaccountpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putaccountpolicycommandoutput.html)

</details>
<details>
<summary>
PutDataProtectionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putdataprotectionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putdataprotectionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putdataprotectionpolicycommandoutput.html)

</details>
<details>
<summary>
PutDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putdestinationcommandoutput.html)

</details>
<details>
<summary>
PutDestinationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putdestinationpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putdestinationpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putdestinationpolicycommandoutput.html)

</details>
<details>
<summary>
PutLogEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putlogeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putlogeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putlogeventscommandoutput.html)

</details>
<details>
<summary>
PutMetricFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putmetricfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putmetricfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putmetricfiltercommandoutput.html)

</details>
<details>
<summary>
PutQueryDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putquerydefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putquerydefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putquerydefinitioncommandoutput.html)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putresourcepolicycommandoutput.html)

</details>
<details>
<summary>
PutRetentionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putretentionpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putretentionpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putretentionpolicycommandoutput.html)

</details>
<details>
<summary>
PutSubscriptionFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/putsubscriptionfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putsubscriptionfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/putsubscriptionfiltercommandoutput.html)

</details>
<details>
<summary>
StartQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/startquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/startquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/startquerycommandoutput.html)

</details>
<details>
<summary>
StopQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/stopquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/stopquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/stopquerycommandoutput.html)

</details>
<details>
<summary>
TagLogGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/tagloggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/tagloggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/tagloggroupcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TestMetricFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/testmetricfiltercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/testmetricfiltercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/testmetricfiltercommandoutput.html)

</details>
<details>
<summary>
UntagLogGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/untagloggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/untagloggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/untagloggroupcommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudwatch-logs/interfaces/untagresourcecommandoutput.html)

</details>
