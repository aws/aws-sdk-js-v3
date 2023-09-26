<!-- generated file, do not edit directly -->

# @aws-sdk/client-acm-pca

## Description

AWS SDK for JavaScript ACMPCA Client for Node.js, Browser and React Native.

<p>This is the <i>Amazon Web Services Private Certificate Authority API Reference</i>. It provides descriptions,
syntax, and usage examples for each of the actions and data types involved in creating
and managing a private certificate authority (CA) for your organization.</p>
<p>The documentation for each action shows the API request parameters and the JSON
response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is
tailored to the programming language or platform that you prefer. For more information,
see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
<p>Each Amazon Web Services Private CA API operation has a quota that determines the number of times the
operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates
depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid
request because the request exceeds the operation's quota for the number of requests per
second. When a request is throttled, Amazon Web Services Private CA returns a <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/CommonErrors.html">ThrottlingException</a> error. Amazon Web Services Private CA does not guarantee a minimum request
rate for APIs. </p>
<p>To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase,
log into your Amazon Web Services account and visit the <a href="https://console.aws.amazon.com/servicequotas/">Service Quotas</a>
console.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-acm-pca
using your favorite package manager:

- `npm install @aws-sdk/client-acm-pca`
- `yarn add @aws-sdk/client-acm-pca`
- `pnpm add @aws-sdk/client-acm-pca`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ACMPCAClient` and
the commands you need, for example `ListTagsCommand`:

```js
// ES5 example
const { ACMPCAClient, ListTagsCommand } = require("@aws-sdk/client-acm-pca");
```

```ts
// ES6+ example
import { ACMPCAClient, ListTagsCommand } from "@aws-sdk/client-acm-pca";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ACMPCAClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListTagsCommand(params);
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
import * as AWS from "@aws-sdk/client-acm-pca";
const client = new AWS.ACMPCA({ region: "REGION" });

// async/await.
try {
  const data = await client.listTags(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTags(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTags(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-acm-pca` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/createcertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/createcertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/createcertificateauthoritycommandoutput.html)

</details>
<details>
<summary>
CreateCertificateAuthorityAuditReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/createcertificateauthorityauditreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/createcertificateauthorityauditreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/createcertificateauthorityauditreportcommandoutput.html)

</details>
<details>
<summary>
CreatePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/createpermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/createpermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/createpermissioncommandoutput.html)

</details>
<details>
<summary>
DeleteCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/deletecertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/deletecertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/deletecertificateauthoritycommandoutput.html)

</details>
<details>
<summary>
DeletePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/deletepermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/deletepermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/deletepermissioncommandoutput.html)

</details>
<details>
<summary>
DeletePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/deletepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/deletepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/deletepolicycommandoutput.html)

</details>
<details>
<summary>
DescribeCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/describecertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/describecertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/describecertificateauthoritycommandoutput.html)

</details>
<details>
<summary>
DescribeCertificateAuthorityAuditReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/describecertificateauthorityauditreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/describecertificateauthorityauditreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/describecertificateauthorityauditreportcommandoutput.html)

</details>
<details>
<summary>
GetCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/getcertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/getcertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/getcertificatecommandoutput.html)

</details>
<details>
<summary>
GetCertificateAuthorityCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/getcertificateauthoritycertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/getcertificateauthoritycertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/getcertificateauthoritycertificatecommandoutput.html)

</details>
<details>
<summary>
GetCertificateAuthorityCsr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/getcertificateauthoritycsrcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/getcertificateauthoritycsrcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/getcertificateauthoritycsrcommandoutput.html)

</details>
<details>
<summary>
GetPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/getpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/getpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/getpolicycommandoutput.html)

</details>
<details>
<summary>
ImportCertificateAuthorityCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/importcertificateauthoritycertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/importcertificateauthoritycertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/importcertificateauthoritycertificatecommandoutput.html)

</details>
<details>
<summary>
IssueCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/issuecertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/issuecertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/issuecertificatecommandoutput.html)

</details>
<details>
<summary>
ListCertificateAuthorities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/listcertificateauthoritiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/listcertificateauthoritiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/listcertificateauthoritiescommandoutput.html)

</details>
<details>
<summary>
ListPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/listpermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/listpermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/listpermissionscommandoutput.html)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/listtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/listtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/listtagscommandoutput.html)

</details>
<details>
<summary>
PutPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/putpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/putpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/putpolicycommandoutput.html)

</details>
<details>
<summary>
RestoreCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/restorecertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/restorecertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/restorecertificateauthoritycommandoutput.html)

</details>
<details>
<summary>
RevokeCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/revokecertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/revokecertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/revokecertificatecommandoutput.html)

</details>
<details>
<summary>
TagCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/tagcertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/tagcertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/tagcertificateauthoritycommandoutput.html)

</details>
<details>
<summary>
UntagCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/untagcertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/untagcertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/untagcertificateauthoritycommandoutput.html)

</details>
<details>
<summary>
UpdateCertificateAuthority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/classes/updatecertificateauthoritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/updatecertificateauthoritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-acm-pca/interfaces/updatecertificateauthoritycommandoutput.html)

</details>
