# @aws-sdk/client-athena-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-athena-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-athena-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-athena-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-athena-browser)

## Description

<p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing Amazon Athena with JDBC</a>.</p> <p>For code samples using the AWS SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-athena-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`AthenaClient`) and the commands you need, for example `BatchGetNamedQueryCommand`:

```javascript
//JavaScript
const { AthenaClient } = require("@aws-sdk/client-athena-browser/AthenaClient");
const {
  BatchGetNamedQueryCommand
} = require("@aws-sdk/client-athena-browser/commands/BatchGetNamedQueryCommand");
```

```javascript
//TypeScript
import { AthenaClient } from "@aws-sdk/client-athena-browser/AthenaClient";
import { BatchGetNamedQueryCommand } from "@aws-sdk/client-athena-browser/commands/BatchGetNamedQueryCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const athena = new AthenaClient({ region: "region" });
//clients can be shared by different commands
const params = {
  NamedQueryIds: [
    /**a list of string*/
  ]
};
const batchGetNamedQueryCommand = new BatchGetNamedQueryCommand(params);
athena
  .send(batchGetNamedQueryCommand)
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
  const data = await athena.send(batchGetNamedQueryCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
athena.send(batchGetNamedQueryCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-athena-browser/Athena";
const athena = new AWS.Athena({ region: "region" });
athena.batchGetNamedQuery(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await athena.send(batchGetNamedQueryCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-athena-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
