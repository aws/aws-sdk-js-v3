// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBucketMetadataInventoryTableConfigurationRequest } from "../models/models_1";
import {
  de_UpdateBucketMetadataInventoryTableConfigurationCommand,
  se_UpdateBucketMetadataInventoryTableConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBucketMetadataInventoryTableConfigurationCommand}.
 */
export interface UpdateBucketMetadataInventoryTableConfigurationCommandInput
  extends UpdateBucketMetadataInventoryTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBucketMetadataInventoryTableConfigurationCommand}.
 */
export interface UpdateBucketMetadataInventoryTableConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or disables a live inventory table for an S3 Metadata configuration on a general
 *       purpose bucket. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html">Accelerating
 *         data discovery with S3 Metadata</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use this operation, you must have the following permissions. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html">Setting up permissions for configuring metadata tables</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *                <p>If you want to encrypt your inventory table with server-side encryption with Key Management Service
 *             (KMS) keys (SSE-KMS), you need additional permissions in your KMS key policy. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html">
 *               Setting up permissions for configuring metadata tables</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>s3:UpdateBucketMetadataInventoryTableConfiguration</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:CreateTableBucket</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:CreateNamespace</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:GetTable</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:CreateTable</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:PutTablePolicy</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:PutTableEncryption</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>kms:DescribeKey</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>UpdateBucketMetadataInventoryTableConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html">CreateBucketMetadataConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataConfiguration.html">DeleteBucketMetadataConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataConfiguration.html">GetBucketMetadataConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataJournalTableConfiguration.html">UpdateBucketMetadataJournalTableConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, UpdateBucketMetadataInventoryTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, UpdateBucketMetadataInventoryTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // UpdateBucketMetadataInventoryTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME",
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
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class UpdateBucketMetadataInventoryTableConfigurationCommand extends $Command
  .classBuilder<
    UpdateBucketMetadataInventoryTableConfigurationCommandInput,
    UpdateBucketMetadataInventoryTableConfigurationCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
        requestChecksumRequired: true,
      }),
    ];
  })
  .s("AmazonS3", "UpdateBucketMetadataInventoryTableConfiguration", {})
  .n("S3Client", "UpdateBucketMetadataInventoryTableConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBucketMetadataInventoryTableConfigurationCommand)
  .de(de_UpdateBucketMetadataInventoryTableConfigurationCommand)
  .build() {
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
