// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisVideoWebRTCStorageClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoWebRTCStorageClient";
import { JoinStorageSessionInput } from "../models/models_0";
import { de_JoinStorageSessionCommand, se_JoinStorageSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>Before using this API, you must call the <code>GetSignalingChannelEndpoint</code> API to request the WEBRTC endpoint. You then specify the endpoint and region in your <code>JoinStorageSession</code> API request.</p>
 *          </note>
 *          <p>Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing
 *       device for an input channel. If there’s no existing session for the channel, a new streaming
 *       session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must
 *       be provided. </p>
 *          <p>Currently for the <code>SINGLE_MASTER</code> type, a video producing
 *       device is able to ingest both audio and video media into a stream. Only video producing devices can join the session and record media.</p>
 *          <important>
 *             <p>Both audio and video tracks are currently required for WebRTC ingestion.</p>
 *             <p>Current requirements:</p>
 *             <ul>
 *                <li>
 *                   <p>Video track: H.264</p>
 *                </li>
 *                <li>
 *                   <p>Audio track: Opus</p>
 *                </li>
 *             </ul>
 *          </important>
 *          <p>The resulting ingested video in the Kinesis video stream will have the following
 *       parameters: H.264 video and AAC audio.</p>
 *          <p>Once a master participant has negotiated a connection through WebRTC, the ingested media
 *       session will be stored in the Kinesis video stream. Multiple viewers are then able to play
 *       back real-time media through our Playback APIs.</p>
 *          <p>You can also use existing Kinesis Video Streams features like <code>HLS</code> or
 *       <code>DASH</code> playback, image generation via <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/gs-getImages.html">GetImages</a>, and more
 *       with ingested WebRTC media.</p>
 *          <note>
 *             <p>S3 image delivery and notifications are not currently supported.</p>
 *          </note>
 *          <note>
 *             <p>Assume that only one video producing device client
 *       can be associated with a session for the channel. If more than one
 *       client joins the session of a specific channel as a video producing device,
 *       the most recent client request takes precedence. </p>
 *          </note>
 *          <p>
 *             <b>Additional information</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Idempotent</b> - This API is not idempotent.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Retry behavior</b> - This is counted as a new API call.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Concurrent calls</b> - Concurrent calls are allowed. An offer is sent once per each call.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoWebRTCStorageClient, JoinStorageSessionCommand } from "@aws-sdk/client-kinesis-video-webrtc-storage"; // ES Modules import
 * // const { KinesisVideoWebRTCStorageClient, JoinStorageSessionCommand } = require("@aws-sdk/client-kinesis-video-webrtc-storage"); // CommonJS import
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
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>
 *       Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *     </p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource is not found.</p>
 *
 * @throws {@link KinesisVideoWebRTCStorageServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideoWebRTCStorage service.</p>
 *
 *
 * @public
 */
export class JoinStorageSessionCommand extends $Command
  .classBuilder<
    JoinStorageSessionCommandInput,
    JoinStorageSessionCommandOutput,
    KinesisVideoWebRTCStorageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoWebRTCStorageClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSAcuityRoutingServiceLambda", "JoinStorageSession", {})
  .n("KinesisVideoWebRTCStorageClient", "JoinStorageSessionCommand")
  .f(void 0, void 0)
  .ser(se_JoinStorageSessionCommand)
  .de(de_JoinStorageSessionCommand)
  .build() {
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
