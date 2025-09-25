// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAgentKnowledgeBaseRequest, AssociateAgentKnowledgeBaseResponse } from "../models/models_1";
import { AssociateAgentKnowledgeBase } from "../schemas/schemas_2_Agent";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAgentKnowledgeBaseCommand}.
 */
export interface AssociateAgentKnowledgeBaseCommandInput extends AssociateAgentKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAgentKnowledgeBaseCommand}.
 */
export interface AssociateAgentKnowledgeBaseCommandOutput
  extends AssociateAgentKnowledgeBaseResponse,
    __MetadataBearer {}

/**
 * <p>Associates a knowledge base with an agent. If a knowledge base is associated and its <code>indexState</code> is set to <code>Enabled</code>, the agent queries the knowledge base for information to augment its response to the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, AssociateAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, AssociateAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // AssociateAgentKnowledgeBaseRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   knowledgeBaseState: "ENABLED" || "DISABLED",
 * };
 * const command = new AssociateAgentKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAgentKnowledgeBaseResponse
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
 * @param AssociateAgentKnowledgeBaseCommandInput - {@link AssociateAgentKnowledgeBaseCommandInput}
 * @returns {@link AssociateAgentKnowledgeBaseCommandOutput}
 * @see {@link AssociateAgentKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link AssociateAgentKnowledgeBaseCommandOutput} for command's `response` shape.
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
export class AssociateAgentKnowledgeBaseCommand extends $Command
  .classBuilder<
    AssociateAgentKnowledgeBaseCommandInput,
    AssociateAgentKnowledgeBaseCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "AssociateAgentKnowledgeBase", {})
  .n("BedrockAgentClient", "AssociateAgentKnowledgeBaseCommand")
  .sc(AssociateAgentKnowledgeBase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAgentKnowledgeBaseRequest;
      output: AssociateAgentKnowledgeBaseResponse;
    };
    sdk: {
      input: AssociateAgentKnowledgeBaseCommandInput;
      output: AssociateAgentKnowledgeBaseCommandOutput;
    };
  };
}
