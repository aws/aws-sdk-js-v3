// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMediaStorageConfigurationInput,
  DescribeMediaStorageConfigurationOutput,
} from "../models/models_0";
import { DescribeMediaStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMediaStorageConfigurationCommand}.
 */
export interface DescribeMediaStorageConfigurationCommandInput extends DescribeMediaStorageConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeMediaStorageConfigurationCommand}.
 */
export interface DescribeMediaStorageConfigurationCommandOutput extends DescribeMediaStorageConfigurationOutput, __MetadataBearer {}

/**
 * Returns the most current information about the channel. Specify the `ChannelName` or `ChannelARN` in the input.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeMediaStorageConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeMediaStorageConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeMediaStorageConfigurationInput
 *   ChannelName: "STRING_VALUE",
 *   ChannelARN: "STRING_VALUE",
 * };
 * const command = new DescribeMediaStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMediaStorageConfigurationOutput
 * //   MediaStorageConfiguration: { // MediaStorageConfiguration
 * //     StreamARN: "STRING_VALUE",
 * //     Status: "ENABLED" || "DISABLED", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMediaStorageConfigurationCommandInput - {@link DescribeMediaStorageConfigurationCommandInput}
 * @returns {@link DescribeMediaStorageConfigurationCommandOutput}
 * @see {@link DescribeMediaStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeMediaStorageConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeMediaStorageConfigurationCommand extends command<DescribeMediaStorageConfigurationCommandInput, DescribeMediaStorageConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMediaStorageConfiguration",
  DescribeMediaStorageConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMediaStorageConfigurationInput;
      output: DescribeMediaStorageConfigurationOutput;
    };
    sdk: {
      input: DescribeMediaStorageConfigurationCommandInput;
      output: DescribeMediaStorageConfigurationCommandOutput;
    };
  };
}
