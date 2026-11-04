// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw3, command } from "../commandBuilder";
import type { UpdateBucketMetadataInventoryTableConfigurationRequest } from "../models/models_1";
import { UpdateBucketMetadataInventoryTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBucketMetadataInventoryTableConfigurationCommand}.
 */
export interface UpdateBucketMetadataInventoryTableConfigurationCommandInput extends UpdateBucketMetadataInventoryTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBucketMetadataInventoryTableConfigurationCommand}.
 */
export interface UpdateBucketMetadataInventoryTableConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Enables or disables a live inventory table for an S3 Metadata configuration on a general purpose bucket. For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   To use this operation, you must have the following permissions. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 *   If you want to encrypt your inventory table with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions in your KMS key policy. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 *   - `s3:UpdateBucketMetadataInventoryTableConfiguration`
 *   - `s3tables:CreateTableBucket`
 *   - `s3tables:CreateNamespace`
 *   - `s3tables:GetTable`
 *   - `s3tables:CreateTable`
 *   - `s3tables:PutTablePolicy`
 *   - `s3tables:PutTableEncryption`
 *   - `kms:DescribeKey`
 *
 * The following operations are related to `UpdateBucketMetadataInventoryTableConfiguration`:
 *
 * - [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html)
 * - [DeleteBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataConfiguration.html)
 * - [GetBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataConfiguration.html)
 * - [UpdateBucketMetadataJournalTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataJournalTableConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, UpdateBucketMetadataInventoryTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, UpdateBucketMetadataInventoryTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // UpdateBucketMetadataInventoryTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   InventoryTableConfiguration: { // InventoryTableConfigurationUpdates
 *     ConfigurationState: "ENABLED" || "DISABLED", // required
 *     EncryptionConfiguration: { // MetadataTableEncryptionConfiguration
 *       SseAlgorithm: "aws:kms" || "AES256", // required
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new UpdateBucketMetadataInventoryTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateBucketMetadataInventoryTableConfigurationCommandInput - {@link UpdateBucketMetadataInventoryTableConfigurationCommandInput}
 * @returns {@link UpdateBucketMetadataInventoryTableConfigurationCommandOutput}
 * @see {@link UpdateBucketMetadataInventoryTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateBucketMetadataInventoryTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class UpdateBucketMetadataInventoryTableConfigurationCommand extends command<UpdateBucketMetadataInventoryTableConfigurationCommandInput, UpdateBucketMetadataInventoryTableConfigurationCommandOutput>(
  _ep3,
  _mw3,
  "UpdateBucketMetadataInventoryTableConfiguration",
  UpdateBucketMetadataInventoryTableConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBucketMetadataInventoryTableConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateBucketMetadataInventoryTableConfigurationCommandInput;
      output: UpdateBucketMetadataInventoryTableConfigurationCommandOutput;
    };
  };
}
