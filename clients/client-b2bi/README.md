<!-- generated file, do not edit directly -->

# @aws-sdk/client-b2bi

## Description

AWS SDK for JavaScript B2bi Client for Node.js, Browser and React Native.

<p>This is the <i>Amazon Web Services B2B Data Interchange API Reference</i>. It provides descriptions, API request parameters, and the XML response for each of the B2BI API actions.</p>
<p>B2BI enables automated exchange of EDI (electronic data interchange) based business-critical transactions at cloud
scale, with elasticity and pay-as-you-go pricing. Businesses use EDI documents to exchange
transactional data with trading partners, such as suppliers and end customers, using
standardized formats such as X12.</p>
<note>
<p>Rather than actually running a command, you can use the
<code>--generate-cli-skeleton</code> parameter with any API call to generate and display
a parameter template. You can then use the generated template to customize and use as input
on a later command. For details, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html#cli-usage-skeleton-generate">Generate and use a parameter skeleton file</a>.</p>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-b2bi
using your favorite package manager:

- `npm install @aws-sdk/client-b2bi`
- `yarn add @aws-sdk/client-b2bi`
- `pnpm add @aws-sdk/client-b2bi`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `B2biClient` and
the commands you need, for example `ListCapabilitiesCommand`:

```js
// ES5 example
const { B2biClient, ListCapabilitiesCommand } = require("@aws-sdk/client-b2bi");
```

```ts
// ES6+ example
import { B2biClient, ListCapabilitiesCommand } from "@aws-sdk/client-b2bi";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new B2biClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListCapabilitiesCommand(params);
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
import * as AWS from "@aws-sdk/client-b2bi";
const client = new AWS.B2bi({ region: "REGION" });

// async/await.
try {
  const data = await client.listCapabilities(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listCapabilities(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listCapabilities(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-b2bi` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateCapability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/createcapabilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/createcapabilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/createcapabilitycommandoutput.html)

</details>
<details>
<summary>
CreatePartnership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/createpartnershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/createpartnershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/createpartnershipcommandoutput.html)

</details>
<details>
<summary>
CreateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/createprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/createprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/createprofilecommandoutput.html)

</details>
<details>
<summary>
CreateTransformer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/createtransformercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/createtransformercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/createtransformercommandoutput.html)

</details>
<details>
<summary>
DeleteCapability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/deletecapabilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/deletecapabilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/deletecapabilitycommandoutput.html)

</details>
<details>
<summary>
DeletePartnership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/deletepartnershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/deletepartnershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/deletepartnershipcommandoutput.html)

</details>
<details>
<summary>
DeleteProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/deleteprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/deleteprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/deleteprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteTransformer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/deletetransformercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/deletetransformercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/deletetransformercommandoutput.html)

</details>
<details>
<summary>
GetCapability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/getcapabilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/getcapabilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/getcapabilitycommandoutput.html)

</details>
<details>
<summary>
GetPartnership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/getpartnershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/getpartnershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/getpartnershipcommandoutput.html)

</details>
<details>
<summary>
GetProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/getprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/getprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/getprofilecommandoutput.html)

</details>
<details>
<summary>
GetTransformer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/gettransformercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/gettransformercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/gettransformercommandoutput.html)

</details>
<details>
<summary>
GetTransformerJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/gettransformerjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/gettransformerjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/gettransformerjobcommandoutput.html)

</details>
<details>
<summary>
ListCapabilities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/listcapabilitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listcapabilitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listcapabilitiescommandoutput.html)

</details>
<details>
<summary>
ListPartnerships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/listpartnershipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listpartnershipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listpartnershipscommandoutput.html)

</details>
<details>
<summary>
ListProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/listprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listprofilescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTransformers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/listtransformerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listtransformerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/listtransformerscommandoutput.html)

</details>
<details>
<summary>
StartTransformerJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/starttransformerjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/starttransformerjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/starttransformerjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TestMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/testmappingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/testmappingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/testmappingcommandoutput.html)

</details>
<details>
<summary>
TestParsing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/testparsingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/testparsingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/testparsingcommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateCapability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/updatecapabilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/updatecapabilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/updatecapabilitycommandoutput.html)

</details>
<details>
<summary>
UpdatePartnership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/updatepartnershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/updatepartnershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/updatepartnershipcommandoutput.html)

</details>
<details>
<summary>
UpdateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/updateprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/updateprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/updateprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateTransformer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/classes/updatetransformercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/updatetransformercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-b2bi/interfaces/updatetransformercommandoutput.html)

</details>
