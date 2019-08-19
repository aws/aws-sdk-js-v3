# @aws-sdk/client-waf-regional-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-waf-regional-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-waf-regional-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-waf-regional-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-waf-regional-node)

## Description

<p>This is the <i>AWS WAF Regional API Reference</i> for using AWS WAF with Elastic Load Balancing (ELB) Application Load Balancers. The AWS WAF actions and data types listed in the reference are available for protecting Application Load Balancers. You can use these actions and data types by means of the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Regions and Endpoints</a>. This guide is for developers who need detailed information about the AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-waf-regional-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`WAFRegionalClient`) and the commands you need, for example `AssociateWebACLCommand`:

```javascript
//JavaScript
const {
  WAFRegionalClient
} = require("@aws-sdk/client-waf-regional-node/WAFRegionalClient");
const {
  AssociateWebACLCommand
} = require("@aws-sdk/client-waf-regional-node/commands/AssociateWebACLCommand");
```

```javascript
//TypeScript
import { WAFRegionalClient } from "@aws-sdk/client-waf-regional-node/WAFRegionalClient";
import { AssociateWebACLCommand } from "@aws-sdk/client-waf-regional-node/commands/AssociateWebACLCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const wAFRegional = new WAFRegionalClient({region: 'region'});
//clients can be shared by different commands
const params = {
  WebACLId: /**a string value*/,
  ResourceArn: /**a string value*/,
};
const associateWebACLCommand = new AssociateWebACLCommand(params);
wAFRegional.send(associateWebACLCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await wAFRegional.send(associateWebACLCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
wAFRegional.send(associateWebACLCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-waf-regional-node/WAFRegional";
const wAFRegional = new AWS.WAFRegional({ region: "region" });
wAFRegional.associateWebACL(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await wAFRegional.send(associateWebACLCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-waf-regional-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
