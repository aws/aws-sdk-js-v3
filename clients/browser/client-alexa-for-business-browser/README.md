# @aws-sdk/client-alexa-for-business-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-alexa-for-business-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-alexa-for-business-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-alexa-for-business-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-alexa-for-business-browser)

## Description

<p>Alexa for Business helps you use Alexa in your organization. Alexa for Business provides you with the tools to manage Alexa devices, enroll your users, and assign skills, at scale. You can build your own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations. You can also make these available as private skills for your organization. Alexa for Business makes it efficient to voice-enable your products and services, thus providing context-aware voice experiences for your customers. Device makers building with the Alexa Voice Service (AVS) can create fully integrated solutions, register their products with Alexa for Business, and manage them as shared devices in their organization. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-alexa-for-business-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`AlexaForBusinessClient`) and the commands you need, for example `ApproveSkillCommand`:

```javascript
//JavaScript
const {
  AlexaForBusinessClient
} = require("@aws-sdk/client-alexa-for-business-browser/AlexaForBusinessClient");
const {
  ApproveSkillCommand
} = require("@aws-sdk/client-alexa-for-business-browser/commands/ApproveSkillCommand");
```

```javascript
//TypeScript
import { AlexaForBusinessClient } from "@aws-sdk/client-alexa-for-business-browser/AlexaForBusinessClient";
import { ApproveSkillCommand } from "@aws-sdk/client-alexa-for-business-browser/commands/ApproveSkillCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const alexaForBusiness = new AlexaForBusinessClient({region: 'region'});
//clients can be shared by different commands
const params = {
  SkillId: /**a string value*/,
};
const approveSkillCommand = new ApproveSkillCommand(params);
alexaForBusiness.send(approveSkillCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await alexaForBusiness.send(approveSkillCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
alexaForBusiness.send(approveSkillCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-alexa-for-business-browser/AlexaForBusiness";
const alexaForBusiness = new AWS.AlexaForBusiness({ region: "region" });
alexaForBusiness.approveSkill(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await alexaForBusiness.send(approveSkillCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-alexa-for-business-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
