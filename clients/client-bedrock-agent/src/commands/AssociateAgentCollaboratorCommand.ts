// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAgentCollaboratorRequest, AssociateAgentCollaboratorResponse } from "../models/models_0";
import { AssociateAgentCollaborator } from "../schemas/schemas_5_Agent";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAgentCollaboratorCommand}.
 */
export interface AssociateAgentCollaboratorCommandInput extends AssociateAgentCollaboratorRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAgentCollaboratorCommand}.
 */
export interface AssociateAgentCollaboratorCommandOutput extends AssociateAgentCollaboratorResponse, __MetadataBearer {}

/**
 * <p>Makes an agent a collaborator for another agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, AssociateAgentCollaboratorCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, AssociateAgentCollaboratorCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // AssociateAgentCollaboratorRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   agentDescriptor: { // AgentDescriptor
 *     aliasArn: "STRING_VALUE",
 *   },
 *   collaboratorName: "STRING_VALUE", // required
 *   collaborationInstruction: "STRING_VALUE", // required
 *   relayConversationHistory: "TO_COLLABORATOR" || "DISABLED",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AssociateAgentCollaboratorCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAgentCollaboratorResponse
 * //   agentCollaborator: { // AgentCollaborator
 * //     agentId: "STRING_VALUE", // required
 * //     agentVersion: "STRING_VALUE", // required
 * //     agentDescriptor: { // AgentDescriptor
 * //       aliasArn: "STRING_VALUE",
 * //     },
 * //     collaboratorId: "STRING_VALUE", // required
 * //     collaborationInstruction: "STRING_VALUE", // required
 * //     collaboratorName: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     relayConversationHistory: "TO_COLLABORATOR" || "DISABLED",
 * //     clientToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateAgentCollaboratorCommandInput - {@link AssociateAgentCollaboratorCommandInput}
 * @returns {@link AssociateAgentCollaboratorCommandOutput}
 * @see {@link AssociateAgentCollaboratorCommandInput} for command's `input` shape.
 * @see {@link AssociateAgentCollaboratorCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class AssociateAgentCollaboratorCommand extends $Command
  .classBuilder<
    AssociateAgentCollaboratorCommandInput,
    AssociateAgentCollaboratorCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "AssociateAgentCollaborator", {})
  .n("BedrockAgentClient", "AssociateAgentCollaboratorCommand")
  .sc(AssociateAgentCollaborator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAgentCollaboratorRequest;
      output: AssociateAgentCollaboratorResponse;
    };
    sdk: {
      input: AssociateAgentCollaboratorCommandInput;
      output: AssociateAgentCollaboratorCommandOutput;
    };
  };
}
