# @aws-sdk/middleware-http-debug-log

An internal package for HTTP message logging.

This package is not available on NPM.

## Usage

```ts
import { type HttpDebugLoggingOptions, getHttpDebugLogPlugin } from "@aws-sdk/middleware-http-debug-log";
import { S3 } from "@aws-sdk/client-s3";

const client = new S3({});

// See type {HttpDebugLoggingOptions} for detailed logging options.
// It can be a string, shown here, or object.
const options: HttpDebugLoggingOptions = "header body formatted";
client.middlewareStack.use(getHttpDebugLogPlugin(options));

await client.listBuckets({
  MaxBuckets: 2,
});
```

Output (data redacted):

```txt
200 GET S3Client ListBucketsCommand
    https://s3.**-****-*.amazonaws.com/
    >> Request URL queryParams: {
      "x-id": "ListBuckets",
      "max-buckets": "2"
    }
    >>== Request Headers: {
      "x-amz-user-agent": "aws-sdk-js/3.***.0",
      "user-agent": "aws-sdk-js/3.***.0 ua/2.1 os/*** lang/js md/nodejs#*** api/s3#3.***.0 m/E,n",
      "host": "s3.**-****-*.amazonaws.com",
      "amz-sdk-invocation-id": "***-***-***-***-***",
      "amz-sdk-request": "attempt=1; max=3",
      "x-amz-date": "***",
      "x-amz-security-token": "***",
      "x-amz-content-sha256": "***",
      "authorization": "AWS4-HMAC-SHA256 Credential=***/***/**-****-*/s3/aws4_request, SignedHeaders=amz-sdk-invocation-id;amz-sdk-request;host;x-amz-content-sha256;x-amz-date;x-amz-security-token;x-amz-user-agent, Signature=***"
    }
    >>>=== Request Body Start ======

    >>>=== Request Body End ======
    <<== Response Headers: {
      "x-amz-id-2": "***",
      "x-amz-request-id": "***",
      "date": "*** GMT",
      "content-type": "application/xml",
      "transfer-encoding": "chunked",
      "server": "AmazonS3"
    }
    <<<=== Response Body Start ======
    <?xml version="1.0" encoding="UTF-8"?>
    <ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <Owner>
          <ID>
            ***
          </ID>
          <DisplayName>
            ***
          </DisplayName>
        </Owner>
        <Buckets>
          <Bucket>
            <Name>
              ***
            </Name>
            <CreationDate>
              ***
            </CreationDate>
            <BucketRegion>
              ***
            </BucketRegion>
          </Bucket>
          <Bucket>
            <Name>
              ***
            </Name>
            <CreationDate>
              ***
            </CreationDate>
            <BucketRegion>
              ***
            </BucketRegion>
          </Bucket>
        </Buckets>
        <ContinuationToken>
          ***
        </ContinuationToken>
      </ListAllMyBucketsResult>
    <<<=== Response Body End ======
```

## Usage (middleware timing)

```ts
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { getMiddlewareTimerPlugin } from "@aws-sdk/middleware-http-debug-log";

const client = new DynamoDB();

const storage = {};

client.middlewareStack.use(getMiddlewareTimerPlugin({ storage }));

await client.listTables({});
await client.listTables({});
await client.listTables({});

console.log({
  storage,
});
```

Output:

```
{
  storage: {
    serializerMiddleware: [ 4.506417000000056, 0.24324999999998909, 0.22945800000002237 ],
    retryMiddleware: [ 0.3532910000000129, 0.06491599999992559, 0.08433399999989888 ],
    httpSigningMiddleware: [ 2.129708000000022, 0.6848749999999768, 0.6588739999999689 ],
    deserializerMiddleware: [ 3.7174159999999574, 0.8131239999999593, 0.9889160000001311 ]
  }
}
```
