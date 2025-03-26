<!-- generated file, do not edit directly -->

# @aws-sdk/client-arc-zonal-shift

## Description

AWS SDK for JavaScript ARCZonalShift Client for Node.js, Browser and React Native.

<p>Welcome to the API Reference Guide for zonal shift and zonal autoshift in Amazon Route 53 Application Recovery Controller (ARC).</p>
<p>You can start a zonal shift to move traffic for a load balancer resource away from an Availability Zone to
help your application recover quickly from an impairment in an Availability Zone. For example,
you can recover your application from a developer's bad code deployment or from an
Amazon Web Services infrastructure failure in a single Availability Zone.</p>
<p>You can also configure zonal autoshift for supported load balancer resources. Zonal autoshift
is a capability in ARC where you authorize Amazon Web Services to shift away application resource
traffic from an Availability Zone during events, on your behalf, to help reduce your time to recovery.
Amazon Web Services starts an autoshift when internal telemetry indicates that there is an Availability
Zone impairment that could potentially impact customers.</p>
<p>To help make sure that zonal autoshift is safe for your application, you must
also configure practice runs when you enable zonal autoshift for a resource. Practice runs start
weekly zonal shifts for a resource, to shift traffic for the resource away from an Availability Zone.
Practice runs help you to make sure, on a regular basis, that you have enough capacity in all the
Availability Zones in an Amazon Web Services Region for your application to continue to operate normally
when traffic for a resource is shifted away from one Availability Zone.</p>
<important>
<p>Before you configure practice runs or enable zonal autoshift, we strongly recommend
that you prescale your application resource capacity in all Availability Zones in the Region where
your application resources are deployed. You should not rely on scaling on demand when an
autoshift or practice run starts. Zonal autoshift, including practice runs, works independently,
and does not wait for auto scaling actions to complete. Relying on auto scaling, instead of
pre-scaling, can result in loss of availability.</p>
<p>If you use auto scaling to handle regular cycles of traffic, we strongly recommend that you configure
the minimum capacity of your auto scaling to continue operating normally with the loss of an
Availability Zone. </p>
</important>
<p>Be aware that ARC does not inspect the health of individual resources. Amazon Web Services only starts an
autoshift when Amazon Web Services telemetry detects that there is an Availability Zone impairment that could
potentially impact customers. In some cases, resources might be shifted away that are not experiencing
impact.</p>
<p>For more information about using zonal shift and zonal autoshift, see the
<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html">Amazon Route 53 Application Recovery Controller
Developer Guide</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-arc-zonal-shift
using your favorite package manager:

- `npm install @aws-sdk/client-arc-zonal-shift`
- `yarn add @aws-sdk/client-arc-zonal-shift`
- `pnpm add @aws-sdk/client-arc-zonal-shift`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ARCZonalShiftClient` and
the commands you need, for example `ListAutoshiftsCommand`:

```js
// ES5 example
const { ARCZonalShiftClient, ListAutoshiftsCommand } = require("@aws-sdk/client-arc-zonal-shift");
```

```ts
// ES6+ example
import { ARCZonalShiftClient, ListAutoshiftsCommand } from "@aws-sdk/client-arc-zonal-shift";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ARCZonalShiftClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAutoshiftsCommand(params);
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
import * as AWS from "@aws-sdk/client-arc-zonal-shift";
const client = new AWS.ARCZonalShift({ region: "REGION" });

// async/await.
try {
  const data = await client.listAutoshifts(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAutoshifts(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAutoshifts(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-arc-zonal-shift` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelZonalShift
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/CancelZonalShiftCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/CancelZonalShiftCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/CancelZonalShiftCommandOutput/)

</details>
<details>
<summary>
CreatePracticeRunConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/CreatePracticeRunConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/CreatePracticeRunConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/CreatePracticeRunConfigurationCommandOutput/)

</details>
<details>
<summary>
DeletePracticeRunConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/DeletePracticeRunConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/DeletePracticeRunConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/DeletePracticeRunConfigurationCommandOutput/)

</details>
<details>
<summary>
GetAutoshiftObserverNotificationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/GetAutoshiftObserverNotificationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/GetAutoshiftObserverNotificationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/GetAutoshiftObserverNotificationStatusCommandOutput/)

</details>
<details>
<summary>
GetManagedResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/GetManagedResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/GetManagedResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/GetManagedResourceCommandOutput/)

</details>
<details>
<summary>
ListAutoshifts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/ListAutoshiftsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/ListAutoshiftsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/ListAutoshiftsCommandOutput/)

</details>
<details>
<summary>
ListManagedResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/ListManagedResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/ListManagedResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/ListManagedResourcesCommandOutput/)

</details>
<details>
<summary>
ListZonalShifts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/ListZonalShiftsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/ListZonalShiftsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/ListZonalShiftsCommandOutput/)

</details>
<details>
<summary>
StartZonalShift
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/StartZonalShiftCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/StartZonalShiftCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/StartZonalShiftCommandOutput/)

</details>
<details>
<summary>
UpdateAutoshiftObserverNotificationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/UpdateAutoshiftObserverNotificationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/UpdateAutoshiftObserverNotificationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/UpdateAutoshiftObserverNotificationStatusCommandOutput/)

</details>
<details>
<summary>
UpdatePracticeRunConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/UpdatePracticeRunConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/UpdatePracticeRunConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/UpdatePracticeRunConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateZonalAutoshiftConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/UpdateZonalAutoshiftConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/UpdateZonalAutoshiftConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/UpdateZonalAutoshiftConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateZonalShift
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-zonal-shift/command/UpdateZonalShiftCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/UpdateZonalShiftCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-zonal-shift/Interface/UpdateZonalShiftCommandOutput/)

</details>
