<!-- generated file, do not edit directly -->

# @aws-sdk/client-greengrass

## Description

AWS SDK for JavaScript Greengrass Client for Node.js, Browser and React Native.

AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

## Installing

To install the this package, simply type add or install @aws-sdk/client-greengrass
using your favorite package manager:

- `npm install @aws-sdk/client-greengrass`
- `yarn add @aws-sdk/client-greengrass`
- `pnpm add @aws-sdk/client-greengrass`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GreengrassClient` and
the commands you need, for example `ListGroupsCommand`:

```js
// ES5 example
const { GreengrassClient, ListGroupsCommand } = require("@aws-sdk/client-greengrass");
```

```ts
// ES6+ example
import { GreengrassClient, ListGroupsCommand } from "@aws-sdk/client-greengrass";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GreengrassClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListGroupsCommand(params);
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
import * as AWS from "@aws-sdk/client-greengrass";
const client = new AWS.Greengrass({ region: "REGION" });

// async/await.
try {
  const data = await client.listGroups(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listGroups(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listGroups(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-greengrass` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateRoleToGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/associateroletogroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/associateroletogroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/associateroletogroupcommandoutput.html)

</details>
<details>
<summary>
AssociateServiceRoleToAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/associateserviceroletoaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/associateserviceroletoaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/associateserviceroletoaccountcommandoutput.html)

</details>
<details>
<summary>
CreateConnectorDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createconnectordefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createconnectordefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createconnectordefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateConnectorDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createconnectordefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createconnectordefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createconnectordefinitionversioncommandoutput.html)

</details>
<details>
<summary>
CreateCoreDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createcoredefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createcoredefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createcoredefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateCoreDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createcoredefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createcoredefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createcoredefinitionversioncommandoutput.html)

</details>
<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createdeploymentcommandoutput.html)

</details>
<details>
<summary>
CreateDeviceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createdevicedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createdevicedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createdevicedefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateDeviceDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createdevicedefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createdevicedefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createdevicedefinitionversioncommandoutput.html)

</details>
<details>
<summary>
CreateFunctionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createfunctiondefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createfunctiondefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createfunctiondefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateFunctionDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createfunctiondefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createfunctiondefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createfunctiondefinitionversioncommandoutput.html)

</details>
<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/creategroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/creategroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/creategroupcommandoutput.html)

</details>
<details>
<summary>
CreateGroupCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/creategroupcertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/creategroupcertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/creategroupcertificateauthoritycommandoutput.html)

</details>
<details>
<summary>
CreateGroupVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/creategroupversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/creategroupversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/creategroupversioncommandoutput.html)

</details>
<details>
<summary>
CreateLoggerDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createloggerdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createloggerdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createloggerdefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateLoggerDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createloggerdefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createloggerdefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createloggerdefinitionversioncommandoutput.html)

</details>
<details>
<summary>
CreateResourceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createresourcedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createresourcedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createresourcedefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateResourceDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createresourcedefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createresourcedefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createresourcedefinitionversioncommandoutput.html)

</details>
<details>
<summary>
CreateSoftwareUpdateJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createsoftwareupdatejobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createsoftwareupdatejobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createsoftwareupdatejobcommandoutput.html)

</details>
<details>
<summary>
CreateSubscriptionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createsubscriptiondefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createsubscriptiondefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createsubscriptiondefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateSubscriptionDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/createsubscriptiondefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createsubscriptiondefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/createsubscriptiondefinitionversioncommandoutput.html)

</details>
<details>
<summary>
DeleteConnectorDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/deleteconnectordefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deleteconnectordefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deleteconnectordefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteCoreDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/deletecoredefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletecoredefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletecoredefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteDeviceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/deletedevicedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletedevicedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletedevicedefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteFunctionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/deletefunctiondefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletefunctiondefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletefunctiondefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/deletegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteLoggerDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/deleteloggerdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deleteloggerdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deleteloggerdefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteResourceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/deleteresourcedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deleteresourcedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deleteresourcedefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteSubscriptionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/deletesubscriptiondefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletesubscriptiondefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/deletesubscriptiondefinitioncommandoutput.html)

</details>
<details>
<summary>
DisassociateRoleFromGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/disassociaterolefromgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/disassociaterolefromgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/disassociaterolefromgroupcommandoutput.html)

</details>
<details>
<summary>
DisassociateServiceRoleFromAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/disassociateservicerolefromaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/disassociateservicerolefromaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/disassociateservicerolefromaccountcommandoutput.html)

</details>
<details>
<summary>
GetAssociatedRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getassociatedrolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getassociatedrolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getassociatedrolecommandoutput.html)

</details>
<details>
<summary>
GetBulkDeploymentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getbulkdeploymentstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getbulkdeploymentstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getbulkdeploymentstatuscommandoutput.html)

</details>
<details>
<summary>
GetConnectivityInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getconnectivityinfocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getconnectivityinfocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getconnectivityinfocommandoutput.html)

</details>
<details>
<summary>
GetConnectorDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getconnectordefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getconnectordefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getconnectordefinitioncommandoutput.html)

</details>
<details>
<summary>
GetConnectorDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getconnectordefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getconnectordefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getconnectordefinitionversioncommandoutput.html)

</details>
<details>
<summary>
GetCoreDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getcoredefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getcoredefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getcoredefinitioncommandoutput.html)

</details>
<details>
<summary>
GetCoreDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getcoredefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getcoredefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getcoredefinitionversioncommandoutput.html)

</details>
<details>
<summary>
GetDeploymentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getdeploymentstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getdeploymentstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getdeploymentstatuscommandoutput.html)

</details>
<details>
<summary>
GetDeviceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getdevicedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getdevicedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getdevicedefinitioncommandoutput.html)

</details>
<details>
<summary>
GetDeviceDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getdevicedefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getdevicedefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getdevicedefinitionversioncommandoutput.html)

</details>
<details>
<summary>
GetFunctionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getfunctiondefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getfunctiondefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getfunctiondefinitioncommandoutput.html)

</details>
<details>
<summary>
GetFunctionDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getfunctiondefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getfunctiondefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getfunctiondefinitionversioncommandoutput.html)

</details>
<details>
<summary>
GetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getgroupcommandoutput.html)

</details>
<details>
<summary>
GetGroupCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getgroupcertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getgroupcertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getgroupcertificateauthoritycommandoutput.html)

</details>
<details>
<summary>
GetGroupCertificateConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getgroupcertificateconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getgroupcertificateconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getgroupcertificateconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetGroupVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getgroupversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getgroupversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getgroupversioncommandoutput.html)

</details>
<details>
<summary>
GetLoggerDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getloggerdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getloggerdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getloggerdefinitioncommandoutput.html)

</details>
<details>
<summary>
GetLoggerDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getloggerdefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getloggerdefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getloggerdefinitionversioncommandoutput.html)

</details>
<details>
<summary>
GetResourceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getresourcedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getresourcedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getresourcedefinitioncommandoutput.html)

</details>
<details>
<summary>
GetResourceDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getresourcedefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getresourcedefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getresourcedefinitionversioncommandoutput.html)

</details>
<details>
<summary>
GetServiceRoleForAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getserviceroleforaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getserviceroleforaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getserviceroleforaccountcommandoutput.html)

</details>
<details>
<summary>
GetSubscriptionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getsubscriptiondefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getsubscriptiondefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getsubscriptiondefinitioncommandoutput.html)

</details>
<details>
<summary>
GetSubscriptionDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getsubscriptiondefinitionversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getsubscriptiondefinitionversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getsubscriptiondefinitionversioncommandoutput.html)

</details>
<details>
<summary>
GetThingRuntimeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/getthingruntimeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getthingruntimeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/getthingruntimeconfigurationcommandoutput.html)

</details>
<details>
<summary>
ListBulkDeploymentDetailedReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listbulkdeploymentdetailedreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listbulkdeploymentdetailedreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listbulkdeploymentdetailedreportscommandoutput.html)

</details>
<details>
<summary>
ListBulkDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listbulkdeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listbulkdeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listbulkdeploymentscommandoutput.html)

</details>
<details>
<summary>
ListConnectorDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listconnectordefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listconnectordefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listconnectordefinitionscommandoutput.html)

</details>
<details>
<summary>
ListConnectorDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listconnectordefinitionversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listconnectordefinitionversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listconnectordefinitionversionscommandoutput.html)

</details>
<details>
<summary>
ListCoreDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listcoredefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listcoredefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listcoredefinitionscommandoutput.html)

</details>
<details>
<summary>
ListCoreDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listcoredefinitionversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listcoredefinitionversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listcoredefinitionversionscommandoutput.html)

</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listdeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listdeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listdeploymentscommandoutput.html)

</details>
<details>
<summary>
ListDeviceDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listdevicedefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listdevicedefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listdevicedefinitionscommandoutput.html)

</details>
<details>
<summary>
ListDeviceDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listdevicedefinitionversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listdevicedefinitionversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listdevicedefinitionversionscommandoutput.html)

</details>
<details>
<summary>
ListFunctionDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listfunctiondefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listfunctiondefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listfunctiondefinitionscommandoutput.html)

</details>
<details>
<summary>
ListFunctionDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listfunctiondefinitionversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listfunctiondefinitionversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listfunctiondefinitionversionscommandoutput.html)

</details>
<details>
<summary>
ListGroupCertificateAuthorities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listgroupcertificateauthoritiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listgroupcertificateauthoritiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listgroupcertificateauthoritiescommandoutput.html)

</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listgroupscommandoutput.html)

</details>
<details>
<summary>
ListGroupVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listgroupversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listgroupversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listgroupversionscommandoutput.html)

</details>
<details>
<summary>
ListLoggerDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listloggerdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listloggerdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listloggerdefinitionscommandoutput.html)

</details>
<details>
<summary>
ListLoggerDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listloggerdefinitionversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listloggerdefinitionversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listloggerdefinitionversionscommandoutput.html)

</details>
<details>
<summary>
ListResourceDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listresourcedefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listresourcedefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listresourcedefinitionscommandoutput.html)

</details>
<details>
<summary>
ListResourceDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listresourcedefinitionversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listresourcedefinitionversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listresourcedefinitionversionscommandoutput.html)

</details>
<details>
<summary>
ListSubscriptionDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listsubscriptiondefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listsubscriptiondefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listsubscriptiondefinitionscommandoutput.html)

</details>
<details>
<summary>
ListSubscriptionDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listsubscriptiondefinitionversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listsubscriptiondefinitionversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listsubscriptiondefinitionversionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ResetDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/resetdeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/resetdeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/resetdeploymentscommandoutput.html)

</details>
<details>
<summary>
StartBulkDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/startbulkdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/startbulkdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/startbulkdeploymentcommandoutput.html)

</details>
<details>
<summary>
StopBulkDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/stopbulkdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/stopbulkdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/stopbulkdeploymentcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateConnectivityInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updateconnectivityinfocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updateconnectivityinfocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updateconnectivityinfocommandoutput.html)

</details>
<details>
<summary>
UpdateConnectorDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updateconnectordefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updateconnectordefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updateconnectordefinitioncommandoutput.html)

</details>
<details>
<summary>
UpdateCoreDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updatecoredefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatecoredefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatecoredefinitioncommandoutput.html)

</details>
<details>
<summary>
UpdateDeviceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updatedevicedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatedevicedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatedevicedefinitioncommandoutput.html)

</details>
<details>
<summary>
UpdateFunctionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updatefunctiondefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatefunctiondefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatefunctiondefinitioncommandoutput.html)

</details>
<details>
<summary>
UpdateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updategroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updategroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updategroupcommandoutput.html)

</details>
<details>
<summary>
UpdateGroupCertificateConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updategroupcertificateconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updategroupcertificateconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updategroupcertificateconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateLoggerDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updateloggerdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updateloggerdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updateloggerdefinitioncommandoutput.html)

</details>
<details>
<summary>
UpdateResourceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updateresourcedefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updateresourcedefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updateresourcedefinitioncommandoutput.html)

</details>
<details>
<summary>
UpdateSubscriptionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updatesubscriptiondefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatesubscriptiondefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatesubscriptiondefinitioncommandoutput.html)

</details>
<details>
<summary>
UpdateThingRuntimeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/classes/updatethingruntimeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatethingruntimeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-greengrass/interfaces/updatethingruntimeconfigurationcommandoutput.html)

</details>
