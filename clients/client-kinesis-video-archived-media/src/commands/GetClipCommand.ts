// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetClipInput, GetClipOutput } from "../models/models_0";
import { GetClip$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Downloads an MP4 file (clip) containing the archived, on-demand media from the specified video stream over the specified time range.
 *
 * Both the StreamName and the StreamARN parameters are optional, but you must specify either the StreamName or the StreamARN when invoking this API operation.
 *
 * As a prerequisite to using GetCLip API, you must obtain an endpoint using `GetDataEndpoint`, specifying GET_CLIP for the `APIName` parameter.
 *
 * An Amazon Kinesis video stream has the following requirements for providing data through MP4:
 *
 * - The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be `V_MPEG/ISO/AVC` (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be `A_AAC` (for AAC) or A_MS/ACM (for G.711).
 * - Data retention must be greater than 0.
 * - The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see [MPEG-4 specification ISO/IEC 14496-15](https://www.iso.org/standard/55980.html). For information about adapting stream data to a given format, see [NAL Adaptation Flags](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html).
 * - The audio track (if present) of each fragment must contain codec private data in the AAC format ([AAC specification ISO/IEC 13818-7](https://www.iso.org/standard/43345.html)) or the [MS Wave format](http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html).
 *
 * You can monitor the amount of outgoing data by monitoring the `GetClip.OutgoingBytes` Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see [Monitoring Kinesis Video Streams](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html). For pricing information, see [Amazon Kinesis Video Streams Pricing](https://aws.amazon.com/kinesis/video-streams/pricing/) and [Amazon Web Services Pricing](https://aws.amazon.com/pricing/). Charges for outgoing Amazon Web Services data apply.
 *
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
 * @throws {@link InvalidMediaFrameException} (client fault)
 *
 * One or more frames in the requested clip could not be parsed based on the specified codec.
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
export class GetClipCommand extends command<GetClipCommandInput, GetClipCommandOutput>(
  _ep0,
  _mw0,
  "GetClip",
  GetClip$
) {
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
