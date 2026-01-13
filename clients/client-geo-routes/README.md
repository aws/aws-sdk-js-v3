<!-- generated file, do not edit directly -->

# @aws-sdk/client-geo-routes

## Description

AWS SDK for JavaScript GeoRoutes Client for Node.js, Browser and React Native.

<p>With the Amazon Location Routes API you can calculate routes and estimate travel time based on up-to-date road network and live traffic information.</p> <p>Calculate optimal travel routes and estimate travel times using up-to-date road network and traffic data. Key features include:</p> <ul> <li> <p>Point-to-point routing with estimated travel time, distance, and turn-by-turn directions</p> </li> <li> <p>Multi-point route optimization to minimize travel time or distance</p> </li> <li> <p>Route matrices for efficient multi-destination planning</p> </li> <li> <p>Isoline calculations to determine reachable areas within specified time or distance thresholds</p> </li> <li> <p>Map-matching to align GPS traces with the road network</p> </li> </ul>

## Installing
To install this package, simply type add or install @aws-sdk/client-geo-routes
using your favorite package manager:
- `npm install @aws-sdk/client-geo-routes`
- `yarn add @aws-sdk/client-geo-routes`
- `pnpm add @aws-sdk/client-geo-routes`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GeoRoutesClient` and
the commands you need, for example `SnapToRoadsCommand`:

```js
// ES5 example
const { GeoRoutesClient, SnapToRoadsCommand } = require("@aws-sdk/client-geo-routes");
```

```ts
// ES6+ example
import { GeoRoutesClient, SnapToRoadsCommand } from "@aws-sdk/client-geo-routes";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GeoRoutesClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new SnapToRoadsCommand(params);
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
import * as AWS from "@aws-sdk/client-geo-routes";
const client = new AWS.GeoRoutes({ region: "REGION" });

// async/await.
try {
  const data = await client.snapToRoads(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .snapToRoads(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.snapToRoads(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-geo-routes` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CalculateIsolines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-routes/command/CalculateIsolinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/CalculateIsolinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/CalculateIsolinesCommandOutput/)
</details>
<details>
<summary>
CalculateRouteMatrix
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-routes/command/CalculateRouteMatrixCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/CalculateRouteMatrixCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/CalculateRouteMatrixCommandOutput/)
</details>
<details>
<summary>
CalculateRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-routes/command/CalculateRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/CalculateRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/CalculateRoutesCommandOutput/)
</details>
<details>
<summary>
OptimizeWaypoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-routes/command/OptimizeWaypointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/OptimizeWaypointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/OptimizeWaypointsCommandOutput/)
</details>
<details>
<summary>
SnapToRoads
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-routes/command/SnapToRoadsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/SnapToRoadsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-routes/Interface/SnapToRoadsCommandOutput/)
</details>
