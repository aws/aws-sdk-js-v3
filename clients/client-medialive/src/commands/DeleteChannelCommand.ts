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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteChannelRequest, DeleteChannelResponse } from "../models/models_1";
import { de_DeleteChannelCommand, se_DeleteChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteChannelCommand}.
 */
export interface DeleteChannelCommandInput extends DeleteChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelCommand}.
 */
export interface DeleteChannelCommandOutput extends DeleteChannelResponse, __MetadataBearer {}

/**
 * @public
 * Starts deletion of channel. The associated outputs are also deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteChannelCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteChannelCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteChannelRequest
 *   ChannelId: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteChannelResponse
 * //   Arn: "STRING_VALUE",
 * //   CdiInputSpecification: { // CdiInputSpecification
 * //     Resolution: "SD" || "HD" || "FHD" || "UHD",
 * //   },
 * //   ChannelClass: "STANDARD" || "SINGLE_PIPELINE",
 * //   Destinations: [ // __listOfOutputDestination
 * //     { // OutputDestination
 * //       Id: "STRING_VALUE",
 * //       MediaPackageSettings: [ // __listOfMediaPackageOutputDestinationSettings
 * //         { // MediaPackageOutputDestinationSettings
 * //           ChannelId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MultiplexSettings: { // MultiplexProgramChannelDestinationSettings
 * //         MultiplexId: "STRING_VALUE",
 * //         ProgramName: "STRING_VALUE",
 * //       },
 * //       Settings: [ // __listOfOutputDestinationSettings
 * //         { // OutputDestinationSettings
 * //           PasswordParam: "STRING_VALUE",
 * //           StreamName: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //           Username: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   EgressEndpoints: [ // __listOfChannelEgressEndpoint
 * //     { // ChannelEgressEndpoint
 * //       SourceIp: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EncoderSettings: { // EncoderSettings
 * //     AudioDescriptions: [ // __listOfAudioDescription // required
 * //       { // AudioDescription
 * //         AudioNormalizationSettings: { // AudioNormalizationSettings
 * //           Algorithm: "ITU_1770_1" || "ITU_1770_2",
 * //           AlgorithmControl: "CORRECT_AUDIO",
 * //           TargetLkfs: Number("double"),
 * //         },
 * //         AudioSelectorName: "STRING_VALUE", // required
 * //         AudioType: "CLEAN_EFFECTS" || "HEARING_IMPAIRED" || "UNDEFINED" || "VISUAL_IMPAIRED_COMMENTARY",
 * //         AudioTypeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //         AudioWatermarkingSettings: { // AudioWatermarkSettings
 * //           NielsenWatermarksSettings: { // NielsenWatermarksSettings
 * //             NielsenCbetSettings: { // NielsenCBET
 * //               CbetCheckDigitString: "STRING_VALUE", // required
 * //               CbetStepaside: "DISABLED" || "ENABLED", // required
 * //               Csid: "STRING_VALUE", // required
 * //             },
 * //             NielsenDistributionType: "FINAL_DISTRIBUTOR" || "PROGRAM_CONTENT",
 * //             NielsenNaesIiNwSettings: { // NielsenNaesIiNw
 * //               CheckDigitString: "STRING_VALUE", // required
 * //               Sid: Number("double"), // required
 * //               Timezone: "AMERICA_PUERTO_RICO" || "US_ALASKA" || "US_ARIZONA" || "US_CENTRAL" || "US_EASTERN" || "US_HAWAII" || "US_MOUNTAIN" || "US_PACIFIC" || "US_SAMOA" || "UTC",
 * //             },
 * //           },
 * //         },
 * //         CodecSettings: { // AudioCodecSettings
 * //           AacSettings: { // AacSettings
 * //             Bitrate: Number("double"),
 * //             CodingMode: "AD_RECEIVER_MIX" || "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_5_1",
 * //             InputType: "BROADCASTER_MIXED_AD" || "NORMAL",
 * //             Profile: "HEV1" || "HEV2" || "LC",
 * //             RateControlMode: "CBR" || "VBR",
 * //             RawFormat: "LATM_LOAS" || "NONE",
 * //             SampleRate: Number("double"),
 * //             Spec: "MPEG2" || "MPEG4",
 * //             VbrQuality: "HIGH" || "LOW" || "MEDIUM_HIGH" || "MEDIUM_LOW",
 * //           },
 * //           Ac3Settings: { // Ac3Settings
 * //             Bitrate: Number("double"),
 * //             BitstreamMode: "COMMENTARY" || "COMPLETE_MAIN" || "DIALOGUE" || "EMERGENCY" || "HEARING_IMPAIRED" || "MUSIC_AND_EFFECTS" || "VISUALLY_IMPAIRED" || "VOICE_OVER",
 * //             CodingMode: "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_3_2_LFE",
 * //             Dialnorm: Number("int"),
 * //             DrcProfile: "FILM_STANDARD" || "NONE",
 * //             LfeFilter: "DISABLED" || "ENABLED",
 * //             MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //             AttenuationControl: "ATTENUATE_3_DB" || "NONE",
 * //           },
 * //           Eac3AtmosSettings: { // Eac3AtmosSettings
 * //             Bitrate: Number("double"),
 * //             CodingMode: "CODING_MODE_5_1_4" || "CODING_MODE_7_1_4" || "CODING_MODE_9_1_6",
 * //             Dialnorm: Number("int"),
 * //             DrcLine: "FILM_LIGHT" || "FILM_STANDARD" || "MUSIC_LIGHT" || "MUSIC_STANDARD" || "NONE" || "SPEECH",
 * //             DrcRf: "FILM_LIGHT" || "FILM_STANDARD" || "MUSIC_LIGHT" || "MUSIC_STANDARD" || "NONE" || "SPEECH",
 * //             HeightTrim: Number("double"),
 * //             SurroundTrim: Number("double"),
 * //           },
 * //           Eac3Settings: { // Eac3Settings
 * //             AttenuationControl: "ATTENUATE_3_DB" || "NONE",
 * //             Bitrate: Number("double"),
 * //             BitstreamMode: "COMMENTARY" || "COMPLETE_MAIN" || "EMERGENCY" || "HEARING_IMPAIRED" || "VISUALLY_IMPAIRED",
 * //             CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0" || "CODING_MODE_3_2",
 * //             DcFilter: "DISABLED" || "ENABLED",
 * //             Dialnorm: Number("int"),
 * //             DrcLine: "FILM_LIGHT" || "FILM_STANDARD" || "MUSIC_LIGHT" || "MUSIC_STANDARD" || "NONE" || "SPEECH",
 * //             DrcRf: "FILM_LIGHT" || "FILM_STANDARD" || "MUSIC_LIGHT" || "MUSIC_STANDARD" || "NONE" || "SPEECH",
 * //             LfeControl: "LFE" || "NO_LFE",
 * //             LfeFilter: "DISABLED" || "ENABLED",
 * //             LoRoCenterMixLevel: Number("double"),
 * //             LoRoSurroundMixLevel: Number("double"),
 * //             LtRtCenterMixLevel: Number("double"),
 * //             LtRtSurroundMixLevel: Number("double"),
 * //             MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //             PassthroughControl: "NO_PASSTHROUGH" || "WHEN_POSSIBLE",
 * //             PhaseControl: "NO_SHIFT" || "SHIFT_90_DEGREES",
 * //             StereoDownmix: "DPL2" || "LO_RO" || "LT_RT" || "NOT_INDICATED",
 * //             SurroundExMode: "DISABLED" || "ENABLED" || "NOT_INDICATED",
 * //             SurroundMode: "DISABLED" || "ENABLED" || "NOT_INDICATED",
 * //           },
 * //           Mp2Settings: { // Mp2Settings
 * //             Bitrate: Number("double"),
 * //             CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0",
 * //             SampleRate: Number("double"),
 * //           },
 * //           PassThroughSettings: {},
 * //           WavSettings: { // WavSettings
 * //             BitDepth: Number("double"),
 * //             CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0" || "CODING_MODE_4_0" || "CODING_MODE_8_0",
 * //             SampleRate: Number("double"),
 * //           },
 * //         },
 * //         LanguageCode: "STRING_VALUE",
 * //         LanguageCodeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 * //         Name: "STRING_VALUE", // required
 * //         RemixSettings: { // RemixSettings
 * //           ChannelMappings: [ // __listOfAudioChannelMapping // required
 * //             { // AudioChannelMapping
 * //               InputChannelLevels: [ // __listOfInputChannelLevel // required
 * //                 { // InputChannelLevel
 * //                   Gain: Number("int"), // required
 * //                   InputChannel: Number("int"), // required
 * //                 },
 * //               ],
 * //               OutputChannel: Number("int"), // required
 * //             },
 * //           ],
 * //           ChannelsIn: Number("int"),
 * //           ChannelsOut: Number("int"),
 * //         },
 * //         StreamName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AvailBlanking: { // AvailBlanking
 * //       AvailBlankingImage: { // InputLocation
 * //         PasswordParam: "STRING_VALUE",
 * //         Uri: "STRING_VALUE", // required
 * //         Username: "STRING_VALUE",
 * //       },
 * //       State: "DISABLED" || "ENABLED",
 * //     },
 * //     AvailConfiguration: { // AvailConfiguration
 * //       AvailSettings: { // AvailSettings
 * //         Esam: { // Esam
 * //           AcquisitionPointId: "STRING_VALUE", // required
 * //           AdAvailOffset: Number("int"),
 * //           PasswordParam: "STRING_VALUE",
 * //           PoisEndpoint: "STRING_VALUE", // required
 * //           Username: "STRING_VALUE",
 * //           ZoneIdentity: "STRING_VALUE",
 * //         },
 * //         Scte35SpliceInsert: { // Scte35SpliceInsert
 * //           AdAvailOffset: Number("int"),
 * //           NoRegionalBlackoutFlag: "FOLLOW" || "IGNORE",
 * //           WebDeliveryAllowedFlag: "FOLLOW" || "IGNORE",
 * //         },
 * //         Scte35TimeSignalApos: { // Scte35TimeSignalApos
 * //           AdAvailOffset: Number("int"),
 * //           NoRegionalBlackoutFlag: "FOLLOW" || "IGNORE",
 * //           WebDeliveryAllowedFlag: "FOLLOW" || "IGNORE",
 * //         },
 * //       },
 * //     },
 * //     BlackoutSlate: { // BlackoutSlate
 * //       BlackoutSlateImage: {
 * //         PasswordParam: "STRING_VALUE",
 * //         Uri: "STRING_VALUE", // required
 * //         Username: "STRING_VALUE",
 * //       },
 * //       NetworkEndBlackout: "DISABLED" || "ENABLED",
 * //       NetworkEndBlackoutImage: {
 * //         PasswordParam: "STRING_VALUE",
 * //         Uri: "STRING_VALUE", // required
 * //         Username: "STRING_VALUE",
 * //       },
 * //       NetworkId: "STRING_VALUE",
 * //       State: "DISABLED" || "ENABLED",
 * //     },
 * //     CaptionDescriptions: [ // __listOfCaptionDescription
 * //       { // CaptionDescription
 * //         Accessibility: "DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES" || "IMPLEMENTS_ACCESSIBILITY_FEATURES",
 * //         CaptionSelectorName: "STRING_VALUE", // required
 * //         DestinationSettings: { // CaptionDestinationSettings
 * //           AribDestinationSettings: {},
 * //           BurnInDestinationSettings: { // BurnInDestinationSettings
 * //             Alignment: "CENTERED" || "LEFT" || "SMART",
 * //             BackgroundColor: "BLACK" || "NONE" || "WHITE",
 * //             BackgroundOpacity: Number("int"),
 * //             Font: {
 * //               PasswordParam: "STRING_VALUE",
 * //               Uri: "STRING_VALUE", // required
 * //               Username: "STRING_VALUE",
 * //             },
 * //             FontColor: "BLACK" || "BLUE" || "GREEN" || "RED" || "WHITE" || "YELLOW",
 * //             FontOpacity: Number("int"),
 * //             FontResolution: Number("int"),
 * //             FontSize: "STRING_VALUE",
 * //             OutlineColor: "BLACK" || "BLUE" || "GREEN" || "RED" || "WHITE" || "YELLOW",
 * //             OutlineSize: Number("int"),
 * //             ShadowColor: "BLACK" || "NONE" || "WHITE",
 * //             ShadowOpacity: Number("int"),
 * //             ShadowXOffset: Number("int"),
 * //             ShadowYOffset: Number("int"),
 * //             TeletextGridControl: "FIXED" || "SCALED",
 * //             XPosition: Number("int"),
 * //             YPosition: Number("int"),
 * //           },
 * //           DvbSubDestinationSettings: { // DvbSubDestinationSettings
 * //             Alignment: "CENTERED" || "LEFT" || "SMART",
 * //             BackgroundColor: "BLACK" || "NONE" || "WHITE",
 * //             BackgroundOpacity: Number("int"),
 * //             Font: {
 * //               PasswordParam: "STRING_VALUE",
 * //               Uri: "STRING_VALUE", // required
 * //               Username: "STRING_VALUE",
 * //             },
 * //             FontColor: "BLACK" || "BLUE" || "GREEN" || "RED" || "WHITE" || "YELLOW",
 * //             FontOpacity: Number("int"),
 * //             FontResolution: Number("int"),
 * //             FontSize: "STRING_VALUE",
 * //             OutlineColor: "BLACK" || "BLUE" || "GREEN" || "RED" || "WHITE" || "YELLOW",
 * //             OutlineSize: Number("int"),
 * //             ShadowColor: "BLACK" || "NONE" || "WHITE",
 * //             ShadowOpacity: Number("int"),
 * //             ShadowXOffset: Number("int"),
 * //             ShadowYOffset: Number("int"),
 * //             TeletextGridControl: "FIXED" || "SCALED",
 * //             XPosition: Number("int"),
 * //             YPosition: Number("int"),
 * //           },
 * //           EbuTtDDestinationSettings: { // EbuTtDDestinationSettings
 * //             CopyrightHolder: "STRING_VALUE",
 * //             FillLineGap: "DISABLED" || "ENABLED",
 * //             FontFamily: "STRING_VALUE",
 * //             StyleControl: "EXCLUDE" || "INCLUDE",
 * //           },
 * //           EmbeddedDestinationSettings: {},
 * //           EmbeddedPlusScte20DestinationSettings: {},
 * //           RtmpCaptionInfoDestinationSettings: {},
 * //           Scte20PlusEmbeddedDestinationSettings: {},
 * //           Scte27DestinationSettings: {},
 * //           SmpteTtDestinationSettings: {},
 * //           TeletextDestinationSettings: {},
 * //           TtmlDestinationSettings: { // TtmlDestinationSettings
 * //             StyleControl: "PASSTHROUGH" || "USE_CONFIGURED",
 * //           },
 * //           WebvttDestinationSettings: { // WebvttDestinationSettings
 * //             StyleControl: "NO_STYLE_DATA" || "PASSTHROUGH",
 * //           },
 * //         },
 * //         LanguageCode: "STRING_VALUE",
 * //         LanguageDescription: "STRING_VALUE",
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     FeatureActivations: { // FeatureActivations
 * //       InputPrepareScheduleActions: "DISABLED" || "ENABLED",
 * //     },
 * //     GlobalConfiguration: { // GlobalConfiguration
 * //       InitialAudioGain: Number("int"),
 * //       InputEndAction: "NONE" || "SWITCH_AND_LOOP_INPUTS",
 * //       InputLossBehavior: { // InputLossBehavior
 * //         BlackFrameMsec: Number("int"),
 * //         InputLossImageColor: "STRING_VALUE",
 * //         InputLossImageSlate: "<InputLocation>",
 * //         InputLossImageType: "COLOR" || "SLATE",
 * //         RepeatFrameMsec: Number("int"),
 * //       },
 * //       OutputLockingMode: "EPOCH_LOCKING" || "PIPELINE_LOCKING",
 * //       OutputTimingSource: "INPUT_CLOCK" || "SYSTEM_CLOCK",
 * //       SupportLowFramerateInputs: "DISABLED" || "ENABLED",
 * //       OutputLockingSettings: { // OutputLockingSettings
 * //         EpochLockingSettings: { // EpochLockingSettings
 * //           CustomEpoch: "STRING_VALUE",
 * //           JamSyncTime: "STRING_VALUE",
 * //         },
 * //         PipelineLockingSettings: {},
 * //       },
 * //     },
 * //     MotionGraphicsConfiguration: { // MotionGraphicsConfiguration
 * //       MotionGraphicsInsertion: "DISABLED" || "ENABLED",
 * //       MotionGraphicsSettings: { // MotionGraphicsSettings
 * //         HtmlMotionGraphicsSettings: {},
 * //       },
 * //     },
 * //     NielsenConfiguration: { // NielsenConfiguration
 * //       DistributorId: "STRING_VALUE",
 * //       NielsenPcmToId3Tagging: "DISABLED" || "ENABLED",
 * //     },
 * //     OutputGroups: [ // __listOfOutputGroup // required
 * //       { // OutputGroup
 * //         Name: "STRING_VALUE",
 * //         OutputGroupSettings: { // OutputGroupSettings
 * //           ArchiveGroupSettings: { // ArchiveGroupSettings
 * //             ArchiveCdnSettings: { // ArchiveCdnSettings
 * //               ArchiveS3Settings: { // ArchiveS3Settings
 * //                 CannedAcl: "AUTHENTICATED_READ" || "BUCKET_OWNER_FULL_CONTROL" || "BUCKET_OWNER_READ" || "PUBLIC_READ",
 * //               },
 * //             },
 * //             Destination: { // OutputLocationRef
 * //               DestinationRefId: "STRING_VALUE",
 * //             },
 * //             RolloverInterval: Number("int"),
 * //           },
 * //           FrameCaptureGroupSettings: { // FrameCaptureGroupSettings
 * //             Destination: {
 * //               DestinationRefId: "STRING_VALUE",
 * //             },
 * //             FrameCaptureCdnSettings: { // FrameCaptureCdnSettings
 * //               FrameCaptureS3Settings: { // FrameCaptureS3Settings
 * //                 CannedAcl: "AUTHENTICATED_READ" || "BUCKET_OWNER_FULL_CONTROL" || "BUCKET_OWNER_READ" || "PUBLIC_READ",
 * //               },
 * //             },
 * //           },
 * //           HlsGroupSettings: { // HlsGroupSettings
 * //             AdMarkers: [ // __listOfHlsAdMarkers
 * //               "ADOBE" || "ELEMENTAL" || "ELEMENTAL_SCTE35",
 * //             ],
 * //             BaseUrlContent: "STRING_VALUE",
 * //             BaseUrlContent1: "STRING_VALUE",
 * //             BaseUrlManifest: "STRING_VALUE",
 * //             BaseUrlManifest1: "STRING_VALUE",
 * //             CaptionLanguageMappings: [ // __listOfCaptionLanguageMapping
 * //               { // CaptionLanguageMapping
 * //                 CaptionChannel: Number("int"), // required
 * //                 LanguageCode: "STRING_VALUE", // required
 * //                 LanguageDescription: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             CaptionLanguageSetting: "INSERT" || "NONE" || "OMIT",
 * //             ClientCache: "DISABLED" || "ENABLED",
 * //             CodecSpecification: "RFC_4281" || "RFC_6381",
 * //             ConstantIv: "STRING_VALUE",
 * //             Destination: {
 * //               DestinationRefId: "STRING_VALUE",
 * //             },
 * //             DirectoryStructure: "SINGLE_DIRECTORY" || "SUBDIRECTORY_PER_STREAM",
 * //             DiscontinuityTags: "INSERT" || "NEVER_INSERT",
 * //             EncryptionType: "AES128" || "SAMPLE_AES",
 * //             HlsCdnSettings: { // HlsCdnSettings
 * //               HlsAkamaiSettings: { // HlsAkamaiSettings
 * //                 ConnectionRetryInterval: Number("int"),
 * //                 FilecacheDuration: Number("int"),
 * //                 HttpTransferMode: "CHUNKED" || "NON_CHUNKED",
 * //                 NumRetries: Number("int"),
 * //                 RestartDelay: Number("int"),
 * //                 Salt: "STRING_VALUE",
 * //                 Token: "STRING_VALUE",
 * //               },
 * //               HlsBasicPutSettings: { // HlsBasicPutSettings
 * //                 ConnectionRetryInterval: Number("int"),
 * //                 FilecacheDuration: Number("int"),
 * //                 NumRetries: Number("int"),
 * //                 RestartDelay: Number("int"),
 * //               },
 * //               HlsMediaStoreSettings: { // HlsMediaStoreSettings
 * //                 ConnectionRetryInterval: Number("int"),
 * //                 FilecacheDuration: Number("int"),
 * //                 MediaStoreStorageClass: "TEMPORAL",
 * //                 NumRetries: Number("int"),
 * //                 RestartDelay: Number("int"),
 * //               },
 * //               HlsS3Settings: { // HlsS3Settings
 * //                 CannedAcl: "AUTHENTICATED_READ" || "BUCKET_OWNER_FULL_CONTROL" || "BUCKET_OWNER_READ" || "PUBLIC_READ",
 * //               },
 * //               HlsWebdavSettings: { // HlsWebdavSettings
 * //                 ConnectionRetryInterval: Number("int"),
 * //                 FilecacheDuration: Number("int"),
 * //                 HttpTransferMode: "CHUNKED" || "NON_CHUNKED",
 * //                 NumRetries: Number("int"),
 * //                 RestartDelay: Number("int"),
 * //               },
 * //             },
 * //             HlsId3SegmentTagging: "DISABLED" || "ENABLED",
 * //             IFrameOnlyPlaylists: "DISABLED" || "STANDARD",
 * //             IncompleteSegmentBehavior: "AUTO" || "SUPPRESS",
 * //             IndexNSegments: Number("int"),
 * //             InputLossAction: "EMIT_OUTPUT" || "PAUSE_OUTPUT",
 * //             IvInManifest: "EXCLUDE" || "INCLUDE",
 * //             IvSource: "EXPLICIT" || "FOLLOWS_SEGMENT_NUMBER",
 * //             KeepSegments: Number("int"),
 * //             KeyFormat: "STRING_VALUE",
 * //             KeyFormatVersions: "STRING_VALUE",
 * //             KeyProviderSettings: { // KeyProviderSettings
 * //               StaticKeySettings: { // StaticKeySettings
 * //                 KeyProviderServer: "<InputLocation>",
 * //                 StaticKeyValue: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             ManifestCompression: "GZIP" || "NONE",
 * //             ManifestDurationFormat: "FLOATING_POINT" || "INTEGER",
 * //             MinSegmentLength: Number("int"),
 * //             Mode: "LIVE" || "VOD",
 * //             OutputSelection: "MANIFESTS_AND_SEGMENTS" || "SEGMENTS_ONLY" || "VARIANT_MANIFESTS_AND_SEGMENTS",
 * //             ProgramDateTime: "EXCLUDE" || "INCLUDE",
 * //             ProgramDateTimeClock: "INITIALIZE_FROM_OUTPUT_TIMECODE" || "SYSTEM_CLOCK",
 * //             ProgramDateTimePeriod: Number("int"),
 * //             RedundantManifest: "DISABLED" || "ENABLED",
 * //             SegmentLength: Number("int"),
 * //             SegmentationMode: "USE_INPUT_SEGMENTATION" || "USE_SEGMENT_DURATION",
 * //             SegmentsPerSubdirectory: Number("int"),
 * //             StreamInfResolution: "EXCLUDE" || "INCLUDE",
 * //             TimedMetadataId3Frame: "NONE" || "PRIV" || "TDRL",
 * //             TimedMetadataId3Period: Number("int"),
 * //             TimestampDeltaMilliseconds: Number("int"),
 * //             TsFileMode: "SEGMENTED_FILES" || "SINGLE_FILE",
 * //           },
 * //           MediaPackageGroupSettings: { // MediaPackageGroupSettings
 * //             Destination: {
 * //               DestinationRefId: "STRING_VALUE",
 * //             },
 * //           },
 * //           MsSmoothGroupSettings: { // MsSmoothGroupSettings
 * //             AcquisitionPointId: "STRING_VALUE",
 * //             AudioOnlyTimecodeControl: "PASSTHROUGH" || "USE_CONFIGURED_CLOCK",
 * //             CertificateMode: "SELF_SIGNED" || "VERIFY_AUTHENTICITY",
 * //             ConnectionRetryInterval: Number("int"),
 * //             Destination: {
 * //               DestinationRefId: "STRING_VALUE",
 * //             },
 * //             EventId: "STRING_VALUE",
 * //             EventIdMode: "NO_EVENT_ID" || "USE_CONFIGURED" || "USE_TIMESTAMP",
 * //             EventStopBehavior: "NONE" || "SEND_EOS",
 * //             FilecacheDuration: Number("int"),
 * //             FragmentLength: Number("int"),
 * //             InputLossAction: "EMIT_OUTPUT" || "PAUSE_OUTPUT",
 * //             NumRetries: Number("int"),
 * //             RestartDelay: Number("int"),
 * //             SegmentationMode: "USE_INPUT_SEGMENTATION" || "USE_SEGMENT_DURATION",
 * //             SendDelayMs: Number("int"),
 * //             SparseTrackType: "NONE" || "SCTE_35" || "SCTE_35_WITHOUT_SEGMENTATION",
 * //             StreamManifestBehavior: "DO_NOT_SEND" || "SEND",
 * //             TimestampOffset: "STRING_VALUE",
 * //             TimestampOffsetMode: "USE_CONFIGURED_OFFSET" || "USE_EVENT_START_DATE",
 * //           },
 * //           MultiplexGroupSettings: {},
 * //           RtmpGroupSettings: { // RtmpGroupSettings
 * //             AdMarkers: [ // __listOfRtmpAdMarkers
 * //               "ON_CUE_POINT_SCTE35",
 * //             ],
 * //             AuthenticationScheme: "AKAMAI" || "COMMON",
 * //             CacheFullBehavior: "DISCONNECT_IMMEDIATELY" || "WAIT_FOR_SERVER",
 * //             CacheLength: Number("int"),
 * //             CaptionData: "ALL" || "FIELD1_608" || "FIELD1_AND_FIELD2_608",
 * //             InputLossAction: "EMIT_OUTPUT" || "PAUSE_OUTPUT",
 * //             RestartDelay: Number("int"),
 * //             IncludeFillerNalUnits: "AUTO" || "DROP" || "INCLUDE",
 * //           },
 * //           UdpGroupSettings: { // UdpGroupSettings
 * //             InputLossAction: "DROP_PROGRAM" || "DROP_TS" || "EMIT_PROGRAM",
 * //             TimedMetadataId3Frame: "NONE" || "PRIV" || "TDRL",
 * //             TimedMetadataId3Period: Number("int"),
 * //           },
 * //         },
 * //         Outputs: [ // __listOfOutput // required
 * //           { // Output
 * //             AudioDescriptionNames: [ // __listOf__string
 * //               "STRING_VALUE",
 * //             ],
 * //             CaptionDescriptionNames: [
 * //               "STRING_VALUE",
 * //             ],
 * //             OutputName: "STRING_VALUE",
 * //             OutputSettings: { // OutputSettings
 * //               ArchiveOutputSettings: { // ArchiveOutputSettings
 * //                 ContainerSettings: { // ArchiveContainerSettings
 * //                   M2tsSettings: { // M2tsSettings
 * //                     AbsentInputAudioBehavior: "DROP" || "ENCODE_SILENCE",
 * //                     Arib: "DISABLED" || "ENABLED",
 * //                     AribCaptionsPid: "STRING_VALUE",
 * //                     AribCaptionsPidControl: "AUTO" || "USE_CONFIGURED",
 * //                     AudioBufferModel: "ATSC" || "DVB",
 * //                     AudioFramesPerPes: Number("int"),
 * //                     AudioPids: "STRING_VALUE",
 * //                     AudioStreamType: "ATSC" || "DVB",
 * //                     Bitrate: Number("int"),
 * //                     BufferModel: "MULTIPLEX" || "NONE",
 * //                     CcDescriptor: "DISABLED" || "ENABLED",
 * //                     DvbNitSettings: { // DvbNitSettings
 * //                       NetworkId: Number("int"), // required
 * //                       NetworkName: "STRING_VALUE", // required
 * //                       RepInterval: Number("int"),
 * //                     },
 * //                     DvbSdtSettings: { // DvbSdtSettings
 * //                       OutputSdt: "SDT_FOLLOW" || "SDT_FOLLOW_IF_PRESENT" || "SDT_MANUAL" || "SDT_NONE",
 * //                       RepInterval: Number("int"),
 * //                       ServiceName: "STRING_VALUE",
 * //                       ServiceProviderName: "STRING_VALUE",
 * //                     },
 * //                     DvbSubPids: "STRING_VALUE",
 * //                     DvbTdtSettings: { // DvbTdtSettings
 * //                       RepInterval: Number("int"),
 * //                     },
 * //                     DvbTeletextPid: "STRING_VALUE",
 * //                     Ebif: "NONE" || "PASSTHROUGH",
 * //                     EbpAudioInterval: "VIDEO_AND_FIXED_INTERVALS" || "VIDEO_INTERVAL",
 * //                     EbpLookaheadMs: Number("int"),
 * //                     EbpPlacement: "VIDEO_AND_AUDIO_PIDS" || "VIDEO_PID",
 * //                     EcmPid: "STRING_VALUE",
 * //                     EsRateInPes: "EXCLUDE" || "INCLUDE",
 * //                     EtvPlatformPid: "STRING_VALUE",
 * //                     EtvSignalPid: "STRING_VALUE",
 * //                     FragmentTime: Number("double"),
 * //                     Klv: "NONE" || "PASSTHROUGH",
 * //                     KlvDataPids: "STRING_VALUE",
 * //                     NielsenId3Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                     NullPacketBitrate: Number("double"),
 * //                     PatInterval: Number("int"),
 * //                     PcrControl: "CONFIGURED_PCR_PERIOD" || "PCR_EVERY_PES_PACKET",
 * //                     PcrPeriod: Number("int"),
 * //                     PcrPid: "STRING_VALUE",
 * //                     PmtInterval: Number("int"),
 * //                     PmtPid: "STRING_VALUE",
 * //                     ProgramNum: Number("int"),
 * //                     RateMode: "CBR" || "VBR",
 * //                     Scte27Pids: "STRING_VALUE",
 * //                     Scte35Control: "NONE" || "PASSTHROUGH",
 * //                     Scte35Pid: "STRING_VALUE",
 * //                     SegmentationMarkers: "EBP" || "EBP_LEGACY" || "NONE" || "PSI_SEGSTART" || "RAI_ADAPT" || "RAI_SEGSTART",
 * //                     SegmentationStyle: "MAINTAIN_CADENCE" || "RESET_CADENCE",
 * //                     SegmentationTime: Number("double"),
 * //                     TimedMetadataBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                     TimedMetadataPid: "STRING_VALUE",
 * //                     TransportStreamId: Number("int"),
 * //                     VideoPid: "STRING_VALUE",
 * //                     Scte35PrerollPullupMilliseconds: Number("double"),
 * //                   },
 * //                   RawSettings: {},
 * //                 },
 * //                 Extension: "STRING_VALUE",
 * //                 NameModifier: "STRING_VALUE",
 * //               },
 * //               FrameCaptureOutputSettings: { // FrameCaptureOutputSettings
 * //                 NameModifier: "STRING_VALUE",
 * //               },
 * //               HlsOutputSettings: { // HlsOutputSettings
 * //                 H265PackagingType: "HEV1" || "HVC1",
 * //                 HlsSettings: { // HlsSettings
 * //                   AudioOnlyHlsSettings: { // AudioOnlyHlsSettings
 * //                     AudioGroupId: "STRING_VALUE",
 * //                     AudioOnlyImage: "<InputLocation>",
 * //                     AudioTrackType: "ALTERNATE_AUDIO_AUTO_SELECT" || "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT" || "ALTERNATE_AUDIO_NOT_AUTO_SELECT" || "AUDIO_ONLY_VARIANT_STREAM",
 * //                     SegmentType: "AAC" || "FMP4",
 * //                   },
 * //                   Fmp4HlsSettings: { // Fmp4HlsSettings
 * //                     AudioRenditionSets: "STRING_VALUE",
 * //                     NielsenId3Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                     TimedMetadataBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                   },
 * //                   FrameCaptureHlsSettings: {},
 * //                   StandardHlsSettings: { // StandardHlsSettings
 * //                     AudioRenditionSets: "STRING_VALUE",
 * //                     M3u8Settings: { // M3u8Settings
 * //                       AudioFramesPerPes: Number("int"),
 * //                       AudioPids: "STRING_VALUE",
 * //                       EcmPid: "STRING_VALUE",
 * //                       NielsenId3Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                       PatInterval: Number("int"),
 * //                       PcrControl: "CONFIGURED_PCR_PERIOD" || "PCR_EVERY_PES_PACKET",
 * //                       PcrPeriod: Number("int"),
 * //                       PcrPid: "STRING_VALUE",
 * //                       PmtInterval: Number("int"),
 * //                       PmtPid: "STRING_VALUE",
 * //                       ProgramNum: Number("int"),
 * //                       Scte35Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                       Scte35Pid: "STRING_VALUE",
 * //                       TimedMetadataBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                       TimedMetadataPid: "STRING_VALUE",
 * //                       TransportStreamId: Number("int"),
 * //                       VideoPid: "STRING_VALUE",
 * //                       KlvBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                       KlvDataPids: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //                 NameModifier: "STRING_VALUE",
 * //                 SegmentModifier: "STRING_VALUE",
 * //               },
 * //               MediaPackageOutputSettings: {},
 * //               MsSmoothOutputSettings: { // MsSmoothOutputSettings
 * //                 H265PackagingType: "HEV1" || "HVC1",
 * //                 NameModifier: "STRING_VALUE",
 * //               },
 * //               MultiplexOutputSettings: { // MultiplexOutputSettings
 * //                 Destination: "<OutputLocationRef>", // required
 * //               },
 * //               RtmpOutputSettings: { // RtmpOutputSettings
 * //                 CertificateMode: "SELF_SIGNED" || "VERIFY_AUTHENTICITY",
 * //                 ConnectionRetryInterval: Number("int"),
 * //                 Destination: "<OutputLocationRef>", // required
 * //                 NumRetries: Number("int"),
 * //               },
 * //               UdpOutputSettings: { // UdpOutputSettings
 * //                 BufferMsec: Number("int"),
 * //                 ContainerSettings: { // UdpContainerSettings
 * //                   M2tsSettings: {
 * //                     AbsentInputAudioBehavior: "DROP" || "ENCODE_SILENCE",
 * //                     Arib: "DISABLED" || "ENABLED",
 * //                     AribCaptionsPid: "STRING_VALUE",
 * //                     AribCaptionsPidControl: "AUTO" || "USE_CONFIGURED",
 * //                     AudioBufferModel: "ATSC" || "DVB",
 * //                     AudioFramesPerPes: Number("int"),
 * //                     AudioPids: "STRING_VALUE",
 * //                     AudioStreamType: "ATSC" || "DVB",
 * //                     Bitrate: Number("int"),
 * //                     BufferModel: "MULTIPLEX" || "NONE",
 * //                     CcDescriptor: "DISABLED" || "ENABLED",
 * //                     DvbNitSettings: {
 * //                       NetworkId: Number("int"), // required
 * //                       NetworkName: "STRING_VALUE", // required
 * //                       RepInterval: Number("int"),
 * //                     },
 * //                     DvbSdtSettings: {
 * //                       OutputSdt: "SDT_FOLLOW" || "SDT_FOLLOW_IF_PRESENT" || "SDT_MANUAL" || "SDT_NONE",
 * //                       RepInterval: Number("int"),
 * //                       ServiceName: "STRING_VALUE",
 * //                       ServiceProviderName: "STRING_VALUE",
 * //                     },
 * //                     DvbSubPids: "STRING_VALUE",
 * //                     DvbTdtSettings: {
 * //                       RepInterval: Number("int"),
 * //                     },
 * //                     DvbTeletextPid: "STRING_VALUE",
 * //                     Ebif: "NONE" || "PASSTHROUGH",
 * //                     EbpAudioInterval: "VIDEO_AND_FIXED_INTERVALS" || "VIDEO_INTERVAL",
 * //                     EbpLookaheadMs: Number("int"),
 * //                     EbpPlacement: "VIDEO_AND_AUDIO_PIDS" || "VIDEO_PID",
 * //                     EcmPid: "STRING_VALUE",
 * //                     EsRateInPes: "EXCLUDE" || "INCLUDE",
 * //                     EtvPlatformPid: "STRING_VALUE",
 * //                     EtvSignalPid: "STRING_VALUE",
 * //                     FragmentTime: Number("double"),
 * //                     Klv: "NONE" || "PASSTHROUGH",
 * //                     KlvDataPids: "STRING_VALUE",
 * //                     NielsenId3Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                     NullPacketBitrate: Number("double"),
 * //                     PatInterval: Number("int"),
 * //                     PcrControl: "CONFIGURED_PCR_PERIOD" || "PCR_EVERY_PES_PACKET",
 * //                     PcrPeriod: Number("int"),
 * //                     PcrPid: "STRING_VALUE",
 * //                     PmtInterval: Number("int"),
 * //                     PmtPid: "STRING_VALUE",
 * //                     ProgramNum: Number("int"),
 * //                     RateMode: "CBR" || "VBR",
 * //                     Scte27Pids: "STRING_VALUE",
 * //                     Scte35Control: "NONE" || "PASSTHROUGH",
 * //                     Scte35Pid: "STRING_VALUE",
 * //                     SegmentationMarkers: "EBP" || "EBP_LEGACY" || "NONE" || "PSI_SEGSTART" || "RAI_ADAPT" || "RAI_SEGSTART",
 * //                     SegmentationStyle: "MAINTAIN_CADENCE" || "RESET_CADENCE",
 * //                     SegmentationTime: Number("double"),
 * //                     TimedMetadataBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 * //                     TimedMetadataPid: "STRING_VALUE",
 * //                     TransportStreamId: Number("int"),
 * //                     VideoPid: "STRING_VALUE",
 * //                     Scte35PrerollPullupMilliseconds: Number("double"),
 * //                   },
 * //                 },
 * //                 Destination: "<OutputLocationRef>", // required
 * //                 FecOutputSettings: { // FecOutputSettings
 * //                   ColumnDepth: Number("int"),
 * //                   IncludeFec: "COLUMN" || "COLUMN_AND_ROW",
 * //                   RowLength: Number("int"),
 * //                 },
 * //               },
 * //             },
 * //             VideoDescriptionName: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     TimecodeConfig: { // TimecodeConfig
 * //       Source: "EMBEDDED" || "SYSTEMCLOCK" || "ZEROBASED", // required
 * //       SyncThreshold: Number("int"),
 * //     },
 * //     VideoDescriptions: [ // __listOfVideoDescription // required
 * //       { // VideoDescription
 * //         CodecSettings: { // VideoCodecSettings
 * //           FrameCaptureSettings: { // FrameCaptureSettings
 * //             CaptureInterval: Number("int"),
 * //             CaptureIntervalUnits: "MILLISECONDS" || "SECONDS",
 * //             TimecodeBurninSettings: { // TimecodeBurninSettings
 * //               FontSize: "EXTRA_SMALL_10" || "LARGE_48" || "MEDIUM_32" || "SMALL_16", // required
 * //               Position: "BOTTOM_CENTER" || "BOTTOM_LEFT" || "BOTTOM_RIGHT" || "MIDDLE_CENTER" || "MIDDLE_LEFT" || "MIDDLE_RIGHT" || "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT", // required
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //           H264Settings: { // H264Settings
 * //             AdaptiveQuantization: "AUTO" || "HIGH" || "HIGHER" || "LOW" || "MAX" || "MEDIUM" || "OFF",
 * //             AfdSignaling: "AUTO" || "FIXED" || "NONE",
 * //             Bitrate: Number("int"),
 * //             BufFillPct: Number("int"),
 * //             BufSize: Number("int"),
 * //             ColorMetadata: "IGNORE" || "INSERT",
 * //             ColorSpaceSettings: { // H264ColorSpaceSettings
 * //               ColorSpacePassthroughSettings: {},
 * //               Rec601Settings: {},
 * //               Rec709Settings: {},
 * //             },
 * //             EntropyEncoding: "CABAC" || "CAVLC",
 * //             FilterSettings: { // H264FilterSettings
 * //               TemporalFilterSettings: { // TemporalFilterSettings
 * //                 PostFilterSharpening: "AUTO" || "DISABLED" || "ENABLED",
 * //                 Strength: "AUTO" || "STRENGTH_1" || "STRENGTH_2" || "STRENGTH_3" || "STRENGTH_4" || "STRENGTH_5" || "STRENGTH_6" || "STRENGTH_7" || "STRENGTH_8" || "STRENGTH_9" || "STRENGTH_10" || "STRENGTH_11" || "STRENGTH_12" || "STRENGTH_13" || "STRENGTH_14" || "STRENGTH_15" || "STRENGTH_16",
 * //               },
 * //             },
 * //             FixedAfd: "AFD_0000" || "AFD_0010" || "AFD_0011" || "AFD_0100" || "AFD_1000" || "AFD_1001" || "AFD_1010" || "AFD_1011" || "AFD_1101" || "AFD_1110" || "AFD_1111",
 * //             FlickerAq: "DISABLED" || "ENABLED",
 * //             ForceFieldPictures: "DISABLED" || "ENABLED",
 * //             FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //             FramerateDenominator: Number("int"),
 * //             FramerateNumerator: Number("int"),
 * //             GopBReference: "DISABLED" || "ENABLED",
 * //             GopClosedCadence: Number("int"),
 * //             GopNumBFrames: Number("int"),
 * //             GopSize: Number("double"),
 * //             GopSizeUnits: "FRAMES" || "SECONDS",
 * //             Level: "H264_LEVEL_1" || "H264_LEVEL_1_1" || "H264_LEVEL_1_2" || "H264_LEVEL_1_3" || "H264_LEVEL_2" || "H264_LEVEL_2_1" || "H264_LEVEL_2_2" || "H264_LEVEL_3" || "H264_LEVEL_3_1" || "H264_LEVEL_3_2" || "H264_LEVEL_4" || "H264_LEVEL_4_1" || "H264_LEVEL_4_2" || "H264_LEVEL_5" || "H264_LEVEL_5_1" || "H264_LEVEL_5_2" || "H264_LEVEL_AUTO",
 * //             LookAheadRateControl: "HIGH" || "LOW" || "MEDIUM",
 * //             MaxBitrate: Number("int"),
 * //             MinIInterval: Number("int"),
 * //             NumRefFrames: Number("int"),
 * //             ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 * //             ParDenominator: Number("int"),
 * //             ParNumerator: Number("int"),
 * //             Profile: "BASELINE" || "HIGH" || "HIGH_10BIT" || "HIGH_422" || "HIGH_422_10BIT" || "MAIN",
 * //             QualityLevel: "ENHANCED_QUALITY" || "STANDARD_QUALITY",
 * //             QvbrQualityLevel: Number("int"),
 * //             RateControlMode: "CBR" || "MULTIPLEX" || "QVBR" || "VBR",
 * //             ScanType: "INTERLACED" || "PROGRESSIVE",
 * //             SceneChangeDetect: "DISABLED" || "ENABLED",
 * //             Slices: Number("int"),
 * //             Softness: Number("int"),
 * //             SpatialAq: "DISABLED" || "ENABLED",
 * //             SubgopLength: "DYNAMIC" || "FIXED",
 * //             Syntax: "DEFAULT" || "RP2027",
 * //             TemporalAq: "DISABLED" || "ENABLED",
 * //             TimecodeInsertion: "DISABLED" || "PIC_TIMING_SEI",
 * //             TimecodeBurninSettings: {
 * //               FontSize: "EXTRA_SMALL_10" || "LARGE_48" || "MEDIUM_32" || "SMALL_16", // required
 * //               Position: "BOTTOM_CENTER" || "BOTTOM_LEFT" || "BOTTOM_RIGHT" || "MIDDLE_CENTER" || "MIDDLE_LEFT" || "MIDDLE_RIGHT" || "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT", // required
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //           H265Settings: { // H265Settings
 * //             AdaptiveQuantization: "AUTO" || "HIGH" || "HIGHER" || "LOW" || "MAX" || "MEDIUM" || "OFF",
 * //             AfdSignaling: "AUTO" || "FIXED" || "NONE",
 * //             AlternativeTransferFunction: "INSERT" || "OMIT",
 * //             Bitrate: Number("int"),
 * //             BufSize: Number("int"),
 * //             ColorMetadata: "IGNORE" || "INSERT",
 * //             ColorSpaceSettings: { // H265ColorSpaceSettings
 * //               ColorSpacePassthroughSettings: {},
 * //               DolbyVision81Settings: {},
 * //               Hdr10Settings: { // Hdr10Settings
 * //                 MaxCll: Number("int"),
 * //                 MaxFall: Number("int"),
 * //               },
 * //               Rec601Settings: {},
 * //               Rec709Settings: {},
 * //             },
 * //             FilterSettings: { // H265FilterSettings
 * //               TemporalFilterSettings: {
 * //                 PostFilterSharpening: "AUTO" || "DISABLED" || "ENABLED",
 * //                 Strength: "AUTO" || "STRENGTH_1" || "STRENGTH_2" || "STRENGTH_3" || "STRENGTH_4" || "STRENGTH_5" || "STRENGTH_6" || "STRENGTH_7" || "STRENGTH_8" || "STRENGTH_9" || "STRENGTH_10" || "STRENGTH_11" || "STRENGTH_12" || "STRENGTH_13" || "STRENGTH_14" || "STRENGTH_15" || "STRENGTH_16",
 * //               },
 * //             },
 * //             FixedAfd: "AFD_0000" || "AFD_0010" || "AFD_0011" || "AFD_0100" || "AFD_1000" || "AFD_1001" || "AFD_1010" || "AFD_1011" || "AFD_1101" || "AFD_1110" || "AFD_1111",
 * //             FlickerAq: "DISABLED" || "ENABLED",
 * //             FramerateDenominator: Number("int"), // required
 * //             FramerateNumerator: Number("int"), // required
 * //             GopClosedCadence: Number("int"),
 * //             GopSize: Number("double"),
 * //             GopSizeUnits: "FRAMES" || "SECONDS",
 * //             Level: "H265_LEVEL_1" || "H265_LEVEL_2" || "H265_LEVEL_2_1" || "H265_LEVEL_3" || "H265_LEVEL_3_1" || "H265_LEVEL_4" || "H265_LEVEL_4_1" || "H265_LEVEL_5" || "H265_LEVEL_5_1" || "H265_LEVEL_5_2" || "H265_LEVEL_6" || "H265_LEVEL_6_1" || "H265_LEVEL_6_2" || "H265_LEVEL_AUTO",
 * //             LookAheadRateControl: "HIGH" || "LOW" || "MEDIUM",
 * //             MaxBitrate: Number("int"),
 * //             MinIInterval: Number("int"),
 * //             ParDenominator: Number("int"),
 * //             ParNumerator: Number("int"),
 * //             Profile: "MAIN" || "MAIN_10BIT",
 * //             QvbrQualityLevel: Number("int"),
 * //             RateControlMode: "CBR" || "MULTIPLEX" || "QVBR",
 * //             ScanType: "INTERLACED" || "PROGRESSIVE",
 * //             SceneChangeDetect: "DISABLED" || "ENABLED",
 * //             Slices: Number("int"),
 * //             Tier: "HIGH" || "MAIN",
 * //             TimecodeInsertion: "DISABLED" || "PIC_TIMING_SEI",
 * //             TimecodeBurninSettings: {
 * //               FontSize: "EXTRA_SMALL_10" || "LARGE_48" || "MEDIUM_32" || "SMALL_16", // required
 * //               Position: "BOTTOM_CENTER" || "BOTTOM_LEFT" || "BOTTOM_RIGHT" || "MIDDLE_CENTER" || "MIDDLE_LEFT" || "MIDDLE_RIGHT" || "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT", // required
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //           Mpeg2Settings: { // Mpeg2Settings
 * //             AdaptiveQuantization: "AUTO" || "HIGH" || "LOW" || "MEDIUM" || "OFF",
 * //             AfdSignaling: "AUTO" || "FIXED" || "NONE",
 * //             ColorMetadata: "IGNORE" || "INSERT",
 * //             ColorSpace: "AUTO" || "PASSTHROUGH",
 * //             DisplayAspectRatio: "DISPLAYRATIO16X9" || "DISPLAYRATIO4X3",
 * //             FilterSettings: { // Mpeg2FilterSettings
 * //               TemporalFilterSettings: {
 * //                 PostFilterSharpening: "AUTO" || "DISABLED" || "ENABLED",
 * //                 Strength: "AUTO" || "STRENGTH_1" || "STRENGTH_2" || "STRENGTH_3" || "STRENGTH_4" || "STRENGTH_5" || "STRENGTH_6" || "STRENGTH_7" || "STRENGTH_8" || "STRENGTH_9" || "STRENGTH_10" || "STRENGTH_11" || "STRENGTH_12" || "STRENGTH_13" || "STRENGTH_14" || "STRENGTH_15" || "STRENGTH_16",
 * //               },
 * //             },
 * //             FixedAfd: "AFD_0000" || "AFD_0010" || "AFD_0011" || "AFD_0100" || "AFD_1000" || "AFD_1001" || "AFD_1010" || "AFD_1011" || "AFD_1101" || "AFD_1110" || "AFD_1111",
 * //             FramerateDenominator: Number("int"), // required
 * //             FramerateNumerator: Number("int"), // required
 * //             GopClosedCadence: Number("int"),
 * //             GopNumBFrames: Number("int"),
 * //             GopSize: Number("double"),
 * //             GopSizeUnits: "FRAMES" || "SECONDS",
 * //             ScanType: "INTERLACED" || "PROGRESSIVE",
 * //             SubgopLength: "DYNAMIC" || "FIXED",
 * //             TimecodeInsertion: "DISABLED" || "GOP_TIMECODE",
 * //             TimecodeBurninSettings: {
 * //               FontSize: "EXTRA_SMALL_10" || "LARGE_48" || "MEDIUM_32" || "SMALL_16", // required
 * //               Position: "BOTTOM_CENTER" || "BOTTOM_LEFT" || "BOTTOM_RIGHT" || "MIDDLE_CENTER" || "MIDDLE_LEFT" || "MIDDLE_RIGHT" || "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT", // required
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         Height: Number("int"),
 * //         Name: "STRING_VALUE", // required
 * //         RespondToAfd: "NONE" || "PASSTHROUGH" || "RESPOND",
 * //         ScalingBehavior: "DEFAULT" || "STRETCH_TO_OUTPUT",
 * //         Sharpness: Number("int"),
 * //         Width: Number("int"),
 * //       },
 * //     ],
 * //     ThumbnailConfiguration: { // ThumbnailConfiguration
 * //       State: "AUTO" || "DISABLED", // required
 * //     },
 * //   },
 * //   Id: "STRING_VALUE",
 * //   InputAttachments: [ // __listOfInputAttachment
 * //     { // InputAttachment
 * //       AutomaticInputFailoverSettings: { // AutomaticInputFailoverSettings
 * //         ErrorClearTimeMsec: Number("int"),
 * //         FailoverConditions: [ // __listOfFailoverCondition
 * //           { // FailoverCondition
 * //             FailoverConditionSettings: { // FailoverConditionSettings
 * //               AudioSilenceSettings: { // AudioSilenceFailoverSettings
 * //                 AudioSelectorName: "STRING_VALUE", // required
 * //                 AudioSilenceThresholdMsec: Number("int"),
 * //               },
 * //               InputLossSettings: { // InputLossFailoverSettings
 * //                 InputLossThresholdMsec: Number("int"),
 * //               },
 * //               VideoBlackSettings: { // VideoBlackFailoverSettings
 * //                 BlackDetectThreshold: Number("double"),
 * //                 VideoBlackThresholdMsec: Number("int"),
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         InputPreference: "EQUAL_INPUT_PREFERENCE" || "PRIMARY_INPUT_PREFERRED",
 * //         SecondaryInputId: "STRING_VALUE", // required
 * //       },
 * //       InputAttachmentName: "STRING_VALUE",
 * //       InputId: "STRING_VALUE",
 * //       InputSettings: { // InputSettings
 * //         AudioSelectors: [ // __listOfAudioSelector
 * //           { // AudioSelector
 * //             Name: "STRING_VALUE", // required
 * //             SelectorSettings: { // AudioSelectorSettings
 * //               AudioHlsRenditionSelection: { // AudioHlsRenditionSelection
 * //                 GroupId: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               AudioLanguageSelection: { // AudioLanguageSelection
 * //                 LanguageCode: "STRING_VALUE", // required
 * //                 LanguageSelectionPolicy: "LOOSE" || "STRICT",
 * //               },
 * //               AudioPidSelection: { // AudioPidSelection
 * //                 Pid: Number("int"), // required
 * //               },
 * //               AudioTrackSelection: { // AudioTrackSelection
 * //                 Tracks: [ // __listOfAudioTrack // required
 * //                   { // AudioTrack
 * //                     Track: Number("int"), // required
 * //                   },
 * //                 ],
 * //                 DolbyEDecode: { // AudioDolbyEDecode
 * //                   ProgramSelection: "ALL_CHANNELS" || "PROGRAM_1" || "PROGRAM_2" || "PROGRAM_3" || "PROGRAM_4" || "PROGRAM_5" || "PROGRAM_6" || "PROGRAM_7" || "PROGRAM_8", // required
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         CaptionSelectors: [ // __listOfCaptionSelector
 * //           { // CaptionSelector
 * //             LanguageCode: "STRING_VALUE",
 * //             Name: "STRING_VALUE", // required
 * //             SelectorSettings: { // CaptionSelectorSettings
 * //               AncillarySourceSettings: { // AncillarySourceSettings
 * //                 SourceAncillaryChannelNumber: Number("int"),
 * //               },
 * //               AribSourceSettings: {},
 * //               DvbSubSourceSettings: { // DvbSubSourceSettings
 * //                 OcrLanguage: "DEU" || "ENG" || "FRA" || "NLD" || "POR" || "SPA",
 * //                 Pid: Number("int"),
 * //               },
 * //               EmbeddedSourceSettings: { // EmbeddedSourceSettings
 * //                 Convert608To708: "DISABLED" || "UPCONVERT",
 * //                 Scte20Detection: "AUTO" || "OFF",
 * //                 Source608ChannelNumber: Number("int"),
 * //                 Source608TrackNumber: Number("int"),
 * //               },
 * //               Scte20SourceSettings: { // Scte20SourceSettings
 * //                 Convert608To708: "DISABLED" || "UPCONVERT",
 * //                 Source608ChannelNumber: Number("int"),
 * //               },
 * //               Scte27SourceSettings: { // Scte27SourceSettings
 * //                 OcrLanguage: "DEU" || "ENG" || "FRA" || "NLD" || "POR" || "SPA",
 * //                 Pid: Number("int"),
 * //               },
 * //               TeletextSourceSettings: { // TeletextSourceSettings
 * //                 OutputRectangle: { // CaptionRectangle
 * //                   Height: Number("double"), // required
 * //                   LeftOffset: Number("double"), // required
 * //                   TopOffset: Number("double"), // required
 * //                   Width: Number("double"), // required
 * //                 },
 * //                 PageNumber: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         DeblockFilter: "DISABLED" || "ENABLED",
 * //         DenoiseFilter: "DISABLED" || "ENABLED",
 * //         FilterStrength: Number("int"),
 * //         InputFilter: "AUTO" || "DISABLED" || "FORCED",
 * //         NetworkInputSettings: { // NetworkInputSettings
 * //           HlsInputSettings: { // HlsInputSettings
 * //             Bandwidth: Number("int"),
 * //             BufferSegments: Number("int"),
 * //             Retries: Number("int"),
 * //             RetryInterval: Number("int"),
 * //             Scte35Source: "MANIFEST" || "SEGMENTS",
 * //           },
 * //           ServerValidation: "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME" || "CHECK_CRYPTOGRAPHY_ONLY",
 * //         },
 * //         Scte35Pid: Number("int"),
 * //         Smpte2038DataPreference: "IGNORE" || "PREFER",
 * //         SourceEndBehavior: "CONTINUE" || "LOOP",
 * //         VideoSelector: { // VideoSelector
 * //           ColorSpace: "FOLLOW" || "HDR10" || "HLG_2020" || "REC_601" || "REC_709",
 * //           ColorSpaceSettings: { // VideoSelectorColorSpaceSettings
 * //             Hdr10Settings: {
 * //               MaxCll: Number("int"),
 * //               MaxFall: Number("int"),
 * //             },
 * //           },
 * //           ColorSpaceUsage: "FALLBACK" || "FORCE",
 * //           SelectorSettings: { // VideoSelectorSettings
 * //             VideoSelectorPid: { // VideoSelectorPid
 * //               Pid: Number("int"),
 * //             },
 * //             VideoSelectorProgramId: { // VideoSelectorProgramId
 * //               ProgramId: Number("int"),
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   InputSpecification: { // InputSpecification
 * //     Codec: "MPEG2" || "AVC" || "HEVC",
 * //     MaximumBitrate: "MAX_10_MBPS" || "MAX_20_MBPS" || "MAX_50_MBPS",
 * //     Resolution: "SD" || "HD" || "UHD",
 * //   },
 * //   LogLevel: "ERROR" || "WARNING" || "INFO" || "DEBUG" || "DISABLED",
 * //   Maintenance: { // MaintenanceStatus
 * //     MaintenanceDay: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //     MaintenanceDeadline: "STRING_VALUE",
 * //     MaintenanceScheduledDate: "STRING_VALUE",
 * //     MaintenanceStartTime: "STRING_VALUE",
 * //   },
 * //   Name: "STRING_VALUE",
 * //   PipelineDetails: [ // __listOfPipelineDetail
 * //     { // PipelineDetail
 * //       ActiveInputAttachmentName: "STRING_VALUE",
 * //       ActiveInputSwitchActionName: "STRING_VALUE",
 * //       ActiveMotionGraphicsActionName: "STRING_VALUE",
 * //       ActiveMotionGraphicsUri: "STRING_VALUE",
 * //       PipelineId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PipelinesRunningCount: Number("int"),
 * //   RoleArn: "STRING_VALUE",
 * //   State: "CREATING" || "CREATE_FAILED" || "IDLE" || "STARTING" || "RUNNING" || "RECOVERING" || "STOPPING" || "DELETING" || "DELETED" || "UPDATING" || "UPDATE_FAILED",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Vpc: { // VpcOutputSettingsDescription
 * //     AvailabilityZones: [
 * //       "STRING_VALUE",
 * //     ],
 * //     NetworkInterfaceIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroupIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     SubnetIds: "<__listOf__string>",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteChannelCommandInput - {@link DeleteChannelCommandInput}
 * @returns {@link DeleteChannelCommandOutput}
 * @see {@link DeleteChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class DeleteChannelCommand extends $Command<
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: DeleteChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteChannelCommandInput, DeleteChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteChannelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DeleteChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "DeleteChannel",
      },
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
  private serialize(input: DeleteChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteChannelCommandOutput> {
    return de_DeleteChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
