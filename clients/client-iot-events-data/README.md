<!-- generated file, do not edit directly -->

# @aws-sdk/client-iot-events-data

## Description

AWS SDK for JavaScript IoTEventsData Client for Node.js, Browser and React Native.

<p>IoT Events monitors your equipment or device fleets for failures or changes in operation, and
triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to
detectors, list detectors, and view or update a detector's status.</p>
<p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is IoT Events?</a> in the
<i>IoT Events Developer Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-iot-events-data
using your favorite package manager:

- `npm install @aws-sdk/client-iot-events-data`
- `yarn add @aws-sdk/client-iot-events-data`
- `pnpm add @aws-sdk/client-iot-events-data`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IoTEventsDataClient` and
the commands you need, for example `BatchAcknowledgeAlarmCommand`:

```js
// ES5 example
const { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } = require("@aws-sdk/client-iot-events-data");
```

```ts
// ES6+ example
import { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } from "@aws-sdk/client-iot-events-data";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IoTEventsDataClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BatchAcknowledgeAlarmCommand(params);
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
import * as AWS from "@aws-sdk/client-iot-events-data";
const client = new AWS.IoTEventsData({ region: "REGION" });

// async/await.
try {
  const data = await client.batchAcknowledgeAlarm(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchAcknowledgeAlarm(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchAcknowledgeAlarm(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-iot-events-data` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchAcknowledgeAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/batchacknowledgealarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchacknowledgealarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchacknowledgealarmcommandoutput.html)

</details>
<details>
<summary>
BatchDeleteDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/batchdeletedetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchdeletedetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchdeletedetectorcommandoutput.html)

</details>
<details>
<summary>
BatchDisableAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/batchdisablealarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchdisablealarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchdisablealarmcommandoutput.html)

</details>
<details>
<summary>
BatchEnableAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/batchenablealarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchenablealarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchenablealarmcommandoutput.html)

</details>
<details>
<summary>
BatchPutMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/batchputmessagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchputmessagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchputmessagecommandoutput.html)

</details>
<details>
<summary>
BatchResetAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/batchresetalarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchresetalarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchresetalarmcommandoutput.html)

</details>
<details>
<summary>
BatchSnoozeAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/batchsnoozealarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchsnoozealarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchsnoozealarmcommandoutput.html)

</details>
<details>
<summary>
BatchUpdateDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/batchupdatedetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchupdatedetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/batchupdatedetectorcommandoutput.html)

</details>
<details>
<summary>
DescribeAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/describealarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/describealarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/describealarmcommandoutput.html)

</details>
<details>
<summary>
DescribeDetector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/describedetectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/describedetectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/describedetectorcommandoutput.html)

</details>
<details>
<summary>
ListAlarms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/listalarmscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/listalarmscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/listalarmscommandoutput.html)

</details>
<details>
<summary>
ListDetectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/classes/listdetectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/listdetectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-events-data/interfaces/listdetectorscommandoutput.html)

</details>
