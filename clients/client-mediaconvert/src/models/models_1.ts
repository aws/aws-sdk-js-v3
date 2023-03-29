// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MediaConvertServiceException as __BaseException } from "./MediaConvertServiceException";
import {
  AccelerationSettings,
  AccelerationStatus,
  AudioDescription,
  AutomatedEncodingSettings,
  AvailBlanking,
  BillingTagsSource,
  CaptionDescription,
  CaptionDescriptionPreset,
  CmfcAudioDuration,
  CmfcSettings,
  ContainerType,
  DvbNitSettings,
  Endpoint,
  EsamSettings,
  ExtendedDataServices,
  F4vSettings,
  Hdr10Metadata,
  HopDestination,
  Id3Insertion,
  ImageInserter,
  Input,
  InputTemplate,
  JobMessages,
  JobPhase,
  KantarWatermarkSettings,
  M2tsAudioBufferModel,
  M2tsAudioDuration,
  M2tsBufferModel,
  M2tsDataPtsControl,
  MotionImageInserter,
  NielsenConfiguration,
  NielsenNonLinearWatermarkSettings,
  OutputGroupDetail,
  OutputGroupSettings,
  QueueTransition,
  Rectangle,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const OutputSdt = {
  SDT_FOLLOW: "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT: "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL: "SDT_MANUAL",
  SDT_NONE: "SDT_NONE",
} as const;

/**
 * @public
 */
export type OutputSdt = (typeof OutputSdt)[keyof typeof OutputSdt];

/**
 * @public
 * Use these settings to insert a DVB Service Description Table (SDT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.
 */
export interface DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream. "Follow input SDT" copies SDT information from input stream to output stream. "Follow input SDT if present" copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT Manually" means user will enter the SDT information. "No SDT" means output stream will not contain SDT information.
   */
  OutputSdt?: OutputSdt | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  SdtInterval?: number;

  /**
   * The service name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceName?: string;

  /**
   * The service provider name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceProviderName?: string;
}

/**
 * @public
 * Use these settings to insert a DVB Time and Date Table (TDT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.
 */
export interface DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  TdtInterval?: number;
}

/**
 * @public
 * @enum
 */
export const M2tsEbpAudioInterval = {
  VIDEO_AND_FIXED_INTERVALS: "VIDEO_AND_FIXED_INTERVALS",
  VIDEO_INTERVAL: "VIDEO_INTERVAL",
} as const;

/**
 * @public
 */
export type M2tsEbpAudioInterval = (typeof M2tsEbpAudioInterval)[keyof typeof M2tsEbpAudioInterval];

/**
 * @public
 * @enum
 */
export const M2tsEbpPlacement = {
  VIDEO_AND_AUDIO_PIDS: "VIDEO_AND_AUDIO_PIDS",
  VIDEO_PID: "VIDEO_PID",
} as const;

/**
 * @public
 */
export type M2tsEbpPlacement = (typeof M2tsEbpPlacement)[keyof typeof M2tsEbpPlacement];

/**
 * @public
 * @enum
 */
export const M2tsEsRateInPes = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type M2tsEsRateInPes = (typeof M2tsEsRateInPes)[keyof typeof M2tsEsRateInPes];

/**
 * @public
 * @enum
 */
export const M2tsForceTsVideoEbpOrder = {
  DEFAULT: "DEFAULT",
  FORCE: "FORCE",
} as const;

/**
 * @public
 */
export type M2tsForceTsVideoEbpOrder = (typeof M2tsForceTsVideoEbpOrder)[keyof typeof M2tsForceTsVideoEbpOrder];

/**
 * @public
 * @enum
 */
export const M2tsKlvMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type M2tsKlvMetadata = (typeof M2tsKlvMetadata)[keyof typeof M2tsKlvMetadata];

/**
 * @public
 * @enum
 */
