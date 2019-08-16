# @aws-sdk/client-app-mesh-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-app-mesh-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-app-mesh-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-app-mesh-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-app-mesh-node)

## Description

<p>AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and
         control microservices. App Mesh standardizes how your microservices communicate, giving you
         end-to-end visibility and helping to ensure high availability for your applications.</p>
         <p>App Mesh gives you consistent visibility and network traffic controls for every
         microservice in an application. You can use App Mesh with AWS Fargate, Amazon ECS, Amazon EKS,
         Kubernetes on AWS, and Amazon EC2.</p>
         <note>
            <p>App Mesh supports microservice applications that use service discovery naming for their
            components. For more information about service discovery on Amazon ECS, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the
               <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> and
               <code>coredns</code> are supported. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
               for Services and Pods</a> in the Kubernetes documentation.</p>
         </note>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-app-mesh-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`AppMeshClient`) and the commands you need, for example `CreateMeshCommand`:

```javascript
//JavaScript
const {
  AppMeshClient
} = require("@aws-sdk/client-app-mesh-node/AppMeshClient");
const {
  CreateMeshCommand
} = require("@aws-sdk/client-app-mesh-node/commands/CreateMeshCommand");
```

```javascript
//TypeScript
import { AppMeshClient } from "@aws-sdk/client-app-mesh-node/AppMeshClient";
import { CreateMeshCommand } from "@aws-sdk/client-app-mesh-node/commands/CreateMeshCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const appMesh = new AppMeshClient({region: 'region'});
//clients can be shared by different commands
const params = {
  meshName: /**a string value*/,
};
const createMeshCommand = new CreateMeshCommand(params);
appMesh.send(createMeshCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await appMesh.send(createMeshCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
appMesh.send(createMeshCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-app-mesh-node/AppMesh";
const appMesh = new AWS.AppMesh({ region: "region" });
appMesh.createMesh(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await appMesh.send(createMeshCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-app-mesh-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
