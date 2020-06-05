import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 */
export interface ClientLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ClientLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ClientLimitExceededException {
  export const filterSensitiveLog = (
    obj: ClientLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientLimitExceededException =>
    __isa(o, "ClientLimitExceededException");
}

export enum ContainerFormat {
  FRAGMENTED_MP4 = "FRAGMENTED_MP4",
  MPEG_TS = "MPEG_TS"
}

export enum DASHDisplayFragmentNumber {
  ALWAYS = "ALWAYS",
  NEVER = "NEVER"
}

export enum DASHDisplayFragmentTimestamp {
  ALWAYS = "ALWAYS",
  NEVER = "NEVER"
}

/**
 * <p>Contains the range of timestamps for the requested media, and the source of the
 *             timestamps. </p>
 */
export interface DASHFragmentSelector {
  __type?: "DASHFragmentSelector";
  /**
   * <p>The source of the timestamps for the requested media.</p>
   *         <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and
   *                 <a>GetDASHStreamingSessionURLInput$PlaybackMode</a> is
   *                 <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>, the first fragment ingested with
   *             a producer timestamp within the specified <a>FragmentSelector$TimestampRange</a> is included in the media playlist. In
   *             addition, the fragments with producer timestamps within the <code>TimestampRange</code>
   *             ingested immediately following the first fragment (up to the <a>GetDASHStreamingSessionURLInput$MaxManifestFragmentResults</a> value) are
   *             included. </p>
   *         <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if
   *             producers are producing a stream of fragments with producer timestamps that are
   *             approximately equal to the true clock time, the MPEG-DASH manifest will contain all of
   *             the fragments within the requested timestamp range. If some fragments are ingested
   *             within the same time range and very different points in time, only the oldest ingested
   *             collection of fragments are returned.</p>
   *         <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and
   *                 <a>GetDASHStreamingSessionURLInput$PlaybackMode</a> is <code>LIVE</code>,
   *             the producer timestamps are used in the MP4 fragments and for deduplication. But the
   *             most recently ingested fragments based on server timestamps are included in the
   *             MPEG-DASH manifest. This means that even if fragments ingested in the past have producer
   *             timestamps with values now, they are not included in the HLS media playlist.</p>
   *         <p>The default is <code>SERVER_TIMESTAMP</code>.</p>
   */
  FragmentSelectorType?: DASHFragmentSelectorType | string;

  /**
   * <p>The start and end of the timestamp range for the requested media.</p>
   *         <p>This value should not be present if <code>PlaybackType</code> is
   *             <code>LIVE</code>.</p>
   */
  TimestampRange?: DASHTimestampRange;
}

export namespace DASHFragmentSelector {
  export const filterSensitiveLog = (obj: DASHFragmentSelector): any => ({
    ...obj
  });
  export const isa = (o: any): o is DASHFragmentSelector =>
    __isa(o, "DASHFragmentSelector");
}

export enum DASHFragmentSelectorType {
  PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP = "SERVER_TIMESTAMP"
}

export enum DASHPlaybackMode {
  LIVE = "LIVE",
  LIVE_REPLAY = "LIVE_REPLAY",
  ON_DEMAND = "ON_DEMAND"
}

/**
 * <p>The start and end of the timestamp range for the requested media.</p>
 *         <p>This value should not be present if <code>PlaybackType</code> is
 *             <code>LIVE</code>.</p>
 *         <note>
 *             <p>The values in the <code>DASHimestampRange</code> are inclusive. Fragments that
 *                 begin before the start time but continue past it, or fragments that begin before the
 *                 end time but continue past it, are included in the session.</p>
 *         </note>
 */
export interface DASHTimestampRange {
  __type?: "DASHTimestampRange";
  /**
   * <p>The end of the timestamp range for the requested media. This value must be within 3
   *             hours of the specified <code>StartTimestamp</code>, and it must be later than the
   *                 <code>StartTimestamp</code> value.</p>
   *         <p>If <code>FragmentSelectorType</code> for the request is <code>SERVER_TIMESTAMP</code>,
   *             this value must be in the past.</p>
   *
   *         <p>The <code>EndTimestamp</code> value is required for <code>ON_DEMAND</code> mode, but
   *             optional for <code>LIVE_REPLAY</code> mode. If the <code>EndTimestamp</code> is not set
   *             for <code>LIVE_REPLAY</code> mode then the session will continue to include newly
   *             ingested fragments until the session expires.</p>
   *         <note>
   *             <p>This value is inclusive. The <code>EndTimestamp</code> is compared to the
   *                 (starting) timestamp of the fragment. Fragments that start before the
   *                     <code>EndTimestamp</code> value and continue past it are included in the
   *                 session.</p>
   *         </note>
   */
  EndTimestamp?: Date;

