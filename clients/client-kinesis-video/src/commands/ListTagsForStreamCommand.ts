// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { ListTagsForStreamInput, ListTagsForStreamOutput } from "../models/models_0";
import { ListTagsForStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForStreamCommand}.
 */
export interface ListTagsForStreamCommandInput extends ListTagsForStreamInput {}
/**
 * @public
 *
 * The output of {@link ListTagsForStreamCommand}.
 */
export interface ListTagsForStreamCommandOutput extends ListTagsForStreamOutput, __MetadataBearer {}

/**
 * <p>Returns a list of tags associated with the specified stream.</p>
 *          <p>In the request, you must specify either the <code>StreamName</code> or the
 *                 <code>StreamARN</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListTagsForStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListTagsForStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // ListTagsForStreamInput
 *   NextToken: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   StreamName: "STRING_VALUE",
 * };
 * const command = new ListTagsForStreamCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForStreamOutput
 * //   NextToken: "STRING_VALUE",
 * //   Tags: { // ResourceTags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForStreamCommandInput - {@link ListTagsForStreamCommandInput}
 * @returns {@link ListTagsForStreamCommandOutput}
 * @see {@link ListTagsForStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForStreamCommandOutput} for command's `response` shape.
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
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class ListTagsForStreamCommand extends $Command
  .classBuilder<
    ListTagsForStreamCommandInput,
    ListTagsForStreamCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "ListTagsForStream", {})
  .n("KinesisVideoClient", "ListTagsForStreamCommand")
  .sc(ListTagsForStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForStreamInput;
      output: ListTagsForStreamOutput;
    };
    sdk: {
      input: ListTagsForStreamCommandInput;
      output: ListTagsForStreamCommandOutput;
    };
  };
}
