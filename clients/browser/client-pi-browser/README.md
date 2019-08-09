# @aws-sdk/client-pi-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-pi-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-pi-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-pi-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-pi-browser)

## Description

<p>AWS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running RDS instance. The guide provides detailed information about Performance Insights data types, parameters and errors. For more information about Performance Insights capabilities see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon RDS Performance Insights </a> in the <i>Amazon RDS User Guide</i>.</p> <p> The AWS Performance Insights API provides visibility into the performance of your RDS instance, when Performance Insights is enabled for supported engine types. While Amazon CloudWatch provides the authoritative source for AWS service vended monitoring metrics, AWS Performance Insights offers a domain-specific view of database load measured as Average Active Sessions and provided to API consumers as a 2-dimensional time-series dataset. The time dimension of the data provides DB load data for each time point in the queried time range, and each time point decomposes overall load in relation to the requested dimensions, such as SQL, Wait-event, User or Host, measured at that time point.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-pi-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`PIClient`) and the commands you need, for example `DescribeDimensionKeysCommand`:

```javascript
//javascript
const { PIClient } = require("@aws-sdk/client-pi-browser/PIClient");
const {
  DescribeDimensionKeysCommand
} = require("@aws-sdk/client-pi-browser/commands/DescribeDimensionKeysCommand");
```

```javascript
//typescript
const { PIClient } = import '@aws-sdk/client-pi-browser/PIClient';
const { DescribeDimensionKeysCommand } = import '@aws-sdk/client-pi-browser/commands/DescribeDimensionKeysCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const pI = new PIClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ServiceType: /**a string value*/,
  Identifier: /**a string value*/,
  StartTime: /**a timestamp can be number, string or Date object*/,
  EndTime: /**a timestamp can be number, string or Date object*/,
  Metric: /**a string value*/,
  GroupBy: { /**an object specifying GroupBy*/ },
};
const describeDimensionKeysCommand = new DescribeDimensionKeysCommand(params);
pI.send(describeDimensionKeysCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await pI.send(describeDimensionKeysCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
pI.send(describeDimensionKeysCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-pi-browser/PI";
const pI = new AWS.PI({ region: "region" });
pI.describeDimensionKeys(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await pI.send(describeDimensionKeysCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-pi-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
