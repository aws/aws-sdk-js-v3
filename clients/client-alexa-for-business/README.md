<!-- generated file, do not edit directly -->

# @aws-sdk/client-alexa-for-business

## Description

AWS SDK for JavaScript AlexaForBusiness Client for Node.js, Browser and React Native.

<p>Alexa for Business has been retired and is no longer supported.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-alexa-for-business
using your favorite package manager:

- `npm install @aws-sdk/client-alexa-for-business`
- `yarn add @aws-sdk/client-alexa-for-business`
- `pnpm add @aws-sdk/client-alexa-for-business`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AlexaForBusinessClient` and
the commands you need, for example `ListSkillsCommand`:

```js
// ES5 example
const { AlexaForBusinessClient, ListSkillsCommand } = require("@aws-sdk/client-alexa-for-business");
```

```ts
// ES6+ example
import { AlexaForBusinessClient, ListSkillsCommand } from "@aws-sdk/client-alexa-for-business";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AlexaForBusinessClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListSkillsCommand(params);
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
import * as AWS from "@aws-sdk/client-alexa-for-business";
const client = new AWS.AlexaForBusiness({ region: "REGION" });

// async/await.
try {
  const data = await client.listSkills(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listSkills(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listSkills(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-alexa-for-business` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ApproveSkill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ApproveSkillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ApproveSkillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ApproveSkillCommandOutput/)

</details>
<details>
<summary>
AssociateContactWithAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/AssociateContactWithAddressBookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateContactWithAddressBookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateContactWithAddressBookCommandOutput/)

</details>
<details>
<summary>
AssociateDeviceWithNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/AssociateDeviceWithNetworkProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateDeviceWithNetworkProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateDeviceWithNetworkProfileCommandOutput/)

</details>
<details>
<summary>
AssociateDeviceWithRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/AssociateDeviceWithRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateDeviceWithRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateDeviceWithRoomCommandOutput/)

</details>
<details>
<summary>
AssociateSkillGroupWithRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/AssociateSkillGroupWithRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateSkillGroupWithRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateSkillGroupWithRoomCommandOutput/)

</details>
<details>
<summary>
AssociateSkillWithSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/AssociateSkillWithSkillGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateSkillWithSkillGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateSkillWithSkillGroupCommandOutput/)

</details>
<details>
<summary>
AssociateSkillWithUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/AssociateSkillWithUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateSkillWithUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/AssociateSkillWithUsersCommandOutput/)

</details>
<details>
<summary>
CreateAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateAddressBookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateAddressBookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateAddressBookCommandOutput/)

</details>
<details>
<summary>
CreateBusinessReportSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateBusinessReportScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateBusinessReportScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateBusinessReportScheduleCommandOutput/)

</details>
<details>
<summary>
CreateConferenceProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateConferenceProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateConferenceProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateConferenceProviderCommandOutput/)

</details>
<details>
<summary>
CreateContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateContactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateContactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateContactCommandOutput/)

</details>
<details>
<summary>
CreateGatewayGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateGatewayGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateGatewayGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateGatewayGroupCommandOutput/)

</details>
<details>
<summary>
CreateNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateNetworkProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateNetworkProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateNetworkProfileCommandOutput/)

</details>
<details>
<summary>
CreateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateProfileCommandOutput/)

</details>
<details>
<summary>
CreateRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateRoomCommandOutput/)

</details>
<details>
<summary>
CreateSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateSkillGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateSkillGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateSkillGroupCommandOutput/)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/CreateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/CreateUserCommandOutput/)

</details>
<details>
<summary>
DeleteAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteAddressBookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteAddressBookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteAddressBookCommandOutput/)

</details>
<details>
<summary>
DeleteBusinessReportSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteBusinessReportScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteBusinessReportScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteBusinessReportScheduleCommandOutput/)

</details>
<details>
<summary>
DeleteConferenceProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteConferenceProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteConferenceProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteConferenceProviderCommandOutput/)

</details>
<details>
<summary>
DeleteContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteContactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteContactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteContactCommandOutput/)

</details>
<details>
<summary>
DeleteDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteDeviceCommandOutput/)

</details>
<details>
<summary>
DeleteDeviceUsageData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteDeviceUsageDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteDeviceUsageDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteDeviceUsageDataCommandOutput/)

</details>
<details>
<summary>
DeleteGatewayGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteGatewayGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteGatewayGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteGatewayGroupCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteNetworkProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteNetworkProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteNetworkProfileCommandOutput/)

</details>
<details>
<summary>
DeleteProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteProfileCommandOutput/)

</details>
<details>
<summary>
DeleteRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteRoomCommandOutput/)

</details>
<details>
<summary>
DeleteRoomSkillParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteRoomSkillParameterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteRoomSkillParameterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteRoomSkillParameterCommandOutput/)

</details>
<details>
<summary>
DeleteSkillAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteSkillAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteSkillAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteSkillAuthorizationCommandOutput/)

</details>
<details>
<summary>
DeleteSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteSkillGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteSkillGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteSkillGroupCommandOutput/)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DeleteUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DeleteUserCommandOutput/)

</details>
<details>
<summary>
DisassociateContactFromAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DisassociateContactFromAddressBookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateContactFromAddressBookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateContactFromAddressBookCommandOutput/)

</details>
<details>
<summary>
DisassociateDeviceFromRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DisassociateDeviceFromRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateDeviceFromRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateDeviceFromRoomCommandOutput/)

</details>
<details>
<summary>
DisassociateSkillFromSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DisassociateSkillFromSkillGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateSkillFromSkillGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateSkillFromSkillGroupCommandOutput/)

</details>
<details>
<summary>
DisassociateSkillFromUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DisassociateSkillFromUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateSkillFromUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateSkillFromUsersCommandOutput/)

</details>
<details>
<summary>
DisassociateSkillGroupFromRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/DisassociateSkillGroupFromRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateSkillGroupFromRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/DisassociateSkillGroupFromRoomCommandOutput/)

</details>
<details>
<summary>
ForgetSmartHomeAppliances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ForgetSmartHomeAppliancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ForgetSmartHomeAppliancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ForgetSmartHomeAppliancesCommandOutput/)

</details>
<details>
<summary>
GetAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetAddressBookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetAddressBookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetAddressBookCommandOutput/)

</details>
<details>
<summary>
GetConferencePreference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetConferencePreferenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetConferencePreferenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetConferencePreferenceCommandOutput/)

</details>
<details>
<summary>
GetConferenceProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetConferenceProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetConferenceProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetConferenceProviderCommandOutput/)

</details>
<details>
<summary>
GetContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetContactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetContactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetContactCommandOutput/)

</details>
<details>
<summary>
GetDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetDeviceCommandOutput/)

</details>
<details>
<summary>
GetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetGatewayCommandOutput/)

</details>
<details>
<summary>
GetGatewayGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetGatewayGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetGatewayGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetGatewayGroupCommandOutput/)

</details>
<details>
<summary>
GetInvitationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetInvitationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetInvitationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetInvitationConfigurationCommandOutput/)

</details>
<details>
<summary>
GetNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetNetworkProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetNetworkProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetNetworkProfileCommandOutput/)

</details>
<details>
<summary>
GetProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetProfileCommandOutput/)

</details>
<details>
<summary>
GetRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetRoomCommandOutput/)

</details>
<details>
<summary>
GetRoomSkillParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetRoomSkillParameterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetRoomSkillParameterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetRoomSkillParameterCommandOutput/)

</details>
<details>
<summary>
GetSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/GetSkillGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetSkillGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/GetSkillGroupCommandOutput/)

</details>
<details>
<summary>
ListBusinessReportSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListBusinessReportSchedulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListBusinessReportSchedulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListBusinessReportSchedulesCommandOutput/)

</details>
<details>
<summary>
ListConferenceProviders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListConferenceProvidersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListConferenceProvidersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListConferenceProvidersCommandOutput/)

</details>
<details>
<summary>
ListDeviceEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListDeviceEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListDeviceEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListDeviceEventsCommandOutput/)

</details>
<details>
<summary>
ListGatewayGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListGatewayGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListGatewayGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListGatewayGroupsCommandOutput/)

</details>
<details>
<summary>
ListGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListGatewaysCommandOutput/)

</details>
<details>
<summary>
ListSkills
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListSkillsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListSkillsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListSkillsCommandOutput/)

</details>
<details>
<summary>
ListSkillsStoreCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListSkillsStoreCategoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListSkillsStoreCategoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListSkillsStoreCategoriesCommandOutput/)

</details>
<details>
<summary>
ListSkillsStoreSkillsByCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListSkillsStoreSkillsByCategoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListSkillsStoreSkillsByCategoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListSkillsStoreSkillsByCategoryCommandOutput/)

</details>
<details>
<summary>
ListSmartHomeAppliances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListSmartHomeAppliancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListSmartHomeAppliancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListSmartHomeAppliancesCommandOutput/)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ListTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ListTagsCommandOutput/)

</details>
<details>
<summary>
PutConferencePreference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/PutConferencePreferenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/PutConferencePreferenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/PutConferencePreferenceCommandOutput/)

</details>
<details>
<summary>
PutInvitationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/PutInvitationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/PutInvitationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/PutInvitationConfigurationCommandOutput/)

</details>
<details>
<summary>
PutRoomSkillParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/PutRoomSkillParameterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/PutRoomSkillParameterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/PutRoomSkillParameterCommandOutput/)

</details>
<details>
<summary>
PutSkillAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/PutSkillAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/PutSkillAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/PutSkillAuthorizationCommandOutput/)

</details>
<details>
<summary>
RegisterAVSDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/RegisterAVSDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/RegisterAVSDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/RegisterAVSDeviceCommandOutput/)

</details>
<details>
<summary>
RejectSkill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/RejectSkillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/RejectSkillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/RejectSkillCommandOutput/)

</details>
<details>
<summary>
ResolveRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/ResolveRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ResolveRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/ResolveRoomCommandOutput/)

</details>
<details>
<summary>
RevokeInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/RevokeInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/RevokeInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/RevokeInvitationCommandOutput/)

</details>
<details>
<summary>
SearchAddressBooks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SearchAddressBooksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchAddressBooksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchAddressBooksCommandOutput/)

</details>
<details>
<summary>
SearchContacts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SearchContactsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchContactsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchContactsCommandOutput/)

</details>
<details>
<summary>
SearchDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SearchDevicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchDevicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchDevicesCommandOutput/)

</details>
<details>
<summary>
SearchNetworkProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SearchNetworkProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchNetworkProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchNetworkProfilesCommandOutput/)

</details>
<details>
<summary>
SearchProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SearchProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchProfilesCommandOutput/)

</details>
<details>
<summary>
SearchRooms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SearchRoomsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchRoomsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchRoomsCommandOutput/)

</details>
<details>
<summary>
SearchSkillGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SearchSkillGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchSkillGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchSkillGroupsCommandOutput/)

</details>
<details>
<summary>
SearchUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SearchUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SearchUsersCommandOutput/)

</details>
<details>
<summary>
SendAnnouncement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SendAnnouncementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SendAnnouncementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SendAnnouncementCommandOutput/)

</details>
<details>
<summary>
SendInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/SendInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SendInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/SendInvitationCommandOutput/)

</details>
<details>
<summary>
StartDeviceSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/StartDeviceSyncCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/StartDeviceSyncCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/StartDeviceSyncCommandOutput/)

</details>
<details>
<summary>
StartSmartHomeApplianceDiscovery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/StartSmartHomeApplianceDiscoveryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/StartSmartHomeApplianceDiscoveryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/StartSmartHomeApplianceDiscoveryCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateAddressBookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateAddressBookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateAddressBookCommandOutput/)

</details>
<details>
<summary>
UpdateBusinessReportSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateBusinessReportScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateBusinessReportScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateBusinessReportScheduleCommandOutput/)

</details>
<details>
<summary>
UpdateConferenceProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateConferenceProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateConferenceProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateConferenceProviderCommandOutput/)

</details>
<details>
<summary>
UpdateContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateContactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateContactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateContactCommandOutput/)

</details>
<details>
<summary>
UpdateDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateDeviceCommandOutput/)

</details>
<details>
<summary>
UpdateGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateGatewayCommandOutput/)

</details>
<details>
<summary>
UpdateGatewayGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateGatewayGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateGatewayGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateGatewayGroupCommandOutput/)

</details>
<details>
<summary>
UpdateNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateNetworkProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateNetworkProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateNetworkProfileCommandOutput/)

</details>
<details>
<summary>
UpdateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateProfileCommandOutput/)

</details>
<details>
<summary>
UpdateRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateRoomCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateRoomCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateRoomCommandOutput/)

</details>
<details>
<summary>
UpdateSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/alexa-for-business/command/UpdateSkillGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateSkillGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-alexa-for-business/Interface/UpdateSkillGroupCommandOutput/)

</details>
