// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { JoinStorageSessionInput } from "../models/models_0";
import { JoinStorageSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link JoinStorageSessionCommand}.
 */
export interface JoinStorageSessionCommandInput extends JoinStorageSessionInput {}
/**
 * @public
 *
 * The output of {@link JoinStorageSessionCommand}.
 */
export interface JoinStorageSessionCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** Before using this API, you must call the `GetSignalingChannelEndpoint` API to request the WEBRTC endpoint. You then specify the endpoint and region in your `JoinStorageSession` API request.
 *
 * Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there’s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided.
 *
 * Currently for the `SINGLE_MASTER` type, a video producing device is able to ingest both audio and video media into a stream. Only video producing devices can join the session and record media.
 *
 * > **Important:**
 * >
 * > Both audio and video tracks are currently required for WebRTC ingestion.
 * >
 * > Current requirements:
 * >
 * > - Video track: H.264
 * > - Audio track: Opus
 *
 * The resulting ingested video in the Kinesis video stream will have the following parameters: H.264 video and AAC audio.
 *
 * Once a master participant has negotiated a connection through WebRTC, the ingested media session will be stored in the Kinesis video stream. Multiple viewers are then able to play back real-time media through our Playback APIs.
 *
 * You can also use existing Kinesis Video Streams features like `HLS` or `DASH` playback, image generation via [GetImages](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/gs-getImages.html), and more with ingested WebRTC media.
 *
 * > **Note:** S3 image delivery and notifications are not currently supported.
 *
 * > **Note:** Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence.
 *
 * **Additional information**
 *
 * - **Idempotent** - This API is not idempotent.
 * - **Retry behavior** - This is counted as a new API call.
 * - **Concurrent calls** - Concurrent calls are allowed. An offer is sent once per each call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoWebRTCStorageClient, JoinStorageSessionCommand } from "@aws-sdk/client-kinesis-video-webrtc-storage"; // ES Modules import
 * // const { KinesisVideoWebRTCStorageClient, JoinStorageSessionCommand } = require("@aws-sdk/client-kinesis-video-webrtc-storage"); // CommonJS import
 * // import type { KinesisVideoWebRTCStorageClientConfig } from "@aws-sdk/client-kinesis-video-webrtc-storage";
 * const config = {}; // type is KinesisVideoWebRTCStorageClientConfig
 * const client = new KinesisVideoWebRTCStorageClient(config);
 * const input = { // JoinStorageSessionInput
 *   channelArn: "STRING_VALUE", // required
 * };
 * const command = new JoinStorageSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param JoinStorageSessionCommandInput - {@link JoinStorageSessionCommandInput}
 * @returns {@link JoinStorageSessionCommandOutput}
 * @see {@link JoinStorageSessionCommandInput} for command's `input` shape.
 * @see {@link JoinStorageSessionCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoWebRTCStorageClientResolvedConfig | config} for KinesisVideoWebRTCStorageClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource is not found.
 *
 * @throws {@link KinesisVideoWebRTCStorageServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideoWebRTCStorage service.
 *
 * @public
 */
export class JoinStorageSessionCommand extends command<JoinStorageSessionCommandInput, JoinStorageSessionCommandOutput>(
  _ep0,
  _mw0,
  "JoinStorageSession",
  JoinStorageSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JoinStorageSessionInput;
      output: {};
    };
    sdk: {
      input: JoinStorageSessionCommandInput;
      output: JoinStorageSessionCommandOutput;
    };
  };
}
