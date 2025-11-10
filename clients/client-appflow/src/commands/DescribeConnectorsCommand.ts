// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConnectorsRequest, DescribeConnectorsResponse } from "../models/models_0";
import { DescribeConnectors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectorsCommand}.
 */
export interface DescribeConnectorsCommandInput extends DescribeConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectorsCommand}.
 */
export interface DescribeConnectorsCommandOutput extends DescribeConnectorsResponse, __MetadataBearer {}

/**
 * <p> Describes the connectors vended by Amazon AppFlow for specified connector types. If
 *       you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response
 *       contains a <code>nextToken</code> object, which can be be passed in to the next call to the
 *         <code>DescribeConnectors</code> API operation to retrieve the next page. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // DescribeConnectorsRequest
 *   connectorTypes: [ // ConnectorTypeList
 *     "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectorsResponse
 * //   connectorConfigurations: { // ConnectorConfigurationsMap
 * //     "<keys>": { // ConnectorConfiguration
 * //       canUseAsSource: true || false,
 * //       canUseAsDestination: true || false,
 * //       supportedDestinationConnectors: [ // ConnectorTypeList
 * //         "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 * //       ],
 * //       supportedSchedulingFrequencies: [ // SchedulingFrequencyTypeList
 * //         "BYMINUTE" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY" || "ONCE",
 * //       ],
 * //       isPrivateLinkEnabled: true || false,
 * //       isPrivateLinkEndpointUrlRequired: true || false,
 * //       supportedTriggerTypes: [ // TriggerTypeList
 * //         "Scheduled" || "Event" || "OnDemand",
 * //       ],
 * //       connectorMetadata: { // ConnectorMetadata
 * //         Amplitude: {},
 * //         Datadog: {},
 * //         Dynatrace: {},
 * //         GoogleAnalytics: { // GoogleAnalyticsMetadata
 * //           oAuthScopes: [ // OAuthScopeList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         InforNexus: {},
 * //         Marketo: {},
 * //         Redshift: {},
 * //         S3: {},
 * //         Salesforce: { // SalesforceMetadata
 * //           oAuthScopes: [
 * //             "STRING_VALUE",
 * //           ],
 * //           dataTransferApis: [ // SalesforceDataTransferApiList
 * //             "AUTOMATIC" || "BULKV2" || "REST_SYNC",
 * //           ],
 * //           oauth2GrantTypesSupported: [ // OAuth2GrantTypeSupportedList
 * //             "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE" || "JWT_BEARER",
 * //           ],
 * //         },
 * //         ServiceNow: {},
 * //         Singular: {},
 * //         Slack: { // SlackMetadata
 * //           oAuthScopes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Snowflake: { // SnowflakeMetadata
 * //           supportedRegions: [ // RegionList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Trendmicro: {},
 * //         Veeva: {},
 * //         Zendesk: { // ZendeskMetadata
 * //           oAuthScopes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         EventBridge: {},
 * //         Upsolver: {},
 * //         CustomerProfiles: {},
 * //         Honeycode: { // HoneycodeMetadata
 * //           oAuthScopes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         SAPOData: {},
 * //         Pardot: {},
 * //       },
 * //       connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 * //       connectorLabel: "STRING_VALUE",
 * //       connectorDescription: "STRING_VALUE",
 * //       connectorOwner: "STRING_VALUE",
 * //       connectorName: "STRING_VALUE",
 * //       connectorVersion: "STRING_VALUE",
 * //       connectorArn: "STRING_VALUE",
 * //       connectorModes: [ // ConnectorModeList
 * //         "STRING_VALUE",
 * //       ],
 * //       authenticationConfig: { // AuthenticationConfig
 * //         isBasicAuthSupported: true || false,
 * //         isApiKeyAuthSupported: true || false,
 * //         isOAuth2Supported: true || false,
 * //         isCustomAuthSupported: true || false,
 * //         oAuth2Defaults: { // OAuth2Defaults
 * //           oauthScopes: "<OAuthScopeList>",
 * //           tokenUrls: [ // TokenUrlList
 * //             "STRING_VALUE",
 * //           ],
 * //           authCodeUrls: [ // AuthCodeUrlList
 * //             "STRING_VALUE",
 * //           ],
 * //           oauth2GrantTypesSupported: [
 * //             "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE" || "JWT_BEARER",
 * //           ],
 * //           oauth2CustomProperties: [ // OAuth2CustomPropertiesList
 * //             { // OAuth2CustomParameter
 * //               key: "STRING_VALUE",
 * //               isRequired: true || false,
 * //               label: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //               isSensitiveField: true || false,
 * //               connectorSuppliedValues: [ // ConnectorSuppliedValueList
 * //                 "STRING_VALUE",
 * //               ],
 * //               type: "TOKEN_URL" || "AUTH_URL",
 * //             },
 * //           ],
 * //         },
 * //         customAuthConfigs: [ // CustomAuthConfigList
 * //           { // CustomAuthConfig
 * //             customAuthenticationType: "STRING_VALUE",
 * //             authParameters: [ // AuthParameterList
 * //               { // AuthParameter
 * //                 key: "STRING_VALUE",
 * //                 isRequired: true || false,
 * //                 label: "STRING_VALUE",
 * //                 description: "STRING_VALUE",
 * //                 isSensitiveField: true || false,
 * //                 connectorSuppliedValues: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       connectorRuntimeSettings: [ // ConnectorRuntimeSettingList
 * //         { // ConnectorRuntimeSetting
 * //           key: "STRING_VALUE",
 * //           dataType: "STRING_VALUE",
 * //           isRequired: true || false,
 * //           label: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           scope: "STRING_VALUE",
 * //           connectorSuppliedValueOptions: [ // ConnectorSuppliedValueOptionList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       supportedApiVersions: [ // SupportedApiVersionList
 * //         "STRING_VALUE",
 * //       ],
 * //       supportedOperators: [ // SupportedOperatorList
 * //         "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "CONTAINS" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 * //       ],
 * //       supportedWriteOperations: [ // SupportedWriteOperationList
 * //         "INSERT" || "UPSERT" || "UPDATE" || "DELETE",
 * //       ],
 * //       connectorProvisioningType: "LAMBDA",
 * //       connectorProvisioningConfig: { // ConnectorProvisioningConfig
 * //         lambda: { // LambdaConnectorProvisioningConfig
 * //           lambdaArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       logoURL: "STRING_VALUE",
 * //       registeredAt: new Date("TIMESTAMP"),
 * //       registeredBy: "STRING_VALUE",
 * //       supportedDataTransferTypes: [ // SupportedDataTransferTypeList
 * //         "RECORD" || "FILE",
 * //       ],
 * //       supportedDataTransferApis: [ // SupportedDataTransferApis
 * //         { // DataTransferApi
 * //           Name: "STRING_VALUE",
 * //           Type: "SYNC" || "ASYNC" || "AUTOMATIC",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   connectors: [ // ConnectorList
 * //     { // ConnectorDetail
 * //       connectorDescription: "STRING_VALUE",
 * //       connectorName: "STRING_VALUE",
 * //       connectorOwner: "STRING_VALUE",
 * //       connectorVersion: "STRING_VALUE",
 * //       applicationType: "STRING_VALUE",
 * //       connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 * //       connectorLabel: "STRING_VALUE",
 * //       registeredAt: new Date("TIMESTAMP"),
 * //       registeredBy: "STRING_VALUE",
 * //       connectorProvisioningType: "LAMBDA",
 * //       connectorModes: [
 * //         "STRING_VALUE",
 * //       ],
 * //       supportedDataTransferTypes: [
 * //         "RECORD" || "FILE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConnectorsCommandInput - {@link DescribeConnectorsCommandInput}
 * @returns {@link DescribeConnectorsCommandOutput}
 * @see {@link DescribeConnectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 *
 * @public
 */
export class DescribeConnectorsCommand extends $Command
  .classBuilder<
    DescribeConnectorsCommandInput,
    DescribeConnectorsCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SandstoneConfigurationServiceLambda", "DescribeConnectors", {})
  .n("AppflowClient", "DescribeConnectorsCommand")
  .sc(DescribeConnectors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectorsRequest;
      output: DescribeConnectorsResponse;
    };
    sdk: {
      input: DescribeConnectorsCommandInput;
      output: DescribeConnectorsCommandOutput;
    };
  };
}
