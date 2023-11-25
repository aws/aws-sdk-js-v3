<!-- generated file, do not edit directly -->

# @aws-sdk/client-opensearch

## Description

AWS SDK for JavaScript OpenSearch Client for Node.js, Browser and React Native.

<p>Use the Amazon OpenSearch Service configuration API to create, configure, and manage
OpenSearch Service domains.</p>
<p>For sample code that uses the configuration API, see the <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/opensearch-configuration-samples.html">
<i>Amazon OpenSearch Service Developer Guide</i>
</a>. The guide also
contains <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/request-signing.html">sample code</a> for
sending signed HTTP requests to the OpenSearch APIs. The endpoint for configuration service
requests is Region specific: es.<i>region</i>.amazonaws.com. For example,
es.us-east-1.amazonaws.com. For a current list of supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#service-regions">Amazon Web Services
service endpoints</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-opensearch
using your favorite package manager:

- `npm install @aws-sdk/client-opensearch`
- `yarn add @aws-sdk/client-opensearch`
- `pnpm add @aws-sdk/client-opensearch`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `OpenSearchClient` and
the commands you need, for example `ListDomainNamesCommand`:

```js
// ES5 example
const { OpenSearchClient, ListDomainNamesCommand } = require("@aws-sdk/client-opensearch");
```

```ts
// ES6+ example
import { OpenSearchClient, ListDomainNamesCommand } from "@aws-sdk/client-opensearch";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new OpenSearchClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListDomainNamesCommand(params);
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
import * as AWS from "@aws-sdk/client-opensearch";
const client = new AWS.OpenSearch({ region: "REGION" });

// async/await.
try {
  const data = await client.listDomainNames(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDomainNames(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDomainNames(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-opensearch` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptInboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/AcceptInboundConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/AcceptInboundConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/AcceptInboundConnectionCommandOutput/)

</details>
<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/AddTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/AddTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/AddTagsCommandOutput/)

</details>
<details>
<summary>
AssociatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/AssociatePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/AssociatePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/AssociatePackageCommandOutput/)

</details>
<details>
<summary>
AuthorizeVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/AuthorizeVpcEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/AuthorizeVpcEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/AuthorizeVpcEndpointAccessCommandOutput/)

</details>
<details>
<summary>
CancelServiceSoftwareUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/CancelServiceSoftwareUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CancelServiceSoftwareUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CancelServiceSoftwareUpdateCommandOutput/)

</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/CreateDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CreateDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CreateDomainCommandOutput/)

</details>
<details>
<summary>
CreateOutboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/CreateOutboundConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CreateOutboundConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CreateOutboundConnectionCommandOutput/)

</details>
<details>
<summary>
CreatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/CreatePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CreatePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CreatePackageCommandOutput/)

</details>
<details>
<summary>
CreateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/CreateVpcEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CreateVpcEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/CreateVpcEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DeleteDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeleteDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeleteDomainCommandOutput/)

</details>
<details>
<summary>
DeleteInboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DeleteInboundConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeleteInboundConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeleteInboundConnectionCommandOutput/)

</details>
<details>
<summary>
DeleteOutboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DeleteOutboundConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeleteOutboundConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeleteOutboundConnectionCommandOutput/)

</details>
<details>
<summary>
DeletePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DeletePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeletePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeletePackageCommandOutput/)

</details>
<details>
<summary>
DeleteVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DeleteVpcEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeleteVpcEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DeleteVpcEndpointCommandOutput/)

</details>
<details>
<summary>
DescribeDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainCommandOutput/)

</details>
<details>
<summary>
DescribeDomainAutoTunes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeDomainAutoTunesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainAutoTunesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainAutoTunesCommandOutput/)

</details>
<details>
<summary>
DescribeDomainChangeProgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeDomainChangeProgressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainChangeProgressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainChangeProgressCommandOutput/)

</details>
<details>
<summary>
DescribeDomainConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeDomainConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainConfigCommandOutput/)

</details>
<details>
<summary>
DescribeDomainHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeDomainHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainHealthCommandOutput/)

</details>
<details>
<summary>
DescribeDomainNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeDomainNodesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainNodesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainNodesCommandOutput/)

</details>
<details>
<summary>
DescribeDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDomainsCommandOutput/)

</details>
<details>
<summary>
DescribeDryRunProgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeDryRunProgressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDryRunProgressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeDryRunProgressCommandOutput/)

</details>
<details>
<summary>
DescribeInboundConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeInboundConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeInboundConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeInboundConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceTypeLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeInstanceTypeLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeInstanceTypeLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeInstanceTypeLimitsCommandOutput/)

