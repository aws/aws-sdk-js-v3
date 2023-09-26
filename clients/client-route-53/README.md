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

To install the this package, simply type add or install @aws-sdk/client-route-53
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/activatekeysigningkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/activatekeysigningkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/activatekeysigningkeycommandoutput.html)

</details>
<details>
<summary>
AssociateVPCWithHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/associatevpcwithhostedzonecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/associatevpcwithhostedzonecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/associatevpcwithhostedzonecommandoutput.html)

</details>
<details>
<summary>
ChangeCidrCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/changecidrcollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/changecidrcollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/changecidrcollectioncommandoutput.html)

</details>
<details>
<summary>
ChangeResourceRecordSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/changeresourcerecordsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/changeresourcerecordsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/changeresourcerecordsetscommandoutput.html)

</details>
<details>
<summary>
ChangeTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/changetagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/changetagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/changetagsforresourcecommandoutput.html)

</details>
<details>
<summary>
CreateCidrCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createcidrcollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createcidrcollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createcidrcollectioncommandoutput.html)

</details>
<details>
<summary>
CreateHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createhealthcheckcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createhealthcheckcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createhealthcheckcommandoutput.html)

</details>
<details>
<summary>
CreateHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createhostedzonecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createhostedzonecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createhostedzonecommandoutput.html)

</details>
<details>
<summary>
CreateKeySigningKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createkeysigningkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createkeysigningkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createkeysigningkeycommandoutput.html)

</details>
<details>
<summary>
CreateQueryLoggingConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createqueryloggingconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createqueryloggingconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createqueryloggingconfigcommandoutput.html)

</details>
<details>
<summary>
CreateReusableDelegationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createreusabledelegationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createreusabledelegationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createreusabledelegationsetcommandoutput.html)

</details>
<details>
<summary>
CreateTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createtrafficpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createtrafficpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createtrafficpolicycommandoutput.html)

</details>
<details>
<summary>
CreateTrafficPolicyInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createtrafficpolicyinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createtrafficpolicyinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createtrafficpolicyinstancecommandoutput.html)

</details>
<details>
<summary>
CreateTrafficPolicyVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createtrafficpolicyversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createtrafficpolicyversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createtrafficpolicyversioncommandoutput.html)

</details>
<details>
<summary>
CreateVPCAssociationAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/createvpcassociationauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createvpcassociationauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/createvpcassociationauthorizationcommandoutput.html)

</details>
<details>
<summary>
DeactivateKeySigningKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deactivatekeysigningkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deactivatekeysigningkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deactivatekeysigningkeycommandoutput.html)

</details>
<details>
<summary>
DeleteCidrCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletecidrcollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletecidrcollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletecidrcollectioncommandoutput.html)

</details>
<details>
<summary>
DeleteHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletehealthcheckcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletehealthcheckcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletehealthcheckcommandoutput.html)

</details>
<details>
<summary>
DeleteHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletehostedzonecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletehostedzonecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletehostedzonecommandoutput.html)

</details>
<details>
<summary>
DeleteKeySigningKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletekeysigningkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletekeysigningkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletekeysigningkeycommandoutput.html)

</details>
<details>
<summary>
DeleteQueryLoggingConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletequeryloggingconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletequeryloggingconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletequeryloggingconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteReusableDelegationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletereusabledelegationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletereusabledelegationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletereusabledelegationsetcommandoutput.html)

</details>
<details>
<summary>
DeleteTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletetrafficpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletetrafficpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletetrafficpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteTrafficPolicyInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletetrafficpolicyinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletetrafficpolicyinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletetrafficpolicyinstancecommandoutput.html)

</details>
<details>
<summary>
DeleteVPCAssociationAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/deletevpcassociationauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletevpcassociationauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/deletevpcassociationauthorizationcommandoutput.html)

</details>
<details>
<summary>
DisableHostedZoneDNSSEC
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/disablehostedzonednsseccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/disablehostedzonednsseccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/disablehostedzonednsseccommandoutput.html)

</details>
<details>
<summary>
DisassociateVPCFromHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/disassociatevpcfromhostedzonecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/disassociatevpcfromhostedzonecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/disassociatevpcfromhostedzonecommandoutput.html)

</details>
<details>
<summary>
EnableHostedZoneDNSSEC
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/enablehostedzonednsseccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/enablehostedzonednsseccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/enablehostedzonednsseccommandoutput.html)

</details>
<details>
<summary>
GetAccountLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/getaccountlimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getaccountlimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getaccountlimitcommandoutput.html)

</details>
<details>
<summary>
GetChange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/getchangecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getchangecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getchangecommandoutput.html)

</details>
<details>
<summary>
GetCheckerIpRanges
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/getcheckeriprangescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getcheckeriprangescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getcheckeriprangescommandoutput.html)

</details>
<details>
<summary>
GetDNSSEC
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/getdnsseccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getdnsseccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getdnsseccommandoutput.html)

</details>
<details>
<summary>
GetGeoLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/getgeolocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getgeolocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getgeolocationcommandoutput.html)

</details>
<details>
<summary>
GetHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gethealthcheckcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethealthcheckcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethealthcheckcommandoutput.html)

</details>
<details>
<summary>
GetHealthCheckCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gethealthcheckcountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethealthcheckcountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethealthcheckcountcommandoutput.html)

