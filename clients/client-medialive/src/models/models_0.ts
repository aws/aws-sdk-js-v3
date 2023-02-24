// smithy-typescript generated code
/**
 * Input Channel Level
 */
export interface InputChannelLevel {
  /**
   * Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB.
   */
  Gain: number | undefined;

  /**
   * The index of the input channel used as a source.
   */
  InputChannel: number | undefined;
}

/**
 * Audio Channel Mapping
 */
export interface AudioChannelMapping {
  /**
   * Indices and gain values for each input channel that should be remixed into this output channel.
   */
  InputChannelLevels: InputChannelLevel[] | undefined;

  /**
   * The index of the output channel being produced.
   */
  OutputChannel: number | undefined;
}

export enum AudioNormalizationAlgorithm {
  ITU_1770_1 = "ITU_1770_1",
  ITU_1770_2 = "ITU_1770_2",
}

export enum AudioNormalizationAlgorithmControl {
  CORRECT_AUDIO = "CORRECT_AUDIO",
}

/**
 * Audio Normalization Settings
 */
export interface AudioNormalizationSettings {
  /**
   * Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 conforms to the EBU R-128 specification.
   */
  Algorithm?: AudioNormalizationAlgorithm | string;

  /**
   * When set to correctAudio the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio will be measured but not adjusted.
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | string;

  /**
   * Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm.  The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
   */
  TargetLkfs?: number;
}

export enum AudioType {
  CLEAN_EFFECTS = "CLEAN_EFFECTS",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  UNDEFINED = "UNDEFINED",
  VISUAL_IMPAIRED_COMMENTARY = "VISUAL_IMPAIRED_COMMENTARY",
}

export enum AudioDescriptionAudioTypeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum NielsenWatermarksCbetStepaside {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Nielsen CBET
 */
export interface NielsenCBET {
  /**
   * Enter the CBET check digits to use in the watermark.
   */
  CbetCheckDigitString: string | undefined;

  /**
   * Determines the method of CBET insertion mode when prior encoding is detected on the same layer.
   */
  CbetStepaside: NielsenWatermarksCbetStepaside | string | undefined;

  /**
   * Enter the CBET Source ID (CSID) to use in the watermark
   */
  Csid: string | undefined;
}

export enum NielsenWatermarksDistributionTypes {
  FINAL_DISTRIBUTOR = "FINAL_DISTRIBUTOR",
  PROGRAM_CONTENT = "PROGRAM_CONTENT",
}

/**
 * Nielsen Naes Ii Nw
 */
export interface NielsenNaesIiNw {
  /**
   * Enter the check digit string for the watermark
   */
  CheckDigitString: string | undefined;

  /**
   * Enter the Nielsen Source ID (SID) to include in the watermark
   */
  Sid: number | undefined;
}

/**
 * Nielsen Watermarks Settings
 */
export interface NielsenWatermarksSettings {
  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen CBET
   */
  NielsenCbetSettings?: NielsenCBET;

  /**
   * Choose the distribution types that you want to assign to the watermarks:
   * - PROGRAM_CONTENT
   * - FINAL_DISTRIBUTOR
   */
  NielsenDistributionType?: NielsenWatermarksDistributionTypes | string;

  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).
   */
  NielsenNaesIiNwSettings?: NielsenNaesIiNw;
}

/**
 * Audio Watermark Settings
 */
export interface AudioWatermarkSettings {
  /**
   * Settings to configure Nielsen Watermarks in the audio encode
   */
  NielsenWatermarksSettings?: NielsenWatermarksSettings;
}

export enum AacCodingMode {
  AD_RECEIVER_MIX = "AD_RECEIVER_MIX",
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_5_1 = "CODING_MODE_5_1",
}

export enum AacInputType {
  BROADCASTER_MIXED_AD = "BROADCASTER_MIXED_AD",
  NORMAL = "NORMAL",
}

export enum AacProfile {
  HEV1 = "HEV1",
  HEV2 = "HEV2",
  LC = "LC",
}

export enum AacRateControlMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum AacRawFormat {
  LATM_LOAS = "LATM_LOAS",
  NONE = "NONE",
}

export enum AacSpec {
  MPEG2 = "MPEG2",
  MPEG4 = "MPEG4",
}

export enum AacVbrQuality {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM_HIGH = "MEDIUM_HIGH",
  MEDIUM_LOW = "MEDIUM_LOW",
}

/**
 * Aac Settings
 */
export interface AacSettings {
  /**
   * Average bitrate in bits/second. Valid values depend on rate control mode and profile.
   */
  Bitrate?: number;

  /**
   * Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   */
  CodingMode?: AacCodingMode | string;

  /**
   * Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.
   *
   * Leave set to "normal" when input does not contain pre-mixed audio + AD.
   */
  InputType?: AacInputType | string;

  /**
   * AAC Profile.
   */
  Profile?: AacProfile | string;

  /**
   * Rate Control Mode.
   */
  RateControlMode?: AacRateControlMode | string;

  /**
   * Sets LATM / LOAS AAC output for raw containers.
   */
  RawFormat?: AacRawFormat | string;

  /**
   * Sample rate in Hz. Valid values depend on rate control mode and profile.
   */
  SampleRate?: number;

  /**
   * Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   */
  Spec?: AacSpec | string;

  /**
   * VBR Quality Level - Only used if rateControlMode is VBR.
   */
  VbrQuality?: AacVbrQuality | string;
}

export enum Ac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  DIALOGUE = "DIALOGUE",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  MUSIC_AND_EFFECTS = "MUSIC_AND_EFFECTS",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
  VOICE_OVER = "VOICE_OVER",
}

export enum Ac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2_LFE = "CODING_MODE_3_2_LFE",
}

export enum Ac3DrcProfile {
  FILM_STANDARD = "FILM_STANDARD",
  NONE = "NONE",
}

export enum Ac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Ac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

/**
 * Ac3 Settings
 */
export interface Ac3Settings {
  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.
   */
  BitstreamMode?: Ac3BitstreamMode | string;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   */
  CodingMode?: Ac3CodingMode | string;

  /**
   * Sets the dialnorm for the output. If excluded and input audio is Dolby Digital, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
   */
  DrcProfile?: Ac3DrcProfile | string;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid in codingMode32Lfe mode.
   */
  LfeFilter?: Ac3LfeFilter | string;

  /**
   * When set to "followInput", encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Ac3MetadataControl | string;
}

export enum Eac3AtmosCodingMode {
  CODING_MODE_5_1_4 = "CODING_MODE_5_1_4",
  CODING_MODE_7_1_4 = "CODING_MODE_7_1_4",
  CODING_MODE_9_1_6 = "CODING_MODE_9_1_6",
}

export enum Eac3AtmosDrcLine {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3AtmosDrcRf {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

/**
 * Eac3 Atmos Settings
 */
export interface Eac3AtmosSettings {
  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   * //  * @affectsRightSizing true
   */
  Bitrate?: number;

  /**
   * Dolby Digital Plus with Dolby Atmos coding mode. Determines number of channels.
   */
  CodingMode?: Eac3AtmosCodingMode | string;

  /**
   * Sets the dialnorm for the output. Default 23.
   */
  Dialnorm?: number;

  /**
   * Sets the Dolby dynamic range compression profile.
   */
  DrcLine?: Eac3AtmosDrcLine | string;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   */
  DrcRf?: Eac3AtmosDrcRf | string;

  /**
   * Height dimensional trim. Sets the maximum amount to attenuate the height channels when the downstream player isn??t configured to handle Dolby Digital Plus with Dolby Atmos and must remix the channels.
   */
  HeightTrim?: number;

  /**
   * Surround dimensional trim. Sets the maximum amount to attenuate the surround channels when the downstream player isn't configured to handle Dolby Digital Plus with Dolby Atmos and must remix the channels.
   */
  SurroundTrim?: number;
}

export enum Eac3AttenuationControl {
  ATTENUATE_3_DB = "ATTENUATE_3_DB",
  NONE = "NONE",
}

export enum Eac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
}

export enum Eac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2 = "CODING_MODE_3_2",
}

export enum Eac3DcFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3DrcLine {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3DrcRf {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3LfeControl {
  LFE = "LFE",
  NO_LFE = "NO_LFE",
}

export enum Eac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum Eac3PassthroughControl {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  WHEN_POSSIBLE = "WHEN_POSSIBLE",
}

export enum Eac3PhaseControl {
  NO_SHIFT = "NO_SHIFT",
  SHIFT_90_DEGREES = "SHIFT_90_DEGREES",
}

export enum Eac3StereoDownmix {
  DPL2 = "DPL2",
  LO_RO = "LO_RO",
  LT_RT = "LT_RT",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Eac3SurroundExMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Eac3SurroundMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

/**
 * Eac3 Settings
 */
export interface Eac3Settings {
  /**
   * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   */
  AttenuationControl?: Eac3AttenuationControl | string;

  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.
   */
  BitstreamMode?: Eac3BitstreamMode | string;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   */
  CodingMode?: Eac3CodingMode | string;

  /**
   * When set to enabled, activates a DC highpass filter for all input channels.
   */
  DcFilter?: Eac3DcFilter | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * Sets the Dolby dynamic range compression profile.
   */
  DrcLine?: Eac3DrcLine | string;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   */
  DrcRf?: Eac3DrcRf | string;

  /**
   * When encoding 3/2 audio, setting to lfe enables the LFE channel
   */
  LfeControl?: Eac3LfeControl | string;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode.
   */
  LfeFilter?: Eac3LfeFilter | string;

  /**
   * Left only/Right only center mix level. Only used for 3/2 coding mode.
   */
  LoRoCenterMixLevel?: number;

  /**
   * Left only/Right only surround mix level. Only used for 3/2 coding mode.
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Left total/Right total center mix level. Only used for 3/2 coding mode.
   */
  LtRtCenterMixLevel?: number;

  /**
   * Left total/Right total surround mix level. Only used for 3/2 coding mode.
   */
  LtRtSurroundMixLevel?: number;

  /**
   * When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Eac3MetadataControl | string;

  /**
   * When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   */
  PassthroughControl?: Eac3PassthroughControl | string;

  /**
   * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode.
   */
  PhaseControl?: Eac3PhaseControl | string;

  /**
   * Stereo downmix preference. Only used for 3/2 coding mode.
   */
  StereoDownmix?: Eac3StereoDownmix | string;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   */
  SurroundExMode?: Eac3SurroundExMode | string;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   */
  SurroundMode?: Eac3SurroundMode | string;
}

export enum Mp2CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
}

/**
 * Mp2 Settings
 */
export interface Mp2Settings {
  /**
   * Average bitrate in bits/second.
   */
  Bitrate?: number;

  /**
   * The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
   */
  CodingMode?: Mp2CodingMode | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

/**
 * Pass Through Settings
 */
export interface PassThroughSettings {}

export enum WavCodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_4_0 = "CODING_MODE_4_0",
  CODING_MODE_8_0 = "CODING_MODE_8_0",
}

/**
 * Wav Settings
 */
export interface WavSettings {
  /**
   * Bits per sample.
   */
  BitDepth?: number;

  /**
   * The audio coding mode for the WAV audio. The mode determines the number of channels in the audio.
   */
  CodingMode?: WavCodingMode | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

/**
 * Audio Codec Settings
 */
export interface AudioCodecSettings {
  /**
   * Aac Settings
   */
  AacSettings?: AacSettings;

