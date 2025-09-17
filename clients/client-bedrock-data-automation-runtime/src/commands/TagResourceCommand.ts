// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { de_TagResourceCommand, se_TagResourceCommand } from "../protocols/Aws_json1_1";

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
 * Tag an Amazon Bedrock Data Automation resource
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationRuntimeClient, TagResourceCommand } from "@aws-sdk/client-bedrock-data-automation-runtime"; // ES Modules import
 * // const { BedrockDataAutomationRuntimeClient, TagResourceCommand } = require("@aws-sdk/client-bedrock-data-automation-runtime"); // CommonJS import
 * // import type { BedrockDataAutomationRuntimeClientConfig } from "@aws-sdk/client-bedrock-data-automation-runtime";
 * const config = {}; // type is BedrockDataAutomationRuntimeClientConfig
 * const client = new BedrockDataAutomationRuntimeClient(config);
 * const input = { // TagResourceRequest
 *   resourceARN: "STRING_VALUE", // required
 *   tags: [ // TagList // required
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
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
 * @see {@link BedrockDataAutomationRuntimeClientResolvedConfig | config} for BedrockDataAutomationRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception will be thrown when customer does not have access to API.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is for any internal un-expected service errors.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception will be thrown when resource provided from customer not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception will be thrown when service quota is exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception will be thrown when customer reached API TPS limit.
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception will be thrown when customer provided invalid parameters.
 *
 * @throws {@link BedrockDataAutomationRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomationRuntime service.</p>
 *
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    BedrockDataAutomationRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockKeystoneRuntimeService", "TagResource", {})
  .n("BedrockDataAutomationRuntimeClient", "TagResourceCommand")
  .f(void 0, void 0)
  .ser(se_TagResourceCommand)
  .de(de_TagResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
