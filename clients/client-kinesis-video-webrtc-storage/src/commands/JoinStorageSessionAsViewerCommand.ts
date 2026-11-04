// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { JoinStorageSessionAsViewerInput } from "../models/models_0";
import { JoinStorageSessionAsViewer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link JoinStorageSessionAsViewerCommand}.
 */
export interface JoinStorageSessionAsViewerCommandInput extends JoinStorageSessionAsViewerInput {}
/**
 * @public
 *
 * The output of {@link JoinStorageSessionAsViewerCommand}.
 */
export interface JoinStorageSessionAsViewerCommandOutput extends __MetadataBearer {}

/**
 * Join the ongoing one way-video and/or multi-way audio WebRTC session as a viewer for an input channel. If there’s no existing session for the channel, create a new streaming session and provide the Amazon Resource Name (ARN) of the signaling channel (`channelArn`) and client id (`clientId`).
 *
 * Currently for `SINGLE_MASTER` type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join a session first and wait for other participants. While participants are having peer to peer conversations through WebRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media.
 *
 * Customers can also use existing Kinesis Video Streams features like `HLS` or `DASH` playback, Image generation, and more with ingested WebRTC media. If there’s an existing session with the same `clientId` that's found in the join session request, the new request takes precedence.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoWebRTCStorageClient, JoinStorageSessionAsViewerCommand } from "@aws-sdk/client-kinesis-video-webrtc-storage"; // ES Modules import
 * // const { KinesisVideoWebRTCStorageClient, JoinStorageSessionAsViewerCommand } = require("@aws-sdk/client-kinesis-video-webrtc-storage"); // CommonJS import
 * // import type { KinesisVideoWebRTCStorageClientConfig } from "@aws-sdk/client-kinesis-video-webrtc-storage";
 * const config = {}; // type is KinesisVideoWebRTCStorageClientConfig
 * const client = new KinesisVideoWebRTCStorageClient(config);
 * const input = { // JoinStorageSessionAsViewerInput
 *   channelArn: "STRING_VALUE", // required
 *   clientId: "STRING_VALUE", // required
 * };
 * const command = new JoinStorageSessionAsViewerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param JoinStorageSessionAsViewerCommandInput - {@link JoinStorageSessionAsViewerCommandInput}
 * @returns {@link JoinStorageSessionAsViewerCommandOutput}
 * @see {@link JoinStorageSessionAsViewerCommandInput} for command's `input` shape.
 * @see {@link JoinStorageSessionAsViewerCommandOutput} for command's `response` shape.
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
export class JoinStorageSessionAsViewerCommand extends command<JoinStorageSessionAsViewerCommandInput, JoinStorageSessionAsViewerCommandOutput>(
  _ep0,
  _mw0,
  "JoinStorageSessionAsViewer",
  JoinStorageSessionAsViewer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JoinStorageSessionAsViewerInput;
      output: {};
    };
    sdk: {
      input: JoinStorageSessionAsViewerCommandInput;
      output: JoinStorageSessionAsViewerCommandOutput;
    };
  };
}
