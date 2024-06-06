// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { de_TagResourceCommand, se_TagResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * Applies the supplied tags to a configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, TagResourceCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, TagResourceCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // TagResourceRequest
 *   ResourceARN: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       TagKey: "STRING_VALUE", // required
 *       TagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  Customer/consumer-facing internal service exception.
 *         https://w.amazon.com/index.php/AWS/API_Standards/Exceptions#InternalServiceError
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  We were not able to find the resource for your request.
 *
 * @throws {@link ServiceUnavailableException} (client fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  The supplied list of tags contains too many tags.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WheatleyOrchestration_20171011", "TagResource", {})
  .n("ChatbotClient", "TagResourceCommand")
  .f(void 0, void 0)
  .ser(se_TagResourceCommand)
  .de(de_TagResourceCommand)
  .build() {}
