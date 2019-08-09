# @aws-sdk/client-acm-pca-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-acm-pca-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-acm-pca-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-acm-pca-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-acm-pca-browser)

## Description

<p>This is the <i>ACM Private CA API Reference</i>. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing private certificate authorities (CA) for your organization.</p> <p>The documentation for each action shows the Query API request parameters and the XML response. Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="https://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p> <note> <p>Each ACM Private CA API action has a throttling limit which determines the number of times the action can be called per second. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaLimits.html#PcaLimits-api">API Rate Limits in ACM Private CA</a> in the ACM Private CA user guide.</p> </note>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-acm-pca-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ACMPCAClient`) and the commands you need, for example `CreateCertificateAuthorityCommand`:

```javascript
//javascript
const {
  ACMPCAClient
} = require("@aws-sdk/client-acm-pca-browser/ACMPCAClient");
const {
  CreateCertificateAuthorityCommand
} = require("@aws-sdk/client-acm-pca-browser/commands/CreateCertificateAuthorityCommand");
```

```javascript
//typescript
const { ACMPCAClient } = import '@aws-sdk/client-acm-pca-browser/ACMPCAClient';
const { CreateCertificateAuthorityCommand } = import '@aws-sdk/client-acm-pca-browser/commands/CreateCertificateAuthorityCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const aCMPCA = new ACMPCAClient({region: 'region'});
//clients can be shared by different commands
const params = {
  CertificateAuthorityConfiguration: { /**an object specifying CertificateAuthorityConfiguration*/ },
  CertificateAuthorityType: /**a string value*/,
};
const createCertificateAuthorityCommand = new CreateCertificateAuthorityCommand(params);
aCMPCA.send(createCertificateAuthorityCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await aCMPCA.send(createCertificateAuthorityCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
aCMPCA.send(createCertificateAuthorityCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-acm-pca-browser/ACMPCA";
const aCMPCA = new AWS.ACMPCA({ region: "region" });
aCMPCA.createCertificateAuthority(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await aCMPCA.send(createCertificateAuthorityCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-acm-pca-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
