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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/approveskillcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/approveskillcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/approveskillcommandoutput.html)

</details>
<details>
<summary>
AssociateContactWithAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/associatecontactwithaddressbookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associatecontactwithaddressbookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associatecontactwithaddressbookcommandoutput.html)

</details>
<details>
<summary>
AssociateDeviceWithNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/associatedevicewithnetworkprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associatedevicewithnetworkprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associatedevicewithnetworkprofilecommandoutput.html)

</details>
<details>
<summary>
AssociateDeviceWithRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/associatedevicewithroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associatedevicewithroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associatedevicewithroomcommandoutput.html)

</details>
<details>
<summary>
AssociateSkillGroupWithRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/associateskillgroupwithroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associateskillgroupwithroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associateskillgroupwithroomcommandoutput.html)

</details>
<details>
<summary>
AssociateSkillWithSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/associateskillwithskillgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associateskillwithskillgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associateskillwithskillgroupcommandoutput.html)

</details>
<details>
<summary>
AssociateSkillWithUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/associateskillwithuserscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associateskillwithuserscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/associateskillwithuserscommandoutput.html)

</details>
<details>
<summary>
CreateAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createaddressbookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createaddressbookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createaddressbookcommandoutput.html)

</details>
<details>
<summary>
CreateBusinessReportSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createbusinessreportschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createbusinessreportschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createbusinessreportschedulecommandoutput.html)

</details>
<details>
<summary>
CreateConferenceProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createconferenceprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createconferenceprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createconferenceprovidercommandoutput.html)

</details>
<details>
<summary>
CreateContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createcontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createcontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createcontactcommandoutput.html)

</details>
<details>
<summary>
CreateGatewayGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/creategatewaygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/creategatewaygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/creategatewaygroupcommandoutput.html)

</details>
<details>
<summary>
CreateNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createnetworkprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createnetworkprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createnetworkprofilecommandoutput.html)

</details>
<details>
<summary>
CreateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createprofilecommandoutput.html)

</details>
<details>
<summary>
CreateRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createroomcommandoutput.html)

</details>
<details>
<summary>
CreateSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createskillgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createskillgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createskillgroupcommandoutput.html)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/createusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/createusercommandoutput.html)

</details>
<details>
<summary>
DeleteAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deleteaddressbookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteaddressbookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteaddressbookcommandoutput.html)

</details>
<details>
<summary>
DeleteBusinessReportSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deletebusinessreportschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletebusinessreportschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletebusinessreportschedulecommandoutput.html)

</details>
<details>
<summary>
DeleteConferenceProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deleteconferenceprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteconferenceprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteconferenceprovidercommandoutput.html)

</details>
<details>
<summary>
DeleteContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deletecontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletecontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletecontactcommandoutput.html)

</details>
<details>
<summary>
DeleteDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deletedevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletedevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletedevicecommandoutput.html)

</details>
<details>
<summary>
DeleteDeviceUsageData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deletedeviceusagedatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletedeviceusagedatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletedeviceusagedatacommandoutput.html)

</details>
<details>
<summary>
DeleteGatewayGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deletegatewaygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletegatewaygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletegatewaygroupcommandoutput.html)

</details>
<details>
<summary>
DeleteNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deletenetworkprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletenetworkprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deletenetworkprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deleteprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deleteroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteroomcommandoutput.html)

</details>
<details>
<summary>
DeleteRoomSkillParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deleteroomskillparametercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteroomskillparametercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteroomskillparametercommandoutput.html)

</details>
<details>
<summary>
DeleteSkillAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deleteskillauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteskillauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteskillauthorizationcommandoutput.html)

</details>
<details>
<summary>
DeleteSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deleteskillgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteskillgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteskillgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/deleteusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/deleteusercommandoutput.html)

</details>
<details>
<summary>
DisassociateContactFromAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/disassociatecontactfromaddressbookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociatecontactfromaddressbookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociatecontactfromaddressbookcommandoutput.html)

</details>
<details>
<summary>
DisassociateDeviceFromRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/disassociatedevicefromroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociatedevicefromroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociatedevicefromroomcommandoutput.html)

</details>
<details>
<summary>
DisassociateSkillFromSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/disassociateskillfromskillgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociateskillfromskillgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociateskillfromskillgroupcommandoutput.html)

</details>
<details>
<summary>
DisassociateSkillFromUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/disassociateskillfromuserscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociateskillfromuserscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociateskillfromuserscommandoutput.html)

</details>
<details>
<summary>
DisassociateSkillGroupFromRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/disassociateskillgroupfromroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociateskillgroupfromroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/disassociateskillgroupfromroomcommandoutput.html)

</details>
<details>
<summary>
ForgetSmartHomeAppliances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/forgetsmarthomeappliancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/forgetsmarthomeappliancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/forgetsmarthomeappliancescommandoutput.html)

</details>
<details>
<summary>
GetAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getaddressbookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getaddressbookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getaddressbookcommandoutput.html)

</details>
<details>
<summary>
GetConferencePreference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getconferencepreferencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getconferencepreferencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getconferencepreferencecommandoutput.html)

</details>
<details>
<summary>
GetConferenceProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getconferenceprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getconferenceprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getconferenceprovidercommandoutput.html)

</details>
<details>
<summary>
GetContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getcontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getcontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getcontactcommandoutput.html)

</details>
<details>
<summary>
GetDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getdevicecommandoutput.html)

</details>
<details>
<summary>
GetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getgatewaycommandoutput.html)

</details>
<details>
<summary>
GetGatewayGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getgatewaygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getgatewaygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getgatewaygroupcommandoutput.html)

</details>
<details>
<summary>
GetInvitationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getinvitationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getinvitationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getinvitationconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getnetworkprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getnetworkprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getnetworkprofilecommandoutput.html)

