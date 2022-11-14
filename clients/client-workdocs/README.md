<!-- generated file, do not edit directly -->

# @aws-sdk/client-workdocs

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-workdocs/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-workdocs)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-workdocs.svg)](https://www.npmjs.com/package/@aws-sdk/client-workdocs)

## Description

AWS SDK for JavaScript WorkDocs Client for Node.js, Browser and React Native.

<p>The WorkDocs API is designed for the following use cases:</p>
<ul>
<li>
<p>File Migration: File migration applications are supported for users who
want to migrate their files from an on-premises or off-premises file system or
service. Users can insert files into a user directory structure, as well as
allow for basic metadata changes, such as modifications to the permissions of
files.</p>
</li>
<li>
<p>Security: Support security applications are supported for users who have
additional security needs, such as antivirus or data loss prevention. The API
actions, along with AWS CloudTrail, allow these applications to detect when
changes occur in Amazon WorkDocs. Then, the application can take the necessary
actions and replace the target file. If the target file violates the policy, the
application can also choose to email the user.</p>
</li>
<li>
<p>eDiscovery/Analytics: General administrative applications are supported,
such as eDiscovery and analytics. These applications can choose to mimic or
record the actions in an Amazon WorkDocs site, along with AWS CloudTrail, to
replicate data for eDiscovery, backup, or analytical applications.</p>
</li>
</ul>
<p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed.
They not only require the use of the AWS SDK, but also allow for the exclusive use of
IAM users and roles to help facilitate access, trust, and permission policies. By
creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM
user gains full administrative visibility into the entire Amazon WorkDocs site (or as
set in the IAM policy). This includes, but is not limited to, the ability to modify file
permissions and upload any file to any user. This allows developers to perform the three
use cases above, as well as give users the ability to grant access on a selective basis
using the IAM model.</p>
<note>
<p>The pricing for Amazon WorkDocs APIs varies depending on the API call type for these actions:</p>
<ul>
<li>
<p>
<code>READ  (Get*)</code>
</p>
</li>
<li>
<p>
<code>WRITE (Activate*, Add*, Create*, Deactivate*, Initiate*, Update*)</code>
</p>
</li>
<li>
<p>
<code>LIST (Describe*)</code>
</p>
</li>
<li>
<p>
<code>DELETE*, CANCEL</code>
</p>
</li>
</ul>
<p>For information about Amazon WorkDocs API pricing, see <a href="https://aws.amazon.com/workdocs/pricing/">Amazon WorkDocs Pricing</a>.</p>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-workdocs
using your favorite package manager:

- `npm install @aws-sdk/client-workdocs`
- `yarn add @aws-sdk/client-workdocs`
- `pnpm add @aws-sdk/client-workdocs`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkDocsClient` and
the commands you need, for example `AbortDocumentVersionUploadCommand`:

```js
// ES5 example
const { WorkDocsClient, AbortDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs");
```

```ts
// ES6+ example
import { WorkDocsClient, AbortDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WorkDocsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AbortDocumentVersionUploadCommand(params);
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
import * as AWS from "@aws-sdk/client-workdocs";
const client = new AWS.WorkDocs({ region: "REGION" });

// async/await.
try {
  const data = await client.abortDocumentVersionUpload(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .abortDocumentVersionUpload(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.abortDocumentVersionUpload(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-workdocs` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
