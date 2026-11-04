// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSignalingChannelInput, CreateSignalingChannelOutput } from "../models/models_0";
import { CreateSignalingChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSignalingChannelCommand}.
 */
export interface CreateSignalingChannelCommandInput extends CreateSignalingChannelInput {}
/**
 * @public
 *
 * The output of {@link CreateSignalingChannelCommand}.
 */
export interface CreateSignalingChannelCommandOutput extends CreateSignalingChannelOutput, __MetadataBearer {}

/**
 * Creates a signaling channel.
 *
 * `CreateSignalingChannel` is an asynchronous operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, CreateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, CreateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // CreateSignalingChannelInput
 *   ChannelName: "STRING_VALUE", // required
 *   ChannelType: "SINGLE_MASTER" || "FULL_MESH",
 *   SingleMasterConfiguration: { // SingleMasterConfiguration
 *     MessageTtlSeconds: Number("int"),
 *   },
 *   Tags: [ // TagOnCreateList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSignalingChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateSignalingChannelOutput
 * //   ChannelARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSignalingChannelCommandInput - {@link CreateSignalingChannelCommandInput}
 * @returns {@link CreateSignalingChannelCommandOutput}
 * @see {@link CreateSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link CreateSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have required permissions to perform this operation.
 *
 * @throws {@link AccountChannelLimitExceededException} (client fault)
 *
 * You have reached the maximum limit of active signaling channels for this Amazon Web Services account in this region.
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
export class CreateSignalingChannelCommand extends command<CreateSignalingChannelCommandInput, CreateSignalingChannelCommandOutput>(
  _ep0,
  _mw0,
  "CreateSignalingChannel",
  CreateSignalingChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSignalingChannelInput;
      output: CreateSignalingChannelOutput;
    };
    sdk: {
      input: CreateSignalingChannelCommandInput;
      output: CreateSignalingChannelCommandOutput;
    };
  };
}
