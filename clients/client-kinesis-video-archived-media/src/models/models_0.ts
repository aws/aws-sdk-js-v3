// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  ClipFragmentSelectorType,
  ContainerFormat,
  DASHDisplayFragmentNumber,
  DASHDisplayFragmentTimestamp,
  DASHFragmentSelectorType,
  DASHPlaybackMode,
  Format,
  FormatConfigKey,
  FragmentSelectorType,
  HLSDiscontinuityMode,
  HLSDisplayFragmentTimestamp,
  HLSFragmentSelectorType,
  HLSPlaybackMode,
  ImageError,
  ImageSelectorType,
} from "./enums";

/**
 * The range of timestamps for which to return fragments.
 *
 * @public
 */
export interface ClipTimestampRange {
  /**
   * The starting timestamp in the range of timestamps for which to return fragments.
   *
   * Only fragments that start exactly at or after `StartTimestamp` are included in the session. Fragments that start before `StartTimestamp` and continue past it aren't included in the session. If `FragmentSelectorType` is `SERVER_TIMESTAMP`, the `StartTimestamp` must be later than the stream head.
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * The end of the timestamp range for the requested media.
   *
   * This value must be within 24 hours of the specified `StartTimestamp`, and it must be later than the `StartTimestamp` value. If `FragmentSelectorType` for the request is `SERVER_TIMESTAMP`, this value must be in the past.
   *
   * This value is inclusive. The `EndTimestamp` is compared to the (starting) timestamp of the fragment. Fragments that start before the `EndTimestamp` value and continue past it are included in the session.
   *
   * @public
   */
  EndTimestamp: Date | undefined;
}

/**
 * Describes the timestamp range and timestamp origin of a range of fragments.
 *
 * Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.
 *
 * @public
 */
export interface ClipFragmentSelector {
  /**
   * The origin of the timestamps to use (Server or Producer).
   *
   * @public
   */
  FragmentSelectorType: ClipFragmentSelectorType | undefined;

  /**
   * The range of timestamps to return.
   *
   * @public
   */
  TimestampRange: ClipTimestampRange | undefined;
}

/**
 * @public
 */
export interface GetClipInput {
  /**
   * The name of the stream for which to retrieve the media clip.
   *
   * You must specify either the StreamName or the StreamARN.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream for which to retrieve the media clip.
   *
   * You must specify either the StreamName or the StreamARN.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The time range of the requested clip and the source of the timestamps.
   *
   * @public
   */
  ClipFragmentSelector: ClipFragmentSelector | undefined;
}

/**
 * @public
 */
export interface GetClipOutput {
  /**
   * The content type of the media in the requested clip.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Traditional MP4 file that contains the media clip from the specified video stream. The output will contain the first 100 MB or the first 200 fragments from the specified start timestamp. For more information, see [Kinesis Video Streams Limits](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html).
   *
   * @public
   */
  Payload?: StreamingBlobTypes | undefined;
}

/**
 * The start and end of the timestamp range for the requested media.
 *
 * This value should not be present if `PlaybackType` is `LIVE`.
 *
 * The values in `DASHimestampRange` are inclusive. Fragments that start exactly at or after the start time are included in the session. Fragments that start before the start time and continue past it are not included in the session.
 *
 * @public
 */
