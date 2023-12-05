<!-- generated file, do not edit directly -->

# @aws-sdk/client-bedrock-agent

## Description

AWS SDK for JavaScript BedrockAgent Client for Node.js, Browser and React Native.

An example service, deployed with the Octane Service creator,
which will echo the string

## Installing

To install the this package, simply type add or install @aws-sdk/client-bedrock-agent
using your favorite package manager:

- `npm install @aws-sdk/client-bedrock-agent`
- `yarn add @aws-sdk/client-bedrock-agent`
- `pnpm add @aws-sdk/client-bedrock-agent`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `BedrockAgentClient` and
the commands you need, for example `ListAgentsCommand`:

```js
// ES5 example
const { BedrockAgentClient, ListAgentsCommand } = require("@aws-sdk/client-bedrock-agent");
```

```ts
// ES6+ example
import { BedrockAgentClient, ListAgentsCommand } from "@aws-sdk/client-bedrock-agent";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new BedrockAgentClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAgentsCommand(params);
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
import * as AWS from "@aws-sdk/client-bedrock-agent";
const client = new AWS.BedrockAgent({ region: "REGION" });

// async/await.
try {
  const data = await client.listAgents(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAgents(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAgents(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-bedrock-agent` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateAgentKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/associateagentknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/associateagentknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/associateagentknowledgebasecommandoutput.html)

</details>
<details>
<summary>
CreateAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/createagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createagentcommandoutput.html)

</details>
<details>
<summary>
CreateAgentActionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/createagentactiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createagentactiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createagentactiongroupcommandoutput.html)

</details>
<details>
<summary>
CreateAgentAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/createagentaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createagentaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createagentaliascommandoutput.html)

</details>
<details>
<summary>
CreateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/createdatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createdatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createdatasourcecommandoutput.html)

</details>
<details>
<summary>
CreateKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/createknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/createknowledgebasecommandoutput.html)

</details>
<details>
<summary>
DeleteAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/deleteagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteagentcommandoutput.html)

</details>
<details>
<summary>
DeleteAgentActionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/deleteagentactiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteagentactiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteagentactiongroupcommandoutput.html)

</details>
<details>
<summary>
DeleteAgentAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/deleteagentaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteagentaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteagentaliascommandoutput.html)

</details>
<details>
<summary>
DeleteAgentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/deleteagentversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteagentversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteagentversioncommandoutput.html)

</details>
<details>
<summary>
DeleteDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/deletedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deletedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deletedatasourcecommandoutput.html)

</details>
<details>
<summary>
DeleteKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/deleteknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/deleteknowledgebasecommandoutput.html)

</details>
<details>
<summary>
DisassociateAgentKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/disassociateagentknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/disassociateagentknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/disassociateagentknowledgebasecommandoutput.html)

</details>
<details>
<summary>
GetAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/getagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentcommandoutput.html)

</details>
<details>
<summary>
GetAgentActionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/getagentactiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentactiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentactiongroupcommandoutput.html)

</details>
<details>
<summary>
GetAgentAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/getagentaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentaliascommandoutput.html)

</details>
<details>
<summary>
GetAgentKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/getagentknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentknowledgebasecommandoutput.html)

</details>
<details>
<summary>
GetAgentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/getagentversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getagentversioncommandoutput.html)

</details>
<details>
<summary>
GetDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/getdatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getdatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getdatasourcecommandoutput.html)

</details>
<details>
<summary>
GetIngestionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/getingestionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getingestionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getingestionjobcommandoutput.html)

</details>
<details>
<summary>
GetKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/getknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/getknowledgebasecommandoutput.html)

</details>
<details>
<summary>
ListAgentActionGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listagentactiongroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentactiongroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentactiongroupscommandoutput.html)

</details>
<details>
<summary>
ListAgentAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listagentaliasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentaliasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentaliasescommandoutput.html)

</details>
<details>
<summary>
ListAgentKnowledgeBases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listagentknowledgebasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentknowledgebasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentknowledgebasescommandoutput.html)

</details>
<details>
<summary>
ListAgents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listagentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentscommandoutput.html)

</details>
<details>
<summary>
ListAgentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listagentversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listagentversionscommandoutput.html)

</details>
<details>
<summary>
ListDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listdatasourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listdatasourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listdatasourcescommandoutput.html)

</details>
<details>
<summary>
ListIngestionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listingestionjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listingestionjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listingestionjobscommandoutput.html)

</details>
<details>
<summary>
ListKnowledgeBases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listknowledgebasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listknowledgebasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listknowledgebasescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PrepareAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/prepareagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/prepareagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/prepareagentcommandoutput.html)

</details>
<details>
<summary>
StartIngestionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/startingestionjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/startingestionjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/startingestionjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/updateagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateagentcommandoutput.html)

</details>
<details>
<summary>
UpdateAgentActionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/updateagentactiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateagentactiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateagentactiongroupcommandoutput.html)

</details>
<details>
<summary>
UpdateAgentAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/updateagentaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateagentaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateagentaliascommandoutput.html)

</details>
<details>
<summary>
UpdateAgentKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/updateagentknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateagentknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateagentknowledgebasecommandoutput.html)

</details>
<details>
<summary>
UpdateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/updatedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updatedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updatedatasourcecommandoutput.html)

</details>
<details>
<summary>
UpdateKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/classes/updateknowledgebasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateknowledgebasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bedrock-agent/interfaces/updateknowledgebasecommandoutput.html)

</details>
