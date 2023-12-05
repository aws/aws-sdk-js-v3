<!-- generated file, do not edit directly -->

# @aws-sdk/client-qconnect

## Description

AWS SDK for JavaScript QConnect Client for Node.js, Browser and React Native.

<note>
<p>
<b>Powered by Amazon Bedrock</b>: Amazon Web Services implements <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html">automated abuse
detection</a>. Because Amazon Q in Connect is built on Amazon Bedrock, users can take full
advantage of the controls implemented in Amazon Bedrock to enforce safety, security, and the
responsible use of artificial intelligence (AI).</p>
</note>
<p>Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced evolution
of Amazon Connect Wisdom that delivers real-time recommendations to help contact center
agents resolve customer issues quickly and accurately.</p>
<p>Amazon Q automatically detects customer intent during calls and chats using
conversational analytics and natural language understanding (NLU). It then provides agents
with immediate, real-time generative responses and suggested actions, and links to relevant
documents and articles. Agents can also query Amazon Q directly using natural language or
keywords to answer customer requests.</p>
<p>Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or
manage content by uploading custom files.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use Amazon Q in Connect for generative AI
powered agent assistance in real-time</a> in the <i>Amazon Connect
Administrator Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-qconnect
using your favorite package manager:

- `npm install @aws-sdk/client-qconnect`
- `yarn add @aws-sdk/client-qconnect`
- `pnpm add @aws-sdk/client-qconnect`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `QConnectClient` and
the commands you need, for example `ListAssistantsCommand`:

```js
// ES5 example
const { QConnectClient, ListAssistantsCommand } = require("@aws-sdk/client-qconnect");
```

```ts
// ES6+ example
import { QConnectClient, ListAssistantsCommand } from "@aws-sdk/client-qconnect";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new QConnectClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAssistantsCommand(params);
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
import * as AWS from "@aws-sdk/client-qconnect";
const client = new AWS.QConnect({ region: "REGION" });

// async/await.
try {
  const data = await client.listAssistants(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAssistants(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAssistants(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-qconnect` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAssistant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/createassistantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createassistantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createassistantcommandoutput.html)

</details>
<details>
<summary>
CreateAssistantAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/createassistantassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createassistantassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createassistantassociationcommandoutput.html)

</details>
<details>
<summary>
CreateContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/createcontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createcontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createcontentcommandoutput.html)

</details>
<details>
<summary>
CreateKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/createknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createknowledgebasecommandoutput.html)

</details>
<details>
<summary>
CreateQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/createquickresponsecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createquickresponsecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createquickresponsecommandoutput.html)

</details>
<details>
<summary>
CreateSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/createsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/createsessioncommandoutput.html)

</details>
<details>
<summary>
DeleteAssistant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/deleteassistantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deleteassistantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deleteassistantcommandoutput.html)

</details>
<details>
<summary>
DeleteAssistantAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/deleteassistantassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deleteassistantassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deleteassistantassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/deletecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deletecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deletecontentcommandoutput.html)

</details>
<details>
<summary>
DeleteImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/deleteimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deleteimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deleteimportjobcommandoutput.html)

</details>
<details>
<summary>
DeleteKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/deleteknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deleteknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deleteknowledgebasecommandoutput.html)

</details>
<details>
<summary>
DeleteQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/deletequickresponsecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deletequickresponsecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/deletequickresponsecommandoutput.html)

</details>
<details>
<summary>
GetAssistant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getassistantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getassistantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getassistantcommandoutput.html)

</details>
<details>
<summary>
GetAssistantAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getassistantassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getassistantassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getassistantassociationcommandoutput.html)

</details>
<details>
<summary>
GetContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getcontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getcontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getcontentcommandoutput.html)

</details>
<details>
<summary>
GetContentSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getcontentsummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getcontentsummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getcontentsummarycommandoutput.html)

</details>
<details>
<summary>
GetImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getimportjobcommandoutput.html)

</details>
<details>
<summary>
GetKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getknowledgebasecommandoutput.html)

</details>
<details>
<summary>
GetQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getquickresponsecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getquickresponsecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getquickresponsecommandoutput.html)

</details>
<details>
<summary>
GetRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getrecommendationscommandoutput.html)

</details>
<details>
<summary>
GetSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/getsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/getsessioncommandoutput.html)

</details>
<details>
<summary>
ListAssistantAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/listassistantassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listassistantassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listassistantassociationscommandoutput.html)

</details>
<details>
<summary>
ListAssistants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/listassistantscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listassistantscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listassistantscommandoutput.html)

</details>
<details>
<summary>
ListContents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/listcontentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listcontentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listcontentscommandoutput.html)

</details>
<details>
<summary>
ListImportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/listimportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listimportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listimportjobscommandoutput.html)

</details>
<details>
<summary>
ListKnowledgeBases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/listknowledgebasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listknowledgebasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listknowledgebasescommandoutput.html)

</details>
<details>
<summary>
ListQuickResponses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/listquickresponsescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listquickresponsescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listquickresponsescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
NotifyRecommendationsReceived
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/notifyrecommendationsreceivedcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/notifyrecommendationsreceivedcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/notifyrecommendationsreceivedcommandoutput.html)

</details>
<details>
<summary>
PutFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/putfeedbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/putfeedbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/putfeedbackcommandoutput.html)

</details>
<details>
<summary>
QueryAssistant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/queryassistantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/queryassistantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/queryassistantcommandoutput.html)

</details>
<details>
<summary>
RemoveKnowledgeBaseTemplateUri
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/removeknowledgebasetemplateuricommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/removeknowledgebasetemplateuricommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/removeknowledgebasetemplateuricommandoutput.html)

</details>
<details>
<summary>
SearchContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/searchcontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/searchcontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/searchcontentcommandoutput.html)

</details>
<details>
<summary>
SearchQuickResponses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/searchquickresponsescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/searchquickresponsescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/searchquickresponsescommandoutput.html)

</details>
<details>
<summary>
SearchSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/searchsessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/searchsessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/searchsessionscommandoutput.html)

</details>
<details>
<summary>
StartContentUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/startcontentuploadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/startcontentuploadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/startcontentuploadcommandoutput.html)

</details>
<details>
<summary>
StartImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/startimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/startimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/startimportjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/updatecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/updatecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/updatecontentcommandoutput.html)

</details>
<details>
<summary>
UpdateKnowledgeBaseTemplateUri
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/updateknowledgebasetemplateuricommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/updateknowledgebasetemplateuricommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/updateknowledgebasetemplateuricommandoutput.html)

</details>
<details>
<summary>
UpdateQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/classes/updatequickresponsecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/updatequickresponsecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qconnect/interfaces/updatequickresponsecommandoutput.html)

</details>
