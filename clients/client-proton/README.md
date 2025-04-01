<!-- generated file, do not edit directly -->

# @aws-sdk/client-proton

## Description

AWS SDK for JavaScript Proton Client for Node.js, Browser and React Native.

<p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the
<a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton
service.</p>
<p>The documentation for each action shows the Query API request parameters and the XML response.</p>
<p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User
Guide</a>.</p>
<p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide
standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in
turn, select from the available service templates to automate their application or service deployments.</p>
<p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need
permissions to use all of the listed API operations.</p>
<p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To
monitor their applications that are running on Proton, developers need permissions to the service
<i>create</i>, <i>list</i>, <i>update</i> and <i>delete</i>
API operations and the service instance <i>list</i> and <i>update</i> API
operations.</p>
<p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p>
<p>
<b>Ensuring Idempotency</b>
</p>
<p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows
of the operation are complete. Operations might also time out or encounter other server issues before they're
complete, even if the request already returned a result. This might make it difficult to determine whether the
request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation
completes successfully. However, if the original request and the subsequent retries are successful, the operation
occurs multiple times. This means that you might create more resources than you intended.</p>
<p>
<i>Idempotency</i> ensures that an API request action completes no more than one time. With an
idempotent request, if the original request action completes successfully, any subsequent retries complete
successfully without performing any further actions. However, the result might contain updated information, such as
the current creation status.</p>
<p>The following lists of APIs are grouped according to methods that ensure idempotency.</p>
<p>
<b>Idempotent create APIs with a client token</b>
</p>
<p>The API actions in this list support idempotency with the use of a <i>client token</i>. The
corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique,
case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions,
specify a client token in the request. We recommend that you <i>don't</i> reuse the same client token
for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically
provided by SDKs.</p>
<p>Given a request action that has succeeded:</p>
<p>If you retry the request using the same client token and the same parameters, the retry succeeds without
performing any further actions other than returning the original resource detail data in the response.</p>
<p>If you retry the request using the same client token, but one or more of the parameters are different, the retry
throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p>
<p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new
resource is created.</p>
<p>If the original resource is deleted and you retry the request, a new resource is created.</p>
<p>Idempotent create APIs with a client token:</p>
<ul>
<li>
<p>CreateEnvironmentTemplateVersion</p>
</li>
<li>
<p>CreateServiceTemplateVersion</p>
</li>
<li>
<p>CreateEnvironmentAccountConnection</p>
</li>
</ul>
<p>
<b>Idempotent create APIs</b>
</p>
<p>Given a request action that has succeeded:</p>
<p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been
modified, the retry succeeds without performing any further actions other than returning the original resource detail
data in the response.</p>
<p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p>
<p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an
<code>IdempotentParameterMismatch</code> error.</p>
<p>Idempotent create APIs:</p>
<ul>
<li>
<p>CreateEnvironmentTemplate</p>
</li>
<li>
<p>CreateServiceTemplate</p>
</li>
<li>
<p>CreateEnvironment</p>
</li>
<li>
<p>CreateService</p>
</li>
</ul>
<p>
<b>Idempotent delete APIs</b>
</p>
<p>Given a request action that has succeeded:</p>
<p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in
the response.</p>
<p>If you retry and the resource doesn't exist, the response is empty.</p>
<p>In both cases, the retry succeeds.</p>
<p>Idempotent delete APIs:</p>
<ul>
<li>
<p>DeleteEnvironmentTemplate</p>
</li>
<li>
<p>DeleteEnvironmentTemplateVersion</p>
</li>
<li>
<p>DeleteServiceTemplate</p>
</li>
<li>
<p>DeleteServiceTemplateVersion</p>
</li>
<li>
<p>DeleteEnvironmentAccountConnection</p>
</li>
</ul>
<p>
<b>Asynchronous idempotent delete APIs</b>
</p>
<p>Given a request action that has succeeded:</p>
<p>If you retry the request with an API from this group, if the original request delete operation status is
<code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any
further actions.</p>
<p>If the original request delete operation is complete, a retry returns an empty response.</p>
<p>Asynchronous idempotent delete APIs:</p>
<ul>
<li>
<p>DeleteEnvironment</p>
</li>
<li>
<p>DeleteService</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-proton
using your favorite package manager:

- `npm install @aws-sdk/client-proton`
- `yarn add @aws-sdk/client-proton`
- `pnpm add @aws-sdk/client-proton`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ProtonClient` and
the commands you need, for example `ListComponentsCommand`:

```js
// ES5 example
const { ProtonClient, ListComponentsCommand } = require("@aws-sdk/client-proton");
```

```ts
// ES6+ example
import { ProtonClient, ListComponentsCommand } from "@aws-sdk/client-proton";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ProtonClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListComponentsCommand(params);
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
import * as AWS from "@aws-sdk/client-proton";
const client = new AWS.Proton({ region: "REGION" });

