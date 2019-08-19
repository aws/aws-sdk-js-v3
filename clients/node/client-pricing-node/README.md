# @aws-sdk/client-pricing-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-pricing-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-pricing-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-pricing-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-pricing-node)

## Description

<p>AWS Price List Service API (AWS Price List Service) is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The AWS Price List Service uses standardized product attributes such as <code>Location</code>, <code>Storage Class</code>, and <code>Operating System</code>, and provides prices at the SKU level. You can use the AWS Price List Service to build cost control and scenario planning tools, reconcile billing data, forecast future spend for budgeting purposes, and provide cost benefit analysis that compare your internal workloads with AWS.</p> <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then <code>GetServices</code> with a service code to retreive the attribute names for that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code> to see what values are available for an attribute. With the service code and an attribute name and value, you can use <code>GetProducts</code> to find specific products that you're interested in, such as an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code> <code>volumeType</code>.</p> <p>Service Endpoint</p> <p>AWS Price List Service API provides the following two endpoints:</p> <ul> <li> <p>https://api.pricing.us-east-1.amazonaws.com</p> </li> <li> <p>https://api.pricing.ap-south-1.amazonaws.com</p> </li> </ul>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-pricing-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`PricingClient`) and the commands you need, for example `DescribeServicesCommand`:

```javascript
//JavaScript
const { PricingClient } = require("@aws-sdk/client-pricing-node/PricingClient");
const {
  DescribeServicesCommand
} = require("@aws-sdk/client-pricing-node/commands/DescribeServicesCommand");
```

```javascript
//TypeScript
import { PricingClient } from "@aws-sdk/client-pricing-node/PricingClient";
import { DescribeServicesCommand } from "@aws-sdk/client-pricing-node/commands/DescribeServicesCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const pricing = new PricingClient({ region: "region" });
//clients can be shared by different commands
const params = {};
const describeServicesCommand = new DescribeServicesCommand(params);
pricing
  .send(describeServicesCommand)
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
  const data = await pricing.send(describeServicesCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
pricing.send(describeServicesCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-pricing-node/Pricing";
const pricing = new AWS.Pricing({ region: "region" });
pricing.describeServices(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await pricing.send(describeServicesCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-pricing-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
