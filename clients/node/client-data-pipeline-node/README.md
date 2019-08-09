# @aws-sdk/client-data-pipeline-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-data-pipeline-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-data-pipeline-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-data-pipeline-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-data-pipeline-node)

## Description

<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p> <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p> <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-data-pipeline-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`DataPipelineClient`) and the commands you need, for example `ActivatePipelineCommand`:

```javascript
//javascript
const {
  DataPipelineClient
} = require("@aws-sdk/client-data-pipeline-node/DataPipelineClient");
const {
  ActivatePipelineCommand
} = require("@aws-sdk/client-data-pipeline-node/commands/ActivatePipelineCommand");
```

```javascript
//typescript
const { DataPipelineClient } = import '@aws-sdk/client-data-pipeline-node/DataPipelineClient';
const { ActivatePipelineCommand } = import '@aws-sdk/client-data-pipeline-node/commands/ActivatePipelineCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const dataPipeline = new DataPipelineClient({region: 'region'});
//clients can be shared by different commands
const params = {
  pipelineId: /**a string value*/,
};
const activatePipelineCommand = new ActivatePipelineCommand(params);
dataPipeline.send(activatePipelineCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await dataPipeline.send(activatePipelineCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
dataPipeline.send(activatePipelineCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-data-pipeline-node/DataPipeline";
const dataPipeline = new AWS.DataPipeline({ region: "region" });
dataPipeline.activatePipeline(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await dataPipeline.send(activatePipelineCommand);
  // do something
} catch (error) {
  const metadata = error.$metadata;
  console.log(
    `requestId: ${metadata.requestId}
cfId: ${metadata.cfId}
extendedRequestId: ${metadata.extendedRequestId}`
  );
  /*
The keys within exceptions are also parsed. You can access them by specifying exception names:
    if(error.name === 'SomeServiceException') {
        const value = error.specialKeyInException;
    }
*/
}
```

## Getting Help

Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`
- Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3)
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues)

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-data-pipeline-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
