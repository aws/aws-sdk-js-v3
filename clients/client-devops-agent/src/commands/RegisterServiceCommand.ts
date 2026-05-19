// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RegisterServiceInput, RegisterServiceOutput } from "../models/models_0";
import { RegisterService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterServiceCommand}.
 */
export interface RegisterServiceCommandInput extends RegisterServiceInput {}
/**
 * @public
 *
 * The output of {@link RegisterServiceCommand}.
 */
export interface RegisterServiceCommandOutput extends RegisterServiceOutput, __MetadataBearer {}

/**
 * <p>This operation registers the specified service</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, RegisterServiceCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, RegisterServiceCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // RegisterServiceInput
 *   service: "dynatrace" || "servicenow" || "pagerduty" || "gitlab" || "eventChannel" || "mcpservernewrelic" || "mcpservergrafana" || "mcpserverdatadog" || "mcpserver" || "mcpserversplunk" || "azureidentity" || "mcpserversigv4", // required
 *   serviceDetails: { // ServiceDetails Union: only one key present
 *     dynatrace: { // DynatraceServiceDetails
 *       accountUrn: "STRING_VALUE", // required
 *       authorizationConfig: { // DynatraceServiceAuthorizationConfig Union: only one key present
 *         oAuthClientCredentials: { // DynatraceOAuthClientCredentialsConfig
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: { // ExchangeParameters
 *             "<keys>": "STRING_VALUE",
 *           },
 *           clientSecret: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     servicenow: { // ServiceNowServiceDetails
 *       instanceUrl: "STRING_VALUE", // required
 *       authorizationConfig: { // ServiceNowServiceAuthorizationConfig Union: only one key present
 *         oAuthClientCredentials: { // ServiceNowOAuthClientCredentialsConfig
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           clientSecret: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     mcpserverdatadog: { // DatadogServiceDetails
 *       name: "STRING_VALUE", // required
 *       endpoint: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       authorizationConfig: { // DatadogAuthorizationConfig Union: only one key present
 *         authorizationDiscovery: { // MCPServerAuthorizationDiscoveryConfig
 *           returnToEndpoint: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     mcpserver: { // MCPServerDetails
 *       name: "STRING_VALUE", // required
 *       endpoint: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       authorizationConfig: { // MCPServerAuthorizationConfig Union: only one key present
 *         oAuthClientCredentials: { // MCPServerOAuthClientCredentialsConfig
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           clientSecret: "STRING_VALUE", // required
 *           exchangeUrl: "STRING_VALUE", // required
 *           scopes: [ // Scopes
 *             "STRING_VALUE",
 *           ],
 *         },
 *         oAuth3LO: { // MCPServerOAuth3LOConfig
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           returnToEndpoint: "STRING_VALUE", // required
 *           authorizationUrl: "STRING_VALUE", // required
 *           exchangeUrl: "STRING_VALUE", // required
 *           clientSecret: "STRING_VALUE",
 *           supportCodeChallenge: true || false,
 *           scopes: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         apiKey: { // MCPServerAPIKeyConfig
 *           apiKeyName: "STRING_VALUE", // required
 *           apiKeyValue: "STRING_VALUE", // required
 *           apiKeyHeader: "STRING_VALUE", // required
 *         },
 *         bearerToken: { // MCPServerBearerTokenConfig
 *           tokenName: "STRING_VALUE", // required
 *           tokenValue: "STRING_VALUE", // required
 *           authorizationHeader: "STRING_VALUE",
 *         },
 *         authorizationDiscovery: {
 *           returnToEndpoint: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     gitlab: { // GitLabDetails
 *       targetUrl: "STRING_VALUE", // required
 *       tokenType: "personal" || "group", // required
 *       tokenValue: "STRING_VALUE", // required
 *       groupId: "STRING_VALUE",
 *     },
 *     mcpserversplunk: {
 *       name: "STRING_VALUE", // required
 *       endpoint: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       authorizationConfig: {//  Union: only one key present
 *         oAuthClientCredentials: {
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           clientSecret: "STRING_VALUE", // required
 *           exchangeUrl: "STRING_VALUE", // required
 *           scopes: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         oAuth3LO: {
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: "<ExchangeParameters>",
 *           returnToEndpoint: "STRING_VALUE", // required
 *           authorizationUrl: "STRING_VALUE", // required
 *           exchangeUrl: "STRING_VALUE", // required
 *           clientSecret: "STRING_VALUE",
 *           supportCodeChallenge: true || false,
 *           scopes: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         apiKey: {
 *           apiKeyName: "STRING_VALUE", // required
 *           apiKeyValue: "STRING_VALUE", // required
 *           apiKeyHeader: "STRING_VALUE", // required
 *         },
 *         bearerToken: {
 *           tokenName: "STRING_VALUE", // required
 *           tokenValue: "STRING_VALUE", // required
 *           authorizationHeader: "STRING_VALUE",
 *         },
 *         authorizationDiscovery: {
 *           returnToEndpoint: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     mcpservernewrelic: { // NewRelicServiceDetails
 *       authorizationConfig: { // NewRelicServiceAuthorizationConfig Union: only one key present
 *         apiKey: { // NewRelicApiKeyConfig
 *           apiKey: "STRING_VALUE", // required
 *           accountId: "STRING_VALUE", // required
 *           region: "US" || "EU", // required
 *           applicationIds: [ // NewRelicApplicationIds
 *             "STRING_VALUE",
 *           ],
 *           entityGuids: [ // NewRelicEntityGuids
 *             "STRING_VALUE",
 *           ],
 *           alertPolicyIds: [ // NewRelicAlertPolicyIds
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *     eventChannel: { // EventChannelDetails
 *       type: "webhook",
 *     },
 *     mcpservergrafana: { // GrafanaServiceDetails
 *       name: "STRING_VALUE", // required
 *       endpoint: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       authorizationConfig: {//  Union: only one key present
 *         oAuthClientCredentials: {
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: "<ExchangeParameters>",
 *           clientSecret: "STRING_VALUE", // required
 *           exchangeUrl: "STRING_VALUE", // required
 *           scopes: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         oAuth3LO: {
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: "<ExchangeParameters>",
 *           returnToEndpoint: "STRING_VALUE", // required
 *           authorizationUrl: "STRING_VALUE", // required
 *           exchangeUrl: "STRING_VALUE", // required
 *           clientSecret: "STRING_VALUE",
 *           supportCodeChallenge: true || false,
 *           scopes: "<Scopes>",
 *         },
 *         apiKey: {
 *           apiKeyName: "STRING_VALUE", // required
 *           apiKeyValue: "STRING_VALUE", // required
 *           apiKeyHeader: "STRING_VALUE", // required
 *         },
 *         bearerToken: {
 *           tokenName: "STRING_VALUE", // required
 *           tokenValue: "STRING_VALUE", // required
 *           authorizationHeader: "STRING_VALUE",
 *         },
 *         authorizationDiscovery: {
 *           returnToEndpoint: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     pagerduty: { // PagerDutyDetails
 *       scopes: [ // PagerDutyScopes // required
 *         "STRING_VALUE",
 *       ],
 *       authorizationConfig: { // PagerDutyAuthorizationConfig Union: only one key present
 *         oAuthClientCredentials: { // PagerDutyOAuthClientCredentialsConfig
 *           clientName: "STRING_VALUE",
 *           clientId: "STRING_VALUE", // required
 *           exchangeParameters: "<ExchangeParameters>",
 *           clientSecret: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     azureidentity: { // RegisteredAzureIdentityDetails
 *       tenantId: "STRING_VALUE", // required
 *       clientId: "STRING_VALUE", // required
 *       webIdentityRoleArn: "STRING_VALUE", // required
 *       webIdentityTokenAudiences: [ // WebIdentityTokenAudienceList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     mcpserversigv4: { // MCPServerSigV4ServiceDetails
 *       name: "STRING_VALUE", // required
 *       endpoint: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       authorizationConfig: { // MCPServerSigV4AuthorizationConfig
 *         region: "STRING_VALUE", // required
 *         service: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *         customHeaders: { // CustomHeaders
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 *   privateConnectionName: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterServiceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterServiceOutput
 * //   serviceId: "STRING_VALUE",
 * //   additionalStep: { // AdditionalServiceRegistrationStep Union: only one key present
 * //     oauth: { // OAuthAdditionalStepDetails
 * //       authorizationUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   kmsKeyArn: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterServiceCommandInput - {@link RegisterServiceCommandInput}
 * @returns {@link RegisterServiceCommandOutput}
 * @see {@link RegisterServiceCommandInput} for command's `input` shape.
 * @see {@link RegisterServiceCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class RegisterServiceCommand extends $Command
  .classBuilder<
    RegisterServiceCommandInput,
    RegisterServiceCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "RegisterService", {})
  .n("DevOpsAgentClient", "RegisterServiceCommand")
  .sc(RegisterService$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterServiceInput;
      output: RegisterServiceOutput;
    };
    sdk: {
      input: RegisterServiceCommandInput;
      output: RegisterServiceCommandOutput;
    };
  };
}
