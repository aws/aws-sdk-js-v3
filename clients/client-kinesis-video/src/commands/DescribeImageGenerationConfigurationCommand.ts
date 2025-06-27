// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  DescribeImageGenerationConfigurationInput,
  DescribeImageGenerationConfigurationOutput,
} from "../models/models_0";
import {
  de_DescribeImageGenerationConfigurationCommand,
  se_DescribeImageGenerationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageGenerationConfigurationCommand}.
 */
export interface DescribeImageGenerationConfigurationCommandInput extends DescribeImageGenerationConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeImageGenerationConfigurationCommand}.
 */
export interface DescribeImageGenerationConfigurationCommandOutput
  extends DescribeImageGenerationConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeImageGenerationConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeImageGenerationConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeImageGenerationConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeImageGenerationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageGenerationConfigurationOutput
 * //   ImageGenerationConfiguration: { // ImageGenerationConfiguration
 * //     Status: "ENABLED" || "DISABLED", // required
 * //     ImageSelectorType: "SERVER_TIMESTAMP" || "PRODUCER_TIMESTAMP", // required
 * //     DestinationConfig: { // ImageGenerationDestinationConfig
 * //       Uri: "STRING_VALUE", // required
 * //       DestinationRegion: "STRING_VALUE", // required
 * //     },
 * //     SamplingInterval: Number("int"), // required
 * //     Format: "JPEG" || "PNG", // required
 * //     FormatConfig: { // FormatConfig
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WidthPixels: Number("int"),
 * //     HeightPixels: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeImageGenerationConfigurationCommandInput - {@link DescribeImageGenerationConfigurationCommandInput}
 * @returns {@link DescribeImageGenerationConfigurationCommandOutput}
 * @see {@link DescribeImageGenerationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeImageGenerationConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeImageGenerationConfigurationCommand extends $Command
  .classBuilder<
    DescribeImageGenerationConfigurationCommandInput,
    DescribeImageGenerationConfigurationCommandOutput,
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
  .s("KinesisVideo_20170930", "DescribeImageGenerationConfiguration", {})
  .n("KinesisVideoClient", "DescribeImageGenerationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageGenerationConfigurationCommand)
  .de(de_DescribeImageGenerationConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImageGenerationConfigurationInput;
      output: DescribeImageGenerationConfigurationOutput;
    };
    sdk: {
      input: DescribeImageGenerationConfigurationCommandInput;
      output: DescribeImageGenerationConfigurationCommandOutput;
    };
  };
}