export interface DASHTimestampRange {
  /**
   * The start of the timestamp range for the requested media.
   *
   * If the `DASHTimestampRange` value is specified, the `StartTimestamp` value is required.
   *
   * Only fragments that start exactly at or after `StartTimestamp` are included in the session. Fragments that start before `StartTimestamp` and continue past it aren't included in the session. If `FragmentSelectorType` is `SERVER_TIMESTAMP`, the `StartTimestamp` must be later than the stream head.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The end of the timestamp range for the requested media. This value must be within 24 hours of the specified `StartTimestamp`, and it must be later than the `StartTimestamp` value.
   *
   * If `FragmentSelectorType` for the request is `SERVER_TIMESTAMP`, this value must be in the past.
   *
   * The `EndTimestamp` value is required for `ON_DEMAND` mode, but optional for `LIVE_REPLAY` mode. If the `EndTimestamp` is not set for `LIVE_REPLAY` mode then the session will continue to include newly ingested fragments until the session expires.
   *
   * > **Note:** This value is inclusive. The `EndTimestamp` is compared to the (starting) timestamp of the fragment. Fragments that start before the `EndTimestamp` value and continue past it are included in the session.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;
}

/**
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
 *
 * @public
 */
export interface DASHFragmentSelector {
  /**
   * The source of the timestamps for the requested media.
   *
   * When `FragmentSelectorType` is set to `PRODUCER_TIMESTAMP` and GetDASHStreamingSessionURLInput$PlaybackMode is `ON_DEMAND` or `LIVE_REPLAY`, the first fragment ingested with a producer timestamp within the specified FragmentSelector$TimestampRange is included in the media playlist. In addition, the fragments with producer timestamps within the `TimestampRange` ingested immediately following the first fragment (up to the GetDASHStreamingSessionURLInput$MaxManifestFragmentResults value) are included.
   *
   * Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the MPEG-DASH manifest will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.
   *
   * When `FragmentSelectorType` is set to `PRODUCER_TIMESTAMP` and GetDASHStreamingSessionURLInput$PlaybackMode is `LIVE`, the producer timestamps are used in the MP4 fragments and for deduplication. But the most recently ingested fragments based on server timestamps are included in the MPEG-DASH manifest. This means that even if fragments ingested in the past have producer timestamps with values now, they are not included in the HLS media playlist.
   *
   * The default is `SERVER_TIMESTAMP`.
   *
   * @public
   */
  FragmentSelectorType?: DASHFragmentSelectorType | undefined;

  /**
   * The start and end of the timestamp range for the requested media.
   *
   * This value should not be present if `PlaybackType` is `LIVE`.
   *
   * @public
   */
  TimestampRange?: DASHTimestampRange | undefined;
}

/**
 * @public
 */
export interface GetDASHStreamingSessionURLInput {
  /**
   * The name of the stream for which to retrieve the MPEG-DASH manifest URL.
   *
   * You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream for which to retrieve the MPEG-DASH manifest URL.
   *
   * You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Whether to retrieve live, live replay, or archived, on-demand data.
   *
   * Features of the three types of sessions include the following:
   *
   * - **`LIVE`** : For sessions of this type, the MPEG-DASH manifest is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new manifest on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.
   *
   *   > **Note:** In `LIVE` mode, the newest available fragments are included in an MPEG-DASH manifest, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the MPEG-DASH manifest if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the manifest, the older fragment is not added, and the gap is not filled.
   * - **`LIVE_REPLAY`** : For sessions of this type, the MPEG-DASH manifest is updated similarly to how it is updated for `LIVE` mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the manifest every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the `ON_DEMAND` mode.
   * - **`ON_DEMAND`** : For sessions of this type, the MPEG-DASH manifest contains all the fragments for the session, up to the number that is specified in `MaxManifestFragmentResults`. The manifest must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.
   *
   * In all playback modes, if `FragmentSelectorType` is `PRODUCER_TIMESTAMP`, and if there are multiple fragments with the same start timestamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the MPEG-DASH manifest. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the MPEG-DASH manifest. This can lead to unexpected behavior in the media player.
   *
   * The default is `LIVE`.
   *
   * @public
   */
  PlaybackMode?: DASHPlaybackMode | undefined;

  /**
   * Per the MPEG-DASH specification, the wall-clock time of fragments in the manifest file can be derived using attributes in the manifest itself. However, typically, MPEG-DASH compatible media players do not properly handle gaps in the media timeline. Kinesis Video Streams adjusts the media timeline in the manifest file to enable playback of media with discontinuities. Therefore, the wall-clock time derived from the manifest file may be inaccurate. If DisplayFragmentTimestamp is set to `ALWAYS`, the accurate fragment timestamp is added to each S element in the manifest file with the attribute name “kvs:ts”. A custom MPEG-DASH media player is necessary to leverage this custom attribute.
   *
   * The default value is `NEVER`. When DASHFragmentSelector is `SERVER_TIMESTAMP`, the timestamps will be the server start timestamps. Similarly, when DASHFragmentSelector is `PRODUCER_TIMESTAMP`, the timestamps will be the producer start timestamps.
   *
   * @public
   */
  DisplayFragmentTimestamp?: DASHDisplayFragmentTimestamp | undefined;

