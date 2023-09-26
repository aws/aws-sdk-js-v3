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

To install the this package, simply type add or install @aws-sdk/client-proton
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/acceptenvironmentaccountconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/acceptenvironmentaccountconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/acceptenvironmentaccountconnectioncommandoutput.html)

</details>
<details>
<summary>
CancelComponentDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/cancelcomponentdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/cancelcomponentdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/cancelcomponentdeploymentcommandoutput.html)

</details>
<details>
<summary>
CancelEnvironmentDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/cancelenvironmentdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/cancelenvironmentdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/cancelenvironmentdeploymentcommandoutput.html)

</details>
<details>
<summary>
CancelServiceInstanceDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/cancelserviceinstancedeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/cancelserviceinstancedeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/cancelserviceinstancedeploymentcommandoutput.html)

</details>
<details>
<summary>
CancelServicePipelineDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/cancelservicepipelinedeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/cancelservicepipelinedeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/cancelservicepipelinedeploymentcommandoutput.html)

</details>
<details>
<summary>
CreateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createcomponentcommandoutput.html)

</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createenvironmentcommandoutput.html)

</details>
<details>
<summary>
CreateEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createenvironmentaccountconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createenvironmentaccountconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createenvironmentaccountconnectioncommandoutput.html)

</details>
<details>
<summary>
CreateEnvironmentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createenvironmenttemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createenvironmenttemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createenvironmenttemplatecommandoutput.html)

</details>
<details>
<summary>
CreateEnvironmentTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createenvironmenttemplateversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createenvironmenttemplateversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createenvironmenttemplateversioncommandoutput.html)

</details>
<details>
<summary>
CreateRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createrepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createrepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createrepositorycommandoutput.html)

</details>
<details>
<summary>
CreateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createservicecommandoutput.html)

</details>
<details>
<summary>
CreateServiceInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createserviceinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createserviceinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createserviceinstancecommandoutput.html)

</details>
<details>
<summary>
CreateServiceSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createservicesyncconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createservicesyncconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createservicesyncconfigcommandoutput.html)

</details>
<details>
<summary>
CreateServiceTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createservicetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createservicetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createservicetemplatecommandoutput.html)

</details>
<details>
<summary>
CreateServiceTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createservicetemplateversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createservicetemplateversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createservicetemplateversioncommandoutput.html)

</details>
<details>
<summary>
CreateTemplateSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/createtemplatesyncconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createtemplatesyncconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/createtemplatesyncconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deletecomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deletecomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deletecomponentcommandoutput.html)

</details>
<details>
<summary>
DeleteDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deletedeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deletedeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deletedeploymentcommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleteenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteenvironmentcommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleteenvironmentaccountconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteenvironmentaccountconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteenvironmentaccountconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironmentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleteenvironmenttemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteenvironmenttemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteenvironmenttemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironmentTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleteenvironmenttemplateversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteenvironmenttemplateversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteenvironmenttemplateversioncommandoutput.html)

</details>
<details>
<summary>
DeleteRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleterepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleterepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleterepositorycommandoutput.html)

</details>
<details>
<summary>
DeleteService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleteservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteservicecommandoutput.html)

</details>
<details>
<summary>
DeleteServiceSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleteservicesyncconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteservicesyncconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteservicesyncconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteServiceTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleteservicetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteservicetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteservicetemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteServiceTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deleteservicetemplateversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteservicetemplateversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deleteservicetemplateversioncommandoutput.html)

</details>
<details>
<summary>
DeleteTemplateSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/deletetemplatesyncconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deletetemplatesyncconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/deletetemplatesyncconfigcommandoutput.html)

</details>
<details>
<summary>
GetAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getaccountsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getaccountsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getaccountsettingscommandoutput.html)

</details>
<details>
<summary>
GetComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getcomponentcommandoutput.html)

</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getdeploymentcommandoutput.html)

</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getenvironmentcommandoutput.html)

</details>
<details>
<summary>
GetEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getenvironmentaccountconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getenvironmentaccountconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getenvironmentaccountconnectioncommandoutput.html)

</details>
<details>
<summary>
GetEnvironmentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getenvironmenttemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getenvironmenttemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getenvironmenttemplatecommandoutput.html)

</details>
<details>
<summary>
GetEnvironmentTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getenvironmenttemplateversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getenvironmenttemplateversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getenvironmenttemplateversioncommandoutput.html)

</details>
<details>
<summary>
GetRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getrepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getrepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getrepositorycommandoutput.html)

</details>
<details>
<summary>
GetRepositorySyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getrepositorysyncstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getrepositorysyncstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getrepositorysyncstatuscommandoutput.html)

</details>
<details>
<summary>
GetResourcesSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getresourcessummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getresourcessummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getresourcessummarycommandoutput.html)

</details>
<details>
<summary>
GetService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicecommandoutput.html)

</details>
<details>
<summary>
GetServiceInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getserviceinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getserviceinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getserviceinstancecommandoutput.html)

</details>
<details>
<summary>
GetServiceInstanceSyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getserviceinstancesyncstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getserviceinstancesyncstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getserviceinstancesyncstatuscommandoutput.html)

</details>
<details>
<summary>
GetServiceSyncBlockerSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getservicesyncblockersummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicesyncblockersummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicesyncblockersummarycommandoutput.html)

</details>
<details>
<summary>
GetServiceSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getservicesyncconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicesyncconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicesyncconfigcommandoutput.html)

