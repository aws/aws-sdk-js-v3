// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDASHStreamingSessionURLInput, GetDASHStreamingSessionURLOutput } from "../models/models_0";
import { GetDASHStreamingSessionURL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDASHStreamingSessionURLCommand}.
 */
export interface GetDASHStreamingSessionURLCommandInput extends GetDASHStreamingSessionURLInput {}
/**
 * @public
 *
 * The output of {@link GetDASHStreamingSessionURLCommand}.
 */
export interface GetDASHStreamingSessionURLCommandOutput extends GetDASHStreamingSessionURLOutput, __MetadataBearer {}

/**
 * Retrieves an MPEG Dynamic Adaptive Streaming over HTTP (DASH) URL for the stream. You can then open the URL in a media player to view the stream contents.
 *
 * Both the `StreamName` and the `StreamARN` parameters are optional, but you must specify either the `StreamName` or the `StreamARN` when invoking this API operation.
 *
 * An Amazon Kinesis video stream has the following requirements for providing data through MPEG-DASH:
 *
 * - The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be `V_MPEG/ISO/AVC` (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be `A_AAC` (for AAC) or A_MS/ACM (for G.711).
 * - Data retention must be greater than 0.
 * - The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see [MPEG-4 specification ISO/IEC 14496-15](https://www.iso.org/standard/55980.html). For information about adapting stream data to a given format, see [NAL Adaptation Flags](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html).
 * - The audio track (if present) of each fragment must contain codec private data in the AAC format ([AAC specification ISO/IEC 13818-7](https://www.iso.org/standard/43345.html)) or the [MS Wave format](http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html).
 *
 * The following procedure shows how to use MPEG-DASH with Kinesis Video Streams:
 *
 * 1. Get an endpoint using [GetDataEndpoint](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html), specifying `GET_DASH_STREAMING_SESSION_URL` for the `APIName` parameter.
 * 2. Retrieve the MPEG-DASH URL using `GetDASHStreamingSessionURL`. Kinesis Video Streams creates an MPEG-DASH streaming session to be used for accessing content in a stream using the MPEG-DASH protocol. `GetDASHStreamingSessionURL` returns an authenticated URL (that includes an encrypted session token) for the session's MPEG-DASH *manifest* (the root resource needed for streaming with MPEG-DASH).
 *
 *    > **Note:** Don't share or store this token where an unauthorized entity can access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you use with your Amazon Web Services credentials.
 *
 *    The media that is made available through the manifest consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bitrates) is made available.
 * 3. Provide the URL (containing the encrypted session token) for the MPEG-DASH manifest to a media player that supports the MPEG-DASH protocol. Kinesis Video Streams makes the initialization fragment and media fragments available through the manifest URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video or audio decoder and renderer. The media fragments contain encoded video frames or encoded audio samples.
 * 4. The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:
 *
 *    - **GetDASHManifest:** Retrieves an MPEG DASH manifest, which contains the metadata for the media that you want to playback.
 *    - **GetMP4InitFragment:** Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "`fytp`" and "`moov`" MP4 atoms, and the child atoms that are needed to initialize the media player decoder.
 *
 *      The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream and respective track, which the media player needs to decode the media frames.
 *    - **GetMP4MediaFragment:** Retrieves MP4 media fragments. These fragments contain the "`moof`" and "`mdat`" MP4 atoms and their child atoms, containing the encoded fragment's media frames and their timestamps.
 *
 *      > **Note:** After the first media fragment is made available in a streaming session, any fragments that don't contain the same codec private data cause an error to be returned when those different media fragments are loaded. Therefore, the codec private data should not change between fragments in a session. This also means that the session fails if the fragments in a stream change from having only video to having both audio and video.
 *
 *      Data retrieved with this action is billable. See [Pricing](https://aws.amazon.com/kinesis/video-streams/pricing/) for details.
 *
 * > **Note:** For restrictions that apply to MPEG-DASH sessions, see [Kinesis Video Streams Limits](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html).
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
 * > - `x-amz-RequestId` HTTP header – if you want to report an issue to Amazon Web Services the support team can better diagnose the problem if given the Request Id.
 * >
 * > Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.
 * >
 * > For more information, see the **Errors** section at the bottom of this topic, as well as [Common Errors](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetDASHStreamingSessionURLCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetDASHStreamingSessionURLCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * // import type { KinesisVideoArchivedMediaClientConfig } from "@aws-sdk/client-kinesis-video-archived-media";
 * const config = {}; // type is KinesisVideoArchivedMediaClientConfig
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const input = { // GetDASHStreamingSessionURLInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   PlaybackMode: "LIVE" || "LIVE_REPLAY" || "ON_DEMAND",
 *   DisplayFragmentTimestamp: "ALWAYS" || "NEVER",
 *   DisplayFragmentNumber: "ALWAYS" || "NEVER",
 *   DASHFragmentSelector: { // DASHFragmentSelector
 *     FragmentSelectorType: "PRODUCER_TIMESTAMP" || "SERVER_TIMESTAMP",
 *     TimestampRange: { // DASHTimestampRange
 *       StartTimestamp: new Date("TIMESTAMP"),
 *       EndTimestamp: new Date("TIMESTAMP"),
 *     },
 *   },
 *   Expires: Number("int"),
 *   MaxManifestFragmentResults: Number("long"),
 * };
 * const command = new GetDASHStreamingSessionURLCommand(input);
 * const response = await client.send(command);
 * // { // GetDASHStreamingSessionURLOutput
 * //   DASHStreamingSessionURL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDASHStreamingSessionURLCommandInput - {@link GetDASHStreamingSessionURLCommandInput}
 * @returns {@link GetDASHStreamingSessionURLCommandOutput}
 * @see {@link GetDASHStreamingSessionURLCommandInput} for command's `input` shape.
 * @see {@link GetDASHStreamingSessionURLCommandOutput} for command's `response` shape.
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
export class GetDASHStreamingSessionURLCommand extends command<GetDASHStreamingSessionURLCommandInput, GetDASHStreamingSessionURLCommandOutput>(
  _ep0,
  _mw0,
  "GetDASHStreamingSessionURL",
  GetDASHStreamingSessionURL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDASHStreamingSessionURLInput;
      output: GetDASHStreamingSessionURLOutput;
    };
    sdk: {
      input: GetDASHStreamingSessionURLCommandInput;
      output: GetDASHStreamingSessionURLCommandOutput;
    };
  };
}
