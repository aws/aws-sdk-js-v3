// smithy-typescript generated code
export enum DvbddsHandling {
  NONE = "NONE",
  NO_DISPLAY_WINDOW = "NO_DISPLAY_WINDOW",
  SPECIFIED = "SPECIFIED",
}

export enum DvbSubSubtitleFallbackFont {
  BEST_MATCH = "BEST_MATCH",
  MONOSPACED_SANSSERIF = "MONOSPACED_SANSSERIF",
  MONOSPACED_SERIF = "MONOSPACED_SERIF",
  PROPORTIONAL_SANSSERIF = "PROPORTIONAL_SANSSERIF",
  PROPORTIONAL_SERIF = "PROPORTIONAL_SERIF",
}

export enum DvbSubtitleFontColor {
  AUTO = "AUTO",
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  HEX = "HEX",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubtitleOutlineColor {
  AUTO = "AUTO",
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubtitleShadowColor {
  AUTO = "AUTO",
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubtitleStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DvbSubtitlingType {
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  STANDARD = "STANDARD",
}

export enum DvbSubtitleTeletextSpacing {
  AUTO = "AUTO",
  FIXED_GRID = "FIXED_GRID",
  PROPORTIONAL = "PROPORTIONAL",
}

export enum ImscAccessibilitySubs {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum ImscStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum SccDestinationFramerate {
  FRAMERATE_23_97 = "FRAMERATE_23_97",
  FRAMERATE_24 = "FRAMERATE_24",
  FRAMERATE_25 = "FRAMERATE_25",
  FRAMERATE_29_97_DROPFRAME = "FRAMERATE_29_97_DROPFRAME",
  FRAMERATE_29_97_NON_DROPFRAME = "FRAMERATE_29_97_NON_DROPFRAME",
}

export enum SrtStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum TtmlStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum WebvttAccessibilitySubs {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum WebvttStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  STRICT = "STRICT",
}

export enum AudioDurationCorrection {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  FRAME = "FRAME",
  TRACK = "TRACK",
}

export enum AudioDefaultSelection {
  DEFAULT = "DEFAULT",
  NOT_DEFAULT = "NOT_DEFAULT",
}

export enum AudioSelectorType {
  HLS_RENDITION_GROUP = "HLS_RENDITION_GROUP",
  LANGUAGE_CODE = "LANGUAGE_CODE",
  PID = "PID",
  TRACK = "TRACK",
}

export enum AncillaryConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

export enum AncillaryTerminateCaptions {
  DISABLED = "DISABLED",
  END_OF_INPUT = "END_OF_INPUT",
}

export enum EmbeddedConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

export enum EmbeddedTerminateCaptions {
  DISABLED = "DISABLED",
  END_OF_INPUT = "END_OF_INPUT",
}

export enum FileSourceConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

export enum FileSourceTimeDeltaUnits {
  MILLISECONDS = "MILLISECONDS",
  SECONDS = "SECONDS",
}

export enum CaptionSourceType {
  ANCILLARY = "ANCILLARY",
  DVB_SUB = "DVB_SUB",
  EMBEDDED = "EMBEDDED",
  IMSC = "IMSC",
  NULL_SOURCE = "NULL_SOURCE",
  SCC = "SCC",
  SCTE20 = "SCTE20",
  SMI = "SMI",
  SMPTE_TT = "SMPTE_TT",
  SRT = "SRT",
  STL = "STL",
  TELETEXT = "TELETEXT",
  TTML = "TTML",
  WEBVTT = "WEBVTT",
}

export enum InputDeblockFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DecryptionMode {
  AES_CBC = "AES_CBC",
  AES_CTR = "AES_CTR",
  AES_GCM = "AES_GCM",
}

export enum InputDenoiseFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum InputFilterEnable {
  AUTO = "AUTO",
  DISABLE = "DISABLE",
  FORCE = "FORCE",
}

export enum InputScanType {
  AUTO = "AUTO",
  PSF = "PSF",
}

export enum InputPsiControl {
  IGNORE_PSI = "IGNORE_PSI",
  USE_PSI = "USE_PSI",
}

export enum InputTimecodeSource {
  EMBEDDED = "EMBEDDED",
  SPECIFIEDSTART = "SPECIFIEDSTART",
  ZEROBASED = "ZEROBASED",
}

export enum AlphaBehavior {
  DISCARD = "DISCARD",
  REMAP_TO_LUMA = "REMAP_TO_LUMA",
}

export enum ColorSpace {
  FOLLOW = "FOLLOW",
  HDR10 = "HDR10",
  HLG_2020 = "HLG_2020",
  REC_601 = "REC_601",
  REC_709 = "REC_709",
}

export enum ColorSpaceUsage {
  FALLBACK = "FALLBACK",
  FORCE = "FORCE",
}

export enum EmbeddedTimecodeOverride {
  NONE = "NONE",
  USE_MDPM = "USE_MDPM",
}

export enum PadVideo {
  BLACK = "BLACK",
  DISABLED = "DISABLED",
}

export enum InputRotate {
  AUTO = "AUTO",
  DEGREES_180 = "DEGREES_180",
  DEGREES_270 = "DEGREES_270",
  DEGREES_90 = "DEGREES_90",
  DEGREE_0 = "DEGREE_0",
}

export enum InputSampleRange {
  FOLLOW = "FOLLOW",
  FULL_RANGE = "FULL_RANGE",
  LIMITED_RANGE = "LIMITED_RANGE",
}

export enum AccelerationMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  PREFERRED = "PREFERRED",
}

export enum AccelerationStatus {
  ACCELERATED = "ACCELERATED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_ACCELERATED = "NOT_ACCELERATED",
  NOT_APPLICABLE = "NOT_APPLICABLE",
}

export enum BillingTagsSource {
  JOB = "JOB",
  JOB_TEMPLATE = "JOB_TEMPLATE",
  PRESET = "PRESET",
  QUEUE = "QUEUE",
}

export enum JobPhase {
  PROBING = "PROBING",
  TRANSCODING = "TRANSCODING",
  UPLOADING = "UPLOADING",
}

export enum CopyProtectionAction {
  PASSTHROUGH = "PASSTHROUGH",
  STRIP = "STRIP",
}

export enum VchipAction {
  PASSTHROUGH = "PASSTHROUGH",
  STRIP = "STRIP",
}

export enum MotionImageInsertionMode {
  MOV = "MOV",
  PNG = "PNG",
}

export enum MotionImagePlayback {
  ONCE = "ONCE",
  REPEAT = "REPEAT",
}

export enum NielsenActiveWatermarkProcessType {
  CBET = "CBET",
  NAES2_AND_NW = "NAES2_AND_NW",
  NAES2_AND_NW_AND_CBET = "NAES2_AND_NW_AND_CBET",
}

export enum NielsenSourceWatermarkStatusType {
  CLEAN = "CLEAN",
  WATERMARKED = "WATERMARKED",
}

export enum NielsenUniqueTicPerAudioTrackType {
  RESERVE_UNIQUE_TICS_PER_TRACK = "RESERVE_UNIQUE_TICS_PER_TRACK",
  SAME_TICS_PER_TRACK = "SAME_TICS_PER_TRACK",
}

export enum CmafClientCache {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum CmafCodecSpecification {
  RFC_4281 = "RFC_4281",
  RFC_6381 = "RFC_6381",
}

export enum S3ObjectCannedAcl {
  AUTHENTICATED_READ = "AUTHENTICATED_READ",
  BUCKET_OWNER_FULL_CONTROL = "BUCKET_OWNER_FULL_CONTROL",
  BUCKET_OWNER_READ = "BUCKET_OWNER_READ",
  PUBLIC_READ = "PUBLIC_READ",
}

export enum S3ServerSideEncryptionType {
  SERVER_SIDE_ENCRYPTION_KMS = "SERVER_SIDE_ENCRYPTION_KMS",
  SERVER_SIDE_ENCRYPTION_S3 = "SERVER_SIDE_ENCRYPTION_S3",
}

export enum CmafEncryptionType {
  AES_CTR = "AES_CTR",
  SAMPLE_AES = "SAMPLE_AES",
}

export enum CmafInitializationVectorInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum CmafKeyProviderType {
  SPEKE = "SPEKE",
  STATIC_KEY = "STATIC_KEY",
}

export enum CmafImageBasedTrickPlay {
  ADVANCED = "ADVANCED",
  NONE = "NONE",
  THUMBNAIL = "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME = "THUMBNAIL_AND_FULLFRAME",
}

export enum CmafIntervalCadence {
  FOLLOW_CUSTOM = "FOLLOW_CUSTOM",
  FOLLOW_IFRAME = "FOLLOW_IFRAME",
}

export enum CmafManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

export enum CmafManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER",
}

export enum CmafMpdProfile {
  MAIN_PROFILE = "MAIN_PROFILE",
  ON_DEMAND_PROFILE = "ON_DEMAND_PROFILE",
}

export enum CmafPtsOffsetHandlingForBFrames {
  MATCH_INITIAL_PTS = "MATCH_INITIAL_PTS",
  ZERO_BASED = "ZERO_BASED",
}

export enum CmafSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

export enum CmafSegmentLengthControl {
  EXACT = "EXACT",
  GOP_MULTIPLE = "GOP_MULTIPLE",
}

export enum CmafStreamInfResolution {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum CmafTargetDurationCompatibilityMode {
  LEGACY = "LEGACY",
  SPEC_COMPLIANT = "SPEC_COMPLIANT",
}

export enum CmafWriteDASHManifest {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum CmafWriteHLSManifest {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum CmafWriteSegmentTimelineInRepresentation {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DashIsoGroupAudioChannelConfigSchemeIdUri {
  DOLBY_CHANNEL_CONFIGURATION = "DOLBY_CHANNEL_CONFIGURATION",
  MPEG_CHANNEL_CONFIGURATION = "MPEG_CHANNEL_CONFIGURATION",
}

export enum DashIsoPlaybackDeviceCompatibility {
  CENC_V1 = "CENC_V1",
  UNENCRYPTED_SEI = "UNENCRYPTED_SEI",
}

export enum DashIsoHbbtvCompliance {
  HBBTV_1_5 = "HBBTV_1_5",
  NONE = "NONE",
}

export enum DashIsoImageBasedTrickPlay {
  ADVANCED = "ADVANCED",
  NONE = "NONE",
  THUMBNAIL = "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME = "THUMBNAIL_AND_FULLFRAME",
}

export enum DashIsoIntervalCadence {
  FOLLOW_CUSTOM = "FOLLOW_CUSTOM",
  FOLLOW_IFRAME = "FOLLOW_IFRAME",
}

export enum DashIsoMpdProfile {
  MAIN_PROFILE = "MAIN_PROFILE",
  ON_DEMAND_PROFILE = "ON_DEMAND_PROFILE",
}

export enum DashIsoPtsOffsetHandlingForBFrames {
  MATCH_INITIAL_PTS = "MATCH_INITIAL_PTS",
  ZERO_BASED = "ZERO_BASED",
}

export enum DashIsoSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

export enum DashIsoSegmentLengthControl {
  EXACT = "EXACT",
  GOP_MULTIPLE = "GOP_MULTIPLE",
}

export enum DashIsoWriteSegmentTimelineInRepresentation {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsAudioOnlyHeader {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsCaptionLanguageSetting {
  INSERT = "INSERT",
  NONE = "NONE",
  OMIT = "OMIT",
}

export enum HlsCaptionSegmentLengthControl {
  LARGE_SEGMENTS = "LARGE_SEGMENTS",
  MATCH_VIDEO = "MATCH_VIDEO",
}

export enum HlsClientCache {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsCodecSpecification {
  RFC_4281 = "RFC_4281",
  RFC_6381 = "RFC_6381",
}

export enum HlsDirectoryStructure {
  SINGLE_DIRECTORY = "SINGLE_DIRECTORY",
  SUBDIRECTORY_PER_STREAM = "SUBDIRECTORY_PER_STREAM",
}

export enum HlsEncryptionType {
  AES128 = "AES128",
  SAMPLE_AES = "SAMPLE_AES",
}

export enum HlsInitializationVectorInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsOfflineEncrypted {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsKeyProviderType {
  SPEKE = "SPEKE",
  STATIC_KEY = "STATIC_KEY",
}

export enum HlsImageBasedTrickPlay {
  ADVANCED = "ADVANCED",
  NONE = "NONE",
  THUMBNAIL = "THUMBNAIL",
  THUMBNAIL_AND_FULLFRAME = "THUMBNAIL_AND_FULLFRAME",
}

export enum HlsIntervalCadence {
  FOLLOW_CUSTOM = "FOLLOW_CUSTOM",
  FOLLOW_IFRAME = "FOLLOW_IFRAME",
}

export enum HlsManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

export enum HlsManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER",
}

export enum HlsOutputSelection {
  MANIFESTS_AND_SEGMENTS = "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY = "SEGMENTS_ONLY",
}

export enum HlsProgramDateTime {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

export enum HlsSegmentLengthControl {
  EXACT = "EXACT",
  GOP_MULTIPLE = "GOP_MULTIPLE",
}

export enum HlsStreamInfResolution {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsTargetDurationCompatibilityMode {
  LEGACY = "LEGACY",
  SPEC_COMPLIANT = "SPEC_COMPLIANT",
}

export enum HlsTimedMetadataId3Frame {
  NONE = "NONE",
  PRIV = "PRIV",
  TDRL = "TDRL",
}

export enum MsSmoothAudioDeduplication {
  COMBINE_DUPLICATE_STREAMS = "COMBINE_DUPLICATE_STREAMS",
  NONE = "NONE",
}

export enum MsSmoothFragmentLengthControl {
  EXACT = "EXACT",
  GOP_MULTIPLE = "GOP_MULTIPLE",
}

export enum MsSmoothManifestEncoding {
  UTF16 = "UTF16",
  UTF8 = "UTF8",
}

export enum OutputGroupType {
  CMAF_GROUP_SETTINGS = "CMAF_GROUP_SETTINGS",
  DASH_ISO_GROUP_SETTINGS = "DASH_ISO_GROUP_SETTINGS",
  FILE_GROUP_SETTINGS = "FILE_GROUP_SETTINGS",
  HLS_GROUP_SETTINGS = "HLS_GROUP_SETTINGS",
  MS_SMOOTH_GROUP_SETTINGS = "MS_SMOOTH_GROUP_SETTINGS",
}

export enum CmfcAudioDuration {
  DEFAULT_CODEC_DURATION = "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION = "MATCH_VIDEO_DURATION",
}

export enum CmfcAudioTrackType {
  ALTERNATE_AUDIO_AUTO_SELECT = "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT = "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
}

export enum CmfcDescriptiveVideoServiceFlag {
  DONT_FLAG = "DONT_FLAG",
  FLAG = "FLAG",
}

export enum CmfcIFrameOnlyManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum CmfcKlvMetadata {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum CmfcScte35Esam {
  INSERT = "INSERT",
  NONE = "NONE",
}

export enum CmfcScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum CmfcTimedMetadata {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum ContainerType {
  CMFC = "CMFC",
  F4V = "F4V",
  ISMV = "ISMV",
  M2TS = "M2TS",
  M3U8 = "M3U8",
  MOV = "MOV",
  MP4 = "MP4",
  MPD = "MPD",
  MXF = "MXF",
  RAW = "RAW",
  WEBM = "WEBM",
}

export enum F4vMoovPlacement {
  NORMAL = "NORMAL",
  PROGRESSIVE_DOWNLOAD = "PROGRESSIVE_DOWNLOAD",
}

export enum M2tsAudioBufferModel {
  ATSC = "ATSC",
  DVB = "DVB",
}

export enum M2tsAudioDuration {
  DEFAULT_CODEC_DURATION = "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION = "MATCH_VIDEO_DURATION",
}

export enum M2tsBufferModel {
  MULTIPLEX = "MULTIPLEX",
  NONE = "NONE",
}

export enum M2tsDataPtsControl {
  ALIGN_TO_VIDEO = "ALIGN_TO_VIDEO",
  AUTO = "AUTO",
}

export enum OutputSdt {
  SDT_FOLLOW = "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT = "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL = "SDT_MANUAL",
  SDT_NONE = "SDT_NONE",
}

export enum M2tsEbpAudioInterval {
  VIDEO_AND_FIXED_INTERVALS = "VIDEO_AND_FIXED_INTERVALS",
  VIDEO_INTERVAL = "VIDEO_INTERVAL",
}

export enum M2tsEbpPlacement {
  VIDEO_AND_AUDIO_PIDS = "VIDEO_AND_AUDIO_PIDS",
  VIDEO_PID = "VIDEO_PID",
}

export enum M2tsEsRateInPes {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum M2tsForceTsVideoEbpOrder {
  DEFAULT = "DEFAULT",
  FORCE = "FORCE",
}

export enum M2tsKlvMetadata {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsNielsenId3 {
  INSERT = "INSERT",
  NONE = "NONE",
}

export enum M2tsPcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M2tsRateMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum M2tsScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsSegmentationMarkers {
  EBP = "EBP",
  EBP_LEGACY = "EBP_LEGACY",
  NONE = "NONE",
  PSI_SEGSTART = "PSI_SEGSTART",
  RAI_ADAPT = "RAI_ADAPT",
  RAI_SEGSTART = "RAI_SEGSTART",
}

export enum M2tsSegmentationStyle {
  MAINTAIN_CADENCE = "MAINTAIN_CADENCE",
  RESET_CADENCE = "RESET_CADENCE",
}

export enum M3u8AudioDuration {
  DEFAULT_CODEC_DURATION = "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION = "MATCH_VIDEO_DURATION",
}

export enum M3u8DataPtsControl {
  ALIGN_TO_VIDEO = "ALIGN_TO_VIDEO",
  AUTO = "AUTO",
}

export enum M3u8NielsenId3 {
  INSERT = "INSERT",
  NONE = "NONE",
}

export enum M3u8PcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M3u8Scte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum TimedMetadata {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum MovClapAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum MovCslgAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum MovMpeg2FourCCControl {
  MPEG = "MPEG",
  XDCAM = "XDCAM",
}

export enum MovPaddingControl {
  NONE = "NONE",
  OMNEON = "OMNEON",
}

export enum MovReference {
  EXTERNAL = "EXTERNAL",
  SELF_CONTAINED = "SELF_CONTAINED",
}

export enum Mp4CslgAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum Mp4FreeSpaceBox {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum Mp4MoovPlacement {
  NORMAL = "NORMAL",
  PROGRESSIVE_DOWNLOAD = "PROGRESSIVE_DOWNLOAD",
}

export enum MpdAccessibilityCaptionHints {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum MpdAudioDuration {
  DEFAULT_CODEC_DURATION = "DEFAULT_CODEC_DURATION",
  MATCH_VIDEO_DURATION = "MATCH_VIDEO_DURATION",
}

export enum MpdCaptionContainerType {
  FRAGMENTED_MP4 = "FRAGMENTED_MP4",
  RAW = "RAW",
}

export enum MpdKlvMetadata {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum MpdScte35Esam {
  INSERT = "INSERT",
  NONE = "NONE",
}

export enum MpdScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum MpdTimedMetadata {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum MxfAfdSignaling {
  COPY_FROM_VIDEO = "COPY_FROM_VIDEO",
  NO_COPY = "NO_COPY",
}

export enum MxfProfile {
  D_10 = "D_10",
  OP1A = "OP1A",
  XAVC = "XAVC",
  XDCAM = "XDCAM",
}

export enum MxfXavcDurationMode {
  ALLOW_ANY_DURATION = "ALLOW_ANY_DURATION",
  DROP_FRAMES_FOR_COMPLIANCE = "DROP_FRAMES_FOR_COMPLIANCE",
}

export enum HlsAudioOnlyContainer {
  AUTOMATIC = "AUTOMATIC",
  M2TS = "M2TS",
}

export enum HlsAudioTrackType {
  ALTERNATE_AUDIO_AUTO_SELECT = "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT = "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM = "AUDIO_ONLY_VARIANT_STREAM",
}

export enum HlsDescriptiveVideoServiceFlag {
  DONT_FLAG = "DONT_FLAG",
  FLAG = "FLAG",
}

export enum HlsIFrameOnlyManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum AfdSignaling {
  AUTO = "AUTO",
  FIXED = "FIXED",
  NONE = "NONE",
}

export enum AntiAlias {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Av1AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum Av1BitDepth {
  BIT_10 = "BIT_10",
  BIT_8 = "BIT_8",
}

export enum Av1FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Av1FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum Av1RateControlMode {
  QVBR = "QVBR",
}

export enum Av1SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum AvcIntraClass {
  CLASS_100 = "CLASS_100",
  CLASS_200 = "CLASS_200",
  CLASS_4K_2K = "CLASS_4K_2K",
  CLASS_50 = "CLASS_50",
}

export enum AvcIntraUhdQualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  SINGLE_PASS = "SINGLE_PASS",
}

export enum AvcIntraFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum AvcIntraFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum AvcIntraInterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum AvcIntraScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum AvcIntraSlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum AvcIntraTelecine {
  HARD = "HARD",
  NONE = "NONE",
}

export enum VideoCodec {
  AV1 = "AV1",
  AVC_INTRA = "AVC_INTRA",
  FRAME_CAPTURE = "FRAME_CAPTURE",
  H_264 = "H_264",
  H_265 = "H_265",
  MPEG2 = "MPEG2",
  PRORES = "PRORES",
  VC3 = "VC3",
  VP8 = "VP8",
  VP9 = "VP9",
  XAVC = "XAVC",
}

export enum H264AdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H264CodecLevel {
  AUTO = "AUTO",
  LEVEL_1 = "LEVEL_1",
  LEVEL_1_1 = "LEVEL_1_1",
  LEVEL_1_2 = "LEVEL_1_2",
  LEVEL_1_3 = "LEVEL_1_3",
  LEVEL_2 = "LEVEL_2",
  LEVEL_2_1 = "LEVEL_2_1",
  LEVEL_2_2 = "LEVEL_2_2",
  LEVEL_3 = "LEVEL_3",
  LEVEL_3_1 = "LEVEL_3_1",
  LEVEL_3_2 = "LEVEL_3_2",
  LEVEL_4 = "LEVEL_4",
  LEVEL_4_1 = "LEVEL_4_1",
  LEVEL_4_2 = "LEVEL_4_2",
  LEVEL_5 = "LEVEL_5",
  LEVEL_5_1 = "LEVEL_5_1",
  LEVEL_5_2 = "LEVEL_5_2",
}

export enum H264CodecProfile {
  BASELINE = "BASELINE",
  HIGH = "HIGH",
  HIGH_10BIT = "HIGH_10BIT",
  HIGH_422 = "HIGH_422",
  HIGH_422_10BIT = "HIGH_422_10BIT",
  MAIN = "MAIN",
}

export enum H264DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC",
}

export enum H264EntropyEncoding {
  CABAC = "CABAC",
  CAVLC = "CAVLC",
}

export enum H264FieldEncoding {
  FORCE_FIELD = "FORCE_FIELD",
  MBAFF = "MBAFF",
  PAFF = "PAFF",
}

export enum H264FlickerAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum H264GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264GopSizeUnits {
  AUTO = "AUTO",
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H264InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum H264ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264QualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ",
}

export enum H264RateControlMode {
  CBR = "CBR",
  QVBR = "QVBR",
  VBR = "VBR",
}

export enum H264RepeatPps {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264ScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum H264SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  TRANSITION_DETECTION = "TRANSITION_DETECTION",
}

export enum H264SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264Syntax {
  DEFAULT = "DEFAULT",
  RP2027 = "RP2027",
}

export enum H264Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT",
}

export enum H264TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264UnregisteredSeiTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265AdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H265AlternateTransferFunctionSei {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265CodecLevel {
  AUTO = "AUTO",
  LEVEL_1 = "LEVEL_1",
  LEVEL_2 = "LEVEL_2",
  LEVEL_2_1 = "LEVEL_2_1",
  LEVEL_3 = "LEVEL_3",
  LEVEL_3_1 = "LEVEL_3_1",
  LEVEL_4 = "LEVEL_4",
  LEVEL_4_1 = "LEVEL_4_1",
  LEVEL_5 = "LEVEL_5",
  LEVEL_5_1 = "LEVEL_5_1",
  LEVEL_5_2 = "LEVEL_5_2",
  LEVEL_6 = "LEVEL_6",
  LEVEL_6_1 = "LEVEL_6_1",
  LEVEL_6_2 = "LEVEL_6_2",
}

export enum H265CodecProfile {
  MAIN10_HIGH = "MAIN10_HIGH",
  MAIN10_MAIN = "MAIN10_MAIN",
  MAIN_422_10BIT_HIGH = "MAIN_422_10BIT_HIGH",
  MAIN_422_10BIT_MAIN = "MAIN_422_10BIT_MAIN",
  MAIN_422_8BIT_HIGH = "MAIN_422_8BIT_HIGH",
  MAIN_422_8BIT_MAIN = "MAIN_422_8BIT_MAIN",
  MAIN_HIGH = "MAIN_HIGH",
  MAIN_MAIN = "MAIN_MAIN",
}

export enum H265DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC",
}

export enum H265FlickerAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H265FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum H265GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265GopSizeUnits {
  AUTO = "AUTO",
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H265InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum H265ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H265QualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ",
}

export enum H265RateControlMode {
  CBR = "CBR",
  QVBR = "QVBR",
  VBR = "VBR",
}

export enum H265SampleAdaptiveOffsetFilterMode {
  ADAPTIVE = "ADAPTIVE",
  DEFAULT = "DEFAULT",
  OFF = "OFF",
}

export enum H265ScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum H265SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  TRANSITION_DETECTION = "TRANSITION_DETECTION",
}

export enum H265SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT",
}

export enum H265TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265TemporalIds {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265Tiles {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265UnregisteredSeiTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265WriteMp4PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1",
}

export enum Mpeg2AdaptiveQuantization {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum Mpeg2CodecLevel {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGH1440 = "HIGH1440",
  LOW = "LOW",
  MAIN = "MAIN",
}

export enum Mpeg2CodecProfile {
  MAIN = "MAIN",
  PROFILE_422 = "PROFILE_422",
}

export enum Mpeg2DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC",
}

export enum Mpeg2FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Mpeg2FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum Mpeg2GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum Mpeg2InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum Mpeg2IntraDcPrecision {
  AUTO = "AUTO",
  INTRA_DC_PRECISION_10 = "INTRA_DC_PRECISION_10",
  INTRA_DC_PRECISION_11 = "INTRA_DC_PRECISION_11",
  INTRA_DC_PRECISION_8 = "INTRA_DC_PRECISION_8",
  INTRA_DC_PRECISION_9 = "INTRA_DC_PRECISION_9",
}

export enum Mpeg2ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Mpeg2QualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  SINGLE_PASS = "SINGLE_PASS",
}

export enum Mpeg2RateControlMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum Mpeg2ScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum Mpeg2SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Mpeg2SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Mpeg2SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Mpeg2Syntax {
  DEFAULT = "DEFAULT",
  D_10 = "D_10",
}

export enum Mpeg2Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT",
}

export enum Mpeg2TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum ProresChromaSampling {
  PRESERVE_444_SAMPLING = "PRESERVE_444_SAMPLING",
  SUBSAMPLE_TO_422 = "SUBSAMPLE_TO_422",
}

export enum ProresCodecProfile {
  APPLE_PRORES_422 = "APPLE_PRORES_422",
  APPLE_PRORES_422_HQ = "APPLE_PRORES_422_HQ",
  APPLE_PRORES_422_LT = "APPLE_PRORES_422_LT",
  APPLE_PRORES_422_PROXY = "APPLE_PRORES_422_PROXY",
  APPLE_PRORES_4444 = "APPLE_PRORES_4444",
  APPLE_PRORES_4444_XQ = "APPLE_PRORES_4444_XQ",
}

export enum ProresFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum ProresFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum ProresInterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum ProresParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum ProresScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum ProresSlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum ProresTelecine {
  HARD = "HARD",
  NONE = "NONE",
}

export enum Vc3FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vc3FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum Vc3InterlaceMode {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum Vc3ScanTypeConversionMode {
  INTERLACED = "INTERLACED",
  INTERLACED_OPTIMIZE = "INTERLACED_OPTIMIZE",
}

export enum Vc3SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Vc3Telecine {
  HARD = "HARD",
  NONE = "NONE",
}

export enum Vc3Class {
  CLASS_145_8BIT = "CLASS_145_8BIT",
  CLASS_220_10BIT = "CLASS_220_10BIT",
  CLASS_220_8BIT = "CLASS_220_8BIT",
}

export enum Vp8FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp8FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum Vp8ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp8QualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
}

export enum Vp8RateControlMode {
  VBR = "VBR",
}

export enum Vp9FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp9FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum Vp9ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum Vp9QualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
}

export enum Vp9RateControlMode {
  VBR = "VBR",
}

export enum XavcAdaptiveQuantization {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum XavcEntropyEncoding {
  AUTO = "AUTO",
  CABAC = "CABAC",
  CAVLC = "CAVLC",
}

export enum XavcFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum XavcFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  FRAMEFORMER = "FRAMEFORMER",
  INTERPOLATE = "INTERPOLATE",
}

export enum XavcProfile {
  XAVC_4K = "XAVC_4K",
  XAVC_4K_INTRA_CBG = "XAVC_4K_INTRA_CBG",
  XAVC_4K_INTRA_VBR = "XAVC_4K_INTRA_VBR",
  XAVC_HD = "XAVC_HD",
  XAVC_HD_INTRA_CBG = "XAVC_HD_INTRA_CBG",
}

export enum XavcSlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum XavcSpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum XavcTemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Xavc4kIntraCbgProfileClass {
  CLASS_100 = "CLASS_100",
  CLASS_300 = "CLASS_300",
  CLASS_480 = "CLASS_480",
}

export enum Xavc4kIntraVbrProfileClass {
  CLASS_100 = "CLASS_100",
  CLASS_300 = "CLASS_300",
  CLASS_480 = "CLASS_480",
}

export enum Xavc4kProfileBitrateClass {
  BITRATE_CLASS_100 = "BITRATE_CLASS_100",
  BITRATE_CLASS_140 = "BITRATE_CLASS_140",
  BITRATE_CLASS_200 = "BITRATE_CLASS_200",
}

export enum Xavc4kProfileCodecProfile {
  HIGH = "HIGH",
  HIGH_422 = "HIGH_422",
}

export enum XavcFlickerAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum XavcGopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Xavc4kProfileQualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ",
}

export enum XavcHdIntraCbgProfileClass {
  CLASS_100 = "CLASS_100",
  CLASS_200 = "CLASS_200",
  CLASS_50 = "CLASS_50",
}

export enum XavcHdProfileBitrateClass {
  BITRATE_CLASS_25 = "BITRATE_CLASS_25",
  BITRATE_CLASS_35 = "BITRATE_CLASS_35",
  BITRATE_CLASS_50 = "BITRATE_CLASS_50",
}

export enum XavcInterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD",
}

export enum XavcHdProfileQualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ",
}

export enum XavcHdProfileTelecine {
  HARD = "HARD",
  NONE = "NONE",
}

export enum ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

export enum DropFrameTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum RespondToAfd {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  RESPOND = "RESPOND",
}

export enum ScalingBehavior {
  DEFAULT = "DEFAULT",
  STRETCH_TO_OUTPUT = "STRETCH_TO_OUTPUT",
}

export enum VideoTimecodeInsertion {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI",
}

export enum ColorSpaceConversion {
  FORCE_601 = "FORCE_601",
  FORCE_709 = "FORCE_709",
  FORCE_HDR10 = "FORCE_HDR10",
  FORCE_HLG_2020 = "FORCE_HLG_2020",
  NONE = "NONE",
}

export enum SampleRangeConversion {
  LIMITED_RANGE_SQUEEZE = "LIMITED_RANGE_SQUEEZE",
  NONE = "NONE",
}

export enum DeinterlaceAlgorithm {
  BLEND = "BLEND",
  BLEND_TICKER = "BLEND_TICKER",
  INTERPOLATE = "INTERPOLATE",
  INTERPOLATE_TICKER = "INTERPOLATE_TICKER",
}

export enum DeinterlacerControl {
  FORCE_ALL_FRAMES = "FORCE_ALL_FRAMES",
  NORMAL = "NORMAL",
}

export enum DeinterlacerMode {
  ADAPTIVE = "ADAPTIVE",
  DEINTERLACE = "DEINTERLACE",
  INVERSE_TELECINE = "INVERSE_TELECINE",
}
