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

To install this package, simply type add or install @aws-sdk/client-app-mesh
using your favorite package manager:

- `npm install @aws-sdk/client-app-mesh`
- `yarn add @aws-sdk/client-app-mesh`
- `pnpm add @aws-sdk/client-app-mesh`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppMeshClient` and
the commands you need, for example `ListMeshesCommand`:

```js
// ES5 example
const { AppMeshClient, ListMeshesCommand } = require("@aws-sdk/client-app-mesh");
```

```ts
// ES6+ example
import { AppMeshClient, ListMeshesCommand } from "@aws-sdk/client-app-mesh";
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
const command = new ListMeshesCommand(params);
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
  const data = await client.listMeshes(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listMeshes(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listMeshes(params, (err, data) => {
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
  const { requestId, cfId, extendedRequestId } = error.$metadata;
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/CreateGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateGatewayRouteCommandOutput/)

</details>
<details>
<summary>
CreateMesh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/CreateMeshCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateMeshCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateMeshCommandOutput/)

</details>
<details>
<summary>
CreateRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/CreateRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateRouteCommandOutput/)

</details>
<details>
<summary>
CreateVirtualGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/CreateVirtualGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateVirtualGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateVirtualGatewayCommandOutput/)

</details>
<details>
<summary>
CreateVirtualNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/CreateVirtualNodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateVirtualNodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateVirtualNodeCommandOutput/)

</details>
<details>
<summary>
CreateVirtualRouter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/CreateVirtualRouterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateVirtualRouterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateVirtualRouterCommandOutput/)

</details>
<details>
<summary>
CreateVirtualService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/CreateVirtualServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateVirtualServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/CreateVirtualServiceCommandOutput/)

</details>
<details>
<summary>
DeleteGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DeleteGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteGatewayRouteCommandOutput/)

</details>
<details>
<summary>
DeleteMesh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DeleteMeshCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteMeshCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteMeshCommandOutput/)

</details>
<details>
<summary>
DeleteRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DeleteRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteRouteCommandOutput/)

</details>
<details>
<summary>
DeleteVirtualGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DeleteVirtualGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteVirtualGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteVirtualGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteVirtualNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DeleteVirtualNodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteVirtualNodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteVirtualNodeCommandOutput/)

</details>
<details>
<summary>
DeleteVirtualRouter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DeleteVirtualRouterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteVirtualRouterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteVirtualRouterCommandOutput/)

</details>
<details>
<summary>
DeleteVirtualService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DeleteVirtualServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteVirtualServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DeleteVirtualServiceCommandOutput/)

</details>
<details>
<summary>
DescribeGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DescribeGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeGatewayRouteCommandOutput/)

</details>
<details>
<summary>
DescribeMesh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DescribeMeshCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeMeshCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeMeshCommandOutput/)

</details>
<details>
<summary>
DescribeRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DescribeRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeRouteCommandOutput/)

</details>
<details>
<summary>
DescribeVirtualGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DescribeVirtualGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeVirtualGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeVirtualGatewayCommandOutput/)

</details>
<details>
<summary>
DescribeVirtualNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DescribeVirtualNodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeVirtualNodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeVirtualNodeCommandOutput/)

</details>
<details>
<summary>
DescribeVirtualRouter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DescribeVirtualRouterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeVirtualRouterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeVirtualRouterCommandOutput/)

</details>
<details>
<summary>
DescribeVirtualService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/DescribeVirtualServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeVirtualServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/DescribeVirtualServiceCommandOutput/)

</details>
<details>
<summary>
ListGatewayRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/ListGatewayRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListGatewayRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListGatewayRoutesCommandOutput/)

</details>
<details>
<summary>
ListMeshes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/ListMeshesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListMeshesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListMeshesCommandOutput/)

</details>
<details>
<summary>
ListRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/ListRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListRoutesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListVirtualGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/ListVirtualGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListVirtualGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListVirtualGatewaysCommandOutput/)

</details>
<details>
<summary>
ListVirtualNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/ListVirtualNodesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListVirtualNodesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListVirtualNodesCommandOutput/)

</details>
<details>
<summary>
ListVirtualRouters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/ListVirtualRoutersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListVirtualRoutersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListVirtualRoutersCommandOutput/)

</details>
<details>
<summary>
ListVirtualServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/ListVirtualServicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListVirtualServicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/ListVirtualServicesCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/UpdateGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateGatewayRouteCommandOutput/)

</details>
<details>
<summary>
UpdateMesh
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/UpdateMeshCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateMeshCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateMeshCommandOutput/)

</details>
<details>
<summary>
UpdateRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/UpdateRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateRouteCommandOutput/)

</details>
<details>
<summary>
UpdateVirtualGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/UpdateVirtualGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateVirtualGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateVirtualGatewayCommandOutput/)

</details>
<details>
<summary>
UpdateVirtualNode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/UpdateVirtualNodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateVirtualNodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateVirtualNodeCommandOutput/)

</details>
<details>
<summary>
UpdateVirtualRouter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/UpdateVirtualRouterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateVirtualRouterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateVirtualRouterCommandOutput/)

</details>
<details>
<summary>
UpdateVirtualService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/app-mesh/command/UpdateVirtualServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateVirtualServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-app-mesh/Interface/UpdateVirtualServiceCommandOutput/)

</details>
