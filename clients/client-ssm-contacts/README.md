<!-- generated file, do not edit directly -->

# @aws-sdk/client-ssm-contacts

## Description

AWS SDK for JavaScript SSMContacts Client for Node.js, Browser and React Native.

<p>Systems Manager Incident Manager is an incident management console designed to help users
mitigate and recover from incidents affecting their Amazon Web Services-hosted applications.
An incident is any unplanned interruption or reduction in quality of services.</p>
<p>Incident Manager increases incident resolution by notifying responders of
impact, highlighting relevant troubleshooting data, and providing collaboration tools to
get services back up and running. To achieve the primary goal of reducing the
time-to-resolution of critical incidents, Incident Manager automates response plans
and enables responder team escalation.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-ssm-contacts
using your favorite package manager:

- `npm install @aws-sdk/client-ssm-contacts`
- `yarn add @aws-sdk/client-ssm-contacts`
- `pnpm add @aws-sdk/client-ssm-contacts`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SSMContactsClient` and
the commands you need, for example `AcceptPageCommand`:

```js
// ES5 example
const { SSMContactsClient, AcceptPageCommand } = require("@aws-sdk/client-ssm-contacts");
```

```ts
// ES6+ example
import { SSMContactsClient, AcceptPageCommand } from "@aws-sdk/client-ssm-contacts";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SSMContactsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptPageCommand(params);
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
import * as AWS from "@aws-sdk/client-ssm-contacts";
const client = new AWS.SSMContacts({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptPage(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptPage(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptPage(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ssm-contacts` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptPage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/acceptpagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/acceptpagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/acceptpagecommandoutput.html)

</details>
<details>
<summary>
ActivateContactChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/activatecontactchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/activatecontactchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/activatecontactchannelcommandoutput.html)

</details>
<details>
<summary>
CreateContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/createcontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/createcontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/createcontactcommandoutput.html)

</details>
<details>
<summary>
CreateContactChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/createcontactchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/createcontactchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/createcontactchannelcommandoutput.html)

</details>
<details>
<summary>
CreateRotation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/createrotationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/createrotationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/createrotationcommandoutput.html)

</details>
<details>
<summary>
CreateRotationOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/createrotationoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/createrotationoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/createrotationoverridecommandoutput.html)

</details>
<details>
<summary>
DeactivateContactChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/deactivatecontactchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deactivatecontactchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deactivatecontactchannelcommandoutput.html)

</details>
<details>
<summary>
DeleteContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/deletecontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deletecontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deletecontactcommandoutput.html)

</details>
<details>
<summary>
DeleteContactChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/deletecontactchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deletecontactchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deletecontactchannelcommandoutput.html)

</details>
<details>
<summary>
DeleteRotation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/deleterotationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deleterotationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deleterotationcommandoutput.html)

</details>
<details>
<summary>
DeleteRotationOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/deleterotationoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deleterotationoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/deleterotationoverridecommandoutput.html)

</details>
<details>
<summary>
DescribeEngagement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/describeengagementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/describeengagementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/describeengagementcommandoutput.html)

</details>
<details>
<summary>
DescribePage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/describepagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/describepagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/describepagecommandoutput.html)

</details>
<details>
<summary>
GetContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/getcontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getcontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getcontactcommandoutput.html)

</details>
<details>
<summary>
GetContactChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/getcontactchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getcontactchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getcontactchannelcommandoutput.html)

</details>
<details>
<summary>
GetContactPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/getcontactpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getcontactpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getcontactpolicycommandoutput.html)

</details>
<details>
<summary>
GetRotation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/getrotationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getrotationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getrotationcommandoutput.html)

</details>
<details>
<summary>
GetRotationOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/getrotationoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getrotationoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/getrotationoverridecommandoutput.html)

</details>
<details>
<summary>
ListContactChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listcontactchannelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listcontactchannelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listcontactchannelscommandoutput.html)

</details>
<details>
<summary>
ListContacts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listcontactscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listcontactscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listcontactscommandoutput.html)

</details>
<details>
<summary>
ListEngagements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listengagementscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listengagementscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listengagementscommandoutput.html)

</details>
<details>
<summary>
ListPageReceipts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listpagereceiptscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpagereceiptscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpagereceiptscommandoutput.html)

</details>
<details>
<summary>
ListPageResolutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listpageresolutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpageresolutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpageresolutionscommandoutput.html)

</details>
<details>
<summary>
ListPagesByContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listpagesbycontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpagesbycontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpagesbycontactcommandoutput.html)

</details>
<details>
<summary>
ListPagesByEngagement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listpagesbyengagementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpagesbyengagementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpagesbyengagementcommandoutput.html)

</details>
<details>
<summary>
ListPreviewRotationShifts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listpreviewrotationshiftscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpreviewrotationshiftscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listpreviewrotationshiftscommandoutput.html)

</details>
<details>
<summary>
ListRotationOverrides
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listrotationoverridescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listrotationoverridescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listrotationoverridescommandoutput.html)

</details>
<details>
<summary>
ListRotations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listrotationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listrotationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listrotationscommandoutput.html)

</details>
<details>
<summary>
ListRotationShifts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listrotationshiftscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listrotationshiftscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listrotationshiftscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutContactPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/putcontactpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/putcontactpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/putcontactpolicycommandoutput.html)

</details>
<details>
<summary>
SendActivationCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/sendactivationcodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/sendactivationcodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/sendactivationcodecommandoutput.html)

</details>
<details>
<summary>
StartEngagement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/startengagementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/startengagementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/startengagementcommandoutput.html)

</details>
<details>
<summary>
StopEngagement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/stopengagementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/stopengagementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/stopengagementcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/updatecontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/updatecontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/updatecontactcommandoutput.html)

</details>
<details>
<summary>
UpdateContactChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/updatecontactchannelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/updatecontactchannelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/updatecontactchannelcommandoutput.html)

</details>
<details>
<summary>
UpdateRotation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/classes/updaterotationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/updaterotationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm-contacts/interfaces/updaterotationcommandoutput.html)

</details>
