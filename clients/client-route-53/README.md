<!-- generated file, do not edit directly -->

# @aws-sdk/client-route-53

## Description

AWS SDK for JavaScript Route53 Client for Node.js, Browser and React Native.

<p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web
service.</p>
<p>You can use Route 53 to:</p>
<ul>
<li>
<p>Register domain names.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-domain-registration.html">How domain registration works</a>.</p>
</li>
<li>
<p>Route internet traffic to the resources for your domain</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">How internet traffic is routed to your website or web application</a>.</p>
</li>
<li>
<p>Check the health of your resources.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-health-checks.html">How Route 53 checks the health of your resources</a>.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-route-53
using your favorite package manager:

- `npm install @aws-sdk/client-route-53`
- `yarn add @aws-sdk/client-route-53`
- `pnpm add @aws-sdk/client-route-53`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Route53Client` and
the commands you need, for example `ListGeoLocationsCommand`:

```js
// ES5 example
const { Route53Client, ListGeoLocationsCommand } = require("@aws-sdk/client-route-53");
```

```ts
// ES6+ example
import { Route53Client, ListGeoLocationsCommand } from "@aws-sdk/client-route-53";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new Route53Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListGeoLocationsCommand(params);
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
import * as AWS from "@aws-sdk/client-route-53";
const client = new AWS.Route53({ region: "REGION" });

