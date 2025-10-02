// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentKnowledgeBasesRequest, ListAgentKnowledgeBasesResponse } from "../models/models_1";
import { de_ListAgentKnowledgeBasesCommand, se_ListAgentKnowledgeBasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists knowledge bases associated with an agent and information about each one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentKnowledgeBasesCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentKnowledgeBasesCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
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
export class ListAgentKnowledgeBasesCommand extends $Command
  .classBuilder<
    ListAgentKnowledgeBasesCommandInput,
    ListAgentKnowledgeBasesCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentKnowledgeBases", {})
  .n("BedrockAgentClient", "ListAgentKnowledgeBasesCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentKnowledgeBasesCommand)
  .de(de_ListAgentKnowledgeBasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentKnowledgeBasesRequest;
      output: ListAgentKnowledgeBasesResponse;
    };
    sdk: {
      input: ListAgentKnowledgeBasesCommandInput;
      output: ListAgentKnowledgeBasesCommandOutput;
    };
  };
}
