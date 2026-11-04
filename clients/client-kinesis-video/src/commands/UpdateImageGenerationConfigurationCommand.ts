// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateImageGenerationConfigurationInput,
  UpdateImageGenerationConfigurationOutput,
} from "../models/models_0";
import { UpdateImageGenerationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateImageGenerationConfigurationCommand}.
 */
export interface UpdateImageGenerationConfigurationCommandInput extends UpdateImageGenerationConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateImageGenerationConfigurationCommand}.
 */
export interface UpdateImageGenerationConfigurationCommandOutput extends UpdateImageGenerationConfigurationOutput, __MetadataBearer {}

/**
 * Updates the `StreamInfo` and `ImageProcessingConfiguration` fields.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateImageGenerationConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateImageGenerationConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // UpdateImageGenerationConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   ImageGenerationConfiguration: { // ImageGenerationConfiguration
 *     Status: "ENABLED" || "DISABLED", // required
 *     ImageSelectorType: "SERVER_TIMESTAMP" || "PRODUCER_TIMESTAMP", // required
 *     DestinationConfig: { // ImageGenerationDestinationConfig
 *       Uri: "STRING_VALUE", // required
 *       DestinationRegion: "STRING_VALUE", // required
 *     },
 *     SamplingInterval: Number("int"), // required
 *     Format: "JPEG" || "PNG", // required
 *     FormatConfig: { // FormatConfig
 *       "<keys>": "STRING_VALUE",
 *     },
 *     WidthPixels: Number("int"),
 *     HeightPixels: Number("int"),
 *   },
 * };
 * const command = new UpdateImageGenerationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateImageGenerationConfigurationCommandInput - {@link UpdateImageGenerationConfigurationCommandInput}
 * @returns {@link UpdateImageGenerationConfigurationCommandOutput}
 * @see {@link UpdateImageGenerationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateImageGenerationConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateImageGenerationConfigurationCommand extends command<UpdateImageGenerationConfigurationCommandInput, UpdateImageGenerationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateImageGenerationConfiguration",
  UpdateImageGenerationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImageGenerationConfigurationInput;
      output: {};
    };
    sdk: {
      input: UpdateImageGenerationConfigurationCommandInput;
      output: UpdateImageGenerationConfigurationCommandOutput;
    };
  };
}