  /**
   * <p>The start of the timestamp range for the requested media.</p>
   *         <p>If the <code>DASHTimestampRange</code> value is specified, the
   *                 <code>StartTimestamp</code> value is required.</p>
   *         <note>
   *             <p>This value is inclusive. Fragments that start before the
   *                     <code>StartTimestamp</code> and continue past it are included in the session. If
   *                     <code>FragmentSelectorType</code> is <code>SERVER_TIMESTAMP</code>, the
   *                     <code>StartTimestamp</code> must be later than the stream head.</p>
   *         </note>
   */
  StartTimestamp?: Date;
}

export namespace DASHTimestampRange {
  export const filterSensitiveLog = (obj: DASHTimestampRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is DASHTimestampRange =>
    __isa(o, "DASHTimestampRange");
}

/**
 * <p>Represents a segment of video or other time-delimited data.</p>
 */
export interface Fragment {
  __type?: "Fragment";
  /**
   * <p>The playback duration or other time value associated with the fragment.</p>
   */
  FragmentLengthInMilliseconds?: number;

  /**
   * <p>The unique identifier of the fragment. This value monotonically increases based on the
   *             ingestion order.</p>
   */
  FragmentNumber?: string;

  /**
   * <p>The total fragment size, including information about the fragment and contained media
   *             data.</p>
   */
  FragmentSizeInBytes?: number;

  /**
   * <p>The timestamp from the producer corresponding to the fragment.</p>
   */
  ProducerTimestamp?: Date;

  /**
   * <p>The timestamp from the AWS server corresponding to the fragment.</p>
   */
  ServerTimestamp?: Date;
}

export namespace Fragment {
  export const filterSensitiveLog = (obj: Fragment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Fragment => __isa(o, "Fragment");
}

/**
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p>
 *         <p>Only fragments with a start timestamp greater than or equal to the given start time
 *             and less than or equal to the end time are returned. For example, if a stream contains
 *             fragments with the following start timestamps: </p>
 *         <ul>
 *             <li>
 *                 <p>00:00:00</p>
 *             </li>
 *             <li>
 *                 <p>00:00:02</p>
 *             </li>
 *             <li>
 *                 <p>00:00:04</p>
 *             </li>
 *             <li>
 *                 <p>00:00:06</p>
 *             </li>
 *          </ul>
 *         <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04
 *             would return the fragments with start times of 00:00:02 and 00:00:04. </p>
 */
export interface FragmentSelector {
  __type?: "FragmentSelector";
  /**
   * <p>The origin of the timestamps to use (Server or Producer).</p>
   */
  FragmentSelectorType: FragmentSelectorType | string | undefined;

  /**
   * <p>The range of timestamps to return.</p>
   */
  TimestampRange: TimestampRange | undefined;
}

export namespace FragmentSelector {
  export const filterSensitiveLog = (obj: FragmentSelector): any => ({
    ...obj
  });
  export const isa = (o: any): o is FragmentSelector =>
    __isa(o, "FragmentSelector");
}

export enum FragmentSelectorType {
  PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP = "SERVER_TIMESTAMP"
}

export interface GetDASHStreamingSessionURLInput {
  __type?: "GetDASHStreamingSessionURLInput";
  /**
   * <p>The time range of the requested fragment and the source of the timestamps.</p>
   *         <p>This parameter is required if <code>PlaybackMode</code> is <code>ON_DEMAND</code> or
   *                 <code>LIVE_REPLAY</code>. This parameter is optional if PlaybackMode is<code></code>
   *             <code>LIVE</code>. If <code>PlaybackMode</code> is <code>LIVE</code>, the
   *                 <code>FragmentSelectorType</code> can be set, but the <code>TimestampRange</code>
   *             should not be set. If <code>PlaybackMode</code> is <code>ON_DEMAND</code> or
   *                 <code>LIVE_REPLAY</code>, both <code>FragmentSelectorType</code> and
   *                 <code>TimestampRange</code> must be set.</p>
   */
  DASHFragmentSelector?: DASHFragmentSelector;

  /**
   * <p>Fragments are identified in the manifest file based on their sequence number in the
   *             session. If DisplayFragmentNumber is set to <code>ALWAYS</code>, the Kinesis Video
   *             Streams fragment number is added to each S element in the manifest file with the
   *             attribute name “kvs:fn”. These fragment numbers can be used for logging or for use with
   *             other APIs (e.g. <code>GetMedia</code> and <code>GetMediaForFragmentList</code>). A
   *             custom MPEG-DASH media player is necessary to leverage these this custom
   *             attribute.</p>
   *         <p>The default value is <code>NEVER</code>.</p>
   */
  DisplayFragmentNumber?: DASHDisplayFragmentNumber | string;

