// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPromptsRequest, ListPromptsResponse } from "../models/models_1";
import { ListPrompts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPromptsCommand}.
 */
export interface ListPromptsCommandInput extends ListPromptsRequest {}
/**
 * @public
 *
 * The output of {@link ListPromptsCommand}.
 */
export interface ListPromptsCommandOutput extends ListPromptsResponse, __MetadataBearer {}

/**
 * <p>Returns either information about the working draft (<code>DRAFT</code> version) of each prompt in an account, or information about of all versions of a prompt, depending on whether you include the <code>promptIdentifier</code> field or not. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-manage.html#prompt-management-view.html">View information about prompts using Prompt management</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListPromptsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListPromptsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListPromptsRequest
 *   promptIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPromptsCommand(input);
 * const response = await client.send(command);
 * // { // ListPromptsResponse
 * //   promptSummaries: [ // PromptSummaries // required
 * //     { // PromptSummary
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPromptsCommandInput - {@link ListPromptsCommandInput}
 * @returns {@link ListPromptsCommandOutput}
 * @see {@link ListPromptsCommandInput} for command's `input` shape.
 * @see {@link ListPromptsCommandOutput} for command's `response` shape.
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
export class ListPromptsCommand extends $Command
  .classBuilder<
    ListPromptsCommandInput,
    ListPromptsCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListPrompts", {})
  .n("BedrockAgentClient", "ListPromptsCommand")
  .sc(ListPrompts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPromptsRequest;
      output: ListPromptsResponse;
    };
    sdk: {
      input: ListPromptsCommandInput;
      output: ListPromptsCommandOutput;
    };
  };
}
