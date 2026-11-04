// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSignalingChannelInput, DescribeSignalingChannelOutput } from "../models/models_0";
import { DescribeSignalingChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
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
 *
 * You do not have required permissions to perform this operation.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Amazon Kinesis Video Streams can't find the stream that you specified.
 *
 * @throws {@link KinesisVideoServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideo service.
 *
 * @public
 */
export class DescribeSignalingChannelCommand extends command<DescribeSignalingChannelCommandInput, DescribeSignalingChannelCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSignalingChannel",
  DescribeSignalingChannel$
) {
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
