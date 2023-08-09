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

To install the this package, simply type add or install @aws-sdk/client-auditmanager
using your favorite package manager:

- `npm install @aws-sdk/client-auditmanager`
- `yarn add @aws-sdk/client-auditmanager`
- `pnpm add @aws-sdk/client-auditmanager`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AuditManagerClient` and
the commands you need, for example `AssociateAssessmentReportEvidenceFolderCommand`:

```js
// ES5 example
const { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager");
```

```ts
// ES6+ example
import { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } from "@aws-sdk/client-auditmanager";
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

const params = {
  /** input parameters */
};
const command = new AssociateAssessmentReportEvidenceFolderCommand(params);
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
  const data = await client.associateAssessmentReportEvidenceFolder(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateAssessmentReportEvidenceFolder(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateAssessmentReportEvidenceFolder(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/associateassessmentreportevidencefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/associateassessmentreportevidencefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/associateassessmentreportevidencefoldercommandoutput.html)

</details>
<details>
<summary>
BatchAssociateAssessmentReportEvidence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/batchassociateassessmentreportevidencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchassociateassessmentreportevidencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchassociateassessmentreportevidencecommandoutput.html)

</details>
<details>
<summary>
BatchCreateDelegationByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/batchcreatedelegationbyassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchcreatedelegationbyassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchcreatedelegationbyassessmentcommandoutput.html)

</details>
<details>
<summary>
BatchDeleteDelegationByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/batchdeletedelegationbyassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchdeletedelegationbyassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchdeletedelegationbyassessmentcommandoutput.html)

</details>
<details>
<summary>
BatchDisassociateAssessmentReportEvidence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/batchdisassociateassessmentreportevidencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchdisassociateassessmentreportevidencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchdisassociateassessmentreportevidencecommandoutput.html)

</details>
<details>
<summary>
BatchImportEvidenceToAssessmentControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/batchimportevidencetoassessmentcontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchimportevidencetoassessmentcontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/batchimportevidencetoassessmentcontrolcommandoutput.html)

</details>
<details>
<summary>
CreateAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/createassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/createassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/createassessmentcommandoutput.html)

</details>
<details>
<summary>
CreateAssessmentFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/createassessmentframeworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/createassessmentframeworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/createassessmentframeworkcommandoutput.html)

</details>
<details>
<summary>
CreateAssessmentReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/createassessmentreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/createassessmentreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/createassessmentreportcommandoutput.html)

</details>
<details>
<summary>
CreateControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/createcontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/createcontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/createcontrolcommandoutput.html)

</details>
<details>
<summary>
DeleteAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/deleteassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deleteassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deleteassessmentcommandoutput.html)

</details>
<details>
<summary>
DeleteAssessmentFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/deleteassessmentframeworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deleteassessmentframeworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deleteassessmentframeworkcommandoutput.html)

</details>
<details>
<summary>
DeleteAssessmentFrameworkShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/deleteassessmentframeworksharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deleteassessmentframeworksharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deleteassessmentframeworksharecommandoutput.html)

</details>
<details>
<summary>
DeleteAssessmentReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/deleteassessmentreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deleteassessmentreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deleteassessmentreportcommandoutput.html)

</details>
<details>
<summary>
DeleteControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/deletecontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deletecontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deletecontrolcommandoutput.html)

</details>
<details>
<summary>
DeregisterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/deregisteraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deregisteraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deregisteraccountcommandoutput.html)

</details>
<details>
<summary>
DeregisterOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/deregisterorganizationadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deregisterorganizationadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/deregisterorganizationadminaccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateAssessmentReportEvidenceFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/disassociateassessmentreportevidencefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/disassociateassessmentreportevidencefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/disassociateassessmentreportevidencefoldercommandoutput.html)

</details>
<details>
<summary>
GetAccountStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getaccountstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getaccountstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getaccountstatuscommandoutput.html)

</details>
<details>
<summary>
GetAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getassessmentcommandoutput.html)

</details>
<details>
<summary>
GetAssessmentFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getassessmentframeworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getassessmentframeworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getassessmentframeworkcommandoutput.html)

</details>
<details>
<summary>
GetAssessmentReportUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getassessmentreporturlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getassessmentreporturlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getassessmentreporturlcommandoutput.html)

</details>
<details>
<summary>
GetChangeLogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getchangelogscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getchangelogscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getchangelogscommandoutput.html)

</details>
<details>
<summary>
GetControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getcontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getcontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getcontrolcommandoutput.html)

</details>
<details>
<summary>
GetDelegations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getdelegationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getdelegationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getdelegationscommandoutput.html)

</details>
<details>
<summary>
GetEvidence
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getevidencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencecommandoutput.html)

