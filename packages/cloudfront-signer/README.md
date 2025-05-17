# @aws-sdk/cloudfront-signer

This package provides functions to generate signed urls and cookies for accessing private content on CloudFront based on a CloudFront trusted key group key pair.

> Please note the process for creating a signed URL with Cloudfront is very different than the process for S3. For more information, please visit the documentation for [restricting CloudFront content with signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).

### Sign a URL

JavaScript Example:

```javascript
import { getSignedUrl } from "@aws-sdk/cloudfront-signer"; // ESM
// const { getSignedUrl } = require("@aws-sdk/cloudfront-signer"); // CJS

const cloudfrontDistributionDomain = "https://d111111abcdef8.cloudfront.net";
const s3ObjectKey = "private-content/private.jpeg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "CONTENTS-OF-PRIVATE-KEY";
const keyPairId = "PUBLIC-KEY-ID-OF-CLOUDFRONT-KEY-PAIR";
const dateLessThan = "2022-01-01"; // any Date constructor compatible

const signedUrl = getSignedUrl({
  url,
  keyPairId,
  dateLessThan,
  privateKey,
});
```

### Sign a URL with a Policy

```javascript
import { getSignedUrl } from "@aws-sdk/cloudfront-signer"; // ESM
// const { getSignedUrl } = require("@aws-sdk/cloudfront-signer"); // CJS

const cloudfrontDistributionDomain = "https://d111111abcdef8.cloudfront.net";
const s3ObjectKey = "private-content/private.jpeg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "CONTENTS-OF-PRIVATE-KEY";
const keyPairId = "PUBLIC-KEY-ID-OF-CLOUDFRONT-KEY-PAIR";
const dateLessThan = "2022-01-01";

const policy = {
  Statement: [
    {
      Resource: url,
      Condition: {
        DateLessThan: {
          "AWS:EpochTime": new Date(dateLessThan).getTime() / 1000, // time in seconds
        },
      },
    },
  ],
};

const policyString = JSON.stringify(policy);

const signedUrl = getSignedUrl({
  keyPairId,
  privateKey,
  policy: policyString,
  // url is automatically extracted from the policy, however you could still overwrite it if needed
});
```

### Get signed cookies for a resource

```javascript
import { getSignedCookies } from "@aws-sdk/cloudfront-signer"; // ESM
// const { getSignedCookies } = require("@aws-sdk/cloudfront-signer"); // CJS

const cloudfrontDistributionDomain = "https://d111111abcdef8.cloudfront.net";
const s3ObjectKey = "private-content/private.jpeg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "CONTENTS-OF-PRIVATE-KEY";
const keyPairId = "PUBLIC-KEY-ID-OF-CLOUDFRONT-KEY-PAIR";
const dateLessThan = "2022-01-01";

const cookies = getSignedCookies({
  url,
  keyPairId,
  dateLessThan,
  privateKey,
});
```

### Get signed cookies with a Policy

```javascript
import { getSignedCookies } from "@aws-sdk/cloudfront-signer"; // ESM
// const { getSignedCookies } = require("@aws-sdk/cloudfront-signer"); // CJS

const cloudfrontDistributionDomain = "https://d111111abcdef8.cloudfront.net";
const s3ObjectKey = "private-content/private.jpeg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "CONTENTS-OF-PRIVATE-KEY";
const keyPairId = "PUBLIC-KEY-ID-OF-CLOUDFRONT-KEY-PAIR";
const dateLessThan = "2022-01-01";

const policy = {
  Statement: [
    {
      Resource: url,
      Condition: {
        DateLessThan: {
          "AWS:EpochTime": new Date(dateLessThan).getTime() / 1000, // time in seconds
        },
      },
    },
  ],
};

const policyString = JSON.stringify(policy);

const cookies = getSignedCookies({
  keyPairId,
  privateKey,
  policy: policyString,
});
```
