// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw3, command } from "../commandBuilder";
import type { CreateBucketMetadataConfigurationRequest } from "../models/models_0";
import { CreateBucketMetadataConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBucketMetadataConfigurationCommand}.
 */
export interface CreateBucketMetadataConfigurationCommandInput extends CreateBucketMetadataConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateBucketMetadataConfigurationCommand}.
 */
export interface CreateBucketMetadataConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Creates an S3 Metadata V2 metadata configuration for a general purpose bucket. For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   To use this operation, you must have the following permissions. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 *   If you want to encrypt your metadata tables with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions in your KMS key policy. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 *   If you also want to integrate your table bucket with Amazon Web Services analytics services so that you can query your metadata table, you need additional permissions. For more information, see [Integrating Amazon S3 Tables with Amazon Web Services analytics services](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-integrating-aws.html) in the *Amazon S3 User Guide*.
 *
 *   To query your metadata tables, you need additional permissions. For more information, see [Permissions for querying metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-bucket-query-permissions.html) in the *Amazon S3 User Guide*.
 *
 *   - `s3:CreateBucketMetadataTableConfiguration`
 *
 *     > **Note:** The IAM policy action name is the same for the V1 and V2 API operations.
 *   - `s3tables:CreateTableBucket`
 *   - `s3tables:CreateNamespace`
 *   - `s3tables:GetTable`
 *   - `s3tables:CreateTable`
 *   - `s3tables:PutTablePolicy`
 *   - `s3tables:PutTableBucketPolicy`
 *   - `s3tables:PutTableEncryption`
 *   - `kms:DescribeKey`
 *   - `iam:PassRole` - required if you include an `AnnotationTableConfiguration` with an IAM role.
 *
 * The following operations are related to `CreateBucketMetadataConfiguration`:
 *
 * - [DeleteBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataConfiguration.html)
 * - [GetBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataConfiguration.html)
 * - [UpdateBucketMetadataInventoryTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataInventoryTableConfiguration.html)
 * - [UpdateBucketMetadataJournalTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataJournalTableConfiguration.html)
 * - [UpdateBucketMetadataAnnotationTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataAnnotationTableConfiguration.html)
 *
 * If you include an `AnnotationTableConfiguration` with an IAM role, the role must have a trust policy that allows the Amazon S3 metadata service to assume it, and a permissions policy that grants the actions needed to read annotations from your bucket. The following examples show a trust policy and a permissions policy that you can adapt for your bucket and account.
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CreateBucketMetadataConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CreateBucketMetadataConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // CreateBucketMetadataConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   MetadataConfiguration: { // MetadataConfiguration
 *     JournalTableConfiguration: { // JournalTableConfiguration
 *       RecordExpiration: { // RecordExpiration
 *         Expiration: "ENABLED" || "DISABLED", // required
 *         Days: Number("int"),
 *       },
 *       EncryptionConfiguration: { // MetadataTableEncryptionConfiguration
 *         SseAlgorithm: "aws:kms" || "AES256", // required
 *         KmsKeyArn: "STRING_VALUE",
 *       },
 *     },
 *     InventoryTableConfiguration: { // InventoryTableConfiguration
 *       ConfigurationState: "ENABLED" || "DISABLED", // required
 *       EncryptionConfiguration: {
 *         SseAlgorithm: "aws:kms" || "AES256", // required
 *         KmsKeyArn: "STRING_VALUE",
 *       },
 *     },
 *     AnnotationTableConfiguration: { // AnnotationTableConfiguration
 *       ConfigurationState: "ENABLED" || "DISABLED", // required
 *       EncryptionConfiguration: {
 *         SseAlgorithm: "aws:kms" || "AES256", // required
 *         KmsKeyArn: "STRING_VALUE",
 *       },
 *       Role: "STRING_VALUE",
 *     },
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new CreateBucketMetadataConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateBucketMetadataConfigurationCommandInput - {@link CreateBucketMetadataConfigurationCommandInput}
 * @returns {@link CreateBucketMetadataConfigurationCommandOutput}
 * @see {@link CreateBucketMetadataConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateBucketMetadataConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class CreateBucketMetadataConfigurationCommand extends command<CreateBucketMetadataConfigurationCommandInput, CreateBucketMetadataConfigurationCommandOutput>(
  _ep3,
  _mw3,
  "CreateBucketMetadataConfiguration",
  CreateBucketMetadataConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBucketMetadataConfigurationRequest;
      output: {};
    };
    sdk: {
      input: CreateBucketMetadataConfigurationCommandInput;
      output: CreateBucketMetadataConfigurationCommandOutput;
    };
  };
}
