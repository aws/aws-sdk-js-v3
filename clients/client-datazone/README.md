<!-- generated file, do not edit directly -->

# @aws-sdk/client-datazone

## Description

AWS SDK for JavaScript DataZone Client for Node.js, Browser and React Native.

<p>Amazon DataZone is a data management service that enables you to catalog, discover,
govern, share, and analyze your data. With Amazon DataZone, you can share and access your
data across accounts and supported regions. Amazon DataZone simplifies your experience
across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon
Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-datazone
using your favorite package manager:

- `npm install @aws-sdk/client-datazone`
- `yarn add @aws-sdk/client-datazone`
- `pnpm add @aws-sdk/client-datazone`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DataZoneClient` and
the commands you need, for example `ListDomainsCommand`:

```js
// ES5 example
const { DataZoneClient, ListDomainsCommand } = require("@aws-sdk/client-datazone");
```

```ts
// ES6+ example
import { DataZoneClient, ListDomainsCommand } from "@aws-sdk/client-datazone";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DataZoneClient({ region: "REGION" });

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
import * as AWS from "@aws-sdk/client-datazone";
const client = new AWS.DataZone({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-datazone` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptPredictions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/AcceptPredictionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/AcceptPredictionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/AcceptPredictionsCommandOutput/)

</details>
<details>
<summary>
AcceptSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/AcceptSubscriptionRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/AcceptSubscriptionRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/AcceptSubscriptionRequestCommandOutput/)

</details>
<details>
<summary>
CancelSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CancelSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CancelSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CancelSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateAssetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateAssetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateAssetCommandOutput/)

</details>
<details>
<summary>
CreateAssetRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateAssetRevisionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateAssetRevisionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateAssetRevisionCommandOutput/)

</details>
<details>
<summary>
CreateAssetType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateAssetTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateAssetTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateAssetTypeCommandOutput/)

</details>
<details>
<summary>
CreateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateDataSourceCommandOutput/)

</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateDomainCommandOutput/)

</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateEnvironmentCommandOutput/)

</details>
<details>
<summary>
CreateEnvironmentProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateEnvironmentProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateEnvironmentProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateEnvironmentProfileCommandOutput/)

</details>
<details>
<summary>
CreateFormType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateFormTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateFormTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateFormTypeCommandOutput/)

</details>
<details>
<summary>
CreateGlossary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateGlossaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateGlossaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateGlossaryCommandOutput/)

</details>
<details>
<summary>
CreateGlossaryTerm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateGlossaryTermCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateGlossaryTermCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateGlossaryTermCommandOutput/)

</details>
<details>
<summary>
CreateGroupProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateGroupProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateGroupProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateGroupProfileCommandOutput/)

</details>
<details>
<summary>
CreateListingChangeSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateListingChangeSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateListingChangeSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateListingChangeSetCommandOutput/)

</details>
<details>
<summary>
CreateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateProjectCommandOutput/)

</details>
<details>
<summary>
CreateProjectMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateProjectMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateProjectMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateProjectMembershipCommandOutput/)

</details>
<details>
<summary>
CreateSubscriptionGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateSubscriptionGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateSubscriptionGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateSubscriptionGrantCommandOutput/)

</details>
<details>
<summary>
CreateSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateSubscriptionRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateSubscriptionRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateSubscriptionRequestCommandOutput/)

</details>
<details>
<summary>
CreateSubscriptionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateSubscriptionTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateSubscriptionTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateSubscriptionTargetCommandOutput/)

</details>
<details>
<summary>
CreateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/CreateUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/CreateUserProfileCommandOutput/)

</details>
<details>
<summary>
DeleteAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteAssetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteAssetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteAssetCommandOutput/)

</details>
<details>
<summary>
DeleteAssetType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteAssetTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteAssetTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteAssetTypeCommandOutput/)

</details>
<details>
<summary>
DeleteDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteDataSourceCommandOutput/)

</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteDomainCommandOutput/)

</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteEnvironmentCommandOutput/)

</details>
<details>
<summary>
DeleteEnvironmentBlueprintConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteEnvironmentBlueprintConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteEnvironmentBlueprintConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteEnvironmentBlueprintConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteEnvironmentProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteEnvironmentProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteEnvironmentProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteEnvironmentProfileCommandOutput/)

</details>
<details>
<summary>
DeleteFormType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteFormTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteFormTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteFormTypeCommandOutput/)

</details>
<details>
<summary>
DeleteGlossary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteGlossaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteGlossaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteGlossaryCommandOutput/)

</details>
<details>
<summary>
DeleteGlossaryTerm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteGlossaryTermCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteGlossaryTermCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteGlossaryTermCommandOutput/)

</details>
<details>
<summary>
DeleteListing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteListingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteListingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteListingCommandOutput/)

</details>
<details>
<summary>
DeleteProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteProjectCommandOutput/)

</details>
<details>
<summary>
DeleteProjectMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteProjectMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteProjectMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteProjectMembershipCommandOutput/)

</details>
<details>
<summary>
DeleteSubscriptionGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteSubscriptionGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteSubscriptionGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteSubscriptionGrantCommandOutput/)

</details>
<details>
<summary>
DeleteSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteSubscriptionRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteSubscriptionRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteSubscriptionRequestCommandOutput/)

</details>
<details>
<summary>
DeleteSubscriptionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/DeleteSubscriptionTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteSubscriptionTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/DeleteSubscriptionTargetCommandOutput/)

</details>
<details>
<summary>
GetAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetAssetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetAssetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetAssetCommandOutput/)

</details>
<details>
<summary>
GetAssetType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetAssetTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetAssetTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetAssetTypeCommandOutput/)

</details>
<details>
<summary>
GetDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetDataSourceCommandOutput/)

</details>
<details>
<summary>
GetDataSourceRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetDataSourceRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetDataSourceRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetDataSourceRunCommandOutput/)

</details>
<details>
<summary>
GetDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetDomainCommandOutput/)

</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetEnvironmentCommandOutput/)

</details>
<details>
<summary>
GetEnvironmentBlueprint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetEnvironmentBlueprintCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetEnvironmentBlueprintCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetEnvironmentBlueprintCommandOutput/)

</details>
<details>
<summary>
GetEnvironmentBlueprintConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetEnvironmentBlueprintConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetEnvironmentBlueprintConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetEnvironmentBlueprintConfigurationCommandOutput/)

</details>
<details>
<summary>
GetEnvironmentProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetEnvironmentProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetEnvironmentProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetEnvironmentProfileCommandOutput/)

</details>
<details>
<summary>
GetFormType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetFormTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetFormTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetFormTypeCommandOutput/)

</details>
<details>
<summary>
GetGlossary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetGlossaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetGlossaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetGlossaryCommandOutput/)

</details>
<details>
<summary>
GetGlossaryTerm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetGlossaryTermCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetGlossaryTermCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetGlossaryTermCommandOutput/)

</details>
<details>
<summary>
GetGroupProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetGroupProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetGroupProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetGroupProfileCommandOutput/)

</details>
<details>
<summary>
GetIamPortalLoginUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetIamPortalLoginUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetIamPortalLoginUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetIamPortalLoginUrlCommandOutput/)

</details>
<details>
<summary>
GetListing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetListingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetListingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetListingCommandOutput/)

</details>
<details>
<summary>
GetProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetProjectCommandOutput/)

</details>
<details>
<summary>
GetSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetSubscriptionCommandOutput/)

</details>
<details>
<summary>
GetSubscriptionGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetSubscriptionGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetSubscriptionGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetSubscriptionGrantCommandOutput/)

</details>
<details>
<summary>
GetSubscriptionRequestDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetSubscriptionRequestDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetSubscriptionRequestDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetSubscriptionRequestDetailsCommandOutput/)

</details>
<details>
<summary>
GetSubscriptionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetSubscriptionTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetSubscriptionTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetSubscriptionTargetCommandOutput/)

</details>
<details>
<summary>
GetUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/GetUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/GetUserProfileCommandOutput/)

</details>
<details>
<summary>
ListAssetRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListAssetRevisionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListAssetRevisionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListAssetRevisionsCommandOutput/)

</details>
<details>
<summary>
ListDataSourceRunActivities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListDataSourceRunActivitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListDataSourceRunActivitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListDataSourceRunActivitiesCommandOutput/)

</details>
<details>
<summary>
ListDataSourceRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListDataSourceRunsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListDataSourceRunsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListDataSourceRunsCommandOutput/)

</details>
<details>
<summary>
ListDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListDataSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListDataSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListDataSourcesCommandOutput/)

</details>
<details>
<summary>
ListDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListDomainsCommandOutput/)

</details>
<details>
<summary>
ListEnvironmentBlueprintConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListEnvironmentBlueprintConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListEnvironmentBlueprintConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListEnvironmentBlueprintConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListEnvironmentBlueprints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListEnvironmentBlueprintsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListEnvironmentBlueprintsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListEnvironmentBlueprintsCommandOutput/)

</details>
<details>
<summary>
ListEnvironmentProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListEnvironmentProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListEnvironmentProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListEnvironmentProfilesCommandOutput/)

</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListEnvironmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListEnvironmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListEnvironmentsCommandOutput/)

</details>
<details>
<summary>
ListNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListNotificationsCommandOutput/)

</details>
<details>
<summary>
ListProjectMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListProjectMembershipsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListProjectMembershipsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListProjectMembershipsCommandOutput/)

</details>
<details>
<summary>
ListProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListProjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListProjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListProjectsCommandOutput/)

</details>
<details>
<summary>
ListSubscriptionGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListSubscriptionGrantsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListSubscriptionGrantsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListSubscriptionGrantsCommandOutput/)

</details>
<details>
<summary>
ListSubscriptionRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListSubscriptionRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListSubscriptionRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListSubscriptionRequestsCommandOutput/)

</details>
<details>
<summary>
ListSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListSubscriptionsCommandOutput/)

</details>
<details>
<summary>
ListSubscriptionTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListSubscriptionTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListSubscriptionTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListSubscriptionTargetsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutEnvironmentBlueprintConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/PutEnvironmentBlueprintConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/PutEnvironmentBlueprintConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/PutEnvironmentBlueprintConfigurationCommandOutput/)

</details>
<details>
<summary>
RejectPredictions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/RejectPredictionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/RejectPredictionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/RejectPredictionsCommandOutput/)

</details>
<details>
<summary>
RejectSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/RejectSubscriptionRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/RejectSubscriptionRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/RejectSubscriptionRequestCommandOutput/)

</details>
<details>
<summary>
RevokeSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/RevokeSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/RevokeSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/RevokeSubscriptionCommandOutput/)

</details>
<details>
<summary>
Search
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/SearchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchCommandOutput/)

</details>
<details>
<summary>
SearchGroupProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/SearchGroupProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchGroupProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchGroupProfilesCommandOutput/)

</details>
<details>
<summary>
SearchListings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/SearchListingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchListingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchListingsCommandOutput/)

</details>
<details>
<summary>
SearchTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/SearchTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchTypesCommandOutput/)

</details>
<details>
<summary>
SearchUserProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/SearchUserProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchUserProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/SearchUserProfilesCommandOutput/)

</details>
<details>
<summary>
StartDataSourceRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/StartDataSourceRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/StartDataSourceRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/StartDataSourceRunCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateDataSourceCommandOutput/)

</details>
<details>
<summary>
UpdateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateDomainCommandOutput/)

</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateEnvironmentCommandOutput/)

</details>
<details>
<summary>
UpdateEnvironmentProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateEnvironmentProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateEnvironmentProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateEnvironmentProfileCommandOutput/)

</details>
<details>
<summary>
UpdateGlossary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateGlossaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateGlossaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateGlossaryCommandOutput/)

</details>
<details>
<summary>
UpdateGlossaryTerm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateGlossaryTermCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateGlossaryTermCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateGlossaryTermCommandOutput/)

</details>
<details>
<summary>
UpdateGroupProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateGroupProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateGroupProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateGroupProfileCommandOutput/)

</details>
<details>
<summary>
UpdateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateProjectCommandOutput/)

</details>
<details>
<summary>
UpdateSubscriptionGrantStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateSubscriptionGrantStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateSubscriptionGrantStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateSubscriptionGrantStatusCommandOutput/)

</details>
<details>
<summary>
UpdateSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateSubscriptionRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateSubscriptionRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateSubscriptionRequestCommandOutput/)

</details>
<details>
<summary>
UpdateSubscriptionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateSubscriptionTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateSubscriptionTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateSubscriptionTargetCommandOutput/)

</details>
<details>
<summary>
UpdateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/datazone/command/UpdateUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-datazone/Interface/UpdateUserProfileCommandOutput/)

</details>