export const M2tsNielsenId3 = {
  INSERT: "INSERT",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type M2tsNielsenId3 = (typeof M2tsNielsenId3)[keyof typeof M2tsNielsenId3];

/**
 * @public
 * @enum
 */
export const M2tsPcrControl = {
  CONFIGURED_PCR_PERIOD: "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET: "PCR_EVERY_PES_PACKET",
} as const;

/**
 * @public
 */
export type M2tsPcrControl = (typeof M2tsPcrControl)[keyof typeof M2tsPcrControl];

/**
 * @public
 * @enum
 */
export const M2tsRateMode = {
  CBR: "CBR",
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type M2tsRateMode = (typeof M2tsRateMode)[keyof typeof M2tsRateMode];

/**
 * @public
 * Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
 */
export interface M2tsScte35Esam {
  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream generated by ESAM.
   */
  Scte35EsamPid?: number;
}

/**
 * @public
 * @enum
 */
export const M2tsScte35Source = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type M2tsScte35Source = (typeof M2tsScte35Source)[keyof typeof M2tsScte35Source];

/**
 * @public
 * @enum
 */
export const M2tsSegmentationMarkers = {
  EBP: "EBP",
  EBP_LEGACY: "EBP_LEGACY",
  NONE: "NONE",
  PSI_SEGSTART: "PSI_SEGSTART",
  RAI_ADAPT: "RAI_ADAPT",
  RAI_SEGSTART: "RAI_SEGSTART",
} as const;

/**
 * @public
 */
export type M2tsSegmentationMarkers = (typeof M2tsSegmentationMarkers)[keyof typeof M2tsSegmentationMarkers];

/**
 * @public
 * @enum
 */
export const M2tsSegmentationStyle = {
  MAINTAIN_CADENCE: "MAINTAIN_CADENCE",
  RESET_CADENCE: "RESET_CADENCE",
} as const;

/**
 * @public
 */
export type M2tsSegmentationStyle = (typeof M2tsSegmentationStyle)[keyof typeof M2tsSegmentationStyle];

/**
 * @public
 * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
 */
export interface M2tsSettings {
  /**
   * Selects between the DVB and ATSC buffer models for Dolby Digital audio.
   */
  AudioBufferModel?: M2tsAudioBufferModel | string;

  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: M2tsAudioDuration | string;

  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Specify the packet identifiers (PIDs) for any elementary audio streams you include in this output. Specify multiple PIDs as a JSON array. Default is the range 482-492.
   */
  AudioPids?: number[];

  /**
   * Specify the output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate. Other common values are 3750000, 7500000, and 15000000.
   */
  Bitrate?: number;

  /**
   * Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.
   */
  BufferModel?: M2tsBufferModel | string;

  /**
   * If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value (AUTO) to allow all PTS values.
   */
  DataPTSControl?: M2tsDataPtsControl | string;

  /**
   * Use these settings to insert a DVB Network Information Table (NIT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.
   */
  DvbNitSettings?: DvbNitSettings;

  /**
   * Use these settings to insert a DVB Service Description Table (SDT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.
   */
  DvbSdtSettings?: DvbSdtSettings;

  /**
   * Specify the packet identifiers (PIDs) for DVB subtitle data included in this output. Specify multiple PIDs as a JSON array. Default is the range 460-479.
   */
  DvbSubPids?: number[];

  /**
   * Use these settings to insert a DVB Time and Date Table (TDT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.
   */
  DvbTdtSettings?: DvbTdtSettings;

  /**
   * Specify the packet identifier (PID) for DVB teletext data you include in this output. Default is 499.
   */
  DvbTeletextPid?: number;

  /**
   * When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).
   */
  EbpAudioInterval?: M2tsEbpAudioInterval | string;

  /**
   * Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).
   */
  EbpPlacement?: M2tsEbpPlacement | string;

  /**
   * Controls whether to include the ES Rate field in the PES header.
   */
  EsRateInPes?: M2tsEsRateInPes | string;

  /**
   * Keep the default value (DEFAULT) unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force (FORCE).
   */
  ForceTsVideoEbpOrder?: M2tsForceTsVideoEbpOrder | string;

  /**
   * The length, in seconds, of each fragment. Only used with EBP markers.
   */
  FragmentTime?: number;

  /**
   * To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and passes it through to the output transport stream. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.
   */
  KlvMetadata?: M2tsKlvMetadata | string;

  /**
   * Specify the maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
   */
  MaxPcrInterval?: number;

  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker. The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   */
  MinEbpInterval?: number;

  /**
   * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3?: M2tsNielsenId3 | string;

  /**
   * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   */
  NullPacketBitrate?: number;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  PatInterval?: number;

  /**
   * When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M2tsPcrControl | string;

  /**
   * Specify the packet identifier (PID) for the program clock reference (PCR) in this output. If you do not specify a value, the service will use the value for Video PID (VideoPid).
   */
  PcrPid?: number;

  /**
   * Specify the number of milliseconds between instances of the program map table (PMT) in the output transport stream.
   */
  PmtInterval?: number;

  /**
   * Specify the packet identifier (PID) for the program map table (PMT) itself. Default is 480.
   */
  PmtPid?: number;

  /**
   * Specify the packet identifier (PID) of the private metadata stream. Default is 503.
   */
  PrivateMetadataPid?: number;

  /**
   * Use Program number (programNumber) to specify the program number used in the program map table (PMT) for this output. Default is 1. Program numbers and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.
   */
  ProgramNumber?: number;

  /**
   * When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.
   */
  RateMode?: M2tsRateMode | string;

  /**
   * Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
   */
  Scte35Esam?: M2tsScte35Esam;

  /**
   * Specify the packet identifier (PID) of the SCTE-35 stream in the transport stream.
   */
  Scte35Pid?: number;

  /**
   * For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE). Also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). Also enable ESAM SCTE-35 (include the property scte35Esam).
   */
  Scte35Source?: M2tsScte35Source | string;

  /**
   * Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   */
  SegmentationMarkers?: M2tsSegmentationMarkers | string;

  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.
   */
  SegmentationStyle?: M2tsSegmentationStyle | string;

  /**
   * Specify the length, in seconds, of each segment. Required unless markers is set to _none_.
   */
  SegmentationTime?: number;

  /**
   * Packet Identifier (PID) of the ID3 metadata stream in the transport stream.
   */
  TimedMetadataPid?: number;

  /**
   * Specify the ID for the transport stream itself in the program map table for this output. Transport stream IDs and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.
   */
  TransportStreamId?: number;

  /**
   * Specify the packet identifier (PID) of the elementary video stream in the transport stream.
   */
  VideoPid?: number;
}

/**
 * @public
 * @enum
 */
export const M3u8AudioDuration = {
  DEFAULT_CODEC_DURATION: "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION: "MATCH_VIDEO_DURATION",
} as const;

/**
 * @public
 */
export type M3u8AudioDuration = (typeof M3u8AudioDuration)[keyof typeof M3u8AudioDuration];

/**
 * @public
 * @enum
 */
export const M3u8DataPtsControl = {
  ALIGN_TO_VIDEO: "ALIGN_TO_VIDEO",
  AUTO: "AUTO",
} as const;

/**
 * @public
 */
export type M3u8DataPtsControl = (typeof M3u8DataPtsControl)[keyof typeof M3u8DataPtsControl];

/**
 * @public
 * @enum
 */
export const M3u8NielsenId3 = {
  INSERT: "INSERT",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type M3u8NielsenId3 = (typeof M3u8NielsenId3)[keyof typeof M3u8NielsenId3];

/**
 * @public
 * @enum
 */
export const M3u8PcrControl = {
  CONFIGURED_PCR_PERIOD: "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET: "PCR_EVERY_PES_PACKET",
} as const;

/**
 * @public
 */
export type M3u8PcrControl = (typeof M3u8PcrControl)[keyof typeof M3u8PcrControl];

/**
 * @public
 * @enum
 */
export const M3u8Scte35Source = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type M3u8Scte35Source = (typeof M3u8Scte35Source)[keyof typeof M3u8Scte35Source];

/**
 * @public
 * @enum
 */
export const TimedMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type TimedMetadata = (typeof TimedMetadata)[keyof typeof TimedMetadata];

/**
 * @public
 * These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs.
 */
export interface M3u8Settings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: M3u8AudioDuration | string;

  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
   */
  AudioPids?: number[];

  /**
   * If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value (AUTO) to allow all PTS values.
   */
  DataPTSControl?: M3u8DataPtsControl | string;

  /**
   * Specify the maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
   */
  MaxPcrInterval?: number;

  /**
   * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3?: M3u8NielsenId3 | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  PatInterval?: number;

  /**
   * When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M3u8PcrControl | string;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID.
   */
  PcrPid?: number;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  PmtInterval?: number;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream.
   */
  PmtPid?: number;

  /**
   * Packet Identifier (PID) of the private metadata stream in the transport stream.
   */
  PrivateMetadataPid?: number;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNumber?: number;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream.
   */
  Scte35Pid?: number;

  /**
   * For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml).
   */
  Scte35Source?: M3u8Scte35Source | string;

  /**
   * Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH) to include ID3 metadata in this output. This includes ID3 metadata from the following features: ID3 timestamp period (timedMetadataId3Period), and Custom ID3 metadata inserter (timedMetadataInsertion). To exclude this ID3 metadata in this output: set ID3 metadata to None (NONE) or leave blank.
   */
  TimedMetadata?: TimedMetadata | string;

  /**
   * Packet Identifier (PID) of the ID3 metadata stream in the transport stream.
   */
  TimedMetadataPid?: number;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream.
   */
  VideoPid?: number;
}

/**
 * @public
 * @enum
 */
export const MovClapAtom = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type MovClapAtom = (typeof MovClapAtom)[keyof typeof MovClapAtom];

/**
 * @public
 * @enum
 */
export const MovCslgAtom = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type MovCslgAtom = (typeof MovCslgAtom)[keyof typeof MovCslgAtom];

/**
 * @public
 * @enum
 */
export const MovMpeg2FourCCControl = {
  MPEG: "MPEG",
  XDCAM: "XDCAM",
} as const;

/**
 * @public
 */
export type MovMpeg2FourCCControl = (typeof MovMpeg2FourCCControl)[keyof typeof MovMpeg2FourCCControl];

/**
 * @public
 * @enum
 */
export const MovPaddingControl = {
  NONE: "NONE",
  OMNEON: "OMNEON",
} as const;

/**
 * @public
 */
export type MovPaddingControl = (typeof MovPaddingControl)[keyof typeof MovPaddingControl];

/**
 * @public
 * @enum
 */
export const MovReference = {
  EXTERNAL: "EXTERNAL",
  SELF_CONTAINED: "SELF_CONTAINED",
} as const;

/**
 * @public
 */
export type MovReference = (typeof MovReference)[keyof typeof MovReference];

/**
 * @public
 * These settings relate to your QuickTime MOV output container.
 */
export interface MovSettings {
  /**
   * When enabled, include 'clap' atom if appropriate for the video output settings.
   */
  ClapAtom?: MovClapAtom | string;

  /**
   * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
   */
  CslgAtom?: MovCslgAtom | string;

  /**
   * When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.
   */
  Mpeg2FourCCControl?: MovMpeg2FourCCControl | string;

  /**
   * Unless you need Omneon compatibility: Keep the default value, None. To make this output compatible with Omneon: Choose Omneon. When you do, MediaConvert increases the length of the 'elst' edit list atom. Note that this might cause file rejections when a recipient of the output file doesn't expect this extra padding.
   */
  PaddingControl?: MovPaddingControl | string;

  /**
   * Always keep the default value (SELF_CONTAINED) for this setting.
   */
  Reference?: MovReference | string;
}

/**
 * @public
 * @enum
 */
export const Mp4CslgAtom = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type Mp4CslgAtom = (typeof Mp4CslgAtom)[keyof typeof Mp4CslgAtom];

/**
 * @public
 * @enum
 */
export const Mp4FreeSpaceBox = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type Mp4FreeSpaceBox = (typeof Mp4FreeSpaceBox)[keyof typeof Mp4FreeSpaceBox];

/**
 * @public
 * @enum
 */
export const Mp4MoovPlacement = {
  NORMAL: "NORMAL",
  PROGRESSIVE_DOWNLOAD: "PROGRESSIVE_DOWNLOAD",
} as const;

/**
 * @public
 */
export type Mp4MoovPlacement = (typeof Mp4MoovPlacement)[keyof typeof Mp4MoovPlacement];

/**
 * @public
 * These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only.
 */
export interface Mp4Settings {
  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: CmfcAudioDuration | string;

  /**
   * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
   */
  CslgAtom?: Mp4CslgAtom | string;

  /**
   * Ignore this setting unless compliance to the CTTS box version specification matters in your workflow. Specify a value of 1 to set your CTTS box version to 1 and make your output compliant with the specification. When you specify a value of 1, you must also set CSLG atom (cslgAtom) to the value INCLUDE. Keep the default value 0 to set your CTTS box version to 0. This can provide backward compatibility for some players and packagers.
   */
  CttsVersion?: number;

  /**
   * Inserts a free-space box immediately after the moov box.
   */
  FreeSpaceBox?: Mp4FreeSpaceBox | string;

  /**
   * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
   */
  MoovPlacement?: Mp4MoovPlacement | string;

  /**
   * Overrides the "Major Brand" field in the output file. Usually not necessary to specify.
   */
  Mp4MajorBrand?: string;
}

/**
 * @public
 * @enum
 */
export const MpdAccessibilityCaptionHints = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type MpdAccessibilityCaptionHints =
  (typeof MpdAccessibilityCaptionHints)[keyof typeof MpdAccessibilityCaptionHints];

/**
 * @public
 * @enum
 */
export const MpdAudioDuration = {
  DEFAULT_CODEC_DURATION: "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION: "MATCH_VIDEO_DURATION",
} as const;

/**
 * @public
 */
export type MpdAudioDuration = (typeof MpdAudioDuration)[keyof typeof MpdAudioDuration];

/**
 * @public
 * @enum
 */
export const MpdCaptionContainerType = {
  FRAGMENTED_MP4: "FRAGMENTED_MP4",
  RAW: "RAW",
} as const;

/**
 * @public
 */
export type MpdCaptionContainerType = (typeof MpdCaptionContainerType)[keyof typeof MpdCaptionContainerType];

/**
 * @public
 * @enum
 */
export const MpdKlvMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type MpdKlvMetadata = (typeof MpdKlvMetadata)[keyof typeof MpdKlvMetadata];

/**
 * @public
 * @enum
 */
export const MpdManifestMetadataSignaling = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MpdManifestMetadataSignaling =
  (typeof MpdManifestMetadataSignaling)[keyof typeof MpdManifestMetadataSignaling];

/**
 * @public
 * @enum
 */
export const MpdScte35Esam = {
  INSERT: "INSERT",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type MpdScte35Esam = (typeof MpdScte35Esam)[keyof typeof MpdScte35Esam];

/**
 * @public
 * @enum
 */
export const MpdScte35Source = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type MpdScte35Source = (typeof MpdScte35Source)[keyof typeof MpdScte35Source];

/**
 * @public
 * @enum
 */
export const MpdTimedMetadata = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type MpdTimedMetadata = (typeof MpdTimedMetadata)[keyof typeof MpdTimedMetadata];

/**
 * @public
 * @enum
 */
export const MpdTimedMetadataBoxVersion = {
  VERSION_0: "VERSION_0",
  VERSION_1: "VERSION_1",
} as const;

/**
 * @public
 */
export type MpdTimedMetadataBoxVersion = (typeof MpdTimedMetadataBoxVersion)[keyof typeof MpdTimedMetadataBoxVersion];

/**
 * @public
 * These settings relate to the fragmented MP4 container for the segments in your DASH outputs.
 */
export interface MpdSettings {
  /**
   * Optional. Choose Include (INCLUDE) to have MediaConvert mark up your DASH manifest with <Accessibility> elements for embedded 608 captions. This markup isn't generally required, but some video players require it to discover and play embedded 608 captions. Keep the default value, Exclude (EXCLUDE), to leave these elements out. When you enable this setting, this is the markup that MediaConvert includes in your manifest: <Accessibility schemeIdUri="urn:scte:dash:cc:cea-608:2015" value="CC1=eng"/>
   */
  AccessibilityCaptionHints?: MpdAccessibilityCaptionHints | string;

  /**
   * Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.
   */
  AudioDuration?: MpdAudioDuration | string;

  /**
   * Use this setting only in DASH output groups that include sidecar TTML or IMSC captions. You specify sidecar captions in a separate output from your audio and video. Choose Raw (RAW) for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 (FRAGMENTED_MP4) for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files.
   */
  CaptionContainerType?: MpdCaptionContainerType | string;

  /**
   * To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.
   */
  KlvMetadata?: MpdKlvMetadata | string;

  /**
   * To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata (TimedMetadata) to Passthrough.
   */
  ManifestMetadataSignaling?: MpdManifestMetadataSignaling | string;

  /**
   * Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
   */
  Scte35Esam?: MpdScte35Esam | string;

  /**
   * Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.
   */
  Scte35Source?: MpdScte35Source | string;

  /**
   * To include ID3 metadata in this output: Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). Specify this ID3 metadata in Custom ID3 metadata inserter (timedMetadataInsertion). MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None (NONE) or leave blank.
   */
  TimedMetadata?: MpdTimedMetadata | string;

  /**
   * Specify the event message box (eMSG) version for ID3 timed metadata in your output.
   * For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.
   * Leave blank to use the default value Version 0.
   * When you specify Version 1, you must also set ID3 metadata (timedMetadata) to Passthrough.
   */
  TimedMetadataBoxVersion?: MpdTimedMetadataBoxVersion | string;

  /**
   * Specify the event message box (eMSG) scheme ID URI (scheme_id_uri) for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. Leave blank to use the default value: https://aomedia.org/emsg/ID3 When you specify a value for ID3 metadata scheme ID URI, you must also set ID3 metadata (timedMetadata) to Passthrough.
   */
  TimedMetadataSchemeIdUri?: string;

  /**
   * Specify the event message box (eMSG) value for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. When you specify a value for ID3 Metadata Value, you must also set ID3 metadata (timedMetadata) to Passthrough.
   */
  TimedMetadataValue?: string;
}

/**
 * @public
 * @enum
 */
export const MxfAfdSignaling = {
  COPY_FROM_VIDEO: "COPY_FROM_VIDEO",
  NO_COPY: "NO_COPY",
} as const;

/**
 * @public
 */
export type MxfAfdSignaling = (typeof MxfAfdSignaling)[keyof typeof MxfAfdSignaling];

/**
 * @public
 * @enum
 */
export const MxfProfile = {
  D_10: "D_10",
  OP1A: "OP1A",
  XAVC: "XAVC",
  XDCAM: "XDCAM",
} as const;

/**
 * @public
 */
export type MxfProfile = (typeof MxfProfile)[keyof typeof MxfProfile];

/**
 * @public
 * @enum
 */
export const MxfXavcDurationMode = {
  ALLOW_ANY_DURATION: "ALLOW_ANY_DURATION",
  DROP_FRAMES_FOR_COMPLIANCE: "DROP_FRAMES_FOR_COMPLIANCE",
} as const;

/**
 * @public
 */
export type MxfXavcDurationMode = (typeof MxfXavcDurationMode)[keyof typeof MxfXavcDurationMode];

/**
 * @public
 * Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC.
 */
export interface MxfXavcProfileSettings {
  /**
   * To create an output that complies with the XAVC file format guidelines for interoperability, keep the default value, Drop frames for compliance (DROP_FRAMES_FOR_COMPLIANCE). To include all frames from your input in this output, keep the default setting, Allow any duration (ALLOW_ANY_DURATION). The number of frames that MediaConvert excludes when you set this to Drop frames for compliance depends on the output frame rate and duration.
   */
  DurationMode?: MxfXavcDurationMode | string;

  /**
   * Specify a value for this setting only for outputs that you set up with one of these two XAVC profiles: XAVC HD Intra CBG (XAVC_HD_INTRA_CBG) or XAVC 4K Intra CBG (XAVC_4K_INTRA_CBG). Specify the amount of space in each frame that the service reserves for ancillary data, such as teletext captions. The default value for this setting is 1492 bytes per frame. This should be sufficient to prevent overflow unless you have multiple pages of teletext captions data. If you have a large amount of teletext data, specify a larger number.
   */
  MaxAncDataSize?: number;
}

/**
 * @public
 * These settings relate to your MXF output container.
 */
export interface MxfSettings {
  /**
   * Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy (NO_COPY) to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream (COPY_FROM_VIDEO) to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings.
   */
  AfdSignaling?: MxfAfdSignaling | string;

  /**
   * Specify the MXF profile, also called shim, for this output. When you choose Auto, MediaConvert chooses a profile based on the video codec and resolution. For a list of codecs supported with each MXF profile, see https://docs.aws.amazon.com/mediaconvert/latest/ug/codecs-supported-with-each-mxf-profile.html. For more information about the automatic selection behavior, see https://docs.aws.amazon.com/mediaconvert/latest/ug/default-automatic-selection-of-mxf-profiles.html.
   */
  Profile?: MxfProfile | string;

  /**
   * Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC.
   */
  XavcProfileSettings?: MxfXavcProfileSettings;
}

/**
 * @public
 * Container specific settings.
 */
export interface ContainerSettings {
  /**
   * These settings relate to the fragmented MP4 container for the segments in your CMAF outputs.
   */
  CmfcSettings?: CmfcSettings;

  /**
   * Container for this output. Some containers require a container settings object. If not specified, the default object will be created.
   */
  Container?: ContainerType | string;

  /**
   * Settings for F4v container
   */
  F4vSettings?: F4vSettings;

  /**
   * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
   */
  M2tsSettings?: M2tsSettings;

  /**
   * These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs.
   */
  M3u8Settings?: M3u8Settings;

  /**
   * These settings relate to your QuickTime MOV output container.
   */
  MovSettings?: MovSettings;

  /**
   * These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only.
   */
  Mp4Settings?: Mp4Settings;

  /**
   * These settings relate to the fragmented MP4 container for the segments in your DASH outputs.
   */
  MpdSettings?: MpdSettings;

  /**
   * These settings relate to your MXF output container.
   */
  MxfSettings?: MxfSettings;
}

/**
 * @public
 * @enum
 */
export const HlsAudioOnlyContainer = {
  AUTOMATIC: "AUTOMATIC",
  M2TS: "M2TS",
} as const;

/**
 * @public
 */
export type HlsAudioOnlyContainer = (typeof HlsAudioOnlyContainer)[keyof typeof HlsAudioOnlyContainer];

/**
 * @public
 * @enum
 */
export const HlsAudioTrackType = {
  ALTERNATE_AUDIO_AUTO_SELECT: "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT: "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM: "AUDIO_ONLY_VARIANT_STREAM",
} as const;

/**
 * @public
 */
export type HlsAudioTrackType = (typeof HlsAudioTrackType)[keyof typeof HlsAudioTrackType];

/**
 * @public
 * @enum
 */
export const HlsDescriptiveVideoServiceFlag = {
  DONT_FLAG: "DONT_FLAG",
  FLAG: "FLAG",
} as const;

/**
 * @public
 */
export type HlsDescriptiveVideoServiceFlag =
  (typeof HlsDescriptiveVideoServiceFlag)[keyof typeof HlsDescriptiveVideoServiceFlag];

/**
 * @public
 * @enum
 */
export const HlsIFrameOnlyManifest = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type HlsIFrameOnlyManifest = (typeof HlsIFrameOnlyManifest)[keyof typeof HlsIFrameOnlyManifest];

/**
 * @public
 * Settings for HLS output groups
 */
export interface HlsSettings {
  /**
   * Specifies the group to which the audio rendition belongs.
   */
  AudioGroupId?: string;

  /**
   * Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create an audio-only file in a raw container. Regardless of the value that you specify here, if this output has video, the service will place the output into an MPEG2-TS container.
   */
  AudioOnlyContainer?: HlsAudioOnlyContainer | string;

  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   */
  AudioTrackType?: HlsAudioTrackType | string;

  /**
   * Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag (FLAG), MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don't flag (DONT_FLAG), MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.
   */
  DescriptiveVideoServiceFlag?: HlsDescriptiveVideoServiceFlag | string;

  /**
   * Choose Include (INCLUDE) to have MediaConvert generate a child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude (EXCLUDE).
   */
  IFrameOnlyManifest?: HlsIFrameOnlyManifest | string;

  /**
   * Use this setting to add an identifying string to the filename of each segment. The service adds this string between the name modifier and segment index number. You can use format identifiers in the string. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html
   */
  SegmentModifier?: string;
}

/**
 * @public
 * Specific settings for this type of output.
 */
export interface OutputSettings {
  /**
   * Settings for HLS output groups
   */
  HlsSettings?: HlsSettings;
}

/**
 * @public
 * @enum
 */
export const AfdSignaling = {
  AUTO: "AUTO",
  FIXED: "FIXED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AfdSignaling = (typeof AfdSignaling)[keyof typeof AfdSignaling];

/**
 * @public
 * @enum
 */
export const AntiAlias = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AntiAlias = (typeof AntiAlias)[keyof typeof AntiAlias];

/**
 * @public
 * @enum
 */
export const Av1AdaptiveQuantization = {
  HIGH: "HIGH",
  HIGHER: "HIGHER",
  LOW: "LOW",
  MAX: "MAX",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type Av1AdaptiveQuantization = (typeof Av1AdaptiveQuantization)[keyof typeof Av1AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Av1BitDepth = {
  BIT_10: "BIT_10",
  BIT_8: "BIT_8",
} as const;

/**
 * @public
 */
export type Av1BitDepth = (typeof Av1BitDepth)[keyof typeof Av1BitDepth];

/**
 * @public
 * @enum
 */
export const Av1FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Av1FramerateControl = (typeof Av1FramerateControl)[keyof typeof Av1FramerateControl];

/**
 * @public
 * @enum
 */
export const Av1FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type Av1FramerateConversionAlgorithm =
  (typeof Av1FramerateConversionAlgorithm)[keyof typeof Av1FramerateConversionAlgorithm];

/**
 * @public
 * Settings for quality-defined variable bitrate encoding with the AV1 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
 */
export interface Av1QvbrSettings {
  /**
   * Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   */
  QvbrQualityLevel?: number;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   */
  QvbrQualityLevelFineTune?: number;
}

/**
 * @public
 * @enum
 */
export const Av1RateControlMode = {
  QVBR: "QVBR",
} as const;

/**
 * @public
 */
export type Av1RateControlMode = (typeof Av1RateControlMode)[keyof typeof Av1RateControlMode];

/**
 * @public
 * @enum
 */
export const Av1SpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Av1SpatialAdaptiveQuantization =
  (typeof Av1SpatialAdaptiveQuantization)[keyof typeof Av1SpatialAdaptiveQuantization];

/**
 * @public
 * Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
 */
export interface Av1Settings {
  /**
   * Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to Spatial adaptive quantization (spatialAdaptiveQuantization).
   */
  AdaptiveQuantization?: Av1AdaptiveQuantization | string;

  /**
   * Specify the Bit depth (Av1BitDepth). You can choose 8-bit (BIT_8) or 10-bit (BIT_10).
   */
  BitDepth?: Av1BitDepth | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Av1FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Specify the GOP length (keyframe interval) in frames. With AV1, MediaConvert doesn't support GOP length in seconds. This value must be greater than zero and preferably equal to 1 + ((numberBFrames + 1) * x), where x is an integer value.
   */
  GopSize?: number;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Specify from the number of B-frames, in the range of 0-15. For AV1 encoding, we recommend using 7 or 15. Choose a larger number for a lower bitrate and smaller file size; choose a smaller number for better video quality.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
   */
  QvbrSettings?: Av1QvbrSettings;

  /**
   * 'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.'
   */
  RateControlMode?: Av1RateControlMode | string;

  /**
   * Specify the number of slices per picture. This value must be 1, 2, 4, 8, 16, or 32. For progressive pictures, this value must be less than or equal to the number of macroblock rows. For interlaced pictures, this value must be less than or equal to half the number of macroblock rows.
   */
  Slices?: number;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: Av1SpatialAdaptiveQuantization | string;
}

/**
 * @public
 * @enum
 */
export const AvcIntraClass = {
  CLASS_100: "CLASS_100",
  CLASS_200: "CLASS_200",
  CLASS_4K_2K: "CLASS_4K_2K",
  CLASS_50: "CLASS_50",
} as const;

/**
 * @public
 */
export type AvcIntraClass = (typeof AvcIntraClass)[keyof typeof AvcIntraClass];

/**
 * @public
 * @enum
 */
export const AvcIntraUhdQualityTuningLevel = {
  MULTI_PASS: "MULTI_PASS",
  SINGLE_PASS: "SINGLE_PASS",
} as const;

/**
 * @public
 */
export type AvcIntraUhdQualityTuningLevel =
  (typeof AvcIntraUhdQualityTuningLevel)[keyof typeof AvcIntraUhdQualityTuningLevel];

/**
 * @public
 * Optional when you set AVC-Intra class (avcIntraClass) to Class 4K/2K (CLASS_4K_2K). When you set AVC-Intra class to a different value, this object isn't allowed.
 */
export interface AvcIntraUhdSettings {
  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how many transcoding passes MediaConvert does with your video. When you choose Multi-pass (MULTI_PASS), your video quality is better and your output bitrate is more accurate. That is, the actual bitrate of your output is closer to the target bitrate defined in the specification. When you choose Single-pass (SINGLE_PASS), your encoding time is faster. The default behavior is Single-pass (SINGLE_PASS).
   */
  QualityTuningLevel?: AvcIntraUhdQualityTuningLevel | string;
}

/**
 * @public
 * @enum
 */
export const AvcIntraFramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type AvcIntraFramerateControl = (typeof AvcIntraFramerateControl)[keyof typeof AvcIntraFramerateControl];

/**
 * @public
 * @enum
 */
export const AvcIntraFramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type AvcIntraFramerateConversionAlgorithm =
  (typeof AvcIntraFramerateConversionAlgorithm)[keyof typeof AvcIntraFramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const AvcIntraInterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;

/**
 * @public
 */
export type AvcIntraInterlaceMode = (typeof AvcIntraInterlaceMode)[keyof typeof AvcIntraInterlaceMode];

/**
 * @public
 * @enum
 */
export const AvcIntraScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;

/**
 * @public
 */
export type AvcIntraScanTypeConversionMode =
  (typeof AvcIntraScanTypeConversionMode)[keyof typeof AvcIntraScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const AvcIntraSlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AvcIntraSlowPal = (typeof AvcIntraSlowPal)[keyof typeof AvcIntraSlowPal];

/**
 * @public
 * @enum
 */
export const AvcIntraTelecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AvcIntraTelecine = (typeof AvcIntraTelecine)[keyof typeof AvcIntraTelecine];

/**
 * @public
 * Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf.
 */
export interface AvcIntraSettings {
  /**
   * Specify the AVC-Intra class of your output. The AVC-Intra class selection determines the output video bit rate depending on the frame rate of the output. Outputs with higher class values have higher bitrates and improved image quality. Note that for Class 4K/2K, MediaConvert supports only 4:2:2 chroma subsampling.
   */
  AvcIntraClass?: AvcIntraClass | string;

  /**
   * Optional when you set AVC-Intra class (avcIntraClass) to Class 4K/2K (CLASS_4K_2K). When you set AVC-Intra class to a different value, this object isn't allowed.
   */
  AvcIntraUhdSettings?: AvcIntraUhdSettings;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: AvcIntraFramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: AvcIntraFramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: AvcIntraInterlaceMode | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: AvcIntraScanTypeConversionMode | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: AvcIntraSlowPal | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: AvcIntraTelecine | string;
}

/**
 * @public
 * @enum
 */
export const VideoCodec = {
  AV1: "AV1",
  AVC_INTRA: "AVC_INTRA",
  FRAME_CAPTURE: "FRAME_CAPTURE",
  H_264: "H_264",
  H_265: "H_265",
  MPEG2: "MPEG2",
  PRORES: "PRORES",
  VC3: "VC3",
  VP8: "VP8",
  VP9: "VP9",
  XAVC: "XAVC",
} as const;

/**
 * @public
 */
export type VideoCodec = (typeof VideoCodec)[keyof typeof VideoCodec];

/**
 * @public
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
 */
export interface FrameCaptureSettings {
  /**
   * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.n.jpg where n is the 0-based sequence number of each Capture.
   */
  FramerateDenominator?: number;

  /**
   * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.NNNNNNN.jpg where N is the 0-based frame sequence number zero padded to 7 decimal places.
   */
  FramerateNumerator?: number;

  /**
   * Maximum number of captures (encoded jpg output files).
   */
  MaxCaptures?: number;

  /**
   * JPEG Quality - a higher value equals higher quality.
   */
  Quality?: number;
}

/**
 * @public
 * @enum
 */
export const H264AdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGHER: "HIGHER",
  LOW: "LOW",
  MAX: "MAX",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type H264AdaptiveQuantization = (typeof H264AdaptiveQuantization)[keyof typeof H264AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const BandwidthReductionFilterSharpening = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type BandwidthReductionFilterSharpening =
  (typeof BandwidthReductionFilterSharpening)[keyof typeof BandwidthReductionFilterSharpening];

/**
 * @public
 * @enum
 */
export const BandwidthReductionFilterStrength = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type BandwidthReductionFilterStrength =
  (typeof BandwidthReductionFilterStrength)[keyof typeof BandwidthReductionFilterStrength];

/**
 * @public
 * The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor.
 */
export interface BandwidthReductionFilter {
  /**
   * Optionally specify the level of sharpening to apply when you use the Bandwidth reduction filter.  Sharpening adds contrast to the edges of your video content and can reduce softness. Keep the default value Off to apply no sharpening. Set Sharpening strength to Low to apply a minimal amount of sharpening, or High to apply a maximum amount of sharpening.
   */
  Sharpening?: BandwidthReductionFilterSharpening | string;

  /**
   * Specify the strength of the Bandwidth reduction filter. For most workflows, we recommend that you choose Auto to reduce the bandwidth of your output with little to no perceptual decrease in video quality. For high quality and high bitrate outputs, choose Low. For the most bandwidth reduction, choose High. We recommend that you choose High for low bitrate outputs. Note that High may incur a slight increase in the softness of your output.
   */
  Strength?: BandwidthReductionFilterStrength | string;
}

/**
 * @public
 * @enum
 */
export const H264CodecLevel = {
  AUTO: "AUTO",
  LEVEL_1: "LEVEL_1",
  LEVEL_1_1: "LEVEL_1_1",
  LEVEL_1_2: "LEVEL_1_2",
  LEVEL_1_3: "LEVEL_1_3",
  LEVEL_2: "LEVEL_2",
  LEVEL_2_1: "LEVEL_2_1",
  LEVEL_2_2: "LEVEL_2_2",
  LEVEL_3: "LEVEL_3",
  LEVEL_3_1: "LEVEL_3_1",
  LEVEL_3_2: "LEVEL_3_2",
  LEVEL_4: "LEVEL_4",
  LEVEL_4_1: "LEVEL_4_1",
  LEVEL_4_2: "LEVEL_4_2",
  LEVEL_5: "LEVEL_5",
  LEVEL_5_1: "LEVEL_5_1",
  LEVEL_5_2: "LEVEL_5_2",
} as const;

/**
 * @public
 */
export type H264CodecLevel = (typeof H264CodecLevel)[keyof typeof H264CodecLevel];

/**
 * @public
 * @enum
 */
export const H264CodecProfile = {
  BASELINE: "BASELINE",
  HIGH: "HIGH",
  HIGH_10BIT: "HIGH_10BIT",
  HIGH_422: "HIGH_422",
  HIGH_422_10BIT: "HIGH_422_10BIT",
  MAIN: "MAIN",
} as const;

/**
 * @public
 */
export type H264CodecProfile = (typeof H264CodecProfile)[keyof typeof H264CodecProfile];

/**
 * @public
 * @enum
 */
export const H264DynamicSubGop = {
  ADAPTIVE: "ADAPTIVE",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type H264DynamicSubGop = (typeof H264DynamicSubGop)[keyof typeof H264DynamicSubGop];

/**
 * @public
 * @enum
 */
export const H264EntropyEncoding = {
  CABAC: "CABAC",
  CAVLC: "CAVLC",
} as const;

/**
 * @public
 */
export type H264EntropyEncoding = (typeof H264EntropyEncoding)[keyof typeof H264EntropyEncoding];

/**
 * @public
 * @enum
 */
export const H264FieldEncoding = {
  FORCE_FIELD: "FORCE_FIELD",
  MBAFF: "MBAFF",
  PAFF: "PAFF",
} as const;

/**
 * @public
 */
export type H264FieldEncoding = (typeof H264FieldEncoding)[keyof typeof H264FieldEncoding];

/**
 * @public
 * @enum
 */
export const H264FlickerAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264FlickerAdaptiveQuantization =
  (typeof H264FlickerAdaptiveQuantization)[keyof typeof H264FlickerAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H264FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type H264FramerateControl = (typeof H264FramerateControl)[keyof typeof H264FramerateControl];

/**
 * @public
 * @enum
 */
export const H264FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type H264FramerateConversionAlgorithm =
  (typeof H264FramerateConversionAlgorithm)[keyof typeof H264FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const H264GopBReference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264GopBReference = (typeof H264GopBReference)[keyof typeof H264GopBReference];

/**
 * @public
 * @enum
 */
export const H264GopSizeUnits = {
  AUTO: "AUTO",
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type H264GopSizeUnits = (typeof H264GopSizeUnits)[keyof typeof H264GopSizeUnits];

/**
 * @public
 * @enum
 */
export const H264InterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;

/**
 * @public
 */
export type H264InterlaceMode = (typeof H264InterlaceMode)[keyof typeof H264InterlaceMode];

/**
 * @public
 * @enum
 */
export const H264ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type H264ParControl = (typeof H264ParControl)[keyof typeof H264ParControl];

/**
 * @public
 * @enum
 */
export const H264QualityTuningLevel = {
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
  SINGLE_PASS: "SINGLE_PASS",
  SINGLE_PASS_HQ: "SINGLE_PASS_HQ",
} as const;

/**
 * @public
 */
export type H264QualityTuningLevel = (typeof H264QualityTuningLevel)[keyof typeof H264QualityTuningLevel];

/**
 * @public
 * Settings for quality-defined variable bitrate encoding with the H.264 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
 */
export interface H264QvbrSettings {
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   */
  MaxAverageBitrate?: number;

  /**
   * Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   */
  QvbrQualityLevel?: number;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   */
  QvbrQualityLevelFineTune?: number;
}

/**
 * @public
 * @enum
 */
export const H264RateControlMode = {
  CBR: "CBR",
  QVBR: "QVBR",
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type H264RateControlMode = (typeof H264RateControlMode)[keyof typeof H264RateControlMode];

/**
 * @public
 * @enum
 */
export const H264RepeatPps = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264RepeatPps = (typeof H264RepeatPps)[keyof typeof H264RepeatPps];

/**
 * @public
 * @enum
 */
export const H264ScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;

/**
 * @public
 */
export type H264ScanTypeConversionMode = (typeof H264ScanTypeConversionMode)[keyof typeof H264ScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const H264SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  TRANSITION_DETECTION: "TRANSITION_DETECTION",
} as const;

/**
 * @public
 */
export type H264SceneChangeDetect = (typeof H264SceneChangeDetect)[keyof typeof H264SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const H264SlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264SlowPal = (typeof H264SlowPal)[keyof typeof H264SlowPal];

/**
 * @public
 * @enum
 */
export const H264SpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264SpatialAdaptiveQuantization =
  (typeof H264SpatialAdaptiveQuantization)[keyof typeof H264SpatialAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H264Syntax = {
  DEFAULT: "DEFAULT",
  RP2027: "RP2027",
} as const;

/**
 * @public
 */
export type H264Syntax = (typeof H264Syntax)[keyof typeof H264Syntax];

/**
 * @public
 * @enum
 */
export const H264Telecine = {
  HARD: "HARD",
  NONE: "NONE",
  SOFT: "SOFT",
} as const;

/**
 * @public
 */
export type H264Telecine = (typeof H264Telecine)[keyof typeof H264Telecine];

/**
 * @public
 * @enum
 */
export const H264TemporalAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264TemporalAdaptiveQuantization =
  (typeof H264TemporalAdaptiveQuantization)[keyof typeof H264TemporalAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H264UnregisteredSeiTimecode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H264UnregisteredSeiTimecode =
  (typeof H264UnregisteredSeiTimecode)[keyof typeof H264UnregisteredSeiTimecode];

/**
 * @public
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
 */
export interface H264Settings {
  /**
   * Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set H264AdaptiveQuantization to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization (H264AdaptiveQuantization) to Off (OFF). Related settings: The value that you choose here applies to the following settings: H264FlickerAdaptiveQuantization, H264SpatialAdaptiveQuantization, and H264TemporalAdaptiveQuantization.
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | string;

  /**
   * The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor.
   */
  BandwidthReductionFilter?: BandwidthReductionFilter;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO).
   */
  CodecLevel?: H264CodecLevel | string;

  /**
   * H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.
   */
  CodecProfile?: H264CodecProfile | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: H264DynamicSubGop | string;

  /**
   * Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.
   */
  EntropyEncoding?: H264EntropyEncoding | string;

  /**
   * The video encoding method for your MPEG-4 AVC output. Keep the default value, PAFF, to have MediaConvert use PAFF encoding for interlaced outputs. Choose Force field (FORCE_FIELD) to disable PAFF encoding and create separate interlaced fields. Choose MBAFF to disable PAFF and have MediaConvert use MBAFF encoding for interlaced outputs.
   */
  FieldEncoding?: H264FieldEncoding | string;

  /**
   * Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264FlickerAdaptiveQuantization is Disabled (DISABLED). Change this value to Enabled (ENABLED) to reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. To manually enable or disable H264FlickerAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.
   */
  FlickerAdaptiveQuantization?: H264FlickerAdaptiveQuantization | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: H264FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: H264FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * If enable, use reference B frames for GOP structures that have B frames > 1.
   */
  GopBReference?: H264GopBReference | string;

  /**
   * Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, keep the default value by leaving this setting out of your JSON job specification. In the console, do this by keeping the default empty value. If you do explicitly specify a value, for segmented outputs, don't set this value to 0.
   */
  GopClosedCadence?: number;

  /**
   * Use this setting only when you set GOP mode control (GopSizeUnits) to Specified, frames (FRAMES) or Specified, seconds (SECONDS). Specify the GOP length using a whole number of frames or a decimal value of seconds. MediaConvert will interpret this value as frames or seconds depending on the value you choose for GOP mode control (GopSizeUnits). If you want to allow MediaConvert to automatically determine GOP size, leave GOP size blank and set GOP mode control to Auto (AUTO). If your output group specifies HLS, DASH, or CMAF, leave GOP size blank and set GOP mode control to Auto in each output in your output group.
   */
  GopSize?: number;

  /**
   * Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto (AUTO) and and leave GOP size (GopSize) blank. By default, if you don't specify GOP mode control (GopSizeUnits), MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames (FRAMES) or Specified, seconds (SECONDS) and then provide the GOP length in the related setting GOP size (GopSize).
   */
  GopSizeUnits?: H264GopSizeUnits | string;

  /**
   * If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.
   */
  HrdBufferFinalFillPercentage?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: H264InterlaceMode | string;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Use this setting only when you also enable Scene change detection (SceneChangeDetect). This setting determines how the encoder manages the spacing between I-frames that it inserts as part of the I-frame cadence and the I-frames that it inserts for Scene change detection. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, keep the default value by leaving this setting out of your JSON job specification. In the console, do this by keeping the default empty value. When you explicitly specify a value for this setting, the encoder determines whether to skip a cadence-driven I-frame by the value you set. For example, if you set Min I interval (minIInterval) to 5 and a cadence-driven I-frame would fall within 5 frames of a scene-change I-frame, then the encoder skips the cadence-driven I-frame. In this way, one GOP is shrunk slightly and one GOP is stretched slightly. When the cadence-driven I-frames are farther from the scene-change I-frame than the value you set, then the encoder leaves all I-frames in place and the GOPs surrounding the scene change are smaller than the usual cadence GOPs.
   */
  MinIInterval?: number;

  /**
   * This setting to determines the number of B-frames that MediaConvert puts between reference frames in this output. We recommend that you use automatic behavior to allow the transcoder to choose the best value based on characteristics of your input video. In the console, choose AUTO to select this automatic behavior. When you manually edit your JSON job specification, leave this setting out to choose automatic behavior. When you want to specify this number explicitly, choose a whole number from 0 through 7.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumberReferenceFrames?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: H264ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: H264QualityTuningLevel | string;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
   */
  QvbrSettings?: H264QvbrSettings;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   */
  RateControlMode?: H264RateControlMode | string;

  /**
   * Places a PPS header on each encoded picture, even if repeated.
   */
  RepeatPps?: H264RepeatPps | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: H264ScanTypeConversionMode | string;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   */
  SceneChangeDetect?: H264SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: H264SlowPal | string;

  /**
   * Ignore this setting unless you need to comply with a specification that requires a specific value. If you don't have a specification requirement, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, for flat quantization. Choose the value 1 or 16 to use the default JVT softening quantization matricies from the H.264 specification. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   */
  Softness?: number;

  /**
   * Only use this setting when you change the default value, Auto (AUTO), for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264SpatialAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to set H264SpatialAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (H264AdaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. To manually enable or disable H264SpatialAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.
   */
  SpatialAdaptiveQuantization?: H264SpatialAdaptiveQuantization | string;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: H264Syntax | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: H264Telecine | string;

  /**
   * Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264TemporalAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to set H264TemporalAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization). To manually enable or disable H264TemporalAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.
   */
  TemporalAdaptiveQuantization?: H264TemporalAdaptiveQuantization | string;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   */
  UnregisteredSeiTimecode?: H264UnregisteredSeiTimecode | string;
}

/**
 * @public
 * @enum
 */
export const H265AdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGHER: "HIGHER",
  LOW: "LOW",
  MAX: "MAX",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type H265AdaptiveQuantization = (typeof H265AdaptiveQuantization)[keyof typeof H265AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265AlternateTransferFunctionSei = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265AlternateTransferFunctionSei =
  (typeof H265AlternateTransferFunctionSei)[keyof typeof H265AlternateTransferFunctionSei];

/**
 * @public
 * @enum
 */
export const H265CodecLevel = {
  AUTO: "AUTO",
  LEVEL_1: "LEVEL_1",
  LEVEL_2: "LEVEL_2",
  LEVEL_2_1: "LEVEL_2_1",
  LEVEL_3: "LEVEL_3",
  LEVEL_3_1: "LEVEL_3_1",
  LEVEL_4: "LEVEL_4",
  LEVEL_4_1: "LEVEL_4_1",
  LEVEL_5: "LEVEL_5",
  LEVEL_5_1: "LEVEL_5_1",
  LEVEL_5_2: "LEVEL_5_2",
  LEVEL_6: "LEVEL_6",
  LEVEL_6_1: "LEVEL_6_1",
  LEVEL_6_2: "LEVEL_6_2",
} as const;

/**
 * @public
 */
export type H265CodecLevel = (typeof H265CodecLevel)[keyof typeof H265CodecLevel];

/**
 * @public
 * @enum
 */
export const H265CodecProfile = {
  MAIN10_HIGH: "MAIN10_HIGH",
  MAIN10_MAIN: "MAIN10_MAIN",
  MAIN_422_10BIT_HIGH: "MAIN_422_10BIT_HIGH",
  MAIN_422_10BIT_MAIN: "MAIN_422_10BIT_MAIN",
  MAIN_422_8BIT_HIGH: "MAIN_422_8BIT_HIGH",
  MAIN_422_8BIT_MAIN: "MAIN_422_8BIT_MAIN",
  MAIN_HIGH: "MAIN_HIGH",
  MAIN_MAIN: "MAIN_MAIN",
} as const;

/**
 * @public
 */
export type H265CodecProfile = (typeof H265CodecProfile)[keyof typeof H265CodecProfile];

/**
 * @public
 * @enum
 */
export const H265DynamicSubGop = {
  ADAPTIVE: "ADAPTIVE",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type H265DynamicSubGop = (typeof H265DynamicSubGop)[keyof typeof H265DynamicSubGop];

/**
 * @public
 * @enum
 */
export const H265FlickerAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265FlickerAdaptiveQuantization =
  (typeof H265FlickerAdaptiveQuantization)[keyof typeof H265FlickerAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type H265FramerateControl = (typeof H265FramerateControl)[keyof typeof H265FramerateControl];

/**
 * @public
 * @enum
 */
export const H265FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type H265FramerateConversionAlgorithm =
  (typeof H265FramerateConversionAlgorithm)[keyof typeof H265FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const H265GopBReference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265GopBReference = (typeof H265GopBReference)[keyof typeof H265GopBReference];

/**
 * @public
 * @enum
 */
export const H265GopSizeUnits = {
  AUTO: "AUTO",
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type H265GopSizeUnits = (typeof H265GopSizeUnits)[keyof typeof H265GopSizeUnits];

/**
 * @public
 * @enum
 */
export const H265InterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;

/**
 * @public
 */
export type H265InterlaceMode = (typeof H265InterlaceMode)[keyof typeof H265InterlaceMode];

/**
 * @public
 * @enum
 */
export const H265ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type H265ParControl = (typeof H265ParControl)[keyof typeof H265ParControl];

/**
 * @public
 * @enum
 */
export const H265QualityTuningLevel = {
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
  SINGLE_PASS: "SINGLE_PASS",
  SINGLE_PASS_HQ: "SINGLE_PASS_HQ",
} as const;

/**
 * @public
 */
export type H265QualityTuningLevel = (typeof H265QualityTuningLevel)[keyof typeof H265QualityTuningLevel];

/**
 * @public
 * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
 */
export interface H265QvbrSettings {
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   */
  MaxAverageBitrate?: number;

  /**
   * Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.
   */
  QvbrQualityLevel?: number;

  /**
   * Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.
   */
  QvbrQualityLevelFineTune?: number;
}

/**
 * @public
 * @enum
 */
export const H265RateControlMode = {
  CBR: "CBR",
  QVBR: "QVBR",
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type H265RateControlMode = (typeof H265RateControlMode)[keyof typeof H265RateControlMode];

/**
 * @public
 * @enum
 */
export const H265SampleAdaptiveOffsetFilterMode = {
  ADAPTIVE: "ADAPTIVE",
  DEFAULT: "DEFAULT",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type H265SampleAdaptiveOffsetFilterMode =
  (typeof H265SampleAdaptiveOffsetFilterMode)[keyof typeof H265SampleAdaptiveOffsetFilterMode];

/**
 * @public
 * @enum
 */
export const H265ScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;

/**
 * @public
 */
export type H265ScanTypeConversionMode = (typeof H265ScanTypeConversionMode)[keyof typeof H265ScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const H265SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  TRANSITION_DETECTION: "TRANSITION_DETECTION",
} as const;

/**
 * @public
 */
export type H265SceneChangeDetect = (typeof H265SceneChangeDetect)[keyof typeof H265SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const H265SlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265SlowPal = (typeof H265SlowPal)[keyof typeof H265SlowPal];

/**
 * @public
 * @enum
 */
export const H265SpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265SpatialAdaptiveQuantization =
  (typeof H265SpatialAdaptiveQuantization)[keyof typeof H265SpatialAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265Telecine = {
  HARD: "HARD",
  NONE: "NONE",
  SOFT: "SOFT",
} as const;

/**
 * @public
 */
export type H265Telecine = (typeof H265Telecine)[keyof typeof H265Telecine];

/**
 * @public
 * @enum
 */
export const H265TemporalAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265TemporalAdaptiveQuantization =
  (typeof H265TemporalAdaptiveQuantization)[keyof typeof H265TemporalAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const H265TemporalIds = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265TemporalIds = (typeof H265TemporalIds)[keyof typeof H265TemporalIds];

/**
 * @public
 * @enum
 */
export const H265Tiles = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265Tiles = (typeof H265Tiles)[keyof typeof H265Tiles];

/**
 * @public
 * @enum
 */
export const H265UnregisteredSeiTimecode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type H265UnregisteredSeiTimecode =
  (typeof H265UnregisteredSeiTimecode)[keyof typeof H265UnregisteredSeiTimecode];

/**
 * @public
 * @enum
 */
export const H265WriteMp4PackagingType = {
  HEV1: "HEV1",
  HVC1: "HVC1",
} as const;

/**
 * @public
 */
export type H265WriteMp4PackagingType = (typeof H265WriteMp4PackagingType)[keyof typeof H265WriteMp4PackagingType];

/**
 * @public
 * Settings for H265 codec
 */
export interface H265Settings {
  /**
   * When you set Adaptive Quantization (H265AdaptiveQuantization) to Auto (AUTO), or leave blank, MediaConvert automatically applies quantization to improve the video quality of your output. Set Adaptive Quantization to Low (LOW), Medium (MEDIUM), High (HIGH), Higher (HIGHER), or Max (MAX) to manually control the strength of the quantization filter. When you do, you can specify a value for Spatial Adaptive Quantization (H265SpatialAdaptiveQuantization), Temporal Adaptive Quantization (H265TemporalAdaptiveQuantization), and Flicker Adaptive Quantization (H265FlickerAdaptiveQuantization), to further control the quantization filter. Set Adaptive Quantization to Off (OFF) to apply no quantization to your output.
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | string;

  /**
   * Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).
   */
  AlternateTransferFunctionSei?: H265AlternateTransferFunctionSei | string;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * H.265 Level.
   */
  CodecLevel?: H265CodecLevel | string;

  /**
   * Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.
   */
  CodecProfile?: H265CodecProfile | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: H265DynamicSubGop | string;

  /**
   * Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set adaptiveQuantization to a value other than Off (OFF).
   */
  FlickerAdaptiveQuantization?: H265FlickerAdaptiveQuantization | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: H265FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: H265FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * If enable, use reference B frames for GOP structures that have B frames > 1.
   */
  GopBReference?: H265GopBReference | string;

  /**
   * Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, keep the default value by leaving this setting out of your JSON job specification. In the console, do this by keeping the default empty value. If you do explicitly specify a value, for segmented outputs, don't set this value to 0.
   */
  GopClosedCadence?: number;

  /**
   * Use this setting only when you set GOP mode control (GopSizeUnits) to Specified, frames (FRAMES) or Specified, seconds (SECONDS). Specify the GOP length using a whole number of frames or a decimal value of seconds. MediaConvert will interpret this value as frames or seconds depending on the value you choose for GOP mode control (GopSizeUnits). If you want to allow MediaConvert to automatically determine GOP size, leave GOP size blank and set GOP mode control to Auto (AUTO). If your output group specifies HLS, DASH, or CMAF, leave GOP size blank and set GOP mode control to Auto in each output in your output group.
   */
  GopSize?: number;

  /**
   * Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto (AUTO) and and leave GOP size (GopSize) blank. By default, if you don't specify GOP mode control (GopSizeUnits), MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames (FRAMES) or Specified, seconds (SECONDS) and then provide the GOP length in the related setting GOP size (GopSize).
   */
  GopSizeUnits?: H265GopSizeUnits | string;

  /**
   * If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.
   */
  HrdBufferFinalFillPercentage?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: H265InterlaceMode | string;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Use this setting only when you also enable Scene change detection (SceneChangeDetect). This setting determines how the encoder manages the spacing between I-frames that it inserts as part of the I-frame cadence and the I-frames that it inserts for Scene change detection. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, keep the default value by leaving this setting out of your JSON job specification. In the console, do this by keeping the default empty value. When you explicitly specify a value for this setting, the encoder determines whether to skip a cadence-driven I-frame by the value you set. For example, if you set Min I interval (minIInterval) to 5 and a cadence-driven I-frame would fall within 5 frames of a scene-change I-frame, then the encoder skips the cadence-driven I-frame. In this way, one GOP is shrunk slightly and one GOP is stretched slightly. When the cadence-driven I-frames are farther from the scene-change I-frame than the value you set, then the encoder leaves all I-frames in place and the GOPs surrounding the scene change are smaller than the usual cadence GOPs.
   */
  MinIInterval?: number;

  /**
   * Specify the number of B-frames that MediaConvert puts between reference frames in this output. Valid values are whole numbers from 0 through 7. When you don't specify a value, MediaConvert defaults to 2.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumberReferenceFrames?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: H265ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: H265QualityTuningLevel | string;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).
   */
  QvbrSettings?: H265QvbrSettings;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   */
  RateControlMode?: H265RateControlMode | string;

  /**
   * Specify Sample Adaptive Offset (SAO) filter strength. Adaptive mode dynamically selects best strength based on content
   */
  SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: H265ScanTypeConversionMode | string;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   */
  SceneChangeDetect?: H265SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: H265SlowPal | string;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: H265SpatialAdaptiveQuantization | string;

  /**
   * This field applies only if the Streams > Advanced > Framerate (framerate) field is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode) to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
   */
  Telecine?: H265Telecine | string;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).
   */
  TemporalAdaptiveQuantization?: H265TemporalAdaptiveQuantization | string;

  /**
   * Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.
   */
  TemporalIds?: H265TemporalIds | string;

  /**
   * Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.
   */
  Tiles?: H265Tiles | string;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   */
  UnregisteredSeiTimecode?: H265UnregisteredSeiTimecode | string;

  /**
   * If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples.
   */
  WriteMp4PackagingType?: H265WriteMp4PackagingType | string;
}

/**
 * @public
 * @enum
 */
export const Mpeg2AdaptiveQuantization = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type Mpeg2AdaptiveQuantization = (typeof Mpeg2AdaptiveQuantization)[keyof typeof Mpeg2AdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Mpeg2CodecLevel = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGH1440: "HIGH1440",
  LOW: "LOW",
  MAIN: "MAIN",
} as const;

/**
 * @public
 */
export type Mpeg2CodecLevel = (typeof Mpeg2CodecLevel)[keyof typeof Mpeg2CodecLevel];

/**
 * @public
 * @enum
 */
export const Mpeg2CodecProfile = {
  MAIN: "MAIN",
  PROFILE_422: "PROFILE_422",
} as const;

/**
 * @public
 */
export type Mpeg2CodecProfile = (typeof Mpeg2CodecProfile)[keyof typeof Mpeg2CodecProfile];

/**
 * @public
 * @enum
 */
export const Mpeg2DynamicSubGop = {
  ADAPTIVE: "ADAPTIVE",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type Mpeg2DynamicSubGop = (typeof Mpeg2DynamicSubGop)[keyof typeof Mpeg2DynamicSubGop];

/**
 * @public
 * @enum
 */
export const Mpeg2FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Mpeg2FramerateControl = (typeof Mpeg2FramerateControl)[keyof typeof Mpeg2FramerateControl];

/**
 * @public
 * @enum
 */
export const Mpeg2FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type Mpeg2FramerateConversionAlgorithm =
  (typeof Mpeg2FramerateConversionAlgorithm)[keyof typeof Mpeg2FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const Mpeg2GopSizeUnits = {
  FRAMES: "FRAMES",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type Mpeg2GopSizeUnits = (typeof Mpeg2GopSizeUnits)[keyof typeof Mpeg2GopSizeUnits];

/**
 * @public
 * @enum
 */
export const Mpeg2InterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;

/**
 * @public
 */
export type Mpeg2InterlaceMode = (typeof Mpeg2InterlaceMode)[keyof typeof Mpeg2InterlaceMode];

/**
 * @public
 * @enum
 */
export const Mpeg2IntraDcPrecision = {
  AUTO: "AUTO",
  INTRA_DC_PRECISION_10: "INTRA_DC_PRECISION_10",
  INTRA_DC_PRECISION_11: "INTRA_DC_PRECISION_11",
  INTRA_DC_PRECISION_8: "INTRA_DC_PRECISION_8",
  INTRA_DC_PRECISION_9: "INTRA_DC_PRECISION_9",
} as const;

/**
 * @public
 */
export type Mpeg2IntraDcPrecision = (typeof Mpeg2IntraDcPrecision)[keyof typeof Mpeg2IntraDcPrecision];

/**
 * @public
 * @enum
 */
export const Mpeg2ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Mpeg2ParControl = (typeof Mpeg2ParControl)[keyof typeof Mpeg2ParControl];

/**
 * @public
 * @enum
 */
export const Mpeg2QualityTuningLevel = {
  MULTI_PASS: "MULTI_PASS",
  SINGLE_PASS: "SINGLE_PASS",
} as const;

/**
 * @public
 */
export type Mpeg2QualityTuningLevel = (typeof Mpeg2QualityTuningLevel)[keyof typeof Mpeg2QualityTuningLevel];

/**
 * @public
 * @enum
 */
export const Mpeg2RateControlMode = {
  CBR: "CBR",
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type Mpeg2RateControlMode = (typeof Mpeg2RateControlMode)[keyof typeof Mpeg2RateControlMode];

/**
 * @public
 * @enum
 */
export const Mpeg2ScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;

/**
 * @public
 */
export type Mpeg2ScanTypeConversionMode =
  (typeof Mpeg2ScanTypeConversionMode)[keyof typeof Mpeg2ScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const Mpeg2SceneChangeDetect = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Mpeg2SceneChangeDetect = (typeof Mpeg2SceneChangeDetect)[keyof typeof Mpeg2SceneChangeDetect];

/**
 * @public
 * @enum
 */
export const Mpeg2SlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Mpeg2SlowPal = (typeof Mpeg2SlowPal)[keyof typeof Mpeg2SlowPal];

/**
 * @public
 * @enum
 */
export const Mpeg2SpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Mpeg2SpatialAdaptiveQuantization =
  (typeof Mpeg2SpatialAdaptiveQuantization)[keyof typeof Mpeg2SpatialAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Mpeg2Syntax = {
  DEFAULT: "DEFAULT",
  D_10: "D_10",
} as const;

/**
 * @public
 */
export type Mpeg2Syntax = (typeof Mpeg2Syntax)[keyof typeof Mpeg2Syntax];

/**
 * @public
 * @enum
 */
export const Mpeg2Telecine = {
  HARD: "HARD",
  NONE: "NONE",
  SOFT: "SOFT",
} as const;

/**
 * @public
 */
export type Mpeg2Telecine = (typeof Mpeg2Telecine)[keyof typeof Mpeg2Telecine];

/**
 * @public
 * @enum
 */
export const Mpeg2TemporalAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Mpeg2TemporalAdaptiveQuantization =
  (typeof Mpeg2TemporalAdaptiveQuantization)[keyof typeof Mpeg2TemporalAdaptiveQuantization];

/**
 * @public
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
 */
export interface Mpeg2Settings {
  /**
   * Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).
   */
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization | string;

  /**
   * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.
   */
  CodecLevel?: Mpeg2CodecLevel | string;

  /**
   * Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.
   */
  CodecProfile?: Mpeg2CodecProfile | string;

  /**
   * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
   */
  DynamicSubGop?: Mpeg2DynamicSubGop | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Mpeg2FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Mpeg2FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. When you create a streaming output, we recommend that you keep the default value, 1, so that players starting mid-stream receive an IDR frame as quickly as possible. Don't set this value to 0; that would break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Specify the interval between keyframes, in seconds or frames, for this output. Default: 12 Related settings: When you specify the GOP size in seconds, set GOP mode control (GopSizeUnits) to Specified, seconds (SECONDS). The default value for GOP mode control (GopSizeUnits) is Frames (FRAMES).
   */
  GopSize?: number;

  /**
   * Specify the units for GOP size (GopSize). If you don't specify a value here, by default the encoder measures GOP size in frames.
   */
  GopSizeUnits?: Mpeg2GopSizeUnits | string;

  /**
   * If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.
   */
  HrdBufferFinalFillPercentage?: number;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: Mpeg2InterlaceMode | string;

  /**
   * Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.
   */
  IntraDcPrecision?: Mpeg2IntraDcPrecision | string;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000.
   */
  MaxBitrate?: number;

  /**
   * Use this setting only when you also enable Scene change detection (SceneChangeDetect). This setting determines how the encoder manages the spacing between I-frames that it inserts as part of the I-frame cadence and the I-frames that it inserts for Scene change detection. When you specify a value for this setting, the encoder determines whether to skip a cadence-driven I-frame by the value you set. For example, if you set Min I interval (minIInterval) to 5 and a cadence-driven I-frame would fall within 5 frames of a scene-change I-frame, then the encoder skips the cadence-driven I-frame. In this way, one GOP is shrunk slightly and one GOP is stretched slightly. When the cadence-driven I-frames are farther from the scene-change I-frame than the value you set, then the encoder leaves all I-frames in place and the GOPs surrounding the scene change are smaller than the usual cadence GOPs.
   */
  MinIInterval?: number;

  /**
   * Specify the number of B-frames that MediaConvert puts between reference frames in this output. Valid values are whole numbers from 0 through 7. When you don't specify a value, MediaConvert defaults to 2.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: Mpeg2ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: Mpeg2QualityTuningLevel | string;

  /**
   * Use Rate control mode (Mpeg2RateControlMode) to specify whether the bitrate is variable (vbr) or constant (cbr).
   */
  RateControlMode?: Mpeg2RateControlMode | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: Mpeg2ScanTypeConversionMode | string;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.
   */
  SceneChangeDetect?: Mpeg2SceneChangeDetect | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: Mpeg2SlowPal | string;

  /**
   * Ignore this setting unless you need to comply with a specification that requires a specific value. If you don't have a specification requirement, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, to use the AWS Elemental default matrices. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   */
  Softness?: number;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: Mpeg2SpatialAdaptiveQuantization | string;

  /**
   * Specify whether this output's video uses the D10 syntax. Keep the default value to not use the syntax. Related settings: When you choose D10 (D_10) for your MXF profile (profile), you must also set this value to D10 (D_10).
   */
  Syntax?: Mpeg2Syntax | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: Mpeg2Telecine | string;

  /**
   * Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).
   */
  TemporalAdaptiveQuantization?: Mpeg2TemporalAdaptiveQuantization | string;
}

/**
 * @public
 * @enum
 */
export const ProresChromaSampling = {
  PRESERVE_444_SAMPLING: "PRESERVE_444_SAMPLING",
  SUBSAMPLE_TO_422: "SUBSAMPLE_TO_422",
} as const;

/**
 * @public
 */
export type ProresChromaSampling = (typeof ProresChromaSampling)[keyof typeof ProresChromaSampling];

/**
 * @public
 * @enum
 */
export const ProresCodecProfile = {
  APPLE_PRORES_422: "APPLE_PRORES_422",
  APPLE_PRORES_422_HQ: "APPLE_PRORES_422_HQ",
  APPLE_PRORES_422_LT: "APPLE_PRORES_422_LT",
  APPLE_PRORES_422_PROXY: "APPLE_PRORES_422_PROXY",
  APPLE_PRORES_4444: "APPLE_PRORES_4444",
  APPLE_PRORES_4444_XQ: "APPLE_PRORES_4444_XQ",
} as const;

/**
 * @public
 */
export type ProresCodecProfile = (typeof ProresCodecProfile)[keyof typeof ProresCodecProfile];

/**
 * @public
 * @enum
 */
export const ProresFramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type ProresFramerateControl = (typeof ProresFramerateControl)[keyof typeof ProresFramerateControl];

/**
 * @public
 * @enum
 */
export const ProresFramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type ProresFramerateConversionAlgorithm =
  (typeof ProresFramerateConversionAlgorithm)[keyof typeof ProresFramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const ProresInterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;

/**
 * @public
 */
export type ProresInterlaceMode = (typeof ProresInterlaceMode)[keyof typeof ProresInterlaceMode];

/**
 * @public
 * @enum
 */
export const ProresParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type ProresParControl = (typeof ProresParControl)[keyof typeof ProresParControl];

/**
 * @public
 * @enum
 */
export const ProresScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;

/**
 * @public
 */
export type ProresScanTypeConversionMode =
  (typeof ProresScanTypeConversionMode)[keyof typeof ProresScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const ProresSlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ProresSlowPal = (typeof ProresSlowPal)[keyof typeof ProresSlowPal];

/**
 * @public
 * @enum
 */
export const ProresTelecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ProresTelecine = (typeof ProresTelecine)[keyof typeof ProresTelecine];

/**
 * @public
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
 */
export interface ProresSettings {
  /**
   * This setting applies only to ProRes 4444 and ProRes 4444 XQ outputs that you create from inputs that use 4:4:4 chroma sampling. Set Preserve 4:4:4 sampling (PRESERVE_444_SAMPLING) to allow outputs to also use 4:4:4 chroma sampling. You must specify a value for this setting when your output codec profile supports 4:4:4 chroma sampling. Related Settings: When you set Chroma sampling to Preserve 4:4:4 sampling (PRESERVE_444_SAMPLING), you must choose an output codec profile that supports 4:4:4 chroma sampling. These values for Profile (CodecProfile) support 4:4:4 chroma sampling: Apple ProRes 4444 (APPLE_PRORES_4444) or Apple ProRes 4444 XQ (APPLE_PRORES_4444_XQ). When you set Chroma sampling to Preserve 4:4:4 sampling, you must disable all video preprocessors except for Nexguard file marker (PartnerWatermarking). When you set Chroma sampling to Preserve 4:4:4 sampling and use framerate conversion, you must set Frame rate conversion algorithm (FramerateConversionAlgorithm) to Drop duplicate (DUPLICATE_DROP).
   */
  ChromaSampling?: ProresChromaSampling | string;

  /**
   * Use Profile (ProResCodecProfile) to specify the type of Apple ProRes codec to use for this output.
   */
  CodecProfile?: ProresCodecProfile | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: ProresFramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: ProresFramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: ProresInterlaceMode | string;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: ProresParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: ProresScanTypeConversionMode | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: ProresSlowPal | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: ProresTelecine | string;
}

/**
 * @public
 * @enum
 */
export const Vc3FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Vc3FramerateControl = (typeof Vc3FramerateControl)[keyof typeof Vc3FramerateControl];

/**
 * @public
 * @enum
 */
export const Vc3FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type Vc3FramerateConversionAlgorithm =
  (typeof Vc3FramerateConversionAlgorithm)[keyof typeof Vc3FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const Vc3InterlaceMode = {
  INTERLACED: "INTERLACED",
  PROGRESSIVE: "PROGRESSIVE",
} as const;

/**
 * @public
 */
export type Vc3InterlaceMode = (typeof Vc3InterlaceMode)[keyof typeof Vc3InterlaceMode];

/**
 * @public
 * @enum
 */
export const Vc3ScanTypeConversionMode = {
  INTERLACED: "INTERLACED",
  INTERLACED_OPTIMIZE: "INTERLACED_OPTIMIZE",
} as const;

/**
 * @public
 */
export type Vc3ScanTypeConversionMode = (typeof Vc3ScanTypeConversionMode)[keyof typeof Vc3ScanTypeConversionMode];

/**
 * @public
 * @enum
 */
export const Vc3SlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Vc3SlowPal = (typeof Vc3SlowPal)[keyof typeof Vc3SlowPal];

/**
 * @public
 * @enum
 */
export const Vc3Telecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Vc3Telecine = (typeof Vc3Telecine)[keyof typeof Vc3Telecine];

/**
 * @public
 * @enum
 */
export const Vc3Class = {
  CLASS_145_8BIT: "CLASS_145_8BIT",
  CLASS_220_10BIT: "CLASS_220_10BIT",
  CLASS_220_8BIT: "CLASS_220_8BIT",
} as const;

/**
 * @public
 */
export type Vc3Class = (typeof Vc3Class)[keyof typeof Vc3Class];

/**
 * @public
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VC3
 */
export interface Vc3Settings {
  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Vc3FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Vc3FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Optional. Choose the scan line type for this output. If you don't specify a value, MediaConvert will create a progressive output.
   */
  InterlaceMode?: Vc3InterlaceMode | string;

  /**
   * Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).
   */
  ScanTypeConversionMode?: Vc3ScanTypeConversionMode | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: Vc3SlowPal | string;

  /**
   * When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.
   */
  Telecine?: Vc3Telecine | string;

  /**
   * Specify the VC3 class to choose the quality characteristics for this output. VC3 class, together with the settings Framerate (framerateNumerator and framerateDenominator) and Resolution (height and width), determine your output bitrate. For example, say that your video resolution is 1920x1080 and your framerate is 29.97. Then Class 145 (CLASS_145) gives you an output with a bitrate of approximately 145 Mbps and Class 220 (CLASS_220) gives you and output with a bitrate of approximately 220 Mbps. VC3 class also specifies the color bit depth of your output.
   */
  Vc3Class?: Vc3Class | string;
}

/**
 * @public
 * @enum
 */
export const Vp8FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Vp8FramerateControl = (typeof Vp8FramerateControl)[keyof typeof Vp8FramerateControl];

/**
 * @public
 * @enum
 */
export const Vp8FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type Vp8FramerateConversionAlgorithm =
  (typeof Vp8FramerateConversionAlgorithm)[keyof typeof Vp8FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const Vp8ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Vp8ParControl = (typeof Vp8ParControl)[keyof typeof Vp8ParControl];

/**
 * @public
 * @enum
 */
export const Vp8QualityTuningLevel = {
  MULTI_PASS: "MULTI_PASS",
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
} as const;

/**
 * @public
 */
export type Vp8QualityTuningLevel = (typeof Vp8QualityTuningLevel)[keyof typeof Vp8QualityTuningLevel];

/**
 * @public
 * @enum
 */
export const Vp8RateControlMode = {
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type Vp8RateControlMode = (typeof Vp8RateControlMode)[keyof typeof Vp8RateControlMode];

/**
 * @public
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8.
 */
export interface Vp8Settings {
  /**
   * Target bitrate in bits/second. For example, enter five megabits per second as 5000000.
   */
  Bitrate?: number;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Vp8FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Vp8FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * GOP Length (keyframe interval) in frames. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Optional. Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.
   */
  MaxBitrate?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.
   */
  ParControl?: Vp8ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.
   */
  QualityTuningLevel?: Vp8QualityTuningLevel | string;

  /**
   * With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode.
   */
  RateControlMode?: Vp8RateControlMode | string;
}

/**
 * @public
 * @enum
 */
export const Vp9FramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Vp9FramerateControl = (typeof Vp9FramerateControl)[keyof typeof Vp9FramerateControl];

/**
 * @public
 * @enum
 */
export const Vp9FramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type Vp9FramerateConversionAlgorithm =
  (typeof Vp9FramerateConversionAlgorithm)[keyof typeof Vp9FramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const Vp9ParControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type Vp9ParControl = (typeof Vp9ParControl)[keyof typeof Vp9ParControl];

/**
 * @public
 * @enum
 */
export const Vp9QualityTuningLevel = {
  MULTI_PASS: "MULTI_PASS",
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
} as const;

/**
 * @public
 */
export type Vp9QualityTuningLevel = (typeof Vp9QualityTuningLevel)[keyof typeof Vp9QualityTuningLevel];

/**
 * @public
 * @enum
 */
export const Vp9RateControlMode = {
  VBR: "VBR",
} as const;

/**
 * @public
 */
export type Vp9RateControlMode = (typeof Vp9RateControlMode)[keyof typeof Vp9RateControlMode];

/**
 * @public
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9.
 */
export interface Vp9Settings {
  /**
   * Target bitrate in bits/second. For example, enter five megabits per second as 5000000.
   */
  Bitrate?: number;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Vp9FramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: Vp9FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * GOP Length (keyframe interval) in frames. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.
   */
  MaxBitrate?: number;

  /**
   * Optional. Specify how the service determines the pixel aspect ratio for this output. The default behavior is to use the same pixel aspect ratio as your input video.
   */
  ParControl?: Vp9ParControl | string;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.
   */
  ParDenominator?: number;

  /**
   * Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.
   */
  ParNumerator?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.
   */
  QualityTuningLevel?: Vp9QualityTuningLevel | string;

  /**
   * With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode.
   */
  RateControlMode?: Vp9RateControlMode | string;
}

/**
 * @public
 * @enum
 */
export const XavcAdaptiveQuantization = {
  AUTO: "AUTO",
  HIGH: "HIGH",
  HIGHER: "HIGHER",
  LOW: "LOW",
  MAX: "MAX",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type XavcAdaptiveQuantization = (typeof XavcAdaptiveQuantization)[keyof typeof XavcAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const XavcEntropyEncoding = {
  AUTO: "AUTO",
  CABAC: "CABAC",
  CAVLC: "CAVLC",
} as const;

/**
 * @public
 */
export type XavcEntropyEncoding = (typeof XavcEntropyEncoding)[keyof typeof XavcEntropyEncoding];

/**
 * @public
 * @enum
 */
export const XavcFramerateControl = {
  INITIALIZE_FROM_SOURCE: "INITIALIZE_FROM_SOURCE",
  SPECIFIED: "SPECIFIED",
} as const;

/**
 * @public
 */
export type XavcFramerateControl = (typeof XavcFramerateControl)[keyof typeof XavcFramerateControl];

/**
 * @public
 * @enum
 */
export const XavcFramerateConversionAlgorithm = {
  DUPLICATE_DROP: "DUPLICATE_DROP",
  FRAMEFORMER: "FRAMEFORMER",
  INTERPOLATE: "INTERPOLATE",
} as const;

/**
 * @public
 */
export type XavcFramerateConversionAlgorithm =
  (typeof XavcFramerateConversionAlgorithm)[keyof typeof XavcFramerateConversionAlgorithm];

/**
 * @public
 * @enum
 */
export const XavcProfile = {
  XAVC_4K: "XAVC_4K",
  XAVC_4K_INTRA_CBG: "XAVC_4K_INTRA_CBG",
  XAVC_4K_INTRA_VBR: "XAVC_4K_INTRA_VBR",
  XAVC_HD: "XAVC_HD",
  XAVC_HD_INTRA_CBG: "XAVC_HD_INTRA_CBG",
} as const;

/**
 * @public
 */
export type XavcProfile = (typeof XavcProfile)[keyof typeof XavcProfile];

/**
 * @public
 * @enum
 */
export const XavcSlowPal = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type XavcSlowPal = (typeof XavcSlowPal)[keyof typeof XavcSlowPal];

/**
 * @public
 * @enum
 */
export const XavcSpatialAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type XavcSpatialAdaptiveQuantization =
  (typeof XavcSpatialAdaptiveQuantization)[keyof typeof XavcSpatialAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const XavcTemporalAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type XavcTemporalAdaptiveQuantization =
  (typeof XavcTemporalAdaptiveQuantization)[keyof typeof XavcTemporalAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const Xavc4kIntraCbgProfileClass = {
  CLASS_100: "CLASS_100",
  CLASS_300: "CLASS_300",
  CLASS_480: "CLASS_480",
} as const;

/**
 * @public
 */
export type Xavc4kIntraCbgProfileClass = (typeof Xavc4kIntraCbgProfileClass)[keyof typeof Xavc4kIntraCbgProfileClass];

/**
 * @public
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_CBG.
 */
export interface Xavc4kIntraCbgProfileSettings {
  /**
   * Specify the XAVC Intra 4k (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  XavcClass?: Xavc4kIntraCbgProfileClass | string;
}

/**
 * @public
 * @enum
 */
export const Xavc4kIntraVbrProfileClass = {
  CLASS_100: "CLASS_100",
  CLASS_300: "CLASS_300",
  CLASS_480: "CLASS_480",
} as const;

/**
 * @public
 */
export type Xavc4kIntraVbrProfileClass = (typeof Xavc4kIntraVbrProfileClass)[keyof typeof Xavc4kIntraVbrProfileClass];

/**
 * @public
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_VBR.
 */
export interface Xavc4kIntraVbrProfileSettings {
  /**
   * Specify the XAVC Intra 4k (VBR) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  XavcClass?: Xavc4kIntraVbrProfileClass | string;
}

/**
 * @public
 * @enum
 */
export const Xavc4kProfileBitrateClass = {
  BITRATE_CLASS_100: "BITRATE_CLASS_100",
  BITRATE_CLASS_140: "BITRATE_CLASS_140",
  BITRATE_CLASS_200: "BITRATE_CLASS_200",
} as const;

/**
 * @public
 */
export type Xavc4kProfileBitrateClass = (typeof Xavc4kProfileBitrateClass)[keyof typeof Xavc4kProfileBitrateClass];

/**
 * @public
 * @enum
 */
export const Xavc4kProfileCodecProfile = {
  HIGH: "HIGH",
  HIGH_422: "HIGH_422",
} as const;

/**
 * @public
 */
export type Xavc4kProfileCodecProfile = (typeof Xavc4kProfileCodecProfile)[keyof typeof Xavc4kProfileCodecProfile];

/**
 * @public
 * @enum
 */
export const XavcFlickerAdaptiveQuantization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type XavcFlickerAdaptiveQuantization =
  (typeof XavcFlickerAdaptiveQuantization)[keyof typeof XavcFlickerAdaptiveQuantization];

/**
 * @public
 * @enum
 */
export const XavcGopBReference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type XavcGopBReference = (typeof XavcGopBReference)[keyof typeof XavcGopBReference];

/**
 * @public
 * @enum
 */
export const Xavc4kProfileQualityTuningLevel = {
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
  SINGLE_PASS: "SINGLE_PASS",
  SINGLE_PASS_HQ: "SINGLE_PASS_HQ",
} as const;

/**
 * @public
 */
export type Xavc4kProfileQualityTuningLevel =
  (typeof Xavc4kProfileQualityTuningLevel)[keyof typeof Xavc4kProfileQualityTuningLevel];

/**
 * @public
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K.
 */
export interface Xavc4kProfileSettings {
  /**
   * Specify the XAVC 4k (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  BitrateClass?: Xavc4kProfileBitrateClass | string;

  /**
   * Specify the codec profile for this output. Choose High, 8-bit, 4:2:0 (HIGH) or High, 10-bit, 4:2:2 (HIGH_422). These profiles are specified in ITU-T H.264.
   */
  CodecProfile?: Xavc4kProfileCodecProfile | string;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (XavcAdaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization (adaptiveQuantization) to a value other than Off (OFF) or Auto (AUTO). Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.
   */
  FlickerAdaptiveQuantization?: XavcFlickerAdaptiveQuantization | string;

  /**
   * Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow (ENABLED) to allow the encoder to use B-frames as reference frames. Choose Don't allow (DISABLED) to prevent the encoder from using B-frames as reference frames.
   */
  GopBReference?: XavcGopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Specify the size of the buffer that MediaConvert uses in the HRD buffer model for this output. Specify this value in bits; for example, enter five megabits as 5000000. When you don't set this value, or you set it to zero, MediaConvert calculates the default by doubling the bitrate of this output point.
   */
  HrdBufferSize?: number;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: Xavc4kProfileQualityTuningLevel | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;
}

/**
 * @public
 * @enum
 */
export const XavcHdIntraCbgProfileClass = {
  CLASS_100: "CLASS_100",
  CLASS_200: "CLASS_200",
  CLASS_50: "CLASS_50",
} as const;

/**
 * @public
 */
export type XavcHdIntraCbgProfileClass = (typeof XavcHdIntraCbgProfileClass)[keyof typeof XavcHdIntraCbgProfileClass];

/**
 * @public
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD_INTRA_CBG.
 */
export interface XavcHdIntraCbgProfileSettings {
  /**
   * Specify the XAVC Intra HD (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  XavcClass?: XavcHdIntraCbgProfileClass | string;
}

/**
 * @public
 * @enum
 */
export const XavcHdProfileBitrateClass = {
  BITRATE_CLASS_25: "BITRATE_CLASS_25",
  BITRATE_CLASS_35: "BITRATE_CLASS_35",
  BITRATE_CLASS_50: "BITRATE_CLASS_50",
} as const;

/**
 * @public
 */
export type XavcHdProfileBitrateClass = (typeof XavcHdProfileBitrateClass)[keyof typeof XavcHdProfileBitrateClass];

/**
 * @public
 * @enum
 */
export const XavcInterlaceMode = {
  BOTTOM_FIELD: "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD: "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD: "FOLLOW_TOP_FIELD",
  PROGRESSIVE: "PROGRESSIVE",
  TOP_FIELD: "TOP_FIELD",
} as const;

/**
 * @public
 */
export type XavcInterlaceMode = (typeof XavcInterlaceMode)[keyof typeof XavcInterlaceMode];

/**
 * @public
 * @enum
 */
export const XavcHdProfileQualityTuningLevel = {
  MULTI_PASS_HQ: "MULTI_PASS_HQ",
  SINGLE_PASS: "SINGLE_PASS",
  SINGLE_PASS_HQ: "SINGLE_PASS_HQ",
} as const;

/**
 * @public
 */
export type XavcHdProfileQualityTuningLevel =
  (typeof XavcHdProfileQualityTuningLevel)[keyof typeof XavcHdProfileQualityTuningLevel];

/**
 * @public
 * @enum
 */
export const XavcHdProfileTelecine = {
  HARD: "HARD",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type XavcHdProfileTelecine = (typeof XavcHdProfileTelecine)[keyof typeof XavcHdProfileTelecine];

/**
 * @public
 * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD.
 */
export interface XavcHdProfileSettings {
  /**
   * Specify the XAVC HD (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.
   */
  BitrateClass?: XavcHdProfileBitrateClass | string;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (XavcAdaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization (adaptiveQuantization) to a value other than Off (OFF) or Auto (AUTO). Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.
   */
  FlickerAdaptiveQuantization?: XavcFlickerAdaptiveQuantization | string;

  /**
   * Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow (ENABLED) to allow the encoder to use B-frames as reference frames. Choose Don't allow (DISABLED) to prevent the encoder from using B-frames as reference frames.
   */
  GopBReference?: XavcGopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Specify the size of the buffer that MediaConvert uses in the HRD buffer model for this output. Specify this value in bits; for example, enter five megabits as 5000000. When you don't set this value, or you set it to zero, MediaConvert calculates the default by doubling the bitrate of this output point.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.
   */
  InterlaceMode?: XavcInterlaceMode | string;

  /**
   * Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.
   */
  QualityTuningLevel?: XavcHdProfileQualityTuningLevel | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Ignore this setting unless you set Frame rate (framerateNumerator divided by framerateDenominator) to 29.970. If your input framerate is 23.976, choose Hard (HARD). Otherwise, keep the default value None (NONE). For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-telecine-and-inverse-telecine.html.
   */
  Telecine?: XavcHdProfileTelecine | string;
}

/**
 * @public
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value XAVC.
 */
export interface XavcSettings {
  /**
   * Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set Adaptive quantization (adaptiveQuantization) to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization to Off (OFF). Related settings: The value that you choose here applies to the following settings: Flicker adaptive quantization (flickerAdaptiveQuantization), Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).
   */
  AdaptiveQuantization?: XavcAdaptiveQuantization | string;

  /**
   * Optional. Choose a specific entropy encoding mode only when you want to override XAVC recommendations. If you choose the value auto, MediaConvert uses the mode that the XAVC file format specifies given this output's operating point.
   */
  EntropyEncoding?: XavcEntropyEncoding | string;

  /**
   * If you are using the console, use the Frame rate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list. The framerates shown in the dropdown list are decimal approximations of fractions. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate that you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: XavcFramerateControl | string;

  /**
   * Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.
   */
  FramerateConversionAlgorithm?: XavcFramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Frame rate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateNumerator?: number;

  /**
   * Specify the XAVC profile for this output. For more information, see the Sony documentation at https://www.xavc-info.org/. Note that MediaConvert doesn't support the interlaced video XAVC operating points for XAVC_HD_INTRA_CBG. To create an interlaced XAVC output, choose the profile XAVC_HD.
   */
  Profile?: XavcProfile | string;

  /**
   * Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Frame rate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.
   */
  SlowPal?: XavcSlowPal | string;

  /**
   * Ignore this setting unless your downstream workflow requires that you specify it explicitly. Otherwise, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, for flat quantization. Choose the value 1 or 16 to use the default JVT softening quantization matricies from the H.264 specification. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.
   */
  Softness?: number;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (adaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.
   */
  SpatialAdaptiveQuantization?: XavcSpatialAdaptiveQuantization | string;

  /**
   * The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (adaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal adaptive quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).
   */
  TemporalAdaptiveQuantization?: XavcTemporalAdaptiveQuantization | string;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_CBG.
   */
  Xavc4kIntraCbgProfileSettings?: Xavc4kIntraCbgProfileSettings;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_VBR.
   */
  Xavc4kIntraVbrProfileSettings?: Xavc4kIntraVbrProfileSettings;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K.
   */
  Xavc4kProfileSettings?: Xavc4kProfileSettings;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD_INTRA_CBG.
   */
  XavcHdIntraCbgProfileSettings?: XavcHdIntraCbgProfileSettings;

  /**
   * Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD.
   */
  XavcHdProfileSettings?: XavcHdProfileSettings;
}

/**
 * @public
 * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings
 */
export interface VideoCodecSettings {
  /**
   * Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.
   */
  Av1Settings?: Av1Settings;

  /**
   * Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf.
   */
  AvcIntraSettings?: AvcIntraSettings;

  /**
   * Specifies the video codec. This must be equal to one of the enum values defined by the object VideoCodec.
   */
  Codec?: VideoCodec | string;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
   */
  FrameCaptureSettings?: FrameCaptureSettings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
   */
  H264Settings?: H264Settings;

  /**
   * Settings for H265 codec
   */
  H265Settings?: H265Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
   */
  Mpeg2Settings?: Mpeg2Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
   */
  ProresSettings?: ProresSettings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VC3
   */
  Vc3Settings?: Vc3Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8.
   */
  Vp8Settings?: Vp8Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9.
   */
  Vp9Settings?: Vp9Settings;

  /**
   * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value XAVC.
   */
  XavcSettings?: XavcSettings;
}

/**
 * @public
 * @enum
 */
export const ColorMetadata = {
  IGNORE: "IGNORE",
  INSERT: "INSERT",
} as const;

/**
 * @public
 */
export type ColorMetadata = (typeof ColorMetadata)[keyof typeof ColorMetadata];

/**
 * @public
 * @enum
 */
export const DropFrameTimecode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DropFrameTimecode = (typeof DropFrameTimecode)[keyof typeof DropFrameTimecode];

/**
 * @public
 * @enum
 */
export const RespondToAfd = {
  NONE: "NONE",
  PASSTHROUGH: "PASSTHROUGH",
  RESPOND: "RESPOND",
} as const;

/**
 * @public
 */
export type RespondToAfd = (typeof RespondToAfd)[keyof typeof RespondToAfd];

/**
 * @public
 * @enum
 */
export const ScalingBehavior = {
  DEFAULT: "DEFAULT",
  STRETCH_TO_OUTPUT: "STRETCH_TO_OUTPUT",
} as const;

/**
 * @public
 */
export type ScalingBehavior = (typeof ScalingBehavior)[keyof typeof ScalingBehavior];

/**
 * @public
 * @enum
 */
export const VideoTimecodeInsertion = {
  DISABLED: "DISABLED",
  PIC_TIMING_SEI: "PIC_TIMING_SEI",
} as const;

/**
 * @public
 */
export type VideoTimecodeInsertion = (typeof VideoTimecodeInsertion)[keyof typeof VideoTimecodeInsertion];

/**
 * @public
 * Specify YUV limits and RGB tolerances when you set Sample range conversion to Limited range clip.
 */
export interface ClipLimits {
  /**
   * Specify the Maximum RGB color sample range tolerance for your output. MediaConvert corrects any YUV values that, when converted to RGB, would be outside the upper tolerance that you specify. Enter an integer from 90 to 105 as an offset percentage to the maximum possible value. Leave blank to use the default value 100. When you specify a value for Maximum RGB tolerance, you must set Sample range conversion to Limited range clip.
   */
  MaximumRGBTolerance?: number;

  /**
   * Specify the Maximum YUV color sample limit. MediaConvert conforms any pixels in your input above the value that you specify to typical limited range bounds. Enter an integer from 920 to 1023. Leave blank to use the default value 940. The value that you enter applies to 10-bit ranges. For 8-bit ranges, MediaConvert automatically scales this value down. When you specify a value for Maximum YUV, you must set Sample range conversion to Limited range clip.
   */
  MaximumYUV?: number;

  /**
   * Specify the Minimum RGB color sample range tolerance for your output. MediaConvert corrects any YUV values that, when converted to RGB, would be outside the lower tolerance that you specify. Enter an integer from -5 to 10 as an offset percentage to the minimum possible value. Leave blank to use the default value 0. When you specify a value for Minimum RGB tolerance, you must set Sample range conversion to Limited range clip.
   */
  MinimumRGBTolerance?: number;

  /**
   * Specify the Minimum YUV color sample limit. MediaConvert conforms any pixels in your input below the value that you specify to typical limited range bounds. Enter an integer from 0 to 128. Leave blank to use the default value 64. The value that you enter applies to 10-bit ranges. For 8-bit ranges, MediaConvert automatically scales this value down. When you specify a value for Minumum YUV, you must set Sample range conversion to Limited range clip.
   */
  MinimumYUV?: number;
}

/**
 * @public
 * @enum
 */
export const ColorSpaceConversion = {
  FORCE_601: "FORCE_601",
  FORCE_709: "FORCE_709",
  FORCE_HDR10: "FORCE_HDR10",
  FORCE_HLG_2020: "FORCE_HLG_2020",
  FORCE_P3D65_HDR: "FORCE_P3D65_HDR",
  FORCE_P3D65_SDR: "FORCE_P3D65_SDR",
  FORCE_P3DCI: "FORCE_P3DCI",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ColorSpaceConversion = (typeof ColorSpaceConversion)[keyof typeof ColorSpaceConversion];

/**
 * @public
 * @enum
 */
export const HDRToSDRToneMapper = {
  PRESERVE_DETAILS: "PRESERVE_DETAILS",
  VIBRANT: "VIBRANT",
} as const;

/**
 * @public
 */
export type HDRToSDRToneMapper = (typeof HDRToSDRToneMapper)[keyof typeof HDRToSDRToneMapper];

/**
 * @public
 * @enum
 */
export const SampleRangeConversion = {
  LIMITED_RANGE_CLIP: "LIMITED_RANGE_CLIP",
  LIMITED_RANGE_SQUEEZE: "LIMITED_RANGE_SQUEEZE",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type SampleRangeConversion = (typeof SampleRangeConversion)[keyof typeof SampleRangeConversion];

/**
 * @public
 * Settings for color correction.
 */
export interface ColorCorrector {
  /**
   * Brightness level.
   */
  Brightness?: number;

  /**
   * Specify YUV limits and RGB tolerances when you set Sample range conversion to Limited range clip.
   */
  ClipLimits?: ClipLimits;

  /**
   * Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses tone mapping to approximate the outcome of manually regrading from HDR to SDR. When you specify an output color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:
   *   * HDR 10: BT.2020, PQ, BT.2020 non-constant
   *   * HLG 2020: BT.2020, HLG, BT.2020 non-constant
   *   * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709
   *   * P3D65 (SDR): Display P3, sRGB, BT.709
   *   * P3D65 (HDR): Display P3, PQ, BT.709
   */
  ColorSpaceConversion?: ColorSpaceConversion | string;

  /**
   * Contrast level.
   */
  Contrast?: number;

  /**
   * Use these settings when you convert to the HDR 10 color space. Specify the SMPTE ST 2086 Mastering Display Color Volume static metadata that you want signaled in the output. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. When you set Color space conversion (ColorSpaceConversion) to HDR 10 (FORCE_HDR10), these settings are required. You must set values for Max frame average light level (maxFrameAverageLightLevel) and Max content light level (maxContentLightLevel); these settings don't have a default value. The default values for the other HDR 10 metadata settings are defined by the P3D65 color space. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   */
  Hdr10Metadata?: Hdr10Metadata;

  /**
   * Specify how MediaConvert maps brightness and colors from your HDR input to your SDR output. The mode that you select represents a creative choice, with different tradeoffs in the details and tones of your output. To maintain details in bright or saturated areas of your output: Choose Preserve details. For some sources, your SDR output may look less bright and less saturated when compared to your HDR source. MediaConvert automatically applies this mode for HLG sources, regardless of your choice. For a bright and saturated output: Choose Vibrant. We recommend that you choose this mode when any of your source content is HDR10, and for the best results when it is mastered for 1000 nits. You may notice loss of details in bright or saturated areas of your output. HDR to SDR tone mapping has no effect when your input is SDR.
   */
  HdrToSdrToneMapper?: HDRToSDRToneMapper | string;

  /**
   * Hue in degrees.
   */
  Hue?: number;

  /**
   * Specify how MediaConvert limits the color sample range for this output. To create a limited range output from a full range input: Choose Limited range squeeze. For full range inputs, MediaConvert performs a linear offset to color samples equally across all pixels and frames. Color samples in 10-bit outputs are limited to 64 through 940, and 8-bit outputs are limited to 16 through 235. Note: For limited range inputs, values for color samples are passed through to your output unchanged. MediaConvert does not limit the sample range. To correct pixels in your input that are out of range or out of gamut: Choose Limited range clip. Use for broadcast applications. MediaConvert conforms any pixels outside of the values that you specify under Minimum YUV and Maximum YUV to limited range bounds. MediaConvert also corrects any YUV values that, when converted to RGB, would be outside the bounds you specify under Minimum RGB tolerance and Maximum RGB tolerance. With either limited range conversion, MediaConvert writes the sample range metadata in the output.
   */
  SampleRangeConversion?: SampleRangeConversion | string;

  /**
   * Saturation level.
   */
  Saturation?: number;

  /**
   * Specify the reference white level, in nits, for all of your SDR inputs. Use to correct brightness levels within HDR10 outputs. The following color metadata must be present in your SDR input: color primaries, transfer characteristics, and matrix coefficients. If your SDR input has missing color metadata, or if you want to correct input color metadata, manually specify a color space in the input video selector. For 1,000 nit peak brightness displays, we recommend that you set SDR reference white level to 203 (according to ITU-R BT.2408). Leave blank to use the default value of 100, or specify an integer from 100 to 1000.
   */
  SdrReferenceWhiteLevel?: number;
}

/**
 * @public
 * @enum
 */
export const DeinterlaceAlgorithm = {
  BLEND: "BLEND",
  BLEND_TICKER: "BLEND_TICKER",
  INTERPOLATE: "INTERPOLATE",
  INTERPOLATE_TICKER: "INTERPOLATE_TICKER",
} as const;

/**
 * @public
 */
export type DeinterlaceAlgorithm = (typeof DeinterlaceAlgorithm)[keyof typeof DeinterlaceAlgorithm];

/**
 * @public
 * @enum
 */
export const DeinterlacerControl = {
  FORCE_ALL_FRAMES: "FORCE_ALL_FRAMES",
  NORMAL: "NORMAL",
} as const;

/**
 * @public
 */
export type DeinterlacerControl = (typeof DeinterlacerControl)[keyof typeof DeinterlacerControl];

/**
 * @public
 * @enum
 */
export const DeinterlacerMode = {
  ADAPTIVE: "ADAPTIVE",
  DEINTERLACE: "DEINTERLACE",
  INVERSE_TELECINE: "INVERSE_TELECINE",
} as const;

/**
 * @public
 */
export type DeinterlacerMode = (typeof DeinterlacerMode)[keyof typeof DeinterlacerMode];

/**
 * @public
 * Settings for deinterlacer
 */
export interface Deinterlacer {
  /**
   * Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.
   */
  Algorithm?: DeinterlaceAlgorithm | string;

  /**
   * - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is a good chance that the metadata has tagged frames as progressive when they are not progressive. Do not turn on otherwise; processing frames that are already progressive into progressive will probably result in lower quality video.
   */
  Control?: DeinterlacerControl | string;

  /**
   * Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.
   */
  Mode?: DeinterlacerMode | string;
}

/**
 * @public
 * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
 */
export interface DolbyVisionLevel6Metadata {
  /**
   * Maximum Content Light Level. Static HDR metadata that corresponds to the brightest pixel in the entire stream. Measured in nits.
   */
  MaxCll?: number;

  /**
   * Maximum Frame-Average Light Level. Static HDR metadata that corresponds to the highest frame-average brightness in the entire stream. Measured in nits.
   */
  MaxFall?: number;
}

/**
 * @public
 * @enum
 */
export const DolbyVisionLevel6Mode = {
  PASSTHROUGH: "PASSTHROUGH",
  RECALCULATE: "RECALCULATE",
  SPECIFY: "SPECIFY",
} as const;

/**
 * @public
 */
export type DolbyVisionLevel6Mode = (typeof DolbyVisionLevel6Mode)[keyof typeof DolbyVisionLevel6Mode];

/**
 * @public
 * @enum
 */
export const DolbyVisionMapping = {
  HDR10_1000: "HDR10_1000",
  HDR10_NOMAP: "HDR10_NOMAP",
} as const;

/**
 * @public
 */
export type DolbyVisionMapping = (typeof DolbyVisionMapping)[keyof typeof DolbyVisionMapping];

/**
 * @public
 * @enum
 */
export const DolbyVisionProfile = {
  PROFILE_5: "PROFILE_5",
  PROFILE_8_1: "PROFILE_8_1",
} as const;

/**
 * @public
 */
export type DolbyVisionProfile = (typeof DolbyVisionProfile)[keyof typeof DolbyVisionProfile];

/**
 * @public
 * Create Dolby Vision Profile 5 or Profile 8.1 compatible video output.
 */
export interface DolbyVision {
  /**
   * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
   */
  L6Metadata?: DolbyVisionLevel6Metadata;

  /**
   * Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies.
   */
  L6Mode?: DolbyVisionLevel6Mode | string;

  /**
   * Required when you set Dolby Vision Profile to Profile 8.1. When you set Content mapping to None, content mapping is not applied to the HDR10-compatible signal. Depending on the source peak nit level, clipping might occur on HDR devices without Dolby Vision. When you set Content mapping to HDR10 1000, the transcoder creates a 1,000 nits peak HDR10-compatible signal by applying static content mapping to the source. This mode is speed-optimized for PQ10 sources with metadata that is created from analysis. For graded Dolby Vision content, be aware that creative intent might not be guaranteed with extreme 1,000 nits trims.
   */
  Mapping?: DolbyVisionMapping | string;

  /**
   * Required when you enable Dolby Vision. Use Profile 5 to include frame-interleaved Dolby Vision metadata in your output. Your input must include Dolby Vision metadata or an HDR10 YUV color space. Use Profile 8.1 to include frame-interleaved Dolby Vision metadata and HDR10 metadata in your output. Your input must include Dolby Vision metadata.
   */
  Profile?: DolbyVisionProfile | string;
}

/**
 * @public
 * Setting for HDR10+ metadata insertion
 */
export interface Hdr10Plus {
  /**
   * Specify the HDR10+ mastering display normalized peak luminance, in nits. This is the normalized actual peak luminance of the mastering display, as defined by ST 2094-40.
   */
  MasteringMonitorNits?: number;

  /**
   * Specify the HDR10+ target display nominal peak luminance, in nits. This is the nominal maximum luminance of the target display as defined by ST 2094-40.
   */
  TargetMonitorNits?: number;
}

/**
 * @public
 * @enum
 */
export const NoiseReducerFilter = {
  BILATERAL: "BILATERAL",
  CONSERVE: "CONSERVE",
  GAUSSIAN: "GAUSSIAN",
  LANCZOS: "LANCZOS",
  MEAN: "MEAN",
  SHARPEN: "SHARPEN",
  SPATIAL: "SPATIAL",
  TEMPORAL: "TEMPORAL",
} as const;

/**
 * @public
 */
export type NoiseReducerFilter = (typeof NoiseReducerFilter)[keyof typeof NoiseReducerFilter];

/**
 * @public
 * Settings for a noise reducer filter
 */
export interface NoiseReducerFilterSettings {
  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   */
  Strength?: number;
}

/**
 * @public
 * Noise reducer filter settings for spatial filter.
 */
export interface NoiseReducerSpatialFilterSettings {
  /**
   * Specify strength of post noise reduction sharpening filter, with 0 disabling the filter and 3 enabling it at maximum strength.
   */
  PostFilterSharpenStrength?: number;

  /**
   * The speed of the filter, from -2 (lower speed) to 3 (higher speed), with 0 being the nominal value.
   */
  Speed?: number;

  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   */
  Strength?: number;
}

/**
 * @public
 * @enum
 */
export const NoiseFilterPostTemporalSharpening = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type NoiseFilterPostTemporalSharpening =
  (typeof NoiseFilterPostTemporalSharpening)[keyof typeof NoiseFilterPostTemporalSharpening];

/**
 * @public
 * @enum
 */
export const NoiseFilterPostTemporalSharpeningStrength = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type NoiseFilterPostTemporalSharpeningStrength =
  (typeof NoiseFilterPostTemporalSharpeningStrength)[keyof typeof NoiseFilterPostTemporalSharpeningStrength];

/**
 * @public
 * Noise reducer filter settings for temporal filter.
 */
export interface NoiseReducerTemporalFilterSettings {
  /**
   * Use Aggressive mode for content that has complex motion. Higher values produce stronger temporal filtering. This filters highly complex scenes more aggressively and creates better VQ for low bitrate outputs.
   */
  AggressiveMode?: number;

  /**
   * When you set Noise reducer (noiseReducer) to Temporal (TEMPORAL), the bandwidth and sharpness of your output is reduced. You can optionally use Post temporal sharpening (postTemporalSharpening) to apply sharpening to the edges of your output. Note that Post temporal sharpening will also make the bandwidth reduction from the Noise reducer smaller. The default behavior, Auto (AUTO), allows the transcoder to determine whether to apply sharpening, depending on your input type and quality. When you set Post temporal sharpening to Enabled (ENABLED), specify how much sharpening is applied using Post temporal sharpening strength (postTemporalSharpeningStrength). Set Post temporal sharpening to Disabled (DISABLED) to not apply sharpening.
   */
  PostTemporalSharpening?: NoiseFilterPostTemporalSharpening | string;

  /**
   * Use Post temporal sharpening strength (postTemporalSharpeningStrength) to define the amount of sharpening the transcoder applies to your output. Set Post temporal sharpening strength to Low (LOW), Medium (MEDIUM), or High (HIGH) to indicate the amount of sharpening.
   */
  PostTemporalSharpeningStrength?: NoiseFilterPostTemporalSharpeningStrength | string;

  /**
   * The speed of the filter (higher number is faster). Low setting reduces bit rate at the cost of transcode time, high setting improves transcode time at the cost of bit rate.
   */
  Speed?: number;

  /**
   * Specify the strength of the noise reducing filter on this output. Higher values produce stronger filtering. We recommend the following value ranges, depending on the result that you want: * 0-2 for complexity reduction with minimal sharpness loss * 2-8 for complexity reduction with image preservation * 8-16 for a high level of complexity reduction
   */
  Strength?: number;
}

/**
 * @public
 * Enable the Noise reducer feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer, you must also select a value for Noise reducer filter. For AVC outputs, when you include Noise reducer, you cannot include the Bandwidth reduction filter.
 */
export interface NoiseReducer {
  /**
   * Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion.
   */
  Filter?: NoiseReducerFilter | string;

  /**
   * Settings for a noise reducer filter
   */
  FilterSettings?: NoiseReducerFilterSettings;

  /**
   * Noise reducer filter settings for spatial filter.
   */
  SpatialFilterSettings?: NoiseReducerSpatialFilterSettings;

  /**
   * Noise reducer filter settings for temporal filter.
   */
  TemporalFilterSettings?: NoiseReducerTemporalFilterSettings;
}

/**
 * @public
 * @enum
 */
export const WatermarkingStrength = {
  DEFAULT: "DEFAULT",
  LIGHTER: "LIGHTER",
  LIGHTEST: "LIGHTEST",
  STRONGER: "STRONGER",
  STRONGEST: "STRONGEST",
} as const;

/**
 * @public
 */
export type WatermarkingStrength = (typeof WatermarkingStrength)[keyof typeof WatermarkingStrength];

/**
 * @public
 * For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.
 */
export interface NexGuardFileMarkerSettings {
  /**
   * Use the base64 license string that Nagra provides you. Enter it directly in your JSON job specification or in the console. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job.
   */
  License?: string;

  /**
   * Specify the payload ID that you want associated with this output. Valid values vary depending on your Nagra NexGuard forensic watermarking workflow. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job. For PreRelease Content (NGPR/G2), specify an integer from 1 through 4,194,303. You must generate a unique ID for each asset you watermark, and keep a record of which ID you have assigned to each asset. Neither Nagra nor MediaConvert keep track of the relationship between output files and your IDs. For OTT Streaming, create two adaptive bitrate (ABR) stacks for each asset. Do this by setting up two output groups. For one output group, set the value of Payload ID (payload) to 0 in every output. For the other output group, set Payload ID (payload) to 1 in every output.
   */
  Payload?: number;

  /**
   * Enter one of the watermarking preset strings that Nagra provides you. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job.
   */
  Preset?: string;

  /**
   * Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value.
   */
  Strength?: WatermarkingStrength | string;
}

/**
 * @public
 * If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.
 */
export interface PartnerWatermarking {
  /**
   * For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.
   */
  NexguardFileMarkerSettings?: NexGuardFileMarkerSettings;
}

/**
 * @public
 * @enum
 */
export const TimecodeBurninPosition = {
  BOTTOM_CENTER: "BOTTOM_CENTER",
  BOTTOM_LEFT: "BOTTOM_LEFT",
  BOTTOM_RIGHT: "BOTTOM_RIGHT",
  MIDDLE_CENTER: "MIDDLE_CENTER",
  MIDDLE_LEFT: "MIDDLE_LEFT",
  MIDDLE_RIGHT: "MIDDLE_RIGHT",
  TOP_CENTER: "TOP_CENTER",
  TOP_LEFT: "TOP_LEFT",
  TOP_RIGHT: "TOP_RIGHT",
} as const;

/**
 * @public
 */
export type TimecodeBurninPosition = (typeof TimecodeBurninPosition)[keyof typeof TimecodeBurninPosition];

/**
 * @public
 * Settings for burning the output timecode and specified prefix into the output.
 */
export interface TimecodeBurnin {
  /**
   * Use Font Size (FontSize) to set the font size of any burned-in timecode. Valid values are 10, 16, 32, 48.
   */
  FontSize?: number;

  /**
   * Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.
   */
  Position?: TimecodeBurninPosition | string;

  /**
   * Use Prefix (Prefix) to place ASCII characters before any burned-in timecode. For example, a prefix of "EZ-" will result in the timecode "EZ-00:00:00:00". Provide either the characters themselves or the ASCII code equivalents. The supported range of characters is 0x20 through 0x7e. This includes letters, numbers, and all special characters represented on a standard English keyboard.
   */
  Prefix?: string;
}

/**
 * @public
 * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
 */
export interface VideoPreprocessor {
  /**
   * Use these settings to convert the color space or to modify properties such as hue and contrast for this output. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/converting-the-color-space.html.
   */
  ColorCorrector?: ColorCorrector;

  /**
   * Use the deinterlacer to produce smoother motion and a clearer picture. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-scan-type.html.
   */
  Deinterlacer?: Deinterlacer;

  /**
   * Enable Dolby Vision feature to produce Dolby Vision compatible video output.
   */
  DolbyVision?: DolbyVision;

  /**
   * Enable HDR10+ analyis and metadata injection. Compatible with HEVC only.
   */
  Hdr10Plus?: Hdr10Plus;

  /**
   * Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * Enable the Noise reducer feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer, you must also select a value for Noise reducer filter. For AVC outputs, when you include Noise reducer, you cannot include the Bandwidth reduction filter.
   */
  NoiseReducer?: NoiseReducer;

  /**
   * If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.
   */
  PartnerWatermarking?: PartnerWatermarking;

  /**
   * Settings for burning the output timecode and specified prefix into the output.
   */
  TimecodeBurnin?: TimecodeBurnin;
}

/**
 * @public
 * Settings related to video encoding of your output. The specific video settings depend on the video codec that you choose. When you work directly in your JSON job specification, include one instance of Video description (VideoDescription) per output.
 */
export interface VideoDescription {
  /**
   * This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.
   */
  AntiAlias?: AntiAlias | string;

  /**
   * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings
   */
  CodecSettings?: VideoCodecSettings;

  /**
   * Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default.
   */
  ColorMetadata?: ColorMetadata | string;

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame.
   */
  Crop?: Rectangle;

  /**
   * Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.
   */
  DropFrameTimecode?: DropFrameTimecode | string;

  /**
   * Applies only if you set AFD Signaling(AfdSignaling) to Fixed (FIXED). Use Fixed (FixedAfd) to specify a four-bit AFD value which the service will write on all frames of this video output.
   */
  FixedAfd?: number;

  /**
   * Use the Height (Height) setting to define the video resolution height for this output. Specify in pixels. If you don't provide a value here, the service will use the input height.
   */
  Height?: number;

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black.
   */
  Position?: Rectangle;

  /**
   * Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.
   */
  RespondToAfd?: RespondToAfd | string;

  /**
   * Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output.
   */
  ScalingBehavior?: ScalingBehavior | string;

  /**
   * Use Sharpness (Sharpness) setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.
   */
  Sharpness?: number;

  /**
   * Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.
   */
  TimecodeInsertion?: VideoTimecodeInsertion | string;

  /**
   * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
   */
  VideoPreprocessors?: VideoPreprocessor;

  /**
   * Use Width (Width) to define the video resolution width, in pixels, for this output. If you don't provide a value here, the service will use the input width.
   */
  Width?: number;
}

/**
 * @public
 * Each output in your job is a collection of settings that describes how you want MediaConvert to encode a single output file or stream. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/create-outputs.html.
 */
export interface Output {
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: AudioDescription[];

  /**
   * (CaptionDescriptions) contains groups of captions settings. For each output that has captions, include one instance of (CaptionDescriptions). (CaptionDescriptions) can contain multiple groups of captions settings.
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * Container specific settings.
   */
  ContainerSettings?: ContainerSettings;

  /**
   * Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * WebM container, webm * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)
   */
  Extension?: string;

  /**
   * Use Name modifier (NameModifier) to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier (NameModifier) is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group.
   */
  NameModifier?: string;

  /**
   * Specific settings for this type of output.
   */
  OutputSettings?: OutputSettings;

  /**
   * Use Preset (Preset) to specify a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both.
   */
  Preset?: string;

  /**
   * VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.
   */
  VideoDescription?: VideoDescription;
}

/**
 * @public
 * Group of outputs
 */
export interface OutputGroup {
  /**
   * Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.
   */
  AutomatedEncodingSettings?: AutomatedEncodingSettings;

  /**
   * Use Custom Group Name (CustomName) to specify a name for the output group. This value is displayed on the console and can make your job settings JSON more human-readable. It does not affect your outputs. Use up to twelve characters that are either letters, numbers, spaces, or underscores.
   */
  CustomName?: string;

  /**
   * Name of the output group
   */
  Name?: string;

  /**
   * Output Group settings, including type
   */
  OutputGroupSettings?: OutputGroupSettings;

  /**
   * This object holds groups of encoding settings, one group of settings per output.
   */
  Outputs?: Output[];
}

/**
 * @public
 * @enum
 */
export const TimecodeSource = {
  EMBEDDED: "EMBEDDED",
  SPECIFIEDSTART: "SPECIFIEDSTART",
  ZEROBASED: "ZEROBASED",
} as const;

/**
 * @public
 */
export type TimecodeSource = (typeof TimecodeSource)[keyof typeof TimecodeSource];

/**
 * @public
 * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
 */
export interface TimecodeConfig {
  /**
   * If you use an editing platform that relies on an anchor timecode, use Anchor Timecode (Anchor) to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores frame rate conversion. System behavior for Anchor Timecode varies depending on your setting for Source (TimecodeSource). * If Source (TimecodeSource) is set to Specified Start (SPECIFIEDSTART), the first input frame is the specified value in Start Timecode (Start). Anchor Timecode (Anchor) and Start Timecode (Start) are used calculate output timecode. * If Source (TimecodeSource) is set to Start at 0 (ZEROBASED) the first frame is 00:00:00:00. * If Source (TimecodeSource) is set to Embedded (EMBEDDED), the first frame is the timecode value on the first input frame of the input.
   */
  Anchor?: string;

  /**
   * Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.
   */
  Source?: TimecodeSource | string;

  /**
   * Only use when you set Source (TimecodeSource) to Specified start (SPECIFIEDSTART). Use Start timecode (Start) to specify the timecode for the initial frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF).
   */
  Start?: string;

  /**
   * Only applies to outputs that support program-date-time stamp. Use Timestamp offset (TimestampOffset) to overwrite the timecode date without affecting the time and frame number. Provide the new date as a string in the format "yyyy-mm-dd". To use Time stamp offset, you must also enable Insert program-date-time (InsertProgramDateTime) in the output settings. For example, if the date part of your timecodes is 2002-1-25 and you want to change it to one year later, set Timestamp offset (TimestampOffset) to 2003-1-25.
   */
  TimestampOffset?: string;
}

/**
 * @public
 * Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).
 */
export interface TimedMetadataInsertion {
  /**
   * Id3Insertions contains the array of Id3Insertion instances.
   */
  Id3Insertions?: Id3Insertion[];
}

/**
 * @public
 * JobSettings contains all the transcode settings for a job.
 */
export interface JobSettings {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   */
  AdAvailOffset?: number;

  /**
   * Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
   */
  Esam?: EsamSettings;

  /**
   * If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.
   */
  ExtendedDataServices?: ExtendedDataServices;

  /**
   * Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.
   */
  Inputs?: Input[];

  /**
   * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
   */
  KantarWatermark?: KantarWatermarkSettings;

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
   */
  MotionImageInserter?: MotionImageInserter;

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]
   */
  NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;

  /**
   * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   */
  OutputGroups?: OutputGroup[];

  /**
   * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
   */
  TimecodeConfig?: TimecodeConfig;

  /**
   * Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).
   */
  TimedMetadataInsertion?: TimedMetadataInsertion;
}

/**
 * @public
 * @enum
 */
export const SimulateReservedQueue = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type SimulateReservedQueue = (typeof SimulateReservedQueue)[keyof typeof SimulateReservedQueue];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELED: "CANCELED",
  COMPLETE: "COMPLETE",
  ERROR: "ERROR",
  PROGRESSING: "PROGRESSING",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const StatusUpdateInterval = {
  SECONDS_10: "SECONDS_10",
  SECONDS_12: "SECONDS_12",
  SECONDS_120: "SECONDS_120",
  SECONDS_15: "SECONDS_15",
  SECONDS_180: "SECONDS_180",
  SECONDS_20: "SECONDS_20",
  SECONDS_240: "SECONDS_240",
  SECONDS_30: "SECONDS_30",
  SECONDS_300: "SECONDS_300",
  SECONDS_360: "SECONDS_360",
  SECONDS_420: "SECONDS_420",
  SECONDS_480: "SECONDS_480",
  SECONDS_540: "SECONDS_540",
  SECONDS_60: "SECONDS_60",
  SECONDS_600: "SECONDS_600",
} as const;

/**
 * @public
 */
export type StatusUpdateInterval = (typeof StatusUpdateInterval)[keyof typeof StatusUpdateInterval];

/**
 * @public
 * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
 */
export interface Timing {
  /**
   * The time, in Unix epoch format, that the transcoding job finished
   */
  FinishTime?: Date;

  /**
   * The time, in Unix epoch format, that transcoding for the job began.
   */
  StartTime?: Date;

  /**
   * The time, in Unix epoch format, that you submitted the job.
   */
  SubmitTime?: Date;
}

/**
 * @public
 * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 */
export interface Job {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED.
   */
  AccelerationStatus?: AccelerationStatus | string;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.
   */
  BillingTagsSource?: BillingTagsSource | string;

  /**
   * The time, in Unix epoch format in seconds, when the job got created.
   */
  CreatedAt?: Date;

  /**
   * A job's phase can be PROBING, TRANSCODING OR UPLOADING
   */
  CurrentPhase?: JobPhase | string;

  /**
   * Error code for the job
   */
  ErrorCode?: number;

  /**
   * Error message of Job
   */
  ErrorMessage?: string;

  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources
   */
  Id?: string;

  /**
   * An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.
   */
  JobPercentComplete?: number;

  /**
   * The job template that the job is created from, if it is created from a job template.
   */
  JobTemplate?: string;

  /**
   * Provides messages from the service about jobs that you have already successfully submitted.
   */
  Messages?: JobMessages;

  /**
   * List of output group details
   */
  OutputGroupDetails?: OutputGroupDetail[];

  /**
   * Relative priority on the job.
   */
  Priority?: number;

  /**
   * When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Queue?: string;

  /**
   * The job's queue hopping history.
   */
  QueueTransitions?: QueueTransition[];

  /**
   * The number of times that the service automatically attempted to process your job after encountering an error.
   */
  RetryCount?: number;

  /**
   * The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
   */
  Role: string | undefined;

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: JobSettings | undefined;

  /**
   * Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   */
  SimulateReservedQueue?: SimulateReservedQueue | string;

  /**
   * A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?: JobStatus | string;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
   */
  Timing?: Timing;

  /**
   * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   */
  UserMetadata?: Record<string, string>;
}

/**
 * @public
 * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
 */
export interface JobTemplateSettings {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   */
  AdAvailOffset?: number;

  /**
   * Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
   */
  Esam?: EsamSettings;

  /**
   * If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.
   */
  ExtendedDataServices?: ExtendedDataServices;

  /**
   * Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template. Using the API, you can include multiple inputs when referencing a job template.
   */
  Inputs?: InputTemplate[];

  /**
   * Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.
   */
  KantarWatermark?: KantarWatermarkSettings;

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.
   */
  MotionImageInserter?: MotionImageInserter;

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]
   */
  NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;

  /**
   * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   */
  OutputGroups?: OutputGroup[];

  /**
   * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
   */
  TimecodeConfig?: TimecodeConfig;

  /**
   * Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).
   */
  TimedMetadataInsertion?: TimedMetadataInsertion;
}

/**
 * @public
 * @enum
 */
export const Type = {
  CUSTOM: "CUSTOM",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
 */
export interface JobTemplate {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * An optional category you create to organize your job templates.
   */
  Category?: string;

  /**
   * The timestamp in epoch seconds for Job template creation.
   */
  CreatedAt?: Date;

  /**
   * An optional description you create for each job template.
   */
  Description?: string;

  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * The timestamp in epoch seconds when the Job template was last updated.
   */
  LastUpdated?: Date;

  /**
   * A name you create for each job template. Each name must be unique within your account.
   */
  Name: string | undefined;

  /**
   * Relative priority on the job.
   */
  Priority?: number;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user.
   */
  Type?: Type | string;
}

/**
 * @public
 * Settings for preset
 */
export interface PresetSettings {
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: AudioDescription[];

  /**
   * This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.
   */
  CaptionDescriptions?: CaptionDescriptionPreset[];

  /**
   * Container specific settings.
   */
  ContainerSettings?: ContainerSettings;

  /**
   * VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.
   */
  VideoDescription?: VideoDescription;
}

/**
 * @public
 * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
 */
export interface Preset {
  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * An optional category you create to organize your presets.
   */
  Category?: string;

  /**
   * The timestamp in epoch seconds for preset creation.
   */
  CreatedAt?: Date;

  /**
   * An optional description you create for each preset.
   */
  Description?: string;

  /**
   * The timestamp in epoch seconds when the preset was last updated.
   */
  LastUpdated?: Date;

  /**
   * A name you create for each preset. Each name must be unique within your account.
   */
  Name: string | undefined;

  /**
   * Settings for preset
   */
  Settings: PresetSettings | undefined;

  /**
   * A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user.
   */
  Type?: Type | string;
}

/**
 * @public
 * @enum
 */
export const PricingPlan = {
  ON_DEMAND: "ON_DEMAND",
  RESERVED: "RESERVED",
} as const;

/**
 * @public
 */
export type PricingPlan = (typeof PricingPlan)[keyof typeof PricingPlan];

/**
 * @public
 * @enum
 */
export const Commitment = {
  ONE_YEAR: "ONE_YEAR",
} as const;

/**
 * @public
 */
export type Commitment = (typeof Commitment)[keyof typeof Commitment];

/**
 * @public
 * @enum
 */
export const RenewalType = {
  AUTO_RENEW: "AUTO_RENEW",
  EXPIRE: "EXPIRE",
} as const;

/**
 * @public
 */
export type RenewalType = (typeof RenewalType)[keyof typeof RenewalType];

/**
 * @public
 * @enum
 */
export const ReservationPlanStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
} as const;

/**
 * @public
 */
export type ReservationPlanStatus = (typeof ReservationPlanStatus)[keyof typeof ReservationPlanStatus];

/**
 * @public
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface ReservationPlan {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment?: Commitment | string;

  /**
   * The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.
   */
  ExpiresAt?: Date;

  /**
   * The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.
   */
  PurchasedAt?: Date;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.
   */
  RenewalType?: RenewalType | string;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. When you increase this number, you extend your existing commitment with a new 12-month commitment for a larger number of RTS. The new commitment begins when you purchase the additional capacity. You can't decrease the number of RTS in your reserved queue.
   */
  ReservedSlots?: number;

  /**
   * Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.
   */
  Status?: ReservationPlanStatus | string;
}

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  ACTIVE: "ACTIVE",
  PAUSED: "PAUSED",
} as const;

/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];

/**
 * @public
 * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
 */
export interface Queue {
  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * The timestamp in epoch seconds for when you created the queue.
   */
  CreatedAt?: Date;

  /**
   * An optional description that you create for each queue.
   */
  Description?: string;

  /**
   * The timestamp in epoch seconds for when you most recently updated the queue.
   */
  LastUpdated?: Date;

  /**
   * A name that you create for each queue. Each name must be unique within your account.
   */
  Name: string | undefined;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
   */
  PricingPlan?: PricingPlan | string;

  /**
   * The estimated number of jobs with a PROGRESSING status.
   */
  ProgressingJobsCount?: number;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlan?: ReservationPlan;

  /**
   * Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus | string;

  /**
   * The estimated number of jobs with a SUBMITTED status.
   */
  SubmittedJobsCount?: number;

  /**
   * Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues.
   */
  Type?: Type | string;
}

/**
 * @public
 */
export interface AssociateCertificateRequest {
  /**
   * The ARN of the ACM certificate that you want to associate with your MediaConvert resource.
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateResponse {}

/**
 * @public
 * The service can't process your request because of a problem in the request. Please check your request form and syntax.
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * The service couldn't complete your request because there is a conflict with the current state of the resource.
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * You don't have permissions for this action with the credentials you sent.
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * The service encountered an unexpected condition and can't fulfill your request.
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * The resource you requested doesn't exist.
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * The Job ID of the job to be cancelled.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CancelJobResponse {}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * Optional. Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
   */
  BillingTagsSource?: BillingTagsSource | string;

  /**
   * Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.
   */
  ClientRequestToken?: string;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   */
  HopDestinations?: HopDestination[];

  /**
   * Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.
   */
  JobTemplate?: string;

  /**
   * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
   */
  Queue?: string;

  /**
   * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   */
  Role: string | undefined;

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: JobSettings | undefined;

  /**
   * Optional. Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   */
  SimulateReservedQueue?: SimulateReservedQueue | string;

  /**
   * Optional. Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows.
   */
  Tags?: Record<string, string>;

  /**
   * Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags.
   */
  UserMetadata?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

/**
 * @public
 */
export interface CreateJobTemplateRequest {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * Optional. A category for the job template you are creating
   */
  Category?: string;

  /**
   * Optional. A description of the job template you are creating.
   */
  Description?: string;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   */
  HopDestinations?: HopDestination[];

  /**
   * The name of the job template you are creating.
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

/**
 * @public
 */
export interface CreatePresetRequest {
  /**
   * Optional. A category for the preset you are creating.
   */
  Category?: string;

  /**
   * Optional. A description of the preset you are creating.
   */
  Description?: string;

  /**
   * The name of the preset you are creating.
   */
  Name: string | undefined;

  /**
   * Settings for preset
   */
  Settings: PresetSettings | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

/**
 * @public
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface ReservationPlanSettings {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment: Commitment | string | undefined;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.
   */
  RenewalType: RenewalType | string | undefined;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.
   */
  ReservedSlots: number | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * Optional. A description of the queue that you are creating.
   */
  Description?: string;

  /**
   * The name of the queue that you are creating.
   */
  Name: string | undefined;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.
   */
  PricingPlan?: PricingPlan | string;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * Initial state of the queue. If you create a paused queue, then jobs in that queue won't begin.
   */
  Status?: QueueStatus | string;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * The name of the job template to be deleted.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateResponse {}

/**
 * @public
 */
export interface DeletePolicyRequest {}

/**
 * @public
 */
export interface DeletePolicyResponse {}

/**
 * @public
 */
export interface DeletePresetRequest {
  /**
   * The name of the preset to be deleted.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePresetResponse {}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * The name of the queue that you want to delete.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueResponse {}

/**
 * @public
 * @enum
 */
export const DescribeEndpointsMode = {
  DEFAULT: "DEFAULT",
  GET_ONLY: "GET_ONLY",
} as const;

/**
 * @public
 */
export type DescribeEndpointsMode = (typeof DescribeEndpointsMode)[keyof typeof DescribeEndpointsMode];

/**
 * @public
 * DescribeEndpointsRequest
 */
export interface DescribeEndpointsRequest {
  /**
   * Optional. Max number of endpoints, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.
   */
  Mode?: DescribeEndpointsMode | string;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of endpoints.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * List of endpoints
   */
  Endpoints?: Endpoint[];

  /**
   * Use this string to request the next batch of endpoints.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DisassociateCertificateRequest {
  /**
   * The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateResponse {}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * the job ID of the job.
   */
  Id: string | undefined;
}
