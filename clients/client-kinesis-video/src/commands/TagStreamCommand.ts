// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { TagStreamInput, TagStreamOutput } from "../models/models_0";
import { de_TagStreamCommand, se_TagStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagStreamCommand}.
 */
export interface TagStreamCommandInput extends TagStreamInput {}
/**
 * @public
 *
 * The output of {@link TagStreamCommand}.
 */
export interface TagStreamCommandOutput extends TagStreamOutput, __MetadataBearer {}

/**
 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair
 *             (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify
 *             a tag that already exists, the tag value is replaced with the value that you specify in
 *             the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *                 Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p>
 *          <p>You must provide either the <code>StreamName</code> or the
 *             <code>StreamARN</code>.</p>
 *          <p>This operation requires permission for the <code>KinesisVideo:TagStream</code>
 *             action.</p>
 *          <p>A Kinesis video stream can support up to 50 tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, TagStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, TagStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // TagStreamInput
 *   StreamARN: "STRING_VALUE",
 *   StreamName: "STRING_VALUE",
 *   Tags: { // ResourceTags // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagStreamCommandInput - {@link TagStreamCommandInput}
 * @returns {@link TagStreamCommandOutput}
 * @see {@link TagStreamCommandInput} for command's `input` shape.
 * @see {@link TagStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link InvalidResourceFormatException} (client fault)
 *  <p>The format of the <code>StreamARN</code> is invalid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The caller is not authorized to perform this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link TagsPerResourceExceededLimitException} (client fault)
 *  <p>You have exceeded the limit of tags that you can associate with the resource.
 *             A Kinesis video stream can support up to 50 tags. </p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class TagStreamCommand extends $Command
  .classBuilder<
    TagStreamCommandInput,
    TagStreamCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisVideo_20170930", "TagStream", {})
  .n("KinesisVideoClient", "TagStreamCommand")
  .f(void 0, void 0)
  .ser(se_TagStreamCommand)
  .de(de_TagStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagStreamInput;
      output: {};
    };
    sdk: {
      input: TagStreamCommandInput;
      output: TagStreamCommandOutput;
    };
  };
}
