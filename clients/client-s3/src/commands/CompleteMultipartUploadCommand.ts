// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { CompleteMultipartUploadOutput, CompleteMultipartUploadRequest } from "../models/models_0";
import { CompleteMultipartUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CompleteMultipartUploadCommand}.
 */
export interface CompleteMultipartUploadCommandInput extends CompleteMultipartUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteMultipartUploadCommand}.
 */
export interface CompleteMultipartUploadCommandOutput extends CompleteMultipartUploadOutput, __MetadataBearer {}

/**
 * Completes a multipart upload by assembling previously uploaded parts.
 *
 * You first initiate the multipart upload and then upload all parts using the [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html) operation or the [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html) operation. After successfully uploading all relevant parts of an upload, you call this `CompleteMultipartUpload` operation to complete the upload. Upon receiving this request, Amazon S3 concatenates all the parts in ascending order by part number to create a new object. In the CompleteMultipartUpload request, you must provide the parts list and ensure that the parts list is complete. The CompleteMultipartUpload API operation concatenates the parts that you provide in the list. For each part in the list, you must provide the `PartNumber` value and the `ETag` value that are returned after that part was uploaded.
 *
 * The processing of a CompleteMultipartUpload request could take several minutes to finalize. After Amazon S3 begins processing the request, it sends an HTTP response header that specifies a `200 OK` response. While processing is in progress, Amazon S3 periodically sends white space characters to keep the connection from timing out. A request could fail after the initial `200 OK` response has been sent. This means that a `200 OK` response can contain either a success or an error. The error response might be embedded in the `200 OK` response. If you call this API operation directly, make sure to design your application to parse the contents of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throw an exception (or, for the SDKs that don't use exceptions, they return an error).
 *
 * Note that if `CompleteMultipartUpload` fails, applications should be prepared to retry any failed requests (including 500 error responses). For more information, see [Amazon S3 Error Best Practices](https://docs.aws.amazon.com/AmazonS3/latest/dev/ErrorBestPractices.html).
 *
 * > **Important:** You can't use `Content-Type: application/x-www-form-urlencoded` for the CompleteMultipartUpload requests. Also, if you don't provide a `Content-Type` header, `CompleteMultipartUpload` can still return a `200 OK` response.
 *
 * For more information about multipart uploads, see [Uploading Objects Using Multipart Upload](https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format `https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name`. Path-style requests are not supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - For information about permissions required to use the multipart upload API, see [Multipart Upload and Permissions](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html) in the *Amazon S3 User Guide*.
 *
 *     If you provide an [additional checksum value](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Checksum.html) in your `MultipartUpload` requests and the object is encrypted with Key Management Service, you must have permission to use the `kms:Decrypt` action for the `CompleteMultipartUpload` request to succeed.
 *   - **Directory bucket permissions** - To grant access to this API operation on a directory bucket, we recommend that you use the [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html) API operation for session-based authorization. Specifically, you grant the `s3express:CreateSession` permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the `CreateSession` API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another `CreateSession` API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html).
 *
 *     If the object is encrypted with SSE-KMS, you must also have the `kms:GenerateDataKey` and `kms:Decrypt` permissions in IAM identity-based policies and KMS key policies for the KMS key.
 *
 * - **Special errors**
 *
 *   - Error Code: `EntityTooSmall`
 *
 *     - Description: Your proposed upload is smaller than the minimum allowed object size. Each part must be at least 5 MB in size, except the last part.
 *     - HTTP Status Code: 400 Bad Request
 *   - Error Code: `InvalidPart`
 *
 *     - Description: One or more of the specified parts could not be found. The part might not have been uploaded, or the specified ETag might not have matched the uploaded part's ETag.
 *     - HTTP Status Code: 400 Bad Request
 *   - Error Code: `InvalidPartOrder`
 *
 *     - Description: The list of parts was not in ascending order. The parts list must be specified in order by part number.
 *     - HTTP Status Code: 400 Bad Request
 *   - Error Code: `NoSuchUpload`
 *
 *     - Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.
 *     - HTTP Status Code: 404 Not Found
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *
 * The following operations are related to `CompleteMultipartUpload`:
 *
 * - [CreateMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html)
 * - [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html)
 * - [AbortMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html)
 * - [ListParts](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html)
 * - [ListMultipartUploads](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CompleteMultipartUploadCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CompleteMultipartUploadCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // CompleteMultipartUploadRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   MultipartUpload: { // CompletedMultipartUpload
 *     Parts: [ // CompletedPartList
 *       { // CompletedPart
 *         ETag: "STRING_VALUE",
 *         ChecksumCRC32: "STRING_VALUE",
 *         ChecksumCRC32C: "STRING_VALUE",
 *         ChecksumCRC64NVME: "STRING_VALUE",
 *         ChecksumSHA1: "STRING_VALUE",
 *         ChecksumSHA256: "STRING_VALUE",
 *         ChecksumSHA512: "STRING_VALUE",
 *         ChecksumMD5: "STRING_VALUE",
 *         ChecksumXXHASH64: "STRING_VALUE",
 *         ChecksumXXHASH3: "STRING_VALUE",
 *         ChecksumXXHASH128: "STRING_VALUE",
 *         PartNumber: Number("int"),
 *       },
 *     ],
 *   },
 *   UploadId: "STRING_VALUE", // required
 *   ChecksumCRC32: "STRING_VALUE",
 *   ChecksumCRC32C: "STRING_VALUE",
 *   ChecksumCRC64NVME: "STRING_VALUE",
 *   ChecksumSHA1: "STRING_VALUE",
 *   ChecksumSHA256: "STRING_VALUE",
 *   ChecksumSHA512: "STRING_VALUE",
 *   ChecksumMD5: "STRING_VALUE",
 *   ChecksumXXHASH64: "STRING_VALUE",
 *   ChecksumXXHASH3: "STRING_VALUE",
 *   ChecksumXXHASH128: "STRING_VALUE",
 *   ChecksumType: "COMPOSITE" || "FULL_OBJECT",
 *   MpuObjectSize: Number("long"),
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   IfMatch: "STRING_VALUE",
 *   IfNoneMatch: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 * };
 * const command = new CompleteMultipartUploadCommand(input);
 * const response = await client.send(command);
 * // { // CompleteMultipartUploadOutput
 * //   Location: "STRING_VALUE",
 * //   Bucket: "STRING_VALUE",
 * //   Key: "STRING_VALUE",
 * //   Expiration: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
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
 * //   ServerSideEncryption: "AES256" || "aws:fsx" || "aws:backup" || "aws:kms" || "aws:kms:dsse",
 * //   VersionId: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * //   BucketKeyEnabled: true || false,
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param CompleteMultipartUploadCommandInput - {@link CompleteMultipartUploadCommandInput}
 * @returns {@link CompleteMultipartUploadCommandOutput}
 * @see {@link CompleteMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To complete multipart upload
 * ```javascript
 * // The following example completes a multipart upload.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "bigobject",
 *   MultipartUpload: {
 *     Parts: [
 *       {
 *         ETag: `"d8c2eafd90c266e19ab9dcacc479f8af"`,
 *         PartNumber: 1
 *       },
 *       {
 *         ETag: `"d8c2eafd90c266e19ab9dcacc479f8af"`,
 *         PartNumber: 2
 *       }
 *     ]
 *   },
 *   UploadId: "7YPBOJuoFiQ9cz4P3Pe6FIZwO4f7wN93uHsNBEw97pl5eNwzExg0LAT2dUN91cOmrEQHDsP3WA60CEg--"
 * };
 * const command = new CompleteMultipartUploadCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Bucket: "acexamplebucket",
 *   ETag: `"4d9031c7644d8081c2829f4ea23c55f7-2"`,
 *   Key: "bigobject",
 *   Location: "https://examplebucket.s3.<Region>.amazonaws.com/bigobject"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CompleteMultipartUploadCommand extends command<CompleteMultipartUploadCommandInput, CompleteMultipartUploadCommandOutput>(
  _ep0,
  _mw1,
  "CompleteMultipartUpload",
  CompleteMultipartUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteMultipartUploadRequest;
      output: CompleteMultipartUploadOutput;
    };
    sdk: {
      input: CompleteMultipartUploadCommandInput;
      output: CompleteMultipartUploadCommandOutput;
    };
  };
}
