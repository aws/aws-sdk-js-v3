<!-- generated file, do not edit directly -->

# @aws-sdk/client-auditmanager

## Description

AWS SDK for JavaScript AuditManager Client for Node.js, Browser and React Native.

<p>Welcome to the Audit Manager API reference. This guide is for developers who
need detailed information about the Audit Manager API operations, data types, and
errors. </p>
<p>Audit Manager is a service that provides automated evidence collection so that you
can continually audit your Amazon Web Services usage. You can use it to assess the
effectiveness of your controls, manage risk, and simplify compliance.</p>
<p>Audit Manager provides prebuilt frameworks that structure and automate assessments
for a given compliance standard. Frameworks include a prebuilt collection of controls with
descriptions and testing procedures. These controls are grouped according to the
requirements of the specified compliance standard or regulation. You can also customize
frameworks and controls to support internal audits with specific requirements. </p>
<p>Use the following links to get started with the Audit Manager API:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An
alphabetical list of all Audit Manager API operations.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Audit Manager data
types.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common
parameters</a>: Parameters that all operations can use.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>:
Client and server errors that all operations can return.</p>
</li>
</ul>
<p>If you're new to Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html">
Audit Manager User Guide</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-auditmanager
using your favorite package manager:
- `npm install @aws-sdk/client-auditmanager`
- `yarn add @aws-sdk/client-auditmanager`
- `pnpm add @aws-sdk/client-auditmanager`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AuditManagerClient` and
the commands you need, for example `ListAssessmentsCommand`:

```js
// ES5 example
const { AuditManagerClient, ListAssessmentsCommand } = require("@aws-sdk/client-auditmanager");
```

```ts
// ES6+ example
import { AuditManagerClient, ListAssessmentsCommand } from "@aws-sdk/client-auditmanager";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AuditManagerClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListAssessmentsCommand(params);
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
import * as AWS from "@aws-sdk/client-auditmanager";
const client = new AWS.AuditManager({ region: "REGION" });

