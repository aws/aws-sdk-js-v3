// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { ListPresetsRequest, ListPresetsResponse } from "../models/models_2";
import { de_ListPresetsCommand, se_ListPresetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPresetsCommand}.
 */
export interface ListPresetsCommandInput extends ListPresetsRequest {}
/**
 * @public
 *
 * The output of {@link ListPresetsCommand}.
 */
export interface ListPresetsCommandOutput extends ListPresetsResponse, __MetadataBearer {}

/**
 * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, ListPresetsCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, ListPresetsCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const input = { // ListPresetsRequest
 *   Category: "STRING_VALUE",
 *   ListBy: "NAME" || "CREATION_DATE" || "SYSTEM",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Order: "ASCENDING" || "DESCENDING",
 * };
 * const command = new ListPresetsCommand(input);
 * const response = await client.send(command);
 * // { // ListPresetsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Presets: [ // __listOfPreset
 * //     { // Preset
 * //       Arn: "STRING_VALUE",
 * //       Category: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       Settings: { // PresetSettings
 * //         AudioDescriptions: [ // __listOfAudioDescription
 * //           { // AudioDescription
 * //             AudioChannelTaggingSettings: { // AudioChannelTaggingSettings
 * //               ChannelTag: "L" || "R" || "C" || "LFE" || "LS" || "RS" || "LC" || "RC" || "CS" || "LSD" || "RSD" || "TCS" || "VHL" || "VHC" || "VHR" || "TBL" || "TBC" || "TBR" || "RSL" || "RSR" || "LW" || "RW" || "LFE2" || "LT" || "RT" || "HI" || "NAR" || "M",
 * //               ChannelTags: [ // __listOfAudioChannelTag
 * //                 "L" || "R" || "C" || "LFE" || "LS" || "RS" || "LC" || "RC" || "CS" || "LSD" || "RSD" || "TCS" || "VHL" || "VHC" || "VHR" || "TBL" || "TBC" || "TBR" || "RSL" || "RSR" || "LW" || "RW" || "LFE2" || "LT" || "RT" || "HI" || "NAR" || "M",
 * //               ],
 * //             },
 * //             AudioNormalizationSettings: { // AudioNormalizationSettings
 * //               Algorithm: "ITU_BS_1770_1" || "ITU_BS_1770_2" || "ITU_BS_1770_3" || "ITU_BS_1770_4",
 * //               AlgorithmControl: "CORRECT_AUDIO" || "MEASURE_ONLY",
 * //               CorrectionGateLevel: Number("int"),
 * //               LoudnessLogging: "LOG" || "DONT_LOG",
 * //               PeakCalculation: "TRUE_PEAK" || "NONE",
 * //               TargetLkfs: Number("double"),
 * //               TruePeakLimiterThreshold: Number("double"),
 * //             },
 * //             AudioSourceName: "STRING_VALUE",
 * //             AudioType: Number("int"),
 * //             AudioTypeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //             CodecSettings: { // AudioCodecSettings
 * //               AacSettings: { // AacSettings
 * //                 AudioDescriptionBroadcasterMix: "BROADCASTER_MIXED_AD" || "NORMAL",
 * //                 Bitrate: Number("int"),
 * //                 CodecProfile: "LC" || "HEV1" || "HEV2",
 * //                 CodingMode: "AD_RECEIVER_MIX" || "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_5_1",
 * //                 RateControlMode: "CBR" || "VBR",
 * //                 RawFormat: "LATM_LOAS" || "NONE",
 * //                 SampleRate: Number("int"),
 * //                 Specification: "MPEG2" || "MPEG4",
 * //                 VbrQuality: "LOW" || "MEDIUM_LOW" || "MEDIUM_HIGH" || "HIGH",
 * //               },
 * //               Ac3Settings: { // Ac3Settings
 * //                 Bitrate: Number("int"),
 * //                 BitstreamMode: "COMPLETE_MAIN" || "COMMENTARY" || "DIALOGUE" || "EMERGENCY" || "HEARING_IMPAIRED" || "MUSIC_AND_EFFECTS" || "VISUALLY_IMPAIRED" || "VOICE_OVER",
 * //                 CodingMode: "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_3_2_LFE",
 * //                 Dialnorm: Number("int"),
 * //                 DynamicRangeCompressionLine: "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH" || "NONE",
 * //                 DynamicRangeCompressionProfile: "FILM_STANDARD" || "NONE",
 * //                 DynamicRangeCompressionRf: "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH" || "NONE",
 * //                 LfeFilter: "ENABLED" || "DISABLED",
 * //                 MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //                 SampleRate: Number("int"),
 * //               },
 * //               AiffSettings: { // AiffSettings
 * //                 BitDepth: Number("int"),
 * //                 Channels: Number("int"),
 * //                 SampleRate: Number("int"),
 * //               },
 * //               Codec: "AAC" || "MP2" || "MP3" || "WAV" || "AIFF" || "AC3" || "EAC3" || "EAC3_ATMOS" || "VORBIS" || "OPUS" || "PASSTHROUGH" || "FLAC",
 * //               Eac3AtmosSettings: { // Eac3AtmosSettings
 * //                 Bitrate: Number("int"),
 * //                 BitstreamMode: "COMPLETE_MAIN",
 * //                 CodingMode: "CODING_MODE_AUTO" || "CODING_MODE_5_1_4" || "CODING_MODE_7_1_4" || "CODING_MODE_9_1_6",
 * //                 DialogueIntelligence: "ENABLED" || "DISABLED",
 * //                 DownmixControl: "SPECIFIED" || "INITIALIZE_FROM_SOURCE",
 * //                 DynamicRangeCompressionLine: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 * //                 DynamicRangeCompressionRf: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 * //                 DynamicRangeControl: "SPECIFIED" || "INITIALIZE_FROM_SOURCE",
 * //                 LoRoCenterMixLevel: Number("double"),
 * //                 LoRoSurroundMixLevel: Number("double"),
 * //                 LtRtCenterMixLevel: Number("double"),
 * //                 LtRtSurroundMixLevel: Number("double"),
 * //                 MeteringMode: "LEQ_A" || "ITU_BS_1770_1" || "ITU_BS_1770_2" || "ITU_BS_1770_3" || "ITU_BS_1770_4",
 * //                 SampleRate: Number("int"),
 * //                 SpeechThreshold: Number("int"),
 * //                 StereoDownmix: "NOT_INDICATED" || "STEREO" || "SURROUND" || "DPL2",
 * //                 SurroundExMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 * //               },
 * //               Eac3Settings: { // Eac3Settings
 * //                 AttenuationControl: "ATTENUATE_3_DB" || "NONE",
 * //                 Bitrate: Number("int"),
 * //                 BitstreamMode: "COMPLETE_MAIN" || "COMMENTARY" || "EMERGENCY" || "HEARING_IMPAIRED" || "VISUALLY_IMPAIRED",
 * //                 CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0" || "CODING_MODE_3_2",
 * //                 DcFilter: "ENABLED" || "DISABLED",
 * //                 Dialnorm: Number("int"),
 * //                 DynamicRangeCompressionLine: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 * //                 DynamicRangeCompressionRf: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 * //                 LfeControl: "LFE" || "NO_LFE",
 * //                 LfeFilter: "ENABLED" || "DISABLED",
 * //                 LoRoCenterMixLevel: Number("double"),
 * //                 LoRoSurroundMixLevel: Number("double"),
 * //                 LtRtCenterMixLevel: Number("double"),
 * //                 LtRtSurroundMixLevel: Number("double"),
 * //                 MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //                 PassthroughControl: "WHEN_POSSIBLE" || "NO_PASSTHROUGH",
 * //                 PhaseControl: "SHIFT_90_DEGREES" || "NO_SHIFT",
 * //                 SampleRate: Number("int"),
 * //                 StereoDownmix: "NOT_INDICATED" || "LO_RO" || "LT_RT" || "DPL2",
 * //                 SurroundExMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 * //                 SurroundMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 * //               },
 * //               FlacSettings: { // FlacSettings
 * //                 BitDepth: Number("int"),
 * //                 Channels: Number("int"),
 * //                 SampleRate: Number("int"),
 * //               },
 * //               Mp2Settings: { // Mp2Settings
 * //                 Bitrate: Number("int"),
 * //                 Channels: Number("int"),
 * //                 SampleRate: Number("int"),
 * //               },
 * //               Mp3Settings: { // Mp3Settings
 * //                 Bitrate: Number("int"),
 * //                 Channels: Number("int"),
 * //                 RateControlMode: "CBR" || "VBR",
 * //                 SampleRate: Number("int"),
 * //                 VbrQuality: Number("int"),
 * //               },
 * //               OpusSettings: { // OpusSettings
 * //                 Bitrate: Number("int"),
 * //                 Channels: Number("int"),
 * //                 SampleRate: Number("int"),
 * //               },
 * //               VorbisSettings: { // VorbisSettings
 * //                 Channels: Number("int"),
 * //                 SampleRate: Number("int"),
 * //                 VbrQuality: Number("int"),
 * //               },
 * //               WavSettings: { // WavSettings
 * //                 BitDepth: Number("int"),
 * //                 Channels: Number("int"),
 * //                 Format: "RIFF" || "RF64",
 * //                 SampleRate: Number("int"),
 * //               },
 * //             },
 * //             CustomLanguageCode: "STRING_VALUE",
 * //             LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //             LanguageCodeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //             RemixSettings: { // RemixSettings
 * //               AudioDescriptionAudioChannel: Number("int"),
 * //               AudioDescriptionDataChannel: Number("int"),
 * //               ChannelMapping: { // ChannelMapping
 * //                 OutputChannels: [ // __listOfOutputChannelMapping
 * //                   { // OutputChannelMapping
 * //                     InputChannels: [ // __listOf__integerMinNegative60Max6
 * //                       Number("int"),
 * //                     ],
 * //                     InputChannelsFineTune: [ // __listOf__doubleMinNegative60Max6
 * //                       Number("double"),
 * //                     ],
 * //                   },
 * //                 ],
 * //               },
 * //               ChannelsIn: Number("int"),
 * //               ChannelsOut: Number("int"),
 * //             },
 * //             StreamName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         CaptionDescriptions: [ // __listOfCaptionDescriptionPreset
 * //           { // CaptionDescriptionPreset
 * //             CustomLanguageCode: "STRING_VALUE",
 * //             DestinationSettings: { // CaptionDestinationSettings
 * //               BurninDestinationSettings: { // BurninDestinationSettings
 * //                 Alignment: "CENTERED" || "LEFT" || "AUTO",
 * //                 ApplyFontColor: "WHITE_TEXT_ONLY" || "ALL_TEXT",
 * //                 BackgroundColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 * //                 BackgroundOpacity: Number("int"),
 * //                 FallbackFont: "BEST_MATCH" || "MONOSPACED_SANSSERIF" || "MONOSPACED_SERIF" || "PROPORTIONAL_SANSSERIF" || "PROPORTIONAL_SERIF",
 * //                 FontColor: "WHITE" || "BLACK" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "HEX" || "AUTO",
 * //                 FontFileBold: "STRING_VALUE",
 * //                 FontFileBoldItalic: "STRING_VALUE",
 * //                 FontFileItalic: "STRING_VALUE",
 * //                 FontFileRegular: "STRING_VALUE",
 * //                 FontOpacity: Number("int"),
 * //                 FontResolution: Number("int"),
 * //                 FontScript: "AUTOMATIC" || "HANS" || "HANT",
 * //                 FontSize: Number("int"),
 * //                 HexFontColor: "STRING_VALUE",
 * //                 OutlineColor: "BLACK" || "WHITE" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "AUTO",
 * //                 OutlineSize: Number("int"),
 * //                 ShadowColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 * //                 ShadowOpacity: Number("int"),
 * //                 ShadowXOffset: Number("int"),
 * //                 ShadowYOffset: Number("int"),
 * //                 StylePassthrough: "ENABLED" || "DISABLED",
 * //                 TeletextSpacing: "FIXED_GRID" || "PROPORTIONAL" || "AUTO",
 * //                 XPosition: Number("int"),
 * //                 YPosition: Number("int"),
 * //               },
 * //               DestinationType: "BURN_IN" || "DVB_SUB" || "EMBEDDED" || "EMBEDDED_PLUS_SCTE20" || "IMSC" || "SCTE20_PLUS_EMBEDDED" || "SCC" || "SRT" || "SMI" || "TELETEXT" || "TTML" || "WEBVTT",
 * //               DvbSubDestinationSettings: { // DvbSubDestinationSettings
 * //                 Alignment: "CENTERED" || "LEFT" || "AUTO",
 * //                 ApplyFontColor: "WHITE_TEXT_ONLY" || "ALL_TEXT",
 * //                 BackgroundColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 * //                 BackgroundOpacity: Number("int"),
 * //                 DdsHandling: "NONE" || "SPECIFIED" || "NO_DISPLAY_WINDOW",
 * //                 DdsXCoordinate: Number("int"),
 * //                 DdsYCoordinate: Number("int"),
 * //                 FallbackFont: "BEST_MATCH" || "MONOSPACED_SANSSERIF" || "MONOSPACED_SERIF" || "PROPORTIONAL_SANSSERIF" || "PROPORTIONAL_SERIF",
 * //                 FontColor: "WHITE" || "BLACK" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "HEX" || "AUTO",
 * //                 FontFileBold: "STRING_VALUE",
 * //                 FontFileBoldItalic: "STRING_VALUE",
 * //                 FontFileItalic: "STRING_VALUE",
 * //                 FontFileRegular: "STRING_VALUE",
 * //                 FontOpacity: Number("int"),
 * //                 FontResolution: Number("int"),
 * //                 FontScript: "AUTOMATIC" || "HANS" || "HANT",
 * //                 FontSize: Number("int"),
 * //                 Height: Number("int"),
 * //                 HexFontColor: "STRING_VALUE",
 * //                 OutlineColor: "BLACK" || "WHITE" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "AUTO",
 * //                 OutlineSize: Number("int"),
 * //                 ShadowColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 * //                 ShadowOpacity: Number("int"),
 * //                 ShadowXOffset: Number("int"),
 * //                 ShadowYOffset: Number("int"),
 * //                 StylePassthrough: "ENABLED" || "DISABLED",
 * //                 SubtitlingType: "HEARING_IMPAIRED" || "STANDARD",
 * //                 TeletextSpacing: "FIXED_GRID" || "PROPORTIONAL" || "AUTO",
 * //                 Width: Number("int"),
 * //                 XPosition: Number("int"),
 * //                 YPosition: Number("int"),
 * //               },
 * //               EmbeddedDestinationSettings: { // EmbeddedDestinationSettings
 * //                 Destination608ChannelNumber: Number("int"),
 * //                 Destination708ServiceNumber: Number("int"),
 * //               },
 * //               ImscDestinationSettings: { // ImscDestinationSettings
 * //                 Accessibility: "DISABLED" || "ENABLED",
 * //                 StylePassthrough: "ENABLED" || "DISABLED",
 * //               },
 * //               SccDestinationSettings: { // SccDestinationSettings
 * //                 Framerate: "FRAMERATE_23_97" || "FRAMERATE_24" || "FRAMERATE_25" || "FRAMERATE_29_97_DROPFRAME" || "FRAMERATE_29_97_NON_DROPFRAME",
 * //               },
 * //               SrtDestinationSettings: { // SrtDestinationSettings
 * //                 StylePassthrough: "ENABLED" || "DISABLED",
 * //               },
 * //               TeletextDestinationSettings: { // TeletextDestinationSettings
 * //                 PageNumber: "STRING_VALUE",
 * //                 PageTypes: [ // __listOfTeletextPageType
 * //                   "PAGE_TYPE_INITIAL" || "PAGE_TYPE_SUBTITLE" || "PAGE_TYPE_ADDL_INFO" || "PAGE_TYPE_PROGRAM_SCHEDULE" || "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE",
 * //                 ],
 * //               },
 * //               TtmlDestinationSettings: { // TtmlDestinationSettings
 * //                 StylePassthrough: "ENABLED" || "DISABLED",
 * //               },
 * //               WebvttDestinationSettings: { // WebvttDestinationSettings
 * //                 Accessibility: "DISABLED" || "ENABLED",
 * //                 StylePassthrough: "ENABLED" || "DISABLED" || "STRICT",
 * //               },
 * //             },
 * //             LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //             LanguageDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ContainerSettings: { // ContainerSettings
 * //           CmfcSettings: { // CmfcSettings
 * //             AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //             AudioGroupId: "STRING_VALUE",
 * //             AudioRenditionSets: "STRING_VALUE",
 * //             AudioTrackType: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT" || "ALTERNATE_AUDIO_AUTO_SELECT" || "ALTERNATE_AUDIO_NOT_AUTO_SELECT" || "AUDIO_ONLY_VARIANT_STREAM",
 * //             DescriptiveVideoServiceFlag: "DONT_FLAG" || "FLAG",
 * //             IFrameOnlyManifest: "INCLUDE" || "EXCLUDE",
 * //             KlvMetadata: "PASSTHROUGH" || "NONE",
 * //             ManifestMetadataSignaling: "ENABLED" || "DISABLED",
 * //             Scte35Esam: "INSERT" || "NONE",
 * //             Scte35Source: "PASSTHROUGH" || "NONE",
 * //             TimedMetadata: "PASSTHROUGH" || "NONE",
 * //             TimedMetadataBoxVersion: "VERSION_0" || "VERSION_1",
 * //             TimedMetadataSchemeIdUri: "STRING_VALUE",
 * //             TimedMetadataValue: "STRING_VALUE",
 * //           },
 * //           Container: "F4V" || "ISMV" || "M2TS" || "M3U8" || "CMFC" || "MOV" || "MP4" || "MPD" || "MXF" || "WEBM" || "RAW" || "Y4M",
 * //           F4vSettings: { // F4vSettings
 * //             MoovPlacement: "PROGRESSIVE_DOWNLOAD" || "NORMAL",
 * //           },
 * //           M2tsSettings: { // M2tsSettings
 * //             AudioBufferModel: "DVB" || "ATSC",
 * //             AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //             AudioFramesPerPes: Number("int"),
 * //             AudioPids: [ // __listOf__integerMin32Max8182
 * //               Number("int"),
 * //             ],
 * //             Bitrate: Number("int"),
 * //             BufferModel: "MULTIPLEX" || "NONE",
 * //             DataPTSControl: "AUTO" || "ALIGN_TO_VIDEO",
 * //             DvbNitSettings: { // DvbNitSettings
 * //               NetworkId: Number("int"),
 * //               NetworkName: "STRING_VALUE",
 * //               NitInterval: Number("int"),
 * //             },
 * //             DvbSdtSettings: { // DvbSdtSettings
 * //               OutputSdt: "SDT_FOLLOW" || "SDT_FOLLOW_IF_PRESENT" || "SDT_MANUAL" || "SDT_NONE",
 * //               SdtInterval: Number("int"),
 * //               ServiceName: "STRING_VALUE",
 * //               ServiceProviderName: "STRING_VALUE",
 * //             },
 * //             DvbSubPids: [
 * //               Number("int"),
 * //             ],
 * //             DvbTdtSettings: { // DvbTdtSettings
 * //               TdtInterval: Number("int"),
 * //             },
 * //             DvbTeletextPid: Number("int"),
 * //             EbpAudioInterval: "VIDEO_AND_FIXED_INTERVALS" || "VIDEO_INTERVAL",
 * //             EbpPlacement: "VIDEO_AND_AUDIO_PIDS" || "VIDEO_PID",
 * //             EsRateInPes: "INCLUDE" || "EXCLUDE",
 * //             ForceTsVideoEbpOrder: "FORCE" || "DEFAULT",
 * //             FragmentTime: Number("double"),
 * //             KlvMetadata: "PASSTHROUGH" || "NONE",
 * //             MaxPcrInterval: Number("int"),
 * //             MinEbpInterval: Number("int"),
 * //             NielsenId3: "INSERT" || "NONE",
 * //             NullPacketBitrate: Number("double"),
 * //             PatInterval: Number("int"),
 * //             PcrControl: "PCR_EVERY_PES_PACKET" || "CONFIGURED_PCR_PERIOD",
 * //             PcrPid: Number("int"),
 * //             PmtInterval: Number("int"),
 * //             PmtPid: Number("int"),
 * //             PreventBufferUnderflow: "DISABLED" || "ENABLED",
 * //             PrivateMetadataPid: Number("int"),
 * //             ProgramNumber: Number("int"),
 * //             PtsOffset: Number("int"),
 * //             PtsOffsetMode: "AUTO" || "SECONDS",
 * //             RateMode: "VBR" || "CBR",
 * //             Scte35Esam: { // M2tsScte35Esam
 * //               Scte35EsamPid: Number("int"),
 * //             },
 * //             Scte35Pid: Number("int"),
 * //             Scte35Source: "PASSTHROUGH" || "NONE",
 * //             SegmentationMarkers: "NONE" || "RAI_SEGSTART" || "RAI_ADAPT" || "PSI_SEGSTART" || "EBP" || "EBP_LEGACY",
 * //             SegmentationStyle: "MAINTAIN_CADENCE" || "RESET_CADENCE",
 * //             SegmentationTime: Number("double"),
 * //             TimedMetadataPid: Number("int"),
 * //             TransportStreamId: Number("int"),
 * //             VideoPid: Number("int"),
 * //           },
 * //           M3u8Settings: { // M3u8Settings
 * //             AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //             AudioFramesPerPes: Number("int"),
 * //             AudioPids: [
 * //               Number("int"),
 * //             ],
 * //             DataPTSControl: "AUTO" || "ALIGN_TO_VIDEO",
 * //             MaxPcrInterval: Number("int"),
 * //             NielsenId3: "INSERT" || "NONE",
 * //             PatInterval: Number("int"),
 * //             PcrControl: "PCR_EVERY_PES_PACKET" || "CONFIGURED_PCR_PERIOD",
 * //             PcrPid: Number("int"),
 * //             PmtInterval: Number("int"),
 * //             PmtPid: Number("int"),
 * //             PrivateMetadataPid: Number("int"),
 * //             ProgramNumber: Number("int"),
 * //             PtsOffset: Number("int"),
 * //             PtsOffsetMode: "AUTO" || "SECONDS",
 * //             Scte35Pid: Number("int"),
 * //             Scte35Source: "PASSTHROUGH" || "NONE",
 * //             TimedMetadata: "PASSTHROUGH" || "NONE",
 * //             TimedMetadataPid: Number("int"),
 * //             TransportStreamId: Number("int"),
 * //             VideoPid: Number("int"),
 * //           },
 * //           MovSettings: { // MovSettings
 * //             ClapAtom: "INCLUDE" || "EXCLUDE",
 * //             CslgAtom: "INCLUDE" || "EXCLUDE",
 * //             Mpeg2FourCCControl: "XDCAM" || "MPEG",
 * //             PaddingControl: "OMNEON" || "NONE",
 * //             Reference: "SELF_CONTAINED" || "EXTERNAL",
 * //           },
 * //           Mp4Settings: { // Mp4Settings
 * //             AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //             CslgAtom: "INCLUDE" || "EXCLUDE",
 * //             CttsVersion: Number("int"),
 * //             FreeSpaceBox: "INCLUDE" || "EXCLUDE",
 * //             MoovPlacement: "PROGRESSIVE_DOWNLOAD" || "NORMAL",
 * //             Mp4MajorBrand: "STRING_VALUE",
 * //           },
 * //           MpdSettings: { // MpdSettings
 * //             AccessibilityCaptionHints: "INCLUDE" || "EXCLUDE",
 * //             AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //             CaptionContainerType: "RAW" || "FRAGMENTED_MP4",
 * //             KlvMetadata: "NONE" || "PASSTHROUGH",
 * //             ManifestMetadataSignaling: "ENABLED" || "DISABLED",
 * //             Scte35Esam: "INSERT" || "NONE",
 * //             Scte35Source: "PASSTHROUGH" || "NONE",
 * //             TimedMetadata: "PASSTHROUGH" || "NONE",
 * //             TimedMetadataBoxVersion: "VERSION_0" || "VERSION_1",
 * //             TimedMetadataSchemeIdUri: "STRING_VALUE",
 * //             TimedMetadataValue: "STRING_VALUE",
 * //           },
 * //           MxfSettings: { // MxfSettings
 * //             AfdSignaling: "NO_COPY" || "COPY_FROM_VIDEO",
 * //             Profile: "D_10" || "XDCAM" || "OP1A" || "XAVC" || "XDCAM_RDD9",
 * //             XavcProfileSettings: { // MxfXavcProfileSettings
 * //               DurationMode: "ALLOW_ANY_DURATION" || "DROP_FRAMES_FOR_COMPLIANCE",
 * //               MaxAncDataSize: Number("int"),
 * //             },
 * //           },
 * //         },
 * //         VideoDescription: { // VideoDescription
 * //           AfdSignaling: "NONE" || "AUTO" || "FIXED",
 * //           AntiAlias: "DISABLED" || "ENABLED",
 * //           CodecSettings: { // VideoCodecSettings
 * //             Av1Settings: { // Av1Settings
 * //               AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 * //               BitDepth: "BIT_8" || "BIT_10",
 * //               FilmGrainSynthesis: "DISABLED" || "ENABLED",
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               GopSize: Number("double"),
 * //               MaxBitrate: Number("int"),
 * //               NumberBFramesBetweenReferenceFrames: Number("int"),
 * //               QvbrSettings: { // Av1QvbrSettings
 * //                 QvbrQualityLevel: Number("int"),
 * //                 QvbrQualityLevelFineTune: Number("double"),
 * //               },
 * //               RateControlMode: "QVBR",
 * //               Slices: Number("int"),
 * //               SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //             },
 * //             AvcIntraSettings: { // AvcIntraSettings
 * //               AvcIntraClass: "CLASS_50" || "CLASS_100" || "CLASS_200" || "CLASS_4K_2K",
 * //               AvcIntraUhdSettings: { // AvcIntraUhdSettings
 * //                 QualityTuningLevel: "SINGLE_PASS" || "MULTI_PASS",
 * //               },
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //               ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //               SlowPal: "DISABLED" || "ENABLED",
 * //               Telecine: "NONE" || "HARD",
 * //             },
 * //             Codec: "AV1" || "AVC_INTRA" || "FRAME_CAPTURE" || "H_264" || "H_265" || "MPEG2" || "PASSTHROUGH" || "PRORES" || "UNCOMPRESSED" || "VC3" || "VP8" || "VP9" || "XAVC",
 * //             FrameCaptureSettings: { // FrameCaptureSettings
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               MaxCaptures: Number("int"),
 * //               Quality: Number("int"),
 * //             },
 * //             H264Settings: { // H264Settings
 * //               AdaptiveQuantization: "OFF" || "AUTO" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 * //               BandwidthReductionFilter: { // BandwidthReductionFilter
 * //                 Sharpening: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 * //                 Strength: "LOW" || "MEDIUM" || "HIGH" || "AUTO" || "OFF",
 * //               },
 * //               Bitrate: Number("int"),
 * //               CodecLevel: "AUTO" || "LEVEL_1" || "LEVEL_1_1" || "LEVEL_1_2" || "LEVEL_1_3" || "LEVEL_2" || "LEVEL_2_1" || "LEVEL_2_2" || "LEVEL_3" || "LEVEL_3_1" || "LEVEL_3_2" || "LEVEL_4" || "LEVEL_4_1" || "LEVEL_4_2" || "LEVEL_5" || "LEVEL_5_1" || "LEVEL_5_2",
 * //               CodecProfile: "BASELINE" || "HIGH" || "HIGH_10BIT" || "HIGH_422" || "HIGH_422_10BIT" || "MAIN",
 * //               DynamicSubGop: "ADAPTIVE" || "STATIC",
 * //               EndOfStreamMarkers: "INCLUDE" || "SUPPRESS",
 * //               EntropyEncoding: "CABAC" || "CAVLC",
 * //               FieldEncoding: "PAFF" || "FORCE_FIELD" || "MBAFF",
 * //               FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               GopBReference: "DISABLED" || "ENABLED",
 * //               GopClosedCadence: Number("int"),
 * //               GopSize: Number("double"),
 * //               GopSizeUnits: "FRAMES" || "SECONDS" || "AUTO",
 * //               HrdBufferFinalFillPercentage: Number("int"),
 * //               HrdBufferInitialFillPercentage: Number("int"),
 * //               HrdBufferSize: Number("int"),
 * //               InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //               MaxBitrate: Number("int"),
 * //               MinIInterval: Number("int"),
 * //               NumberBFramesBetweenReferenceFrames: Number("int"),
 * //               NumberReferenceFrames: Number("int"),
 * //               ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               ParDenominator: Number("int"),
 * //               ParNumerator: Number("int"),
 * //               QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 * //               QvbrSettings: { // H264QvbrSettings
 * //                 MaxAverageBitrate: Number("int"),
 * //                 QvbrQualityLevel: Number("int"),
 * //                 QvbrQualityLevelFineTune: Number("double"),
 * //               },
 * //               RateControlMode: "VBR" || "CBR" || "QVBR",
 * //               RepeatPps: "DISABLED" || "ENABLED",
 * //               ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //               SceneChangeDetect: "DISABLED" || "ENABLED" || "TRANSITION_DETECTION",
 * //               Slices: Number("int"),
 * //               SlowPal: "DISABLED" || "ENABLED",
 * //               Softness: Number("int"),
 * //               SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               Syntax: "DEFAULT" || "RP2027",
 * //               Telecine: "NONE" || "SOFT" || "HARD",
 * //               TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               UnregisteredSeiTimecode: "DISABLED" || "ENABLED",
 * //             },
 * //             H265Settings: { // H265Settings
 * //               AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX" || "AUTO",
 * //               AlternateTransferFunctionSei: "DISABLED" || "ENABLED",
 * //               BandwidthReductionFilter: {
 * //                 Sharpening: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 * //                 Strength: "LOW" || "MEDIUM" || "HIGH" || "AUTO" || "OFF",
 * //               },
 * //               Bitrate: Number("int"),
 * //               CodecLevel: "AUTO" || "LEVEL_1" || "LEVEL_2" || "LEVEL_2_1" || "LEVEL_3" || "LEVEL_3_1" || "LEVEL_4" || "LEVEL_4_1" || "LEVEL_5" || "LEVEL_5_1" || "LEVEL_5_2" || "LEVEL_6" || "LEVEL_6_1" || "LEVEL_6_2",
 * //               CodecProfile: "MAIN_MAIN" || "MAIN_HIGH" || "MAIN10_MAIN" || "MAIN10_HIGH" || "MAIN_422_8BIT_MAIN" || "MAIN_422_8BIT_HIGH" || "MAIN_422_10BIT_MAIN" || "MAIN_422_10BIT_HIGH",
 * //               DynamicSubGop: "ADAPTIVE" || "STATIC",
 * //               EndOfStreamMarkers: "INCLUDE" || "SUPPRESS",
 * //               FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               GopBReference: "DISABLED" || "ENABLED",
 * //               GopClosedCadence: Number("int"),
 * //               GopSize: Number("double"),
 * //               GopSizeUnits: "FRAMES" || "SECONDS" || "AUTO",
 * //               HrdBufferFinalFillPercentage: Number("int"),
 * //               HrdBufferInitialFillPercentage: Number("int"),
 * //               HrdBufferSize: Number("int"),
 * //               InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //               MaxBitrate: Number("int"),
 * //               MinIInterval: Number("int"),
 * //               NumberBFramesBetweenReferenceFrames: Number("int"),
 * //               NumberReferenceFrames: Number("int"),
 * //               ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               ParDenominator: Number("int"),
 * //               ParNumerator: Number("int"),
 * //               QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 * //               QvbrSettings: { // H265QvbrSettings
 * //                 MaxAverageBitrate: Number("int"),
 * //                 QvbrQualityLevel: Number("int"),
 * //                 QvbrQualityLevelFineTune: Number("double"),
 * //               },
 * //               RateControlMode: "VBR" || "CBR" || "QVBR",
 * //               SampleAdaptiveOffsetFilterMode: "DEFAULT" || "ADAPTIVE" || "OFF",
 * //               ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //               SceneChangeDetect: "DISABLED" || "ENABLED" || "TRANSITION_DETECTION",
 * //               Slices: Number("int"),
 * //               SlowPal: "DISABLED" || "ENABLED",
 * //               SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               Telecine: "NONE" || "SOFT" || "HARD",
 * //               TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               TemporalIds: "DISABLED" || "ENABLED",
 * //               Tiles: "DISABLED" || "ENABLED",
 * //               UnregisteredSeiTimecode: "DISABLED" || "ENABLED",
 * //               WriteMp4PackagingType: "HVC1" || "HEV1",
 * //             },
 * //             Mpeg2Settings: { // Mpeg2Settings
 * //               AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH",
 * //               Bitrate: Number("int"),
 * //               CodecLevel: "AUTO" || "LOW" || "MAIN" || "HIGH1440" || "HIGH",
 * //               CodecProfile: "MAIN" || "PROFILE_422",
 * //               DynamicSubGop: "ADAPTIVE" || "STATIC",
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               GopClosedCadence: Number("int"),
 * //               GopSize: Number("double"),
 * //               GopSizeUnits: "FRAMES" || "SECONDS",
 * //               HrdBufferFinalFillPercentage: Number("int"),
 * //               HrdBufferInitialFillPercentage: Number("int"),
 * //               HrdBufferSize: Number("int"),
 * //               InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //               IntraDcPrecision: "AUTO" || "INTRA_DC_PRECISION_8" || "INTRA_DC_PRECISION_9" || "INTRA_DC_PRECISION_10" || "INTRA_DC_PRECISION_11",
 * //               MaxBitrate: Number("int"),
 * //               MinIInterval: Number("int"),
 * //               NumberBFramesBetweenReferenceFrames: Number("int"),
 * //               ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               ParDenominator: Number("int"),
 * //               ParNumerator: Number("int"),
 * //               QualityTuningLevel: "SINGLE_PASS" || "MULTI_PASS",
 * //               RateControlMode: "VBR" || "CBR",
 * //               ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //               SceneChangeDetect: "DISABLED" || "ENABLED",
 * //               SlowPal: "DISABLED" || "ENABLED",
 * //               Softness: Number("int"),
 * //               SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               Syntax: "DEFAULT" || "D_10",
 * //               Telecine: "NONE" || "SOFT" || "HARD",
 * //               TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //             },
 * //             ProresSettings: { // ProresSettings
 * //               ChromaSampling: "PRESERVE_444_SAMPLING" || "SUBSAMPLE_TO_422",
 * //               CodecProfile: "APPLE_PRORES_422" || "APPLE_PRORES_422_HQ" || "APPLE_PRORES_422_LT" || "APPLE_PRORES_422_PROXY" || "APPLE_PRORES_4444" || "APPLE_PRORES_4444_XQ",
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //               ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               ParDenominator: Number("int"),
 * //               ParNumerator: Number("int"),
 * //               ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //               SlowPal: "DISABLED" || "ENABLED",
 * //               Telecine: "NONE" || "HARD",
 * //             },
 * //             UncompressedSettings: { // UncompressedSettings
 * //               Fourcc: "I420" || "I422" || "I444",
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               InterlaceMode: "INTERLACED" || "PROGRESSIVE",
 * //               ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //               SlowPal: "DISABLED" || "ENABLED",
 * //               Telecine: "NONE" || "HARD",
 * //             },
 * //             Vc3Settings: { // Vc3Settings
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               InterlaceMode: "INTERLACED" || "PROGRESSIVE",
 * //               ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //               SlowPal: "DISABLED" || "ENABLED",
 * //               Telecine: "NONE" || "HARD",
 * //               Vc3Class: "CLASS_145_8BIT" || "CLASS_220_8BIT" || "CLASS_220_10BIT",
 * //             },
 * //             Vp8Settings: { // Vp8Settings
 * //               Bitrate: Number("int"),
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               GopSize: Number("double"),
 * //               HrdBufferSize: Number("int"),
 * //               MaxBitrate: Number("int"),
 * //               ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               ParDenominator: Number("int"),
 * //               ParNumerator: Number("int"),
 * //               QualityTuningLevel: "MULTI_PASS" || "MULTI_PASS_HQ",
 * //               RateControlMode: "VBR",
 * //             },
 * //             Vp9Settings: { // Vp9Settings
 * //               Bitrate: Number("int"),
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               GopSize: Number("double"),
 * //               HrdBufferSize: Number("int"),
 * //               MaxBitrate: Number("int"),
 * //               ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               ParDenominator: Number("int"),
 * //               ParNumerator: Number("int"),
 * //               QualityTuningLevel: "MULTI_PASS" || "MULTI_PASS_HQ",
 * //               RateControlMode: "VBR",
 * //             },
 * //             XavcSettings: { // XavcSettings
 * //               AdaptiveQuantization: "OFF" || "AUTO" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 * //               EntropyEncoding: "AUTO" || "CABAC" || "CAVLC",
 * //               FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //               FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //               FramerateDenominator: Number("int"),
 * //               FramerateNumerator: Number("int"),
 * //               Profile: "XAVC_HD_INTRA_CBG" || "XAVC_4K_INTRA_CBG" || "XAVC_4K_INTRA_VBR" || "XAVC_HD" || "XAVC_4K",
 * //               SlowPal: "DISABLED" || "ENABLED",
 * //               Softness: Number("int"),
 * //               SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //               Xavc4kIntraCbgProfileSettings: { // Xavc4kIntraCbgProfileSettings
 * //                 XavcClass: "CLASS_100" || "CLASS_300" || "CLASS_480",
 * //               },
 * //               Xavc4kIntraVbrProfileSettings: { // Xavc4kIntraVbrProfileSettings
 * //                 XavcClass: "CLASS_100" || "CLASS_300" || "CLASS_480",
 * //               },
 * //               Xavc4kProfileSettings: { // Xavc4kProfileSettings
 * //                 BitrateClass: "BITRATE_CLASS_100" || "BITRATE_CLASS_140" || "BITRATE_CLASS_200",
 * //                 CodecProfile: "HIGH" || "HIGH_422",
 * //                 FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                 GopBReference: "DISABLED" || "ENABLED",
 * //                 GopClosedCadence: Number("int"),
 * //                 HrdBufferSize: Number("int"),
 * //                 QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 * //                 Slices: Number("int"),
 * //               },
 * //               XavcHdIntraCbgProfileSettings: { // XavcHdIntraCbgProfileSettings
 * //                 XavcClass: "CLASS_50" || "CLASS_100" || "CLASS_200",
 * //               },
 * //               XavcHdProfileSettings: { // XavcHdProfileSettings
 * //                 BitrateClass: "BITRATE_CLASS_25" || "BITRATE_CLASS_35" || "BITRATE_CLASS_50",
 * //                 FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                 GopBReference: "DISABLED" || "ENABLED",
 * //                 GopClosedCadence: Number("int"),
 * //                 HrdBufferSize: Number("int"),
 * //                 InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //                 QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 * //                 Slices: Number("int"),
 * //                 Telecine: "NONE" || "HARD",
 * //               },
 * //             },
 * //           },
 * //           ColorMetadata: "IGNORE" || "INSERT",
 * //           Crop: { // Rectangle
 * //             Height: Number("int"),
 * //             Width: Number("int"),
 * //             X: Number("int"),
 * //             Y: Number("int"),
 * //           },
 * //           DropFrameTimecode: "DISABLED" || "ENABLED",
 * //           FixedAfd: Number("int"),
 * //           Height: Number("int"),
 * //           Position: {
 * //             Height: Number("int"),
 * //             Width: Number("int"),
 * //             X: Number("int"),
 * //             Y: Number("int"),
 * //           },
 * //           RespondToAfd: "NONE" || "RESPOND" || "PASSTHROUGH",
 * //           ScalingBehavior: "DEFAULT" || "STRETCH_TO_OUTPUT" || "FIT" || "FIT_NO_UPSCALE" || "FILL",
 * //           Sharpness: Number("int"),
 * //           TimecodeInsertion: "DISABLED" || "PIC_TIMING_SEI",
 * //           VideoPreprocessors: { // VideoPreprocessor
 * //             ColorCorrector: { // ColorCorrector
 * //               Brightness: Number("int"),
 * //               ClipLimits: { // ClipLimits
 * //                 MaximumRGBTolerance: Number("int"),
 * //                 MaximumYUV: Number("int"),
 * //                 MinimumRGBTolerance: Number("int"),
 * //                 MinimumYUV: Number("int"),
 * //               },
 * //               ColorSpaceConversion: "NONE" || "FORCE_601" || "FORCE_709" || "FORCE_HDR10" || "FORCE_HLG_2020" || "FORCE_P3DCI" || "FORCE_P3D65_SDR" || "FORCE_P3D65_HDR",
 * //               Contrast: Number("int"),
 * //               Hdr10Metadata: { // Hdr10Metadata
 * //                 BluePrimaryX: Number("int"),
 * //                 BluePrimaryY: Number("int"),
 * //                 GreenPrimaryX: Number("int"),
 * //                 GreenPrimaryY: Number("int"),
 * //                 MaxContentLightLevel: Number("int"),
 * //                 MaxFrameAverageLightLevel: Number("int"),
 * //                 MaxLuminance: Number("int"),
 * //                 MinLuminance: Number("int"),
 * //                 RedPrimaryX: Number("int"),
 * //                 RedPrimaryY: Number("int"),
 * //                 WhitePointX: Number("int"),
 * //                 WhitePointY: Number("int"),
 * //               },
 * //               HdrToSdrToneMapper: "PRESERVE_DETAILS" || "VIBRANT",
 * //               Hue: Number("int"),
 * //               MaxLuminance: Number("int"),
 * //               SampleRangeConversion: "LIMITED_RANGE_SQUEEZE" || "NONE" || "LIMITED_RANGE_CLIP",
 * //               Saturation: Number("int"),
 * //               SdrReferenceWhiteLevel: Number("int"),
 * //             },
 * //             Deinterlacer: { // Deinterlacer
 * //               Algorithm: "INTERPOLATE" || "INTERPOLATE_TICKER" || "BLEND" || "BLEND_TICKER" || "LINEAR_INTERPOLATION",
 * //               Control: "FORCE_ALL_FRAMES" || "NORMAL",
 * //               Mode: "DEINTERLACE" || "INVERSE_TELECINE" || "ADAPTIVE",
 * //             },
 * //             DolbyVision: { // DolbyVision
 * //               L6Metadata: { // DolbyVisionLevel6Metadata
 * //                 MaxCll: Number("int"),
 * //                 MaxFall: Number("int"),
 * //               },
 * //               L6Mode: "PASSTHROUGH" || "RECALCULATE" || "SPECIFY",
 * //               Mapping: "HDR10_NOMAP" || "HDR10_1000",
 * //               Profile: "PROFILE_5" || "PROFILE_8_1",
 * //             },
 * //             Hdr10Plus: { // Hdr10Plus
 * //               MasteringMonitorNits: Number("int"),
 * //               TargetMonitorNits: Number("int"),
 * //             },
 * //             ImageInserter: { // ImageInserter
 * //               InsertableImages: [ // __listOfInsertableImage
 * //                 { // InsertableImage
 * //                   Duration: Number("int"),
 * //                   FadeIn: Number("int"),
 * //                   FadeOut: Number("int"),
 * //                   Height: Number("int"),
 * //                   ImageInserterInput: "STRING_VALUE",
 * //                   ImageX: Number("int"),
 * //                   ImageY: Number("int"),
 * //                   Layer: Number("int"),
 * //                   Opacity: Number("int"),
 * //                   StartTime: "STRING_VALUE",
 * //                   Width: Number("int"),
 * //                 },
 * //               ],
 * //               SdrReferenceWhiteLevel: Number("int"),
 * //             },
 * //             NoiseReducer: { // NoiseReducer
 * //               Filter: "BILATERAL" || "MEAN" || "GAUSSIAN" || "LANCZOS" || "SHARPEN" || "CONSERVE" || "SPATIAL" || "TEMPORAL",
 * //               FilterSettings: { // NoiseReducerFilterSettings
 * //                 Strength: Number("int"),
 * //               },
 * //               SpatialFilterSettings: { // NoiseReducerSpatialFilterSettings
 * //                 PostFilterSharpenStrength: Number("int"),
 * //                 Speed: Number("int"),
 * //                 Strength: Number("int"),
 * //               },
 * //               TemporalFilterSettings: { // NoiseReducerTemporalFilterSettings
 * //                 AggressiveMode: Number("int"),
 * //                 PostTemporalSharpening: "DISABLED" || "ENABLED" || "AUTO",
 * //                 PostTemporalSharpeningStrength: "LOW" || "MEDIUM" || "HIGH",
 * //                 Speed: Number("int"),
 * //                 Strength: Number("int"),
 * //               },
 * //             },
 * //             PartnerWatermarking: { // PartnerWatermarking
 * //               NexguardFileMarkerSettings: { // NexGuardFileMarkerSettings
 * //                 License: "STRING_VALUE",
 * //                 Payload: Number("int"),
 * //                 Preset: "STRING_VALUE",
 * //                 Strength: "LIGHTEST" || "LIGHTER" || "DEFAULT" || "STRONGER" || "STRONGEST",
 * //               },
 * //             },
 * //             TimecodeBurnin: { // TimecodeBurnin
 * //               FontSize: Number("int"),
 * //               Position: "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT" || "MIDDLE_LEFT" || "MIDDLE_CENTER" || "MIDDLE_RIGHT" || "BOTTOM_LEFT" || "BOTTOM_CENTER" || "BOTTOM_RIGHT",
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //           Width: Number("int"),
 * //         },
 * //       },
 * //       Type: "SYSTEM" || "CUSTOM",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPresetsCommandInput - {@link ListPresetsCommandInput}
 * @returns {@link ListPresetsCommandOutput}
 * @see {@link ListPresetsCommandInput} for command's `input` shape.
 * @see {@link ListPresetsCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 * @public
 */
export class ListPresetsCommand extends $Command
  .classBuilder<
    ListPresetsCommandInput,
    ListPresetsCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConvert", "ListPresets", {})
  .n("MediaConvertClient", "ListPresetsCommand")
  .f(void 0, void 0)
  .ser(se_ListPresetsCommand)
  .de(de_ListPresetsCommand)
  .build() {}
