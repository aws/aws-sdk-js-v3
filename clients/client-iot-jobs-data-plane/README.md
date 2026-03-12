<!-- generated file, do not edit directly -->

# @aws-sdk/client-iot-jobs-data-plane

## Description

AWS SDK for JavaScript IoTJobsDataPlane Client for Node.js, Browser and React Native.

<p>IoT Jobs is a service that allows you to define a set of jobs — remote operations
that are sent to and executed on one or more devices connected to Amazon Web Services IoT Core. For example,
you can define a job that instructs a set of devices to download and install application or
firmware updates, reboot, rotate certificates, or perform remote troubleshooting
operations.</p>
<p>Find the endpoint address for actions in the IoT jobs data plane by running this
CLI command:</p>
<p>
<code>aws iot describe-endpoint --endpoint-type iot:Jobs</code>
</p>
<p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services
Signature Version 4</a> to sign requests is:
<i>iot-jobs-data</i>.</p>
<p> To create a job, you make a job document which is a description of the remote
operations to be performed, and you specify a list of targets that should perform the
operations. The targets can be individual things, thing groups or both.</p>
<p> IoT Jobs sends a message to inform the targets that a job is available. The target
starts the execution of the job by downloading the job document, performing the operations
it specifies, and reporting its progress to Amazon Web Services IoT Core. The Jobs service provides commands
to track the progress of a job on a specific target and for all the targets of the
job</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-iot-jobs-data-plane`
- `yarn add @aws-sdk/client-iot-jobs-data-plane`
- `pnpm add @aws-sdk/client-iot-jobs-data-plane`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IoTJobsDataPlaneClient` and
the commands you need, for example `GetPendingJobExecutionsCommand`:

```js
// ES5 example
const { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } = require("@aws-sdk/client-iot-jobs-data-plane");
```

```ts
// ES6+ example
import { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } from "@aws-sdk/client-iot-jobs-data-plane";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new IoTJobsDataPlaneClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new GetPendingJobExecutionsCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`IoTJobsDataPlane` extends `IoTJobsDataPlaneClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`IoTJobsDataPlaneClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { IoTJobsDataPlane } from "@aws-sdk/client-iot-jobs-data-plane";

const client = new IoTJobsDataPlane({ region: "REGION" });

// async/await.
try {
  const data = await client.getPendingJobExecutions(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getPendingJobExecutions(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.getPendingJobExecutions(params, (err, data) => {
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

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-iot-jobs-data-plane` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DescribeJobExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-jobs-data-plane/command/DescribeJobExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/DescribeJobExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/DescribeJobExecutionCommandOutput/)
</details>
<details>
<summary>
GetPendingJobExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-jobs-data-plane/command/GetPendingJobExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/GetPendingJobExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/GetPendingJobExecutionsCommandOutput/)
</details>
<details>
<summary>
StartCommandExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-jobs-data-plane/command/StartCommandExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/StartCommandExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/StartCommandExecutionCommandOutput/)
</details>
<details>
<summary>
StartNextPendingJobExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-jobs-data-plane/command/StartNextPendingJobExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/StartNextPendingJobExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/StartNextPendingJobExecutionCommandOutput/)
</details>
<details>
<summary>
UpdateJobExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-jobs-data-plane/command/UpdateJobExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/UpdateJobExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-jobs-data-plane/Interface/UpdateJobExecutionCommandOutput/)
</details>