  /**
   * Ac3 Settings
   */
  Ac3Settings?: Ac3Settings;

  /**
   * Eac3 Atmos Settings
   */
  Eac3AtmosSettings?: Eac3AtmosSettings;

  /**
   * Eac3 Settings
   */
  Eac3Settings?: Eac3Settings;

  /**
   * Mp2 Settings
   */
  Mp2Settings?: Mp2Settings;

  /**
   * Pass Through Settings
   */
  PassThroughSettings?: PassThroughSettings;

  /**
   * Wav Settings
   */
  WavSettings?: WavSettings;
}

export enum AudioDescriptionLanguageCodeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

/**
 * Remix Settings
 */
export interface RemixSettings {
  /**
   * Mapping of input channels to output channels, with appropriate gain adjustments.
   */
  ChannelMappings: AudioChannelMapping[] | undefined;

  /**
   * Number of input channels to be used.
   */
  ChannelsIn?: number;

  /**
   * Number of output channels to be produced.
   * Valid values: 1, 2, 4, 6, 8
   */
  ChannelsOut?: number;
}

/**
 * Audio Description
 */
export interface AudioDescription {
  /**
   * Advanced audio normalization settings.
   */
  AudioNormalizationSettings?: AudioNormalizationSettings;

  /**
   * The name of the AudioSelector used as the source for this AudioDescription.
   */
  AudioSelectorName: string | undefined;

  /**
   * Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
   */
  AudioType?: AudioType | string;

  /**
   * Determines how audio type is determined.
   *   followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.
   *   useConfigured: The value in Audio Type is included in the output.
   * Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
   */
  AudioTypeControl?: AudioDescriptionAudioTypeControl | string;

  /**
   * Settings to configure one or more solutions that insert audio watermarks in the audio encode
   */
  AudioWatermarkingSettings?: AudioWatermarkSettings;

  /**
   * Audio codec settings.
   */
  CodecSettings?: AudioCodecSettings;

  /**
   * RFC 5646 language code representing the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
   */
  LanguageCode?: string;

  /**
   * Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCodeControl?: AudioDescriptionLanguageCodeControl | string;

  /**
   * The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event.
   */
  Name: string | undefined;

  /**
   * Settings that control how input audio channels are remixed into the output audio channels.
   */
  RemixSettings?: RemixSettings;

  /**
   * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary).
   */
  StreamName?: string;
}

/**
 * Audio Hls Rendition Selection
 */
export interface AudioHlsRenditionSelection {
  /**
   * Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   */
  GroupId: string | undefined;

  /**
   * Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   */
  Name: string | undefined;
}

export enum AudioLanguageSelectionPolicy {
  LOOSE = "LOOSE",
  STRICT = "STRICT",
}

/**
 * Audio Language Selection
 */
export interface AudioLanguageSelection {
  /**
   * Selects a specific three-letter language code from within an audio source.
   */
  LanguageCode: string | undefined;

  /**
   * When set to "strict", the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If "loose", then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can't find one with the same language.
   */
  LanguageSelectionPolicy?: AudioLanguageSelectionPolicy | string;
}

/**
 * Audio Pid Selection
 */
export interface AudioPidSelection {
  /**
   * Selects a specific PID from within a source.
   */
  Pid: number | undefined;
}

export enum DolbyEProgramSelection {
  ALL_CHANNELS = "ALL_CHANNELS",
  PROGRAM_1 = "PROGRAM_1",
  PROGRAM_2 = "PROGRAM_2",
  PROGRAM_3 = "PROGRAM_3",
  PROGRAM_4 = "PROGRAM_4",
  PROGRAM_5 = "PROGRAM_5",
  PROGRAM_6 = "PROGRAM_6",
  PROGRAM_7 = "PROGRAM_7",
  PROGRAM_8 = "PROGRAM_8",
}

/**
 * Audio Dolby EDecode
 */
export interface AudioDolbyEDecode {
  /**
   * Applies only to Dolby E. Enter the program ID (according to the metadata in the audio) of the Dolby E program to extract from the specified track. One program extracted per audio selector. To select multiple programs, create multiple selectors with the same Track and different Program numbers. “All channels” means to ignore the program IDs and include all the channels in this selector; useful if metadata is known to be incorrect.
   */
  ProgramSelection: DolbyEProgramSelection | string | undefined;
}

/**
 * Audio Track
 */
export interface AudioTrack {
  /**
   * 1-based integer value that maps to a specific audio track
   */
  Track: number | undefined;
}

/**
 * Audio Track Selection
 */
export interface AudioTrackSelection {
  /**
   * Selects one or more unique audio tracks from within a source.
   */
  Tracks: AudioTrack[] | undefined;

  /**
   * Configure decoding options for Dolby E streams - these should be Dolby E frames carried in PCM streams tagged with SMPTE-337
   */
  DolbyEDecode?: AudioDolbyEDecode;
}

/**
 * Audio Selector Settings
 */
export interface AudioSelectorSettings {
  /**
   * Audio Hls Rendition Selection
   */
  AudioHlsRenditionSelection?: AudioHlsRenditionSelection;

  /**
   * Audio Language Selection
   */
  AudioLanguageSelection?: AudioLanguageSelection;

  /**
   * Audio Pid Selection
   */
  AudioPidSelection?: AudioPidSelection;

  /**
   * Audio Track Selection
   */
  AudioTrackSelection?: AudioTrackSelection;
}

/**
 * Audio Selector
 */
export interface AudioSelector {
  /**
   * The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input.
   */
  Name: string | undefined;

  /**
   * The audio selector settings.
   */
  SelectorSettings?: AudioSelectorSettings;
}

/**
 * Details from a failed operation
 */
export interface BatchFailedResultModel {
  /**
   * ARN of the resource
   */
  Arn?: string;

  /**
   * Error code for the failed operation
   */
  Code?: string;

  /**
   * ID of the resource
   */
  Id?: string;

  /**
   * Error message for the failed operation
   */
  Message?: string;
}

/**
 * Details from a successful operation
 */
export interface BatchSuccessfulResultModel {
  /**
   * ARN of the resource
   */
  Arn?: string;

  /**
   * ID of the resource
   */
  Id?: string;

  /**
   * Current state of the resource
   */
  State?: string;
}

export enum AccessibilityType {
  DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES = "DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES",
  IMPLEMENTS_ACCESSIBILITY_FEATURES = "IMPLEMENTS_ACCESSIBILITY_FEATURES",
}

/**
 * Arib Destination Settings
 */
export interface AribDestinationSettings {}

export enum BurnInAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT",
  SMART = "SMART",
}

export enum BurnInBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

/**
 * Input Location
 */
export interface InputLocation {
  /**
   * key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a RTMP destination should have a uri simliar to: "rtmp://fmsserver/live".
   */
  Uri: string | undefined;

