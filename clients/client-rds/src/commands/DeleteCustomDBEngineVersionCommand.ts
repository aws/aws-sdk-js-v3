// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBEngineVersion, DeleteCustomDBEngineVersionMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteCustomDBEngineVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomDBEngineVersionCommand}.
 */
export interface DeleteCustomDBEngineVersionCommandInput extends DeleteCustomDBEngineVersionMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCustomDBEngineVersionCommand}.
 */
export interface DeleteCustomDBEngineVersionCommandOutput extends DBEngineVersion, __MetadataBearer {}

/**
 * <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p>
 *          <ul>
 *             <li>
 *                <p>The CEV must not be the default for RDS Custom. If it is, change the default
 *                 before running this command.</p>
 *             </li>
 *             <li>
 *                <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot,
 *                 or automated backup of your RDS Custom instance.</p>
 *             </li>
 *          </ul>
 *          <p>Typically, deletion takes a few minutes.</p>
 *          <note>
 *             <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with
 *             Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the
 *             <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the
 *             API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for
 *             the <code>DeleteCustomDbEngineVersion</code> event.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a
 *                 CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteCustomDBEngineVersionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteCustomDBEngineVersionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteCustomDBEngineVersionMessage
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomDBEngineVersionCommand(input);
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
 * @param DeleteCustomDBEngineVersionCommandInput - {@link DeleteCustomDBEngineVersionCommandInput}
 * @returns {@link DeleteCustomDBEngineVersionCommandOutput}
 * @see {@link DeleteCustomDBEngineVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDBEngineVersionCommandOutput} for command's `response` shape.
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
export class DeleteCustomDBEngineVersionCommand extends $Command
  .classBuilder<
    DeleteCustomDBEngineVersionCommandInput,
    DeleteCustomDBEngineVersionCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteCustomDBEngineVersion", {})
  .n("RDSClient", "DeleteCustomDBEngineVersionCommand")
  .sc(DeleteCustomDBEngineVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomDBEngineVersionMessage;
      output: DBEngineVersion;
    };
    sdk: {
      input: DeleteCustomDBEngineVersionCommandInput;
      output: DeleteCustomDBEngineVersionCommandOutput;
    };
  };
}
