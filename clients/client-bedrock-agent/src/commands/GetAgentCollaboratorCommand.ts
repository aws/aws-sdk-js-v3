// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAgentCollaboratorRequest, GetAgentCollaboratorResponse } from "../models/models_0";
import { GetAgentCollaborator } from "../schemas/schemas_5_Agent";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentCollaboratorCommand}.
 */
export interface GetAgentCollaboratorCommandInput extends GetAgentCollaboratorRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentCollaboratorCommand}.
 */
export interface GetAgentCollaboratorCommandOutput extends GetAgentCollaboratorResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an agent's collaborator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetAgentCollaboratorCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetAgentCollaboratorCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetAgentCollaboratorRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   collaboratorId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentCollaboratorCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentCollaboratorResponse
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
 * @param GetAgentCollaboratorCommandInput - {@link GetAgentCollaboratorCommandInput}
 * @returns {@link GetAgentCollaboratorCommandOutput}
 * @see {@link GetAgentCollaboratorCommandInput} for command's `input` shape.
 * @see {@link GetAgentCollaboratorCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
export class GetAgentCollaboratorCommand extends $Command
  .classBuilder<
    GetAgentCollaboratorCommandInput,
    GetAgentCollaboratorCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetAgentCollaborator", {})
  .n("BedrockAgentClient", "GetAgentCollaboratorCommand")
  .sc(GetAgentCollaborator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentCollaboratorRequest;
      output: GetAgentCollaboratorResponse;
    };
    sdk: {
      input: GetAgentCollaboratorCommandInput;
      output: GetAgentCollaboratorCommandOutput;
    };
  };
}