</details>
<details>
<summary>
GetProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getprofilecommandoutput.html)

</details>
<details>
<summary>
GetRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getroomcommandoutput.html)

</details>
<details>
<summary>
GetRoomSkillParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getroomskillparametercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getroomskillparametercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getroomskillparametercommandoutput.html)

</details>
<details>
<summary>
GetSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/getskillgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getskillgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/getskillgroupcommandoutput.html)

</details>
<details>
<summary>
ListBusinessReportSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listbusinessreportschedulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listbusinessreportschedulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listbusinessreportschedulescommandoutput.html)

</details>
<details>
<summary>
ListConferenceProviders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listconferenceproviderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listconferenceproviderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listconferenceproviderscommandoutput.html)

</details>
<details>
<summary>
ListDeviceEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listdeviceeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listdeviceeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listdeviceeventscommandoutput.html)

</details>
<details>
<summary>
ListGatewayGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listgatewaygroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listgatewaygroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listgatewaygroupscommandoutput.html)

</details>
<details>
<summary>
ListGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listgatewayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listgatewayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listgatewayscommandoutput.html)

</details>
<details>
<summary>
ListSkills
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listskillscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listskillscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listskillscommandoutput.html)

</details>
<details>
<summary>
ListSkillsStoreCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listskillsstorecategoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listskillsstorecategoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listskillsstorecategoriescommandoutput.html)

</details>
<details>
<summary>
ListSkillsStoreSkillsByCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listskillsstoreskillsbycategorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listskillsstoreskillsbycategorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listskillsstoreskillsbycategorycommandoutput.html)

</details>
<details>
<summary>
ListSmartHomeAppliances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listsmarthomeappliancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listsmarthomeappliancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listsmarthomeappliancescommandoutput.html)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/listtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/listtagscommandoutput.html)

</details>
<details>
<summary>
PutConferencePreference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/putconferencepreferencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/putconferencepreferencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/putconferencepreferencecommandoutput.html)

</details>
<details>
<summary>
PutInvitationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/putinvitationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/putinvitationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/putinvitationconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutRoomSkillParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/putroomskillparametercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/putroomskillparametercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/putroomskillparametercommandoutput.html)

</details>
<details>
<summary>
PutSkillAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/putskillauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/putskillauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/putskillauthorizationcommandoutput.html)

</details>
<details>
<summary>
RegisterAVSDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/registeravsdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/registeravsdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/registeravsdevicecommandoutput.html)

</details>
<details>
<summary>
RejectSkill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/rejectskillcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/rejectskillcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/rejectskillcommandoutput.html)

</details>
<details>
<summary>
ResolveRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/resolveroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/resolveroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/resolveroomcommandoutput.html)

</details>
<details>
<summary>
RevokeInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/revokeinvitationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/revokeinvitationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/revokeinvitationcommandoutput.html)

</details>
<details>
<summary>
SearchAddressBooks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/searchaddressbookscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchaddressbookscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchaddressbookscommandoutput.html)

</details>
<details>
<summary>
SearchContacts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/searchcontactscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchcontactscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchcontactscommandoutput.html)

</details>
<details>
<summary>
SearchDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/searchdevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchdevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchdevicescommandoutput.html)

</details>
<details>
<summary>
SearchNetworkProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/searchnetworkprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchnetworkprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchnetworkprofilescommandoutput.html)

</details>
<details>
<summary>
SearchProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/searchprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchprofilescommandoutput.html)

</details>
<details>
<summary>
SearchRooms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/searchroomscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchroomscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchroomscommandoutput.html)

</details>
<details>
<summary>
SearchSkillGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/searchskillgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchskillgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchskillgroupscommandoutput.html)

</details>
<details>
<summary>
SearchUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/searchuserscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchuserscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/searchuserscommandoutput.html)

</details>
<details>
<summary>
SendAnnouncement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/sendannouncementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/sendannouncementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/sendannouncementcommandoutput.html)

</details>
<details>
<summary>
SendInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/sendinvitationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/sendinvitationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/sendinvitationcommandoutput.html)

</details>
<details>
<summary>
StartDeviceSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/startdevicesynccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/startdevicesynccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/startdevicesynccommandoutput.html)

</details>
<details>
<summary>
StartSmartHomeApplianceDiscovery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/startsmarthomeappliancediscoverycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/startsmarthomeappliancediscoverycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/startsmarthomeappliancediscoverycommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAddressBook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updateaddressbookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateaddressbookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateaddressbookcommandoutput.html)

</details>
<details>
<summary>
UpdateBusinessReportSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updatebusinessreportschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updatebusinessreportschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updatebusinessreportschedulecommandoutput.html)

</details>
<details>
<summary>
UpdateConferenceProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updateconferenceprovidercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateconferenceprovidercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateconferenceprovidercommandoutput.html)

</details>
<details>
<summary>
UpdateContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updatecontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updatecontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updatecontactcommandoutput.html)

</details>
<details>
<summary>
UpdateDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updatedevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updatedevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updatedevicecommandoutput.html)

</details>
<details>
<summary>
UpdateGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updategatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updategatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updategatewaycommandoutput.html)

</details>
<details>
<summary>
UpdateGatewayGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updategatewaygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updategatewaygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updategatewaygroupcommandoutput.html)

</details>
<details>
<summary>
UpdateNetworkProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updatenetworkprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updatenetworkprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updatenetworkprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updateprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateRoom
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updateroomcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateroomcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateroomcommandoutput.html)

</details>
<details>
<summary>
UpdateSkillGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/classes/updateskillgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateskillgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-alexa-for-business/interfaces/updateskillgroupcommandoutput.html)

</details>
