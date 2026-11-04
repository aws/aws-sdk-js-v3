// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMediaStorageConfigurationInput, UpdateMediaStorageConfigurationOutput } from "../models/models_0";
import { UpdateMediaStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMediaStorageConfigurationCommand}.
 */
export interface UpdateMediaStorageConfigurationCommandInput extends UpdateMediaStorageConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateMediaStorageConfigurationCommand}.
 */
export interface UpdateMediaStorageConfigurationCommandOutput extends UpdateMediaStorageConfigurationOutput, __MetadataBearer {}

/**
 * Associates a `SignalingChannel` to a stream to store the media. There are two signaling modes that you can specify :
 *
 * - If `StorageStatus` is enabled, the data will be stored in the `StreamARN` provided. In order for WebRTC Ingestion to work, the stream must have data retention enabled.
 * - If `StorageStatus` is disabled, no data will be stored, and the `StreamARN` parameter will not be needed.
 *
 * > **Important:** If `StorageStatus` is enabled, direct peer-to-peer (master-viewer) connections no longer occur. Peers connect directly to the storage session. You must call the `JoinStorageSession` API to trigger an SDP offer send and establish a connection between a peer and the storage session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateMediaStorageConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateMediaStorageConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // UpdateMediaStorageConfigurationInput
 *   ChannelARN: "STRING_VALUE", // required
 *   MediaStorageConfiguration: { // MediaStorageConfiguration
 *     StreamARN: "STRING_VALUE",
 *     Status: "ENABLED" || "DISABLED", // required
 *   },
 * };
 * const command = new UpdateMediaStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMediaStorageConfigurationCommandInput - {@link UpdateMediaStorageConfigurationCommandInput}
 * @returns {@link UpdateMediaStorageConfigurationCommandOutput}
 * @see {@link UpdateMediaStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateMediaStorageConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateMediaStorageConfigurationCommand extends command<UpdateMediaStorageConfigurationCommandInput, UpdateMediaStorageConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMediaStorageConfiguration",
  UpdateMediaStorageConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMediaStorageConfigurationInput;
      output: {};
    };
    sdk: {
      input: UpdateMediaStorageConfigurationCommandInput;
      output: UpdateMediaStorageConfigurationCommandOutput;
    };
  };
}
