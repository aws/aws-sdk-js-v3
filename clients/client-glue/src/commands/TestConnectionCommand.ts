// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestConnectionRequest, TestConnectionResponse } from "../models/models_3";
import { TestConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Tests a connection to a service to validate the service credentials that you provide.
 *
 * You can either provide an existing connection name or a `TestConnectionInput` for testing a non-existing connection input. Providing both at the same time will cause an error.
 *
 * If the action is successful, the service sends back an HTTP 200 response.
 *
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
 *         OAuth2GrantType: "AUTHORIZATION_CODE" || "CLIENT_CREDENTIALS" || "JWT_BEARER" || "REFRESH_TOKEN",
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The `CreatePartitions` API was called on a table that has indexes enabled.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link FederationSourceException} (client fault)
 *
 * A federation source failed.
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class TestConnectionCommand extends command<TestConnectionCommandInput, TestConnectionCommandOutput>(
  _ep0,
  _mw0,
  "TestConnection",
  TestConnection$
) {
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
