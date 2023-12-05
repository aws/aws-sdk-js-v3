<!-- generated file, do not edit directly -->

# @aws-sdk/client-securitylake

## Description

AWS SDK for JavaScript SecurityLake Client for Node.js, Browser and React Native.

<p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to
automatically centralize security data from cloud, on-premises, and custom sources into a
data lake that's stored in your Amazon Web Services account. Amazon Web Services Organizations
is an account management service that lets you consolidate multiple Amazon Web Services
accounts into an organization that you create and centrally manage. With Organizations, you
can create member accounts and invite existing accounts to join your organization.
Security Lake helps you analyze security data for a more complete understanding of your
security posture across the entire organization. It can also help you improve the
protection of your workloads, applications, and data.</p>
<p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you
retain ownership over your data.</p>
<p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of
actions taken by a user, role, or an Amazon Web Services service. In Security Lake, CloudTrail captures API calls for Security Lake as events. The calls captured include calls
from the Security Lake console and code calls to the Security Lake API operations. If you create a
trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Security Lake. If you don't configure a trail, you can still
view the most recent events in the CloudTrail console in Event history. Using the
information collected by CloudTrail you can determine the request that was made to
Security Lake, the IP address from which the request was made, who made the request, when it
was made, and additional details. To learn more about Security Lake information in CloudTrail, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/securitylake-cloudtrail.html">Amazon Security Lake User Guide</a>.</p>
<p>Security Lake automates the collection of security-related log and event data from
integrated Amazon Web Services and third-party services. It also helps you manage
the lifecycle of data with customizable retention and replication settings. Security Lake
converts ingested data into Apache Parquet format and a standard open-source schema called
the Open Cybersecurity Schema Framework (OCSF).</p>
<p>Other Amazon Web Services and third-party services can subscribe to the data that's stored in Security Lake for
incident response and security data analytics.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-securitylake
using your favorite package manager:

- `npm install @aws-sdk/client-securitylake`
- `yarn add @aws-sdk/client-securitylake`
- `pnpm add @aws-sdk/client-securitylake`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SecurityLakeClient` and
the commands you need, for example `ListDataLakesCommand`:

```js
// ES5 example
const { SecurityLakeClient, ListDataLakesCommand } = require("@aws-sdk/client-securitylake");
```

```ts
// ES6+ example
import { SecurityLakeClient, ListDataLakesCommand } from "@aws-sdk/client-securitylake";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SecurityLakeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListDataLakesCommand(params);
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
import * as AWS from "@aws-sdk/client-securitylake";
const client = new AWS.SecurityLake({ region: "REGION" });

// async/await.
try {
  const data = await client.listDataLakes(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDataLakes(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDataLakes(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-securitylake` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAwsLogSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/createawslogsourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createawslogsourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createawslogsourcecommandoutput.html)

</details>
<details>
<summary>
CreateCustomLogSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/createcustomlogsourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createcustomlogsourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createcustomlogsourcecommandoutput.html)

</details>
<details>
<summary>
CreateDataLake
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/createdatalakecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createdatalakecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createdatalakecommandoutput.html)

</details>
<details>
<summary>
CreateDataLakeExceptionSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/createdatalakeexceptionsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createdatalakeexceptionsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createdatalakeexceptionsubscriptioncommandoutput.html)

</details>
<details>
<summary>
CreateDataLakeOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/createdatalakeorganizationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createdatalakeorganizationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createdatalakeorganizationconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateSubscriber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/createsubscribercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createsubscribercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createsubscribercommandoutput.html)

</details>
<details>
<summary>
CreateSubscriberNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/createsubscribernotificationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createsubscribernotificationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/createsubscribernotificationcommandoutput.html)

</details>
<details>
<summary>
DeleteAwsLogSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/deleteawslogsourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deleteawslogsourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deleteawslogsourcecommandoutput.html)

</details>
<details>
<summary>
DeleteCustomLogSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/deletecustomlogsourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletecustomlogsourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletecustomlogsourcecommandoutput.html)

</details>
<details>
<summary>
DeleteDataLake
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/deletedatalakecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletedatalakecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletedatalakecommandoutput.html)

</details>
<details>
<summary>
DeleteDataLakeExceptionSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/deletedatalakeexceptionsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletedatalakeexceptionsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletedatalakeexceptionsubscriptioncommandoutput.html)

</details>
<details>
<summary>
DeleteDataLakeOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/deletedatalakeorganizationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletedatalakeorganizationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletedatalakeorganizationconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteSubscriber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/deletesubscribercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletesubscribercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletesubscribercommandoutput.html)

</details>
<details>
<summary>
DeleteSubscriberNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/deletesubscribernotificationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletesubscribernotificationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deletesubscribernotificationcommandoutput.html)

</details>
<details>
<summary>
DeregisterDataLakeDelegatedAdministrator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/deregisterdatalakedelegatedadministratorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deregisterdatalakedelegatedadministratorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/deregisterdatalakedelegatedadministratorcommandoutput.html)

</details>
<details>
<summary>
GetDataLakeExceptionSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/getdatalakeexceptionsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/getdatalakeexceptionsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/getdatalakeexceptionsubscriptioncommandoutput.html)

</details>
<details>
<summary>
GetDataLakeOrganizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/getdatalakeorganizationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/getdatalakeorganizationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/getdatalakeorganizationconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetDataLakeSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/getdatalakesourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/getdatalakesourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/getdatalakesourcescommandoutput.html)

</details>
<details>
<summary>
GetSubscriber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/getsubscribercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/getsubscribercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/getsubscribercommandoutput.html)

</details>
<details>
<summary>
ListDataLakeExceptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/listdatalakeexceptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listdatalakeexceptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listdatalakeexceptionscommandoutput.html)

</details>
<details>
<summary>
ListDataLakes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/listdatalakescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listdatalakescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listdatalakescommandoutput.html)

</details>
<details>
<summary>
ListLogSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/listlogsourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listlogsourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listlogsourcescommandoutput.html)

</details>
<details>
<summary>
ListSubscribers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/listsubscriberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listsubscriberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listsubscriberscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
RegisterDataLakeDelegatedAdministrator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/registerdatalakedelegatedadministratorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/registerdatalakedelegatedadministratorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/registerdatalakedelegatedadministratorcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDataLake
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/updatedatalakecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/updatedatalakecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/updatedatalakecommandoutput.html)

</details>
<details>
<summary>
UpdateDataLakeExceptionSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/updatedatalakeexceptionsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/updatedatalakeexceptionsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/updatedatalakeexceptionsubscriptioncommandoutput.html)

</details>
<details>
<summary>
UpdateSubscriber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/updatesubscribercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/updatesubscribercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/updatesubscribercommandoutput.html)

</details>
<details>
<summary>
UpdateSubscriberNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/classes/updatesubscribernotificationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/updatesubscribernotificationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-securitylake/interfaces/updatesubscribernotificationcommandoutput.html)

</details>
