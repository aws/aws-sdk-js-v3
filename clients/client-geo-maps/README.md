<!-- generated file, do not edit directly -->

# @aws-sdk/client-geo-maps

## Description

AWS SDK for JavaScript GeoMaps Client for Node.js, Browser and React Native.

<p> Integrate high-quality base map data into your applications using <a href="https://maplibre.org">MapLibre</a>. Capabilities include: </p> <ul> <li> <p>Access to comprehensive base map data, allowing you to tailor the map display to your specific needs.</p> </li> <li> <p>Multiple pre-designed map styles suited for various application types, such as navigation, logistics, or data visualization.</p> </li> <li> <p>Generation of static map images for scenarios where interactive maps aren't suitable, such as:</p> <ul> <li> <p>Embedding in emails or documents</p> </li> <li> <p>Displaying in low-bandwidth environments</p> </li> <li> <p>Creating printable maps</p> </li> <li> <p>Enhancing application performance by reducing client-side rendering</p> </li> </ul> </li> </ul>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-geo-maps`
- `yarn add @aws-sdk/client-geo-maps`
- `pnpm add @aws-sdk/client-geo-maps`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GeoMapsClient` and
the commands you need, for example `GetGlyphsCommand`:

```js
// ES5 example
const { GeoMapsClient, GetGlyphsCommand } = require("@aws-sdk/client-geo-maps");
```

```ts
// ES6+ example
import { GeoMapsClient, GetGlyphsCommand } from "@aws-sdk/client-geo-maps";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new GeoMapsClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new GetGlyphsCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`GeoMaps` extends `GeoMapsClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`GeoMapsClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { GeoMaps } from "@aws-sdk/client-geo-maps";

const client = new GeoMaps({ region: "REGION" });

// async/await.
try {
  const data = await client.getGlyphs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getGlyphs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.getGlyphs(params, (err, data) => {
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

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-geo-maps` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
GetGlyphs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-maps/command/GetGlyphsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetGlyphsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetGlyphsCommandOutput/)
</details>
<details>
<summary>
GetSprites
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-maps/command/GetSpritesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetSpritesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetSpritesCommandOutput/)
</details>
<details>
<summary>
GetStaticMap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-maps/command/GetStaticMapCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetStaticMapCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetStaticMapCommandOutput/)
</details>
<details>
<summary>
GetStyleDescriptor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-maps/command/GetStyleDescriptorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetStyleDescriptorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetStyleDescriptorCommandOutput/)
</details>
<details>
<summary>
GetTile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/geo-maps/command/GetTileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetTileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-geo-maps/Interface/GetTileCommandOutput/)
</details>
