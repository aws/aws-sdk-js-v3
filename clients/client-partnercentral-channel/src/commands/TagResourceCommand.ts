// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import type {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { TagResource } from "../schemas/schemas_0";

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
 * <p>Adds or updates tags for a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, TagResourceCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, TagResourceCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // TagResourceRequest
 *   resourceArn: "STRING_VALUE", // required
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
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralChannelServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralChannel service.</p>
 *
 *
 * @example Example for TagResource
 * ```javascript
 * //
 * const input = {
 *   resourceArn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/program-management-account/pma-u8ic702rtzng8/relationship/rs-l9o4fj3b5zb91",
 *   tags: [
 *     {
 *       key: "ExampleKey",
 *       value: "ExampleValue"
 *     }
 *   ]
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "TagResource", {})
  .n("PartnerCentralChannelClient", "TagResourceCommand")
  .sc(TagResource)
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
