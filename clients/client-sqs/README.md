<!-- generated file, do not edit directly -->

# @aws-sdk/client-sqs

## Description

AWS SDK for JavaScript SQS Client for Node.js, Browser and React Native.

<p>Welcome to the <i>Amazon SQS API Reference</i>.</p>
<p>Amazon SQS is a reliable, highly-scalable hosted queue for storing messages as they travel
between applications or microservices. Amazon SQS moves data between distributed application
components and helps you decouple these components.</p>
<p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html">Identity and access management</a> in the <i>Amazon SQS Developer
Guide.</i>
</p>
<p>You can use <a href="http://aws.amazon.com/tools/#sdk">Amazon Web Services SDKs</a> to access
Amazon SQS using your favorite programming language. The SDKs perform tasks such as the
following automatically:</p>
<ul>
<li>
<p>Cryptographically sign your service requests</p>
</li>
<li>
<p>Retry requests</p>
</li>
<li>
<p>Handle error responses</p>
</li>
</ul>
<p>
<b>Additional information</b>
</p>
<ul>
<li>
<p>
<a href="http://aws.amazon.com/sqs/">Amazon SQS Product Page</a>
</p>
</li>
<li>
<p>
<i>Amazon SQS Developer Guide</i>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html">Making API Requests</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Amazon SQS Dead-Letter Queues</a>
</p>
</li>
</ul>
</li>
<li>
<p>
<a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sqs/index.html">Amazon SQS in the Command Line Interface</a>
</p>
</li>
<li>
<p>
<i>Amazon Web Services General Reference</i>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region">Regions and
Endpoints</a>
</p>
</li>
</ul>
</li>
</ul>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-sqs`
- `yarn add @aws-sdk/client-sqs`
- `pnpm add @aws-sdk/client-sqs`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SQSClient` and
the commands you need, for example `ListQueuesCommand`:

```js
// ES5 example
const { SQSClient, ListQueuesCommand } = require("@aws-sdk/client-sqs");
```

```ts
// ES6+ example
import { SQSClient, ListQueuesCommand } from "@aws-sdk/client-sqs";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new SQSClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListQueuesCommand(params);
```

#### Supported Message Protocols

This client supports multiple protocols.

The default for this client is **AWS JSON (RPC) 1.0**.

We have selected this default based on our evaluation of the
performance characteristics of this protocol format in JavaScript. You don't need to change it,
but you have the option to do so, for example to support existing integrations or tests.
Selecting a non-default protocol changes the format
of the data sent over the network, but does not affect how you interact with the
client using JavaScript objects.

Install the `@aws-sdk/config` package to access alternate protocols.

See [AWS Protocols](https://smithy.io/2.0/aws/protocols/index.html) for more information.

##### AWS JSON (RPC) 1.0

This protocol uses JSON payloads.
```js
import { AwsJson1_0Protocol } from "@aws-sdk/config/protocol";

const client = new SQSClient({
  protocol: AwsJson1_0Protocol
});
```

##### AWS Query

This protocol uses query format requests and XML responses.
```js
import { AwsQueryProtocol } from "@aws-sdk/config/protocol";

const client = new SQSClient({
  protocol: AwsQueryProtocol
});
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

`SQS` extends `SQSClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`SQSClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { SQS } from "@aws-sdk/client-sqs";

const client = new SQS({ region: "REGION" });

// async/await.
try {
  const data = await client.listQueues(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listQueues(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listQueues(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sqs` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/AddPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/AddPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/AddPermissionCommandOutput/)
</details>
<details>
<summary>
CancelMessageMoveTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/CancelMessageMoveTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/CancelMessageMoveTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/CancelMessageMoveTaskCommandOutput/)
</details>
<details>
<summary>
ChangeMessageVisibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/ChangeMessageVisibilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ChangeMessageVisibilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ChangeMessageVisibilityCommandOutput/)
</details>
<details>
<summary>
ChangeMessageVisibilityBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/ChangeMessageVisibilityBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ChangeMessageVisibilityBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ChangeMessageVisibilityBatchCommandOutput/)
</details>
<details>
<summary>
CreateQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/CreateQueueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/CreateQueueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/CreateQueueCommandOutput/)
</details>
<details>
<summary>
DeleteMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/DeleteMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/DeleteMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/DeleteMessageCommandOutput/)
</details>
<details>
<summary>
DeleteMessageBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/DeleteMessageBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/DeleteMessageBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/DeleteMessageBatchCommandOutput/)
</details>
<details>
<summary>
DeleteQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/DeleteQueueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/DeleteQueueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/DeleteQueueCommandOutput/)
</details>
<details>
<summary>
GetQueueAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/GetQueueAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/GetQueueAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/GetQueueAttributesCommandOutput/)
</details>
<details>
<summary>
GetQueueUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/GetQueueUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/GetQueueUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/GetQueueUrlCommandOutput/)
</details>
<details>
<summary>
ListDeadLetterSourceQueues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/ListDeadLetterSourceQueuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ListDeadLetterSourceQueuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ListDeadLetterSourceQueuesCommandOutput/)
</details>
<details>
<summary>
ListMessageMoveTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/ListMessageMoveTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ListMessageMoveTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ListMessageMoveTasksCommandOutput/)
</details>
<details>
<summary>
ListQueues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/ListQueuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ListQueuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ListQueuesCommandOutput/)
</details>
<details>
<summary>
ListQueueTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/ListQueueTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ListQueueTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ListQueueTagsCommandOutput/)
</details>
<details>
<summary>
PurgeQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/PurgeQueueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/PurgeQueueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/PurgeQueueCommandOutput/)
</details>
<details>
<summary>
ReceiveMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/ReceiveMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ReceiveMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/ReceiveMessageCommandOutput/)
</details>
<details>
<summary>
RemovePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/RemovePermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/RemovePermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/RemovePermissionCommandOutput/)
</details>
<details>
<summary>
SendMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/SendMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/SendMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/SendMessageCommandOutput/)
</details>
<details>
<summary>
SendMessageBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/SendMessageBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/SendMessageBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/SendMessageBatchCommandOutput/)
</details>
<details>
<summary>
SetQueueAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/SetQueueAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/SetQueueAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/SetQueueAttributesCommandOutput/)
</details>
<details>
<summary>
StartMessageMoveTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/StartMessageMoveTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/StartMessageMoveTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/StartMessageMoveTaskCommandOutput/)
</details>
<details>
<summary>
TagQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/TagQueueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/TagQueueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/TagQueueCommandOutput/)
</details>
<details>
<summary>
UntagQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sqs/command/UntagQueueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/UntagQueueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sqs/Interface/UntagQueueCommandOutput/)
</details>