// async/await.
try {
  const data = await client.listGeoLocations(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listGeoLocations(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listGeoLocations(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-route-53` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ActivateKeySigningKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ActivateKeySigningKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ActivateKeySigningKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ActivateKeySigningKeyCommandOutput/)

</details>
<details>
<summary>
AssociateVPCWithHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/AssociateVPCWithHostedZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/AssociateVPCWithHostedZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/AssociateVPCWithHostedZoneCommandOutput/)

</details>
<details>
<summary>
ChangeCidrCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ChangeCidrCollectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ChangeCidrCollectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ChangeCidrCollectionCommandOutput/)

</details>
<details>
<summary>
ChangeResourceRecordSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ChangeResourceRecordSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ChangeResourceRecordSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ChangeResourceRecordSetsCommandOutput/)

</details>
<details>
<summary>
ChangeTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ChangeTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ChangeTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ChangeTagsForResourceCommandOutput/)

</details>
<details>
<summary>
CreateCidrCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateCidrCollectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateCidrCollectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateCidrCollectionCommandOutput/)

</details>
<details>
<summary>
CreateHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateHealthCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateHealthCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateHealthCheckCommandOutput/)

</details>
<details>
<summary>
CreateHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateHostedZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateHostedZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateHostedZoneCommandOutput/)

</details>
<details>
<summary>
CreateKeySigningKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateKeySigningKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateKeySigningKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateKeySigningKeyCommandOutput/)

</details>
<details>
<summary>
CreateQueryLoggingConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateQueryLoggingConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateQueryLoggingConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateQueryLoggingConfigCommandOutput/)

</details>
<details>
<summary>
CreateReusableDelegationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateReusableDelegationSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateReusableDelegationSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateReusableDelegationSetCommandOutput/)

</details>
<details>
<summary>
CreateTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateTrafficPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateTrafficPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateTrafficPolicyCommandOutput/)

</details>
<details>
<summary>
CreateTrafficPolicyInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateTrafficPolicyInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateTrafficPolicyInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateTrafficPolicyInstanceCommandOutput/)

</details>
<details>
<summary>
CreateTrafficPolicyVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateTrafficPolicyVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateTrafficPolicyVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateTrafficPolicyVersionCommandOutput/)

</details>
<details>
<summary>
CreateVPCAssociationAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/CreateVPCAssociationAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateVPCAssociationAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/CreateVPCAssociationAuthorizationCommandOutput/)

</details>
<details>
<summary>
DeactivateKeySigningKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeactivateKeySigningKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeactivateKeySigningKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeactivateKeySigningKeyCommandOutput/)

</details>
<details>
<summary>
DeleteCidrCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteCidrCollectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteCidrCollectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteCidrCollectionCommandOutput/)

</details>
<details>
<summary>
DeleteHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteHealthCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteHealthCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteHealthCheckCommandOutput/)

</details>
<details>
<summary>
DeleteHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteHostedZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteHostedZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteHostedZoneCommandOutput/)

</details>
<details>
<summary>
DeleteKeySigningKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteKeySigningKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteKeySigningKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteKeySigningKeyCommandOutput/)

</details>
<details>
<summary>
DeleteQueryLoggingConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteQueryLoggingConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteQueryLoggingConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteQueryLoggingConfigCommandOutput/)

</details>
<details>
<summary>
DeleteReusableDelegationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteReusableDelegationSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteReusableDelegationSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteReusableDelegationSetCommandOutput/)

</details>
<details>
<summary>
DeleteTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteTrafficPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteTrafficPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteTrafficPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteTrafficPolicyInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteTrafficPolicyInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteTrafficPolicyInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteTrafficPolicyInstanceCommandOutput/)

</details>
<details>
<summary>
DeleteVPCAssociationAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DeleteVPCAssociationAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteVPCAssociationAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DeleteVPCAssociationAuthorizationCommandOutput/)

</details>
<details>
<summary>
DisableHostedZoneDNSSEC
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DisableHostedZoneDNSSECCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DisableHostedZoneDNSSECCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DisableHostedZoneDNSSECCommandOutput/)

</details>
<details>
<summary>
DisassociateVPCFromHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/DisassociateVPCFromHostedZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DisassociateVPCFromHostedZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/DisassociateVPCFromHostedZoneCommandOutput/)

</details>
<details>
<summary>
EnableHostedZoneDNSSEC
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/EnableHostedZoneDNSSECCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/EnableHostedZoneDNSSECCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/EnableHostedZoneDNSSECCommandOutput/)

</details>
<details>
<summary>
GetAccountLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetAccountLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetAccountLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetAccountLimitCommandOutput/)

</details>
<details>
<summary>
GetChange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetChangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetChangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetChangeCommandOutput/)

</details>
<details>
<summary>
GetCheckerIpRanges
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetCheckerIpRangesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetCheckerIpRangesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetCheckerIpRangesCommandOutput/)

</details>
<details>
<summary>
GetDNSSEC
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetDNSSECCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetDNSSECCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetDNSSECCommandOutput/)

</details>
<details>
<summary>
GetGeoLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetGeoLocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetGeoLocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetGeoLocationCommandOutput/)

</details>
<details>
<summary>
GetHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetHealthCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHealthCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHealthCheckCommandOutput/)

</details>
<details>
<summary>
GetHealthCheckCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetHealthCheckCountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHealthCheckCountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHealthCheckCountCommandOutput/)

</details>
<details>
<summary>
GetHealthCheckLastFailureReason
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetHealthCheckLastFailureReasonCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHealthCheckLastFailureReasonCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHealthCheckLastFailureReasonCommandOutput/)

</details>
<details>
<summary>
GetHealthCheckStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetHealthCheckStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHealthCheckStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHealthCheckStatusCommandOutput/)

</details>
<details>
<summary>
GetHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetHostedZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHostedZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHostedZoneCommandOutput/)

</details>
<details>
<summary>
GetHostedZoneCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetHostedZoneCountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHostedZoneCountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHostedZoneCountCommandOutput/)

</details>
<details>
<summary>
GetHostedZoneLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetHostedZoneLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHostedZoneLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetHostedZoneLimitCommandOutput/)

</details>
<details>
<summary>
GetQueryLoggingConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetQueryLoggingConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetQueryLoggingConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetQueryLoggingConfigCommandOutput/)

</details>
<details>
<summary>
GetReusableDelegationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetReusableDelegationSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetReusableDelegationSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetReusableDelegationSetCommandOutput/)

</details>
<details>
<summary>
GetReusableDelegationSetLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetReusableDelegationSetLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetReusableDelegationSetLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetReusableDelegationSetLimitCommandOutput/)

</details>
<details>
<summary>
GetTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetTrafficPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetTrafficPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetTrafficPolicyCommandOutput/)

</details>
<details>
<summary>
GetTrafficPolicyInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetTrafficPolicyInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetTrafficPolicyInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetTrafficPolicyInstanceCommandOutput/)

</details>
<details>
<summary>
GetTrafficPolicyInstanceCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/GetTrafficPolicyInstanceCountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetTrafficPolicyInstanceCountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/GetTrafficPolicyInstanceCountCommandOutput/)

</details>
<details>
<summary>
ListCidrBlocks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListCidrBlocksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListCidrBlocksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListCidrBlocksCommandOutput/)

</details>
<details>
<summary>
ListCidrCollections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListCidrCollectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListCidrCollectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListCidrCollectionsCommandOutput/)

</details>
<details>
<summary>
ListCidrLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListCidrLocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListCidrLocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListCidrLocationsCommandOutput/)

</details>
<details>
<summary>
ListGeoLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListGeoLocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListGeoLocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListGeoLocationsCommandOutput/)

</details>
<details>
<summary>
ListHealthChecks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListHealthChecksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListHealthChecksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListHealthChecksCommandOutput/)

</details>
<details>
<summary>
ListHostedZones
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListHostedZonesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListHostedZonesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListHostedZonesCommandOutput/)

</details>
<details>
<summary>
ListHostedZonesByName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListHostedZonesByNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListHostedZonesByNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListHostedZonesByNameCommandOutput/)

</details>
<details>
<summary>
ListHostedZonesByVPC
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListHostedZonesByVPCCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListHostedZonesByVPCCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListHostedZonesByVPCCommandOutput/)

</details>
<details>
<summary>
ListQueryLoggingConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListQueryLoggingConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListQueryLoggingConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListQueryLoggingConfigsCommandOutput/)

</details>
<details>
<summary>
ListResourceRecordSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListResourceRecordSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListResourceRecordSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListResourceRecordSetsCommandOutput/)

</details>
<details>
<summary>
ListReusableDelegationSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListReusableDelegationSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListReusableDelegationSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListReusableDelegationSetsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTagsForResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListTagsForResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTagsForResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTagsForResourcesCommandOutput/)

</details>
<details>
<summary>
ListTrafficPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListTrafficPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPoliciesCommandOutput/)

</details>
<details>
<summary>
ListTrafficPolicyInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListTrafficPolicyInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPolicyInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPolicyInstancesCommandOutput/)

</details>
<details>
<summary>
ListTrafficPolicyInstancesByHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListTrafficPolicyInstancesByHostedZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPolicyInstancesByHostedZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPolicyInstancesByHostedZoneCommandOutput/)

</details>
<details>
<summary>
ListTrafficPolicyInstancesByPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListTrafficPolicyInstancesByPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPolicyInstancesByPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPolicyInstancesByPolicyCommandOutput/)

</details>
<details>
<summary>
ListTrafficPolicyVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListTrafficPolicyVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPolicyVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListTrafficPolicyVersionsCommandOutput/)

</details>
<details>
<summary>
ListVPCAssociationAuthorizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/ListVPCAssociationAuthorizationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListVPCAssociationAuthorizationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/ListVPCAssociationAuthorizationsCommandOutput/)

</details>
<details>
<summary>
TestDNSAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/TestDNSAnswerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/TestDNSAnswerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/TestDNSAnswerCommandOutput/)

</details>
<details>
<summary>
UpdateHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/UpdateHealthCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/UpdateHealthCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/UpdateHealthCheckCommandOutput/)

</details>
<details>
<summary>
UpdateHostedZoneComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/UpdateHostedZoneCommentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/UpdateHostedZoneCommentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/UpdateHostedZoneCommentCommandOutput/)

</details>
<details>
<summary>
UpdateTrafficPolicyComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/UpdateTrafficPolicyCommentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/UpdateTrafficPolicyCommentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/UpdateTrafficPolicyCommentCommandOutput/)

</details>
<details>
<summary>
UpdateTrafficPolicyInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route-53/command/UpdateTrafficPolicyInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/UpdateTrafficPolicyInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route-53/Interface/UpdateTrafficPolicyInstanceCommandOutput/)

</details>
