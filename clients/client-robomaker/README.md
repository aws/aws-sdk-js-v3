<!-- generated file, do not edit directly -->

# @aws-sdk/client-robomaker

## Description

AWS SDK for JavaScript RoboMaker Client for Node.js, Browser and React Native.

<p>This section provides documentation for the AWS RoboMaker API operations.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-robomaker
using your favorite package manager:

- `npm install @aws-sdk/client-robomaker`
- `yarn add @aws-sdk/client-robomaker`
- `pnpm add @aws-sdk/client-robomaker`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RoboMakerClient` and
the commands you need, for example `BatchDeleteWorldsCommand`:

```js
// ES5 example
const { RoboMakerClient, BatchDeleteWorldsCommand } = require("@aws-sdk/client-robomaker");
```

```ts
// ES6+ example
import { RoboMakerClient, BatchDeleteWorldsCommand } from "@aws-sdk/client-robomaker";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new RoboMakerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BatchDeleteWorldsCommand(params);
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
import * as AWS from "@aws-sdk/client-robomaker";
const client = new AWS.RoboMaker({ region: "REGION" });

// async/await.
try {
  const data = await client.batchDeleteWorlds(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchDeleteWorlds(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchDeleteWorlds(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-robomaker` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchDeleteWorlds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/batchdeleteworldscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/batchdeleteworldscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/batchdeleteworldscommandoutput.html)

</details>
<details>
<summary>
BatchDescribeSimulationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/batchdescribesimulationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/batchdescribesimulationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/batchdescribesimulationjobcommandoutput.html)

</details>
<details>
<summary>
CancelDeploymentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/canceldeploymentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/canceldeploymentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/canceldeploymentjobcommandoutput.html)

</details>
<details>
<summary>
CancelSimulationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/cancelsimulationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/cancelsimulationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/cancelsimulationjobcommandoutput.html)

</details>
<details>
<summary>
CancelSimulationJobBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/cancelsimulationjobbatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/cancelsimulationjobbatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/cancelsimulationjobbatchcommandoutput.html)

</details>
<details>
<summary>
CancelWorldExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/cancelworldexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/cancelworldexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/cancelworldexportjobcommandoutput.html)

</details>
<details>
<summary>
CancelWorldGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/cancelworldgenerationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/cancelworldgenerationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/cancelworldgenerationjobcommandoutput.html)

</details>
<details>
<summary>
CreateDeploymentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createdeploymentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createdeploymentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createdeploymentjobcommandoutput.html)

</details>
<details>
<summary>
CreateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createfleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createfleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createfleetcommandoutput.html)

</details>
<details>
<summary>
CreateRobot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createrobotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createrobotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createrobotcommandoutput.html)

</details>
<details>
<summary>
CreateRobotApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createrobotapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createrobotapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createrobotapplicationcommandoutput.html)

</details>
<details>
<summary>
CreateRobotApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createrobotapplicationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createrobotapplicationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createrobotapplicationversioncommandoutput.html)

</details>
<details>
<summary>
CreateSimulationApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createsimulationapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createsimulationapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createsimulationapplicationcommandoutput.html)

</details>
<details>
<summary>
CreateSimulationApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createsimulationapplicationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createsimulationapplicationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createsimulationapplicationversioncommandoutput.html)

</details>
<details>
<summary>
CreateSimulationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createsimulationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createsimulationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createsimulationjobcommandoutput.html)

</details>
<details>
<summary>
CreateWorldExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createworldexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createworldexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createworldexportjobcommandoutput.html)

</details>
<details>
<summary>
CreateWorldGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createworldgenerationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createworldgenerationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createworldgenerationjobcommandoutput.html)

</details>
<details>
<summary>
CreateWorldTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/createworldtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createworldtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/createworldtemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/deletefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deletefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deletefleetcommandoutput.html)

</details>
<details>
<summary>
DeleteRobot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/deleterobotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deleterobotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deleterobotcommandoutput.html)

</details>
<details>
<summary>
DeleteRobotApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/deleterobotapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deleterobotapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deleterobotapplicationcommandoutput.html)

</details>
<details>
<summary>
DeleteSimulationApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/deletesimulationapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deletesimulationapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deletesimulationapplicationcommandoutput.html)

</details>
<details>
<summary>
DeleteWorldTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/deleteworldtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deleteworldtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deleteworldtemplatecommandoutput.html)

</details>
<details>
<summary>
DeregisterRobot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/deregisterrobotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deregisterrobotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/deregisterrobotcommandoutput.html)

</details>
<details>
<summary>
DescribeDeploymentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describedeploymentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describedeploymentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describedeploymentjobcommandoutput.html)

</details>
<details>
<summary>
DescribeFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describefleetcommandoutput.html)

</details>
<details>
<summary>
DescribeRobot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describerobotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describerobotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describerobotcommandoutput.html)

</details>
<details>
<summary>
DescribeRobotApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describerobotapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describerobotapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describerobotapplicationcommandoutput.html)

</details>
<details>
<summary>
DescribeSimulationApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describesimulationapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describesimulationapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describesimulationapplicationcommandoutput.html)

</details>
<details>
<summary>
DescribeSimulationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describesimulationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describesimulationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describesimulationjobcommandoutput.html)

</details>
<details>
<summary>
DescribeSimulationJobBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describesimulationjobbatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describesimulationjobbatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describesimulationjobbatchcommandoutput.html)

</details>
<details>
<summary>
DescribeWorld
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describeworldcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describeworldcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describeworldcommandoutput.html)

</details>
<details>
<summary>
DescribeWorldExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describeworldexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describeworldexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describeworldexportjobcommandoutput.html)

</details>
<details>
<summary>
DescribeWorldGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describeworldgenerationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describeworldgenerationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describeworldgenerationjobcommandoutput.html)

</details>
<details>
<summary>
DescribeWorldTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/describeworldtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describeworldtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/describeworldtemplatecommandoutput.html)

</details>
<details>
<summary>
GetWorldTemplateBody
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/getworldtemplatebodycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/getworldtemplatebodycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/getworldtemplatebodycommandoutput.html)

</details>
<details>
<summary>
ListDeploymentJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listdeploymentjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listdeploymentjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listdeploymentjobscommandoutput.html)

</details>
<details>
<summary>
ListFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listfleetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listfleetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listfleetscommandoutput.html)

</details>
<details>
<summary>
ListRobotApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listrobotapplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listrobotapplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listrobotapplicationscommandoutput.html)

</details>
<details>
<summary>
ListRobots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listrobotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listrobotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listrobotscommandoutput.html)

</details>
<details>
<summary>
ListSimulationApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listsimulationapplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listsimulationapplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listsimulationapplicationscommandoutput.html)

</details>
<details>
<summary>
ListSimulationJobBatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listsimulationjobbatchescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listsimulationjobbatchescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listsimulationjobbatchescommandoutput.html)

</details>
<details>
<summary>
ListSimulationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listsimulationjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listsimulationjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listsimulationjobscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWorldExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listworldexportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listworldexportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listworldexportjobscommandoutput.html)

</details>
<details>
<summary>
ListWorldGenerationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listworldgenerationjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listworldgenerationjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listworldgenerationjobscommandoutput.html)

</details>
<details>
<summary>
ListWorlds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listworldscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listworldscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listworldscommandoutput.html)

</details>
<details>
<summary>
ListWorldTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/listworldtemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listworldtemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/listworldtemplatescommandoutput.html)

</details>
<details>
<summary>
RegisterRobot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/registerrobotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/registerrobotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/registerrobotcommandoutput.html)

</details>
<details>
<summary>
RestartSimulationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/restartsimulationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/restartsimulationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/restartsimulationjobcommandoutput.html)

</details>
<details>
<summary>
StartSimulationJobBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/startsimulationjobbatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/startsimulationjobbatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/startsimulationjobbatchcommandoutput.html)

</details>
<details>
<summary>
SyncDeploymentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/syncdeploymentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/syncdeploymentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/syncdeploymentjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateRobotApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/updaterobotapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/updaterobotapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/updaterobotapplicationcommandoutput.html)

</details>
<details>
<summary>
UpdateSimulationApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/updatesimulationapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/updatesimulationapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/updatesimulationapplicationcommandoutput.html)

</details>
<details>
<summary>
UpdateWorldTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/classes/updateworldtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/updateworldtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-robomaker/interfaces/updateworldtemplatecommandoutput.html)

</details>
