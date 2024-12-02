// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteKnowledgeBaseRequest, DeleteKnowledgeBaseResponse } from "../models/models_1";
import { de_DeleteKnowledgeBaseCommand, se_DeleteKnowledgeBaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKnowledgeBaseCommand}.
 */
export interface DeleteKnowledgeBaseCommandInput extends DeleteKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKnowledgeBaseCommand}.
 */
export interface DeleteKnowledgeBaseCommandOutput extends DeleteKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_DisassociateAgentKnowledgeBase.html">DisassociateAgentKnowledgeBase</a> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteKnowledgeBaseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // DeleteKnowledgeBaseResponse
 * //   knowledgeBaseId: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "UPDATING" || "FAILED" || "DELETE_UNSUCCESSFUL", // required
 * // };
 *
 * ```
 *
 * @param DeleteKnowledgeBaseCommandInput - {@link DeleteKnowledgeBaseCommandInput}
 * @returns {@link DeleteKnowledgeBaseCommandOutput}
 * @see {@link DeleteKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link DeleteKnowledgeBaseCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteKnowledgeBaseCommand extends $Command
  .classBuilder<
    DeleteKnowledgeBaseCommandInput,
    DeleteKnowledgeBaseCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "DeleteKnowledgeBase", {})
  .n("BedrockAgentClient", "DeleteKnowledgeBaseCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKnowledgeBaseCommand)
  .de(de_DeleteKnowledgeBaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKnowledgeBaseRequest;
      output: DeleteKnowledgeBaseResponse;
    };
    sdk: {
      input: DeleteKnowledgeBaseCommandInput;
      output: DeleteKnowledgeBaseCommandOutput;
    };
  };
}
