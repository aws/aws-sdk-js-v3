// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw1, command } from "../commandBuilder";
import type { GetObjectAttributesOutput, GetObjectAttributesRequest } from "../models/models_0";
import { GetObjectAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetObjectAttributesCommand}.
 */
export interface GetObjectAttributesCommandInput extends GetObjectAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectAttributesCommand}.
 */
export interface GetObjectAttributesCommandOutput extends GetObjectAttributesOutput, __MetadataBearer {}

/**
 * Retrieves all of the metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata.
 *
 * `GetObjectAttributes` combines the functionality of `HeadObject` and `ListParts`. All of the data returned with both of those individual calls can be returned with a single call to `GetObjectAttributes`.
 *
 * > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format `https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name`. Path-style requests are not supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - To use `GetObjectAttributes`, you must have READ access to the object.
 *
 *     The other permissions that you need to use this operation depend on whether the bucket is versioned and if a version ID is passed in the `GetObjectAttributes` request.
 *
 *     - If you pass a version ID in your request, you need both the `s3:GetObjectVersion` and `s3:GetObjectVersionAttributes` permissions.
 *     - If you do not pass a version ID in your request, you need the `s3:GetObject` and `s3:GetObjectAttributes` permissions.
 *
 *     For more information, see [Specifying Permissions in a Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html) in the *Amazon S3 User Guide*.
 *
 *     If the object that you request does not exist, the error Amazon S3 returns depends on whether you also have the `s3:ListBucket` permission.
 *
 *     - If you have the `s3:ListBucket` permission on the bucket, Amazon S3 returns an HTTP status code `404 Not Found` ("no such key") error.
 *     - If you don't have the `s3:ListBucket` permission, Amazon S3 returns an HTTP status code `403 Forbidden` ("access denied") error.
 *   - **Directory bucket permissions** - To grant access to this API operation on a directory bucket, we recommend that you use the [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html) API operation for session-based authorization. Specifically, you grant the `s3express:CreateSession` permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the `CreateSession` API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another `CreateSession` API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html).
 *
 *     If the object is encrypted with SSE-KMS, you must also have the `kms:GenerateDataKey` and `kms:Decrypt` permissions in IAM identity-based policies and KMS key policies for the KMS key.
 *
 * - **Encryption**
 *
 *   > **Note:** Encryption request headers, like `x-amz-server-side-encryption`, should not be sent for `HEAD` requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). The `x-amz-server-side-encryption` header is used when you `PUT` an object to S3 and want to specify the encryption method. If you include this header in a `GET` request for an object that uses these types of keys, you’ll get an HTTP `400 Bad Request` error. It's because the encryption method can't be changed when you retrieve the object.
 *
 *   If you encrypted an object when you stored the object in Amazon S3 by using server-side encryption with customer-provided encryption keys (SSE-C), then when you retrieve the metadata from the object, you must use the following headers. These headers provide the server with the encryption key required to retrieve the object's metadata. The headers are:
 *
 *   - `x-amz-server-side-encryption-customer-algorithm`
 *   - `x-amz-server-side-encryption-customer-key`
 *   - `x-amz-server-side-encryption-customer-key-MD5`
 *
 *   For more information about SSE-C, see [Server-Side Encryption (Using Customer-Provided Encryption Keys)](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
 *
 *   > **Note:** **Directory bucket permissions** - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (`AES256`) and server-side encryption with KMS keys (SSE-KMS) (`aws:kms`). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your `CreateSession` requests or `PUT` object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html) in the *Amazon S3 User Guide*. For more information about the encryption overriding behaviors in directory buckets, see [Specifying server-side encryption with KMS for new object uploads](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-specifying-kms-encryption.html).
 *
 * - **Versioning**
 *
 *   **Directory buckets** - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the `null` value of the version ID is supported by directory buckets. You can only specify `null` to the `versionId` query parameter in the request.
 *
 * - **Conditional request headers**
 *
 *   Consider the following when using request headers:
 *
 *   - If both of the `If-Match` and `If-Unmodified-Since` headers are present in the request as follows, then Amazon S3 returns the HTTP status code `200 OK` and the data requested:
 *
 *     - `If-Match` condition evaluates to `true`.
 *     - `If-Unmodified-Since` condition evaluates to `false`.
 *
 *     For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
 *   - If both of the `If-None-Match` and `If-Modified-Since` headers are present in the request as follows, then Amazon S3 returns the HTTP status code `304 Not Modified`:
 *
 *     - `If-None-Match` condition evaluates to `false`.
 *     - `If-Modified-Since` condition evaluates to `true`.
 *
 *     For more information about conditional requests, see [RFC 7232](https://tools.ietf.org/html/rfc7232).
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *
 * The following actions are related to `GetObjectAttributes`:
 *
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 * - [GetObjectAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html)
 * - [GetObjectLegalHold](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html)
 * - [GetObjectLockConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html)
 * - [GetObjectRetention](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html)
 * - [GetObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html)
 * - [HeadObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html)
 * - [ListParts](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectAttributesCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectAttributesCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetObjectAttributesRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   MaxParts: Number("int"),
 *   PartNumberMarker: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ObjectAttributes: [ // ObjectAttributesList // required
 *     "ETag" || "Checksum" || "ObjectParts" || "StorageClass" || "ObjectSize",
 *   ],
 * };
 * const command = new GetObjectAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectAttributesOutput
 * //   DeleteMarker: true || false,
 * //   LastModified: new Date("TIMESTAMP"),
 * //   VersionId: "STRING_VALUE",
 * //   RequestCharged: "requester",
 * //   ETag: "STRING_VALUE",
 * //   Checksum: { // Checksum
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
 * //     ChecksumType: "COMPOSITE" || "FULL_OBJECT",
 * //   },
 * //   ObjectParts: { // GetObjectAttributesParts
 * //     TotalPartsCount: Number("int"),
 * //     PartNumberMarker: "STRING_VALUE",
 * //     NextPartNumberMarker: "STRING_VALUE",
 * //     MaxParts: Number("int"),
 * //     IsTruncated: true || false,
 * //     Parts: [ // PartsList
 * //       { // ObjectPart
 * //         PartNumber: Number("int"),
 * //         Size: Number("long"),
 * //         ChecksumCRC32: "STRING_VALUE",
 * //         ChecksumCRC32C: "STRING_VALUE",
 * //         ChecksumCRC64NVME: "STRING_VALUE",
 * //         ChecksumSHA1: "STRING_VALUE",
 * //         ChecksumSHA256: "STRING_VALUE",
 * //         ChecksumSHA512: "STRING_VALUE",
 * //         ChecksumMD5: "STRING_VALUE",
 * //         ChecksumXXHASH64: "STRING_VALUE",
 * //         ChecksumXXHASH3: "STRING_VALUE",
 * //         ChecksumXXHASH128: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE" || "FSX_OPENZFS" || "FSX_ONTAP" || "AWS_BACKUP_WARM" || "AWS_BACKUP_LOW_COST_WARM",
 * //   ObjectSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetObjectAttributesCommandInput - {@link GetObjectAttributesCommandInput}
 * @returns {@link GetObjectAttributesCommandOutput}
 * @see {@link GetObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link GetObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchKey} (client fault)
 *
 * The specified key does not exist.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class GetObjectAttributesCommand extends command<GetObjectAttributesCommandInput, GetObjectAttributesCommandOutput>(
  _ep5,
  _mw1,
  "GetObjectAttributes",
  GetObjectAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetObjectAttributesRequest;
      output: GetObjectAttributesOutput;
    };
    sdk: {
      input: GetObjectAttributesCommandInput;
      output: GetObjectAttributesCommandOutput;
    };
  };
}
