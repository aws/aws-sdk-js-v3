<!-- generated file, do not edit directly -->

# @aws-sdk/client-endusermessaging

## Description

AWS SDK for JavaScript EndUserMessaging Client for Node.js, Browser and React Native.

<p>AWS End User Messaging provides a set of APIs to manage brand profiles, synchronize brand profile data with SMS and Rich Communication Services (RCS) registrations, and send and validate one-time passcodes across the SMS, voice, and WhatsApp channels.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-endusermessaging`
- `yarn add @aws-sdk/client-endusermessaging`
- `pnpm add @aws-sdk/client-endusermessaging`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `EndUserMessagingClient` and
the commands you need, for example `ListJobsCommand`:

```js
// ES5 example
const { EndUserMessagingClient, ListJobsCommand } = require("@aws-sdk/client-endusermessaging");
```

```ts
// ES6+ example
import { EndUserMessagingClient, ListJobsCommand } from "@aws-sdk/client-endusermessaging";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new EndUserMessagingClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListJobsCommand(params);
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

`EndUserMessaging` extends `EndUserMessagingClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`EndUserMessagingClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { EndUserMessaging } from "@aws-sdk/client-endusermessaging";

const client = new EndUserMessaging({ region: "REGION" });

// async/await.
try {
  const data = await client.listJobs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listJobs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listJobs(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-endusermessaging` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateBrandProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/CreateBrandProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateBrandProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateBrandProfileCommandOutput/)
</details>
<details>
<summary>
CreateBrandProfileAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/CreateBrandProfileAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateBrandProfileAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateBrandProfileAttributesCommandOutput/)
</details>
<details>
<summary>
CreateBrandProfileFromRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/CreateBrandProfileFromRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateBrandProfileFromRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateBrandProfileFromRegistrationCommandOutput/)
</details>
<details>
<summary>
CreateNotifyCodeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/CreateNotifyCodeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateNotifyCodeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateNotifyCodeConfigurationCommandOutput/)
</details>
<details>
<summary>
CreateRegistrationsFromBrandProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/CreateRegistrationsFromBrandProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateRegistrationsFromBrandProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/CreateRegistrationsFromBrandProfileCommandOutput/)
</details>
<details>
<summary>
DeleteBrandProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/DeleteBrandProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/DeleteBrandProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/DeleteBrandProfileCommandOutput/)
</details>
<details>
<summary>
DeleteBrandProfileAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/DeleteBrandProfileAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/DeleteBrandProfileAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/DeleteBrandProfileAttributeCommandOutput/)
</details>
<details>
<summary>
DeleteNotifyCodeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/DeleteNotifyCodeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/DeleteNotifyCodeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/DeleteNotifyCodeConfigurationCommandOutput/)
</details>
<details>
<summary>
GetBrandProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/GetBrandProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/GetBrandProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/GetBrandProfileCommandOutput/)
</details>
<details>
<summary>
GetBrandProfileAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/GetBrandProfileAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/GetBrandProfileAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/GetBrandProfileAttributeCommandOutput/)
</details>
<details>
<summary>
GetJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/GetJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/GetJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/GetJobCommandOutput/)
</details>
<details>
<summary>
GetNotifyCodeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/GetNotifyCodeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/GetNotifyCodeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/GetNotifyCodeConfigurationCommandOutput/)
</details>
<details>
<summary>
ListBrandProfileAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/ListBrandProfileAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListBrandProfileAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListBrandProfileAttributesCommandOutput/)
</details>
<details>
<summary>
ListBrandProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/ListBrandProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListBrandProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListBrandProfilesCommandOutput/)
</details>
<details>
<summary>
ListJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/ListJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListJobsCommandOutput/)
</details>
<details>
<summary>
ListNotifyCodeConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/ListNotifyCodeConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListNotifyCodeConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListNotifyCodeConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListRegistrationsFromBrandProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/ListRegistrationsFromBrandProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListRegistrationsFromBrandProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListRegistrationsFromBrandProfileCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
SendNotifyCodeVerification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/SendNotifyCodeVerificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/SendNotifyCodeVerificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/SendNotifyCodeVerificationCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateBrandProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/UpdateBrandProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateBrandProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateBrandProfileCommandOutput/)
</details>
<details>
<summary>
UpdateBrandProfileAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/UpdateBrandProfileAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateBrandProfileAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateBrandProfileAttributeCommandOutput/)
</details>
<details>
<summary>
UpdateBrandProfileFromRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/UpdateBrandProfileFromRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateBrandProfileFromRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateBrandProfileFromRegistrationCommandOutput/)
</details>
<details>
<summary>
UpdateNotifyCodeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/UpdateNotifyCodeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateNotifyCodeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateNotifyCodeConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateRegistrationsFromBrandProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/UpdateRegistrationsFromBrandProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateRegistrationsFromBrandProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/UpdateRegistrationsFromBrandProfileCommandOutput/)
</details>
<details>
<summary>
ValidateNotifyCodeVerification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/endusermessaging/command/ValidateNotifyCodeVerificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ValidateNotifyCodeVerificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-endusermessaging/Interface/ValidateNotifyCodeVerificationCommandOutput/)
</details>
