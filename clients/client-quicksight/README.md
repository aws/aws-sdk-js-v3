<!-- generated file, do not edit directly -->

# @aws-sdk/client-quicksight

## Description

AWS SDK for JavaScript QuickSight Client for Node.js, Browser and React Native.

<fullname>Amazon QuickSight API Reference</fullname>

<p>Amazon QuickSight is a fully managed, serverless business intelligence service for the
Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your
organization. This API reference contains documentation for a programming interface that
you can use to manage Amazon QuickSight. </p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-quicksight
using your favorite package manager:

- `npm install @aws-sdk/client-quicksight`
- `yarn add @aws-sdk/client-quicksight`
- `pnpm add @aws-sdk/client-quicksight`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `QuickSightClient` and
the commands you need, for example `CancelIngestionCommand`:

```js
// ES5 example
const { QuickSightClient, CancelIngestionCommand } = require("@aws-sdk/client-quicksight");
```

```ts
// ES6+ example
import { QuickSightClient, CancelIngestionCommand } from "@aws-sdk/client-quicksight";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new QuickSightClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CancelIngestionCommand(params);
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
import * as AWS from "@aws-sdk/client-quicksight";
const client = new AWS.QuickSight({ region: "REGION" });

// async/await.
try {
  const data = await client.cancelIngestion(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelIngestion(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelIngestion(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-quicksight` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelIngestion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/cancelingestioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/cancelingestioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/cancelingestioncommandoutput.html)

</details>
<details>
<summary>
CreateAccountCustomization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createaccountcustomizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createaccountcustomizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createaccountcustomizationcommandoutput.html)

</details>
<details>
<summary>
CreateAccountSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createaccountsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createaccountsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createaccountsubscriptioncommandoutput.html)

</details>
<details>
<summary>
CreateAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createanalysiscommandoutput.html)

</details>
<details>
<summary>
CreateDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createdashboardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createdashboardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createdashboardcommandoutput.html)

</details>
<details>
<summary>
CreateDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createdatasetcommandoutput.html)

</details>
<details>
<summary>
CreateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createdatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createdatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createdatasourcecommandoutput.html)

</details>
<details>
<summary>
CreateFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createfoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createfoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createfoldercommandoutput.html)

</details>
<details>
<summary>
CreateFolderMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createfoldermembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createfoldermembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createfoldermembershipcommandoutput.html)

</details>
<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/creategroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/creategroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/creategroupcommandoutput.html)

</details>
<details>
<summary>
CreateGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/creategroupmembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/creategroupmembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/creategroupmembershipcommandoutput.html)

</details>
<details>
<summary>
CreateIAMPolicyAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createiampolicyassignmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createiampolicyassignmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createiampolicyassignmentcommandoutput.html)

</details>
<details>
<summary>
CreateIngestion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createingestioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createingestioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createingestioncommandoutput.html)

</details>
<details>
<summary>
CreateNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createnamespacecommandoutput.html)

</details>
<details>
<summary>
CreateRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createrefreshschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createrefreshschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createrefreshschedulecommandoutput.html)

</details>
<details>
<summary>
CreateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createtemplatecommandoutput.html)

</details>
<details>
<summary>
CreateTemplateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createtemplatealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createtemplatealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createtemplatealiascommandoutput.html)

</details>
<details>
<summary>
CreateTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createthemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createthemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createthemecommandoutput.html)

</details>
<details>
<summary>
CreateThemeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createthemealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createthemealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createthemealiascommandoutput.html)

</details>
<details>
<summary>
CreateTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createtopiccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createtopiccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createtopiccommandoutput.html)

</details>
<details>
<summary>
CreateTopicRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createtopicrefreshschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createtopicrefreshschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createtopicrefreshschedulecommandoutput.html)

</details>
<details>
<summary>
CreateVPCConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/createvpcconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createvpcconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/createvpcconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteAccountCustomization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deleteaccountcustomizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteaccountcustomizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteaccountcustomizationcommandoutput.html)

