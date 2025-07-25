<!-- generated file, do not edit directly -->

# @aws-sdk/client-socialmessaging

## Description

AWS SDK for JavaScript SocialMessaging Client for Node.js, Browser and React Native.

<p>
<i>Amazon Web Services End User Messaging Social</i>, also referred to as Social messaging, is a messaging service that enables
application developers to incorporate WhatsApp into their existing workflows. The <i>Amazon Web Services End User Messaging Social API</i> provides information about the
<i>Amazon Web Services End User Messaging Social API</i> resources, including supported HTTP methods, parameters, and schemas.</p>
<p>The <i>Amazon Web Services End User Messaging Social API</i> provides programmatic access to options that are unique to the WhatsApp Business Platform.</p>
<p>If you're new to the <i>Amazon Web Services End User Messaging Social API</i>, it's also helpful to review <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html">What is
Amazon Web Services End User Messaging Social</a> in the <i>Amazon Web Services End User Messaging Social User Guide</i>. The
<i>Amazon Web Services End User Messaging Social User Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use
<i>Amazon Web Services End User Messaging Social API</i> features programmatically and how to integrate functionality into applications.
The guide also provides key information, such as integration with other Amazon Web Services
services, and the quotas that apply to use of the service.</p>
<p>
<b>Regional availability</b>
</p>
<p>The <i>Amazon Web Services End User Messaging Social API</i> is available across several Amazon Web Services Regions and it provides a dedicated endpoint for each of these Regions. For a list of
all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html">Amazon Web Services End User Messaging endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see
<a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing
Amazon Web Services Regions</a> in the Amazon Web Services General
Reference.</p>
<p>In each Region, Amazon Web Services maintains multiple Availability Zones. These
Availability Zones are physically isolated from each other, but are united by private,
low-latency, high-throughput, and highly redundant network connections. These Availability
Zones enable us to provide very high levels of availability and redundancy, while also
minimizing latency. To learn more about the number of Availability Zones that are available
in each Region, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a>
</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-socialmessaging
using your favorite package manager:

- `npm install @aws-sdk/client-socialmessaging`
- `yarn add @aws-sdk/client-socialmessaging`
- `pnpm add @aws-sdk/client-socialmessaging`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SocialMessagingClient` and
the commands you need, for example `ListTagsForResourceCommand`:

```js
// ES5 example
const { SocialMessagingClient, ListTagsForResourceCommand } = require("@aws-sdk/client-socialmessaging");
```

```ts
// ES6+ example
import { SocialMessagingClient, ListTagsForResourceCommand } from "@aws-sdk/client-socialmessaging";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SocialMessagingClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListTagsForResourceCommand(params);
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
import * as AWS from "@aws-sdk/client-socialmessaging";
const client = new AWS.SocialMessaging({ region: "REGION" });

// async/await.
try {
  const data = await client.listTagsForResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTagsForResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTagsForResource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-socialmessaging` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateWhatsAppBusinessAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/AssociateWhatsAppBusinessAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/AssociateWhatsAppBusinessAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/AssociateWhatsAppBusinessAccountCommandOutput/)

</details>
<details>
<summary>
CreateWhatsAppMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/CreateWhatsAppMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/CreateWhatsAppMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/CreateWhatsAppMessageTemplateCommandOutput/)

</details>
<details>
<summary>
CreateWhatsAppMessageTemplateFromLibrary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/CreateWhatsAppMessageTemplateFromLibraryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/CreateWhatsAppMessageTemplateFromLibraryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/CreateWhatsAppMessageTemplateFromLibraryCommandOutput/)

</details>
<details>
<summary>
CreateWhatsAppMessageTemplateMedia
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/CreateWhatsAppMessageTemplateMediaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/CreateWhatsAppMessageTemplateMediaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/CreateWhatsAppMessageTemplateMediaCommandOutput/)

</details>
<details>
<summary>
DeleteWhatsAppMessageMedia
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/DeleteWhatsAppMessageMediaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/DeleteWhatsAppMessageMediaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/DeleteWhatsAppMessageMediaCommandOutput/)

</details>
<details>
<summary>
DeleteWhatsAppMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/DeleteWhatsAppMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/DeleteWhatsAppMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/DeleteWhatsAppMessageTemplateCommandOutput/)

</details>
<details>
<summary>
DisassociateWhatsAppBusinessAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/DisassociateWhatsAppBusinessAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/DisassociateWhatsAppBusinessAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/DisassociateWhatsAppBusinessAccountCommandOutput/)

</details>
<details>
<summary>
GetLinkedWhatsAppBusinessAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/GetLinkedWhatsAppBusinessAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/GetLinkedWhatsAppBusinessAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/GetLinkedWhatsAppBusinessAccountCommandOutput/)

</details>
<details>
<summary>
GetLinkedWhatsAppBusinessAccountPhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/GetLinkedWhatsAppBusinessAccountPhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput/)

</details>
<details>
<summary>
GetWhatsAppMessageMedia
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/GetWhatsAppMessageMediaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/GetWhatsAppMessageMediaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/GetWhatsAppMessageMediaCommandOutput/)

</details>
<details>
<summary>
GetWhatsAppMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/GetWhatsAppMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/GetWhatsAppMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/GetWhatsAppMessageTemplateCommandOutput/)

</details>
<details>
<summary>
ListLinkedWhatsAppBusinessAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/ListLinkedWhatsAppBusinessAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/ListLinkedWhatsAppBusinessAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/ListLinkedWhatsAppBusinessAccountsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListWhatsAppMessageTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/ListWhatsAppMessageTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/ListWhatsAppMessageTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/ListWhatsAppMessageTemplatesCommandOutput/)

</details>
<details>
<summary>
ListWhatsAppTemplateLibrary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/ListWhatsAppTemplateLibraryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/ListWhatsAppTemplateLibraryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/ListWhatsAppTemplateLibraryCommandOutput/)

</details>
<details>
<summary>
PostWhatsAppMessageMedia
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/PostWhatsAppMessageMediaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/PostWhatsAppMessageMediaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/PostWhatsAppMessageMediaCommandOutput/)

</details>
<details>
<summary>
PutWhatsAppBusinessAccountEventDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/PutWhatsAppBusinessAccountEventDestinationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/PutWhatsAppBusinessAccountEventDestinationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/PutWhatsAppBusinessAccountEventDestinationsCommandOutput/)

</details>
<details>
<summary>
SendWhatsAppMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/SendWhatsAppMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/SendWhatsAppMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/SendWhatsAppMessageCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateWhatsAppMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/socialmessaging/command/UpdateWhatsAppMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/UpdateWhatsAppMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-socialmessaging/Interface/UpdateWhatsAppMessageTemplateCommandOutput/)

</details>
