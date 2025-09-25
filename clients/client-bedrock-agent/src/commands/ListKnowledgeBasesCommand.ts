// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListKnowledgeBasesRequest, ListKnowledgeBasesResponse } from "../models/models_1";
import { ListKnowledgeBases } from "../schemas/schemas_15_Knowledge";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKnowledgeBasesCommand}.
 */
export interface ListKnowledgeBasesCommandInput extends ListKnowledgeBasesRequest {}
/**
 * @public
 *
 * The output of {@link ListKnowledgeBasesCommand}.
 */
export interface ListKnowledgeBasesCommandOutput extends ListKnowledgeBasesResponse, __MetadataBearer {}

/**
 * <p>Lists the knowledge bases in an account. The list also includesinformation about each knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListKnowledgeBasesCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListKnowledgeBasesCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListKnowledgeBasesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListKnowledgeBasesCommand(input);
 * const response = await client.send(command);
 * // { // ListKnowledgeBasesResponse
 * //   knowledgeBaseSummaries: [ // KnowledgeBaseSummaries // required
 * //     { // KnowledgeBaseSummary
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "CREATING" || "ACTIVE" || "DELETING" || "UPDATING" || "FAILED" || "DELETE_UNSUCCESSFUL", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKnowledgeBasesCommandInput - {@link ListKnowledgeBasesCommandInput}
 * @returns {@link ListKnowledgeBasesCommandOutput}
 * @see {@link ListKnowledgeBasesCommandInput} for command's `input` shape.
 * @see {@link ListKnowledgeBasesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
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
export class ListKnowledgeBasesCommand extends $Command
  .classBuilder<
    ListKnowledgeBasesCommandInput,
    ListKnowledgeBasesCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListKnowledgeBases", {})
  .n("BedrockAgentClient", "ListKnowledgeBasesCommand")
  .sc(ListKnowledgeBases)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKnowledgeBasesRequest;
      output: ListKnowledgeBasesResponse;
    };
    sdk: {
      input: ListKnowledgeBasesCommandInput;
      output: ListKnowledgeBasesCommandOutput;
    };
  };
}
