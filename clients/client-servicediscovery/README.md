<!-- generated file, do not edit directly -->

# @aws-sdk/client-servicediscovery

## Description

AWS SDK for JavaScript ServiceDiscovery Client for Node.js, Browser and React Native.

<fullname>Cloud Map</fullname>

<p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your
microservice applications run in. When an instance becomes available, you can call the Cloud Map
API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map
automatically creates DNS records and an optional health check. Clients that submit public or
private DNS queries, or HTTP requests, for the service receive an answer that contains up to
eight healthy records. </p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-servicediscovery
using your favorite package manager:

- `npm install @aws-sdk/client-servicediscovery`
- `yarn add @aws-sdk/client-servicediscovery`
- `pnpm add @aws-sdk/client-servicediscovery`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ServiceDiscoveryClient` and
the commands you need, for example `CreateHttpNamespaceCommand`:

```js
// ES5 example
const { ServiceDiscoveryClient, CreateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery");
```

```ts
// ES6+ example
import { ServiceDiscoveryClient, CreateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ServiceDiscoveryClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateHttpNamespaceCommand(params);
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
import * as AWS from "@aws-sdk/client-servicediscovery";
const client = new AWS.ServiceDiscovery({ region: "REGION" });

// async/await.
try {
  const data = await client.createHttpNamespace(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createHttpNamespace(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createHttpNamespace(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-servicediscovery` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateHttpNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/createhttpnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/createhttpnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/createhttpnamespacecommandoutput.html)

</details>
<details>
<summary>
CreatePrivateDnsNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/createprivatednsnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/createprivatednsnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/createprivatednsnamespacecommandoutput.html)

</details>
<details>
<summary>
CreatePublicDnsNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/createpublicdnsnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/createpublicdnsnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/createpublicdnsnamespacecommandoutput.html)

</details>
<details>
<summary>
CreateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/createservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/createservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/createservicecommandoutput.html)

</details>
<details>
<summary>
DeleteNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/deletenamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/deletenamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/deletenamespacecommandoutput.html)

</details>
<details>
<summary>
DeleteService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/deleteservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/deleteservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/deleteservicecommandoutput.html)

</details>
<details>
<summary>
DeregisterInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/deregisterinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/deregisterinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/deregisterinstancecommandoutput.html)

</details>
<details>
<summary>
DiscoverInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/discoverinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/discoverinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/discoverinstancescommandoutput.html)

</details>
<details>
<summary>
GetInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/getinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getinstancecommandoutput.html)

</details>
<details>
<summary>
GetInstancesHealthStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/getinstanceshealthstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getinstanceshealthstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getinstanceshealthstatuscommandoutput.html)

</details>
<details>
<summary>
GetNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/getnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getnamespacecommandoutput.html)

</details>
<details>
<summary>
GetOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/getoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getoperationcommandoutput.html)

</details>
<details>
<summary>
GetService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/getservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/getservicecommandoutput.html)

</details>
<details>
<summary>
ListInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/listinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listinstancescommandoutput.html)

</details>
<details>
<summary>
ListNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/listnamespacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listnamespacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listnamespacescommandoutput.html)

</details>
<details>
<summary>
ListOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/listoperationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listoperationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listoperationscommandoutput.html)

</details>
<details>
<summary>
ListServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/listservicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listservicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listservicescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
RegisterInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/registerinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/registerinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/registerinstancecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateHttpNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/updatehttpnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updatehttpnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updatehttpnamespacecommandoutput.html)

</details>
<details>
<summary>
UpdateInstanceCustomHealthStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/updateinstancecustomhealthstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updateinstancecustomhealthstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updateinstancecustomhealthstatuscommandoutput.html)

</details>
<details>
<summary>
UpdatePrivateDnsNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/updateprivatednsnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updateprivatednsnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updateprivatednsnamespacecommandoutput.html)

</details>
<details>
<summary>
UpdatePublicDnsNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/updatepublicdnsnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updatepublicdnsnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updatepublicdnsnamespacecommandoutput.html)

</details>
<details>
<summary>
UpdateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/classes/updateservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updateservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-servicediscovery/interfaces/updateservicecommandoutput.html)

</details>
