// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTagsForResourceOutput, ListTagsForResourceRequest } from "../models/models_0";
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
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceOutput, __MetadataBearer {}

/**
 * <p>Displays the tags associated with a CloudWatch investigations resource. Currently, investigation groups support tagging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, ListTagsForResourceCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, ListTagsForResourceCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // ListTagsForResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceOutput
 * //   tags: { // Tags
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
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation couldn't be completed because of a conflict in resource states.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. You can try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits. You can try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This operation or its parameters aren't formatted correctly.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 *
 * @throws {@link AIOpsServiceException}
 * <p>Base exception class for all service exceptions from AIOps service.</p>
 *
 *
 * @public
 */
export class ListTagsForResourceCommand extends $Command
  .classBuilder<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput,
    AIOpsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AIOpsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AIOps", "ListTagsForResource", {})
  .n("AIOpsClient", "ListTagsForResourceCommand")
  .sc(ListTagsForResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourceRequest;
      output: ListTagsForResourceOutput;
    };
    sdk: {
      input: ListTagsForResourceCommandInput;
      output: ListTagsForResourceCommandOutput;
    };
  };
}
