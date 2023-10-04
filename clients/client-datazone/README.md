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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/acceptpredictionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/acceptpredictionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/acceptpredictionscommandoutput.html)

</details>
<details>
<summary>
AcceptSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/acceptsubscriptionrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/acceptsubscriptionrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/acceptsubscriptionrequestcommandoutput.html)

</details>
<details>
<summary>
CancelSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/cancelsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/cancelsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/cancelsubscriptioncommandoutput.html)

</details>
<details>
<summary>
CreateAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createassetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createassetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createassetcommandoutput.html)

</details>
<details>
<summary>
CreateAssetRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createassetrevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createassetrevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createassetrevisioncommandoutput.html)

</details>
<details>
<summary>
CreateAssetType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createassettypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createassettypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createassettypecommandoutput.html)

</details>
<details>
<summary>
CreateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createdatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createdatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createdatasourcecommandoutput.html)

</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createdomaincommandoutput.html)

</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createenvironmentcommandoutput.html)

</details>
<details>
<summary>
CreateEnvironmentProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createenvironmentprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createenvironmentprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createenvironmentprofilecommandoutput.html)

</details>
<details>
<summary>
CreateFormType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createformtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createformtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createformtypecommandoutput.html)

</details>
<details>
<summary>
CreateGlossary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createglossarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createglossarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createglossarycommandoutput.html)

</details>
<details>
<summary>
CreateGlossaryTerm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createglossarytermcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createglossarytermcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createglossarytermcommandoutput.html)

</details>
<details>
<summary>
CreateGroupProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/creategroupprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/creategroupprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/creategroupprofilecommandoutput.html)

</details>
<details>
<summary>
CreateListingChangeSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createlistingchangesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createlistingchangesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createlistingchangesetcommandoutput.html)

</details>
<details>
<summary>
CreateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createprojectcommandoutput.html)

</details>
<details>
<summary>
CreateProjectMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createprojectmembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createprojectmembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createprojectmembershipcommandoutput.html)

</details>
<details>
<summary>
CreateSubscriptionGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createsubscriptiongrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createsubscriptiongrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createsubscriptiongrantcommandoutput.html)

</details>
<details>
<summary>
CreateSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createsubscriptionrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createsubscriptionrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createsubscriptionrequestcommandoutput.html)

</details>
<details>
<summary>
CreateSubscriptionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createsubscriptiontargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createsubscriptiontargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createsubscriptiontargetcommandoutput.html)

</details>
<details>
<summary>
CreateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/createuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/createuserprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteassetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteassetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteassetcommandoutput.html)

</details>
<details>
<summary>
DeleteAssetType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteassettypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteassettypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteassettypecommandoutput.html)

</details>
<details>
<summary>
DeleteDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deletedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletedatasourcecommandoutput.html)

</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deletedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletedomaincommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteenvironmentcommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironmentBlueprintConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteenvironmentblueprintconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteenvironmentblueprintconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteenvironmentblueprintconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironmentProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteenvironmentprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteenvironmentprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteenvironmentprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteFormType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteformtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteformtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteformtypecommandoutput.html)

</details>
<details>
<summary>
DeleteGlossary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteglossarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteglossarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteglossarycommandoutput.html)

</details>
<details>
<summary>
DeleteGlossaryTerm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteglossarytermcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteglossarytermcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteglossarytermcommandoutput.html)

</details>
<details>
<summary>
DeleteListing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deletelistingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletelistingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletelistingcommandoutput.html)

</details>
<details>
<summary>
DeleteProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteprojectcommandoutput.html)

</details>
<details>
<summary>
DeleteProjectMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deleteprojectmembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteprojectmembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deleteprojectmembershipcommandoutput.html)

</details>
<details>
<summary>
DeleteSubscriptionGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deletesubscriptiongrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletesubscriptiongrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletesubscriptiongrantcommandoutput.html)

</details>
<details>
<summary>
DeleteSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deletesubscriptionrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletesubscriptionrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletesubscriptionrequestcommandoutput.html)

</details>
<details>
<summary>
DeleteSubscriptionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/deletesubscriptiontargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletesubscriptiontargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/deletesubscriptiontargetcommandoutput.html)

</details>
<details>
<summary>
GetAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getassetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getassetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getassetcommandoutput.html)

</details>
<details>
<summary>
GetAssetType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getassettypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getassettypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getassettypecommandoutput.html)

</details>
<details>
<summary>
GetDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getdatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getdatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getdatasourcecommandoutput.html)

</details>
<details>
<summary>
GetDataSourceRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getdatasourceruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getdatasourceruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getdatasourceruncommandoutput.html)

</details>
<details>
<summary>
GetDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getdomaincommandoutput.html)

</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getenvironmentcommandoutput.html)

</details>
<details>
<summary>
GetEnvironmentBlueprint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getenvironmentblueprintcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getenvironmentblueprintcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getenvironmentblueprintcommandoutput.html)

</details>
<details>
<summary>
GetEnvironmentBlueprintConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getenvironmentblueprintconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getenvironmentblueprintconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getenvironmentblueprintconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetEnvironmentProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getenvironmentprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getenvironmentprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getenvironmentprofilecommandoutput.html)

</details>
<details>
<summary>
GetFormType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getformtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getformtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getformtypecommandoutput.html)

</details>
<details>
<summary>
GetGlossary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getglossarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getglossarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getglossarycommandoutput.html)

</details>
<details>
<summary>
GetGlossaryTerm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getglossarytermcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getglossarytermcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getglossarytermcommandoutput.html)

</details>
<details>
<summary>
GetGroupProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getgroupprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getgroupprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getgroupprofilecommandoutput.html)

