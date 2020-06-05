import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AacAudioDescriptionBroadcasterMix {
  BROADCASTER_MIXED_AD = "BROADCASTER_MIXED_AD",
  NORMAL = "NORMAL"
}

export enum AacCodecProfile {
  HEV1 = "HEV1",
  HEV2 = "HEV2",
  LC = "LC"
}

export enum AacCodingMode {
  AD_RECEIVER_MIX = "AD_RECEIVER_MIX",
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_5_1 = "CODING_MODE_5_1"
}

export enum AacRateControlMode {
  CBR = "CBR",
  VBR = "VBR"
}

export enum AacRawFormat {
  LATM_LOAS = "LATM_LOAS",
  NONE = "NONE"
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
 */
export interface AacSettings {
  __type?: "AacSettings";
  /**
   * Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and  FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.
   */
  AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix | string;

  /**
   * Specify the average bitrate in bits per second. The set of valid values for this setting is: 6000, 8000, 10000, 12000, 14000, 16000, 20000, 24000, 28000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 384000, 448000, 512000, 576000, 640000, 768000, 896000, 1024000. The value you set is also constrained by the values that you choose for Profile (codecProfile), Bitrate control mode (codingMode), and Sample rate (sampleRate). Default values depend on Bitrate control mode and Profile.
   */
  Bitrate?: number;

  /**
   * AAC Profile.
   */
  CodecProfile?: AacCodecProfile | string;

  /**
   * Mono (Audio Description), Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. "1.0 - Audio Description (Receiver Mix)" setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   */
  CodingMode?: AacCodingMode | string;

  /**
   * Rate Control Mode.
   */
  RateControlMode?: AacRateControlMode | string;

  /**
   * Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.
   */
  RawFormat?: AacRawFormat | string;

  /**
   * Sample rate in Hz. Valid values depend on rate control mode and profile.
   */
  SampleRate?: number;

  /**
   * Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   */
  Specification?: AacSpecification | string;

  /**
   * VBR Quality Level - Only used if rate_control_mode is VBR.
   */
  VbrQuality?: AacVbrQuality | string;
}

export namespace AacSettings {
  export const filterSensitiveLog = (obj: AacSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is AacSettings => __isa(o, "AacSettings");
}

export enum AacSpecification {
  MPEG2 = "MPEG2",
  MPEG4 = "MPEG4"
}

export enum AacVbrQuality {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM_HIGH = "MEDIUM_HIGH",
  MEDIUM_LOW = "MEDIUM_LOW"
}

export enum Ac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  DIALOGUE = "DIALOGUE",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  MUSIC_AND_EFFECTS = "MUSIC_AND_EFFECTS",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
  VOICE_OVER = "VOICE_OVER"
}

export enum Ac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2_LFE = "CODING_MODE_3_2_LFE"
}

export enum Ac3DynamicRangeCompressionProfile {
  FILM_STANDARD = "FILM_STANDARD",
  NONE = "NONE"
}

export enum Ac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum Ac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED"
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
 */
export interface Ac3Settings {
  __type?: "Ac3Settings";
  /**
   * Specify the average bitrate in bits per second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Ac3BitstreamMode | string;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   */
  CodingMode?: Ac3CodingMode | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * If set to FILM_STANDARD, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
   */
  DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile | string;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   */
  LfeFilter?: Ac3LfeFilter | string;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Ac3MetadataControl | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;
}

export namespace Ac3Settings {
  export const filterSensitiveLog = (obj: Ac3Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is Ac3Settings => __isa(o, "Ac3Settings");
}

export enum AccelerationMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  PREFERRED = "PREFERRED"
}

/**
 * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
 */
export interface AccelerationSettings {
  __type?: "AccelerationSettings";
  /**
   * Specify the conditions when the service will run your job with accelerated transcoding.
   */
  Mode: AccelerationMode | string | undefined;
}

export namespace AccelerationSettings {
  export const filterSensitiveLog = (obj: AccelerationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccelerationSettings =>
    __isa(o, "AccelerationSettings");
}

export enum AccelerationStatus {
  ACCELERATED = "ACCELERATED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_ACCELERATED = "NOT_ACCELERATED",
  NOT_APPLICABLE = "NOT_APPLICABLE"
}

export enum AfdSignaling {
  AUTO = "AUTO",
  FIXED = "FIXED",
  NONE = "NONE"
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
 */
export interface AiffSettings {
  __type?: "AiffSettings";
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   */
  BitDepth?: number;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   */
  Channels?: number;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;
}

export namespace AiffSettings {
  export const filterSensitiveLog = (obj: AiffSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is AiffSettings => __isa(o, "AiffSettings");
}

export enum AlphaBehavior {
  DISCARD = "DISCARD",
  REMAP_TO_LUMA = "REMAP_TO_LUMA"
}

export enum AncillaryConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT"
}

/**
 * Settings for ancillary captions source.
 */
export interface AncillarySourceSettings {
  __type?: "AncillarySourceSettings";
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: AncillaryConvert608To708 | string;

  /**
   * Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.
   */
  SourceAncillaryChannelNumber?: number;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   */
  TerminateCaptions?: AncillaryTerminateCaptions | string;
}

export namespace AncillarySourceSettings {
  export const filterSensitiveLog = (obj: AncillarySourceSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is AncillarySourceSettings =>
    __isa(o, "AncillarySourceSettings");
}

export enum AncillaryTerminateCaptions {
  DISABLED = "DISABLED",
  END_OF_INPUT = "END_OF_INPUT"
}

export enum AntiAlias {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export interface AssociateCertificateRequest {
  __type?: "AssociateCertificateRequest";
  /**
   * The ARN of the ACM certificate that you want to associate with your MediaConvert resource.
   */
  Arn: string | undefined;
}

export namespace AssociateCertificateRequest {
  export const filterSensitiveLog = (
    obj: AssociateCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateCertificateRequest =>
    __isa(o, "AssociateCertificateRequest");
}

export interface AssociateCertificateResponse {
  __type?: "AssociateCertificateResponse";
}

export namespace AssociateCertificateResponse {
  export const filterSensitiveLog = (
    obj: AssociateCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateCertificateResponse =>
    __isa(o, "AssociateCertificateResponse");
}

export enum AudioCodec {
  AAC = "AAC",
  AC3 = "AC3",
  AIFF = "AIFF",
  EAC3 = "EAC3",
  EAC3_ATMOS = "EAC3_ATMOS",
  MP2 = "MP2",
  MP3 = "MP3",
  PASSTHROUGH = "PASSTHROUGH",
  WAV = "WAV"
}

/**
 * Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * MP3, Mp3Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings
 */
export interface AudioCodecSettings {
  __type?: "AudioCodecSettings";
  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
   */
  AacSettings?: AacSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
   */
  Ac3Settings?: Ac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
   */
  AiffSettings?: AiffSettings;

  /**
   * Type of Audio codec.
   */
  Codec?: AudioCodec | string;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
   */
  Eac3AtmosSettings?: Eac3AtmosSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
   */
  Eac3Settings?: Eac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
   */
  Mp2Settings?: Mp2Settings;

  /**
   * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
   */
  Mp3Settings?: Mp3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
   */
  WavSettings?: WavSettings;
}

export namespace AudioCodecSettings {
  export const filterSensitiveLog = (obj: AudioCodecSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is AudioCodecSettings =>
    __isa(o, "AudioCodecSettings");
}

export enum AudioDefaultSelection {
  DEFAULT = "DEFAULT",
  NOT_DEFAULT = "NOT_DEFAULT"
}

/**
 * Description of audio output
 */
export interface AudioDescription {
  __type?: "AudioDescription";
  /**
   * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
   */
  AudioNormalizationSettings?: AudioNormalizationSettings;

  /**
   * Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.
   */
  AudioSourceName?: string;

  /**
   * Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.
   */
  AudioType?: number;

  /**
   * When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.
   */
  AudioTypeControl?: AudioTypeControl | string;

  /**
   * Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * MP3, Mp3Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings
   */
  CodecSettings?: AudioCodecSettings;

  /**
   * Specify the language for this audio output track. The service puts this language code into your output audio track when you set Language code control (AudioLanguageCodeControl) to Use configured (USE_CONFIGURED). The service also uses your specified custom language code when you set Language code control (AudioLanguageCodeControl) to Follow input (FOLLOW_INPUT), but your input file doesn't specify a language code. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify which source for language code takes precedence for this audio track. When you choose Follow input (FOLLOW_INPUT), the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code (languageCode or customLanguageCode). When you choose Use configured (USE_CONFIGURED), the service uses the language code that you specify.
   */
  LanguageCodeControl?: AudioLanguageCodeControl | string;

  /**
   * Advanced audio remixing settings.
   */
  RemixSettings?: RemixSettings;

  /**
   * Specify a label for this output audio stream. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  StreamName?: string;
}

export namespace AudioDescription {
  export const filterSensitiveLog = (obj: AudioDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is AudioDescription =>
    __isa(o, "AudioDescription");
}

export enum AudioLanguageCodeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED"
}

export enum AudioNormalizationAlgorithm {
  ITU_BS_1770_1 = "ITU_BS_1770_1",
  ITU_BS_1770_2 = "ITU_BS_1770_2",
  ITU_BS_1770_3 = "ITU_BS_1770_3",
  ITU_BS_1770_4 = "ITU_BS_1770_4"
}

export enum AudioNormalizationAlgorithmControl {
  CORRECT_AUDIO = "CORRECT_AUDIO",
  MEASURE_ONLY = "MEASURE_ONLY"
}

export enum AudioNormalizationLoudnessLogging {
  DONT_LOG = "DONT_LOG",
  LOG = "LOG"
}

export enum AudioNormalizationPeakCalculation {
  NONE = "NONE",
  TRUE_PEAK = "TRUE_PEAK"
}

/**
 * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
 */
export interface AudioNormalizationSettings {
  __type?: "AudioNormalizationSettings";
  /**
   * Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.
   */
  Algorithm?: AudioNormalizationAlgorithm | string;

  /**
   * When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | string;

  /**
   * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected. Gating only applies when not using real_time_correction.
   */
  CorrectionGateLevel?: number;

  /**
   * If set to LOG, log each output's audio track loudness to a CSV file.
   */
  LoudnessLogging?: AudioNormalizationLoudnessLogging | string;

  /**
   * If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.
   */
  PeakCalculation?: AudioNormalizationPeakCalculation | string;

  /**
   * When you use Audio normalization (AudioNormalizationSettings), optionally use this setting to specify a target loudness. If you don't specify a value here, the encoder chooses a value for you, based on the algorithm that you choose for Algorithm (algorithm). If you choose algorithm 1770-1, the encoder will choose -24 LKFS; otherwise, the encoder will choose -23 LKFS.
   */
  TargetLkfs?: number;
}

export namespace AudioNormalizationSettings {
  export const filterSensitiveLog = (obj: AudioNormalizationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is AudioNormalizationSettings =>
    __isa(o, "AudioNormalizationSettings");
}

/**
 * Selector for Audio
 */
export interface AudioSelector {
  __type?: "AudioSelector";
  /**
   * Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code
   */
  CustomLanguageCode?: string;

  /**
   * Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.
   */
  DefaultSelection?: AudioDefaultSelection | string;

  /**
   * Specifies audio data from an external file source.
   */
  ExternalAudioFileInput?: string;

  /**
   * Selects a specific language code from within an audio source.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specifies a time delta in milliseconds to offset the audio from the input video.
   */
  Offset?: number;

  /**
   * Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).
   */
  Pids?: number[];

  /**
   * Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If you are sending a JSON file, provide the program ID, which is part of the audio metadata. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track.
   */
  ProgramSelection?: number;

  /**
   * Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.
   */
  RemixSettings?: RemixSettings;

  /**
   * Specifies the type of the audio selector.
   */
  SelectorType?: AudioSelectorType | string;

  /**
   * Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For examle, type "1,2,3" to include tracks 1 through 3. Specifying directly in your JSON job file, provide the track numbers in an array. For example, "tracks": [1,2,3].
   */
  Tracks?: number[];
}

export namespace AudioSelector {
  export const filterSensitiveLog = (obj: AudioSelector): any => ({
    ...obj
  });
  export const isa = (o: any): o is AudioSelector => __isa(o, "AudioSelector");
}

/**
 * Group of Audio Selectors
 */
export interface AudioSelectorGroup {
  __type?: "AudioSelectorGroup";
  /**
   * Name of an Audio Selector within the same input to include in the group.  Audio selector names are standardized, based on their order within the input (e.g., "Audio Selector 1"). The audio selector name parameter can be repeated to add any number of audio selectors to the group.
   */
  AudioSelectorNames?: string[];
}

export namespace AudioSelectorGroup {
  export const filterSensitiveLog = (obj: AudioSelectorGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is AudioSelectorGroup =>
    __isa(o, "AudioSelectorGroup");
}

export enum AudioSelectorType {
  LANGUAGE_CODE = "LANGUAGE_CODE",
  PID = "PID",
  TRACK = "TRACK"
}

export enum AudioTypeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED"
}

/**
 * Settings for Avail Blanking
 */
export interface AvailBlanking {
  __type?: "AvailBlanking";
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: string;
}

export namespace AvailBlanking {
  export const filterSensitiveLog = (obj: AvailBlanking): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailBlanking => __isa(o, "AvailBlanking");
}

/**
 * The service can't process your request because of a problem in the request. Please check your request form and syntax.
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
}

export enum BillingTagsSource {
  JOB = "JOB",
  JOB_TEMPLATE = "JOB_TEMPLATE",
  PRESET = "PRESET",
  QUEUE = "QUEUE"
}

/**
 * Burn-In Destination Settings.
 */
export interface BurninDestinationSettings {
  __type?: "BurninDestinationSettings";
  /**
   * If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: BurninSubtitleAlignment | string;

  /**
   * Specifies the color of the rectangle behind the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: BurninSubtitleBackgroundColor | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: BurninSubtitleFontColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. This is used to help determine the appropriate font for rendering burn-in captions.
   */
  FontScript?: FontScript | string;

  /**
   * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: number;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: BurninSubtitleOutlineColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: BurninSubtitleShadowColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.
   */
  TeletextSpacing?: BurninSubtitleTeletextSpacing | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export namespace BurninDestinationSettings {
  export const filterSensitiveLog = (obj: BurninDestinationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is BurninDestinationSettings =>
    __isa(o, "BurninDestinationSettings");
}

export enum BurninSubtitleAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT"
}

export enum BurninSubtitleBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE"
}

export enum BurninSubtitleFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW"
}

export enum BurninSubtitleOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW"
}

export enum BurninSubtitleShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE"
}

export enum BurninSubtitleTeletextSpacing {
  FIXED_GRID = "FIXED_GRID",
  PROPORTIONAL = "PROPORTIONAL"
}

export interface CancelJobRequest {
  __type?: "CancelJobRequest";
  /**
   * The Job ID of the job to be cancelled.
   */
  Id: string | undefined;
}

export namespace CancelJobRequest {
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelJobRequest =>
    __isa(o, "CancelJobRequest");
}

export interface CancelJobResponse {
  __type?: "CancelJobResponse";
}

export namespace CancelJobResponse {
  export const filterSensitiveLog = (obj: CancelJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelJobResponse =>
    __isa(o, "CancelJobResponse");
}

/**
 * Description of Caption output
 */
export interface CaptionDescription {
  __type?: "CaptionDescription";
  /**
   * Specifies which "Caption Selector":#inputs-caption_selector to use from each input when generating captions. The name should be of the format "Caption Selector <N>", which denotes that the Nth Caption Selector will be used from each input.
   */
  CaptionSelectorName?: string;

  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  LanguageDescription?: string;
}

export namespace CaptionDescription {
  export const filterSensitiveLog = (obj: CaptionDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaptionDescription =>
    __isa(o, "CaptionDescription");
}

/**
 * Caption Description for preset
 */
export interface CaptionDescriptionPreset {
  __type?: "CaptionDescriptionPreset";
  /**
   * Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.
   */
  CustomLanguageCode?: string;

  /**
   * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
   */
  LanguageDescription?: string;
}

export namespace CaptionDescriptionPreset {
  export const filterSensitiveLog = (obj: CaptionDescriptionPreset): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaptionDescriptionPreset =>
    __isa(o, "CaptionDescriptionPreset");
}

/**
 * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
 */
export interface CaptionDestinationSettings {
  __type?: "CaptionDestinationSettings";
  /**
   * Burn-In Destination Settings.
   */
  BurninDestinationSettings?: BurninDestinationSettings;

  /**
   * Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Other options are embedded with SCTE-20, burn-in, DVB-sub, IMSC, SCC, SRT, teletext, TTML, and web-VTT. If you are using SCTE-20, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED) to create an output that complies with the SCTE-43 spec. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20).
   */
  DestinationType?: CaptionDestinationType | string;

  /**
   * DVB-Sub Destination Settings
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings;

  /**
   * Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

  /**
   * Settings specific to IMSC caption outputs.
   */
  ImscDestinationSettings?: ImscDestinationSettings;

  /**
   * Settings for SCC caption output.
   */
  SccDestinationSettings?: SccDestinationSettings;

  /**
   * Settings for Teletext caption output
   */
  TeletextDestinationSettings?: TeletextDestinationSettings;

  /**
   * Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
   */
  TtmlDestinationSettings?: TtmlDestinationSettings;
}

export namespace CaptionDestinationSettings {
  export const filterSensitiveLog = (obj: CaptionDestinationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaptionDestinationSettings =>
    __isa(o, "CaptionDestinationSettings");
}

export enum CaptionDestinationType {
  BURN_IN = "BURN_IN",
  DVB_SUB = "DVB_SUB",
  EMBEDDED = "EMBEDDED",
  EMBEDDED_PLUS_SCTE20 = "EMBEDDED_PLUS_SCTE20",
  IMSC = "IMSC",
  SCC = "SCC",
  SCTE20_PLUS_EMBEDDED = "SCTE20_PLUS_EMBEDDED",
  SMI = "SMI",
  SRT = "SRT",
  TELETEXT = "TELETEXT",
  TTML = "TTML",
  WEBVTT = "WEBVTT"
}

/**
 * Set up captions in your outputs by first selecting them from your input here.
 */
export interface CaptionSelector {
  __type?: "CaptionSelector";
  /**
   * The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   */
  CustomLanguageCode?: string;

