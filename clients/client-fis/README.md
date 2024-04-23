<!-- generated file, do not edit directly -->

# @aws-sdk/client-fis

## Description

AWS SDK for JavaScript Fis Client for Node.js, Browser and React Native.

<p>Fault Injection Simulator is a managed service that enables you to perform fault injection
experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Simulator User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-fis
using your favorite package manager:

- `npm install @aws-sdk/client-fis`
- `yarn add @aws-sdk/client-fis`
- `pnpm add @aws-sdk/client-fis`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `FisClient` and
the commands you need, for example `ListActionsCommand`:

```js
// ES5 example
const { FisClient, ListActionsCommand } = require("@aws-sdk/client-fis");
```

```ts
// ES6+ example
import { FisClient, ListActionsCommand } from "@aws-sdk/client-fis";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new FisClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListActionsCommand(params);
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
import * as AWS from "@aws-sdk/client-fis";
const client = new AWS.Fis({ region: "REGION" });

// async/await.
try {
  const data = await client.listActions(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listActions(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listActions(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-fis` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateExperimentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/CreateExperimentTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/CreateExperimentTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/CreateExperimentTemplateCommandOutput/)

</details>
<details>
<summary>
CreateTargetAccountConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/CreateTargetAccountConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/CreateTargetAccountConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/CreateTargetAccountConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteExperimentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/DeleteExperimentTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/DeleteExperimentTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/DeleteExperimentTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteTargetAccountConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/DeleteTargetAccountConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/DeleteTargetAccountConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/DeleteTargetAccountConfigurationCommandOutput/)

</details>
<details>
<summary>
GetAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/GetActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetActionCommandOutput/)

</details>
<details>
<summary>
GetExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/GetExperimentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetExperimentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetExperimentCommandOutput/)

</details>
<details>
<summary>
GetExperimentTargetAccountConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/GetExperimentTargetAccountConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetExperimentTargetAccountConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetExperimentTargetAccountConfigurationCommandOutput/)

</details>
<details>
<summary>
GetExperimentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/GetExperimentTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetExperimentTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetExperimentTemplateCommandOutput/)

</details>
<details>
<summary>
GetTargetAccountConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/GetTargetAccountConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetTargetAccountConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetTargetAccountConfigurationCommandOutput/)

</details>
<details>
<summary>
GetTargetResourceType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/GetTargetResourceTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetTargetResourceTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/GetTargetResourceTypeCommandOutput/)

</details>
<details>
<summary>
ListActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/ListActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListActionsCommandOutput/)

</details>
<details>
<summary>
ListExperimentResolvedTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/ListExperimentResolvedTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListExperimentResolvedTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListExperimentResolvedTargetsCommandOutput/)

</details>
<details>
<summary>
ListExperiments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/ListExperimentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListExperimentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListExperimentsCommandOutput/)

</details>
<details>
<summary>
ListExperimentTargetAccountConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/ListExperimentTargetAccountConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListExperimentTargetAccountConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListExperimentTargetAccountConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListExperimentTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/ListExperimentTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListExperimentTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListExperimentTemplatesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTargetAccountConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/ListTargetAccountConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListTargetAccountConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListTargetAccountConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListTargetResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/ListTargetResourceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListTargetResourceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/ListTargetResourceTypesCommandOutput/)

</details>
<details>
<summary>
StartExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/StartExperimentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/StartExperimentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/StartExperimentCommandOutput/)

</details>
<details>
<summary>
StopExperiment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/StopExperimentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/StopExperimentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/StopExperimentCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateExperimentTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/UpdateExperimentTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/UpdateExperimentTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/UpdateExperimentTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateTargetAccountConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/fis/command/UpdateTargetAccountConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/UpdateTargetAccountConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-fis/Interface/UpdateTargetAccountConfigurationCommandOutput/)

</details>