  /**
   * <p>Per the MPEG-DASH specification, the wall-clock time of fragments in the manifest file
   *             can be derived using attributes in the manifest itself. However, typically, MPEG-DASH
   *             compatible media players do not properly handle gaps in the media timeline. Kinesis
   *             Video Streams adjusts the media timeline in the manifest file to enable playback of
   *             media with discontinuities. Therefore, the wall-clock time derived from the manifest
   *             file may be inaccurate. If DisplayFragmentTimestamp is set to <code>ALWAYS</code>, the
   *             accurate fragment timestamp is added to each S element in the manifest file with the
   *             attribute name “kvs:ts”. A custom MPEG-DASH media player is necessary to leverage this
   *             custom attribute.</p>
   *         <p>The default value is <code>NEVER</code>. When <a>DASHFragmentSelector</a>
   *             is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps.
   *             Similarly, when <a>DASHFragmentSelector</a> is
   *                 <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start
   *             timestamps. </p>
   */
  DisplayFragmentTimestamp?: DASHDisplayFragmentTimestamp | string;

  /**
   * <p>The time in seconds until the requested session expires. This value can be between 300
   *             (5 minutes) and 43200 (12 hours).</p>
   *         <p>When a session expires, no new calls to <code>GetDashManifest</code>,
   *                 <code>GetMP4InitFragment</code>, or <code>GetMP4MediaFragment</code> can be made for
   *             that session.</p>
   *         <p>The default is 300 (5 minutes).</p>
   */
  Expires?: number;

  /**
   * <p>The maximum number of fragments that are returned in the MPEG-DASH manifest.</p>
   *         <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are
   *             returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>,
   *             the oldest fragments are returned, up to this maximum number.</p>
   *         <p>When there are a higher number of fragments available in a live MPEG-DASH manifest,
   *             video players often buffer content before starting playback. Increasing the buffer size
   *             increases the playback latency, but it decreases the likelihood that rebuffering will
   *             occur during playback. We recommend that a live MPEG-DASH manifest have a minimum of 3
   *             fragments and a maximum of 10 fragments.</p>
   *         <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or
   *                 <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is
   *                 <code>ON_DEMAND</code>. </p>
   *         <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on
   *             streams with 1-second fragments, and more than 2 1/2 hours of video on streams with
   *             10-second fragments.</p>
   */
  MaxManifestFragmentResults?: number;

  /**
   * <p>Whether to retrieve live, live replay, or archived, on-demand data.</p>
   *         <p>Features of the three types of sessions include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>LIVE</code>
   *                   </b>: For sessions of this type,
   *                     the MPEG-DASH manifest is continually updated with the latest fragments as they
   *                     become available. We recommend that the media player retrieve a new manifest on
   *                     a one-second interval. When this type of session is played in a media player,
   *                     the user interface typically displays a "live" notification, with no scrubber
   *                     control for choosing the position in the playback window to display.</p>
   *                 <note>
   *                     <p>In <code>LIVE</code> mode, the newest available fragments are included in
   *                         an MPEG-DASH manifest, even if there is a gap between fragments (that is, if
   *                         a fragment is missing). A gap like this might cause a media player to halt
   *                         or cause a jump in playback. In this mode, fragments are not added to the
   *                         MPEG-DASH manifest if they are older than the newest fragment in the
   *                         playlist. If the missing fragment becomes available after a subsequent
   *                         fragment is added to the manifest, the older fragment is not added, and the
   *                         gap is not filled.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>LIVE_REPLAY</code>
   *                   </b>: For sessions of
   *                     this type, the MPEG-DASH manifest is updated similarly to how it is updated for
   *                         <code>LIVE</code> mode except that it starts by including fragments from a
   *                     given start time. Instead of fragments being added as they are ingested,
   *                     fragments are added as the duration of the next fragment elapses. For example,
   *                     if the fragments in the session are two seconds long, then a new fragment is
   *                     added to the manifest every two seconds. This mode is useful to be able to start
   *                     playback from when an event is detected and continue live streaming media that
   *                     has not yet been ingested as of the time of the session creation. This mode is
   *                     also useful to stream previously archived media without being limited by the
   *                     1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>ON_DEMAND</code>
   *                   </b>: For sessions of this
   *                     type, the MPEG-DASH manifest contains all the fragments for the session, up to
   *                     the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>.
   *                     The manifest must be retrieved only once for each session. When this type of
   *                     session is played in a media player, the user interface typically displays a
   *                     scrubber control for choosing the position in the playback window to
   *                     display.</p>
   *             </li>
   *          </ul>
   *         <p>In all playback modes, if <code>FragmentSelectorType</code> is
   *                 <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same
   *             start timestamp, the fragment that has the larger fragment number (that is, the newer
   *             fragment) is included in the MPEG-DASH manifest. The other fragments are not included.
   *             Fragments that have different timestamps but have overlapping durations are still
   *             included in the MPEG-DASH manifest. This can lead to unexpected behavior in the media
   *             player.</p>
   *         <p>The default is <code>LIVE</code>.</p>
   */
  PlaybackMode?: DASHPlaybackMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the MPEG-DASH
   *             manifest URL.</p>
   *         <p>You must specify either the <code>StreamName</code> or the
   *             <code>StreamARN</code>.</p>
   */
  StreamARN?: string;

