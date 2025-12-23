// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import type {
  DescribeStreamStorageConfigurationInput,
  DescribeStreamStorageConfigurationOutput,
} from "../models/models_0";
import { DescribeStreamStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStreamStorageConfigurationCommand}.
 */
export interface DescribeStreamStorageConfigurationCommandInput extends DescribeStreamStorageConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamStorageConfigurationCommand}.
 */
export interface DescribeStreamStorageConfigurationCommandOutput extends DescribeStreamStorageConfigurationOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current storage configuration for the specified Kinesis video stream.</p>
 *          <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
 *          <p>You must have permissions for the <code>KinesisVideo:DescribeStreamStorageConfiguration</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeStreamStorageConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeStreamStorageConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeStreamStorageConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeStreamStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamStorageConfigurationOutput
 * //   StreamName: "STRING_VALUE",
 * //   StreamARN: "STRING_VALUE",
 * //   StreamStorageConfiguration: { // StreamStorageConfiguration
 * //     DefaultStorageTier: "HOT" || "WARM", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamStorageConfigurationCommandInput - {@link DescribeStreamStorageConfigurationCommandInput}
 * @returns {@link DescribeStreamStorageConfigurationCommandOutput}
 * @see {@link DescribeStreamStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamStorageConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeStreamStorageConfigurationCommand extends $Command
  .classBuilder<
    DescribeStreamStorageConfigurationCommandInput,
    DescribeStreamStorageConfigurationCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "DescribeStreamStorageConfiguration", {})
  .n("KinesisVideoClient", "DescribeStreamStorageConfigurationCommand")
  .sc(DescribeStreamStorageConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStreamStorageConfigurationInput;
      output: DescribeStreamStorageConfigurationOutput;
    };
    sdk: {
      input: DescribeStreamStorageConfigurationCommandInput;
      output: DescribeStreamStorageConfigurationCommandOutput;
    };
  };
}
