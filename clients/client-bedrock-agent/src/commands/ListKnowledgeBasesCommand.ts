// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListKnowledgeBasesRequest, ListKnowledgeBasesResponse } from "../models/models_0";
import { de_ListKnowledgeBasesCommand, se_ListKnowledgeBasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * List Knowledge Bases
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListKnowledgeBasesCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListKnowledgeBasesCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
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
 * //       status: "CREATING" || "ACTIVE" || "DELETING" || "UPDATING" || "FAILED", // required
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
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
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
export class ListKnowledgeBasesCommand extends $Command
  .classBuilder<
    ListKnowledgeBasesCommandInput,
    ListKnowledgeBasesCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListKnowledgeBases", {})
  .n("BedrockAgentClient", "ListKnowledgeBasesCommand")
  .f(void 0, void 0)
  .ser(se_ListKnowledgeBasesCommand)
  .de(de_ListKnowledgeBasesCommand)
  .build() {}
