<!-- generated file, do not edit directly -->

# @aws-sdk/client-sagemaker

## Description

AWS SDK for JavaScript SageMaker Client for Node.js, Browser and React Native.

<p>Provides APIs for creating and managing SageMaker resources. </p>
<p>Other Resources:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html#first-time-user">SageMaker Developer
Guide</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/augmented-ai/2019-11-07/APIReference/Welcome.html">Amazon Augmented AI
Runtime API Reference</a>
</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-sagemaker
using your favorite package manager:

- `npm install @aws-sdk/client-sagemaker`
- `yarn add @aws-sdk/client-sagemaker`
- `pnpm add @aws-sdk/client-sagemaker`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SageMakerClient` and
the commands you need, for example `AddAssociationCommand`:

```js
// ES5 example
const { SageMakerClient, AddAssociationCommand } = require("@aws-sdk/client-sagemaker");
```

```ts
// ES6+ example
import { SageMakerClient, AddAssociationCommand } from "@aws-sdk/client-sagemaker";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SageMakerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddAssociationCommand(params);
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
import * as AWS from "@aws-sdk/client-sagemaker";
const client = new AWS.SageMaker({ region: "REGION" });

// async/await.
try {
  const data = await client.addAssociation(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addAssociation(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addAssociation(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sagemaker` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/addassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/addassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/addassociationcommandoutput.html)

</details>
<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/addtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/addtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/addtagscommandoutput.html)

</details>
<details>
<summary>
AssociateTrialComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/associatetrialcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/associatetrialcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/associatetrialcomponentcommandoutput.html)

</details>
<details>
<summary>
BatchDescribeModelPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/batchdescribemodelpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/batchdescribemodelpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/batchdescribemodelpackagecommandoutput.html)

</details>
<details>
<summary>
CreateAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createactioncommandoutput.html)

</details>
<details>
<summary>
CreateAlgorithm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createalgorithmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createalgorithmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createalgorithmcommandoutput.html)

</details>
<details>
<summary>
CreateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createappcommandoutput.html)

</details>
<details>
<summary>
CreateAppImageConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createappimageconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createappimageconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createappimageconfigcommandoutput.html)

</details>
<details>
<summary>
CreateArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createartifactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createartifactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createartifactcommandoutput.html)

</details>
<details>
<summary>
CreateAutoMLJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createautomljobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createautomljobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createautomljobcommandoutput.html)

</details>
<details>
<summary>
CreateAutoMLJobV2
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createautomljobv2command.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createautomljobv2commandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createautomljobv2commandoutput.html)

</details>
<details>
<summary>
CreateCodeRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createcoderepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createcoderepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createcoderepositorycommandoutput.html)

</details>
<details>
<summary>
CreateCompilationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createcompilationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createcompilationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createcompilationjobcommandoutput.html)

</details>
<details>
<summary>
CreateContext
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createcontextcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createcontextcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createcontextcommandoutput.html)

</details>
<details>
<summary>
CreateDataQualityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createdataqualityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createdataqualityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createdataqualityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateDeviceFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createdevicefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createdevicefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createdevicefleetcommandoutput.html)

</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createdomaincommandoutput.html)

</details>
<details>
<summary>
CreateEdgeDeploymentPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createedgedeploymentplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createedgedeploymentplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createedgedeploymentplancommandoutput.html)

</details>
<details>
<summary>
CreateEdgeDeploymentStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createedgedeploymentstagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createedgedeploymentstagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createedgedeploymentstagecommandoutput.html)

</details>
<details>
<summary>
CreateEdgePackagingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createedgepackagingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createedgepackagingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createedgepackagingjobcommandoutput.html)

</details>
<details>
<summary>
CreateEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createendpointcommandoutput.html)

</details>
<details>
<summary>
CreateEndpointConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createendpointconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createendpointconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createendpointconfigcommandoutput.html)

</details>
<details>
<summary>
CreateExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createexperimentcommandoutput.html)

</details>
<details>
<summary>
CreateFeatureGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createfeaturegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createfeaturegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createfeaturegroupcommandoutput.html)

</details>
<details>
<summary>
CreateFlowDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createflowdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createflowdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createflowdefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateHub
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createhubcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createhubcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createhubcommandoutput.html)

</details>
<details>
<summary>
CreateHumanTaskUi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createhumantaskuicommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createhumantaskuicommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createhumantaskuicommandoutput.html)

</details>
<details>
<summary>
CreateHyperParameterTuningJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createhyperparametertuningjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createhyperparametertuningjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createhyperparametertuningjobcommandoutput.html)

</details>
<details>
<summary>
CreateImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createimagecommandoutput.html)

</details>
<details>
<summary>
CreateImageVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createimageversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createimageversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createimageversioncommandoutput.html)

</details>
<details>
<summary>
CreateInferenceExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createinferenceexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createinferenceexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createinferenceexperimentcommandoutput.html)

</details>
<details>
<summary>
CreateInferenceRecommendationsJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createinferencerecommendationsjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createinferencerecommendationsjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createinferencerecommendationsjobcommandoutput.html)

</details>
<details>
<summary>
CreateLabelingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createlabelingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createlabelingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createlabelingjobcommandoutput.html)

</details>
<details>
<summary>
CreateModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelcommandoutput.html)

</details>
<details>
<summary>
CreateModelBiasJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmodelbiasjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelbiasjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelbiasjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateModelCard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmodelcardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelcardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelcardcommandoutput.html)

</details>
<details>
<summary>
CreateModelCardExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmodelcardexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelcardexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelcardexportjobcommandoutput.html)

</details>
<details>
<summary>
CreateModelExplainabilityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmodelexplainabilityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelexplainabilityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelexplainabilityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateModelPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmodelpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelpackagecommandoutput.html)

</details>
<details>
<summary>
CreateModelPackageGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmodelpackagegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelpackagegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelpackagegroupcommandoutput.html)

</details>
<details>
<summary>
CreateModelQualityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmodelqualityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelqualityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmodelqualityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
CreateMonitoringSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createmonitoringschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmonitoringschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createmonitoringschedulecommandoutput.html)

</details>
<details>
<summary>
CreateNotebookInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createnotebookinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createnotebookinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createnotebookinstancecommandoutput.html)

</details>
<details>
<summary>
CreateNotebookInstanceLifecycleConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createnotebookinstancelifecycleconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createnotebookinstancelifecycleconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createnotebookinstancelifecycleconfigcommandoutput.html)

</details>
<details>
<summary>
CreatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createpipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createpipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createpipelinecommandoutput.html)

</details>
<details>
<summary>
CreatePresignedDomainUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createpresigneddomainurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createpresigneddomainurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createpresigneddomainurlcommandoutput.html)

</details>
<details>
<summary>
CreatePresignedNotebookInstanceUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createpresignednotebookinstanceurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createpresignednotebookinstanceurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createpresignednotebookinstanceurlcommandoutput.html)

</details>
<details>
<summary>
CreateProcessingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createprocessingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createprocessingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createprocessingjobcommandoutput.html)

</details>
<details>
<summary>
CreateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createprojectcommandoutput.html)

</details>
<details>
<summary>
CreateSpace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createspacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createspacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createspacecommandoutput.html)

</details>
<details>
<summary>
CreateStudioLifecycleConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createstudiolifecycleconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createstudiolifecycleconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createstudiolifecycleconfigcommandoutput.html)

</details>
<details>
<summary>
CreateTrainingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createtrainingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createtrainingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createtrainingjobcommandoutput.html)

</details>
<details>
<summary>
CreateTransformJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createtransformjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createtransformjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createtransformjobcommandoutput.html)

</details>
<details>
<summary>
CreateTrial
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createtrialcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createtrialcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createtrialcommandoutput.html)

</details>
<details>
<summary>
CreateTrialComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createtrialcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createtrialcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createtrialcomponentcommandoutput.html)

</details>
<details>
<summary>
CreateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createuserprofilecommandoutput.html)

</details>
<details>
<summary>
CreateWorkforce
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createworkforcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createworkforcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createworkforcecommandoutput.html)

</details>
<details>
<summary>
CreateWorkteam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/createworkteamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createworkteamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/createworkteamcommandoutput.html)

</details>
<details>
<summary>
DeleteAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteactioncommandoutput.html)

</details>
<details>
<summary>
DeleteAlgorithm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletealgorithmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletealgorithmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletealgorithmcommandoutput.html)

</details>
<details>
<summary>
DeleteApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteappcommandoutput.html)

</details>
<details>
<summary>
DeleteAppImageConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteappimageconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteappimageconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteappimageconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteartifactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteartifactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteartifactcommandoutput.html)

</details>
<details>
<summary>
DeleteAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteCodeRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletecoderepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletecoderepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletecoderepositorycommandoutput.html)

</details>
<details>
<summary>
DeleteContext
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletecontextcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletecontextcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletecontextcommandoutput.html)

</details>
<details>
<summary>
DeleteDataQualityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletedataqualityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletedataqualityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletedataqualityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteDeviceFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletedevicefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletedevicefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletedevicefleetcommandoutput.html)

</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletedomaincommandoutput.html)

</details>
<details>
<summary>
DeleteEdgeDeploymentPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteedgedeploymentplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteedgedeploymentplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteedgedeploymentplancommandoutput.html)

</details>
<details>
<summary>
DeleteEdgeDeploymentStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteedgedeploymentstagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteedgedeploymentstagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteedgedeploymentstagecommandoutput.html)

</details>
<details>
<summary>
DeleteEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteEndpointConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteendpointconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteendpointconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteendpointconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteexperimentcommandoutput.html)

</details>
<details>
<summary>
DeleteFeatureGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletefeaturegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletefeaturegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletefeaturegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteFlowDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteflowdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteflowdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteflowdefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteHub
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletehubcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletehubcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletehubcommandoutput.html)

</details>
<details>
<summary>
DeleteHubContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletehubcontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletehubcontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletehubcontentcommandoutput.html)

</details>
<details>
<summary>
DeleteHumanTaskUi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletehumantaskuicommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletehumantaskuicommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletehumantaskuicommandoutput.html)

</details>
<details>
<summary>
DeleteImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteimagecommandoutput.html)

</details>
<details>
<summary>
DeleteImageVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteimageversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteimageversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteimageversioncommandoutput.html)

</details>
<details>
<summary>
DeleteInferenceExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteinferenceexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteinferenceexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteinferenceexperimentcommandoutput.html)

</details>
<details>
<summary>
DeleteModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelcommandoutput.html)

</details>
<details>
<summary>
DeleteModelBiasJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemodelbiasjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelbiasjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelbiasjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteModelCard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemodelcardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelcardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelcardcommandoutput.html)

</details>
<details>
<summary>
DeleteModelExplainabilityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemodelexplainabilityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelexplainabilityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelexplainabilityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteModelPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemodelpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelpackagecommandoutput.html)

</details>
<details>
<summary>
DeleteModelPackageGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemodelpackagegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelpackagegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelpackagegroupcommandoutput.html)

</details>
<details>
<summary>
DeleteModelPackageGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemodelpackagegrouppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelpackagegrouppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelpackagegrouppolicycommandoutput.html)

</details>
<details>
<summary>
DeleteModelQualityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemodelqualityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelqualityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemodelqualityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteMonitoringSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletemonitoringschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemonitoringschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletemonitoringschedulecommandoutput.html)

</details>
<details>
<summary>
DeleteNotebookInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletenotebookinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletenotebookinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletenotebookinstancecommandoutput.html)

</details>
<details>
<summary>
DeleteNotebookInstanceLifecycleConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletenotebookinstancelifecycleconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletenotebookinstancelifecycleconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletenotebookinstancelifecycleconfigcommandoutput.html)

</details>
<details>
<summary>
DeletePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletepipelinecommandoutput.html)

</details>
<details>
<summary>
DeleteProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteprojectcommandoutput.html)

</details>
<details>
<summary>
DeleteSpace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletespacecommandoutput.html)

</details>
<details>
<summary>
DeleteStudioLifecycleConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletestudiolifecycleconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletestudiolifecycleconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletestudiolifecycleconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletetagscommandoutput.html)

</details>
<details>
<summary>
DeleteTrial
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletetrialcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletetrialcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletetrialcommandoutput.html)

</details>
<details>
<summary>
DeleteTrialComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deletetrialcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletetrialcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deletetrialcomponentcommandoutput.html)

</details>
<details>
<summary>
DeleteUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteuserprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteWorkforce
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteworkforcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteworkforcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteworkforcecommandoutput.html)

</details>
<details>
<summary>
DeleteWorkteam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deleteworkteamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteworkteamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deleteworkteamcommandoutput.html)

</details>
<details>
<summary>
DeregisterDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/deregisterdevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deregisterdevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/deregisterdevicescommandoutput.html)

</details>
<details>
<summary>
DescribeAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeactioncommandoutput.html)

</details>
<details>
<summary>
DescribeAlgorithm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describealgorithmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describealgorithmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describealgorithmcommandoutput.html)

</details>
<details>
<summary>
DescribeApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeappcommandoutput.html)

</details>
<details>
<summary>
DescribeAppImageConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeappimageconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeappimageconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeappimageconfigcommandoutput.html)

</details>
<details>
<summary>
DescribeArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeartifactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeartifactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeartifactcommandoutput.html)

</details>
<details>
<summary>
DescribeAutoMLJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeautomljobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeautomljobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeautomljobcommandoutput.html)

</details>
<details>
<summary>
DescribeAutoMLJobV2
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeautomljobv2command.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeautomljobv2commandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeautomljobv2commandoutput.html)

</details>
<details>
<summary>
DescribeCodeRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describecoderepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describecoderepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describecoderepositorycommandoutput.html)

</details>
<details>
<summary>
DescribeCompilationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describecompilationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describecompilationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describecompilationjobcommandoutput.html)

</details>
<details>
<summary>
DescribeContext
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describecontextcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describecontextcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describecontextcommandoutput.html)

</details>
<details>
<summary>
DescribeDataQualityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describedataqualityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describedataqualityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describedataqualityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
DescribeDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describedevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describedevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describedevicecommandoutput.html)

</details>
<details>
<summary>
DescribeDeviceFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describedevicefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describedevicefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describedevicefleetcommandoutput.html)

</details>
<details>
<summary>
DescribeDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describedomaincommandoutput.html)

</details>
<details>
<summary>
DescribeEdgeDeploymentPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeedgedeploymentplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeedgedeploymentplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeedgedeploymentplancommandoutput.html)

</details>
<details>
<summary>
DescribeEdgePackagingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeedgepackagingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeedgepackagingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeedgepackagingjobcommandoutput.html)

</details>
<details>
<summary>
DescribeEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeendpointcommandoutput.html)

</details>
<details>
<summary>
DescribeEndpointConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeendpointconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeendpointconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeendpointconfigcommandoutput.html)

</details>
<details>
<summary>
DescribeExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeexperimentcommandoutput.html)

</details>
<details>
<summary>
DescribeFeatureGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describefeaturegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describefeaturegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describefeaturegroupcommandoutput.html)

</details>
<details>
<summary>
DescribeFeatureMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describefeaturemetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describefeaturemetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describefeaturemetadatacommandoutput.html)

</details>
<details>
<summary>
DescribeFlowDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeflowdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeflowdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeflowdefinitioncommandoutput.html)

</details>
<details>
<summary>
DescribeHub
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describehubcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describehubcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describehubcommandoutput.html)

</details>
<details>
<summary>
DescribeHubContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describehubcontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describehubcontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describehubcontentcommandoutput.html)

</details>
<details>
<summary>
DescribeHumanTaskUi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describehumantaskuicommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describehumantaskuicommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describehumantaskuicommandoutput.html)

</details>
<details>
<summary>
DescribeHyperParameterTuningJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describehyperparametertuningjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describehyperparametertuningjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describehyperparametertuningjobcommandoutput.html)

</details>
<details>
<summary>
DescribeImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeimagecommandoutput.html)

</details>
<details>
<summary>
DescribeImageVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeimageversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeimageversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeimageversioncommandoutput.html)

</details>
<details>
<summary>
DescribeInferenceExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeinferenceexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeinferenceexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeinferenceexperimentcommandoutput.html)

</details>
<details>
<summary>
DescribeInferenceRecommendationsJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeinferencerecommendationsjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeinferencerecommendationsjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeinferencerecommendationsjobcommandoutput.html)

</details>
<details>
<summary>
DescribeLabelingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describelabelingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describelabelingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describelabelingjobcommandoutput.html)

</details>
<details>
<summary>
DescribeLineageGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describelineagegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describelineagegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describelineagegroupcommandoutput.html)

</details>
<details>
<summary>
DescribeModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelcommandoutput.html)

</details>
<details>
<summary>
DescribeModelBiasJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemodelbiasjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelbiasjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelbiasjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
DescribeModelCard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemodelcardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelcardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelcardcommandoutput.html)

</details>
<details>
<summary>
DescribeModelCardExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemodelcardexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelcardexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelcardexportjobcommandoutput.html)

</details>
<details>
<summary>
DescribeModelExplainabilityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemodelexplainabilityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelexplainabilityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelexplainabilityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
DescribeModelPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemodelpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelpackagecommandoutput.html)

</details>
<details>
<summary>
DescribeModelPackageGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemodelpackagegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelpackagegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelpackagegroupcommandoutput.html)

</details>
<details>
<summary>
DescribeModelQualityJobDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemodelqualityjobdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelqualityjobdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemodelqualityjobdefinitioncommandoutput.html)

</details>
<details>
<summary>
DescribeMonitoringSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describemonitoringschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemonitoringschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describemonitoringschedulecommandoutput.html)

</details>
<details>
<summary>
DescribeNotebookInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describenotebookinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describenotebookinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describenotebookinstancecommandoutput.html)

</details>
<details>
<summary>
DescribeNotebookInstanceLifecycleConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describenotebookinstancelifecycleconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describenotebookinstancelifecycleconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describenotebookinstancelifecycleconfigcommandoutput.html)

</details>
<details>
<summary>
DescribePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describepipelinecommandoutput.html)

</details>
<details>
<summary>
DescribePipelineDefinitionForExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describepipelinedefinitionforexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describepipelinedefinitionforexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describepipelinedefinitionforexecutioncommandoutput.html)

</details>
<details>
<summary>
DescribePipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describepipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describepipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describepipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
DescribeProcessingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeprocessingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeprocessingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeprocessingjobcommandoutput.html)

</details>
<details>
<summary>
DescribeProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeprojectcommandoutput.html)

</details>
<details>
<summary>
DescribeSpace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describespacecommandoutput.html)

</details>
<details>
<summary>
DescribeStudioLifecycleConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describestudiolifecycleconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describestudiolifecycleconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describestudiolifecycleconfigcommandoutput.html)

</details>
<details>
<summary>
DescribeSubscribedWorkteam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describesubscribedworkteamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describesubscribedworkteamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describesubscribedworkteamcommandoutput.html)

</details>
<details>
<summary>
DescribeTrainingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describetrainingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describetrainingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describetrainingjobcommandoutput.html)

</details>
<details>
<summary>
DescribeTransformJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describetransformjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describetransformjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describetransformjobcommandoutput.html)

</details>
<details>
<summary>
DescribeTrial
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describetrialcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describetrialcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describetrialcommandoutput.html)

</details>
<details>
<summary>
DescribeTrialComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describetrialcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describetrialcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describetrialcomponentcommandoutput.html)

</details>
<details>
<summary>
DescribeUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeuserprofilecommandoutput.html)

</details>
<details>
<summary>
DescribeWorkforce
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeworkforcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeworkforcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeworkforcecommandoutput.html)

</details>
<details>
<summary>
DescribeWorkteam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/describeworkteamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeworkteamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/describeworkteamcommandoutput.html)

</details>
<details>
<summary>
DisableSagemakerServicecatalogPortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/disablesagemakerservicecatalogportfoliocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/disablesagemakerservicecatalogportfoliocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/disablesagemakerservicecatalogportfoliocommandoutput.html)

</details>
<details>
<summary>
DisassociateTrialComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/disassociatetrialcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/disassociatetrialcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/disassociatetrialcomponentcommandoutput.html)

</details>
<details>
<summary>
EnableSagemakerServicecatalogPortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/enablesagemakerservicecatalogportfoliocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/enablesagemakerservicecatalogportfoliocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/enablesagemakerservicecatalogportfoliocommandoutput.html)

</details>
<details>
<summary>
GetDeviceFleetReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/getdevicefleetreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getdevicefleetreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getdevicefleetreportcommandoutput.html)

</details>
<details>
<summary>
GetLineageGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/getlineagegrouppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getlineagegrouppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getlineagegrouppolicycommandoutput.html)

</details>
<details>
<summary>
GetModelPackageGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/getmodelpackagegrouppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getmodelpackagegrouppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getmodelpackagegrouppolicycommandoutput.html)

</details>
<details>
<summary>
GetSagemakerServicecatalogPortfolioStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/getsagemakerservicecatalogportfoliostatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getsagemakerservicecatalogportfoliostatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getsagemakerservicecatalogportfoliostatuscommandoutput.html)

</details>
<details>
<summary>
GetScalingConfigurationRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/getscalingconfigurationrecommendationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getscalingconfigurationrecommendationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getscalingconfigurationrecommendationcommandoutput.html)

</details>
<details>
<summary>
GetSearchSuggestions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/getsearchsuggestionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getsearchsuggestionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/getsearchsuggestionscommandoutput.html)

</details>
<details>
<summary>
ImportHubContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/importhubcontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/importhubcontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/importhubcontentcommandoutput.html)

</details>
<details>
<summary>
ListActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listactionscommandoutput.html)

</details>
<details>
<summary>
ListAlgorithms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listalgorithmscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listalgorithmscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listalgorithmscommandoutput.html)

</details>
<details>
<summary>
ListAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listaliasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listaliasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listaliasescommandoutput.html)

</details>
<details>
<summary>
ListAppImageConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listappimageconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listappimageconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listappimageconfigscommandoutput.html)

</details>
<details>
<summary>
ListApps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listappscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listappscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listappscommandoutput.html)

</details>
<details>
<summary>
ListArtifacts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listartifactscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listartifactscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listartifactscommandoutput.html)

</details>
<details>
<summary>
ListAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listassociationscommandoutput.html)

</details>
<details>
<summary>
ListAutoMLJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listautomljobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listautomljobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listautomljobscommandoutput.html)

</details>
<details>
<summary>
ListCandidatesForAutoMLJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listcandidatesforautomljobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listcandidatesforautomljobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listcandidatesforautomljobcommandoutput.html)

</details>
<details>
<summary>
ListCodeRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listcoderepositoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listcoderepositoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listcoderepositoriescommandoutput.html)

</details>
<details>
<summary>
ListCompilationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listcompilationjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listcompilationjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listcompilationjobscommandoutput.html)

</details>
<details>
<summary>
ListContexts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listcontextscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listcontextscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listcontextscommandoutput.html)

</details>
<details>
<summary>
ListDataQualityJobDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listdataqualityjobdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listdataqualityjobdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listdataqualityjobdefinitionscommandoutput.html)

</details>
<details>
<summary>
ListDeviceFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listdevicefleetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listdevicefleetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listdevicefleetscommandoutput.html)

</details>
<details>
<summary>
ListDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listdevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listdevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listdevicescommandoutput.html)

</details>
<details>
<summary>
ListDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listdomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listdomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listdomainscommandoutput.html)

</details>
<details>
<summary>
ListEdgeDeploymentPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listedgedeploymentplanscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listedgedeploymentplanscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listedgedeploymentplanscommandoutput.html)

</details>
<details>
<summary>
ListEdgePackagingJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listedgepackagingjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listedgepackagingjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listedgepackagingjobscommandoutput.html)

</details>
<details>
<summary>
ListEndpointConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listendpointconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listendpointconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listendpointconfigscommandoutput.html)

</details>
<details>
<summary>
ListEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listendpointscommandoutput.html)

</details>
<details>
<summary>
ListExperiments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listexperimentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listexperimentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listexperimentscommandoutput.html)

</details>
<details>
<summary>
ListFeatureGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listfeaturegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listfeaturegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listfeaturegroupscommandoutput.html)

</details>
<details>
<summary>
ListFlowDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listflowdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listflowdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listflowdefinitionscommandoutput.html)

</details>
<details>
<summary>
ListHubContents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listhubcontentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhubcontentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhubcontentscommandoutput.html)

</details>
<details>
<summary>
ListHubContentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listhubcontentversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhubcontentversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhubcontentversionscommandoutput.html)

</details>
<details>
<summary>
ListHubs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listhubscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhubscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhubscommandoutput.html)

</details>
<details>
<summary>
ListHumanTaskUis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listhumantaskuiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhumantaskuiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhumantaskuiscommandoutput.html)

</details>
<details>
<summary>
ListHyperParameterTuningJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listhyperparametertuningjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhyperparametertuningjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listhyperparametertuningjobscommandoutput.html)

</details>
<details>
<summary>
ListImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listimagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listimagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listimagescommandoutput.html)

</details>
<details>
<summary>
ListImageVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listimageversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listimageversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listimageversionscommandoutput.html)

</details>
<details>
<summary>
ListInferenceExperiments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listinferenceexperimentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listinferenceexperimentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listinferenceexperimentscommandoutput.html)

</details>
<details>
<summary>
ListInferenceRecommendationsJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listinferencerecommendationsjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listinferencerecommendationsjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listinferencerecommendationsjobscommandoutput.html)

</details>
<details>
<summary>
ListInferenceRecommendationsJobSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listinferencerecommendationsjobstepscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listinferencerecommendationsjobstepscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listinferencerecommendationsjobstepscommandoutput.html)

</details>
<details>
<summary>
ListLabelingJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listlabelingjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listlabelingjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listlabelingjobscommandoutput.html)

</details>
<details>
<summary>
ListLabelingJobsForWorkteam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listlabelingjobsforworkteamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listlabelingjobsforworkteamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listlabelingjobsforworkteamcommandoutput.html)

</details>
<details>
<summary>
ListLineageGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listlineagegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listlineagegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listlineagegroupscommandoutput.html)

</details>
<details>
<summary>
ListModelBiasJobDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelbiasjobdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelbiasjobdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelbiasjobdefinitionscommandoutput.html)

</details>
<details>
<summary>
ListModelCardExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelcardexportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelcardexportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelcardexportjobscommandoutput.html)

</details>
<details>
<summary>
ListModelCards
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelcardscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelcardscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelcardscommandoutput.html)

</details>
<details>
<summary>
ListModelCardVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelcardversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelcardversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelcardversionscommandoutput.html)

</details>
<details>
<summary>
ListModelExplainabilityJobDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelexplainabilityjobdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelexplainabilityjobdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelexplainabilityjobdefinitionscommandoutput.html)

</details>
<details>
<summary>
ListModelMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelmetadatacommandoutput.html)

</details>
<details>
<summary>
ListModelPackageGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelpackagegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelpackagegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelpackagegroupscommandoutput.html)

</details>
<details>
<summary>
ListModelPackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelpackagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelpackagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelpackagescommandoutput.html)

</details>
<details>
<summary>
ListModelQualityJobDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelqualityjobdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelqualityjobdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelqualityjobdefinitionscommandoutput.html)

</details>
<details>
<summary>
ListModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmodelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmodelscommandoutput.html)

</details>
<details>
<summary>
ListMonitoringAlertHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmonitoringalerthistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmonitoringalerthistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmonitoringalerthistorycommandoutput.html)

</details>
<details>
<summary>
ListMonitoringAlerts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmonitoringalertscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmonitoringalertscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmonitoringalertscommandoutput.html)

</details>
<details>
<summary>
ListMonitoringExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmonitoringexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmonitoringexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmonitoringexecutionscommandoutput.html)

</details>
<details>
<summary>
ListMonitoringSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listmonitoringschedulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmonitoringschedulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listmonitoringschedulescommandoutput.html)

</details>
<details>
<summary>
ListNotebookInstanceLifecycleConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listnotebookinstancelifecycleconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listnotebookinstancelifecycleconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listnotebookinstancelifecycleconfigscommandoutput.html)

</details>
<details>
<summary>
ListNotebookInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listnotebookinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listnotebookinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listnotebookinstancescommandoutput.html)

</details>
<details>
<summary>
ListPipelineExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listpipelineexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listpipelineexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listpipelineexecutionscommandoutput.html)

</details>
<details>
<summary>
ListPipelineExecutionSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listpipelineexecutionstepscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listpipelineexecutionstepscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listpipelineexecutionstepscommandoutput.html)

</details>
<details>
<summary>
ListPipelineParametersForExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listpipelineparametersforexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listpipelineparametersforexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listpipelineparametersforexecutioncommandoutput.html)

</details>
<details>
<summary>
ListPipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listpipelinescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listpipelinescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listpipelinescommandoutput.html)

</details>
<details>
<summary>
ListProcessingJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listprocessingjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listprocessingjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listprocessingjobscommandoutput.html)

</details>
<details>
<summary>
ListProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listprojectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listprojectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listprojectscommandoutput.html)

</details>
<details>
<summary>
ListResourceCatalogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listresourcecatalogscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listresourcecatalogscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listresourcecatalogscommandoutput.html)

</details>
<details>
<summary>
ListSpaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listspacescommandoutput.html)

</details>
<details>
<summary>
ListStageDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/liststagedevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/liststagedevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/liststagedevicescommandoutput.html)

</details>
<details>
<summary>
ListStudioLifecycleConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/liststudiolifecycleconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/liststudiolifecycleconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/liststudiolifecycleconfigscommandoutput.html)

</details>
<details>
<summary>
ListSubscribedWorkteams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listsubscribedworkteamscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listsubscribedworkteamscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listsubscribedworkteamscommandoutput.html)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtagscommandoutput.html)

</details>
<details>
<summary>
ListTrainingJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listtrainingjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtrainingjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtrainingjobscommandoutput.html)

</details>
<details>
<summary>
ListTrainingJobsForHyperParameterTuningJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listtrainingjobsforhyperparametertuningjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtrainingjobsforhyperparametertuningjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtrainingjobsforhyperparametertuningjobcommandoutput.html)

</details>
<details>
<summary>
ListTransformJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listtransformjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtransformjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtransformjobscommandoutput.html)

</details>
<details>
<summary>
ListTrialComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listtrialcomponentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtrialcomponentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtrialcomponentscommandoutput.html)

</details>
<details>
<summary>
ListTrials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listtrialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtrialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listtrialscommandoutput.html)

</details>
<details>
<summary>
ListUserProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listuserprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listuserprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listuserprofilescommandoutput.html)

</details>
<details>
<summary>
ListWorkforces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listworkforcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listworkforcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listworkforcescommandoutput.html)

</details>
<details>
<summary>
ListWorkteams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/listworkteamscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listworkteamscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/listworkteamscommandoutput.html)

</details>
<details>
<summary>
PutModelPackageGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/putmodelpackagegrouppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/putmodelpackagegrouppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/putmodelpackagegrouppolicycommandoutput.html)

</details>
<details>
<summary>
QueryLineage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/querylineagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/querylineagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/querylineagecommandoutput.html)

</details>
<details>
<summary>
RegisterDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/registerdevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/registerdevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/registerdevicescommandoutput.html)

</details>
<details>
<summary>
RenderUiTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/renderuitemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/renderuitemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/renderuitemplatecommandoutput.html)

</details>
<details>
<summary>
RetryPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/retrypipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/retrypipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/retrypipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
Search
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/searchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/searchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/searchcommandoutput.html)

</details>
<details>
<summary>
SendPipelineExecutionStepFailure
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/sendpipelineexecutionstepfailurecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/sendpipelineexecutionstepfailurecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/sendpipelineexecutionstepfailurecommandoutput.html)

</details>
<details>
<summary>
SendPipelineExecutionStepSuccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/sendpipelineexecutionstepsuccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/sendpipelineexecutionstepsuccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/sendpipelineexecutionstepsuccesscommandoutput.html)

</details>
<details>
<summary>
StartEdgeDeploymentStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/startedgedeploymentstagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startedgedeploymentstagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startedgedeploymentstagecommandoutput.html)

</details>
<details>
<summary>
StartInferenceExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/startinferenceexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startinferenceexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startinferenceexperimentcommandoutput.html)

</details>
<details>
<summary>
StartMonitoringSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/startmonitoringschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startmonitoringschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startmonitoringschedulecommandoutput.html)

</details>
<details>
<summary>
StartNotebookInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/startnotebookinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startnotebookinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startnotebookinstancecommandoutput.html)

</details>
<details>
<summary>
StartPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/startpipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startpipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/startpipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
StopAutoMLJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopautomljobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopautomljobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopautomljobcommandoutput.html)

</details>
<details>
<summary>
StopCompilationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopcompilationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopcompilationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopcompilationjobcommandoutput.html)

</details>
<details>
<summary>
StopEdgeDeploymentStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopedgedeploymentstagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopedgedeploymentstagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopedgedeploymentstagecommandoutput.html)

</details>
<details>
<summary>
StopEdgePackagingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopedgepackagingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopedgepackagingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopedgepackagingjobcommandoutput.html)

</details>
<details>
<summary>
StopHyperParameterTuningJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stophyperparametertuningjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stophyperparametertuningjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stophyperparametertuningjobcommandoutput.html)

</details>
<details>
<summary>
StopInferenceExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopinferenceexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopinferenceexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopinferenceexperimentcommandoutput.html)

</details>
<details>
<summary>
StopInferenceRecommendationsJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopinferencerecommendationsjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopinferencerecommendationsjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopinferencerecommendationsjobcommandoutput.html)

</details>
<details>
<summary>
StopLabelingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stoplabelingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stoplabelingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stoplabelingjobcommandoutput.html)

</details>
<details>
<summary>
StopMonitoringSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopmonitoringschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopmonitoringschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopmonitoringschedulecommandoutput.html)

</details>
<details>
<summary>
StopNotebookInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopnotebookinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopnotebookinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopnotebookinstancecommandoutput.html)

</details>
<details>
<summary>
StopPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stoppipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stoppipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stoppipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
StopProcessingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stopprocessingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopprocessingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stopprocessingjobcommandoutput.html)

</details>
<details>
<summary>
StopTrainingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stoptrainingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stoptrainingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stoptrainingjobcommandoutput.html)

</details>
<details>
<summary>
StopTransformJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/stoptransformjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stoptransformjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/stoptransformjobcommandoutput.html)

</details>
<details>
<summary>
UpdateAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateactioncommandoutput.html)

</details>
<details>
<summary>
UpdateAppImageConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateappimageconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateappimageconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateappimageconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateartifactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateartifactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateartifactcommandoutput.html)

</details>
<details>
<summary>
UpdateCodeRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatecoderepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatecoderepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatecoderepositorycommandoutput.html)

</details>
<details>
<summary>
UpdateContext
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatecontextcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatecontextcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatecontextcommandoutput.html)

</details>
<details>
<summary>
UpdateDeviceFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatedevicefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatedevicefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatedevicefleetcommandoutput.html)

</details>
<details>
<summary>
UpdateDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatedevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatedevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatedevicescommandoutput.html)

</details>
<details>
<summary>
UpdateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatedomaincommandoutput.html)

</details>
<details>
<summary>
UpdateEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateendpointcommandoutput.html)

</details>
<details>
<summary>
UpdateEndpointWeightsAndCapacities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateendpointweightsandcapacitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateendpointweightsandcapacitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateendpointweightsandcapacitiescommandoutput.html)

</details>
<details>
<summary>
UpdateExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateexperimentcommandoutput.html)

</details>
<details>
<summary>
UpdateFeatureGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatefeaturegroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatefeaturegroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatefeaturegroupcommandoutput.html)

</details>
<details>
<summary>
UpdateFeatureMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatefeaturemetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatefeaturemetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatefeaturemetadatacommandoutput.html)

</details>
<details>
<summary>
UpdateHub
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatehubcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatehubcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatehubcommandoutput.html)

</details>
<details>
<summary>
UpdateImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateimagecommandoutput.html)

</details>
<details>
<summary>
UpdateImageVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateimageversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateimageversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateimageversioncommandoutput.html)

</details>
<details>
<summary>
UpdateInferenceExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateinferenceexperimentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateinferenceexperimentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateinferenceexperimentcommandoutput.html)

</details>
<details>
<summary>
UpdateModelCard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatemodelcardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatemodelcardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatemodelcardcommandoutput.html)

</details>
<details>
<summary>
UpdateModelPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatemodelpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatemodelpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatemodelpackagecommandoutput.html)

</details>
<details>
<summary>
UpdateMonitoringAlert
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatemonitoringalertcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatemonitoringalertcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatemonitoringalertcommandoutput.html)

</details>
<details>
<summary>
UpdateMonitoringSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatemonitoringschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatemonitoringschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatemonitoringschedulecommandoutput.html)

</details>
<details>
<summary>
UpdateNotebookInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatenotebookinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatenotebookinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatenotebookinstancecommandoutput.html)

</details>
<details>
<summary>
UpdateNotebookInstanceLifecycleConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatenotebookinstancelifecycleconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatenotebookinstancelifecycleconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatenotebookinstancelifecycleconfigcommandoutput.html)

</details>
<details>
<summary>
UpdatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatepipelinecommandoutput.html)

</details>
<details>
<summary>
UpdatePipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatepipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatepipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatepipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
UpdateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateprojectcommandoutput.html)

</details>
<details>
<summary>
UpdateSpace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatespacecommandoutput.html)

</details>
<details>
<summary>
UpdateTrainingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatetrainingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatetrainingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatetrainingjobcommandoutput.html)

</details>
<details>
<summary>
UpdateTrial
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatetrialcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatetrialcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatetrialcommandoutput.html)

</details>
<details>
<summary>
UpdateTrialComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updatetrialcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatetrialcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updatetrialcomponentcommandoutput.html)

</details>
<details>
<summary>
UpdateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateuserprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateWorkforce
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateworkforcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateworkforcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateworkforcecommandoutput.html)

</details>
<details>
<summary>
UpdateWorkteam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/classes/updateworkteamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateworkteamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker/interfaces/updateworkteamcommandoutput.html)

</details>
