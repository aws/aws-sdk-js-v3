# @aws-sdk/client-config-service

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-config-service/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-config-service)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-config-service.svg)](https://www.npmjs.com/package/@aws-sdk/client-config-service)

## Description

<fullname>AWS Config</fullname> <p>AWS Config provides a way to keep track of the configurations of all the AWS resources associated with your AWS account. You can use AWS Config to get the current and historical configurations of each AWS resource and also to get information about the relationship between the resources. An AWS resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by AWS Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p> <p>You can access and manage AWS Config through the AWS Management Console, the AWS Command Line Interface (AWS CLI), the AWS Config API, or the AWS SDKs for AWS Config. This reference guide contains documentation for the AWS Config API and the AWS CLI commands that you can use to manage AWS Config. The AWS Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>. For detailed information about AWS Config features and their associated actions or commands, as well as how to work with AWS Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-config-service
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ConfigServiceClient`) and the commands you need, for example `BatchGetAggregateResourceConfigCommand`:

```javascript
//javascript
const {
  ConfigServiceClient
} = require("@aws-sdk/client-config-service/ConfigServiceClient");
const {
  BatchGetAggregateResourceConfigCommand
} = require("@aws-sdk/client-config-service/commands/BatchGetAggregateResourceConfigCommand");
```

```javascript
//typescript
const { ConfigServiceClient } = import '@aws-sdk/client-config-service/ConfigServiceClient';
const { BatchGetAggregateResourceConfigCommand } = import '@aws-sdk/client-config-service/commands/BatchGetAggregateResourceConfigCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const configService = new ConfigServiceClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ConfigurationAggregatorName: /**a string value*/,
  ResourceIdentifiers: [ /**a list of structure*/ ],
};
const batchGetAggregateResourceConfigCommand = new BatchGetAggregateResourceConfigCommand(params);
configService.send(batchGetAggregateResourceConfigCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await configService.send(batchGetAggregateResourceConfigCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
configService.send(batchGetAggregateResourceConfigCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-config-service/ConfigService";
const configService = new AWS.ConfigService({ region: "region" });
configService.batchGetAggregateResourceConfig(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await configService.send(batchGetAggregateResourceConfigCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-config-service' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
