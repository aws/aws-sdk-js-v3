<!-- generated file, do not edit directly -->

# @aws-sdk/client-nimble

## Description

AWS SDK for JavaScript Nimble Client for Node.js, Browser and React Native.

<p>Welcome to the Amazon Nimble Studio API reference. This API reference provides
methods, schema, resources, parameters, and more to help you get the most out of Nimble
Studio.</p>
<p>Nimble Studio is a virtual studio that empowers visual effects, animation, and
interactive content teams to create content securely within a scalable, private cloud
service.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-nimble
using your favorite package manager:

- `npm install @aws-sdk/client-nimble`
- `yarn add @aws-sdk/client-nimble`
- `pnpm add @aws-sdk/client-nimble`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `NimbleClient` and
the commands you need, for example `AcceptEulasCommand`:

```js
// ES5 example
const { NimbleClient, AcceptEulasCommand } = require("@aws-sdk/client-nimble");
```

```ts
// ES6+ example
import { NimbleClient, AcceptEulasCommand } from "@aws-sdk/client-nimble";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new NimbleClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptEulasCommand(params);
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
import * as AWS from "@aws-sdk/client-nimble";
const client = new AWS.Nimble({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptEulas(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptEulas(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptEulas(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-nimble` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptEulas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/accepteulascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/accepteulascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/accepteulascommandoutput.html)

</details>
<details>
<summary>
CreateLaunchProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/createlaunchprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createlaunchprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createlaunchprofilecommandoutput.html)

</details>
<details>
<summary>
CreateStreamingImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/createstreamingimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstreamingimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstreamingimagecommandoutput.html)

</details>
<details>
<summary>
CreateStreamingSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/createstreamingsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstreamingsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstreamingsessioncommandoutput.html)

</details>
<details>
<summary>
CreateStreamingSessionStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/createstreamingsessionstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstreamingsessionstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstreamingsessionstreamcommandoutput.html)

</details>
<details>
<summary>
CreateStudio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/createstudiocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstudiocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstudiocommandoutput.html)

</details>
<details>
<summary>
CreateStudioComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/createstudiocomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstudiocomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/createstudiocomponentcommandoutput.html)

</details>
<details>
<summary>
DeleteLaunchProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/deletelaunchprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletelaunchprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletelaunchprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteLaunchProfileMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/deletelaunchprofilemembercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletelaunchprofilemembercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletelaunchprofilemembercommandoutput.html)

</details>
<details>
<summary>
DeleteStreamingImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/deletestreamingimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestreamingimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestreamingimagecommandoutput.html)

</details>
<details>
<summary>
DeleteStreamingSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/deletestreamingsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestreamingsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestreamingsessioncommandoutput.html)

</details>
<details>
<summary>
DeleteStudio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/deletestudiocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestudiocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestudiocommandoutput.html)

</details>
<details>
<summary>
DeleteStudioComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/deletestudiocomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestudiocomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestudiocomponentcommandoutput.html)

</details>
<details>
<summary>
DeleteStudioMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/deletestudiomembercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestudiomembercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/deletestudiomembercommandoutput.html)

</details>
<details>
<summary>
GetEula
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/geteulacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/geteulacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/geteulacommandoutput.html)

</details>
<details>
<summary>
GetLaunchProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getlaunchprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getlaunchprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getlaunchprofilecommandoutput.html)

</details>
<details>
<summary>
GetLaunchProfileDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getlaunchprofiledetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getlaunchprofiledetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getlaunchprofiledetailscommandoutput.html)

</details>
<details>
<summary>
GetLaunchProfileInitialization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getlaunchprofileinitializationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getlaunchprofileinitializationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getlaunchprofileinitializationcommandoutput.html)

</details>
<details>
<summary>
GetLaunchProfileMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getlaunchprofilemembercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getlaunchprofilemembercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getlaunchprofilemembercommandoutput.html)

</details>
<details>
<summary>
GetStreamingImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getstreamingimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstreamingimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstreamingimagecommandoutput.html)

</details>
<details>
<summary>
GetStreamingSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getstreamingsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstreamingsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstreamingsessioncommandoutput.html)

</details>
<details>
<summary>
GetStreamingSessionBackup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getstreamingsessionbackupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstreamingsessionbackupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstreamingsessionbackupcommandoutput.html)

</details>
<details>
<summary>
GetStreamingSessionStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getstreamingsessionstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstreamingsessionstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstreamingsessionstreamcommandoutput.html)

</details>
<details>
<summary>
GetStudio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getstudiocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstudiocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstudiocommandoutput.html)

</details>
<details>
<summary>
GetStudioComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getstudiocomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstudiocomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstudiocomponentcommandoutput.html)

</details>
<details>
<summary>
GetStudioMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/getstudiomembercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstudiomembercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/getstudiomembercommandoutput.html)

</details>
<details>
<summary>
ListEulaAcceptances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/listeulaacceptancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listeulaacceptancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listeulaacceptancescommandoutput.html)

</details>
<details>
<summary>
ListEulas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/listeulascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listeulascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listeulascommandoutput.html)

</details>
<details>
<summary>
ListLaunchProfileMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/listlaunchprofilememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listlaunchprofilememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listlaunchprofilememberscommandoutput.html)

</details>
<details>
<summary>
ListLaunchProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/listlaunchprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listlaunchprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listlaunchprofilescommandoutput.html)

</details>
<details>
<summary>
ListStreamingImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/liststreamingimagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststreamingimagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststreamingimagescommandoutput.html)

</details>
<details>
<summary>
ListStreamingSessionBackups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/liststreamingsessionbackupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststreamingsessionbackupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststreamingsessionbackupscommandoutput.html)

</details>
<details>
<summary>
ListStreamingSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/liststreamingsessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststreamingsessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststreamingsessionscommandoutput.html)

</details>
<details>
<summary>
ListStudioComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/liststudiocomponentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststudiocomponentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststudiocomponentscommandoutput.html)

</details>
<details>
<summary>
ListStudioMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/liststudiomemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststudiomemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststudiomemberscommandoutput.html)

</details>
<details>
<summary>
ListStudios
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/liststudioscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststudioscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/liststudioscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutLaunchProfileMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/putlaunchprofilememberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/putlaunchprofilememberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/putlaunchprofilememberscommandoutput.html)

</details>
<details>
<summary>
PutStudioMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/putstudiomemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/putstudiomemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/putstudiomemberscommandoutput.html)

</details>
<details>
<summary>
StartStreamingSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/startstreamingsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/startstreamingsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/startstreamingsessioncommandoutput.html)

</details>
<details>
<summary>
StartStudioSSOConfigurationRepair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/startstudiossoconfigurationrepaircommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/startstudiossoconfigurationrepaircommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/startstudiossoconfigurationrepaircommandoutput.html)

</details>
<details>
<summary>
StopStreamingSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/stopstreamingsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/stopstreamingsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/stopstreamingsessioncommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateLaunchProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/updatelaunchprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatelaunchprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatelaunchprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateLaunchProfileMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/updatelaunchprofilemembercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatelaunchprofilemembercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatelaunchprofilemembercommandoutput.html)

</details>
<details>
<summary>
UpdateStreamingImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/updatestreamingimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatestreamingimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatestreamingimagecommandoutput.html)

</details>
<details>
<summary>
UpdateStudio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/updatestudiocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatestudiocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatestudiocommandoutput.html)

</details>
<details>
<summary>
UpdateStudioComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/classes/updatestudiocomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatestudiocomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-nimble/interfaces/updatestudiocomponentcommandoutput.html)

</details>