  /**
   * <p>The name of the stream for which to retrieve the MPEG-DASH manifest URL.</p>
   *         <p>You must specify either the <code>StreamName</code> or the
   *             <code>StreamARN</code>.</p>
   */
  StreamName?: string;
}

export namespace GetDASHStreamingSessionURLInput {
  export const filterSensitiveLog = (
    obj: GetDASHStreamingSessionURLInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDASHStreamingSessionURLInput =>
    __isa(o, "GetDASHStreamingSessionURLInput");
}

export interface GetDASHStreamingSessionURLOutput {
  __type?: "GetDASHStreamingSessionURLOutput";
  /**
   * <p>The URL (containing the session token) that a media player can use to retrieve the
   *             MPEG-DASH manifest.</p>
   */
  DASHStreamingSessionURL?: string;
}

export namespace GetDASHStreamingSessionURLOutput {
  export const filterSensitiveLog = (
    obj: GetDASHStreamingSessionURLOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDASHStreamingSessionURLOutput =>
    __isa(o, "GetDASHStreamingSessionURLOutput");
}

export interface GetHLSStreamingSessionURLInput {
  __type?: "GetHLSStreamingSessionURLInput";
  /**
   * <p>Specifies which format should be used for packaging the media. Specifying the
   *                 <code>FRAGMENTED_MP4</code> container format packages the media into MP4 fragments
   *             (fMP4 or CMAF). This is the recommended packaging because there is minimal packaging
   *             overhead. The other container format option is <code>MPEG_TS</code>. HLS has supported
   *             MPEG TS chunks since it was released and is sometimes the only supported packaging on
   *             older HLS players. MPEG TS typically has a 5-25 percent packaging overhead. This means
   *             MPEG TS typically requires 5-25 percent more bandwidth and cost than fMP4.</p>
   *         <p>The default is <code>FRAGMENTED_MP4</code>.</p>
   */
  ContainerFormat?: ContainerFormat | string;

  /**
   * <p>Specifies when flags marking discontinuities between fragments are added to the media
   *             playlists.</p>
   *         <p>Media players typically build a timeline of media content to play, based on the
   *             timestamps of each fragment. This means that if there is any overlap or gap between
   *             fragments (as is typical if <a>HLSFragmentSelector</a> is set to
   *                 <code>SERVER_TIMESTAMP</code>), the media player timeline will also have small gaps
   *             between fragments in some places, and will overwrite frames in other places. Gaps in the
   *             media player timeline can cause playback to stall and overlaps can cause playback to be
   *             jittery. When there are discontinuity flags between fragments, the media player is
   *             expected to reset the timeline, resulting in the next fragment being played immediately
   *             after the previous fragment. </p>
   *         <p>The following modes are supported:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ALWAYS</code>: a discontinuity marker is placed between every fragment
   *                     in the HLS media playlist. It is recommended to use a value of
   *                         <code>ALWAYS</code> if the fragment timestamps are not accurate.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NEVER</code>: no discontinuity markers are placed anywhere. It is
   *                     recommended to use a value of <code>NEVER</code> to ensure the media player
   *                     timeline most accurately maps to the producer timestamps. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ON_DISCONTIUNITY</code>: a discontinuity marker is placed between
   *                     fragments that have a gap or overlap of more than 50 milliseconds. For most
   *                     playback scenarios, it is recommended to use a value of
   *                         <code>ON_DISCONTINUITY</code> so that the media player timeline is only
   *                     reset when there is a significant issue with the media timeline (e.g. a missing
   *                     fragment).</p>
   *             </li>
   *          </ul>
   *         <p>The default is <code>ALWAYS</code> when <a>HLSFragmentSelector</a> is set
   *             to <code>SERVER_TIMESTAMP</code>, and <code>NEVER</code> when it is set to
   *                 <code>PRODUCER_TIMESTAMP</code>.</p>
   */
  DiscontinuityMode?: HLSDiscontinuityMode | string;

  /**
   * <p>Specifies when the fragment start timestamps should be included in the HLS media
   *             playlist. Typically, media players report the playhead position as a time relative to
   *             the start of the first fragment in the playback session. However, when the start
   *             timestamps are included in the HLS media playlist, some media players might report the
   *             current playhead as an absolute time based on the fragment timestamps. This can be
   *             useful for creating a playback experience that shows viewers the wall-clock time of the
   *             media.</p>
   *         <p>The default is <code>NEVER</code>. When <a>HLSFragmentSelector</a> is
   *                 <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps.
   *             Similarly, when <a>HLSFragmentSelector</a> is
   *             <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps.
   *         </p>
   */
  DisplayFragmentTimestamp?: HLSDisplayFragmentTimestamp | string;

