// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { ListTagsForResource } from "../schemas/schemas_1_Resource";

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
 * List tags for an Amazon Bedrock Data Automation resource
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationRuntimeClient, ListTagsForResourceCommand } from "@aws-sdk/client-bedrock-data-automation-runtime"; // ES Modules import
 * // const { BedrockDataAutomationRuntimeClient, ListTagsForResourceCommand } = require("@aws-sdk/client-bedrock-data-automation-runtime"); // CommonJS import
 * // import type { BedrockDataAutomationRuntimeClientConfig } from "@aws-sdk/client-bedrock-data-automation-runtime";
 * const config = {}; // type is BedrockDataAutomationRuntimeClientConfig
 * const client = new BedrockDataAutomationRuntimeClient(config);
 * const input = { // ListTagsForResourceRequest
 *   resourceARN: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceResponse
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTagsForResourceCommandInput - {@link ListTagsForResourceCommandInput}
 * @returns {@link ListTagsForResourceCommandOutput}
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
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
export class ListTagsForResourceCommand extends $Command
  .classBuilder<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput,
    BedrockDataAutomationRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneRuntimeService", "ListTagsForResource", {})
  .n("BedrockDataAutomationRuntimeClient", "ListTagsForResourceCommand")
  .sc(ListTagsForResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourceRequest;
      output: ListTagsForResourceResponse;
    };
    sdk: {
      input: ListTagsForResourceCommandInput;
      output: ListTagsForResourceCommandOutput;
    };
  };
}
