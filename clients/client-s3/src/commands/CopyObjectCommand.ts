// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw1, command } from "../commandBuilder";
import type { CopyObjectOutput, CopyObjectRequest } from "../models/models_0";
import { CopyObject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CopyObjectCommand}.
 */
export interface CopyObjectCommandInput extends CopyObjectRequest {}
/**
 * @public
 *
 * The output of {@link CopyObjectCommand}.
 */
export interface CopyObjectCommandOutput extends CopyObjectOutput, __MetadataBearer {}

/**
 * Creates a copy of an object that is already stored in Amazon S3.
 *
 * > **Important:**
 * >
 * > End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an `HTTP 405` (Method Not Allowed) error.
 * >
 * > This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo).
 *
 * > **Note:** You can store individual objects of up to 50 TB in Amazon S3. You create a copy of your object up to 5 GB in size in a single atomic action using this API. However, to copy an object greater than 5 GB, you must use the multipart upload Upload Part - Copy (UploadPartCopy) API. For more information, see [Copy Object Using the REST Multipart Upload API](https://docs.aws.amazon.com/AmazonS3/latest/dev/CopyingObjctsUsingRESTMPUapi.html).
 *
 * You can copy individual objects between general purpose buckets, between directory buckets, and between general purpose buckets and directory buckets.
 *
 * > **Note:**
 * >
 * > - Amazon S3 supports copy operations using Multi-Region Access Points only as a destination when using the Multi-Region Access Point ARN.
 * > - **Directory buckets** - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format `https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name`. Path-style requests are not supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 * > - VPC endpoints don't support cross-Region requests (including copies). If you're using VPC endpoints, your source and destination buckets should be in the same Amazon Web Services Region as your VPC endpoint.
 *
 * Both the Region that you want to copy the object from and the Region that you want to copy the object to must be enabled for your account. For more information about how to enable a Region for your account, see [Enable or disable a Region for standalone accounts](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html#manage-acct-regions-enable-standalone) in the *Amazon Web Services Account Management Guide*.
 *
 * > **Important:** Amazon S3 transfer acceleration does not support cross-Region copies. If you request a cross-Region copy using a transfer acceleration endpoint, you get a `400 Bad Request` error. For more information, see [Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html).
 *
 * - **Authentication and authorization**
 *
 *   All `CopyObject` requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the `x-amz-` prefix, including `x-amz-copy-source`, must be signed. For more information, see [REST Authentication](https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html).
 *
 *   **Directory buckets** - You must use the IAM credentials to authenticate and authorize your access to the `CopyObject` API operation, instead of using the temporary security credentials through the `CreateSession` API operation.
 *
 *   Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf.
 *
 * - **Permissions**
 *
 *   You must have *read* access to the source object and *write* access to the destination bucket.
 *
 *   - **General purpose bucket permissions** - You must have permissions in an IAM policy based on the source and destination bucket types in a `CopyObject` operation.
 *
 *     - If the source object is in a general purpose bucket, you must have **`s3:GetObject`** permission to read the source object that is being copied.
 *     - If the destination bucket is a general purpose bucket, you must have **`s3:PutObject`** permission to write the object copy to the destination bucket.
 *   - **Directory bucket permissions** - You must have permissions in a bucket policy or an IAM identity-based policy based on the source and destination bucket types in a `CopyObject` operation.
 *
 *     - If the source object that you want to copy is in a directory bucket, you must have the **`s3express:CreateSession`** permission in the `Action` element of a policy to read the object. If no session mode is specified, the session will be created with the maximum allowable privilege, attempting `ReadWrite` first, then `ReadOnly` if `ReadWrite` is not permitted. If you want to explicitly restrict the access to be read-only, you can set the `s3express:SessionMode` condition key to `ReadOnly` on the copy source bucket.
 *     - If the copy destination is a directory bucket, you must have the **`s3express:CreateSession`** permission in the `Action` element of a policy to write the object to the destination. The `s3express:SessionMode` condition key can't be set to `ReadOnly` on the copy destination bucket.
 *
 *     If the object is encrypted with SSE-KMS, you must also have the `kms:GenerateDataKey` and `kms:Decrypt` permissions in IAM identity-based policies and KMS key policies for the KMS key.
 *
 *     For example policies, see [Example bucket policies for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html) and [Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-identity-policies.html) in the *Amazon S3 User Guide*.
 *
 * - **Response and special errors**
 *
 *   When the request is an HTTP 1.1 request, the response is chunk encoded. When the request is not an HTTP 1.1 request, the response would not contain the `Content-Length`. You always need to read the entire response body to check if the copy succeeds.
 *
 *   - If the copy is successful, you receive a response with information about the copied object.
 *   - A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3 is copying the files. A `200 OK` response can contain either a success or an error.
 *
 *     - If the error occurs before the copy action starts, you receive a standard Amazon S3 error.
 *     - If the error occurs during the copy operation, the error response is embedded in the `200 OK` response. For example, in a cross-region copy, you may encounter throttling and receive a `200 OK` response. For more information, see [Resolve the Error 200 response when copying objects to Amazon S3](https://repost.aws/knowledge-center/s3-resolve-200-internalerror). The `200 OK` status code means the copy was accepted, but it doesn't mean the copy is complete. Another example is when you disconnect from Amazon S3 before the copy is complete, Amazon S3 might cancel the copy and you may receive a `200 OK` response. You must stay connected to Amazon S3 until the entire response is successfully received and processed.
 *
 *       If you call this API operation directly, make sure to design your application to parse the content of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throw an exception (or, for the SDKs that don't use exceptions, they return an error).
 *
 * - **Charge**
 *
 *   The copy request charge is based on the storage class and Region that you specify for the destination object. The request can also result in a data retrieval charge for the source if the source storage class bills for data retrieval. If the copy source is in a different region, the data transfer is billed to the copy source account. For pricing information, see [Amazon S3 pricing](http://aws.amazon.com/s3/pricing/).
 *
 * - **HTTP Host header syntax**
 *
 *   - **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *   - **Amazon S3 on Outposts** - When you use this action with S3 on Outposts through the REST API, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form `AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com`. The hostname isn't required when you use the Amazon Web Services CLI or SDKs.
 *
 * The following operations are related to `CopyObject`:
 *
 * - [PutObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html)
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CopyObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CopyObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // CopyObjectRequest
 *   ACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *   Bucket: "STRING_VALUE", // required
 *   CacheControl: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   ContentLanguage: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   CopySource: "STRING_VALUE", // required
 *   CopySourceIfMatch: "STRING_VALUE",
 *   CopySourceIfModifiedSince: new Date("TIMESTAMP"),
 *   CopySourceIfNoneMatch: "STRING_VALUE",
 *   CopySourceIfUnmodifiedSince: new Date("TIMESTAMP"),
 *   Expires: new Date("TIMESTAMP"),
 *   GrantFullControl: "STRING_VALUE",
 *   GrantRead: "STRING_VALUE",
 *   GrantReadACP: "STRING_VALUE",
 *   GrantWriteACP: "STRING_VALUE",
 *   IfMatch: "STRING_VALUE",
 *   IfNoneMatch: "STRING_VALUE",
 *   Key: "STRING_VALUE", // required
 *   Metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MetadataDirective: "COPY" || "REPLACE",
 *   TaggingDirective: "COPY" || "REPLACE",
 *   AnnotationDirective: "COPY" || "EXCLUDE",
 *   ServerSideEncryption: "AES256" || "aws:fsx" || "aws:backup" || "aws:kms" || "aws:kms:dsse",
 *   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE" || "FSX_OPENZFS" || "FSX_ONTAP" || "AWS_BACKUP_WARM" || "AWS_BACKUP_LOW_COST_WARM",
 *   WebsiteRedirectLocation: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   SSEKMSKeyId: "STRING_VALUE",
 *   SSEKMSEncryptionContext: "STRING_VALUE",
 *   BucketKeyEnabled: true || false,
 *   CopySourceSSECustomerAlgorithm: "STRING_VALUE",
 *   CopySourceSSECustomerKey: "STRING_VALUE",
 *   CopySourceSSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   Tagging: "STRING_VALUE",
 *   ObjectLockMode: "GOVERNANCE" || "COMPLIANCE",
 *   ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
 *   ObjectLockLegalHoldStatus: "ON" || "OFF",
 *   ObjectLockEventHold: "ON" || "OFF",
 *   ObjectLockEventHoldDurationDays: Number("int"),
 *   ObjectLockEventHoldDurationYears: Number("int"),
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ExpectedSourceBucketOwner: "STRING_VALUE",
 * };
 * const command = new CopyObjectCommand(input);
 * const response = await client.send(command);
 * // { // CopyObjectOutput
 * //   CopyObjectResult: { // CopyObjectResult
 * //     ETag: "STRING_VALUE",
 * //     LastModified: new Date("TIMESTAMP"),
 * //     ChecksumType: "COMPOSITE" || "FULL_OBJECT",
 * //     ChecksumCRC32: "STRING_VALUE",
 * //     ChecksumCRC32C: "STRING_VALUE",
 * //     ChecksumCRC64NVME: "STRING_VALUE",
 * //     ChecksumSHA1: "STRING_VALUE",
 * //     ChecksumSHA256: "STRING_VALUE",
 * //     ChecksumSHA512: "STRING_VALUE",
 * //     ChecksumMD5: "STRING_VALUE",
 * //     ChecksumXXHASH64: "STRING_VALUE",
 * //     ChecksumXXHASH3: "STRING_VALUE",
 * //     ChecksumXXHASH128: "STRING_VALUE",
 * //   },
 * //   Expiration: "STRING_VALUE",
 * //   CopySourceVersionId: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * //   ServerSideEncryption: "AES256" || "aws:fsx" || "aws:backup" || "aws:kms" || "aws:kms:dsse",
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSECustomerKeyMD5: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * //   SSEKMSEncryptionContext: "STRING_VALUE",
 * //   BucketKeyEnabled: true || false,
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param CopyObjectCommandInput - {@link CopyObjectCommandInput}
 * @returns {@link CopyObjectCommandOutput}
 * @see {@link CopyObjectCommandInput} for command's `input` shape.
 * @see {@link CopyObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link ObjectNotInActiveTierError} (client fault)
 *
 * The source object of the COPY action is not in the active tier and is only stored in Amazon S3 Glacier.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To copy an object
 * ```javascript
 * // The following example copies an object from one bucket to another.
 * const input = {
 *   Bucket: "destinationbucket",
 *   CopySource: "/sourcebucket/HappyFacejpg",
 *   Key: "HappyFaceCopyjpg"
 * };
 * const command = new CopyObjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CopyObjectResult: {
 *     ETag: `"6805f2cfc46c0f04559748bb039d69ae"`,
 *     LastModified: "2016-12-15T17:38:53.000Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopyObjectCommand extends command<CopyObjectCommandInput, CopyObjectCommandOutput>(
  _ep1,
  _mw1,
  "CopyObject",
  CopyObject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyObjectRequest;
      output: CopyObjectOutput;
    };
    sdk: {
      input: CopyObjectCommandInput;
      output: CopyObjectCommandOutput;
    };
  };
}
