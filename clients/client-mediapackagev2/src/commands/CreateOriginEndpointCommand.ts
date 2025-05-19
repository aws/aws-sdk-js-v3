// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { CreateOriginEndpointRequest, CreateOriginEndpointResponse } from "../models/models_0";
import { de_CreateOriginEndpointCommand, se_CreateOriginEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOriginEndpointCommand}.
 */
export interface CreateOriginEndpointCommandInput extends CreateOriginEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateOriginEndpointCommand}.
 */
export interface CreateOriginEndpointCommandOutput extends CreateOriginEndpointResponse, __MetadataBearer {}

/**
 * <p>The endpoint is attached to a channel, and represents the output of the live content. You can associate multiple endpoints to a single channel. Each endpoint gives players and downstream CDNs (such as Amazon CloudFront) access to the content for playback. Content can't be served from a channel until it has an endpoint. You can create only one endpoint with each request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, CreateOriginEndpointCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, CreateOriginEndpointCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // CreateOriginEndpointRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 *   ContainerType: "TS" || "CMAF", // required
 *   Segment: { // Segment
 *     SegmentDurationSeconds: Number("int"),
 *     SegmentName: "STRING_VALUE",
 *     TsUseAudioRenditionGroup: true || false,
 *     IncludeIframeOnlyStreams: true || false,
 *     TsIncludeDvbSubtitles: true || false,
 *     Scte: { // Scte
 *       ScteFilter: [ // ScteFilterList
 *         "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY" || "PROGRAM",
 *       ],
 *     },
 *     Encryption: { // Encryption
 *       ConstantInitializationVector: "STRING_VALUE",
 *       EncryptionMethod: { // EncryptionMethod
 *         TsEncryptionMethod: "AES_128" || "SAMPLE_AES",
 *         CmafEncryptionMethod: "CENC" || "CBCS",
 *       },
 *       KeyRotationIntervalSeconds: Number("int"),
 *       SpekeKeyProvider: { // SpekeKeyProvider
 *         EncryptionContractConfiguration: { // EncryptionContractConfiguration
 *           PresetSpeke20Audio: "PRESET_AUDIO_1" || "PRESET_AUDIO_2" || "PRESET_AUDIO_3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET_VIDEO_1" || "PRESET_VIDEO_2" || "PRESET_VIDEO_3" || "PRESET_VIDEO_4" || "PRESET_VIDEO_5" || "PRESET_VIDEO_6" || "PRESET_VIDEO_7" || "PRESET_VIDEO_8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         DrmSystems: [ // DrmSystems // required
 *           "CLEAR_KEY_AES_128" || "FAIRPLAY" || "PLAYREADY" || "WIDEVINE" || "IRDETO",
 *         ],
 *         RoleArn: "STRING_VALUE", // required
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   StartoverWindowSeconds: Number("int"),
 *   HlsManifests: [ // CreateHlsManifests
 *     { // CreateHlsManifestConfiguration
 *       ManifestName: "STRING_VALUE", // required
 *       ChildManifestName: "STRING_VALUE",
 *       ScteHls: { // ScteHls
 *         AdMarkerHls: "DATERANGE",
 *       },
 *       StartTag: { // StartTag
 *         TimeOffset: Number("float"), // required
 *         Precise: true || false,
 *       },
 *       ManifestWindowSeconds: Number("int"),
 *       ProgramDateTimeIntervalSeconds: Number("int"),
 *       FilterConfiguration: { // FilterConfiguration
 *         ManifestFilter: "STRING_VALUE",
 *         Start: new Date("TIMESTAMP"),
 *         End: new Date("TIMESTAMP"),
 *         TimeDelaySeconds: Number("int"),
 *         ClipStartTime: new Date("TIMESTAMP"),
 *       },
 *       UrlEncodeChildManifest: true || false,
 *     },
 *   ],
 *   LowLatencyHlsManifests: [ // CreateLowLatencyHlsManifests
 *     { // CreateLowLatencyHlsManifestConfiguration
 *       ManifestName: "STRING_VALUE", // required
 *       ChildManifestName: "STRING_VALUE",
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE",
 *       },
 *       StartTag: {
 *         TimeOffset: Number("float"), // required
 *         Precise: true || false,
 *       },
 *       ManifestWindowSeconds: Number("int"),
 *       ProgramDateTimeIntervalSeconds: Number("int"),
 *       FilterConfiguration: {
 *         ManifestFilter: "STRING_VALUE",
 *         Start: new Date("TIMESTAMP"),
 *         End: new Date("TIMESTAMP"),
 *         TimeDelaySeconds: Number("int"),
 *         ClipStartTime: new Date("TIMESTAMP"),
 *       },
 *       UrlEncodeChildManifest: true || false,
 *     },
 *   ],
 *   DashManifests: [ // CreateDashManifests
 *     { // CreateDashManifestConfiguration
 *       ManifestName: "STRING_VALUE", // required
 *       ManifestWindowSeconds: Number("int"),
 *       FilterConfiguration: {
 *         ManifestFilter: "STRING_VALUE",
 *         Start: new Date("TIMESTAMP"),
 *         End: new Date("TIMESTAMP"),
 *         TimeDelaySeconds: Number("int"),
 *         ClipStartTime: new Date("TIMESTAMP"),
 *       },
 *       MinUpdatePeriodSeconds: Number("int"),
 *       MinBufferTimeSeconds: Number("int"),
 *       SuggestedPresentationDelaySeconds: Number("int"),
 *       SegmentTemplateFormat: "NUMBER_WITH_TIMELINE",
 *       PeriodTriggers: [ // DashPeriodTriggers
 *         "AVAILS" || "DRM_KEY_ROTATION" || "SOURCE_CHANGES" || "SOURCE_DISRUPTIONS" || "NONE",
 *       ],
 *       ScteDash: { // ScteDash
 *         AdMarkerDash: "BINARY" || "XML",
 *       },
 *       DrmSignaling: "INDIVIDUAL" || "REFERENCED",
 *       UtcTiming: { // DashUtcTiming
 *         TimingMode: "HTTP_HEAD" || "HTTP_ISO" || "HTTP_XSDATE" || "UTC_DIRECT",
 *         TimingSource: "STRING_VALUE",
 *       },
 *       Profiles: [ // DashProfiles
 *         "DVB_DASH",
 *       ],
 *       BaseUrls: [ // DashBaseUrls
 *         { // DashBaseUrl
 *           Url: "STRING_VALUE", // required
 *           ServiceLocation: "STRING_VALUE",
 *           DvbPriority: Number("int"),
 *           DvbWeight: Number("int"),
 *         },
 *       ],
 *       ProgramInformation: { // DashProgramInformation
 *         Title: "STRING_VALUE",
 *         Source: "STRING_VALUE",
 *         Copyright: "STRING_VALUE",
 *         LanguageCode: "STRING_VALUE",
 *         MoreInformationUrl: "STRING_VALUE",
 *       },
 *       DvbSettings: { // DashDvbSettings
 *         FontDownload: { // DashDvbFontDownload
 *           Url: "STRING_VALUE",
 *           MimeType: "STRING_VALUE",
 *           FontFamily: "STRING_VALUE",
 *         },
 *         ErrorMetrics: [ // DashDvbErrorMetrics
 *           { // DashDvbMetricsReporting
 *             ReportingUrl: "STRING_VALUE", // required
 *             Probability: Number("int"),
 *           },
 *         ],
 *       },
 *       Compactness: "STANDARD" || "NONE",
 *       SubtitleConfiguration: { // DashSubtitleConfiguration
 *         TtmlConfiguration: { // DashTtmlConfiguration
 *           TtmlProfile: "IMSC_1" || "EBU_TT_D_101", // required
 *         },
 *       },
 *     },
 *   ],
 *   ForceEndpointErrorConfiguration: { // ForceEndpointErrorConfiguration
 *     EndpointErrorConditions: [ // EndpointErrorConditions
 *       "STALE_MANIFEST" || "INCOMPLETE_MANIFEST" || "MISSING_DRM_KEY" || "SLATE_INPUT",
 *     ],
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateOriginEndpointResponse
 * //   Arn: "STRING_VALUE", // required
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   OriginEndpointName: "STRING_VALUE", // required
 * //   ContainerType: "TS" || "CMAF", // required
 * //   Segment: { // Segment
 * //     SegmentDurationSeconds: Number("int"),
 * //     SegmentName: "STRING_VALUE",
 * //     TsUseAudioRenditionGroup: true || false,
 * //     IncludeIframeOnlyStreams: true || false,
 * //     TsIncludeDvbSubtitles: true || false,
 * //     Scte: { // Scte
 * //       ScteFilter: [ // ScteFilterList
 * //         "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY" || "PROGRAM",
 * //       ],
 * //     },
 * //     Encryption: { // Encryption
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       EncryptionMethod: { // EncryptionMethod
 * //         TsEncryptionMethod: "AES_128" || "SAMPLE_AES",
 * //         CmafEncryptionMethod: "CENC" || "CBCS",
 * //       },
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       SpekeKeyProvider: { // SpekeKeyProvider
 * //         EncryptionContractConfiguration: { // EncryptionContractConfiguration
 * //           PresetSpeke20Audio: "PRESET_AUDIO_1" || "PRESET_AUDIO_2" || "PRESET_AUDIO_3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET_VIDEO_1" || "PRESET_VIDEO_2" || "PRESET_VIDEO_3" || "PRESET_VIDEO_4" || "PRESET_VIDEO_5" || "PRESET_VIDEO_6" || "PRESET_VIDEO_7" || "PRESET_VIDEO_8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         DrmSystems: [ // DrmSystems // required
 * //           "CLEAR_KEY_AES_128" || "FAIRPLAY" || "PLAYREADY" || "WIDEVINE" || "IRDETO",
 * //         ],
 * //         RoleArn: "STRING_VALUE", // required
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   StartoverWindowSeconds: Number("int"),
 * //   HlsManifests: [ // GetHlsManifests
 * //     { // GetHlsManifestConfiguration
 * //       ManifestName: "STRING_VALUE", // required
 * //       Url: "STRING_VALUE", // required
 * //       ChildManifestName: "STRING_VALUE",
 * //       ManifestWindowSeconds: Number("int"),
 * //       ProgramDateTimeIntervalSeconds: Number("int"),
 * //       ScteHls: { // ScteHls
 * //         AdMarkerHls: "DATERANGE",
 * //       },
 * //       FilterConfiguration: { // FilterConfiguration
 * //         ManifestFilter: "STRING_VALUE",
 * //         Start: new Date("TIMESTAMP"),
 * //         End: new Date("TIMESTAMP"),
 * //         TimeDelaySeconds: Number("int"),
 * //         ClipStartTime: new Date("TIMESTAMP"),
 * //       },
 * //       StartTag: { // StartTag
 * //         TimeOffset: Number("float"), // required
 * //         Precise: true || false,
 * //       },
 * //       UrlEncodeChildManifest: true || false,
 * //     },
 * //   ],
 * //   LowLatencyHlsManifests: [ // GetLowLatencyHlsManifests
 * //     { // GetLowLatencyHlsManifestConfiguration
 * //       ManifestName: "STRING_VALUE", // required
 * //       Url: "STRING_VALUE", // required
 * //       ChildManifestName: "STRING_VALUE",
 * //       ManifestWindowSeconds: Number("int"),
 * //       ProgramDateTimeIntervalSeconds: Number("int"),
 * //       ScteHls: {
 * //         AdMarkerHls: "DATERANGE",
 * //       },
 * //       FilterConfiguration: {
 * //         ManifestFilter: "STRING_VALUE",
 * //         Start: new Date("TIMESTAMP"),
 * //         End: new Date("TIMESTAMP"),
 * //         TimeDelaySeconds: Number("int"),
 * //         ClipStartTime: new Date("TIMESTAMP"),
 * //       },
 * //       StartTag: {
 * //         TimeOffset: Number("float"), // required
 * //         Precise: true || false,
 * //       },
 * //       UrlEncodeChildManifest: true || false,
 * //     },
 * //   ],
 * //   DashManifests: [ // GetDashManifests
 * //     { // GetDashManifestConfiguration
 * //       ManifestName: "STRING_VALUE", // required
 * //       Url: "STRING_VALUE", // required
 * //       ManifestWindowSeconds: Number("int"),
 * //       FilterConfiguration: {
 * //         ManifestFilter: "STRING_VALUE",
 * //         Start: new Date("TIMESTAMP"),
 * //         End: new Date("TIMESTAMP"),
 * //         TimeDelaySeconds: Number("int"),
 * //         ClipStartTime: new Date("TIMESTAMP"),
 * //       },
 * //       MinUpdatePeriodSeconds: Number("int"),
 * //       MinBufferTimeSeconds: Number("int"),
 * //       SuggestedPresentationDelaySeconds: Number("int"),
 * //       SegmentTemplateFormat: "NUMBER_WITH_TIMELINE",
 * //       PeriodTriggers: [ // DashPeriodTriggers
 * //         "AVAILS" || "DRM_KEY_ROTATION" || "SOURCE_CHANGES" || "SOURCE_DISRUPTIONS" || "NONE",
 * //       ],
 * //       ScteDash: { // ScteDash
 * //         AdMarkerDash: "BINARY" || "XML",
 * //       },
 * //       DrmSignaling: "INDIVIDUAL" || "REFERENCED",
 * //       UtcTiming: { // DashUtcTiming
 * //         TimingMode: "HTTP_HEAD" || "HTTP_ISO" || "HTTP_XSDATE" || "UTC_DIRECT",
 * //         TimingSource: "STRING_VALUE",
 * //       },
 * //       Profiles: [ // DashProfiles
 * //         "DVB_DASH",
 * //       ],
 * //       BaseUrls: [ // DashBaseUrls
 * //         { // DashBaseUrl
 * //           Url: "STRING_VALUE", // required
 * //           ServiceLocation: "STRING_VALUE",
 * //           DvbPriority: Number("int"),
 * //           DvbWeight: Number("int"),
 * //         },
 * //       ],
 * //       ProgramInformation: { // DashProgramInformation
 * //         Title: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         Copyright: "STRING_VALUE",
 * //         LanguageCode: "STRING_VALUE",
 * //         MoreInformationUrl: "STRING_VALUE",
 * //       },
 * //       DvbSettings: { // DashDvbSettings
 * //         FontDownload: { // DashDvbFontDownload
 * //           Url: "STRING_VALUE",
 * //           MimeType: "STRING_VALUE",
 * //           FontFamily: "STRING_VALUE",
 * //         },
 * //         ErrorMetrics: [ // DashDvbErrorMetrics
 * //           { // DashDvbMetricsReporting
 * //             ReportingUrl: "STRING_VALUE", // required
 * //             Probability: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       Compactness: "STANDARD" || "NONE",
 * //       SubtitleConfiguration: { // DashSubtitleConfiguration
 * //         TtmlConfiguration: { // DashTtmlConfiguration
 * //           TtmlProfile: "IMSC_1" || "EBU_TT_D_101", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   ForceEndpointErrorConfiguration: { // ForceEndpointErrorConfiguration
 * //     EndpointErrorConditions: [ // EndpointErrorConditions
 * //       "STALE_MANIFEST" || "INCOMPLETE_MANIFEST" || "MISSING_DRM_KEY" || "SLATE_INPUT",
 * //     ],
 * //   },
 * //   ETag: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOriginEndpointCommandInput - {@link CreateOriginEndpointCommandInput}
 * @returns {@link CreateOriginEndpointCommandOutput}
 * @see {@link CreateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 *
 * @example Creating an OriginEndpoint with container type TS, and encryption enabled
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "TS",
 *   Description: "Description for exampleOriginEndpointTS",
 *   ForceEndpointErrorConfiguration: {
 *     EndpointErrorConditions: [
 *       "STALE_MANIFEST",
 *       "INCOMPLETE_MANIFEST",
 *       "MISSING_DRM_KEY",
 *       "SLATE_INPUT"
 *     ]
 *   },
 *   HlsManifests: [
 *     {
 *       ChildManifestName: "exampleChildManifest1",
 *       ManifestName: "exampleManifest1",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       }
 *     },
 *     {
 *       ChildManifestName: "exampleManifest2",
 *       ManifestName: "exampleManifest2",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       }
 *     }
 *   ],
 *   LowLatencyHlsManifests: [
 *     {
 *       ChildManifestName: "exampleLLChildManifest1",
 *       ManifestName: "exampleLLManifest1",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       }
 *     },
 *     {
 *       ChildManifestName: "exampleLLManifest2",
 *       ManifestName: "exampleLLManifest2",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       }
 *     }
 *   ],
 *   OriginEndpointName: "exampleOriginEndpointTS",
 *   Segment: {
 *     Encryption: {
 *       ConstantInitializationVector: "A382A901F3C1F7718512266CFFBB0B7E",
 *       EncryptionMethod: {
 *         TsEncryptionMethod: "AES_128"
 *       },
 *       KeyRotationIntervalSeconds: 300,
 *       SpekeKeyProvider: {
 *         DrmSystems: [
 *           "CLEAR_KEY_AES_128"
 *         ],
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "SHARED",
 *           PresetSpeke20Video: "SHARED"
 *         },
 *         ResourceId: "ResourceId",
 *         RoleArn: "arn:aws:iam::123456789012:role/empRole",
 *         Url: "https://foo.com"
 *       }
 *     },
 *     IncludeIframeOnlyStreams: true,
 *     Scte: {
 *       ScteFilter: [
 *         "SPLICE_INSERT",
 *         "BREAK"
 *       ]
 *     },
 *     SegmentDurationSeconds: 6,
 *     SegmentName: "segmentName",
 *     TsIncludeDvbSubtitles: true,
 *     TsUseAudioRenditionGroup: true
 *   },
 *   StartoverWindowSeconds: 300,
 *   Tags: {
 *     key1: "value1",
 *     key2: "value2"
 *   }
 * };
 * const command = new CreateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpointTS",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "TS",
 *   CreatedAt: "2022-10-18T09:36:00.00Z",
 *   Description: "Description for exampleOriginEndpointTS",
 *   ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *   ForceEndpointErrorConfiguration: {
 *     EndpointErrorConditions: [
 *       "STALE_MANIFEST",
 *       "INCOMPLETE_MANIFEST",
 *       "MISSING_DRM_KEY",
 *       "SLATE_INPUT"
 *     ]
 *   },
 *   HlsManifests: [
 *     {
 *       ChildManifestName: "exampleChildManifest1",
 *       ManifestName: "exampleManifest1",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       },
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointTS/exampleManifest1.m3u8"
 *     },
 *     {
 *       ChildManifestName: "exampleManifest2",
 *       ManifestName: "exampleManifest2",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       },
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointTS/exampleManifest2.m3u8"
 *     }
 *   ],
 *   LowLatencyHlsManifests: [
 *     {
 *       ChildManifestName: "exampleLLChildManifest1",
 *       ManifestName: "exampleLLManifest1",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       },
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointTS/exampleLLManifest1.m3u8"
 *     },
 *     {
 *       ChildManifestName: "exampleLLManifest2",
 *       ManifestName: "exampleLLManifest2",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       },
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointTS/exampleLLManifest2.m3u8"
 *     }
 *   ],
 *   ModifiedAt: "2022-10-18T09:36:00.00Z",
 *   OriginEndpointName: "exampleOriginEndpointTS",
 *   Segment: {
 *     Encryption: {
 *       ConstantInitializationVector: "A382A901F3C1F7718512266CFFBB0B7E",
 *       EncryptionMethod: {
 *         TsEncryptionMethod: "AES_128"
 *       },
 *       KeyRotationIntervalSeconds: 300,
 *       SpekeKeyProvider: {
 *         DrmSystems: [
 *           "CLEAR_KEY_AES_128"
 *         ],
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "SHARED",
 *           PresetSpeke20Video: "SHARED"
 *         },
 *         ResourceId: "ResourceId",
 *         RoleArn: "arn:aws:iam::123456789012:role/empRole",
 *         Url: "https://foo.com"
 *       }
 *     },
 *     IncludeIframeOnlyStreams: true,
 *     Scte: {
 *       ScteFilter: [
 *         "SPLICE_INSERT",
 *         "BREAK"
 *       ]
 *     },
 *     SegmentDurationSeconds: 6,
 *     SegmentName: "segmentName",
 *     TsIncludeDvbSubtitles: true,
 *     TsUseAudioRenditionGroup: true
 *   },
 *   StartoverWindowSeconds: 300,
 *   Tags: {
 *     key1: "value1",
 *     key2: "value2"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Creating an OriginEndpoint with container type CMAF, and encryption enabled
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "CMAF",
 *   DashManifests: [
 *     {
 *       BaseUrls: [
 *         {
 *           DvbPriority: 1,
 *           DvbWeight: 3,
 *           ServiceLocation: "A",
 *           Url: "http://example.com/"
 *         }
 *       ],
 *       Compactness: "STANDARD",
 *       DrmSignaling: "INDIVIDUAL",
 *       DvbSettings: {
 *         ErrorMetrics: [
 *           {
 *             Probability: 500,
 *             ReportingUrl: "https://example.com/dvb-errors/errors"
 *           }
 *         ],
 *         FontDownload: {
 *           FontFamily: "SubtitleDisplay",
 *           MimeType: "application/font",
 *           Url: "https://example.com/fonts/SubtitleDisplay.woff"
 *         }
 *       },
 *       ManifestName: "exampleDashManifest1",
 *       ManifestWindowSeconds: 300,
 *       MinBufferTimeSeconds: 30,
 *       MinUpdatePeriodSeconds: 5,
 *       PeriodTriggers: [
 *         "AVAILS"
 *       ],
 *       Profiles: [
 *         "DVB_DASH"
 *       ],
 *       ProgramInformation: {
 *         Copyright: "(c) Example. All rights reserved",
 *         LanguageCode: "en",
 *         MoreInformationUrl: "https://example.com/more-information",
 *         Source: "exampleSource",
 *         Title: "exampleTitle"
 *       },
 *       ScteDash: {
 *         AdMarkerDash: "XML"
 *       },
 *       SegmentTemplateFormat: "NUMBER_WITH_TIMELINE",
 *       SuggestedPresentationDelaySeconds: 2,
 *       UtcTiming: {
 *         TimingMode: "HTTP_HEAD",
 *         TimingSource: "example"
 *       }
 *     },
 *     {
 *       BaseUrls: [
 *         {
 *           DvbPriority: 2,
 *           DvbWeight: 2,
 *           ServiceLocation: "B",
 *           Url: "http://example2.com/"
 *         }
 *       ],
 *       Compactness: "STANDARD",
 *       DrmSignaling: "INDIVIDUAL",
 *       DvbSettings: {
 *         ErrorMetrics: [
 *           {
 *             Probability: 600,
 *             ReportingUrl: "https://example2.com/dvb-errors/errors"
 *           }
 *         ],
 *         FontDownload: {
 *           FontFamily: "SubtitleDisplay",
 *           MimeType: "application/font",
 *           Url: "https://example.com/fonts/SubtitleDisplay.woff"
 *         }
 *       },
 *       ManifestName: "exampleDashManifest2",
 *       ManifestWindowSeconds: 60,
 *       MinBufferTimeSeconds: 9,
 *       MinUpdatePeriodSeconds: 3,
 *       PeriodTriggers: [
 *         "AVAILS",
 *         "DRM_KEY_ROTATION",
 *         "SOURCE_CHANGES",
 *         "SOURCE_DISRUPTIONS"
 *       ],
 *       Profiles: [
 *         "DVB_DASH"
 *       ],
 *       ProgramInformation: {
 *         Copyright: "(c) Example. All rights reserved",
 *         LanguageCode: "en",
 *         MoreInformationUrl: "https://example2.com/more-information",
 *         Source: "exampleSource2",
 *         Title: "exampleTitle2"
 *       },
 *       ScteDash: {
 *         AdMarkerDash: "XML"
 *       },
 *       SegmentTemplateFormat: "NUMBER_WITH_TIMELINE",
 *       SuggestedPresentationDelaySeconds: 12,
 *       UtcTiming: {
 *         TimingMode: "HTTP_HEAD",
 *         TimingSource: "example"
 *       }
 *     }
 *   ],
 *   ForceEndpointErrorConfiguration: {
 *     EndpointErrorConditions: [
 *       "STALE_MANIFEST",
 *       "INCOMPLETE_MANIFEST",
 *       "MISSING_DRM_KEY",
 *       "SLATE_INPUT"
 *     ]
 *   },
 *   HlsManifests: [
 *     {
 *       ChildManifestName: "exampleChildManifest1",
 *       ManifestName: "exampleManifest1",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       }
 *     },
 *     {
 *       ChildManifestName: "exampleManifest2",
 *       ManifestName: "exampleManifest2",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       }
 *     }
 *   ],
 *   LowLatencyHlsManifests: [
 *     {
 *       ChildManifestName: "exampleLLChildManifest1",
 *       ManifestName: "exampleLLManifest1",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       }
 *     },
 *     {
 *       ChildManifestName: "exampleLLManifest2",
 *       ManifestName: "exampleLLManifest2",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       }
 *     }
 *   ],
 *   OriginEndpointName: "exampleOriginEndpointCMAF",
 *   Segment: {
 *     Encryption: {
 *       ConstantInitializationVector: "A382A901F3C1F7718512266CFFBB0B9F",
 *       EncryptionMethod: {
 *         CmafEncryptionMethod: "CBCS"
 *       },
 *       KeyRotationIntervalSeconds: 300,
 *       SpekeKeyProvider: {
 *         DrmSystems: [
 *           "PLAYREADY",
 *           "WIDEVINE"
 *         ],
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "PRESET_AUDIO_1",
 *           PresetSpeke20Video: "PRESET_VIDEO_1"
 *         },
 *         ResourceId: "ResourceId",
 *         RoleArn: "arn:aws:iam::123456789012:role/empRole",
 *         Url: "https://foo.com"
 *       }
 *     },
 *     IncludeIframeOnlyStreams: true,
 *     Scte: {
 *       ScteFilter: [
 *         "SPLICE_INSERT",
 *         "BREAK"
 *       ]
 *     },
 *     SegmentDurationSeconds: 6,
 *     SegmentName: "segmentName"
 *   },
 *   StartoverWindowSeconds: 300,
 *   Tags: {
 *     key1: "value1",
 *     key2: "value2"
 *   }
 * };
 * const command = new CreateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpointCMAF",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "CMAF",
 *   CreatedAt: "2022-10-18T09:36:00.00Z",
 *   DashManifests: [
 *     {
 *       BaseUrls: [
 *         {
 *           DvbPriority: 1,
 *           DvbWeight: 3,
 *           ServiceLocation: "A",
 *           Url: "http://example.com/"
 *         }
 *       ],
 *       Compactness: "STANDARD",
 *       DrmSignaling: "INDIVIDUAL",
 *       DvbSettings: {
 *         ErrorMetrics: [
 *           {
 *             Probability: 500,
 *             ReportingUrl: "https://example.com/dvb-errors/errors"
 *           }
 *         ],
 *         FontDownload: {
 *           FontFamily: "SubtitleDisplay",
 *           MimeType: "application/font",
 *           Url: "https://example.com/fonts/SubtitleDisplay.woff"
 *         }
 *       },
 *       ManifestName: "exampleDashManifest1",
 *       ManifestWindowSeconds: 300,
 *       MinBufferTimeSeconds: 30,
 *       MinUpdatePeriodSeconds: 5,
 *       PeriodTriggers: [
 *         "AVAILS"
 *       ],
 *       Profiles: [
 *         "DVB_DASH"
 *       ],
 *       ProgramInformation: {
 *         Copyright: "(c) Example. All rights reserved",
 *         LanguageCode: "en",
 *         MoreInformationUrl: "https://example.com/more-information",
 *         Source: "exampleSource",
 *         Title: "exampleTitle"
 *       },
 *       ScteDash: {
 *         AdMarkerDash: "XML"
 *       },
 *       SegmentTemplateFormat: "NUMBER_WITH_TIMELINE",
 *       SuggestedPresentationDelaySeconds: 2,
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleDashManifest1.mpd",
 *       UtcTiming: {
 *         TimingMode: "HTTP_HEAD",
 *         TimingSource: "example"
 *       }
 *     },
 *     {
 *       BaseUrls: [
 *         {
 *           DvbPriority: 2,
 *           DvbWeight: 2,
 *           ServiceLocation: "B",
 *           Url: "http://example2.com/"
 *         }
 *       ],
 *       Compactness: "STANDARD",
 *       DrmSignaling: "INDIVIDUAL",
 *       DvbSettings: {
 *         ErrorMetrics: [
 *           {
 *             Probability: 600,
 *             ReportingUrl: "https://example2.com/dvb-errors/errors"
 *           }
 *         ],
 *         FontDownload: {
 *           FontFamily: "SubtitleDisplay",
 *           MimeType: "application/font",
 *           Url: "https://example.com/fonts/SubtitleDisplay.woff"
 *         }
 *       },
 *       ManifestName: "exampleDashManifest2",
 *       ManifestWindowSeconds: 60,
 *       MinBufferTimeSeconds: 9,
 *       MinUpdatePeriodSeconds: 3,
 *       PeriodTriggers: [
 *         "AVAILS",
 *         "DRM_KEY_ROTATION",
 *         "SOURCE_CHANGES",
 *         "SOURCE_DISRUPTIONS"
 *       ],
 *       Profiles: [
 *         "DVB_DASH"
 *       ],
 *       ProgramInformation: {
 *         Copyright: "(c) Example. All rights reserved",
 *         LanguageCode: "en",
 *         MoreInformationUrl: "https://example2.com/more-information",
 *         Source: "exampleSource2",
 *         Title: "exampleTitle2"
 *       },
 *       ScteDash: {
 *         AdMarkerDash: "XML"
 *       },
 *       SegmentTemplateFormat: "NUMBER_WITH_TIMELINE",
 *       SuggestedPresentationDelaySeconds: 12,
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleDashManifest2.mpd",
 *       UtcTiming: {
 *         TimingMode: "HTTP_HEAD",
 *         TimingSource: "example"
 *       }
 *     }
 *   ],
 *   ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *   ForceEndpointErrorConfiguration: {
 *     EndpointErrorConditions: [
 *       "STALE_MANIFEST",
 *       "INCOMPLETE_MANIFEST",
 *       "MISSING_DRM_KEY",
 *       "SLATE_INPUT"
 *     ]
 *   },
 *   HlsManifests: [
 *     {
 *       ChildManifestName: "exampleChildManifest1",
 *       ManifestName: "exampleManifest1",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       },
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleManifest1.m3u8"
 *     },
 *     {
 *       ChildManifestName: "exampleManifest2",
 *       ManifestName: "exampleManifest2",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       },
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleManifest2.m3u8"
 *     }
 *   ],
 *   LowLatencyHlsManifests: [
 *     {
 *       ChildManifestName: "exampleLLChildManifest1",
 *       ManifestName: "exampleLLManifest1",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       },
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleLLManifest1.m3u8"
 *     },
 *     {
 *       ChildManifestName: "exampleLLManifest2",
 *       ManifestName: "exampleLLManifest2",
 *       ManifestWindowSeconds: 30,
 *       ProgramDateTimeIntervalSeconds: 60,
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE"
 *       },
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleLLManifest2.m3u8"
 *     }
 *   ],
 *   ModifiedAt: "2022-10-18T09:36:00.00Z",
 *   OriginEndpointName: "exampleOriginEndpointCMAF",
 *   Segment: {
 *     Encryption: {
 *       ConstantInitializationVector: "A382A901F3C1F7718512266CFFBB0B9F",
 *       EncryptionMethod: {
 *         CmafEncryptionMethod: "CBCS"
 *       },
 *       KeyRotationIntervalSeconds: 300,
 *       SpekeKeyProvider: {
 *         DrmSystems: [
 *           "PLAYREADY",
 *           "WIDEVINE"
 *         ],
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "PRESET_AUDIO_1",
 *           PresetSpeke20Video: "PRESET_VIDEO_1"
 *         },
 *         ResourceId: "ResourceId",
 *         RoleArn: "arn:aws:iam::123456789012:role/empRole",
 *         Url: "https://foo.com"
 *       }
 *     },
 *     IncludeIframeOnlyStreams: true,
 *     Scte: {
 *       ScteFilter: [
 *         "SPLICE_INSERT",
 *         "BREAK"
 *       ]
 *     },
 *     SegmentDurationSeconds: 6,
 *     SegmentName: "segmentName"
 *   },
 *   StartoverWindowSeconds: 300,
 *   Tags: {
 *     key1: "value1",
 *     key2: "value2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateOriginEndpointCommand extends $Command
  .classBuilder<
    CreateOriginEndpointCommandInput,
    CreateOriginEndpointCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "CreateOriginEndpoint", {})
  .n("MediaPackageV2Client", "CreateOriginEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateOriginEndpointCommand)
  .de(de_CreateOriginEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOriginEndpointRequest;
      output: CreateOriginEndpointResponse;
    };
    sdk: {
      input: CreateOriginEndpointCommandInput;
      output: CreateOriginEndpointCommandOutput;
    };
  };
}
