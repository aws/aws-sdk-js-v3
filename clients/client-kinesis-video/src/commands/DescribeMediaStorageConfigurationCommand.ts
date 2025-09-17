// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DescribeMediaStorageConfigurationInput, DescribeMediaStorageConfigurationOutput } from "../models/models_0";
import {
  de_DescribeMediaStorageConfigurationCommand,
  se_DescribeMediaStorageConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeMediaStorageConfigurationCommandOutput
  extends DescribeMediaStorageConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Returns the most current information about the channel. Specify the <code>ChannelName</code>
 *             or <code>ChannelARN</code> in the input.</p>
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
 *
 * @public
 */
export class DescribeMediaStorageConfigurationCommand extends $Command
  .classBuilder<
    DescribeMediaStorageConfigurationCommandInput,
    DescribeMediaStorageConfigurationCommandOutput,
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
  .s("KinesisVideo_20170930", "DescribeMediaStorageConfiguration", {})
  .n("KinesisVideoClient", "DescribeMediaStorageConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMediaStorageConfigurationCommand)
  .de(de_DescribeMediaStorageConfigurationCommand)
  .build() {
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
