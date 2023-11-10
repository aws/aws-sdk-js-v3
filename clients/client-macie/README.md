<!-- generated file, do not edit directly -->

# @aws-sdk/client-macie

## Description

AWS SDK for JavaScript Macie Client for Node.js, Browser and React Native.

<fullname>Amazon Macie Classic</fullname>

<p>Amazon Macie Classic has been discontinued and is no longer available.</p>
<p>A new Amazon Macie is now available with significant design improvements and additional
features, at a lower price and in most Amazon Web Services Regions. We encourage you to take advantage of the
new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Macie, see <a href="http://aws.amazon.com/macie/">Amazon Macie</a>. To learn how to use the new Macie, see the <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html">Amazon Macie User
Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-macie
using your favorite package manager:

- `npm install @aws-sdk/client-macie`
- `yarn add @aws-sdk/client-macie`
- `pnpm add @aws-sdk/client-macie`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MacieClient` and
the commands you need, for example `ListS3ResourcesCommand`:

```js
// ES5 example
const { MacieClient, ListS3ResourcesCommand } = require("@aws-sdk/client-macie");
```

```ts
// ES6+ example
import { MacieClient, ListS3ResourcesCommand } from "@aws-sdk/client-macie";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MacieClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListS3ResourcesCommand(params);
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
import * as AWS from "@aws-sdk/client-macie";
const client = new AWS.Macie({ region: "REGION" });

// async/await.
try {
  const data = await client.listS3Resources(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listS3Resources(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listS3Resources(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-macie` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateMemberAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/classes/associatememberaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/associatememberaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/associatememberaccountcommandoutput.html)

</details>
<details>
<summary>
AssociateS3Resources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/classes/associates3resourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/associates3resourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/associates3resourcescommandoutput.html)

</details>
<details>
<summary>
DisassociateMemberAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/classes/disassociatememberaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/disassociatememberaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/disassociatememberaccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateS3Resources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/classes/disassociates3resourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/disassociates3resourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/disassociates3resourcescommandoutput.html)

</details>
<details>
<summary>
ListMemberAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/classes/listmemberaccountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/listmemberaccountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/listmemberaccountscommandoutput.html)

</details>
<details>
<summary>
ListS3Resources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/classes/lists3resourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/lists3resourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/lists3resourcescommandoutput.html)

</details>
<details>
<summary>
UpdateS3Resources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/classes/updates3resourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/updates3resourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-macie/interfaces/updates3resourcescommandoutput.html)

</details>
