// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCustomDBEngineVersionMessage, DBEngineVersion } from "../models/models_0";
import { de_CreateCustomDBEngineVersionCommand, se_CreateCustomDBEngineVersionCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomDBEngineVersionCommand}.
 */
export interface CreateCustomDBEngineVersionCommandInput extends CreateCustomDBEngineVersionMessage {}
/**
 * @public
 *
 * The output of {@link CreateCustomDBEngineVersionCommand}.
 */
export interface CreateCustomDBEngineVersionCommandOutput extends DBEngineVersion, __MetadataBearer {}

/**
 * <p>Creates a custom DB engine version (CEV).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateCustomDBEngineVersionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateCustomDBEngineVersionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateCustomDBEngineVersionMessage
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE", // required
 *   DatabaseInstallationFilesS3BucketName: "STRING_VALUE",
 *   DatabaseInstallationFilesS3Prefix: "STRING_VALUE",
 *   ImageId: "STRING_VALUE",
 *   KMSKeyId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Manifest: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SourceCustomDbEngineVersionIdentifier: "STRING_VALUE",
 *   UseAwsProvidedLatestImage: true || false,
 * };
 * const command = new CreateCustomDBEngineVersionCommand(input);
 * const response = await client.send(command);
 * // { // DBEngineVersion
 * //   Engine: "STRING_VALUE",
 * //   EngineVersion: "STRING_VALUE",
 * //   DBParameterGroupFamily: "STRING_VALUE",
 * //   DBEngineDescription: "STRING_VALUE",
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
 * //   MajorEngineVersion: "STRING_VALUE",
 * //   DatabaseInstallationFilesS3BucketName: "STRING_VALUE",
 * //   DatabaseInstallationFilesS3Prefix: "STRING_VALUE",
 * //   DBEngineVersionArn: "STRING_VALUE",
 * //   KMSKeyId: "STRING_VALUE",
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   TagList: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SupportsBabelfish: true || false,
 * //   CustomDBEngineVersionManifest: "STRING_VALUE",
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
 * @param CreateCustomDBEngineVersionCommandInput - {@link CreateCustomDBEngineVersionCommandInput}
 * @returns {@link CreateCustomDBEngineVersionCommandOutput}
 * @see {@link CreateCustomDBEngineVersionCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDBEngineVersionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link CreateCustomDBEngineVersionFault} (client fault)
 *  <p>An error occurred while trying to create the CEV.</p>
 *
 * @throws {@link CustomDBEngineVersionAlreadyExistsFault} (client fault)
 *  <p>A CEV with the specified name already exists.</p>
 *
 * @throws {@link CustomDBEngineVersionQuotaExceededFault} (client fault)
 *  <p>You have exceeded your CEV quota.</p>
 *
 * @throws {@link Ec2ImagePropertiesNotSupportedFault} (client fault)
 *  <p>The AMI configuration prerequisite has not been met.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class CreateCustomDBEngineVersionCommand extends $Command
  .classBuilder<
    CreateCustomDBEngineVersionCommandInput,
    CreateCustomDBEngineVersionCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CreateCustomDBEngineVersion", {})
  .n("RDSClient", "CreateCustomDBEngineVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateCustomDBEngineVersionCommand)
  .de(de_CreateCustomDBEngineVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomDBEngineVersionMessage;
      output: DBEngineVersion;
    };
    sdk: {
      input: CreateCustomDBEngineVersionCommandInput;
      output: CreateCustomDBEngineVersionCommandOutput;
    };
  };
}