</details>
<details>
<summary>
DeleteAccountSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deleteaccountsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteaccountsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteaccountsubscriptioncommandoutput.html)

</details>
<details>
<summary>
DeleteAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deleteanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteanalysiscommandoutput.html)

</details>
<details>
<summary>
DeleteDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletedashboardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletedashboardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletedashboardcommandoutput.html)

</details>
<details>
<summary>
DeleteDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletedatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletedatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletedatasetcommandoutput.html)

</details>
<details>
<summary>
DeleteDataSetRefreshProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletedatasetrefreshpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletedatasetrefreshpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletedatasetrefreshpropertiescommandoutput.html)

</details>
<details>
<summary>
DeleteDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletedatasourcecommandoutput.html)

</details>
<details>
<summary>
DeleteFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletefoldercommandoutput.html)

</details>
<details>
<summary>
DeleteFolderMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletefoldermembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletefoldermembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletefoldermembershipcommandoutput.html)

</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletegroupmembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletegroupmembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletegroupmembershipcommandoutput.html)

</details>
<details>
<summary>
DeleteIAMPolicyAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deleteiampolicyassignmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteiampolicyassignmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteiampolicyassignmentcommandoutput.html)

</details>
<details>
<summary>
DeleteNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletenamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletenamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletenamespacecommandoutput.html)

</details>
<details>
<summary>
DeleteRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deleterefreshschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleterefreshschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleterefreshschedulecommandoutput.html)

</details>
<details>
<summary>
DeleteTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletetemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteTemplateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletetemplatealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletetemplatealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletetemplatealiascommandoutput.html)

</details>
<details>
<summary>
DeleteTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletethemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletethemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletethemecommandoutput.html)

</details>
<details>
<summary>
DeleteThemeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletethemealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletethemealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletethemealiascommandoutput.html)

</details>
<details>
<summary>
DeleteTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletetopiccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletetopiccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletetopiccommandoutput.html)

</details>
<details>
<summary>
DeleteTopicRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletetopicrefreshschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletetopicrefreshschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletetopicrefreshschedulecommandoutput.html)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deleteusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteusercommandoutput.html)

</details>
<details>
<summary>
DeleteUserByPrincipalId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deleteuserbyprincipalidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteuserbyprincipalidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deleteuserbyprincipalidcommandoutput.html)

</details>
<details>
<summary>
DeleteVPCConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/deletevpcconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletevpcconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/deletevpcconnectioncommandoutput.html)

</details>
<details>
<summary>
DescribeAccountCustomization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeaccountcustomizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeaccountcustomizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeaccountcustomizationcommandoutput.html)

</details>
<details>
<summary>
DescribeAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeaccountsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeaccountsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeaccountsettingscommandoutput.html)

</details>
<details>
<summary>
DescribeAccountSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeaccountsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeaccountsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeaccountsubscriptioncommandoutput.html)

</details>
<details>
<summary>
DescribeAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeanalysiscommandoutput.html)

</details>
<details>
<summary>
DescribeAnalysisDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeanalysisdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeanalysisdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeanalysisdefinitioncommandoutput.html)

</details>
<details>
<summary>
DescribeAnalysisPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeanalysispermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeanalysispermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeanalysispermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeAssetBundleExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeassetbundleexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeassetbundleexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeassetbundleexportjobcommandoutput.html)

</details>
<details>
<summary>
DescribeAssetBundleImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeassetbundleimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeassetbundleimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeassetbundleimportjobcommandoutput.html)

</details>
<details>
<summary>
DescribeDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describedashboardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedashboardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedashboardcommandoutput.html)

</details>
<details>
<summary>
DescribeDashboardDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describedashboarddefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedashboarddefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedashboarddefinitioncommandoutput.html)

</details>
<details>
<summary>
DescribeDashboardPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describedashboardpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedashboardpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedashboardpermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describedatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasetcommandoutput.html)

