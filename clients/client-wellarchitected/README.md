<!-- generated file, do not edit directly -->

# @aws-sdk/client-wellarchitected

## Description

AWS SDK for JavaScript WellArchitected Client for Node.js, Browser and React Native.

<fullname>Well-Architected Tool</fullname>

<p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the
<a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the
<a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information
about the Well-Architected Tool, see the
<a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-wellarchitected
using your favorite package manager:

- `npm install @aws-sdk/client-wellarchitected`
- `yarn add @aws-sdk/client-wellarchitected`
- `pnpm add @aws-sdk/client-wellarchitected`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WellArchitectedClient` and
the commands you need, for example `AssociateLensesCommand`:

```js
// ES5 example
const { WellArchitectedClient, AssociateLensesCommand } = require("@aws-sdk/client-wellarchitected");
```

```ts
// ES6+ example
import { WellArchitectedClient, AssociateLensesCommand } from "@aws-sdk/client-wellarchitected";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WellArchitectedClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateLensesCommand(params);
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
import * as AWS from "@aws-sdk/client-wellarchitected";
const client = new AWS.WellArchitected({ region: "REGION" });

// async/await.
try {
  const data = await client.associateLenses(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateLenses(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateLenses(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-wellarchitected` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateLenses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/associatelensescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/associatelensescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/associatelensescommandoutput.html)

</details>
<details>
<summary>
AssociateProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/associateprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/associateprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/associateprofilescommandoutput.html)

</details>
<details>
<summary>
CreateLensShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/createlenssharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createlenssharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createlenssharecommandoutput.html)

</details>
<details>
<summary>
CreateLensVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/createlensversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createlensversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createlensversioncommandoutput.html)

</details>
<details>
<summary>
CreateMilestone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/createmilestonecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createmilestonecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createmilestonecommandoutput.html)

</details>
<details>
<summary>
CreateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/createprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createprofilecommandoutput.html)

</details>
<details>
<summary>
CreateProfileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/createprofilesharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createprofilesharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createprofilesharecommandoutput.html)

</details>
<details>
<summary>
CreateWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/createworkloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createworkloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createworkloadcommandoutput.html)

</details>
<details>
<summary>
CreateWorkloadShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/createworkloadsharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createworkloadsharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/createworkloadsharecommandoutput.html)

</details>
<details>
<summary>
DeleteLens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/deletelenscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deletelenscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deletelenscommandoutput.html)

</details>
<details>
<summary>
DeleteLensShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/deletelenssharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deletelenssharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deletelenssharecommandoutput.html)

</details>
<details>
<summary>
DeleteProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/deleteprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deleteprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deleteprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteProfileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/deleteprofilesharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deleteprofilesharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deleteprofilesharecommandoutput.html)

</details>
<details>
<summary>
DeleteWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/deleteworkloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deleteworkloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deleteworkloadcommandoutput.html)

</details>
<details>
<summary>
DeleteWorkloadShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/deleteworkloadsharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deleteworkloadsharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/deleteworkloadsharecommandoutput.html)

</details>
<details>
<summary>
DisassociateLenses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/disassociatelensescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/disassociatelensescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/disassociatelensescommandoutput.html)

</details>
<details>
<summary>
DisassociateProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/disassociateprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/disassociateprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/disassociateprofilescommandoutput.html)

</details>
<details>
<summary>
ExportLens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/exportlenscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/exportlenscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/exportlenscommandoutput.html)

</details>
<details>
<summary>
GetAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getanswercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getanswercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getanswercommandoutput.html)

</details>
<details>
<summary>
GetConsolidatedReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getconsolidatedreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getconsolidatedreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getconsolidatedreportcommandoutput.html)

</details>
<details>
<summary>
GetLens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getlenscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getlenscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getlenscommandoutput.html)

</details>
<details>
<summary>
GetLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getlensreviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getlensreviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getlensreviewcommandoutput.html)

</details>
<details>
<summary>
GetLensReviewReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getlensreviewreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getlensreviewreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getlensreviewreportcommandoutput.html)

</details>
<details>
<summary>
GetLensVersionDifference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getlensversiondifferencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getlensversiondifferencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getlensversiondifferencecommandoutput.html)

</details>
<details>
<summary>
GetMilestone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getmilestonecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getmilestonecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getmilestonecommandoutput.html)

</details>
<details>
<summary>
GetProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getprofilecommandoutput.html)

</details>
<details>
<summary>
GetProfileTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getprofiletemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getprofiletemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getprofiletemplatecommandoutput.html)

</details>
<details>
<summary>
GetWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/getworkloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getworkloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/getworkloadcommandoutput.html)

</details>
<details>
<summary>
ImportLens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/importlenscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/importlenscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/importlenscommandoutput.html)

</details>
<details>
<summary>
ListAnswers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listanswerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listanswerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listanswerscommandoutput.html)

</details>
<details>
<summary>
ListCheckDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listcheckdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listcheckdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listcheckdetailscommandoutput.html)

</details>
<details>
<summary>
ListCheckSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listchecksummariescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listchecksummariescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listchecksummariescommandoutput.html)

</details>
<details>
<summary>
ListLenses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listlensescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listlensescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listlensescommandoutput.html)

</details>
<details>
<summary>
ListLensReviewImprovements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listlensreviewimprovementscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listlensreviewimprovementscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listlensreviewimprovementscommandoutput.html)

</details>
<details>
<summary>
ListLensReviews
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listlensreviewscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listlensreviewscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listlensreviewscommandoutput.html)

</details>
<details>
<summary>
ListLensShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listlenssharescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listlenssharescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listlenssharescommandoutput.html)

</details>
<details>
<summary>
ListMilestones
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listmilestonescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listmilestonescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listmilestonescommandoutput.html)

</details>
<details>
<summary>
ListNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listnotificationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listnotificationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listnotificationscommandoutput.html)

</details>
<details>
<summary>
ListProfileNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listprofilenotificationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listprofilenotificationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listprofilenotificationscommandoutput.html)

</details>
<details>
<summary>
ListProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listprofilescommandoutput.html)

</details>
<details>
<summary>
ListProfileShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listprofilesharescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listprofilesharescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listprofilesharescommandoutput.html)

</details>
<details>
<summary>
ListShareInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listshareinvitationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listshareinvitationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listshareinvitationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWorkloads
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listworkloadscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listworkloadscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listworkloadscommandoutput.html)

</details>
<details>
<summary>
ListWorkloadShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/listworkloadsharescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listworkloadsharescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/listworkloadsharescommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/updateanswercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateanswercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateanswercommandoutput.html)

</details>
<details>
<summary>
UpdateGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/updateglobalsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateglobalsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateglobalsettingscommandoutput.html)

</details>
<details>
<summary>
UpdateLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/updatelensreviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updatelensreviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updatelensreviewcommandoutput.html)

</details>
<details>
<summary>
UpdateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/updateprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateShareInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/updateshareinvitationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateshareinvitationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateshareinvitationcommandoutput.html)

</details>
<details>
<summary>
UpdateWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/updateworkloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateworkloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateworkloadcommandoutput.html)

</details>
<details>
<summary>
UpdateWorkloadShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/updateworkloadsharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateworkloadsharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/updateworkloadsharecommandoutput.html)

</details>
<details>
<summary>
UpgradeLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/upgradelensreviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/upgradelensreviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/upgradelensreviewcommandoutput.html)

</details>
<details>
<summary>
UpgradeProfileVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/classes/upgradeprofileversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/upgradeprofileversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-wellarchitected/interfaces/upgradeprofileversioncommandoutput.html)

</details>
