// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import type { CreateSignalingChannelInput, CreateSignalingChannelOutput } from "../models/models_0";
import { CreateSignalingChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSignalingChannelCommand}.
 */
export interface CreateSignalingChannelCommandInput extends CreateSignalingChannelInput {}
/**
 * @public
 *
 * The output of {@link CreateSignalingChannelCommand}.
 */
export interface CreateSignalingChannelCommandOutput extends CreateSignalingChannelOutput, __MetadataBearer {}

/**
 * <p>Creates a signaling channel. </p>
 *          <p>
 *             <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, CreateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, CreateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // CreateSignalingChannelInput
 *   ChannelName: "STRING_VALUE", // required
 *   ChannelType: "SINGLE_MASTER" || "FULL_MESH",
 *   SingleMasterConfiguration: { // SingleMasterConfiguration
 *     MessageTtlSeconds: Number("int"),
 *   },
 *   Tags: [ // TagOnCreateList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSignalingChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateSignalingChannelOutput
 * //   ChannelARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSignalingChannelCommandInput - {@link CreateSignalingChannelCommandInput}
 * @returns {@link CreateSignalingChannelCommandOutput}
 * @see {@link CreateSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link CreateSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link AccountChannelLimitExceededException} (client fault)
 *  <p>You have reached the maximum limit of active signaling channels for this Amazon Web Services account
 *             in this region.</p>
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
export class CreateSignalingChannelCommand extends $Command
  .classBuilder<
    CreateSignalingChannelCommandInput,
    CreateSignalingChannelCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "CreateSignalingChannel", {})
  .n("KinesisVideoClient", "CreateSignalingChannelCommand")
  .sc(CreateSignalingChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSignalingChannelInput;
      output: CreateSignalingChannelOutput;
    };
    sdk: {
      input: CreateSignalingChannelCommandInput;
      output: CreateSignalingChannelCommandOutput;
    };
  };
}