  /**
   * Fragments are identified in the manifest file based on their sequence number in the session. If DisplayFragmentNumber is set to `ALWAYS`, the Kinesis Video Streams fragment number is added to each S element in the manifest file with the attribute name “kvs:fn”. These fragment numbers can be used for logging or for use with other APIs (e.g. `GetMedia` and `GetMediaForFragmentList`). A custom MPEG-DASH media player is necessary to leverage these this custom attribute.
   *
   * The default value is `NEVER`.
   *
   * @public
   */
  DisplayFragmentNumber?: DASHDisplayFragmentNumber | undefined;

  /**
   * The time range of the requested fragment and the source of the timestamps.
   *
   * This parameter is required if `PlaybackMode` is `ON_DEMAND` or `LIVE_REPLAY`. This parameter is optional if PlaybackMode is `LIVE`. If `PlaybackMode` is `LIVE`, the `FragmentSelectorType` can be set, but the `TimestampRange` should not be set. If `PlaybackMode` is `ON_DEMAND` or `LIVE_REPLAY`, both `FragmentSelectorType` and `TimestampRange` must be set.
   *
   * @public
   */
  DASHFragmentSelector?: DASHFragmentSelector | undefined;

  /**
   * The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).
   *
   * When a session expires, no new calls to `GetDashManifest`, `GetMP4InitFragment`, or `GetMP4MediaFragment` can be made for that session.
   *
   * The default is 300 (5 minutes).
   *
   * @public
   */
  Expires?: number | undefined;

  /**
   * The maximum number of fragments that are returned in the MPEG-DASH manifest.
   *
   * When the `PlaybackMode` is `LIVE`, the most recent fragments are returned up to this value. When the `PlaybackMode` is `ON_DEMAND`, the oldest fragments are returned, up to this maximum number.
   *
   * When there are a higher number of fragments available in a live MPEG-DASH manifest, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live MPEG-DASH manifest have a minimum of 3 fragments and a maximum of 10 fragments.
   *
   * The default is 5 fragments if `PlaybackMode` is `LIVE` or `LIVE_REPLAY`, and 1,000 if `PlaybackMode` is `ON_DEMAND`.
   *
   * The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.
   *
   * @public
   */
  MaxManifestFragmentResults?: number | undefined;
}

/**
 * @public
 */
export interface GetDASHStreamingSessionURLOutput {
  /**
   * The URL (containing the session token) that a media player can use to retrieve the MPEG-DASH manifest.
   *
   * @public
   */
  DASHStreamingSessionURL?: string | undefined;
}

/**
 * The start and end of the timestamp range for the requested media.
 *
 * This value should not be present if `PlaybackType` is `LIVE`.
 *
 * @public
 */
export interface HLSTimestampRange {
  /**
   * The start of the timestamp range for the requested media.
   *
   * If the `HLSTimestampRange` value is specified, the `StartTimestamp` value is required.
   *
   * Only fragments that start exactly at or after `StartTimestamp` are included in the session. Fragments that start before `StartTimestamp` and continue past it aren't included in the session. If `FragmentSelectorType` is `SERVER_TIMESTAMP`, the `StartTimestamp` must be later than the stream head.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The end of the timestamp range for the requested media. This value must be within 24 hours of the specified `StartTimestamp`, and it must be later than the `StartTimestamp` value.
   *
   * If `FragmentSelectorType` for the request is `SERVER_TIMESTAMP`, this value must be in the past.
   *
   * The `EndTimestamp` value is required for `ON_DEMAND` mode, but optional for `LIVE_REPLAY` mode. If the `EndTimestamp` is not set for `LIVE_REPLAY` mode then the session will continue to include newly ingested fragments until the session expires.
   *
   * > **Note:** This value is inclusive. The `EndTimestamp` is compared to the (starting) timestamp of the fragment. Fragments that start before the `EndTimestamp` value and continue past it are included in the session.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;
}

/**
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
 *
 * @public
 */
export interface HLSFragmentSelector {
  /**
   * The source of the timestamps for the requested media.
   *
   * When `FragmentSelectorType` is set to `PRODUCER_TIMESTAMP` and GetHLSStreamingSessionURLInput$PlaybackMode is `ON_DEMAND` or `LIVE_REPLAY`, the first fragment ingested with a producer timestamp within the specified FragmentSelector$TimestampRange is included in the media playlist. In addition, the fragments with producer timestamps within the `TimestampRange` ingested immediately following the first fragment (up to the GetHLSStreamingSessionURLInput$MaxMediaPlaylistFragmentResults value) are included.
   *
   * Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the HLS media playlists will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.
   *
   * When `FragmentSelectorType` is set to `PRODUCER_TIMESTAMP` and GetHLSStreamingSessionURLInput$PlaybackMode is `LIVE`, the producer timestamps are used in the MP4 fragments and for deduplication. But the most recently ingested fragments based on server timestamps are included in the HLS media playlist. This means that even if fragments ingested in the past have producer timestamps with values now, they are not included in the HLS media playlist.
   *
   * The default is `SERVER_TIMESTAMP`.
   *
   * @public
   */
  FragmentSelectorType?: HLSFragmentSelectorType | undefined;