</details>
<details>
<summary>
GetHealthCheckLastFailureReason
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gethealthchecklastfailurereasoncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethealthchecklastfailurereasoncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethealthchecklastfailurereasoncommandoutput.html)

</details>
<details>
<summary>
GetHealthCheckStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gethealthcheckstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethealthcheckstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethealthcheckstatuscommandoutput.html)

</details>
<details>
<summary>
GetHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gethostedzonecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethostedzonecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethostedzonecommandoutput.html)

</details>
<details>
<summary>
GetHostedZoneCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gethostedzonecountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethostedzonecountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethostedzonecountcommandoutput.html)

</details>
<details>
<summary>
GetHostedZoneLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gethostedzonelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethostedzonelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gethostedzonelimitcommandoutput.html)

</details>
<details>
<summary>
GetQueryLoggingConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/getqueryloggingconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getqueryloggingconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getqueryloggingconfigcommandoutput.html)

</details>
<details>
<summary>
GetReusableDelegationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/getreusabledelegationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getreusabledelegationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getreusabledelegationsetcommandoutput.html)

</details>
<details>
<summary>
GetReusableDelegationSetLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/getreusabledelegationsetlimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getreusabledelegationsetlimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/getreusabledelegationsetlimitcommandoutput.html)

</details>
<details>
<summary>
GetTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gettrafficpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gettrafficpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gettrafficpolicycommandoutput.html)

</details>
<details>
<summary>
GetTrafficPolicyInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gettrafficpolicyinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gettrafficpolicyinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gettrafficpolicyinstancecommandoutput.html)

</details>
<details>
<summary>
GetTrafficPolicyInstanceCount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/gettrafficpolicyinstancecountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gettrafficpolicyinstancecountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/gettrafficpolicyinstancecountcommandoutput.html)

</details>
<details>
<summary>
ListCidrBlocks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listcidrblockscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listcidrblockscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listcidrblockscommandoutput.html)

</details>
<details>
<summary>
ListCidrCollections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listcidrcollectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listcidrcollectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listcidrcollectionscommandoutput.html)

</details>
<details>
<summary>
ListCidrLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listcidrlocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listcidrlocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listcidrlocationscommandoutput.html)

</details>
<details>
<summary>
ListGeoLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listgeolocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listgeolocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listgeolocationscommandoutput.html)

</details>
<details>
<summary>
ListHealthChecks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listhealthcheckscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listhealthcheckscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listhealthcheckscommandoutput.html)

</details>
<details>
<summary>
ListHostedZones
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listhostedzonescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listhostedzonescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listhostedzonescommandoutput.html)

</details>
<details>
<summary>
ListHostedZonesByName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listhostedzonesbynamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listhostedzonesbynamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listhostedzonesbynamecommandoutput.html)

</details>
<details>
<summary>
ListHostedZonesByVPC
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listhostedzonesbyvpccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listhostedzonesbyvpccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listhostedzonesbyvpccommandoutput.html)

</details>
<details>
<summary>
ListQueryLoggingConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listqueryloggingconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listqueryloggingconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listqueryloggingconfigscommandoutput.html)

</details>
<details>
<summary>
ListResourceRecordSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listresourcerecordsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listresourcerecordsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listresourcerecordsetscommandoutput.html)

</details>
<details>
<summary>
ListReusableDelegationSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listreusabledelegationsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listreusabledelegationsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listreusabledelegationsetscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTagsForResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listtagsforresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtagsforresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtagsforresourcescommandoutput.html)

</details>
<details>
<summary>
ListTrafficPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listtrafficpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpoliciescommandoutput.html)

</details>
<details>
<summary>
ListTrafficPolicyInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listtrafficpolicyinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpolicyinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpolicyinstancescommandoutput.html)

</details>
<details>
<summary>
ListTrafficPolicyInstancesByHostedZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listtrafficpolicyinstancesbyhostedzonecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpolicyinstancesbyhostedzonecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpolicyinstancesbyhostedzonecommandoutput.html)

</details>
<details>
<summary>
ListTrafficPolicyInstancesByPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listtrafficpolicyinstancesbypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpolicyinstancesbypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpolicyinstancesbypolicycommandoutput.html)

</details>
<details>
<summary>
ListTrafficPolicyVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listtrafficpolicyversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpolicyversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listtrafficpolicyversionscommandoutput.html)

</details>
<details>
<summary>
ListVPCAssociationAuthorizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/listvpcassociationauthorizationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listvpcassociationauthorizationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/listvpcassociationauthorizationscommandoutput.html)

</details>
<details>
<summary>
TestDNSAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/testdnsanswercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/testdnsanswercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/testdnsanswercommandoutput.html)

</details>
<details>
<summary>
UpdateHealthCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/updatehealthcheckcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/updatehealthcheckcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/updatehealthcheckcommandoutput.html)

</details>
<details>
<summary>
UpdateHostedZoneComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/updatehostedzonecommentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/updatehostedzonecommentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/updatehostedzonecommentcommandoutput.html)

</details>
<details>
<summary>
UpdateTrafficPolicyComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/updatetrafficpolicycommentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/updatetrafficpolicycommentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/updatetrafficpolicycommentcommandoutput.html)

</details>
<details>
<summary>
UpdateTrafficPolicyInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/classes/updatetrafficpolicyinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/updatetrafficpolicyinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-route-53/interfaces/updatetrafficpolicyinstancecommandoutput.html)

</details>