  /**
   * Documentation update needed
   */
  Username?: string;
}

export enum BurnInFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum BurnInOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum BurnInShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum BurnInTeletextGridControl {
  FIXED = "FIXED",
  SCALED = "SCALED",
}

/**
 * Burn In Destination Settings
 */
export interface BurnInDestinationSettings {
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: BurnInAlignment | string;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: BurnInBackgroundColor | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions,  embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   */
  Font?: InputLocation;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: BurnInFontColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * When set to 'auto' fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: string;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: BurnInOutlineColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: BurnInShadowColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   */
  TeletextGridControl?: BurnInTeletextGridControl | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export enum DvbSubDestinationAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT",
  SMART = "SMART",
}

export enum DvbSubDestinationBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubDestinationFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubDestinationOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubDestinationShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubDestinationTeletextGridControl {
  FIXED = "FIXED",
  SCALED = "SCALED",
}

/**
 * Dvb Sub Destination Settings
 */
export interface DvbSubDestinationSettings {
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  This option is not valid for source captions that are STL or 608/embedded.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: DvbSubDestinationAlignment | string;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: DvbSubDestinationBackgroundColor | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   */
  Font?: InputLocation;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: DvbSubDestinationFontColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * When set to auto fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: string;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: DvbSubDestinationOutlineColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: DvbSubDestinationShadowColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   */
  TeletextGridControl?: DvbSubDestinationTeletextGridControl | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export enum EbuTtDFillLineGapControl {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum EbuTtDDestinationStyleControl {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

/**
 * Ebu Tt DDestination Settings
 */
export interface EbuTtDDestinationSettings {
  /**
   * Complete this field if you want to include the name of the copyright holder in the copyright tag in the captions metadata.
   */
  CopyrightHolder?: string;

  /**
   * Specifies how to handle the gap between the lines (in multi-line captions).
   *
   * - enabled: Fill with the captions background color (as specified in the input captions).
   * - disabled: Leave the gap unfilled.
   */
  FillLineGap?: EbuTtDFillLineGapControl | string;

  /**
   * Specifies the font family to include in the font data attached to the EBU-TT captions. Valid only if styleControl is set to include. If you leave this field empty, the font family is set to "monospaced". (If styleControl is set to exclude, the font family is always set to "monospaced".)
   *
   * You specify only the font family. All other style information (color, bold, position and so on) is copied from the input captions. The size is always set to 100% to allow the downstream player to choose the size.
   *
   * - Enter a list of font families, as a comma-separated list of font names, in order of preference. The name can be a font family (such as “Arial”), or a generic font family (such as “serif”), or “default” (to let the downstream player choose the font).
   * - Leave blank to set the family to “monospace”.
   */
  FontFamily?: string;

  /**
   * Specifies the style information (font color, font position, and so on) to include in the font data that is attached to the EBU-TT captions.
   *
   * - include: Take the style information (font color, font position, and so on) from the source captions and include that information in the font data attached to the EBU-TT captions. This option is valid only if the source captions are Embedded or Teletext.
   * - exclude: In the font data attached to the EBU-TT captions, set the font family to "monospaced". Do not include any other style information.
   */
  StyleControl?: EbuTtDDestinationStyleControl | string;
}

/**
 * Embedded Destination Settings
 */
export interface EmbeddedDestinationSettings {}

/**
 * Embedded Plus Scte20 Destination Settings
 */
export interface EmbeddedPlusScte20DestinationSettings {}

/**
 * Rtmp Caption Info Destination Settings
 */
export interface RtmpCaptionInfoDestinationSettings {}

/**
 * Scte20 Plus Embedded Destination Settings
 */
export interface Scte20PlusEmbeddedDestinationSettings {}

/**
 * Scte27 Destination Settings
 */
export interface Scte27DestinationSettings {}

/**
 * Smpte Tt Destination Settings
 */
export interface SmpteTtDestinationSettings {}

/**
 * Teletext Destination Settings
 */
export interface TeletextDestinationSettings {}

export enum TtmlDestinationStyleControl {
  PASSTHROUGH = "PASSTHROUGH",
  USE_CONFIGURED = "USE_CONFIGURED",
}

/**
 * Ttml Destination Settings
 */
export interface TtmlDestinationSettings {
  /**
   * This field is not currently supported and will not affect the output styling. Leave the default value.
   */
  StyleControl?: TtmlDestinationStyleControl | string;
}

export enum WebvttDestinationStyleControl {
  NO_STYLE_DATA = "NO_STYLE_DATA",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Webvtt Destination Settings
 */
export interface WebvttDestinationSettings {
  /**
   * Controls whether the color and position of the source captions is passed through to the WebVTT output captions.  PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT.  NO_STYLE_DATA - Don't pass through the style. The output captions will not contain any font styling information.
   */
  StyleControl?: WebvttDestinationStyleControl | string;
}

/**
 * Caption Destination Settings
 */
export interface CaptionDestinationSettings {
  /**
   * Arib Destination Settings
   */
  AribDestinationSettings?: AribDestinationSettings;

  /**
   * Burn In Destination Settings
   */
  BurnInDestinationSettings?: BurnInDestinationSettings;

  /**
   * Dvb Sub Destination Settings
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings;

  /**
   * Ebu Tt DDestination Settings
   */
  EbuTtDDestinationSettings?: EbuTtDDestinationSettings;

  /**
   * Embedded Destination Settings
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

  /**
   * Embedded Plus Scte20 Destination Settings
   */
  EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;

  /**
   * Rtmp Caption Info Destination Settings
   */
  RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;

  /**
   * Scte20 Plus Embedded Destination Settings
   */
  Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;

  /**
   * Scte27 Destination Settings
   */
  Scte27DestinationSettings?: Scte27DestinationSettings;

  /**
   * Smpte Tt Destination Settings
   */
  SmpteTtDestinationSettings?: SmpteTtDestinationSettings;

  /**
   * Teletext Destination Settings
   */
  TeletextDestinationSettings?: TeletextDestinationSettings;

  /**
   * Ttml Destination Settings
   */
  TtmlDestinationSettings?: TtmlDestinationSettings;

  /**
   * Webvtt Destination Settings
   */
  WebvttDestinationSettings?: WebvttDestinationSettings;
}

/**
 * Caption Description
 */
export interface CaptionDescription {
  /**
   * Indicates whether the caption track implements accessibility features such as written descriptions of spoken dialog, music, and sounds.
   */
  Accessibility?: AccessibilityType | string;

  /**
   * Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.
   */
  CaptionSelectorName: string | undefined;

  /**
   * Additional settings for captions destination that depend on the destination type.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/
   */
  LanguageCode?: string;

  /**
   * Human readable information to indicate captions available for players (eg. English, or Spanish).
   */
  LanguageDescription?: string;

  /**
   * Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event.
   */
  Name: string | undefined;
}

/**
 * Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
 */
export interface CaptionLanguageMapping {
  /**
   * The closed caption channel being described by this CaptionLanguageMapping.  Each channel mapping must have a unique channel number (maximum of 4)
   */
  CaptionChannel: number | undefined;

  /**
   * Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)
   */
  LanguageCode: string | undefined;

  /**
   * Textual description of language
   */
  LanguageDescription: string | undefined;
}

/**
 * Ancillary Source Settings
 */
export interface AncillarySourceSettings {
  /**
   * Specifies the number (1 to 4) of the captions channel you want to extract from the ancillary captions. If you plan to convert the ancillary captions to another format, complete this field. If you plan to choose Embedded as the captions destination in the output (to pass through all the channels in the ancillary captions), leave this field blank because MediaLive ignores the field.
   */
  SourceAncillaryChannelNumber?: number;
}

/**
 * Arib Source Settings
 */
export interface AribSourceSettings {}

export enum DvbSubOcrLanguage {
  DEU = "DEU",
  ENG = "ENG",
  FRA = "FRA",
  NLD = "NLD",
  POR = "POR",
  SPA = "SPA",
}

/**
 * Dvb Sub Source Settings
 */
export interface DvbSubSourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to
   * provide the language to consider when translating the image-based source to text.
   */
  OcrLanguage?: DvbSubOcrLanguage | string;

  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   */
  Pid?: number;
}

export enum EmbeddedConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

export enum EmbeddedScte20Detection {
  AUTO = "AUTO",
  OFF = "OFF",
}

/**
 * Embedded Source Settings
 */
export interface EmbeddedSourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: EmbeddedConvert608To708 | string;

  /**
   * Set to "auto" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.
   */
  Scte20Detection?: EmbeddedScte20Detection | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;

  /**
   * This field is unused and deprecated.
   */
  Source608TrackNumber?: number;
}

export enum Scte20Convert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

/**
 * Scte20 Source Settings
 */
export interface Scte20SourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: Scte20Convert608To708 | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;
}

export enum Scte27OcrLanguage {
  DEU = "DEU",
  ENG = "ENG",
  FRA = "FRA",
  NLD = "NLD",
  POR = "POR",
  SPA = "SPA",
}

/**
 * Scte27 Source Settings
 */
export interface Scte27SourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to
   * provide the language to consider when translating the image-based source to text.
   */
  OcrLanguage?: Scte27OcrLanguage | string;

  /**
   * The pid field is used in conjunction with the caption selector languageCode field as follows:
   *   - Specify PID and Language: Extracts captions from that PID; the language is "informational".
   *   - Specify PID and omit Language: Extracts the specified PID.
   *   - Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be.
   *   - Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages will be passed through.
   */
  Pid?: number;
}

/**
 * Caption Rectangle
 */
export interface CaptionRectangle {
  /**
   * See the description in leftOffset.
   * For height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, \"80\" means the rectangle height is 80% of the underlying frame height. The topOffset and rectangleHeight must add up to 100% or less.
   * This field corresponds to tts:extent - Y in the TTML standard.
   */
  Height: number | undefined;

  /**
   * Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. (Make sure to leave the default if you don't have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages.
   * If you specify a value for one of these fields, you must specify a value for all of them.
   * For leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame.
   * This field corresponds to tts:origin - X in the TTML standard.
   */
  LeftOffset: number | undefined;

  /**
   * See the description in leftOffset.
   * For topOffset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame.
   * This field corresponds to tts:origin - Y in the TTML standard.
   */
  TopOffset: number | undefined;

  /**
   * See the description in leftOffset.
   * For width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, \"80\" means the rectangle width is 80% of the underlying frame width. The leftOffset and rectangleWidth must add up to 100% or less.
   * This field corresponds to tts:extent - X in the TTML standard.
   */
  Width: number | undefined;
}

/**
 * Teletext Source Settings
 */
export interface TeletextSourceSettings {
  /**
   * Optionally defines a region where TTML style captions will be displayed
   */
  OutputRectangle?: CaptionRectangle;

  /**
   * Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no "0x" prefix.
   */
  PageNumber?: string;
}

/**
 * Caption Selector Settings
 */
export interface CaptionSelectorSettings {
  /**
   * Ancillary Source Settings
   */
  AncillarySourceSettings?: AncillarySourceSettings;

  /**
   * Arib Source Settings
   */
  AribSourceSettings?: AribSourceSettings;

  /**
   * Dvb Sub Source Settings
   */
  DvbSubSourceSettings?: DvbSubSourceSettings;

  /**
   * Embedded Source Settings
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings;

  /**
   * Scte20 Source Settings
   */
  Scte20SourceSettings?: Scte20SourceSettings;

  /**
   * Scte27 Source Settings
   */
  Scte27SourceSettings?: Scte27SourceSettings;

  /**
   * Teletext Source Settings
   */
  TeletextSourceSettings?: TeletextSourceSettings;
}

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface CaptionSelector {
  /**
   * When specified this field indicates the three letter language code of the caption track to extract from the source.
   */
  LanguageCode?: string;

  /**
   * Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event.
   */
  Name: string | undefined;

  /**
   * Caption selector settings.
   */
  SelectorSettings?: CaptionSelectorSettings;
}

/**
 * Placeholder documentation for ChannelEgressEndpoint
 */
export interface ChannelEgressEndpoint {
  /**
   * Public IP of where a channel's output comes from
   */
  SourceIp?: string;
}

export enum CdiInputResolution {
  FHD = "FHD",
  HD = "HD",
  SD = "SD",
  UHD = "UHD",
}

/**
 * Placeholder documentation for CdiInputSpecification
 */
export interface CdiInputSpecification {
  /**
   * Maximum CDI input resolution
   */
  Resolution?: CdiInputResolution | string;
}

export enum ChannelClass {
  SINGLE_PIPELINE = "SINGLE_PIPELINE",
  STANDARD = "STANDARD",
}

/**
 * MediaPackage Output Destination Settings
 */
export interface MediaPackageOutputDestinationSettings {
  /**
   * ID of the channel in MediaPackage that is the destination for this output group. You do not need to specify the individual inputs in MediaPackage; MediaLive will handle the connection of the two MediaLive pipelines to the two MediaPackage inputs. The MediaPackage channel and MediaLive channel must be in the same region.
   */
  ChannelId?: string;
}

/**
 * Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex
 */
export interface MultiplexProgramChannelDestinationSettings {
  /**
   * The ID of the Multiplex that the encoder is providing output to. You do not need to specify the individual inputs to the Multiplex; MediaLive will handle the connection of the two MediaLive pipelines to the two Multiplex instances.
   * The Multiplex must be in the same region as the Channel.
   */
  MultiplexId?: string;

  /**
   * The program name of the Multiplex program that the encoder is providing output to.
   */
  ProgramName?: string;
}

/**
 * Placeholder documentation for OutputDestinationSettings
 */
export interface OutputDestinationSettings {
  /**
   * key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * Stream name for RTMP destinations (URLs of type rtmp://)
   */
  StreamName?: string;

  /**
   * A URL specifying a destination
   */
  Url?: string;

  /**
   * username for destination
   */
  Username?: string;
}

/**
 * Placeholder documentation for OutputDestination
 */
export interface OutputDestination {
  /**
   * User-specified id. This is used in an output group or an output.
   */
  Id?: string;

  /**
   * Destination settings for a MediaPackage output; one destination for both encoders.
   */
  MediaPackageSettings?: MediaPackageOutputDestinationSettings[];

  /**
   * Destination settings for a Multiplex output; one destination for both encoders.
   */
  MultiplexSettings?: MultiplexProgramChannelDestinationSettings;

  /**
   * Destination settings for a standard output; one destination for each redundant encoder.
   */
  Settings?: OutputDestinationSettings[];
}

/**
 * Placeholder documentation for AudioSilenceFailoverSettings
 */
export interface AudioSilenceFailoverSettings {
  /**
   * The name of the audio selector in the input that MediaLive should monitor to detect silence. Select your most important rendition. If you didn't create an audio selector in this input, leave blank.
   */
  AudioSelectorName: string | undefined;

  /**
   * The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs. Silence is defined as audio loss or audio quieter than -50 dBFS.
   */
  AudioSilenceThresholdMsec?: number;
}

/**
 * MediaLive will perform a failover if content is not detected in this input for the specified period.
 */
export interface InputLossFailoverSettings {
  /**
   * The amount of time (in milliseconds) that no input is detected. After that time, an input failover will occur.
   */
  InputLossThresholdMsec?: number;
}

/**
 * Placeholder documentation for VideoBlackFailoverSettings
 */
export interface VideoBlackFailoverSettings {
  /**
   * A value used in calculating the threshold below which MediaLive considers a pixel to be 'black'. For the input to be considered black, every pixel in a frame must be below this threshold. The threshold is calculated as a percentage (expressed as a decimal) of white. Therefore .1 means 10% white (or 90% black). Note how the formula works for any color depth. For example, if you set this field to 0.1 in 10-bit color depth: (1023*0.1=102.3), which means a pixel value of 102 or less is 'black'. If you set this field to .1 in an 8-bit color depth: (255*0.1=25.5), which means a pixel value of 25 or less is 'black'. The range is 0.0 to 1.0, with any number of decimal places.
   */
  BlackDetectThreshold?: number;

