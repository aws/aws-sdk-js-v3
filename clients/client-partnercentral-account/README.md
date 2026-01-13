<!-- generated file, do not edit directly -->

# @aws-sdk/client-partnercentral-account

## Description

AWS SDK for JavaScript PartnerCentralAccount Client for Node.js, Browser and React Native.

<p>AWS Partner Central Account service provides APIs for managing partner accounts, connections, and profiles within the AWS Partner Network. This service enables partners to create and manage their partner profiles, establish connections with other partners, and maintain their account information.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-partnercentral-account
using your favorite package manager:
- `npm install @aws-sdk/client-partnercentral-account`
- `yarn add @aws-sdk/client-partnercentral-account`
- `pnpm add @aws-sdk/client-partnercentral-account`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PartnerCentralAccountClient` and
the commands you need, for example `ListConnectionsCommand`:

```js
// ES5 example
const { PartnerCentralAccountClient, ListConnectionsCommand } = require("@aws-sdk/client-partnercentral-account");
```

```ts
// ES6+ example
import { PartnerCentralAccountClient, ListConnectionsCommand } from "@aws-sdk/client-partnercentral-account";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PartnerCentralAccountClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListConnectionsCommand(params);
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
import * as AWS from "@aws-sdk/client-partnercentral-account";
const client = new AWS.PartnerCentralAccount({ region: "REGION" });

// async/await.
try {
  const data = await client.listConnections(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listConnections(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listConnections(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-partnercentral-account` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptConnectionInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/AcceptConnectionInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/AcceptConnectionInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/AcceptConnectionInvitationCommandOutput/)
</details>
<details>
<summary>
AssociateAwsTrainingCertificationEmailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/AssociateAwsTrainingCertificationEmailDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/AssociateAwsTrainingCertificationEmailDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/AssociateAwsTrainingCertificationEmailDomainCommandOutput/)
</details>
<details>
<summary>
CancelConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/CancelConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CancelConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CancelConnectionCommandOutput/)
</details>
<details>
<summary>
CancelConnectionInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/CancelConnectionInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CancelConnectionInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CancelConnectionInvitationCommandOutput/)
</details>
<details>
<summary>
CancelProfileUpdateTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/CancelProfileUpdateTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CancelProfileUpdateTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CancelProfileUpdateTaskCommandOutput/)
</details>
<details>
<summary>
CreateConnectionInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/CreateConnectionInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CreateConnectionInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CreateConnectionInvitationCommandOutput/)
</details>
<details>
<summary>
CreatePartner
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/CreatePartnerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CreatePartnerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/CreatePartnerCommandOutput/)
</details>
<details>
<summary>
DisassociateAwsTrainingCertificationEmailDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/DisassociateAwsTrainingCertificationEmailDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/DisassociateAwsTrainingCertificationEmailDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/DisassociateAwsTrainingCertificationEmailDomainCommandOutput/)
</details>
<details>
<summary>
GetAllianceLeadContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/GetAllianceLeadContactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetAllianceLeadContactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetAllianceLeadContactCommandOutput/)
</details>
<details>
<summary>
GetConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/GetConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetConnectionCommandOutput/)
</details>
<details>
<summary>
GetConnectionInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/GetConnectionInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetConnectionInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetConnectionInvitationCommandOutput/)
</details>
<details>
<summary>
GetConnectionPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/GetConnectionPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetConnectionPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetConnectionPreferencesCommandOutput/)
</details>
<details>
<summary>
GetPartner
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/GetPartnerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetPartnerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetPartnerCommandOutput/)
</details>
<details>
<summary>
GetProfileUpdateTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/GetProfileUpdateTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetProfileUpdateTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetProfileUpdateTaskCommandOutput/)
</details>
<details>
<summary>
GetProfileVisibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/GetProfileVisibilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetProfileVisibilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetProfileVisibilityCommandOutput/)
</details>
<details>
<summary>
GetVerification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/GetVerificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetVerificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/GetVerificationCommandOutput/)
</details>
<details>
<summary>
ListConnectionInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/ListConnectionInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/ListConnectionInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/ListConnectionInvitationsCommandOutput/)
</details>
<details>
<summary>
ListConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/ListConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/ListConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/ListConnectionsCommandOutput/)
</details>
<details>
<summary>
ListPartners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/ListPartnersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/ListPartnersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/ListPartnersCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PutAllianceLeadContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/PutAllianceLeadContactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/PutAllianceLeadContactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/PutAllianceLeadContactCommandOutput/)
</details>
<details>
<summary>
PutProfileVisibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/PutProfileVisibilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/PutProfileVisibilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/PutProfileVisibilityCommandOutput/)
</details>
<details>
<summary>
RejectConnectionInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/RejectConnectionInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/RejectConnectionInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/RejectConnectionInvitationCommandOutput/)
</details>
<details>
<summary>
SendEmailVerificationCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/SendEmailVerificationCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/SendEmailVerificationCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/SendEmailVerificationCodeCommandOutput/)
</details>
<details>
<summary>
StartProfileUpdateTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/StartProfileUpdateTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/StartProfileUpdateTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/StartProfileUpdateTaskCommandOutput/)
</details>
<details>
<summary>
StartVerification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/StartVerificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/StartVerificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/StartVerificationCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateConnectionPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-account/command/UpdateConnectionPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/UpdateConnectionPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-account/Interface/UpdateConnectionPreferencesCommandOutput/)
</details>
