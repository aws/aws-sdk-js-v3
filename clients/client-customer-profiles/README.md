<!-- generated file, do not edit directly -->

# @aws-sdk/client-customer-profiles

## Description

AWS SDK for JavaScript CustomerProfiles Client for Node.js, Browser and React Native.

<fullname>Amazon Connect Customer Profiles</fullname>

<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Customer_Profiles.html">Customer Profiles actions</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Customer_Profiles.html">Customer Profiles data types</a>
</p>
</li>
</ul>
<p>Amazon Connect Customer Profiles is a unified customer profile for your contact
center that has pre-built connectors powered by AppFlow that make it easy to combine
customer information from third party applications, such as Salesforce (CRM), ServiceNow
(ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. </p>
<p>For more information about the Amazon Connect Customer Profiles feature, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html">Use Customer
Profiles</a> in the <i>Amazon Connect Administrator's Guide</i>. </p>

## Installing

To install this package, simply type add or install @aws-sdk/client-customer-profiles
using your favorite package manager:

- `npm install @aws-sdk/client-customer-profiles`
- `yarn add @aws-sdk/client-customer-profiles`
- `pnpm add @aws-sdk/client-customer-profiles`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CustomerProfilesClient` and
the commands you need, for example `ListDomainsCommand`:

```js
// ES5 example
const { CustomerProfilesClient, ListDomainsCommand } = require("@aws-sdk/client-customer-profiles");
```

```ts
// ES6+ example
import { CustomerProfilesClient, ListDomainsCommand } from "@aws-sdk/client-customer-profiles";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CustomerProfilesClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListDomainsCommand(params);
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
import * as AWS from "@aws-sdk/client-customer-profiles";
const client = new AWS.CustomerProfiles({ region: "REGION" });

// async/await.
try {
  const data = await client.listDomains(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDomains(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDomains(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-customer-profiles` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddProfileKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/AddProfileKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/AddProfileKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/AddProfileKeyCommandOutput/)

</details>
<details>
<summary>
BatchGetCalculatedAttributeForProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/BatchGetCalculatedAttributeForProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/BatchGetCalculatedAttributeForProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/BatchGetCalculatedAttributeForProfileCommandOutput/)

</details>
<details>
<summary>
BatchGetProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/BatchGetProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/BatchGetProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/BatchGetProfileCommandOutput/)

</details>
<details>
<summary>
CreateCalculatedAttributeDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateCalculatedAttributeDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateCalculatedAttributeDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateCalculatedAttributeDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateDomainCommandOutput/)

</details>
<details>
<summary>
CreateDomainLayout
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateDomainLayoutCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateDomainLayoutCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateDomainLayoutCommandOutput/)

</details>
<details>
<summary>
CreateEventStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateEventStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateEventStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateEventStreamCommandOutput/)

</details>
<details>
<summary>
CreateEventTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateEventTriggerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateEventTriggerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateEventTriggerCommandOutput/)

</details>
<details>
<summary>
CreateIntegrationWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateIntegrationWorkflowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateIntegrationWorkflowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateIntegrationWorkflowCommandOutput/)

</details>
<details>
<summary>
CreateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateProfileCommandOutput/)

</details>
<details>
<summary>
CreateRecommender
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateRecommenderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateRecommenderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateRecommenderCommandOutput/)

</details>
<details>
<summary>
CreateSegmentDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateSegmentDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateSegmentDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateSegmentDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateSegmentEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateSegmentEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateSegmentEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateSegmentEstimateCommandOutput/)

</details>
<details>
<summary>
CreateSegmentSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateSegmentSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateSegmentSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateSegmentSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateUploadJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/CreateUploadJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateUploadJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/CreateUploadJobCommandOutput/)

</details>
<details>
<summary>
DeleteCalculatedAttributeDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteCalculatedAttributeDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteCalculatedAttributeDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteCalculatedAttributeDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteDomainCommandOutput/)

</details>
<details>
<summary>
DeleteDomainLayout
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteDomainLayoutCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteDomainLayoutCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteDomainLayoutCommandOutput/)

</details>
<details>
<summary>
DeleteDomainObjectType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteDomainObjectTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteDomainObjectTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteDomainObjectTypeCommandOutput/)

</details>
<details>
<summary>
DeleteEventStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteEventStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteEventStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteEventStreamCommandOutput/)

</details>
<details>
<summary>
DeleteEventTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteEventTriggerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteEventTriggerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteEventTriggerCommandOutput/)

</details>
<details>
<summary>
DeleteIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteIntegrationCommandOutput/)

</details>
<details>
<summary>
DeleteProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteProfileCommandOutput/)

</details>
<details>
<summary>
DeleteProfileKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteProfileKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteProfileKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteProfileKeyCommandOutput/)

</details>
<details>
<summary>
DeleteProfileObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteProfileObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteProfileObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteProfileObjectCommandOutput/)

</details>
<details>
<summary>
DeleteProfileObjectType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteProfileObjectTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteProfileObjectTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteProfileObjectTypeCommandOutput/)

</details>
<details>
<summary>
DeleteRecommender
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteRecommenderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteRecommenderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteRecommenderCommandOutput/)

</details>
<details>
<summary>
DeleteSegmentDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteSegmentDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteSegmentDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteSegmentDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DeleteWorkflowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteWorkflowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DeleteWorkflowCommandOutput/)

</details>
<details>
<summary>
DetectProfileObjectType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/DetectProfileObjectTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DetectProfileObjectTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/DetectProfileObjectTypeCommandOutput/)

</details>
<details>
<summary>
GetAutoMergingPreview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetAutoMergingPreviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetAutoMergingPreviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetAutoMergingPreviewCommandOutput/)

</details>
<details>
<summary>
GetCalculatedAttributeDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetCalculatedAttributeDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetCalculatedAttributeDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetCalculatedAttributeDefinitionCommandOutput/)

</details>
<details>
<summary>
GetCalculatedAttributeForProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetCalculatedAttributeForProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetCalculatedAttributeForProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetCalculatedAttributeForProfileCommandOutput/)

</details>
<details>
<summary>
GetDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetDomainCommandOutput/)

</details>
<details>
<summary>
GetDomainLayout
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetDomainLayoutCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetDomainLayoutCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetDomainLayoutCommandOutput/)

</details>
<details>
<summary>
GetDomainObjectType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetDomainObjectTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetDomainObjectTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetDomainObjectTypeCommandOutput/)

</details>
<details>
<summary>
GetEventStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetEventStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetEventStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetEventStreamCommandOutput/)

</details>
<details>
<summary>
GetEventTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetEventTriggerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetEventTriggerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetEventTriggerCommandOutput/)

</details>
<details>
<summary>
GetIdentityResolutionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetIdentityResolutionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetIdentityResolutionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetIdentityResolutionJobCommandOutput/)

</details>
<details>
<summary>
GetIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetIntegrationCommandOutput/)

</details>
<details>
<summary>
GetMatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetMatchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetMatchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetMatchesCommandOutput/)

</details>
<details>
<summary>
GetObjectTypeAttributeStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetObjectTypeAttributeStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetObjectTypeAttributeStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetObjectTypeAttributeStatisticsCommandOutput/)

</details>
<details>
<summary>
GetProfileHistoryRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetProfileHistoryRecordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetProfileHistoryRecordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetProfileHistoryRecordCommandOutput/)

</details>
<details>
<summary>
GetProfileObjectType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetProfileObjectTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetProfileObjectTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetProfileObjectTypeCommandOutput/)

</details>
<details>
<summary>
GetProfileObjectTypeTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetProfileObjectTypeTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetProfileObjectTypeTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetProfileObjectTypeTemplateCommandOutput/)

</details>
<details>
<summary>
GetProfileRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetProfileRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetProfileRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetProfileRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetRecommender
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetRecommenderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetRecommenderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetRecommenderCommandOutput/)

</details>
<details>
<summary>
GetSegmentDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetSegmentDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSegmentDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSegmentDefinitionCommandOutput/)

</details>
<details>
<summary>
GetSegmentEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetSegmentEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSegmentEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSegmentEstimateCommandOutput/)

</details>
<details>
<summary>
GetSegmentMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetSegmentMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSegmentMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSegmentMembershipCommandOutput/)

</details>
<details>
<summary>
GetSegmentSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetSegmentSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSegmentSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSegmentSnapshotCommandOutput/)

</details>
<details>
<summary>
GetSimilarProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetSimilarProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSimilarProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetSimilarProfilesCommandOutput/)

</details>
<details>
<summary>
GetUploadJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetUploadJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetUploadJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetUploadJobCommandOutput/)

</details>
<details>
<summary>
GetUploadJobPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetUploadJobPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetUploadJobPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetUploadJobPathCommandOutput/)

</details>
<details>
<summary>
GetWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetWorkflowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetWorkflowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetWorkflowCommandOutput/)

</details>
<details>
<summary>
GetWorkflowSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/GetWorkflowStepsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetWorkflowStepsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/GetWorkflowStepsCommandOutput/)

</details>
<details>
<summary>
ListAccountIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListAccountIntegrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListAccountIntegrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListAccountIntegrationsCommandOutput/)

</details>
<details>
<summary>
ListCalculatedAttributeDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListCalculatedAttributeDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListCalculatedAttributeDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListCalculatedAttributeDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListCalculatedAttributesForProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListCalculatedAttributesForProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListCalculatedAttributesForProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListCalculatedAttributesForProfileCommandOutput/)

</details>
<details>
<summary>
ListDomainLayouts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListDomainLayoutsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListDomainLayoutsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListDomainLayoutsCommandOutput/)

</details>
<details>
<summary>
ListDomainObjectTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListDomainObjectTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListDomainObjectTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListDomainObjectTypesCommandOutput/)

</details>
<details>
<summary>
ListDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListDomainsCommandOutput/)

</details>
<details>
<summary>
ListEventStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListEventStreamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListEventStreamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListEventStreamsCommandOutput/)

</details>
<details>
<summary>
ListEventTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListEventTriggersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListEventTriggersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListEventTriggersCommandOutput/)

</details>
<details>
<summary>
ListIdentityResolutionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListIdentityResolutionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListIdentityResolutionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListIdentityResolutionJobsCommandOutput/)

</details>
<details>
<summary>
ListIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListIntegrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListIntegrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListIntegrationsCommandOutput/)

</details>
<details>
<summary>
ListObjectTypeAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListObjectTypeAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListObjectTypeAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListObjectTypeAttributesCommandOutput/)

</details>
<details>
<summary>
ListObjectTypeAttributeValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListObjectTypeAttributeValuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListObjectTypeAttributeValuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListObjectTypeAttributeValuesCommandOutput/)

</details>
<details>
<summary>
ListProfileAttributeValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListProfileAttributeValuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileAttributeValuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileAttributeValuesCommandOutput/)

</details>
<details>
<summary>
ListProfileHistoryRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListProfileHistoryRecordsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileHistoryRecordsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileHistoryRecordsCommandOutput/)

</details>
<details>
<summary>
ListProfileObjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListProfileObjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileObjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileObjectsCommandOutput/)

</details>
<details>
<summary>
ListProfileObjectTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListProfileObjectTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileObjectTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileObjectTypesCommandOutput/)

</details>
<details>
<summary>
ListProfileObjectTypeTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListProfileObjectTypeTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileObjectTypeTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListProfileObjectTypeTemplatesCommandOutput/)

</details>
<details>
<summary>
ListRecommenderRecipes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListRecommenderRecipesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListRecommenderRecipesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListRecommenderRecipesCommandOutput/)

</details>
<details>
<summary>
ListRecommenders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListRecommendersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListRecommendersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListRecommendersCommandOutput/)

</details>
<details>
<summary>
ListRuleBasedMatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListRuleBasedMatchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListRuleBasedMatchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListRuleBasedMatchesCommandOutput/)

</details>
<details>
<summary>
ListSegmentDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListSegmentDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListSegmentDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListSegmentDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListUploadJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListUploadJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListUploadJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListUploadJobsCommandOutput/)

</details>
<details>
<summary>
ListWorkflows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/ListWorkflowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListWorkflowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/ListWorkflowsCommandOutput/)

</details>
<details>
<summary>
MergeProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/MergeProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/MergeProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/MergeProfilesCommandOutput/)

</details>
<details>
<summary>
PutDomainObjectType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/PutDomainObjectTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/PutDomainObjectTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/PutDomainObjectTypeCommandOutput/)

</details>
<details>
<summary>
PutIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/PutIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/PutIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/PutIntegrationCommandOutput/)

</details>
<details>
<summary>
PutProfileObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/PutProfileObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/PutProfileObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/PutProfileObjectCommandOutput/)

</details>
<details>
<summary>
PutProfileObjectType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/PutProfileObjectTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/PutProfileObjectTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/PutProfileObjectTypeCommandOutput/)

</details>
<details>
<summary>
SearchProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/SearchProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/SearchProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/SearchProfilesCommandOutput/)

</details>
<details>
<summary>
StartRecommender
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/StartRecommenderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/StartRecommenderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/StartRecommenderCommandOutput/)

</details>
<details>
<summary>
StartUploadJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/StartUploadJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/StartUploadJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/StartUploadJobCommandOutput/)

</details>
<details>
<summary>
StopRecommender
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/StopRecommenderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/StopRecommenderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/StopRecommenderCommandOutput/)

</details>
<details>
<summary>
StopUploadJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/StopUploadJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/StopUploadJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/StopUploadJobCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateCalculatedAttributeDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/UpdateCalculatedAttributeDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateCalculatedAttributeDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateCalculatedAttributeDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/UpdateDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateDomainCommandOutput/)

</details>
<details>
<summary>
UpdateDomainLayout
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/UpdateDomainLayoutCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateDomainLayoutCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateDomainLayoutCommandOutput/)

</details>
<details>
<summary>
UpdateEventTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/UpdateEventTriggerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateEventTriggerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateEventTriggerCommandOutput/)

</details>
<details>
<summary>
UpdateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/UpdateProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateProfileCommandOutput/)

</details>
<details>
<summary>
UpdateRecommender
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/customer-profiles/command/UpdateRecommenderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateRecommenderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-customer-profiles/Interface/UpdateRecommenderCommandOutput/)

</details>
