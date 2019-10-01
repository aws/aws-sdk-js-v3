# @aws-sdk/client-ec2-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-ec2-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-ec2-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-ec2-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-ec2-node)

## Description

<fullname>Amazon Elastic Compute Cloud</fullname> <p>Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the AWS cloud. Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and deploy applications faster.</p> <p>To learn more, see the following resources:</p> <ul> <li> <p>Amazon EC2: <a href="http://aws.amazon.com/ec2">Amazon EC2 product page</a>, <a href="http://aws.amazon.com/documentation/ec2">Amazon EC2 documentation</a> </p> </li> <li> <p>Amazon EBS: <a href="http://aws.amazon.com/ebs">Amazon EBS product page</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon EBS documentation</a> </p> </li> <li> <p>Amazon VPC: <a href="http://aws.amazon.com/vpc">Amazon VPC product page</a>, <a href="http://aws.amazon.com/documentation/vpc">Amazon VPC documentation</a> </p> </li> <li> <p>AWS VPN: <a href="http://aws.amazon.com/vpn">AWS VPN product page</a>, <a href="http://aws.amazon.com/documentation/vpn">AWS VPN documentation</a> </p> </li> </ul>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-ec2-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`EC2Client`) and the commands you need, for example `AcceptReservedInstancesExchangeQuoteCommand`:

```javascript
//JavaScript
const {
  EC2Client,
  AcceptReservedInstancesExchangeQuoteCommand
} = require("@aws-sdk/client-ec2-node");
```

```javascript
//TypeScript
import {
  EC2Client,
  AcceptReservedInstancesExchangeQuoteCommand
} from "@aws-sdk/client-ec2-node";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const eC2 = new EC2Client({ region: "region" });
//clients can be shared by different commands
const params = {
  ReservedInstanceIds: [
    /**a list of string*/
  ]
};
const acceptReservedInstancesExchangeQuoteCommand = new AcceptReservedInstancesExchangeQuoteCommand(
  params
);
eC2
  .send(acceptReservedInstancesExchangeQuoteCommand)
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
  const data = await eC2.send(acceptReservedInstancesExchangeQuoteCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
eC2.send(acceptReservedInstancesExchangeQuoteCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-ec2-node";
const eC2 = new AWS.EC2({ region: "region" });
eC2.acceptReservedInstancesExchangeQuote(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await eC2.send(acceptReservedInstancesExchangeQuoteCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-ec2-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