  /**
   * The amount of time (in milliseconds) that the active input must be black before automatic input failover occurs.
   */
  VideoBlackThresholdMsec?: number;
}

/**
 * Settings for one failover condition.
 */
export interface FailoverConditionSettings {
  /**
   * MediaLive will perform a failover if the specified audio selector is silent for the specified period.
   */
  AudioSilenceSettings?: AudioSilenceFailoverSettings;

  /**
   * MediaLive will perform a failover if content is not detected in this input for the specified period.
   */
  InputLossSettings?: InputLossFailoverSettings;

  /**
   * MediaLive will perform a failover if content is considered black for the specified period.
   */
  VideoBlackSettings?: VideoBlackFailoverSettings;
}

/**
 * Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.
 */
export interface FailoverCondition {
  /**
   * Failover condition type-specific settings.
   */
  FailoverConditionSettings?: FailoverConditionSettings;
}

export enum InputPreference {
  EQUAL_INPUT_PREFERENCE = "EQUAL_INPUT_PREFERENCE",
  PRIMARY_INPUT_PREFERRED = "PRIMARY_INPUT_PREFERRED",
}

/**
 * The settings for Automatic Input Failover.
 */
export interface AutomaticInputFailoverSettings {
  /**
   * This clear time defines the requirement a recovered input must meet to be considered healthy. The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input_preference for the failover pair is set to PRIMARY_INPUT_PREFERRED, because after this time, MediaLive will switch back to the primary input.
   */
  ErrorClearTimeMsec?: number;

  /**
   * A list of failover conditions. If any of these conditions occur, MediaLive will perform a failover to the other input.
   */
  FailoverConditions?: FailoverCondition[];

  /**
   * Input preference when deciding which input to make active when a previously failed input has recovered.
   */
  InputPreference?: InputPreference | string;

  /**
   * The input ID of the secondary input in the automatic input failover pair.
   */
  SecondaryInputId: string | undefined;
}

export enum InputDeblockFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum InputDenoiseFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum InputFilter {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  FORCED = "FORCED",
}

export enum HlsScte35SourceType {
  MANIFEST = "MANIFEST",
  SEGMENTS = "SEGMENTS",
}

/**
 * Hls Input Settings
 */
export interface HlsInputSettings {
  /**
   * When specified the HLS stream with the m3u8 BANDWIDTH that most closely matches this value will be chosen, otherwise the highest bandwidth stream in the m3u8 will be chosen.  The bitrate is specified in bits per second, as in an HLS manifest.
   */
  Bandwidth?: number;

  /**
   * When specified, reading of the HLS input will begin this many buffer segments from the end (most recently written segment).  When not specified, the HLS input will begin with the first segment specified in the m3u8.
   */
  BufferSegments?: number;

  /**
   * The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
   */
  Retries?: number;

  /**
   * The number of seconds between retries when an attempt to read a manifest or segment fails.
   */
  RetryInterval?: number;

  /**
   * Identifies the source for the SCTE-35 messages that MediaLive will ingest. Messages can be ingested from the content segments (in the stream) or from tags in the playlist (the HLS manifest). MediaLive ignores SCTE-35 information in the source that is not selected.
   */
  Scte35Source?: HlsScte35SourceType | string;
}

export enum NetworkInputServerValidation {
  CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME = "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME",
  CHECK_CRYPTOGRAPHY_ONLY = "CHECK_CRYPTOGRAPHY_ONLY",
}

/**
 * Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.
 */
export interface NetworkInputSettings {
  /**
   * Specifies HLS input settings when the uri is for a HLS manifest.
   */
  HlsInputSettings?: HlsInputSettings;

  /**
   * Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https.
   */
  ServerValidation?: NetworkInputServerValidation | string;
}

export enum Smpte2038DataPreference {
  IGNORE = "IGNORE",
  PREFER = "PREFER",
}

export enum InputSourceEndBehavior {
  CONTINUE = "CONTINUE",
  LOOP = "LOOP",
}

export enum VideoSelectorColorSpace {
  FOLLOW = "FOLLOW",
  HDR10 = "HDR10",
  HLG_2020 = "HLG_2020",
  REC_601 = "REC_601",
  REC_709 = "REC_709",
}

/**
 * Hdr10 Settings
 */
export interface Hdr10Settings {
  /**
   * Maximum Content Light Level
   * An integer metadata value defining the maximum light level, in nits,
   * of any single pixel within an encoded HDR video stream or file.
   */
  MaxCll?: number;

  /**
   * Maximum Frame Average Light Level
   * An integer metadata value defining the maximum average light level, in nits,
   * for any single frame within an encoded HDR video stream or file.
   */
  MaxFall?: number;
}

/**
 * Video Selector Color Space Settings
 */
export interface VideoSelectorColorSpaceSettings {
  /**
   * Hdr10 Settings
   */
  Hdr10Settings?: Hdr10Settings;
}

export enum VideoSelectorColorSpaceUsage {
  FALLBACK = "FALLBACK",
  FORCE = "FORCE",
}

/**
 * Video Selector Pid
 */
export interface VideoSelectorPid {
  /**
   * Selects a specific PID from within a video source.
   */
  Pid?: number;
}

/**
 * Video Selector Program Id
 */
export interface VideoSelectorProgramId {
  /**
   * Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default.
   */
  ProgramId?: number;
}

/**
 * Video Selector Settings
 */
export interface VideoSelectorSettings {
  /**
   * Video Selector Pid
   */
  VideoSelectorPid?: VideoSelectorPid;

  /**
   * Video Selector Program Id
   */
  VideoSelectorProgramId?: VideoSelectorProgramId;
}

/**
 * Specifies a particular video stream within an input source. An input may have only a single video selector.
 */
export interface VideoSelector {
  /**
   * Specifies the color space of an input. This setting works in tandem with colorSpaceUsage and a video description's colorSpaceSettingsChoice to determine if any conversion will be performed.
   */
  ColorSpace?: VideoSelectorColorSpace | string;

  /**
   * Color space settings
   */
  ColorSpaceSettings?: VideoSelectorColorSpaceSettings;

  /**
   * Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
   */
  ColorSpaceUsage?: VideoSelectorColorSpaceUsage | string;

  /**
   * The video selector settings.
   */
  SelectorSettings?: VideoSelectorSettings;
}

/**
 * Live Event input parameters. There can be multiple inputs in a single Live Event.
 */
export interface InputSettings {
  /**
   * Used to select the audio stream to decode for inputs that have multiple available.
   */
  AudioSelectors?: AudioSelector[];

  /**
   * Used to select the caption input to use for inputs that have multiple available.
   */
  CaptionSelectors?: CaptionSelector[];

  /**
   * Enable or disable the deblock filter when filtering.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Enable or disable the denoise filter when filtering.
   */
  DenoiseFilter?: InputDenoiseFilter | string;

  /**
   * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
   */
  FilterStrength?: number;

  /**
   * Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.
   * 1) auto - filtering will be applied depending on input type/quality
   * 2) disabled - no filtering will be applied to the input
   * 3) forced - filtering will be applied regardless of input type
   */
  InputFilter?: InputFilter | string;

  /**
   * Input settings.
   */
  NetworkInputSettings?: NetworkInputSettings;

  /**
   * PID from which to read SCTE-35 messages. If left undefined, EML will select the first SCTE-35 PID found in the input.
   */
  Scte35Pid?: number;

  /**
   * Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in this input. Applicable data types are captions, timecode, AFD, and SCTE-104 messages.
   * - PREFER: Extract from SMPTE-2038 if present in this input, otherwise extract from another source (if any).
   * - IGNORE: Never extract any ancillary data from SMPTE-2038.
   */
  Smpte2038DataPreference?: Smpte2038DataPreference | string;

  /**
   * Loop input if it is a file. This allows a file input to be streamed indefinitely.
   */
  SourceEndBehavior?: InputSourceEndBehavior | string;

  /**
   * Informs which video elementary stream to decode for input types that have multiple available.
   */
  VideoSelector?: VideoSelector;
}

/**
 * Placeholder documentation for InputAttachment
 */
export interface InputAttachment {
  /**
   * User-specified settings for defining what the conditions are for declaring the input unhealthy and failing over to a different input.
   */
  AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;

  /**
   * User-specified name for the attachment. This is required if the user wants to use this input in an input switch action.
   */
  InputAttachmentName?: string;

  /**
   * The ID of the input
   */
  InputId?: string;

  /**
   * Settings of an input (caption selector, etc.)
   */
  InputSettings?: InputSettings;
}

export enum InputCodec {
  AVC = "AVC",
  HEVC = "HEVC",
  MPEG2 = "MPEG2",
}

export enum InputMaximumBitrate {
  MAX_10_MBPS = "MAX_10_MBPS",
  MAX_20_MBPS = "MAX_20_MBPS",
  MAX_50_MBPS = "MAX_50_MBPS",
}

export enum InputResolution {
  HD = "HD",
  SD = "SD",
  UHD = "UHD",
}

/**
 * Placeholder documentation for InputSpecification
 */
export interface InputSpecification {
  /**
   * Input codec
   */
  Codec?: InputCodec | string;

  /**
   * Maximum input bitrate, categorized coarsely
   */
  MaximumBitrate?: InputMaximumBitrate | string;

  /**
   * Input resolution, categorized coarsely
   */
  Resolution?: InputResolution | string;
}

export enum LogLevel {
  DEBUG = "DEBUG",
  DISABLED = "DISABLED",
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
}

export enum MaintenanceDay {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

/**
 * Placeholder documentation for MaintenanceStatus
 */
export interface MaintenanceStatus {
  /**
   * The currently selected maintenance day.
   */
  MaintenanceDay?: MaintenanceDay | string;

  /**
   * Maintenance is required by the displayed date and time. Date and time is in ISO.
   */
  MaintenanceDeadline?: string;

  /**
   * The currently scheduled maintenance date and time. Date and time is in ISO.
   */
  MaintenanceScheduledDate?: string;

  /**
   * The currently selected maintenance start time. Time is in UTC.
   */
  MaintenanceStartTime?: string;
}

export enum ChannelState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  IDLE = "IDLE",
  RECOVERING = "RECOVERING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * The properties for a private VPC Output
 */
export interface VpcOutputSettingsDescription {
  /**
   * The Availability Zones where the vpc subnets are located.
   * The first Availability Zone applies to the first subnet in the list of subnets.
   * The second Availability Zone applies to the second subnet.
   */
  AvailabilityZones?: string[];

  /**
   * A list of Elastic Network Interfaces created by MediaLive in the customer's VPC
   */
  NetworkInterfaceIds?: string[];

  /**
   * A list of up EC2 VPC security group IDs attached to the Output VPC network interfaces.
   */
  SecurityGroupIds?: string[];

