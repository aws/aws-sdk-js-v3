<!-- generated file, do not edit directly -->

# @aws-sdk/client-elasticsearch-service

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-elasticsearch-service/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-elasticsearch-service)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-elasticsearch-service.svg)](https://www.npmjs.com/package/@aws-sdk/client-elasticsearch-service)

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

To install the this package, simply type add or install @aws-sdk/client-elasticsearch-service
using your favorite package manager:

- `npm install @aws-sdk/client-elasticsearch-service`
- `yarn add @aws-sdk/client-elasticsearch-service`
- `pnpm add @aws-sdk/client-elasticsearch-service`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ElasticsearchServiceClient` and
the commands you need, for example `AcceptInboundCrossClusterSearchConnectionCommand`:

```js
// ES5 example
const {
  ElasticsearchServiceClient,
  AcceptInboundCrossClusterSearchConnectionCommand,
} = require("@aws-sdk/client-elasticsearch-service");
```

```ts
// ES6+ example
import {
  ElasticsearchServiceClient,
  AcceptInboundCrossClusterSearchConnectionCommand,
} from "@aws-sdk/client-elasticsearch-service";
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
const command = new AcceptInboundCrossClusterSearchConnectionCommand(params);
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
  const data = await client.acceptInboundCrossClusterSearchConnection(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptInboundCrossClusterSearchConnection(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptInboundCrossClusterSearchConnection(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/acceptinboundcrossclustersearchconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/acceptinboundcrossclustersearchconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/acceptinboundcrossclustersearchconnectioncommandoutput.html)

</details>
<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/addtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/addtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/addtagscommandoutput.html)

</details>
<details>
<summary>
AssociatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/associatepackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/associatepackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/associatepackagecommandoutput.html)

</details>
<details>
<summary>
AuthorizeVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/authorizevpcendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/authorizevpcendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/authorizevpcendpointaccesscommandoutput.html)

</details>
<details>
<summary>
CancelElasticsearchServiceSoftwareUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/cancelelasticsearchservicesoftwareupdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/cancelelasticsearchservicesoftwareupdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/cancelelasticsearchservicesoftwareupdatecommandoutput.html)

</details>
<details>
<summary>
CreateElasticsearchDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/createelasticsearchdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/createelasticsearchdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/createelasticsearchdomaincommandoutput.html)

</details>
<details>
<summary>
CreateOutboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/createoutboundcrossclustersearchconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/createoutboundcrossclustersearchconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/createoutboundcrossclustersearchconnectioncommandoutput.html)

</details>
<details>
<summary>
CreatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/createpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/createpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/createpackagecommandoutput.html)

</details>
<details>
<summary>
CreateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/createvpcendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/createvpcendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/createvpcendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteElasticsearchDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/deleteelasticsearchdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deleteelasticsearchdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deleteelasticsearchdomaincommandoutput.html)

</details>
<details>
<summary>
DeleteElasticsearchServiceRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/deleteelasticsearchservicerolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deleteelasticsearchservicerolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deleteelasticsearchservicerolecommandoutput.html)

</details>
<details>
<summary>
DeleteInboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/deleteinboundcrossclustersearchconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deleteinboundcrossclustersearchconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deleteinboundcrossclustersearchconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteOutboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/deleteoutboundcrossclustersearchconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deleteoutboundcrossclustersearchconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deleteoutboundcrossclustersearchconnectioncommandoutput.html)

</details>
<details>
<summary>
DeletePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/deletepackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deletepackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deletepackagecommandoutput.html)

</details>
<details>
<summary>
DeleteVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/deletevpcendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deletevpcendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/deletevpcendpointcommandoutput.html)

</details>
<details>
<summary>
DescribeDomainAutoTunes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describedomainautotunescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describedomainautotunescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describedomainautotunescommandoutput.html)

</details>
<details>
<summary>
DescribeDomainChangeProgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describedomainchangeprogresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describedomainchangeprogresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describedomainchangeprogresscommandoutput.html)

</details>
<details>
<summary>
DescribeElasticsearchDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describeelasticsearchdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeelasticsearchdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeelasticsearchdomaincommandoutput.html)

</details>
<details>
<summary>
DescribeElasticsearchDomainConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describeelasticsearchdomainconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeelasticsearchdomainconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeelasticsearchdomainconfigcommandoutput.html)

</details>
<details>
<summary>
DescribeElasticsearchDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describeelasticsearchdomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeelasticsearchdomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeelasticsearchdomainscommandoutput.html)

</details>
<details>
<summary>
DescribeElasticsearchInstanceTypeLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describeelasticsearchinstancetypelimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeelasticsearchinstancetypelimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeelasticsearchinstancetypelimitscommandoutput.html)

