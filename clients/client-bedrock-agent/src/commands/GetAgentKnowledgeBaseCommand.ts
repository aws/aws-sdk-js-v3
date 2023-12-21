// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAgentKnowledgeBaseRequest, GetAgentKnowledgeBaseResponse } from "../models/models_0";
import { de_GetAgentKnowledgeBaseCommand, se_GetAgentKnowledgeBaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * Gets a knowledge base associated to an existing Amazon Bedrock Agent Version
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetAgentKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetAgentKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
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
 *  This exception is thrown when a request is denied per access permissions
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
export class GetAgentKnowledgeBaseCommand extends $Command
  .classBuilder<
    GetAgentKnowledgeBaseCommandInput,
    GetAgentKnowledgeBaseCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: BedrockAgentClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetAgentKnowledgeBase", {})
  .n("BedrockAgentClient", "GetAgentKnowledgeBaseCommand")
  .f(void 0, void 0)
  .ser(se_GetAgentKnowledgeBaseCommand)
  .de(de_GetAgentKnowledgeBaseCommand)
  .build() {}
