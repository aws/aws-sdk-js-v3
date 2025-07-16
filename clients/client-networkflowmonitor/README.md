<!-- generated file, do not edit directly -->

# @aws-sdk/client-networkflowmonitor

## Description

AWS SDK for JavaScript NetworkFlowMonitor Client for Node.js, Browser and React Native.

<p>Network Flow Monitor is a feature of Amazon CloudWatch Network Monitoring that provides visibility into the performance of network flows for your Amazon Web Services workloads, between instances in subnets, as well as to and from Amazon Web Services. Lightweight agents that you install on the instances capture performance metrics for your network flows, such as packet loss and latency, and send them to the Network Flow Monitor backend. Then, you can view and analyze metrics from the top contributors for each metric type, to help troubleshoot issues.</p> <p>In addition, when you create a monitor, Network Flow Monitor provides a network health indicator (NHI) that informs you whether there were Amazon Web Services network issues for one or more of the network flows tracked by a monitor, during a time period that you choose. By using this value, you can independently determine if the Amazon Web Services network is impacting your workload during a specific time frame, to help you focus troubleshooting efforts.</p> <p>To learn more about Network Flow Monitor, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-NetworkFlowMonitor.html">Network Flow Monitor User Guide</a> in the Amazon CloudWatch User Guide.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-networkflowmonitor
using your favorite package manager:

- `npm install @aws-sdk/client-networkflowmonitor`
- `yarn add @aws-sdk/client-networkflowmonitor`
- `pnpm add @aws-sdk/client-networkflowmonitor`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `NetworkFlowMonitorClient` and
the commands you need, for example `ListScopesCommand`:

```js
// ES5 example
const { NetworkFlowMonitorClient, ListScopesCommand } = require("@aws-sdk/client-networkflowmonitor");
```

```ts
// ES6+ example
import { NetworkFlowMonitorClient, ListScopesCommand } from "@aws-sdk/client-networkflowmonitor";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new NetworkFlowMonitorClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListScopesCommand(params);
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
import * as AWS from "@aws-sdk/client-networkflowmonitor";
const client = new AWS.NetworkFlowMonitor({ region: "REGION" });

// async/await.
try {
  const data = await client.listScopes(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listScopes(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listScopes(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-networkflowmonitor` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/CreateMonitorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/CreateMonitorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/CreateMonitorCommandOutput/)

</details>
<details>
<summary>
CreateScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/CreateScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/CreateScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/CreateScopeCommandOutput/)

</details>
<details>
<summary>
DeleteMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/DeleteMonitorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/DeleteMonitorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/DeleteMonitorCommandOutput/)

</details>
<details>
<summary>
DeleteScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/DeleteScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/DeleteScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/DeleteScopeCommandOutput/)

</details>
<details>
<summary>
GetMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/GetMonitorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetMonitorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetMonitorCommandOutput/)

</details>
<details>
<summary>
GetQueryResultsMonitorTopContributors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/GetQueryResultsMonitorTopContributorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryResultsMonitorTopContributorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryResultsMonitorTopContributorsCommandOutput/)

</details>
<details>
<summary>
GetQueryResultsWorkloadInsightsTopContributors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/GetQueryResultsWorkloadInsightsTopContributorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryResultsWorkloadInsightsTopContributorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryResultsWorkloadInsightsTopContributorsCommandOutput/)

</details>
<details>
<summary>
GetQueryResultsWorkloadInsightsTopContributorsData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/GetQueryResultsWorkloadInsightsTopContributorsDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput/)

</details>
<details>
<summary>
GetQueryStatusMonitorTopContributors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/GetQueryStatusMonitorTopContributorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryStatusMonitorTopContributorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryStatusMonitorTopContributorsCommandOutput/)

</details>
<details>
<summary>
GetQueryStatusWorkloadInsightsTopContributors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/GetQueryStatusWorkloadInsightsTopContributorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryStatusWorkloadInsightsTopContributorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryStatusWorkloadInsightsTopContributorsCommandOutput/)

</details>
<details>
<summary>
GetQueryStatusWorkloadInsightsTopContributorsData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/GetQueryStatusWorkloadInsightsTopContributorsDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput/)

</details>
<details>
<summary>
GetScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/GetScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/GetScopeCommandOutput/)

</details>
<details>
<summary>
ListMonitors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/ListMonitorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/ListMonitorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/ListMonitorsCommandOutput/)

</details>
<details>
<summary>
ListScopes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/ListScopesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/ListScopesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/ListScopesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
StartQueryMonitorTopContributors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/StartQueryMonitorTopContributorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StartQueryMonitorTopContributorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StartQueryMonitorTopContributorsCommandOutput/)

</details>
<details>
<summary>
StartQueryWorkloadInsightsTopContributors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/StartQueryWorkloadInsightsTopContributorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StartQueryWorkloadInsightsTopContributorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StartQueryWorkloadInsightsTopContributorsCommandOutput/)

</details>
<details>
<summary>
StartQueryWorkloadInsightsTopContributorsData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/StartQueryWorkloadInsightsTopContributorsDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StartQueryWorkloadInsightsTopContributorsDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StartQueryWorkloadInsightsTopContributorsDataCommandOutput/)

</details>
<details>
<summary>
StopQueryMonitorTopContributors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/StopQueryMonitorTopContributorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StopQueryMonitorTopContributorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StopQueryMonitorTopContributorsCommandOutput/)

</details>
<details>
<summary>
StopQueryWorkloadInsightsTopContributors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/StopQueryWorkloadInsightsTopContributorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StopQueryWorkloadInsightsTopContributorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StopQueryWorkloadInsightsTopContributorsCommandOutput/)

</details>
<details>
<summary>
StopQueryWorkloadInsightsTopContributorsData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/StopQueryWorkloadInsightsTopContributorsDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StopQueryWorkloadInsightsTopContributorsDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/StopQueryWorkloadInsightsTopContributorsDataCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateMonitor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/UpdateMonitorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/UpdateMonitorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/UpdateMonitorCommandOutput/)

</details>
<details>
<summary>
UpdateScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/networkflowmonitor/command/UpdateScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/UpdateScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-networkflowmonitor/Interface/UpdateScopeCommandOutput/)

</details>