  /**
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds?: string[];
}

/**
 * Placeholder documentation for ChannelSummary
 */
export interface ChannelSummary {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for any VPC outputs.
   */
  Vpc?: VpcOutputSettingsDescription;
}

export enum HlsAdMarkers {
  ADOBE = "ADOBE",
  ELEMENTAL = "ELEMENTAL",
  ELEMENTAL_SCTE35 = "ELEMENTAL_SCTE35",
}

/**
 * The properties for a VPC type input destination.
 */
export interface InputDestinationVpc {
  /**
   * The availability zone of the Input destination.
   */
  AvailabilityZone?: string;

  /**
   * The network interface ID of the Input destination in the VPC.
   */
  NetworkInterfaceId?: string;
}

/**
 * The settings for a PUSH type input.
 */
export interface InputDestination {
  /**
   * The system-generated static IP address of endpoint.
   * It remains fixed for the lifetime of the input.
   */
  Ip?: string;

  /**
   * The port number for the input.
   */
  Port?: string;

  /**
   * This represents the endpoint that the customer stream will be
   * pushed to.
   */
  Url?: string;

  /**
   * The properties for a VPC type input destination.
   */
  Vpc?: InputDestinationVpc;
}

export enum InputClass {
  SINGLE_PIPELINE = "SINGLE_PIPELINE",
  STANDARD = "STANDARD",
}

/**
 * Settings for an input device.
 */
export interface InputDeviceSettings {
  /**
   * The unique ID for the device.
   */
  Id?: string;
}

export enum InputSourceType {
  DYNAMIC = "DYNAMIC",
  STATIC = "STATIC",
}

/**
 * The settings for a MediaConnect Flow.
 */
export interface MediaConnectFlow {
  /**
   * The unique ARN of the MediaConnect Flow being used as a source.
   */
  FlowArn?: string;
}

/**
 * The settings for a PULL type input.
 */
export interface InputSource {
  /**
   * The key used to extract the password from EC2 Parameter store.
   */
  PasswordParam?: string;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   */
  Url?: string;

  /**
   * The username for the input source.
   */
  Username?: string;
}

export enum InputState {
  ATTACHED = "ATTACHED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  DETACHED = "DETACHED",
}

export enum InputType {
  AWS_CDI = "AWS_CDI",
  INPUT_DEVICE = "INPUT_DEVICE",
  MEDIACONNECT = "MEDIACONNECT",
  MP4_FILE = "MP4_FILE",
  RTMP_PULL = "RTMP_PULL",
  RTMP_PUSH = "RTMP_PUSH",
  RTP_PUSH = "RTP_PUSH",
  TS_FILE = "TS_FILE",
  UDP_PUSH = "UDP_PUSH",
  URL_PULL = "URL_PULL",
}

/**
 * Placeholder documentation for Input
 */
export interface Input {
  /**
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: string[];

  /**
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: InputDestination[];

  /**
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   */
  InputClass?: InputClass | string;

  /**
   * Settings for the input devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of IDs for all Inputs which are partners of this one.
   */
  InputPartnerIds?: string[];

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   */
  InputSourceType?: InputSourceType | string;

  /**
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: string[];

  /**
   * A list of the sources of the input (PULL-type).
   */
  Sources?: InputSource[];

  /**
   * Placeholder documentation for InputState
   */
  State?: InputState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   */
  Type?: InputType | string;
}

/**
 * Endpoint settings for a PUSH type input.
 */
export interface InputDestinationRequest {
  /**
   * A unique name for the location the RTMP stream is being pushed
   * to.
   */
  StreamName?: string;
}

/**
 * Settings for an input device.
 */
export interface InputDeviceRequest {
  /**
   * The unique ID for the device.
   */
  Id?: string;
}

export enum InputDeviceConnectionState {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}

export enum DeviceSettingsSyncState {
  SYNCED = "SYNCED",
  SYNCING = "SYNCING",
}

export enum DeviceUpdateStatus {
  NOT_UP_TO_DATE = "NOT_UP_TO_DATE",
  UPDATING = "UPDATING",
  UP_TO_DATE = "UP_TO_DATE",
}

export enum InputDeviceActiveInput {
  HDMI = "HDMI",
  SDI = "SDI",
}

export enum InputDeviceConfiguredInput {
  AUTO = "AUTO",
  HDMI = "HDMI",
  SDI = "SDI",
}

export enum InputDeviceState {
  IDLE = "IDLE",
  STREAMING = "STREAMING",
}

export enum InputDeviceScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

/**
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 */
export interface InputDeviceHdSettings {
  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   */
  ActiveInput?: InputDeviceActiveInput | string;

  /**
   * The source at the input device that is currently active. You can specify this source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;

  /**
   * The state of the input device.
   */
  DeviceState?: InputDeviceState | string;

  /**
   * The frame rate of the video source.
   */
  Framerate?: number;

  /**
   * The height of the video source, in pixels.
   */
  Height?: number;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   */
  MaxBitrate?: number;

  /**
   * The scan type of the video source.
   */
  ScanType?: InputDeviceScanType | string;

  /**
   * The width of the video source, in pixels.
   */
  Width?: number;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms). You can specify this value.
   */
  LatencyMs?: number;
}

export enum InputDeviceIpScheme {
  DHCP = "DHCP",
  STATIC = "STATIC",
}

/**
 * The network settings for the input device.
 */
export interface InputDeviceNetworkSettings {
  /**
   * The DNS addresses of the input device.
   */
  DnsAddresses?: string[];

  /**
   * The network gateway IP address.
   */
  Gateway?: string;

  /**
   * The IP address of the input device.
   */
  IpAddress?: string;

  /**
   * Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.
   */
  IpScheme?: InputDeviceIpScheme | string;

  /**
   * The subnet mask of the input device.
   */
  SubnetMask?: string;
}

export enum InputDeviceType {
  HD = "HD",
  UHD = "UHD",
}

/**
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 */
export interface InputDeviceUhdSettings {
  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   */
  ActiveInput?: InputDeviceActiveInput | string;

  /**
   * The source at the input device that is currently active. You can specify this source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;

  /**
   * The state of the input device.
   */
  DeviceState?: InputDeviceState | string;

  /**
   * The frame rate of the video source.
   */
  Framerate?: number;

  /**
   * The height of the video source, in pixels.
   */
  Height?: number;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   */
  MaxBitrate?: number;

  /**
   * The scan type of the video source.
   */
  ScanType?: InputDeviceScanType | string;

  /**
   * The width of the video source, in pixels.
   */
  Width?: number;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms). You can specify this value.
   */
  LatencyMs?: number;
}

/**
 * Details of the input device.
 */
export interface InputDeviceSummary {
  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * Network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;
}

export enum InputSecurityGroupState {
  DELETED = "DELETED",
  IDLE = "IDLE",
  IN_USE = "IN_USE",
  UPDATING = "UPDATING",
}

/**
 * Whitelist rule
 */
export interface InputWhitelistRule {
  /**
   * The IPv4 CIDR that's whitelisted.
   */
  Cidr?: string;
}

/**
 * An Input Security Group
 */
export interface InputSecurityGroup {
  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: string[];

  /**
   * The current state of the Input Security Group.
   */
  State?: InputSecurityGroupState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: InputWhitelistRule[];
}

/**
 * Settings for for a PULL type input.
 */
export interface InputSourceRequest {
  /**
   * The key used to extract the password from EC2 Parameter store.
   */
  PasswordParam?: string;

  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   */
  Url?: string;

  /**
   * The username for the input source.
   */
  Username?: string;
}

/**
 * An IPv4 CIDR to whitelist.
 */
export interface InputWhitelistRuleCidr {
  /**
   * The IPv4 CIDR to whitelist.
   */
  Cidr?: string;
}

/**
 * The settings for a MediaConnect Flow.
 */
export interface MediaConnectFlowRequest {
  /**
   * The ARN of the MediaConnect Flow that you want to use as a source.
   */
  FlowArn?: string;
}

/**
 * Multiplex MediaConnect output destination settings.
 */
export interface MultiplexMediaConnectOutputDestinationSettings {
  /**
   * The MediaConnect entitlement ARN available as a Flow source.
   */
  EntitlementArn?: string;
}

/**
 * Multiplex output destination settings
 */
export interface MultiplexOutputDestination {
  /**
   * Multiplex MediaConnect output destination settings.
   */
  MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings;
}

/**
 * The current source for one of the pipelines in the multiplex.
 */
export interface MultiplexProgramPipelineDetail {
  /**
   * Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
   */
  ActiveChannelPipeline?: string;

  /**
   * Identifies a specific pipeline in the multiplex.
   */
  PipelineId?: string;
}

/**
 * Placeholder documentation for MultiplexProgramSummary
 */
export interface MultiplexProgramSummary {
  /**
   * The MediaLive Channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
}

/**
 * Contains summary configuration for a Multiplex event.
 */
export interface MultiplexSettingsSummary {
  /**
   * Transport stream bit rate.
   */
  TransportStreamBitrate?: number;
}

export enum MultiplexState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  IDLE = "IDLE",
  RECOVERING = "RECOVERING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
}

/**
 * Placeholder documentation for MultiplexSummary
 */
export interface MultiplexSummary {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettingsSummary;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

export enum OfferingDurationUnits {
  MONTHS = "MONTHS",
}

export enum OfferingType {
  NO_UPFRONT = "NO_UPFRONT",
}

export enum ReservationCodec {
  AUDIO = "AUDIO",
  AVC = "AVC",
  HEVC = "HEVC",
  LINK = "LINK",
  MPEG2 = "MPEG2",
}

export enum ReservationMaximumBitrate {
  MAX_10_MBPS = "MAX_10_MBPS",
  MAX_20_MBPS = "MAX_20_MBPS",
  MAX_50_MBPS = "MAX_50_MBPS",
}

export enum ReservationMaximumFramerate {
  MAX_30_FPS = "MAX_30_FPS",
  MAX_60_FPS = "MAX_60_FPS",
}

export enum ReservationResolution {
  FHD = "FHD",
  HD = "HD",
  SD = "SD",
  UHD = "UHD",
}

export enum ReservationResourceType {
  CHANNEL = "CHANNEL",
  INPUT = "INPUT",
  MULTIPLEX = "MULTIPLEX",
  OUTPUT = "OUTPUT",
}

export enum ReservationSpecialFeature {
  ADVANCED_AUDIO = "ADVANCED_AUDIO",
  AUDIO_NORMALIZATION = "AUDIO_NORMALIZATION",
  MGHD = "MGHD",
  MGUHD = "MGUHD",
}

export enum ReservationVideoQuality {
  ENHANCED = "ENHANCED",
  PREMIUM = "PREMIUM",
  STANDARD = "STANDARD",
}

/**
 * Resource configuration (codec, resolution, bitrate, ...)
 */
export interface ReservationResourceSpecification {
  /**
   * Channel class, e.g. 'STANDARD'
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Codec, e.g. 'AVC'
   */
  Codec?: ReservationCodec | string;

  /**
   * Maximum bitrate, e.g. 'MAX_20_MBPS'
   */
  MaximumBitrate?: ReservationMaximumBitrate | string;

  /**
   * Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)
   */
  MaximumFramerate?: ReservationMaximumFramerate | string;

  /**
   * Resolution, e.g. 'HD'
   */
  Resolution?: ReservationResolution | string;

