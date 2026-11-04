// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { ListPartsOutput, ListPartsRequest } from "../models/models_0";
import { ListParts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPartsCommand}.
 */
export interface ListPartsCommandInput extends ListPartsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartsCommand}.
 */
export interface ListPartsCommandOutput extends ListPartsOutput, __MetadataBearer {}

/**
 * Lists the parts that have been uploaded for a specific multipart upload.
 *
 * To use this operation, you must provide the `upload ID` in the request. You obtain this uploadID by sending the initiate multipart upload request through [CreateMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html).
 *
 * The `ListParts` request returns a maximum of 1,000 uploaded parts. The limit of 1,000 parts is also the default value. You can restrict the number of parts in a response by specifying the `max-parts` request parameter. If your multipart upload consists of more than 1,000 parts, the response returns an `IsTruncated` field with the value of `true`, and a `NextPartNumberMarker` element. To list remaining uploaded parts, in subsequent `ListParts` requests, include the `part-number-marker` query string parameter and set its value to the `NextPartNumberMarker` field value from the previous response.
 *
 * For more information on multipart uploads, see [Uploading Objects Using Multipart Upload](https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format `https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name`. Path-style requests are not supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - For information about permissions required to use the multipart upload API, see [Multipart Upload and Permissions](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html) in the *Amazon S3 User Guide*.
 *
 *     If the upload was created using server-side encryption with Key Management Service (KMS) keys (SSE-KMS) or dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), you must have permission to the `kms:Decrypt` action for the `ListParts` request to succeed.
 *   - **Directory bucket permissions** - To grant access to this API operation on a directory bucket, we recommend that you use the [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html) API operation for session-based authorization. Specifically, you grant the `s3express:CreateSession` permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the `CreateSession` API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another `CreateSession` API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html).
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *
 * The following operations are related to `ListParts`:
 *
 * - [CreateMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html)
 * - [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html)
 * - [CompleteMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html)
 * - [AbortMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html)
 * - [GetObjectAttributes](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html)
 * - [ListMultipartUploads](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListPartsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListPartsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // ListPartsRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   MaxParts: Number("int"),
 *   PartNumberMarker: "STRING_VALUE",
 *   UploadId: "STRING_VALUE", // required
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 * };
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartsOutput
 * //   AbortDate: new Date("TIMESTAMP"),
 * //   AbortRuleId: "STRING_VALUE",
 * //   Bucket: "STRING_VALUE",
 * //   Key: "STRING_VALUE",
 * //   UploadId: "STRING_VALUE",
 * //   PartNumberMarker: "STRING_VALUE",
 * //   NextPartNumberMarker: "STRING_VALUE",
 * //   MaxParts: Number("int"),
 * //   IsTruncated: true || false,
 * //   Parts: [ // Parts
 * //     { // Part
 * //       PartNumber: Number("int"),
 * //       LastModified: new Date("TIMESTAMP"),
 * //       ETag: "STRING_VALUE",
 * //       Size: Number("long"),
 * //       ChecksumCRC32: "STRING_VALUE",
 * //       ChecksumCRC32C: "STRING_VALUE",
 * //       ChecksumCRC64NVME: "STRING_VALUE",
 * //       ChecksumSHA1: "STRING_VALUE",
 * //       ChecksumSHA256: "STRING_VALUE",
 * //       ChecksumSHA512: "STRING_VALUE",
 * //       ChecksumMD5: "STRING_VALUE",
 * //       ChecksumXXHASH64: "STRING_VALUE",
 * //       ChecksumXXHASH3: "STRING_VALUE",
 * //       ChecksumXXHASH128: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Initiator: { // Initiator
 * //     ID: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //   },
 * //   Owner: { // Owner
 * //     DisplayName: "STRING_VALUE",
 * //     ID: "STRING_VALUE",
 * //   },
 * //   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE" || "FSX_OPENZFS" || "FSX_ONTAP" || "AWS_BACKUP_WARM" || "AWS_BACKUP_LOW_COST_WARM",
 * //   RequestCharged: "requester",
 * //   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 * //   ChecksumType: "COMPOSITE" || "FULL_OBJECT",
 * // };
 *
 * ```
 *
 * @param ListPartsCommandInput - {@link ListPartsCommandInput}
 * @returns {@link ListPartsCommandOutput}
 * @see {@link ListPartsCommandInput} for command's `input` shape.
 * @see {@link ListPartsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To list parts of a multipart upload.
 * ```javascript
 * // The following example lists parts uploaded for a specific multipart upload.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "bigobject",
 *   UploadId: "example7YPBOJuoFiQ9cz4P3Pe6FIZwO4f7wN93uHsNBEw97pl5eNwzExg0LAT2dUN91cOmrEQHDsP3WA60CEg--"
 * };
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Initiator: {
 *     DisplayName: "owner-display-name",
 *     ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   },
 *   Owner: {
 *     DisplayName: "owner-display-name",
 *     ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   },
 *   Parts: [
 *     {
 *       ETag: `"d8c2eafd90c266e19ab9dcacc479f8af"`,
 *       LastModified: "2016-12-16T00:11:42.000Z",
 *       PartNumber: 1,
 *       Size: 26246026
 *     },
 *     {
 *       ETag: `"d8c2eafd90c266e19ab9dcacc479f8af"`,
 *       LastModified: "2016-12-16T00:15:01.000Z",
 *       PartNumber: 2,
 *       Size: 26246026
 *     }
 *   ],
 *   StorageClass: "STANDARD"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPartsCommand extends command<ListPartsCommandInput, ListPartsCommandOutput>(
  _ep0,
  _mw1,
  "ListParts",
  ListParts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPartsRequest;
      output: ListPartsOutput;
    };
    sdk: {
      input: ListPartsCommandInput;
      output: ListPartsCommandOutput;
    };
  };
}
