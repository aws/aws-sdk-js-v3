# @aws-sdk/client-service-quotas-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-service-quotas-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-service-quotas-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-service-quotas-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-service-quotas-node)

## Description

<p> Service Quotas is a web service that you can use to manage many of your AWS service quotas. Quotas, also referred to as limits, are the maximum values for a resource, item, or operation. This guide provide descriptions of the Service Quotas actions that you can call from an API. For the Service Quotas user guide, which explains how to use Service Quotas from the console, see <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">What is Service Quotas</a>. </p> <note> <p>AWS provides SDKs that consist of libraries and sample code for programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc...,). The SDKs provide a convenient way to create programmatic access to Service Quotas and AWS. For information about the AWS SDKs, including how to download and install them, see the <a href="https://docs.aws.amazon.com/aws.amazon.com/tools">Tools for Amazon Web Services</a> page.</p> </note>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-service-quotas-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ServiceQuotasClient`) and the commands you need, for example `AssociateServiceQuotaTemplateCommand`:

```javascript
//javascript
const {
  ServiceQuotasClient
} = require("@aws-sdk/client-service-quotas-node/ServiceQuotasClient");
const {
  AssociateServiceQuotaTemplateCommand
} = require("@aws-sdk/client-service-quotas-node/commands/AssociateServiceQuotaTemplateCommand");
```

```javascript
//typescript
const { ServiceQuotasClient } = import '@aws-sdk/client-service-quotas-node/ServiceQuotasClient';
const { AssociateServiceQuotaTemplateCommand } = import '@aws-sdk/client-service-quotas-node/commands/AssociateServiceQuotaTemplateCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const serviceQuotas = new ServiceQuotasClient({ region: "region" });
//clients can be shared by different commands
const params = {};
const associateServiceQuotaTemplateCommand = new AssociateServiceQuotaTemplateCommand(
  params
);
serviceQuotas
  .send(associateServiceQuotaTemplateCommand)
  .then(data => {
    // do something
  })
  .catch(error => {
    // error handling
  });
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await serviceQuotas.send(associateServiceQuotaTemplateCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
serviceQuotas.send(associateServiceQuotaTemplateCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-service-quotas-node/ServiceQuotas";
const serviceQuotas = new AWS.ServiceQuotas({ region: "region" });
serviceQuotas.associateServiceQuotaTemplate(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await serviceQuotas.send(associateServiceQuotaTemplateCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-service-quotas-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
