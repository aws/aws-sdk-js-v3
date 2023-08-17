<!-- generated file, do not edit directly -->

# @aws-sdk/client-imagebuilder

## Description

AWS SDK for JavaScript Imagebuilder Client for Node.js, Browser and React Native.

<p>EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the
creation, management, and deployment of customized, secure, and up-to-date
"golden" server images that are pre-installed and pre-configured with software
and settings to meet specific IT standards.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-imagebuilder
using your favorite package manager:

- `npm install @aws-sdk/client-imagebuilder`
- `yarn add @aws-sdk/client-imagebuilder`
- `pnpm add @aws-sdk/client-imagebuilder`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ImagebuilderClient` and
the commands you need, for example `CancelImageCreationCommand`:

```js
// ES5 example
const { ImagebuilderClient, CancelImageCreationCommand } = require("@aws-sdk/client-imagebuilder");
```

```ts
// ES6+ example
import { ImagebuilderClient, CancelImageCreationCommand } from "@aws-sdk/client-imagebuilder";
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
const command = new CancelImageCreationCommand(params);
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
  const data = await client.cancelImageCreation(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelImageCreation(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelImageCreation(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/cancelimagecreationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/cancelimagecreationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/cancelimagecreationcommandoutput.html)

</details>
<details>
<summary>
CreateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/createcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createcomponentcommandoutput.html)

</details>
<details>
<summary>
CreateContainerRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/createcontainerrecipecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createcontainerrecipecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createcontainerrecipecommandoutput.html)

</details>
<details>
<summary>
CreateDistributionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/createdistributionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createdistributionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createdistributionconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/createimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createimagecommandoutput.html)

</details>
<details>
<summary>
CreateImagePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/createimagepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createimagepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createimagepipelinecommandoutput.html)

</details>
<details>
<summary>
CreateImageRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/createimagerecipecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createimagerecipecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createimagerecipecommandoutput.html)

</details>
<details>
<summary>
CreateInfrastructureConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/createinfrastructureconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createinfrastructureconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/createinfrastructureconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/deletecomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deletecomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deletecomponentcommandoutput.html)

</details>
<details>
<summary>
DeleteContainerRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/deletecontainerrecipecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deletecontainerrecipecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deletecontainerrecipecommandoutput.html)

</details>
<details>
<summary>
DeleteDistributionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/deletedistributionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deletedistributionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deletedistributionconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/deleteimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deleteimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deleteimagecommandoutput.html)

</details>
<details>
<summary>
DeleteImagePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/deleteimagepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deleteimagepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deleteimagepipelinecommandoutput.html)

</details>
<details>
<summary>
DeleteImageRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/deleteimagerecipecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deleteimagerecipecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deleteimagerecipecommandoutput.html)

</details>
<details>
<summary>
DeleteInfrastructureConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/deleteinfrastructureconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deleteinfrastructureconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/deleteinfrastructureconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getcomponentcommandoutput.html)

</details>
<details>
<summary>
GetComponentPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getcomponentpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getcomponentpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getcomponentpolicycommandoutput.html)

</details>
<details>
<summary>
GetContainerRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getcontainerrecipecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getcontainerrecipecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getcontainerrecipecommandoutput.html)

</details>
<details>
<summary>
GetContainerRecipePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getcontainerrecipepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getcontainerrecipepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getcontainerrecipepolicycommandoutput.html)

</details>
<details>
<summary>
GetDistributionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getdistributionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getdistributionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getdistributionconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagecommandoutput.html)

</details>
<details>
<summary>
GetImagePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getimagepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagepipelinecommandoutput.html)

</details>
<details>
<summary>
GetImagePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getimagepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagepolicycommandoutput.html)

</details>
<details>
<summary>
GetImageRecipe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getimagerecipecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagerecipecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagerecipecommandoutput.html)

</details>
<details>
<summary>
GetImageRecipePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getimagerecipepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagerecipepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getimagerecipepolicycommandoutput.html)

</details>
<details>
<summary>
GetInfrastructureConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getinfrastructureconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getinfrastructureconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getinfrastructureconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getworkflowexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getworkflowexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getworkflowexecutioncommandoutput.html)

</details>
<details>
<summary>
GetWorkflowStepExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/getworkflowstepexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getworkflowstepexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/getworkflowstepexecutioncommandoutput.html)

</details>
<details>
<summary>
ImportComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/importcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/importcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/importcomponentcommandoutput.html)

</details>
<details>
<summary>
ImportVmImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/importvmimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/importvmimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/importvmimagecommandoutput.html)

</details>
<details>
<summary>
ListComponentBuildVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listcomponentbuildversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listcomponentbuildversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listcomponentbuildversionscommandoutput.html)

</details>
<details>
<summary>
ListComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listcomponentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listcomponentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listcomponentscommandoutput.html)

</details>
<details>
<summary>
ListContainerRecipes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listcontainerrecipescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listcontainerrecipescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listcontainerrecipescommandoutput.html)

</details>
<details>
<summary>
ListDistributionConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listdistributionconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listdistributionconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listdistributionconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListImageBuildVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listimagebuildversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagebuildversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagebuildversionscommandoutput.html)

</details>
<details>
<summary>
ListImagePackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listimagepackagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagepackagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagepackagescommandoutput.html)

</details>
<details>
<summary>
ListImagePipelineImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listimagepipelineimagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagepipelineimagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagepipelineimagescommandoutput.html)

</details>
<details>
<summary>
ListImagePipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listimagepipelinescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagepipelinescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagepipelinescommandoutput.html)

</details>
<details>
<summary>
ListImageRecipes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listimagerecipescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagerecipescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagerecipescommandoutput.html)

</details>
<details>
<summary>
ListImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listimagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagescommandoutput.html)

</details>
<details>
<summary>
ListImageScanFindingAggregations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listimagescanfindingaggregationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagescanfindingaggregationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagescanfindingaggregationscommandoutput.html)

</details>
<details>
<summary>
ListImageScanFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listimagescanfindingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagescanfindingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listimagescanfindingscommandoutput.html)

</details>
<details>
<summary>
ListInfrastructureConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listinfrastructureconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listinfrastructureconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listinfrastructureconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listworkflowexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listworkflowexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listworkflowexecutionscommandoutput.html)

</details>
<details>
<summary>
ListWorkflowStepExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/listworkflowstepexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listworkflowstepexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/listworkflowstepexecutionscommandoutput.html)

</details>
<details>
<summary>
PutComponentPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/putcomponentpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/putcomponentpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/putcomponentpolicycommandoutput.html)

</details>
<details>
<summary>
PutContainerRecipePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/putcontainerrecipepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/putcontainerrecipepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/putcontainerrecipepolicycommandoutput.html)

</details>
<details>
<summary>
PutImagePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/putimagepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/putimagepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/putimagepolicycommandoutput.html)

</details>
<details>
<summary>
PutImageRecipePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/putimagerecipepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/putimagerecipepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/putimagerecipepolicycommandoutput.html)

</details>
<details>
<summary>
StartImagePipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/startimagepipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/startimagepipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/startimagepipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDistributionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/updatedistributionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/updatedistributionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/updatedistributionconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateImagePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/updateimagepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/updateimagepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/updateimagepipelinecommandoutput.html)

</details>
<details>
<summary>
UpdateInfrastructureConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/classes/updateinfrastructureconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/updateinfrastructureconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-imagebuilder/interfaces/updateinfrastructureconfigurationcommandoutput.html)

</details>
