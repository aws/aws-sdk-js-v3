// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetHLSStreamingSessionURLInput, GetHLSStreamingSessionURLOutput } from "../models/models_0";
import { GetHLSStreamingSessionURL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves an HTTP Live Streaming (HLS) URL for the stream. You can then open the URL in a browser or media player to view the stream contents.
 *
 * Both the `StreamName` and the `StreamARN` parameters are optional, but you must specify either the `StreamName` or the `StreamARN` when invoking this API operation.
 *
 * An Amazon Kinesis video stream has the following requirements for providing data through HLS:
 *
 * - For streaming video, the media must contain H.264 or H.265 encoded video and, optionally, AAC encoded audio. Specifically, the codec ID of track 1 should be `V_MPEG/ISO/AVC` (for H.264) or `V_MPEG/ISO/HEVC` (for H.265). Optionally, the codec ID of track 2 should be `A_AAC`. For audio only streaming, the codec ID of track 1 should be `A_AAC`.
 * - Data retention must be greater than 0.
 * - The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format or HEVC for H.265 format ([MPEG-4 specification ISO/IEC 14496-15](https://www.iso.org/standard/55980.html)). For information about adapting stream data to a given format, see [NAL Adaptation Flags](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html).
 * - The audio track (if present) of each fragment must contain codec private data in the AAC format ([AAC specification ISO/IEC 13818-7](https://www.iso.org/standard/43345.html)).
 *
 * Kinesis Video Streams HLS sessions contain fragments in the fragmented MPEG-4 form (also called fMP4 or CMAF) or the MPEG-2 form (also called TS chunks, which the HLS specification also supports). For more information about HLS fragment types, see the [HLS specification](https://tools.ietf.org/html/draft-pantos-http-live-streaming-23).
 *
 * The following procedure shows how to use HLS with Kinesis Video Streams:
 *
 * 1. Get an endpoint using [GetDataEndpoint](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html), specifying `GET_HLS_STREAMING_SESSION_URL` for the `APIName` parameter.
 * 2. Retrieve the HLS URL using `GetHLSStreamingSessionURL`. Kinesis Video Streams creates an HLS streaming session to be used for accessing content in a stream using the HLS protocol. `GetHLSStreamingSessionURL` returns an authenticated URL (that includes an encrypted session token) for the session's HLS *master playlist* (the root resource needed for streaming with HLS).
 *
 *    > **Note:** Don't share or store this token where an unauthorized entity could access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you would use with your Amazon Web Services credentials.
 *
 *    The media that is made available through the playlist consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bitrates) is made available.
 * 3. Provide the URL (containing the encrypted session token) for the HLS master playlist to a media player that supports the HLS protocol. Kinesis Video Streams makes the HLS media playlist, initialization fragment, and media fragments available through the master playlist URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video or audio decoder and renderer. The media fragments contain H.264-encoded video frames or AAC-encoded audio samples.
 * 4. The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:
 *
 *    - **GetHLSMasterPlaylist:** Retrieves an HLS master playlist, which contains a URL for the `GetHLSMediaPlaylist` action for each track, and additional metadata for the media player, including estimated bitrate and resolution.
 *    - **GetHLSMediaPlaylist:** Retrieves an HLS media playlist, which contains a URL to access the MP4 initialization fragment with the `GetMP4InitFragment` action, and URLs to access the MP4 media fragments with the `GetMP4MediaFragment` actions. The HLS media playlist also contains metadata about the stream that the player needs to play it, such as whether the `PlaybackMode` is `LIVE` or `ON_DEMAND`. The HLS media playlist is typically static for sessions with a `PlaybackType` of `ON_DEMAND`. The HLS media playlist is continually updated with new fragments for sessions with a `PlaybackType` of `LIVE`. There is a distinct HLS media playlist for the video track and the audio track (if applicable) that contains MP4 media URLs for the specific track.
 *    - **GetMP4InitFragment:** Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "`fytp`" and "`moov`" MP4 atoms, and the child atoms that are needed to initialize the media player decoder.
 *
 *      The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream and respective track, which the media player needs to decode the media frames.
 *    - **GetMP4MediaFragment:** Retrieves MP4 media fragments. These fragments contain the "`moof`" and "`mdat`" MP4 atoms and their child atoms, containing the encoded fragment's media frames and their timestamps.
 *
 *      > **Note:** For the HLS streaming session, in-track codec private data (CPD) changes are supported. After the first media fragment is made available in a streaming session, fragments can contain CPD changes for each track. Therefore, the fragments in a session can have a different resolution, bit rate, or other information in the CPD without interrupting playback. However, any change made in the track number or track codec format can return an error when those different media fragments are loaded. For example, streaming will fail if the fragments in the stream change from having only video to having both audio and video, or if an AAC audio track is changed to an ALAW audio track. For each streaming session, only 500 CPD changes are allowed.
 *
 *      Data retrieved with this action is billable. For information, see [Pricing](https://aws.amazon.com/kinesis/video-streams/pricing/).
 *    - **GetTSFragment:** Retrieves MPEG TS fragments containing both initialization and media data for all tracks in the stream.
 *
 *      > **Note:** If the `ContainerFormat` is `MPEG_TS`, this API is used instead of `GetMP4InitFragment` and `GetMP4MediaFragment` to retrieve stream media.
 *
 *      Data retrieved with this action is billable. For more information, see [Kinesis Video Streams pricing](https://aws.amazon.com/kinesis/video-streams/pricing/).
 *
 * A streaming session URL must not be shared between players. The service might throttle a session if multiple media players are sharing it. For connection limits, see [Kinesis Video Streams Limits](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html).
 *
 * You can monitor the amount of data that the media player consumes by monitoring the `GetMP4MediaFragment.OutgoingBytes` Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see [Monitoring Kinesis Video Streams](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html). For pricing information, see [Amazon Kinesis Video Streams Pricing](https://aws.amazon.com/kinesis/video-streams/pricing/) and [Amazon Web Services Pricing](https://aws.amazon.com/pricing/). Charges for both HLS sessions and outgoing Amazon Web Services data apply.
 *
 * For more information about HLS, see [HTTP Live Streaming](https://developer.apple.com/streaming/) on the [Apple Developer site](https://developer.apple.com).
 *
 * > **Important:**
 * >
 * > If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information:
 * >
 * > - `x-amz-ErrorType` HTTP header – contains a more specific error type in addition to what the HTTP status code provides.
 * > - `x-amz-RequestId` HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id.
 * >
 * > Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.
 * >
 * > For more information, see the **Errors** section at the bottom of this topic, as well as [Common Errors](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetHLSStreamingSessionURLCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetHLSStreamingSessionURLCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * // import type { KinesisVideoArchivedMediaClientConfig } from "@aws-sdk/client-kinesis-video-archived-media";
 * const config = {}; // type is KinesisVideoArchivedMediaClientConfig
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
 *
 * Kinesis Video Streams has throttled the request because you have exceeded a limit. Try making the call later. For information about limits, see [Kinesis Video Streams Limits](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html).
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *
 * @throws {@link InvalidCodecPrivateDataException} (client fault)
 *
 * The codec private data in at least one of the tracks of the video stream is not valid for this operation.
 *
 * @throws {@link MissingCodecPrivateDataException} (client fault)
 *
 * No codec private data was found in at least one of tracks of the video stream.
 *
 * @throws {@link NoDataRetentionException} (client fault)
 *
 * `GetImages` was requested for a stream that does not retain data (that is, has a `DataRetentionInHours` of 0).
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * Status Code: 403, The caller is not authorized to perform an operation on the given stream, or the token has expired.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * `GetImages` will throw this error when Kinesis Video Streams can't find the stream that you specified.
 *
 * `GetHLSStreamingSessionURL` and `GetDASHStreamingSessionURL` throw this error if a session with a `PlaybackMode` of `ON_DEMAND` or `LIVE_REPLAY`is requested for a stream that has no fragments within the requested time range, or if a session with a `PlaybackMode` of `LIVE` is requested for a stream that has no fragments within the last 30 seconds.
 *
 * @throws {@link UnsupportedStreamMediaTypeException} (client fault)
 *
 * The type of the media (for example, h.264 or h.265 video or ACC or G.711 audio) could not be determined from the codec IDs of the tracks in the first fragment for a playback session. The codec ID for track 1 should be `V_MPEG/ISO/AVC` and, optionally, the codec ID for track 2 should be `A_AAC`.
 *
 * @throws {@link KinesisVideoArchivedMediaServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideoArchivedMedia service.
 *
 * @public
 */
export class GetHLSStreamingSessionURLCommand extends command<GetHLSStreamingSessionURLCommandInput, GetHLSStreamingSessionURLCommandOutput>(
  _ep0,
  _mw0,
  "GetHLSStreamingSessionURL",
  GetHLSStreamingSessionURL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHLSStreamingSessionURLInput;
      output: GetHLSStreamingSessionURLOutput;
    };
    sdk: {
      input: GetHLSStreamingSessionURLCommandInput;
      output: GetHLSStreamingSessionURLCommandOutput;
    };
  };
}
