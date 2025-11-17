// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { GetOriginEndpointRequest, GetOriginEndpointResponse } from "../models/models_0";
import { GetOriginEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOriginEndpointCommand}.
 */
export interface GetOriginEndpointCommandInput extends GetOriginEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginEndpointCommand}.
 */
export interface GetOriginEndpointCommandOutput extends GetOriginEndpointResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified origin endpoint that's configured in AWS Elemental MediaPackage to obtain its playback URL and to view the packaging settings that it's currently using.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, GetOriginEndpointCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, GetOriginEndpointCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // GetOriginEndpointRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 * };
 * const command = new GetOriginEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetOriginEndpointResponse
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
 * //       ScteInSegments: "NONE" || "ALL",
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
 * //   ResetAt: new Date("TIMESTAMP"),
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
 * // };
 *
 * ```
 *
 * @param GetOriginEndpointCommandInput - {@link GetOriginEndpointCommandInput}
 * @returns {@link GetOriginEndpointCommandOutput}
 * @see {@link GetOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link GetOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
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
 * @example Getting an OriginEndpoint
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   OriginEndpointName: "exampleOriginEndpointTS"
 * };
 * const command = new GetOriginEndpointCommand(input);
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
 * @example Getting an OriginEndpoint with ISM container
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   OriginEndpointName: "exampleOriginEndpointISM"
 * };
 * const command = new GetOriginEndpointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpointISM",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ContainerType: "ISM",
 *   CreatedAt: "2022-10-18T09:36:00.00Z",
 *   Description: "Description for exampleOriginEndpointISM",
 *   ETag: "HmgU+ewBzHJS5xvz9nLXm2SEQxTsjRfk0rVvuMayoyl=",
 *   ForceEndpointErrorConfiguration: {
 *     EndpointErrorConditions: [
 *       "STALE_MANIFEST",
 *       "INCOMPLETE_MANIFEST",
 *       "MISSING_DRM_KEY",
 *       "SLATE_INPUT"
 *     ]
 *   },
 *   ModifiedAt: "2022-10-18T09:36:00.00Z",
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
export class GetOriginEndpointCommand extends $Command
  .classBuilder<
    GetOriginEndpointCommandInput,
    GetOriginEndpointCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "GetOriginEndpoint", {})
  .n("MediaPackageV2Client", "GetOriginEndpointCommand")
  .sc(GetOriginEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOriginEndpointRequest;
      output: GetOriginEndpointResponse;
    };
    sdk: {
      input: GetOriginEndpointCommandInput;
      output: GetOriginEndpointCommandOutput;
    };
  };
}
