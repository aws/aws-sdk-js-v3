// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDataSourceRequest, DescribeDataSourceResponse } from "../models/models_3";
import { de_DescribeDataSourceCommand, se_DescribeDataSourceCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSourceCommand}.
 */
export interface DescribeDataSourceCommandInput extends DescribeDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataSourceCommand}.
 */
export interface DescribeDataSourceCommandOutput extends DescribeDataSourceResponse, __MetadataBearer {}

/**
 * <p>Describes a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDataSourceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSourceResponse
 * //   DataSource: { // DataSource
 * //     Arn: "STRING_VALUE",
 * //     DataSourceId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS" || "STARBURST" || "TRINO" || "BIGQUERY",
 * //     Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     DataSourceParameters: { // DataSourceParameters Union: only one key present
 * //       AmazonElasticsearchParameters: { // AmazonElasticsearchParameters
 * //         Domain: "STRING_VALUE", // required
 * //       },
 * //       AthenaParameters: { // AthenaParameters
 * //         WorkGroup: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //       AuroraParameters: { // AuroraParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       AuroraPostgreSqlParameters: { // AuroraPostgreSqlParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       AwsIotAnalyticsParameters: { // AwsIotAnalyticsParameters
 * //         DataSetName: "STRING_VALUE", // required
 * //       },
 * //       JiraParameters: { // JiraParameters
 * //         SiteBaseUrl: "STRING_VALUE", // required
 * //       },
 * //       MariaDbParameters: { // MariaDbParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       MySqlParameters: { // MySqlParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       OracleParameters: { // OracleParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       PostgreSqlParameters: { // PostgreSqlParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       PrestoParameters: { // PrestoParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Catalog: "STRING_VALUE", // required
 * //       },
 * //       RdsParameters: { // RdsParameters
 * //         InstanceId: "STRING_VALUE", // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       RedshiftParameters: { // RedshiftParameters
 * //         Host: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         Database: "STRING_VALUE", // required
 * //         ClusterId: "STRING_VALUE",
 * //         IAMParameters: { // RedshiftIAMParameters
 * //           RoleArn: "STRING_VALUE", // required
 * //           DatabaseUser: "STRING_VALUE",
 * //           DatabaseGroups: [ // DatabaseGroupList
 * //             "STRING_VALUE",
 * //           ],
 * //           AutoCreateDatabaseUser: true || false,
 * //         },
 * //         IdentityCenterConfiguration: { // IdentityCenterConfiguration
 * //           EnableIdentityPropagation: true || false,
 * //         },
 * //       },
 * //       S3Parameters: { // S3Parameters
 * //         ManifestFileLocation: { // ManifestFileLocation
 * //           Bucket: "STRING_VALUE", // required
 * //           Key: "STRING_VALUE", // required
 * //         },
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //       ServiceNowParameters: { // ServiceNowParameters
 * //         SiteBaseUrl: "STRING_VALUE", // required
 * //       },
 * //       SnowflakeParameters: { // SnowflakeParameters
 * //         Host: "STRING_VALUE", // required
 * //         Database: "STRING_VALUE", // required
 * //         Warehouse: "STRING_VALUE", // required
 * //       },
 * //       SparkParameters: { // SparkParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //       },
 * //       SqlServerParameters: { // SqlServerParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       TeradataParameters: { // TeradataParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE", // required
 * //       },
 * //       TwitterParameters: { // TwitterParameters
 * //         Query: "STRING_VALUE", // required
 * //         MaxRows: Number("int"), // required
 * //       },
 * //       AmazonOpenSearchParameters: { // AmazonOpenSearchParameters
 * //         Domain: "STRING_VALUE", // required
 * //       },
 * //       ExasolParameters: { // ExasolParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //       },
 * //       DatabricksParameters: { // DatabricksParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         SqlEndpointPath: "STRING_VALUE", // required
 * //       },
 * //       StarburstParameters: { // StarburstParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Catalog: "STRING_VALUE", // required
 * //         ProductType: "GALAXY" || "ENTERPRISE",
 * //       },
 * //       TrinoParameters: { // TrinoParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Catalog: "STRING_VALUE", // required
 * //       },
 * //       BigQueryParameters: { // BigQueryParameters
 * //         ProjectId: "STRING_VALUE", // required
 * //         DataSetRegion: "STRING_VALUE",
 * //       },
 * //     },
 * //     AlternateDataSourceParameters: [ // DataSourceParametersList
 * //       {//  Union: only one key present
 * //         AmazonElasticsearchParameters: {
 * //           Domain: "STRING_VALUE", // required
 * //         },
 * //         AthenaParameters: {
 * //           WorkGroup: "STRING_VALUE",
 * //           RoleArn: "STRING_VALUE",
 * //         },
 * //         AuroraParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         AuroraPostgreSqlParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         AwsIotAnalyticsParameters: {
 * //           DataSetName: "STRING_VALUE", // required
 * //         },
 * //         JiraParameters: {
 * //           SiteBaseUrl: "STRING_VALUE", // required
 * //         },
 * //         MariaDbParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         MySqlParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         OracleParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         PostgreSqlParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         PrestoParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Catalog: "STRING_VALUE", // required
 * //         },
 * //         RdsParameters: {
 * //           InstanceId: "STRING_VALUE", // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         RedshiftParameters: {
 * //           Host: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           Database: "STRING_VALUE", // required
 * //           ClusterId: "STRING_VALUE",
 * //           IAMParameters: {
 * //             RoleArn: "STRING_VALUE", // required
 * //             DatabaseUser: "STRING_VALUE",
 * //             DatabaseGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //             AutoCreateDatabaseUser: true || false,
 * //           },
 * //           IdentityCenterConfiguration: {
 * //             EnableIdentityPropagation: true || false,
 * //           },
 * //         },
 * //         S3Parameters: {
 * //           ManifestFileLocation: {
 * //             Bucket: "STRING_VALUE", // required
 * //             Key: "STRING_VALUE", // required
 * //           },
 * //           RoleArn: "STRING_VALUE",
 * //         },
 * //         ServiceNowParameters: {
 * //           SiteBaseUrl: "STRING_VALUE", // required
 * //         },
 * //         SnowflakeParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Database: "STRING_VALUE", // required
 * //           Warehouse: "STRING_VALUE", // required
 * //         },
 * //         SparkParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //         },
 * //         SqlServerParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         TeradataParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE", // required
 * //         },
 * //         TwitterParameters: {
 * //           Query: "STRING_VALUE", // required
 * //           MaxRows: Number("int"), // required
 * //         },
 * //         AmazonOpenSearchParameters: {
 * //           Domain: "STRING_VALUE", // required
 * //         },
 * //         ExasolParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //         },
 * //         DatabricksParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           SqlEndpointPath: "STRING_VALUE", // required
 * //         },
 * //         StarburstParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Catalog: "STRING_VALUE", // required
 * //           ProductType: "GALAXY" || "ENTERPRISE",
 * //         },
 * //         TrinoParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Catalog: "STRING_VALUE", // required
 * //         },
 * //         BigQueryParameters: {
 * //           ProjectId: "STRING_VALUE", // required
 * //           DataSetRegion: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     VpcConnectionProperties: { // VpcConnectionProperties
 * //       VpcConnectionArn: "STRING_VALUE", // required
 * //     },
 * //     SslProperties: { // SslProperties
 * //       DisableSsl: true || false,
 * //     },
 * //     ErrorInfo: { // DataSourceErrorInfo
 * //       Type: "ACCESS_DENIED" || "COPY_SOURCE_NOT_FOUND" || "TIMEOUT" || "ENGINE_VERSION_NOT_SUPPORTED" || "UNKNOWN_HOST" || "GENERIC_SQL_FAILURE" || "CONFLICT" || "UNKNOWN",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     SecretArn: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeDataSourceCommandInput - {@link DescribeDataSourceCommandInput}
 * @returns {@link DescribeDataSourceCommandOutput}
 * @see {@link DescribeDataSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class DescribeDataSourceCommand extends $Command
  .classBuilder<
    DescribeDataSourceCommandInput,
    DescribeDataSourceCommandOutput,
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
  .s("QuickSight_20180401", "DescribeDataSource", {})
  .n("QuickSightClient", "DescribeDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataSourceCommand)
  .de(de_DescribeDataSourceCommand)
  .build() {}
