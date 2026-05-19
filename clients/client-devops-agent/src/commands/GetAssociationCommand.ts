// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAssociationInput, GetAssociationOutput } from "../models/models_0";
import { GetAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssociationCommand}.
 */
export interface GetAssociationCommandInput extends GetAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetAssociationCommand}.
 */
export interface GetAssociationCommandOutput extends GetAssociationOutput, __MetadataBearer {}

/**
 * <p>Retrieves given associations configured for a specific AgentSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetAssociationCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetAssociationCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // GetAssociationInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new GetAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociationOutput
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
 * //       mcpserversigv4: { // MCPServerSigV4Configuration
 * //         tools: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssociationCommandInput - {@link GetAssociationCommandInput}
 * @returns {@link GetAssociationCommandOutput}
 * @see {@link GetAssociationCommandInput} for command's `input` shape.
 * @see {@link GetAssociationCommandOutput} for command's `response` shape.
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
export class GetAssociationCommand extends $Command
  .classBuilder<
    GetAssociationCommandInput,
    GetAssociationCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "GetAssociation", {})
  .n("DevOpsAgentClient", "GetAssociationCommand")
  .sc(GetAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssociationInput;
      output: GetAssociationOutput;
    };
    sdk: {
      input: GetAssociationCommandInput;
      output: GetAssociationCommandOutput;
    };
  };
}
