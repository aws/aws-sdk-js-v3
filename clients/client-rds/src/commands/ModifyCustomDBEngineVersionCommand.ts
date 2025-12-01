// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBEngineVersion } from "../models/models_0";
import type { ModifyCustomDBEngineVersionMessage } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyCustomDBEngineVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyCustomDBEngineVersionCommand}.
 */
export interface ModifyCustomDBEngineVersionCommandInput extends ModifyCustomDBEngineVersionMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCustomDBEngineVersionCommand}.
 */
export interface ModifyCustomDBEngineVersionCommandOutput extends DBEngineVersion, __MetadataBearer {}

/**
 * <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling
 *             <code>DescribeDBEngineVersions</code>.</p>
 *          <note>
 *             <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with
 *                 Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the
 *                 <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the
 *                 API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for
 *                 the <code>ModifyCustomDbEngineVersion</code> event.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a>
 *             in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCustomDBEngineVersionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCustomDBEngineVersionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyCustomDBEngineVersionMessage
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Status: "available" || "inactive" || "inactive-except-restore",
 * };
 * const command = new ModifyCustomDBEngineVersionCommand(input);
 * const response = await client.send(command);
 * // { // DBEngineVersion
 * //   Engine: "STRING_VALUE",
 * //   MajorEngineVersion: "STRING_VALUE",
 * //   EngineVersion: "STRING_VALUE",
 * //   DatabaseInstallationFilesS3BucketName: "STRING_VALUE",
 * //   DatabaseInstallationFilesS3Prefix: "STRING_VALUE",
 * //   CustomDBEngineVersionManifest: "STRING_VALUE",
 * //   DBParameterGroupFamily: "STRING_VALUE",
 * //   DBEngineDescription: "STRING_VALUE",
 * //   DBEngineVersionArn: "STRING_VALUE",
 * //   DBEngineVersionDescription: "STRING_VALUE",
 * //   DefaultCharacterSet: { // CharacterSet
 * //     CharacterSetName: "STRING_VALUE",
 * //     CharacterSetDescription: "STRING_VALUE",
 * //   },
 * //   Image: { // CustomDBEngineVersionAMI
 * //     ImageId: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //   },
 * //   DBEngineMediaType: "STRING_VALUE",
 * //   KMSKeyId: "STRING_VALUE",
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   SupportedCharacterSets: [ // SupportedCharacterSetsList
 * //     {
 * //       CharacterSetName: "STRING_VALUE",
 * //       CharacterSetDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SupportedNcharCharacterSets: [
 * //     {
 * //       CharacterSetName: "STRING_VALUE",
 * //       CharacterSetDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ValidUpgradeTarget: [ // ValidUpgradeTargetList
 * //     { // UpgradeTarget
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       AutoUpgrade: true || false,
 * //       IsMajorVersionUpgrade: true || false,
 * //       SupportedEngineModes: [ // EngineModeList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsParallelQuery: true || false,
 * //       SupportsGlobalDatabases: true || false,
 * //       SupportsBabelfish: true || false,
 * //       SupportsLimitlessDatabase: true || false,
 * //       SupportsLocalWriteForwarding: true || false,
 * //       SupportsIntegrations: true || false,
 * //     },
 * //   ],
 * //   SupportedTimezones: [ // SupportedTimezonesList
 * //     { // Timezone
 * //       TimezoneName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ExportableLogTypes: [ // LogTypeList
 * //     "STRING_VALUE",
 * //   ],
 * //   SupportsLogExportsToCloudwatchLogs: true || false,
 * //   SupportsReadReplica: true || false,
 * //   SupportedEngineModes: [
 * //     "STRING_VALUE",
 * //   ],
 * //   SupportedFeatureNames: [ // FeatureNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   Status: "STRING_VALUE",
 * //   SupportsParallelQuery: true || false,
 * //   SupportsGlobalDatabases: true || false,
 * //   TagList: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SupportsBabelfish: true || false,
 * //   SupportsLimitlessDatabase: true || false,
 * //   SupportsCertificateRotationWithoutRestart: true || false,
 * //   SupportedCACertificateIdentifiers: [ // CACertificateIdentifiersList
 * //     "STRING_VALUE",
 * //   ],
 * //   SupportsLocalWriteForwarding: true || false,
 * //   SupportsIntegrations: true || false,
 * //   ServerlessV2FeaturesSupport: { // ServerlessV2FeaturesSupport
 * //     MinCapacity: Number("double"),
 * //     MaxCapacity: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyCustomDBEngineVersionCommandInput - {@link ModifyCustomDBEngineVersionCommandInput}
 * @returns {@link ModifyCustomDBEngineVersionCommandOutput}
 * @see {@link ModifyCustomDBEngineVersionCommandInput} for command's `input` shape.
 * @see {@link ModifyCustomDBEngineVersionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link CustomDBEngineVersionNotFoundFault} (client fault)
 *  <p>The specified CEV was not found.</p>
 *
 * @throws {@link InvalidCustomDBEngineVersionStateFault} (client fault)
 *  <p>You can't delete the CEV.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class ModifyCustomDBEngineVersionCommand extends $Command
  .classBuilder<
    ModifyCustomDBEngineVersionCommandInput,
    ModifyCustomDBEngineVersionCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyCustomDBEngineVersion", {})
  .n("RDSClient", "ModifyCustomDBEngineVersionCommand")
  .sc(ModifyCustomDBEngineVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyCustomDBEngineVersionMessage;
      output: DBEngineVersion;
    };
    sdk: {
      input: ModifyCustomDBEngineVersionCommandInput;
      output: ModifyCustomDBEngineVersionCommandOutput;
    };
  };
}
