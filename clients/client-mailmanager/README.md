<!-- generated file, do not edit directly -->

# @aws-sdk/client-mailmanager

## Description

AWS SDK for JavaScript MailManager Client for Node.js, Browser and React Native.

<fullname>Amazon SES Mail Manager API</fullname>

<p>The Amazon SES Mail Manager API contains operations and data types
that comprise the Mail Manager feature of <a href="http://aws.amazon.com/ses">Amazon Simple Email Service (SES)</a>.</p>
<p>Mail Manager is a set of Amazon SES email gateway features designed to help you strengthen
your organization's email infrastructure, simplify email workflow management, and
streamline email compliance control. To learn more, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/eb.html">Mail Manager chapter</a> in the <i>Amazon SES Developer
Guide</i>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-mailmanager
using your favorite package manager:

- `npm install @aws-sdk/client-mailmanager`
- `yarn add @aws-sdk/client-mailmanager`
- `pnpm add @aws-sdk/client-mailmanager`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MailManagerClient` and
the commands you need, for example `ListRelaysCommand`:

```js
// ES5 example
const { MailManagerClient, ListRelaysCommand } = require("@aws-sdk/client-mailmanager");
```

```ts
// ES6+ example
import { MailManagerClient, ListRelaysCommand } from "@aws-sdk/client-mailmanager";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MailManagerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListRelaysCommand(params);
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
import * as AWS from "@aws-sdk/client-mailmanager";
const client = new AWS.MailManager({ region: "REGION" });