</details>
<details>
<summary>
DescribeDataSetPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describedatasetpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasetpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasetpermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeDataSetRefreshProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describedatasetrefreshpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasetrefreshpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasetrefreshpropertiescommandoutput.html)

</details>
<details>
<summary>
DescribeDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasourcecommandoutput.html)

</details>
<details>
<summary>
DescribeDataSourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describedatasourcepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasourcepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describedatasourcepermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describefoldercommandoutput.html)

</details>
<details>
<summary>
DescribeFolderPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describefolderpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describefolderpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describefolderpermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeFolderResolvedPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describefolderresolvedpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describefolderresolvedpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describefolderresolvedpermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describegroupcommandoutput.html)

</details>
<details>
<summary>
DescribeGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describegroupmembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describegroupmembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describegroupmembershipcommandoutput.html)

</details>
<details>
<summary>
DescribeIAMPolicyAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeiampolicyassignmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeiampolicyassignmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeiampolicyassignmentcommandoutput.html)

</details>
<details>
<summary>
DescribeIngestion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeingestioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeingestioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeingestioncommandoutput.html)

</details>
<details>
<summary>
DescribeIpRestriction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeiprestrictioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeiprestrictioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeiprestrictioncommandoutput.html)

</details>
<details>
<summary>
DescribeNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describenamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describenamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describenamespacecommandoutput.html)

</details>
<details>
<summary>
DescribeRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describerefreshschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describerefreshschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describerefreshschedulecommandoutput.html)

</details>
<details>
<summary>
DescribeTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetemplatecommandoutput.html)

</details>
<details>
<summary>
DescribeTemplateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describetemplatealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetemplatealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetemplatealiascommandoutput.html)

</details>
<details>
<summary>
DescribeTemplateDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describetemplatedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetemplatedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetemplatedefinitioncommandoutput.html)

</details>
<details>
<summary>
DescribeTemplatePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describetemplatepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetemplatepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetemplatepermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describethemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describethemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describethemecommandoutput.html)

</details>
<details>
<summary>
DescribeThemeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describethemealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describethemealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describethemealiascommandoutput.html)

</details>
<details>
<summary>
DescribeThemePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describethemepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describethemepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describethemepermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describetopiccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetopiccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetopiccommandoutput.html)

</details>
<details>
<summary>
DescribeTopicPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describetopicpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetopicpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetopicpermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeTopicRefresh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describetopicrefreshcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetopicrefreshcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetopicrefreshcommandoutput.html)

</details>
<details>
<summary>
DescribeTopicRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describetopicrefreshschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetopicrefreshschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describetopicrefreshschedulecommandoutput.html)

</details>
<details>
<summary>
DescribeUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describeusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describeusercommandoutput.html)

</details>
<details>
<summary>
DescribeVPCConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/describevpcconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describevpcconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/describevpcconnectioncommandoutput.html)

</details>
<details>
<summary>
GenerateEmbedUrlForAnonymousUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/generateembedurlforanonymoususercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/generateembedurlforanonymoususercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/generateembedurlforanonymoususercommandoutput.html)

</details>
<details>
<summary>
GenerateEmbedUrlForRegisteredUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/generateembedurlforregisteredusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/generateembedurlforregisteredusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/generateembedurlforregisteredusercommandoutput.html)

</details>
<details>
<summary>
GetDashboardEmbedUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/getdashboardembedurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/getdashboardembedurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/getdashboardembedurlcommandoutput.html)

</details>
<details>
<summary>
GetSessionEmbedUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/getsessionembedurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/getsessionembedurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/getsessionembedurlcommandoutput.html)

</details>
<details>
<summary>
ListAnalyses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listanalysescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listanalysescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listanalysescommandoutput.html)

</details>
<details>
<summary>
ListAssetBundleExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listassetbundleexportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listassetbundleexportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listassetbundleexportjobscommandoutput.html)

</details>
<details>
<summary>
ListAssetBundleImportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listassetbundleimportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listassetbundleimportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listassetbundleimportjobscommandoutput.html)