  /**
   * The start and end of the timestamp range for the requested media.
   *
   * This value should not be present if `PlaybackType` is `LIVE`.
   *
   * @public
   */
  TimestampRange?: HLSTimestampRange | undefined;
}

/**
 * @public
 */
export interface GetHLSStreamingSessionURLInput {
  /**
   * The name of the stream for which to retrieve the HLS master playlist URL.
   *
   * You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master playlist URL.
   *
   * You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Whether to retrieve live, live replay, or archived, on-demand data.
   *
   * Features of the three types of sessions include the following:
   *
   * - **`LIVE`** : For sessions of this type, the HLS media playlist is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new playlist on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.
   *
   *   > **Note:** In `LIVE` mode, the newest available fragments are included in an HLS media playlist, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the HLS media playlist if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the playlist, the older fragment is not added, and the gap is not filled.
   * - **`LIVE_REPLAY`** : For sessions of this type, the HLS media playlist is updated similarly to how it is updated for `LIVE` mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the media playlist every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the `ON_DEMAND` mode.
   * - **`ON_DEMAND`** : For sessions of this type, the HLS media playlist contains all the fragments for the session, up to the number that is specified in `MaxMediaPlaylistFragmentResults`. The playlist must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.
   *
   * In all playback modes, if `FragmentSelectorType` is `PRODUCER_TIMESTAMP`, and if there are multiple fragments with the same start timestamp, the fragment that has the largest fragment number (that is, the newest fragment) is included in the HLS media playlist. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the HLS media playlist. This can lead to unexpected behavior in the media player.
   *
   * The default is `LIVE`.
   *
   * @public
   */
  PlaybackMode?: HLSPlaybackMode | undefined;

  /**
   * The time range of the requested fragment and the source of the timestamps.
   *
   * This parameter is required if `PlaybackMode` is `ON_DEMAND` or `LIVE_REPLAY`. This parameter is optional if PlaybackMode is `LIVE`. If `PlaybackMode` is `LIVE`, the `FragmentSelectorType` can be set, but the `TimestampRange` should not be set. If `PlaybackMode` is `ON_DEMAND` or `LIVE_REPLAY`, both `FragmentSelectorType` and `TimestampRange` must be set.
   *
   * @public
   */
  HLSFragmentSelector?: HLSFragmentSelector | undefined;

  /**
   * Specifies which format should be used for packaging the media. Specifying the `FRAGMENTED_MP4` container format packages the media into MP4 fragments (fMP4 or CMAF). This is the recommended packaging because there is minimal packaging overhead. The other container format option is `MPEG_TS`. HLS has supported MPEG TS chunks since it was released and is sometimes the only supported packaging on older HLS players. MPEG TS typically has a 5-25 percent packaging overhead. This means MPEG TS typically requires 5-25 percent more bandwidth and cost than fMP4.
   *
   * The default is `FRAGMENTED_MP4`.
   *
   * @public
   */
  ContainerFormat?: ContainerFormat | undefined;

