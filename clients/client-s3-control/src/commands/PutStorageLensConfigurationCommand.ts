// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutStorageLensConfigurationRequest } from "../models/models_1";
import { de_PutStorageLensConfigurationCommand, se_PutStorageLensConfigurationCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutStorageLensConfigurationCommand}.
 */
export interface PutStorageLensConfigurationCommandInput extends PutStorageLensConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutStorageLensConfigurationCommand}.
 */
export interface PutStorageLensConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Working with
 *             Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:PutStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *                <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutStorageLensConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutStorageLensConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // PutStorageLensConfigurationRequest
 *   ConfigId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 *   StorageLensConfiguration: { // StorageLensConfiguration
 *     Id: "STRING_VALUE", // required
 *     AccountLevel: { // AccountLevel
 *       ActivityMetrics: { // ActivityMetrics
 *         IsEnabled: true || false,
 *       },
 *       BucketLevel: { // BucketLevel
 *         ActivityMetrics: {
 *           IsEnabled: true || false,
 *         },
 *         PrefixLevel: { // PrefixLevel
 *           StorageMetrics: { // PrefixLevelStorageMetrics
 *             IsEnabled: true || false,
 *             SelectionCriteria: { // SelectionCriteria
 *               Delimiter: "STRING_VALUE",
 *               MaxDepth: Number("int"),
 *               MinStorageBytesPercentage: Number("double"),
 *             },
 *           },
 *         },
 *         AdvancedCostOptimizationMetrics: { // AdvancedCostOptimizationMetrics
 *           IsEnabled: true || false,
 *         },
 *         AdvancedDataProtectionMetrics: { // AdvancedDataProtectionMetrics
 *           IsEnabled: true || false,
 *         },
 *         DetailedStatusCodesMetrics: { // DetailedStatusCodesMetrics
 *           IsEnabled: true || false,
 *         },
 *       },
 *       AdvancedCostOptimizationMetrics: {
 *         IsEnabled: true || false,
 *       },
 *       AdvancedDataProtectionMetrics: {
 *         IsEnabled: true || false,
 *       },
 *       DetailedStatusCodesMetrics: {
 *         IsEnabled: true || false,
 *       },
 *       StorageLensGroupLevel: { // StorageLensGroupLevel
 *         SelectionCriteria: { // StorageLensGroupLevelSelectionCriteria
 *           Include: [ // StorageLensGroupLevelInclude
 *             "STRING_VALUE",
 *           ],
 *           Exclude: [ // StorageLensGroupLevelExclude
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *     Include: { // Include
 *       Buckets: [ // Buckets
 *         "STRING_VALUE",
 *       ],
 *       Regions: [ // Regions
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Exclude: { // Exclude
 *       Buckets: [
 *         "STRING_VALUE",
 *       ],
 *       Regions: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     DataExport: { // StorageLensDataExport
 *       S3BucketDestination: { // S3BucketDestination
 *         Format: "CSV" || "Parquet", // required
 *         OutputSchemaVersion: "V_1", // required
 *         AccountId: "STRING_VALUE",
 *         Arn: "STRING_VALUE", // required
 *         Prefix: "STRING_VALUE",
 *         Encryption: { // StorageLensDataExportEncryption
 *           SSES3: {},
 *           SSEKMS: { // SSEKMS
 *             KeyId: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *       CloudWatchMetrics: { // CloudWatchMetrics
 *         IsEnabled: true || false, // required
 *       },
 *     },
 *     IsEnabled: true || false, // required
 *     AwsOrg: { // StorageLensAwsOrg
 *       Arn: "STRING_VALUE", // required
 *     },
 *     StorageLensArn: "STRING_VALUE",
 *   },
 *   Tags: [ // StorageLensTags
 *     { // StorageLensTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutStorageLensConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutStorageLensConfigurationCommandInput - {@link PutStorageLensConfigurationCommandInput}
 * @returns {@link PutStorageLensConfigurationCommandOutput}
 * @see {@link PutStorageLensConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutStorageLensConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutStorageLensConfigurationCommand extends $Command
  .classBuilder<
    PutStorageLensConfigurationCommandInput,
    PutStorageLensConfigurationCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "PutStorageLensConfiguration", {})
  .n("S3ControlClient", "PutStorageLensConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutStorageLensConfigurationCommand)
  .de(de_PutStorageLensConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutStorageLensConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutStorageLensConfigurationCommandInput;
      output: PutStorageLensConfigurationCommandOutput;
    };
  };
}
