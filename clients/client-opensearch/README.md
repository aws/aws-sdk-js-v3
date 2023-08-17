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
the commands you need, for example `AcceptInboundConnectionCommand`:

```js
// ES5 example
const { OpenSearchClient, AcceptInboundConnectionCommand } = require("@aws-sdk/client-opensearch");
```

```ts
// ES6+ example
import { OpenSearchClient, AcceptInboundConnectionCommand } from "@aws-sdk/client-opensearch";
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
const command = new AcceptInboundConnectionCommand(params);
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
  const data = await client.acceptInboundConnection(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptInboundConnection(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptInboundConnection(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/acceptinboundconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/acceptinboundconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/acceptinboundconnectioncommandoutput.html)

</details>
<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/addtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/addtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/addtagscommandoutput.html)

</details>
<details>
<summary>
AssociatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/associatepackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/associatepackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/associatepackagecommandoutput.html)

</details>
<details>
<summary>
AuthorizeVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/authorizevpcendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/authorizevpcendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/authorizevpcendpointaccesscommandoutput.html)

</details>
<details>
<summary>
CancelServiceSoftwareUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/cancelservicesoftwareupdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/cancelservicesoftwareupdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/cancelservicesoftwareupdatecommandoutput.html)

</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/createdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/createdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/createdomaincommandoutput.html)

</details>
<details>
<summary>
CreateOutboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/createoutboundconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/createoutboundconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/createoutboundconnectioncommandoutput.html)

</details>
<details>
<summary>
CreatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/createpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/createpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/createpackagecommandoutput.html)

</details>
<details>
<summary>
CreateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/createvpcendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/createvpcendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/createvpcendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/deletedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deletedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deletedomaincommandoutput.html)

</details>
<details>
<summary>
DeleteInboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/deleteinboundconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deleteinboundconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deleteinboundconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteOutboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/deleteoutboundconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deleteoutboundconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deleteoutboundconnectioncommandoutput.html)

</details>
<details>
<summary>
DeletePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/deletepackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deletepackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deletepackagecommandoutput.html)

</details>
<details>
<summary>
DeleteVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/deletevpcendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deletevpcendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/deletevpcendpointcommandoutput.html)

</details>
<details>
<summary>
DescribeDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomaincommandoutput.html)

</details>
<details>
<summary>
DescribeDomainAutoTunes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describedomainautotunescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainautotunescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainautotunescommandoutput.html)

</details>
<details>
<summary>
DescribeDomainChangeProgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describedomainchangeprogresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainchangeprogresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainchangeprogresscommandoutput.html)

</details>
<details>
<summary>
DescribeDomainConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describedomainconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainconfigcommandoutput.html)

</details>
<details>
<summary>
DescribeDomainHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describedomainhealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainhealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainhealthcommandoutput.html)

</details>
<details>
<summary>
DescribeDomainNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describedomainnodescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainnodescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainnodescommandoutput.html)

</details>
<details>
<summary>
DescribeDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describedomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedomainscommandoutput.html)

</details>
<details>
<summary>
DescribeDryRunProgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describedryrunprogresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedryrunprogresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describedryrunprogresscommandoutput.html)

</details>
<details>
<summary>
DescribeInboundConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describeinboundconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describeinboundconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describeinboundconnectionscommandoutput.html)

</details>
<details>
<summary>
DescribeInstanceTypeLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describeinstancetypelimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describeinstancetypelimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describeinstancetypelimitscommandoutput.html)

</details>
<details>
<summary>
DescribeOutboundConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describeoutboundconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describeoutboundconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describeoutboundconnectionscommandoutput.html)

</details>
<details>
<summary>
DescribePackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describepackagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describepackagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describepackagescommandoutput.html)

</details>
<details>
<summary>
DescribeReservedInstanceOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describereservedinstanceofferingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describereservedinstanceofferingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describereservedinstanceofferingscommandoutput.html)

</details>
<details>
<summary>
DescribeReservedInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describereservedinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describereservedinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describereservedinstancescommandoutput.html)

</details>
<details>
<summary>
DescribeVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/describevpcendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describevpcendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/describevpcendpointscommandoutput.html)

</details>
<details>
<summary>
DissociatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/dissociatepackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/dissociatepackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/dissociatepackagecommandoutput.html)

</details>
<details>
<summary>
GetCompatibleVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/getcompatibleversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/getcompatibleversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/getcompatibleversionscommandoutput.html)

</details>
<details>
<summary>
GetPackageVersionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/getpackageversionhistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/getpackageversionhistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/getpackageversionhistorycommandoutput.html)

</details>
<details>
<summary>
GetUpgradeHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/getupgradehistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/getupgradehistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/getupgradehistorycommandoutput.html)

</details>
<details>
<summary>
GetUpgradeStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/getupgradestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/getupgradestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/getupgradestatuscommandoutput.html)

</details>
<details>
<summary>
ListDomainNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listdomainnamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listdomainnamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listdomainnamescommandoutput.html)

</details>
<details>
<summary>
ListDomainsForPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listdomainsforpackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listdomainsforpackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listdomainsforpackagecommandoutput.html)

</details>
<details>
<summary>
ListInstanceTypeDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listinstancetypedetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listinstancetypedetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listinstancetypedetailscommandoutput.html)

</details>
<details>
<summary>
ListPackagesForDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listpackagesfordomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listpackagesfordomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listpackagesfordomaincommandoutput.html)

</details>
<details>
<summary>
ListScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listscheduledactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listscheduledactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listscheduledactionscommandoutput.html)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listtagscommandoutput.html)

</details>
<details>
<summary>
ListVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listversionscommandoutput.html)

</details>
<details>
<summary>
ListVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listvpcendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listvpcendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listvpcendpointaccesscommandoutput.html)

</details>
<details>
<summary>
ListVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listvpcendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listvpcendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listvpcendpointscommandoutput.html)

</details>
<details>
<summary>
ListVpcEndpointsForDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/listvpcendpointsfordomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listvpcendpointsfordomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/listvpcendpointsfordomaincommandoutput.html)

</details>
<details>
<summary>
PurchaseReservedInstanceOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/purchasereservedinstanceofferingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/purchasereservedinstanceofferingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/purchasereservedinstanceofferingcommandoutput.html)

</details>
<details>
<summary>
RejectInboundConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/rejectinboundconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/rejectinboundconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/rejectinboundconnectioncommandoutput.html)

</details>
<details>
<summary>
RemoveTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/removetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/removetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/removetagscommandoutput.html)

</details>
<details>
<summary>
RevokeVpcEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/revokevpcendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/revokevpcendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/revokevpcendpointaccesscommandoutput.html)

</details>
<details>
<summary>
StartServiceSoftwareUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/startservicesoftwareupdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/startservicesoftwareupdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/startservicesoftwareupdatecommandoutput.html)

</details>
<details>
<summary>
UpdateDomainConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/updatedomainconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/updatedomainconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/updatedomainconfigcommandoutput.html)

</details>
<details>
<summary>
UpdatePackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/updatepackagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/updatepackagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/updatepackagecommandoutput.html)

</details>
<details>
<summary>
UpdateScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/updatescheduledactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/updatescheduledactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/updatescheduledactioncommandoutput.html)

</details>
<details>
<summary>
UpdateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/updatevpcendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/updatevpcendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/updatevpcendpointcommandoutput.html)

</details>
<details>
<summary>
UpgradeDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/classes/upgradedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/upgradedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opensearch/interfaces/upgradedomaincommandoutput.html)

</details>
