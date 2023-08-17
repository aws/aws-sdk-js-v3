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
<a href="http://docs.aws.amazon.com/cli/latest/reference/sqs/index.html">Amazon SQS in the <i>Command Line Interface</i>
</a>
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

To install the this package, simply type add or install @aws-sdk/client-sqs
using your favorite package manager:

- `npm install @aws-sdk/client-sqs`
- `yarn add @aws-sdk/client-sqs`
- `pnpm add @aws-sdk/client-sqs`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SQSClient` and
the commands you need, for example `AddPermissionCommand`:

```js
// ES5 example
const { SQSClient, AddPermissionCommand } = require("@aws-sdk/client-sqs");
```

```ts
// ES6+ example
import { SQSClient, AddPermissionCommand } from "@aws-sdk/client-sqs";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SQSClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddPermissionCommand(params);
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
import * as AWS from "@aws-sdk/client-sqs";
const client = new AWS.SQS({ region: "REGION" });

// async/await.
try {
  const data = await client.addPermission(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addPermission(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addPermission(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/addpermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/addpermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/addpermissioncommandoutput.html)

</details>
<details>
<summary>
CancelMessageMoveTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/cancelmessagemovetaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/cancelmessagemovetaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/cancelmessagemovetaskcommandoutput.html)

</details>
<details>
<summary>
ChangeMessageVisibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/changemessagevisibilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/changemessagevisibilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/changemessagevisibilitycommandoutput.html)

</details>
<details>
<summary>
ChangeMessageVisibilityBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/changemessagevisibilitybatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/changemessagevisibilitybatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/changemessagevisibilitybatchcommandoutput.html)

</details>
<details>
<summary>
CreateQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/createqueuecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/createqueuecommandoutput.html)

</details>
<details>
<summary>
DeleteMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/deletemessagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/deletemessagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/deletemessagecommandoutput.html)

</details>
<details>
<summary>
DeleteMessageBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/deletemessagebatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/deletemessagebatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/deletemessagebatchcommandoutput.html)

</details>
<details>
<summary>
DeleteQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/deletequeuecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/deletequeuecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/deletequeuecommandoutput.html)

</details>
<details>
<summary>
GetQueueAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/getqueueattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/getqueueattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/getqueueattributescommandoutput.html)

</details>
<details>
<summary>
GetQueueUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/getqueueurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/getqueueurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/getqueueurlcommandoutput.html)

</details>
<details>
<summary>
ListDeadLetterSourceQueues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/listdeadlettersourcequeuescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/listdeadlettersourcequeuescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/listdeadlettersourcequeuescommandoutput.html)

</details>
<details>
<summary>
ListMessageMoveTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/listmessagemovetaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/listmessagemovetaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/listmessagemovetaskscommandoutput.html)

</details>
<details>
<summary>
ListQueues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/listqueuescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/listqueuescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/listqueuescommandoutput.html)

</details>
<details>
<summary>
ListQueueTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/listqueuetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/listqueuetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/listqueuetagscommandoutput.html)

</details>
<details>
<summary>
PurgeQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/purgequeuecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/purgequeuecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/purgequeuecommandoutput.html)

</details>
<details>
<summary>
ReceiveMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/receivemessagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/receivemessagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/receivemessagecommandoutput.html)

</details>
<details>
<summary>
RemovePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/removepermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/removepermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/removepermissioncommandoutput.html)

</details>
<details>
<summary>
SendMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/sendmessagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/sendmessagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/sendmessagecommandoutput.html)

</details>
<details>
<summary>
SendMessageBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/sendmessagebatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/sendmessagebatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/sendmessagebatchcommandoutput.html)

</details>
<details>
<summary>
SetQueueAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/setqueueattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/setqueueattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/setqueueattributescommandoutput.html)

</details>
<details>
<summary>
StartMessageMoveTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/startmessagemovetaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/startmessagemovetaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/startmessagemovetaskcommandoutput.html)

</details>
<details>
<summary>
TagQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/tagqueuecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/tagqueuecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/tagqueuecommandoutput.html)

</details>
<details>
<summary>
UntagQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/untagqueuecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/untagqueuecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/interfaces/untagqueuecommandoutput.html)

</details>
