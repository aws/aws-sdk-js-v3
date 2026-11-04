// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw3, command } from "../commandBuilder";
import type { PutBucketEncryptionRequest } from "../models/models_0";
import { PutBucketEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBucketEncryptionCommand}.
 */
export interface PutBucketEncryptionCommandInput extends PutBucketEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketEncryptionCommand}.
 */
export interface PutBucketEncryptionCommandOutput extends __MetadataBearer {}

/**
 * This operation configures default encryption and Amazon S3 Bucket Keys for an existing bucket. You can also [block encryption types](https://docs.aws.amazon.com/AmazonS3/latest/API/API_BlockedEncryptionTypes.html) using this operation.
 *
 * > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * By default, all buckets have a default encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3).
 *
 * > **Note:**
 * >
 * > - **General purpose buckets**
 * >
 * >   - You can optionally configure default encryption for a bucket by using server-side encryption with Key Management Service (KMS) keys (SSE-KMS) or dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS). If you specify default encryption by using SSE-KMS, you can also configure [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html). For information about the bucket default encryption feature, see [Amazon S3 Bucket Default Encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) in the *Amazon S3 User Guide*.
 * >   - If you use PutBucketEncryption to set your [default bucket encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) to SSE-KMS, you should verify that your KMS key ID is correct. Amazon S3 doesn't validate the KMS key ID provided in PutBucketEncryption requests.
 * > - **Directory buckets** - You can optionally configure default encryption for a bucket by using server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
 * >
 * >   - We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your `CreateSession` requests or `PUT` object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information about the encryption overriding behaviors in directory buckets, see [Specifying server-side encryption with KMS for new object uploads](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-specifying-kms-encryption.html).
 * >   - Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket's lifetime. The [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) (`aws/s3`) isn't supported.
 * >   - S3 Bucket Keys are always enabled for `GET` and `PUT` operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html), [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html), [the Copy operation in Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops), or [the import jobs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job). In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
 * >   - When you specify an [KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
 * >   - For directory buckets, if you use PutBucketEncryption to set your [default bucket encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) to SSE-KMS, Amazon S3 validates the KMS key ID provided in PutBucketEncryption requests.
 *
 * > **Important:**
 * >
 * > If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner.
 * >
 * > Also, this action requires Amazon Web Services Signature Version 4. For more information, see [Authenticating Requests (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html).
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - The `s3:PutEncryptionConfiguration` permission is required in a policy. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html) in the *Amazon S3 User Guide*.
 *   - **Directory bucket permissions** - To grant access to this API operation, you must have the `s3express:PutEncryptionConfiguration` permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see [Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html) in the *Amazon S3 User Guide*.
 *
 *     To set a directory bucket default encryption with SSE-KMS, you must also have the `kms:GenerateDataKey` and the `kms:Decrypt` permissions in IAM identity-based policies and KMS key policies for the target KMS key.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `s3express-control.region-code.amazonaws.com`.
 *
 * The following operations are related to `PutBucketEncryption`:
 *
 * - [GetBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html)
 * - [DeleteBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketEncryptionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketEncryptionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutBucketEncryptionRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     Rules: [ // ServerSideEncryptionRules // required
 *       { // ServerSideEncryptionRule
 *         ApplyServerSideEncryptionByDefault: { // ServerSideEncryptionByDefault
 *           SSEAlgorithm: "AES256" || "aws:fsx" || "aws:backup" || "aws:kms" || "aws:kms:dsse", // required
 *           KMSMasterKeyID: "STRING_VALUE",
 *         },
 *         BucketKeyEnabled: true || false,
 *         BlockedEncryptionTypes: { // BlockedEncryptionTypes
 *           EncryptionType: [ // EncryptionTypeList
 *             "NONE" || "SSE-C",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketEncryptionCommandInput - {@link PutBucketEncryptionCommandInput}
 * @returns {@link PutBucketEncryptionCommandOutput}
 * @see {@link PutBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link PutBucketEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class PutBucketEncryptionCommand extends command<PutBucketEncryptionCommandInput, PutBucketEncryptionCommandOutput>(
  _ep3,
  _mw3,
  "PutBucketEncryption",
  PutBucketEncryption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketEncryptionRequest;
      output: {};
    };
    sdk: {
      input: PutBucketEncryptionCommandInput;
      output: PutBucketEncryptionCommandOutput;
    };
  };
}