  /**
   * Specifies when flags marking discontinuities between fragments are added to the media playlists.
   *
   * Media players typically build a timeline of media content to play, based on the timestamps of each fragment. This means that if there is any overlap or gap between fragments (as is typical if HLSFragmentSelector is set to `SERVER_TIMESTAMP`), the media player timeline will also have small gaps between fragments in some places, and will overwrite frames in other places. Gaps in the media player timeline can cause playback to stall and overlaps can cause playback to be jittery. When there are discontinuity flags between fragments, the media player is expected to reset the timeline, resulting in the next fragment being played immediately after the previous fragment.
   *
   * The following modes are supported:
   *
   * - `ALWAYS`: a discontinuity marker is placed between every fragment in the HLS media playlist. It is recommended to use a value of `ALWAYS` if the fragment timestamps are not accurate.
   * - `NEVER`: no discontinuity markers are placed anywhere. It is recommended to use a value of `NEVER` to ensure the media player timeline most accurately maps to the producer timestamps.
   * - `ON_DISCONTINUITY`: a discontinuity marker is placed between fragments that have a gap or overlap of more than 50 milliseconds. For most playback scenarios, it is recommended to use a value of `ON_DISCONTINUITY` so that the media player timeline is only reset when there is a significant issue with the media timeline (e.g. a missing fragment).
   *
   * The default is `ALWAYS` when HLSFragmentSelector is set to `SERVER_TIMESTAMP`, and `NEVER` when it is set to `PRODUCER_TIMESTAMP`.
   *
   * @public
   */
  DiscontinuityMode?: HLSDiscontinuityMode | undefined;

  /**
   * Specifies when the fragment start timestamps should be included in the HLS media playlist. Typically, media players report the playhead position as a time relative to the start of the first fragment in the playback session. However, when the start timestamps are included in the HLS media playlist, some media players might report the current playhead as an absolute time based on the fragment timestamps. This can be useful for creating a playback experience that shows viewers the wall-clock time of the media.
   *
   * The default is `NEVER`. When HLSFragmentSelector is `SERVER_TIMESTAMP`, the timestamps will be the server start timestamps. Similarly, when HLSFragmentSelector is `PRODUCER_TIMESTAMP`, the timestamps will be the producer start timestamps.
   *
   * @public
   */
  DisplayFragmentTimestamp?: HLSDisplayFragmentTimestamp | undefined;

  /**
   * The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).
   *
   * When a session expires, no new calls to `GetHLSMasterPlaylist`, `GetHLSMediaPlaylist`, `GetMP4InitFragment`, `GetMP4MediaFragment`, or `GetTSFragment` can be made for that session.
   *
   * The default is 300 (5 minutes).
   *
   * @public
   */
  Expires?: number | undefined;

  /**
   * The maximum number of fragments that are returned in the HLS media playlists.
   *
   * When the `PlaybackMode` is `LIVE`, the most recent fragments are returned up to this value. When the `PlaybackMode` is `ON_DEMAND`, the oldest fragments are returned, up to this maximum number.
   *
   * When there are a higher number of fragments available in a live HLS media playlist, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live HLS media playlist have a minimum of 3 fragments and a maximum of 10 fragments.
   *
   * The default is 5 fragments if `PlaybackMode` is `LIVE` or `LIVE_REPLAY`, and 1,000 if `PlaybackMode` is `ON_DEMAND`.
   *
   * The maximum value of 5,000 fragments corresponds to more than 80 minutes of video on streams with 1-second fragments, and more than 13 hours of video on streams with 10-second fragments.
   *
   * @public
   */
  MaxMediaPlaylistFragmentResults?: number | undefined;
}

/**
 * @public
 */
export interface GetHLSStreamingSessionURLOutput {
  /**
   * The URL (containing the session token) that a media player can use to retrieve the HLS master playlist.
   *
   * @public
   */
  HLSStreamingSessionURL?: string | undefined;
}

/**
 * @public
 */
export interface GetImagesInput {
  /**
   * The name of the stream from which to retrieve the images. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream from which to retrieve the images. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The origin of the Server or Producer timestamps to use to generate the images.
   *
   * @public
   */
  ImageSelectorType: ImageSelectorType | undefined;