  /**
   * <p>The time in seconds until the requested session expires. This value can be between 300
   *             (5 minutes) and 43200 (12 hours).</p>
   *         <p>When a session expires, no new calls to <code>GetHLSMasterPlaylist</code>,
   *                 <code>GetHLSMediaPlaylist</code>, <code>GetMP4InitFragment</code>,
   *                 <code>GetMP4MediaFragment</code>, or <code>GetTSFragment</code> can be made for that
   *             session.</p>
   *         <p>The default is 300 (5 minutes).</p>
   */
  Expires?: number;

  /**
   * <p>The time range of the requested fragment and the source of the timestamps.</p>
   *         <p>This parameter is required if <code>PlaybackMode</code> is <code>ON_DEMAND</code> or
   *                 <code>LIVE_REPLAY</code>. This parameter is optional if PlaybackMode is<code></code>
   *             <code>LIVE</code>. If <code>PlaybackMode</code> is <code>LIVE</code>, the
   *                 <code>FragmentSelectorType</code> can be set, but the <code>TimestampRange</code>
   *             should not be set. If <code>PlaybackMode</code> is <code>ON_DEMAND</code> or
   *                 <code>LIVE_REPLAY</code>, both <code>FragmentSelectorType</code> and
   *                 <code>TimestampRange</code> must be set.</p>
   */
  HLSFragmentSelector?: HLSFragmentSelector;

  /**
   * <p>The maximum number of fragments that are returned in the HLS media playlists.</p>
   *         <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are
   *             returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>,
   *             the oldest fragments are returned, up to this maximum number.</p>
   *         <p>When there are a higher number of fragments available in a live HLS media playlist,
   *             video players often buffer content before starting playback. Increasing the buffer size
   *             increases the playback latency, but it decreases the likelihood that rebuffering will
   *             occur during playback. We recommend that a live HLS media playlist have a minimum of 3
   *             fragments and a maximum of 10 fragments.</p>
   *         <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or
   *                 <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is
   *                 <code>ON_DEMAND</code>. </p>
   *         <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on
   *             streams with 1-second fragments, and more than 2 1/2 hours of video on streams with
   *             10-second fragments.</p>
   */
  MaxMediaPlaylistFragmentResults?: number;

  /**
   * <p>Whether to retrieve live, live replay, or archived, on-demand data.</p>
   *         <p>Features of the three types of sessions include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>LIVE</code>
   *                   </b>: For sessions of this type,
   *                     the HLS media playlist is continually updated with the latest fragments as they
   *                     become available. We recommend that the media player retrieve a new playlist on
   *                     a one-second interval. When this type of session is played in a media player,
   *                     the user interface typically displays a "live" notification, with no scrubber
   *                     control for choosing the position in the playback window to display.</p>
   *                 <note>
   *                     <p>In <code>LIVE</code> mode, the newest available fragments are included in
   *                         an HLS media playlist, even if there is a gap between fragments (that is, if
   *                         a fragment is missing). A gap like this might cause a media player to halt
   *                         or cause a jump in playback. In this mode, fragments are not added to the
   *                         HLS media playlist if they are older than the newest fragment in the
   *                         playlist. If the missing fragment becomes available after a subsequent
   *                         fragment is added to the playlist, the older fragment is not added, and the
   *                         gap is not filled.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>LIVE_REPLAY</code>
   *                   </b>: For sessions of
   *                     this type, the HLS media playlist is updated similarly to how it is updated for
   *                         <code>LIVE</code> mode except that it starts by including fragments from a
   *                     given start time. Instead of fragments being added as they are ingested,
   *                     fragments are added as the duration of the next fragment elapses. For example,
   *                     if the fragments in the session are two seconds long, then a new fragment is
   *                     added to the media playlist every two seconds. This mode is useful to be able to
   *                     start playback from when an event is detected and continue live streaming media
   *                     that has not yet been ingested as of the time of the session creation. This mode
   *                     is also useful to stream previously archived media without being limited by the
   *                     1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>ON_DEMAND</code>
   *                   </b>: For sessions of this
   *                     type, the HLS media playlist contains all the fragments for the session, up to
   *                     the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>.
   *                     The playlist must be retrieved only once for each session. When this type of
   *                     session is played in a media player, the user interface typically displays a
   *                     scrubber control for choosing the position in the playback window to
   *                     display.</p>
   *             </li>
   *          </ul>
   *         <p>In all playback modes, if <code>FragmentSelectorType</code> is
   *                 <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same
   *             start timestamp, the fragment that has the larger fragment number (that is, the newer
   *             fragment) is included in the HLS media playlist. The other fragments are not included.
   *             Fragments that have different timestamps but have overlapping durations are still
   *             included in the HLS media playlist. This can lead to unexpected behavior in the media
   *             player.</p>
   *         <p>The default is <code>LIVE</code>.</p>
   */
  PlaybackMode?: HLSPlaybackMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master
   *             playlist URL.</p>
   *         <p>You must specify either the <code>StreamName</code> or the
   *             <code>StreamARN</code>.</p>
   */
  StreamARN?: string;

