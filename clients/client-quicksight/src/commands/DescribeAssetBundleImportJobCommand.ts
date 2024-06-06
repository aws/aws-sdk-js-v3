// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAssetBundleImportJobRequest,
  DescribeAssetBundleImportJobResponse,
  DescribeAssetBundleImportJobResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  de_DescribeAssetBundleImportJobCommand,
  se_DescribeAssetBundleImportJobCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetBundleImportJobCommand}.
 */
export interface DescribeAssetBundleImportJobCommandInput extends DescribeAssetBundleImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetBundleImportJobCommand}.
 */
export interface DescribeAssetBundleImportJobCommandOutput
  extends DescribeAssetBundleImportJobResponse,
    __MetadataBearer {}

/**
 * <p>Describes an existing import job.</p>
 *          <p>Poll job descriptions after starting a job to know when it has succeeded or failed. Job descriptions are available for 14 days after job starts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAssetBundleImportJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAssetBundleImportJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAssetBundleImportJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssetBundleImportJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAssetBundleImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetBundleImportJobResponse
 * //   JobStatus: "QUEUED_FOR_IMMEDIATE_EXECUTION" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "FAILED_ROLLBACK_IN_PROGRESS" || "FAILED_ROLLBACK_COMPLETED" || "FAILED_ROLLBACK_ERROR",
 * //   Errors: [ // AssetBundleImportJobErrorList
 * //     { // AssetBundleImportJobError
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RollbackErrors: [
 * //     {
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Arn: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   AssetBundleImportJobId: "STRING_VALUE",
 * //   AwsAccountId: "STRING_VALUE",
 * //   AssetBundleImportSource: { // AssetBundleImportSourceDescription
 * //     Body: "STRING_VALUE",
 * //     S3Uri: "STRING_VALUE",
 * //   },
 * //   OverrideParameters: { // AssetBundleImportJobOverrideParameters
 * //     ResourceIdOverrideConfiguration: { // AssetBundleImportJobResourceIdOverrideConfiguration
 * //       PrefixForAllResources: "STRING_VALUE",
 * //     },
 * //     VPCConnections: [ // AssetBundleImportJobVPCConnectionOverrideParametersList
 * //       { // AssetBundleImportJobVPCConnectionOverrideParameters
 * //         VPCConnectionId: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //         SubnetIds: [ // SubnetIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         DnsResolvers: [ // DnsResolverList
 * //           "STRING_VALUE",
 * //         ],
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RefreshSchedules: [ // AssetBundleImportJobRefreshScheduleOverrideParametersList
 * //       { // AssetBundleImportJobRefreshScheduleOverrideParameters
 * //         DataSetId: "STRING_VALUE", // required
 * //         ScheduleId: "STRING_VALUE", // required
 * //         StartAfterDateTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     DataSources: [ // AssetBundleImportJobDataSourceOverrideParametersList
 * //       { // AssetBundleImportJobDataSourceOverrideParameters
 * //         DataSourceId: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //         DataSourceParameters: { // DataSourceParameters Union: only one key present
 * //           AmazonElasticsearchParameters: { // AmazonElasticsearchParameters
 * //             Domain: "STRING_VALUE", // required
 * //           },
 * //           AthenaParameters: { // AthenaParameters
 * //             WorkGroup: "STRING_VALUE",
 * //             RoleArn: "STRING_VALUE",
 * //           },
 * //           AuroraParameters: { // AuroraParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           AuroraPostgreSqlParameters: { // AuroraPostgreSqlParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           AwsIotAnalyticsParameters: { // AwsIotAnalyticsParameters
 * //             DataSetName: "STRING_VALUE", // required
 * //           },
 * //           JiraParameters: { // JiraParameters
 * //             SiteBaseUrl: "STRING_VALUE", // required
 * //           },
 * //           MariaDbParameters: { // MariaDbParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           MySqlParameters: { // MySqlParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           OracleParameters: { // OracleParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           PostgreSqlParameters: { // PostgreSqlParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           PrestoParameters: { // PrestoParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Catalog: "STRING_VALUE", // required
 * //           },
 * //           RdsParameters: { // RdsParameters
 * //             InstanceId: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           RedshiftParameters: { // RedshiftParameters
 * //             Host: "STRING_VALUE",
 * //             Port: Number("int"),
 * //             Database: "STRING_VALUE", // required
 * //             ClusterId: "STRING_VALUE",
 * //             IAMParameters: { // RedshiftIAMParameters
 * //               RoleArn: "STRING_VALUE", // required
 * //               DatabaseUser: "STRING_VALUE",
 * //               DatabaseGroups: [ // DatabaseGroupList
 * //                 "STRING_VALUE",
 * //               ],
 * //               AutoCreateDatabaseUser: true || false,
 * //             },
 * //             IdentityCenterConfiguration: { // IdentityCenterConfiguration
 * //               EnableIdentityPropagation: true || false,
 * //             },
 * //           },
 * //           S3Parameters: { // S3Parameters
 * //             ManifestFileLocation: { // ManifestFileLocation
 * //               Bucket: "STRING_VALUE", // required
 * //               Key: "STRING_VALUE", // required
 * //             },
 * //             RoleArn: "STRING_VALUE",
 * //           },
 * //           ServiceNowParameters: { // ServiceNowParameters
 * //             SiteBaseUrl: "STRING_VALUE", // required
 * //           },
 * //           SnowflakeParameters: { // SnowflakeParameters
 * //             Host: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Warehouse: "STRING_VALUE", // required
 * //           },
 * //           SparkParameters: { // SparkParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //           },
 * //           SqlServerParameters: { // SqlServerParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           TeradataParameters: { // TeradataParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Database: "STRING_VALUE", // required
 * //           },
 * //           TwitterParameters: { // TwitterParameters
 * //             Query: "STRING_VALUE", // required
 * //             MaxRows: Number("int"), // required
 * //           },
 * //           AmazonOpenSearchParameters: { // AmazonOpenSearchParameters
 * //             Domain: "STRING_VALUE", // required
 * //           },
 * //           ExasolParameters: { // ExasolParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //           },
 * //           DatabricksParameters: { // DatabricksParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             SqlEndpointPath: "STRING_VALUE", // required
 * //           },
 * //           StarburstParameters: { // StarburstParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Catalog: "STRING_VALUE", // required
 * //             ProductType: "GALAXY" || "ENTERPRISE",
 * //           },
 * //           TrinoParameters: { // TrinoParameters
 * //             Host: "STRING_VALUE", // required
 * //             Port: Number("int"), // required
 * //             Catalog: "STRING_VALUE", // required
 * //           },
 * //           BigQueryParameters: { // BigQueryParameters
 * //             ProjectId: "STRING_VALUE", // required
 * //             DataSetRegion: "STRING_VALUE",
 * //           },
 * //         },
 * //         VpcConnectionProperties: { // VpcConnectionProperties
 * //           VpcConnectionArn: "STRING_VALUE", // required
 * //         },
 * //         SslProperties: { // SslProperties
 * //           DisableSsl: true || false,
 * //         },
 * //         Credentials: { // AssetBundleImportJobDataSourceCredentials
 * //           CredentialPair: { // AssetBundleImportJobDataSourceCredentialPair
 * //             Username: "STRING_VALUE", // required
 * //             Password: "STRING_VALUE", // required
 * //           },
 * //           SecretArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     DataSets: [ // AssetBundleImportJobDataSetOverrideParametersList
 * //       { // AssetBundleImportJobDataSetOverrideParameters
 * //         DataSetId: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Themes: [ // AssetBundleImportJobThemeOverrideParametersList
 * //       { // AssetBundleImportJobThemeOverrideParameters
 * //         ThemeId: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Analyses: [ // AssetBundleImportJobAnalysisOverrideParametersList
 * //       { // AssetBundleImportJobAnalysisOverrideParameters
 * //         AnalysisId: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Dashboards: [ // AssetBundleImportJobDashboardOverrideParametersList
 * //       { // AssetBundleImportJobDashboardOverrideParameters
 * //         DashboardId: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   FailureAction: "DO_NOTHING" || "ROLLBACK",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   OverridePermissions: { // AssetBundleImportJobOverridePermissions
 * //     DataSources: [ // AssetBundleImportJobDataSourceOverridePermissionsList
 * //       { // AssetBundleImportJobDataSourceOverridePermissions
 * //         DataSourceIds: [ // AssetBundleRestrictiveResourceIdList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Permissions: { // AssetBundleResourcePermissions
 * //           Principals: [ // AssetBundlePrincipalList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Actions: [ // ActionList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     DataSets: [ // AssetBundleImportJobDataSetOverridePermissionsList
 * //       { // AssetBundleImportJobDataSetOverridePermissions
 * //         DataSetIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Permissions: {
 * //           Principals: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Actions: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     Themes: [ // AssetBundleImportJobThemeOverridePermissionsList
 * //       { // AssetBundleImportJobThemeOverridePermissions
 * //         ThemeIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Permissions: {
 * //           Principals: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Actions: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     Analyses: [ // AssetBundleImportJobAnalysisOverridePermissionsList
 * //       { // AssetBundleImportJobAnalysisOverridePermissions
 * //         AnalysisIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Permissions: {
 * //           Principals: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Actions: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     Dashboards: [ // AssetBundleImportJobDashboardOverridePermissionsList
 * //       { // AssetBundleImportJobDashboardOverridePermissions
 * //         DashboardIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Permissions: {
 * //           Principals: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Actions: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         LinkSharingConfiguration: { // AssetBundleResourceLinkSharingConfiguration
 * //           Permissions: "<AssetBundleResourcePermissions>",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   OverrideTags: { // AssetBundleImportJobOverrideTags
 * //     VPCConnections: [ // AssetBundleImportJobVPCConnectionOverrideTagsList
 * //       { // AssetBundleImportJobVPCConnectionOverrideTags
 * //         VPCConnectionIds: "<AssetBundleRestrictiveResourceIdList>", // required
 * //         Tags: [ // TagList // required
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     DataSources: [ // AssetBundleImportJobDataSourceOverrideTagsList
 * //       { // AssetBundleImportJobDataSourceOverrideTags
 * //         DataSourceIds: "<AssetBundleRestrictiveResourceIdList>", // required
 * //         Tags: [ // required
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     DataSets: [ // AssetBundleImportJobDataSetOverrideTagsList
 * //       { // AssetBundleImportJobDataSetOverrideTags
 * //         DataSetIds: "<AssetBundleRestrictiveResourceIdList>", // required
 * //         Tags: [ // required
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Themes: [ // AssetBundleImportJobThemeOverrideTagsList
 * //       { // AssetBundleImportJobThemeOverrideTags
 * //         ThemeIds: "<AssetBundleRestrictiveResourceIdList>", // required
 * //         Tags: [ // required
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Analyses: [ // AssetBundleImportJobAnalysisOverrideTagsList
 * //       { // AssetBundleImportJobAnalysisOverrideTags
 * //         AnalysisIds: "<AssetBundleRestrictiveResourceIdList>", // required
 * //         Tags: [ // required
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Dashboards: [ // AssetBundleImportJobDashboardOverrideTagsList
 * //       { // AssetBundleImportJobDashboardOverrideTags
 * //         DashboardIds: "<AssetBundleRestrictiveResourceIdList>", // required
 * //         Tags: "<TagList>", // required
 * //       },
 * //     ],
 * //   },
 * //   OverrideValidationStrategy: { // AssetBundleImportJobOverrideValidationStrategy
 * //     StrictModeForAllResources: true || false,
 * //   },
 * //   Warnings: [ // AssetBundleImportJobWarningList
 * //     { // AssetBundleImportJobWarning
 * //       Arn: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAssetBundleImportJobCommandInput - {@link DescribeAssetBundleImportJobCommandInput}
 * @returns {@link DescribeAssetBundleImportJobCommandOutput}
 * @see {@link DescribeAssetBundleImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetBundleImportJobCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class DescribeAssetBundleImportJobCommand extends $Command
  .classBuilder<
    DescribeAssetBundleImportJobCommandInput,
    DescribeAssetBundleImportJobCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeAssetBundleImportJob", {})
  .n("QuickSightClient", "DescribeAssetBundleImportJobCommand")
  .f(void 0, DescribeAssetBundleImportJobResponseFilterSensitiveLog)
  .ser(se_DescribeAssetBundleImportJobCommand)
  .de(de_DescribeAssetBundleImportJobCommand)
  .build() {}
