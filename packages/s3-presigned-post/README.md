# @aws-sdk/s3-presigned-post

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/s3-presigned-post/latest.svg)](https://www.npmjs.com/package/@aws-sdk/s3-presigned-post)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/s3-presigned-post.svg)](https://www.npmjs.com/package/@aws-sdk/s3-presigned-post)

This package provide a function generating URL and fields. Users without AWS credentials can use the URL and fields to
to make a POST request to S3. The documentation for the server side feature can be found in [S3 API Reference](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-UsingHTTPPOST.html). Please read related sections for more context.

### Import

JavaScript Example:

```javascript
const { createPresignedPost } = require("@aws-sdk/s3-presigned-post");
const { S3Client } = require("@aws-sdk/client-s3");
```

ES6 Example

```javascript
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";
```

### Create a POST Policy

You can optionally attach a policy to a presigned post. It specifies a list of conditions that the request must meet.
For example:

```typescript
const Conditions = [{ acl: "bucket-owner-full-control" }, { bucket: "johnsmith" }, ["starts-with", "$key", "user/eric/"]];
```

Visit [S3 POST documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html)
for supported policy elements. If you include a condition, you must specify the valid value in the `Fields` parameter
as well. A value will not be added automatically to the fields dictionary according to the conditions.

### Generate a Presigned Post

Users can generate required url and fields for POST request:

```typescript
const client = new S3Client({ region: "us-west-2" });
const Bucket = "johnsmith";
const Key = "user/eric/1";
const Fields = {
  acl: "bucket-owner-full-control",
};
const { url, fields } = await createPresignedPost(client, {
  Bucket,
  Key,
  Conditions,
  Fields,
  Expires: 600, //Seconds before the presigned post expires. 3600 by default.
});
```

The `Bucket`, `Key` and other values in `Fields` must meet the conditions specified in `Conditions`. The `Key` can also
contain `${filename}` that will be automatically replaced by the name of the file provided. See [the S3 reference](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTForms.html#sigv4-HTTPPOSTFormFields)
for more information.

### Post File using HTML Form

You can also post a file with HTML form:

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body>
    <!-- Copy the 'url' value returned by createPresignedPost() -->
    <form action="URL_VALUE" method="post" enctype="multipart/form-data">
      <!-- Copy the 'fields' key:values returned by S3Client.generate_presigned_post() -->
      <input type="hidden" name="key" value="VALUE" />
      <input type="hidden" name="AWSAccessKeyId" value="VALUE" />
      <input type="hidden" name="policy" value="VALUE" />
      <input type="hidden" name="signature" value="VALUE" />
      File:
      <input type="file" name="file" /> <br />
      <input type="submit" name="submit" value="Upload to Amazon S3" />
    </form>
  </body>
</html>
```

### Post File using FormData in Node.js

In Node.js, use `form-data` package to post a file:

```typescript
const { createReadStream } = require("fs");
const FormData = require("form-data");

const form = new FormData();
Object.entries(fields).forEach(([field, value]) => {
  form.append(field, value);
});
form.append("file", createReadStream("path/to/a/file"));
form.submit(url, (err, res) => {
  //handle the response
});
```
