// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { TestConnectionRequest, TestConnectionResponse } from "../models/models_2";
import { TestConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestConnectionCommand}.
 */
export interface TestConnectionCommandInput extends TestConnectionRequest {}
/**
 * @public
 *
 * The output of {@link TestConnectionCommand}.
 */
export interface TestConnectionCommandOutput extends TestConnectionResponse, __MetadataBearer {}

/**
 * <p>Tests a connection to a service to validate the service credentials that you provide.</p>
 *          <p>You can either provide an existing connection name or a <code>TestConnectionInput</code> for testing a non-existing connection input. Providing both at the same time will cause an error.</p>
 *          <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, TestConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, TestConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // TestConnectionRequest
 *   ConnectionName: "STRING_VALUE",
 *   CatalogId: "STRING_VALUE",
 *   TestConnectionInput: { // TestConnectionInput
 *     ConnectionType: "JDBC" || "SFTP" || "MONGODB" || "KAFKA" || "NETWORK" || "MARKETPLACE" || "CUSTOM" || "SALESFORCE" || "VIEW_VALIDATION_REDSHIFT" || "VIEW_VALIDATION_ATHENA" || "GOOGLEADS" || "GOOGLESHEETS" || "GOOGLEANALYTICS4" || "SERVICENOW" || "MARKETO" || "SAPODATA" || "ZENDESK" || "JIRACLOUD" || "NETSUITEERP" || "HUBSPOT" || "FACEBOOKADS" || "INSTAGRAMADS" || "ZOHOCRM" || "SALESFORCEPARDOT" || "SALESFORCEMARKETINGCLOUD" || "ADOBEANALYTICS" || "SLACK" || "LINKEDIN" || "MIXPANEL" || "ASANA" || "STRIPE" || "SMARTSHEET" || "DATADOG" || "WOOCOMMERCE" || "INTERCOM" || "SNAPCHATADS" || "PAYPAL" || "QUICKBOOKS" || "FACEBOOKPAGEINSIGHTS" || "FRESHDESK" || "TWILIO" || "DOCUSIGNMONITOR" || "FRESHSALES" || "ZOOM" || "GOOGLESEARCHCONSOLE" || "SALESFORCECOMMERCECLOUD" || "SAPCONCUR" || "DYNATRACE" || "MICROSOFTDYNAMIC365FINANCEANDOPS" || "MICROSOFTTEAMS" || "BLACKBAUDRAISEREDGENXT" || "MAILCHIMP" || "GITLAB" || "PENDO" || "PRODUCTBOARD" || "CIRCLECI" || "PIPEDIVE" || "SENDGRID" || "AZURECOSMOS" || "AZURESQL" || "BIGQUERY" || "BLACKBAUD" || "CLOUDERAHIVE" || "CLOUDERAIMPALA" || "CLOUDWATCH" || "CLOUDWATCHMETRICS" || "CMDB" || "DATALAKEGEN2" || "DB2" || "DB2AS400" || "DOCUMENTDB" || "DOMO" || "DYNAMODB" || "GOOGLECLOUDSTORAGE" || "HBASE" || "KUSTOMER" || "MICROSOFTDYNAMICS365CRM" || "MONDAY" || "MYSQL" || "OKTA" || "OPENSEARCH" || "ORACLE" || "PIPEDRIVE" || "POSTGRESQL" || "SAPHANA" || "SQLSERVER" || "SYNAPSE" || "TERADATA" || "TERADATANOS" || "TIMESTREAM" || "TPCDS" || "VERTICA", // required
 *     ConnectionProperties: { // ConnectionProperties // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *     AuthenticationConfiguration: { // AuthenticationConfigurationInput
 *       AuthenticationType: "BASIC" || "OAUTH2" || "CUSTOM" || "IAM",
 *       OAuth2Properties: { // OAuth2PropertiesInput
 *         OAuth2GrantType: "AUTHORIZATION_CODE" || "CLIENT_CREDENTIALS" || "JWT_BEARER",
 *         OAuth2ClientApplication: { // OAuth2ClientApplication
 *           UserManagedClientApplicationClientId: "STRING_VALUE",
 *           AWSManagedClientApplicationReference: "STRING_VALUE",
 *         },
 *         TokenUrl: "STRING_VALUE",
 *         TokenUrlParametersMap: { // TokenUrlParametersMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         AuthorizationCodeProperties: { // AuthorizationCodeProperties
 *           AuthorizationCode: "STRING_VALUE",
 *           RedirectUri: "STRING_VALUE",
 *         },
 *         OAuth2Credentials: { // OAuth2Credentials
 *           UserManagedClientApplicationClientSecret: "STRING_VALUE",
 *           AccessToken: "STRING_VALUE",
 *           RefreshToken: "STRING_VALUE",
 *           JwtToken: "STRING_VALUE",
 *         },
 *       },
 *       SecretArn: "STRING_VALUE",
 *       KmsKeyArn: "STRING_VALUE",
 *       BasicAuthenticationCredentials: { // BasicAuthenticationCredentials
 *         Username: "STRING_VALUE",
 *         Password: "STRING_VALUE",
 *       },
 *       CustomAuthenticationCredentials: { // CredentialMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new TestConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TestConnectionCommandInput - {@link TestConnectionCommandInput}
 * @returns {@link TestConnectionCommandOutput}
 * @see {@link TestConnectionCommandInput} for command's `input` shape.
 * @see {@link TestConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link FederationSourceException} (client fault)
 *  <p>A federation source failed.</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class TestConnectionCommand extends $Command
  .classBuilder<
    TestConnectionCommandInput,
    TestConnectionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "TestConnection", {})
  .n("GlueClient", "TestConnectionCommand")
  .sc(TestConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestConnectionRequest;
      output: {};
    };
    sdk: {
      input: TestConnectionCommandInput;
      output: TestConnectionCommandOutput;
    };
  };
}