  /**
   * <p>The name of the stream for which to retrieve the HLS master playlist URL.</p>
   *         <p>You must specify either the <code>StreamName</code> or the
   *             <code>StreamARN</code>.</p>
   */
  StreamName?: string;
}

export namespace GetHLSStreamingSessionURLInput {
  export const filterSensitiveLog = (
    obj: GetHLSStreamingSessionURLInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHLSStreamingSessionURLInput =>
    __isa(o, "GetHLSStreamingSessionURLInput");
}

export interface GetHLSStreamingSessionURLOutput {
  __type?: "GetHLSStreamingSessionURLOutput";
  /**
   * <p>The URL (containing the session token) that a media player can use to retrieve the HLS
   *             master playlist.</p>
   */
  HLSStreamingSessionURL?: string;
}

export namespace GetHLSStreamingSessionURLOutput {
  export const filterSensitiveLog = (
    obj: GetHLSStreamingSessionURLOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHLSStreamingSessionURLOutput =>
    __isa(o, "GetHLSStreamingSessionURLOutput");
}

export interface GetMediaForFragmentListInput {
  __type?: "GetMediaForFragmentListInput";
  /**
   * <p>A list of the numbers of fragments for which to retrieve media. You retrieve these
   *             values with <a>ListFragments</a>.</p>
   */
  Fragments: string[] | undefined;

  /**
   * <p>The name of the stream from which to retrieve fragment media.</p>
   */
  StreamName: string | undefined;
}

export namespace GetMediaForFragmentListInput {
  export const filterSensitiveLog = (
    obj: GetMediaForFragmentListInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMediaForFragmentListInput =>
    __isa(o, "GetMediaForFragmentListInput");
}

export interface GetMediaForFragmentListOutput {
  __type?: "GetMediaForFragmentListOutput";
  /**
   * <p>The content type of the requested media.</p>
   */
  ContentType?: string;

  /**
   * <p>The payload that Kinesis Video Streams returns is a sequence of chunks from the
   *             specified stream. For information about the chunks, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html">PutMedia</a>. The chunks that
   *             Kinesis Video Streams returns in the <code>GetMediaForFragmentList</code> call also
   *             include the following additional Matroska (MKV) tags: </p>
   *         <ul>
   *             <li>
   *                 <p>AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the
   *                     chunk.</p>
   *             </li>
   *             <li>
   *                 <p>AWS_KINESISVIDEO_SERVER_SIDE_TIMESTAMP - Server-side timestamp of the
   *                     fragment.</p>
   *             </li>
   *             <li>
   *                 <p>AWS_KINESISVIDEO_PRODUCER_SIDE_TIMESTAMP - Producer-side timestamp of the
   *                     fragment.</p>
   *             </li>
   *          </ul>
   *         <p>The following tags will be included if an exception occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>AWS_KINESISVIDEO_FRAGMENT_NUMBER - The number of the fragment that threw the
   *                     exception</p>
   *             </li>
   *             <li>
   *                 <p>AWS_KINESISVIDEO_EXCEPTION_ERROR_CODE - The integer code of the
   *                     exception</p>
   *             </li>
   *             <li>
   *                 <p>AWS_KINESISVIDEO_EXCEPTION_MESSAGE - A text description of the
   *                     exception</p>
   *             </li>
   *          </ul>
   */
  Payload?: Readable | ReadableStream | Blob;
}

export namespace GetMediaForFragmentListOutput {
  export const filterSensitiveLog = (
    obj: GetMediaForFragmentListOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMediaForFragmentListOutput =>
    __isa(o, "GetMediaForFragmentListOutput");
}

export enum HLSDiscontinuityMode {
  ALWAYS = "ALWAYS",
  NEVER = "NEVER",
  ON_DISCONTINUITY = "ON_DISCONTINUITY"
}

export enum HLSDisplayFragmentTimestamp {
  ALWAYS = "ALWAYS",
  NEVER = "NEVER"
}

/**
 * <p>Contains the range of timestamps for the requested media, and the source of the
 *             timestamps.</p>
 */
export interface HLSFragmentSelector {
  __type?: "HLSFragmentSelector";
  /**
   * <p>The source of the timestamps for the requested media.</p>
   *         <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and
   *                 <a>GetHLSStreamingSessionURLInput$PlaybackMode</a> is
   *                 <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>, the first fragment ingested with
   *             a producer timestamp within the specified <a>FragmentSelector$TimestampRange</a> is included in the media playlist. In
   *             addition, the fragments with producer timestamps within the <code>TimestampRange</code>
   *             ingested immediately following the first fragment (up to the <a>GetHLSStreamingSessionURLInput$MaxMediaPlaylistFragmentResults</a> value)
   *             are included. </p>
   *         <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if
   *             producers are producing a stream of fragments with producer timestamps that are
   *             approximately equal to the true clock time, the HLS media playlists will contain all of
   *             the fragments within the requested timestamp range. If some fragments are ingested
   *             within the same time range and very different points in time, only the oldest ingested
   *             collection of fragments are returned.</p>
   *         <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and
   *                 <a>GetHLSStreamingSessionURLInput$PlaybackMode</a> is <code>LIVE</code>,
   *             the producer timestamps are used in the MP4 fragments and for deduplication. But the
   *             most recently ingested fragments based on server timestamps are included in the HLS
   *             media playlist. This means that even if fragments ingested in the past have producer
   *             timestamps with values now, they are not included in the HLS media playlist.</p>
   *         <p>The default is <code>SERVER_TIMESTAMP</code>.</p>
   */
  FragmentSelectorType?: HLSFragmentSelectorType | string;

