# @aws-sdk/client-elastic-load-balancing-v2-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-elastic-load-balancing-v2-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-elastic-load-balancing-v2-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-elastic-load-balancing-v2-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-elastic-load-balancing-v2-node)

## Description

<fullname>Elastic Load Balancing</fullname> <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets.</p> <p>Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.</p> <p>An Application Load Balancer makes routing and load balancing decisions at the application layer (HTTP/HTTPS). A Network Load Balancer makes routing and load balancing decisions at the transport layer (TCP/TLS). Both Application Load Balancers and Network Load Balancers can route requests to one or more ports on each EC2 instance or container instance in your virtual private cloud (VPC).</p> <p>A Classic Load Balancer makes routing and load balancing decisions either at the transport layer (TCP/SSL) or the application layer (HTTP/HTTPS), and supports either EC2-Classic or a VPC. For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>This reference covers the 2015-12-01 API, which supports Application Load Balancers and Network Load Balancers. The 2012-06-01 API supports Classic Load Balancers.</p> <p>To get started, complete the following tasks:</p> <ol> <li> <p>Create a load balancer using <a>CreateLoadBalancer</a>.</p> </li> <li> <p>Create a target group using <a>CreateTargetGroup</a>.</p> </li> <li> <p>Register targets for the target group using <a>RegisterTargets</a>.</p> </li> <li> <p>Create one or more listeners for your load balancer using <a>CreateListener</a>.</p> </li> </ol> <p>To delete a load balancer and its related resources, complete the following tasks:</p> <ol> <li> <p>Delete the load balancer using <a>DeleteLoadBalancer</a>.</p> </li> <li> <p>Delete the target group using <a>DeleteTargetGroup</a>.</p> </li> </ol> <p>All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-elastic-load-balancing-v2-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ElasticLoadBalancingv2Client`) and the commands you need, for example `AddListenerCertificatesCommand`:

```javascript
//JavaScript
const {
  ElasticLoadBalancingv2Client
} = require("@aws-sdk/client-elastic-load-balancing-v2-node/ElasticLoadBalancingv2Client");
const {
  AddListenerCertificatesCommand
} = require("@aws-sdk/client-elastic-load-balancing-v2-node/commands/AddListenerCertificatesCommand");
```

```javascript
//TypeScript
import { ElasticLoadBalancingv2Client } from "@aws-sdk/client-elastic-load-balancing-v2-node/ElasticLoadBalancingv2Client";
import { AddListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2-node/commands/AddListenerCertificatesCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const elasticLoadBalancingv2 = new ElasticLoadBalancingv2Client({region: 'region'});
//clients can be shared by different commands
const params = {
  ListenerArn: /**a string value*/,
  Certificates: [ /**a list of structure*/ ],
};
const addListenerCertificatesCommand = new AddListenerCertificatesCommand(params);
elasticLoadBalancingv2.send(addListenerCertificatesCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await elasticLoadBalancingv2.send(
    addListenerCertificatesCommand
  );
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
elasticLoadBalancingv2.send(addListenerCertificatesCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-elastic-load-balancing-v2-node/ElasticLoadBalancingv2";
const elasticLoadBalancingv2 = new AWS.ElasticLoadBalancingv2({
  region: "region"
});
elasticLoadBalancingv2.addListenerCertificates(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await elasticLoadBalancingv2.send(
    addListenerCertificatesCommand
  );
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-elastic-load-balancing-v2-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
