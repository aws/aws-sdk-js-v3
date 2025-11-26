// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { ListTagsForResource } from "../schemas/schemas_0";

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
 * <p>Lists the tags for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, ListTagsForResourceCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, ListTagsForResourceCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * // import type { DLMClientConfig } from "@aws-sdk/client-dlm";
 * const config = {}; // type is DLMClientConfig
 * const client = new DLMClient(config);
 * const input = { // ListTagsForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceResponse
 * //   Tags: { // TagMap
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
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service failed in an unexpected way.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Bad request. The request is missing required parameters or has invalid
 * 			parameters.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource was not found.</p>
 *
 * @throws {@link DLMServiceException}
 * <p>Base exception class for all service exceptions from DLM service.</p>
 *
 *
 * @public
 */
export class ListTagsForResourceCommand extends $Command
  .classBuilder<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput,
    DLMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DLMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("dlm_20180112", "ListTagsForResource", {})
  .n("DLMClient", "ListTagsForResourceCommand")
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
