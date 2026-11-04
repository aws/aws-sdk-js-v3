// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketEncryptionOutput, GetBucketEncryptionRequest } from "../models/models_0";
import { GetBucketEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketEncryptionCommand}.
 */
export interface GetBucketEncryptionCommandInput extends GetBucketEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketEncryptionCommand}.
 */
export interface GetBucketEncryptionCommandOutput extends GetBucketEncryptionOutput, __MetadataBearer {}

/**
 * Returns the default encryption configuration for an Amazon S3 bucket. By default, all buckets have a default encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). This operation also returns the [BucketKeyEnabled](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ServerSideEncryptionRule.html#AmazonS3-Type-ServerSideEncryptionRule-BucketKeyEnabled) and [BlockedEncryptionTypes](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ServerSideEncryptionRule.html#AmazonS3-Type-ServerSideEncryptionRule-BlockedEncryptionTypes) statuses.
 *
 * > **Note:**
 * >
 * > - **General purpose buckets** - For information about the bucket default encryption feature, see [Amazon S3 Bucket Default Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html) in the *Amazon S3 User Guide*.
 * > - **Directory buckets** - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. For information about the default encryption configuration in directory buckets, see [Setting default server-side encryption behavior for directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-bucket-encryption.html).
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - The `s3:GetEncryptionConfiguration` permission is required in a policy. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
 *   - **Directory bucket permissions** - To grant access to this API operation, you must have the `s3express:GetEncryptionConfiguration` permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see [Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html) in the *Amazon S3 User Guide*.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `s3express-control.region-code.amazonaws.com`.
 *
 * The following operations are related to `GetBucketEncryption`:
 *
 * - [PutBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html)
 * - [DeleteBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketEncryptionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketEncryptionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketEncryptionRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketEncryptionOutput
 * //   ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //     Rules: [ // ServerSideEncryptionRules // required
 * //       { // ServerSideEncryptionRule
 * //         ApplyServerSideEncryptionByDefault: { // ServerSideEncryptionByDefault
 * //           SSEAlgorithm: "AES256" || "aws:fsx" || "aws:backup" || "aws:kms" || "aws:kms:dsse", // required
 * //           KMSMasterKeyID: "STRING_VALUE",
 * //         },
 * //         BucketKeyEnabled: true || false,
 * //         BlockedEncryptionTypes: { // BlockedEncryptionTypes
 * //           EncryptionType: [ // EncryptionTypeList
 * //             "NONE" || "SSE-C",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketEncryptionCommandInput - {@link GetBucketEncryptionCommandInput}
 * @returns {@link GetBucketEncryptionCommandOutput}
 * @see {@link GetBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link GetBucketEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class GetBucketEncryptionCommand extends command<GetBucketEncryptionCommandInput, GetBucketEncryptionCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketEncryption",
  GetBucketEncryption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketEncryptionRequest;
      output: GetBucketEncryptionOutput;
    };
    sdk: {
      input: GetBucketEncryptionCommandInput;
      output: GetBucketEncryptionCommandOutput;
    };
  };
}
