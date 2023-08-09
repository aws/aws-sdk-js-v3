<!-- generated file, do not edit directly -->

# @aws-sdk/client-codestar-notifications

## Description

AWS SDK for JavaScript CodestarNotifications Client for Node.js, Browser and React Native.

<p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the
operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API
to work with the following objects:</p>

<p>Notification rules, by calling the following: </p>
<ul>
<li>
<p>
<a>CreateNotificationRule</a>, which creates a notification rule for a
resource in your account. </p>
</li>
<li>
<p>
<a>DeleteNotificationRule</a>, which deletes a notification rule. </p>
</li>
<li>
<p>
<a>DescribeNotificationRule</a>, which provides information about a notification rule. </p>
</li>
<li>
<p>
<a>ListNotificationRules</a>, which lists the notification rules associated with
your account. </p>
</li>
<li>
<p>
<a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a
notification rule. </p>
</li>
<li>
<p>
<a>Subscribe</a>, which subscribes a target to a notification rule. </p>
</li>
<li>
<p>
<a>Unsubscribe</a>, which removes a target from a notification rule. </p>
</li>
</ul>

<p>Targets, by calling the following: </p>
<ul>
<li>
<p>
<a>DeleteTarget</a>, which removes a notification rule target from a
notification rule. </p>
</li>
<li>
<p>
<a>ListTargets</a>, which lists the targets associated with a
notification rule. </p>
</li>
</ul>

<p>Events, by calling the following: </p>
<ul>
<li>
<p>
<a>ListEventTypes</a>, which lists the event types you can include in
a notification rule. </p>
</li>
</ul>
<p>Tags, by calling the following: </p>
<ul>
<li>
<p>
<a>ListTagsForResource</a>, which lists the tags already associated
with a notification rule in your account. </p>
</li>
<li>
<p>
<a>TagResource</a>, which associates a tag you provide with a
notification rule in your account. </p>
</li>
<li>
<p>
<a>UntagResource</a>, which removes a tag from a notification rule in
your account. </p>
</li>
</ul>

<p> For information about how to use AWS CodeStar Notifications, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html">Amazon Web Services Developer Tools Console User Guide</a>.
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-codestar-notifications
using your favorite package manager:

- `npm install @aws-sdk/client-codestar-notifications`
- `yarn add @aws-sdk/client-codestar-notifications`
- `pnpm add @aws-sdk/client-codestar-notifications`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodestarNotificationsClient` and
the commands you need, for example `CreateNotificationRuleCommand`:

```js
// ES5 example
const {
  CodestarNotificationsClient,
  CreateNotificationRuleCommand,
} = require("@aws-sdk/client-codestar-notifications");
```

```ts
// ES6+ example
import { CodestarNotificationsClient, CreateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodestarNotificationsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateNotificationRuleCommand(params);
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
import * as AWS from "@aws-sdk/client-codestar-notifications";
const client = new AWS.CodestarNotifications({ region: "REGION" });

// async/await.
try {
  const data = await client.createNotificationRule(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createNotificationRule(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createNotificationRule(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codestar-notifications` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateNotificationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/createnotificationrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/createnotificationrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/createnotificationrulecommandoutput.html)

</details>
<details>
<summary>
DeleteNotificationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/deletenotificationrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/deletenotificationrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/deletenotificationrulecommandoutput.html)

</details>
<details>
<summary>
DeleteTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/deletetargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/deletetargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/deletetargetcommandoutput.html)

</details>
<details>
<summary>
DescribeNotificationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/describenotificationrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/describenotificationrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/describenotificationrulecommandoutput.html)

</details>
<details>
<summary>
ListEventTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/listeventtypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/listeventtypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/listeventtypescommandoutput.html)

</details>
<details>
<summary>
ListNotificationRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/listnotificationrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/listnotificationrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/listnotificationrulescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/listtargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/listtargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/listtargetscommandoutput.html)

</details>
<details>
<summary>
Subscribe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/subscribecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/subscribecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/subscribecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
Unsubscribe
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/unsubscribecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/unsubscribecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/unsubscribecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateNotificationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/classes/updatenotificationrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/updatenotificationrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-notifications/interfaces/updatenotificationrulecommandoutput.html)

</details>
