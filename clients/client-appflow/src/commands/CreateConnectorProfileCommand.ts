// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import {
  CreateConnectorProfileRequest,
  CreateConnectorProfileRequestFilterSensitiveLog,
  CreateConnectorProfileResponse,
} from "../models/models_0";
import { de_CreateConnectorProfileCommand, se_CreateConnectorProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectorProfileCommand}.
 */
export interface CreateConnectorProfileCommandInput extends CreateConnectorProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorProfileCommand}.
 */
export interface CreateConnectorProfileCommandOutput extends CreateConnectorProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p> Creates a new connector profile associated with your Amazon Web Services account. There is
 *       a soft quota of 100 connector profiles per Amazon Web Services account. If you need more
 *       connector profiles than this quota allows, you can submit a request to the Amazon AppFlow
 *       team through the Amazon AppFlow support channel. In each connector profile that you
 *       create, you can provide the credentials and properties for only one connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, CreateConnectorProfileCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, CreateConnectorProfileCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // CreateConnectorProfileRequest
 *   connectorProfileName: "STRING_VALUE", // required
 *   kmsArn: "STRING_VALUE",
 *   connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot", // required
 *   connectorLabel: "STRING_VALUE",
 *   connectionMode: "Public" || "Private", // required
 *   connectorProfileConfig: { // ConnectorProfileConfig
 *     connectorProfileProperties: { // ConnectorProfileProperties
 *       Amplitude: {},
 *       Datadog: { // DatadogConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Dynatrace: { // DynatraceConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       GoogleAnalytics: {},
 *       Honeycode: {},
 *       InforNexus: { // InforNexusConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Marketo: { // MarketoConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Redshift: { // RedshiftConnectorProfileProperties
 *         databaseUrl: "STRING_VALUE",
 *         bucketName: "STRING_VALUE", // required
 *         bucketPrefix: "STRING_VALUE",
 *         roleArn: "STRING_VALUE", // required
 *         dataApiRoleArn: "STRING_VALUE",
 *         isRedshiftServerless: true || false,
 *         clusterIdentifier: "STRING_VALUE",
 *         workgroupName: "STRING_VALUE",
 *         databaseName: "STRING_VALUE",
 *       },
 *       Salesforce: { // SalesforceConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE",
 *         isSandboxEnvironment: true || false,
 *         usePrivateLinkForMetadataAndAuthorization: true || false,
 *       },
 *       ServiceNow: { // ServiceNowConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Singular: {},
 *       Slack: { // SlackConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Snowflake: { // SnowflakeConnectorProfileProperties
 *         warehouse: "STRING_VALUE", // required
 *         stage: "STRING_VALUE", // required
 *         bucketName: "STRING_VALUE", // required
 *         bucketPrefix: "STRING_VALUE",
 *         privateLinkServiceName: "STRING_VALUE",
 *         accountName: "STRING_VALUE",
 *         region: "STRING_VALUE",
 *       },
 *       Trendmicro: {},
 *       Veeva: { // VeevaConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       Zendesk: { // ZendeskConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE", // required
 *       },
 *       SAPOData: { // SAPODataConnectorProfileProperties
 *         applicationHostUrl: "STRING_VALUE", // required
 *         applicationServicePath: "STRING_VALUE", // required
 *         portNumber: Number("int"), // required
 *         clientNumber: "STRING_VALUE", // required
 *         logonLanguage: "STRING_VALUE",
 *         privateLinkServiceName: "STRING_VALUE",
 *         oAuthProperties: { // OAuthProperties
 *           tokenUrl: "STRING_VALUE", // required
 *           authCodeUrl: "STRING_VALUE", // required
 *           oAuthScopes: [ // OAuthScopeList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         disableSSO: true || false,
 *       },
 *       CustomConnector: { // CustomConnectorProfileProperties
 *         profileProperties: { // ProfilePropertiesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         oAuth2Properties: { // OAuth2Properties
 *           tokenUrl: "STRING_VALUE", // required
 *           oAuth2GrantType: "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE" || "JWT_BEARER", // required
 *           tokenUrlCustomProperties: { // TokenUrlCustomProperties
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *       Pardot: { // PardotConnectorProfileProperties
 *         instanceUrl: "STRING_VALUE",
 *         isSandboxEnvironment: true || false,
 *         businessUnitId: "STRING_VALUE",
 *       },
 *     },
 *     connectorProfileCredentials: { // ConnectorProfileCredentials
 *       Amplitude: { // AmplitudeConnectorProfileCredentials
 *         apiKey: "STRING_VALUE", // required
 *         secretKey: "STRING_VALUE", // required
 *       },
 *       Datadog: { // DatadogConnectorProfileCredentials
 *         apiKey: "STRING_VALUE", // required
 *         applicationKey: "STRING_VALUE", // required
 *       },
 *       Dynatrace: { // DynatraceConnectorProfileCredentials
 *         apiToken: "STRING_VALUE", // required
 *       },
 *       GoogleAnalytics: { // GoogleAnalyticsConnectorProfileCredentials
 *         clientId: "STRING_VALUE", // required
 *         clientSecret: "STRING_VALUE", // required
 *         accessToken: "STRING_VALUE",
 *         refreshToken: "STRING_VALUE",
 *         oAuthRequest: { // ConnectorOAuthRequest
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       Honeycode: { // HoneycodeConnectorProfileCredentials
 *         accessToken: "STRING_VALUE",
 *         refreshToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       InforNexus: { // InforNexusConnectorProfileCredentials
 *         accessKeyId: "STRING_VALUE", // required
 *         userId: "STRING_VALUE", // required
 *         secretAccessKey: "STRING_VALUE", // required
 *         datakey: "STRING_VALUE", // required
 *       },
 *       Marketo: { // MarketoConnectorProfileCredentials
 *         clientId: "STRING_VALUE", // required
 *         clientSecret: "STRING_VALUE", // required
 *         accessToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       Redshift: { // RedshiftConnectorProfileCredentials
 *         username: "STRING_VALUE",
 *         password: "STRING_VALUE",
 *       },
 *       Salesforce: { // SalesforceConnectorProfileCredentials
 *         accessToken: "STRING_VALUE",
 *         refreshToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *         clientCredentialsArn: "STRING_VALUE",
 *         oAuth2GrantType: "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE" || "JWT_BEARER",
 *         jwtToken: "STRING_VALUE",
 *       },
 *       ServiceNow: { // ServiceNowConnectorProfileCredentials
 *         username: "STRING_VALUE", // required
 *         password: "STRING_VALUE", // required
 *       },
 *       Singular: { // SingularConnectorProfileCredentials
 *         apiKey: "STRING_VALUE", // required
 *       },
 *       Slack: { // SlackConnectorProfileCredentials
 *         clientId: "STRING_VALUE", // required
 *         clientSecret: "STRING_VALUE", // required
 *         accessToken: "STRING_VALUE",
 *         oAuthRequest: {
 *           authCode: "STRING_VALUE",
 *           redirectUri: "STRING_VALUE",
 *         },
 *       },
 *       Snowflake: { // SnowflakeConnectorProfileCredentials
 *         username: "STRING_VALUE", // required
 *         password: "STRING_VALUE", // required
 *       },
 *       Trendmicro: { // TrendmicroConnectorProfileCredentials
 *         apiSecretKey: "STRING_VALUE", // required
 *       },
 *       Veeva: { // VeevaConnectorProfileCredentials
 *         username: "STRING_VALUE", // required
 *         password: "STRING_VALUE", // required
 *       },
 *       Zendesk: { // ZendeskConnectorProfileCredentials
 *         clientId: "STRING_VALUE", // required
 *         clientSecret: "STRING_VALUE", // required
 *         accessToken: "STRING_VALUE",
 *         oAuthRequest: "<ConnectorOAuthRequest>",
 *       },
 *       SAPOData: { // SAPODataConnectorProfileCredentials
 *         basicAuthCredentials: { // BasicAuthCredentials
 *           username: "STRING_VALUE", // required
 *           password: "STRING_VALUE", // required
 *         },
 *         oAuthCredentials: { // OAuthCredentials
 *           clientId: "STRING_VALUE", // required
 *           clientSecret: "STRING_VALUE", // required
 *           accessToken: "STRING_VALUE",
 *           refreshToken: "STRING_VALUE",
 *           oAuthRequest: "<ConnectorOAuthRequest>",
 *         },
 *       },
 *       CustomConnector: { // CustomConnectorProfileCredentials
 *         authenticationType: "OAUTH2" || "APIKEY" || "BASIC" || "CUSTOM", // required
 *         basic: {
 *           username: "STRING_VALUE", // required
 *           password: "STRING_VALUE", // required
 *         },
 *         oauth2: { // OAuth2Credentials
 *           clientId: "STRING_VALUE",
 *           clientSecret: "STRING_VALUE",
 *           accessToken: "STRING_VALUE",
 *           refreshToken: "STRING_VALUE",
 *           oAuthRequest: "<ConnectorOAuthRequest>",
 *         },
 *         apiKey: { // ApiKeyCredentials
 *           apiKey: "STRING_VALUE", // required
 *           apiSecretKey: "STRING_VALUE",
 *         },
 *         custom: { // CustomAuthCredentials
 *           customAuthenticationType: "STRING_VALUE", // required
 *           credentialsMap: { // CredentialsMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *       Pardot: { // PardotConnectorProfileCredentials
 *         accessToken: "STRING_VALUE",
 *         refreshToken: "STRING_VALUE",
 *         oAuthRequest: "<ConnectorOAuthRequest>",
 *         clientCredentialsArn: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateConnectorProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorProfileResponse
 * //   connectorProfileArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectorProfileCommandInput - {@link CreateConnectorProfileCommandInput}
 * @returns {@link CreateConnectorProfileCommandOutput}
 * @see {@link CreateConnectorProfileCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorProfileCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link ConnectorAuthenticationException} (client fault)
 *  <p> An error occurred when authenticating with the connector endpoint. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The request would cause a service quota (such as the number of flows) to be exceeded.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class CreateConnectorProfileCommand extends $Command<
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateConnectorProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectorProfileCommandInput, CreateConnectorProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectorProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "CreateConnectorProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConnectorProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateConnectorProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConnectorProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectorProfileCommandOutput> {
    return de_CreateConnectorProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
