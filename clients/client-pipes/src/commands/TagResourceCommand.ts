// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import { TagResource } from "../schemas/schemas_1_Pipe";

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
 * <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you
 *          organize and categorize your resources. You can also use them to scope user permissions by
 *          granting a user permission to access or change only resources with certain tag
 *          values.</p>
 *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly
 *          as strings of characters.</p>
 *          <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If
 *          you specify a new tag key, this tag is appended to the list of tags associated with the
 *          pipe. If you specify a tag key that is already associated with the pipe, the new tag value
 *          that you specify replaces the previous value for that tag.</p>
 *          <p>You can associate as many as 50 tags with a pipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, TagResourceCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, TagResourceCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * // import type { PipesClientConfig } from "@aws-sdk/client-pipes";
 * const config = {}; // type is PipesClientConfig
 * const client = new PipesClient(config);
 * const input = { // TagResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 *   tags: { // TagMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
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
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that an error has occurred while performing a validate operation.</p>
 *
 * @throws {@link PipesServiceException}
 * <p>Base exception class for all service exceptions from Pipes service.</p>
 *
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    PipesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PipesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pipes", "TagResource", {})
  .n("PipesClient", "TagResourceCommand")
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
