# @aws-sdk/client-serverlessapplicationrepository-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-serverlessapplicationrepository-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-serverlessapplicationrepository-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-serverlessapplicationrepository-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-serverlessapplicationrepository-node)

## Description

<p>The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find
 and deploy serverless applications in the AWS Cloud. For more information about serverless applications,
 see Serverless Computing and Applications on the AWS website.</p><p>The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of 
 all levels can get started with serverless computing without needing to learn anything new. You can use category 
 keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots. 
 You can also search for applications by name, publisher, or event source. To use an application, you simply choose it, 
 configure any required fields, and deploy it with a few clicks. </p><p>You can also easily publish applications, sharing them publicly with the community at large, or privately
 within your team or across your organization. To publish a serverless application (or app), you can use the
 AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the
 code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.
 For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs
 GitHub repository.</p><p>The AWS Serverless Application Repository Developer Guide contains more information about the two developer
 experiences available:</p><ul>
 <li>
 <p>Consuming Applications – Browse for applications and view information about them, including
 source code and readme files. Also install, configure, and deploy applications of your choosing. </p>
 <p>Publishing Applications – Configure and upload applications to make them available to other
 developers, and publish new versions of applications. </p>
 </li>
 </ul>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-serverlessapplicationrepository-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ServerlessApplicationRepositoryClient`) and the commands you need, for example `CreateApplicationCommand`:

```javascript
//JavaScript
const {
  ServerlessApplicationRepositoryClient,
  CreateApplicationCommand
} = require("@aws-sdk/client-serverlessapplicationrepository-node");
```

```javascript
//TypeScript
import {
  ServerlessApplicationRepositoryClient,
  CreateApplicationCommand
} from "@aws-sdk/client-serverlessapplicationrepository-node";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const serverlessApplicationRepository = new ServerlessApplicationRepositoryClient({region: 'region'});
//clients can be shared by different commands
const params = {
  Author: /**a string value*/,
  Description: /**a string value*/,
  Name: /**a string value*/,
};
const createApplicationCommand = new CreateApplicationCommand(params);
serverlessApplicationRepository.send(createApplicationCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await serverlessApplicationRepository.send(
    createApplicationCommand
  );
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
serverlessApplicationRepository.send(createApplicationCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-serverlessapplicationrepository-node";
const serverlessApplicationRepository = new AWS.ServerlessApplicationRepository(
  { region: "region" }
);
serverlessApplicationRepository.createApplication(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await serverlessApplicationRepository.send(
    createApplicationCommand
  );
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-serverlessapplicationrepository-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
