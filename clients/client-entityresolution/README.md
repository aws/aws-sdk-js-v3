<!-- generated file, do not edit directly -->

# @aws-sdk/client-entityresolution

## Description

AWS SDK for JavaScript EntityResolution Client for Node.js, Browser and React Native.

<p>Welcome to the <i>AWS Entity Resolution API Reference</i>.</p>
<p>AWS Entity Resolution is an AWS service that provides pre-configured entity resolution capabilities
that enable developers and analysts at advertising and marketing companies to build an accurate and
complete view of their consumers.</p>
<p>
With AWS Entity Resolution, you have the ability to match source records containing consumer identifiers,
such as name, email address, and phone number. This holds true even when these records have incomplete or
conflicting identifiers. For example, AWS Entity Resolution can effectively match a source record from a
customer relationship management (CRM) system, which includes account information like first name, last name,
postal address, phone number, and email address, with a source record from a marketing system containing
campaign information, such as username and email address.</p>
<p>To learn more about AWS Entity Resolution concepts, procedures, and best practices, see the
<a href="https://docs.aws.amazon.com/entityresolution/latest/userguide/what-is-service.html">AWS Entity Resolution
User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-entityresolution
using your favorite package manager:

- `npm install @aws-sdk/client-entityresolution`
- `yarn add @aws-sdk/client-entityresolution`
- `pnpm add @aws-sdk/client-entityresolution`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `EntityResolutionClient` and
the commands you need, for example `CreateMatchingWorkflowCommand`:

```js
// ES5 example
const { EntityResolutionClient, CreateMatchingWorkflowCommand } = require("@aws-sdk/client-entityresolution");
```

```ts
// ES6+ example
import { EntityResolutionClient, CreateMatchingWorkflowCommand } from "@aws-sdk/client-entityresolution";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new EntityResolutionClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateMatchingWorkflowCommand(params);
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
import * as AWS from "@aws-sdk/client-entityresolution";
const client = new AWS.EntityResolution({ region: "REGION" });

// async/await.
try {
  const data = await client.createMatchingWorkflow(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createMatchingWorkflow(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createMatchingWorkflow(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-entityresolution` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateMatchingWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/creatematchingworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/creatematchingworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/creatematchingworkflowcommandoutput.html)

</details>
<details>
<summary>
CreateSchemaMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/createschemamappingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/createschemamappingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/createschemamappingcommandoutput.html)

</details>
<details>
<summary>
DeleteMatchingWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/deletematchingworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/deletematchingworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/deletematchingworkflowcommandoutput.html)

</details>
<details>
<summary>
DeleteSchemaMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/deleteschemamappingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/deleteschemamappingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/deleteschemamappingcommandoutput.html)

</details>
<details>
<summary>
GetMatchId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/getmatchidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/getmatchidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/getmatchidcommandoutput.html)

</details>
<details>
<summary>
GetMatchingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/getmatchingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/getmatchingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/getmatchingjobcommandoutput.html)

</details>
<details>
<summary>
GetMatchingWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/getmatchingworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/getmatchingworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/getmatchingworkflowcommandoutput.html)

</details>
<details>
<summary>
GetSchemaMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/getschemamappingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/getschemamappingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/getschemamappingcommandoutput.html)

</details>
<details>
<summary>
ListMatchingJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/listmatchingjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/listmatchingjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/listmatchingjobscommandoutput.html)

</details>
<details>
<summary>
ListMatchingWorkflows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/listmatchingworkflowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/listmatchingworkflowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/listmatchingworkflowscommandoutput.html)

</details>
<details>
<summary>
ListSchemaMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/listschemamappingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/listschemamappingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/listschemamappingscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
StartMatchingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/startmatchingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/startmatchingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/startmatchingjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateMatchingWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/classes/updatematchingworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/updatematchingworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-entityresolution/interfaces/updatematchingworkflowcommandoutput.html)

</details>
