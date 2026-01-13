// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import type { UpdateNotificationConfigurationInput, UpdateNotificationConfigurationOutput } from "../models/models_0";
import { UpdateNotificationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotificationConfigurationCommand}.
 */
export interface UpdateNotificationConfigurationCommandInput extends UpdateNotificationConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateNotificationConfigurationCommand}.
 */
export interface UpdateNotificationConfigurationCommandOutput extends UpdateNotificationConfigurationOutput, __MetadataBearer {}

/**
 * <p>Updates the notification information for a stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateNotificationConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateNotificationConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // UpdateNotificationConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   NotificationConfiguration: { // NotificationConfiguration
 *     Status: "ENABLED" || "DISABLED", // required
 *     DestinationConfig: { // NotificationDestinationConfig
 *       Uri: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotificationConfigurationCommandInput - {@link UpdateNotificationConfigurationCommandInput}
 * @returns {@link UpdateNotificationConfigurationCommandOutput}
 * @see {@link UpdateNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link NoDataRetentionException} (client fault)
 *  <p>The Stream data retention in hours is equal to zero.</p>
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
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class UpdateNotificationConfigurationCommand extends $Command
  .classBuilder<
    UpdateNotificationConfigurationCommandInput,
    UpdateNotificationConfigurationCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "UpdateNotificationConfiguration", {})
  .n("KinesisVideoClient", "UpdateNotificationConfigurationCommand")
  .sc(UpdateNotificationConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotificationConfigurationInput;
      output: {};
    };
    sdk: {
      input: UpdateNotificationConfigurationCommandInput;
      output: UpdateNotificationConfigurationCommandOutput;
    };
  };
}