  /**
   * The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   */
  SourceSettings?: CaptionSourceSettings;
}

export namespace CaptionSelector {
  export const filterSensitiveLog = (obj: CaptionSelector): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaptionSelector =>
    __isa(o, "CaptionSelector");
}

/**
 * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 */
export interface CaptionSourceSettings {
  __type?: "CaptionSourceSettings";
  /**
   * Settings for ancillary captions source.
   */
  AncillarySourceSettings?: AncillarySourceSettings;

  /**
   * DVB Sub Source Settings
   */
  DvbSubSourceSettings?: DvbSubSourceSettings;

  /**
   * Settings for embedded captions Source
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings;

  /**
   * If your input captions are SCC, SMI, SRT, STL, TTML, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
   */
  FileSourceSettings?: FileSourceSettings;

  /**
   * Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format.
   */
  SourceType?: CaptionSourceType | string;

  /**
   * Settings specific to Teletext caption sources, including Page number.
   */
  TeletextSourceSettings?: TeletextSourceSettings;

  /**
   * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
   */
  TrackSourceSettings?: TrackSourceSettings;
}

export namespace CaptionSourceSettings {
  export const filterSensitiveLog = (obj: CaptionSourceSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaptionSourceSettings =>
    __isa(o, "CaptionSourceSettings");
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
  SRT = "SRT",
  STL = "STL",
  TELETEXT = "TELETEXT",
  TTML = "TTML"
}

/**
 * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
 */
export interface ChannelMapping {
  __type?: "ChannelMapping";
  /**
   * List of output channels
   */
  OutputChannels?: OutputChannelMapping[];
}

export namespace ChannelMapping {
  export const filterSensitiveLog = (obj: ChannelMapping): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChannelMapping =>
    __isa(o, "ChannelMapping");
}

/**
 * Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group.
 */
export interface CmafAdditionalManifest {
  __type?: "CmafAdditionalManifest";
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

export namespace CmafAdditionalManifest {
  export const filterSensitiveLog = (obj: CmafAdditionalManifest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CmafAdditionalManifest =>
    __isa(o, "CmafAdditionalManifest");
}

export enum CmafClientCache {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum CmafCodecSpecification {
  RFC_4281 = "RFC_4281",
  RFC_6381 = "RFC_6381"
}

/**
 * Settings for CMAF encryption
 */
export interface CmafEncryptionSettings {
  __type?: "CmafEncryptionSettings";
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   */
  ConstantInitializationVector?: string;

  /**
   * Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR).
   */
  EncryptionMethod?: CmafEncryptionType | string;

  /**
   * When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.
   */
  InitializationVectorInManifest?: CmafInitializationVectorInManifest | string;

  /**
   * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProviderCmaf;

  /**
   * Use these settings to set up encryption with a static key provider.
   */
  StaticKeyProvider?: StaticKeyProvider;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   */
  Type?: CmafKeyProviderType | string;
}

export namespace CmafEncryptionSettings {
  export const filterSensitiveLog = (obj: CmafEncryptionSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is CmafEncryptionSettings =>
    __isa(o, "CmafEncryptionSettings");
}

export enum CmafEncryptionType {
  AES_CTR = "AES_CTR",
  SAMPLE_AES = "SAMPLE_AES"
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
 */
export interface CmafGroupSettings {
  __type?: "CmafGroupSettings";
  /**
   * By default, the service creates one top-level .m3u8 HLS manifest and one top -level .mpd DASH manifest for each CMAF output group in your job. These default manifests reference every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here. For each additional manifest that you specify, the service creates one HLS manifest and one DASH manifest.
   */
  AdditionalManifests?: CmafAdditionalManifest[];

  /**
   * A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   */
  BaseUrl?: string;

  /**
   * When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.
   */
  ClientCache?: CmafClientCache | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: CmafCodecSpecification | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: CmafEncryptionSettings;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  FragmentLength?: number;

  /**
   * When set to GZIP, compresses HLS playlist.
   */
  ManifestCompression?: CmafManifestCompression | string;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   */
  ManifestDurationFormat?: CmafManifestDurationFormat | string;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   */
  MinBufferTime?: number;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).
   */
  MpdProfile?: CmafMpdProfile | string;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   */
  SegmentControl?: CmafSegmentControl | string;

  /**
   * Use this setting to specify the length, in seconds, of each individual CMAF segment. This value applies to the whole package; that is, to every output in the output group. Note that segments end on the first keyframe after this number of seconds, so the actual segment length might be slightly longer. If you set Segment control (CmafSegmentControl) to single file, the service puts the content of each output in a single file that has metadata that marks these segments. If you set it to segmented files, the service creates multiple files for each output, each with the content of one segment.
   */
  SegmentLength?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: CmafStreamInfResolution | string;

  /**
   * When set to ENABLED, a DASH MPD manifest will be generated for this output.
   */
  WriteDashManifest?: CmafWriteDASHManifest | string;

  /**
   * When set to ENABLED, an Apple HLS manifest will be generated for this output.
   */
  WriteHlsManifest?: CmafWriteHLSManifest | string;

  /**
   * When you enable Precise segment duration in DASH manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.
   */
  WriteSegmentTimelineInRepresentation?:
    | CmafWriteSegmentTimelineInRepresentation
    | string;
}

export namespace CmafGroupSettings {
  export const filterSensitiveLog = (obj: CmafGroupSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is CmafGroupSettings =>
    __isa(o, "CmafGroupSettings");
}

export enum CmafInitializationVectorInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum CmafKeyProviderType {
  SPEKE = "SPEKE",
  STATIC_KEY = "STATIC_KEY"
}

export enum CmafManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE"
}

export enum CmafManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER"
}

export enum CmafMpdProfile {
  MAIN_PROFILE = "MAIN_PROFILE",
  ON_DEMAND_PROFILE = "ON_DEMAND_PROFILE"
}

export enum CmafSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE"
}

export enum CmafStreamInfResolution {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum CmafWriteDASHManifest {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum CmafWriteHLSManifest {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum CmafWriteSegmentTimelineInRepresentation {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum CmfcScte35Esam {
  INSERT = "INSERT",
  NONE = "NONE"
}

export enum CmfcScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH"
}

/**
 * Settings for MP4 segments in CMAF
 */
export interface CmfcSettings {
  __type?: "CmfcSettings";
  /**
   * Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
   */
  Scte35Esam?: CmfcScte35Esam | string;

  /**
   * Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.
   */
  Scte35Source?: CmfcScte35Source | string;
}

export namespace CmfcSettings {
  export const filterSensitiveLog = (obj: CmfcSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is CmfcSettings => __isa(o, "CmfcSettings");
}

/**
 * Settings for color correction.
 */
export interface ColorCorrector {
  __type?: "ColorCorrector";
  /**
   * Brightness level.
   */
  Brightness?: number;

  /**
   * Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, and from SDR to HDR. The service doesn't support conversion from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output.
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
   * Hue in degrees.
   */
  Hue?: number;

  /**
   * Saturation level.
   */
  Saturation?: number;
}

export namespace ColorCorrector {
  export const filterSensitiveLog = (obj: ColorCorrector): any => ({
    ...obj
  });
  export const isa = (o: any): o is ColorCorrector =>
    __isa(o, "ColorCorrector");
}

export enum ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT"
}

export enum ColorSpace {
  FOLLOW = "FOLLOW",
  HDR10 = "HDR10",
  HLG_2020 = "HLG_2020",
  REC_601 = "REC_601",
  REC_709 = "REC_709"
}

export enum ColorSpaceConversion {
  FORCE_601 = "FORCE_601",
  FORCE_709 = "FORCE_709",
  FORCE_HDR10 = "FORCE_HDR10",
  FORCE_HLG_2020 = "FORCE_HLG_2020",
  NONE = "NONE"
}

export enum ColorSpaceUsage {
  FALLBACK = "FALLBACK",
  FORCE = "FORCE"
}

export enum Commitment {
  ONE_YEAR = "ONE_YEAR"
}

/**
 * The service couldn't complete your request because there is a conflict with the current state of the resource.
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

/**
 * Container specific settings.
 */
export interface ContainerSettings {
  __type?: "ContainerSettings";
  /**
   * Settings for MP4 segments in CMAF
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
   * Settings for TS segments in HLS
   */
  M3u8Settings?: M3u8Settings;

  /**
   * Settings for MOV Container.
   */
  MovSettings?: MovSettings;

  /**
   * Settings for MP4 container. You can create audio-only AAC outputs with this container.
   */
  Mp4Settings?: Mp4Settings;

  /**
   * Settings for MP4 segments in DASH
   */
  MpdSettings?: MpdSettings;
}

export namespace ContainerSettings {
  export const filterSensitiveLog = (obj: ContainerSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContainerSettings =>
    __isa(o, "ContainerSettings");
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
  RAW = "RAW"
}

export interface CreateJobRequest {
  __type?: "CreateJobRequest";
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
   */
  BillingTagsSource?: BillingTagsSource | string;

  /**
   * Idempotency token for CreateJob operation.
   */
  ClientRequestToken?: string;

  /**
   * When you create a job, you can either specify a job template or specify the transcoding settings individually
   */
  JobTemplate?: string;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
   */
  Queue?: string;