</details>
<details>
<summary>
GetIamPortalLoginUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getiamportalloginurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getiamportalloginurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getiamportalloginurlcommandoutput.html)

</details>
<details>
<summary>
GetListing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getlistingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getlistingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getlistingcommandoutput.html)

</details>
<details>
<summary>
GetProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getprojectcommandoutput.html)

</details>
<details>
<summary>
GetSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getsubscriptioncommandoutput.html)

</details>
<details>
<summary>
GetSubscriptionGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getsubscriptiongrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getsubscriptiongrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getsubscriptiongrantcommandoutput.html)

</details>
<details>
<summary>
GetSubscriptionRequestDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getsubscriptionrequestdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getsubscriptionrequestdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getsubscriptionrequestdetailscommandoutput.html)

</details>
<details>
<summary>
GetSubscriptionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getsubscriptiontargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getsubscriptiontargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getsubscriptiontargetcommandoutput.html)

</details>
<details>
<summary>
GetUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/getuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/getuserprofilecommandoutput.html)

</details>
<details>
<summary>
ListAssetRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listassetrevisionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listassetrevisionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listassetrevisionscommandoutput.html)

</details>
<details>
<summary>
ListDataSourceRunActivities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listdatasourcerunactivitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listdatasourcerunactivitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listdatasourcerunactivitiescommandoutput.html)

</details>
<details>
<summary>
ListDataSourceRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listdatasourcerunscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listdatasourcerunscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listdatasourcerunscommandoutput.html)

</details>
<details>
<summary>
ListDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listdatasourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listdatasourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listdatasourcescommandoutput.html)

</details>
<details>
<summary>
ListDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listdomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listdomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listdomainscommandoutput.html)

</details>
<details>
<summary>
ListEnvironmentBlueprintConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listenvironmentblueprintconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listenvironmentblueprintconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listenvironmentblueprintconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListEnvironmentBlueprints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listenvironmentblueprintscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listenvironmentblueprintscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listenvironmentblueprintscommandoutput.html)

</details>
<details>
<summary>
ListEnvironmentProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listenvironmentprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listenvironmentprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listenvironmentprofilescommandoutput.html)

</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listenvironmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listenvironmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listenvironmentscommandoutput.html)

</details>
<details>
<summary>
ListNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listnotificationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listnotificationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listnotificationscommandoutput.html)

</details>
<details>
<summary>
ListProjectMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listprojectmembershipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listprojectmembershipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listprojectmembershipscommandoutput.html)

</details>
<details>
<summary>
ListProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listprojectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listprojectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listprojectscommandoutput.html)

</details>
<details>
<summary>
ListSubscriptionGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listsubscriptiongrantscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listsubscriptiongrantscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listsubscriptiongrantscommandoutput.html)

</details>
<details>
<summary>
ListSubscriptionRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listsubscriptionrequestscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listsubscriptionrequestscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listsubscriptionrequestscommandoutput.html)

</details>
<details>
<summary>
ListSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listsubscriptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listsubscriptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listsubscriptionscommandoutput.html)

</details>
<details>
<summary>
ListSubscriptionTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listsubscriptiontargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listsubscriptiontargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listsubscriptiontargetscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutEnvironmentBlueprintConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/putenvironmentblueprintconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/putenvironmentblueprintconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/putenvironmentblueprintconfigurationcommandoutput.html)

</details>
<details>
<summary>
RejectPredictions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/rejectpredictionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/rejectpredictionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/rejectpredictionscommandoutput.html)

</details>
<details>
<summary>
RejectSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/rejectsubscriptionrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/rejectsubscriptionrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/rejectsubscriptionrequestcommandoutput.html)

</details>
<details>
<summary>
RevokeSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/revokesubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/revokesubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/revokesubscriptioncommandoutput.html)

</details>
<details>
<summary>
Search
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/searchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchcommandoutput.html)

</details>
<details>
<summary>
SearchGroupProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/searchgroupprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchgroupprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchgroupprofilescommandoutput.html)

</details>
<details>
<summary>
SearchListings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/searchlistingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchlistingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchlistingscommandoutput.html)

</details>
<details>
<summary>
SearchTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/searchtypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchtypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchtypescommandoutput.html)

</details>
<details>
<summary>
SearchUserProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/searchuserprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchuserprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/searchuserprofilescommandoutput.html)

</details>
<details>
<summary>
StartDataSourceRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/startdatasourceruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/startdatasourceruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/startdatasourceruncommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updatedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatedatasourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updatedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatedomaincommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updateenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateenvironmentcommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironmentProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updateenvironmentprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateenvironmentprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateenvironmentprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateGlossary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updateglossarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateglossarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateglossarycommandoutput.html)

</details>
<details>
<summary>
UpdateGlossaryTerm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updateglossarytermcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateglossarytermcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateglossarytermcommandoutput.html)

</details>
<details>
<summary>
UpdateGroupProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updategroupprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updategroupprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updategroupprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updateprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateprojectcommandoutput.html)

</details>
<details>
<summary>
UpdateSubscriptionGrantStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updatesubscriptiongrantstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatesubscriptiongrantstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatesubscriptiongrantstatuscommandoutput.html)

</details>
<details>
<summary>
UpdateSubscriptionRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updatesubscriptionrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatesubscriptionrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatesubscriptionrequestcommandoutput.html)

</details>
<details>
<summary>
UpdateSubscriptionTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updatesubscriptiontargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatesubscriptiontargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updatesubscriptiontargetcommandoutput.html)

</details>
<details>
<summary>
UpdateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/classes/updateuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datazone/interfaces/updateuserprofilecommandoutput.html)

</details>
