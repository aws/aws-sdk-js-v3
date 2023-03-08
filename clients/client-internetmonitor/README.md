<!-- generated file, do not edit directly -->

# @aws-sdk/client-internetmonitor

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-internetmonitor/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-internetmonitor)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-internetmonitor.svg)](https://www.npmjs.com/package/@aws-sdk/client-internetmonitor)

## Description

AWS SDK for JavaScript InternetMonitor Client for Node.js, Browser and React Native.

<p>Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability between your applications hosted on Amazon Web Services and your end
users, reducing the time it takes for you to diagnose these issues, from days to minutes. You can explore internet measurements for different time frames
and at different geographic granularities, and quickly visualize the impact of issues, and then take action to improve your end users' experience, for
example, by switching to other Amazon Web Services services or rerouting traffic to your workload through differentAmazon Web Services Regions.</p>
<p> If the issue is caused by the Amazon Web Services network, you'll automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking
to mitigate the problem. To support integrating health information for geographies and networks specific to your application, Internet Monitor delivers measurements
to CloudWatch Logs and CloudWatch Metrics. Internet Monitor also sends health events to Amazon EventBridge, so you can set up notifications. Internet Monitor monitors internet connectivity
for your application through Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and Amazon WorkSpaces directories.</p>
<p>To use Internet Monitor, you create a <i>monitor</i> and add resources to it, Virtual Private Clouds (VPCs), Amazon CloudFront distributions, or WorkSpaces
directories that show where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to the locations
and networks that communicate with your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html"> Using Amazon CloudWatch Internet Monitor</a> in the Amazon CloudWatch User Guide.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-internetmonitor
using your favorite package manager:

- `npm install @aws-sdk/client-internetmonitor`
- `yarn add @aws-sdk/client-internetmonitor`
- `pnpm add @aws-sdk/client-internetmonitor`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `InternetMonitorClient` and
the commands you need, for example `CreateMonitorCommand`:

```js
// ES5 example
const { InternetMonitorClient, CreateMonitorCommand } = require("@aws-sdk/client-internetmonitor");
```

```ts
// ES6+ example
import { InternetMonitorClient, CreateMonitorCommand } from "@aws-sdk/client-internetmonitor";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new InternetMonitorClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateMonitorCommand(params);
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
import * as AWS from "@aws-sdk/client-internetmonitor";
const client = new AWS.InternetMonitor({ region: "REGION" });

// async/await.
try {
  const data = await client.createMonitor(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createMonitor(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createMonitor(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-internetmonitor` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/createmonitorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/createmonitorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/createmonitorcommandoutput.html)

</details>
<details>
<summary>
DeleteMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/deletemonitorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/deletemonitorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/deletemonitorcommandoutput.html)

</details>
<details>
<summary>
GetHealthEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/gethealtheventcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/gethealtheventcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/gethealtheventcommandoutput.html)

</details>
<details>
<summary>
GetMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/getmonitorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/getmonitorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/getmonitorcommandoutput.html)

</details>
<details>
<summary>
ListHealthEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/listhealtheventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/listhealtheventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/listhealtheventscommandoutput.html)

</details>
<details>
<summary>
ListMonitors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/listmonitorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/listmonitorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/listmonitorscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/classes/updatemonitorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/updatemonitorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-internetmonitor/interfaces/updatemonitorcommandoutput.html)

</details>