  /**
   * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
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
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string };

  /**
   * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   */
  UserMetadata?: { [key: string]: string };
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobRequest =>
    __isa(o, "CreateJobRequest");
}

export interface CreateJobResponse {
  __type?: "CreateJobResponse";
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

export namespace CreateJobResponse {
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobResponse =>
    __isa(o, "CreateJobResponse");
}

export interface CreateJobTemplateRequest {
  __type?: "CreateJobTemplateRequest";
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
  Tags?: { [key: string]: string };
}

export namespace CreateJobTemplateRequest {
  export const filterSensitiveLog = (obj: CreateJobTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobTemplateRequest =>
    __isa(o, "CreateJobTemplateRequest");
}

export interface CreateJobTemplateResponse {
  __type?: "CreateJobTemplateResponse";
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

export namespace CreateJobTemplateResponse {
  export const filterSensitiveLog = (obj: CreateJobTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobTemplateResponse =>
    __isa(o, "CreateJobTemplateResponse");
}

export interface CreatePresetRequest {
  __type?: "CreatePresetRequest";
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
  Tags?: { [key: string]: string };
}

export namespace CreatePresetRequest {
  export const filterSensitiveLog = (obj: CreatePresetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePresetRequest =>
    __isa(o, "CreatePresetRequest");
}

export interface CreatePresetResponse {
  __type?: "CreatePresetResponse";
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export namespace CreatePresetResponse {
  export const filterSensitiveLog = (obj: CreatePresetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePresetResponse =>
    __isa(o, "CreatePresetResponse");
}

export interface CreateQueueRequest {
  __type?: "CreateQueueRequest";
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
  Tags?: { [key: string]: string };
}

export namespace CreateQueueRequest {
  export const filterSensitiveLog = (obj: CreateQueueRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateQueueRequest =>
    __isa(o, "CreateQueueRequest");
}

export interface CreateQueueResponse {
  __type?: "CreateQueueResponse";
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export namespace CreateQueueResponse {
  export const filterSensitiveLog = (obj: CreateQueueResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateQueueResponse =>
    __isa(o, "CreateQueueResponse");
}

/**
 * Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface DashAdditionalManifest {
  __type?: "DashAdditionalManifest";
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your DASH group is film-name.mpd. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.mpd.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

export namespace DashAdditionalManifest {
  export const filterSensitiveLog = (obj: DashAdditionalManifest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashAdditionalManifest =>
    __isa(o, "DashAdditionalManifest");
}

/**
 * Specifies DRM settings for DASH outputs.
 */
export interface DashIsoEncryptionSettings {
  __type?: "DashIsoEncryptionSettings";
  /**
   * This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.
   */
  PlaybackDeviceCompatibility?: DashIsoPlaybackDeviceCompatibility | string;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;
}

export namespace DashIsoEncryptionSettings {
  export const filterSensitiveLog = (obj: DashIsoEncryptionSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashIsoEncryptionSettings =>
    __isa(o, "DashIsoEncryptionSettings");
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
 */
export interface DashIsoGroupSettings {
  __type?: "DashIsoGroupSettings";
  /**
   * By default, the service creates one .mpd DASH manifest for each DASH ISO output group in your job. This default manifest references every output in the output group. To create additional DASH manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: DashAdditionalManifest[];

  /**
   * A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
   */
  BaseUrl?: string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * DRM settings.
   */
  Encryption?: DashIsoEncryptionSettings;

  /**
   * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  FragmentLength?: number;

  /**
   * Supports HbbTV specification as indicated
   */
  HbbtvCompliance?: DashIsoHbbtvCompliance | string;

  /**
   * Minimum time of initially buffered media that is needed to ensure smooth playout.
   */
  MinBufferTime?: number;

  /**
   * Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).
   */
  MpdProfile?: DashIsoMpdProfile | string;

  /**
   * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
   */
  SegmentControl?: DashIsoSegmentControl | string;

  /**
   * Length of mpd segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer. When Emit Single File is checked, the segmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
   */
  SegmentLength?: number;

  /**
   * If you get an HTTP error in the 400 range when you play back your DASH output, enable this setting and run your transcoding job again. When you enable this setting, the service writes precise segment durations in the DASH manifest. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When you don't enable this setting, the service writes approximate segment durations in your DASH manifest.
   */
  WriteSegmentTimelineInRepresentation?:
    | DashIsoWriteSegmentTimelineInRepresentation
    | string;
}

export namespace DashIsoGroupSettings {
  export const filterSensitiveLog = (obj: DashIsoGroupSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DashIsoGroupSettings =>
    __isa(o, "DashIsoGroupSettings");
}

export enum DashIsoHbbtvCompliance {
  HBBTV_1_5 = "HBBTV_1_5",
  NONE = "NONE"
}

export enum DashIsoMpdProfile {
  MAIN_PROFILE = "MAIN_PROFILE",
  ON_DEMAND_PROFILE = "ON_DEMAND_PROFILE"
}

export enum DashIsoPlaybackDeviceCompatibility {
  CENC_V1 = "CENC_V1",
  UNENCRYPTED_SEI = "UNENCRYPTED_SEI"
}

export enum DashIsoSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE"
}

export enum DashIsoWriteSegmentTimelineInRepresentation {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum DecryptionMode {
  AES_CBC = "AES_CBC",
  AES_CTR = "AES_CTR",
  AES_GCM = "AES_GCM"
}

export enum DeinterlaceAlgorithm {
  BLEND = "BLEND",
  BLEND_TICKER = "BLEND_TICKER",
  INTERPOLATE = "INTERPOLATE",
  INTERPOLATE_TICKER = "INTERPOLATE_TICKER"
}

/**
 * Settings for deinterlacer
 */
export interface Deinterlacer {
  __type?: "Deinterlacer";
  /**
   * Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.
   */
  Algorithm?: DeinterlaceAlgorithm | string;

  /**
   * - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video.
   */
  Control?: DeinterlacerControl | string;

  /**
   * Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.
   */
  Mode?: DeinterlacerMode | string;
}

export namespace Deinterlacer {
  export const filterSensitiveLog = (obj: Deinterlacer): any => ({
    ...obj
  });
  export const isa = (o: any): o is Deinterlacer => __isa(o, "Deinterlacer");
}

export enum DeinterlacerControl {
  FORCE_ALL_FRAMES = "FORCE_ALL_FRAMES",
  NORMAL = "NORMAL"
}

export enum DeinterlacerMode {
  ADAPTIVE = "ADAPTIVE",
  DEINTERLACE = "DEINTERLACE",
  INVERSE_TELECINE = "INVERSE_TELECINE"
}

export interface DeleteJobTemplateRequest {
  __type?: "DeleteJobTemplateRequest";
  /**
   * The name of the job template to be deleted.
   */
  Name: string | undefined;
}

export namespace DeleteJobTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteJobTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteJobTemplateRequest =>
    __isa(o, "DeleteJobTemplateRequest");
}

export interface DeleteJobTemplateResponse {
  __type?: "DeleteJobTemplateResponse";
}

export namespace DeleteJobTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteJobTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteJobTemplateResponse =>
    __isa(o, "DeleteJobTemplateResponse");
}

export interface DeletePresetRequest {
  __type?: "DeletePresetRequest";
  /**
   * The name of the preset to be deleted.
   */
  Name: string | undefined;
}

export namespace DeletePresetRequest {
  export const filterSensitiveLog = (obj: DeletePresetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePresetRequest =>
    __isa(o, "DeletePresetRequest");
}

export interface DeletePresetResponse {
  __type?: "DeletePresetResponse";
}

export namespace DeletePresetResponse {
  export const filterSensitiveLog = (obj: DeletePresetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePresetResponse =>
    __isa(o, "DeletePresetResponse");
}

export interface DeleteQueueRequest {
  __type?: "DeleteQueueRequest";
  /**
   * The name of the queue that you want to delete.
   */
  Name: string | undefined;
}

export namespace DeleteQueueRequest {
  export const filterSensitiveLog = (obj: DeleteQueueRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteQueueRequest =>
    __isa(o, "DeleteQueueRequest");
}

export interface DeleteQueueResponse {
  __type?: "DeleteQueueResponse";
}

export namespace DeleteQueueResponse {
  export const filterSensitiveLog = (obj: DeleteQueueResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteQueueResponse =>
    __isa(o, "DeleteQueueResponse");
}

export enum DescribeEndpointsMode {
  DEFAULT = "DEFAULT",
  GET_ONLY = "GET_ONLY"
}

/**
 * DescribeEndpointsRequest
 */
export interface DescribeEndpointsRequest {
  __type?: "DescribeEndpointsRequest";
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

export namespace DescribeEndpointsRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointsRequest =>
    __isa(o, "DescribeEndpointsRequest");
}

export interface DescribeEndpointsResponse {
  __type?: "DescribeEndpointsResponse";
  /**
   * List of endpoints
   */
  Endpoints?: Endpoint[];

  /**
   * Use this string to request the next batch of endpoints.
   */
  NextToken?: string;
}

export namespace DescribeEndpointsResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointsResponse =>
    __isa(o, "DescribeEndpointsResponse");
}

/**
 * Settings associated with the destination. Will vary based on the type of destination
 */
export interface DestinationSettings {
  __type?: "DestinationSettings";
  /**
   * Settings associated with S3 destination
   */
  S3Settings?: S3DestinationSettings;
}

export namespace DestinationSettings {
  export const filterSensitiveLog = (obj: DestinationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DestinationSettings =>
    __isa(o, "DestinationSettings");
}

export interface DisassociateCertificateRequest {
  __type?: "DisassociateCertificateRequest";
  /**
   * The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
   */
  Arn: string | undefined;
}

export namespace DisassociateCertificateRequest {
  export const filterSensitiveLog = (
    obj: DisassociateCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateCertificateRequest =>
    __isa(o, "DisassociateCertificateRequest");
}

export interface DisassociateCertificateResponse {
  __type?: "DisassociateCertificateResponse";
}

export namespace DisassociateCertificateResponse {
  export const filterSensitiveLog = (
    obj: DisassociateCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateCertificateResponse =>
    __isa(o, "DisassociateCertificateResponse");
}

/**
 * Settings for Dolby Vision
 */
export interface DolbyVision {
  __type?: "DolbyVision";
  /**
   * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
   */
  L6Metadata?: DolbyVisionLevel6Metadata;

  /**
   * Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies.
   */
  L6Mode?: DolbyVisionLevel6Mode | string;

  /**
   * In the current MediaConvert implementation, the Dolby Vision profile is always 5 (PROFILE_5). Therefore, all of your inputs must contain Dolby Vision frame interleaved data.
   */
  Profile?: DolbyVisionProfile | string;
}

export namespace DolbyVision {
  export const filterSensitiveLog = (obj: DolbyVision): any => ({
    ...obj
  });
  export const isa = (o: any): o is DolbyVision => __isa(o, "DolbyVision");
}

/**
 * Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.
 */
export interface DolbyVisionLevel6Metadata {
  __type?: "DolbyVisionLevel6Metadata";
  /**
   * Maximum Content Light Level. Static HDR metadata that corresponds to the brightest pixel in the entire stream. Measured in nits.
   */
  MaxCll?: number;

  /**
   * Maximum Frame-Average Light Level. Static HDR metadata that corresponds to the highest frame-average brightness in the entire stream. Measured in nits.
   */
  MaxFall?: number;
}

export namespace DolbyVisionLevel6Metadata {
  export const filterSensitiveLog = (obj: DolbyVisionLevel6Metadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is DolbyVisionLevel6Metadata =>
    __isa(o, "DolbyVisionLevel6Metadata");
}

export enum DolbyVisionLevel6Mode {
  PASSTHROUGH = "PASSTHROUGH",
  RECALCULATE = "RECALCULATE",
  SPECIFY = "SPECIFY"
}

export enum DolbyVisionProfile {
  PROFILE_5 = "PROFILE_5"
}

export enum DropFrameTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
 */
export interface DvbNitSettings {
  __type?: "DvbNitSettings";
  /**
   * The numeric value placed in the Network Information Table (NIT).
   */
  NetworkId?: number;

  /**
   * The network name text placed in the network_name_descriptor inside the Network Information Table. Maximum length is 256 characters.
   */
  NetworkName?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  NitInterval?: number;
}

export namespace DvbNitSettings {
  export const filterSensitiveLog = (obj: DvbNitSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DvbNitSettings =>
    __isa(o, "DvbNitSettings");
}

/**
 * Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
 */
export interface DvbSdtSettings {
  __type?: "DvbSdtSettings";
  /**
   * Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information.
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

export namespace DvbSdtSettings {
  export const filterSensitiveLog = (obj: DvbSdtSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DvbSdtSettings =>
    __isa(o, "DvbSdtSettings");
}

/**
 * DVB-Sub Destination Settings
 */
export interface DvbSubDestinationSettings {
  __type?: "DvbSubDestinationSettings";
  /**
   * If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: DvbSubtitleAlignment | string;

  /**
   * Specifies the color of the rectangle behind the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: DvbSubtitleBackgroundColor | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: DvbSubtitleFontColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. This is used to help determine the appropriate font for rendering DVB-Sub captions.
   */
  FontScript?: FontScript | string;

  /**
   * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: number;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: DvbSubtitleOutlineColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: DvbSubtitleShadowColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue.
   */
  SubtitlingType?: DvbSubtitlingType | string;

  /**
   * Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.
   */
  TeletextSpacing?: DvbSubtitleTeletextSpacing | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export namespace DvbSubDestinationSettings {
  export const filterSensitiveLog = (obj: DvbSubDestinationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DvbSubDestinationSettings =>
    __isa(o, "DvbSubDestinationSettings");
}

/**
 * DVB Sub Source Settings
 */
export interface DvbSubSourceSettings {
  __type?: "DvbSubSourceSettings";
  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   */
  Pid?: number;
}

export namespace DvbSubSourceSettings {
  export const filterSensitiveLog = (obj: DvbSubSourceSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DvbSubSourceSettings =>
    __isa(o, "DvbSubSourceSettings");
}

export enum DvbSubtitleAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT"
}

export enum DvbSubtitleBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE"
}

export enum DvbSubtitleFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW"
}

export enum DvbSubtitleOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW"
}

export enum DvbSubtitleShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE"
}

export enum DvbSubtitleTeletextSpacing {
  FIXED_GRID = "FIXED_GRID",
  PROPORTIONAL = "PROPORTIONAL"
}

export enum DvbSubtitlingType {
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  STANDARD = "STANDARD"
}

/**
 * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
 */
export interface DvbTdtSettings {
  __type?: "DvbTdtSettings";
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  TdtInterval?: number;
}

export namespace DvbTdtSettings {
  export const filterSensitiveLog = (obj: DvbTdtSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DvbTdtSettings =>
    __isa(o, "DvbTdtSettings");
}

export enum Eac3AtmosBitstreamMode {
  COMPLETE_MAIN = "COMPLETE_MAIN"
}

export enum Eac3AtmosCodingMode {
  CODING_MODE_9_1_6 = "CODING_MODE_9_1_6"
}

export enum Eac3AtmosDialogueIntelligence {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum Eac3AtmosDynamicRangeCompressionLine {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH"
}

export enum Eac3AtmosDynamicRangeCompressionRf {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH"
}

export enum Eac3AtmosMeteringMode {
  ITU_BS_1770_1 = "ITU_BS_1770_1",
  ITU_BS_1770_2 = "ITU_BS_1770_2",
  ITU_BS_1770_3 = "ITU_BS_1770_3",
  ITU_BS_1770_4 = "ITU_BS_1770_4",
  LEQ_A = "LEQ_A"
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
 */
export interface Eac3AtmosSettings {
  __type?: "Eac3AtmosSettings";
  /**
   * Specify the average bitrate in bits per second.
   * Valid values: 384k, 448k, 640k, 768k
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Eac3AtmosBitstreamMode | string;

  /**
   * The coding mode for Dolby Digital Plus JOC (Atmos) is always 9.1.6 (CODING_MODE_9_1_6).
   */
  CodingMode?: Eac3AtmosCodingMode | string;

  /**
   * Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.
   */
  DialogueIntelligence?: Eac3AtmosDialogueIntelligence | string;

  /**
   * Specify the absolute peak level for a signal with dynamic range compression.
   */
  DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine | string;

  /**
   * Specify how the service limits the audio dynamic range when compressing the audio.
   */
  DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionRf | string;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only center mix
   * (Lo/Ro center). MediaConvert uses this value for downmixing. How the service uses this
   * value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix).
   * Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0.
   */
  LoRoCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel.
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0.
   */
  LtRtCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Atmos setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel.
   */
  LtRtSurroundMixLevel?: number;

  /**
   * Choose how the service meters the loudness of your audio.
   */
  MeteringMode?: Eac3AtmosMeteringMode | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;

  /**
   * Specify the percentage of audio content that must be speech before the encoder uses the measured speech loudness as the overall program loudness.
   */
  SpeechThreshold?: number;

  /**
   * Choose how the service does stereo downmixing.
   */
  StereoDownmix?: Eac3AtmosStereoDownmix | string;

  /**
   * Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.
   */
  SurroundExMode?: Eac3AtmosSurroundExMode | string;
}

export namespace Eac3AtmosSettings {
  export const filterSensitiveLog = (obj: Eac3AtmosSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is Eac3AtmosSettings =>
    __isa(o, "Eac3AtmosSettings");
}

export enum Eac3AtmosStereoDownmix {
  DPL2 = "DPL2",
  NOT_INDICATED = "NOT_INDICATED",
  STEREO = "STEREO",
  SURROUND = "SURROUND"
}

export enum Eac3AtmosSurroundExMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED"
}

export enum Eac3AttenuationControl {
  ATTENUATE_3_DB = "ATTENUATE_3_DB",
  NONE = "NONE"
}

export enum Eac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED"
}

export enum Eac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2 = "CODING_MODE_3_2"
}

export enum Eac3DcFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum Eac3DynamicRangeCompressionLine {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH"
}

export enum Eac3DynamicRangeCompressionRf {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH"
}

export enum Eac3LfeControl {
  LFE = "LFE",
  NO_LFE = "NO_LFE"
}

export enum Eac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum Eac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED"
}

export enum Eac3PassthroughControl {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  WHEN_POSSIBLE = "WHEN_POSSIBLE"
}

export enum Eac3PhaseControl {
  NO_SHIFT = "NO_SHIFT",
  SHIFT_90_DEGREES = "SHIFT_90_DEGREES"
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
 */
export interface Eac3Settings {
  __type?: "Eac3Settings";
  /**
   * If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   */
  AttenuationControl?: Eac3AttenuationControl | string;

  /**
   * Specify the average bitrate in bits per second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
   */
  BitstreamMode?: Eac3BitstreamMode | string;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   */
  CodingMode?: Eac3CodingMode | string;

  /**
   * Activates a DC highpass filter for all input channels.
   */
  DcFilter?: Eac3DcFilter | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * Specify the absolute peak level for a signal with dynamic range compression.
   */
  DynamicRangeCompressionLine?: Eac3DynamicRangeCompressionLine | string;

  /**
   * Specify how the service limits the audio dynamic range when compressing the audio.
   */
  DynamicRangeCompressionRf?: Eac3DynamicRangeCompressionRf | string;

  /**
   * When encoding 3/2 audio, controls whether the LFE channel is enabled
   */
  LfeControl?: Eac3LfeControl | string;

  /**
   * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
   */
  LfeFilter?: Eac3LfeFilter | string;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only center (loRoCenterMixLevel).
   */
  LoRoCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only surround (loRoSurroundMixLevel).
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total center (ltRtCenterMixLevel).
   */
  LtRtCenterMixLevel?: number;

  /**
   * Specify a value for the following Dolby Digital Plus setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total surround (ltRtSurroundMixLevel).
   */
  LtRtSurroundMixLevel?: number;

  /**
   * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Eac3MetadataControl | string;

  /**
   * When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   */
  PassthroughControl?: Eac3PassthroughControl | string;

  /**
   * Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.
   */
  PhaseControl?: Eac3PhaseControl | string;

  /**
   * This value is always 48000. It represents the sample rate in Hz.
   */
  SampleRate?: number;

  /**
   * Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix).
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

export namespace Eac3Settings {
  export const filterSensitiveLog = (obj: Eac3Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is Eac3Settings => __isa(o, "Eac3Settings");
}

export enum Eac3StereoDownmix {
  DPL2 = "DPL2",
  LO_RO = "LO_RO",
  LT_RT = "LT_RT",
  NOT_INDICATED = "NOT_INDICATED"
}

export enum Eac3SurroundExMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED"
}

export enum Eac3SurroundMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED"
}

export enum EmbeddedConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT"
}

/**
 * Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
 */
export interface EmbeddedDestinationSettings {
  __type?: "EmbeddedDestinationSettings";
  /**
   * Ignore this setting unless your input captions are SCC format and your output captions are embedded in the video stream. Specify a CC number for each captions channel in this output. If you have two channels, choose CC numbers that aren't in the same field. For example, choose 1 and 3. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   */
  Destination608ChannelNumber?: number;

  /**
   * Ignore this setting unless your input captions are SCC format and you want both 608 and 708 captions embedded in your output stream. Optionally, specify the 708 service number for each output captions channel. Choose a different number for each channel. To use this setting, also set Force 608 to 708 upconvert (Convert608To708) to Upconvert (UPCONVERT) in your input captions selector settings. If you choose to upconvert but don't specify a 708 service number, MediaConvert uses the number that you specify for CC channel number (destination608ChannelNumber) for the 708 service number. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
   */
  Destination708ServiceNumber?: number;
}

export namespace EmbeddedDestinationSettings {
  export const filterSensitiveLog = (
    obj: EmbeddedDestinationSettings
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EmbeddedDestinationSettings =>
    __isa(o, "EmbeddedDestinationSettings");
}

/**
 * Settings for embedded captions Source
 */
export interface EmbeddedSourceSettings {
  __type?: "EmbeddedSourceSettings";
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: EmbeddedConvert608To708 | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;

  /**
   * Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.
   */
  Source608TrackNumber?: number;

  /**
   * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
   */
  TerminateCaptions?: EmbeddedTerminateCaptions | string;
}

export namespace EmbeddedSourceSettings {
  export const filterSensitiveLog = (obj: EmbeddedSourceSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is EmbeddedSourceSettings =>
    __isa(o, "EmbeddedSourceSettings");
}

export enum EmbeddedTerminateCaptions {
  DISABLED = "DISABLED",
  END_OF_INPUT = "END_OF_INPUT"
}

/**
 * Describes an account-specific API endpoint.
 */
export interface Endpoint {
  __type?: "Endpoint";
  /**
   * URL of endpoint
   */
  Url?: string;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is Endpoint => __isa(o, "Endpoint");
}

/**
 * ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025.
 */
export interface EsamManifestConfirmConditionNotification {
  __type?: "EsamManifestConfirmConditionNotification";
  /**
   * Provide your ESAM ManifestConfirmConditionNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the Manifest Conditioning instructions in the message that you supply.
   */
  MccXml?: string;
}

export namespace EsamManifestConfirmConditionNotification {
  export const filterSensitiveLog = (
    obj: EsamManifestConfirmConditionNotification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EsamManifestConfirmConditionNotification =>
    __isa(o, "EsamManifestConfirmConditionNotification");
}

/**
 * Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.
 */
export interface EsamSettings {
  __type?: "EsamSettings";
  /**
   * Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML (mccXml).
   */
  ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification;

  /**
   * Specifies the stream distance, in milliseconds, between the SCTE 35 messages that the transcoder places and the splice points that they refer to. If the time between the start of the asset and the SCTE-35 message is less than this value, then the transcoder places the SCTE-35 marker at the beginning of the stream.
   */
  ResponseSignalPreroll?: number;

  /**
   * Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML (sccXml).
   */
  SignalProcessingNotification?: EsamSignalProcessingNotification;
}

export namespace EsamSettings {
  export const filterSensitiveLog = (obj: EsamSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is EsamSettings => __isa(o, "EsamSettings");
}

/**
 * ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025.
 */
export interface EsamSignalProcessingNotification {
  __type?: "EsamSignalProcessingNotification";
  /**
   * Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the signal processing instructions in the message that you supply. Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. For your MPEG2-TS file outputs, if you want the service to place SCTE-35 markers at the insertion points you specify in the XML document, you must also enable SCTE-35 ESAM (scte35Esam). Note that you can either specify an ESAM XML document or enable SCTE-35 passthrough. You can't do both.
   */
  SccXml?: string;
}

export namespace EsamSignalProcessingNotification {
  export const filterSensitiveLog = (
    obj: EsamSignalProcessingNotification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EsamSignalProcessingNotification =>
    __isa(o, "EsamSignalProcessingNotification");
}

export enum F4vMoovPlacement {
  NORMAL = "NORMAL",
  PROGRESSIVE_DOWNLOAD = "PROGRESSIVE_DOWNLOAD"
}

/**
 * Settings for F4v container
 */
export interface F4vSettings {
  __type?: "F4vSettings";
  /**
   * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
   */
  MoovPlacement?: F4vMoovPlacement | string;
}

export namespace F4vSettings {
  export const filterSensitiveLog = (obj: F4vSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is F4vSettings => __isa(o, "F4vSettings");
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
 */
export interface FileGroupSettings {
  __type?: "FileGroupSettings";
  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;
}

export namespace FileGroupSettings {
  export const filterSensitiveLog = (obj: FileGroupSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileGroupSettings =>
    __isa(o, "FileGroupSettings");
}

export enum FileSourceConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT"
}

/**
 * If your input captions are SCC, SMI, SRT, STL, TTML, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
 */
export interface FileSourceSettings {
  __type?: "FileSourceSettings";
  /**
   * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
   */
  Convert608To708?: FileSourceConvert608To708 | string;

  /**
   * External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', 'xml', and 'smi'.
   */
  SourceFile?: string;

  /**
   * Specifies a time delta in seconds to offset the captions from the source file.
   */
  TimeDelta?: number;
}

export namespace FileSourceSettings {
  export const filterSensitiveLog = (obj: FileSourceSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileSourceSettings =>
    __isa(o, "FileSourceSettings");
}

export enum FontScript {
  AUTOMATIC = "AUTOMATIC",
  HANS = "HANS",
  HANT = "HANT"
}

/**
 * You don't have permissions for this action with the credentials you sent.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForbiddenException =>
    __isa(o, "ForbiddenException");
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
 */
export interface FrameCaptureSettings {
  __type?: "FrameCaptureSettings";
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

export namespace FrameCaptureSettings {
  export const filterSensitiveLog = (obj: FrameCaptureSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is FrameCaptureSettings =>
    __isa(o, "FrameCaptureSettings");
}

export interface GetJobRequest {
  __type?: "GetJobRequest";
  /**
   * the job ID of the job.
   */
  Id: string | undefined;
}

export namespace GetJobRequest {
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobRequest => __isa(o, "GetJobRequest");
}

export interface GetJobResponse {
  __type?: "GetJobResponse";
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

export namespace GetJobResponse {
  export const filterSensitiveLog = (obj: GetJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobResponse =>
    __isa(o, "GetJobResponse");
}

export interface GetJobTemplateRequest {
  __type?: "GetJobTemplateRequest";
  /**
   * The name of the job template.
   */
  Name: string | undefined;
}

export namespace GetJobTemplateRequest {
  export const filterSensitiveLog = (obj: GetJobTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobTemplateRequest =>
    __isa(o, "GetJobTemplateRequest");
}

export interface GetJobTemplateResponse {
  __type?: "GetJobTemplateResponse";
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

export namespace GetJobTemplateResponse {
  export const filterSensitiveLog = (obj: GetJobTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobTemplateResponse =>
    __isa(o, "GetJobTemplateResponse");
}

export interface GetPresetRequest {
  __type?: "GetPresetRequest";
  /**
   * The name of the preset.
   */
  Name: string | undefined;
}

export namespace GetPresetRequest {
  export const filterSensitiveLog = (obj: GetPresetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPresetRequest =>
    __isa(o, "GetPresetRequest");
}

export interface GetPresetResponse {
  __type?: "GetPresetResponse";
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export namespace GetPresetResponse {
  export const filterSensitiveLog = (obj: GetPresetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPresetResponse =>
    __isa(o, "GetPresetResponse");
}

export interface GetQueueRequest {
  __type?: "GetQueueRequest";
  /**
   * The name of the queue that you want information about.
   */
  Name: string | undefined;
}

export namespace GetQueueRequest {
  export const filterSensitiveLog = (obj: GetQueueRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetQueueRequest =>
    __isa(o, "GetQueueRequest");
}

export interface GetQueueResponse {
  __type?: "GetQueueResponse";
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export namespace GetQueueResponse {
  export const filterSensitiveLog = (obj: GetQueueResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetQueueResponse =>
    __isa(o, "GetQueueResponse");
}

export enum H264AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF"
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
  LEVEL_5_2 = "LEVEL_5_2"
}

export enum H264CodecProfile {
  BASELINE = "BASELINE",
  HIGH = "HIGH",
  HIGH_10BIT = "HIGH_10BIT",
  HIGH_422 = "HIGH_422",
  HIGH_422_10BIT = "HIGH_422_10BIT",
  MAIN = "MAIN"
}

export enum H264DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC"
}

export enum H264EntropyEncoding {
  CABAC = "CABAC",
  CAVLC = "CAVLC"
}

export enum H264FieldEncoding {
  FORCE_FIELD = "FORCE_FIELD",
  PAFF = "PAFF"
}

export enum H264FlickerAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H264FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED"
}

export enum H264FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE"
}

export enum H264GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H264GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS"
}

export enum H264InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD"
}

export enum H264ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED"
}

export enum H264QualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ"
}

/**
 * Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
 */
export interface H264QvbrSettings {
  __type?: "H264QvbrSettings";
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   */
  MaxAverageBitrate?: number;

  /**
   * Required when you use QVBR rate control mode. That is, when you specify qvbrSettings within h264Settings. Specify the target quality level for this output, from 1 to 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9.
   */
  QvbrQualityLevel?: number;
}

export namespace H264QvbrSettings {
  export const filterSensitiveLog = (obj: H264QvbrSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is H264QvbrSettings =>
    __isa(o, "H264QvbrSettings");
}

export enum H264RateControlMode {
  CBR = "CBR",
  QVBR = "QVBR",
  VBR = "VBR"
}

export enum H264RepeatPps {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H264SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  TRANSITION_DETECTION = "TRANSITION_DETECTION"
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
 */
export interface H264Settings {
  __type?: "H264Settings";
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | string;

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
   * Choosing FORCE_FIELD disables PAFF encoding for interlaced outputs.
   */
  FieldEncoding?: H264FieldEncoding | string;

  /**
   * Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAdaptiveQuantization?: H264FlickerAdaptiveQuantization | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: H264FramerateControl | string;

  /**
   * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
   */
  FramerateConversionAlgorithm?: H264FramerateConversionAlgorithm | string;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
   */
  FramerateDenominator?: number;

  /**
   * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * If enable, use reference B frames for GOP structures that have B frames > 1.
   */
  GopBReference?: H264GopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
   */
  GopSizeUnits?: H264GopSizeUnits | string;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type, as follows.
   *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
   *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
   */
  InterlaceMode?: H264InterlaceMode | string;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Number of B-frames between reference frames.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumberReferenceFrames?: number;

  /**
   * Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.
   */
  ParControl?: H264ParControl | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Use Quality tuning level (H264QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.
   */
  QualityTuningLevel?: H264QualityTuningLevel | string;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
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
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   */
  SceneChangeDetect?: H264SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
   */
  SlowPal?: H264SlowPal | string;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
   */
  Softness?: number;

  /**
   * Adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAdaptiveQuantization?: H264SpatialAdaptiveQuantization | string;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: H264Syntax | string;

  /**
   * This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
   */
  Telecine?: H264Telecine | string;

  /**
   * Adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAdaptiveQuantization?: H264TemporalAdaptiveQuantization | string;

  /**
   * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
   */
  UnregisteredSeiTimecode?: H264UnregisteredSeiTimecode | string;
}

export namespace H264Settings {
  export const filterSensitiveLog = (obj: H264Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is H264Settings => __isa(o, "H264Settings");
}

export enum H264SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H264SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H264Syntax {
  DEFAULT = "DEFAULT",
  RP2027 = "RP2027"
}

export enum H264Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT"
}

export enum H264TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H264UnregisteredSeiTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF"
}

export enum H265AlternateTransferFunctionSei {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
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
  LEVEL_6_2 = "LEVEL_6_2"
}

export enum H265CodecProfile {
  MAIN10_HIGH = "MAIN10_HIGH",
  MAIN10_MAIN = "MAIN10_MAIN",
  MAIN_422_10BIT_HIGH = "MAIN_422_10BIT_HIGH",
  MAIN_422_10BIT_MAIN = "MAIN_422_10BIT_MAIN",
  MAIN_422_8BIT_HIGH = "MAIN_422_8BIT_HIGH",
  MAIN_422_8BIT_MAIN = "MAIN_422_8BIT_MAIN",
  MAIN_HIGH = "MAIN_HIGH",
  MAIN_MAIN = "MAIN_MAIN"
}

export enum H265DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC"
}

export enum H265FlickerAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED"
}

export enum H265FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE"
}

export enum H265GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS"
}

export enum H265InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD"
}

export enum H265ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED"
}

export enum H265QualityTuningLevel {
  MULTI_PASS_HQ = "MULTI_PASS_HQ",
  SINGLE_PASS = "SINGLE_PASS",
  SINGLE_PASS_HQ = "SINGLE_PASS_HQ"
}

/**
 * Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
 */
export interface H265QvbrSettings {
  __type?: "H265QvbrSettings";
  /**
   * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
   */
  MaxAverageBitrate?: number;

  /**
   * Required when you use QVBR rate control mode. That is, when you specify qvbrSettings within h265Settings. Specify the target quality level for this output, from 1 to 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9.
   */
  QvbrQualityLevel?: number;
}

export namespace H265QvbrSettings {
  export const filterSensitiveLog = (obj: H265QvbrSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is H265QvbrSettings =>
    __isa(o, "H265QvbrSettings");
}

export enum H265RateControlMode {
  CBR = "CBR",
  QVBR = "QVBR",
  VBR = "VBR"
}

export enum H265SampleAdaptiveOffsetFilterMode {
  ADAPTIVE = "ADAPTIVE",
  DEFAULT = "DEFAULT",
  OFF = "OFF"
}

export enum H265SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  TRANSITION_DETECTION = "TRANSITION_DETECTION"
}

/**
 * Settings for H265 codec
 */
export interface H265Settings {
  __type?: "H265Settings";
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
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
   * Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAdaptiveQuantization?: H265FlickerAdaptiveQuantization | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: H265FramerateControl | string;

  /**
   * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
   */
  FramerateConversionAlgorithm?: H265FramerateConversionAlgorithm | string;

  /**
   * Frame rate denominator.
   */
  FramerateDenominator?: number;

  /**
   * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * If enable, use reference B frames for GOP structures that have B frames > 1.
   */
  GopBReference?: H265GopBReference | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
   */
  GopSizeUnits?: H265GopSizeUnits | string;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Choose the scan line type for the output. Choose Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Choose Top Field First (TOP_FIELD) or Bottom Field First (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Choose Follow, Default Top (FOLLOW_TOP_FIELD) or Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) to create an interlaced output with the same field polarity as the source. If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". If the source is progressive, your output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose. If you don't choose a value, the service will default to Progressive (PROGRESSIVE).
   */
  InterlaceMode?: H265InterlaceMode | string;

  /**
   * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
   */
  MaxBitrate?: number;

  /**
   * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Number of B-frames between reference frames.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumberReferenceFrames?: number;

  /**
   * Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.
   */
  ParControl?: H265ParControl | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Use Quality tuning level (H265QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.
   */
  QualityTuningLevel?: H265QualityTuningLevel | string;

  /**
   * Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
   */
  QvbrSettings?: H265QvbrSettings;

  /**
   * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
   */
  RateControlMode?: H265RateControlMode | string;

  /**
   * Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content
   */
  SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode | string;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
   */
  SceneChangeDetect?: H265SceneChangeDetect | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   */
  Slices?: number;

  /**
   * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
   */
  SlowPal?: H265SlowPal | string;

  /**
   * Adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAdaptiveQuantization?: H265SpatialAdaptiveQuantization | string;

  /**
   * This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
   */
  Telecine?: H265Telecine | string;

  /**
   * Adjust quantization within each frame based on temporal variation of content complexity.
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

export namespace H265Settings {
  export const filterSensitiveLog = (obj: H265Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is H265Settings => __isa(o, "H265Settings");
}

export enum H265SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT"
}

export enum H265TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265TemporalIds {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265Tiles {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265UnregisteredSeiTimecode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum H265WriteMp4PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1"
}

/**
 * Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator.
 */
export interface Hdr10Metadata {
  __type?: "Hdr10Metadata";
  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  BluePrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  BluePrimaryY?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  GreenPrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  GreenPrimaryY?: number;

  /**
   * Maximum light level among all samples in the coded video sequence, in units of candelas per square meter.  This setting doesn't have a default value; you must specify a value that is suitable for the content.
   */
  MaxContentLightLevel?: number;

  /**
   * Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
   */
  MaxFrameAverageLightLevel?: number;

  /**
   * Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter.
   */
  MaxLuminance?: number;

  /**
   * Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter
   */
  MinLuminance?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  RedPrimaryX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  RedPrimaryY?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  WhitePointX?: number;

  /**
   * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
   */
  WhitePointY?: number;
}

export namespace Hdr10Metadata {
  export const filterSensitiveLog = (obj: Hdr10Metadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is Hdr10Metadata => __isa(o, "Hdr10Metadata");
}

/**
 * Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface HlsAdditionalManifest {
  __type?: "HlsAdditionalManifest";
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

export namespace HlsAdditionalManifest {
  export const filterSensitiveLog = (obj: HlsAdditionalManifest): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsAdditionalManifest =>
    __isa(o, "HlsAdditionalManifest");
}

export enum HlsAdMarkers {
  ELEMENTAL = "ELEMENTAL",
  ELEMENTAL_SCTE35 = "ELEMENTAL_SCTE35"
}

export enum HlsAudioOnlyContainer {
  AUTOMATIC = "AUTOMATIC",
  M2TS = "M2TS"
}

export enum HlsAudioTrackType {
  ALTERNATE_AUDIO_AUTO_SELECT = "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT = "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM = "AUDIO_ONLY_VARIANT_STREAM"
}

/**
 * Caption Language Mapping
 */
export interface HlsCaptionLanguageMapping {
  __type?: "HlsCaptionLanguageMapping";
  /**
   * Caption channel.
   */
  CaptionChannel?: number;

  /**
   * Specify the language for this captions channel, using the ISO 639-2 or ISO 639-3 three-letter language code
   */
  CustomLanguageCode?: string;

  /**
   * Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.
   */
  LanguageCode?: LanguageCode | string;

  /**
   * Caption language description.
   */
  LanguageDescription?: string;
}

export namespace HlsCaptionLanguageMapping {
  export const filterSensitiveLog = (obj: HlsCaptionLanguageMapping): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsCaptionLanguageMapping =>
    __isa(o, "HlsCaptionLanguageMapping");
}

export enum HlsCaptionLanguageSetting {
  INSERT = "INSERT",
  NONE = "NONE",
  OMIT = "OMIT"
}

export enum HlsClientCache {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum HlsCodecSpecification {
  RFC_4281 = "RFC_4281",
  RFC_6381 = "RFC_6381"
}

export enum HlsDirectoryStructure {
  SINGLE_DIRECTORY = "SINGLE_DIRECTORY",
  SUBDIRECTORY_PER_STREAM = "SUBDIRECTORY_PER_STREAM"
}

/**
 * Settings for HLS encryption
 */
export interface HlsEncryptionSettings {
  __type?: "HlsEncryptionSettings";
  /**
   * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
   */
  ConstantInitializationVector?: string;

  /**
   * Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.
   */
  EncryptionMethod?: HlsEncryptionType | string;

  /**
   * The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.
   */
  InitializationVectorInManifest?: HlsInitializationVectorInManifest | string;

  /**
   * Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.
   */
  OfflineEncrypted?: HlsOfflineEncrypted | string;

  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;

  /**
   * Use these settings to set up encryption with a static key provider.
   */
  StaticKeyProvider?: StaticKeyProvider;

  /**
   * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
   */
  Type?: HlsKeyProviderType | string;
}

export namespace HlsEncryptionSettings {
  export const filterSensitiveLog = (obj: HlsEncryptionSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsEncryptionSettings =>
    __isa(o, "HlsEncryptionSettings");
}

export enum HlsEncryptionType {
  AES128 = "AES128",
  SAMPLE_AES = "SAMPLE_AES"
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
 */
export interface HlsGroupSettings {
  __type?: "HlsGroupSettings";
  /**
   * Choose one or more ad marker types to decorate your Apple HLS manifest. This setting does not determine whether SCTE-35 markers appear in the outputs themselves.
   */
  AdMarkers?: (HlsAdMarkers | string)[];

  /**
   * By default, the service creates one top-level .m3u8 HLS manifest for each HLS output group in your job. This default manifest references every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: HlsAdditionalManifest[];

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrl?: string;

  /**
   * Language to be used on Caption outputs
   */
  CaptionLanguageMappings?: HlsCaptionLanguageMapping[];

  /**
   * Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting | string;

  /**
   * When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.
   */
  ClientCache?: HlsClientCache | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: HlsCodecSpecification | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * Indicates whether segments should be placed in subdirectories.
   */
  DirectoryStructure?: HlsDirectoryStructure | string;

  /**
   * DRM settings.
   */
  Encryption?: HlsEncryptionSettings;

  /**
   * When set to GZIP, compresses HLS playlist.
   */
  ManifestCompression?: HlsManifestCompression | string;

  /**
   * Indicates whether the output manifest should use floating point values for segment duration.
   */
  ManifestDurationFormat?: HlsManifestDurationFormat | string;

  /**
   * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
   */
  MinFinalSegmentLength?: number;

  /**
   * When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   */
  MinSegmentLength?: number;

  /**
   * Indicates whether the .m3u8 manifest file should be generated for this HLS output group.
   */
  OutputSelection?: HlsOutputSelection | string;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.
   */
  ProgramDateTime?: HlsProgramDateTime | string;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   */
  ProgramDateTimePeriod?: number;

  /**
   * When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.
   */
  SegmentControl?: HlsSegmentControl | string;

  /**
   * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
   */
  SegmentLength?: number;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be SINGLE_DIRECTORY for this setting to have an effect.
   */
  SegmentsPerSubdirectory?: number;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: HlsStreamInfResolution | string;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   */
  TimestampDeltaMilliseconds?: number;
}

export namespace HlsGroupSettings {
  export const filterSensitiveLog = (obj: HlsGroupSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsGroupSettings =>
    __isa(o, "HlsGroupSettings");
}

export enum HlsIFrameOnlyManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum HlsInitializationVectorInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum HlsKeyProviderType {
  SPEKE = "SPEKE",
  STATIC_KEY = "STATIC_KEY"
}

export enum HlsManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE"
}

export enum HlsManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER"
}

export enum HlsOfflineEncrypted {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum HlsOutputSelection {
  MANIFESTS_AND_SEGMENTS = "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY = "SEGMENTS_ONLY"
}

export enum HlsProgramDateTime {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum HlsSegmentControl {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE"
}

/**
 * Settings for HLS output groups
 */
export interface HlsSettings {
  __type?: "HlsSettings";
  /**
   * Specifies the group to which the audio Rendition belongs.
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
   * When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest
   */
  IFrameOnlyManifest?: HlsIFrameOnlyManifest | string;

  /**
   * String concatenated to end of segment filenames. Accepts "Format Identifiers":#format_identifier_parameters.
   */
  SegmentModifier?: string;
}

export namespace HlsSettings {
  export const filterSensitiveLog = (obj: HlsSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is HlsSettings => __isa(o, "HlsSettings");
}

export enum HlsStreamInfResolution {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum HlsTimedMetadataId3Frame {
  NONE = "NONE",
  PRIV = "PRIV",
  TDRL = "TDRL"
}

/**
 * To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion).
 */
export interface Id3Insertion {
  __type?: "Id3Insertion";
  /**
   * Use ID3 tag (Id3) to provide a tag value in base64-encode format.
   */
  Id3?: string;

  /**
   * Provide a Timecode (TimeCode) in HH:MM:SS:FF or HH:MM:SS;FF format.
   */
  Timecode?: string;
}

export namespace Id3Insertion {
  export const filterSensitiveLog = (obj: Id3Insertion): any => ({
    ...obj
  });
  export const isa = (o: any): o is Id3Insertion => __isa(o, "Id3Insertion");
}

/**
 * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. This setting is disabled by default.
 */
export interface ImageInserter {
  __type?: "ImageInserter";
  /**
   * Specify the images that you want to overlay on your video. The images must be PNG or TGA files.
   */
  InsertableImages?: InsertableImage[];
}

export namespace ImageInserter {
  export const filterSensitiveLog = (obj: ImageInserter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageInserter => __isa(o, "ImageInserter");
}

/**
 * Settings specific to IMSC caption outputs.
 */
export interface ImscDestinationSettings {
  __type?: "ImscDestinationSettings";
  /**
   * Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are CFF-TT, IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.
   */
  StylePassthrough?: ImscStylePassthrough | string;
}

export namespace ImscDestinationSettings {
  export const filterSensitiveLog = (obj: ImscDestinationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImscDestinationSettings =>
    __isa(o, "ImscDestinationSettings");
}

export enum ImscStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * Specifies media input
 */
export interface Input {
  __type?: "Input";
  /**
   * Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See "Audio Selector Group":#inputs-audio_selector_group for more information.
   */
  AudioSelectorGroups?: { [key: string]: AudioSelectorGroup };

  /**
   * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use mutiple Audio selectors per input.
   */
  AudioSelectors?: { [key: string]: AudioSelector };

  /**
   * Use Captions selectors (CaptionSelectors) to specify the captions data from the input that you will use in your outputs. You can use mutiple captions selectors per input.
   */
  CaptionSelectors?: { [key: string]: CaptionSelector };

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
   */
  Crop?: Rectangle;

  /**
   * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manaully controllable for MPEG2 and uncompressed video inputs.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
   */
  DecryptionSettings?: InputDecryptionSettings;

  /**
   * Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   */
  DenoiseFilter?: InputDenoiseFilter | string;

  /**
   * Specify the source file for your transcoding job. You can use multiple inputs in a single job. The service concatenates these inputs, in the order that you specify them in the job, to create the outputs. If your input format is IMF, specify your input by providing the path to your CPL. For example, "s3://bucket/vf/cpl.xml". If the CPL is in an incomplete IMP, make sure to use *Supplemental IMPs* (SupplementalImps) to specify any supplemental IMPs that contain assets referenced by the CPL.
   */
  FileInput?: string;

  /**
   * Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type.
   */
  FilterEnable?: InputFilterEnable | string;

  /**
   * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
   */
  FilterStrength?: number;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   */
  InputClippings?: InputClipping[];

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
   */
  Position?: Rectangle;

  /**
   * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   */
  ProgramNumber?: number;

  /**
   * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
   */
  PsiControl?: InputPsiControl | string;

  /**
   * Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you're using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don't need to specify the IMP that contains your input CPL, because the service automatically detects it.
   */
  SupplementalImps?: string[];

  /**
   * Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeSource?: InputTimecodeSource | string;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeStart?: string;

  /**
   * Selector for video.
   */
  VideoSelector?: VideoSelector;
}

export namespace Input {
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj
  });
  export const isa = (o: any): o is Input => __isa(o, "Input");
}

/**
 * To transcode only portions of your input (clips), include one Input clipping (one instance of InputClipping in the JSON job file) for each input clip. All input clips you specify will be included in every output of the job.
 */
export interface InputClipping {
  __type?: "InputClipping";
  /**
   * Set End timecode (EndTimecode) to the end of the portion of the input you are clipping. The frame corresponding to the End timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for timecode source under input settings (InputTimecodeSource). For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to end six minutes into the video, use 01:06:00:00.
   */
  EndTimecode?: string;

  /**
   * Set Start timecode (StartTimecode) to the beginning of the portion of the input you are clipping. The frame corresponding to the Start timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for Input timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to begin five minutes into the video, use 01:05:00:00.
   */
  StartTimecode?: string;
}

export namespace InputClipping {
  export const filterSensitiveLog = (obj: InputClipping): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputClipping => __isa(o, "InputClipping");
}

export enum InputDeblockFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
 */
export interface InputDecryptionSettings {
  __type?: "InputDecryptionSettings";
  /**
   * Specify the encryption mode that you used to encrypt your input files.
   */
  DecryptionMode?: DecryptionMode | string;

  /**
   * Warning! Don't provide your encryption key in plaintext. Your job settings could be intercepted, making your encrypted content vulnerable. Specify the encrypted version of the data key that you used to encrypt your content. The data key must be encrypted by AWS Key Management Service (KMS). The key can be 128, 192, or 256 bits.
   */
  EncryptedDecryptionKey?: string;

  /**
   * Specify the initialization vector that you used when you encrypted your content before uploading it to Amazon S3. You can use a 16-byte initialization vector with any encryption mode. Or, you can use a 12-byte initialization vector with GCM or CTR. MediaConvert accepts only initialization vectors that are base64-encoded.
   */
  InitializationVector?: string;

  /**
   * Specify the AWS Region for AWS Key Management Service (KMS) that you used to encrypt your data key, if that Region is different from the one you are using for AWS Elemental MediaConvert.
   */
  KmsKeyRegion?: string;
}

export namespace InputDecryptionSettings {
  export const filterSensitiveLog = (obj: InputDecryptionSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputDecryptionSettings =>
    __isa(o, "InputDecryptionSettings");
}

export enum InputDenoiseFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum InputFilterEnable {
  AUTO = "AUTO",
  DISABLE = "DISABLE",
  FORCE = "FORCE"
}

export enum InputPsiControl {
  IGNORE_PSI = "IGNORE_PSI",
  USE_PSI = "USE_PSI"
}

export enum InputRotate {
  AUTO = "AUTO",
  DEGREES_180 = "DEGREES_180",
  DEGREES_270 = "DEGREES_270",
  DEGREES_90 = "DEGREES_90",
  DEGREE_0 = "DEGREE_0"
}

/**
 * Specified video input in a template.
 */
export interface InputTemplate {
  __type?: "InputTemplate";
  /**
   * Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See "Audio Selector Group":#inputs-audio_selector_group for more information.
   */
  AudioSelectorGroups?: { [key: string]: AudioSelectorGroup };

  /**
   * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use mutiple Audio selectors per input.
   */
  AudioSelectors?: { [key: string]: AudioSelector };

  /**
   * Use Captions selectors (CaptionSelectors) to specify the captions data from the input that you will use in your outputs. You can use mutiple captions selectors per input.
   */
  CaptionSelectors?: { [key: string]: CaptionSelector };

  /**
   * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
   */
  Crop?: Rectangle;

  /**
   * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manaully controllable for MPEG2 and uncompressed video inputs.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
   */
  DenoiseFilter?: InputDenoiseFilter | string;

  /**
   * Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type.
   */
  FilterEnable?: InputFilterEnable | string;

  /**
   * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
   */
  FilterStrength?: number;

  /**
   * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
   */
  InputClippings?: InputClipping[];

  /**
   * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
   */
  Position?: Rectangle;

  /**
   * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
   */
  ProgramNumber?: number;

  /**
   * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
   */
  PsiControl?: InputPsiControl | string;

  /**
   * Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeSource?: InputTimecodeSource | string;

  /**
   * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
   */
  TimecodeStart?: string;

  /**
   * Selector for video.
   */
  VideoSelector?: VideoSelector;
}

export namespace InputTemplate {
  export const filterSensitiveLog = (obj: InputTemplate): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputTemplate => __isa(o, "InputTemplate");
}

export enum InputTimecodeSource {
  EMBEDDED = "EMBEDDED",
  SPECIFIEDSTART = "SPECIFIEDSTART",
  ZEROBASED = "ZEROBASED"
}

/**
 * Settings that specify how your still graphic overlay appears.
 */
export interface InsertableImage {
  __type?: "InsertableImage";
  /**
   * Specify the time, in milliseconds, for the image to remain on the output video. This duration includes fade-in time but not fade-out time.
   */
  Duration?: number;

  /**
   * Specify the length of time, in milliseconds, between the Start time that you specify for the image insertion and the time that the image appears at full opacity. Full opacity is the level that you specify for the opacity setting. If you don't specify a value for Fade-in, the image will appear abruptly at the overlay start time.
   */
  FadeIn?: number;

  /**
   * Specify the length of time, in milliseconds, between the end of the time that you have specified for the image overlay Duration and when the overlaid image has faded to total transparency. If you don't specify a value for Fade-out, the image will disappear abruptly at the end of the inserted image duration.
   */
  FadeOut?: number;

  /**
   * Specify the height of the inserted image in pixels. If you specify a value that's larger than the video resolution height, the service will crop your overlaid image to fit. To use the native height of the image, keep this setting blank.
   */
  Height?: number;

  /**
   * Specify the HTTP, HTTPS, or Amazon S3 location of the image that you want to overlay on the video. Use a PNG or TGA file.
   */
  ImageInserterInput?: string;

  /**
   * Specify the distance, in pixels, between the inserted image and the left edge of the video frame. Required for any image overlay that you specify.
   */
  ImageX?: number;

  /**
   * Specify the distance, in pixels, between the overlaid image and the top edge of the video frame. Required for any image overlay that you specify.
   */
  ImageY?: number;

  /**
   * Specify how overlapping inserted images appear. Images with higher values for Layer appear on top of images with lower values for Layer.
   */
  Layer?: number;

  /**
   * Use Opacity (Opacity) to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50.
   */
  Opacity?: number;

  /**
   * Specify the timecode of the frame that you want the overlay to first appear on. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format. Remember to take into account your timecode source settings.
   */
  StartTime?: string;

  /**
   * Specify the width of the inserted image in pixels. If you specify a value that's larger than the video resolution width, the service will crop your overlaid image to fit. To use the native width of the image, keep this setting blank.
   */
  Width?: number;
}

export namespace InsertableImage {
  export const filterSensitiveLog = (obj: InsertableImage): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsertableImage =>
    __isa(o, "InsertableImage");
}

/**
 * The service encountered an unexpected condition and can't fulfill your request.
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (
    obj: InternalServerErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerErrorException =>
    __isa(o, "InternalServerErrorException");
}

/**
 * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 */
export interface Job {
  __type?: "Job";
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
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
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
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Queue?: string;

  /**
   * The number of times that the service automatically attempted to process your job after encountering an error.
   */
  RetryCount?: number;

  /**
   * The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
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
  UserMetadata?: { [key: string]: string };
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj
  });
  export const isa = (o: any): o is Job => __isa(o, "Job");
}

/**
 * Provides messages from the service about jobs that you have already successfully submitted.
 */
export interface JobMessages {
  __type?: "JobMessages";
  /**
   * List of messages that are informational only and don't indicate a problem with your job.
   */
  Info?: string[];

  /**
   * List of messages that warn about conditions that might cause your job not to run or to fail.
   */
  Warning?: string[];
}

export namespace JobMessages {
  export const filterSensitiveLog = (obj: JobMessages): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobMessages => __isa(o, "JobMessages");
}

export enum JobPhase {
  PROBING = "PROBING",
  TRANSCODING = "TRANSCODING",
  UPLOADING = "UPLOADING"
}

/**
 * JobSettings contains all the transcode settings for a job.
 */
export interface JobSettings {
  __type?: "JobSettings";
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   */
  AdAvailOffset?: number;

  /**
   * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Settings for Event Signaling And Messaging (ESAM).
   */
  Esam?: EsamSettings;

  /**
   * Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.
   */
  Inputs?: Input[];

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups.
   */
  MotionImageInserter?: MotionImageInserter;

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   */
  OutputGroups?: OutputGroup[];

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig?: TimecodeConfig;

  /**
   * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
   */
  TimedMetadataInsertion?: TimedMetadataInsertion;
}

export namespace JobSettings {
  export const filterSensitiveLog = (obj: JobSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobSettings => __isa(o, "JobSettings");
}

export enum JobStatus {
  CANCELED = "CANCELED",
  COMPLETE = "COMPLETE",
  ERROR = "ERROR",
  PROGRESSING = "PROGRESSING",
  SUBMITTED = "SUBMITTED"
}

/**
 * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
 */
export interface JobTemplate {
  __type?: "JobTemplate";
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

export namespace JobTemplate {
  export const filterSensitiveLog = (obj: JobTemplate): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobTemplate => __isa(o, "JobTemplate");
}

export enum JobTemplateListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
  SYSTEM = "SYSTEM"
}

/**
 * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
 */
export interface JobTemplateSettings {
  __type?: "JobTemplateSettings";
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
   */
  AdAvailOffset?: number;

  /**
   * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Settings for Event Signaling And Messaging (ESAM).
   */
  Esam?: EsamSettings;

  /**
   * Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template.  Using the API, you can include multiple inputs when referencing a job template.
   */
  Inputs?: InputTemplate[];

  /**
   * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups.
   */
  MotionImageInserter?: MotionImageInserter;

  /**
   * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
   */
  OutputGroups?: OutputGroup[];

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig?: TimecodeConfig;

  /**
   * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
   */
  TimedMetadataInsertion?: TimedMetadataInsertion;
}

export namespace JobTemplateSettings {
  export const filterSensitiveLog = (obj: JobTemplateSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobTemplateSettings =>
    __isa(o, "JobTemplateSettings");
}

export enum LanguageCode {
  AAR = "AAR",
  ABK = "ABK",
  AFR = "AFR",
  AKA = "AKA",
  AMH = "AMH",
  ARA = "ARA",
  ARG = "ARG",
  ASM = "ASM",
  AVA = "AVA",
  AVE = "AVE",
  AYM = "AYM",
  AZE = "AZE",
  BAK = "BAK",
  BAM = "BAM",
  BEL = "BEL",
  BEN = "BEN",
  BIH = "BIH",
  BIS = "BIS",
  BOD = "BOD",
  BOS = "BOS",
  BRE = "BRE",
  BUL = "BUL",
  CAT = "CAT",
  CES = "CES",
  CHA = "CHA",
  CHE = "CHE",
  CHU = "CHU",
  CHV = "CHV",
  COR = "COR",
  COS = "COS",
  CRE = "CRE",
  CYM = "CYM",
  DAN = "DAN",
  DEU = "DEU",
  DIV = "DIV",
  DZO = "DZO",
  ELL = "ELL",
  ENG = "ENG",
  ENM = "ENM",
  EPO = "EPO",
  EST = "EST",
  EUS = "EUS",
  EWE = "EWE",
  FAO = "FAO",
  FAS = "FAS",
  FIJ = "FIJ",
  FIN = "FIN",
  FRA = "FRA",
  FRM = "FRM",
  FRY = "FRY",
  FUL = "FUL",
  GER = "GER",
  GLA = "GLA",
  GLE = "GLE",
  GLG = "GLG",
  GLV = "GLV",
  GRN = "GRN",
  GUJ = "GUJ",
  HAT = "HAT",
  HAU = "HAU",
  HEB = "HEB",
  HER = "HER",
  HIN = "HIN",
  HMO = "HMO",
  HRV = "HRV",
  HUN = "HUN",
  HYE = "HYE",
  IBO = "IBO",
  IDO = "IDO",
  III = "III",
  IKU = "IKU",
  ILE = "ILE",
  INA = "INA",
  IND = "IND",
  IPK = "IPK",
  ISL = "ISL",
  ITA = "ITA",
  JAV = "JAV",
  JPN = "JPN",
  KAL = "KAL",
  KAN = "KAN",
  KAS = "KAS",
  KAT = "KAT",
  KAU = "KAU",
  KAZ = "KAZ",
  KHM = "KHM",
  KIK = "KIK",
  KIN = "KIN",
  KIR = "KIR",
  KOM = "KOM",
  KON = "KON",
  KOR = "KOR",
  KUA = "KUA",
  KUR = "KUR",
  LAO = "LAO",
  LAT = "LAT",
  LAV = "LAV",
  LIM = "LIM",
  LIN = "LIN",
  LIT = "LIT",
  LTZ = "LTZ",
  LUB = "LUB",
  LUG = "LUG",
  MAH = "MAH",
  MAL = "MAL",
  MAR = "MAR",
  MKD = "MKD",
  MLG = "MLG",
  MLT = "MLT",
  MON = "MON",
  MRI = "MRI",
  MSA = "MSA",
  MYA = "MYA",
  NAU = "NAU",
  NAV = "NAV",
  NBL = "NBL",
  NDE = "NDE",
  NDO = "NDO",
  NEP = "NEP",
  NLD = "NLD",
  NNO = "NNO",
  NOB = "NOB",
  NOR = "NOR",
  NYA = "NYA",
  OCI = "OCI",
  OJI = "OJI",
  ORI = "ORI",
  ORJ = "ORJ",
  ORM = "ORM",
  OSS = "OSS",
  PAN = "PAN",
  PLI = "PLI",
  POL = "POL",
  POR = "POR",
  PUS = "PUS",
  QAA = "QAA",
  QPC = "QPC",
  QUE = "QUE",
  ROH = "ROH",
  RON = "RON",
  RUN = "RUN",
  RUS = "RUS",
  SAG = "SAG",
  SAN = "SAN",
  SIN = "SIN",
  SLK = "SLK",
  SLV = "SLV",
  SME = "SME",
  SMO = "SMO",
  SNA = "SNA",
  SND = "SND",
  SOM = "SOM",
  SOT = "SOT",
  SPA = "SPA",
  SQI = "SQI",
  SRB = "SRB",
  SRD = "SRD",
  SSW = "SSW",
  SUN = "SUN",
  SWA = "SWA",
  SWE = "SWE",
  TAH = "TAH",
  TAM = "TAM",
  TAT = "TAT",
  TEL = "TEL",
  TGK = "TGK",
  TGL = "TGL",
  THA = "THA",
  TIR = "TIR",
  TNG = "TNG",
  TON = "TON",
  TSN = "TSN",
  TSO = "TSO",
  TUK = "TUK",
  TUR = "TUR",
  TWI = "TWI",
  UIG = "UIG",
  UKR = "UKR",
  URD = "URD",
  UZB = "UZB",
  VEN = "VEN",
  VIE = "VIE",
  VOL = "VOL",
  WLN = "WLN",
  WOL = "WOL",
  XHO = "XHO",
  YID = "YID",
  YOR = "YOR",
  ZHA = "ZHA",
  ZHO = "ZHO",
  ZUL = "ZUL"
}

export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of jobs.
   */
  NextToken?: string;

  /**
   * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;

  /**
   * Provide a queue name to get back only jobs from that queue.
   */
  Queue?: string;

  /**
   * A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?: JobStatus | string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsRequest =>
    __isa(o, "ListJobsRequest");
}

export interface ListJobsResponse {
  __type?: "ListJobsResponse";
  /**
   * List of jobs
   */
  Jobs?: Job[];

  /**
   * Use this string to request the next batch of jobs.
   */
  NextToken?: string;
}

export namespace ListJobsResponse {
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsResponse =>
    __isa(o, "ListJobsResponse");
}

export interface ListJobTemplatesRequest {
  __type?: "ListJobTemplatesRequest";
  /**
   * Optionally, specify a job template category to limit responses to only job templates from that category.
   */
  Category?: string;

  /**
   * Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: JobTemplateListBy | string;

  /**
   * Optional. Number of job templates, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of job templates.
   */
  NextToken?: string;

  /**
   * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListJobTemplatesRequest {
  export const filterSensitiveLog = (obj: ListJobTemplatesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobTemplatesRequest =>
    __isa(o, "ListJobTemplatesRequest");
}

export interface ListJobTemplatesResponse {
  __type?: "ListJobTemplatesResponse";
  /**
   * List of Job templates.
   */
  JobTemplates?: JobTemplate[];

  /**
   * Use this string to request the next batch of job templates.
   */
  NextToken?: string;
}

export namespace ListJobTemplatesResponse {
  export const filterSensitiveLog = (obj: ListJobTemplatesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobTemplatesResponse =>
    __isa(o, "ListJobTemplatesResponse");
}

export interface ListPresetsRequest {
  __type?: "ListPresetsRequest";
  /**
   * Optionally, specify a preset category to limit responses to only presets from that category.
   */
  Category?: string;

  /**
   * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: PresetListBy | string;

  /**
   * Optional. Number of presets, up to twenty, that will be returned at one time
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListPresetsRequest {
  export const filterSensitiveLog = (obj: ListPresetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPresetsRequest =>
    __isa(o, "ListPresetsRequest");
}

export interface ListPresetsResponse {
  __type?: "ListPresetsResponse";
  /**
   * Use this string to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * List of presets
   */
  Presets?: Preset[];
}

export namespace ListPresetsResponse {
  export const filterSensitiveLog = (obj: ListPresetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPresetsResponse =>
    __isa(o, "ListPresetsResponse");
}

export interface ListQueuesRequest {
  __type?: "ListQueuesRequest";
  /**
   * Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
   */
  ListBy?: QueueListBy | string;

  /**
   * Optional. Number of queues, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListQueuesRequest {
  export const filterSensitiveLog = (obj: ListQueuesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQueuesRequest =>
    __isa(o, "ListQueuesRequest");
}

export interface ListQueuesResponse {
  __type?: "ListQueuesResponse";
  /**
   * Use this string to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * List of queues.
   */
  Queues?: Queue[];
}

export namespace ListQueuesResponse {
  export const filterSensitiveLog = (obj: ListQueuesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQueuesResponse =>
    __isa(o, "ListQueuesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
   */
  ResourceTags?: ResourceTags;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export enum M2tsAudioBufferModel {
  ATSC = "ATSC",
  DVB = "DVB"
}

export enum M2tsBufferModel {
  MULTIPLEX = "MULTIPLEX",
  NONE = "NONE"
}

export enum M2tsEbpAudioInterval {
  VIDEO_AND_FIXED_INTERVALS = "VIDEO_AND_FIXED_INTERVALS",
  VIDEO_INTERVAL = "VIDEO_INTERVAL"
}

export enum M2tsEbpPlacement {
  VIDEO_AND_AUDIO_PIDS = "VIDEO_AND_AUDIO_PIDS",
  VIDEO_PID = "VIDEO_PID"
}

export enum M2tsEsRateInPes {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum M2tsForceTsVideoEbpOrder {
  DEFAULT = "DEFAULT",
  FORCE = "FORCE"
}

export enum M2tsNielsenId3 {
  INSERT = "INSERT",
  NONE = "NONE"
}

export enum M2tsPcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET"
}

export enum M2tsRateMode {
  CBR = "CBR",
  VBR = "VBR"
}

/**
 * Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
 */
export interface M2tsScte35Esam {
  __type?: "M2tsScte35Esam";
  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream generated by ESAM.
   */
  Scte35EsamPid?: number;
}

export namespace M2tsScte35Esam {
  export const filterSensitiveLog = (obj: M2tsScte35Esam): any => ({
    ...obj
  });
  export const isa = (o: any): o is M2tsScte35Esam =>
    __isa(o, "M2tsScte35Esam");
}

export enum M2tsScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH"
}

export enum M2tsSegmentationMarkers {
  EBP = "EBP",
  EBP_LEGACY = "EBP_LEGACY",
  NONE = "NONE",
  PSI_SEGSTART = "PSI_SEGSTART",
  RAI_ADAPT = "RAI_ADAPT",
  RAI_SEGSTART = "RAI_SEGSTART"
}

export enum M2tsSegmentationStyle {
  MAINTAIN_CADENCE = "MAINTAIN_CADENCE",
  RESET_CADENCE = "RESET_CADENCE"
}

/**
 * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
 */
export interface M2tsSettings {
  __type?: "M2tsSettings";
  /**
   * Selects between the DVB and ATSC buffer models for Dolby Digital audio.
   */
  AudioBufferModel?: M2tsAudioBufferModel | string;

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
   * Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex  buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.
   */
  BufferModel?: M2tsBufferModel | string;

  /**
   * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
   */
  DvbNitSettings?: DvbNitSettings;

  /**
   * Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
   */
  DvbSdtSettings?: DvbSdtSettings;

  /**
   * Specify the packet identifiers (PIDs) for DVB subtitle data included in this output. Specify multiple PIDs as a JSON array. Default is the range 460-479.
   */
  DvbSubPids?: number[];

  /**
   * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
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
   * Specify the packet identifier (PID) for timed metadata in this output. Default is 502.
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

export namespace M2tsSettings {
  export const filterSensitiveLog = (obj: M2tsSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is M2tsSettings => __isa(o, "M2tsSettings");
}

export enum M3u8NielsenId3 {
  INSERT = "INSERT",
  NONE = "NONE"
}

export enum M3u8PcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET"
}

export enum M3u8Scte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH"
}

/**
 * Settings for TS segments in HLS
 */
export interface M3u8Settings {
  __type?: "M3u8Settings";
  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
   */
  AudioPids?: number[];

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
   * Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output.
   */
  TimedMetadata?: TimedMetadata | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream.
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

export namespace M3u8Settings {
  export const filterSensitiveLog = (obj: M3u8Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is M3u8Settings => __isa(o, "M3u8Settings");
}

/**
 * Overlay motion graphics on top of your video at the time that you specify.
 */
export interface MotionImageInserter {
  __type?: "MotionImageInserter";
  /**
   * If your motion graphic asset is a .mov file, keep this setting unspecified. If your motion graphic asset is a series of .png files, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. Make sure that the number of images in your series matches the frame rate and your intended overlay duration. For example, if you want a 30-second overlay at 30 fps, you should have 900 .png images. This overlay frame rate doesn't need to match the frame rate of the underlying video.
   */
  Framerate?: MotionImageInsertionFramerate;

  /**
   * Specify the .mov file or series of .png files that you want to overlay on your video. For .png files, provide the file name of the first file in the series. Make sure that the names of the .png files end with sequential numbers that specify the order that they are played in. For example, overlay_000.png, overlay_001.png, overlay_002.png, and so on. The sequence must start at zero, and each image file name must have the same number of digits. Pad your initial file names with enough zeros to complete the sequence. For example, if the first image is overlay_0.png, there can be only 10 images in the sequence, with the last image being overlay_9.png. But if the first image is overlay_00.png, there can be 100 images in the sequence.
   */
  Input?: string;

  /**
   * Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.
   */
  InsertionMode?: MotionImageInsertionMode | string;

  /**
   * Use Offset to specify the placement of your motion graphic overlay on the video frame. Specify in pixels, from the upper-left corner of the frame. If you don't specify an offset, the service scales your overlay to the full size of the frame. Otherwise, the service inserts the overlay at its native resolution and scales the size up or down with any video scaling.
   */
  Offset?: MotionImageInsertionOffset;

  /**
   * Specify whether your motion graphic overlay repeats on a loop or plays only once.
   */
  Playback?: MotionImagePlayback | string;

  /**
   * Specify when the motion overlay begins. Use timecode format (HH:MM:SS:FF or HH:MM:SS;FF). Make sure that the timecode you provide here takes into account how you have set up your timecode configuration under both job settings and input settings. The simplest way to do that is to set both to start at 0. If you need to set up your job to follow timecodes embedded in your source that don't start at zero, make sure that you specify a start time that is after the first embedded timecode. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-timecode.html Find job-wide and input timecode configuration settings in your JSON job settings specification at settings>timecodeConfig>source and settings>inputs>timecodeSource.
   */
  StartTime?: string;
}

export namespace MotionImageInserter {
  export const filterSensitiveLog = (obj: MotionImageInserter): any => ({
    ...obj
  });
  export const isa = (o: any): o is MotionImageInserter =>
    __isa(o, "MotionImageInserter");
}

/**
 * For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video.
 */
export interface MotionImageInsertionFramerate {
  __type?: "MotionImageInsertionFramerate";
  /**
   * The bottom of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 1.
   */
  FramerateDenominator?: number;

  /**
   * The top of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 24.
   */
  FramerateNumerator?: number;
}

export namespace MotionImageInsertionFramerate {
  export const filterSensitiveLog = (
    obj: MotionImageInsertionFramerate
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MotionImageInsertionFramerate =>
    __isa(o, "MotionImageInsertionFramerate");
}

export enum MotionImageInsertionMode {
  MOV = "MOV",
  PNG = "PNG"
}

/**
 * Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay.
 */
export interface MotionImageInsertionOffset {
  __type?: "MotionImageInsertionOffset";
  /**
   * Set the distance, in pixels, between the overlay and the left edge of the video frame.
   */
  ImageX?: number;

  /**
   * Set the distance, in pixels, between the overlay and the top edge of the video frame.
   */
  ImageY?: number;
}

export namespace MotionImageInsertionOffset {
  export const filterSensitiveLog = (obj: MotionImageInsertionOffset): any => ({
    ...obj
  });
  export const isa = (o: any): o is MotionImageInsertionOffset =>
    __isa(o, "MotionImageInsertionOffset");
}

export enum MotionImagePlayback {
  ONCE = "ONCE",
  REPEAT = "REPEAT"
}

export enum MovClapAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum MovCslgAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum MovMpeg2FourCCControl {
  MPEG = "MPEG",
  XDCAM = "XDCAM"
}

export enum MovPaddingControl {
  NONE = "NONE",
  OMNEON = "OMNEON"
}

export enum MovReference {
  EXTERNAL = "EXTERNAL",
  SELF_CONTAINED = "SELF_CONTAINED"
}

/**
 * Settings for MOV Container.
 */
export interface MovSettings {
  __type?: "MovSettings";
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
   * If set to OMNEON, inserts Omneon-compatible padding
   */
  PaddingControl?: MovPaddingControl | string;

  /**
   * Always keep the default value (SELF_CONTAINED) for this setting.
   */
  Reference?: MovReference | string;
}

export namespace MovSettings {
  export const filterSensitiveLog = (obj: MovSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is MovSettings => __isa(o, "MovSettings");
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
 */
export interface Mp2Settings {
  __type?: "Mp2Settings";
  /**
   * Specify the average bitrate in bits per second.
   */
  Bitrate?: number;

  /**
   * Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;
}

export namespace Mp2Settings {
  export const filterSensitiveLog = (obj: Mp2Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is Mp2Settings => __isa(o, "Mp2Settings");
}

export enum Mp3RateControlMode {
  CBR = "CBR",
  VBR = "VBR"
}

/**
 * Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.
 */
export interface Mp3Settings {
  __type?: "Mp3Settings";
  /**
   * Specify the average bitrate in bits per second.
   */
  Bitrate?: number;

  /**
   * Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.
   */
  Channels?: number;

  /**
   * Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR).
   */
  RateControlMode?: Mp3RateControlMode | string;

  /**
   * Sample rate in hz.
   */
  SampleRate?: number;

  /**
   * Required when you set Bitrate control mode (rateControlMode) to VBR. Specify the audio quality of this MP3 output from 0 (highest quality) to 9 (lowest quality).
   */
  VbrQuality?: number;
}

export namespace Mp3Settings {
  export const filterSensitiveLog = (obj: Mp3Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is Mp3Settings => __isa(o, "Mp3Settings");
}

export enum Mp4CslgAtom {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum Mp4FreeSpaceBox {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE"
}

export enum Mp4MoovPlacement {
  NORMAL = "NORMAL",
  PROGRESSIVE_DOWNLOAD = "PROGRESSIVE_DOWNLOAD"
}

/**
 * Settings for MP4 container. You can create audio-only AAC outputs with this container.
 */
export interface Mp4Settings {
  __type?: "Mp4Settings";
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

export namespace Mp4Settings {
  export const filterSensitiveLog = (obj: Mp4Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is Mp4Settings => __isa(o, "Mp4Settings");
}

export enum MpdCaptionContainerType {
  FRAGMENTED_MP4 = "FRAGMENTED_MP4",
  RAW = "RAW"
}

export enum MpdScte35Esam {
  INSERT = "INSERT",
  NONE = "NONE"
}

export enum MpdScte35Source {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH"
}

/**
 * Settings for MP4 segments in DASH
 */
export interface MpdSettings {
  __type?: "MpdSettings";
  /**
   * Use this setting only in DASH output groups that include sidecar TTML or IMSC captions.  You specify sidecar captions in a separate output from your audio and video. Choose Raw (RAW) for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 (FRAGMENTED_MP4) for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files.
   */
  CaptionContainerType?: MpdCaptionContainerType | string;

  /**
   * Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
   */
  Scte35Esam?: MpdScte35Esam | string;

  /**
   * Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.
   */
  Scte35Source?: MpdScte35Source | string;
}

export namespace MpdSettings {
  export const filterSensitiveLog = (obj: MpdSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is MpdSettings => __isa(o, "MpdSettings");
}

export enum Mpeg2AdaptiveQuantization {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  OFF = "OFF"
}

export enum Mpeg2CodecLevel {
  AUTO = "AUTO",
  HIGH = "HIGH",
  HIGH1440 = "HIGH1440",
  LOW = "LOW",
  MAIN = "MAIN"
}

export enum Mpeg2CodecProfile {
  MAIN = "MAIN",
  PROFILE_422 = "PROFILE_422"
}

export enum Mpeg2DynamicSubGop {
  ADAPTIVE = "ADAPTIVE",
  STATIC = "STATIC"
}

export enum Mpeg2FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED"
}

export enum Mpeg2FramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE"
}

export enum Mpeg2GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS"
}

export enum Mpeg2InterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD"
}

export enum Mpeg2IntraDcPrecision {
  AUTO = "AUTO",
  INTRA_DC_PRECISION_10 = "INTRA_DC_PRECISION_10",
  INTRA_DC_PRECISION_11 = "INTRA_DC_PRECISION_11",
  INTRA_DC_PRECISION_8 = "INTRA_DC_PRECISION_8",
  INTRA_DC_PRECISION_9 = "INTRA_DC_PRECISION_9"
}

export enum Mpeg2ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED"
}

export enum Mpeg2QualityTuningLevel {
  MULTI_PASS = "MULTI_PASS",
  SINGLE_PASS = "SINGLE_PASS"
}

export enum Mpeg2RateControlMode {
  CBR = "CBR",
  VBR = "VBR"
}

export enum Mpeg2SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
 */
export interface Mpeg2Settings {
  __type?: "Mpeg2Settings";
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
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
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: Mpeg2FramerateControl | string;

  /**
   * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
   */
  FramerateConversionAlgorithm?: Mpeg2FramerateConversionAlgorithm | string;

  /**
   * Frame rate denominator.
   */
  FramerateDenominator?: number;

  /**
   * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
   */
  GopSize?: number;

  /**
   * Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
   */
  GopSizeUnits?: Mpeg2GopSizeUnits | string;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  HrdBufferInitialFillPercentage?: number;

  /**
   * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
   */
  HrdBufferSize?: number;

  /**
   * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
   *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
   *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
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
   * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Number of B-frames between reference frames.
   */
  NumberBFramesBetweenReferenceFrames?: number;

  /**
   * Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.
   */
  ParControl?: Mpeg2ParControl | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Use Quality tuning level (Mpeg2QualityTuningLevel) to specifiy whether to use single-pass or multipass video encoding.
   */
  QualityTuningLevel?: Mpeg2QualityTuningLevel | string;

  /**
   * Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr).
   */
  RateControlMode?: Mpeg2RateControlMode | string;

  /**
   * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.
   */
  SceneChangeDetect?: Mpeg2SceneChangeDetect | string;

  /**
   * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
   */
  SlowPal?: Mpeg2SlowPal | string;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
   */
  Softness?: number;

  /**
   * Adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAdaptiveQuantization?: Mpeg2SpatialAdaptiveQuantization | string;

  /**
   * Produces a Type D-10 compatible bitstream (SMPTE 356M-2001).
   */
  Syntax?: Mpeg2Syntax | string;

  /**
   * Only use Telecine (Mpeg2Telecine) when you set Framerate (Framerate) to 29.970. Set Telecine (Mpeg2Telecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.
   */
  Telecine?: Mpeg2Telecine | string;

  /**
   * Adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAdaptiveQuantization?: Mpeg2TemporalAdaptiveQuantization | string;
}

export namespace Mpeg2Settings {
  export const filterSensitiveLog = (obj: Mpeg2Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is Mpeg2Settings => __isa(o, "Mpeg2Settings");
}

export enum Mpeg2SlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum Mpeg2SpatialAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum Mpeg2Syntax {
  DEFAULT = "DEFAULT",
  D_10 = "D_10"
}

export enum Mpeg2Telecine {
  HARD = "HARD",
  NONE = "NONE",
  SOFT = "SOFT"
}

export enum Mpeg2TemporalAdaptiveQuantization {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.
 */
export interface MsSmoothAdditionalManifest {
  __type?: "MsSmoothAdditionalManifest";
  /**
   * Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your Microsoft Smooth group is film-name.ismv. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.ismv.
   */
  ManifestNameModifier?: string;

  /**
   * Specify the outputs that you want this additional top-level manifest to reference.
   */
  SelectedOutputs?: string[];
}

export namespace MsSmoothAdditionalManifest {
  export const filterSensitiveLog = (obj: MsSmoothAdditionalManifest): any => ({
    ...obj
  });
  export const isa = (o: any): o is MsSmoothAdditionalManifest =>
    __isa(o, "MsSmoothAdditionalManifest");
}

export enum MsSmoothAudioDeduplication {
  COMBINE_DUPLICATE_STREAMS = "COMBINE_DUPLICATE_STREAMS",
  NONE = "NONE"
}

/**
 * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
 */
export interface MsSmoothEncryptionSettings {
  __type?: "MsSmoothEncryptionSettings";
  /**
   * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
   */
  SpekeKeyProvider?: SpekeKeyProvider;
}

export namespace MsSmoothEncryptionSettings {
  export const filterSensitiveLog = (obj: MsSmoothEncryptionSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is MsSmoothEncryptionSettings =>
    __isa(o, "MsSmoothEncryptionSettings");
}

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
 */
export interface MsSmoothGroupSettings {
  __type?: "MsSmoothGroupSettings";
  /**
   * By default, the service creates one .ism Microsoft Smooth Streaming manifest for each Microsoft Smooth Streaming output group in your job. This default manifest references every output in the output group. To create additional manifests that reference a subset of the outputs in the output group, specify a list of them here.
   */
  AdditionalManifests?: MsSmoothAdditionalManifest[];

  /**
   * COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.
   */
  AudioDeduplication?: MsSmoothAudioDeduplication | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: DestinationSettings;

  /**
   * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
   */
  Encryption?: MsSmoothEncryptionSettings;

  /**
   * Use Fragment length (FragmentLength) to specify the mp4 fragment sizes in seconds. Fragment length must be compatible with GOP size and frame rate.
   */
  FragmentLength?: number;

  /**
   * Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.
   */
  ManifestEncoding?: MsSmoothManifestEncoding | string;
}

export namespace MsSmoothGroupSettings {
  export const filterSensitiveLog = (obj: MsSmoothGroupSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is MsSmoothGroupSettings =>
    __isa(o, "MsSmoothGroupSettings");
}

export enum MsSmoothManifestEncoding {
  UTF16 = "UTF16",
  UTF8 = "UTF8"
}

/**
 * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
 */
export interface NielsenConfiguration {
  __type?: "NielsenConfiguration";
  /**
   * Nielsen has discontinued the use of breakout code functionality. If you must include this property, set the value to zero.
   */
  BreakoutCode?: number;

  /**
   * Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen.
   */
  DistributorId?: string;
}

export namespace NielsenConfiguration {
  export const filterSensitiveLog = (obj: NielsenConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is NielsenConfiguration =>
    __isa(o, "NielsenConfiguration");
}

/**
 * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter).
 */
export interface NoiseReducer {
  __type?: "NoiseReducer";
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

export namespace NoiseReducer {
  export const filterSensitiveLog = (obj: NoiseReducer): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoiseReducer => __isa(o, "NoiseReducer");
}

export enum NoiseReducerFilter {
  BILATERAL = "BILATERAL",
  CONSERVE = "CONSERVE",
  GAUSSIAN = "GAUSSIAN",
  LANCZOS = "LANCZOS",
  MEAN = "MEAN",
  SHARPEN = "SHARPEN",
  SPATIAL = "SPATIAL",
  TEMPORAL = "TEMPORAL"
}

/**
 * Settings for a noise reducer filter
 */
export interface NoiseReducerFilterSettings {
  __type?: "NoiseReducerFilterSettings";
  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   */
  Strength?: number;
}

export namespace NoiseReducerFilterSettings {
  export const filterSensitiveLog = (obj: NoiseReducerFilterSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoiseReducerFilterSettings =>
    __isa(o, "NoiseReducerFilterSettings");
}

/**
 * Noise reducer filter settings for spatial filter.
 */
export interface NoiseReducerSpatialFilterSettings {
  __type?: "NoiseReducerSpatialFilterSettings";
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

export namespace NoiseReducerSpatialFilterSettings {
  export const filterSensitiveLog = (
    obj: NoiseReducerSpatialFilterSettings
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoiseReducerSpatialFilterSettings =>
    __isa(o, "NoiseReducerSpatialFilterSettings");
}

/**
 * Noise reducer filter settings for temporal filter.
 */
export interface NoiseReducerTemporalFilterSettings {
  __type?: "NoiseReducerTemporalFilterSettings";
  /**
   * Use Aggressive mode for content that has complex motion. Higher values produce stronger temporal filtering. This filters highly complex scenes more aggressively and creates better VQ for low bitrate outputs.
   */
  AggressiveMode?: number;

  /**
   * The speed of the filter (higher number is faster). Low setting reduces bit rate at the cost of transcode time, high setting improves transcode time at the cost of bit rate.
   */
  Speed?: number;

  /**
   * Specify the strength of the noise reducing filter on this output. Higher values produce stronger filtering. We recommend the following value ranges, depending on the result that you want: * 0-2 for complexity reduction with minimal sharpness loss * 2-8 for complexity reduction with image preservation * 8-16 for a high level of complexity reduction
   */
  Strength?: number;
}

export namespace NoiseReducerTemporalFilterSettings {
  export const filterSensitiveLog = (
    obj: NoiseReducerTemporalFilterSettings
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoiseReducerTemporalFilterSettings =>
    __isa(o, "NoiseReducerTemporalFilterSettings");
}

/**
 * The resource you requested doesn't exist.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING"
}

/**
 * An output object describes the settings for a single output file or stream in an output group.
 */
export interface Output {
  __type?: "Output";
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
   * Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)
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
   * Use Preset (Preset) to specifiy a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both.
   */
  Preset?: string;

  /**
   * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
   */
  VideoDescription?: VideoDescription;
}

export namespace Output {
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj
  });
  export const isa = (o: any): o is Output => __isa(o, "Output");
}

/**
 * OutputChannel mapping settings.
 */
export interface OutputChannelMapping {
  __type?: "OutputChannelMapping";
  /**
   * List of input channels
   */
  InputChannels?: number[];
}

export namespace OutputChannelMapping {
  export const filterSensitiveLog = (obj: OutputChannelMapping): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputChannelMapping =>
    __isa(o, "OutputChannelMapping");
}

/**
 * Details regarding output
 */
export interface OutputDetail {
  __type?: "OutputDetail";
  /**
   * Duration in milliseconds
   */
  DurationInMs?: number;

  /**
   * Contains details about the output's video stream
   */
  VideoDetails?: VideoDetail;
}

export namespace OutputDetail {
  export const filterSensitiveLog = (obj: OutputDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputDetail => __isa(o, "OutputDetail");
}

/**
 * Group of outputs
 */
export interface OutputGroup {
  __type?: "OutputGroup";
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

export namespace OutputGroup {
  export const filterSensitiveLog = (obj: OutputGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputGroup => __isa(o, "OutputGroup");
}

/**
 * Contains details about the output groups specified in the job settings.
 */
export interface OutputGroupDetail {
  __type?: "OutputGroupDetail";
  /**
   * Details about the output
   */
  OutputDetails?: OutputDetail[];
}

export namespace OutputGroupDetail {
  export const filterSensitiveLog = (obj: OutputGroupDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputGroupDetail =>
    __isa(o, "OutputGroupDetail");
}

/**
 * Output Group settings, including type
 */
export interface OutputGroupSettings {
  __type?: "OutputGroupSettings";
  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
   */
  CmafGroupSettings?: CmafGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
   */
  DashIsoGroupSettings?: DashIsoGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
   */
  FileGroupSettings?: FileGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
   */
  HlsGroupSettings?: HlsGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)
   */
  Type?: OutputGroupType | string;
}

export namespace OutputGroupSettings {
  export const filterSensitiveLog = (obj: OutputGroupSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputGroupSettings =>
    __isa(o, "OutputGroupSettings");
}

export enum OutputGroupType {
  CMAF_GROUP_SETTINGS = "CMAF_GROUP_SETTINGS",
  DASH_ISO_GROUP_SETTINGS = "DASH_ISO_GROUP_SETTINGS",
  FILE_GROUP_SETTINGS = "FILE_GROUP_SETTINGS",
  HLS_GROUP_SETTINGS = "HLS_GROUP_SETTINGS",
  MS_SMOOTH_GROUP_SETTINGS = "MS_SMOOTH_GROUP_SETTINGS"
}

export enum OutputSdt {
  SDT_FOLLOW = "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT = "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL = "SDT_MANUAL",
  SDT_NONE = "SDT_NONE"
}

/**
 * Specific settings for this type of output.
 */
export interface OutputSettings {
  __type?: "OutputSettings";
  /**
   * Settings for HLS output groups
   */
  HlsSettings?: HlsSettings;
}

export namespace OutputSettings {
  export const filterSensitiveLog = (obj: OutputSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputSettings =>
    __isa(o, "OutputSettings");
}

/**
 * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
 */
export interface Preset {
  __type?: "Preset";
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

export namespace Preset {
  export const filterSensitiveLog = (obj: Preset): any => ({
    ...obj
  });
  export const isa = (o: any): o is Preset => __isa(o, "Preset");
}

export enum PresetListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
  SYSTEM = "SYSTEM"
}

/**
 * Settings for preset
 */
export interface PresetSettings {
  __type?: "PresetSettings";
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: AudioDescription[];

  /**
   * Caption settings for this preset. There can be multiple caption settings in a single output.
   */
  CaptionDescriptions?: CaptionDescriptionPreset[];

  /**
   * Container specific settings.
   */
  ContainerSettings?: ContainerSettings;

  /**
   * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
   */
  VideoDescription?: VideoDescription;
}

export namespace PresetSettings {
  export const filterSensitiveLog = (obj: PresetSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is PresetSettings =>
    __isa(o, "PresetSettings");
}

export enum PricingPlan {
  ON_DEMAND = "ON_DEMAND",
  RESERVED = "RESERVED"
}

export enum ProresCodecProfile {
  APPLE_PRORES_422 = "APPLE_PRORES_422",
  APPLE_PRORES_422_HQ = "APPLE_PRORES_422_HQ",
  APPLE_PRORES_422_LT = "APPLE_PRORES_422_LT",
  APPLE_PRORES_422_PROXY = "APPLE_PRORES_422_PROXY"
}

export enum ProresFramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED"
}

export enum ProresFramerateConversionAlgorithm {
  DUPLICATE_DROP = "DUPLICATE_DROP",
  INTERPOLATE = "INTERPOLATE"
}

export enum ProresInterlaceMode {
  BOTTOM_FIELD = "BOTTOM_FIELD",
  FOLLOW_BOTTOM_FIELD = "FOLLOW_BOTTOM_FIELD",
  FOLLOW_TOP_FIELD = "FOLLOW_TOP_FIELD",
  PROGRESSIVE = "PROGRESSIVE",
  TOP_FIELD = "TOP_FIELD"
}

export enum ProresParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED"
}

/**
 * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
 */
export interface ProresSettings {
  __type?: "ProresSettings";
  /**
   * Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output.
   */
  CodecProfile?: ProresCodecProfile | string;

  /**
   * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
   */
  FramerateControl?: ProresFramerateControl | string;

  /**
   * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
   */
  FramerateConversionAlgorithm?: ProresFramerateConversionAlgorithm | string;

  /**
   * Frame rate denominator.
   */
  FramerateDenominator?: number;

  /**
   * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator.
   */
  FramerateNumerator?: number;

  /**
   * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
   *   - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
   *   - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
   */
  InterlaceMode?: ProresInterlaceMode | string;

  /**
   * Use (ProresParControl) to specify how the service determines the pixel aspect ratio. Set to Follow source (INITIALIZE_FROM_SOURCE) to use the pixel aspect ratio from the input.  To specify a different pixel aspect ratio: Using the console, choose it from the dropdown menu. Using the API, set ProresParControl to (SPECIFIED) and provide  for (ParNumerator) and (ParDenominator).
   */
  ParControl?: ProresParControl | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
   */
  SlowPal?: ProresSlowPal | string;

  /**
   * Only use Telecine (ProresTelecine) when you set Framerate (Framerate) to 29.970. Set Telecine (ProresTelecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.
   */
  Telecine?: ProresTelecine | string;
}

export namespace ProresSettings {
  export const filterSensitiveLog = (obj: ProresSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProresSettings =>
    __isa(o, "ProresSettings");
}

export enum ProresSlowPal {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum ProresTelecine {
  HARD = "HARD",
  NONE = "NONE"
}

/**
 * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
 */
export interface Queue {
  __type?: "Queue";
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

export namespace Queue {
  export const filterSensitiveLog = (obj: Queue): any => ({
    ...obj
  });
  export const isa = (o: any): o is Queue => __isa(o, "Queue");
}

export enum QueueListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME"
}

export enum QueueStatus {
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED"
}

/**
 * Use Rectangle to identify a specific area of the video frame.
 */
export interface Rectangle {
  __type?: "Rectangle";
  /**
   * Height of rectangle in pixels. Specify only even numbers.
   */
  Height?: number;

  /**
   * Width of rectangle in pixels. Specify only even numbers.
   */
  Width?: number;

  /**
   * The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers.
   */
  X?: number;

  /**
   * The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers.
   */
  Y?: number;
}

export namespace Rectangle {
  export const filterSensitiveLog = (obj: Rectangle): any => ({
    ...obj
  });
  export const isa = (o: any): o is Rectangle => __isa(o, "Rectangle");
}

/**
 * Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.
 */
export interface RemixSettings {
  __type?: "RemixSettings";
  /**
   * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
   */
  ChannelMapping?: ChannelMapping;

  /**
   * Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different.
   */
  ChannelsIn?: number;

  /**
   * Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8... 64. (1 and even numbers to 64.)
   */
  ChannelsOut?: number;
}

export namespace RemixSettings {
  export const filterSensitiveLog = (obj: RemixSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemixSettings => __isa(o, "RemixSettings");
}

export enum RenewalType {
  AUTO_RENEW = "AUTO_RENEW",
  EXPIRE = "EXPIRE"
}

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface ReservationPlan {
  __type?: "ReservationPlan";
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

export namespace ReservationPlan {
  export const filterSensitiveLog = (obj: ReservationPlan): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationPlan =>
    __isa(o, "ReservationPlan");
}

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface ReservationPlanSettings {
  __type?: "ReservationPlanSettings";
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

export namespace ReservationPlanSettings {
  export const filterSensitiveLog = (obj: ReservationPlanSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationPlanSettings =>
    __isa(o, "ReservationPlanSettings");
}

export enum ReservationPlanStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED"
}

/**
 * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
 */
export interface ResourceTags {
  __type?: "ResourceTags";
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  Arn?: string;

  /**
   * The tags for the resource.
   */
  Tags?: { [key: string]: string };
}

export namespace ResourceTags {
  export const filterSensitiveLog = (obj: ResourceTags): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceTags => __isa(o, "ResourceTags");
}

export enum RespondToAfd {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  RESPOND = "RESPOND"
}

/**
 * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
 */
export interface S3DestinationAccessControl {
  __type?: "S3DestinationAccessControl";
  /**
   * Choose an Amazon S3 canned ACL for MediaConvert to apply to this output.
   */
  CannedAcl?: S3ObjectCannedAcl | string;
}

export namespace S3DestinationAccessControl {
  export const filterSensitiveLog = (obj: S3DestinationAccessControl): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3DestinationAccessControl =>
    __isa(o, "S3DestinationAccessControl");
}

/**
 * Settings associated with S3 destination
 */
export interface S3DestinationSettings {
  __type?: "S3DestinationSettings";
  /**
   * Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.
   */
  AccessControl?: S3DestinationAccessControl;

  /**
   * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
   */
  Encryption?: S3EncryptionSettings;
}

export namespace S3DestinationSettings {
  export const filterSensitiveLog = (obj: S3DestinationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3DestinationSettings =>
    __isa(o, "S3DestinationSettings");
}

/**
 * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
 */
export interface S3EncryptionSettings {
  __type?: "S3EncryptionSettings";
  /**
   * Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting  KMS ARN (kmsKeyArn).
   */
  EncryptionType?: S3ServerSideEncryptionType | string;

  /**
   * Optionally, specify the customer master key (CMK) that you want to use to encrypt the data key that AWS uses to encrypt your output content. Enter the Amazon Resource Name (ARN) of the CMK. To use this setting, you must also set Server-side encryption (S3ServerSideEncryptionType) to AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). If you set Server-side encryption to AWS KMS but don't specify a CMK here, AWS uses the AWS managed CMK associated with Amazon S3.
   */
  KmsKeyArn?: string;
}

export namespace S3EncryptionSettings {
  export const filterSensitiveLog = (obj: S3EncryptionSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3EncryptionSettings =>
    __isa(o, "S3EncryptionSettings");
}

export enum S3ObjectCannedAcl {
  AUTHENTICATED_READ = "AUTHENTICATED_READ",
  BUCKET_OWNER_FULL_CONTROL = "BUCKET_OWNER_FULL_CONTROL",
  BUCKET_OWNER_READ = "BUCKET_OWNER_READ",
  PUBLIC_READ = "PUBLIC_READ"
}

export enum S3ServerSideEncryptionType {
  SERVER_SIDE_ENCRYPTION_KMS = "SERVER_SIDE_ENCRYPTION_KMS",
  SERVER_SIDE_ENCRYPTION_S3 = "SERVER_SIDE_ENCRYPTION_S3"
}

export enum ScalingBehavior {
  DEFAULT = "DEFAULT",
  STRETCH_TO_OUTPUT = "STRETCH_TO_OUTPUT"
}

export enum SccDestinationFramerate {
  FRAMERATE_23_97 = "FRAMERATE_23_97",
  FRAMERATE_24 = "FRAMERATE_24",
  FRAMERATE_25 = "FRAMERATE_25",
  FRAMERATE_29_97_DROPFRAME = "FRAMERATE_29_97_DROPFRAME",
  FRAMERATE_29_97_NON_DROPFRAME = "FRAMERATE_29_97_NON_DROPFRAME"
}

/**
 * Settings for SCC caption output.
 */
export interface SccDestinationSettings {
  __type?: "SccDestinationSettings";
  /**
   * Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).
   */
  Framerate?: SccDestinationFramerate | string;
}

export namespace SccDestinationSettings {
  export const filterSensitiveLog = (obj: SccDestinationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is SccDestinationSettings =>
    __isa(o, "SccDestinationSettings");
}

export enum SimulateReservedQueue {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
 */
export interface SpekeKeyProvider {
  __type?: "SpekeKeyProvider";
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   */
  CertificateArn?: string;

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   */
  ResourceId?: string;

  /**
   * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id. See
   *  https://dashif.org/identifiers/content_protection/ for more details.
   */
  SystemIds?: string[];

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   */
  Url?: string;
}

export namespace SpekeKeyProvider {
  export const filterSensitiveLog = (obj: SpekeKeyProvider): any => ({
    ...obj
  });
  export const isa = (o: any): o is SpekeKeyProvider =>
    __isa(o, "SpekeKeyProvider");
}

/**
 * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
 */
export interface SpekeKeyProviderCmaf {
  __type?: "SpekeKeyProviderCmaf";
  /**
   * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
   */
  CertificateArn?: string;

  /**
   * Specify the DRM system IDs that you want signaled in the DASH manifest that MediaConvert creates as part of this CMAF package. The DASH manifest can currently signal up to three system IDs. For more information, see https://dashif.org/identifiers/content_protection/.
   */
  DashSignaledSystemIds?: string[];

  /**
   * Specify the DRM system ID that you want signaled in the HLS manifest that MediaConvert creates as part of this CMAF package. The HLS manifest can currently signal only one system ID. For more information, see https://dashif.org/identifiers/content_protection/.
   */
  HlsSignaledSystemIds?: string[];

  /**
   * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
   */
  ResourceId?: string;

  /**
   * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
   */
  Url?: string;
}

export namespace SpekeKeyProviderCmaf {
  export const filterSensitiveLog = (obj: SpekeKeyProviderCmaf): any => ({
    ...obj
  });
  export const isa = (o: any): o is SpekeKeyProviderCmaf =>
    __isa(o, "SpekeKeyProviderCmaf");
}

/**
 * Use these settings to set up encryption with a static key provider.
 */
export interface StaticKeyProvider {
  __type?: "StaticKeyProvider";
  /**
   * Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'.
   */
  KeyFormat?: string;

  /**
   * Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   */
  KeyFormatVersions?: string;

  /**
   * Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value (StaticKeyValue).
   */
  StaticKeyValue?: string;

  /**
   * Relates to DRM implementation. The location of the license server used for protecting content.
   */
  Url?: string;
}

export namespace StaticKeyProvider {
  export const filterSensitiveLog = (obj: StaticKeyProvider): any => ({
    ...obj
  });
  export const isa = (o: any): o is StaticKeyProvider =>
    __isa(o, "StaticKeyProvider");
}

export enum StatusUpdateInterval {
  SECONDS_10 = "SECONDS_10",
  SECONDS_12 = "SECONDS_12",
  SECONDS_120 = "SECONDS_120",
  SECONDS_15 = "SECONDS_15",
  SECONDS_180 = "SECONDS_180",
  SECONDS_20 = "SECONDS_20",
  SECONDS_240 = "SECONDS_240",
  SECONDS_30 = "SECONDS_30",
  SECONDS_300 = "SECONDS_300",
  SECONDS_360 = "SECONDS_360",
  SECONDS_420 = "SECONDS_420",
  SECONDS_480 = "SECONDS_480",
  SECONDS_540 = "SECONDS_540",
  SECONDS_60 = "SECONDS_60",
  SECONDS_600 = "SECONDS_600"
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * Settings for Teletext caption output
 */
export interface TeletextDestinationSettings {
  __type?: "TeletextDestinationSettings";
  /**
   * Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field.
   */
  PageNumber?: string;

  /**
   * Specify the page types for this Teletext page. If you don't specify a value here, the service sets the page type to the default value Subtitle (PAGE_TYPE_SUBTITLE). If you pass through the entire set of Teletext data, don't use this field. When you pass through a set of Teletext pages, your output has the same page types as your input.
   */
  PageTypes?: (TeletextPageType | string)[];
}

export namespace TeletextDestinationSettings {
  export const filterSensitiveLog = (
    obj: TeletextDestinationSettings
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TeletextDestinationSettings =>
    __isa(o, "TeletextDestinationSettings");
}

export enum TeletextPageType {
  PAGE_TYPE_ADDL_INFO = "PAGE_TYPE_ADDL_INFO",
  PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE = "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE",
  PAGE_TYPE_INITIAL = "PAGE_TYPE_INITIAL",
  PAGE_TYPE_PROGRAM_SCHEDULE = "PAGE_TYPE_PROGRAM_SCHEDULE",
  PAGE_TYPE_SUBTITLE = "PAGE_TYPE_SUBTITLE"
}

/**
 * Settings specific to Teletext caption sources, including Page number.
 */
export interface TeletextSourceSettings {
  __type?: "TeletextSourceSettings";
  /**
   * Use Page Number (PageNumber) to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output.
   */
  PageNumber?: string;
}

export namespace TeletextSourceSettings {
  export const filterSensitiveLog = (obj: TeletextSourceSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is TeletextSourceSettings =>
    __isa(o, "TeletextSourceSettings");
}

/**
 * Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
 */
export interface TimecodeBurnin {
  __type?: "TimecodeBurnin";
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

export namespace TimecodeBurnin {
  export const filterSensitiveLog = (obj: TimecodeBurnin): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimecodeBurnin =>
    __isa(o, "TimecodeBurnin");
}

export enum TimecodeBurninPosition {
  BOTTOM_CENTER = "BOTTOM_CENTER",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
  MIDDLE_CENTER = "MIDDLE_CENTER",
  MIDDLE_LEFT = "MIDDLE_LEFT",
  MIDDLE_RIGHT = "MIDDLE_RIGHT",
  TOP_CENTER = "TOP_CENTER",
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT"
}

/**
 * These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.
 */
export interface TimecodeConfig {
  __type?: "TimecodeConfig";
  /**
   * If you use an editing platform that relies on an anchor timecode, use Anchor Timecode (Anchor) to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores frame rate conversion. System behavior for Anchor Timecode varies depending on your setting for Source (TimecodeSource). * If Source (TimecodeSource) is set to Specified Start (SPECIFIEDSTART), the first input frame is the specified value in Start Timecode (Start). Anchor Timecode (Anchor) and Start Timecode (Start) are used calculate output timecode. * If Source (TimecodeSource) is set to Start at 0 (ZEROBASED)  the  first frame is 00:00:00:00. * If Source (TimecodeSource) is set to Embedded (EMBEDDED), the  first frame is the timecode value on the first input frame of the input.
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
   * Only applies to outputs that support program-date-time stamp. Use Timestamp offset (TimestampOffset) to overwrite the timecode date without affecting the time and frame number. Provide the new date as a string in the format "yyyy-mm-dd".  To use Time stamp offset, you must also enable Insert program-date-time (InsertProgramDateTime) in the output settings. For example, if the date part of your timecodes is 2002-1-25 and you want to change it to one year later, set Timestamp offset (TimestampOffset) to 2003-1-25.
   */
  TimestampOffset?: string;
}

export namespace TimecodeConfig {
  export const filterSensitiveLog = (obj: TimecodeConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimecodeConfig =>
    __isa(o, "TimecodeConfig");
}

export enum TimecodeSource {
  EMBEDDED = "EMBEDDED",
  SPECIFIEDSTART = "SPECIFIEDSTART",
  ZEROBASED = "ZEROBASED"
}

export enum TimedMetadata {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH"
}

/**
 * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
 */
export interface TimedMetadataInsertion {
  __type?: "TimedMetadataInsertion";
  /**
   * Id3Insertions contains the array of Id3Insertion instances.
   */
  Id3Insertions?: Id3Insertion[];
}

export namespace TimedMetadataInsertion {
  export const filterSensitiveLog = (obj: TimedMetadataInsertion): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimedMetadataInsertion =>
    __isa(o, "TimedMetadataInsertion");
}

/**
 * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
 */
export interface Timing {
  __type?: "Timing";
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

export namespace Timing {
  export const filterSensitiveLog = (obj: Timing): any => ({
    ...obj
  });
  export const isa = (o: any): o is Timing => __isa(o, "Timing");
}

/**
 * Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
}

/**
 * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
 */
export interface TrackSourceSettings {
  __type?: "TrackSourceSettings";
  /**
   * Use this setting to select a single captions track from a source. Track numbers correspond to the order in the captions source file. For IMF sources, track numbering is based on the order that the captions appear in the CPL. For example, use 1 to select the captions asset that is listed first in the CPL. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one track per selector.
   */
  TrackNumber?: number;
}

export namespace TrackSourceSettings {
  export const filterSensitiveLog = (obj: TrackSourceSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrackSourceSettings =>
    __isa(o, "TrackSourceSettings");
}

/**
 * Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
 */
export interface TtmlDestinationSettings {
  __type?: "TtmlDestinationSettings";
  /**
   * Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.
   */
  StylePassthrough?: TtmlStylePassthrough | string;
}

export namespace TtmlDestinationSettings {
  export const filterSensitiveLog = (obj: TtmlDestinationSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is TtmlDestinationSettings =>
    __isa(o, "TtmlDestinationSettings");
}

export enum TtmlStylePassthrough {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum Type {
  CUSTOM = "CUSTOM",
  SYSTEM = "SYSTEM"
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * The keys of the tags that you want to remove from the resource.
   */
  TagKeys?: string[];
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateJobTemplateRequest {
  __type?: "UpdateJobTemplateRequest";
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * The new category for the job template, if you are changing it.
   */
  Category?: string;

  /**
   * The new description for the job template, if you are changing it.
   */
  Description?: string;

  /**
   * The name of the job template you are modifying
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * The new queue for the job template, if you are changing it.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings?: JobTemplateSettings;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;
}

export namespace UpdateJobTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateJobTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateJobTemplateRequest =>
    __isa(o, "UpdateJobTemplateRequest");
}

export interface UpdateJobTemplateResponse {
  __type?: "UpdateJobTemplateResponse";
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

export namespace UpdateJobTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateJobTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateJobTemplateResponse =>
    __isa(o, "UpdateJobTemplateResponse");
}

export interface UpdatePresetRequest {
  __type?: "UpdatePresetRequest";
  /**
   * The new category for the preset, if you are changing it.
   */
  Category?: string;

  /**
   * The new description for the preset, if you are changing it.
   */
  Description?: string;

  /**
   * The name of the preset you are modifying.
   */
  Name: string | undefined;

  /**
   * Settings for preset
   */
  Settings?: PresetSettings;
}

export namespace UpdatePresetRequest {
  export const filterSensitiveLog = (obj: UpdatePresetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePresetRequest =>
    __isa(o, "UpdatePresetRequest");
}

export interface UpdatePresetResponse {
  __type?: "UpdatePresetResponse";
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export namespace UpdatePresetResponse {
  export const filterSensitiveLog = (obj: UpdatePresetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePresetResponse =>
    __isa(o, "UpdatePresetResponse");
}

export interface UpdateQueueRequest {
  __type?: "UpdateQueueRequest";
  /**
   * The new description for the queue, if you are changing it.
   */
  Description?: string;

  /**
   * The name of the queue that you are modifying.
   */
  Name: string | undefined;

  /**
   * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus | string;
}

export namespace UpdateQueueRequest {
  export const filterSensitiveLog = (obj: UpdateQueueRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateQueueRequest =>
    __isa(o, "UpdateQueueRequest");
}

export interface UpdateQueueResponse {
  __type?: "UpdateQueueResponse";
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export namespace UpdateQueueResponse {
  export const filterSensitiveLog = (obj: UpdateQueueResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateQueueResponse =>
    __isa(o, "UpdateQueueResponse");
}

export enum VideoCodec {
  FRAME_CAPTURE = "FRAME_CAPTURE",
  H_264 = "H_264",
  H_265 = "H_265",
  MPEG2 = "MPEG2",
  PRORES = "PRORES"
}

/**
 * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings
 */
export interface VideoCodecSettings {
  __type?: "VideoCodecSettings";
  /**
   * Specifies the video codec. This must be equal to one of the enum values defined by the object  VideoCodec.
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
}

export namespace VideoCodecSettings {
  export const filterSensitiveLog = (obj: VideoCodecSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is VideoCodecSettings =>
    __isa(o, "VideoCodecSettings");
}

/**
 * Settings for video outputs
 */
export interface VideoDescription {
  __type?: "VideoDescription";
  /**
   * This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.
   */
  AntiAlias?: AntiAlias | string;

  /**
   * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings
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
   * Applies only if you set AFD Signaling(AfdSignaling) to Fixed (FIXED). Use Fixed (FixedAfd) to specify a four-bit AFD value which the service will write on all  frames of this video output.
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

export namespace VideoDescription {
  export const filterSensitiveLog = (obj: VideoDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is VideoDescription =>
    __isa(o, "VideoDescription");
}

/**
 * Contains details about the output's video stream
 */
export interface VideoDetail {
  __type?: "VideoDetail";
  /**
   * Height in pixels for the output
   */
  HeightInPx?: number;

  /**
   * Width in pixels for the output
   */
  WidthInPx?: number;
}

export namespace VideoDetail {
  export const filterSensitiveLog = (obj: VideoDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is VideoDetail => __isa(o, "VideoDetail");
}

/**
 * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
 */
export interface VideoPreprocessor {
  __type?: "VideoPreprocessor";
  /**
   * Enable the Color corrector (ColorCorrector) feature if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ColorCorrector?: ColorCorrector;

  /**
   * Use Deinterlacer (Deinterlacer) to produce smoother motion and a clearer picture.
   */
  Deinterlacer?: Deinterlacer;

  /**
   * Enable Dolby Vision feature to produce Dolby Vision compatible video output.
   */
  DolbyVision?: DolbyVision;

  /**
   * Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  ImageInserter?: ImageInserter;

  /**
   * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
   */
  NoiseReducer?: NoiseReducer;

  /**
   * Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
   */
  TimecodeBurnin?: TimecodeBurnin;
}

export namespace VideoPreprocessor {
  export const filterSensitiveLog = (obj: VideoPreprocessor): any => ({
    ...obj
  });
  export const isa = (o: any): o is VideoPreprocessor =>
    __isa(o, "VideoPreprocessor");
}

/**
 * Selector for video.
 */
export interface VideoSelector {
  __type?: "VideoSelector";
  /**
   * Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs.
   */
  AlphaBehavior?: AlphaBehavior | string;

  /**
   * If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value Follow (FOLLOW). The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate, choose Force HDR 10 (FORCE_HDR10) here and specify correct values in the input HDR 10 metadata (Hdr10Metadata) settings. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   */
  ColorSpace?: ColorSpace | string;

  /**
   * There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.
   */
  ColorSpaceUsage?: ColorSpaceUsage | string;

  /**
   * Use these settings to provide HDR 10 metadata that is missing or inaccurate in your input video. Appropriate values vary depending on the input video and must be provided by a color grader. The color grader generates these values during the HDR 10 mastering process. The valid range for each of these settings is 0 to 50,000. Each increment represents 0.00002 in CIE1931 color coordinate. Related settings - When you specify these values, you must also set Color space (ColorSpace) to HDR 10 (HDR10). To specify whether the the values you specify here take precedence over the values in the metadata of your input file, set Color space usage (ColorSpaceUsage). To specify whether color metadata is included in an output, set Color metadata (ColorMetadata). For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
   */
  Hdr10Metadata?: Hdr10Metadata;

  /**
   * Use PID (Pid) to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.
   */
  Pid?: number;

  /**
   * Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.
   */
  ProgramNumber?: number;

  /**
   * Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.
   */
  Rotate?: InputRotate | string;
}

export namespace VideoSelector {
  export const filterSensitiveLog = (obj: VideoSelector): any => ({
    ...obj
  });
  export const isa = (o: any): o is VideoSelector => __isa(o, "VideoSelector");
}

export enum VideoTimecodeInsertion {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI"
}

export enum WavFormat {
  RF64 = "RF64",
  RIFF = "RIFF"
}

/**
 * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
 */
export interface WavSettings {
  __type?: "WavSettings";
  /**
   * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
   */
  BitDepth?: number;

  /**
   * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
   */
  Channels?: number;

  /**
   * The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.
   */
  Format?: WavFormat | string;

  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;
}

export namespace WavSettings {
  export const filterSensitiveLog = (obj: WavSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is WavSettings => __isa(o, "WavSettings");
}
