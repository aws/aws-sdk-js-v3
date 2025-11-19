// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBEngineVersionMessage, DescribeDBEngineVersionsMessage } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBEngineVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBEngineVersionsCommand}.
 */
export interface DescribeDBEngineVersionsCommandInput extends DescribeDBEngineVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBEngineVersionsCommand}.
 */
export interface DescribeDBEngineVersionsCommandOutput extends DBEngineVersionMessage, __MetadataBearer {}

/**
 * <p>Describes the properties of specific versions of DB engines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBEngineVersionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBEngineVersionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBEngineVersionsMessage
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   DBParameterGroupFamily: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   DefaultOnly: true || false,
 *   ListSupportedCharacterSets: true || false,
 *   ListSupportedTimezones: true || false,
 *   IncludeAll: true || false,
 * };
 * const command = new DescribeDBEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DBEngineVersionMessage
 * //   Marker: "STRING_VALUE",
 * //   DBEngineVersions: [ // DBEngineVersionList
 * //     { // DBEngineVersion
 * //       Engine: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       DatabaseInstallationFilesS3BucketName: "STRING_VALUE",
 * //       DatabaseInstallationFilesS3Prefix: "STRING_VALUE",
 * //       CustomDBEngineVersionManifest: "STRING_VALUE",
 * //       DBParameterGroupFamily: "STRING_VALUE",
 * //       DBEngineDescription: "STRING_VALUE",
 * //       DBEngineVersionArn: "STRING_VALUE",
 * //       DBEngineVersionDescription: "STRING_VALUE",
 * //       DefaultCharacterSet: { // CharacterSet
 * //         CharacterSetName: "STRING_VALUE",
 * //         CharacterSetDescription: "STRING_VALUE",
 * //       },
 * //       Image: { // CustomDBEngineVersionAMI
 * //         ImageId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //       DBEngineMediaType: "STRING_VALUE",
 * //       KMSKeyId: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       SupportedCharacterSets: [ // SupportedCharacterSetsList
 * //         {
 * //           CharacterSetName: "STRING_VALUE",
 * //           CharacterSetDescription: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SupportedNcharCharacterSets: [
 * //         {
 * //           CharacterSetName: "STRING_VALUE",
 * //           CharacterSetDescription: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ValidUpgradeTarget: [ // ValidUpgradeTargetList
 * //         { // UpgradeTarget
 * //           Engine: "STRING_VALUE",
 * //           EngineVersion: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           AutoUpgrade: true || false,
 * //           IsMajorVersionUpgrade: true || false,
 * //           SupportedEngineModes: [ // EngineModeList
 * //             "STRING_VALUE",
 * //           ],
 * //           SupportsParallelQuery: true || false,
 * //           SupportsGlobalDatabases: true || false,
 * //           SupportsBabelfish: true || false,
 * //           SupportsLimitlessDatabase: true || false,
 * //           SupportsLocalWriteForwarding: true || false,
 * //           SupportsIntegrations: true || false,
 * //         },
 * //       ],
 * //       SupportedTimezones: [ // SupportedTimezonesList
 * //         { // Timezone
 * //           TimezoneName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ExportableLogTypes: [ // LogTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsLogExportsToCloudwatchLogs: true || false,
 * //       SupportsReadReplica: true || false,
 * //       SupportedEngineModes: [
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportedFeatureNames: [ // FeatureNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       SupportsParallelQuery: true || false,
 * //       SupportsGlobalDatabases: true || false,
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SupportsBabelfish: true || false,
 * //       SupportsLimitlessDatabase: true || false,
 * //       SupportsCertificateRotationWithoutRestart: true || false,
 * //       SupportedCACertificateIdentifiers: [ // CACertificateIdentifiersList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsLocalWriteForwarding: true || false,
 * //       SupportsIntegrations: true || false,
 * //       ServerlessV2FeaturesSupport: { // ServerlessV2FeaturesSupport
 * //         MinCapacity: Number("double"),
 * //         MaxCapacity: Number("double"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBEngineVersionsCommandInput - {@link DescribeDBEngineVersionsCommandInput}
 * @returns {@link DescribeDBEngineVersionsCommandOutput}
 * @see {@link DescribeDBEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe the DB engine versions for the MySQL DB engine
 * ```javascript
 * // The following example displays details about each of the DB engine versions for the specified DB engine.
 * const input = {
 *   Engine: "mysql"
 * };
 * const command = new DescribeDBEngineVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBEngineVersions: [
 *     {
 *       DBEngineDescription: "MySQL Community Edition",
 *       DBEngineVersionDescription: "MySQL 5.7.33",
 *       DBParameterGroupFamily: "mysql5.7",
 *       Engine: "mysql",
 *       EngineVersion: "5.7.33",
 *       ValidUpgradeTarget: [
 *         {
 *           AutoUpgrade: false,
 *           Description: "MySQL 5.7.34",
 *           Engine: "mysql",
 *           EngineVersion: "5.7.34",
 *           IsMajorVersionUpgrade: false
 *         },
 *         {
 *           AutoUpgrade: false,
 *           Description: "MySQL 5.7.36",
 *           Engine: "mysql",
 *           EngineVersion: "5.7.36",
 *           IsMajorVersionUpgrade: false
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBEngineVersionsCommand extends $Command
  .classBuilder<
    DescribeDBEngineVersionsCommandInput,
    DescribeDBEngineVersionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBEngineVersions", {})
  .n("RDSClient", "DescribeDBEngineVersionsCommand")
  .sc(DescribeDBEngineVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBEngineVersionsMessage;
      output: DBEngineVersionMessage;
    };
    sdk: {
      input: DescribeDBEngineVersionsCommandInput;
      output: DescribeDBEngineVersionsCommandOutput;
    };
  };
}
