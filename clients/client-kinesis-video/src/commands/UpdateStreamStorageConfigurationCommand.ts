// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStreamStorageConfigurationInput, UpdateStreamStorageConfigurationOutput } from "../models/models_0";
import { UpdateStreamStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStreamStorageConfigurationCommand}.
 */
export interface UpdateStreamStorageConfigurationCommandInput extends UpdateStreamStorageConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateStreamStorageConfigurationCommand}.
 */
export interface UpdateStreamStorageConfigurationCommandOutput extends UpdateStreamStorageConfigurationOutput, __MetadataBearer {}

/**
 * Updates the storage configuration for an existing Kinesis video stream.
 *
 * This operation allows you to modify the storage tier settings for a stream, enabling you to optimize storage costs and performance based on your access patterns.
 *
 * `UpdateStreamStorageConfiguration` is an asynchronous operation.
 *
 * You must have permissions for the `KinesisVideo:UpdateStreamStorageConfiguration` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateStreamStorageConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateStreamStorageConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // UpdateStreamStorageConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   CurrentVersion: "STRING_VALUE", // required
 *   StreamStorageConfiguration: { // StreamStorageConfiguration
 *     DefaultStorageTier: "HOT" || "WARM", // required
 *   },
 * };
 * const command = new UpdateStreamStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStreamStorageConfigurationCommandInput - {@link UpdateStreamStorageConfigurationCommandInput}
 * @returns {@link UpdateStreamStorageConfigurationCommandOutput}
 * @see {@link UpdateStreamStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamStorageConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link VersionMismatchException} (client fault)
 *
 * The stream version that you specified is not the latest version. To get the latest version, use the [DescribeStream](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html) API.
 *
 * @throws {@link KinesisVideoServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideo service.
 *
 * @public
 */
export class UpdateStreamStorageConfigurationCommand extends command<UpdateStreamStorageConfigurationCommandInput, UpdateStreamStorageConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStreamStorageConfiguration",
  UpdateStreamStorageConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStreamStorageConfigurationInput;
      output: {};
    };
    sdk: {
      input: UpdateStreamStorageConfigurationCommandInput;
      output: UpdateStreamStorageConfigurationCommandOutput;
    };
  };
}
