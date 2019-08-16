# @aws-sdk/client-dax-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-dax-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-dax-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-dax-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-dax-browser)

## Description

<p>DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-dax-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`DAXClient`) and the commands you need, for example `CreateClusterCommand`:

```javascript
//JavaScript
const { DAXClient } = require("@aws-sdk/client-dax-browser/DAXClient");
const {
  CreateClusterCommand
} = require("@aws-sdk/client-dax-browser/commands/CreateClusterCommand");
```

```javascript
//TypeScript
import { DAXClient } from "@aws-sdk/client-dax-browser/DAXClient";
import { CreateClusterCommand } from "@aws-sdk/client-dax-browser/commands/CreateClusterCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const dAX = new DAXClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ClusterName: /**a string value*/,
  NodeType: /**a string value*/,
  ReplicationFactor: /**a integer value*/,
  IamRoleArn: /**a string value*/,
};
const createClusterCommand = new CreateClusterCommand(params);
dAX.send(createClusterCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await dAX.send(createClusterCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
dAX.send(createClusterCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-dax-browser/DAX";
const dAX = new AWS.DAX({ region: "region" });
dAX.createCluster(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await dAX.send(createClusterCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-dax-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
