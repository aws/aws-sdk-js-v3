// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateBucketMetadataJournalTableConfigurationRequest } from "../models/models_1";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { UpdateBucketMetadataJournalTableConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBucketMetadataJournalTableConfigurationCommand}.
 */
export interface UpdateBucketMetadataJournalTableConfigurationCommandInput
  extends UpdateBucketMetadataJournalTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBucketMetadataJournalTableConfigurationCommand}.
 */
export interface UpdateBucketMetadataJournalTableConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or disables journal table record expiration for an S3 Metadata configuration on a general
 *       purpose bucket. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html">Accelerating
 *         data discovery with S3 Metadata</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use this operation, you must have the <code>s3:UpdateBucketMetadataJournalTableConfiguration</code>
 *             permission. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html">Setting up permissions for
 *               configuring metadata tables</a> in the <i>Amazon S3 User Guide</i>. </p>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>UpdateBucketMetadataJournalTableConfiguration</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataInventoryTableConfiguration.html">UpdateBucketMetadataInventoryTableConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, UpdateBucketMetadataJournalTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, UpdateBucketMetadataJournalTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // UpdateBucketMetadataJournalTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME",
 *   JournalTableConfiguration: { // JournalTableConfigurationUpdates
 *     RecordExpiration: { // RecordExpiration
 *       Expiration: "ENABLED" || "DISABLED", // required
 *       Days: Number("int"),
 *     },
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new UpdateBucketMetadataJournalTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateBucketMetadataJournalTableConfigurationCommandInput - {@link UpdateBucketMetadataJournalTableConfigurationCommandInput}
 * @returns {@link UpdateBucketMetadataJournalTableConfigurationCommandOutput}
 * @see {@link UpdateBucketMetadataJournalTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateBucketMetadataJournalTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class UpdateBucketMetadataJournalTableConfigurationCommand extends $Command
  .classBuilder<
    UpdateBucketMetadataJournalTableConfigurationCommandInput,
    UpdateBucketMetadataJournalTableConfigurationCommandOutput,
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
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
        requestChecksumRequired: true,
      }),
    ];
  })
  .s("AmazonS3", "UpdateBucketMetadataJournalTableConfiguration", {})
  .n("S3Client", "UpdateBucketMetadataJournalTableConfigurationCommand")
  .sc(UpdateBucketMetadataJournalTableConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBucketMetadataJournalTableConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateBucketMetadataJournalTableConfigurationCommandInput;
      output: UpdateBucketMetadataJournalTableConfigurationCommandOutput;
    };
  };
}
