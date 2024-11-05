<!-- generated file, do not edit directly -->

# @aws-sdk/client-elasticsearch-service

## Description

AWS SDK for JavaScript ElasticsearchService Client for Node.js, Browser and React Native.

<fullname>Amazon Elasticsearch Configuration Service</fullname>

<p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
<p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
<p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-elasticsearch-service
using your favorite package manager:

- `npm install @aws-sdk/client-elasticsearch-service`
- `yarn add @aws-sdk/client-elasticsearch-service`
- `pnpm add @aws-sdk/client-elasticsearch-service`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ElasticsearchServiceClient` and
the commands you need, for example `ListDomainNamesCommand`:

```js
// ES5 example
const { ElasticsearchServiceClient, ListDomainNamesCommand } = require("@aws-sdk/client-elasticsearch-service");
```

```ts
// ES6+ example
import { ElasticsearchServiceClient, ListDomainNamesCommand } from "@aws-sdk/client-elasticsearch-service";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ElasticsearchServiceClient({ region: "REGION" });

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
import * as AWS from "@aws-sdk/client-elasticsearch-service";
const client = new AWS.ElasticsearchService({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-elasticsearch-service` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptInboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/AcceptInboundCrossClusterSearchConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/AcceptInboundCrossClusterSearchConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/AcceptInboundCrossClusterSearchConnectionCommandOutput/)

</details>
<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/AddTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/AddTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/AddTagsCommandOutput/)

</details>
<details>
<summary>
AssociatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/AssociatePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/AssociatePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/AssociatePackageCommandOutput/)

</details>
<details>
<summary>
AuthorizeVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/AuthorizeVpcEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/AuthorizeVpcEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/AuthorizeVpcEndpointAccessCommandOutput/)

</details>
<details>
<summary>
CancelDomainConfigChange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/CancelDomainConfigChangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CancelDomainConfigChangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CancelDomainConfigChangeCommandOutput/)

</details>
<details>
<summary>
CancelElasticsearchServiceSoftwareUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/CancelElasticsearchServiceSoftwareUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CancelElasticsearchServiceSoftwareUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CancelElasticsearchServiceSoftwareUpdateCommandOutput/)

</details>
<details>
<summary>
CreateElasticsearchDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/CreateElasticsearchDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CreateElasticsearchDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CreateElasticsearchDomainCommandOutput/)

</details>
<details>
<summary>
CreateOutboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/CreateOutboundCrossClusterSearchConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CreateOutboundCrossClusterSearchConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CreateOutboundCrossClusterSearchConnectionCommandOutput/)

</details>
<details>
<summary>
CreatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/CreatePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CreatePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CreatePackageCommandOutput/)

</details>
<details>
<summary>
CreateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/CreateVpcEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CreateVpcEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/CreateVpcEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteElasticsearchDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DeleteElasticsearchDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteElasticsearchDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteElasticsearchDomainCommandOutput/)

</details>
<details>
<summary>
DeleteElasticsearchServiceRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DeleteElasticsearchServiceRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteElasticsearchServiceRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteElasticsearchServiceRoleCommandOutput/)

</details>
<details>
<summary>
DeleteInboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DeleteInboundCrossClusterSearchConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteInboundCrossClusterSearchConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteInboundCrossClusterSearchConnectionCommandOutput/)

</details>
<details>
<summary>
DeleteOutboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DeleteOutboundCrossClusterSearchConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteOutboundCrossClusterSearchConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteOutboundCrossClusterSearchConnectionCommandOutput/)

</details>
<details>
<summary>
DeletePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DeletePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeletePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeletePackageCommandOutput/)

</details>
<details>
<summary>
DeleteVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DeleteVpcEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteVpcEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DeleteVpcEndpointCommandOutput/)

</details>
<details>
<summary>
DescribeDomainAutoTunes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeDomainAutoTunesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeDomainAutoTunesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeDomainAutoTunesCommandOutput/)

</details>
<details>
<summary>
DescribeDomainChangeProgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeDomainChangeProgressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeDomainChangeProgressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeDomainChangeProgressCommandOutput/)

</details>
<details>
<summary>
DescribeElasticsearchDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeElasticsearchDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeElasticsearchDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeElasticsearchDomainCommandOutput/)

</details>
<details>
<summary>
DescribeElasticsearchDomainConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeElasticsearchDomainConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeElasticsearchDomainConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeElasticsearchDomainConfigCommandOutput/)

</details>
<details>
<summary>
DescribeElasticsearchDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeElasticsearchDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeElasticsearchDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeElasticsearchDomainsCommandOutput/)

</details>
<details>
<summary>
DescribeElasticsearchInstanceTypeLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeElasticsearchInstanceTypeLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeElasticsearchInstanceTypeLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeElasticsearchInstanceTypeLimitsCommandOutput/)

</details>
<details>
<summary>
DescribeInboundCrossClusterSearchConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeInboundCrossClusterSearchConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeInboundCrossClusterSearchConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeInboundCrossClusterSearchConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribeOutboundCrossClusterSearchConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeOutboundCrossClusterSearchConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeOutboundCrossClusterSearchConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeOutboundCrossClusterSearchConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribePackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribePackagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribePackagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribePackagesCommandOutput/)

</details>
<details>
<summary>
DescribeReservedElasticsearchInstanceOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeReservedElasticsearchInstanceOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeReservedElasticsearchInstanceOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeReservedElasticsearchInstanceOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeReservedElasticsearchInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeReservedElasticsearchInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeReservedElasticsearchInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeReservedElasticsearchInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DescribeVpcEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeVpcEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DescribeVpcEndpointsCommandOutput/)

</details>
<details>
<summary>
DissociatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/DissociatePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DissociatePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/DissociatePackageCommandOutput/)

</details>
<details>
<summary>
GetCompatibleElasticsearchVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/GetCompatibleElasticsearchVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/GetCompatibleElasticsearchVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/GetCompatibleElasticsearchVersionsCommandOutput/)

</details>
<details>
<summary>
GetPackageVersionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/GetPackageVersionHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/GetPackageVersionHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/GetPackageVersionHistoryCommandOutput/)

</details>
<details>
<summary>
GetUpgradeHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/GetUpgradeHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/GetUpgradeHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/GetUpgradeHistoryCommandOutput/)

</details>
<details>
<summary>
GetUpgradeStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/GetUpgradeStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/GetUpgradeStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/GetUpgradeStatusCommandOutput/)

</details>
<details>
<summary>
ListDomainNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListDomainNamesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListDomainNamesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListDomainNamesCommandOutput/)

</details>
<details>
<summary>
ListDomainsForPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListDomainsForPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListDomainsForPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListDomainsForPackageCommandOutput/)

</details>
<details>
<summary>
ListElasticsearchInstanceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListElasticsearchInstanceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListElasticsearchInstanceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListElasticsearchInstanceTypesCommandOutput/)

</details>
<details>
<summary>
ListElasticsearchVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListElasticsearchVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListElasticsearchVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListElasticsearchVersionsCommandOutput/)

</details>
<details>
<summary>
ListPackagesForDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListPackagesForDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListPackagesForDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListPackagesForDomainCommandOutput/)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListTagsCommandOutput/)

</details>
<details>
<summary>
ListVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListVpcEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListVpcEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListVpcEndpointAccessCommandOutput/)

</details>
<details>
<summary>
ListVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListVpcEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListVpcEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListVpcEndpointsCommandOutput/)

</details>
<details>
<summary>
ListVpcEndpointsForDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/ListVpcEndpointsForDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListVpcEndpointsForDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/ListVpcEndpointsForDomainCommandOutput/)

</details>
<details>
<summary>
PurchaseReservedElasticsearchInstanceOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/PurchaseReservedElasticsearchInstanceOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/PurchaseReservedElasticsearchInstanceOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/PurchaseReservedElasticsearchInstanceOfferingCommandOutput/)

</details>
<details>
<summary>
RejectInboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/RejectInboundCrossClusterSearchConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/RejectInboundCrossClusterSearchConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/RejectInboundCrossClusterSearchConnectionCommandOutput/)

</details>
<details>
<summary>
RemoveTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/RemoveTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/RemoveTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/RemoveTagsCommandOutput/)

</details>
<details>
<summary>
RevokeVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/RevokeVpcEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/RevokeVpcEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/RevokeVpcEndpointAccessCommandOutput/)

</details>
<details>
<summary>
StartElasticsearchServiceSoftwareUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/StartElasticsearchServiceSoftwareUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/StartElasticsearchServiceSoftwareUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/StartElasticsearchServiceSoftwareUpdateCommandOutput/)

</details>
<details>
<summary>
UpdateElasticsearchDomainConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/UpdateElasticsearchDomainConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/UpdateElasticsearchDomainConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/UpdateElasticsearchDomainConfigCommandOutput/)

</details>
<details>
<summary>
UpdatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/UpdatePackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/UpdatePackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/UpdatePackageCommandOutput/)

</details>
<details>
<summary>
UpdateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/UpdateVpcEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/UpdateVpcEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/UpdateVpcEndpointCommandOutput/)

</details>
<details>
<summary>
UpgradeElasticsearchDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elasticsearch-service/command/UpgradeElasticsearchDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/UpgradeElasticsearchDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elasticsearch-service/Interface/UpgradeElasticsearchDomainCommandOutput/)

</details>