  /**
   * Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: ReservationResourceType | string;

  /**
   * Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)
   */
  SpecialFeature?: ReservationSpecialFeature | string;

  /**
   * Video quality, e.g. 'STANDARD' (Outputs only)
   */
  VideoQuality?: ReservationVideoQuality | string;
}

/**
 * Reserved resources available for purchase
 */
export interface Offering {
  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   */
  Arn?: string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;
}

export enum M2tsAbsentInputAudioBehavior {
  DROP = "DROP",
  ENCODE_SILENCE = "ENCODE_SILENCE",
}

export enum M2tsArib {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum M2tsAribCaptionsPidControl {
  AUTO = "AUTO",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum M2tsAudioBufferModel {
  ATSC = "ATSC",
  DVB = "DVB",
}

export enum M2tsAudioStreamType {
  ATSC = "ATSC",
  DVB = "DVB",
}

export enum M2tsBufferModel {
  MULTIPLEX = "MULTIPLEX",
  NONE = "NONE",
}

export enum M2tsCcDescriptor {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * DVB Network Information Table (NIT)
 */
export interface DvbNitSettings {
  /**
   * The numeric value placed in the Network Information Table (NIT).
   */
  NetworkId: number | undefined;

  /**
   * The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters.
   */
  NetworkName: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;
}

export enum DvbSdtOutputSdt {
  SDT_FOLLOW = "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT = "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL = "SDT_MANUAL",
  SDT_NONE = "SDT_NONE",
}

/**
 * DVB Service Description Table (SDT)
 */
export interface DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. The sdtManual setting means user will enter the SDT information. The sdtNone setting means output stream will not contain SDT information.
   */
  OutputSdt?: DvbSdtOutputSdt | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;

  /**
   * The service name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceName?: string;

  /**
   * The service provider name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceProviderName?: string;
}

/**
 * DVB Time and Date Table (SDT)
 */
export interface DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;
}

export enum M2tsEbifControl {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsAudioInterval {
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

export enum M2tsKlv {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsNielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsPcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M2tsRateMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum M2tsScte35Control {
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

export enum M2tsTimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * M2ts Settings
 */
export interface M2tsSettings {
  /**
   * When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
   */
  AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior | string;

  /**
   * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
   */
  Arib?: M2tsArib | string;

  /**
   * Packet Identifier (PID) for ARIB Captions in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  AribCaptionsPid?: string;

  /**
   * If set to auto, pid number used for ARIB Captions will be auto-selected from unused pids.  If set to useConfigured, ARIB Captions will be on the configured pid number.
   */
  AribCaptionsPidControl?: M2tsAribCaptionsPidControl | string;

  /**
   * When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used.
   */
  AudioBufferModel?: M2tsAudioBufferModel | string;

  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  AudioPids?: string;

  /**
   * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.
   */
  AudioStreamType?: M2tsAudioStreamType | string;

  /**
   * The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate.
   */
  Bitrate?: number;

  /**
   * Controls the timing accuracy for output network traffic. Leave as MULTIPLEX to ensure accurate network packet timing. Or set to NONE, which might result in lower latency but will result in more variability in output network packet timing. This variability might cause interruptions, jitter, or bursty behavior in your playback or receiving devices.
   */
  BufferModel?: M2tsBufferModel | string;

  /**
   * When set to enabled, generates captionServiceDescriptor in PMT.
   */
  CcDescriptor?: M2tsCcDescriptor | string;

  /**
   * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
   */
  DvbNitSettings?: DvbNitSettings;

  /**
   * Inserts DVB Service Description Table (SDT) at the specified table repetition interval.
   */
  DvbSdtSettings?: DvbSdtSettings;

  /**
   * Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  DvbSubPids?: string;

  /**
   * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
   */
  DvbTdtSettings?: DvbTdtSettings;

  /**
   * Packet Identifier (PID) for input source DVB Teletext data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  DvbTeletextPid?: string;

  /**
   * If set to passthrough, passes any EBIF data from the input source to this output.
   */
  Ebif?: M2tsEbifControl | string;

  /**
   * When videoAndFixedIntervals is selected, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. Only available when EBP Cablelabs segmentation markers are selected.  Partitions 1 and 2 will always follow the video interval.
   */
  EbpAudioInterval?: M2tsAudioInterval | string;

  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker.  The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   */
  EbpLookaheadMs?: number;

  /**
   * Controls placement of EBP on Audio PIDs. If set to videoAndAudioPids, EBP markers will be placed on the video PID and all audio PIDs.  If set to videoPid, EBP markers will be placed on only the video PID.
   */
  EbpPlacement?: M2tsEbpPlacement | string;

  /**
   * This field is unused and deprecated.
   */
  EcmPid?: string;

  /**
   * Include or exclude the ES Rate field in the PES header.
   */
  EsRateInPes?: M2tsEsRateInPes | string;

  /**
   * Packet Identifier (PID) for input source ETV Platform data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  EtvPlatformPid?: string;

  /**
   * Packet Identifier (PID) for input source ETV Signal data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  EtvSignalPid?: string;

  /**
   * The length in seconds of each fragment. Only used with EBP markers.
   */
  FragmentTime?: number;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   */
  Klv?: M2tsKlv | string;

  /**
   * Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  KlvDataPids?: string;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: M2tsNielsenId3Behavior | string;

  /**
   * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   */
  NullPacketBitrate?: number;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.  Valid values are 0, 10..1000.
   */
  PatInterval?: number;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M2tsPcrControl | string;

  /**
   * Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream.
   */
  PcrPeriod?: number;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  PcrPid?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.
   */
  PmtInterval?: number;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  PmtPid?: string;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNum?: number;

  /**
   * When vbr, does not insert null packets into transport stream to fill specified bitrate. The bitrate setting acts as the maximum bitrate when vbr is set.
   */
  RateMode?: M2tsRateMode | string;

  /**
   * Packet Identifier (PID) for input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  Scte27Pids?: string;

  /**
   * Optionally pass SCTE-35 signals from the input source to this output.
   */
  Scte35Control?: M2tsScte35Control | string;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  Scte35Pid?: string;

  /**
   * Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   */
  SegmentationMarkers?: M2tsSegmentationMarkers | string;

  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted.
   *
   * When a segmentation style of "resetCadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds.
   *
   * When a segmentation style of "maintainCadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.
   */
  SegmentationStyle?: M2tsSegmentationStyle | string;

  /**
   * The length in seconds of each segment. Required unless markers is set to _none_.
   */
  SegmentationTime?: number;

  /**
   * When set to passthrough, timed metadata will be passed through from input to output.
   */
  TimedMetadataBehavior?: M2tsTimedMetadataBehavior | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  TimedMetadataPid?: string;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  VideoPid?: string;

  /**
   * Defines the amount SCTE-35 preroll will be increased (in milliseconds) on the output. Preroll is the amount of time between the presence of a SCTE-35 indication in a transport stream and the PTS of the video frame it references. Zero means don't add pullup (it doesn't mean set the preroll to zero). Negative pullup is not supported, which means that you can't make the preroll shorter. Be aware that latency in the output will increase by the pullup amount.
   */
  Scte35PrerollPullupMilliseconds?: number;
}

/**
 * Raw Settings
 */
export interface RawSettings {}

/**
 * Archive Container Settings
 */
export interface ArchiveContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: M2tsSettings;

  /**
   * Raw Settings
   */
  RawSettings?: RawSettings;
}

/**
 * Archive Output Settings
 */
export interface ArchiveOutputSettings {
  /**
   * Settings specific to the container type of the file.
   */
  ContainerSettings: ArchiveContainerSettings | undefined;

  /**
   * Output file extension. If excluded, this will be auto-selected from the container type.
   */
  Extension?: string;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   */
  NameModifier?: string;
}

/**
 * Frame Capture Output Settings
 */
export interface FrameCaptureOutputSettings {
  /**
   * Required if the output group contains more than one output. This modifier forms part of the output file name.
   */
  NameModifier?: string;
}

export enum HlsH265PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1",
}

export enum AudioOnlyHlsTrackType {
  ALTERNATE_AUDIO_AUTO_SELECT = "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT = "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM = "AUDIO_ONLY_VARIANT_STREAM",
}

export enum AudioOnlyHlsSegmentType {
  AAC = "AAC",
  FMP4 = "FMP4",
}

/**
 * Audio Only Hls Settings
 */
export interface AudioOnlyHlsSettings {
  /**
   * Specifies the group to which the audio Rendition belongs.
   */
  AudioGroupId?: string;

  /**
   * Optional. Specifies the .jpg or .png image to use as the cover art for an audio-only output. We recommend a low bit-size file because the image increases the output audio bandwidth.
   *
   * The image is attached to the audio as an ID3 tag, frame type APIC, picture type 0x10, as per the "ID3 tag version 2.4.0 - Native Frames" standard.
   */
  AudioOnlyImage?: InputLocation;

  /**
   * Four types of audio-only tracks are supported:
   *
   * Audio-Only Variant Stream
   * The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest.
   *
   * Alternate Audio, Auto Select, Default
   * Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES
   *
   * Alternate Audio, Auto Select, Not Default
   * Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES
   *
   * Alternate Audio, not Auto Select
   * Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   */
  AudioTrackType?: AudioOnlyHlsTrackType | string;

  /**
   * Specifies the segment type.
   */
  SegmentType?: AudioOnlyHlsSegmentType | string;
}

export enum Fmp4NielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum Fmp4TimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Fmp4 Hls Settings
 */
export interface Fmp4HlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: Fmp4NielsenId3Behavior | string;

  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   */
  TimedMetadataBehavior?: Fmp4TimedMetadataBehavior | string;
}

/**
 * Frame Capture Hls Settings
 */
export interface FrameCaptureHlsSettings {}

export enum M3u8NielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M3u8PcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M3u8Scte35Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M3u8TimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Settings information for the .m3u8 container
 */
export interface M3u8Settings {
  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.
   */
  AudioPids?: string;

  /**
   * This parameter is unused and deprecated.
   */
  EcmPid?: string;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: M3u8NielsenId3Behavior | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   */
  PatInterval?: number;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M3u8PcrControl | string;

  /**
   * Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream.
   */
  PcrPeriod?: number;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.
   */
  PcrPid?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   */
  PmtInterval?: number;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  PmtPid?: string;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNum?: number;

  /**
   * If set to passthrough, passes any SCTE-35 signals from the input source to this output.
   */
  Scte35Behavior?: M3u8Scte35Behavior | string;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  Scte35Pid?: string;

  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   */
  TimedMetadataBehavior?: M3u8TimedMetadataBehavior | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  TimedMetadataPid?: string;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  VideoPid?: string;
}

/**
 * Standard Hls Settings
 */
export interface StandardHlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * Settings information for the .m3u8 container
   */
  M3u8Settings: M3u8Settings | undefined;
}

/**
 * Hls Settings
 */
export interface HlsSettings {
  /**
   * Audio Only Hls Settings
   */
  AudioOnlyHlsSettings?: AudioOnlyHlsSettings;

  /**
   * Fmp4 Hls Settings
   */
  Fmp4HlsSettings?: Fmp4HlsSettings;

  /**
   * Frame Capture Hls Settings
   */
  FrameCaptureHlsSettings?: FrameCaptureHlsSettings;

