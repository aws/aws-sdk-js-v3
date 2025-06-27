<!-- generated file, do not edit directly -->

# @aws-sdk/client-marketplace-reporting

## Description

AWS SDK for JavaScript MarketplaceReporting Client for Node.js, Browser and React Native.

<p>The Amazon Web Services Marketplace <code>GetBuyerDashboard</code> API enables you to get a procurement insights
dashboard programmatically. The API gets the agreement and cost analysis dashboards with
data for all of the Amazon Web Services accounts in your Amazon Web Services Organization. </p>
<p>To use the Amazon Web Services Marketplace Reporting API, you must complete the following prerequisites:</p>
<ul>
<li>
<p>Enable all features for your organization. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features for an organization with Organizations</a>, in the
<i>Organizations User Guide</i>.</p>
</li>
<li>
<p>Call the service as the Organizations management account or an account registered
as a delegated administrator for the procurement insights service.</p>
<p>For more information about management accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tutorials_basic.html">Tutorial:
Creating and configuring an organization</a> and <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs-manage_accounts_management.html">Managing the management account with Organizations</a>, both in the
<i>Organizations User Guide</i>.</p>
<p>For more information about delegated administrators, see <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/management-delegates.html">Using
delegated administrators</a>, in the <i>Amazon Web Services Marketplace Buyer
Guide</i>.</p>
</li>
<li>
<p>Create an IAM policy that enables the
<code>aws-marketplace:GetBuyerDashboard</code> and
<code>organizations:DescribeOrganization</code> permissions. In addition,
the management account requires the
<code>organizations:EnableAWSServiceAccess</code> and
<code>iam:CreateServiceLinkedRole</code> permissions to create. For more
information about creating the policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">Policies and permissions in
Identity and Access Management</a>, in the <i>IAM User Guide</i>.</p>
<note>
<p>Access can be shared only by registering the desired linked account as a
delegated administrator. That requires
<code>organizations:RegisterDelegatedAdministrator</code>
<code>organizations:ListDelegatedAdministrators</code> and
<code>organizations:DeregisterDelegatedAdministrator</code>
permissions.</p>
</note>
</li>
<li>
<p>Use the Amazon Web Services Marketplace console to create the
<code>AWSServiceRoleForProcurementInsightsPolicy</code> service-linked role.
The role enables Amazon Web Services Marketplace procurement visibility integration. The management
account requires an IAM policy with the
<code>organizations:EnableAWSServiceAccess</code> and
<code>iam:CreateServiceLinkedRole</code> permissions to create the
service-linked role and enable the service access. For more information, see
<a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/orgs-access-slr.html">Granting access to
Organizations</a> and <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-service-linked-role-procurement.html">Service-linked role to share procurement data</a> in the
<i>Amazon Web Services Marketplace Buyer Guide</i>.</p>
</li>
<li>
<p>After creating the service-linked role, you must enable trusted access that
grants Amazon Web Services Marketplace permission to access data from your Organizations. For more information,
see <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/orgs-access-slr.html">Granting access to
Organizations</a> in the <i>Amazon Web Services Marketplace Buyer Guide</i>.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-marketplace-reporting
using your favorite package manager:

- `npm install @aws-sdk/client-marketplace-reporting`
- `yarn add @aws-sdk/client-marketplace-reporting`
- `pnpm add @aws-sdk/client-marketplace-reporting`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MarketplaceReportingClient` and
the commands you need, for example `GetBuyerDashboardCommand`:

```js
// ES5 example
const { MarketplaceReportingClient, GetBuyerDashboardCommand } = require("@aws-sdk/client-marketplace-reporting");
```

```ts
// ES6+ example
import { MarketplaceReportingClient, GetBuyerDashboardCommand } from "@aws-sdk/client-marketplace-reporting";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MarketplaceReportingClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new GetBuyerDashboardCommand(params);
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
import * as AWS from "@aws-sdk/client-marketplace-reporting";
const client = new AWS.MarketplaceReporting({ region: "REGION" });

// async/await.
try {
  const data = await client.getBuyerDashboard(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getBuyerDashboard(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.getBuyerDashboard(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-marketplace-reporting` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
GetBuyerDashboard
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/marketplace-reporting/command/GetBuyerDashboardCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-reporting/Interface/GetBuyerDashboardCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-marketplace-reporting/Interface/GetBuyerDashboardCommandOutput/)

</details>
