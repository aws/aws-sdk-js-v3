// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { TagDeliveryStreamInput, TagDeliveryStreamOutput } from "../models/models_0";
import { de_TagDeliveryStreamCommand, se_TagDeliveryStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagDeliveryStreamCommand}.
 */
export interface TagDeliveryStreamCommandInput extends TagDeliveryStreamInput {}
/**
 * @public
 *
 * The output of {@link TagDeliveryStreamCommand}.
 */
export interface TagDeliveryStreamCommandOutput extends TagDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Adds or updates tags for the specified Firehose stream. A tag is a key-value pair
 *          that you can define and assign to Amazon Web Services resources. If you specify a tag that
 *          already exists, the tag value is replaced with the value that you specify in the request.
 *          Tags are metadata. For example, you can add friendly names and descriptions or other types
 *          of information that can help you distinguish the Firehose stream. For more information
 *          about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *             Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
 *             Guide</i>. </p>
 *          <p>Each Firehose stream can have up to 50 tags. </p>
 *          <p>This operation has a limit of five transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, TagDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, TagDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // TagDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   Tags: [ // TagDeliveryStreamInputTagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new TagDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagDeliveryStreamCommandInput - {@link TagDeliveryStreamCommandInput}
 * @returns {@link TagDeliveryStreamCommandOutput}
 * @see {@link TagDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link TagDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have already reached the limit for a requested resource.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already in use and not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 * @public
 */
export class TagDeliveryStreamCommand extends $Command
  .classBuilder<
    TagDeliveryStreamCommandInput,
    TagDeliveryStreamCommandOutput,
    FirehoseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FirehoseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Firehose_20150804", "TagDeliveryStream", {})
  .n("FirehoseClient", "TagDeliveryStreamCommand")
  .f(void 0, void 0)
  .ser(se_TagDeliveryStreamCommand)
  .de(de_TagDeliveryStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagDeliveryStreamInput;
      output: {};
    };
    sdk: {
      input: TagDeliveryStreamCommandInput;
      output: TagDeliveryStreamCommandOutput;
    };
  };
}
