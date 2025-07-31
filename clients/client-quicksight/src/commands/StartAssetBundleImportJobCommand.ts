// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartAssetBundleImportJobRequest,
  StartAssetBundleImportJobRequestFilterSensitiveLog,
  StartAssetBundleImportJobResponse,
} from "../models/models_5";
import { de_StartAssetBundleImportJobCommand, se_StartAssetBundleImportJobCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAssetBundleImportJobCommand}.
 */
export interface StartAssetBundleImportJobCommandInput extends StartAssetBundleImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAssetBundleImportJobCommand}.
 */
export interface StartAssetBundleImportJobCommandOutput extends StartAssetBundleImportJobResponse, __MetadataBearer {}

/**
 * <p>Starts an Asset Bundle import job.</p>
 *          <p>An Asset Bundle import job imports specified Amazon QuickSight assets into an Amazon QuickSight account. You can also choose to import a naming prefix and specified configuration overrides. The assets that are contained in the bundle file that you provide are used to create or update a new or existing asset in your Amazon QuickSight account. Each Amazon QuickSight account can run up to 5 import jobs concurrently.</p>
 *          <p>The API caller must have the necessary <code>"create"</code>, <code>"describe"</code>, and <code>"update"</code> permissions in their IAM role to access each resource type that is contained in the bundle file before the resources can be imported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, StartAssetBundleImportJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, StartAssetBundleImportJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // StartAssetBundleImportJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssetBundleImportJobId: "STRING_VALUE", // required
 *   AssetBundleImportSource: { // AssetBundleImportSource
 *     Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Uri: "STRING_VALUE",
 *   },
 *   OverrideParameters: { // AssetBundleImportJobOverrideParameters
 *     ResourceIdOverrideConfiguration: { // AssetBundleImportJobResourceIdOverrideConfiguration
 *       PrefixForAllResources: "STRING_VALUE",
 *     },
 *     VPCConnections: [ // AssetBundleImportJobVPCConnectionOverrideParametersList
 *       { // AssetBundleImportJobVPCConnectionOverrideParameters
 *         VPCConnectionId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *         SubnetIds: [ // SubnetIdList
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // SecurityGroupIdList
 *           "STRING_VALUE",
 *         ],
 *         DnsResolvers: [ // DnsResolverList
 *           "STRING_VALUE",
 *         ],
 *         RoleArn: "STRING_VALUE",
 *       },
 *     ],
 *     RefreshSchedules: [ // AssetBundleImportJobRefreshScheduleOverrideParametersList
 *       { // AssetBundleImportJobRefreshScheduleOverrideParameters
 *         DataSetId: "STRING_VALUE", // required
 *         ScheduleId: "STRING_VALUE", // required
 *         StartAfterDateTime: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     DataSources: [ // AssetBundleImportJobDataSourceOverrideParametersList
 *       { // AssetBundleImportJobDataSourceOverrideParameters
 *         DataSourceId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *         DataSourceParameters: { // DataSourceParameters Union: only one key present
 *           AmazonElasticsearchParameters: { // AmazonElasticsearchParameters
 *             Domain: "STRING_VALUE", // required
 *           },
 *           AthenaParameters: { // AthenaParameters
 *             WorkGroup: "STRING_VALUE",
 *             RoleArn: "STRING_VALUE",
 *             IdentityCenterConfiguration: { // IdentityCenterConfiguration
 *               EnableIdentityPropagation: true || false,
 *             },
 *           },
 *           AuroraParameters: { // AuroraParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           AuroraPostgreSqlParameters: { // AuroraPostgreSqlParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           AwsIotAnalyticsParameters: { // AwsIotAnalyticsParameters
 *             DataSetName: "STRING_VALUE", // required
 *           },
 *           JiraParameters: { // JiraParameters
 *             SiteBaseUrl: "STRING_VALUE", // required
 *           },
 *           MariaDbParameters: { // MariaDbParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           MySqlParameters: { // MySqlParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           OracleParameters: { // OracleParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *             UseServiceName: true || false,
 *           },
 *           PostgreSqlParameters: { // PostgreSqlParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           PrestoParameters: { // PrestoParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Catalog: "STRING_VALUE", // required
 *           },
 *           RdsParameters: { // RdsParameters
 *             InstanceId: "STRING_VALUE", // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           RedshiftParameters: { // RedshiftParameters
 *             Host: "STRING_VALUE",
 *             Port: Number("int"),
 *             Database: "STRING_VALUE", // required
 *             ClusterId: "STRING_VALUE",
 *             IAMParameters: { // RedshiftIAMParameters
 *               RoleArn: "STRING_VALUE", // required
 *               DatabaseUser: "STRING_VALUE",
 *               DatabaseGroups: [ // DatabaseGroupList
 *                 "STRING_VALUE",
 *               ],
 *               AutoCreateDatabaseUser: true || false,
 *             },
 *             IdentityCenterConfiguration: {
 *               EnableIdentityPropagation: true || false,
 *             },
 *           },
 *           S3Parameters: { // S3Parameters
 *             ManifestFileLocation: { // ManifestFileLocation
 *               Bucket: "STRING_VALUE", // required
 *               Key: "STRING_VALUE", // required
 *             },
 *             RoleArn: "STRING_VALUE",
 *           },
 *           ServiceNowParameters: { // ServiceNowParameters
 *             SiteBaseUrl: "STRING_VALUE", // required
 *           },
 *           SnowflakeParameters: { // SnowflakeParameters
 *             Host: "STRING_VALUE", // required
 *             Database: "STRING_VALUE", // required
 *             Warehouse: "STRING_VALUE", // required
 *             AuthenticationType: "PASSWORD" || "TOKEN" || "X509",
 *             DatabaseAccessControlRole: "STRING_VALUE",
 *             OAuthParameters: { // OAuthParameters
 *               TokenProviderUrl: "STRING_VALUE", // required
 *               OAuthScope: "STRING_VALUE",
 *               IdentityProviderVpcConnectionProperties: { // VpcConnectionProperties
 *                 VpcConnectionArn: "STRING_VALUE", // required
 *               },
 *               IdentityProviderResourceUri: "STRING_VALUE",
 *             },
 *           },
 *           SparkParameters: { // SparkParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *           },
 *           SqlServerParameters: { // SqlServerParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           TeradataParameters: { // TeradataParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           TwitterParameters: { // TwitterParameters
 *             Query: "STRING_VALUE", // required
 *             MaxRows: Number("int"), // required
 *           },
 *           AmazonOpenSearchParameters: { // AmazonOpenSearchParameters
 *             Domain: "STRING_VALUE", // required
 *           },
 *           ExasolParameters: { // ExasolParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *           },
 *           DatabricksParameters: { // DatabricksParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             SqlEndpointPath: "STRING_VALUE", // required
 *           },
 *           StarburstParameters: { // StarburstParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Catalog: "STRING_VALUE", // required
 *             ProductType: "GALAXY" || "ENTERPRISE",
 *             DatabaseAccessControlRole: "STRING_VALUE",
 *             AuthenticationType: "PASSWORD" || "TOKEN" || "X509",
 *             OAuthParameters: {
 *               TokenProviderUrl: "STRING_VALUE", // required
 *               OAuthScope: "STRING_VALUE",
 *               IdentityProviderVpcConnectionProperties: {
 *                 VpcConnectionArn: "STRING_VALUE", // required
 *               },
 *               IdentityProviderResourceUri: "STRING_VALUE",
 *             },
 *           },
 *           TrinoParameters: { // TrinoParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Catalog: "STRING_VALUE", // required
 *           },
 *           BigQueryParameters: { // BigQueryParameters
 *             ProjectId: "STRING_VALUE", // required
 *             DataSetRegion: "STRING_VALUE",
 *           },
 *           ImpalaParameters: { // ImpalaParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE",
 *             SqlEndpointPath: "STRING_VALUE", // required
 *           },
 *         },
 *         VpcConnectionProperties: {
 *           VpcConnectionArn: "STRING_VALUE", // required
 *         },
 *         SslProperties: { // SslProperties
 *           DisableSsl: true || false,
 *         },
 *         Credentials: { // AssetBundleImportJobDataSourceCredentials
 *           CredentialPair: { // AssetBundleImportJobDataSourceCredentialPair
 *             Username: "STRING_VALUE", // required
 *             Password: "STRING_VALUE", // required
 *           },
 *           SecretArn: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     DataSets: [ // AssetBundleImportJobDataSetOverrideParametersList
 *       { // AssetBundleImportJobDataSetOverrideParameters
 *         DataSetId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *         DataSetRefreshProperties: { // DataSetRefreshProperties
 *           RefreshConfiguration: { // RefreshConfiguration
 *             IncrementalRefresh: { // IncrementalRefresh
 *               LookbackWindow: { // LookbackWindow
 *                 ColumnName: "STRING_VALUE", // required
 *                 Size: Number("long"), // required
 *                 SizeUnit: "HOUR" || "DAY" || "WEEK", // required
 *               },
 *             },
 *           },
 *           FailureConfiguration: { // RefreshFailureConfiguration
 *             EmailAlert: { // RefreshFailureEmailAlert
 *               AlertStatus: "ENABLED" || "DISABLED",
 *             },
 *           },
 *         },
 *       },
 *     ],
 *     Themes: [ // AssetBundleImportJobThemeOverrideParametersList
 *       { // AssetBundleImportJobThemeOverrideParameters
 *         ThemeId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *       },
 *     ],
 *     Analyses: [ // AssetBundleImportJobAnalysisOverrideParametersList
 *       { // AssetBundleImportJobAnalysisOverrideParameters
 *         AnalysisId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *       },
 *     ],
 *     Dashboards: [ // AssetBundleImportJobDashboardOverrideParametersList
 *       { // AssetBundleImportJobDashboardOverrideParameters
 *         DashboardId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *       },
 *     ],
 *     Folders: [ // AssetBundleImportJobFolderOverrideParametersList
 *       { // AssetBundleImportJobFolderOverrideParameters
 *         FolderId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *         ParentFolderArn: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   FailureAction: "DO_NOTHING" || "ROLLBACK",
 *   OverridePermissions: { // AssetBundleImportJobOverridePermissions
 *     DataSources: [ // AssetBundleImportJobDataSourceOverridePermissionsList
 *       { // AssetBundleImportJobDataSourceOverridePermissions
 *         DataSourceIds: [ // AssetBundleRestrictiveResourceIdList // required
 *           "STRING_VALUE",
 *         ],
 *         Permissions: { // AssetBundleResourcePermissions
 *           Principals: [ // AssetBundlePrincipalList // required
 *             "STRING_VALUE",
 *           ],
 *           Actions: [ // ActionList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *     DataSets: [ // AssetBundleImportJobDataSetOverridePermissionsList
 *       { // AssetBundleImportJobDataSetOverridePermissions
 *         DataSetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Permissions: {
 *           Principals: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Actions: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *     Themes: [ // AssetBundleImportJobThemeOverridePermissionsList
 *       { // AssetBundleImportJobThemeOverridePermissions
 *         ThemeIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Permissions: {
 *           Principals: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Actions: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *     Analyses: [ // AssetBundleImportJobAnalysisOverridePermissionsList
 *       { // AssetBundleImportJobAnalysisOverridePermissions
 *         AnalysisIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Permissions: {
 *           Principals: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Actions: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *     Dashboards: [ // AssetBundleImportJobDashboardOverridePermissionsList
 *       { // AssetBundleImportJobDashboardOverridePermissions
 *         DashboardIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Permissions: {
 *           Principals: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Actions: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         LinkSharingConfiguration: { // AssetBundleResourceLinkSharingConfiguration
 *           Permissions: "<AssetBundleResourcePermissions>",
 *         },
 *       },
 *     ],
 *     Folders: [ // AssetBundleImportJobFolderOverridePermissionsList
 *       { // AssetBundleImportJobFolderOverridePermissions
 *         FolderIds: "<AssetBundleRestrictiveResourceIdList>", // required
 *         Permissions: "<AssetBundleResourcePermissions>",
 *       },
 *     ],
 *   },
 *   OverrideTags: { // AssetBundleImportJobOverrideTags
 *     VPCConnections: [ // AssetBundleImportJobVPCConnectionOverrideTagsList
 *       { // AssetBundleImportJobVPCConnectionOverrideTags
 *         VPCConnectionIds: "<AssetBundleRestrictiveResourceIdList>", // required
 *         Tags: [ // TagList // required
 *           { // Tag
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *     DataSources: [ // AssetBundleImportJobDataSourceOverrideTagsList
 *       { // AssetBundleImportJobDataSourceOverrideTags
 *         DataSourceIds: "<AssetBundleRestrictiveResourceIdList>", // required
 *         Tags: [ // required
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *     DataSets: [ // AssetBundleImportJobDataSetOverrideTagsList
 *       { // AssetBundleImportJobDataSetOverrideTags
 *         DataSetIds: "<AssetBundleRestrictiveResourceIdList>", // required
 *         Tags: [ // required
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *     Themes: [ // AssetBundleImportJobThemeOverrideTagsList
 *       { // AssetBundleImportJobThemeOverrideTags
 *         ThemeIds: "<AssetBundleRestrictiveResourceIdList>", // required
 *         Tags: [ // required
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *     Analyses: [ // AssetBundleImportJobAnalysisOverrideTagsList
 *       { // AssetBundleImportJobAnalysisOverrideTags
 *         AnalysisIds: "<AssetBundleRestrictiveResourceIdList>", // required
 *         Tags: [ // required
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *     Dashboards: [ // AssetBundleImportJobDashboardOverrideTagsList
 *       { // AssetBundleImportJobDashboardOverrideTags
 *         DashboardIds: "<AssetBundleRestrictiveResourceIdList>", // required
 *         Tags: "<TagList>", // required
 *       },
 *     ],
 *     Folders: [ // AssetBundleImportJobFolderOverrideTagsList
 *       { // AssetBundleImportJobFolderOverrideTags
 *         FolderIds: "<AssetBundleRestrictiveResourceIdList>", // required
 *         Tags: "<TagList>", // required
 *       },
 *     ],
 *   },
 *   OverrideValidationStrategy: { // AssetBundleImportJobOverrideValidationStrategy
 *     StrictModeForAllResources: true || false,
 *   },
 * };
 * const command = new StartAssetBundleImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartAssetBundleImportJobResponse
 * //   Arn: "STRING_VALUE",
 * //   AssetBundleImportJobId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartAssetBundleImportJobCommandInput - {@link StartAssetBundleImportJobCommandInput}
 * @returns {@link StartAssetBundleImportJobCommandOutput}
 * @see {@link StartAssetBundleImportJobCommandInput} for command's `input` shape.
 * @see {@link StartAssetBundleImportJobCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
 *
 * @public
 */
export class StartAssetBundleImportJobCommand extends $Command
  .classBuilder<
    StartAssetBundleImportJobCommandInput,
    StartAssetBundleImportJobCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "StartAssetBundleImportJob", {})
  .n("QuickSightClient", "StartAssetBundleImportJobCommand")
  .f(StartAssetBundleImportJobRequestFilterSensitiveLog, void 0)
  .ser(se_StartAssetBundleImportJobCommand)
  .de(de_StartAssetBundleImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAssetBundleImportJobRequest;
      output: StartAssetBundleImportJobResponse;
    };
    sdk: {
      input: StartAssetBundleImportJobCommandInput;
      output: StartAssetBundleImportJobCommandOutput;
    };
  };
}
