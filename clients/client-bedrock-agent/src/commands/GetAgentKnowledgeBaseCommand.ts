// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAgentKnowledgeBaseRequest, GetAgentKnowledgeBaseResponse } from "../models/models_1";
import { GetAgentKnowledgeBase } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentKnowledgeBaseCommand}.
 */
export interface GetAgentKnowledgeBaseCommandInput extends GetAgentKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentKnowledgeBaseCommand}.
 */
export interface GetAgentKnowledgeBaseCommandOutput extends GetAgentKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Gets information about a knowledge base associated with an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetAgentKnowledgeBaseRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentKnowledgeBaseResponse
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
 * @param GetAgentKnowledgeBaseCommandInput - {@link GetAgentKnowledgeBaseCommandInput}
 * @returns {@link GetAgentKnowledgeBaseCommandOutput}
 * @see {@link GetAgentKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link GetAgentKnowledgeBaseCommandOutput} for command's `response` shape.
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
export class GetAgentKnowledgeBaseCommand extends $Command
  .classBuilder<
    GetAgentKnowledgeBaseCommandInput,
    GetAgentKnowledgeBaseCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetAgentKnowledgeBase", {})
  .n("BedrockAgentClient", "GetAgentKnowledgeBaseCommand")
  .sc(GetAgentKnowledgeBase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentKnowledgeBaseRequest;
      output: GetAgentKnowledgeBaseResponse;
    };
    sdk: {
      input: GetAgentKnowledgeBaseCommandInput;
      output: GetAgentKnowledgeBaseCommandOutput;
    };
  };
}
