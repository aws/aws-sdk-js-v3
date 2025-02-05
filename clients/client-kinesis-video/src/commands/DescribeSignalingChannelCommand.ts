// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DescribeSignalingChannelInput, DescribeSignalingChannelOutput } from "../models/models_0";
import { de_DescribeSignalingChannelCommand, se_DescribeSignalingChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSignalingChannelCommand}.
 */
export interface DescribeSignalingChannelCommandInput extends DescribeSignalingChannelInput {}
/**
 * @public
 *
 * The output of {@link DescribeSignalingChannelCommand}.
 */
export interface DescribeSignalingChannelCommandOutput extends DescribeSignalingChannelOutput, __MetadataBearer {}

/**
 * <p>Returns the most current information about the signaling channel. You must specify
 *             either the name or the Amazon Resource Name (ARN) of the channel that you want to
 *             describe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeSignalingChannelInput
 *   ChannelName: "STRING_VALUE",
 *   ChannelARN: "STRING_VALUE",
 * };
 * const command = new DescribeSignalingChannelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSignalingChannelOutput
 * //   ChannelInfo: { // ChannelInfo
 * //     ChannelName: "STRING_VALUE",
 * //     ChannelARN: "STRING_VALUE",
 * //     ChannelType: "SINGLE_MASTER" || "FULL_MESH",
 * //     ChannelStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     SingleMasterConfiguration: { // SingleMasterConfiguration
 * //       MessageTtlSeconds: Number("int"),
 * //     },
 * //     Version: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSignalingChannelCommandInput - {@link DescribeSignalingChannelCommandInput}
 * @returns {@link DescribeSignalingChannelCommandOutput}
 * @see {@link DescribeSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeSignalingChannelCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 * @public
 */
export class DescribeSignalingChannelCommand extends $Command
  .classBuilder<
    DescribeSignalingChannelCommandInput,
    DescribeSignalingChannelCommandOutput,
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
  .s("KinesisVideo_20170930", "DescribeSignalingChannel", {})
  .n("KinesisVideoClient", "DescribeSignalingChannelCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSignalingChannelCommand)
  .de(de_DescribeSignalingChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSignalingChannelInput;
      output: DescribeSignalingChannelOutput;
    };
    sdk: {
      input: DescribeSignalingChannelCommandInput;
      output: DescribeSignalingChannelCommandOutput;
    };
  };
}
