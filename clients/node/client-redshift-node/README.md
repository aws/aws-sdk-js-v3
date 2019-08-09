# @aws-sdk/client-redshift-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-redshift-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-redshift-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-redshift-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-redshift-node)

## Description

<fullname>Amazon Redshift</fullname> <p> <b>Overview</b> </p> <p>This is an interface reference for Amazon Redshift. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift clusters. Note that Amazon Redshift is asynchronous, which means that some interfaces may require techniques, such as polling or asynchronous callback handlers, to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a change is applied immediately, on the next instance reboot, or during the next maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the Amazon Redshift Management Interfaces</a>.</p> <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data warehouse: provisioning capacity, monitoring and backing up the cluster, and applying patches and upgrades to the Amazon Redshift engine. You can focus on using your data to acquire new insights for your business and customers.</p> <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p> <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design, build, query, and maintain the databases that make up your data warehouse. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-redshift-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`RedshiftClient`) and the commands you need, for example `AcceptReservedNodeExchangeCommand`:

```javascript
//javascript
const {
  RedshiftClient
} = require("@aws-sdk/client-redshift-node/RedshiftClient");
const {
  AcceptReservedNodeExchangeCommand
} = require("@aws-sdk/client-redshift-node/commands/AcceptReservedNodeExchangeCommand");
```

```javascript
//typescript
const { RedshiftClient } = import '@aws-sdk/client-redshift-node/RedshiftClient';
const { AcceptReservedNodeExchangeCommand } = import '@aws-sdk/client-redshift-node/commands/AcceptReservedNodeExchangeCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const redshift = new RedshiftClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ReservedNodeId: /**a string value*/,
  TargetReservedNodeOfferingId: /**a string value*/,
};
const acceptReservedNodeExchangeCommand = new AcceptReservedNodeExchangeCommand(params);
redshift.send(acceptReservedNodeExchangeCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await redshift.send(acceptReservedNodeExchangeCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
redshift.send(acceptReservedNodeExchangeCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-redshift-node/Redshift";
const redshift = new AWS.Redshift({ region: "region" });
redshift.acceptReservedNodeExchange(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await redshift.send(acceptReservedNodeExchangeCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-redshift-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
