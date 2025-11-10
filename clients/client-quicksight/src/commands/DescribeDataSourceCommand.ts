// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDataSourceRequest, DescribeDataSourceResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDataSource } from "../schemas/schemas_0";

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
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
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
 * //     Type: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS" || "STARBURST" || "TRINO" || "BIGQUERY" || "GOOGLESHEETS" || "GOOGLE_DRIVE" || "CONFLUENCE" || "SHAREPOINT" || "ONE_DRIVE" || "WEB_CRAWLER" || "S3_KNOWLEDGE_BASE" || "QBUSINESS",
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
 * //         IdentityCenterConfiguration: { // IdentityCenterConfiguration
 * //           EnableIdentityPropagation: true || false,
 * //         },
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
 * //         UseServiceName: true || false,
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
 * //         IdentityCenterConfiguration: {
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
 * //       S3KnowledgeBaseParameters: { // S3KnowledgeBaseParameters
 * //         RoleArn: "STRING_VALUE",
 * //         BucketUrl: "STRING_VALUE", // required
 * //         MetadataFilesLocation: "STRING_VALUE",
 * //       },
 * //       ServiceNowParameters: { // ServiceNowParameters
 * //         SiteBaseUrl: "STRING_VALUE", // required
 * //       },
 * //       SnowflakeParameters: { // SnowflakeParameters
 * //         Host: "STRING_VALUE", // required
 * //         Database: "STRING_VALUE", // required
 * //         Warehouse: "STRING_VALUE", // required
 * //         AuthenticationType: "PASSWORD" || "TOKEN" || "X509",
 * //         DatabaseAccessControlRole: "STRING_VALUE",
 * //         OAuthParameters: { // OAuthParameters
 * //           TokenProviderUrl: "STRING_VALUE", // required
 * //           OAuthScope: "STRING_VALUE",
 * //           IdentityProviderVpcConnectionProperties: { // VpcConnectionProperties
 * //             VpcConnectionArn: "STRING_VALUE", // required
 * //           },
 * //           IdentityProviderResourceUri: "STRING_VALUE",
 * //         },
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
 * //         DatabaseAccessControlRole: "STRING_VALUE",
 * //         AuthenticationType: "PASSWORD" || "TOKEN" || "X509",
 * //         OAuthParameters: {
 * //           TokenProviderUrl: "STRING_VALUE", // required
 * //           OAuthScope: "STRING_VALUE",
 * //           IdentityProviderVpcConnectionProperties: {
 * //             VpcConnectionArn: "STRING_VALUE", // required
 * //           },
 * //           IdentityProviderResourceUri: "STRING_VALUE",
 * //         },
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
 * //       ImpalaParameters: { // ImpalaParameters
 * //         Host: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Database: "STRING_VALUE",
 * //         SqlEndpointPath: "STRING_VALUE", // required
 * //       },
 * //       CustomConnectionParameters: { // CustomConnectionParameters
 * //         ConnectionType: "STRING_VALUE",
 * //       },
 * //       WebCrawlerParameters: { // WebCrawlerParameters
 * //         WebCrawlerAuthType: "NO_AUTH" || "BASIC_AUTH" || "FORM" || "SAML", // required
 * //         UsernameFieldXpath: "STRING_VALUE",
 * //         PasswordFieldXpath: "STRING_VALUE",
 * //         UsernameButtonXpath: "STRING_VALUE",
 * //         PasswordButtonXpath: "STRING_VALUE",
 * //         LoginPageUrl: "STRING_VALUE",
 * //         WebProxyHostName: "STRING_VALUE",
 * //         WebProxyPortNumber: Number("int"),
 * //       },
 * //       ConfluenceParameters: { // ConfluenceParameters
 * //         ConfluenceUrl: "STRING_VALUE", // required
 * //       },
 * //       QBusinessParameters: { // QBusinessParameters
 * //         ApplicationArn: "STRING_VALUE", // required
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
 * //           IdentityCenterConfiguration: {
 * //             EnableIdentityPropagation: true || false,
 * //           },
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
 * //           UseServiceName: true || false,
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
 * //         S3KnowledgeBaseParameters: {
 * //           RoleArn: "STRING_VALUE",
 * //           BucketUrl: "STRING_VALUE", // required
 * //           MetadataFilesLocation: "STRING_VALUE",
 * //         },
 * //         ServiceNowParameters: {
 * //           SiteBaseUrl: "STRING_VALUE", // required
 * //         },
 * //         SnowflakeParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Database: "STRING_VALUE", // required
 * //           Warehouse: "STRING_VALUE", // required
 * //           AuthenticationType: "PASSWORD" || "TOKEN" || "X509",
 * //           DatabaseAccessControlRole: "STRING_VALUE",
 * //           OAuthParameters: {
 * //             TokenProviderUrl: "STRING_VALUE", // required
 * //             OAuthScope: "STRING_VALUE",
 * //             IdentityProviderVpcConnectionProperties: {
 * //               VpcConnectionArn: "STRING_VALUE", // required
 * //             },
 * //             IdentityProviderResourceUri: "STRING_VALUE",
 * //           },
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
 * //           DatabaseAccessControlRole: "STRING_VALUE",
 * //           AuthenticationType: "PASSWORD" || "TOKEN" || "X509",
 * //           OAuthParameters: {
 * //             TokenProviderUrl: "STRING_VALUE", // required
 * //             OAuthScope: "STRING_VALUE",
 * //             IdentityProviderVpcConnectionProperties: {
 * //               VpcConnectionArn: "STRING_VALUE", // required
 * //             },
 * //             IdentityProviderResourceUri: "STRING_VALUE",
 * //           },
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
 * //         ImpalaParameters: {
 * //           Host: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Database: "STRING_VALUE",
 * //           SqlEndpointPath: "STRING_VALUE", // required
 * //         },
 * //         CustomConnectionParameters: {
 * //           ConnectionType: "STRING_VALUE",
 * //         },
 * //         WebCrawlerParameters: {
 * //           WebCrawlerAuthType: "NO_AUTH" || "BASIC_AUTH" || "FORM" || "SAML", // required
 * //           UsernameFieldXpath: "STRING_VALUE",
 * //           PasswordFieldXpath: "STRING_VALUE",
 * //           UsernameButtonXpath: "STRING_VALUE",
 * //           PasswordButtonXpath: "STRING_VALUE",
 * //           LoginPageUrl: "STRING_VALUE",
 * //           WebProxyHostName: "STRING_VALUE",
 * //           WebProxyPortNumber: Number("int"),
 * //         },
 * //         ConfluenceParameters: {
 * //           ConfluenceUrl: "STRING_VALUE", // required
 * //         },
 * //         QBusinessParameters: {
 * //           ApplicationArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     VpcConnectionProperties: "<VpcConnectionProperties>",
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
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeDataSource", {})
  .n("QuickSightClient", "DescribeDataSourceCommand")
  .sc(DescribeDataSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataSourceRequest;
      output: DescribeDataSourceResponse;
    };
    sdk: {
      input: DescribeDataSourceCommandInput;
      output: DescribeDataSourceCommandOutput;
    };
  };
}
