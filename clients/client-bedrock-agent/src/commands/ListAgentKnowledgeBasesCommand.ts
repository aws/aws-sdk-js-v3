// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentKnowledgeBasesRequest, ListAgentKnowledgeBasesResponse } from "../models/models_0";
import { de_ListAgentKnowledgeBasesCommand, se_ListAgentKnowledgeBasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAgentKnowledgeBasesCommand}.
 */
export interface ListAgentKnowledgeBasesCommandInput extends ListAgentKnowledgeBasesRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentKnowledgeBasesCommand}.
 */
export interface ListAgentKnowledgeBasesCommandOutput extends ListAgentKnowledgeBasesResponse, __MetadataBearer {}

/**
 * @public
 * List of Knowledge Bases associated to an existing Amazon Bedrock Agent Version
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentKnowledgeBasesCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentKnowledgeBasesCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ListAgentKnowledgeBasesRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentKnowledgeBasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentKnowledgeBasesResponse
 * //   agentKnowledgeBaseSummaries: [ // AgentKnowledgeBaseSummaries // required
 * //     { // AgentKnowledgeBaseSummary
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       knowledgeBaseState: "ENABLED" || "DISABLED", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentKnowledgeBasesCommandInput - {@link ListAgentKnowledgeBasesCommandInput}
 * @returns {@link ListAgentKnowledgeBasesCommandOutput}
 * @see {@link ListAgentKnowledgeBasesCommandInput} for command's `input` shape.
 * @see {@link ListAgentKnowledgeBasesCommandOutput} for command's `response` shape.
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
export class ListAgentKnowledgeBasesCommand extends $Command
  .classBuilder<
    ListAgentKnowledgeBasesCommandInput,
    ListAgentKnowledgeBasesCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentKnowledgeBases", {})
  .n("BedrockAgentClient", "ListAgentKnowledgeBasesCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentKnowledgeBasesCommand)
  .de(de_ListAgentKnowledgeBasesCommand)
  .build() {}
