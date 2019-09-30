# @aws-sdk/client-cloudsearch-domain-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-cloudsearch-domain-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloudsearch-domain-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-cloudsearch-domain-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloudsearch-domain-node)

## Description

<p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p> <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p> <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-cloudsearch-domain-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`CloudSearchDomainClient`) and the commands you need, for example `UploadDocumentsCommand`:

```javascript
//JavaScript
const {
  CloudSearchDomainClient,
  UploadDocumentsCommand
} = require("@aws-sdk/client-cloudsearch-domain-node");
```

```javascript
//TypeScript
import {
  CloudSearchDomainClient,
  UploadDocumentsCommand
} from "@aws-sdk/client-cloudsearch-domain-node";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const cloudSearchDomain = new CloudSearchDomainClient({region: 'region'});
//clients can be shared by different commands
const params = {
  documents: /**a blob value*/
  /**You can supply readable stream to streaming input. e.g. fs.createReadStream(file) */,
  contentType: /**a string value*/,
};
const uploadDocumentsCommand = new UploadDocumentsCommand(params);
cloudSearchDomain.send(uploadDocumentsCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await cloudSearchDomain.send(uploadDocumentsCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
cloudSearchDomain.send(uploadDocumentsCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-cloudsearch-domain-node";
const cloudSearchDomain = new AWS.CloudSearchDomain({ region: "region" });
cloudSearchDomain.uploadDocuments(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await cloudSearchDomain.send(uploadDocumentsCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-cloudsearch-domain-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
