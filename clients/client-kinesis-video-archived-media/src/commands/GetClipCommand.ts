// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient";
import { type GetClipInput, GetClipOutput } from "../models/models_0";
import { GetClip$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClipCommand}.
 */
export interface GetClipCommandInput extends GetClipInput {}
/**
 * @public
 *
 * The output of {@link GetClipCommand}.
 */
export interface GetClipCommandOutput extends Omit<GetClipOutput, "Payload">, __MetadataBearer {
  Payload?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Downloads an MP4 file (clip) containing the archived, on-demand media from the
 *             specified video stream over the specified time range. </p>
 *          <p>Both the StreamName and the StreamARN parameters are optional, but you must specify
 *             either the StreamName or the StreamARN when invoking this API operation. </p>
 *          <p>As a prerequisite to using GetCLip API, you must obtain an endpoint using
 *                 <code>GetDataEndpoint</code>, specifying GET_CLIP for<code></code> the
 *                 <code>APIName</code> parameter. </p>
 *          <p>An Amazon Kinesis video stream has the following requirements for providing data
 *             through MP4:</p>
 *          <ul>
 *             <li>
 *                <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or
 *                     G.711 encoded audio. Specifically, the codec ID of track 1 should be
 *                         <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265).
 *                     Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or
 *                     A_MS/ACM (for G.711).</p>
 *             </li>
 *             <li>
 *                <p>Data retention must be greater than 0.</p>
 *             </li>
 *             <li>
 *                <p>The video track of each fragment must contain codec private data in the
 *                     Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more
 *                     information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4
 *                         specification ISO/IEC 14496-15</a>. For information about adapting
 *                     stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p>
 *             </li>
 *             <li>
 *                <p>The audio track (if present) of each fragment must contain codec private data
 *                     in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC
 *                         specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS
 *                         Wave format</a>.</p>
 *             </li>
 *          </ul>
 *          <p>You can monitor the amount of outgoing data by monitoring the
 *                 <code>GetClip.OutgoingBytes</code> Amazon CloudWatch metric. For information about
 *             using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video
 *                     Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/"> Amazon Web Services
 *                 Pricing</a>. Charges for outgoing Amazon Web Services data apply.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetClipCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetClipCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * // import type { KinesisVideoArchivedMediaClientConfig } from "@aws-sdk/client-kinesis-video-archived-media";
 * const config = {}; // type is KinesisVideoArchivedMediaClientConfig
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const input = { // GetClipInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   ClipFragmentSelector: { // ClipFragmentSelector
 *     FragmentSelectorType: "PRODUCER_TIMESTAMP" || "SERVER_TIMESTAMP", // required
 *     TimestampRange: { // ClipTimestampRange
 *       StartTimestamp: new Date("TIMESTAMP"), // required
 *       EndTimestamp: new Date("TIMESTAMP"), // required
 *     },
 *   },
 * };
 * const command = new GetClipCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Payload.transformToByteArray();
 * // const str = await response.Payload.transformToString();
 * // response.Payload.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetClipOutput
 * //   ContentType: "STRING_VALUE",
 * //   Payload: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param GetClipCommandInput - {@link GetClipCommandInput}
 * @returns {@link GetClipCommandOutput}
 * @see {@link GetClipCommandInput} for command's `input` shape.
 * @see {@link GetClipCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for KinesisVideoArchivedMediaClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded a limit. Try making the call later. For information about limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be
 *             used.</p>
 *
 * @throws {@link InvalidCodecPrivateDataException} (client fault)
 *  <p>The codec private data in at least one of the tracks of the video stream is not valid
 *             for this operation.</p>
 *
 * @throws {@link InvalidMediaFrameException} (client fault)
 *  <p>One or more frames in the requested clip could not be parsed based on the specified
 *             codec.</p>
 *
 * @throws {@link MissingCodecPrivateDataException} (client fault)
 *  <p>No codec private data was found in at least one of tracks of the video stream.</p>
 *
 * @throws {@link NoDataRetentionException} (client fault)
 *  <p>
 *             <code>GetImages</code> was requested for a stream that does not retain data (that is, has
 *             a <code>DataRetentionInHours</code> of 0). </p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Status Code: 403, The caller is not authorized to perform an operation on the given
 *             stream, or the token has expired.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *             <code>GetImages</code> will throw this error when Kinesis Video Streams can't find the stream
 *             that you specified.</p>
 *          <p>
 *             <code>GetHLSStreamingSessionURL</code> and <code>GetDASHStreamingSessionURL</code> throw
 *             this error if a session with a <code>PlaybackMode</code> of <code>ON_DEMAND</code> or
 *                 <code>LIVE_REPLAY</code>is requested for a stream that has no fragments within the
 *             requested time range, or if a session with a <code>PlaybackMode</code> of
 *                 <code>LIVE</code> is requested for a stream that has no fragments within the last 30
 *             seconds.</p>
 *
 * @throws {@link UnsupportedStreamMediaTypeException} (client fault)
 *  <p>The type of the media (for example, h.264 or h.265 video or ACC or G.711 audio) could
 *             not be determined from the codec IDs of the tracks in the first fragment for a playback
 *             session. The codec ID for track 1 should be <code>V_MPEG/ISO/AVC</code> and, optionally,
 *             the codec ID for track 2 should be <code>A_AAC</code>.</p>
 *
 * @throws {@link KinesisVideoArchivedMediaServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideoArchivedMedia service.</p>
 *
 *
 * @public
 */
export class GetClipCommand extends $Command
  .classBuilder<
    GetClipCommandInput,
    GetClipCommandOutput,
    KinesisVideoArchivedMediaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoArchivedMediaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSAcuityReader", "GetClip", {})
  .n("KinesisVideoArchivedMediaClient", "GetClipCommand")
  .sc(GetClip$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClipInput;
      output: GetClipOutput;
    };
    sdk: {
      input: GetClipCommandInput;
      output: GetClipCommandOutput;
    };
  };
}