  /**
   * <p>The start and end of the timestamp range for the requested media.</p>
   *         <p>This value should not be present if <code>PlaybackType</code> is
   *             <code>LIVE</code>.</p>
   */
  TimestampRange?: HLSTimestampRange;
}

export namespace HLSFragmentSelector {
  export const filterSensitiveLog = (obj: HLSFragmentSelector): any => ({
    ...obj
  });
  export const isa = (o: any): o is HLSFragmentSelector =>
    __isa(o, "HLSFragmentSelector");
}

export enum HLSFragmentSelectorType {
  PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP = "SERVER_TIMESTAMP"
}

export enum HLSPlaybackMode {
  LIVE = "LIVE",
  LIVE_REPLAY = "LIVE_REPLAY",
  ON_DEMAND = "ON_DEMAND"
}

/**
 * <p>The start and end of the timestamp range for the requested media.</p>
 *         <p>This value should not be present if <code>PlaybackType</code> is
 *             <code>LIVE</code>.</p>
 *         <note>
 *             <p>The values in the <code>HLSTimestampRange</code> are inclusive. Fragments that
 *                 begin before the start time but continue past it, or fragments that begin before the
 *                 end time but continue past it, are included in the session.</p>
 *         </note>
 */
export interface HLSTimestampRange {
  __type?: "HLSTimestampRange";
  /**
   * <p>The end of the timestamp range for the requested media. This value must be within 3
   *             hours of the specified <code>StartTimestamp</code>, and it must be later than the
   *                 <code>StartTimestamp</code> value.</p>
   *         <p>If <code>FragmentSelectorType</code> for the request is <code>SERVER_TIMESTAMP</code>,
   *             this value must be in the past.</p>
   *         <p>The <code>EndTimestamp</code> value is required for <code>ON_DEMAND</code> mode, but
   *             optional for <code>LIVE_REPLAY</code> mode. If the <code>EndTimestamp</code> is not set
   *             for <code>LIVE_REPLAY</code> mode then the session will continue to include newly
   *             ingested fragments until the session expires.</p>
   *         <note>
   *             <p>This value is inclusive. The <code>EndTimestamp</code> is compared to the
   *                 (starting) timestamp of the fragment. Fragments that start before the
   *                     <code>EndTimestamp</code> value and continue past it are included in the
   *                 session.</p>
   *         </note>
   */
  EndTimestamp?: Date;

  /**
   * <p>The start of the timestamp range for the requested media.</p>
   *         <p>If the <code>HLSTimestampRange</code> value is specified, the
   *                 <code>StartTimestamp</code> value is required.</p>
   *         <note>
   *             <p>This value is inclusive. Fragments that start before the
   *                     <code>StartTimestamp</code> and continue past it are included in the session. If
   *                     <code>FragmentSelectorType</code> is <code>SERVER_TIMESTAMP</code>, the
   *                     <code>StartTimestamp</code> must be later than the stream head.</p>
   *         </note>
   */
  StartTimestamp?: Date;
}

export namespace HLSTimestampRange {
  export const filterSensitiveLog = (obj: HLSTimestampRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is HLSTimestampRange =>
    __isa(o, "HLSTimestampRange");
}

/**
 * <p>A specified parameter exceeds its restrictions, is not supported, or can't be
 *             used.</p>
 */
export interface InvalidArgumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidArgumentException =>
    __isa(o, "InvalidArgumentException");
}

/**
 * <p>The codec private data in at least one of the tracks of the video stream is not valid
 *             for this operation.</p>
 */
export interface InvalidCodecPrivateDataException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCodecPrivateDataException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidCodecPrivateDataException {
  export const filterSensitiveLog = (
    obj: InvalidCodecPrivateDataException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCodecPrivateDataException =>
    __isa(o, "InvalidCodecPrivateDataException");
}

export interface ListFragmentsInput {
  __type?: "ListFragmentsInput";
  /**
   * <p>Describes the timestamp range and timestamp origin for the range of fragments to
   *             return.</p>
   */
  FragmentSelector?: FragmentSelector;