  /**
   * The starting point from which the images should be generated. This `StartTimestamp` must be within an inclusive range of timestamps for an image to be returned.
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * The end timestamp for the range of images to be generated. If the time range between `StartTimestamp` and `EndTimestamp` is more than 300 seconds above `StartTimestamp`, you will receive an `IllegalArgumentException`.
   *
   * @public
   */
  EndTimestamp: Date | undefined;

  /**
   * The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 200 ms (5 images per second). If the timestamp range is less than the sampling interval, the image from the `startTimestamp` will be returned if available.
   *
   * @public
   */
  SamplingInterval?: number | undefined;

  /**
   * The format that will be used to encode the image.
   *
   * @public
   */
  Format: Format | undefined;

  /**
   * The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The `FormatConfig` key is the `JPEGQuality`, which indicates the JPEG quality key to be used to generate the image. The `FormatConfig` value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the `JPEGQuality` key will be set to 80.
   *
   * @public
   */
  FormatConfig?: Partial<Record<FormatConfigKey, string>> | undefined;

  /**
   * The width of the output image that is used in conjunction with the `HeightPixels` parameter. When both `WidthPixels` and `HeightPixels` parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the `WidthPixels` parameter is provided or if only the `HeightPixels` is provided, a `ValidationException` will be thrown. If neither parameter is provided, the original image size from the stream will be returned.
   *
   * @public
   */
  WidthPixels?: number | undefined;

  /**
   * The height of the output image that is used in conjunction with the `WidthPixels` parameter. When both `HeightPixels` and `WidthPixels` parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the `HeightPixels` parameter is provided, its original aspect ratio will be used to calculate the `WidthPixels` ratio. If neither parameter is provided, the original image size will be returned.
   *
   * @public
   */
  HeightPixels?: number | undefined;

  /**
   * The maximum number of images to be returned by the API.
   *
   * > **Note:** The default limit is 25 images per API response. Providing a `MaxResults` greater than this value will result in a page size of 25. Any additional results will be paginated.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that specifies where to start paginating the next set of Images. This is the `GetImages:NextToken` from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that contains the `Timestamp`, `Error`, and `ImageContent`.
 *
 * @public
 */
export interface Image {
  /**
   * An attribute of the `Image` object that is used to extract an image from the video stream. This field is used to manage gaps on images or to better understand the pagination window.
   *
   * @public
   */
  TimeStamp?: Date | undefined;

  /**
   * The error message shown when the image for the provided timestamp was not extracted due to a non-tryable error. An error will be returned if:
   *
   * - There is no media that exists for the specified `Timestamp`.
   *
   * - The media for the specified time does not allow an image to be extracted. In this case the media is audio only, or the incorrect media has been ingested.
   *
   * @public
   */
  Error?: ImageError | undefined;

  /**
   * An attribute of the `Image` object that is Base64 encoded.
   *
   * @public
   */
  ImageContent?: string | undefined;
}

/**
 * @public
 */
export interface GetImagesOutput {
  /**
   * The list of images generated from the video stream. If there is no media available for the given timestamp, the `NO_MEDIA` error will be listed in the output. If an error occurs while the image is being generated, the `MEDIA_ERROR` will be listed in the output as the cause of the missing image.
   *
   * @public
   */
  Images?: Image[] | undefined;

