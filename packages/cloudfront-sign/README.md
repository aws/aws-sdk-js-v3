# @aws-sdk/cloudfront-sign

This package provides functions to generate signed urls and cookies for accessing private content on CloudFront based on a CloudFront trusted key group key pair.

> Please note the process for creating a pre-signed URL with Cloudfront is very different than the process for S3. For more information, please visit the documentation for [restricting CloudFront content with signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).

### Sign a URL

JavaScript Example:

```javascript
const { getSignedUrl } = require("@aws-sdk/cloudfront-sign");
const cloudfrontDistributionDomain = "https://d111111abcdef8.cloudfront.net";
const s3ObjectKey = "private-content/private.jpeg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "PATH/TO/CLOUDFRONT/PRIVATE/KEY.PEM";
const keyPairId = "PUBLIC-KEY-ID-OF-CLOUDFRONT-KEY-PAIR";
const dateLessThan = "2022-01-01";
const signedUrl = getSignedUrl({
  url,
  keyPairId,
  dateLessThan,
  privateKey,
});
```

ES6 Example

```javascript
import { getSignedUrl } from "@aws-sdk/cloudfront-sign";
const cloudfrontDistributionDomain = "https://d111111abcdef8.cloudfront.net";
const s3ObjectKey = "private-content/private.jpeg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "PATH/TO/CLOUDFRONT/PRIVATE/KEY.PEM";
const keyPairId = "PUBLIC-KEY-ID-OF-CLOUDFRONT-KEY-PAIR";
const dateLessThan = "2022-01-01";
const signedUrl = getSignedUrl({
  url,
  keyPairId,
  dateLessThan,
  privateKey,
});
```

### Sign a URL for cookies

JavaScript Example:

```javascript
const { signCookies } = require("@aws-sdk/cloudfront-sign");
const cloudfrontDistributionDomain = "https://d111111abcdef8.cloudfront.net";
const s3ObjectKey = "private-content/private.jpeg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "PATH/TO/CLOUDFRONT/PRIVATE/KEY.PEM";
const keyPairId = "PUBLIC-KEY-ID-OF-CLOUDFRONT-KEY-PAIR";
const dateLessThan = "2022-01-01";
const cookies = signCookies({
  url,
  keyPairId,
  dateLessThan,
  privateKey,
});
```

ES6 Example

```javascript
import { signCookies } from "@aws-sdk/cloudfront-sign";
const cloudfrontDistributionDomain = "https://d111111abcdef8.cloudfront.net";
const s3ObjectKey = "private-content/private.jpeg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "PATH/TO/CLOUDFRONT/PRIVATE/KEY.PEM";
const keyPairId = "PUBLIC-KEY-ID-OF-CLOUDFRONT-KEY-PAIR";
const dateLessThan = "2022-01-01";
const cookies = signCookies({
  url,
  keyPairId,
  dateLessThan,
  privateKey,
});
```
