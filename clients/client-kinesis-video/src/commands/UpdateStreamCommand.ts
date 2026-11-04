// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStreamInput, UpdateStreamOutput } from "../models/models_0";
import { UpdateStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStreamCommand}.
 */
export interface UpdateStreamCommandInput extends UpdateStreamInput {}
/**
 * @public
 *
 * The output of {@link UpdateStreamCommand}.
 */
export interface UpdateStreamCommandOutput extends UpdateStreamOutput, __MetadataBearer {}

/**
 * Updates stream metadata, such as the device name and media type.
 *
 * You must provide the stream name or the Amazon Resource Name (ARN) of the stream.
 *
 * To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the `DescribeStream` API.
 *
 * `UpdateStream` is an asynchronous operation, and takes time to complete.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // UpdateStreamInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   CurrentVersion: "STRING_VALUE", // required
 *   DeviceName: "STRING_VALUE",
 *   MediaType: "STRING_VALUE",
 * };
 * const command = new UpdateStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStreamCommandInput - {@link UpdateStreamCommandInput}
 * @returns {@link UpdateStreamCommandOutput}
 * @see {@link UpdateStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * The caller is not authorized to perform this operation.
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
export class UpdateStreamCommand extends command<UpdateStreamCommandInput, UpdateStreamCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStream",
  UpdateStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStreamInput;
      output: {};
    };
    sdk: {
      input: UpdateStreamCommandInput;
      output: UpdateStreamCommandOutput;
    };
  };
}
