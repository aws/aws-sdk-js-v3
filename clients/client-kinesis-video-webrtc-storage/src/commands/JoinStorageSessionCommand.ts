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
 * <p>
 *       Join the ongoing one way-video and/or multi-way audio WebRTC session as
 *       a video producing device for an input channel. If there’s no existing
 *       session for the channel, a new streaming session needs to be created, and the
 *       Amazon Resource Name (ARN) of the signaling channel must be provided.
 *     </p>
 *          <p>Currently for the <code>SINGLE_MASTER</code> type, a video producing
 *       device is able to ingest both audio and video media into a stream,
 *       while viewers can only ingest audio. Both a video producing device
 *       and viewers can join the session first, and wait for other participants.</p>
 *          <p>While participants are having peer to peer conversations through webRTC,
 *       the ingested media session will be stored into the Kinesis Video Stream.
 *       Multiple viewers are able to playback real-time media.</p>
 *          <p>Customers can also use existing Kinesis Video Streams features like
 *       <code>HLS</code> or <code>DASH</code> playback, Image generation, and more
 *       with ingested WebRTC media.</p>
 *          <note>
 *             <p>Assume that only one video producing device client
 *       can be associated with a session for the channel. If more than one
 *       client joins the session of a specific channel as a video producing device,
 *       the most recent client request takes precedence. </p>
 *          </note>
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
  .ep({
    ...commonParams,
  })
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
  .build() {}
