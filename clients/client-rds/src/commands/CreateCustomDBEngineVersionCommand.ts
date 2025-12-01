// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCustomDBEngineVersionMessage, DBEngineVersion } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateCustomDBEngineVersion } from "../schemas/schemas_0";

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
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateCustomDBEngineVersionMessage
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE", // required
 *   DatabaseInstallationFilesS3BucketName: "STRING_VALUE",
 *   DatabaseInstallationFilesS3Prefix: "STRING_VALUE",
 *   ImageId: "STRING_VALUE",
 *   KMSKeyId: "STRING_VALUE",
 *   SourceCustomDbEngineVersionIdentifier: "STRING_VALUE",
 *   UseAwsProvidedLatestImage: true || false,
 *   Description: "STRING_VALUE",
 *   Manifest: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCustomDBEngineVersionCommand(input);
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
 * @throws {@link CustomDBEngineVersionNotFoundFault} (client fault)
 *  <p>The specified CEV was not found.</p>
 *
 * @throws {@link CustomDBEngineVersionQuotaExceededFault} (client fault)
 *  <p>You have exceeded your CEV quota.</p>
 *
 * @throws {@link Ec2ImagePropertiesNotSupportedFault} (client fault)
 *  <p>The AMI configuration prerequisite has not been met.</p>
 *
 * @throws {@link InvalidCustomDBEngineVersionStateFault} (client fault)
 *  <p>You can't delete the CEV.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "CreateCustomDBEngineVersion", {})
  .n("RDSClient", "CreateCustomDBEngineVersionCommand")
  .sc(CreateCustomDBEngineVersion)
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