  /**
   * <p>The total number of fragments to return. If the total number of fragments available is
   *             more than the value specified in <code>max-results</code>, then a <a>ListFragmentsOutput$NextToken</a> is provided in the output that you can use
   *             to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the <a>ListFragmentsOutput$NextToken</a> from a previously truncated
   *             response.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the stream from which to retrieve a fragment list.</p>
   */
  StreamName: string | undefined;
}

export namespace ListFragmentsInput {
  export const filterSensitiveLog = (obj: ListFragmentsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListFragmentsInput =>
    __isa(o, "ListFragmentsInput");
}

export interface ListFragmentsOutput {
  __type?: "ListFragmentsOutput";
  /**
   * <p>A list of archived <a>Fragment</a> objects from the stream that meet the
   *             selector criteria. Results are in no specific order, even across pages.</p>
   */
  Fragments?: Fragment[];

  /**
   * <p>If the returned list is truncated, the operation returns this token to use to retrieve
   *             the next page of results. This value is <code>null</code> when there are no more results
   *             to return.</p>
   */
  NextToken?: string;
}

export namespace ListFragmentsOutput {
  export const filterSensitiveLog = (obj: ListFragmentsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListFragmentsOutput =>
    __isa(o, "ListFragmentsOutput");
}

/**
 * <p>No codec private data was found in at least one of tracks of the video stream.</p>
 */
export interface MissingCodecPrivateDataException
  extends __SmithyException,
    $MetadataBearer {
  name: "MissingCodecPrivateDataException";
  $fault: "client";
  Message?: string;
}

export namespace MissingCodecPrivateDataException {
  export const filterSensitiveLog = (
    obj: MissingCodecPrivateDataException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MissingCodecPrivateDataException =>
    __isa(o, "MissingCodecPrivateDataException");
}

/**
 * <p>A streaming session was requested for a stream that does not retain data (that is, has
 *             a <code>DataRetentionInHours</code> of 0). </p>
 */
export interface NoDataRetentionException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoDataRetentionException";
  $fault: "client";
  Message?: string;
}

export namespace NoDataRetentionException {
  export const filterSensitiveLog = (obj: NoDataRetentionException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoDataRetentionException =>
    __isa(o, "NoDataRetentionException");
}

/**
 * <p>Status Code: 403, The caller is not authorized to perform an operation on the given
 *             stream, or the token has expired.</p>
 */
export interface NotAuthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace NotAuthorizedException {
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotAuthorizedException =>
    __isa(o, "NotAuthorizedException");
}

/**
 * <p>
 *             <code>GetMedia</code> throws this error when Kinesis Video Streams can't find the
 *             stream that you specified.</p>
 *         <p>
 *             <code>GetHLSStreamingSessionURL</code> and <code>GetDASHStreamingSessionURL</code>
 *             throw this error if a session with a <code>PlaybackMode</code> of <code>ON_DEMAND</code>
 *             or <code>LIVE_REPLAY</code>is requested for a stream that has no fragments within the
 *             requested time range, or if a session with a <code>PlaybackMode</code> of
 *                 <code>LIVE</code> is requested for a stream that has no fragments within the last 30
 *             seconds.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The range of timestamps for which to return fragments.</p>
 */
export interface TimestampRange {
  __type?: "TimestampRange";
  /**
   * <p>The ending timestamp in the range of timestamps for which to return fragments.</p>
   */
  EndTimestamp: Date | undefined;

  /**
   * <p>The starting timestamp in the range of timestamps for which to return
   *             fragments.</p>
   */
  StartTimestamp: Date | undefined;
}

export namespace TimestampRange {
  export const filterSensitiveLog = (obj: TimestampRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimestampRange =>
    __isa(o, "TimestampRange");
}

/**
 * <p>The type of the media (for example, h.264 or h.265 video or ACC or G.711 audio) could
 *             not be determined from the codec IDs of the tracks in the first fragment for a playback
 *             session. The codec ID for track 1 should be <code>V_MPEG/ISO/AVC</code> and, optionally,
 *             the codec ID for track 2 should be <code>A_AAC</code>.</p>
 */
export interface UnsupportedStreamMediaTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedStreamMediaTypeException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedStreamMediaTypeException {
  export const filterSensitiveLog = (
    obj: UnsupportedStreamMediaTypeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedStreamMediaTypeException =>
    __isa(o, "UnsupportedStreamMediaTypeException");
}