</details>
<details>
<summary>
ListDashboards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listdashboardscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listdashboardscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listdashboardscommandoutput.html)

</details>
<details>
<summary>
ListDashboardVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listdashboardversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listdashboardversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listdashboardversionscommandoutput.html)

</details>
<details>
<summary>
ListDataSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listdatasetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listdatasetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listdatasetscommandoutput.html)

</details>
<details>
<summary>
ListDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listdatasourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listdatasourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listdatasourcescommandoutput.html)

</details>
<details>
<summary>
ListFolderMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listfoldermemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listfoldermemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listfoldermemberscommandoutput.html)

</details>
<details>
<summary>
ListFolders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listfolderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listfolderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listfolderscommandoutput.html)

</details>
<details>
<summary>
ListGroupMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listgroupmembershipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listgroupmembershipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listgroupmembershipscommandoutput.html)

</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listgroupscommandoutput.html)

</details>
<details>
<summary>
ListIAMPolicyAssignments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listiampolicyassignmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listiampolicyassignmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listiampolicyassignmentscommandoutput.html)

</details>
<details>
<summary>
ListIAMPolicyAssignmentsForUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listiampolicyassignmentsforusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listiampolicyassignmentsforusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listiampolicyassignmentsforusercommandoutput.html)

</details>
<details>
<summary>
ListIngestions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listingestionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listingestionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listingestionscommandoutput.html)

</details>
<details>
<summary>
ListNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listnamespacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listnamespacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listnamespacescommandoutput.html)

</details>
<details>
<summary>
ListRefreshSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listrefreshschedulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listrefreshschedulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listrefreshschedulescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTemplateAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listtemplatealiasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtemplatealiasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtemplatealiasescommandoutput.html)

</details>
<details>
<summary>
ListTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listtemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtemplatescommandoutput.html)

</details>
<details>
<summary>
ListTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listtemplateversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtemplateversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtemplateversionscommandoutput.html)

</details>
<details>
<summary>
ListThemeAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listthemealiasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listthemealiasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listthemealiasescommandoutput.html)

</details>
<details>
<summary>
ListThemes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listthemescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listthemescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listthemescommandoutput.html)

</details>
<details>
<summary>
ListThemeVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listthemeversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listthemeversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listthemeversionscommandoutput.html)

</details>
<details>
<summary>
ListTopicRefreshSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listtopicrefreshschedulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtopicrefreshschedulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtopicrefreshschedulescommandoutput.html)

</details>
<details>
<summary>
ListTopics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listtopicscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtopicscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listtopicscommandoutput.html)

</details>
<details>
<summary>
ListUserGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listusergroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listusergroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listusergroupscommandoutput.html)

</details>
<details>
<summary>
ListUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listuserscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listuserscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listuserscommandoutput.html)

</details>
<details>
<summary>
ListVPCConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/listvpcconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listvpcconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/listvpcconnectionscommandoutput.html)

</details>
<details>
<summary>
PutDataSetRefreshProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/putdatasetrefreshpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/putdatasetrefreshpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/putdatasetrefreshpropertiescommandoutput.html)

</details>
<details>
<summary>
RegisterUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/registerusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/registerusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/registerusercommandoutput.html)

</details>
<details>
<summary>
RestoreAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/restoreanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/restoreanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/restoreanalysiscommandoutput.html)

</details>
<details>
<summary>
SearchAnalyses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/searchanalysescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchanalysescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchanalysescommandoutput.html)

</details>
<details>
<summary>
SearchDashboards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/searchdashboardscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchdashboardscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchdashboardscommandoutput.html)

</details>
<details>
<summary>
SearchDataSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/searchdatasetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchdatasetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchdatasetscommandoutput.html)

</details>
<details>
<summary>
SearchDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/searchdatasourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchdatasourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchdatasourcescommandoutput.html)

</details>
<details>
<summary>
SearchFolders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/searchfolderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchfolderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchfolderscommandoutput.html)

