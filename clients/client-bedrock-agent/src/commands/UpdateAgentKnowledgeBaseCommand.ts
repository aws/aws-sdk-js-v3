// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAgentKnowledgeBaseRequest, UpdateAgentKnowledgeBaseResponse } from "../models/models_1";
import { UpdateAgentKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentKnowledgeBaseCommand}.
 */
export interface UpdateAgentKnowledgeBaseCommandInput extends UpdateAgentKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentKnowledgeBaseCommand}.
 */
export interface UpdateAgentKnowledgeBaseCommandOutput extends UpdateAgentKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration for a knowledge base that has been associated with an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateAgentKnowledgeBaseRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   knowledgeBaseState: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateAgentKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentKnowledgeBaseResponse
 * //   agentKnowledgeBase: { // AgentKnowledgeBase
 * //     agentId: "STRING_VALUE", // required
 * //     agentVersion: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     knowledgeBaseState: "ENABLED" || "DISABLED", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAgentKnowledgeBaseCommandInput - {@link UpdateAgentKnowledgeBaseCommandInput}
 * @returns {@link UpdateAgentKnowledgeBaseCommandOutput}
 * @see {@link UpdateAgentKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentKnowledgeBaseCommandOutput} for command's `response` shape.
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
export class UpdateAgentKnowledgeBaseCommand extends $Command
  .classBuilder<
    UpdateAgentKnowledgeBaseCommandInput,
    UpdateAgentKnowledgeBaseCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateAgentKnowledgeBase", {})
  .n("BedrockAgentClient", "UpdateAgentKnowledgeBaseCommand")
  .sc(UpdateAgentKnowledgeBase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentKnowledgeBaseRequest;
      output: UpdateAgentKnowledgeBaseResponse;
    };
    sdk: {
      input: UpdateAgentKnowledgeBaseCommandInput;
      output: UpdateAgentKnowledgeBaseCommandOutput;
    };
  };
}
