// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DeleteSignalingChannelInput, DeleteSignalingChannelOutput } from "../models/models_0";
import { DeleteSignalingChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSignalingChannelCommand}.
 */
export interface DeleteSignalingChannelCommandInput extends DeleteSignalingChannelInput {}
/**
 * @public
 *
 * The output of {@link DeleteSignalingChannelCommand}.
 */
export interface DeleteSignalingChannelCommandOutput extends DeleteSignalingChannelOutput, __MetadataBearer {}

/**
 * <p>Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an
 *             asynchronous operation. If you don't specify the channel's current version, the most
 *             recent version is deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DeleteSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DeleteSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DeleteSignalingChannelInput
 *   ChannelARN: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE",
 * };
 * const command = new DeleteSignalingChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSignalingChannelCommandInput - {@link DeleteSignalingChannelCommandInput}
 * @returns {@link DeleteSignalingChannelCommandOutput}
 * @see {@link DeleteSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>When the input <code>StreamARN</code> or <code>ChannelARN</code>
 *             in <code>CLOUD_STORAGE_MODE</code> is already mapped to a different
 *             Kinesis Video Stream resource, or if the provided input <code>StreamARN</code>
 *             or <code>ChannelARN</code> is not in Active status, try one of the following : </p>
 *          <ol>
 *             <li>
 *                <p>The <code>DescribeMediaStorageConfiguration</code> API to determine what the stream given channel is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeMappedResourceConfiguration</code> API to determine the channel that the given stream is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeStream</code> or <code>DescribeSignalingChannel</code> API to determine the status of the resource.
 *             </p>
 *             </li>
 *          </ol>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link VersionMismatchException} (client fault)
 *  <p>The stream version that you specified is not the latest version. To get the latest
 *             version, use the <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a>
 *             API.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class DeleteSignalingChannelCommand extends $Command
  .classBuilder<
    DeleteSignalingChannelCommandInput,
    DeleteSignalingChannelCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "DeleteSignalingChannel", {})
  .n("KinesisVideoClient", "DeleteSignalingChannelCommand")
  .sc(DeleteSignalingChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSignalingChannelInput;
      output: {};
    };
    sdk: {
      input: DeleteSignalingChannelCommandInput;
      output: DeleteSignalingChannelCommandOutput;
    };
  };
}
