// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { de_ListTagsForResourceCommand, se_ListTagsForResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResponse, __MetadataBearer {}

/**
 * <p>List all the tags for the resource you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListTagsForResourceCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListTagsForResourceCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ListTagsForResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceResponse
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForResourceCommandInput - {@link ListTagsForResourceCommandInput}
 * @returns {@link ListTagsForResourceCommandOutput}
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTagsForResourceCommand extends $Command
  .classBuilder<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListTagsForResource", {})
  .n("BedrockAgentClient", "ListTagsForResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListTagsForResourceCommand)
  .de(de_ListTagsForResourceCommand)
  .build() {}
