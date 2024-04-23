// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAgentKnowledgeBaseRequest, UpdateAgentKnowledgeBaseResponse } from "../models/models_0";
import { de_UpdateAgentKnowledgeBaseCommand, se_UpdateAgentKnowledgeBaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * Updates an existing Knowledge Base associated to an Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
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
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class UpdateAgentKnowledgeBaseCommand extends $Command
  .classBuilder<
    UpdateAgentKnowledgeBaseCommandInput,
    UpdateAgentKnowledgeBaseCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateAgentKnowledgeBase", {})
  .n("BedrockAgentClient", "UpdateAgentKnowledgeBaseCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAgentKnowledgeBaseCommand)
  .de(de_UpdateAgentKnowledgeBaseCommand)
  .build() {}