  /**
   * Standard Hls Settings
   */
  StandardHlsSettings?: StandardHlsSettings;
}

/**
 * Hls Output Settings
 */
export interface HlsOutputSettings {
  /**
   * Only applicable when this output is referencing an H.265 video description.
   * Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   */
  H265PackagingType?: HlsH265PackagingType | string;

  /**
   * Settings regarding the underlying stream. These settings are different for audio-only outputs.
   */
  HlsSettings: HlsSettings | undefined;

  /**
   * String concatenated to the end of the destination filename. Accepts \"Format Identifiers\":#formatIdentifierParameters.
   */
  NameModifier?: string;

  /**
   * String concatenated to end of segment filenames.
   */
  SegmentModifier?: string;
}

/**
 * Media Package Output Settings
 */
export interface MediaPackageOutputSettings {}

export enum MsSmoothH265PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1",
}

/**
 * Ms Smooth Output Settings
 */
export interface MsSmoothOutputSettings {
  /**
   * Only applicable when this output is referencing an H.265 video description.
   * Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   */
  H265PackagingType?: MsSmoothH265PackagingType | string;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   */
  NameModifier?: string;
}

/**
 * Reference to an OutputDestination ID defined in the channel
 */
export interface OutputLocationRef {
  /**
   * Placeholder documentation for __string
   */
  DestinationRefId?: string;
}

/**
 * Multiplex Output Settings
 */
export interface MultiplexOutputSettings {
  /**
   * Destination is a Multiplex.
   */
  Destination: OutputLocationRef | undefined;
}

export enum RtmpOutputCertificateMode {
  SELF_SIGNED = "SELF_SIGNED",
  VERIFY_AUTHENTICITY = "VERIFY_AUTHENTICITY",
}

/**
 * Rtmp Output Settings
 */
export interface RtmpOutputSettings {
  /**
   * If set to verifyAuthenticity, verify the tls certificate chain to a trusted Certificate Authority (CA).  This will cause rtmps outputs with self-signed certificates to fail.
   */
  CertificateMode?: RtmpOutputCertificateMode | string;

  /**
   * Number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * The RTMP endpoint excluding the stream name (eg. rtmp://host/appname). For connection to Akamai, a username and password must be supplied. URI fields accept format identifiers.
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Number of retry attempts.
   */
  NumRetries?: number;
}

/**
 * Udp Container Settings
 */
export interface UdpContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: M2tsSettings;
}

export enum FecOutputIncludeFec {
  COLUMN = "COLUMN",
  COLUMN_AND_ROW = "COLUMN_AND_ROW",
}

/**
 * Fec Output Settings
 */
export interface FecOutputSettings {
  /**
   * Parameter D from SMPTE 2022-1. The height of the FEC protection matrix.  The number of transport stream packets per column error correction packet. Must be between 4 and 20, inclusive.
   */
  ColumnDepth?: number;

  /**
   * Enables column only or column and row based FEC
   */
  IncludeFec?: FecOutputIncludeFec | string;

  /**
   * Parameter L from SMPTE 2022-1. The width of the FEC protection matrix.  Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness.  If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive.
   */
  RowLength?: number;
}

/**
 * Udp Output Settings
 */
export interface UdpOutputSettings {
  /**
   * UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, etc.
   */
  BufferMsec?: number;

  /**
   * Udp Container Settings
   */
  ContainerSettings: UdpContainerSettings | undefined;

  /**
   * Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Settings for enabling and adjusting Forward Error Correction on UDP outputs.
   */
  FecOutputSettings?: FecOutputSettings;
}

/**
 * Output Settings
 */
export interface OutputSettings {
  /**
   * Archive Output Settings
   */
  ArchiveOutputSettings?: ArchiveOutputSettings;

  /**
   * Frame Capture Output Settings
   */
  FrameCaptureOutputSettings?: FrameCaptureOutputSettings;

  /**
   * Hls Output Settings
   */
  HlsOutputSettings?: HlsOutputSettings;

  /**
   * Media Package Output Settings
   */
  MediaPackageOutputSettings?: MediaPackageOutputSettings;

  /**
   * Ms Smooth Output Settings
   */
  MsSmoothOutputSettings?: MsSmoothOutputSettings;

  /**
   * Multiplex Output Settings
   */
  MultiplexOutputSettings?: MultiplexOutputSettings;

  /**
   * Rtmp Output Settings
   */
  RtmpOutputSettings?: RtmpOutputSettings;

  /**
   * Udp Output Settings
   */
  UdpOutputSettings?: UdpOutputSettings;
}

/**
 * Output settings. There can be multiple outputs within a group.
 */
export interface Output {
  /**
   * The names of the AudioDescriptions used as audio sources for this output.
   */
  AudioDescriptionNames?: string[];

  /**
   * The names of the CaptionDescriptions used as caption sources for this output.
   */
  CaptionDescriptionNames?: string[];

  /**
   * The name used to identify an output.
   */
  OutputName?: string;

  /**
   * Output type-specific settings.
   */
  OutputSettings: OutputSettings | undefined;

  /**
   * The name of the VideoDescription used as the source for this output.
   */
  VideoDescriptionName?: string;
}

export enum S3CannedAcl {
  AUTHENTICATED_READ = "AUTHENTICATED_READ",
  BUCKET_OWNER_FULL_CONTROL = "BUCKET_OWNER_FULL_CONTROL",
  BUCKET_OWNER_READ = "BUCKET_OWNER_READ",
  PUBLIC_READ = "PUBLIC_READ",
}

/**
 * Archive S3 Settings
 */
export interface ArchiveS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   */
  CannedAcl?: S3CannedAcl | string;
}

/**
 * Archive Cdn Settings
 */
export interface ArchiveCdnSettings {
  /**
   * Archive S3 Settings
   */
  ArchiveS3Settings?: ArchiveS3Settings;
}

/**
 * Archive Group Settings
 */
export interface ArchiveGroupSettings {
  /**
   * Parameters that control interactions with the CDN.
   */
  ArchiveCdnSettings?: ArchiveCdnSettings;

  /**
   * A directory and base filename where archive files should be written.
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Number of seconds to write to archive file before closing and starting a new one.
   */
  RolloverInterval?: number;
}

/**
 * Frame Capture S3 Settings
 */
export interface FrameCaptureS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   */
  CannedAcl?: S3CannedAcl | string;
}

/**
 * Frame Capture Cdn Settings
 */
export interface FrameCaptureCdnSettings {
  /**
   * Frame Capture S3 Settings
   */
  FrameCaptureS3Settings?: FrameCaptureS3Settings;
}

/**
 * Frame Capture Group Settings
 */
export interface FrameCaptureGroupSettings {
  /**
   * The destination for the frame capture files. Either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling-) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling-). The final file names consist of the prefix from the destination field (for example, "curling-") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg).  For example, curling-low.00001.jpg
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Parameters that control interactions with the CDN.
   */
  FrameCaptureCdnSettings?: FrameCaptureCdnSettings;
}

export enum HlsCaptionLanguageSetting {
  INSERT = "INSERT",
  NONE = "NONE",
  OMIT = "OMIT",
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

export enum HlsDiscontinuityTags {
  INSERT = "INSERT",
  NEVER_INSERT = "NEVER_INSERT",
}

export enum HlsEncryptionType {
  AES128 = "AES128",
  SAMPLE_AES = "SAMPLE_AES",
}

export enum HlsAkamaiHttpTransferMode {
  CHUNKED = "CHUNKED",
  NON_CHUNKED = "NON_CHUNKED",
}

/**
 * Hls Akamai Settings
 */
export interface HlsAkamaiSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature.
   */
  HttpTransferMode?: HlsAkamaiHttpTransferMode | string;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * Salt for authenticated Akamai.
   */
  Salt?: string;

  /**
   * Token parameter for authenticated akamai. If not specified, _gda_ is used.
   */
  Token?: string;
}

/**
 * Hls Basic Put Settings
 */
export interface HlsBasicPutSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

export enum HlsMediaStoreStorageClass {
  TEMPORAL = "TEMPORAL",
}

/**
 * Hls Media Store Settings
 */
export interface HlsMediaStoreSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * When set to temporal, output files are stored in non-persistent memory for faster reading and writing.
   */
  MediaStoreStorageClass?: HlsMediaStoreStorageClass | string;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

/**
 * Hls S3 Settings
 */
export interface HlsS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   */
  CannedAcl?: S3CannedAcl | string;
}

export enum HlsWebdavHttpTransferMode {
  CHUNKED = "CHUNKED",
  NON_CHUNKED = "NON_CHUNKED",
}

/**
 * Hls Webdav Settings
 */
export interface HlsWebdavSettings {
  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Specify whether or not to use chunked transfer encoding to WebDAV.
   */
  HttpTransferMode?: HlsWebdavHttpTransferMode | string;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;
}

/**
 * Hls Cdn Settings
 */
export interface HlsCdnSettings {
  /**
   * Hls Akamai Settings
   */
  HlsAkamaiSettings?: HlsAkamaiSettings;

  /**
   * Hls Basic Put Settings
   */
  HlsBasicPutSettings?: HlsBasicPutSettings;

  /**
   * Hls Media Store Settings
   */
  HlsMediaStoreSettings?: HlsMediaStoreSettings;

  /**
   * Hls S3 Settings
   */
  HlsS3Settings?: HlsS3Settings;

  /**
   * Hls Webdav Settings
   */
  HlsWebdavSettings?: HlsWebdavSettings;
}

export enum HlsId3SegmentTaggingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum IFrameOnlyPlaylistType {
  DISABLED = "DISABLED",
  STANDARD = "STANDARD",
}

export enum HlsIncompleteSegmentBehavior {
  AUTO = "AUTO",
  SUPPRESS = "SUPPRESS",
}

export enum InputLossActionForHlsOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

export enum HlsIvInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsIvSource {
  EXPLICIT = "EXPLICIT",
  FOLLOWS_SEGMENT_NUMBER = "FOLLOWS_SEGMENT_NUMBER",
}

/**
 * Static Key Settings
 */
export interface StaticKeySettings {
  /**
   * The URL of the license server used for protecting content.
   */
  KeyProviderServer?: InputLocation;

  /**
   * Static key value as a 32 character hexadecimal string.
   */
  StaticKeyValue: string | undefined;
}

/**
 * Key Provider Settings
 */
export interface KeyProviderSettings {
  /**
   * Static Key Settings
   */
  StaticKeySettings?: StaticKeySettings;
}

export enum HlsManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

export enum HlsManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER",
}

export enum HlsMode {
  LIVE = "LIVE",
  VOD = "VOD",
}

/**
 * @internal
 */
