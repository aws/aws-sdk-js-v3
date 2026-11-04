// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep8, _mw0, command } from "../commandBuilder";
import type { ListObjectsV2Output, ListObjectsV2Request } from "../models/models_0";
import { ListObjectsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListObjectsV2Command}.
 */
export interface ListObjectsV2CommandInput extends ListObjectsV2Request {}
/**
 * @public
 *
 * The output of {@link ListObjectsV2Command}.
 */
export interface ListObjectsV2CommandOutput extends ListObjectsV2Output, __MetadataBearer {}

/**
 * Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A `200 OK` response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. For more information about listing objects, see [Listing object keys programmatically](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ListingKeysUsingAPIs.html) in the *Amazon S3 User Guide*. To get a list of your buckets, see [ListBuckets](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html).
 *
 * > **Note:**
 * >
 * > - **General purpose bucket** - For general purpose buckets, `ListObjectsV2` doesn't return prefixes that are related only to in-progress multipart uploads.
 * > - **Directory buckets** - For directory buckets, `ListObjectsV2` response includes the prefixes that are related only to in-progress multipart uploads.
 * > - **Directory buckets** - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format `https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name`. Path-style requests are not supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - To use this operation, you must have READ access to the bucket. You must have permission to perform the `s3:ListBucket` action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html) in the *Amazon S3 User Guide*.
 *   - **Directory bucket permissions** - To grant access to this API operation on a directory bucket, we recommend that you use the [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html) API operation for session-based authorization. Specifically, you grant the `s3express:CreateSession` permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the `CreateSession` API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another `CreateSession` API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html).
 *
 * - **Sorting order of returned objects**
 *
 *   - **General purpose bucket** - For general purpose buckets, `ListObjectsV2` returns objects in lexicographical order based on their key names.
 *   - **Directory bucket** - For directory buckets, `ListObjectsV2` does not return objects in lexicographical order.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *
 * > **Important:** This section describes the latest revision of this action. We recommend that you use this revised API operation for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API operation, [ListObjects](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html).
 *
 * The following operations are related to `ListObjectsV2`:
 *
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 * - [PutObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html)
 * - [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // ListObjectsV2Request
 *   Bucket: "STRING_VALUE", // required
 *   Delimiter: "STRING_VALUE",
 *   EncodingType: "url",
 *   MaxKeys: Number("int"),
 *   Prefix: "STRING_VALUE",
 *   ContinuationToken: "STRING_VALUE",
 *   FetchOwner: true || false,
 *   StartAfter: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   OptionalObjectAttributes: [ // OptionalObjectAttributesList
 *     "RestoreStatus",
 *   ],
 * };
 * const command = new ListObjectsV2Command(input);
 * const response = await client.send(command);
 * // { // ListObjectsV2Output
 * //   IsTruncated: true || false,
 * //   Contents: [ // ObjectList
 * //     { // Object
 * //       Key: "STRING_VALUE",
 * //       LastModified: new Date("TIMESTAMP"),
 * //       ETag: "STRING_VALUE",
 * //       ChecksumAlgorithm: [ // ChecksumAlgorithmList
 * //         "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 * //       ],
 * //       ChecksumType: "COMPOSITE" || "FULL_OBJECT",
 * //       Size: Number("long"),
 * //       StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE" || "FSX_OPENZFS" || "FSX_ONTAP" || "AWS_BACKUP_WARM" || "AWS_BACKUP_LOW_COST_WARM",
 * //       Owner: { // Owner
 * //         DisplayName: "STRING_VALUE",
 * //         ID: "STRING_VALUE",
 * //       },
 * //       RestoreStatus: { // RestoreStatus
 * //         IsRestoreInProgress: true || false,
 * //         RestoreExpiryDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   Prefix: "STRING_VALUE",
 * //   Delimiter: "STRING_VALUE",
 * //   MaxKeys: Number("int"),
 * //   CommonPrefixes: [ // CommonPrefixList
 * //     { // CommonPrefix
 * //       Prefix: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EncodingType: "url",
 * //   KeyCount: Number("int"),
 * //   ContinuationToken: "STRING_VALUE",
 * //   NextContinuationToken: "STRING_VALUE",
 * //   StartAfter: "STRING_VALUE",
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param ListObjectsV2CommandInput - {@link ListObjectsV2CommandInput}
 * @returns {@link ListObjectsV2CommandOutput}
 * @see {@link ListObjectsV2CommandInput} for command's `input` shape.
 * @see {@link ListObjectsV2CommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchBucket} (client fault)
 *
 * The specified bucket does not exist.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To get object list
 * ```javascript
 * // The following example retrieves object list. The request specifies max keys to limit response to include only 2 object keys.
 * const input = {
 *   Bucket: "DOC-EXAMPLE-BUCKET",
 *   MaxKeys: 2
 * };
 * const command = new ListObjectsV2Command(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Contents: [
 *     {
 *       ETag: `"70ee1738b6b21e2c8a43f3a5ab0eee71"`,
 *       Key: "happyface.jpg",
 *       LastModified: "2014-11-21T19:40:05.000Z",
 *       Size: 11,
 *       StorageClass: "STANDARD"
 *     },
 *     {
 *       ETag: `"becf17f89c30367a9a44495d62ed521a-1"`,
 *       Key: "test.jpg",
 *       LastModified: "2014-05-02T04:51:50.000Z",
 *       Size: 4192256,
 *       StorageClass: "STANDARD"
 *     }
 *   ],
 *   IsTruncated: true,
 *   KeyCount: 2,
 *   MaxKeys: 2,
 *   Name: "DOC-EXAMPLE-BUCKET",
 *   NextContinuationToken: "1w41l63U0xa8q7smH50vCxyTQqdxo69O3EmK28Bi5PcROI4wI/EyIJg==",
 *   Prefix: ""
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListObjectsV2Command extends command<ListObjectsV2CommandInput, ListObjectsV2CommandOutput>(
  _ep8,
  _mw0,
  "ListObjectsV2",
  ListObjectsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObjectsV2Request;
      output: ListObjectsV2Output;
    };
    sdk: {
      input: ListObjectsV2CommandInput;
      output: ListObjectsV2CommandOutput;
    };
  };
}
