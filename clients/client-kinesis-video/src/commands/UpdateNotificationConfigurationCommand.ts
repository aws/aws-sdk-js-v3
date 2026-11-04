// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNotificationConfigurationInput, UpdateNotificationConfigurationOutput } from "../models/models_0";
import { UpdateNotificationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the notification information for a stream.
 *
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
 * @throws {@link NoDataRetentionException} (client fault)
 *
 * The Stream data retention in hours is equal to zero.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * When the input `StreamARN` or `ChannelARN` in `CLOUD_STORAGE_MODE` is already mapped to a different Kinesis Video Stream resource, or if the provided input `StreamARN` or `ChannelARN` is not in Active status, try one of the following :
 *
 * 1. The `DescribeMediaStorageConfiguration` API to determine what the stream given channel is mapped to.
 * 2. The `DescribeMappedResourceConfiguration` API to determine the channel that the given stream is mapped to.
 * 3. The `DescribeStream` or `DescribeSignalingChannel` API to determine the status of the resource.
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
export class UpdateNotificationConfigurationCommand extends command<UpdateNotificationConfigurationCommandInput, UpdateNotificationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNotificationConfiguration",
  UpdateNotificationConfiguration$
) {
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
