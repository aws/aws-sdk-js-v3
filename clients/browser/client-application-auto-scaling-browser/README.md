# @aws-sdk/client-application-auto-scaling-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-application-auto-scaling-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-application-auto-scaling-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-application-auto-scaling-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-application-auto-scaling-browser)

## Description

<p>With Application Auto Scaling, you can configure automatic scaling for your scalable resources. You can use Application Auto Scaling to accomplish the following tasks:</p> <ul> <li> <p>Define scaling policies to automatically scale your AWS or custom resources</p> </li> <li> <p>Scale your resources in response to CloudWatch alarms</p> </li> <li> <p>Schedule one-time or recurring scaling actions</p> </li> <li> <p>View the history of your scaling events</p> </li> </ul> <p>Application Auto Scaling can scale the following resources:</p> <ul> <li> <p>Amazon ECS services. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Auto Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>Amazon EC2 Spot fleets. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-auto-scaling.html">Automatic Scaling for Spot Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p> </li> <li> <p>Amazon EMR clusters. For more information, see <a href="https://docs.aws.amazon.com/ElasticMapReduce/latest/ManagementGuide/emr-automatic-scaling.html">Using Automatic Scaling in Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.</p> </li> <li> <p>AppStream 2.0 fleets. For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/autoscaling.html">Fleet Auto Scaling for Amazon AppStream 2.0</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p> </li> <li> <p>Provisioned read and write capacity for Amazon DynamoDB tables and global secondary indexes. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html">Managing Throughput Capacity Automatically with DynamoDB Auto Scaling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </li> <li> <p>Amazon Aurora Replicas. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html">Using Amazon Aurora Auto Scaling with Aurora Replicas</a>.</p> </li> <li> <p>Amazon SageMaker endpoint variants. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/endpoint-auto-scaling.html">Automatically Scaling Amazon SageMaker Models</a>.</p> </li> <li> <p>Custom resources provided by your own applications or services. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>. </p> </li> </ul> <p>To learn more about Application Auto Scaling, including information about granting IAM users required permissions for Application Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User Guide</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-application-auto-scaling-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ApplicationAutoScalingClient`) and the commands you need, for example `DeleteScalingPolicyCommand`:

```javascript
//JavaScript
const {
  ApplicationAutoScalingClient
} = require("@aws-sdk/client-application-auto-scaling-browser/ApplicationAutoScalingClient");
const {
  DeleteScalingPolicyCommand
} = require("@aws-sdk/client-application-auto-scaling-browser/commands/DeleteScalingPolicyCommand");
```

```javascript
//TypeScript
import { ApplicationAutoScalingClient } from "@aws-sdk/client-application-auto-scaling-browser/ApplicationAutoScalingClient";
import { DeleteScalingPolicyCommand } from "@aws-sdk/client-application-auto-scaling-browser/commands/DeleteScalingPolicyCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const applicationAutoScaling = new ApplicationAutoScalingClient({region: 'region'});
//clients can be shared by different commands
const params = {
  PolicyName: /**a string value*/,
  ServiceNamespace: /**a string value*/,
  ResourceId: /**a string value*/,
  ScalableDimension: /**a string value*/,
};
const deleteScalingPolicyCommand = new DeleteScalingPolicyCommand(params);
applicationAutoScaling.send(deleteScalingPolicyCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await applicationAutoScaling.send(deleteScalingPolicyCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
applicationAutoScaling.send(deleteScalingPolicyCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-application-auto-scaling-browser/ApplicationAutoScaling";
const applicationAutoScaling = new AWS.ApplicationAutoScaling({
  region: "region"
});
applicationAutoScaling.deleteScalingPolicy(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await applicationAutoScaling.send(deleteScalingPolicyCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-application-auto-scaling-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