  /**
   * The encrypted token that was used in the request to get more images.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMediaForFragmentListInput {
  /**
   * The name of the stream from which to retrieve fragment media. Specify either this parameter or the `StreamARN` parameter.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream from which to retrieve fragment media. Specify either this parameter or the `StreamName` parameter.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * A list of the numbers of fragments for which to retrieve media. You retrieve these values with ListFragments.
   *
   * @public
   */
  Fragments: string[] | undefined;
}

/**
 * @public
 */
export interface GetMediaForFragmentListOutput {
  /**
   * The content type of the requested media.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The payload that Kinesis Video Streams returns is a sequence of chunks from the specified stream. For information about the chunks, see [PutMedia](http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html). The chunks that Kinesis Video Streams returns in the `GetMediaForFragmentList` call also include the following additional Matroska (MKV) tags:
   *
   * - AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk.
   * - AWS_KINESISVIDEO_SERVER_SIDE_TIMESTAMP - Server-side timestamp of the fragment.
   * - AWS_KINESISVIDEO_PRODUCER_SIDE_TIMESTAMP - Producer-side timestamp of the fragment.
   *
   * The following tags will be included if an exception occurs:
   *
   * - AWS_KINESISVIDEO_FRAGMENT_NUMBER - The number of the fragment that threw the exception
   * - AWS_KINESISVIDEO_EXCEPTION_ERROR_CODE - The integer code of the
   * - AWS_KINESISVIDEO_EXCEPTION_MESSAGE - A text description of the exception
   *
   * @public
   */
  Payload?: StreamingBlobTypes | undefined;
}

/**
 * The range of timestamps for which to return fragments.
 *
 * @public
 */
export interface TimestampRange {
  /**
   * The starting timestamp in the range of timestamps for which to return fragments.
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * The ending timestamp in the range of timestamps for which to return fragments.
   *
   * @public
   */
  EndTimestamp: Date | undefined;
}

/**
 * Describes the timestamp range and timestamp origin of a range of fragments.
 *
 * Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps:
 *
 * - 00:00:00
 * - 00:00:02
 * - 00:00:04
 * - 00:00:06
 *
 * A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04.
 *
 * @public
 */
export interface FragmentSelector {
  /**
   * The origin of the timestamps to use (Server or Producer).
   *
   * @public
   */
  FragmentSelectorType: FragmentSelectorType | undefined;

  /**
   * The range of timestamps to return.
   *
   * @public
   */
  TimestampRange: TimestampRange | undefined;
}

/**
 * @public
 */
export interface ListFragmentsInput {
  /**
   * The name of the stream from which to retrieve a fragment list. Specify either this parameter or the `StreamARN` parameter.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream from which to retrieve a fragment list. Specify either this parameter or the `StreamName` parameter.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The total number of fragments to return. If the total number of fragments available is more than the value specified in `max-results`, then a ListFragmentsOutput$NextToken is provided in the output that you can use to resume pagination.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. This is the ListFragmentsOutput$NextToken from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Describes the timestamp range and timestamp origin for the range of fragments to return.
   *
   * > **Note:** This is only required when the `NextToken` isn't passed in the API.
   *
   * @public
   */
  FragmentSelector?: FragmentSelector | undefined;
}

/**
 * Represents a segment of video or other time-delimited data.
 *
 * @public
 */
export interface Fragment {
  /**
   * The unique identifier of the fragment. This value monotonically increases based on the ingestion order.
   *
   * @public
   */
  FragmentNumber?: string | undefined;

  /**
   * The total fragment size, including information about the fragment and contained media data.
   *
   * @public
   */
  FragmentSizeInBytes?: number | undefined;

  /**
   * The timestamp from the producer corresponding to the fragment.
   *
   * @public
   */
  ProducerTimestamp?: Date | undefined;

  /**
   * The timestamp from the Amazon Web Services server corresponding to the fragment.
   *
   * @public
   */
  ServerTimestamp?: Date | undefined;

  /**
   * The playback duration or other time value associated with the fragment.
   *
   * @public
   */
  FragmentLengthInMilliseconds?: number | undefined;
}

/**
 * @public
 */
export interface ListFragmentsOutput {
  /**
   * A list of archived Fragment objects from the stream that meet the selector criteria. Results are in no specific order, even across pages.
   *
   * @public
   */
  Fragments?: Fragment[] | undefined;

  /**
   * If the returned list is truncated, the operation returns this token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}
