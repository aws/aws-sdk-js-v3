<!-- generated file, do not edit directly -->

# @aws-sdk/client-connectparticipant

## Description

AWS SDK for JavaScript ConnectParticipant Client for Node.js, Browser and React Native.

<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html">Participant Service actions</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Participant_Service.html">Participant Service data types</a>
</p>
</li>
</ul>
<p>Amazon Connect is an easy-to-use omnichannel cloud contact center service that
enables companies of any size to deliver superior customer service at a lower cost.
Amazon Connect communications capabilities make it easy for companies to deliver
personalized interactions across communication channels, including chat. </p>
<p>Use the Amazon Connect Participant Service to manage participants (for example,
agents, customers, and managers listening in), and to send messages and events within a
chat contact. The APIs in the service enable the following: sending chat messages,
attachment sharing, managing a participant's connection state and message events, and
retrieving chat transcripts.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-connectparticipant`
- `yarn add @aws-sdk/client-connectparticipant`
- `pnpm add @aws-sdk/client-connectparticipant`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ConnectParticipantClient` and
the commands you need, for example `GetTranscriptCommand`:

```js
// ES5 example
const { ConnectParticipantClient, GetTranscriptCommand } = require("@aws-sdk/client-connectparticipant");
```

```ts
// ES6+ example
import { ConnectParticipantClient, GetTranscriptCommand } from "@aws-sdk/client-connectparticipant";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new ConnectParticipantClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new GetTranscriptCommand(params);
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

`ConnectParticipant` extends `ConnectParticipantClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`ConnectParticipantClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { ConnectParticipant } from "@aws-sdk/client-connectparticipant";

const client = new ConnectParticipant({ region: "REGION" });

// async/await.
try {
  const data = await client.getTranscript(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getTranscript(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.getTranscript(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-connectparticipant` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelParticipantAuthentication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/CancelParticipantAuthenticationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/CancelParticipantAuthenticationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/CancelParticipantAuthenticationCommandOutput/)
</details>
<details>
<summary>
CompleteAttachmentUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/CompleteAttachmentUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/CompleteAttachmentUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/CompleteAttachmentUploadCommandOutput/)
</details>
<details>
<summary>
CreateParticipantConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/CreateParticipantConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/CreateParticipantConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/CreateParticipantConnectionCommandOutput/)
</details>
<details>
<summary>
DescribeView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/DescribeViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/DescribeViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/DescribeViewCommandOutput/)
</details>
<details>
<summary>
DisconnectParticipant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/DisconnectParticipantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/DisconnectParticipantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/DisconnectParticipantCommandOutput/)
</details>
<details>
<summary>
GetAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/GetAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/GetAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/GetAttachmentCommandOutput/)
</details>
<details>
<summary>
GetAuthenticationUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/GetAuthenticationUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/GetAuthenticationUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/GetAuthenticationUrlCommandOutput/)
</details>
<details>
<summary>
GetTranscript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/GetTranscriptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/GetTranscriptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/GetTranscriptCommandOutput/)
</details>
<details>
<summary>
SendEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/SendEventCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/SendEventCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/SendEventCommandOutput/)
</details>
<details>
<summary>
SendMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/SendMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/SendMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/SendMessageCommandOutput/)
</details>
<details>
<summary>
StartAttachmentUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectparticipant/command/StartAttachmentUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/StartAttachmentUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectparticipant/Interface/StartAttachmentUploadCommandOutput/)
</details>