// async/await.
try {
  const data = await client.listRelays(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listRelays(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listRelays(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-mailmanager` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAddonInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateAddonInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateAddonInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateAddonInstanceCommandOutput/)

</details>
<details>
<summary>
CreateAddonSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateAddonSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateAddonSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateAddonSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateAddressList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateAddressListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateAddressListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateAddressListCommandOutput/)

</details>
<details>
<summary>
CreateAddressListImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateAddressListImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateAddressListImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateAddressListImportJobCommandOutput/)

</details>
<details>
<summary>
CreateArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateArchiveCommandOutput/)

</details>
<details>
<summary>
CreateIngressPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateIngressPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateIngressPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateIngressPointCommandOutput/)

</details>
<details>
<summary>
CreateRelay
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateRelayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateRelayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateRelayCommandOutput/)

</details>
<details>
<summary>
CreateRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateRuleSetCommandOutput/)

</details>
<details>
<summary>
CreateTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/CreateTrafficPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateTrafficPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/CreateTrafficPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteAddonInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeleteAddonInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteAddonInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteAddonInstanceCommandOutput/)

</details>
<details>
<summary>
DeleteAddonSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeleteAddonSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteAddonSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteAddonSubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteAddressList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeleteAddressListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteAddressListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteAddressListCommandOutput/)

</details>
<details>
<summary>
DeleteArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeleteArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteArchiveCommandOutput/)

</details>
<details>
<summary>
DeleteIngressPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeleteIngressPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteIngressPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteIngressPointCommandOutput/)

</details>
<details>
<summary>
DeleteRelay
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeleteRelayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteRelayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteRelayCommandOutput/)

</details>
<details>
<summary>
DeleteRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeleteRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteRuleSetCommandOutput/)

</details>
<details>
<summary>
DeleteTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeleteTrafficPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteTrafficPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeleteTrafficPolicyCommandOutput/)

</details>
<details>
<summary>
DeregisterMemberFromAddressList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/DeregisterMemberFromAddressListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeregisterMemberFromAddressListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/DeregisterMemberFromAddressListCommandOutput/)

</details>
<details>
<summary>
GetAddonInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetAddonInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetAddonInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetAddonInstanceCommandOutput/)

</details>
<details>
<summary>
GetAddonSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetAddonSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetAddonSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetAddonSubscriptionCommandOutput/)

</details>
<details>
<summary>
GetAddressList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetAddressListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetAddressListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetAddressListCommandOutput/)

</details>
<details>
<summary>
GetAddressListImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetAddressListImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetAddressListImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetAddressListImportJobCommandOutput/)

</details>
<details>
<summary>
GetArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveCommandOutput/)

</details>
<details>
<summary>
GetArchiveExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetArchiveExportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveExportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveExportCommandOutput/)

</details>
<details>
<summary>
GetArchiveMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetArchiveMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveMessageCommandOutput/)

</details>
<details>
<summary>
GetArchiveMessageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetArchiveMessageContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveMessageContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveMessageContentCommandOutput/)

</details>
<details>
<summary>
GetArchiveSearch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetArchiveSearchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveSearchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveSearchCommandOutput/)

</details>
<details>
<summary>
GetArchiveSearchResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetArchiveSearchResultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveSearchResultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetArchiveSearchResultsCommandOutput/)

</details>
<details>
<summary>
GetIngressPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetIngressPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetIngressPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetIngressPointCommandOutput/)

</details>
<details>
<summary>
GetMemberOfAddressList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetMemberOfAddressListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetMemberOfAddressListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetMemberOfAddressListCommandOutput/)

</details>
<details>
<summary>
GetRelay
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetRelayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetRelayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetRelayCommandOutput/)

</details>
<details>
<summary>
GetRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetRuleSetCommandOutput/)

</details>
<details>
<summary>
GetTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/GetTrafficPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetTrafficPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/GetTrafficPolicyCommandOutput/)

</details>
<details>
<summary>
ListAddonInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListAddonInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListAddonInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListAddonInstancesCommandOutput/)

</details>
<details>
<summary>
ListAddonSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListAddonSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListAddonSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListAddonSubscriptionsCommandOutput/)

</details>
<details>
<summary>
ListAddressListImportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListAddressListImportJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListAddressListImportJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListAddressListImportJobsCommandOutput/)

</details>
<details>
<summary>
ListAddressLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListAddressListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListAddressListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListAddressListsCommandOutput/)

</details>
<details>
<summary>
ListArchiveExports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListArchiveExportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListArchiveExportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListArchiveExportsCommandOutput/)

</details>
<details>
<summary>
ListArchives
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListArchivesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListArchivesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListArchivesCommandOutput/)

</details>
<details>
<summary>
ListArchiveSearches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListArchiveSearchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListArchiveSearchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListArchiveSearchesCommandOutput/)

</details>
<details>
<summary>
ListIngressPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListIngressPointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListIngressPointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListIngressPointsCommandOutput/)

</details>
<details>
<summary>
ListMembersOfAddressList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListMembersOfAddressListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListMembersOfAddressListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListMembersOfAddressListCommandOutput/)

</details>
<details>
<summary>
ListRelays
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListRelaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListRelaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListRelaysCommandOutput/)

</details>
<details>
<summary>
ListRuleSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListRuleSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListRuleSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListRuleSetsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTrafficPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/ListTrafficPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListTrafficPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/ListTrafficPoliciesCommandOutput/)

</details>
<details>
<summary>
RegisterMemberToAddressList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/RegisterMemberToAddressListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/RegisterMemberToAddressListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/RegisterMemberToAddressListCommandOutput/)

</details>
<details>
<summary>
StartAddressListImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/StartAddressListImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StartAddressListImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StartAddressListImportJobCommandOutput/)

</details>
<details>
<summary>
StartArchiveExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/StartArchiveExportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StartArchiveExportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StartArchiveExportCommandOutput/)

</details>
<details>
<summary>
StartArchiveSearch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/StartArchiveSearchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StartArchiveSearchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StartArchiveSearchCommandOutput/)

</details>
<details>
<summary>
StopAddressListImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/StopAddressListImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StopAddressListImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StopAddressListImportJobCommandOutput/)

</details>
<details>
<summary>
StopArchiveExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/StopArchiveExportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StopArchiveExportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StopArchiveExportCommandOutput/)

</details>
<details>
<summary>
StopArchiveSearch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/StopArchiveSearchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StopArchiveSearchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/StopArchiveSearchCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/UpdateArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateArchiveCommandOutput/)

</details>
<details>
<summary>
UpdateIngressPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/UpdateIngressPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateIngressPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateIngressPointCommandOutput/)

</details>
<details>
<summary>
UpdateRelay
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/UpdateRelayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateRelayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateRelayCommandOutput/)

</details>
<details>
<summary>
UpdateRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/UpdateRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateRuleSetCommandOutput/)

</details>
<details>
<summary>
UpdateTrafficPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mailmanager/command/UpdateTrafficPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateTrafficPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mailmanager/Interface/UpdateTrafficPolicyCommandOutput/)

</details>
