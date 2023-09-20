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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DescribeConnectorRequest, DescribeConnectorResponse } from "../models/models_0";
import { de_DescribeConnectorCommand, se_DescribeConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectorCommand}.
 */
export interface DescribeConnectorCommandInput extends DescribeConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectorCommand}.
 */
export interface DescribeConnectorCommandOutput extends DescribeConnectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the given custom connector registered in your Amazon Web Services account. This
 *       API can be used for custom connectors that are registered in your account and also for Amazon
 *       authored connectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // DescribeConnectorRequest
 *   connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot", // required
 *   connectorLabel: "STRING_VALUE",
 * };
 * const command = new DescribeConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectorResponse
 * //   connectorConfiguration: { // ConnectorConfiguration
 * //     canUseAsSource: true || false,
 * //     canUseAsDestination: true || false,
 * //     supportedDestinationConnectors: [ // ConnectorTypeList
 * //       "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 * //     ],
 * //     supportedSchedulingFrequencies: [ // SchedulingFrequencyTypeList
 * //       "BYMINUTE" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY" || "ONCE",
 * //     ],
 * //     isPrivateLinkEnabled: true || false,
 * //     isPrivateLinkEndpointUrlRequired: true || false,
 * //     supportedTriggerTypes: [ // TriggerTypeList
 * //       "Scheduled" || "Event" || "OnDemand",
 * //     ],
 * //     connectorMetadata: { // ConnectorMetadata
 * //       Amplitude: {},
 * //       Datadog: {},
 * //       Dynatrace: {},
 * //       GoogleAnalytics: { // GoogleAnalyticsMetadata
 * //         oAuthScopes: [ // OAuthScopeList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       InforNexus: {},
 * //       Marketo: {},
 * //       Redshift: {},
 * //       S3: {},
 * //       Salesforce: { // SalesforceMetadata
 * //         oAuthScopes: [
 * //           "STRING_VALUE",
 * //         ],
 * //         dataTransferApis: [ // SalesforceDataTransferApiList
 * //           "AUTOMATIC" || "BULKV2" || "REST_SYNC",
 * //         ],
 * //         oauth2GrantTypesSupported: [ // OAuth2GrantTypeSupportedList
 * //           "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE" || "JWT_BEARER",
 * //         ],
 * //       },
 * //       ServiceNow: {},
 * //       Singular: {},
 * //       Slack: { // SlackMetadata
 * //         oAuthScopes: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Snowflake: { // SnowflakeMetadata
 * //         supportedRegions: [ // RegionList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Trendmicro: {},
 * //       Veeva: {},
 * //       Zendesk: { // ZendeskMetadata
 * //         oAuthScopes: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       EventBridge: {},
 * //       Upsolver: {},
 * //       CustomerProfiles: {},
 * //       Honeycode: { // HoneycodeMetadata
 * //         oAuthScopes: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SAPOData: {},
 * //       Pardot: {},
 * //     },
 * //     connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 * //     connectorLabel: "STRING_VALUE",
 * //     connectorDescription: "STRING_VALUE",
 * //     connectorOwner: "STRING_VALUE",
 * //     connectorName: "STRING_VALUE",
 * //     connectorVersion: "STRING_VALUE",
 * //     connectorArn: "STRING_VALUE",
 * //     connectorModes: [ // ConnectorModeList
 * //       "STRING_VALUE",
 * //     ],
 * //     authenticationConfig: { // AuthenticationConfig
 * //       isBasicAuthSupported: true || false,
 * //       isApiKeyAuthSupported: true || false,
 * //       isOAuth2Supported: true || false,
 * //       isCustomAuthSupported: true || false,
 * //       oAuth2Defaults: { // OAuth2Defaults
 * //         oauthScopes: "<OAuthScopeList>",
 * //         tokenUrls: [ // TokenUrlList
 * //           "STRING_VALUE",
 * //         ],
 * //         authCodeUrls: [ // AuthCodeUrlList
 * //           "STRING_VALUE",
 * //         ],
 * //         oauth2GrantTypesSupported: [
 * //           "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE" || "JWT_BEARER",
 * //         ],
 * //         oauth2CustomProperties: [ // OAuth2CustomPropertiesList
 * //           { // OAuth2CustomParameter
 * //             key: "STRING_VALUE",
 * //             isRequired: true || false,
 * //             label: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             isSensitiveField: true || false,
 * //             connectorSuppliedValues: [ // ConnectorSuppliedValueList
 * //               "STRING_VALUE",
 * //             ],
 * //             type: "TOKEN_URL" || "AUTH_URL",
 * //           },
 * //         ],
 * //       },
 * //       customAuthConfigs: [ // CustomAuthConfigList
 * //         { // CustomAuthConfig
 * //           customAuthenticationType: "STRING_VALUE",
 * //           authParameters: [ // AuthParameterList
 * //             { // AuthParameter
 * //               key: "STRING_VALUE",
 * //               isRequired: true || false,
 * //               label: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //               isSensitiveField: true || false,
 * //               connectorSuppliedValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     connectorRuntimeSettings: [ // ConnectorRuntimeSettingList
 * //       { // ConnectorRuntimeSetting
 * //         key: "STRING_VALUE",
 * //         dataType: "STRING_VALUE",
 * //         isRequired: true || false,
 * //         label: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         scope: "STRING_VALUE",
 * //         connectorSuppliedValueOptions: [ // ConnectorSuppliedValueOptionList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     supportedApiVersions: [ // SupportedApiVersionList
 * //       "STRING_VALUE",
 * //     ],
 * //     supportedOperators: [ // SupportedOperatorList
 * //       "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "CONTAINS" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 * //     ],
 * //     supportedWriteOperations: [ // SupportedWriteOperationList
 * //       "INSERT" || "UPSERT" || "UPDATE" || "DELETE",
 * //     ],
 * //     connectorProvisioningType: "LAMBDA",
 * //     connectorProvisioningConfig: { // ConnectorProvisioningConfig
 * //       lambda: { // LambdaConnectorProvisioningConfig
 * //         lambdaArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     logoURL: "STRING_VALUE",
 * //     registeredAt: new Date("TIMESTAMP"),
 * //     registeredBy: "STRING_VALUE",
 * //     supportedDataTransferTypes: [ // SupportedDataTransferTypeList
 * //       "RECORD" || "FILE",
 * //     ],
 * //     supportedDataTransferApis: [ // SupportedDataTransferApis
 * //       { // DataTransferApi
 * //         Name: "STRING_VALUE",
 * //         Type: "SYNC" || "ASYNC" || "AUTOMATIC",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeConnectorCommandInput - {@link DescribeConnectorCommandInput}
 * @returns {@link DescribeConnectorCommandOutput}
 * @see {@link DescribeConnectorCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class DescribeConnectorCommand extends $Command<
  DescribeConnectorCommandInput,
  DescribeConnectorCommandOutput,
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
  constructor(readonly input: DescribeConnectorCommandInput) {
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
  ): Handler<DescribeConnectorCommandInput, DescribeConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConnectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SandstoneConfigurationServiceLambda",
        operation: "DescribeConnector",
      },
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
  private serialize(input: DescribeConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConnectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectorCommandOutput> {
    return de_DescribeConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
