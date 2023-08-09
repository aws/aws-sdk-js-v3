// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { CreateJobRequest, CreateJobResponse } from "../models/models_1";
import { de_CreateJobCommand, se_CreateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * @public
 * Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, CreateJobCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, CreateJobCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const input = { // CreateJobRequest
 *   AccelerationSettings: { // AccelerationSettings
 *     Mode: "DISABLED" || "ENABLED" || "PREFERRED", // required
 *   },
 *   BillingTagsSource: "QUEUE" || "PRESET" || "JOB_TEMPLATE" || "JOB",
 *   ClientRequestToken: "STRING_VALUE",
 *   HopDestinations: [ // __listOfHopDestination
 *     { // HopDestination
 *       Priority: Number("int"),
 *       Queue: "STRING_VALUE",
 *       WaitMinutes: Number("int"),
 *     },
 *   ],
 *   JobTemplate: "STRING_VALUE",
 *   Priority: Number("int"),
 *   Queue: "STRING_VALUE",
 *   Role: "STRING_VALUE", // required
 *   Settings: { // JobSettings
 *     AdAvailOffset: Number("int"),
 *     AvailBlanking: { // AvailBlanking
 *       AvailBlankingImage: "STRING_VALUE",
 *     },
 *     Esam: { // EsamSettings
 *       ManifestConfirmConditionNotification: { // EsamManifestConfirmConditionNotification
 *         MccXml: "STRING_VALUE",
 *       },
 *       ResponseSignalPreroll: Number("int"),
 *       SignalProcessingNotification: { // EsamSignalProcessingNotification
 *         SccXml: "STRING_VALUE",
 *       },
 *     },
 *     ExtendedDataServices: { // ExtendedDataServices
 *       CopyProtectionAction: "PASSTHROUGH" || "STRIP",
 *       VchipAction: "PASSTHROUGH" || "STRIP",
 *     },
 *     Inputs: [ // __listOfInput
 *       { // Input
 *         AdvancedInputFilter: "ENABLED" || "DISABLED",
 *         AdvancedInputFilterSettings: { // AdvancedInputFilterSettings
 *           AddTexture: "ENABLED" || "DISABLED",
 *           Sharpening: "OFF" || "LOW" || "HIGH",
 *         },
 *         AudioSelectorGroups: { // __mapOfAudioSelectorGroup
 *           "<keys>": { // AudioSelectorGroup
 *             AudioSelectorNames: [ // __listOf__stringMin1
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         AudioSelectors: { // __mapOfAudioSelector
 *           "<keys>": { // AudioSelector
 *             AudioDurationCorrection: "DISABLED" || "AUTO" || "TRACK" || "FRAME",
 *             CustomLanguageCode: "STRING_VALUE",
 *             DefaultSelection: "DEFAULT" || "NOT_DEFAULT",
 *             ExternalAudioFileInput: "STRING_VALUE",
 *             HlsRenditionGroupSettings: { // HlsRenditionGroupSettings
 *               RenditionGroupId: "STRING_VALUE",
 *               RenditionLanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 *               RenditionName: "STRING_VALUE",
 *             },
 *             LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 *             Offset: Number("int"),
 *             Pids: [ // __listOf__integerMin1Max2147483647
 *               Number("int"),
 *             ],
 *             ProgramSelection: Number("int"),
 *             RemixSettings: { // RemixSettings
 *               ChannelMapping: { // ChannelMapping
 *                 OutputChannels: [ // __listOfOutputChannelMapping
 *                   { // OutputChannelMapping
 *                     InputChannels: [ // __listOf__integerMinNegative60Max6
 *                       Number("int"),
 *                     ],
 *                     InputChannelsFineTune: [ // __listOf__doubleMinNegative60Max6
 *                       Number("double"),
 *                     ],
 *                   },
 *                 ],
 *               },
 *               ChannelsIn: Number("int"),
 *               ChannelsOut: Number("int"),
 *             },
 *             SelectorType: "PID" || "TRACK" || "LANGUAGE_CODE" || "HLS_RENDITION_GROUP",
 *             Tracks: [
 *               Number("int"),
 *             ],
 *           },
 *         },
 *         CaptionSelectors: { // __mapOfCaptionSelector
 *           "<keys>": { // CaptionSelector
 *             CustomLanguageCode: "STRING_VALUE",
 *             LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 *             SourceSettings: { // CaptionSourceSettings
 *               AncillarySourceSettings: { // AncillarySourceSettings
 *                 Convert608To708: "UPCONVERT" || "DISABLED",
 *                 SourceAncillaryChannelNumber: Number("int"),
 *                 TerminateCaptions: "END_OF_INPUT" || "DISABLED",
 *               },
 *               DvbSubSourceSettings: { // DvbSubSourceSettings
 *                 Pid: Number("int"),
 *               },
 *               EmbeddedSourceSettings: { // EmbeddedSourceSettings
 *                 Convert608To708: "UPCONVERT" || "DISABLED",
 *                 Source608ChannelNumber: Number("int"),
 *                 Source608TrackNumber: Number("int"),
 *                 TerminateCaptions: "END_OF_INPUT" || "DISABLED",
 *               },
 *               FileSourceSettings: { // FileSourceSettings
 *                 Convert608To708: "UPCONVERT" || "DISABLED",
 *                 ConvertPaintToPop: "ENABLED" || "DISABLED",
 *                 Framerate: { // CaptionSourceFramerate
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                 },
 *                 SourceFile: "STRING_VALUE",
 *                 TimeDelta: Number("int"),
 *                 TimeDeltaUnits: "SECONDS" || "MILLISECONDS",
 *               },
 *               SourceType: "ANCILLARY" || "DVB_SUB" || "EMBEDDED" || "SCTE20" || "SCC" || "TTML" || "STL" || "SRT" || "SMI" || "SMPTE_TT" || "TELETEXT" || "NULL_SOURCE" || "IMSC" || "WEBVTT",
 *               TeletextSourceSettings: { // TeletextSourceSettings
 *                 PageNumber: "STRING_VALUE",
 *               },
 *               TrackSourceSettings: { // TrackSourceSettings
 *                 TrackNumber: Number("int"),
 *               },
 *               WebvttHlsSourceSettings: { // WebvttHlsSourceSettings
 *                 RenditionGroupId: "STRING_VALUE",
 *                 RenditionLanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 *                 RenditionName: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         },
 *         Crop: { // Rectangle
 *           Height: Number("int"),
 *           Width: Number("int"),
 *           X: Number("int"),
 *           Y: Number("int"),
 *         },
 *         DeblockFilter: "ENABLED" || "DISABLED",
 *         DecryptionSettings: { // InputDecryptionSettings
 *           DecryptionMode: "AES_CTR" || "AES_CBC" || "AES_GCM",
 *           EncryptedDecryptionKey: "STRING_VALUE",
 *           InitializationVector: "STRING_VALUE",
 *           KmsKeyRegion: "STRING_VALUE",
 *         },
 *         DenoiseFilter: "ENABLED" || "DISABLED",
 *         DolbyVisionMetadataXml: "STRING_VALUE",
 *         FileInput: "STRING_VALUE",
 *         FilterEnable: "AUTO" || "DISABLE" || "FORCE",
 *         FilterStrength: Number("int"),
 *         ImageInserter: { // ImageInserter
 *           InsertableImages: [ // __listOfInsertableImage
 *             { // InsertableImage
 *               Duration: Number("int"),
 *               FadeIn: Number("int"),
 *               FadeOut: Number("int"),
 *               Height: Number("int"),
 *               ImageInserterInput: "STRING_VALUE",
 *               ImageX: Number("int"),
 *               ImageY: Number("int"),
 *               Layer: Number("int"),
 *               Opacity: Number("int"),
 *               StartTime: "STRING_VALUE",
 *               Width: Number("int"),
 *             },
 *           ],
 *           SdrReferenceWhiteLevel: Number("int"),
 *         },
 *         InputClippings: [ // __listOfInputClipping
 *           { // InputClipping
 *             EndTimecode: "STRING_VALUE",
 *             StartTimecode: "STRING_VALUE",
 *           },
 *         ],
 *         InputScanType: "AUTO" || "PSF",
 *         Position: {
 *           Height: Number("int"),
 *           Width: Number("int"),
 *           X: Number("int"),
 *           Y: Number("int"),
 *         },
 *         ProgramNumber: Number("int"),
 *         PsiControl: "IGNORE_PSI" || "USE_PSI",
 *         SupplementalImps: [ // __listOf__stringPatternS3ASSETMAPXml
 *           "STRING_VALUE",
 *         ],
 *         TimecodeSource: "EMBEDDED" || "ZEROBASED" || "SPECIFIEDSTART",
 *         TimecodeStart: "STRING_VALUE",
 *         VideoGenerator: { // InputVideoGenerator
 *           Duration: Number("int"),
 *         },
 *         VideoSelector: { // VideoSelector
 *           AlphaBehavior: "DISCARD" || "REMAP_TO_LUMA",
 *           ColorSpace: "FOLLOW" || "REC_601" || "REC_709" || "HDR10" || "HLG_2020" || "P3DCI" || "P3D65_SDR" || "P3D65_HDR",
 *           ColorSpaceUsage: "FORCE" || "FALLBACK",
 *           EmbeddedTimecodeOverride: "NONE" || "USE_MDPM",
 *           Hdr10Metadata: { // Hdr10Metadata
 *             BluePrimaryX: Number("int"),
 *             BluePrimaryY: Number("int"),
 *             GreenPrimaryX: Number("int"),
 *             GreenPrimaryY: Number("int"),
 *             MaxContentLightLevel: Number("int"),
 *             MaxFrameAverageLightLevel: Number("int"),
 *             MaxLuminance: Number("int"),
 *             MinLuminance: Number("int"),
 *             RedPrimaryX: Number("int"),
 *             RedPrimaryY: Number("int"),
 *             WhitePointX: Number("int"),
 *             WhitePointY: Number("int"),
 *           },
 *           PadVideo: "DISABLED" || "BLACK",
 *           Pid: Number("int"),
 *           ProgramNumber: Number("int"),
 *           Rotate: "DEGREE_0" || "DEGREES_90" || "DEGREES_180" || "DEGREES_270" || "AUTO",
 *           SampleRange: "FOLLOW" || "FULL_RANGE" || "LIMITED_RANGE",
 *         },
 *       },
 *     ],
 *     KantarWatermark: { // KantarWatermarkSettings
 *       ChannelName: "STRING_VALUE",
 *       ContentReference: "STRING_VALUE",
 *       CredentialsSecretName: "STRING_VALUE",
 *       FileOffset: Number("double"),
 *       KantarLicenseId: Number("int"),
 *       KantarServerUrl: "STRING_VALUE",
 *       LogDestination: "STRING_VALUE",
 *       Metadata3: "STRING_VALUE",
 *       Metadata4: "STRING_VALUE",
 *       Metadata5: "STRING_VALUE",
 *       Metadata6: "STRING_VALUE",
 *       Metadata7: "STRING_VALUE",
 *       Metadata8: "STRING_VALUE",
 *     },
 *     MotionImageInserter: { // MotionImageInserter
 *       Framerate: { // MotionImageInsertionFramerate
 *         FramerateDenominator: Number("int"),
 *         FramerateNumerator: Number("int"),
 *       },
 *       Input: "STRING_VALUE",
 *       InsertionMode: "MOV" || "PNG",
 *       Offset: { // MotionImageInsertionOffset
 *         ImageX: Number("int"),
 *         ImageY: Number("int"),
 *       },
 *       Playback: "ONCE" || "REPEAT",
 *       StartTime: "STRING_VALUE",
 *     },
 *     NielsenConfiguration: { // NielsenConfiguration
 *       BreakoutCode: Number("int"),
 *       DistributorId: "STRING_VALUE",
 *     },
 *     NielsenNonLinearWatermark: { // NielsenNonLinearWatermarkSettings
 *       ActiveWatermarkProcess: "NAES2_AND_NW" || "CBET" || "NAES2_AND_NW_AND_CBET",
 *       AdiFilename: "STRING_VALUE",
 *       AssetId: "STRING_VALUE",
 *       AssetName: "STRING_VALUE",
 *       CbetSourceId: "STRING_VALUE",
 *       EpisodeId: "STRING_VALUE",
 *       MetadataDestination: "STRING_VALUE",
 *       SourceId: Number("int"),
 *       SourceWatermarkStatus: "CLEAN" || "WATERMARKED",
 *       TicServerUrl: "STRING_VALUE",
 *       UniqueTicPerAudioTrack: "RESERVE_UNIQUE_TICS_PER_TRACK" || "SAME_TICS_PER_TRACK",
 *     },
 *     OutputGroups: [ // __listOfOutputGroup
 *       { // OutputGroup
 *         AutomatedEncodingSettings: { // AutomatedEncodingSettings
 *           AbrSettings: { // AutomatedAbrSettings
 *             MaxAbrBitrate: Number("int"),
 *             MaxRenditions: Number("int"),
 *             MinAbrBitrate: Number("int"),
 *             Rules: [ // __listOfAutomatedAbrRule
 *               { // AutomatedAbrRule
 *                 AllowedRenditions: [ // __listOfAllowedRenditionSize
 *                   { // AllowedRenditionSize
 *                     Height: Number("int"),
 *                     Required: "ENABLED" || "DISABLED",
 *                     Width: Number("int"),
 *                   },
 *                 ],
 *                 ForceIncludeRenditions: [ // __listOfForceIncludeRenditionSize
 *                   { // ForceIncludeRenditionSize
 *                     Height: Number("int"),
 *                     Width: Number("int"),
 *                   },
 *                 ],
 *                 MinBottomRenditionSize: { // MinBottomRenditionSize
 *                   Height: Number("int"),
 *                   Width: Number("int"),
 *                 },
 *                 MinTopRenditionSize: { // MinTopRenditionSize
 *                   Height: Number("int"),
 *                   Width: Number("int"),
 *                 },
 *                 Type: "MIN_TOP_RENDITION_SIZE" || "MIN_BOTTOM_RENDITION_SIZE" || "FORCE_INCLUDE_RENDITIONS" || "ALLOWED_RENDITIONS",
 *               },
 *             ],
 *           },
 *         },
 *         CustomName: "STRING_VALUE",
 *         Name: "STRING_VALUE",
 *         OutputGroupSettings: { // OutputGroupSettings
 *           CmafGroupSettings: { // CmafGroupSettings
 *             AdditionalManifests: [ // __listOfCmafAdditionalManifest
 *               { // CmafAdditionalManifest
 *                 ManifestNameModifier: "STRING_VALUE",
 *                 SelectedOutputs: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             BaseUrl: "STRING_VALUE",
 *             ClientCache: "DISABLED" || "ENABLED",
 *             CodecSpecification: "RFC_6381" || "RFC_4281",
 *             DashManifestStyle: "BASIC" || "COMPACT" || "DISTINCT",
 *             Destination: "STRING_VALUE",
 *             DestinationSettings: { // DestinationSettings
 *               S3Settings: { // S3DestinationSettings
 *                 AccessControl: { // S3DestinationAccessControl
 *                   CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 *                 },
 *                 Encryption: { // S3EncryptionSettings
 *                   EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 *                   KmsEncryptionContext: "STRING_VALUE",
 *                   KmsKeyArn: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *             Encryption: { // CmafEncryptionSettings
 *               ConstantInitializationVector: "STRING_VALUE",
 *               EncryptionMethod: "SAMPLE_AES" || "AES_CTR",
 *               InitializationVectorInManifest: "INCLUDE" || "EXCLUDE",
 *               SpekeKeyProvider: { // SpekeKeyProviderCmaf
 *                 CertificateArn: "STRING_VALUE",
 *                 DashSignaledSystemIds: [ // __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12
 *                   "STRING_VALUE",
 *                 ],
 *                 HlsSignaledSystemIds: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ResourceId: "STRING_VALUE",
 *                 Url: "STRING_VALUE",
 *               },
 *               StaticKeyProvider: { // StaticKeyProvider
 *                 KeyFormat: "STRING_VALUE",
 *                 KeyFormatVersions: "STRING_VALUE",
 *                 StaticKeyValue: "STRING_VALUE",
 *                 Url: "STRING_VALUE",
 *               },
 *               Type: "SPEKE" || "STATIC_KEY",
 *             },
 *             FragmentLength: Number("int"),
 *             ImageBasedTrickPlay: "NONE" || "THUMBNAIL" || "THUMBNAIL_AND_FULLFRAME" || "ADVANCED",
 *             ImageBasedTrickPlaySettings: { // CmafImageBasedTrickPlaySettings
 *               IntervalCadence: "FOLLOW_IFRAME" || "FOLLOW_CUSTOM",
 *               ThumbnailHeight: Number("int"),
 *               ThumbnailInterval: Number("double"),
 *               ThumbnailWidth: Number("int"),
 *               TileHeight: Number("int"),
 *               TileWidth: Number("int"),
 *             },
 *             ManifestCompression: "GZIP" || "NONE",
 *             ManifestDurationFormat: "FLOATING_POINT" || "INTEGER",
 *             MinBufferTime: Number("int"),
 *             MinFinalSegmentLength: Number("double"),
 *             MpdManifestBandwidthType: "AVERAGE" || "MAX",
 *             MpdProfile: "MAIN_PROFILE" || "ON_DEMAND_PROFILE",
 *             PtsOffsetHandlingForBFrames: "ZERO_BASED" || "MATCH_INITIAL_PTS",
 *             SegmentControl: "SINGLE_FILE" || "SEGMENTED_FILES",
 *             SegmentLength: Number("int"),
 *             SegmentLengthControl: "EXACT" || "GOP_MULTIPLE",
 *             StreamInfResolution: "INCLUDE" || "EXCLUDE",
 *             TargetDurationCompatibilityMode: "LEGACY" || "SPEC_COMPLIANT",
 *             VideoCompositionOffsets: "SIGNED" || "UNSIGNED",
 *             WriteDashManifest: "DISABLED" || "ENABLED",
 *             WriteHlsManifest: "DISABLED" || "ENABLED",
 *             WriteSegmentTimelineInRepresentation: "ENABLED" || "DISABLED",
 *           },
 *           DashIsoGroupSettings: { // DashIsoGroupSettings
 *             AdditionalManifests: [ // __listOfDashAdditionalManifest
 *               { // DashAdditionalManifest
 *                 ManifestNameModifier: "STRING_VALUE",
 *                 SelectedOutputs: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             AudioChannelConfigSchemeIdUri: "MPEG_CHANNEL_CONFIGURATION" || "DOLBY_CHANNEL_CONFIGURATION",
 *             BaseUrl: "STRING_VALUE",
 *             DashManifestStyle: "BASIC" || "COMPACT" || "DISTINCT",
 *             Destination: "STRING_VALUE",
 *             DestinationSettings: {
 *               S3Settings: {
 *                 AccessControl: {
 *                   CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 *                 },
 *                 Encryption: {
 *                   EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 *                   KmsEncryptionContext: "STRING_VALUE",
 *                   KmsKeyArn: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *             Encryption: { // DashIsoEncryptionSettings
 *               PlaybackDeviceCompatibility: "CENC_V1" || "UNENCRYPTED_SEI",
 *               SpekeKeyProvider: { // SpekeKeyProvider
 *                 CertificateArn: "STRING_VALUE",
 *                 ResourceId: "STRING_VALUE",
 *                 SystemIds: [ // __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12
 *                   "STRING_VALUE",
 *                 ],
 *                 Url: "STRING_VALUE",
 *               },
 *             },
 *             FragmentLength: Number("int"),
 *             HbbtvCompliance: "HBBTV_1_5" || "NONE",
 *             ImageBasedTrickPlay: "NONE" || "THUMBNAIL" || "THUMBNAIL_AND_FULLFRAME" || "ADVANCED",
 *             ImageBasedTrickPlaySettings: { // DashIsoImageBasedTrickPlaySettings
 *               IntervalCadence: "FOLLOW_IFRAME" || "FOLLOW_CUSTOM",
 *               ThumbnailHeight: Number("int"),
 *               ThumbnailInterval: Number("double"),
 *               ThumbnailWidth: Number("int"),
 *               TileHeight: Number("int"),
 *               TileWidth: Number("int"),
 *             },
 *             MinBufferTime: Number("int"),
 *             MinFinalSegmentLength: Number("double"),
 *             MpdManifestBandwidthType: "AVERAGE" || "MAX",
 *             MpdProfile: "MAIN_PROFILE" || "ON_DEMAND_PROFILE",
 *             PtsOffsetHandlingForBFrames: "ZERO_BASED" || "MATCH_INITIAL_PTS",
 *             SegmentControl: "SINGLE_FILE" || "SEGMENTED_FILES",
 *             SegmentLength: Number("int"),
 *             SegmentLengthControl: "EXACT" || "GOP_MULTIPLE",
 *             VideoCompositionOffsets: "SIGNED" || "UNSIGNED",
 *             WriteSegmentTimelineInRepresentation: "ENABLED" || "DISABLED",
 *           },
 *           FileGroupSettings: { // FileGroupSettings
 *             Destination: "STRING_VALUE",
 *             DestinationSettings: {
 *               S3Settings: {
 *                 AccessControl: {
 *                   CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 *                 },
 *                 Encryption: {
 *                   EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 *                   KmsEncryptionContext: "STRING_VALUE",
 *                   KmsKeyArn: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *           },
 *           HlsGroupSettings: { // HlsGroupSettings
 *             AdMarkers: [ // __listOfHlsAdMarkers
 *               "ELEMENTAL" || "ELEMENTAL_SCTE35",
 *             ],
 *             AdditionalManifests: [ // __listOfHlsAdditionalManifest
 *               { // HlsAdditionalManifest
 *                 ManifestNameModifier: "STRING_VALUE",
 *                 SelectedOutputs: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             AudioOnlyHeader: "INCLUDE" || "EXCLUDE",
 *             BaseUrl: "STRING_VALUE",
 *             CaptionLanguageMappings: [ // __listOfHlsCaptionLanguageMapping
 *               { // HlsCaptionLanguageMapping
 *                 CaptionChannel: Number("int"),
 *                 CustomLanguageCode: "STRING_VALUE",
 *                 LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 *                 LanguageDescription: "STRING_VALUE",
 *               },
 *             ],
 *             CaptionLanguageSetting: "INSERT" || "OMIT" || "NONE",
 *             CaptionSegmentLengthControl: "LARGE_SEGMENTS" || "MATCH_VIDEO",
 *             ClientCache: "DISABLED" || "ENABLED",
 *             CodecSpecification: "RFC_6381" || "RFC_4281",
 *             Destination: "STRING_VALUE",
 *             DestinationSettings: {
 *               S3Settings: {
 *                 AccessControl: {
 *                   CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 *                 },
 *                 Encryption: {
 *                   EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 *                   KmsEncryptionContext: "STRING_VALUE",
 *                   KmsKeyArn: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *             DirectoryStructure: "SINGLE_DIRECTORY" || "SUBDIRECTORY_PER_STREAM",
 *             Encryption: { // HlsEncryptionSettings
 *               ConstantInitializationVector: "STRING_VALUE",
 *               EncryptionMethod: "AES128" || "SAMPLE_AES",
 *               InitializationVectorInManifest: "INCLUDE" || "EXCLUDE",
 *               OfflineEncrypted: "ENABLED" || "DISABLED",
 *               SpekeKeyProvider: {
 *                 CertificateArn: "STRING_VALUE",
 *                 ResourceId: "STRING_VALUE",
 *                 SystemIds: [
 *                   "STRING_VALUE",
 *                 ],
 *                 Url: "STRING_VALUE",
 *               },
 *               StaticKeyProvider: {
 *                 KeyFormat: "STRING_VALUE",
 *                 KeyFormatVersions: "STRING_VALUE",
 *                 StaticKeyValue: "STRING_VALUE",
 *                 Url: "STRING_VALUE",
 *               },
 *               Type: "SPEKE" || "STATIC_KEY",
 *             },
 *             ImageBasedTrickPlay: "NONE" || "THUMBNAIL" || "THUMBNAIL_AND_FULLFRAME" || "ADVANCED",
 *             ImageBasedTrickPlaySettings: { // HlsImageBasedTrickPlaySettings
 *               IntervalCadence: "FOLLOW_IFRAME" || "FOLLOW_CUSTOM",
 *               ThumbnailHeight: Number("int"),
 *               ThumbnailInterval: Number("double"),
 *               ThumbnailWidth: Number("int"),
 *               TileHeight: Number("int"),
 *               TileWidth: Number("int"),
 *             },
 *             ManifestCompression: "GZIP" || "NONE",
 *             ManifestDurationFormat: "FLOATING_POINT" || "INTEGER",
 *             MinFinalSegmentLength: Number("double"),
 *             MinSegmentLength: Number("int"),
 *             OutputSelection: "MANIFESTS_AND_SEGMENTS" || "SEGMENTS_ONLY",
 *             ProgramDateTime: "INCLUDE" || "EXCLUDE",
 *             ProgramDateTimePeriod: Number("int"),
 *             ProgressiveWriteHlsManifest: "ENABLED" || "DISABLED",
 *             SegmentControl: "SINGLE_FILE" || "SEGMENTED_FILES",
 *             SegmentLength: Number("int"),
 *             SegmentLengthControl: "EXACT" || "GOP_MULTIPLE",
 *             SegmentsPerSubdirectory: Number("int"),
 *             StreamInfResolution: "INCLUDE" || "EXCLUDE",
 *             TargetDurationCompatibilityMode: "LEGACY" || "SPEC_COMPLIANT",
 *             TimedMetadataId3Frame: "NONE" || "PRIV" || "TDRL",
 *             TimedMetadataId3Period: Number("int"),
 *             TimestampDeltaMilliseconds: Number("int"),
 *           },
 *           MsSmoothGroupSettings: { // MsSmoothGroupSettings
 *             AdditionalManifests: [ // __listOfMsSmoothAdditionalManifest
 *               { // MsSmoothAdditionalManifest
 *                 ManifestNameModifier: "STRING_VALUE",
 *                 SelectedOutputs: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             AudioDeduplication: "COMBINE_DUPLICATE_STREAMS" || "NONE",
 *             Destination: "STRING_VALUE",
 *             DestinationSettings: {
 *               S3Settings: {
 *                 AccessControl: {
 *                   CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 *                 },
 *                 Encryption: {
 *                   EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 *                   KmsEncryptionContext: "STRING_VALUE",
 *                   KmsKeyArn: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *             Encryption: { // MsSmoothEncryptionSettings
 *               SpekeKeyProvider: {
 *                 CertificateArn: "STRING_VALUE",
 *                 ResourceId: "STRING_VALUE",
 *                 SystemIds: [
 *                   "STRING_VALUE",
 *                 ],
 *                 Url: "STRING_VALUE",
 *               },
 *             },
 *             FragmentLength: Number("int"),
 *             FragmentLengthControl: "EXACT" || "GOP_MULTIPLE",
 *             ManifestEncoding: "UTF8" || "UTF16",
 *           },
 *           Type: "HLS_GROUP_SETTINGS" || "DASH_ISO_GROUP_SETTINGS" || "FILE_GROUP_SETTINGS" || "MS_SMOOTH_GROUP_SETTINGS" || "CMAF_GROUP_SETTINGS",
 *         },
 *         Outputs: [ // __listOfOutput
 *           { // Output
 *             AudioDescriptions: [ // __listOfAudioDescription
 *               { // AudioDescription
 *                 AudioChannelTaggingSettings: { // AudioChannelTaggingSettings
 *                   ChannelTag: "L" || "R" || "C" || "LFE" || "LS" || "RS" || "LC" || "RC" || "CS" || "LSD" || "RSD" || "TCS" || "VHL" || "VHC" || "VHR",
 *                 },
 *                 AudioNormalizationSettings: { // AudioNormalizationSettings
 *                   Algorithm: "ITU_BS_1770_1" || "ITU_BS_1770_2" || "ITU_BS_1770_3" || "ITU_BS_1770_4",
 *                   AlgorithmControl: "CORRECT_AUDIO" || "MEASURE_ONLY",
 *                   CorrectionGateLevel: Number("int"),
 *                   LoudnessLogging: "LOG" || "DONT_LOG",
 *                   PeakCalculation: "TRUE_PEAK" || "NONE",
 *                   TargetLkfs: Number("double"),
 *                   TruePeakLimiterThreshold: Number("double"),
 *                 },
 *                 AudioSourceName: "STRING_VALUE",
 *                 AudioType: Number("int"),
 *                 AudioTypeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 *                 CodecSettings: { // AudioCodecSettings
 *                   AacSettings: { // AacSettings
 *                     AudioDescriptionBroadcasterMix: "BROADCASTER_MIXED_AD" || "NORMAL",
 *                     Bitrate: Number("int"),
 *                     CodecProfile: "LC" || "HEV1" || "HEV2",
 *                     CodingMode: "AD_RECEIVER_MIX" || "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_5_1",
 *                     RateControlMode: "CBR" || "VBR",
 *                     RawFormat: "LATM_LOAS" || "NONE",
 *                     SampleRate: Number("int"),
 *                     Specification: "MPEG2" || "MPEG4",
 *                     VbrQuality: "LOW" || "MEDIUM_LOW" || "MEDIUM_HIGH" || "HIGH",
 *                   },
 *                   Ac3Settings: { // Ac3Settings
 *                     Bitrate: Number("int"),
 *                     BitstreamMode: "COMPLETE_MAIN" || "COMMENTARY" || "DIALOGUE" || "EMERGENCY" || "HEARING_IMPAIRED" || "MUSIC_AND_EFFECTS" || "VISUALLY_IMPAIRED" || "VOICE_OVER",
 *                     CodingMode: "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_3_2_LFE",
 *                     Dialnorm: Number("int"),
 *                     DynamicRangeCompressionLine: "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH" || "NONE",
 *                     DynamicRangeCompressionProfile: "FILM_STANDARD" || "NONE",
 *                     DynamicRangeCompressionRf: "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH" || "NONE",
 *                     LfeFilter: "ENABLED" || "DISABLED",
 *                     MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 *                     SampleRate: Number("int"),
 *                   },
 *                   AiffSettings: { // AiffSettings
 *                     BitDepth: Number("int"),
 *                     Channels: Number("int"),
 *                     SampleRate: Number("int"),
 *                   },
 *                   Codec: "AAC" || "MP2" || "MP3" || "WAV" || "AIFF" || "AC3" || "EAC3" || "EAC3_ATMOS" || "VORBIS" || "OPUS" || "PASSTHROUGH",
 *                   Eac3AtmosSettings: { // Eac3AtmosSettings
 *                     Bitrate: Number("int"),
 *                     BitstreamMode: "COMPLETE_MAIN",
 *                     CodingMode: "CODING_MODE_AUTO" || "CODING_MODE_5_1_4" || "CODING_MODE_7_1_4" || "CODING_MODE_9_1_6",
 *                     DialogueIntelligence: "ENABLED" || "DISABLED",
 *                     DownmixControl: "SPECIFIED" || "INITIALIZE_FROM_SOURCE",
 *                     DynamicRangeCompressionLine: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 *                     DynamicRangeCompressionRf: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 *                     DynamicRangeControl: "SPECIFIED" || "INITIALIZE_FROM_SOURCE",
 *                     LoRoCenterMixLevel: Number("double"),
 *                     LoRoSurroundMixLevel: Number("double"),
 *                     LtRtCenterMixLevel: Number("double"),
 *                     LtRtSurroundMixLevel: Number("double"),
 *                     MeteringMode: "LEQ_A" || "ITU_BS_1770_1" || "ITU_BS_1770_2" || "ITU_BS_1770_3" || "ITU_BS_1770_4",
 *                     SampleRate: Number("int"),
 *                     SpeechThreshold: Number("int"),
 *                     StereoDownmix: "NOT_INDICATED" || "STEREO" || "SURROUND" || "DPL2",
 *                     SurroundExMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 *                   },
 *                   Eac3Settings: { // Eac3Settings
 *                     AttenuationControl: "ATTENUATE_3_DB" || "NONE",
 *                     Bitrate: Number("int"),
 *                     BitstreamMode: "COMPLETE_MAIN" || "COMMENTARY" || "EMERGENCY" || "HEARING_IMPAIRED" || "VISUALLY_IMPAIRED",
 *                     CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0" || "CODING_MODE_3_2",
 *                     DcFilter: "ENABLED" || "DISABLED",
 *                     Dialnorm: Number("int"),
 *                     DynamicRangeCompressionLine: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 *                     DynamicRangeCompressionRf: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 *                     LfeControl: "LFE" || "NO_LFE",
 *                     LfeFilter: "ENABLED" || "DISABLED",
 *                     LoRoCenterMixLevel: Number("double"),
 *                     LoRoSurroundMixLevel: Number("double"),
 *                     LtRtCenterMixLevel: Number("double"),
 *                     LtRtSurroundMixLevel: Number("double"),
 *                     MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 *                     PassthroughControl: "WHEN_POSSIBLE" || "NO_PASSTHROUGH",
 *                     PhaseControl: "SHIFT_90_DEGREES" || "NO_SHIFT",
 *                     SampleRate: Number("int"),
 *                     StereoDownmix: "NOT_INDICATED" || "LO_RO" || "LT_RT" || "DPL2",
 *                     SurroundExMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 *                     SurroundMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 *                   },
 *                   Mp2Settings: { // Mp2Settings
 *                     Bitrate: Number("int"),
 *                     Channels: Number("int"),
 *                     SampleRate: Number("int"),
 *                   },
 *                   Mp3Settings: { // Mp3Settings
 *                     Bitrate: Number("int"),
 *                     Channels: Number("int"),
 *                     RateControlMode: "CBR" || "VBR",
 *                     SampleRate: Number("int"),
 *                     VbrQuality: Number("int"),
 *                   },
 *                   OpusSettings: { // OpusSettings
 *                     Bitrate: Number("int"),
 *                     Channels: Number("int"),
 *                     SampleRate: Number("int"),
 *                   },
 *                   VorbisSettings: { // VorbisSettings
 *                     Channels: Number("int"),
 *                     SampleRate: Number("int"),
 *                     VbrQuality: Number("int"),
 *                   },
 *                   WavSettings: { // WavSettings
 *                     BitDepth: Number("int"),
 *                     Channels: Number("int"),
 *                     Format: "RIFF" || "RF64",
 *                     SampleRate: Number("int"),
 *                   },
 *                 },
 *                 CustomLanguageCode: "STRING_VALUE",
 *                 LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 *                 LanguageCodeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 *                 RemixSettings: {
 *                   ChannelMapping: {
 *                     OutputChannels: [
 *                       {
 *                         InputChannels: [
 *                           Number("int"),
 *                         ],
 *                         InputChannelsFineTune: [
 *                           Number("double"),
 *                         ],
 *                       },
 *                     ],
 *                   },
 *                   ChannelsIn: Number("int"),
 *                   ChannelsOut: Number("int"),
 *                 },
 *                 StreamName: "STRING_VALUE",
 *               },
 *             ],
 *             CaptionDescriptions: [ // __listOfCaptionDescription
 *               { // CaptionDescription
 *                 CaptionSelectorName: "STRING_VALUE",
 *                 CustomLanguageCode: "STRING_VALUE",
 *                 DestinationSettings: { // CaptionDestinationSettings
 *                   BurninDestinationSettings: { // BurninDestinationSettings
 *                     Alignment: "CENTERED" || "LEFT" || "AUTO",
 *                     ApplyFontColor: "WHITE_TEXT_ONLY" || "ALL_TEXT",
 *                     BackgroundColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 *                     BackgroundOpacity: Number("int"),
 *                     FallbackFont: "BEST_MATCH" || "MONOSPACED_SANSSERIF" || "MONOSPACED_SERIF" || "PROPORTIONAL_SANSSERIF" || "PROPORTIONAL_SERIF",
 *                     FontColor: "WHITE" || "BLACK" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "HEX" || "AUTO",
 *                     FontOpacity: Number("int"),
 *                     FontResolution: Number("int"),
 *                     FontScript: "AUTOMATIC" || "HANS" || "HANT",
 *                     FontSize: Number("int"),
 *                     HexFontColor: "STRING_VALUE",
 *                     OutlineColor: "BLACK" || "WHITE" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "AUTO",
 *                     OutlineSize: Number("int"),
 *                     ShadowColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 *                     ShadowOpacity: Number("int"),
 *                     ShadowXOffset: Number("int"),
 *                     ShadowYOffset: Number("int"),
 *                     StylePassthrough: "ENABLED" || "DISABLED",
 *                     TeletextSpacing: "FIXED_GRID" || "PROPORTIONAL" || "AUTO",
 *                     XPosition: Number("int"),
 *                     YPosition: Number("int"),
 *                   },
 *                   DestinationType: "BURN_IN" || "DVB_SUB" || "EMBEDDED" || "EMBEDDED_PLUS_SCTE20" || "IMSC" || "SCTE20_PLUS_EMBEDDED" || "SCC" || "SRT" || "SMI" || "TELETEXT" || "TTML" || "WEBVTT",
 *                   DvbSubDestinationSettings: { // DvbSubDestinationSettings
 *                     Alignment: "CENTERED" || "LEFT" || "AUTO",
 *                     ApplyFontColor: "WHITE_TEXT_ONLY" || "ALL_TEXT",
 *                     BackgroundColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 *                     BackgroundOpacity: Number("int"),
 *                     DdsHandling: "NONE" || "SPECIFIED" || "NO_DISPLAY_WINDOW",
 *                     DdsXCoordinate: Number("int"),
 *                     DdsYCoordinate: Number("int"),
 *                     FallbackFont: "BEST_MATCH" || "MONOSPACED_SANSSERIF" || "MONOSPACED_SERIF" || "PROPORTIONAL_SANSSERIF" || "PROPORTIONAL_SERIF",
 *                     FontColor: "WHITE" || "BLACK" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "HEX" || "AUTO",
 *                     FontOpacity: Number("int"),
 *                     FontResolution: Number("int"),
 *                     FontScript: "AUTOMATIC" || "HANS" || "HANT",
 *                     FontSize: Number("int"),
 *                     Height: Number("int"),
 *                     HexFontColor: "STRING_VALUE",
 *                     OutlineColor: "BLACK" || "WHITE" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "AUTO",
 *                     OutlineSize: Number("int"),
 *                     ShadowColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 *                     ShadowOpacity: Number("int"),
 *                     ShadowXOffset: Number("int"),
 *                     ShadowYOffset: Number("int"),
 *                     StylePassthrough: "ENABLED" || "DISABLED",
 *                     SubtitlingType: "HEARING_IMPAIRED" || "STANDARD",
 *                     TeletextSpacing: "FIXED_GRID" || "PROPORTIONAL" || "AUTO",
 *                     Width: Number("int"),
 *                     XPosition: Number("int"),
 *                     YPosition: Number("int"),
 *                   },
 *                   EmbeddedDestinationSettings: { // EmbeddedDestinationSettings
 *                     Destination608ChannelNumber: Number("int"),
 *                     Destination708ServiceNumber: Number("int"),
 *                   },
 *                   ImscDestinationSettings: { // ImscDestinationSettings
 *                     Accessibility: "DISABLED" || "ENABLED",
 *                     StylePassthrough: "ENABLED" || "DISABLED",
 *                   },
 *                   SccDestinationSettings: { // SccDestinationSettings
 *                     Framerate: "FRAMERATE_23_97" || "FRAMERATE_24" || "FRAMERATE_25" || "FRAMERATE_29_97_DROPFRAME" || "FRAMERATE_29_97_NON_DROPFRAME",
 *                   },
 *                   SrtDestinationSettings: { // SrtDestinationSettings
 *                     StylePassthrough: "ENABLED" || "DISABLED",
 *                   },
 *                   TeletextDestinationSettings: { // TeletextDestinationSettings
 *                     PageNumber: "STRING_VALUE",
 *                     PageTypes: [ // __listOfTeletextPageType
 *                       "PAGE_TYPE_INITIAL" || "PAGE_TYPE_SUBTITLE" || "PAGE_TYPE_ADDL_INFO" || "PAGE_TYPE_PROGRAM_SCHEDULE" || "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE",
 *                     ],
 *                   },
 *                   TtmlDestinationSettings: { // TtmlDestinationSettings
 *                     StylePassthrough: "ENABLED" || "DISABLED",
 *                   },
 *                   WebvttDestinationSettings: { // WebvttDestinationSettings
 *                     Accessibility: "DISABLED" || "ENABLED",
 *                     StylePassthrough: "ENABLED" || "DISABLED" || "STRICT",
 *                   },
 *                 },
 *                 LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 *                 LanguageDescription: "STRING_VALUE",
 *               },
 *             ],
 *             ContainerSettings: { // ContainerSettings
 *               CmfcSettings: { // CmfcSettings
 *                 AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 *                 AudioGroupId: "STRING_VALUE",
 *                 AudioRenditionSets: "STRING_VALUE",
 *                 AudioTrackType: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT" || "ALTERNATE_AUDIO_AUTO_SELECT" || "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
 *                 DescriptiveVideoServiceFlag: "DONT_FLAG" || "FLAG",
 *                 IFrameOnlyManifest: "INCLUDE" || "EXCLUDE",
 *                 KlvMetadata: "PASSTHROUGH" || "NONE",
 *                 ManifestMetadataSignaling: "ENABLED" || "DISABLED",
 *                 Scte35Esam: "INSERT" || "NONE",
 *                 Scte35Source: "PASSTHROUGH" || "NONE",
 *                 TimedMetadata: "PASSTHROUGH" || "NONE",
 *                 TimedMetadataBoxVersion: "VERSION_0" || "VERSION_1",
 *                 TimedMetadataSchemeIdUri: "STRING_VALUE",
 *                 TimedMetadataValue: "STRING_VALUE",
 *               },
 *               Container: "F4V" || "ISMV" || "M2TS" || "M3U8" || "CMFC" || "MOV" || "MP4" || "MPD" || "MXF" || "WEBM" || "RAW",
 *               F4vSettings: { // F4vSettings
 *                 MoovPlacement: "PROGRESSIVE_DOWNLOAD" || "NORMAL",
 *               },
 *               M2tsSettings: { // M2tsSettings
 *                 AudioBufferModel: "DVB" || "ATSC",
 *                 AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 *                 AudioFramesPerPes: Number("int"),
 *                 AudioPids: [ // __listOf__integerMin32Max8182
 *                   Number("int"),
 *                 ],
 *                 Bitrate: Number("int"),
 *                 BufferModel: "MULTIPLEX" || "NONE",
 *                 DataPTSControl: "AUTO" || "ALIGN_TO_VIDEO",
 *                 DvbNitSettings: { // DvbNitSettings
 *                   NetworkId: Number("int"),
 *                   NetworkName: "STRING_VALUE",
 *                   NitInterval: Number("int"),
 *                 },
 *                 DvbSdtSettings: { // DvbSdtSettings
 *                   OutputSdt: "SDT_FOLLOW" || "SDT_FOLLOW_IF_PRESENT" || "SDT_MANUAL" || "SDT_NONE",
 *                   SdtInterval: Number("int"),
 *                   ServiceName: "STRING_VALUE",
 *                   ServiceProviderName: "STRING_VALUE",
 *                 },
 *                 DvbSubPids: [
 *                   Number("int"),
 *                 ],
 *                 DvbTdtSettings: { // DvbTdtSettings
 *                   TdtInterval: Number("int"),
 *                 },
 *                 DvbTeletextPid: Number("int"),
 *                 EbpAudioInterval: "VIDEO_AND_FIXED_INTERVALS" || "VIDEO_INTERVAL",
 *                 EbpPlacement: "VIDEO_AND_AUDIO_PIDS" || "VIDEO_PID",
 *                 EsRateInPes: "INCLUDE" || "EXCLUDE",
 *                 ForceTsVideoEbpOrder: "FORCE" || "DEFAULT",
 *                 FragmentTime: Number("double"),
 *                 KlvMetadata: "PASSTHROUGH" || "NONE",
 *                 MaxPcrInterval: Number("int"),
 *                 MinEbpInterval: Number("int"),
 *                 NielsenId3: "INSERT" || "NONE",
 *                 NullPacketBitrate: Number("double"),
 *                 PatInterval: Number("int"),
 *                 PcrControl: "PCR_EVERY_PES_PACKET" || "CONFIGURED_PCR_PERIOD",
 *                 PcrPid: Number("int"),
 *                 PmtInterval: Number("int"),
 *                 PmtPid: Number("int"),
 *                 PrivateMetadataPid: Number("int"),
 *                 ProgramNumber: Number("int"),
 *                 RateMode: "VBR" || "CBR",
 *                 Scte35Esam: { // M2tsScte35Esam
 *                   Scte35EsamPid: Number("int"),
 *                 },
 *                 Scte35Pid: Number("int"),
 *                 Scte35Source: "PASSTHROUGH" || "NONE",
 *                 SegmentationMarkers: "NONE" || "RAI_SEGSTART" || "RAI_ADAPT" || "PSI_SEGSTART" || "EBP" || "EBP_LEGACY",
 *                 SegmentationStyle: "MAINTAIN_CADENCE" || "RESET_CADENCE",
 *                 SegmentationTime: Number("double"),
 *                 TimedMetadataPid: Number("int"),
 *                 TransportStreamId: Number("int"),
 *                 VideoPid: Number("int"),
 *               },
 *               M3u8Settings: { // M3u8Settings
 *                 AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 *                 AudioFramesPerPes: Number("int"),
 *                 AudioPids: [
 *                   Number("int"),
 *                 ],
 *                 DataPTSControl: "AUTO" || "ALIGN_TO_VIDEO",
 *                 MaxPcrInterval: Number("int"),
 *                 NielsenId3: "INSERT" || "NONE",
 *                 PatInterval: Number("int"),
 *                 PcrControl: "PCR_EVERY_PES_PACKET" || "CONFIGURED_PCR_PERIOD",
 *                 PcrPid: Number("int"),
 *                 PmtInterval: Number("int"),
 *                 PmtPid: Number("int"),
 *                 PrivateMetadataPid: Number("int"),
 *                 ProgramNumber: Number("int"),
 *                 Scte35Pid: Number("int"),
 *                 Scte35Source: "PASSTHROUGH" || "NONE",
 *                 TimedMetadata: "PASSTHROUGH" || "NONE",
 *                 TimedMetadataPid: Number("int"),
 *                 TransportStreamId: Number("int"),
 *                 VideoPid: Number("int"),
 *               },
 *               MovSettings: { // MovSettings
 *                 ClapAtom: "INCLUDE" || "EXCLUDE",
 *                 CslgAtom: "INCLUDE" || "EXCLUDE",
 *                 Mpeg2FourCCControl: "XDCAM" || "MPEG",
 *                 PaddingControl: "OMNEON" || "NONE",
 *                 Reference: "SELF_CONTAINED" || "EXTERNAL",
 *               },
 *               Mp4Settings: { // Mp4Settings
 *                 AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 *                 CslgAtom: "INCLUDE" || "EXCLUDE",
 *                 CttsVersion: Number("int"),
 *                 FreeSpaceBox: "INCLUDE" || "EXCLUDE",
 *                 MoovPlacement: "PROGRESSIVE_DOWNLOAD" || "NORMAL",
 *                 Mp4MajorBrand: "STRING_VALUE",
 *               },
 *               MpdSettings: { // MpdSettings
 *                 AccessibilityCaptionHints: "INCLUDE" || "EXCLUDE",
 *                 AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 *                 CaptionContainerType: "RAW" || "FRAGMENTED_MP4",
 *                 KlvMetadata: "NONE" || "PASSTHROUGH",
 *                 ManifestMetadataSignaling: "ENABLED" || "DISABLED",
 *                 Scte35Esam: "INSERT" || "NONE",
 *                 Scte35Source: "PASSTHROUGH" || "NONE",
 *                 TimedMetadata: "PASSTHROUGH" || "NONE",
 *                 TimedMetadataBoxVersion: "VERSION_0" || "VERSION_1",
 *                 TimedMetadataSchemeIdUri: "STRING_VALUE",
 *                 TimedMetadataValue: "STRING_VALUE",
 *               },
 *               MxfSettings: { // MxfSettings
 *                 AfdSignaling: "NO_COPY" || "COPY_FROM_VIDEO",
 *                 Profile: "D_10" || "XDCAM" || "OP1A" || "XAVC" || "XDCAM_RDD9",
 *                 XavcProfileSettings: { // MxfXavcProfileSettings
 *                   DurationMode: "ALLOW_ANY_DURATION" || "DROP_FRAMES_FOR_COMPLIANCE",
 *                   MaxAncDataSize: Number("int"),
 *                 },
 *               },
 *             },
 *             Extension: "STRING_VALUE",
 *             NameModifier: "STRING_VALUE",
 *             OutputSettings: { // OutputSettings
 *               HlsSettings: { // HlsSettings
 *                 AudioGroupId: "STRING_VALUE",
 *                 AudioOnlyContainer: "AUTOMATIC" || "M2TS",
 *                 AudioRenditionSets: "STRING_VALUE",
 *                 AudioTrackType: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT" || "ALTERNATE_AUDIO_AUTO_SELECT" || "ALTERNATE_AUDIO_NOT_AUTO_SELECT" || "AUDIO_ONLY_VARIANT_STREAM",
 *                 DescriptiveVideoServiceFlag: "DONT_FLAG" || "FLAG",
 *                 IFrameOnlyManifest: "INCLUDE" || "EXCLUDE",
 *                 SegmentModifier: "STRING_VALUE",
 *               },
 *             },
 *             Preset: "STRING_VALUE",
 *             VideoDescription: { // VideoDescription
 *               AfdSignaling: "NONE" || "AUTO" || "FIXED",
 *               AntiAlias: "DISABLED" || "ENABLED",
 *               CodecSettings: { // VideoCodecSettings
 *                 Av1Settings: { // Av1Settings
 *                   AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 *                   BitDepth: "BIT_8" || "BIT_10",
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   GopSize: Number("double"),
 *                   MaxBitrate: Number("int"),
 *                   NumberBFramesBetweenReferenceFrames: Number("int"),
 *                   QvbrSettings: { // Av1QvbrSettings
 *                     QvbrQualityLevel: Number("int"),
 *                     QvbrQualityLevelFineTune: Number("double"),
 *                   },
 *                   RateControlMode: "QVBR",
 *                   Slices: Number("int"),
 *                   SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                 },
 *                 AvcIntraSettings: { // AvcIntraSettings
 *                   AvcIntraClass: "CLASS_50" || "CLASS_100" || "CLASS_200" || "CLASS_4K_2K",
 *                   AvcIntraUhdSettings: { // AvcIntraUhdSettings
 *                     QualityTuningLevel: "SINGLE_PASS" || "MULTI_PASS",
 *                   },
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 *                   ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 *                   SlowPal: "DISABLED" || "ENABLED",
 *                   Telecine: "NONE" || "HARD",
 *                 },
 *                 Codec: "AV1" || "AVC_INTRA" || "FRAME_CAPTURE" || "H_264" || "H_265" || "MPEG2" || "PASSTHROUGH" || "PRORES" || "VC3" || "VP8" || "VP9" || "XAVC",
 *                 FrameCaptureSettings: { // FrameCaptureSettings
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   MaxCaptures: Number("int"),
 *                   Quality: Number("int"),
 *                 },
 *                 H264Settings: { // H264Settings
 *                   AdaptiveQuantization: "OFF" || "AUTO" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 *                   BandwidthReductionFilter: { // BandwidthReductionFilter
 *                     Sharpening: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 *                     Strength: "LOW" || "MEDIUM" || "HIGH" || "AUTO" || "OFF",
 *                   },
 *                   Bitrate: Number("int"),
 *                   CodecLevel: "AUTO" || "LEVEL_1" || "LEVEL_1_1" || "LEVEL_1_2" || "LEVEL_1_3" || "LEVEL_2" || "LEVEL_2_1" || "LEVEL_2_2" || "LEVEL_3" || "LEVEL_3_1" || "LEVEL_3_2" || "LEVEL_4" || "LEVEL_4_1" || "LEVEL_4_2" || "LEVEL_5" || "LEVEL_5_1" || "LEVEL_5_2",
 *                   CodecProfile: "BASELINE" || "HIGH" || "HIGH_10BIT" || "HIGH_422" || "HIGH_422_10BIT" || "MAIN",
 *                   DynamicSubGop: "ADAPTIVE" || "STATIC",
 *                   EntropyEncoding: "CABAC" || "CAVLC",
 *                   FieldEncoding: "PAFF" || "FORCE_FIELD" || "MBAFF",
 *                   FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   GopBReference: "DISABLED" || "ENABLED",
 *                   GopClosedCadence: Number("int"),
 *                   GopSize: Number("double"),
 *                   GopSizeUnits: "FRAMES" || "SECONDS" || "AUTO",
 *                   HrdBufferFinalFillPercentage: Number("int"),
 *                   HrdBufferInitialFillPercentage: Number("int"),
 *                   HrdBufferSize: Number("int"),
 *                   InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 *                   MaxBitrate: Number("int"),
 *                   MinIInterval: Number("int"),
 *                   NumberBFramesBetweenReferenceFrames: Number("int"),
 *                   NumberReferenceFrames: Number("int"),
 *                   ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   ParDenominator: Number("int"),
 *                   ParNumerator: Number("int"),
 *                   QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 *                   QvbrSettings: { // H264QvbrSettings
 *                     MaxAverageBitrate: Number("int"),
 *                     QvbrQualityLevel: Number("int"),
 *                     QvbrQualityLevelFineTune: Number("double"),
 *                   },
 *                   RateControlMode: "VBR" || "CBR" || "QVBR",
 *                   RepeatPps: "DISABLED" || "ENABLED",
 *                   ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 *                   SceneChangeDetect: "DISABLED" || "ENABLED" || "TRANSITION_DETECTION",
 *                   Slices: Number("int"),
 *                   SlowPal: "DISABLED" || "ENABLED",
 *                   Softness: Number("int"),
 *                   SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   Syntax: "DEFAULT" || "RP2027",
 *                   Telecine: "NONE" || "SOFT" || "HARD",
 *                   TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   UnregisteredSeiTimecode: "DISABLED" || "ENABLED",
 *                 },
 *                 H265Settings: { // H265Settings
 *                   AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX" || "AUTO",
 *                   AlternateTransferFunctionSei: "DISABLED" || "ENABLED",
 *                   BandwidthReductionFilter: {
 *                     Sharpening: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 *                     Strength: "LOW" || "MEDIUM" || "HIGH" || "AUTO" || "OFF",
 *                   },
 *                   Bitrate: Number("int"),
 *                   CodecLevel: "AUTO" || "LEVEL_1" || "LEVEL_2" || "LEVEL_2_1" || "LEVEL_3" || "LEVEL_3_1" || "LEVEL_4" || "LEVEL_4_1" || "LEVEL_5" || "LEVEL_5_1" || "LEVEL_5_2" || "LEVEL_6" || "LEVEL_6_1" || "LEVEL_6_2",
 *                   CodecProfile: "MAIN_MAIN" || "MAIN_HIGH" || "MAIN10_MAIN" || "MAIN10_HIGH" || "MAIN_422_8BIT_MAIN" || "MAIN_422_8BIT_HIGH" || "MAIN_422_10BIT_MAIN" || "MAIN_422_10BIT_HIGH",
 *                   DynamicSubGop: "ADAPTIVE" || "STATIC",
 *                   FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   GopBReference: "DISABLED" || "ENABLED",
 *                   GopClosedCadence: Number("int"),
 *                   GopSize: Number("double"),
 *                   GopSizeUnits: "FRAMES" || "SECONDS" || "AUTO",
 *                   HrdBufferFinalFillPercentage: Number("int"),
 *                   HrdBufferInitialFillPercentage: Number("int"),
 *                   HrdBufferSize: Number("int"),
 *                   InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 *                   MaxBitrate: Number("int"),
 *                   MinIInterval: Number("int"),
 *                   NumberBFramesBetweenReferenceFrames: Number("int"),
 *                   NumberReferenceFrames: Number("int"),
 *                   ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   ParDenominator: Number("int"),
 *                   ParNumerator: Number("int"),
 *                   QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 *                   QvbrSettings: { // H265QvbrSettings
 *                     MaxAverageBitrate: Number("int"),
 *                     QvbrQualityLevel: Number("int"),
 *                     QvbrQualityLevelFineTune: Number("double"),
 *                   },
 *                   RateControlMode: "VBR" || "CBR" || "QVBR",
 *                   SampleAdaptiveOffsetFilterMode: "DEFAULT" || "ADAPTIVE" || "OFF",
 *                   ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 *                   SceneChangeDetect: "DISABLED" || "ENABLED" || "TRANSITION_DETECTION",
 *                   Slices: Number("int"),
 *                   SlowPal: "DISABLED" || "ENABLED",
 *                   SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   Telecine: "NONE" || "SOFT" || "HARD",
 *                   TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   TemporalIds: "DISABLED" || "ENABLED",
 *                   Tiles: "DISABLED" || "ENABLED",
 *                   UnregisteredSeiTimecode: "DISABLED" || "ENABLED",
 *                   WriteMp4PackagingType: "HVC1" || "HEV1",
 *                 },
 *                 Mpeg2Settings: { // Mpeg2Settings
 *                   AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH",
 *                   Bitrate: Number("int"),
 *                   CodecLevel: "AUTO" || "LOW" || "MAIN" || "HIGH1440" || "HIGH",
 *                   CodecProfile: "MAIN" || "PROFILE_422",
 *                   DynamicSubGop: "ADAPTIVE" || "STATIC",
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   GopClosedCadence: Number("int"),
 *                   GopSize: Number("double"),
 *                   GopSizeUnits: "FRAMES" || "SECONDS",
 *                   HrdBufferFinalFillPercentage: Number("int"),
 *                   HrdBufferInitialFillPercentage: Number("int"),
 *                   HrdBufferSize: Number("int"),
 *                   InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 *                   IntraDcPrecision: "AUTO" || "INTRA_DC_PRECISION_8" || "INTRA_DC_PRECISION_9" || "INTRA_DC_PRECISION_10" || "INTRA_DC_PRECISION_11",
 *                   MaxBitrate: Number("int"),
 *                   MinIInterval: Number("int"),
 *                   NumberBFramesBetweenReferenceFrames: Number("int"),
 *                   ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   ParDenominator: Number("int"),
 *                   ParNumerator: Number("int"),
 *                   QualityTuningLevel: "SINGLE_PASS" || "MULTI_PASS",
 *                   RateControlMode: "VBR" || "CBR",
 *                   ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 *                   SceneChangeDetect: "DISABLED" || "ENABLED",
 *                   SlowPal: "DISABLED" || "ENABLED",
 *                   Softness: Number("int"),
 *                   SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   Syntax: "DEFAULT" || "D_10",
 *                   Telecine: "NONE" || "SOFT" || "HARD",
 *                   TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                 },
 *                 ProresSettings: { // ProresSettings
 *                   ChromaSampling: "PRESERVE_444_SAMPLING" || "SUBSAMPLE_TO_422",
 *                   CodecProfile: "APPLE_PRORES_422" || "APPLE_PRORES_422_HQ" || "APPLE_PRORES_422_LT" || "APPLE_PRORES_422_PROXY" || "APPLE_PRORES_4444" || "APPLE_PRORES_4444_XQ",
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 *                   ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   ParDenominator: Number("int"),
 *                   ParNumerator: Number("int"),
 *                   ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 *                   SlowPal: "DISABLED" || "ENABLED",
 *                   Telecine: "NONE" || "HARD",
 *                 },
 *                 Vc3Settings: { // Vc3Settings
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   InterlaceMode: "INTERLACED" || "PROGRESSIVE",
 *                   ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 *                   SlowPal: "DISABLED" || "ENABLED",
 *                   Telecine: "NONE" || "HARD",
 *                   Vc3Class: "CLASS_145_8BIT" || "CLASS_220_8BIT" || "CLASS_220_10BIT",
 *                 },
 *                 Vp8Settings: { // Vp8Settings
 *                   Bitrate: Number("int"),
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   GopSize: Number("double"),
 *                   HrdBufferSize: Number("int"),
 *                   MaxBitrate: Number("int"),
 *                   ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   ParDenominator: Number("int"),
 *                   ParNumerator: Number("int"),
 *                   QualityTuningLevel: "MULTI_PASS" || "MULTI_PASS_HQ",
 *                   RateControlMode: "VBR",
 *                 },
 *                 Vp9Settings: { // Vp9Settings
 *                   Bitrate: Number("int"),
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   GopSize: Number("double"),
 *                   HrdBufferSize: Number("int"),
 *                   MaxBitrate: Number("int"),
 *                   ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   ParDenominator: Number("int"),
 *                   ParNumerator: Number("int"),
 *                   QualityTuningLevel: "MULTI_PASS" || "MULTI_PASS_HQ",
 *                   RateControlMode: "VBR",
 *                 },
 *                 XavcSettings: { // XavcSettings
 *                   AdaptiveQuantization: "OFF" || "AUTO" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 *                   EntropyEncoding: "AUTO" || "CABAC" || "CAVLC",
 *                   FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *                   FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 *                   FramerateDenominator: Number("int"),
 *                   FramerateNumerator: Number("int"),
 *                   Profile: "XAVC_HD_INTRA_CBG" || "XAVC_4K_INTRA_CBG" || "XAVC_4K_INTRA_VBR" || "XAVC_HD" || "XAVC_4K",
 *                   SlowPal: "DISABLED" || "ENABLED",
 *                   Softness: Number("int"),
 *                   SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                   Xavc4kIntraCbgProfileSettings: { // Xavc4kIntraCbgProfileSettings
 *                     XavcClass: "CLASS_100" || "CLASS_300" || "CLASS_480",
 *                   },
 *                   Xavc4kIntraVbrProfileSettings: { // Xavc4kIntraVbrProfileSettings
 *                     XavcClass: "CLASS_100" || "CLASS_300" || "CLASS_480",
 *                   },
 *                   Xavc4kProfileSettings: { // Xavc4kProfileSettings
 *                     BitrateClass: "BITRATE_CLASS_100" || "BITRATE_CLASS_140" || "BITRATE_CLASS_200",
 *                     CodecProfile: "HIGH" || "HIGH_422",
 *                     FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                     GopBReference: "DISABLED" || "ENABLED",
 *                     GopClosedCadence: Number("int"),
 *                     HrdBufferSize: Number("int"),
 *                     QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 *                     Slices: Number("int"),
 *                   },
 *                   XavcHdIntraCbgProfileSettings: { // XavcHdIntraCbgProfileSettings
 *                     XavcClass: "CLASS_50" || "CLASS_100" || "CLASS_200",
 *                   },
 *                   XavcHdProfileSettings: { // XavcHdProfileSettings
 *                     BitrateClass: "BITRATE_CLASS_25" || "BITRATE_CLASS_35" || "BITRATE_CLASS_50",
 *                     FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 *                     GopBReference: "DISABLED" || "ENABLED",
 *                     GopClosedCadence: Number("int"),
 *                     HrdBufferSize: Number("int"),
 *                     InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 *                     QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 *                     Slices: Number("int"),
 *                     Telecine: "NONE" || "HARD",
 *                   },
 *                 },
 *               },
 *               ColorMetadata: "IGNORE" || "INSERT",
 *               Crop: {
 *                 Height: Number("int"),
 *                 Width: Number("int"),
 *                 X: Number("int"),
 *                 Y: Number("int"),
 *               },
 *               DropFrameTimecode: "DISABLED" || "ENABLED",
 *               FixedAfd: Number("int"),
 *               Height: Number("int"),
 *               Position: {
 *                 Height: Number("int"),
 *                 Width: Number("int"),
 *                 X: Number("int"),
 *                 Y: Number("int"),
 *               },
 *               RespondToAfd: "NONE" || "RESPOND" || "PASSTHROUGH",
 *               ScalingBehavior: "DEFAULT" || "STRETCH_TO_OUTPUT",
 *               Sharpness: Number("int"),
 *               TimecodeInsertion: "DISABLED" || "PIC_TIMING_SEI",
 *               VideoPreprocessors: { // VideoPreprocessor
 *                 ColorCorrector: { // ColorCorrector
 *                   Brightness: Number("int"),
 *                   ClipLimits: { // ClipLimits
 *                     MaximumRGBTolerance: Number("int"),
 *                     MaximumYUV: Number("int"),
 *                     MinimumRGBTolerance: Number("int"),
 *                     MinimumYUV: Number("int"),
 *                   },
 *                   ColorSpaceConversion: "NONE" || "FORCE_601" || "FORCE_709" || "FORCE_HDR10" || "FORCE_HLG_2020" || "FORCE_P3DCI" || "FORCE_P3D65_SDR" || "FORCE_P3D65_HDR",
 *                   Contrast: Number("int"),
 *                   Hdr10Metadata: {
 *                     BluePrimaryX: Number("int"),
 *                     BluePrimaryY: Number("int"),
 *                     GreenPrimaryX: Number("int"),
 *                     GreenPrimaryY: Number("int"),
 *                     MaxContentLightLevel: Number("int"),
 *                     MaxFrameAverageLightLevel: Number("int"),
 *                     MaxLuminance: Number("int"),
 *                     MinLuminance: Number("int"),
 *                     RedPrimaryX: Number("int"),
 *                     RedPrimaryY: Number("int"),
 *                     WhitePointX: Number("int"),
 *                     WhitePointY: Number("int"),
 *                   },
 *                   HdrToSdrToneMapper: "PRESERVE_DETAILS" || "VIBRANT",
 *                   Hue: Number("int"),
 *                   SampleRangeConversion: "LIMITED_RANGE_SQUEEZE" || "NONE" || "LIMITED_RANGE_CLIP",
 *                   Saturation: Number("int"),
 *                   SdrReferenceWhiteLevel: Number("int"),
 *                 },
 *                 Deinterlacer: { // Deinterlacer
 *                   Algorithm: "INTERPOLATE" || "INTERPOLATE_TICKER" || "BLEND" || "BLEND_TICKER" || "LINEAR_INTERPOLATION",
 *                   Control: "FORCE_ALL_FRAMES" || "NORMAL",
 *                   Mode: "DEINTERLACE" || "INVERSE_TELECINE" || "ADAPTIVE",
 *                 },
 *                 DolbyVision: { // DolbyVision
 *                   L6Metadata: { // DolbyVisionLevel6Metadata
 *                     MaxCll: Number("int"),
 *                     MaxFall: Number("int"),
 *                   },
 *                   L6Mode: "PASSTHROUGH" || "RECALCULATE" || "SPECIFY",
 *                   Mapping: "HDR10_NOMAP" || "HDR10_1000",
 *                   Profile: "PROFILE_5" || "PROFILE_8_1",
 *                 },
 *                 Hdr10Plus: { // Hdr10Plus
 *                   MasteringMonitorNits: Number("int"),
 *                   TargetMonitorNits: Number("int"),
 *                 },
 *                 ImageInserter: {
 *                   InsertableImages: [
 *                     {
 *                       Duration: Number("int"),
 *                       FadeIn: Number("int"),
 *                       FadeOut: Number("int"),
 *                       Height: Number("int"),
 *                       ImageInserterInput: "STRING_VALUE",
 *                       ImageX: Number("int"),
 *                       ImageY: Number("int"),
 *                       Layer: Number("int"),
 *                       Opacity: Number("int"),
 *                       StartTime: "STRING_VALUE",
 *                       Width: Number("int"),
 *                     },
 *                   ],
 *                   SdrReferenceWhiteLevel: Number("int"),
 *                 },
 *                 NoiseReducer: { // NoiseReducer
 *                   Filter: "BILATERAL" || "MEAN" || "GAUSSIAN" || "LANCZOS" || "SHARPEN" || "CONSERVE" || "SPATIAL" || "TEMPORAL",
 *                   FilterSettings: { // NoiseReducerFilterSettings
 *                     Strength: Number("int"),
 *                   },
 *                   SpatialFilterSettings: { // NoiseReducerSpatialFilterSettings
 *                     PostFilterSharpenStrength: Number("int"),
 *                     Speed: Number("int"),
 *                     Strength: Number("int"),
 *                   },
 *                   TemporalFilterSettings: { // NoiseReducerTemporalFilterSettings
 *                     AggressiveMode: Number("int"),
 *                     PostTemporalSharpening: "DISABLED" || "ENABLED" || "AUTO",
 *                     PostTemporalSharpeningStrength: "LOW" || "MEDIUM" || "HIGH",
 *                     Speed: Number("int"),
 *                     Strength: Number("int"),
 *                   },
 *                 },
 *                 PartnerWatermarking: { // PartnerWatermarking
 *                   NexguardFileMarkerSettings: { // NexGuardFileMarkerSettings
 *                     License: "STRING_VALUE",
 *                     Payload: Number("int"),
 *                     Preset: "STRING_VALUE",
 *                     Strength: "LIGHTEST" || "LIGHTER" || "DEFAULT" || "STRONGER" || "STRONGEST",
 *                   },
 *                 },
 *                 TimecodeBurnin: { // TimecodeBurnin
 *                   FontSize: Number("int"),
 *                   Position: "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT" || "MIDDLE_LEFT" || "MIDDLE_CENTER" || "MIDDLE_RIGHT" || "BOTTOM_LEFT" || "BOTTOM_CENTER" || "BOTTOM_RIGHT",
 *                   Prefix: "STRING_VALUE",
 *                 },
 *               },
 *               Width: Number("int"),
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *     TimecodeConfig: { // TimecodeConfig
 *       Anchor: "STRING_VALUE",
 *       Source: "EMBEDDED" || "ZEROBASED" || "SPECIFIEDSTART",
 *       Start: "STRING_VALUE",
 *       TimestampOffset: "STRING_VALUE",
 *     },
 *     TimedMetadataInsertion: { // TimedMetadataInsertion
 *       Id3Insertions: [ // __listOfId3Insertion
 *         { // Id3Insertion
 *           Id3: "STRING_VALUE",
 *           Timecode: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   SimulateReservedQueue: "DISABLED" || "ENABLED",
 *   StatusUpdateInterval: "SECONDS_10" || "SECONDS_12" || "SECONDS_15" || "SECONDS_20" || "SECONDS_30" || "SECONDS_60" || "SECONDS_120" || "SECONDS_180" || "SECONDS_240" || "SECONDS_300" || "SECONDS_360" || "SECONDS_420" || "SECONDS_480" || "SECONDS_540" || "SECONDS_600",
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 *   UserMetadata: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResponse
 * //   Job: { // Job
 * //     AccelerationSettings: { // AccelerationSettings
 * //       Mode: "DISABLED" || "ENABLED" || "PREFERRED", // required
 * //     },
 * //     AccelerationStatus: "NOT_APPLICABLE" || "IN_PROGRESS" || "ACCELERATED" || "NOT_ACCELERATED",
 * //     Arn: "STRING_VALUE",
 * //     BillingTagsSource: "QUEUE" || "PRESET" || "JOB_TEMPLATE" || "JOB",
 * //     ClientRequestToken: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     CurrentPhase: "PROBING" || "TRANSCODING" || "UPLOADING",
 * //     ErrorCode: Number("int"),
 * //     ErrorMessage: "STRING_VALUE",
 * //     HopDestinations: [ // __listOfHopDestination
 * //       { // HopDestination
 * //         Priority: Number("int"),
 * //         Queue: "STRING_VALUE",
 * //         WaitMinutes: Number("int"),
 * //       },
 * //     ],
 * //     Id: "STRING_VALUE",
 * //     JobPercentComplete: Number("int"),
 * //     JobTemplate: "STRING_VALUE",
 * //     Messages: { // JobMessages
 * //       Info: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Warning: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     OutputGroupDetails: [ // __listOfOutputGroupDetail
 * //       { // OutputGroupDetail
 * //         OutputDetails: [ // __listOfOutputDetail
 * //           { // OutputDetail
 * //             DurationInMs: Number("int"),
 * //             VideoDetails: { // VideoDetail
 * //               HeightInPx: Number("int"),
 * //               WidthInPx: Number("int"),
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Priority: Number("int"),
 * //     Queue: "STRING_VALUE",
 * //     QueueTransitions: [ // __listOfQueueTransition
 * //       { // QueueTransition
 * //         DestinationQueue: "STRING_VALUE",
 * //         SourceQueue: "STRING_VALUE",
 * //         Timestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     RetryCount: Number("int"),
 * //     Role: "STRING_VALUE", // required
 * //     Settings: { // JobSettings
 * //       AdAvailOffset: Number("int"),
 * //       AvailBlanking: { // AvailBlanking
 * //         AvailBlankingImage: "STRING_VALUE",
 * //       },
 * //       Esam: { // EsamSettings
 * //         ManifestConfirmConditionNotification: { // EsamManifestConfirmConditionNotification
 * //           MccXml: "STRING_VALUE",
 * //         },
 * //         ResponseSignalPreroll: Number("int"),
 * //         SignalProcessingNotification: { // EsamSignalProcessingNotification
 * //           SccXml: "STRING_VALUE",
 * //         },
 * //       },
 * //       ExtendedDataServices: { // ExtendedDataServices
 * //         CopyProtectionAction: "PASSTHROUGH" || "STRIP",
 * //         VchipAction: "PASSTHROUGH" || "STRIP",
 * //       },
 * //       Inputs: [ // __listOfInput
 * //         { // Input
 * //           AdvancedInputFilter: "ENABLED" || "DISABLED",
 * //           AdvancedInputFilterSettings: { // AdvancedInputFilterSettings
 * //             AddTexture: "ENABLED" || "DISABLED",
 * //             Sharpening: "OFF" || "LOW" || "HIGH",
 * //           },
 * //           AudioSelectorGroups: { // __mapOfAudioSelectorGroup
 * //             "<keys>": { // AudioSelectorGroup
 * //               AudioSelectorNames: [ // __listOf__stringMin1
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           AudioSelectors: { // __mapOfAudioSelector
 * //             "<keys>": { // AudioSelector
 * //               AudioDurationCorrection: "DISABLED" || "AUTO" || "TRACK" || "FRAME",
 * //               CustomLanguageCode: "STRING_VALUE",
 * //               DefaultSelection: "DEFAULT" || "NOT_DEFAULT",
 * //               ExternalAudioFileInput: "STRING_VALUE",
 * //               HlsRenditionGroupSettings: { // HlsRenditionGroupSettings
 * //                 RenditionGroupId: "STRING_VALUE",
 * //                 RenditionLanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //                 RenditionName: "STRING_VALUE",
 * //               },
 * //               LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //               Offset: Number("int"),
 * //               Pids: [ // __listOf__integerMin1Max2147483647
 * //                 Number("int"),
 * //               ],
 * //               ProgramSelection: Number("int"),
 * //               RemixSettings: { // RemixSettings
 * //                 ChannelMapping: { // ChannelMapping
 * //                   OutputChannels: [ // __listOfOutputChannelMapping
 * //                     { // OutputChannelMapping
 * //                       InputChannels: [ // __listOf__integerMinNegative60Max6
 * //                         Number("int"),
 * //                       ],
 * //                       InputChannelsFineTune: [ // __listOf__doubleMinNegative60Max6
 * //                         Number("double"),
 * //                       ],
 * //                     },
 * //                   ],
 * //                 },
 * //                 ChannelsIn: Number("int"),
 * //                 ChannelsOut: Number("int"),
 * //               },
 * //               SelectorType: "PID" || "TRACK" || "LANGUAGE_CODE" || "HLS_RENDITION_GROUP",
 * //               Tracks: [
 * //                 Number("int"),
 * //               ],
 * //             },
 * //           },
 * //           CaptionSelectors: { // __mapOfCaptionSelector
 * //             "<keys>": { // CaptionSelector
 * //               CustomLanguageCode: "STRING_VALUE",
 * //               LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //               SourceSettings: { // CaptionSourceSettings
 * //                 AncillarySourceSettings: { // AncillarySourceSettings
 * //                   Convert608To708: "UPCONVERT" || "DISABLED",
 * //                   SourceAncillaryChannelNumber: Number("int"),
 * //                   TerminateCaptions: "END_OF_INPUT" || "DISABLED",
 * //                 },
 * //                 DvbSubSourceSettings: { // DvbSubSourceSettings
 * //                   Pid: Number("int"),
 * //                 },
 * //                 EmbeddedSourceSettings: { // EmbeddedSourceSettings
 * //                   Convert608To708: "UPCONVERT" || "DISABLED",
 * //                   Source608ChannelNumber: Number("int"),
 * //                   Source608TrackNumber: Number("int"),
 * //                   TerminateCaptions: "END_OF_INPUT" || "DISABLED",
 * //                 },
 * //                 FileSourceSettings: { // FileSourceSettings
 * //                   Convert608To708: "UPCONVERT" || "DISABLED",
 * //                   ConvertPaintToPop: "ENABLED" || "DISABLED",
 * //                   Framerate: { // CaptionSourceFramerate
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                   },
 * //                   SourceFile: "STRING_VALUE",
 * //                   TimeDelta: Number("int"),
 * //                   TimeDeltaUnits: "SECONDS" || "MILLISECONDS",
 * //                 },
 * //                 SourceType: "ANCILLARY" || "DVB_SUB" || "EMBEDDED" || "SCTE20" || "SCC" || "TTML" || "STL" || "SRT" || "SMI" || "SMPTE_TT" || "TELETEXT" || "NULL_SOURCE" || "IMSC" || "WEBVTT",
 * //                 TeletextSourceSettings: { // TeletextSourceSettings
 * //                   PageNumber: "STRING_VALUE",
 * //                 },
 * //                 TrackSourceSettings: { // TrackSourceSettings
 * //                   TrackNumber: Number("int"),
 * //                 },
 * //                 WebvttHlsSourceSettings: { // WebvttHlsSourceSettings
 * //                   RenditionGroupId: "STRING_VALUE",
 * //                   RenditionLanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //                   RenditionName: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           Crop: { // Rectangle
 * //             Height: Number("int"),
 * //             Width: Number("int"),
 * //             X: Number("int"),
 * //             Y: Number("int"),
 * //           },
 * //           DeblockFilter: "ENABLED" || "DISABLED",
 * //           DecryptionSettings: { // InputDecryptionSettings
 * //             DecryptionMode: "AES_CTR" || "AES_CBC" || "AES_GCM",
 * //             EncryptedDecryptionKey: "STRING_VALUE",
 * //             InitializationVector: "STRING_VALUE",
 * //             KmsKeyRegion: "STRING_VALUE",
 * //           },
 * //           DenoiseFilter: "ENABLED" || "DISABLED",
 * //           DolbyVisionMetadataXml: "STRING_VALUE",
 * //           FileInput: "STRING_VALUE",
 * //           FilterEnable: "AUTO" || "DISABLE" || "FORCE",
 * //           FilterStrength: Number("int"),
 * //           ImageInserter: { // ImageInserter
 * //             InsertableImages: [ // __listOfInsertableImage
 * //               { // InsertableImage
 * //                 Duration: Number("int"),
 * //                 FadeIn: Number("int"),
 * //                 FadeOut: Number("int"),
 * //                 Height: Number("int"),
 * //                 ImageInserterInput: "STRING_VALUE",
 * //                 ImageX: Number("int"),
 * //                 ImageY: Number("int"),
 * //                 Layer: Number("int"),
 * //                 Opacity: Number("int"),
 * //                 StartTime: "STRING_VALUE",
 * //                 Width: Number("int"),
 * //               },
 * //             ],
 * //             SdrReferenceWhiteLevel: Number("int"),
 * //           },
 * //           InputClippings: [ // __listOfInputClipping
 * //             { // InputClipping
 * //               EndTimecode: "STRING_VALUE",
 * //               StartTimecode: "STRING_VALUE",
 * //             },
 * //           ],
 * //           InputScanType: "AUTO" || "PSF",
 * //           Position: {
 * //             Height: Number("int"),
 * //             Width: Number("int"),
 * //             X: Number("int"),
 * //             Y: Number("int"),
 * //           },
 * //           ProgramNumber: Number("int"),
 * //           PsiControl: "IGNORE_PSI" || "USE_PSI",
 * //           SupplementalImps: [ // __listOf__stringPatternS3ASSETMAPXml
 * //             "STRING_VALUE",
 * //           ],
 * //           TimecodeSource: "EMBEDDED" || "ZEROBASED" || "SPECIFIEDSTART",
 * //           TimecodeStart: "STRING_VALUE",
 * //           VideoGenerator: { // InputVideoGenerator
 * //             Duration: Number("int"),
 * //           },
 * //           VideoSelector: { // VideoSelector
 * //             AlphaBehavior: "DISCARD" || "REMAP_TO_LUMA",
 * //             ColorSpace: "FOLLOW" || "REC_601" || "REC_709" || "HDR10" || "HLG_2020" || "P3DCI" || "P3D65_SDR" || "P3D65_HDR",
 * //             ColorSpaceUsage: "FORCE" || "FALLBACK",
 * //             EmbeddedTimecodeOverride: "NONE" || "USE_MDPM",
 * //             Hdr10Metadata: { // Hdr10Metadata
 * //               BluePrimaryX: Number("int"),
 * //               BluePrimaryY: Number("int"),
 * //               GreenPrimaryX: Number("int"),
 * //               GreenPrimaryY: Number("int"),
 * //               MaxContentLightLevel: Number("int"),
 * //               MaxFrameAverageLightLevel: Number("int"),
 * //               MaxLuminance: Number("int"),
 * //               MinLuminance: Number("int"),
 * //               RedPrimaryX: Number("int"),
 * //               RedPrimaryY: Number("int"),
 * //               WhitePointX: Number("int"),
 * //               WhitePointY: Number("int"),
 * //             },
 * //             PadVideo: "DISABLED" || "BLACK",
 * //             Pid: Number("int"),
 * //             ProgramNumber: Number("int"),
 * //             Rotate: "DEGREE_0" || "DEGREES_90" || "DEGREES_180" || "DEGREES_270" || "AUTO",
 * //             SampleRange: "FOLLOW" || "FULL_RANGE" || "LIMITED_RANGE",
 * //           },
 * //         },
 * //       ],
 * //       KantarWatermark: { // KantarWatermarkSettings
 * //         ChannelName: "STRING_VALUE",
 * //         ContentReference: "STRING_VALUE",
 * //         CredentialsSecretName: "STRING_VALUE",
 * //         FileOffset: Number("double"),
 * //         KantarLicenseId: Number("int"),
 * //         KantarServerUrl: "STRING_VALUE",
 * //         LogDestination: "STRING_VALUE",
 * //         Metadata3: "STRING_VALUE",
 * //         Metadata4: "STRING_VALUE",
 * //         Metadata5: "STRING_VALUE",
 * //         Metadata6: "STRING_VALUE",
 * //         Metadata7: "STRING_VALUE",
 * //         Metadata8: "STRING_VALUE",
 * //       },
 * //       MotionImageInserter: { // MotionImageInserter
 * //         Framerate: { // MotionImageInsertionFramerate
 * //           FramerateDenominator: Number("int"),
 * //           FramerateNumerator: Number("int"),
 * //         },
 * //         Input: "STRING_VALUE",
 * //         InsertionMode: "MOV" || "PNG",
 * //         Offset: { // MotionImageInsertionOffset
 * //           ImageX: Number("int"),
 * //           ImageY: Number("int"),
 * //         },
 * //         Playback: "ONCE" || "REPEAT",
 * //         StartTime: "STRING_VALUE",
 * //       },
 * //       NielsenConfiguration: { // NielsenConfiguration
 * //         BreakoutCode: Number("int"),
 * //         DistributorId: "STRING_VALUE",
 * //       },
 * //       NielsenNonLinearWatermark: { // NielsenNonLinearWatermarkSettings
 * //         ActiveWatermarkProcess: "NAES2_AND_NW" || "CBET" || "NAES2_AND_NW_AND_CBET",
 * //         AdiFilename: "STRING_VALUE",
 * //         AssetId: "STRING_VALUE",
 * //         AssetName: "STRING_VALUE",
 * //         CbetSourceId: "STRING_VALUE",
 * //         EpisodeId: "STRING_VALUE",
 * //         MetadataDestination: "STRING_VALUE",
 * //         SourceId: Number("int"),
 * //         SourceWatermarkStatus: "CLEAN" || "WATERMARKED",
 * //         TicServerUrl: "STRING_VALUE",
 * //         UniqueTicPerAudioTrack: "RESERVE_UNIQUE_TICS_PER_TRACK" || "SAME_TICS_PER_TRACK",
 * //       },
 * //       OutputGroups: [ // __listOfOutputGroup
 * //         { // OutputGroup
 * //           AutomatedEncodingSettings: { // AutomatedEncodingSettings
 * //             AbrSettings: { // AutomatedAbrSettings
 * //               MaxAbrBitrate: Number("int"),
 * //               MaxRenditions: Number("int"),
 * //               MinAbrBitrate: Number("int"),
 * //               Rules: [ // __listOfAutomatedAbrRule
 * //                 { // AutomatedAbrRule
 * //                   AllowedRenditions: [ // __listOfAllowedRenditionSize
 * //                     { // AllowedRenditionSize
 * //                       Height: Number("int"),
 * //                       Required: "ENABLED" || "DISABLED",
 * //                       Width: Number("int"),
 * //                     },
 * //                   ],
 * //                   ForceIncludeRenditions: [ // __listOfForceIncludeRenditionSize
 * //                     { // ForceIncludeRenditionSize
 * //                       Height: Number("int"),
 * //                       Width: Number("int"),
 * //                     },
 * //                   ],
 * //                   MinBottomRenditionSize: { // MinBottomRenditionSize
 * //                     Height: Number("int"),
 * //                     Width: Number("int"),
 * //                   },
 * //                   MinTopRenditionSize: { // MinTopRenditionSize
 * //                     Height: Number("int"),
 * //                     Width: Number("int"),
 * //                   },
 * //                   Type: "MIN_TOP_RENDITION_SIZE" || "MIN_BOTTOM_RENDITION_SIZE" || "FORCE_INCLUDE_RENDITIONS" || "ALLOWED_RENDITIONS",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           CustomName: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           OutputGroupSettings: { // OutputGroupSettings
 * //             CmafGroupSettings: { // CmafGroupSettings
 * //               AdditionalManifests: [ // __listOfCmafAdditionalManifest
 * //                 { // CmafAdditionalManifest
 * //                   ManifestNameModifier: "STRING_VALUE",
 * //                   SelectedOutputs: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //               BaseUrl: "STRING_VALUE",
 * //               ClientCache: "DISABLED" || "ENABLED",
 * //               CodecSpecification: "RFC_6381" || "RFC_4281",
 * //               DashManifestStyle: "BASIC" || "COMPACT" || "DISTINCT",
 * //               Destination: "STRING_VALUE",
 * //               DestinationSettings: { // DestinationSettings
 * //                 S3Settings: { // S3DestinationSettings
 * //                   AccessControl: { // S3DestinationAccessControl
 * //                     CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 * //                   },
 * //                   Encryption: { // S3EncryptionSettings
 * //                     EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 * //                     KmsEncryptionContext: "STRING_VALUE",
 * //                     KmsKeyArn: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //               Encryption: { // CmafEncryptionSettings
 * //                 ConstantInitializationVector: "STRING_VALUE",
 * //                 EncryptionMethod: "SAMPLE_AES" || "AES_CTR",
 * //                 InitializationVectorInManifest: "INCLUDE" || "EXCLUDE",
 * //                 SpekeKeyProvider: { // SpekeKeyProviderCmaf
 * //                   CertificateArn: "STRING_VALUE",
 * //                   DashSignaledSystemIds: [ // __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   HlsSignaledSystemIds: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   ResourceId: "STRING_VALUE",
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //                 StaticKeyProvider: { // StaticKeyProvider
 * //                   KeyFormat: "STRING_VALUE",
 * //                   KeyFormatVersions: "STRING_VALUE",
 * //                   StaticKeyValue: "STRING_VALUE",
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //                 Type: "SPEKE" || "STATIC_KEY",
 * //               },
 * //               FragmentLength: Number("int"),
 * //               ImageBasedTrickPlay: "NONE" || "THUMBNAIL" || "THUMBNAIL_AND_FULLFRAME" || "ADVANCED",
 * //               ImageBasedTrickPlaySettings: { // CmafImageBasedTrickPlaySettings
 * //                 IntervalCadence: "FOLLOW_IFRAME" || "FOLLOW_CUSTOM",
 * //                 ThumbnailHeight: Number("int"),
 * //                 ThumbnailInterval: Number("double"),
 * //                 ThumbnailWidth: Number("int"),
 * //                 TileHeight: Number("int"),
 * //                 TileWidth: Number("int"),
 * //               },
 * //               ManifestCompression: "GZIP" || "NONE",
 * //               ManifestDurationFormat: "FLOATING_POINT" || "INTEGER",
 * //               MinBufferTime: Number("int"),
 * //               MinFinalSegmentLength: Number("double"),
 * //               MpdManifestBandwidthType: "AVERAGE" || "MAX",
 * //               MpdProfile: "MAIN_PROFILE" || "ON_DEMAND_PROFILE",
 * //               PtsOffsetHandlingForBFrames: "ZERO_BASED" || "MATCH_INITIAL_PTS",
 * //               SegmentControl: "SINGLE_FILE" || "SEGMENTED_FILES",
 * //               SegmentLength: Number("int"),
 * //               SegmentLengthControl: "EXACT" || "GOP_MULTIPLE",
 * //               StreamInfResolution: "INCLUDE" || "EXCLUDE",
 * //               TargetDurationCompatibilityMode: "LEGACY" || "SPEC_COMPLIANT",
 * //               VideoCompositionOffsets: "SIGNED" || "UNSIGNED",
 * //               WriteDashManifest: "DISABLED" || "ENABLED",
 * //               WriteHlsManifest: "DISABLED" || "ENABLED",
 * //               WriteSegmentTimelineInRepresentation: "ENABLED" || "DISABLED",
 * //             },
 * //             DashIsoGroupSettings: { // DashIsoGroupSettings
 * //               AdditionalManifests: [ // __listOfDashAdditionalManifest
 * //                 { // DashAdditionalManifest
 * //                   ManifestNameModifier: "STRING_VALUE",
 * //                   SelectedOutputs: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //               AudioChannelConfigSchemeIdUri: "MPEG_CHANNEL_CONFIGURATION" || "DOLBY_CHANNEL_CONFIGURATION",
 * //               BaseUrl: "STRING_VALUE",
 * //               DashManifestStyle: "BASIC" || "COMPACT" || "DISTINCT",
 * //               Destination: "STRING_VALUE",
 * //               DestinationSettings: {
 * //                 S3Settings: {
 * //                   AccessControl: {
 * //                     CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 * //                   },
 * //                   Encryption: {
 * //                     EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 * //                     KmsEncryptionContext: "STRING_VALUE",
 * //                     KmsKeyArn: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //               Encryption: { // DashIsoEncryptionSettings
 * //                 PlaybackDeviceCompatibility: "CENC_V1" || "UNENCRYPTED_SEI",
 * //                 SpekeKeyProvider: { // SpekeKeyProvider
 * //                   CertificateArn: "STRING_VALUE",
 * //                   ResourceId: "STRING_VALUE",
 * //                   SystemIds: [ // __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //               },
 * //               FragmentLength: Number("int"),
 * //               HbbtvCompliance: "HBBTV_1_5" || "NONE",
 * //               ImageBasedTrickPlay: "NONE" || "THUMBNAIL" || "THUMBNAIL_AND_FULLFRAME" || "ADVANCED",
 * //               ImageBasedTrickPlaySettings: { // DashIsoImageBasedTrickPlaySettings
 * //                 IntervalCadence: "FOLLOW_IFRAME" || "FOLLOW_CUSTOM",
 * //                 ThumbnailHeight: Number("int"),
 * //                 ThumbnailInterval: Number("double"),
 * //                 ThumbnailWidth: Number("int"),
 * //                 TileHeight: Number("int"),
 * //                 TileWidth: Number("int"),
 * //               },
 * //               MinBufferTime: Number("int"),
 * //               MinFinalSegmentLength: Number("double"),
 * //               MpdManifestBandwidthType: "AVERAGE" || "MAX",
 * //               MpdProfile: "MAIN_PROFILE" || "ON_DEMAND_PROFILE",
 * //               PtsOffsetHandlingForBFrames: "ZERO_BASED" || "MATCH_INITIAL_PTS",
 * //               SegmentControl: "SINGLE_FILE" || "SEGMENTED_FILES",
 * //               SegmentLength: Number("int"),
 * //               SegmentLengthControl: "EXACT" || "GOP_MULTIPLE",
 * //               VideoCompositionOffsets: "SIGNED" || "UNSIGNED",
 * //               WriteSegmentTimelineInRepresentation: "ENABLED" || "DISABLED",
 * //             },
 * //             FileGroupSettings: { // FileGroupSettings
 * //               Destination: "STRING_VALUE",
 * //               DestinationSettings: {
 * //                 S3Settings: {
 * //                   AccessControl: {
 * //                     CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 * //                   },
 * //                   Encryption: {
 * //                     EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 * //                     KmsEncryptionContext: "STRING_VALUE",
 * //                     KmsKeyArn: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //             HlsGroupSettings: { // HlsGroupSettings
 * //               AdMarkers: [ // __listOfHlsAdMarkers
 * //                 "ELEMENTAL" || "ELEMENTAL_SCTE35",
 * //               ],
 * //               AdditionalManifests: [ // __listOfHlsAdditionalManifest
 * //                 { // HlsAdditionalManifest
 * //                   ManifestNameModifier: "STRING_VALUE",
 * //                   SelectedOutputs: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //               AudioOnlyHeader: "INCLUDE" || "EXCLUDE",
 * //               BaseUrl: "STRING_VALUE",
 * //               CaptionLanguageMappings: [ // __listOfHlsCaptionLanguageMapping
 * //                 { // HlsCaptionLanguageMapping
 * //                   CaptionChannel: Number("int"),
 * //                   CustomLanguageCode: "STRING_VALUE",
 * //                   LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //                   LanguageDescription: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CaptionLanguageSetting: "INSERT" || "OMIT" || "NONE",
 * //               CaptionSegmentLengthControl: "LARGE_SEGMENTS" || "MATCH_VIDEO",
 * //               ClientCache: "DISABLED" || "ENABLED",
 * //               CodecSpecification: "RFC_6381" || "RFC_4281",
 * //               Destination: "STRING_VALUE",
 * //               DestinationSettings: {
 * //                 S3Settings: {
 * //                   AccessControl: {
 * //                     CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 * //                   },
 * //                   Encryption: {
 * //                     EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 * //                     KmsEncryptionContext: "STRING_VALUE",
 * //                     KmsKeyArn: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //               DirectoryStructure: "SINGLE_DIRECTORY" || "SUBDIRECTORY_PER_STREAM",
 * //               Encryption: { // HlsEncryptionSettings
 * //                 ConstantInitializationVector: "STRING_VALUE",
 * //                 EncryptionMethod: "AES128" || "SAMPLE_AES",
 * //                 InitializationVectorInManifest: "INCLUDE" || "EXCLUDE",
 * //                 OfflineEncrypted: "ENABLED" || "DISABLED",
 * //                 SpekeKeyProvider: {
 * //                   CertificateArn: "STRING_VALUE",
 * //                   ResourceId: "STRING_VALUE",
 * //                   SystemIds: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //                 StaticKeyProvider: {
 * //                   KeyFormat: "STRING_VALUE",
 * //                   KeyFormatVersions: "STRING_VALUE",
 * //                   StaticKeyValue: "STRING_VALUE",
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //                 Type: "SPEKE" || "STATIC_KEY",
 * //               },
 * //               ImageBasedTrickPlay: "NONE" || "THUMBNAIL" || "THUMBNAIL_AND_FULLFRAME" || "ADVANCED",
 * //               ImageBasedTrickPlaySettings: { // HlsImageBasedTrickPlaySettings
 * //                 IntervalCadence: "FOLLOW_IFRAME" || "FOLLOW_CUSTOM",
 * //                 ThumbnailHeight: Number("int"),
 * //                 ThumbnailInterval: Number("double"),
 * //                 ThumbnailWidth: Number("int"),
 * //                 TileHeight: Number("int"),
 * //                 TileWidth: Number("int"),
 * //               },
 * //               ManifestCompression: "GZIP" || "NONE",
 * //               ManifestDurationFormat: "FLOATING_POINT" || "INTEGER",
 * //               MinFinalSegmentLength: Number("double"),
 * //               MinSegmentLength: Number("int"),
 * //               OutputSelection: "MANIFESTS_AND_SEGMENTS" || "SEGMENTS_ONLY",
 * //               ProgramDateTime: "INCLUDE" || "EXCLUDE",
 * //               ProgramDateTimePeriod: Number("int"),
 * //               ProgressiveWriteHlsManifest: "ENABLED" || "DISABLED",
 * //               SegmentControl: "SINGLE_FILE" || "SEGMENTED_FILES",
 * //               SegmentLength: Number("int"),
 * //               SegmentLengthControl: "EXACT" || "GOP_MULTIPLE",
 * //               SegmentsPerSubdirectory: Number("int"),
 * //               StreamInfResolution: "INCLUDE" || "EXCLUDE",
 * //               TargetDurationCompatibilityMode: "LEGACY" || "SPEC_COMPLIANT",
 * //               TimedMetadataId3Frame: "NONE" || "PRIV" || "TDRL",
 * //               TimedMetadataId3Period: Number("int"),
 * //               TimestampDeltaMilliseconds: Number("int"),
 * //             },
 * //             MsSmoothGroupSettings: { // MsSmoothGroupSettings
 * //               AdditionalManifests: [ // __listOfMsSmoothAdditionalManifest
 * //                 { // MsSmoothAdditionalManifest
 * //                   ManifestNameModifier: "STRING_VALUE",
 * //                   SelectedOutputs: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //               AudioDeduplication: "COMBINE_DUPLICATE_STREAMS" || "NONE",
 * //               Destination: "STRING_VALUE",
 * //               DestinationSettings: {
 * //                 S3Settings: {
 * //                   AccessControl: {
 * //                     CannedAcl: "PUBLIC_READ" || "AUTHENTICATED_READ" || "BUCKET_OWNER_READ" || "BUCKET_OWNER_FULL_CONTROL",
 * //                   },
 * //                   Encryption: {
 * //                     EncryptionType: "SERVER_SIDE_ENCRYPTION_S3" || "SERVER_SIDE_ENCRYPTION_KMS",
 * //                     KmsEncryptionContext: "STRING_VALUE",
 * //                     KmsKeyArn: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //               Encryption: { // MsSmoothEncryptionSettings
 * //                 SpekeKeyProvider: {
 * //                   CertificateArn: "STRING_VALUE",
 * //                   ResourceId: "STRING_VALUE",
 * //                   SystemIds: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //               },
 * //               FragmentLength: Number("int"),
 * //               FragmentLengthControl: "EXACT" || "GOP_MULTIPLE",
 * //               ManifestEncoding: "UTF8" || "UTF16",
 * //             },
 * //             Type: "HLS_GROUP_SETTINGS" || "DASH_ISO_GROUP_SETTINGS" || "FILE_GROUP_SETTINGS" || "MS_SMOOTH_GROUP_SETTINGS" || "CMAF_GROUP_SETTINGS",
 * //           },
 * //           Outputs: [ // __listOfOutput
 * //             { // Output
 * //               AudioDescriptions: [ // __listOfAudioDescription
 * //                 { // AudioDescription
 * //                   AudioChannelTaggingSettings: { // AudioChannelTaggingSettings
 * //                     ChannelTag: "L" || "R" || "C" || "LFE" || "LS" || "RS" || "LC" || "RC" || "CS" || "LSD" || "RSD" || "TCS" || "VHL" || "VHC" || "VHR",
 * //                   },
 * //                   AudioNormalizationSettings: { // AudioNormalizationSettings
 * //                     Algorithm: "ITU_BS_1770_1" || "ITU_BS_1770_2" || "ITU_BS_1770_3" || "ITU_BS_1770_4",
 * //                     AlgorithmControl: "CORRECT_AUDIO" || "MEASURE_ONLY",
 * //                     CorrectionGateLevel: Number("int"),
 * //                     LoudnessLogging: "LOG" || "DONT_LOG",
 * //                     PeakCalculation: "TRUE_PEAK" || "NONE",
 * //                     TargetLkfs: Number("double"),
 * //                     TruePeakLimiterThreshold: Number("double"),
 * //                   },
 * //                   AudioSourceName: "STRING_VALUE",
 * //                   AudioType: Number("int"),
 * //                   AudioTypeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //                   CodecSettings: { // AudioCodecSettings
 * //                     AacSettings: { // AacSettings
 * //                       AudioDescriptionBroadcasterMix: "BROADCASTER_MIXED_AD" || "NORMAL",
 * //                       Bitrate: Number("int"),
 * //                       CodecProfile: "LC" || "HEV1" || "HEV2",
 * //                       CodingMode: "AD_RECEIVER_MIX" || "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_5_1",
 * //                       RateControlMode: "CBR" || "VBR",
 * //                       RawFormat: "LATM_LOAS" || "NONE",
 * //                       SampleRate: Number("int"),
 * //                       Specification: "MPEG2" || "MPEG4",
 * //                       VbrQuality: "LOW" || "MEDIUM_LOW" || "MEDIUM_HIGH" || "HIGH",
 * //                     },
 * //                     Ac3Settings: { // Ac3Settings
 * //                       Bitrate: Number("int"),
 * //                       BitstreamMode: "COMPLETE_MAIN" || "COMMENTARY" || "DIALOGUE" || "EMERGENCY" || "HEARING_IMPAIRED" || "MUSIC_AND_EFFECTS" || "VISUALLY_IMPAIRED" || "VOICE_OVER",
 * //                       CodingMode: "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_3_2_LFE",
 * //                       Dialnorm: Number("int"),
 * //                       DynamicRangeCompressionLine: "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH" || "NONE",
 * //                       DynamicRangeCompressionProfile: "FILM_STANDARD" || "NONE",
 * //                       DynamicRangeCompressionRf: "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH" || "NONE",
 * //                       LfeFilter: "ENABLED" || "DISABLED",
 * //                       MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //                       SampleRate: Number("int"),
 * //                     },
 * //                     AiffSettings: { // AiffSettings
 * //                       BitDepth: Number("int"),
 * //                       Channels: Number("int"),
 * //                       SampleRate: Number("int"),
 * //                     },
 * //                     Codec: "AAC" || "MP2" || "MP3" || "WAV" || "AIFF" || "AC3" || "EAC3" || "EAC3_ATMOS" || "VORBIS" || "OPUS" || "PASSTHROUGH",
 * //                     Eac3AtmosSettings: { // Eac3AtmosSettings
 * //                       Bitrate: Number("int"),
 * //                       BitstreamMode: "COMPLETE_MAIN",
 * //                       CodingMode: "CODING_MODE_AUTO" || "CODING_MODE_5_1_4" || "CODING_MODE_7_1_4" || "CODING_MODE_9_1_6",
 * //                       DialogueIntelligence: "ENABLED" || "DISABLED",
 * //                       DownmixControl: "SPECIFIED" || "INITIALIZE_FROM_SOURCE",
 * //                       DynamicRangeCompressionLine: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 * //                       DynamicRangeCompressionRf: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 * //                       DynamicRangeControl: "SPECIFIED" || "INITIALIZE_FROM_SOURCE",
 * //                       LoRoCenterMixLevel: Number("double"),
 * //                       LoRoSurroundMixLevel: Number("double"),
 * //                       LtRtCenterMixLevel: Number("double"),
 * //                       LtRtSurroundMixLevel: Number("double"),
 * //                       MeteringMode: "LEQ_A" || "ITU_BS_1770_1" || "ITU_BS_1770_2" || "ITU_BS_1770_3" || "ITU_BS_1770_4",
 * //                       SampleRate: Number("int"),
 * //                       SpeechThreshold: Number("int"),
 * //                       StereoDownmix: "NOT_INDICATED" || "STEREO" || "SURROUND" || "DPL2",
 * //                       SurroundExMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 * //                     },
 * //                     Eac3Settings: { // Eac3Settings
 * //                       AttenuationControl: "ATTENUATE_3_DB" || "NONE",
 * //                       Bitrate: Number("int"),
 * //                       BitstreamMode: "COMPLETE_MAIN" || "COMMENTARY" || "EMERGENCY" || "HEARING_IMPAIRED" || "VISUALLY_IMPAIRED",
 * //                       CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0" || "CODING_MODE_3_2",
 * //                       DcFilter: "ENABLED" || "DISABLED",
 * //                       Dialnorm: Number("int"),
 * //                       DynamicRangeCompressionLine: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 * //                       DynamicRangeCompressionRf: "NONE" || "FILM_STANDARD" || "FILM_LIGHT" || "MUSIC_STANDARD" || "MUSIC_LIGHT" || "SPEECH",
 * //                       LfeControl: "LFE" || "NO_LFE",
 * //                       LfeFilter: "ENABLED" || "DISABLED",
 * //                       LoRoCenterMixLevel: Number("double"),
 * //                       LoRoSurroundMixLevel: Number("double"),
 * //                       LtRtCenterMixLevel: Number("double"),
 * //                       LtRtSurroundMixLevel: Number("double"),
 * //                       MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //                       PassthroughControl: "WHEN_POSSIBLE" || "NO_PASSTHROUGH",
 * //                       PhaseControl: "SHIFT_90_DEGREES" || "NO_SHIFT",
 * //                       SampleRate: Number("int"),
 * //                       StereoDownmix: "NOT_INDICATED" || "LO_RO" || "LT_RT" || "DPL2",
 * //                       SurroundExMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 * //                       SurroundMode: "NOT_INDICATED" || "ENABLED" || "DISABLED",
 * //                     },
 * //                     Mp2Settings: { // Mp2Settings
 * //                       Bitrate: Number("int"),
 * //                       Channels: Number("int"),
 * //                       SampleRate: Number("int"),
 * //                     },
 * //                     Mp3Settings: { // Mp3Settings
 * //                       Bitrate: Number("int"),
 * //                       Channels: Number("int"),
 * //                       RateControlMode: "CBR" || "VBR",
 * //                       SampleRate: Number("int"),
 * //                       VbrQuality: Number("int"),
 * //                     },
 * //                     OpusSettings: { // OpusSettings
 * //                       Bitrate: Number("int"),
 * //                       Channels: Number("int"),
 * //                       SampleRate: Number("int"),
 * //                     },
 * //                     VorbisSettings: { // VorbisSettings
 * //                       Channels: Number("int"),
 * //                       SampleRate: Number("int"),
 * //                       VbrQuality: Number("int"),
 * //                     },
 * //                     WavSettings: { // WavSettings
 * //                       BitDepth: Number("int"),
 * //                       Channels: Number("int"),
 * //                       Format: "RIFF" || "RF64",
 * //                       SampleRate: Number("int"),
 * //                     },
 * //                   },
 * //                   CustomLanguageCode: "STRING_VALUE",
 * //                   LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //                   LanguageCodeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //                   RemixSettings: {
 * //                     ChannelMapping: {
 * //                       OutputChannels: [
 * //                         {
 * //                           InputChannels: [
 * //                             Number("int"),
 * //                           ],
 * //                           InputChannelsFineTune: [
 * //                             Number("double"),
 * //                           ],
 * //                         },
 * //                       ],
 * //                     },
 * //                     ChannelsIn: Number("int"),
 * //                     ChannelsOut: Number("int"),
 * //                   },
 * //                   StreamName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               CaptionDescriptions: [ // __listOfCaptionDescription
 * //                 { // CaptionDescription
 * //                   CaptionSelectorName: "STRING_VALUE",
 * //                   CustomLanguageCode: "STRING_VALUE",
 * //                   DestinationSettings: { // CaptionDestinationSettings
 * //                     BurninDestinationSettings: { // BurninDestinationSettings
 * //                       Alignment: "CENTERED" || "LEFT" || "AUTO",
 * //                       ApplyFontColor: "WHITE_TEXT_ONLY" || "ALL_TEXT",
 * //                       BackgroundColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 * //                       BackgroundOpacity: Number("int"),
 * //                       FallbackFont: "BEST_MATCH" || "MONOSPACED_SANSSERIF" || "MONOSPACED_SERIF" || "PROPORTIONAL_SANSSERIF" || "PROPORTIONAL_SERIF",
 * //                       FontColor: "WHITE" || "BLACK" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "HEX" || "AUTO",
 * //                       FontOpacity: Number("int"),
 * //                       FontResolution: Number("int"),
 * //                       FontScript: "AUTOMATIC" || "HANS" || "HANT",
 * //                       FontSize: Number("int"),
 * //                       HexFontColor: "STRING_VALUE",
 * //                       OutlineColor: "BLACK" || "WHITE" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "AUTO",
 * //                       OutlineSize: Number("int"),
 * //                       ShadowColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 * //                       ShadowOpacity: Number("int"),
 * //                       ShadowXOffset: Number("int"),
 * //                       ShadowYOffset: Number("int"),
 * //                       StylePassthrough: "ENABLED" || "DISABLED",
 * //                       TeletextSpacing: "FIXED_GRID" || "PROPORTIONAL" || "AUTO",
 * //                       XPosition: Number("int"),
 * //                       YPosition: Number("int"),
 * //                     },
 * //                     DestinationType: "BURN_IN" || "DVB_SUB" || "EMBEDDED" || "EMBEDDED_PLUS_SCTE20" || "IMSC" || "SCTE20_PLUS_EMBEDDED" || "SCC" || "SRT" || "SMI" || "TELETEXT" || "TTML" || "WEBVTT",
 * //                     DvbSubDestinationSettings: { // DvbSubDestinationSettings
 * //                       Alignment: "CENTERED" || "LEFT" || "AUTO",
 * //                       ApplyFontColor: "WHITE_TEXT_ONLY" || "ALL_TEXT",
 * //                       BackgroundColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 * //                       BackgroundOpacity: Number("int"),
 * //                       DdsHandling: "NONE" || "SPECIFIED" || "NO_DISPLAY_WINDOW",
 * //                       DdsXCoordinate: Number("int"),
 * //                       DdsYCoordinate: Number("int"),
 * //                       FallbackFont: "BEST_MATCH" || "MONOSPACED_SANSSERIF" || "MONOSPACED_SERIF" || "PROPORTIONAL_SANSSERIF" || "PROPORTIONAL_SERIF",
 * //                       FontColor: "WHITE" || "BLACK" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "HEX" || "AUTO",
 * //                       FontOpacity: Number("int"),
 * //                       FontResolution: Number("int"),
 * //                       FontScript: "AUTOMATIC" || "HANS" || "HANT",
 * //                       FontSize: Number("int"),
 * //                       Height: Number("int"),
 * //                       HexFontColor: "STRING_VALUE",
 * //                       OutlineColor: "BLACK" || "WHITE" || "YELLOW" || "RED" || "GREEN" || "BLUE" || "AUTO",
 * //                       OutlineSize: Number("int"),
 * //                       ShadowColor: "NONE" || "BLACK" || "WHITE" || "AUTO",
 * //                       ShadowOpacity: Number("int"),
 * //                       ShadowXOffset: Number("int"),
 * //                       ShadowYOffset: Number("int"),
 * //                       StylePassthrough: "ENABLED" || "DISABLED",
 * //                       SubtitlingType: "HEARING_IMPAIRED" || "STANDARD",
 * //                       TeletextSpacing: "FIXED_GRID" || "PROPORTIONAL" || "AUTO",
 * //                       Width: Number("int"),
 * //                       XPosition: Number("int"),
 * //                       YPosition: Number("int"),
 * //                     },
 * //                     EmbeddedDestinationSettings: { // EmbeddedDestinationSettings
 * //                       Destination608ChannelNumber: Number("int"),
 * //                       Destination708ServiceNumber: Number("int"),
 * //                     },
 * //                     ImscDestinationSettings: { // ImscDestinationSettings
 * //                       Accessibility: "DISABLED" || "ENABLED",
 * //                       StylePassthrough: "ENABLED" || "DISABLED",
 * //                     },
 * //                     SccDestinationSettings: { // SccDestinationSettings
 * //                       Framerate: "FRAMERATE_23_97" || "FRAMERATE_24" || "FRAMERATE_25" || "FRAMERATE_29_97_DROPFRAME" || "FRAMERATE_29_97_NON_DROPFRAME",
 * //                     },
 * //                     SrtDestinationSettings: { // SrtDestinationSettings
 * //                       StylePassthrough: "ENABLED" || "DISABLED",
 * //                     },
 * //                     TeletextDestinationSettings: { // TeletextDestinationSettings
 * //                       PageNumber: "STRING_VALUE",
 * //                       PageTypes: [ // __listOfTeletextPageType
 * //                         "PAGE_TYPE_INITIAL" || "PAGE_TYPE_SUBTITLE" || "PAGE_TYPE_ADDL_INFO" || "PAGE_TYPE_PROGRAM_SCHEDULE" || "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE",
 * //                       ],
 * //                     },
 * //                     TtmlDestinationSettings: { // TtmlDestinationSettings
 * //                       StylePassthrough: "ENABLED" || "DISABLED",
 * //                     },
 * //                     WebvttDestinationSettings: { // WebvttDestinationSettings
 * //                       Accessibility: "DISABLED" || "ENABLED",
 * //                       StylePassthrough: "ENABLED" || "DISABLED" || "STRICT",
 * //                     },
 * //                   },
 * //                   LanguageCode: "ENG" || "SPA" || "FRA" || "DEU" || "GER" || "ZHO" || "ARA" || "HIN" || "JPN" || "RUS" || "POR" || "ITA" || "URD" || "VIE" || "KOR" || "PAN" || "ABK" || "AAR" || "AFR" || "AKA" || "SQI" || "AMH" || "ARG" || "HYE" || "ASM" || "AVA" || "AVE" || "AYM" || "AZE" || "BAM" || "BAK" || "EUS" || "BEL" || "BEN" || "BIH" || "BIS" || "BOS" || "BRE" || "BUL" || "MYA" || "CAT" || "KHM" || "CHA" || "CHE" || "NYA" || "CHU" || "CHV" || "COR" || "COS" || "CRE" || "HRV" || "CES" || "DAN" || "DIV" || "NLD" || "DZO" || "ENM" || "EPO" || "EST" || "EWE" || "FAO" || "FIJ" || "FIN" || "FRM" || "FUL" || "GLA" || "GLG" || "LUG" || "KAT" || "ELL" || "GRN" || "GUJ" || "HAT" || "HAU" || "HEB" || "HER" || "HMO" || "HUN" || "ISL" || "IDO" || "IBO" || "IND" || "INA" || "ILE" || "IKU" || "IPK" || "GLE" || "JAV" || "KAL" || "KAN" || "KAU" || "KAS" || "KAZ" || "KIK" || "KIN" || "KIR" || "KOM" || "KON" || "KUA" || "KUR" || "LAO" || "LAT" || "LAV" || "LIM" || "LIN" || "LIT" || "LUB" || "LTZ" || "MKD" || "MLG" || "MSA" || "MAL" || "MLT" || "GLV" || "MRI" || "MAR" || "MAH" || "MON" || "NAU" || "NAV" || "NDE" || "NBL" || "NDO" || "NEP" || "SME" || "NOR" || "NOB" || "NNO" || "OCI" || "OJI" || "ORI" || "ORM" || "OSS" || "PLI" || "FAS" || "POL" || "PUS" || "QUE" || "QAA" || "RON" || "ROH" || "RUN" || "SMO" || "SAG" || "SAN" || "SRD" || "SRB" || "SNA" || "III" || "SND" || "SIN" || "SLK" || "SLV" || "SOM" || "SOT" || "SUN" || "SWA" || "SSW" || "SWE" || "TGL" || "TAH" || "TGK" || "TAM" || "TAT" || "TEL" || "THA" || "BOD" || "TIR" || "TON" || "TSO" || "TSN" || "TUR" || "TUK" || "TWI" || "UIG" || "UKR" || "UZB" || "VEN" || "VOL" || "WLN" || "CYM" || "FRY" || "WOL" || "XHO" || "YID" || "YOR" || "ZHA" || "ZUL" || "ORJ" || "QPC" || "TNG" || "SRP",
 * //                   LanguageDescription: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               ContainerSettings: { // ContainerSettings
 * //                 CmfcSettings: { // CmfcSettings
 * //                   AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //                   AudioGroupId: "STRING_VALUE",
 * //                   AudioRenditionSets: "STRING_VALUE",
 * //                   AudioTrackType: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT" || "ALTERNATE_AUDIO_AUTO_SELECT" || "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
 * //                   DescriptiveVideoServiceFlag: "DONT_FLAG" || "FLAG",
 * //                   IFrameOnlyManifest: "INCLUDE" || "EXCLUDE",
 * //                   KlvMetadata: "PASSTHROUGH" || "NONE",
 * //                   ManifestMetadataSignaling: "ENABLED" || "DISABLED",
 * //                   Scte35Esam: "INSERT" || "NONE",
 * //                   Scte35Source: "PASSTHROUGH" || "NONE",
 * //                   TimedMetadata: "PASSTHROUGH" || "NONE",
 * //                   TimedMetadataBoxVersion: "VERSION_0" || "VERSION_1",
 * //                   TimedMetadataSchemeIdUri: "STRING_VALUE",
 * //                   TimedMetadataValue: "STRING_VALUE",
 * //                 },
 * //                 Container: "F4V" || "ISMV" || "M2TS" || "M3U8" || "CMFC" || "MOV" || "MP4" || "MPD" || "MXF" || "WEBM" || "RAW",
 * //                 F4vSettings: { // F4vSettings
 * //                   MoovPlacement: "PROGRESSIVE_DOWNLOAD" || "NORMAL",
 * //                 },
 * //                 M2tsSettings: { // M2tsSettings
 * //                   AudioBufferModel: "DVB" || "ATSC",
 * //                   AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //                   AudioFramesPerPes: Number("int"),
 * //                   AudioPids: [ // __listOf__integerMin32Max8182
 * //                     Number("int"),
 * //                   ],
 * //                   Bitrate: Number("int"),
 * //                   BufferModel: "MULTIPLEX" || "NONE",
 * //                   DataPTSControl: "AUTO" || "ALIGN_TO_VIDEO",
 * //                   DvbNitSettings: { // DvbNitSettings
 * //                     NetworkId: Number("int"),
 * //                     NetworkName: "STRING_VALUE",
 * //                     NitInterval: Number("int"),
 * //                   },
 * //                   DvbSdtSettings: { // DvbSdtSettings
 * //                     OutputSdt: "SDT_FOLLOW" || "SDT_FOLLOW_IF_PRESENT" || "SDT_MANUAL" || "SDT_NONE",
 * //                     SdtInterval: Number("int"),
 * //                     ServiceName: "STRING_VALUE",
 * //                     ServiceProviderName: "STRING_VALUE",
 * //                   },
 * //                   DvbSubPids: [
 * //                     Number("int"),
 * //                   ],
 * //                   DvbTdtSettings: { // DvbTdtSettings
 * //                     TdtInterval: Number("int"),
 * //                   },
 * //                   DvbTeletextPid: Number("int"),
 * //                   EbpAudioInterval: "VIDEO_AND_FIXED_INTERVALS" || "VIDEO_INTERVAL",
 * //                   EbpPlacement: "VIDEO_AND_AUDIO_PIDS" || "VIDEO_PID",
 * //                   EsRateInPes: "INCLUDE" || "EXCLUDE",
 * //                   ForceTsVideoEbpOrder: "FORCE" || "DEFAULT",
 * //                   FragmentTime: Number("double"),
 * //                   KlvMetadata: "PASSTHROUGH" || "NONE",
 * //                   MaxPcrInterval: Number("int"),
 * //                   MinEbpInterval: Number("int"),
 * //                   NielsenId3: "INSERT" || "NONE",
 * //                   NullPacketBitrate: Number("double"),
 * //                   PatInterval: Number("int"),
 * //                   PcrControl: "PCR_EVERY_PES_PACKET" || "CONFIGURED_PCR_PERIOD",
 * //                   PcrPid: Number("int"),
 * //                   PmtInterval: Number("int"),
 * //                   PmtPid: Number("int"),
 * //                   PrivateMetadataPid: Number("int"),
 * //                   ProgramNumber: Number("int"),
 * //                   RateMode: "VBR" || "CBR",
 * //                   Scte35Esam: { // M2tsScte35Esam
 * //                     Scte35EsamPid: Number("int"),
 * //                   },
 * //                   Scte35Pid: Number("int"),
 * //                   Scte35Source: "PASSTHROUGH" || "NONE",
 * //                   SegmentationMarkers: "NONE" || "RAI_SEGSTART" || "RAI_ADAPT" || "PSI_SEGSTART" || "EBP" || "EBP_LEGACY",
 * //                   SegmentationStyle: "MAINTAIN_CADENCE" || "RESET_CADENCE",
 * //                   SegmentationTime: Number("double"),
 * //                   TimedMetadataPid: Number("int"),
 * //                   TransportStreamId: Number("int"),
 * //                   VideoPid: Number("int"),
 * //                 },
 * //                 M3u8Settings: { // M3u8Settings
 * //                   AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //                   AudioFramesPerPes: Number("int"),
 * //                   AudioPids: [
 * //                     Number("int"),
 * //                   ],
 * //                   DataPTSControl: "AUTO" || "ALIGN_TO_VIDEO",
 * //                   MaxPcrInterval: Number("int"),
 * //                   NielsenId3: "INSERT" || "NONE",
 * //                   PatInterval: Number("int"),
 * //                   PcrControl: "PCR_EVERY_PES_PACKET" || "CONFIGURED_PCR_PERIOD",
 * //                   PcrPid: Number("int"),
 * //                   PmtInterval: Number("int"),
 * //                   PmtPid: Number("int"),
 * //                   PrivateMetadataPid: Number("int"),
 * //                   ProgramNumber: Number("int"),
 * //                   Scte35Pid: Number("int"),
 * //                   Scte35Source: "PASSTHROUGH" || "NONE",
 * //                   TimedMetadata: "PASSTHROUGH" || "NONE",
 * //                   TimedMetadataPid: Number("int"),
 * //                   TransportStreamId: Number("int"),
 * //                   VideoPid: Number("int"),
 * //                 },
 * //                 MovSettings: { // MovSettings
 * //                   ClapAtom: "INCLUDE" || "EXCLUDE",
 * //                   CslgAtom: "INCLUDE" || "EXCLUDE",
 * //                   Mpeg2FourCCControl: "XDCAM" || "MPEG",
 * //                   PaddingControl: "OMNEON" || "NONE",
 * //                   Reference: "SELF_CONTAINED" || "EXTERNAL",
 * //                 },
 * //                 Mp4Settings: { // Mp4Settings
 * //                   AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //                   CslgAtom: "INCLUDE" || "EXCLUDE",
 * //                   CttsVersion: Number("int"),
 * //                   FreeSpaceBox: "INCLUDE" || "EXCLUDE",
 * //                   MoovPlacement: "PROGRESSIVE_DOWNLOAD" || "NORMAL",
 * //                   Mp4MajorBrand: "STRING_VALUE",
 * //                 },
 * //                 MpdSettings: { // MpdSettings
 * //                   AccessibilityCaptionHints: "INCLUDE" || "EXCLUDE",
 * //                   AudioDuration: "DEFAULT_CODEC_DURATION" || "MATCH_VIDEO_DURATION",
 * //                   CaptionContainerType: "RAW" || "FRAGMENTED_MP4",
 * //                   KlvMetadata: "NONE" || "PASSTHROUGH",
 * //                   ManifestMetadataSignaling: "ENABLED" || "DISABLED",
 * //                   Scte35Esam: "INSERT" || "NONE",
 * //                   Scte35Source: "PASSTHROUGH" || "NONE",
 * //                   TimedMetadata: "PASSTHROUGH" || "NONE",
 * //                   TimedMetadataBoxVersion: "VERSION_0" || "VERSION_1",
 * //                   TimedMetadataSchemeIdUri: "STRING_VALUE",
 * //                   TimedMetadataValue: "STRING_VALUE",
 * //                 },
 * //                 MxfSettings: { // MxfSettings
 * //                   AfdSignaling: "NO_COPY" || "COPY_FROM_VIDEO",
 * //                   Profile: "D_10" || "XDCAM" || "OP1A" || "XAVC" || "XDCAM_RDD9",
 * //                   XavcProfileSettings: { // MxfXavcProfileSettings
 * //                     DurationMode: "ALLOW_ANY_DURATION" || "DROP_FRAMES_FOR_COMPLIANCE",
 * //                     MaxAncDataSize: Number("int"),
 * //                   },
 * //                 },
 * //               },
 * //               Extension: "STRING_VALUE",
 * //               NameModifier: "STRING_VALUE",
 * //               OutputSettings: { // OutputSettings
 * //                 HlsSettings: { // HlsSettings
 * //                   AudioGroupId: "STRING_VALUE",
 * //                   AudioOnlyContainer: "AUTOMATIC" || "M2TS",
 * //                   AudioRenditionSets: "STRING_VALUE",
 * //                   AudioTrackType: "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT" || "ALTERNATE_AUDIO_AUTO_SELECT" || "ALTERNATE_AUDIO_NOT_AUTO_SELECT" || "AUDIO_ONLY_VARIANT_STREAM",
 * //                   DescriptiveVideoServiceFlag: "DONT_FLAG" || "FLAG",
 * //                   IFrameOnlyManifest: "INCLUDE" || "EXCLUDE",
 * //                   SegmentModifier: "STRING_VALUE",
 * //                 },
 * //               },
 * //               Preset: "STRING_VALUE",
 * //               VideoDescription: { // VideoDescription
 * //                 AfdSignaling: "NONE" || "AUTO" || "FIXED",
 * //                 AntiAlias: "DISABLED" || "ENABLED",
 * //                 CodecSettings: { // VideoCodecSettings
 * //                   Av1Settings: { // Av1Settings
 * //                     AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 * //                     BitDepth: "BIT_8" || "BIT_10",
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     GopSize: Number("double"),
 * //                     MaxBitrate: Number("int"),
 * //                     NumberBFramesBetweenReferenceFrames: Number("int"),
 * //                     QvbrSettings: { // Av1QvbrSettings
 * //                       QvbrQualityLevel: Number("int"),
 * //                       QvbrQualityLevelFineTune: Number("double"),
 * //                     },
 * //                     RateControlMode: "QVBR",
 * //                     Slices: Number("int"),
 * //                     SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                   },
 * //                   AvcIntraSettings: { // AvcIntraSettings
 * //                     AvcIntraClass: "CLASS_50" || "CLASS_100" || "CLASS_200" || "CLASS_4K_2K",
 * //                     AvcIntraUhdSettings: { // AvcIntraUhdSettings
 * //                       QualityTuningLevel: "SINGLE_PASS" || "MULTI_PASS",
 * //                     },
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //                     ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //                     SlowPal: "DISABLED" || "ENABLED",
 * //                     Telecine: "NONE" || "HARD",
 * //                   },
 * //                   Codec: "AV1" || "AVC_INTRA" || "FRAME_CAPTURE" || "H_264" || "H_265" || "MPEG2" || "PASSTHROUGH" || "PRORES" || "VC3" || "VP8" || "VP9" || "XAVC",
 * //                   FrameCaptureSettings: { // FrameCaptureSettings
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     MaxCaptures: Number("int"),
 * //                     Quality: Number("int"),
 * //                   },
 * //                   H264Settings: { // H264Settings
 * //                     AdaptiveQuantization: "OFF" || "AUTO" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 * //                     BandwidthReductionFilter: { // BandwidthReductionFilter
 * //                       Sharpening: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 * //                       Strength: "LOW" || "MEDIUM" || "HIGH" || "AUTO" || "OFF",
 * //                     },
 * //                     Bitrate: Number("int"),
 * //                     CodecLevel: "AUTO" || "LEVEL_1" || "LEVEL_1_1" || "LEVEL_1_2" || "LEVEL_1_3" || "LEVEL_2" || "LEVEL_2_1" || "LEVEL_2_2" || "LEVEL_3" || "LEVEL_3_1" || "LEVEL_3_2" || "LEVEL_4" || "LEVEL_4_1" || "LEVEL_4_2" || "LEVEL_5" || "LEVEL_5_1" || "LEVEL_5_2",
 * //                     CodecProfile: "BASELINE" || "HIGH" || "HIGH_10BIT" || "HIGH_422" || "HIGH_422_10BIT" || "MAIN",
 * //                     DynamicSubGop: "ADAPTIVE" || "STATIC",
 * //                     EntropyEncoding: "CABAC" || "CAVLC",
 * //                     FieldEncoding: "PAFF" || "FORCE_FIELD" || "MBAFF",
 * //                     FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     GopBReference: "DISABLED" || "ENABLED",
 * //                     GopClosedCadence: Number("int"),
 * //                     GopSize: Number("double"),
 * //                     GopSizeUnits: "FRAMES" || "SECONDS" || "AUTO",
 * //                     HrdBufferFinalFillPercentage: Number("int"),
 * //                     HrdBufferInitialFillPercentage: Number("int"),
 * //                     HrdBufferSize: Number("int"),
 * //                     InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //                     MaxBitrate: Number("int"),
 * //                     MinIInterval: Number("int"),
 * //                     NumberBFramesBetweenReferenceFrames: Number("int"),
 * //                     NumberReferenceFrames: Number("int"),
 * //                     ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     ParDenominator: Number("int"),
 * //                     ParNumerator: Number("int"),
 * //                     QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 * //                     QvbrSettings: { // H264QvbrSettings
 * //                       MaxAverageBitrate: Number("int"),
 * //                       QvbrQualityLevel: Number("int"),
 * //                       QvbrQualityLevelFineTune: Number("double"),
 * //                     },
 * //                     RateControlMode: "VBR" || "CBR" || "QVBR",
 * //                     RepeatPps: "DISABLED" || "ENABLED",
 * //                     ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //                     SceneChangeDetect: "DISABLED" || "ENABLED" || "TRANSITION_DETECTION",
 * //                     Slices: Number("int"),
 * //                     SlowPal: "DISABLED" || "ENABLED",
 * //                     Softness: Number("int"),
 * //                     SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     Syntax: "DEFAULT" || "RP2027",
 * //                     Telecine: "NONE" || "SOFT" || "HARD",
 * //                     TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     UnregisteredSeiTimecode: "DISABLED" || "ENABLED",
 * //                   },
 * //                   H265Settings: { // H265Settings
 * //                     AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX" || "AUTO",
 * //                     AlternateTransferFunctionSei: "DISABLED" || "ENABLED",
 * //                     BandwidthReductionFilter: {
 * //                       Sharpening: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 * //                       Strength: "LOW" || "MEDIUM" || "HIGH" || "AUTO" || "OFF",
 * //                     },
 * //                     Bitrate: Number("int"),
 * //                     CodecLevel: "AUTO" || "LEVEL_1" || "LEVEL_2" || "LEVEL_2_1" || "LEVEL_3" || "LEVEL_3_1" || "LEVEL_4" || "LEVEL_4_1" || "LEVEL_5" || "LEVEL_5_1" || "LEVEL_5_2" || "LEVEL_6" || "LEVEL_6_1" || "LEVEL_6_2",
 * //                     CodecProfile: "MAIN_MAIN" || "MAIN_HIGH" || "MAIN10_MAIN" || "MAIN10_HIGH" || "MAIN_422_8BIT_MAIN" || "MAIN_422_8BIT_HIGH" || "MAIN_422_10BIT_MAIN" || "MAIN_422_10BIT_HIGH",
 * //                     DynamicSubGop: "ADAPTIVE" || "STATIC",
 * //                     FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     GopBReference: "DISABLED" || "ENABLED",
 * //                     GopClosedCadence: Number("int"),
 * //                     GopSize: Number("double"),
 * //                     GopSizeUnits: "FRAMES" || "SECONDS" || "AUTO",
 * //                     HrdBufferFinalFillPercentage: Number("int"),
 * //                     HrdBufferInitialFillPercentage: Number("int"),
 * //                     HrdBufferSize: Number("int"),
 * //                     InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //                     MaxBitrate: Number("int"),
 * //                     MinIInterval: Number("int"),
 * //                     NumberBFramesBetweenReferenceFrames: Number("int"),
 * //                     NumberReferenceFrames: Number("int"),
 * //                     ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     ParDenominator: Number("int"),
 * //                     ParNumerator: Number("int"),
 * //                     QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 * //                     QvbrSettings: { // H265QvbrSettings
 * //                       MaxAverageBitrate: Number("int"),
 * //                       QvbrQualityLevel: Number("int"),
 * //                       QvbrQualityLevelFineTune: Number("double"),
 * //                     },
 * //                     RateControlMode: "VBR" || "CBR" || "QVBR",
 * //                     SampleAdaptiveOffsetFilterMode: "DEFAULT" || "ADAPTIVE" || "OFF",
 * //                     ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //                     SceneChangeDetect: "DISABLED" || "ENABLED" || "TRANSITION_DETECTION",
 * //                     Slices: Number("int"),
 * //                     SlowPal: "DISABLED" || "ENABLED",
 * //                     SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     Telecine: "NONE" || "SOFT" || "HARD",
 * //                     TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     TemporalIds: "DISABLED" || "ENABLED",
 * //                     Tiles: "DISABLED" || "ENABLED",
 * //                     UnregisteredSeiTimecode: "DISABLED" || "ENABLED",
 * //                     WriteMp4PackagingType: "HVC1" || "HEV1",
 * //                   },
 * //                   Mpeg2Settings: { // Mpeg2Settings
 * //                     AdaptiveQuantization: "OFF" || "LOW" || "MEDIUM" || "HIGH",
 * //                     Bitrate: Number("int"),
 * //                     CodecLevel: "AUTO" || "LOW" || "MAIN" || "HIGH1440" || "HIGH",
 * //                     CodecProfile: "MAIN" || "PROFILE_422",
 * //                     DynamicSubGop: "ADAPTIVE" || "STATIC",
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     GopClosedCadence: Number("int"),
 * //                     GopSize: Number("double"),
 * //                     GopSizeUnits: "FRAMES" || "SECONDS",
 * //                     HrdBufferFinalFillPercentage: Number("int"),
 * //                     HrdBufferInitialFillPercentage: Number("int"),
 * //                     HrdBufferSize: Number("int"),
 * //                     InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //                     IntraDcPrecision: "AUTO" || "INTRA_DC_PRECISION_8" || "INTRA_DC_PRECISION_9" || "INTRA_DC_PRECISION_10" || "INTRA_DC_PRECISION_11",
 * //                     MaxBitrate: Number("int"),
 * //                     MinIInterval: Number("int"),
 * //                     NumberBFramesBetweenReferenceFrames: Number("int"),
 * //                     ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     ParDenominator: Number("int"),
 * //                     ParNumerator: Number("int"),
 * //                     QualityTuningLevel: "SINGLE_PASS" || "MULTI_PASS",
 * //                     RateControlMode: "VBR" || "CBR",
 * //                     ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //                     SceneChangeDetect: "DISABLED" || "ENABLED",
 * //                     SlowPal: "DISABLED" || "ENABLED",
 * //                     Softness: Number("int"),
 * //                     SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     Syntax: "DEFAULT" || "D_10",
 * //                     Telecine: "NONE" || "SOFT" || "HARD",
 * //                     TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                   },
 * //                   ProresSettings: { // ProresSettings
 * //                     ChromaSampling: "PRESERVE_444_SAMPLING" || "SUBSAMPLE_TO_422",
 * //                     CodecProfile: "APPLE_PRORES_422" || "APPLE_PRORES_422_HQ" || "APPLE_PRORES_422_LT" || "APPLE_PRORES_422_PROXY" || "APPLE_PRORES_4444" || "APPLE_PRORES_4444_XQ",
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //                     ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     ParDenominator: Number("int"),
 * //                     ParNumerator: Number("int"),
 * //                     ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //                     SlowPal: "DISABLED" || "ENABLED",
 * //                     Telecine: "NONE" || "HARD",
 * //                   },
 * //                   Vc3Settings: { // Vc3Settings
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     InterlaceMode: "INTERLACED" || "PROGRESSIVE",
 * //                     ScanTypeConversionMode: "INTERLACED" || "INTERLACED_OPTIMIZE",
 * //                     SlowPal: "DISABLED" || "ENABLED",
 * //                     Telecine: "NONE" || "HARD",
 * //                     Vc3Class: "CLASS_145_8BIT" || "CLASS_220_8BIT" || "CLASS_220_10BIT",
 * //                   },
 * //                   Vp8Settings: { // Vp8Settings
 * //                     Bitrate: Number("int"),
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     GopSize: Number("double"),
 * //                     HrdBufferSize: Number("int"),
 * //                     MaxBitrate: Number("int"),
 * //                     ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     ParDenominator: Number("int"),
 * //                     ParNumerator: Number("int"),
 * //                     QualityTuningLevel: "MULTI_PASS" || "MULTI_PASS_HQ",
 * //                     RateControlMode: "VBR",
 * //                   },
 * //                   Vp9Settings: { // Vp9Settings
 * //                     Bitrate: Number("int"),
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     GopSize: Number("double"),
 * //                     HrdBufferSize: Number("int"),
 * //                     MaxBitrate: Number("int"),
 * //                     ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     ParDenominator: Number("int"),
 * //                     ParNumerator: Number("int"),
 * //                     QualityTuningLevel: "MULTI_PASS" || "MULTI_PASS_HQ",
 * //                     RateControlMode: "VBR",
 * //                   },
 * //                   XavcSettings: { // XavcSettings
 * //                     AdaptiveQuantization: "OFF" || "AUTO" || "LOW" || "MEDIUM" || "HIGH" || "HIGHER" || "MAX",
 * //                     EntropyEncoding: "AUTO" || "CABAC" || "CAVLC",
 * //                     FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //                     FramerateConversionAlgorithm: "DUPLICATE_DROP" || "INTERPOLATE" || "FRAMEFORMER",
 * //                     FramerateDenominator: Number("int"),
 * //                     FramerateNumerator: Number("int"),
 * //                     Profile: "XAVC_HD_INTRA_CBG" || "XAVC_4K_INTRA_CBG" || "XAVC_4K_INTRA_VBR" || "XAVC_HD" || "XAVC_4K",
 * //                     SlowPal: "DISABLED" || "ENABLED",
 * //                     Softness: Number("int"),
 * //                     SpatialAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     TemporalAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                     Xavc4kIntraCbgProfileSettings: { // Xavc4kIntraCbgProfileSettings
 * //                       XavcClass: "CLASS_100" || "CLASS_300" || "CLASS_480",
 * //                     },
 * //                     Xavc4kIntraVbrProfileSettings: { // Xavc4kIntraVbrProfileSettings
 * //                       XavcClass: "CLASS_100" || "CLASS_300" || "CLASS_480",
 * //                     },
 * //                     Xavc4kProfileSettings: { // Xavc4kProfileSettings
 * //                       BitrateClass: "BITRATE_CLASS_100" || "BITRATE_CLASS_140" || "BITRATE_CLASS_200",
 * //                       CodecProfile: "HIGH" || "HIGH_422",
 * //                       FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                       GopBReference: "DISABLED" || "ENABLED",
 * //                       GopClosedCadence: Number("int"),
 * //                       HrdBufferSize: Number("int"),
 * //                       QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 * //                       Slices: Number("int"),
 * //                     },
 * //                     XavcHdIntraCbgProfileSettings: { // XavcHdIntraCbgProfileSettings
 * //                       XavcClass: "CLASS_50" || "CLASS_100" || "CLASS_200",
 * //                     },
 * //                     XavcHdProfileSettings: { // XavcHdProfileSettings
 * //                       BitrateClass: "BITRATE_CLASS_25" || "BITRATE_CLASS_35" || "BITRATE_CLASS_50",
 * //                       FlickerAdaptiveQuantization: "DISABLED" || "ENABLED",
 * //                       GopBReference: "DISABLED" || "ENABLED",
 * //                       GopClosedCadence: Number("int"),
 * //                       HrdBufferSize: Number("int"),
 * //                       InterlaceMode: "PROGRESSIVE" || "TOP_FIELD" || "BOTTOM_FIELD" || "FOLLOW_TOP_FIELD" || "FOLLOW_BOTTOM_FIELD",
 * //                       QualityTuningLevel: "SINGLE_PASS" || "SINGLE_PASS_HQ" || "MULTI_PASS_HQ",
 * //                       Slices: Number("int"),
 * //                       Telecine: "NONE" || "HARD",
 * //                     },
 * //                   },
 * //                 },
 * //                 ColorMetadata: "IGNORE" || "INSERT",
 * //                 Crop: {
 * //                   Height: Number("int"),
 * //                   Width: Number("int"),
 * //                   X: Number("int"),
 * //                   Y: Number("int"),
 * //                 },
 * //                 DropFrameTimecode: "DISABLED" || "ENABLED",
 * //                 FixedAfd: Number("int"),
 * //                 Height: Number("int"),
 * //                 Position: {
 * //                   Height: Number("int"),
 * //                   Width: Number("int"),
 * //                   X: Number("int"),
 * //                   Y: Number("int"),
 * //                 },
 * //                 RespondToAfd: "NONE" || "RESPOND" || "PASSTHROUGH",
 * //                 ScalingBehavior: "DEFAULT" || "STRETCH_TO_OUTPUT",
 * //                 Sharpness: Number("int"),
 * //                 TimecodeInsertion: "DISABLED" || "PIC_TIMING_SEI",
 * //                 VideoPreprocessors: { // VideoPreprocessor
 * //                   ColorCorrector: { // ColorCorrector
 * //                     Brightness: Number("int"),
 * //                     ClipLimits: { // ClipLimits
 * //                       MaximumRGBTolerance: Number("int"),
 * //                       MaximumYUV: Number("int"),
 * //                       MinimumRGBTolerance: Number("int"),
 * //                       MinimumYUV: Number("int"),
 * //                     },
 * //                     ColorSpaceConversion: "NONE" || "FORCE_601" || "FORCE_709" || "FORCE_HDR10" || "FORCE_HLG_2020" || "FORCE_P3DCI" || "FORCE_P3D65_SDR" || "FORCE_P3D65_HDR",
 * //                     Contrast: Number("int"),
 * //                     Hdr10Metadata: {
 * //                       BluePrimaryX: Number("int"),
 * //                       BluePrimaryY: Number("int"),
 * //                       GreenPrimaryX: Number("int"),
 * //                       GreenPrimaryY: Number("int"),
 * //                       MaxContentLightLevel: Number("int"),
 * //                       MaxFrameAverageLightLevel: Number("int"),
 * //                       MaxLuminance: Number("int"),
 * //                       MinLuminance: Number("int"),
 * //                       RedPrimaryX: Number("int"),
 * //                       RedPrimaryY: Number("int"),
 * //                       WhitePointX: Number("int"),
 * //                       WhitePointY: Number("int"),
 * //                     },
 * //                     HdrToSdrToneMapper: "PRESERVE_DETAILS" || "VIBRANT",
 * //                     Hue: Number("int"),
 * //                     SampleRangeConversion: "LIMITED_RANGE_SQUEEZE" || "NONE" || "LIMITED_RANGE_CLIP",
 * //                     Saturation: Number("int"),
 * //                     SdrReferenceWhiteLevel: Number("int"),
 * //                   },
 * //                   Deinterlacer: { // Deinterlacer
 * //                     Algorithm: "INTERPOLATE" || "INTERPOLATE_TICKER" || "BLEND" || "BLEND_TICKER" || "LINEAR_INTERPOLATION",
 * //                     Control: "FORCE_ALL_FRAMES" || "NORMAL",
 * //                     Mode: "DEINTERLACE" || "INVERSE_TELECINE" || "ADAPTIVE",
 * //                   },
 * //                   DolbyVision: { // DolbyVision
 * //                     L6Metadata: { // DolbyVisionLevel6Metadata
 * //                       MaxCll: Number("int"),
 * //                       MaxFall: Number("int"),
 * //                     },
 * //                     L6Mode: "PASSTHROUGH" || "RECALCULATE" || "SPECIFY",
 * //                     Mapping: "HDR10_NOMAP" || "HDR10_1000",
 * //                     Profile: "PROFILE_5" || "PROFILE_8_1",
 * //                   },
 * //                   Hdr10Plus: { // Hdr10Plus
 * //                     MasteringMonitorNits: Number("int"),
 * //                     TargetMonitorNits: Number("int"),
 * //                   },
 * //                   ImageInserter: {
 * //                     InsertableImages: [
 * //                       {
 * //                         Duration: Number("int"),
 * //                         FadeIn: Number("int"),
 * //                         FadeOut: Number("int"),
 * //                         Height: Number("int"),
 * //                         ImageInserterInput: "STRING_VALUE",
 * //                         ImageX: Number("int"),
 * //                         ImageY: Number("int"),
 * //                         Layer: Number("int"),
 * //                         Opacity: Number("int"),
 * //                         StartTime: "STRING_VALUE",
 * //                         Width: Number("int"),
 * //                       },
 * //                     ],
 * //                     SdrReferenceWhiteLevel: Number("int"),
 * //                   },
 * //                   NoiseReducer: { // NoiseReducer
 * //                     Filter: "BILATERAL" || "MEAN" || "GAUSSIAN" || "LANCZOS" || "SHARPEN" || "CONSERVE" || "SPATIAL" || "TEMPORAL",
 * //                     FilterSettings: { // NoiseReducerFilterSettings
 * //                       Strength: Number("int"),
 * //                     },
 * //                     SpatialFilterSettings: { // NoiseReducerSpatialFilterSettings
 * //                       PostFilterSharpenStrength: Number("int"),
 * //                       Speed: Number("int"),
 * //                       Strength: Number("int"),
 * //                     },
 * //                     TemporalFilterSettings: { // NoiseReducerTemporalFilterSettings
 * //                       AggressiveMode: Number("int"),
 * //                       PostTemporalSharpening: "DISABLED" || "ENABLED" || "AUTO",
 * //                       PostTemporalSharpeningStrength: "LOW" || "MEDIUM" || "HIGH",
 * //                       Speed: Number("int"),
 * //                       Strength: Number("int"),
 * //                     },
 * //                   },
 * //                   PartnerWatermarking: { // PartnerWatermarking
 * //                     NexguardFileMarkerSettings: { // NexGuardFileMarkerSettings
 * //                       License: "STRING_VALUE",
 * //                       Payload: Number("int"),
 * //                       Preset: "STRING_VALUE",
 * //                       Strength: "LIGHTEST" || "LIGHTER" || "DEFAULT" || "STRONGER" || "STRONGEST",
 * //                     },
 * //                   },
 * //                   TimecodeBurnin: { // TimecodeBurnin
 * //                     FontSize: Number("int"),
 * //                     Position: "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT" || "MIDDLE_LEFT" || "MIDDLE_CENTER" || "MIDDLE_RIGHT" || "BOTTOM_LEFT" || "BOTTOM_CENTER" || "BOTTOM_RIGHT",
 * //                     Prefix: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 Width: Number("int"),
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       TimecodeConfig: { // TimecodeConfig
 * //         Anchor: "STRING_VALUE",
 * //         Source: "EMBEDDED" || "ZEROBASED" || "SPECIFIEDSTART",
 * //         Start: "STRING_VALUE",
 * //         TimestampOffset: "STRING_VALUE",
 * //       },
 * //       TimedMetadataInsertion: { // TimedMetadataInsertion
 * //         Id3Insertions: [ // __listOfId3Insertion
 * //           { // Id3Insertion
 * //             Id3: "STRING_VALUE",
 * //             Timecode: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     SimulateReservedQueue: "DISABLED" || "ENABLED",
 * //     Status: "SUBMITTED" || "PROGRESSING" || "COMPLETE" || "CANCELED" || "ERROR",
 * //     StatusUpdateInterval: "SECONDS_10" || "SECONDS_12" || "SECONDS_15" || "SECONDS_20" || "SECONDS_30" || "SECONDS_60" || "SECONDS_120" || "SECONDS_180" || "SECONDS_240" || "SECONDS_300" || "SECONDS_360" || "SECONDS_420" || "SECONDS_480" || "SECONDS_540" || "SECONDS_600",
 * //     Timing: { // Timing
 * //       FinishTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //     },
 * //     UserMetadata: { // __mapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Warnings: [ // __listOfWarningGroup
 * //       { // WarningGroup
 * //         Code: Number("int"), // required
 * //         Count: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
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
 */
export class CreateJobCommand extends $Command<
  CreateJobCommandInput,
  CreateJobCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobCommandInput, CreateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "CreateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobCommandOutput> {
    return de_CreateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
