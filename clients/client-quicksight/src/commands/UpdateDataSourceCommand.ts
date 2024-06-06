// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDataSourceRequest,
  UpdateDataSourceRequestFilterSensitiveLog,
  UpdateDataSourceResponse,
} from "../models/models_4";
import { de_UpdateDataSourceCommand, se_UpdateDataSourceCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandInput extends UpdateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandOutput extends UpdateDataSourceResponse, __MetadataBearer {}

/**
 * <p>Updates a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDataSourceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   DataSourceParameters: { // DataSourceParameters Union: only one key present
 *     AmazonElasticsearchParameters: { // AmazonElasticsearchParameters
 *       Domain: "STRING_VALUE", // required
 *     },
 *     AthenaParameters: { // AthenaParameters
 *       WorkGroup: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *     },
 *     AuroraParameters: { // AuroraParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     AuroraPostgreSqlParameters: { // AuroraPostgreSqlParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     AwsIotAnalyticsParameters: { // AwsIotAnalyticsParameters
 *       DataSetName: "STRING_VALUE", // required
 *     },
 *     JiraParameters: { // JiraParameters
 *       SiteBaseUrl: "STRING_VALUE", // required
 *     },
 *     MariaDbParameters: { // MariaDbParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     MySqlParameters: { // MySqlParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     OracleParameters: { // OracleParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     PostgreSqlParameters: { // PostgreSqlParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     PrestoParameters: { // PrestoParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Catalog: "STRING_VALUE", // required
 *     },
 *     RdsParameters: { // RdsParameters
 *       InstanceId: "STRING_VALUE", // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     RedshiftParameters: { // RedshiftParameters
 *       Host: "STRING_VALUE",
 *       Port: Number("int"),
 *       Database: "STRING_VALUE", // required
 *       ClusterId: "STRING_VALUE",
 *       IAMParameters: { // RedshiftIAMParameters
 *         RoleArn: "STRING_VALUE", // required
 *         DatabaseUser: "STRING_VALUE",
 *         DatabaseGroups: [ // DatabaseGroupList
 *           "STRING_VALUE",
 *         ],
 *         AutoCreateDatabaseUser: true || false,
 *       },
 *       IdentityCenterConfiguration: { // IdentityCenterConfiguration
 *         EnableIdentityPropagation: true || false,
 *       },
 *     },
 *     S3Parameters: { // S3Parameters
 *       ManifestFileLocation: { // ManifestFileLocation
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE", // required
 *       },
 *       RoleArn: "STRING_VALUE",
 *     },
 *     ServiceNowParameters: { // ServiceNowParameters
 *       SiteBaseUrl: "STRING_VALUE", // required
 *     },
 *     SnowflakeParameters: { // SnowflakeParameters
 *       Host: "STRING_VALUE", // required
 *       Database: "STRING_VALUE", // required
 *       Warehouse: "STRING_VALUE", // required
 *     },
 *     SparkParameters: { // SparkParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *     },
 *     SqlServerParameters: { // SqlServerParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     TeradataParameters: { // TeradataParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     TwitterParameters: { // TwitterParameters
 *       Query: "STRING_VALUE", // required
 *       MaxRows: Number("int"), // required
 *     },
 *     AmazonOpenSearchParameters: { // AmazonOpenSearchParameters
 *       Domain: "STRING_VALUE", // required
 *     },
 *     ExasolParameters: { // ExasolParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *     },
 *     DatabricksParameters: { // DatabricksParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       SqlEndpointPath: "STRING_VALUE", // required
 *     },
 *     StarburstParameters: { // StarburstParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Catalog: "STRING_VALUE", // required
 *       ProductType: "GALAXY" || "ENTERPRISE",
 *     },
 *     TrinoParameters: { // TrinoParameters
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Catalog: "STRING_VALUE", // required
 *     },
 *     BigQueryParameters: { // BigQueryParameters
 *       ProjectId: "STRING_VALUE", // required
 *       DataSetRegion: "STRING_VALUE",
 *     },
 *   },
 *   Credentials: { // DataSourceCredentials
 *     CredentialPair: { // CredentialPair
 *       Username: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *       AlternateDataSourceParameters: [ // DataSourceParametersList
 *         {//  Union: only one key present
 *           AmazonElasticsearchParameters: {
 *             Domain: "STRING_VALUE", // required
 *           },
 *           AthenaParameters: {
 *             WorkGroup: "STRING_VALUE",
 *             RoleArn: "STRING_VALUE",
 *           },
 *           AuroraParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           AuroraPostgreSqlParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           AwsIotAnalyticsParameters: {
 *             DataSetName: "STRING_VALUE", // required
 *           },
 *           JiraParameters: {
 *             SiteBaseUrl: "STRING_VALUE", // required
 *           },
 *           MariaDbParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           MySqlParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           OracleParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           PostgreSqlParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           PrestoParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Catalog: "STRING_VALUE", // required
 *           },
 *           RdsParameters: {
 *             InstanceId: "STRING_VALUE", // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           RedshiftParameters: {
 *             Host: "STRING_VALUE",
 *             Port: Number("int"),
 *             Database: "STRING_VALUE", // required
 *             ClusterId: "STRING_VALUE",
 *             IAMParameters: {
 *               RoleArn: "STRING_VALUE", // required
 *               DatabaseUser: "STRING_VALUE",
 *               DatabaseGroups: [
 *                 "STRING_VALUE",
 *               ],
 *               AutoCreateDatabaseUser: true || false,
 *             },
 *             IdentityCenterConfiguration: {
 *               EnableIdentityPropagation: true || false,
 *             },
 *           },
 *           S3Parameters: {
 *             ManifestFileLocation: {
 *               Bucket: "STRING_VALUE", // required
 *               Key: "STRING_VALUE", // required
 *             },
 *             RoleArn: "STRING_VALUE",
 *           },
 *           ServiceNowParameters: {
 *             SiteBaseUrl: "STRING_VALUE", // required
 *           },
 *           SnowflakeParameters: {
 *             Host: "STRING_VALUE", // required
 *             Database: "STRING_VALUE", // required
 *             Warehouse: "STRING_VALUE", // required
 *           },
 *           SparkParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *           },
 *           SqlServerParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           TeradataParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           TwitterParameters: {
 *             Query: "STRING_VALUE", // required
 *             MaxRows: Number("int"), // required
 *           },
 *           AmazonOpenSearchParameters: {
 *             Domain: "STRING_VALUE", // required
 *           },
 *           ExasolParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *           },
 *           DatabricksParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             SqlEndpointPath: "STRING_VALUE", // required
 *           },
 *           StarburstParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Catalog: "STRING_VALUE", // required
 *             ProductType: "GALAXY" || "ENTERPRISE",
 *           },
 *           TrinoParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Catalog: "STRING_VALUE", // required
 *           },
 *           BigQueryParameters: {
 *             ProjectId: "STRING_VALUE", // required
 *             DataSetRegion: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *     CopySourceArn: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *   },
 *   VpcConnectionProperties: { // VpcConnectionProperties
 *     VpcConnectionArn: "STRING_VALUE", // required
 *   },
 *   SslProperties: { // SslProperties
 *     DisableSsl: true || false,
 *   },
 * };
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSourceResponse
 * //   Arn: "STRING_VALUE",
 * //   DataSourceId: "STRING_VALUE",
 * //   UpdateStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateDataSourceCommandInput - {@link UpdateDataSourceCommandInput}
 * @returns {@link UpdateDataSourceCommandOutput}
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class UpdateDataSourceCommand extends $Command
  .classBuilder<
    UpdateDataSourceCommandInput,
    UpdateDataSourceCommandOutput,
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
  .s("QuickSight_20180401", "UpdateDataSource", {})
  .n("QuickSightClient", "UpdateDataSourceCommand")
  .f(UpdateDataSourceRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateDataSourceCommand)
  .de(de_UpdateDataSourceCommand)
  .build() {}
