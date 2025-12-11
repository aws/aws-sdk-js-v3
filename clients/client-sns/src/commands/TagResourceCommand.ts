// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { TagResource } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

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
 * <p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the
 *                 <i>Amazon SNS Developer Guide</i>.</p>
 *          <p>When you use topic tags, keep the following guidelines in mind:</p>
 *          <ul>
 *             <li>
 *                <p>Adding more than 50 tags to a topic isn't recommended.</p>
 *             </li>
 *             <li>
 *                <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character
 *                     strings.</p>
 *             </li>
 *             <li>
 *                <p>Tags are case-sensitive.</p>
 *             </li>
 *             <li>
 *                <p>A new tag with a key identical to that of an existing tag overwrites the
 *                     existing tag.</p>
 *             </li>
 *             <li>
 *                <p>Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If
 *                     your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, TagResourceCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, TagResourceCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // TagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
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
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link ConcurrentAccessException} (client fault)
 *  <p>Can't perform multiple operations on a tag simultaneously. Perform the operations
 *             sequentially.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Can’t perform the action on the specified resource. Make sure that the resource
 *             exists.</p>
 *
 * @throws {@link StaleTagException} (client fault)
 *  <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a
 *             short while and then retry the operation.</p>
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *  <p>Can't add more than 50 tags to a topic.</p>
 *
 * @throws {@link TagPolicyException} (client fault)
 *  <p>The request doesn't comply with the IAM tag policy. Correct your request and then
 *             retry it.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "TagResource", {})
  .n("SNSClient", "TagResourceCommand")
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