</details>
<details>
<summary>
GetServiceTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getservicetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicetemplatecommandoutput.html)

</details>
<details>
<summary>
GetServiceTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/getservicetemplateversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicetemplateversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/getservicetemplateversioncommandoutput.html)

</details>
<details>
<summary>
GetTemplateSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/gettemplatesyncconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/gettemplatesyncconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/gettemplatesyncconfigcommandoutput.html)

</details>
<details>
<summary>
GetTemplateSyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/gettemplatesyncstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/gettemplatesyncstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/gettemplatesyncstatuscommandoutput.html)

</details>
<details>
<summary>
ListComponentOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listcomponentoutputscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listcomponentoutputscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listcomponentoutputscommandoutput.html)

</details>
<details>
<summary>
ListComponentProvisionedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listcomponentprovisionedresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listcomponentprovisionedresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listcomponentprovisionedresourcescommandoutput.html)

</details>
<details>
<summary>
ListComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listcomponentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listcomponentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listcomponentscommandoutput.html)

</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listdeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listdeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listdeploymentscommandoutput.html)

</details>
<details>
<summary>
ListEnvironmentAccountConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listenvironmentaccountconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmentaccountconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmentaccountconnectionscommandoutput.html)

</details>
<details>
<summary>
ListEnvironmentOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listenvironmentoutputscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmentoutputscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmentoutputscommandoutput.html)

</details>
<details>
<summary>
ListEnvironmentProvisionedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listenvironmentprovisionedresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmentprovisionedresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmentprovisionedresourcescommandoutput.html)

</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listenvironmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmentscommandoutput.html)

</details>
<details>
<summary>
ListEnvironmentTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listenvironmenttemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmenttemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmenttemplatescommandoutput.html)

</details>
<details>
<summary>
ListEnvironmentTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listenvironmenttemplateversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmenttemplateversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listenvironmenttemplateversionscommandoutput.html)

</details>
<details>
<summary>
ListRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listrepositoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listrepositoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listrepositoriescommandoutput.html)

</details>
<details>
<summary>
ListRepositorySyncDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listrepositorysyncdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listrepositorysyncdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listrepositorysyncdefinitionscommandoutput.html)

</details>
<details>
<summary>
ListServiceInstanceOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listserviceinstanceoutputscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listserviceinstanceoutputscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listserviceinstanceoutputscommandoutput.html)

</details>
<details>
<summary>
ListServiceInstanceProvisionedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listserviceinstanceprovisionedresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listserviceinstanceprovisionedresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listserviceinstanceprovisionedresourcescommandoutput.html)

</details>
<details>
<summary>
ListServiceInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listserviceinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listserviceinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listserviceinstancescommandoutput.html)

</details>
<details>
<summary>
ListServicePipelineOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listservicepipelineoutputscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicepipelineoutputscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicepipelineoutputscommandoutput.html)

</details>
<details>
<summary>
ListServicePipelineProvisionedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listservicepipelineprovisionedresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicepipelineprovisionedresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicepipelineprovisionedresourcescommandoutput.html)

</details>
<details>
<summary>
ListServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listservicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicescommandoutput.html)

</details>
<details>
<summary>
ListServiceTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listservicetemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicetemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicetemplatescommandoutput.html)

</details>
<details>
<summary>
ListServiceTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listservicetemplateversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicetemplateversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listservicetemplateversionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
NotifyResourceDeploymentStatusChange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/notifyresourcedeploymentstatuschangecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/notifyresourcedeploymentstatuschangecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/notifyresourcedeploymentstatuschangecommandoutput.html)

</details>
<details>
<summary>
RejectEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/rejectenvironmentaccountconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/rejectenvironmentaccountconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/rejectenvironmentaccountconnectioncommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateaccountsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateaccountsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateaccountsettingscommandoutput.html)

</details>
<details>
<summary>
UpdateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updatecomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updatecomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updatecomponentcommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateenvironmentcommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironmentAccountConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateenvironmentaccountconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateenvironmentaccountconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateenvironmentaccountconnectioncommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironmentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateenvironmenttemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateenvironmenttemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateenvironmenttemplatecommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironmentTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateenvironmenttemplateversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateenvironmenttemplateversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateenvironmenttemplateversioncommandoutput.html)

</details>
<details>
<summary>
UpdateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicecommandoutput.html)

</details>
<details>
<summary>
UpdateServiceInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateserviceinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateserviceinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateserviceinstancecommandoutput.html)

</details>
<details>
<summary>
UpdateServicePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateservicepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicepipelinecommandoutput.html)

</details>
<details>
<summary>
UpdateServiceSyncBlocker
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateservicesyncblockercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicesyncblockercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicesyncblockercommandoutput.html)

</details>
<details>
<summary>
UpdateServiceSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateservicesyncconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicesyncconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicesyncconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateServiceTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateservicetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicetemplatecommandoutput.html)

</details>
<details>
<summary>
UpdateServiceTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updateservicetemplateversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicetemplateversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updateservicetemplateversioncommandoutput.html)

</details>
<details>
<summary>
UpdateTemplateSyncConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/classes/updatetemplatesyncconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updatetemplatesyncconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-proton/interfaces/updatetemplatesyncconfigcommandoutput.html)

</details>
