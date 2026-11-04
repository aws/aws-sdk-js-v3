// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep4, _mw1, command } from "../commandBuilder";
import type { UploadPartCopyOutput, UploadPartCopyRequest } from "../models/models_1";
import { UploadPartCopy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UploadPartCopyCommand}.
 */
export interface UploadPartCopyCommandInput extends UploadPartCopyRequest {}
/**
 * @public
 *
 * The output of {@link UploadPartCopyCommand}.
 */
export interface UploadPartCopyCommandOutput extends UploadPartCopyOutput, __MetadataBearer {}

/**
 * Uploads a part by copying data from an existing object as data source. To specify the data source, you add the request header `x-amz-copy-source` in your request. To specify a byte range, you add the request header `x-amz-copy-source-range` in your request.
 *
 * For information about maximum and minimum part sizes and other multipart upload specifications, see [Multipart upload limits](https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** Instead of copying data from an existing object as part data, you might use the [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html) action to upload new data as a part of an object in your request.
 *
 * You must initiate a multipart upload before you can upload any part. In response to your initiate request, Amazon S3 returns the upload ID, a unique identifier that you must include in your upload part request.
 *
 * For conceptual information about multipart uploads, see [Uploading Objects Using Multipart Upload](https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html) in the *Amazon S3 User Guide*. For information about copying objects using a single atomic action vs. a multipart upload, see [Operations on Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectOperations.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format `https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name`. Path-style requests are not supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **Authentication and authorization**
 *
 *   All `UploadPartCopy` requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the `x-amz-` prefix, including `x-amz-copy-source`, must be signed. For more information, see [REST Authentication](https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html).
 *
 *   **Directory buckets** - You must use IAM credentials to authenticate and authorize your access to the `UploadPartCopy` API operation, instead of using the temporary security credentials through the `CreateSession` API operation.
 *
 *   Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf.
 *
 * - **Permissions**
 *
 *   You must have `READ` access to the source object and `WRITE` access to the destination bucket.
 *
 *   - **General purpose bucket permissions** - You must have the permissions in a policy based on the bucket types of your source bucket and destination bucket in an `UploadPartCopy` operation.
 *
 *     - If the source object is in a general purpose bucket, you must have the **`s3:GetObject`** permission to read the source object that is being copied.
 *     - If the destination bucket is a general purpose bucket, you must have the **`s3:PutObject`** permission to write the object copy to the destination bucket.
 *     - To perform a multipart upload with encryption using an Key Management Service key, the requester must have permission to the `kms:Decrypt` and `kms:GenerateDataKey` actions on the key. The requester must also have permissions for the `kms:GenerateDataKey` action for the `CreateMultipartUpload` API. Then, the requester needs permissions for the `kms:Decrypt` action on the `UploadPart` and `UploadPartCopy` APIs. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information about KMS permissions, see [Protecting data using server-side encryption with KMS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html) in the *Amazon S3 User Guide*. For information about the permissions required to use the multipart upload API, see [Multipart upload and permissions](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html) and [Multipart upload API and permissions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html#mpuAndPermissions) in the *Amazon S3 User Guide*.
 *   - **Directory bucket permissions** - You must have permissions in a bucket policy or an IAM identity-based policy based on the source and destination bucket types in an `UploadPartCopy` operation.
 *
 *     - If the source object that you want to copy is in a directory bucket, you must have the **`s3express:CreateSession`** permission in the `Action` element of a policy to read the object. If no session mode is specified, the session will be created with the maximum allowable privilege, attempting `ReadWrite` first, then `ReadOnly` if `ReadWrite` is not permitted. If you want to explicitly restrict the access to be read-only, you can set the `s3express:SessionMode` condition key to `ReadOnly` on the copy source bucket.
 *     - If the copy destination is a directory bucket, you must have the **`s3express:CreateSession`** permission in the `Action` element of a policy to write the object to the destination. The `s3express:SessionMode` condition key cannot be set to `ReadOnly` on the copy destination.
 *
 *     If the object is encrypted with SSE-KMS, you must also have the `kms:GenerateDataKey` and `kms:Decrypt` permissions in IAM identity-based policies and KMS key policies for the KMS key.
 *
 *     For example policies, see [Example bucket policies for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html) and [Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-identity-policies.html) in the *Amazon S3 User Guide*.
 *
 * - **Encryption**
 *
 *   - **General purpose buckets** - For information about using server-side encryption with customer-provided encryption keys with the `UploadPartCopy` operation, see [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html) and [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html).
 *
 *     > **Note:** If you have server-side encryption with customer-provided keys (SSE-C) blocked for your general purpose bucket, you will get an HTTP 403 Access Denied error when you specify the SSE-C request headers while writing new data to your bucket. For more information, see [Blocking or unblocking SSE-C for a general purpose bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/blocking-unblocking-s3-c-encryption-gpb.html).
 *   - **Directory buckets** - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (`AES256`) and server-side encryption with KMS keys (SSE-KMS) (`aws:kms`). For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html) in the *Amazon S3 User Guide*.
 *
 *     > **Note:** For directory buckets, when you perform a `CreateMultipartUpload` operation and an `UploadPartCopy` operation, the request headers you provide in the `CreateMultipartUpload` request must match the default encryption configuration of the destination bucket.
 *
 *     S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html). In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
 *
 * - **Special errors**
 *
 *   - Error Code: `NoSuchUpload`
 *
 *     - Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.
 *     - HTTP Status Code: 404 Not Found
 *   - Error Code: `InvalidRequest`
 *
 *     - Description: The specified copy source is not supported as a byte-range copy source.
 *     - HTTP Status Code: 400 Bad Request
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *
 * The following operations are related to `UploadPartCopy`:
 *
 * - [CreateMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html)
 * - [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html)
 * - [CompleteMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html)
 * - [AbortMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html)
 * - [ListParts](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html)
 * - [ListMultipartUploads](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, UploadPartCopyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, UploadPartCopyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // UploadPartCopyRequest
 *   Bucket: "STRING_VALUE", // required
 *   CopySource: "STRING_VALUE", // required
 *   CopySourceIfMatch: "STRING_VALUE",
 *   CopySourceIfModifiedSince: new Date("TIMESTAMP"),
 *   CopySourceIfNoneMatch: "STRING_VALUE",
 *   CopySourceIfUnmodifiedSince: new Date("TIMESTAMP"),
 *   CopySourceRange: "STRING_VALUE",
 *   Key: "STRING_VALUE", // required
 *   PartNumber: Number("int"), // required
 *   UploadId: "STRING_VALUE", // required
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   CopySourceSSECustomerAlgorithm: "STRING_VALUE",
 *   CopySourceSSECustomerKey: "STRING_VALUE",
 *   CopySourceSSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ExpectedSourceBucketOwner: "STRING_VALUE",
 * };
 * const command = new UploadPartCopyCommand(input);
 * const response = await client.send(command);
 * // { // UploadPartCopyOutput
 * //   CopySourceVersionId: "STRING_VALUE",
 * //   CopyPartResult: { // CopyPartResult
 * //     ETag: "STRING_VALUE",
 * //     LastModified: new Date("TIMESTAMP"),
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
 * //   ServerSideEncryption: "AES256" || "aws:fsx" || "aws:backup" || "aws:kms" || "aws:kms:dsse",
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSECustomerKeyMD5: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * //   BucketKeyEnabled: true || false,
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param UploadPartCopyCommandInput - {@link UploadPartCopyCommandInput}
 * @returns {@link UploadPartCopyCommandOutput}
 * @see {@link UploadPartCopyCommandInput} for command's `input` shape.
 * @see {@link UploadPartCopyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To upload a part by copying byte range from an existing object as data source
 * ```javascript
 * // The following example uploads a part of a multipart upload by copying a specified byte range from an existing object as data source.
 * const input = {
 *   Bucket: "examplebucket",
 *   CopySource: "/bucketname/sourceobjectkey",
 *   CopySourceRange: "bytes=1-100000",
 *   Key: "examplelargeobject",
 *   PartNumber: 2,
 *   UploadId: "exampleuoh_10OhKhT7YukE9bjzTPRiuaCotmZM_pFngJFir9OZNrSr5cWa3cq3LZSUsfjI4FI7PkP91We7Nrw--"
 * };
 * const command = new UploadPartCopyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CopyPartResult: {
 *     ETag: `"65d16d19e65a7508a51f043180edcc36"`,
 *     LastModified: "2016-12-29T21:44:28.000Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @example To upload a part by copying data from an existing object as data source
 * ```javascript
 * // The following example uploads a part of a multipart upload by copying data from an existing object as data source.
 * const input = {
 *   Bucket: "examplebucket",
 *   CopySource: "/bucketname/sourceobjectkey",
 *   Key: "examplelargeobject",
 *   PartNumber: 1,
 *   UploadId: "exampleuoh_10OhKhT7YukE9bjzTPRiuaCotmZM_pFngJFir9OZNrSr5cWa3cq3LZSUsfjI4FI7PkP91We7Nrw--"
 * };
 * const command = new UploadPartCopyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CopyPartResult: {
 *     ETag: `"b0c6f0e7e054ab8fa2536a2677f8734d"`,
 *     LastModified: "2016-12-29T21:24:43.000Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UploadPartCopyCommand extends command<UploadPartCopyCommandInput, UploadPartCopyCommandOutput>(
  _ep4,
  _mw1,
  "UploadPartCopy",
  UploadPartCopy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadPartCopyRequest;
      output: UploadPartCopyOutput;
    };
    sdk: {
      input: UploadPartCopyCommandInput;
      output: UploadPartCopyCommandOutput;
    };
  };
}
