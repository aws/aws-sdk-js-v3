<!-- generated file, do not edit directly -->

# @aws-sdk/client-vpc-lattice

## Description

AWS SDK for JavaScript VPCLattice Client for Node.js, Browser and React Native.

<p>Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure,
and monitor all of your services across multiple accounts and virtual private clouds (VPCs).
Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that
you can discover and manage them more efficiently. For more information, see the <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/">Amazon VPC Lattice User Guide</a>
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-vpc-lattice
using your favorite package manager:

- `npm install @aws-sdk/client-vpc-lattice`
- `yarn add @aws-sdk/client-vpc-lattice`
- `pnpm add @aws-sdk/client-vpc-lattice`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `VPCLatticeClient` and
the commands you need, for example `BatchUpdateRuleCommand`:

```js
// ES5 example
const { VPCLatticeClient, BatchUpdateRuleCommand } = require("@aws-sdk/client-vpc-lattice");
```

```ts
// ES6+ example
import { VPCLatticeClient, BatchUpdateRuleCommand } from "@aws-sdk/client-vpc-lattice";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new VPCLatticeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BatchUpdateRuleCommand(params);
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
import * as AWS from "@aws-sdk/client-vpc-lattice";
const client = new AWS.VPCLattice({ region: "REGION" });

// async/await.
try {
  const data = await client.batchUpdateRule(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchUpdateRule(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchUpdateRule(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-vpc-lattice` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchUpdateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/batchupdaterulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/batchupdaterulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/batchupdaterulecommandoutput.html)

</details>
<details>
<summary>
CreateAccessLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/createaccesslogsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createaccesslogsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createaccesslogsubscriptioncommandoutput.html)

</details>
<details>
<summary>
CreateListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/createlistenercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createlistenercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createlistenercommandoutput.html)

</details>
<details>
<summary>
CreateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/createrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createrulecommandoutput.html)

</details>
<details>
<summary>
CreateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/createservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createservicecommandoutput.html)

</details>
<details>
<summary>
CreateServiceNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/createservicenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createservicenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createservicenetworkcommandoutput.html)

</details>
<details>
<summary>
CreateServiceNetworkServiceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/createservicenetworkserviceassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createservicenetworkserviceassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createservicenetworkserviceassociationcommandoutput.html)

</details>
<details>
<summary>
CreateServiceNetworkVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/createservicenetworkvpcassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createservicenetworkvpcassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createservicenetworkvpcassociationcommandoutput.html)

</details>
<details>
<summary>
CreateTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/createtargetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createtargetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/createtargetgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteAccessLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deleteaccesslogsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteaccesslogsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteaccesslogsubscriptioncommandoutput.html)

</details>
<details>
<summary>
DeleteAuthPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deleteauthpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteauthpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteauthpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deletelistenercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deletelistenercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deletelistenercommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deleterulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleterulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleterulecommandoutput.html)

</details>
<details>
<summary>
DeleteService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deleteservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteservicecommandoutput.html)

</details>
<details>
<summary>
DeleteServiceNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deleteservicenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteservicenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteservicenetworkcommandoutput.html)

</details>
<details>
<summary>
DeleteServiceNetworkServiceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deleteservicenetworkserviceassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteservicenetworkserviceassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteservicenetworkserviceassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteServiceNetworkVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deleteservicenetworkvpcassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteservicenetworkvpcassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deleteservicenetworkvpcassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deletetargetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deletetargetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deletetargetgroupcommandoutput.html)

</details>
<details>
<summary>
DeregisterTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/deregistertargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deregistertargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/deregistertargetscommandoutput.html)

</details>
<details>
<summary>
GetAccessLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getaccesslogsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getaccesslogsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getaccesslogsubscriptioncommandoutput.html)

</details>
<details>
<summary>
GetAuthPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getauthpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getauthpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getauthpolicycommandoutput.html)

</details>
<details>
<summary>
GetListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getlistenercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getlistenercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getlistenercommandoutput.html)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getresourcepolicycommandoutput.html)

</details>
<details>
<summary>
GetRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getrulecommandoutput.html)

</details>
<details>
<summary>
GetService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getservicecommandoutput.html)

</details>
<details>
<summary>
GetServiceNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getservicenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getservicenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getservicenetworkcommandoutput.html)

</details>
<details>
<summary>
GetServiceNetworkServiceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getservicenetworkserviceassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getservicenetworkserviceassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getservicenetworkserviceassociationcommandoutput.html)

</details>
<details>
<summary>
GetServiceNetworkVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/getservicenetworkvpcassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getservicenetworkvpcassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/getservicenetworkvpcassociationcommandoutput.html)

</details>
<details>
<summary>
GetTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/gettargetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/gettargetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/gettargetgroupcommandoutput.html)

</details>
<details>
<summary>
ListAccessLogSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listaccesslogsubscriptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listaccesslogsubscriptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listaccesslogsubscriptionscommandoutput.html)

</details>
<details>
<summary>
ListListeners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listlistenerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listlistenerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listlistenerscommandoutput.html)

</details>
<details>
<summary>
ListRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listrulescommandoutput.html)

</details>
<details>
<summary>
ListServiceNetworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listservicenetworkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listservicenetworkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listservicenetworkscommandoutput.html)

</details>
<details>
<summary>
ListServiceNetworkServiceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listservicenetworkserviceassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listservicenetworkserviceassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listservicenetworkserviceassociationscommandoutput.html)

</details>
<details>
<summary>
ListServiceNetworkVpcAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listservicenetworkvpcassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listservicenetworkvpcassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listservicenetworkvpcassociationscommandoutput.html)

</details>
<details>
<summary>
ListServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listservicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listservicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listservicescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listtargetgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listtargetgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listtargetgroupscommandoutput.html)

</details>
<details>
<summary>
ListTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/listtargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listtargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/listtargetscommandoutput.html)

</details>
<details>
<summary>
PutAuthPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/putauthpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/putauthpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/putauthpolicycommandoutput.html)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/putresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/putresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/putresourcepolicycommandoutput.html)

</details>
<details>
<summary>
RegisterTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/registertargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/registertargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/registertargetscommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAccessLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/updateaccesslogsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updateaccesslogsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updateaccesslogsubscriptioncommandoutput.html)

</details>
<details>
<summary>
UpdateListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/updatelistenercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updatelistenercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updatelistenercommandoutput.html)

</details>
<details>
<summary>
UpdateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/updaterulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updaterulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updaterulecommandoutput.html)

</details>
<details>
<summary>
UpdateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/updateservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updateservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updateservicecommandoutput.html)

</details>
<details>
<summary>
UpdateServiceNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/updateservicenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updateservicenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updateservicenetworkcommandoutput.html)

</details>
<details>
<summary>
UpdateServiceNetworkVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/updateservicenetworkvpcassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updateservicenetworkvpcassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updateservicenetworkvpcassociationcommandoutput.html)

</details>
<details>
<summary>
UpdateTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/classes/updatetargetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updatetargetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-vpc-lattice/interfaces/updatetargetgroupcommandoutput.html)

</details>
