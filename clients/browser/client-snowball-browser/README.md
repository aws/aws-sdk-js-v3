# @aws-sdk/client-snowball-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-snowball-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-snowball-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-snowball-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-snowball-browser)

## Description

<p>AWS Snowball is a petabyte-scale data transport solution that uses secure devices to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The commands described here provide access to the same functionality that is available in the AWS Snowball Management Console, which enables you to create and manage jobs for Snowball and Snowball Edge devices. To transfer data locally with a device, you'll need to use the Snowball client or the Amazon S3 API adapter for Snowball.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-snowball-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`SnowballClient`) and the commands you need, for example `CancelClusterCommand`:

```javascript
//JavaScript
const {
  SnowballClient
} = require("@aws-sdk/client-snowball-browser/SnowballClient");
const {
  CancelClusterCommand
} = require("@aws-sdk/client-snowball-browser/commands/CancelClusterCommand");
```

```javascript
//TypeScript
import { SnowballClient } from "@aws-sdk/client-snowball-browser/SnowballClient";
import { CancelClusterCommand } from "@aws-sdk/client-snowball-browser/commands/CancelClusterCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const snowball = new SnowballClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ClusterId: /**a string value*/,
};
const cancelClusterCommand = new CancelClusterCommand(params);
snowball.send(cancelClusterCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await snowball.send(cancelClusterCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
snowball.send(cancelClusterCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-snowball-browser/Snowball";
const snowball = new AWS.Snowball({ region: "region" });
snowball.cancelCluster(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await snowball.send(cancelClusterCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-snowball-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
