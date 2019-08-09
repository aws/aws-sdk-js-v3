# @aws-sdk/client-pinpoint-email-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-pinpoint-email-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-pinpoint-email-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-pinpoint-email-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-pinpoint-email-browser)

## Description

<fullname>Amazon Pinpoint Email Service</fullname> <p>This document contains reference information for the <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> Email API, version 1.0. This document is best used in conjunction with the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>.</p> <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Regions and Endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-pinpoint-email-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`PinpointEmailClient`) and the commands you need, for example `CreateConfigurationSetCommand`:

```javascript
//javascript
const {
  PinpointEmailClient
} = require("@aws-sdk/client-pinpoint-email-browser/PinpointEmailClient");
const {
  CreateConfigurationSetCommand
} = require("@aws-sdk/client-pinpoint-email-browser/commands/CreateConfigurationSetCommand");
```

```javascript
//typescript
const { PinpointEmailClient } = import '@aws-sdk/client-pinpoint-email-browser/PinpointEmailClient';
const { CreateConfigurationSetCommand } = import '@aws-sdk/client-pinpoint-email-browser/commands/CreateConfigurationSetCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const pinpointEmail = new PinpointEmailClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ConfigurationSetName: /**a string value*/,
};
const createConfigurationSetCommand = new CreateConfigurationSetCommand(params);
pinpointEmail.send(createConfigurationSetCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await pinpointEmail.send(createConfigurationSetCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
pinpointEmail.send(createConfigurationSetCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-pinpoint-email-browser/PinpointEmail";
const pinpointEmail = new AWS.PinpointEmail({ region: "region" });
pinpointEmail.createConfigurationSet(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await pinpointEmail.send(createConfigurationSetCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-pinpoint-email-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
