# @aws-sdk/client-macie-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-macie-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-macie-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-macie-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-macie-browser)

## Description

<fullname>Amazon Macie</fullname> <p>Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. Macie recognizes sensitive data such as personally identifiable information (PII) or intellectual property, and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved. For more information, see the <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">Macie User Guide</a>. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-macie-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`MacieClient`) and the commands you need, for example `AssociateMemberAccountCommand`:

```javascript
//JavaScript
const {
  MacieClient,
  AssociateMemberAccountCommand
} = require("@aws-sdk/client-macie-browser");
```

```javascript
//TypeScript
import {
  MacieClient,
  AssociateMemberAccountCommand
} from "@aws-sdk/client-macie-browser";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const macie = new MacieClient({region: 'region'});
//clients can be shared by different commands
const params = {
  memberAccountId: /**a string value*/,
};
const associateMemberAccountCommand = new AssociateMemberAccountCommand(params);
macie.send(associateMemberAccountCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await macie.send(associateMemberAccountCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
macie.send(associateMemberAccountCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-macie-browser";
const macie = new AWS.Macie({ region: "region" });
macie.associateMemberAccount(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await macie.send(associateMemberAccountCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-macie-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
