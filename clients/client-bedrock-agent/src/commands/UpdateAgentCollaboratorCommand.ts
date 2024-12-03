// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAgentCollaboratorRequest,
  UpdateAgentCollaboratorRequestFilterSensitiveLog,
  UpdateAgentCollaboratorResponse,
  UpdateAgentCollaboratorResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateAgentCollaboratorCommand, se_UpdateAgentCollaboratorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentCollaboratorCommand}.
 */
export interface UpdateAgentCollaboratorCommandInput extends UpdateAgentCollaboratorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentCollaboratorCommand}.
 */
export interface UpdateAgentCollaboratorCommandOutput extends UpdateAgentCollaboratorResponse, __MetadataBearer {}

/**
 * <p>Updates an agent's collaborator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateAgentCollaboratorCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateAgentCollaboratorCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateAgentCollaboratorRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   collaboratorId: "STRING_VALUE", // required
 *   agentDescriptor: { // AgentDescriptor
 *     aliasArn: "STRING_VALUE",
 *   },
 *   collaboratorName: "STRING_VALUE", // required
 *   collaborationInstruction: "STRING_VALUE", // required
 *   relayConversationHistory: "TO_COLLABORATOR" || "DISABLED",
 * };
 * const command = new UpdateAgentCollaboratorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentCollaboratorResponse
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
 * @param UpdateAgentCollaboratorCommandInput - {@link UpdateAgentCollaboratorCommandInput}
 * @returns {@link UpdateAgentCollaboratorCommandOutput}
 * @see {@link UpdateAgentCollaboratorCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentCollaboratorCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateAgentCollaboratorCommand extends $Command
  .classBuilder<
    UpdateAgentCollaboratorCommandInput,
    UpdateAgentCollaboratorCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateAgentCollaborator", {})
  .n("BedrockAgentClient", "UpdateAgentCollaboratorCommand")
  .f(UpdateAgentCollaboratorRequestFilterSensitiveLog, UpdateAgentCollaboratorResponseFilterSensitiveLog)
  .ser(se_UpdateAgentCollaboratorCommand)
  .de(de_UpdateAgentCollaboratorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentCollaboratorRequest;
      output: UpdateAgentCollaboratorResponse;
    };
    sdk: {
      input: UpdateAgentCollaboratorCommandInput;
      output: UpdateAgentCollaboratorCommandOutput;
    };
  };
}
