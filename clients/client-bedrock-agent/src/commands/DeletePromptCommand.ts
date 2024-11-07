// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePromptRequest, DeletePromptResponse } from "../models/models_1";
import { de_DeletePromptCommand, se_DeletePromptCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePromptCommand}.
 */
export interface DeletePromptCommandInput extends DeletePromptRequest {}
/**
 * @public
 *
 * The output of {@link DeletePromptCommand}.
 */
export interface DeletePromptCommandOutput extends DeletePromptResponse, __MetadataBearer {}

/**
 * <p>Deletes a prompt or a version of it, depending on whether you include the <code>promptVersion</code> field or not. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-manage.html#prompt-management-delete.html">Delete prompts from the Prompt management tool</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-deploy.html#prompt-management-versions-delete.html">Delete a version of a prompt from the Prompt management tool</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeletePromptCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeletePromptCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // DeletePromptRequest
 *   promptIdentifier: "STRING_VALUE", // required
 *   promptVersion: "STRING_VALUE",
 * };
 * const command = new DeletePromptCommand(input);
 * const response = await client.send(command);
 * // { // DeletePromptResponse
 * //   id: "STRING_VALUE", // required
 * //   version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePromptCommandInput - {@link DeletePromptCommandInput}
 * @returns {@link DeletePromptCommandOutput}
 * @see {@link DeletePromptCommandInput} for command's `input` shape.
 * @see {@link DeletePromptCommandOutput} for command's `response` shape.
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
export class DeletePromptCommand extends $Command
  .classBuilder<
    DeletePromptCommandInput,
    DeletePromptCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "DeletePrompt", {})
  .n("BedrockAgentClient", "DeletePromptCommand")
  .f(void 0, void 0)
  .ser(se_DeletePromptCommand)
  .de(de_DeletePromptCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePromptRequest;
      output: DeletePromptResponse;
    };
    sdk: {
      input: DeletePromptCommandInput;
      output: DeletePromptCommandOutput;
    };
  };
}