</details>
<details>
<summary>
SearchGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/searchgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/searchgroupscommandoutput.html)

</details>
<details>
<summary>
StartAssetBundleExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/startassetbundleexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/startassetbundleexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/startassetbundleexportjobcommandoutput.html)

</details>
<details>
<summary>
StartAssetBundleImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/startassetbundleimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/startassetbundleimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/startassetbundleimportjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAccountCustomization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updateaccountcustomizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateaccountcustomizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateaccountcustomizationcommandoutput.html)

</details>
<details>
<summary>
UpdateAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updateaccountsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateaccountsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateaccountsettingscommandoutput.html)

</details>
<details>
<summary>
UpdateAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updateanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateanalysiscommandoutput.html)

</details>
<details>
<summary>
UpdateAnalysisPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updateanalysispermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateanalysispermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateanalysispermissionscommandoutput.html)

</details>
<details>
<summary>
UpdateDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatedashboardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedashboardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedashboardcommandoutput.html)

</details>
<details>
<summary>
UpdateDashboardPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatedashboardpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedashboardpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedashboardpermissionscommandoutput.html)

</details>
<details>
<summary>
UpdateDashboardPublishedVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatedashboardpublishedversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedashboardpublishedversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedashboardpublishedversioncommandoutput.html)

</details>
<details>
<summary>
UpdateDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatedatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedatasetcommandoutput.html)

</details>
<details>
<summary>
UpdateDataSetPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatedatasetpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedatasetpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedatasetpermissionscommandoutput.html)

</details>
<details>
<summary>
UpdateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedatasourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDataSourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatedatasourcepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedatasourcepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatedatasourcepermissionscommandoutput.html)

</details>
<details>
<summary>
UpdateFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatefoldercommandoutput.html)

</details>
<details>
<summary>
UpdateFolderPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatefolderpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatefolderpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatefolderpermissionscommandoutput.html)

</details>
<details>
<summary>
UpdateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updategroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updategroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updategroupcommandoutput.html)

</details>
<details>
<summary>
UpdateIAMPolicyAssignment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updateiampolicyassignmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateiampolicyassignmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateiampolicyassignmentcommandoutput.html)

</details>
<details>
<summary>
UpdateIpRestriction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updateiprestrictioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateiprestrictioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateiprestrictioncommandoutput.html)

</details>
<details>
<summary>
UpdatePublicSharingSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatepublicsharingsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatepublicsharingsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatepublicsharingsettingscommandoutput.html)

</details>
<details>
<summary>
UpdateRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updaterefreshschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updaterefreshschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updaterefreshschedulecommandoutput.html)

</details>
<details>
<summary>
UpdateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetemplatecommandoutput.html)

</details>
<details>
<summary>
UpdateTemplateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatetemplatealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetemplatealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetemplatealiascommandoutput.html)

</details>
<details>
<summary>
UpdateTemplatePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatetemplatepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetemplatepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetemplatepermissionscommandoutput.html)

</details>
<details>
<summary>
UpdateTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatethemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatethemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatethemecommandoutput.html)

</details>
<details>
<summary>
UpdateThemeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatethemealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatethemealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatethemealiascommandoutput.html)

</details>
<details>
<summary>
UpdateThemePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatethemepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatethemepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatethemepermissionscommandoutput.html)

</details>
<details>
<summary>
UpdateTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatetopiccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetopiccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetopiccommandoutput.html)

</details>
<details>
<summary>
UpdateTopicPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatetopicpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetopicpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetopicpermissionscommandoutput.html)

</details>
<details>
<summary>
UpdateTopicRefreshSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatetopicrefreshschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetopicrefreshschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatetopicrefreshschedulecommandoutput.html)

</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updateusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updateusercommandoutput.html)

</details>
<details>
<summary>
UpdateVPCConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/classes/updatevpcconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatevpcconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-quicksight/interfaces/updatevpcconnectioncommandoutput.html)

</details>
