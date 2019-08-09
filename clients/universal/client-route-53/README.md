# @aws-sdk/client-route-53

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-route-53/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-route-53)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-route-53.svg)](https://www.npmjs.com/package/@aws-sdk/client-route-53)

## Description

<p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-route-53
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`Route53Client`) and the commands you need, for example `AssociateVPCWithHostedZoneCommand`:

```javascript
//javascript
const { Route53Client } = require("@aws-sdk/client-route-53/Route53Client");
const {
  AssociateVPCWithHostedZoneCommand
} = require("@aws-sdk/client-route-53/commands/AssociateVPCWithHostedZoneCommand");
```

```javascript
//typescript
const { Route53Client } = import '@aws-sdk/client-route-53/Route53Client';
const { AssociateVPCWithHostedZoneCommand } = import '@aws-sdk/client-route-53/commands/AssociateVPCWithHostedZoneCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const route53 = new Route53Client({region: 'region'});
//clients can be shared by different commands
const params = {
  HostedZoneId: /**a string value*/,
  VPC: { /**an object specifying VPC*/ },
};
const associateVPCWithHostedZoneCommand = new AssociateVPCWithHostedZoneCommand(params);
route53.send(associateVPCWithHostedZoneCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await route53.send(associateVPCWithHostedZoneCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
route53.send(associateVPCWithHostedZoneCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-route-53/Route53";
const route53 = new AWS.Route53({ region: "region" });
route53.associateVPCWithHostedZone(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await route53.send(associateVPCWithHostedZoneCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-route-53' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
