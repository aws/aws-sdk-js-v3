# @aws-sdk/client-servicediscovery

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-servicediscovery/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-servicediscovery)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-servicediscovery.svg)](https://www.npmjs.com/package/@aws-sdk/client-servicediscovery)

## Description

<p>AWS Cloud Map lets you configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance of the service becomes available, you can call the AWS Cloud Map API to register the instance with AWS Cloud Map. For public or private DNS namespaces, AWS Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-servicediscovery
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ServiceDiscoveryClient`) and the commands you need, for example `CreateHttpNamespaceCommand`:

```javascript
//javascript
const {
  ServiceDiscoveryClient
} = require("@aws-sdk/client-servicediscovery/ServiceDiscoveryClient");
const {
  CreateHttpNamespaceCommand
} = require("@aws-sdk/client-servicediscovery/commands/CreateHttpNamespaceCommand");
```

```javascript
//typescript
const { ServiceDiscoveryClient } = import '@aws-sdk/client-servicediscovery/ServiceDiscoveryClient';
const { CreateHttpNamespaceCommand } = import '@aws-sdk/client-servicediscovery/commands/CreateHttpNamespaceCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const serviceDiscovery = new ServiceDiscoveryClient({region: 'region'});
//clients can be shared by different commands
const params = {
  Name: /**a string value*/,
};
const createHttpNamespaceCommand = new CreateHttpNamespaceCommand(params);
serviceDiscovery.send(createHttpNamespaceCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await serviceDiscovery.send(createHttpNamespaceCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
serviceDiscovery.send(createHttpNamespaceCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-servicediscovery/ServiceDiscovery";
const serviceDiscovery = new AWS.ServiceDiscovery({ region: "region" });
serviceDiscovery.createHttpNamespace(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await serviceDiscovery.send(createHttpNamespaceCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-servicediscovery' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
