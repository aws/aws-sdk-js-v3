// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DescribeNotificationConfigurationInput, DescribeNotificationConfigurationOutput } from "../models/models_0";
import { DescribeNotificationConfiguration } from "../schemas/schemas_2_Configuration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotificationConfigurationCommand}.
 */
export interface DescribeNotificationConfigurationCommandInput extends DescribeNotificationConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeNotificationConfigurationCommand}.
 */
export interface DescribeNotificationConfigurationCommandOutput
  extends DescribeNotificationConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeNotificationConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeNotificationConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeNotificationConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotificationConfigurationOutput
 * //   NotificationConfiguration: { // NotificationConfiguration
 * //     Status: "ENABLED" || "DISABLED", // required
 * //     DestinationConfig: { // NotificationDestinationConfig
 * //       Uri: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNotificationConfigurationCommandInput - {@link DescribeNotificationConfigurationCommandInput}
 * @returns {@link DescribeNotificationConfigurationCommandOutput}
 * @see {@link DescribeNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeNotificationConfigurationCommand extends $Command
  .classBuilder<
    DescribeNotificationConfigurationCommandInput,
    DescribeNotificationConfigurationCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "DescribeNotificationConfiguration", {})
  .n("KinesisVideoClient", "DescribeNotificationConfigurationCommand")
  .sc(DescribeNotificationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNotificationConfigurationInput;
      output: DescribeNotificationConfigurationOutput;
    };
    sdk: {
      input: DescribeNotificationConfigurationCommandInput;
      output: DescribeNotificationConfigurationCommandOutput;
    };
  };
}
