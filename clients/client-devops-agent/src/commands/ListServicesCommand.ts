// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListServicesInput, ListServicesOutput } from "../models/models_0";
import { ListServices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesInput {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesOutput, __MetadataBearer {}

/**
 * List a list of registered service on the account level.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListServicesCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListServicesCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListServicesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filterServiceType: "github" || "slack" || "azure" || "azuredevops" || "dynatrace" || "servicenow" || "pagerduty" || "gitlab" || "eventChannel" || "mcpservernewrelic" || "mcpservergrafana" || "mcpserverdatadog" || "mcpserver" || "mcpserversplunk" || "azureidentity",
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesOutput
 * //   nextToken: "STRING_VALUE",
 * //   services: [ // RegisteredServicesList // required
 * //     { // RegisteredService
 * //       serviceId: "STRING_VALUE", // required
 * //       serviceType: "github" || "slack" || "azure" || "azuredevops" || "dynatrace" || "servicenow" || "pagerduty" || "gitlab" || "eventChannel" || "mcpservernewrelic" || "mcpservergrafana" || "mcpserverdatadog" || "mcpserver" || "mcpserversplunk" || "azureidentity", // required
 * //       name: "STRING_VALUE",
 * //       accessibleResources: [ // DocumentList
 * //         "DOCUMENT_VALUE",
 * //       ],
 * //       additionalServiceDetails: { // AdditionalServiceDetails Union: only one key present
 * //         github: { // RegisteredGithubServiceDetails
 * //           owner: "STRING_VALUE", // required
 * //           ownerType: "organization" || "user", // required
 * //           targetUrl: "STRING_VALUE",
 * //         },
 * //         slack: { // RegisteredSlackServiceDetails
 * //           teamId: "STRING_VALUE", // required
 * //           teamName: "STRING_VALUE", // required
 * //         },
 * //         mcpserverdatadog: { // RegisteredMCPServerDetails
 * //           name: "STRING_VALUE", // required
 * //           endpoint: "STRING_VALUE", // required
 * //           authorizationMethod: "oauth-client-credentials" || "oauth-3lo" || "api-key" || "bearer-token", // required
 * //           description: "STRING_VALUE",
 * //           apiKeyHeader: "STRING_VALUE",
 * //         },
 * //         mcpserver: {
 * //           name: "STRING_VALUE", // required
 * //           endpoint: "STRING_VALUE", // required
 * //           authorizationMethod: "oauth-client-credentials" || "oauth-3lo" || "api-key" || "bearer-token", // required
 * //           description: "STRING_VALUE",
 * //           apiKeyHeader: "STRING_VALUE",
 * //         },
 * //         servicenow: { // RegisteredServiceNowDetails
 * //           instanceUrl: "STRING_VALUE",
 * //         },
 * //         gitlab: { // RegisteredGitLabServiceDetails
 * //           targetUrl: "STRING_VALUE", // required
 * //           tokenType: "personal" || "group", // required
 * //           groupId: "STRING_VALUE",
 * //         },
 * //         mcpserversplunk: {
 * //           name: "STRING_VALUE", // required
 * //           endpoint: "STRING_VALUE", // required
 * //           authorizationMethod: "oauth-client-credentials" || "oauth-3lo" || "api-key" || "bearer-token", // required
 * //           description: "STRING_VALUE",
 * //           apiKeyHeader: "STRING_VALUE",
 * //         },
 * //         mcpservernewrelic: { // RegisteredNewRelicDetails
 * //           accountId: "STRING_VALUE", // required
 * //           region: "US" || "EU", // required
 * //           description: "STRING_VALUE",
 * //         },
 * //         azuredevops: { // RegisteredAzureDevOpsServiceDetails
 * //           organizationName: "STRING_VALUE", // required
 * //         },
 * //         azureidentity: { // RegisteredAzureIdentityDetails
 * //           tenantId: "STRING_VALUE", // required
 * //           clientId: "STRING_VALUE", // required
 * //           webIdentityRoleArn: "STRING_VALUE", // required
 * //           webIdentityTokenAudiences: [ // WebIdentityTokenAudienceList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         mcpservergrafana: { // RegisteredGrafanaServerDetails
 * //           endpoint: "STRING_VALUE", // required
 * //           authorizationMethod: "oauth-client-credentials" || "oauth-3lo" || "api-key" || "bearer-token", // required
 * //         },
 * //         pagerduty: { // RegisteredPagerDutyDetails
 * //           scopes: [ // PagerDutyScopesList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       kmsKeyArn: "STRING_VALUE",
 * //       privateConnectionName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class ListServicesCommand extends $Command
  .classBuilder<
    ListServicesCommandInput,
    ListServicesCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "ListServices", {})
  .n("DevOpsAgentClient", "ListServicesCommand")
  .sc(ListServices$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesInput;
      output: ListServicesOutput;
    };
    sdk: {
      input: ListServicesCommandInput;
      output: ListServicesCommandOutput;
    };
  };
}