</details>
<details>
<summary>
GetEvidenceByEvidenceFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getevidencebyevidencefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencebyevidencefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencebyevidencefoldercommandoutput.html)

</details>
<details>
<summary>
GetEvidenceFileUploadUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getevidencefileuploadurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencefileuploadurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencefileuploadurlcommandoutput.html)

</details>
<details>
<summary>
GetEvidenceFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getevidencefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencefoldercommandoutput.html)

</details>
<details>
<summary>
GetEvidenceFoldersByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getevidencefoldersbyassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencefoldersbyassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencefoldersbyassessmentcommandoutput.html)

</details>
<details>
<summary>
GetEvidenceFoldersByAssessmentControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getevidencefoldersbyassessmentcontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencefoldersbyassessmentcontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getevidencefoldersbyassessmentcontrolcommandoutput.html)

</details>
<details>
<summary>
GetInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getinsightscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getinsightscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getinsightscommandoutput.html)

</details>
<details>
<summary>
GetInsightsByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getinsightsbyassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getinsightsbyassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getinsightsbyassessmentcommandoutput.html)

</details>
<details>
<summary>
GetOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getorganizationadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getorganizationadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getorganizationadminaccountcommandoutput.html)

</details>
<details>
<summary>
GetServicesInScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getservicesinscopecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getservicesinscopecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getservicesinscopecommandoutput.html)

</details>
<details>
<summary>
GetSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/getsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/getsettingscommandoutput.html)

</details>
<details>
<summary>
ListAssessmentControlInsightsByControlDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listassessmentcontrolinsightsbycontroldomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentcontrolinsightsbycontroldomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentcontrolinsightsbycontroldomaincommandoutput.html)

</details>
<details>
<summary>
ListAssessmentFrameworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listassessmentframeworkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentframeworkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentframeworkscommandoutput.html)

</details>
<details>
<summary>
ListAssessmentFrameworkShareRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listassessmentframeworksharerequestscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentframeworksharerequestscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentframeworksharerequestscommandoutput.html)

</details>
<details>
<summary>
ListAssessmentReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listassessmentreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentreportscommandoutput.html)

</details>
<details>
<summary>
ListAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listassessmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listassessmentscommandoutput.html)

</details>
<details>
<summary>
ListControlDomainInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listcontroldomaininsightscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listcontroldomaininsightscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listcontroldomaininsightscommandoutput.html)

</details>
<details>
<summary>
ListControlDomainInsightsByAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listcontroldomaininsightsbyassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listcontroldomaininsightsbyassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listcontroldomaininsightsbyassessmentcommandoutput.html)

</details>
<details>
<summary>
ListControlInsightsByControlDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listcontrolinsightsbycontroldomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listcontrolinsightsbycontroldomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listcontrolinsightsbycontroldomaincommandoutput.html)

</details>
<details>
<summary>
ListControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listcontrolscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listcontrolscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listcontrolscommandoutput.html)

</details>
<details>
<summary>
ListKeywordsForDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listkeywordsfordatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listkeywordsfordatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listkeywordsfordatasourcecommandoutput.html)

</details>
<details>
<summary>
ListNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listnotificationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listnotificationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listnotificationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
RegisterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/registeraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/registeraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/registeraccountcommandoutput.html)

</details>
<details>
<summary>
RegisterOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/registerorganizationadminaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/registerorganizationadminaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/registerorganizationadminaccountcommandoutput.html)

</details>
<details>
<summary>
StartAssessmentFrameworkShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/startassessmentframeworksharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/startassessmentframeworksharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/startassessmentframeworksharecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/updateassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentcommandoutput.html)

</details>
<details>
<summary>
UpdateAssessmentControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/updateassessmentcontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentcontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentcontrolcommandoutput.html)

</details>
<details>
<summary>
UpdateAssessmentControlSetStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/updateassessmentcontrolsetstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentcontrolsetstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentcontrolsetstatuscommandoutput.html)

</details>
<details>
<summary>
UpdateAssessmentFramework
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/updateassessmentframeworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentframeworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentframeworkcommandoutput.html)

</details>
<details>
<summary>
UpdateAssessmentFrameworkShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/updateassessmentframeworksharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentframeworksharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentframeworksharecommandoutput.html)

</details>
<details>
<summary>
UpdateAssessmentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/updateassessmentstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updateassessmentstatuscommandoutput.html)

</details>
<details>
<summary>
UpdateControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/updatecontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updatecontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updatecontrolcommandoutput.html)

</details>
<details>
<summary>
UpdateSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/updatesettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updatesettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/updatesettingscommandoutput.html)

</details>
<details>
<summary>
ValidateAssessmentReportIntegrity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/classes/validateassessmentreportintegritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/validateassessmentreportintegritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-auditmanager/interfaces/validateassessmentreportintegritycommandoutput.html)

</details>
