// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { de_TagResourceCommand, se_TagResourceCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

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
 * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch RUM resource. Currently,
 *        the only resources that
 *        can be tagged app monitors.</p>
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
 * import { RUMClient, TagResourceCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, TagResourceCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // TagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: { // TagMap // required
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
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RUM", "TagResource", {})
  .n("RUMClient", "TagResourceCommand")
  .f(void 0, void 0)
  .ser(se_TagResourceCommand)
  .de(de_TagResourceCommand)
  .build() {}
