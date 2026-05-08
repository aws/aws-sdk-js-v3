// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAssociationInput, UpdateAssociationOutput } from "../models/models_0";
import { UpdateAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssociationCommand}.
 */
export interface UpdateAssociationCommandInput extends UpdateAssociationInput {}
/**
 * @public
 *
 * The output of {@link UpdateAssociationCommand}.
 */
export interface UpdateAssociationCommandOutput extends UpdateAssociationOutput, __MetadataBearer {}

/**
 * Partially updates the configuration of an existing service association for an AgentSpace. Present fields are fully replaced; absent fields are left unchanged. Returns 200 OK on success.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, UpdateAssociationCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, UpdateAssociationCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // UpdateAssociationInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 *   configuration: { // ServiceConfiguration Union: only one key present
 *     sourceAws: { // SourceAwsConfiguration
 *       accountId: "STRING_VALUE", // required
 *       accountType: "source", // required
 *       assumableRoleArn: "STRING_VALUE", // required
 *       externalId: "STRING_VALUE",
 *     },
 *     aws: { // AWSConfiguration
 *       assumableRoleArn: "STRING_VALUE", // required
 *       accountId: "STRING_VALUE", // required
 *       accountType: "monitor", // required
 *     },
 *     github: { // GitHubConfiguration
 *       repoName: "STRING_VALUE", // required
 *       repoId: "STRING_VALUE", // required
 *       owner: "STRING_VALUE", // required
 *       ownerType: "organization" || "user", // required
 *       instanceIdentifier: "STRING_VALUE",
 *     },
 *     slack: { // SlackConfiguration
 *       workspaceId: "STRING_VALUE", // required
 *       workspaceName: "STRING_VALUE", // required
 *       transmissionTarget: { // SlackTransmissionTarget
 *         opsOncallTarget: { // SlackChannel
 *           channelName: "STRING_VALUE",
 *           channelId: "STRING_VALUE", // required
 *         },
 *         opsSRETarget: {
 *           channelName: "STRING_VALUE",
 *           channelId: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     dynatrace: { // DynatraceConfiguration
 *       envId: "STRING_VALUE", // required
 *       resources: [ // DynatraceResourceList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     servicenow: { // ServiceNowConfiguration
 *       instanceId: "STRING_VALUE",
 *       authScopes: [ // ServiceNowAuthenticationScopeList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     mcpservernewrelic: { // MCPServerNewRelicConfiguration
 *       accountId: "STRING_VALUE", // required
 *       endpoint: "STRING_VALUE", // required
 *     },
 *     mcpserverdatadog: {},
 *     mcpserver: { // MCPServerConfiguration
 *       tools: [ // MCPToolsList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     gitlab: { // GitLabConfiguration
 *       projectId: "STRING_VALUE", // required
 *       projectPath: "STRING_VALUE", // required
 *       instanceIdentifier: "STRING_VALUE",
 *     },
 *     mcpserversplunk: {},
 *     eventChannel: {},
 *     azure: { // AzureConfiguration
 *       subscriptionId: "STRING_VALUE", // required
 *     },
 *     azuredevops: { // AzureDevOpsConfiguration
 *       organizationName: "STRING_VALUE", // required
 *       projectId: "STRING_VALUE", // required
 *       projectName: "STRING_VALUE", // required
 *     },
 *     mcpservergrafana: { // MCPServerGrafanaConfiguration
 *       endpoint: "STRING_VALUE", // required
 *       organizationId: "STRING_VALUE",
 *       tools: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     pagerduty: { // PagerDutyConfiguration
 *       services: [ // PagerDutyServicesList // required
 *         "STRING_VALUE",
 *       ],
 *       customerEmail: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssociationOutput
 * //   association: { // Association
 * //     agentSpaceId: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     status: "valid" || "invalid" || "pending-confirmation",
 * //     associationId: "STRING_VALUE", // required
 * //     serviceId: "STRING_VALUE", // required
 * //     configuration: { // ServiceConfiguration Union: only one key present
 * //       sourceAws: { // SourceAwsConfiguration
 * //         accountId: "STRING_VALUE", // required
 * //         accountType: "source", // required
 * //         assumableRoleArn: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //       },
 * //       aws: { // AWSConfiguration
 * //         assumableRoleArn: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //         accountType: "monitor", // required
 * //       },
 * //       github: { // GitHubConfiguration
 * //         repoName: "STRING_VALUE", // required
 * //         repoId: "STRING_VALUE", // required
 * //         owner: "STRING_VALUE", // required
 * //         ownerType: "organization" || "user", // required
 * //         instanceIdentifier: "STRING_VALUE",
 * //       },
 * //       slack: { // SlackConfiguration
 * //         workspaceId: "STRING_VALUE", // required
 * //         workspaceName: "STRING_VALUE", // required
 * //         transmissionTarget: { // SlackTransmissionTarget
 * //           opsOncallTarget: { // SlackChannel
 * //             channelName: "STRING_VALUE",
 * //             channelId: "STRING_VALUE", // required
 * //           },
 * //           opsSRETarget: {
 * //             channelName: "STRING_VALUE",
 * //             channelId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       dynatrace: { // DynatraceConfiguration
 * //         envId: "STRING_VALUE", // required
 * //         resources: [ // DynatraceResourceList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       servicenow: { // ServiceNowConfiguration
 * //         instanceId: "STRING_VALUE",
 * //         authScopes: [ // ServiceNowAuthenticationScopeList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       mcpservernewrelic: { // MCPServerNewRelicConfiguration
 * //         accountId: "STRING_VALUE", // required
 * //         endpoint: "STRING_VALUE", // required
 * //       },
 * //       mcpserverdatadog: {},
 * //       mcpserver: { // MCPServerConfiguration
 * //         tools: [ // MCPToolsList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       gitlab: { // GitLabConfiguration
 * //         projectId: "STRING_VALUE", // required
 * //         projectPath: "STRING_VALUE", // required
 * //         instanceIdentifier: "STRING_VALUE",
 * //       },
 * //       mcpserversplunk: {},
 * //       eventChannel: {},
 * //       azure: { // AzureConfiguration
 * //         subscriptionId: "STRING_VALUE", // required
 * //       },
 * //       azuredevops: { // AzureDevOpsConfiguration
 * //         organizationName: "STRING_VALUE", // required
 * //         projectId: "STRING_VALUE", // required
 * //         projectName: "STRING_VALUE", // required
 * //       },
 * //       mcpservergrafana: { // MCPServerGrafanaConfiguration
 * //         endpoint: "STRING_VALUE", // required
 * //         organizationId: "STRING_VALUE",
 * //         tools: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       pagerduty: { // PagerDutyConfiguration
 * //         services: [ // PagerDutyServicesList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         customerEmail: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   webhook: { // GenericWebhook
 * //     webhookUrl: "STRING_VALUE",
 * //     webhookId: "STRING_VALUE",
 * //     webhookType: "hmac" || "apikey" || "gitlab" || "pagerduty",
 * //     webhookSecret: "STRING_VALUE",
 * //     apiKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssociationCommandInput - {@link UpdateAssociationCommandInput}
 * @returns {@link UpdateAssociationCommandOutput}
 * @see {@link UpdateAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class UpdateAssociationCommand extends $Command
  .classBuilder<
    UpdateAssociationCommandInput,
    UpdateAssociationCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "UpdateAssociation", {})
  .n("DevOpsAgentClient", "UpdateAssociationCommand")
  .sc(UpdateAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssociationInput;
      output: UpdateAssociationOutput;
    };
    sdk: {
      input: UpdateAssociationCommandInput;
      output: UpdateAssociationCommandOutput;
    };
  };
}