</details>
<details>
<summary>
DescribeOutboundConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeOutboundConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeOutboundConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeOutboundConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribePackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribePackagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribePackagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribePackagesCommandOutput/)

</details>
<details>
<summary>
DescribeReservedInstanceOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeReservedInstanceOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeReservedInstanceOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeReservedInstanceOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeReservedInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeReservedInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeReservedInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeReservedInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DescribeVpcEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeVpcEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DescribeVpcEndpointsCommandOutput/)

</details>
<details>
<summary>
DissociatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/DissociatePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DissociatePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/DissociatePackageCommandOutput/)

</details>
<details>
<summary>
GetCompatibleVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/GetCompatibleVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetCompatibleVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetCompatibleVersionsCommandOutput/)

</details>
<details>
<summary>
GetDomainMaintenanceStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/GetDomainMaintenanceStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetDomainMaintenanceStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetDomainMaintenanceStatusCommandOutput/)

</details>
<details>
<summary>
GetPackageVersionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/GetPackageVersionHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetPackageVersionHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetPackageVersionHistoryCommandOutput/)

</details>
<details>
<summary>
GetUpgradeHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/GetUpgradeHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetUpgradeHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetUpgradeHistoryCommandOutput/)

</details>
<details>
<summary>
GetUpgradeStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/GetUpgradeStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetUpgradeStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/GetUpgradeStatusCommandOutput/)

</details>
<details>
<summary>
ListDomainMaintenances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListDomainMaintenancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListDomainMaintenancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListDomainMaintenancesCommandOutput/)

</details>
<details>
<summary>
ListDomainNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListDomainNamesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListDomainNamesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListDomainNamesCommandOutput/)

</details>
<details>
<summary>
ListDomainsForPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListDomainsForPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListDomainsForPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListDomainsForPackageCommandOutput/)

</details>
<details>
<summary>
ListInstanceTypeDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListInstanceTypeDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListInstanceTypeDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListInstanceTypeDetailsCommandOutput/)

</details>
<details>
<summary>
ListPackagesForDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListPackagesForDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListPackagesForDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListPackagesForDomainCommandOutput/)

</details>
<details>
<summary>
ListScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListScheduledActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListScheduledActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListScheduledActionsCommandOutput/)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListTagsCommandOutput/)

</details>
<details>
<summary>
ListVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListVersionsCommandOutput/)

</details>
<details>
<summary>
ListVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListVpcEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListVpcEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListVpcEndpointAccessCommandOutput/)

</details>
<details>
<summary>
ListVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListVpcEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListVpcEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListVpcEndpointsCommandOutput/)

</details>
<details>
<summary>
ListVpcEndpointsForDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/ListVpcEndpointsForDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListVpcEndpointsForDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/ListVpcEndpointsForDomainCommandOutput/)

</details>
<details>
<summary>
PurchaseReservedInstanceOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/PurchaseReservedInstanceOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/PurchaseReservedInstanceOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/PurchaseReservedInstanceOfferingCommandOutput/)

</details>
<details>
<summary>
RejectInboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/RejectInboundConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/RejectInboundConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/RejectInboundConnectionCommandOutput/)

</details>
<details>
<summary>
RemoveTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/RemoveTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/RemoveTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/RemoveTagsCommandOutput/)

</details>
<details>
<summary>
RevokeVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/RevokeVpcEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/RevokeVpcEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/RevokeVpcEndpointAccessCommandOutput/)

</details>
<details>
<summary>
StartDomainMaintenance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/StartDomainMaintenanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/StartDomainMaintenanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/StartDomainMaintenanceCommandOutput/)

</details>
<details>
<summary>
StartServiceSoftwareUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/StartServiceSoftwareUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/StartServiceSoftwareUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/StartServiceSoftwareUpdateCommandOutput/)

</details>
<details>
<summary>
UpdateDomainConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/UpdateDomainConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpdateDomainConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpdateDomainConfigCommandOutput/)

</details>
<details>
<summary>
UpdatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/UpdatePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpdatePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpdatePackageCommandOutput/)

</details>
<details>
<summary>
UpdateScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/UpdateScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpdateScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpdateScheduledActionCommandOutput/)

</details>
<details>
<summary>
UpdateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/UpdateVpcEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpdateVpcEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpdateVpcEndpointCommandOutput/)

</details>
<details>
<summary>
UpgradeDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opensearch/command/UpgradeDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpgradeDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opensearch/Interface/UpgradeDomainCommandOutput/)

</details>