export const InputChannelLevelFilterSensitiveLog = (obj: InputChannelLevel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioChannelMappingFilterSensitiveLog = (obj: AudioChannelMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioNormalizationSettingsFilterSensitiveLog = (obj: AudioNormalizationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NielsenCBETFilterSensitiveLog = (obj: NielsenCBET): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NielsenNaesIiNwFilterSensitiveLog = (obj: NielsenNaesIiNw): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NielsenWatermarksSettingsFilterSensitiveLog = (obj: NielsenWatermarksSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioWatermarkSettingsFilterSensitiveLog = (obj: AudioWatermarkSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AacSettingsFilterSensitiveLog = (obj: AacSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ac3SettingsFilterSensitiveLog = (obj: Ac3Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Eac3AtmosSettingsFilterSensitiveLog = (obj: Eac3AtmosSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Eac3SettingsFilterSensitiveLog = (obj: Eac3Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Mp2SettingsFilterSensitiveLog = (obj: Mp2Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PassThroughSettingsFilterSensitiveLog = (obj: PassThroughSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WavSettingsFilterSensitiveLog = (obj: WavSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioCodecSettingsFilterSensitiveLog = (obj: AudioCodecSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemixSettingsFilterSensitiveLog = (obj: RemixSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioDescriptionFilterSensitiveLog = (obj: AudioDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioHlsRenditionSelectionFilterSensitiveLog = (obj: AudioHlsRenditionSelection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioLanguageSelectionFilterSensitiveLog = (obj: AudioLanguageSelection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioPidSelectionFilterSensitiveLog = (obj: AudioPidSelection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioDolbyEDecodeFilterSensitiveLog = (obj: AudioDolbyEDecode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioTrackFilterSensitiveLog = (obj: AudioTrack): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioTrackSelectionFilterSensitiveLog = (obj: AudioTrackSelection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioSelectorSettingsFilterSensitiveLog = (obj: AudioSelectorSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioSelectorFilterSensitiveLog = (obj: AudioSelector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchFailedResultModelFilterSensitiveLog = (obj: BatchFailedResultModel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchSuccessfulResultModelFilterSensitiveLog = (obj: BatchSuccessfulResultModel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AribDestinationSettingsFilterSensitiveLog = (obj: AribDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputLocationFilterSensitiveLog = (obj: InputLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BurnInDestinationSettingsFilterSensitiveLog = (obj: BurnInDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DvbSubDestinationSettingsFilterSensitiveLog = (obj: DvbSubDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbuTtDDestinationSettingsFilterSensitiveLog = (obj: EbuTtDDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmbeddedDestinationSettingsFilterSensitiveLog = (obj: EmbeddedDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmbeddedPlusScte20DestinationSettingsFilterSensitiveLog = (
  obj: EmbeddedPlusScte20DestinationSettings
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RtmpCaptionInfoDestinationSettingsFilterSensitiveLog = (obj: RtmpCaptionInfoDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Scte20PlusEmbeddedDestinationSettingsFilterSensitiveLog = (
  obj: Scte20PlusEmbeddedDestinationSettings
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Scte27DestinationSettingsFilterSensitiveLog = (obj: Scte27DestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SmpteTtDestinationSettingsFilterSensitiveLog = (obj: SmpteTtDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TeletextDestinationSettingsFilterSensitiveLog = (obj: TeletextDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TtmlDestinationSettingsFilterSensitiveLog = (obj: TtmlDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WebvttDestinationSettingsFilterSensitiveLog = (obj: WebvttDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaptionDestinationSettingsFilterSensitiveLog = (obj: CaptionDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaptionDescriptionFilterSensitiveLog = (obj: CaptionDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaptionLanguageMappingFilterSensitiveLog = (obj: CaptionLanguageMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AncillarySourceSettingsFilterSensitiveLog = (obj: AncillarySourceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AribSourceSettingsFilterSensitiveLog = (obj: AribSourceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DvbSubSourceSettingsFilterSensitiveLog = (obj: DvbSubSourceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmbeddedSourceSettingsFilterSensitiveLog = (obj: EmbeddedSourceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Scte20SourceSettingsFilterSensitiveLog = (obj: Scte20SourceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Scte27SourceSettingsFilterSensitiveLog = (obj: Scte27SourceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaptionRectangleFilterSensitiveLog = (obj: CaptionRectangle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TeletextSourceSettingsFilterSensitiveLog = (obj: TeletextSourceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaptionSelectorSettingsFilterSensitiveLog = (obj: CaptionSelectorSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CaptionSelectorFilterSensitiveLog = (obj: CaptionSelector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelEgressEndpointFilterSensitiveLog = (obj: ChannelEgressEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CdiInputSpecificationFilterSensitiveLog = (obj: CdiInputSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaPackageOutputDestinationSettingsFilterSensitiveLog = (
  obj: MediaPackageOutputDestinationSettings
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiplexProgramChannelDestinationSettingsFilterSensitiveLog = (
  obj: MultiplexProgramChannelDestinationSettings
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputDestinationSettingsFilterSensitiveLog = (obj: OutputDestinationSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputDestinationFilterSensitiveLog = (obj: OutputDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioSilenceFailoverSettingsFilterSensitiveLog = (obj: AudioSilenceFailoverSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputLossFailoverSettingsFilterSensitiveLog = (obj: InputLossFailoverSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoBlackFailoverSettingsFilterSensitiveLog = (obj: VideoBlackFailoverSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailoverConditionSettingsFilterSensitiveLog = (obj: FailoverConditionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailoverConditionFilterSensitiveLog = (obj: FailoverCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutomaticInputFailoverSettingsFilterSensitiveLog = (obj: AutomaticInputFailoverSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsInputSettingsFilterSensitiveLog = (obj: HlsInputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInputSettingsFilterSensitiveLog = (obj: NetworkInputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Hdr10SettingsFilterSensitiveLog = (obj: Hdr10Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoSelectorColorSpaceSettingsFilterSensitiveLog = (obj: VideoSelectorColorSpaceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoSelectorPidFilterSensitiveLog = (obj: VideoSelectorPid): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoSelectorProgramIdFilterSensitiveLog = (obj: VideoSelectorProgramId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoSelectorSettingsFilterSensitiveLog = (obj: VideoSelectorSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoSelectorFilterSensitiveLog = (obj: VideoSelector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputSettingsFilterSensitiveLog = (obj: InputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputAttachmentFilterSensitiveLog = (obj: InputAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputSpecificationFilterSensitiveLog = (obj: InputSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceStatusFilterSensitiveLog = (obj: MaintenanceStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcOutputSettingsDescriptionFilterSensitiveLog = (obj: VpcOutputSettingsDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelSummaryFilterSensitiveLog = (obj: ChannelSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDestinationVpcFilterSensitiveLog = (obj: InputDestinationVpc): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDestinationFilterSensitiveLog = (obj: InputDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDeviceSettingsFilterSensitiveLog = (obj: InputDeviceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaConnectFlowFilterSensitiveLog = (obj: MediaConnectFlow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputSourceFilterSensitiveLog = (obj: InputSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputFilterSensitiveLog = (obj: Input): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDestinationRequestFilterSensitiveLog = (obj: InputDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDeviceRequestFilterSensitiveLog = (obj: InputDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDeviceHdSettingsFilterSensitiveLog = (obj: InputDeviceHdSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDeviceNetworkSettingsFilterSensitiveLog = (obj: InputDeviceNetworkSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDeviceUhdSettingsFilterSensitiveLog = (obj: InputDeviceUhdSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDeviceSummaryFilterSensitiveLog = (obj: InputDeviceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputWhitelistRuleFilterSensitiveLog = (obj: InputWhitelistRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputSecurityGroupFilterSensitiveLog = (obj: InputSecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputSourceRequestFilterSensitiveLog = (obj: InputSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputWhitelistRuleCidrFilterSensitiveLog = (obj: InputWhitelistRuleCidr): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaConnectFlowRequestFilterSensitiveLog = (obj: MediaConnectFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiplexMediaConnectOutputDestinationSettingsFilterSensitiveLog = (
  obj: MultiplexMediaConnectOutputDestinationSettings
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiplexOutputDestinationFilterSensitiveLog = (obj: MultiplexOutputDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiplexProgramPipelineDetailFilterSensitiveLog = (obj: MultiplexProgramPipelineDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiplexProgramSummaryFilterSensitiveLog = (obj: MultiplexProgramSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiplexSettingsSummaryFilterSensitiveLog = (obj: MultiplexSettingsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiplexSummaryFilterSensitiveLog = (obj: MultiplexSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservationResourceSpecificationFilterSensitiveLog = (obj: ReservationResourceSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OfferingFilterSensitiveLog = (obj: Offering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DvbNitSettingsFilterSensitiveLog = (obj: DvbNitSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DvbSdtSettingsFilterSensitiveLog = (obj: DvbSdtSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DvbTdtSettingsFilterSensitiveLog = (obj: DvbTdtSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const M2tsSettingsFilterSensitiveLog = (obj: M2tsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RawSettingsFilterSensitiveLog = (obj: RawSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveContainerSettingsFilterSensitiveLog = (obj: ArchiveContainerSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveOutputSettingsFilterSensitiveLog = (obj: ArchiveOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameCaptureOutputSettingsFilterSensitiveLog = (obj: FrameCaptureOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioOnlyHlsSettingsFilterSensitiveLog = (obj: AudioOnlyHlsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Fmp4HlsSettingsFilterSensitiveLog = (obj: Fmp4HlsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameCaptureHlsSettingsFilterSensitiveLog = (obj: FrameCaptureHlsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const M3u8SettingsFilterSensitiveLog = (obj: M3u8Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StandardHlsSettingsFilterSensitiveLog = (obj: StandardHlsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsSettingsFilterSensitiveLog = (obj: HlsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsOutputSettingsFilterSensitiveLog = (obj: HlsOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaPackageOutputSettingsFilterSensitiveLog = (obj: MediaPackageOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MsSmoothOutputSettingsFilterSensitiveLog = (obj: MsSmoothOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputLocationRefFilterSensitiveLog = (obj: OutputLocationRef): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiplexOutputSettingsFilterSensitiveLog = (obj: MultiplexOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RtmpOutputSettingsFilterSensitiveLog = (obj: RtmpOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UdpContainerSettingsFilterSensitiveLog = (obj: UdpContainerSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FecOutputSettingsFilterSensitiveLog = (obj: FecOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UdpOutputSettingsFilterSensitiveLog = (obj: UdpOutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputSettingsFilterSensitiveLog = (obj: OutputSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputFilterSensitiveLog = (obj: Output): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveS3SettingsFilterSensitiveLog = (obj: ArchiveS3Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveCdnSettingsFilterSensitiveLog = (obj: ArchiveCdnSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveGroupSettingsFilterSensitiveLog = (obj: ArchiveGroupSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameCaptureS3SettingsFilterSensitiveLog = (obj: FrameCaptureS3Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameCaptureCdnSettingsFilterSensitiveLog = (obj: FrameCaptureCdnSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FrameCaptureGroupSettingsFilterSensitiveLog = (obj: FrameCaptureGroupSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsAkamaiSettingsFilterSensitiveLog = (obj: HlsAkamaiSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsBasicPutSettingsFilterSensitiveLog = (obj: HlsBasicPutSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsMediaStoreSettingsFilterSensitiveLog = (obj: HlsMediaStoreSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsS3SettingsFilterSensitiveLog = (obj: HlsS3Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsWebdavSettingsFilterSensitiveLog = (obj: HlsWebdavSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HlsCdnSettingsFilterSensitiveLog = (obj: HlsCdnSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StaticKeySettingsFilterSensitiveLog = (obj: StaticKeySettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyProviderSettingsFilterSensitiveLog = (obj: KeyProviderSettings): any => ({
  ...obj,
});
