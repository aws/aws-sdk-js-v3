// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetServiceInput, GetServiceOutput } from "../models/models_0";
import { GetService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceCommand}.
 */
export interface GetServiceCommandInput extends GetServiceInput {}
/**
 * @public
 *
 * The output of {@link GetServiceCommand}.
 */
export interface GetServiceCommandOutput extends GetServiceOutput, __MetadataBearer {}

/**
 * <p>Retrieves given service by it's unique identifier</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetServiceCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetServiceCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // GetServiceInput
 *   serviceId: "STRING_VALUE", // required
 * };
 * const command = new GetServiceCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceOutput
 * //   service: { // RegisteredService
 * //     serviceId: "STRING_VALUE", // required
 * //     serviceType: "github" || "slack" || "azure" || "azuredevops" || "dynatrace" || "servicenow" || "pagerduty" || "gitlab" || "eventChannel" || "mcpservernewrelic" || "mcpservergrafana" || "mcpserverdatadog" || "mcpserver" || "mcpserversplunk" || "azureidentity" || "mcpserversigv4" || "remoteagent" || "remoteagentsigv4", // required
 * //     name: "STRING_VALUE",
 * //     accessibleResources: [ // DocumentList
 * //       "DOCUMENT_VALUE",
 * //     ],
 * //     additionalServiceDetails: { // AdditionalServiceDetails Union: only one key present
 * //       github: { // RegisteredGithubServiceDetails
 * //         owner: "STRING_VALUE", // required
 * //         ownerType: "organization" || "user", // required
 * //         targetUrl: "STRING_VALUE",
 * //       },
 * //       slack: { // RegisteredSlackServiceDetails
 * //         teamId: "STRING_VALUE", // required
 * //         teamName: "STRING_VALUE", // required
 * //       },
 * //       mcpserverdatadog: { // RegisteredMCPServerDetails
 * //         name: "STRING_VALUE", // required
 * //         endpoint: "STRING_VALUE", // required
 * //         authorizationMethod: "oauth-client-credentials" || "oauth-3lo" || "api-key" || "bearer-token", // required
 * //         description: "STRING_VALUE",
 * //         apiKeyHeader: "STRING_VALUE",
 * //       },
 * //       mcpserver: {
 * //         name: "STRING_VALUE", // required
 * //         endpoint: "STRING_VALUE", // required
 * //         authorizationMethod: "oauth-client-credentials" || "oauth-3lo" || "api-key" || "bearer-token", // required
 * //         description: "STRING_VALUE",
 * //         apiKeyHeader: "STRING_VALUE",
 * //       },
 * //       servicenow: { // RegisteredServiceNowDetails
 * //         instanceUrl: "STRING_VALUE",
 * //       },
 * //       gitlab: { // RegisteredGitLabServiceDetails
 * //         targetUrl: "STRING_VALUE", // required
 * //         tokenType: "personal" || "group", // required
 * //         groupId: "STRING_VALUE",
 * //       },
 * //       mcpserversplunk: {
 * //         name: "STRING_VALUE", // required
 * //         endpoint: "STRING_VALUE", // required
 * //         authorizationMethod: "oauth-client-credentials" || "oauth-3lo" || "api-key" || "bearer-token", // required
 * //         description: "STRING_VALUE",
 * //         apiKeyHeader: "STRING_VALUE",
 * //       },
 * //       mcpservernewrelic: { // RegisteredNewRelicDetails
 * //         accountId: "STRING_VALUE", // required
 * //         region: "US" || "EU", // required
 * //         description: "STRING_VALUE",
 * //       },
 * //       azuredevops: { // RegisteredAzureDevOpsServiceDetails
 * //         organizationName: "STRING_VALUE", // required
 * //       },
 * //       azureidentity: { // RegisteredAzureIdentityDetails
 * //         tenantId: "STRING_VALUE", // required
 * //         clientId: "STRING_VALUE", // required
 * //         webIdentityRoleArn: "STRING_VALUE", // required
 * //         webIdentityTokenAudiences: [ // WebIdentityTokenAudienceList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       mcpservergrafana: { // RegisteredGrafanaServerDetails
 * //         endpoint: "STRING_VALUE", // required
 * //         authorizationMethod: "oauth-client-credentials" || "oauth-3lo" || "api-key" || "bearer-token", // required
 * //       },
 * //       pagerduty: { // RegisteredPagerDutyDetails
 * //         scopes: [ // PagerDutyScopesList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       mcpserversigv4: { // RegisteredMCPServerSigV4Details
 * //         name: "STRING_VALUE", // required
 * //         endpoint: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         region: "STRING_VALUE", // required
 * //         service: "STRING_VALUE", // required
 * //         roleArn: "STRING_VALUE", // required
 * //         mcpRoleArn: "STRING_VALUE",
 * //         customHeaders: { // CustomHeaders
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       remoteagent: { // RegisteredRemoteAgentDetails
 * //         name: "STRING_VALUE", // required
 * //         endpoint: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         authorizationMethod: "oauth-client-credentials" || "api-key" || "bearer-token", // required
 * //         apiKeyHeader: "STRING_VALUE",
 * //       },
 * //       remoteagentsigv4: { // RegisteredRemoteAgentSigV4Details
 * //         name: "STRING_VALUE", // required
 * //         endpoint: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         region: "STRING_VALUE", // required
 * //         service: "STRING_VALUE", // required
 * //         roleArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     kmsKeyArn: "STRING_VALUE",
 * //     privateConnectionName: "STRING_VALUE",
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceCommandInput - {@link GetServiceCommandInput}
 * @returns {@link GetServiceCommandOutput}
 * @see {@link GetServiceCommandInput} for command's `input` shape.
 * @see {@link GetServiceCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class GetServiceCommand extends $Command
  .classBuilder<
    GetServiceCommandInput,
    GetServiceCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "GetService", {})
  .n("DevOpsAgentClient", "GetServiceCommand")
  .sc(GetService$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceInput;
      output: GetServiceOutput;
    };
    sdk: {
      input: GetServiceCommandInput;
      output: GetServiceCommandOutput;
    };
  };
}