// async/await.
try {
  const data = await client.listAssessments(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAssessments(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAssessments(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-auditmanager` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateAssessmentReportEvidenceFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/AssociateAssessmentReportEvidenceFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/AssociateAssessmentReportEvidenceFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/AssociateAssessmentReportEvidenceFolderCommandOutput/)
</details>
<details>
<summary>
BatchAssociateAssessmentReportEvidence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/BatchAssociateAssessmentReportEvidenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchAssociateAssessmentReportEvidenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchAssociateAssessmentReportEvidenceCommandOutput/)
</details>
<details>
<summary>
BatchCreateDelegationByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/BatchCreateDelegationByAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchCreateDelegationByAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchCreateDelegationByAssessmentCommandOutput/)
</details>
<details>
<summary>
BatchDeleteDelegationByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/BatchDeleteDelegationByAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchDeleteDelegationByAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchDeleteDelegationByAssessmentCommandOutput/)
</details>
<details>
<summary>
BatchDisassociateAssessmentReportEvidence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/BatchDisassociateAssessmentReportEvidenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchDisassociateAssessmentReportEvidenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchDisassociateAssessmentReportEvidenceCommandOutput/)
</details>
<details>
<summary>
BatchImportEvidenceToAssessmentControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/BatchImportEvidenceToAssessmentControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchImportEvidenceToAssessmentControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/BatchImportEvidenceToAssessmentControlCommandOutput/)
</details>
<details>
<summary>
CreateAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/CreateAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/CreateAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/CreateAssessmentCommandOutput/)
</details>
<details>
<summary>
CreateAssessmentFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/CreateAssessmentFrameworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/CreateAssessmentFrameworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/CreateAssessmentFrameworkCommandOutput/)
</details>
<details>
<summary>
CreateAssessmentReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/CreateAssessmentReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/CreateAssessmentReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/CreateAssessmentReportCommandOutput/)
</details>
<details>
<summary>
CreateControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/CreateControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/CreateControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/CreateControlCommandOutput/)
</details>
<details>
<summary>
DeleteAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/DeleteAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteAssessmentCommandOutput/)
</details>
<details>
<summary>
DeleteAssessmentFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/DeleteAssessmentFrameworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteAssessmentFrameworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteAssessmentFrameworkCommandOutput/)
</details>
<details>
<summary>
DeleteAssessmentFrameworkShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/DeleteAssessmentFrameworkShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteAssessmentFrameworkShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteAssessmentFrameworkShareCommandOutput/)
</details>
<details>
<summary>
DeleteAssessmentReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/DeleteAssessmentReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteAssessmentReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteAssessmentReportCommandOutput/)
</details>
<details>
<summary>
DeleteControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/DeleteControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeleteControlCommandOutput/)
</details>
<details>
<summary>
DeregisterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/DeregisterAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeregisterAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeregisterAccountCommandOutput/)
</details>
<details>
<summary>
DeregisterOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/DeregisterOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeregisterOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DeregisterOrganizationAdminAccountCommandOutput/)
</details>
<details>
<summary>
DisassociateAssessmentReportEvidenceFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/DisassociateAssessmentReportEvidenceFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DisassociateAssessmentReportEvidenceFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/DisassociateAssessmentReportEvidenceFolderCommandOutput/)
</details>
<details>
<summary>
GetAccountStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetAccountStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetAccountStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetAccountStatusCommandOutput/)
</details>
<details>
<summary>
GetAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetAssessmentCommandOutput/)
</details>
<details>
<summary>
GetAssessmentFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetAssessmentFrameworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetAssessmentFrameworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetAssessmentFrameworkCommandOutput/)
</details>
<details>
<summary>
GetAssessmentReportUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetAssessmentReportUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetAssessmentReportUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetAssessmentReportUrlCommandOutput/)
</details>
<details>
<summary>
GetChangeLogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetChangeLogsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetChangeLogsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetChangeLogsCommandOutput/)
</details>
<details>
<summary>
GetControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetControlCommandOutput/)
</details>
<details>
<summary>
GetDelegations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetDelegationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetDelegationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetDelegationsCommandOutput/)
</details>
<details>
<summary>
GetEvidence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetEvidenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceCommandOutput/)
</details>
<details>
<summary>
GetEvidenceByEvidenceFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetEvidenceByEvidenceFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceByEvidenceFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceByEvidenceFolderCommandOutput/)
</details>
<details>
<summary>
GetEvidenceFileUploadUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetEvidenceFileUploadUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceFileUploadUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceFileUploadUrlCommandOutput/)
</details>
<details>
<summary>
GetEvidenceFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetEvidenceFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceFolderCommandOutput/)
</details>
<details>
<summary>
GetEvidenceFoldersByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetEvidenceFoldersByAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceFoldersByAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceFoldersByAssessmentCommandOutput/)
</details>
<details>
<summary>
GetEvidenceFoldersByAssessmentControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetEvidenceFoldersByAssessmentControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceFoldersByAssessmentControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetEvidenceFoldersByAssessmentControlCommandOutput/)
</details>
<details>
<summary>
GetInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetInsightsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetInsightsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetInsightsCommandOutput/)
</details>
<details>
<summary>
GetInsightsByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetInsightsByAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetInsightsByAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetInsightsByAssessmentCommandOutput/)
</details>
<details>
<summary>
GetOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetOrganizationAdminAccountCommandOutput/)
</details>
<details>
<summary>
GetServicesInScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetServicesInScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetServicesInScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetServicesInScopeCommandOutput/)
</details>
<details>
<summary>
GetSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/GetSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/GetSettingsCommandOutput/)
</details>
<details>
<summary>
ListAssessmentControlInsightsByControlDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListAssessmentControlInsightsByControlDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentControlInsightsByControlDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentControlInsightsByControlDomainCommandOutput/)
</details>
<details>
<summary>
ListAssessmentFrameworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListAssessmentFrameworksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentFrameworksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentFrameworksCommandOutput/)
</details>
<details>
<summary>
ListAssessmentFrameworkShareRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListAssessmentFrameworkShareRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentFrameworkShareRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentFrameworkShareRequestsCommandOutput/)
</details>
<details>
<summary>
ListAssessmentReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListAssessmentReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentReportsCommandOutput/)
</details>
<details>
<summary>
ListAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListAssessmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListAssessmentsCommandOutput/)
</details>
<details>
<summary>
ListControlDomainInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListControlDomainInsightsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListControlDomainInsightsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListControlDomainInsightsCommandOutput/)
</details>
<details>
<summary>
ListControlDomainInsightsByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListControlDomainInsightsByAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListControlDomainInsightsByAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListControlDomainInsightsByAssessmentCommandOutput/)
</details>
<details>
<summary>
ListControlInsightsByControlDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListControlInsightsByControlDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListControlInsightsByControlDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListControlInsightsByControlDomainCommandOutput/)
</details>
<details>
<summary>
ListControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListControlsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListControlsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListControlsCommandOutput/)
</details>
<details>
<summary>
ListKeywordsForDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListKeywordsForDataSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListKeywordsForDataSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListKeywordsForDataSourceCommandOutput/)
</details>
<details>
<summary>
ListNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListNotificationsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
RegisterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/RegisterAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/RegisterAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/RegisterAccountCommandOutput/)
</details>
<details>
<summary>
RegisterOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/RegisterOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/RegisterOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/RegisterOrganizationAdminAccountCommandOutput/)
</details>
<details>
<summary>
StartAssessmentFrameworkShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/StartAssessmentFrameworkShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/StartAssessmentFrameworkShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/StartAssessmentFrameworkShareCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UpdateAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentCommandOutput/)
</details>
<details>
<summary>
UpdateAssessmentControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UpdateAssessmentControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentControlCommandOutput/)
</details>
<details>
<summary>
UpdateAssessmentControlSetStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UpdateAssessmentControlSetStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentControlSetStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentControlSetStatusCommandOutput/)
</details>
<details>
<summary>
UpdateAssessmentFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UpdateAssessmentFrameworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentFrameworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentFrameworkCommandOutput/)
</details>
<details>
<summary>
UpdateAssessmentFrameworkShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UpdateAssessmentFrameworkShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentFrameworkShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentFrameworkShareCommandOutput/)
</details>
<details>
<summary>
UpdateAssessmentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UpdateAssessmentStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateAssessmentStatusCommandOutput/)
</details>
<details>
<summary>
UpdateControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UpdateControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateControlCommandOutput/)
</details>
<details>
<summary>
UpdateSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/UpdateSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/UpdateSettingsCommandOutput/)
</details>
<details>
<summary>
ValidateAssessmentReportIntegrity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/auditmanager/command/ValidateAssessmentReportIntegrityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ValidateAssessmentReportIntegrityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-auditmanager/Interface/ValidateAssessmentReportIntegrityCommandOutput/)
</details>
