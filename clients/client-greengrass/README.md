<!-- generated file, do not edit directly -->

# @aws-sdk/client-greengrass

## Description

AWS SDK for JavaScript Greengrass Client for Node.js, Browser and React Native.

AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

## Installing

To install this package, simply type add or install @aws-sdk/client-greengrass
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/AssociateRoleToGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/AssociateRoleToGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/AssociateRoleToGroupCommandOutput/)

</details>
<details>
<summary>
AssociateServiceRoleToAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/AssociateServiceRoleToAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/AssociateServiceRoleToAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/AssociateServiceRoleToAccountCommandOutput/)

</details>
<details>
<summary>
CreateConnectorDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateConnectorDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateConnectorDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateConnectorDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateConnectorDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateConnectorDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateConnectorDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateConnectorDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
CreateCoreDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateCoreDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateCoreDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateCoreDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateCoreDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateCoreDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateCoreDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateCoreDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateDeploymentCommandOutput/)

</details>
<details>
<summary>
CreateDeviceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateDeviceDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateDeviceDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateDeviceDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateDeviceDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateDeviceDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateDeviceDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateDeviceDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
CreateFunctionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateFunctionDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateFunctionDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateFunctionDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateFunctionDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateFunctionDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateFunctionDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateFunctionDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateGroupCommandOutput/)

</details>
<details>
<summary>
CreateGroupCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateGroupCertificateAuthorityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateGroupCertificateAuthorityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateGroupCertificateAuthorityCommandOutput/)

</details>
<details>
<summary>
CreateGroupVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateGroupVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateGroupVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateGroupVersionCommandOutput/)

</details>
<details>
<summary>
CreateLoggerDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateLoggerDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateLoggerDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateLoggerDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateLoggerDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateLoggerDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateLoggerDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateLoggerDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
CreateResourceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateResourceDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateResourceDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateResourceDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateResourceDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateResourceDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateResourceDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateResourceDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
CreateSoftwareUpdateJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateSoftwareUpdateJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateSoftwareUpdateJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateSoftwareUpdateJobCommandOutput/)

</details>
<details>
<summary>
CreateSubscriptionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateSubscriptionDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateSubscriptionDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateSubscriptionDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateSubscriptionDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/CreateSubscriptionDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateSubscriptionDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/CreateSubscriptionDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
DeleteConnectorDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DeleteConnectorDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteConnectorDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteConnectorDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteCoreDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DeleteCoreDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteCoreDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteCoreDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteDeviceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DeleteDeviceDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteDeviceDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteDeviceDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteFunctionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DeleteFunctionDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteFunctionDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteFunctionDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DeleteGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteGroupCommandOutput/)

</details>
<details>
<summary>
DeleteLoggerDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DeleteLoggerDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteLoggerDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteLoggerDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteResourceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DeleteResourceDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteResourceDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteResourceDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteSubscriptionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DeleteSubscriptionDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteSubscriptionDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DeleteSubscriptionDefinitionCommandOutput/)

</details>
<details>
<summary>
DisassociateRoleFromGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DisassociateRoleFromGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DisassociateRoleFromGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DisassociateRoleFromGroupCommandOutput/)

</details>
<details>
<summary>
DisassociateServiceRoleFromAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/DisassociateServiceRoleFromAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DisassociateServiceRoleFromAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/DisassociateServiceRoleFromAccountCommandOutput/)

</details>
<details>
<summary>
GetAssociatedRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetAssociatedRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetAssociatedRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetAssociatedRoleCommandOutput/)

</details>
<details>
<summary>
GetBulkDeploymentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetBulkDeploymentStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetBulkDeploymentStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetBulkDeploymentStatusCommandOutput/)

</details>
<details>
<summary>
GetConnectivityInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetConnectivityInfoCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetConnectivityInfoCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetConnectivityInfoCommandOutput/)

</details>
<details>
<summary>
GetConnectorDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetConnectorDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetConnectorDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetConnectorDefinitionCommandOutput/)

</details>
<details>
<summary>
GetConnectorDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetConnectorDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetConnectorDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetConnectorDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
GetCoreDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetCoreDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetCoreDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetCoreDefinitionCommandOutput/)

</details>
<details>
<summary>
GetCoreDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetCoreDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetCoreDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetCoreDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
GetDeploymentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetDeploymentStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetDeploymentStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetDeploymentStatusCommandOutput/)

</details>
<details>
<summary>
GetDeviceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetDeviceDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetDeviceDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetDeviceDefinitionCommandOutput/)

</details>
<details>
<summary>
GetDeviceDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetDeviceDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetDeviceDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetDeviceDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
GetFunctionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetFunctionDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetFunctionDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetFunctionDefinitionCommandOutput/)

</details>
<details>
<summary>
GetFunctionDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetFunctionDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetFunctionDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetFunctionDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
GetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetGroupCommandOutput/)

</details>
<details>
<summary>
GetGroupCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetGroupCertificateAuthorityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetGroupCertificateAuthorityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetGroupCertificateAuthorityCommandOutput/)

</details>
<details>
<summary>
GetGroupCertificateConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetGroupCertificateConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetGroupCertificateConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetGroupCertificateConfigurationCommandOutput/)

