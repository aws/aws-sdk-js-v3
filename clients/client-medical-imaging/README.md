<!-- generated file, do not edit directly -->

# @aws-sdk/client-medical-imaging

## Description

AWS SDK for JavaScript MedicalImaging Client for Node.js, Browser and React Native.

<p>This is the <i>AWS HealthImaging API Reference</i>. AWS HealthImaging is an AWS service for storing, accessing,
and analyzing medical images. For an introduction to the service, see the <a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide">
<i>AWS HealthImaging Developer Guide</i>
</a>.</p>
<note>
<p>We recommend using one of the AWS Software Development Kits (SDKs) for your programming language, as
they take care of request authentication, serialization, and connection management. For more information,
see <a href="http://aws.amazon.com/developer/tools">Tools to build on AWS</a>.</p>
<p>For information about using AWS HealthImaging API actions in one of the language-specific AWS SDKs, refer to the
<i>See Also</i> link at the end of each section that describes an API action or data type.</p>
</note>
<p>The following sections list AWS HealthImaging API actions categorized according to functionality. Links are
provided to actions within this Reference, along with links back to corresponding sections in the
<i>AWS HealthImaging Developer Guide</i> so you can view console procedures and CLI/SDK code examples.</p>
<p class="title">
<b>Data store actions</b>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_CreateDatastore.html">CreateDatastore</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/create-data-store.html">Creating a data store</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetDatastore.html">GetDatastore</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-data-store.html">Getting data store properties</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_ListDatastores.html">ListDatastores</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/list-data-stores.html">Listing data stores</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_DeleteDatastore.html">DeleteDatastore</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/delete-data-store.html">Deleting a data store</a>.</p>
</li>
</ul>
<p class="title">
<b>Import job actions</b>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_StartDICOMImportJob.html">StartDICOMImportJob</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/start-dicom-import-job.html">Starting an import job</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetDICOMImportJob.html">GetDICOMImportJob</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-dicom-import-job.html">Getting import job properties</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_ListDICOMImportJobs.html">ListDICOMImportJobs</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/list-dicom-import-jobs.html">Listing import jobs</a>.</p>
</li>
</ul>
<p class="title">
<b>Image set access actions</b>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_SearchImageSets.html">SearchImageSets</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/search-image-sets.html">Searching image sets</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetImageSet.html">GetImageSet</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-image-set-properties.html">Getting image set properties</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetImageSetMetadata.html">GetImageSetMetadata</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-image-set-metadata.html">Getting image set metadata</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_GetImageFrame.html">GetImageFrame</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/get-image-frame.html">Getting image set pixel data</a>.</p>
</li>
</ul>
<p class="title">
<b>Image set modification actions</b>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_ListImageSetVersions.html">ListImageSetVersions</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/list-image-set-versions.html">Listing image set versions</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_UpdateImageSetMetadata.html">UpdateImageSetMetadata</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/update-image-set-metadata.html">Updating image set metadata</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_CopyImageSet.html">CopyImageSet</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/copy-image-set.html">Copying an image set</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_DeleteImageSet.html">DeleteImageSet</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/delete-image-set.html">Deleting an image set</a>.</p>
</li>
</ul>
<p class="title">
<b>Tagging actions</b>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_TagResource.html">TagResource</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-data-store.html">Tagging a data store</a> and
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-image-set.html">Tagging an image set</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-data-store.html">Tagging a data store</a> and
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-image-set.html">Tagging an image set</a>.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medical-imaging/latest/APIReference/API_UntagResource.html">UntagResource</a>
– See
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-data-store.html">Tagging a data store</a> and
<a href="https://docs.aws.amazon.com/medical-imaging/latest/devguide/tag-list-untag-image-set.html">Tagging an image set</a>.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-medical-imaging
using your favorite package manager:

- `npm install @aws-sdk/client-medical-imaging`
- `yarn add @aws-sdk/client-medical-imaging`
- `pnpm add @aws-sdk/client-medical-imaging`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MedicalImagingClient` and
the commands you need, for example `CopyImageSetCommand`:

```js
// ES5 example
const { MedicalImagingClient, CopyImageSetCommand } = require("@aws-sdk/client-medical-imaging");
```

```ts
// ES6+ example
import { MedicalImagingClient, CopyImageSetCommand } from "@aws-sdk/client-medical-imaging";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MedicalImagingClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CopyImageSetCommand(params);
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
import * as AWS from "@aws-sdk/client-medical-imaging";
const client = new AWS.MedicalImaging({ region: "REGION" });

// async/await.
try {
  const data = await client.copyImageSet(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .copyImageSet(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.copyImageSet(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-medical-imaging` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CopyImageSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/copyimagesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/copyimagesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/copyimagesetcommandoutput.html)

</details>
<details>
<summary>
CreateDatastore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/createdatastorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/createdatastorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/createdatastorecommandoutput.html)

</details>
<details>
<summary>
DeleteDatastore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/deletedatastorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/deletedatastorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/deletedatastorecommandoutput.html)

</details>
<details>
<summary>
DeleteImageSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/deleteimagesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/deleteimagesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/deleteimagesetcommandoutput.html)

</details>
<details>
<summary>
GetDatastore
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/getdatastorecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getdatastorecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getdatastorecommandoutput.html)

</details>
<details>
<summary>
GetDICOMImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/getdicomimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getdicomimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getdicomimportjobcommandoutput.html)

</details>
<details>
<summary>
GetImageFrame
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/getimageframecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getimageframecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getimageframecommandoutput.html)

</details>
<details>
<summary>
GetImageSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/getimagesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getimagesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getimagesetcommandoutput.html)

</details>
<details>
<summary>
GetImageSetMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/getimagesetmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getimagesetmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/getimagesetmetadatacommandoutput.html)

</details>
<details>
<summary>
ListDatastores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/listdatastorescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/listdatastorescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/listdatastorescommandoutput.html)

</details>
<details>
<summary>
ListDICOMImportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/listdicomimportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/listdicomimportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/listdicomimportjobscommandoutput.html)

</details>
<details>
<summary>
ListImageSetVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/listimagesetversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/listimagesetversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/listimagesetversionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
SearchImageSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/searchimagesetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/searchimagesetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/searchimagesetscommandoutput.html)

</details>
<details>
<summary>
StartDICOMImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/startdicomimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/startdicomimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/startdicomimportjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateImageSetMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/classes/updateimagesetmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/updateimagesetmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-medical-imaging/interfaces/updateimagesetmetadatacommandoutput.html)

</details>
