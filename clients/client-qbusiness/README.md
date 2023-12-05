<!-- generated file, do not edit directly -->

# @aws-sdk/client-qbusiness

## Description

AWS SDK for JavaScript QBusiness Client for Node.js, Browser and React Native.

<p>
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-qbusiness
using your favorite package manager:

- `npm install @aws-sdk/client-qbusiness`
- `yarn add @aws-sdk/client-qbusiness`
- `pnpm add @aws-sdk/client-qbusiness`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `QBusinessClient` and
the commands you need, for example `ListApplicationsCommand`:

```js
// ES5 example
const { QBusinessClient, ListApplicationsCommand } = require("@aws-sdk/client-qbusiness");
```

```ts
// ES6+ example
import { QBusinessClient, ListApplicationsCommand } from "@aws-sdk/client-qbusiness";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new QBusinessClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListApplicationsCommand(params);
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
import * as AWS from "@aws-sdk/client-qbusiness";
const client = new AWS.QBusiness({ region: "REGION" });

// async/await.
try {
  const data = await client.listApplications(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listApplications(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listApplications(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-qbusiness` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchDeleteDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/batchdeletedocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/batchdeletedocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/batchdeletedocumentcommandoutput.html)

</details>
<details>
<summary>
BatchPutDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/batchputdocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/batchputdocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/batchputdocumentcommandoutput.html)

</details>
<details>
<summary>
ChatSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/chatsynccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/chatsynccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/chatsynccommandoutput.html)

</details>
<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/createapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createapplicationcommandoutput.html)

</details>
<details>
<summary>
CreateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/createdatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createdatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createdatasourcecommandoutput.html)

</details>
<details>
<summary>
CreateIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/createindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createindexcommandoutput.html)

</details>
<details>
<summary>
CreatePlugin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/createplugincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createplugincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createplugincommandoutput.html)

</details>
<details>
<summary>
CreateRetriever
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/createretrievercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createretrievercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createretrievercommandoutput.html)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/createusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createusercommandoutput.html)

</details>
<details>
<summary>
CreateWebExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/createwebexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createwebexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/createwebexperiencecommandoutput.html)

</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deleteapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteapplicationcommandoutput.html)

</details>
<details>
<summary>
DeleteChatControlsConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deletechatcontrolsconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deletechatcontrolsconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deletechatcontrolsconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteConversation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deleteconversationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteconversationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteconversationcommandoutput.html)

</details>
<details>
<summary>
DeleteDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deletedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deletedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deletedatasourcecommandoutput.html)

</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deletegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deletegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deletegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deleteindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteindexcommandoutput.html)

</details>
<details>
<summary>
DeletePlugin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deleteplugincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteplugincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteplugincommandoutput.html)

</details>
<details>
<summary>
DeleteRetriever
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deleteretrievercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteretrievercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteretrievercommandoutput.html)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deleteusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deleteusercommandoutput.html)

</details>
<details>
<summary>
DeleteWebExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/deletewebexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deletewebexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/deletewebexperiencecommandoutput.html)

</details>
<details>
<summary>
GetApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getapplicationcommandoutput.html)

</details>
<details>
<summary>
GetChatControlsConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getchatcontrolsconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getchatcontrolsconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getchatcontrolsconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getdatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getdatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getdatasourcecommandoutput.html)

</details>
<details>
<summary>
GetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getgroupcommandoutput.html)

</details>
<details>
<summary>
GetIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getindexcommandoutput.html)

</details>
<details>
<summary>
GetPlugin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getplugincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getplugincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getplugincommandoutput.html)

</details>
<details>
<summary>
GetRetriever
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getretrievercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getretrievercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getretrievercommandoutput.html)

</details>
<details>
<summary>
GetUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getusercommandoutput.html)

</details>
<details>
<summary>
GetWebExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/getwebexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getwebexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/getwebexperiencecommandoutput.html)

</details>
<details>
<summary>
ListApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listapplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listapplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listapplicationscommandoutput.html)

</details>
<details>
<summary>
ListConversations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listconversationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listconversationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listconversationscommandoutput.html)

</details>
<details>
<summary>
ListDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listdatasourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listdatasourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listdatasourcescommandoutput.html)

</details>
<details>
<summary>
ListDataSourceSyncJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listdatasourcesyncjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listdatasourcesyncjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listdatasourcesyncjobscommandoutput.html)

</details>
<details>
<summary>
ListDocuments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listdocumentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listdocumentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listdocumentscommandoutput.html)

</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listgroupscommandoutput.html)

</details>
<details>
<summary>
ListIndices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listindicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listindicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listindicescommandoutput.html)

</details>
<details>
<summary>
ListMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listmessagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listmessagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listmessagescommandoutput.html)

</details>
<details>
<summary>
ListPlugins
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listpluginscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listpluginscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listpluginscommandoutput.html)

</details>
<details>
<summary>
ListRetrievers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listretrieverscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listretrieverscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listretrieverscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWebExperiences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/listwebexperiencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listwebexperiencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/listwebexperiencescommandoutput.html)

</details>
<details>
<summary>
PutFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/putfeedbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/putfeedbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/putfeedbackcommandoutput.html)

</details>
<details>
<summary>
PutGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/putgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/putgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/putgroupcommandoutput.html)

</details>
<details>
<summary>
StartDataSourceSyncJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/startdatasourcesyncjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/startdatasourcesyncjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/startdatasourcesyncjobcommandoutput.html)

</details>
<details>
<summary>
StopDataSourceSyncJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/stopdatasourcesyncjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/stopdatasourcesyncjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/stopdatasourcesyncjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/updateapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateapplicationcommandoutput.html)

</details>
<details>
<summary>
UpdateChatControlsConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/updatechatcontrolsconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updatechatcontrolsconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updatechatcontrolsconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/updatedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updatedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updatedatasourcecommandoutput.html)

</details>
<details>
<summary>
UpdateIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/updateindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateindexcommandoutput.html)

</details>
<details>
<summary>
UpdatePlugin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/updateplugincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateplugincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateplugincommandoutput.html)

</details>
<details>
<summary>
UpdateRetriever
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/updateretrievercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateretrievercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateretrievercommandoutput.html)

</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/updateusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updateusercommandoutput.html)

</details>
<details>
<summary>
UpdateWebExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/classes/updatewebexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updatewebexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-qbusiness/interfaces/updatewebexperiencecommandoutput.html)

</details>
