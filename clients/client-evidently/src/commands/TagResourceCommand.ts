// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { TagResource } from "../schemas/schemas_7_Resource";

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
 * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects,
 *        features, launches, and experiments can be tagged.</p>
 *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
 *        permissions by granting a user
 *        permission to access or change only resources with certain tag values.</p>
 *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
 *          <p>You can use the <code>TagResource</code> action with a resource that already has tags.
 *        If you specify a new tag key for the resource,
 *        this tag is appended to the list of tags associated
 *        with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces
 *        the previous value for that tag.</p>
 *          <p>You can associate as many as 50 tags with a resource.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, TagResourceCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, TagResourceCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
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
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "TagResource", {})
  .n("EvidentlyClient", "TagResourceCommand")
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