</details>
<details>
<summary>
GetGroupVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetGroupVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetGroupVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetGroupVersionCommandOutput/)

</details>
<details>
<summary>
GetLoggerDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetLoggerDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetLoggerDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetLoggerDefinitionCommandOutput/)

</details>
<details>
<summary>
GetLoggerDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetLoggerDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetLoggerDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetLoggerDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
GetResourceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetResourceDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetResourceDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetResourceDefinitionCommandOutput/)

</details>
<details>
<summary>
GetResourceDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetResourceDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetResourceDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetResourceDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
GetServiceRoleForAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetServiceRoleForAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetServiceRoleForAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetServiceRoleForAccountCommandOutput/)

</details>
<details>
<summary>
GetSubscriptionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetSubscriptionDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetSubscriptionDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetSubscriptionDefinitionCommandOutput/)

</details>
<details>
<summary>
GetSubscriptionDefinitionVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetSubscriptionDefinitionVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetSubscriptionDefinitionVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetSubscriptionDefinitionVersionCommandOutput/)

</details>
<details>
<summary>
GetThingRuntimeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/GetThingRuntimeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetThingRuntimeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/GetThingRuntimeConfigurationCommandOutput/)

</details>
<details>
<summary>
ListBulkDeploymentDetailedReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListBulkDeploymentDetailedReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListBulkDeploymentDetailedReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListBulkDeploymentDetailedReportsCommandOutput/)

</details>
<details>
<summary>
ListBulkDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListBulkDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListBulkDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListBulkDeploymentsCommandOutput/)

</details>
<details>
<summary>
ListConnectorDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListConnectorDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListConnectorDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListConnectorDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListConnectorDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListConnectorDefinitionVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListConnectorDefinitionVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListConnectorDefinitionVersionsCommandOutput/)

</details>
<details>
<summary>
ListCoreDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListCoreDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListCoreDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListCoreDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListCoreDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListCoreDefinitionVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListCoreDefinitionVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListCoreDefinitionVersionsCommandOutput/)

</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListDeploymentsCommandOutput/)

</details>
<details>
<summary>
ListDeviceDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListDeviceDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListDeviceDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListDeviceDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListDeviceDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListDeviceDefinitionVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListDeviceDefinitionVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListDeviceDefinitionVersionsCommandOutput/)

</details>
<details>
<summary>
ListFunctionDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListFunctionDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListFunctionDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListFunctionDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListFunctionDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListFunctionDefinitionVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListFunctionDefinitionVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListFunctionDefinitionVersionsCommandOutput/)

</details>
<details>
<summary>
ListGroupCertificateAuthorities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListGroupCertificateAuthoritiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListGroupCertificateAuthoritiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListGroupCertificateAuthoritiesCommandOutput/)

</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListGroupsCommandOutput/)

</details>
<details>
<summary>
ListGroupVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListGroupVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListGroupVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListGroupVersionsCommandOutput/)

</details>
<details>
<summary>
ListLoggerDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListLoggerDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListLoggerDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListLoggerDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListLoggerDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListLoggerDefinitionVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListLoggerDefinitionVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListLoggerDefinitionVersionsCommandOutput/)

</details>
<details>
<summary>
ListResourceDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListResourceDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListResourceDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListResourceDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListResourceDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListResourceDefinitionVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListResourceDefinitionVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListResourceDefinitionVersionsCommandOutput/)

</details>
<details>
<summary>
ListSubscriptionDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListSubscriptionDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListSubscriptionDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListSubscriptionDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListSubscriptionDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListSubscriptionDefinitionVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListSubscriptionDefinitionVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListSubscriptionDefinitionVersionsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ResetDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/ResetDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ResetDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/ResetDeploymentsCommandOutput/)

</details>
<details>
<summary>
StartBulkDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/StartBulkDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/StartBulkDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/StartBulkDeploymentCommandOutput/)

</details>
<details>
<summary>
StopBulkDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/StopBulkDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/StopBulkDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/StopBulkDeploymentCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateConnectivityInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateConnectivityInfoCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateConnectivityInfoCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateConnectivityInfoCommandOutput/)

</details>
<details>
<summary>
UpdateConnectorDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateConnectorDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateConnectorDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateConnectorDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateCoreDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateCoreDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateCoreDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateCoreDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateDeviceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateDeviceDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateDeviceDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateDeviceDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateFunctionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateFunctionDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateFunctionDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateFunctionDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateGroupCommandOutput/)

</details>
<details>
<summary>
UpdateGroupCertificateConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateGroupCertificateConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateGroupCertificateConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateGroupCertificateConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateLoggerDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateLoggerDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateLoggerDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateLoggerDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateResourceDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateResourceDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateResourceDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateResourceDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateSubscriptionDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateSubscriptionDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateSubscriptionDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateSubscriptionDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateThingRuntimeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrass/command/UpdateThingRuntimeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateThingRuntimeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrass/Interface/UpdateThingRuntimeConfigurationCommandOutput/)

</details>