</details>
<details>
<summary>
DescribeInboundCrossClusterSearchConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describeinboundcrossclustersearchconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeinboundcrossclustersearchconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeinboundcrossclustersearchconnectionscommandoutput.html)

</details>
<details>
<summary>
DescribeOutboundCrossClusterSearchConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describeoutboundcrossclustersearchconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeoutboundcrossclustersearchconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describeoutboundcrossclustersearchconnectionscommandoutput.html)

</details>
<details>
<summary>
DescribePackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describepackagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describepackagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describepackagescommandoutput.html)

</details>
<details>
<summary>
DescribeReservedElasticsearchInstanceOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describereservedelasticsearchinstanceofferingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describereservedelasticsearchinstanceofferingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describereservedelasticsearchinstanceofferingscommandoutput.html)

</details>
<details>
<summary>
DescribeReservedElasticsearchInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describereservedelasticsearchinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describereservedelasticsearchinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describereservedelasticsearchinstancescommandoutput.html)

</details>
<details>
<summary>
DescribeVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/describevpcendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describevpcendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/describevpcendpointscommandoutput.html)

</details>
<details>
<summary>
DissociatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/dissociatepackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/dissociatepackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/dissociatepackagecommandoutput.html)

</details>
<details>
<summary>
GetCompatibleElasticsearchVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/getcompatibleelasticsearchversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/getcompatibleelasticsearchversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/getcompatibleelasticsearchversionscommandoutput.html)

</details>
<details>
<summary>
GetPackageVersionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/getpackageversionhistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/getpackageversionhistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/getpackageversionhistorycommandoutput.html)

</details>
<details>
<summary>
GetUpgradeHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/getupgradehistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/getupgradehistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/getupgradehistorycommandoutput.html)

</details>
<details>
<summary>
GetUpgradeStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/getupgradestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/getupgradestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/getupgradestatuscommandoutput.html)

</details>
<details>
<summary>
ListDomainNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listdomainnamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listdomainnamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listdomainnamescommandoutput.html)

</details>
<details>
<summary>
ListDomainsForPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listdomainsforpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listdomainsforpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listdomainsforpackagecommandoutput.html)

</details>
<details>
<summary>
ListElasticsearchInstanceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listelasticsearchinstancetypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listelasticsearchinstancetypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listelasticsearchinstancetypescommandoutput.html)

</details>
<details>
<summary>
ListElasticsearchVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listelasticsearchversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listelasticsearchversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listelasticsearchversionscommandoutput.html)

</details>
<details>
<summary>
ListPackagesForDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listpackagesfordomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listpackagesfordomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listpackagesfordomaincommandoutput.html)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listtagscommandoutput.html)

</details>
<details>
<summary>
ListVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listvpcendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listvpcendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listvpcendpointaccesscommandoutput.html)

</details>
<details>
<summary>
ListVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listvpcendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listvpcendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listvpcendpointscommandoutput.html)

</details>
<details>
<summary>
ListVpcEndpointsForDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/listvpcendpointsfordomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listvpcendpointsfordomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/listvpcendpointsfordomaincommandoutput.html)

</details>
<details>
<summary>
PurchaseReservedElasticsearchInstanceOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/purchasereservedelasticsearchinstanceofferingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/purchasereservedelasticsearchinstanceofferingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/purchasereservedelasticsearchinstanceofferingcommandoutput.html)

</details>
<details>
<summary>
RejectInboundCrossClusterSearchConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/rejectinboundcrossclustersearchconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/rejectinboundcrossclustersearchconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/rejectinboundcrossclustersearchconnectioncommandoutput.html)

</details>
<details>
<summary>
RemoveTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/removetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/removetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/removetagscommandoutput.html)

</details>
<details>
<summary>
RevokeVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/revokevpcendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/revokevpcendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/revokevpcendpointaccesscommandoutput.html)

</details>
<details>
<summary>
StartElasticsearchServiceSoftwareUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/startelasticsearchservicesoftwareupdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/startelasticsearchservicesoftwareupdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/startelasticsearchservicesoftwareupdatecommandoutput.html)

</details>
<details>
<summary>
UpdateElasticsearchDomainConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/updateelasticsearchdomainconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/updateelasticsearchdomainconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/updateelasticsearchdomainconfigcommandoutput.html)

</details>
<details>
<summary>
UpdatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/updatepackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/updatepackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/updatepackagecommandoutput.html)

</details>
<details>
<summary>
UpdateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/updatevpcendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/updatevpcendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/updatevpcendpointcommandoutput.html)

</details>
<details>
<summary>
UpgradeElasticsearchDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/classes/upgradeelasticsearchdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/upgradeelasticsearchdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elasticsearch-service/interfaces/upgradeelasticsearchdomaincommandoutput.html)

</details>
