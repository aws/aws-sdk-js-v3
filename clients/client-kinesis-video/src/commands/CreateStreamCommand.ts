// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStreamInput, CreateStreamOutput } from "../models/models_0";
import { CreateStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStreamCommand}.
 */
export interface CreateStreamCommandInput extends CreateStreamInput {}
/**
 * @public
 *
 * The output of {@link CreateStreamCommand}.
 */
export interface CreateStreamCommandOutput extends CreateStreamOutput, __MetadataBearer {}

/**
 * Creates a new Kinesis video stream.
 *
 * When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version.
 *
 * `CreateStream` is an asynchronous operation.
 *
 * For information about how the service works, see [How it Works](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html).
 *
 * You must have permissions for the `KinesisVideo:CreateStream` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, CreateStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, CreateStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // CreateStreamInput
 *   DeviceName: "STRING_VALUE",
 *   StreamName: "STRING_VALUE", // required
 *   MediaType: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   DataRetentionInHours: Number("int"),
 *   Tags: { // ResourceTags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   StreamStorageConfiguration: { // StreamStorageConfiguration
 *     DefaultStorageTier: "HOT" || "WARM", // required
 *   },
 * };
 * const command = new CreateStreamCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamOutput
 * //   StreamARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStreamCommandInput - {@link CreateStreamCommandInput}
 * @returns {@link CreateStreamCommandOutput}
 * @see {@link CreateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccountStreamLimitExceededException} (client fault)
 *
 * The number of streams created for the account is too high.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link DeviceStreamLimitExceededException} (client fault)
 *
 * Not implemented.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link InvalidDeviceException} (client fault)
 *
 * Not implemented.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * When the input `StreamARN` or `ChannelARN` in `CLOUD_STORAGE_MODE` is already mapped to a different Kinesis Video Stream resource, or if the provided input `StreamARN` or `ChannelARN` is not in Active status, try one of the following :
 *
 * 1. The `DescribeMediaStorageConfiguration` API to determine what the stream given channel is mapped to.
 * 2. The `DescribeMappedResourceConfiguration` API to determine the channel that the given stream is mapped to.
 * 3. The `DescribeStream` or `DescribeSignalingChannel` API to determine the status of the resource.
 *
 * @throws {@link TagsPerResourceExceededLimitException} (client fault)
 *
 * You have exceeded the limit of tags that you can associate with the resource. A Kinesis video stream can support up to 50 tags.
 *
 * @throws {@link KinesisVideoServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideo service.
 *
 * @public
 */
export class CreateStreamCommand extends command<CreateStreamCommandInput, CreateStreamCommandOutput>(
  _ep0,
  _mw0,
  "CreateStream",
  CreateStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamInput;
      output: CreateStreamOutput;
    };
    sdk: {
      input: CreateStreamCommandInput;
      output: CreateStreamCommandOutput;
    };
  };
}
