// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { UpdateOriginEndpointRequest, UpdateOriginEndpointResponse } from "../models/models_0";
import { UpdateOriginEndpoint } from "../schemas/schemas_3_Origin";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOriginEndpointCommand}.
 */
export interface UpdateOriginEndpointCommandInput extends UpdateOriginEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOriginEndpointCommand}.
 */
export interface UpdateOriginEndpointCommandOutput extends UpdateOriginEndpointResponse, __MetadataBearer {}

/**
 * <p>Update the specified origin endpoint. Edit the packaging preferences on an endpoint to optimize the viewing experience. You can't edit the name of the endpoint.</p> <p>Any edits you make that impact the video output may not be reflected for a few minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, UpdateOriginEndpointCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, UpdateOriginEndpointCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // UpdateOriginEndpointRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 *   ContainerType: "TS" || "CMAF" || "ISM", // required
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
 *         IsmEncryptionMethod: "CENC",
 *       },
 *       KeyRotationIntervalSeconds: Number("int"),
 *       CmafExcludeSegmentDrmMetadata: true || false,
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
 *   Description: "STRING_VALUE",
 *   StartoverWindowSeconds: Number("int"),
 *   HlsManifests: [ // CreateHlsManifests
 *     { // CreateHlsManifestConfiguration
 *       ManifestName: "STRING_VALUE", // required
 *       ChildManifestName: "STRING_VALUE",
 *       ScteHls: { // ScteHls
 *         AdMarkerHls: "DATERANGE" || "SCTE35_ENHANCED",
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
 *         AdMarkerHls: "DATERANGE" || "SCTE35_ENHANCED",
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
 *   MssManifests: [ // CreateMssManifests
 *     { // CreateMssManifestConfiguration
 *       ManifestName: "STRING_VALUE", // required
 *       ManifestWindowSeconds: Number("int"),
 *       FilterConfiguration: {
 *         ManifestFilter: "STRING_VALUE",
 *         Start: new Date("TIMESTAMP"),
 *         End: new Date("TIMESTAMP"),
 *         TimeDelaySeconds: Number("int"),
 *         ClipStartTime: new Date("TIMESTAMP"),
 *       },
 *       ManifestLayout: "FULL" || "COMPACT",
 *     },
 *   ],
 *   ForceEndpointErrorConfiguration: { // ForceEndpointErrorConfiguration
 *     EndpointErrorConditions: [ // EndpointErrorConditions
 *       "STALE_MANIFEST" || "INCOMPLETE_MANIFEST" || "MISSING_DRM_KEY" || "SLATE_INPUT",
 *     ],
 *   },
 *   ETag: "STRING_VALUE",
 * };
 * const command = new UpdateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOriginEndpointResponse
 * //   Arn: "STRING_VALUE", // required
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   OriginEndpointName: "STRING_VALUE", // required
 * //   ContainerType: "TS" || "CMAF" || "ISM", // required
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
 * //         IsmEncryptionMethod: "CENC",
 * //       },
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       CmafExcludeSegmentDrmMetadata: true || false,
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
 * //         AdMarkerHls: "DATERANGE" || "SCTE35_ENHANCED",
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
 * //         AdMarkerHls: "DATERANGE" || "SCTE35_ENHANCED",
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
 * //   MssManifests: [ // GetMssManifests
 * //     { // GetMssManifestConfiguration
 * //       ManifestName: "STRING_VALUE", // required
 * //       Url: "STRING_VALUE", // required
 * //       FilterConfiguration: {
 * //         ManifestFilter: "STRING_VALUE",
 * //         Start: new Date("TIMESTAMP"),
 * //         End: new Date("TIMESTAMP"),
 * //         TimeDelaySeconds: Number("int"),
 * //         ClipStartTime: new Date("TIMESTAMP"),
 * //       },
 * //       ManifestWindowSeconds: Number("int"),
 * //       ManifestLayout: "FULL" || "COMPACT",
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
 * // };
 *
 * ```
 *
 * @param UpdateOriginEndpointCommandInput - {@link UpdateOriginEndpointCommandInput}
 * @returns {@link UpdateOriginEndpointCommandOutput}
 * @see {@link UpdateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.</p>
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
 * @example Updating an OriginEndpoint
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "TS",
 *   Description: "Updated description for exampleOriginEndpointTS",
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
 *     IncludeIframeOnlyStreams: false,
 *     Scte: {
 *       ScteFilter: [
 *         "SPLICE_INSERT"
 *       ]
 *     },
 *     SegmentDurationSeconds: 7,
 *     SegmentName: "segmentName2",
 *     TsIncludeDvbSubtitles: false,
 *     TsUseAudioRenditionGroup: true
 *   },
 *   StartoverWindowSeconds: 600
 * };
 * const command = new UpdateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpointTS",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "TS",
 *   CreatedAt: "2022-10-18T09:36:00.00Z",
 *   Description: "Updated description for exampleOriginEndpointTS",
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
 *     IncludeIframeOnlyStreams: false,
 *     Scte: {
 *       ScteFilter: [
 *         "SPLICE_INSERT"
 *       ]
 *     },
 *     SegmentDurationSeconds: 7,
 *     SegmentName: "segmentName2",
 *     TsIncludeDvbSubtitles: false,
 *     TsUseAudioRenditionGroup: true
 *   },
 *   StartoverWindowSeconds: 600,
 *   Tags: {
 *     key1: "value1",
 *     key2: "value2"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Updating an OriginEndpoint with ISM container
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "ISM",
 *   Description: "Updated description for exampleOriginEndpointISM",
 *   ForceEndpointErrorConfiguration: {
 *     EndpointErrorConditions: [
 *       "STALE_MANIFEST",
 *       "INCOMPLETE_MANIFEST",
 *       "MISSING_DRM_KEY",
 *       "SLATE_INPUT"
 *     ]
 *   },
 *   MssManifests: [
 *     {
 *       ManifestLayout: "FULL",
 *       ManifestName: "exampleMssManifest1",
 *       ManifestWindowSeconds: 60
 *     },
 *     {
 *       ManifestLayout: "COMPACT",
 *       ManifestName: "exampleMssManifest2",
 *       ManifestWindowSeconds: 30
 *     }
 *   ],
 *   OriginEndpointName: "exampleOriginEndpointISM",
 *   Segment: {
 *     Encryption: {
 *       EncryptionMethod: {
 *         IsmEncryptionMethod: "CENC"
 *       },
 *       SpekeKeyProvider: {
 *         DrmSystems: [
 *           "PLAYREADY"
 *         ],
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "SHARED",
 *           PresetSpeke20Video: "SHARED"
 *         },
 *         ResourceId: "ResourceId",
 *         RoleArn: "arn:aws:iam::123456789012:role/empRole",
 *         Url: "https://speke-key-provider.example.com"
 *       }
 *     },
 *     SegmentDurationSeconds: 2,
 *     SegmentName: "segmentName2"
 *   },
 *   StartoverWindowSeconds: 600
 * };
 * const command = new UpdateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpointISM",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "ISM",
 *   CreatedAt: "2022-10-18T09:36:00.00Z",
 *   Description: "Updated description for exampleOriginEndpointISM",
 *   ETag: "HmgU+ewBzHJS5xvz9nLXm2SEQxTsjRfk0rVvuMayoyl=",
 *   ForceEndpointErrorConfiguration: {
 *     EndpointErrorConditions: [
 *       "STALE_MANIFEST",
 *       "INCOMPLETE_MANIFEST",
 *       "MISSING_DRM_KEY",
 *       "SLATE_INPUT"
 *     ]
 *   },
 *   ModifiedAt: "2022-10-18T09:37:00.00Z",
 *   MssManifests: [
 *     {
 *       ManifestLayout: "FULL",
 *       ManifestName: "exampleMssManifest1",
 *       ManifestWindowSeconds: 60,
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointISM/exampleMssManifest1.ism/Manifest"
 *     },
 *     {
 *       ManifestLayout: "COMPACT",
 *       ManifestName: "exampleMssManifest2",
 *       ManifestWindowSeconds: 30,
 *       Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointISM/exampleMssManifest2.ism/Manifest"
 *     }
 *   ],
 *   OriginEndpointName: "exampleOriginEndpointISM",
 *   Segment: {
 *     Encryption: {
 *       EncryptionMethod: {
 *         IsmEncryptionMethod: "CENC"
 *       },
 *       SpekeKeyProvider: {
 *         DrmSystems: [
 *           "PLAYREADY"
 *         ],
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "SHARED",
 *           PresetSpeke20Video: "SHARED"
 *         },
 *         ResourceId: "ResourceId",
 *         RoleArn: "arn:aws:iam::123456789012:role/empRole",
 *         Url: "https://speke-key-provider.example.com"
 *       }
 *     },
 *     SegmentDurationSeconds: 2,
 *     SegmentName: "segmentName2"
 *   },
 *   StartoverWindowSeconds: 600,
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
export class UpdateOriginEndpointCommand extends $Command
  .classBuilder<
    UpdateOriginEndpointCommandInput,
    UpdateOriginEndpointCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "UpdateOriginEndpoint", {})
  .n("MediaPackageV2Client", "UpdateOriginEndpointCommand")
  .sc(UpdateOriginEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOriginEndpointRequest;
      output: UpdateOriginEndpointResponse;
    };
    sdk: {
      input: UpdateOriginEndpointCommandInput;
      output: UpdateOriginEndpointCommandOutput;
    };
  };
}
