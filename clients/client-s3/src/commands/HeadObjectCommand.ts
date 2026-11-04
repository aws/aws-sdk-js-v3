// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw8, command } from "../commandBuilder";
import type { HeadObjectOutput, HeadObjectRequest } from "../models/models_0";
import { HeadObject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HeadObjectCommand}.
 */
export interface HeadObjectCommandInput extends HeadObjectRequest {}
/**
 * @public
 *
 * The output of {@link HeadObjectCommand}.
 */
export interface HeadObjectCommandOutput extends HeadObjectOutput, __MetadataBearer {}

/**
 * The `HEAD` operation retrieves metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata.
 *
 * > **Note:** A `HEAD` request has the same options as a `GET` operation on an object. The response is identical to the `GET` response except that there is no response body. Because of this, if the `HEAD` request generates an error, it returns a generic code, such as `400 Bad Request`, `403 Forbidden`, `404 Not Found`, `405 Method Not Allowed`, `412 Precondition Failed`, or `304 Not Modified`. It's not possible to retrieve the exact exception of these error codes.
 *
 * Request headers are limited to 8 KB in size. For more information, see [Common Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTCommonRequestHeaders.html).
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - To use `HEAD`, you must have the `s3:GetObject` permission. You need the relevant read object (or version) permission for this operation. For more information, see [Actions, resources, and condition keys for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html) in the *Amazon S3 User Guide*. For more information about the permissions to S3 API operations by S3 resource types, see [Required permissions for Amazon S3 API operations](/AmazonS3/latest/userguide/using-with-s3-policy-actions.html) in the *Amazon S3 User Guide*.
 *
 *     If the object you request doesn't exist, the error that Amazon S3 returns depends on whether you also have the `s3:ListBucket` permission.
 *
 *     - If you have the `s3:ListBucket` permission on the bucket, Amazon S3 returns an HTTP status code `404 Not Found` error.
 *     - If you don’t have the `s3:ListBucket` permission, Amazon S3 returns an HTTP status code `403 Forbidden` error.
 *   - **Directory bucket permissions** - To grant access to this API operation on a directory bucket, we recommend that you use the [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html) API operation for session-based authorization. Specifically, you grant the `s3express:CreateSession` permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the `CreateSession` API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another `CreateSession` API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html).
 *
 *     If you enable `x-amz-checksum-mode` in the request and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the `kms:GenerateDataKey` and `kms:Decrypt` permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object.
 *
 * - **Encryption**
 *
 *   > **Note:** Encryption request headers, like `x-amz-server-side-encryption`, should not be sent for `HEAD` requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). The `x-amz-server-side-encryption` header is used when you `PUT` an object to S3 and want to specify the encryption method. If you include this header in a `HEAD` request for an object that uses these types of keys, you’ll get an HTTP `400 Bad Request` error. It's because the encryption method can't be changed when you retrieve the object.
 *
 *   If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers to provide the encryption key for the server to be able to retrieve the object's metadata. The headers are:
 *
 *   - `x-amz-server-side-encryption-customer-algorithm`
 *   - `x-amz-server-side-encryption-customer-key`
 *   - `x-amz-server-side-encryption-customer-key-MD5`
 *
 *   For more information about SSE-C, see [Server-Side Encryption (Using Customer-Provided Encryption Keys)](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
 *
 *   > **Note:** **Directory bucket** - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. SSE-C isn't supported. For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html) in the *Amazon S3 User Guide*.
 *
 * - **Versioning**
 *
 *   - If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes `x-amz-delete-marker: true` in the response.
 *   - If the specified version is a delete marker, the response returns a `405 Method Not Allowed` error and the `Last-Modified: timestamp` response header.
 *
 *   > **Note:**
 *   >
 *   > - **Directory buckets** - Delete marker is not supported for directory buckets.
 *   > - **Directory buckets** - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the `null` value of the version ID is supported by directory buckets. You can only specify `null` to the `versionId` query parameter in the request.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *
 *   > **Note:** For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format `https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name`. Path-style requests are not supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `HeadObject`:
 *
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 * - [GetObjectAttributes](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, HeadObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, HeadObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // HeadObjectRequest
 *   Bucket: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 *   IfModifiedSince: new Date("TIMESTAMP"),
 *   IfNoneMatch: "STRING_VALUE",
 *   IfUnmodifiedSince: new Date("TIMESTAMP"),
 *   Key: "STRING_VALUE", // required
 *   Range: "STRING_VALUE",
 *   ResponseCacheControl: "STRING_VALUE",
 *   ResponseContentDisposition: "STRING_VALUE",
 *   ResponseContentEncoding: "STRING_VALUE",
 *   ResponseContentLanguage: "STRING_VALUE",
 *   ResponseContentType: "STRING_VALUE",
 *   ResponseExpires: new Date("TIMESTAMP"),
 *   VersionId: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   PartNumber: Number("int"),
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ChecksumMode: "ENABLED",
 * };
 * const command = new HeadObjectCommand(input);
 * const response = await client.send(command);
 * // { // HeadObjectOutput
 * //   DeleteMarker: true || false,
 * //   AcceptRanges: "STRING_VALUE",
 * //   Expiration: "STRING_VALUE",
 * //   Restore: "STRING_VALUE",
 * //   ArchiveStatus: "ARCHIVE_ACCESS" || "DEEP_ARCHIVE_ACCESS",
 * //   LastModified: new Date("TIMESTAMP"),
 * //   ContentLength: Number("long"),
 * //   ChecksumCRC32: "STRING_VALUE",
 * //   ChecksumCRC32C: "STRING_VALUE",
 * //   ChecksumCRC64NVME: "STRING_VALUE",
 * //   ChecksumSHA1: "STRING_VALUE",
 * //   ChecksumSHA256: "STRING_VALUE",
 * //   ChecksumSHA512: "STRING_VALUE",
 * //   ChecksumMD5: "STRING_VALUE",
 * //   ChecksumXXHASH64: "STRING_VALUE",
 * //   ChecksumXXHASH3: "STRING_VALUE",
 * //   ChecksumXXHASH128: "STRING_VALUE",
 * //   ChecksumType: "COMPOSITE" || "FULL_OBJECT",
 * //   ETag: "STRING_VALUE",
 * //   MissingMeta: Number("int"),
 * //   VersionId: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * //   ContentDisposition: "STRING_VALUE",
 * //   ContentEncoding: "STRING_VALUE",
 * //   ContentLanguage: "STRING_VALUE",
 * //   ContentType: "STRING_VALUE",
 * //   ContentRange: "STRING_VALUE",
 * //   Expires: new Date("TIMESTAMP"),
 * //   ExpiresString: "STRING_VALUE",
 * //   WebsiteRedirectLocation: "STRING_VALUE",
 * //   ServerSideEncryption: "AES256" || "aws:fsx" || "aws:backup" || "aws:kms" || "aws:kms:dsse",
 * //   Metadata: { // Metadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSECustomerKeyMD5: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * //   BucketKeyEnabled: true || false,
 * //   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE" || "FSX_OPENZFS" || "FSX_ONTAP" || "AWS_BACKUP_WARM" || "AWS_BACKUP_LOW_COST_WARM",
 * //   RequestCharged: "requester",
 * //   ReplicationStatus: "COMPLETE" || "PENDING" || "FAILED" || "REPLICA" || "COMPLETED",
 * //   PartsCount: Number("int"),
 * //   TagCount: Number("int"),
 * //   ObjectLockMode: "GOVERNANCE" || "COMPLIANCE",
 * //   ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
 * //   ObjectLockLegalHoldStatus: "ON" || "OFF",
 * //   ObjectLockEventHold: "ON" || "OFF",
 * //   ObjectLockEventHoldDurationDays: Number("int"),
 * //   ObjectLockEventHoldDurationYears: Number("int"),
 * // };
 *
 * ```
 *
 * @param HeadObjectCommandInput - {@link HeadObjectCommandInput}
 * @returns {@link HeadObjectCommandOutput}
 * @see {@link HeadObjectCommandInput} for command's `input` shape.
 * @see {@link HeadObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NotFound} (client fault)
 *
 * The specified content does not exist.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To retrieve metadata of an object without returning the object itself
 * ```javascript
 * // The following example retrieves an object metadata.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "HappyFace.jpg"
 * };
 * const command = new HeadObjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AcceptRanges: "bytes",
 *   ContentLength: 3191,
 *   ContentType: "image/jpeg",
 *   ETag: `"6805f2cfc46c0f04559748bb039d69ae"`,
 *   LastModified: "2016-12-15T01:19:41.000Z",
 *   Metadata:   { /* empty *\/ },
 *   VersionId: "null"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class HeadObjectCommand extends command<HeadObjectCommandInput, HeadObjectCommandOutput>(
  _ep0,
  _mw8,
  "HeadObject",
  HeadObject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HeadObjectRequest;
      output: HeadObjectOutput;
    };
    sdk: {
      input: HeadObjectCommandInput;
      output: HeadObjectCommandOutput;
    };
  };
}
