<!-- generated file, do not edit directly -->

# @aws-sdk/client-app-mesh

## Description

AWS SDK for JavaScript AppMesh Client for Node.js, Browser and React Native.

<p>App Mesh is a service mesh based on the Envoy proxy that makes it easy to
monitor and control microservices. App Mesh standardizes how your microservices
communicate, giving you end-to-end visibility and helping to ensure high availability for
your applications.</p>
<p>App Mesh gives you consistent visibility and network traffic controls for
every microservice in an application. You can use App Mesh with Amazon Web Services Fargate, Amazon ECS, Amazon EKS, Kubernetes on Amazon Web Services, and
Amazon EC2.</p>
<note>
<p>App Mesh supports microservice applications that use service discovery
naming for their components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes
<code>kube-dns</code> and <code>coredns</code> are supported. For more information,
see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
for Services and Pods</a> in the Kubernetes documentation.</p>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-app-mesh
using your favorite package manager:

- `npm install @aws-sdk/client-app-mesh`
- `yarn add @aws-sdk/client-app-mesh`
- `pnpm add @aws-sdk/client-app-mesh`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppMeshClient` and
the commands you need, for example `CreateGatewayRouteCommand`:

```js
// ES5 example
const { AppMeshClient, CreateGatewayRouteCommand } = require("@aws-sdk/client-app-mesh");
```

```ts
// ES6+ example
import { AppMeshClient, CreateGatewayRouteCommand } from "@aws-sdk/client-app-mesh";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AppMeshClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateGatewayRouteCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-app-mesh";
const client = new AWS.AppMesh({ region: "REGION" });

// async/await.
try {
  const data = await client.createGatewayRoute(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createGatewayRoute(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createGatewayRoute(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-app-mesh` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/creategatewayroutecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/creategatewayroutecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/creategatewayroutecommandoutput.html)

</details>
<details>
<summary>
CreateMesh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/createmeshcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createmeshcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createmeshcommandoutput.html)

</details>
<details>
<summary>
CreateRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/createroutecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createroutecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createroutecommandoutput.html)

</details>
<details>
<summary>
CreateVirtualGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/createvirtualgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createvirtualgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createvirtualgatewaycommandoutput.html)

</details>
<details>
<summary>
CreateVirtualNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/createvirtualnodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createvirtualnodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createvirtualnodecommandoutput.html)

</details>
<details>
<summary>
CreateVirtualRouter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/createvirtualroutercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createvirtualroutercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createvirtualroutercommandoutput.html)

</details>
<details>
<summary>
CreateVirtualService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/createvirtualservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createvirtualservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/createvirtualservicecommandoutput.html)

</details>
<details>
<summary>
DeleteGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/deletegatewayroutecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletegatewayroutecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletegatewayroutecommandoutput.html)

</details>
<details>
<summary>
DeleteMesh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/deletemeshcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletemeshcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletemeshcommandoutput.html)

</details>
<details>
<summary>
DeleteRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/deleteroutecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deleteroutecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deleteroutecommandoutput.html)

</details>
<details>
<summary>
DeleteVirtualGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/deletevirtualgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletevirtualgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletevirtualgatewaycommandoutput.html)

</details>
<details>
<summary>
DeleteVirtualNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/deletevirtualnodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletevirtualnodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletevirtualnodecommandoutput.html)

</details>
<details>
<summary>
DeleteVirtualRouter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/deletevirtualroutercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletevirtualroutercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletevirtualroutercommandoutput.html)

</details>
<details>
<summary>
DeleteVirtualService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/deletevirtualservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletevirtualservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/deletevirtualservicecommandoutput.html)

</details>
<details>
<summary>
DescribeGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/describegatewayroutecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describegatewayroutecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describegatewayroutecommandoutput.html)

</details>
<details>
<summary>
DescribeMesh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/describemeshcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describemeshcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describemeshcommandoutput.html)

</details>
<details>
<summary>
DescribeRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/describeroutecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describeroutecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describeroutecommandoutput.html)

</details>
<details>
<summary>
DescribeVirtualGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/describevirtualgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describevirtualgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describevirtualgatewaycommandoutput.html)

</details>
<details>
<summary>
DescribeVirtualNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/describevirtualnodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describevirtualnodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describevirtualnodecommandoutput.html)

</details>
<details>
<summary>
DescribeVirtualRouter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/describevirtualroutercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describevirtualroutercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describevirtualroutercommandoutput.html)

</details>
<details>
<summary>
DescribeVirtualService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/describevirtualservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describevirtualservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/describevirtualservicecommandoutput.html)

</details>
<details>
<summary>
ListGatewayRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/listgatewayroutescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listgatewayroutescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listgatewayroutescommandoutput.html)

</details>
<details>
<summary>
ListMeshes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/listmeshescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listmeshescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listmeshescommandoutput.html)

</details>
<details>
<summary>
ListRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/listroutescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listroutescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listroutescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListVirtualGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/listvirtualgatewayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listvirtualgatewayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listvirtualgatewayscommandoutput.html)

</details>
<details>
<summary>
ListVirtualNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/listvirtualnodescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listvirtualnodescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listvirtualnodescommandoutput.html)

</details>
<details>
<summary>
ListVirtualRouters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/listvirtualrouterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listvirtualrouterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listvirtualrouterscommandoutput.html)

</details>
<details>
<summary>
ListVirtualServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/listvirtualservicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listvirtualservicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/listvirtualservicescommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/updategatewayroutecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updategatewayroutecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updategatewayroutecommandoutput.html)

</details>
<details>
<summary>
UpdateMesh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/updatemeshcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatemeshcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatemeshcommandoutput.html)

</details>
<details>
<summary>
UpdateRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/updateroutecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updateroutecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updateroutecommandoutput.html)

</details>
<details>
<summary>
UpdateVirtualGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/updatevirtualgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatevirtualgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatevirtualgatewaycommandoutput.html)

</details>
<details>
<summary>
UpdateVirtualNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/updatevirtualnodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatevirtualnodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatevirtualnodecommandoutput.html)

</details>
<details>
<summary>
UpdateVirtualRouter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/updatevirtualroutercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatevirtualroutercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatevirtualroutercommandoutput.html)

</details>
<details>
<summary>
UpdateVirtualService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/classes/updatevirtualservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatevirtualservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-app-mesh/interfaces/updatevirtualservicecommandoutput.html)

</details>
