// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetConnectionsRequest, GetConnectionsResponse } from "../models/models_2";
import { GetConnections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionsCommand}.
 */
export interface GetConnectionsCommandInput extends GetConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionsCommand}.
 */
export interface GetConnectionsCommandOutput extends GetConnectionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of connection definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetConnectionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetConnectionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetConnectionsRequest
 *   CatalogId: "STRING_VALUE",
 *   Filter: { // GetConnectionsFilter
 *     MatchCriteria: [ // MatchCriteria
 *       "STRING_VALUE",
 *     ],
 *     ConnectionType: "JDBC" || "SFTP" || "MONGODB" || "KAFKA" || "NETWORK" || "MARKETPLACE" || "CUSTOM" || "SALESFORCE" || "VIEW_VALIDATION_REDSHIFT" || "VIEW_VALIDATION_ATHENA" || "GOOGLEADS" || "GOOGLESHEETS" || "GOOGLEANALYTICS4" || "SERVICENOW" || "MARKETO" || "SAPODATA" || "ZENDESK" || "JIRACLOUD" || "NETSUITEERP" || "HUBSPOT" || "FACEBOOKADS" || "INSTAGRAMADS" || "ZOHOCRM" || "SALESFORCEPARDOT" || "SALESFORCEMARKETINGCLOUD" || "ADOBEANALYTICS" || "SLACK" || "LINKEDIN" || "MIXPANEL" || "ASANA" || "STRIPE" || "SMARTSHEET" || "DATADOG" || "WOOCOMMERCE" || "INTERCOM" || "SNAPCHATADS" || "PAYPAL" || "QUICKBOOKS" || "FACEBOOKPAGEINSIGHTS" || "FRESHDESK" || "TWILIO" || "DOCUSIGNMONITOR" || "FRESHSALES" || "ZOOM" || "GOOGLESEARCHCONSOLE" || "SALESFORCECOMMERCECLOUD" || "SAPCONCUR" || "DYNATRACE" || "MICROSOFTDYNAMIC365FINANCEANDOPS" || "MICROSOFTTEAMS" || "BLACKBAUDRAISEREDGENXT" || "MAILCHIMP" || "GITLAB" || "PENDO" || "PRODUCTBOARD" || "CIRCLECI" || "PIPEDIVE" || "SENDGRID" || "AZURECOSMOS" || "AZURESQL" || "BIGQUERY" || "BLACKBAUD" || "CLOUDERAHIVE" || "CLOUDERAIMPALA" || "CLOUDWATCH" || "CLOUDWATCHMETRICS" || "CMDB" || "DATALAKEGEN2" || "DB2" || "DB2AS400" || "DOCUMENTDB" || "DOMO" || "DYNAMODB" || "GOOGLECLOUDSTORAGE" || "HBASE" || "KUSTOMER" || "MICROSOFTDYNAMICS365CRM" || "MONDAY" || "MYSQL" || "OKTA" || "OPENSEARCH" || "ORACLE" || "PIPEDRIVE" || "POSTGRESQL" || "SAPHANA" || "SQLSERVER" || "SYNAPSE" || "TERADATA" || "TERADATANOS" || "TIMESTREAM" || "TPCDS" || "VERTICA",
 *     ConnectionSchemaVersion: Number("int"),
 *   },
 *   HidePassword: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionsResponse
 * //   ConnectionList: [ // ConnectionList
 * //     { // Connection
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ConnectionType: "JDBC" || "SFTP" || "MONGODB" || "KAFKA" || "NETWORK" || "MARKETPLACE" || "CUSTOM" || "SALESFORCE" || "VIEW_VALIDATION_REDSHIFT" || "VIEW_VALIDATION_ATHENA" || "GOOGLEADS" || "GOOGLESHEETS" || "GOOGLEANALYTICS4" || "SERVICENOW" || "MARKETO" || "SAPODATA" || "ZENDESK" || "JIRACLOUD" || "NETSUITEERP" || "HUBSPOT" || "FACEBOOKADS" || "INSTAGRAMADS" || "ZOHOCRM" || "SALESFORCEPARDOT" || "SALESFORCEMARKETINGCLOUD" || "ADOBEANALYTICS" || "SLACK" || "LINKEDIN" || "MIXPANEL" || "ASANA" || "STRIPE" || "SMARTSHEET" || "DATADOG" || "WOOCOMMERCE" || "INTERCOM" || "SNAPCHATADS" || "PAYPAL" || "QUICKBOOKS" || "FACEBOOKPAGEINSIGHTS" || "FRESHDESK" || "TWILIO" || "DOCUSIGNMONITOR" || "FRESHSALES" || "ZOOM" || "GOOGLESEARCHCONSOLE" || "SALESFORCECOMMERCECLOUD" || "SAPCONCUR" || "DYNATRACE" || "MICROSOFTDYNAMIC365FINANCEANDOPS" || "MICROSOFTTEAMS" || "BLACKBAUDRAISEREDGENXT" || "MAILCHIMP" || "GITLAB" || "PENDO" || "PRODUCTBOARD" || "CIRCLECI" || "PIPEDIVE" || "SENDGRID" || "AZURECOSMOS" || "AZURESQL" || "BIGQUERY" || "BLACKBAUD" || "CLOUDERAHIVE" || "CLOUDERAIMPALA" || "CLOUDWATCH" || "CLOUDWATCHMETRICS" || "CMDB" || "DATALAKEGEN2" || "DB2" || "DB2AS400" || "DOCUMENTDB" || "DOMO" || "DYNAMODB" || "GOOGLECLOUDSTORAGE" || "HBASE" || "KUSTOMER" || "MICROSOFTDYNAMICS365CRM" || "MONDAY" || "MYSQL" || "OKTA" || "OPENSEARCH" || "ORACLE" || "PIPEDRIVE" || "POSTGRESQL" || "SAPHANA" || "SQLSERVER" || "SYNAPSE" || "TERADATA" || "TERADATANOS" || "TIMESTREAM" || "TPCDS" || "VERTICA",
 * //       MatchCriteria: [ // MatchCriteria
 * //         "STRING_VALUE",
 * //       ],
 * //       ConnectionProperties: { // ConnectionProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       SparkProperties: { // PropertyMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       AthenaProperties: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       PythonProperties: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       PhysicalConnectionRequirements: { // PhysicalConnectionRequirements
 * //         SubnetId: "STRING_VALUE",
 * //         SecurityGroupIdList: [ // SecurityGroupIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         AvailabilityZone: "STRING_VALUE",
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedBy: "STRING_VALUE",
 * //       Status: "READY" || "IN_PROGRESS" || "FAILED",
 * //       StatusReason: "STRING_VALUE",
 * //       LastConnectionValidationTime: new Date("TIMESTAMP"),
 * //       AuthenticationConfiguration: { // AuthenticationConfiguration
 * //         AuthenticationType: "BASIC" || "OAUTH2" || "CUSTOM" || "IAM",
 * //         SecretArn: "STRING_VALUE",
 * //         KmsKeyArn: "STRING_VALUE",
 * //         OAuth2Properties: { // OAuth2Properties
 * //           OAuth2GrantType: "AUTHORIZATION_CODE" || "CLIENT_CREDENTIALS" || "JWT_BEARER",
 * //           OAuth2ClientApplication: { // OAuth2ClientApplication
 * //             UserManagedClientApplicationClientId: "STRING_VALUE",
 * //             AWSManagedClientApplicationReference: "STRING_VALUE",
 * //           },
 * //           TokenUrl: "STRING_VALUE",
 * //           TokenUrlParametersMap: { // TokenUrlParametersMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       ConnectionSchemaVersion: Number("int"),
 * //       CompatibleComputeEnvironments: [ // ComputeEnvironmentList
 * //         "SPARK" || "ATHENA" || "PYTHON",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectionsCommandInput - {@link GetConnectionsCommandInput}
 * @returns {@link GetConnectionsCommandOutput}
 * @see {@link GetConnectionsCommandInput} for command's `input` shape.
 * @see {@link GetConnectionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetConnectionsCommand extends $Command
  .classBuilder<
    GetConnectionsCommandInput,
    GetConnectionsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetConnections", {})
  .n("GlueClient", "GetConnectionsCommand")
  .sc(GetConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionsRequest;
      output: GetConnectionsResponse;
    };
    sdk: {
      input: GetConnectionsCommandInput;
      output: GetConnectionsCommandOutput;
    };
  };
}
