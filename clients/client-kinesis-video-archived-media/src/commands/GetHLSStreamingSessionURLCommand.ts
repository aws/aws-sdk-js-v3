// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient";
import { GetHLSStreamingSessionURLInput, GetHLSStreamingSessionURLOutput } from "../models/models_0";
import { de_GetHLSStreamingSessionURLCommand, se_GetHLSStreamingSessionURLCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHLSStreamingSessionURLCommand}.
 */
export interface GetHLSStreamingSessionURLCommandInput extends GetHLSStreamingSessionURLInput {}
/**
 * @public
 *
 * The output of {@link GetHLSStreamingSessionURLCommand}.
 */
export interface GetHLSStreamingSessionURLCommandOutput extends GetHLSStreamingSessionURLOutput, __MetadataBearer {}

/**
 * <p>Retrieves an HTTP Live Streaming (HLS) URL for the stream. You can then open the URL
 *             in a browser or media player to view the stream contents.</p>
 *          <p>Both the <code>StreamName</code> and the <code>StreamARN</code> parameters are
 *             optional, but you must specify either the <code>StreamName</code> or the
 *                 <code>StreamARN</code> when invoking this API operation.</p>
 *          <p>An Amazon Kinesis video stream has the following requirements for providing data
 *             through HLS:</p>
 *          <ul>
 *             <li>
 *                <p>For streaming video, the media must contain H.264 or H.265 encoded video and, optionally, AAC
 *                     encoded audio. Specifically, the codec ID of track 1 should be
 *                     <code>V_MPEG/ISO/AVC</code> (for H.264) or <code>V_MPEG/ISO/HEVC</code> (for
 *                     H.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code>. For audio only streaming, the codec ID of track 1 should be
 *                     <code>A_AAC</code>.</p>
 *             </li>
 *             <li>
 *                <p>Data retention must be greater than 0.</p>
 *             </li>
 *             <li>
 *                <p>The video track of each fragment must contain codec private data in the
 *                     Advanced Video Coding (AVC) for H.264 format or HEVC for H.265 format (<a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC
 *                         14496-15</a>). For information about adapting stream data to a given
 *                     format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p>
 *             </li>
 *             <li>
 *                <p>The audio track (if present) of each fragment must contain codec private data
 *                     in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC
 *                         specification ISO/IEC 13818-7</a>).</p>
 *             </li>
 *          </ul>
 *          <p>Kinesis Video Streams HLS sessions contain fragments in the fragmented MPEG-4 form
 *             (also called fMP4 or CMAF) or the MPEG-2 form (also called TS chunks, which the HLS
 *             specification also supports). For more information about HLS fragment types, see the
 *                 <a href="https://tools.ietf.org/html/draft-pantos-http-live-streaming-23">HLS
 *                 specification</a>.</p>
 *          <p>The following procedure shows how to use HLS with Kinesis Video Streams:</p>
 *          <ol>
 *             <li>
 *                <p>Get an endpoint using <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html">GetDataEndpoint</a>, specifying
 *                         <code>GET_HLS_STREAMING_SESSION_URL</code> for the <code>APIName</code>
 *                     parameter.</p>
 *             </li>
 *             <li>
 *                <p>Retrieve the HLS URL using <code>GetHLSStreamingSessionURL</code>. Kinesis
 *                     Video Streams creates an HLS streaming session to be used for accessing content
 *                     in a stream using the HLS protocol. <code>GetHLSStreamingSessionURL</code>
 *                     returns an authenticated URL (that includes an encrypted session token) for the
 *                     session's HLS <i>master playlist</i> (the root resource needed for
 *                     streaming with HLS).</p>
 *                <note>
 *                   <p>Don't share or store this token where an unauthorized entity could access
 *                         it. The token provides access to the content of the stream. Safeguard the
 *                         token with the same measures that you would use with your Amazon Web Services
 *                         credentials.</p>
 *                </note>
 *                <p>The media that is made available through the playlist consists only of the
 *                     requested stream, time range, and format. No other media data (such as frames
 *                     outside the requested window or alternate bitrates) is made available.</p>
 *             </li>
 *             <li>
 *                <p>Provide the URL (containing the encrypted session token) for the HLS master
 *                     playlist to a media player that supports the HLS protocol. Kinesis Video Streams
 *                     makes the HLS media playlist, initialization fragment, and media fragments
 *                     available through the master playlist URL. The initialization fragment contains
 *                     the codec private data for the stream, and other data needed to set up the video
 *                     or audio decoder and renderer. The media fragments contain H.264-encoded video
 *                     frames or AAC-encoded audio samples.</p>
 *             </li>
 *             <li>
 *                <p>The media player receives the authenticated URL and requests stream metadata
 *                     and media data normally. When the media player requests data, it calls the
 *                     following actions:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>GetHLSMasterPlaylist:</b> Retrieves an HLS
 *                             master playlist, which contains a URL for the
 *                                 <code>GetHLSMediaPlaylist</code> action for each track, and
 *                             additional metadata for the media player, including estimated bitrate
 *                             and resolution.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>GetHLSMediaPlaylist:</b> Retrieves an HLS
 *                             media playlist, which contains a URL to access the MP4 initialization
 *                             fragment with the <code>GetMP4InitFragment</code> action, and URLs to
 *                             access the MP4 media fragments with the <code>GetMP4MediaFragment</code>
 *                             actions. The HLS media playlist also contains metadata about the stream
 *                             that the player needs to play it, such as whether the
 *                                 <code>PlaybackMode</code> is <code>LIVE</code> or
 *                                 <code>ON_DEMAND</code>. The HLS media playlist is typically static
 *                             for sessions with a <code>PlaybackType</code> of <code>ON_DEMAND</code>.
 *                             The HLS media playlist is continually updated with new fragments for
 *                             sessions with a <code>PlaybackType</code> of <code>LIVE</code>. There is
 *                             a distinct HLS media playlist for the video track and the audio track
 *                             (if applicable) that contains MP4 media URLs for the specific track.
 *                         </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>GetMP4InitFragment:</b> Retrieves the MP4
 *                             initialization fragment. The media player typically loads the
 *                             initialization fragment before loading any media fragments. This
 *                             fragment contains the "<code>fytp</code>" and "<code>moov</code>" MP4
 *                             atoms, and the child atoms that are needed to initialize the media
 *                             player decoder.</p>
 *                      <p>The initialization fragment does not correspond to a fragment in a
 *                             Kinesis video stream. It contains only the codec private data for the
 *                             stream and respective track, which the media player needs to decode the
 *                             media frames.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>GetMP4MediaFragment:</b> Retrieves MP4
 *                             media fragments. These fragments contain the "<code>moof</code>" and
 *                                 "<code>mdat</code>" MP4 atoms and their child atoms, containing the
 *                             encoded fragment's media frames and their timestamps. </p>
 *                      <note>
 *                         <p>For the HLS streaming session, in-track codec private data (CPD)
 *                                 changes are supported. After the first media fragment is made
 *                                 available in a streaming session, fragments can contain CPD changes
 *                                 for each track. Therefore, the fragments in a session can have a
 *                                 different resolution, bit rate, or other information in the CPD
 *                                 without interrupting playback. However, any change made in the track
 *                                 number or track codec format can return an error when those
 *                                 different media fragments are loaded. For example, streaming will
 *                                 fail if the fragments in the stream change from having only video to
 *                                 having both audio and video, or if an AAC audio track is changed to
 *                                 an ALAW audio track. For each streaming session, only 500 CPD
 *                                 changes are allowed.</p>
 *                      </note>
 *                      <p>Data retrieved with this action is billable. For information, see
 *                                 <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Pricing</a>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>GetTSFragment:</b> Retrieves MPEG TS
 *                             fragments containing both initialization and media data for all tracks
 *                             in the stream.</p>
 *                      <note>
 *                         <p>If the <code>ContainerFormat</code> is <code>MPEG_TS</code>, this
 *                                 API is used instead of <code>GetMP4InitFragment</code> and
 *                                     <code>GetMP4MediaFragment</code> to retrieve stream
 *                                 media.</p>
 *                      </note>
 *                      <p>Data retrieved with this action is billable. For more information, see
 *                                 <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Kinesis Video Streams pricing</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ol>
 *          <p>A streaming session URL must not be shared between players. The service
 *                         might throttle a session if multiple media players are sharing it. For
 *                         connection limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *          <p>You can monitor the amount of data that the media player consumes by monitoring the
 *                 <code>GetMP4MediaFragment.OutgoingBytes</code> Amazon CloudWatch metric. For
 *             information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video
 *                 Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">Amazon Web Services
 *                 Pricing</a>. Charges for both HLS sessions and outgoing Amazon Web Services data apply.</p>
 *          <p>For more information about HLS, see <a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a> on the
 *                 <a href="https://developer.apple.com">Apple Developer site</a>.</p>
 *          <important>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams archived media API,
 *                 in addition to the HTTP status code and the response body, it includes the following
 *                 pieces of information: </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>x-amz-ErrorType</code> HTTP header – contains a more specific error
 *                         type in addition to what the HTTP status code provides. </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to
 *                         Amazon Web Services, the support team can better diagnose the problem if given the Request
 *                         Id.</p>
 *                </li>
 *             </ul>
 *             <p>Both the HTTP status code and the ErrorType header can be utilized to make
 *                 programmatic decisions about whether errors are retry-able and under what
 *                 conditions, as well as provide information on what actions the client programmer
 *                 might need to take in order to successfully try again.</p>
 *             <p>For more information, see the <b>Errors</b> section at
 *                 the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetHLSStreamingSessionURLCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetHLSStreamingSessionURLCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const input = { // GetHLSStreamingSessionURLInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   PlaybackMode: "LIVE" || "LIVE_REPLAY" || "ON_DEMAND",
 *   HLSFragmentSelector: { // HLSFragmentSelector
 *     FragmentSelectorType: "PRODUCER_TIMESTAMP" || "SERVER_TIMESTAMP",
 *     TimestampRange: { // HLSTimestampRange
 *       StartTimestamp: new Date("TIMESTAMP"),
 *       EndTimestamp: new Date("TIMESTAMP"),
 *     },
 *   },
 *   ContainerFormat: "FRAGMENTED_MP4" || "MPEG_TS",
 *   DiscontinuityMode: "ALWAYS" || "NEVER" || "ON_DISCONTINUITY",
 *   DisplayFragmentTimestamp: "ALWAYS" || "NEVER",
 *   Expires: Number("int"),
 *   MaxMediaPlaylistFragmentResults: Number("long"),
 * };
 * const command = new GetHLSStreamingSessionURLCommand(input);
 * const response = await client.send(command);
 * // { // GetHLSStreamingSessionURLOutput
 * //   HLSStreamingSessionURL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetHLSStreamingSessionURLCommandInput - {@link GetHLSStreamingSessionURLCommandInput}
 * @returns {@link GetHLSStreamingSessionURLCommandOutput}
 * @see {@link GetHLSStreamingSessionURLCommandInput} for command's `input` shape.
 * @see {@link GetHLSStreamingSessionURLCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetHLSStreamingSessionURLCommand extends $Command
  .classBuilder<
    GetHLSStreamingSessionURLCommandInput,
    GetHLSStreamingSessionURLCommandOutput,
    KinesisVideoArchivedMediaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoArchivedMediaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSAcuityReader", "GetHLSStreamingSessionURL", {})
  .n("KinesisVideoArchivedMediaClient", "GetHLSStreamingSessionURLCommand")
  .f(void 0, void 0)
  .ser(se_GetHLSStreamingSessionURLCommand)
  .de(de_GetHLSStreamingSessionURLCommand)
  .build() {}
