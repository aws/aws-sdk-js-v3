# @aws-sdk/client-swf-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-swf-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-swf-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-swf-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-swf-browser)

## Description

<fullname>Amazon Simple Workflow Service</fullname> <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a <i>task</i> represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application.</p> <p>Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state.</p> <p>This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the <i> <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a> </i>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-swf-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`SWFClient`) and the commands you need, for example `CountClosedWorkflowExecutionsCommand`:

```javascript
//javascript
const { SWFClient } = require("@aws-sdk/client-swf-browser/SWFClient");
const {
  CountClosedWorkflowExecutionsCommand
} = require("@aws-sdk/client-swf-browser/commands/CountClosedWorkflowExecutionsCommand");
```

```javascript
//typescript
const { SWFClient } = import '@aws-sdk/client-swf-browser/SWFClient';
const { CountClosedWorkflowExecutionsCommand } = import '@aws-sdk/client-swf-browser/commands/CountClosedWorkflowExecutionsCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const sWF = new SWFClient({region: 'region'});
//clients can be shared by different commands
const params = {
  domain: /**a string value*/,
};
const countClosedWorkflowExecutionsCommand = new CountClosedWorkflowExecutionsCommand(params);
sWF.send(countClosedWorkflowExecutionsCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await sWF.send(countClosedWorkflowExecutionsCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
sWF.send(countClosedWorkflowExecutionsCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-swf-browser/SWF";
const sWF = new AWS.SWF({ region: "region" });
sWF.countClosedWorkflowExecutions(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await sWF.send(countClosedWorkflowExecutionsCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-swf-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