// async/await.
try {
  const data = await client.listComponents(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listComponents(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listComponents(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-proton` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/AcceptEnvironmentAccountConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/AcceptEnvironmentAccountConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/AcceptEnvironmentAccountConnectionCommandOutput/)

</details>
<details>
<summary>
CancelComponentDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CancelComponentDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CancelComponentDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CancelComponentDeploymentCommandOutput/)

</details>
<details>
<summary>
CancelEnvironmentDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CancelEnvironmentDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CancelEnvironmentDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CancelEnvironmentDeploymentCommandOutput/)

</details>
<details>
<summary>
CancelServiceInstanceDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CancelServiceInstanceDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CancelServiceInstanceDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CancelServiceInstanceDeploymentCommandOutput/)

</details>
<details>
<summary>
CancelServicePipelineDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CancelServicePipelineDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CancelServicePipelineDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CancelServicePipelineDeploymentCommandOutput/)

</details>
<details>
<summary>
CreateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateComponentCommandOutput/)

</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateEnvironmentCommandOutput/)

</details>
<details>
<summary>
CreateEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateEnvironmentAccountConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateEnvironmentAccountConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateEnvironmentAccountConnectionCommandOutput/)

</details>
<details>
<summary>
CreateEnvironmentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateEnvironmentTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateEnvironmentTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateEnvironmentTemplateCommandOutput/)

</details>
<details>
<summary>
CreateEnvironmentTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateEnvironmentTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateEnvironmentTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateEnvironmentTemplateVersionCommandOutput/)

</details>
<details>
<summary>
CreateRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateRepositoryCommandOutput/)

</details>
<details>
<summary>
CreateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceCommandOutput/)

</details>
<details>
<summary>
CreateServiceInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateServiceInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceInstanceCommandOutput/)

</details>
<details>
<summary>
CreateServiceSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateServiceSyncConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceSyncConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceSyncConfigCommandOutput/)

</details>
<details>
<summary>
CreateServiceTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateServiceTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceTemplateCommandOutput/)

</details>
<details>
<summary>
CreateServiceTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateServiceTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateServiceTemplateVersionCommandOutput/)

</details>
<details>
<summary>
CreateTemplateSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/CreateTemplateSyncConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateTemplateSyncConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/CreateTemplateSyncConfigCommandOutput/)

</details>
<details>
<summary>
DeleteComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteComponentCommandOutput/)

</details>
<details>
<summary>
DeleteDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteDeploymentCommandOutput/)

</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteEnvironmentCommandOutput/)

</details>
<details>
<summary>
DeleteEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteEnvironmentAccountConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteEnvironmentAccountConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteEnvironmentAccountConnectionCommandOutput/)

</details>
<details>
<summary>
DeleteEnvironmentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteEnvironmentTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteEnvironmentTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteEnvironmentTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteEnvironmentTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteEnvironmentTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteEnvironmentTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteEnvironmentTemplateVersionCommandOutput/)

</details>
<details>
<summary>
DeleteRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteRepositoryCommandOutput/)

</details>
<details>
<summary>
DeleteService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteServiceCommandOutput/)

</details>
<details>
<summary>
DeleteServiceSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteServiceSyncConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteServiceSyncConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteServiceSyncConfigCommandOutput/)

</details>
<details>
<summary>
DeleteServiceTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteServiceTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteServiceTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteServiceTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteServiceTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteServiceTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteServiceTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteServiceTemplateVersionCommandOutput/)

</details>
<details>
<summary>
DeleteTemplateSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/DeleteTemplateSyncConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteTemplateSyncConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/DeleteTemplateSyncConfigCommandOutput/)

</details>
<details>
<summary>
GetAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetAccountSettingsCommandOutput/)

</details>
<details>
<summary>
GetComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetComponentCommandOutput/)

</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetDeploymentCommandOutput/)

</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetEnvironmentCommandOutput/)

</details>
<details>
<summary>
GetEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetEnvironmentAccountConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetEnvironmentAccountConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetEnvironmentAccountConnectionCommandOutput/)

</details>
<details>
<summary>
GetEnvironmentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetEnvironmentTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetEnvironmentTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetEnvironmentTemplateCommandOutput/)

</details>
<details>
<summary>
GetEnvironmentTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetEnvironmentTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetEnvironmentTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetEnvironmentTemplateVersionCommandOutput/)

</details>
<details>
<summary>
GetRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetRepositoryCommandOutput/)

</details>
<details>
<summary>
GetRepositorySyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetRepositorySyncStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetRepositorySyncStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetRepositorySyncStatusCommandOutput/)

</details>
<details>
<summary>
GetResourcesSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetResourcesSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetResourcesSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetResourcesSummaryCommandOutput/)

</details>
<details>
<summary>
GetService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceCommandOutput/)

</details>
<details>
<summary>
GetServiceInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetServiceInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceInstanceCommandOutput/)

</details>
<details>
<summary>
GetServiceInstanceSyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetServiceInstanceSyncStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceInstanceSyncStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceInstanceSyncStatusCommandOutput/)

</details>
<details>
<summary>
GetServiceSyncBlockerSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetServiceSyncBlockerSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceSyncBlockerSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceSyncBlockerSummaryCommandOutput/)

</details>
<details>
<summary>
GetServiceSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetServiceSyncConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceSyncConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceSyncConfigCommandOutput/)

</details>
<details>
<summary>
GetServiceTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetServiceTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceTemplateCommandOutput/)

</details>
<details>
<summary>
GetServiceTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetServiceTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetServiceTemplateVersionCommandOutput/)

</details>
<details>
<summary>
GetTemplateSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetTemplateSyncConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetTemplateSyncConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetTemplateSyncConfigCommandOutput/)

</details>
<details>
<summary>
GetTemplateSyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/GetTemplateSyncStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetTemplateSyncStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/GetTemplateSyncStatusCommandOutput/)

</details>
<details>
<summary>
ListComponentOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListComponentOutputsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListComponentOutputsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListComponentOutputsCommandOutput/)

</details>
<details>
<summary>
ListComponentProvisionedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListComponentProvisionedResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListComponentProvisionedResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListComponentProvisionedResourcesCommandOutput/)

</details>
<details>
<summary>
ListComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListComponentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListComponentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListComponentsCommandOutput/)

</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListDeploymentsCommandOutput/)

</details>
<details>
<summary>
ListEnvironmentAccountConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListEnvironmentAccountConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentAccountConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentAccountConnectionsCommandOutput/)

</details>
<details>
<summary>
ListEnvironmentOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListEnvironmentOutputsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentOutputsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentOutputsCommandOutput/)

</details>
<details>
<summary>
ListEnvironmentProvisionedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListEnvironmentProvisionedResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentProvisionedResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentProvisionedResourcesCommandOutput/)

</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListEnvironmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentsCommandOutput/)

</details>
<details>
<summary>
ListEnvironmentTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListEnvironmentTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentTemplatesCommandOutput/)

</details>
<details>
<summary>
ListEnvironmentTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListEnvironmentTemplateVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentTemplateVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListEnvironmentTemplateVersionsCommandOutput/)

</details>
<details>
<summary>
ListRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListRepositoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListRepositoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListRepositoriesCommandOutput/)

</details>
<details>
<summary>
ListRepositorySyncDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListRepositorySyncDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListRepositorySyncDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListRepositorySyncDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListServiceInstanceOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListServiceInstanceOutputsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceInstanceOutputsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceInstanceOutputsCommandOutput/)

</details>
<details>
<summary>
ListServiceInstanceProvisionedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListServiceInstanceProvisionedResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceInstanceProvisionedResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceInstanceProvisionedResourcesCommandOutput/)

</details>
<details>
<summary>
ListServiceInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListServiceInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceInstancesCommandOutput/)

</details>
<details>
<summary>
ListServicePipelineOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListServicePipelineOutputsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServicePipelineOutputsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServicePipelineOutputsCommandOutput/)

</details>
<details>
<summary>
ListServicePipelineProvisionedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListServicePipelineProvisionedResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServicePipelineProvisionedResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServicePipelineProvisionedResourcesCommandOutput/)

</details>
<details>
<summary>
ListServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListServicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServicesCommandOutput/)

</details>
<details>
<summary>
ListServiceTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListServiceTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceTemplatesCommandOutput/)

</details>
<details>
<summary>
ListServiceTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListServiceTemplateVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceTemplateVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListServiceTemplateVersionsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
NotifyResourceDeploymentStatusChange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/NotifyResourceDeploymentStatusChangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/NotifyResourceDeploymentStatusChangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/NotifyResourceDeploymentStatusChangeCommandOutput/)

</details>
<details>
<summary>
RejectEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/RejectEnvironmentAccountConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/RejectEnvironmentAccountConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/RejectEnvironmentAccountConnectionCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateAccountSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateComponentCommandOutput/)

</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateEnvironmentCommandOutput/)

</details>
<details>
<summary>
UpdateEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateEnvironmentAccountConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateEnvironmentAccountConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateEnvironmentAccountConnectionCommandOutput/)

</details>
<details>
<summary>
UpdateEnvironmentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateEnvironmentTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateEnvironmentTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateEnvironmentTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateEnvironmentTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateEnvironmentTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateEnvironmentTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateEnvironmentTemplateVersionCommandOutput/)

</details>
<details>
<summary>
UpdateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceCommandOutput/)

</details>
<details>
<summary>
UpdateServiceInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateServiceInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceInstanceCommandOutput/)

</details>
<details>
<summary>
UpdateServicePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateServicePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServicePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServicePipelineCommandOutput/)

</details>
<details>
<summary>
UpdateServiceSyncBlocker
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateServiceSyncBlockerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceSyncBlockerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceSyncBlockerCommandOutput/)

</details>
<details>
<summary>
UpdateServiceSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateServiceSyncConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceSyncConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceSyncConfigCommandOutput/)

</details>
<details>
<summary>
UpdateServiceTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateServiceTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateServiceTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateServiceTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateServiceTemplateVersionCommandOutput/)

</details>
<details>
<summary>
UpdateTemplateSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/proton/command/UpdateTemplateSyncConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateTemplateSyncConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-proton/Interface/UpdateTemplateSyncConfigCommandOutput/)

</details>
