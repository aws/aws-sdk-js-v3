<!-- generated file, do not edit directly -->

# @aws-sdk/client-health

## Description

AWS SDK for JavaScript Health Client for Node.js, Browser and React Native.

<fullname>Health</fullname>

<p>The Health API provides access to the Health information that appears in the
<a href="https://health.aws.amazon.com/health/home">Health Dashboard</a>. You can use
the API operations to get information about events that might affect your Amazon Web Services and resources.</p>
<p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health API. If you call the Health API from an
Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a
<code>SubscriptionRequiredException</code> error.</p>
<p>For API access, you need an access key ID and a secret access key. Use temporary
credentials instead of long-term access keys when possible. Temporary credentials include
an access key ID, a secret access key, and a security token that indicates when the
credentials expire. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">Best practices for managing
Amazon Web Services access keys</a> in the <i>Amazon Web Services General Reference</i>.</p>
<p>You can use the Health endpoint health.us-east-1.amazonaws.com (HTTPS) to call the
Health API operations. Health supports a multi-Region application architecture
and has two regional endpoints in an active-passive configuration. You can use the high
availability endpoint example to determine which Amazon Web Services Region is active, so that you can
get the latest information from the API. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/health-api.html">Accessing the Health
API</a> in the <i>Health User Guide</i>.</p>
<p>For authentication of requests, Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
Process</a>.</p>
<p>If your Amazon Web Services account is part of Organizations, you can use the Health organizational
view feature. This feature provides a centralized view of Health events across all
accounts in your organization. You can aggregate Health events in real time to
identify accounts in your organization that are affected by an operational event or get
notified of security vulnerabilities. Use the organizational view API operations to enable
this feature and return event information. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
Health events</a> in the <i>Health User Guide</i>.</p>
<note>
<p>When you use the Health API operations to return Health events, see the
following recommendations:</p>
<ul>
<li>
<p>Use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a> parameter to specify whether to return Health
events that are public or account-specific.</p>
</li>
<li>
<p>Use pagination to view all events from the response. For example, if you call
the <code>DescribeEventsForOrganization</code> operation to get all events in your
organization, you might receive several page results. Specify the
<code>nextToken</code> in the next request to return more results.</p>
</li>
</ul>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-health
using your favorite package manager:

- `npm install @aws-sdk/client-health`
- `yarn add @aws-sdk/client-health`
- `pnpm add @aws-sdk/client-health`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `HealthClient` and
the commands you need, for example `DescribeEventsCommand`:

```js
// ES5 example
const { HealthClient, DescribeEventsCommand } = require("@aws-sdk/client-health");
```

```ts
// ES6+ example
import { HealthClient, DescribeEventsCommand } from "@aws-sdk/client-health";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new HealthClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new DescribeEventsCommand(params);
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
import * as AWS from "@aws-sdk/client-health";
const client = new AWS.Health({ region: "REGION" });

// async/await.
try {
  const data = await client.describeEvents(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .describeEvents(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.describeEvents(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-health` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DescribeAffectedAccountsForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeAffectedAccountsForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeAffectedAccountsForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeAffectedAccountsForOrganizationCommandOutput/)

</details>
<details>
<summary>
DescribeAffectedEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeAffectedEntitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeAffectedEntitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeAffectedEntitiesCommandOutput/)

</details>
<details>
<summary>
DescribeAffectedEntitiesForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeAffectedEntitiesForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeAffectedEntitiesForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeAffectedEntitiesForOrganizationCommandOutput/)

</details>
<details>
<summary>
DescribeEntityAggregates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeEntityAggregatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEntityAggregatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEntityAggregatesCommandOutput/)

</details>
<details>
<summary>
DescribeEntityAggregatesForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeEntityAggregatesForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEntityAggregatesForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEntityAggregatesForOrganizationCommandOutput/)

</details>
<details>
<summary>
DescribeEventAggregates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeEventAggregatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventAggregatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventAggregatesCommandOutput/)

</details>
<details>
<summary>
DescribeEventDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeEventDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventDetailsCommandOutput/)

</details>
<details>
<summary>
DescribeEventDetailsForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeEventDetailsForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventDetailsForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventDetailsForOrganizationCommandOutput/)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventsCommandOutput/)

</details>
<details>
<summary>
DescribeEventsForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeEventsForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventsForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventsForOrganizationCommandOutput/)

</details>
<details>
<summary>
DescribeEventTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeEventTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeEventTypesCommandOutput/)

</details>
<details>
<summary>
DescribeHealthServiceStatusForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DescribeHealthServiceStatusForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeHealthServiceStatusForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DescribeHealthServiceStatusForOrganizationCommandOutput/)

</details>
<details>
<summary>
DisableHealthServiceAccessForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/DisableHealthServiceAccessForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DisableHealthServiceAccessForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/DisableHealthServiceAccessForOrganizationCommandOutput/)

</details>
<details>
<summary>
EnableHealthServiceAccessForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/health/command/EnableHealthServiceAccessForOrganizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/EnableHealthServiceAccessForOrganizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-health/Interface/EnableHealthServiceAccessForOrganizationCommandOutput/)

</details>
