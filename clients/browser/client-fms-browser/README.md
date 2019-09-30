# @aws-sdk/client-fms-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-fms-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-fms-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-fms-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-fms-browser)

## Description

<fullname>AWS Firewall Manager</fullname> <p>This is the <i>AWS Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the AWS Firewall Manager API actions, data types, and errors. For detailed information about AWS Firewall Manager features, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">AWS Firewall Manager Developer Guide</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-fms-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`FMSClient`) and the commands you need, for example `AssociateAdminAccountCommand`:

```javascript
//JavaScript
const {
  FMSClient,
  AssociateAdminAccountCommand
} = require("@aws-sdk/client-fms-browser");
```

```javascript
//TypeScript
import {
  FMSClient,
  AssociateAdminAccountCommand
} from "@aws-sdk/client-fms-browser";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const fMS = new FMSClient({region: 'region'});
//clients can be shared by different commands
const params = {
  AdminAccount: /**a string value*/,
};
const associateAdminAccountCommand = new AssociateAdminAccountCommand(params);
fMS.send(associateAdminAccountCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await fMS.send(associateAdminAccountCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
fMS.send(associateAdminAccountCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-fms-browser";
const fMS = new AWS.FMS({ region: "region" });
fMS.associateAdminAccount(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await fMS.send(associateAdminAccountCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-fms-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
