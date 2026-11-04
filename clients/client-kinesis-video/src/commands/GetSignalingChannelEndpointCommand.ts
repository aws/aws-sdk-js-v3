// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSignalingChannelEndpointInput, GetSignalingChannelEndpointOutput } from "../models/models_0";
import { GetSignalingChannelEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSignalingChannelEndpointCommand}.
 */
export interface GetSignalingChannelEndpointCommandInput extends GetSignalingChannelEndpointInput {}
/**
 * @public
 *
 * The output of {@link GetSignalingChannelEndpointCommand}.
 */
export interface GetSignalingChannelEndpointCommandOutput extends GetSignalingChannelEndpointOutput, __MetadataBearer {}

/**
 * Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the `SingleMasterChannelEndpointConfiguration` input parameter, which consists of the `Protocols` and `Role` properties.
 *
 * `Protocols` is used to determine the communication mechanism. For example, if you specify `WSS` as the protocol, this API produces a secure websocket endpoint. If you specify `HTTPS` as the protocol, this API generates an HTTPS endpoint. If you specify `WEBRTC` as the protocol, but the signaling channel isn't configured for ingestion, you will receive the error `InvalidArgumentException`.
 *
 * `Role` determines the messaging permissions. A `MASTER` role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A `VIEWER` role results in this API generating an endpoint that a client can use to communicate only with a `MASTER`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, GetSignalingChannelEndpointCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, GetSignalingChannelEndpointCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // GetSignalingChannelEndpointInput
 *   ChannelARN: "STRING_VALUE", // required
 *   SingleMasterChannelEndpointConfiguration: { // SingleMasterChannelEndpointConfiguration
 *     Protocols: [ // ListOfProtocols
 *       "WSS" || "HTTPS" || "WEBRTC",
 *     ],
 *     Role: "MASTER" || "VIEWER",
 *   },
 * };
 * const command = new GetSignalingChannelEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetSignalingChannelEndpointOutput
 * //   ResourceEndpointList: [ // ResourceEndpointList
 * //     { // ResourceEndpointListItem
 * //       Protocol: "WSS" || "HTTPS" || "WEBRTC",
 * //       ResourceEndpoint: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSignalingChannelEndpointCommandInput - {@link GetSignalingChannelEndpointCommandInput}
 * @returns {@link GetSignalingChannelEndpointCommandOutput}
 * @see {@link GetSignalingChannelEndpointCommandInput} for command's `input` shape.
 * @see {@link GetSignalingChannelEndpointCommandOutput} for command's `response` shape.
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
 * @throws {@link KinesisVideoServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideo service.
 *
 * @public
 */
export class GetSignalingChannelEndpointCommand extends command<GetSignalingChannelEndpointCommandInput, GetSignalingChannelEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetSignalingChannelEndpoint",
  GetSignalingChannelEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSignalingChannelEndpointInput;
      output: GetSignalingChannelEndpointOutput;
    };
    sdk: {
      input: GetSignalingChannelEndpointCommandInput;
      output: GetSignalingChannelEndpointCommandOutput;
    };
  };
}
