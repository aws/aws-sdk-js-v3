<!-- generated file, do not edit directly -->

# @aws-sdk/client-imagebuilder

## Description

AWS SDK for JavaScript Imagebuilder Client for Node.js, Browser and React Native.

<p>EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the
creation, management, and deployment of customized, secure, and up-to-date
"golden" server images that are pre-installed and pre-configured with software
and settings to meet specific IT standards.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-imagebuilder
using your favorite package manager:

- `npm install @aws-sdk/client-imagebuilder`
- `yarn add @aws-sdk/client-imagebuilder`
- `pnpm add @aws-sdk/client-imagebuilder`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ImagebuilderClient` and
the commands you need, for example `ListImagesCommand`:

```js
// ES5 example
const { ImagebuilderClient, ListImagesCommand } = require("@aws-sdk/client-imagebuilder");
```

```ts
// ES6+ example
import { ImagebuilderClient, ListImagesCommand } from "@aws-sdk/client-imagebuilder";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ImagebuilderClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListImagesCommand(params);
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
import * as AWS from "@aws-sdk/client-imagebuilder";
const client = new AWS.Imagebuilder({ region: "REGION" });

// async/await.
try {
  const data = await client.listImages(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listImages(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listImages(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-imagebuilder` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelImageCreation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CancelImageCreationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CancelImageCreationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CancelImageCreationCommandOutput/)

</details>
<details>
<summary>
CancelLifecycleExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CancelLifecycleExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CancelLifecycleExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CancelLifecycleExecutionCommandOutput/)

</details>
<details>
<summary>
CreateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateComponentCommandOutput/)

</details>
<details>
<summary>
CreateContainerRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateContainerRecipeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateContainerRecipeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateContainerRecipeCommandOutput/)

</details>
<details>
<summary>
CreateDistributionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateDistributionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateDistributionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateDistributionConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateImageCommandOutput/)

</details>
<details>
<summary>
CreateImagePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateImagePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateImagePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateImagePipelineCommandOutput/)

</details>
<details>
<summary>
CreateImageRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateImageRecipeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateImageRecipeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateImageRecipeCommandOutput/)

</details>
<details>
<summary>
CreateInfrastructureConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateInfrastructureConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateInfrastructureConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateInfrastructureConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateLifecyclePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateLifecyclePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateLifecyclePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateLifecyclePolicyCommandOutput/)

</details>
<details>
<summary>
CreateWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/CreateWorkflowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateWorkflowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/CreateWorkflowCommandOutput/)

</details>
<details>
<summary>
DeleteComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteComponentCommandOutput/)

</details>
<details>
<summary>
DeleteContainerRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteContainerRecipeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteContainerRecipeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteContainerRecipeCommandOutput/)

</details>
<details>
<summary>
DeleteDistributionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteDistributionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteDistributionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteDistributionConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteImageCommandOutput/)

</details>
<details>
<summary>
DeleteImagePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteImagePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteImagePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteImagePipelineCommandOutput/)

</details>
<details>
<summary>
DeleteImageRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteImageRecipeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteImageRecipeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteImageRecipeCommandOutput/)

</details>
<details>
<summary>
DeleteInfrastructureConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteInfrastructureConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteInfrastructureConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteInfrastructureConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteLifecyclePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteLifecyclePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteLifecyclePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteLifecyclePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/DeleteWorkflowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteWorkflowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/DeleteWorkflowCommandOutput/)

</details>
<details>
<summary>
GetComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetComponentCommandOutput/)

</details>
<details>
<summary>
GetComponentPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetComponentPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetComponentPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetComponentPolicyCommandOutput/)

</details>
<details>
<summary>
GetContainerRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetContainerRecipeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetContainerRecipeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetContainerRecipeCommandOutput/)

</details>
<details>
<summary>
GetContainerRecipePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetContainerRecipePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetContainerRecipePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetContainerRecipePolicyCommandOutput/)

</details>
<details>
<summary>
GetDistributionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetDistributionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetDistributionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetDistributionConfigurationCommandOutput/)

</details>
<details>
<summary>
GetImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImageCommandOutput/)

</details>
<details>
<summary>
GetImagePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetImagePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImagePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImagePipelineCommandOutput/)

</details>
<details>
<summary>
GetImagePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetImagePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImagePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImagePolicyCommandOutput/)

</details>
<details>
<summary>
GetImageRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetImageRecipeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImageRecipeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImageRecipeCommandOutput/)

</details>
<details>
<summary>
GetImageRecipePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetImageRecipePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImageRecipePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetImageRecipePolicyCommandOutput/)

</details>
<details>
<summary>
GetInfrastructureConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetInfrastructureConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetInfrastructureConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetInfrastructureConfigurationCommandOutput/)

</details>
<details>
<summary>
GetLifecycleExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetLifecycleExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetLifecycleExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetLifecycleExecutionCommandOutput/)

</details>
<details>
<summary>
GetLifecyclePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetLifecyclePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetLifecyclePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetLifecyclePolicyCommandOutput/)

</details>
<details>
<summary>
GetMarketplaceResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetMarketplaceResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetMarketplaceResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetMarketplaceResourceCommandOutput/)

</details>
<details>
<summary>
GetWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetWorkflowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetWorkflowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetWorkflowCommandOutput/)

</details>
<details>
<summary>
GetWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetWorkflowExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetWorkflowExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetWorkflowExecutionCommandOutput/)

</details>
<details>
<summary>
GetWorkflowStepExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/GetWorkflowStepExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetWorkflowStepExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/GetWorkflowStepExecutionCommandOutput/)

</details>
<details>
<summary>
ImportComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ImportComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ImportComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ImportComponentCommandOutput/)

</details>
<details>
<summary>
ImportDiskImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ImportDiskImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ImportDiskImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ImportDiskImageCommandOutput/)

</details>
<details>
<summary>
ImportVmImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ImportVmImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ImportVmImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ImportVmImageCommandOutput/)

</details>
<details>
<summary>
ListComponentBuildVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListComponentBuildVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListComponentBuildVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListComponentBuildVersionsCommandOutput/)

</details>
<details>
<summary>
ListComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListComponentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListComponentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListComponentsCommandOutput/)

</details>
<details>
<summary>
ListContainerRecipes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListContainerRecipesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListContainerRecipesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListContainerRecipesCommandOutput/)

</details>
<details>
<summary>
ListDistributionConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListDistributionConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListDistributionConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListDistributionConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListImageBuildVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListImageBuildVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImageBuildVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImageBuildVersionsCommandOutput/)

</details>
<details>
<summary>
ListImagePackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListImagePackagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImagePackagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImagePackagesCommandOutput/)

</details>
<details>
<summary>
ListImagePipelineImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListImagePipelineImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImagePipelineImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImagePipelineImagesCommandOutput/)

</details>
<details>
<summary>
ListImagePipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListImagePipelinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImagePipelinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImagePipelinesCommandOutput/)

</details>
<details>
<summary>
ListImageRecipes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListImageRecipesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImageRecipesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImageRecipesCommandOutput/)

</details>
<details>
<summary>
ListImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImagesCommandOutput/)

</details>
<details>
<summary>
ListImageScanFindingAggregations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListImageScanFindingAggregationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImageScanFindingAggregationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImageScanFindingAggregationsCommandOutput/)

</details>
<details>
<summary>
ListImageScanFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListImageScanFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImageScanFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListImageScanFindingsCommandOutput/)

</details>
<details>
<summary>
ListInfrastructureConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListInfrastructureConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListInfrastructureConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListInfrastructureConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListLifecycleExecutionResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListLifecycleExecutionResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListLifecycleExecutionResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListLifecycleExecutionResourcesCommandOutput/)

</details>
<details>
<summary>
ListLifecycleExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListLifecycleExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListLifecycleExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListLifecycleExecutionsCommandOutput/)

</details>
<details>
<summary>
ListLifecyclePolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListLifecyclePoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListLifecyclePoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListLifecyclePoliciesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListWaitingWorkflowSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListWaitingWorkflowStepsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWaitingWorkflowStepsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWaitingWorkflowStepsCommandOutput/)

</details>
<details>
<summary>
ListWorkflowBuildVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListWorkflowBuildVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWorkflowBuildVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWorkflowBuildVersionsCommandOutput/)

</details>
<details>
<summary>
ListWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListWorkflowExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWorkflowExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWorkflowExecutionsCommandOutput/)

</details>
<details>
<summary>
ListWorkflows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListWorkflowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWorkflowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWorkflowsCommandOutput/)

</details>
<details>
<summary>
ListWorkflowStepExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/ListWorkflowStepExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWorkflowStepExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/ListWorkflowStepExecutionsCommandOutput/)

</details>
<details>
<summary>
PutComponentPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/PutComponentPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/PutComponentPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/PutComponentPolicyCommandOutput/)

</details>
<details>
<summary>
PutContainerRecipePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/PutContainerRecipePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/PutContainerRecipePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/PutContainerRecipePolicyCommandOutput/)

</details>
<details>
<summary>
PutImagePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/PutImagePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/PutImagePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/PutImagePolicyCommandOutput/)

</details>
<details>
<summary>
PutImageRecipePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/PutImageRecipePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/PutImageRecipePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/PutImageRecipePolicyCommandOutput/)

</details>
<details>
<summary>
SendWorkflowStepAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/SendWorkflowStepActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/SendWorkflowStepActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/SendWorkflowStepActionCommandOutput/)

</details>
<details>
<summary>
StartImagePipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/StartImagePipelineExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/StartImagePipelineExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/StartImagePipelineExecutionCommandOutput/)

</details>
<details>
<summary>
StartResourceStateUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/StartResourceStateUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/StartResourceStateUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/StartResourceStateUpdateCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateDistributionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/UpdateDistributionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UpdateDistributionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UpdateDistributionConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateImagePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/UpdateImagePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UpdateImagePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UpdateImagePipelineCommandOutput/)

</details>
<details>
<summary>
UpdateInfrastructureConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/UpdateInfrastructureConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UpdateInfrastructureConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UpdateInfrastructureConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateLifecyclePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/imagebuilder/command/UpdateLifecyclePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UpdateLifecyclePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-imagebuilder/Interface/UpdateLifecyclePolicyCommandOutput/)

</details>
