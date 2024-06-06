// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBEngineVersionMessage, DescribeDBEngineVersionsMessage } from "../models/models_1";
import { de_DescribeDBEngineVersionsCommand, se_DescribeDBEngineVersionsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 * //       EngineVersion: "STRING_VALUE",
 * //       DBParameterGroupFamily: "STRING_VALUE",
 * //       DBEngineDescription: "STRING_VALUE",
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
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       DatabaseInstallationFilesS3BucketName: "STRING_VALUE",
 * //       DatabaseInstallationFilesS3Prefix: "STRING_VALUE",
 * //       DBEngineVersionArn: "STRING_VALUE",
 * //       KMSKeyId: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SupportsBabelfish: true || false,
 * //       CustomDBEngineVersionManifest: "STRING_VALUE",
 * //       SupportsLimitlessDatabase: true || false,
 * //       SupportsCertificateRotationWithoutRestart: true || false,
 * //       SupportedCACertificateIdentifiers: [ // CACertificateIdentifiersList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsLocalWriteForwarding: true || false,
 * //       SupportsIntegrations: true || false,
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
 * @public
 * @example To describe the DB engine versions for the MySQL DB engine
 * ```javascript
 * // The following example displays details about each of the DB engine versions for the specified DB engine.
 * const input = {
 *   "Engine": "mysql"
 * };
 * const command = new DescribeDBEngineVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBEngineVersions": [
 *     {
 *       "DBEngineDescription": "MySQL Community Edition",
 *       "DBEngineVersionDescription": "MySQL 5.7.33",
 *       "DBParameterGroupFamily": "mysql5.7",
 *       "Engine": "mysql",
 *       "EngineVersion": "5.7.33",
 *       "ValidUpgradeTarget": [
 *         {
 *           "AutoUpgrade": false,
 *           "Description": "MySQL 5.7.34",
 *           "Engine": "mysql",
 *           "EngineVersion": "5.7.34",
 *           "IsMajorVersionUpgrade": false
 *         },
 *         {
 *           "AutoUpgrade": false,
 *           "Description": "MySQL 5.7.36",
 *           "Engine": "mysql",
 *           "EngineVersion": "5.7.36",
 *           "IsMajorVersionUpgrade": false
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-db-engine-versions-for-the-mysql-db-engine-1680216738909
 * ```
 *
 */
export class DescribeDBEngineVersionsCommand extends $Command
  .classBuilder<
    DescribeDBEngineVersionsCommandInput,
    DescribeDBEngineVersionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeDBEngineVersions", {})
  .n("RDSClient", "DescribeDBEngineVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBEngineVersionsCommand)
  .de(de_DescribeDBEngineVersionsCommand)
  .build() {}
