// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
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
 * Creates a new OriginEndpoint record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // CreateOriginEndpointRequest
 *   Authorization: { // Authorization
 *     CdnIdentifierSecret: "STRING_VALUE", // required
 *     SecretsRoleArn: "STRING_VALUE", // required
 *   },
 *   ChannelId: "STRING_VALUE", // required
 *   CmafPackage: { // CmafPackageCreateOrUpdateParameters
 *     Encryption: { // CmafEncryption
 *       ConstantInitializationVector: "STRING_VALUE",
 *       EncryptionMethod: "SAMPLE_AES" || "AES_CTR",
 *       KeyRotationIntervalSeconds: Number("int"),
 *       SpekeKeyProvider: { // SpekeKeyProvider
 *         CertificateArn: "STRING_VALUE",
 *         EncryptionContractConfiguration: { // EncryptionContractConfiguration
 *           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *         SystemIds: [ // __listOf__string // required
 *           "STRING_VALUE",
 *         ],
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *     HlsManifests: [ // __listOfHlsManifestCreateOrUpdateParameters
 *       { // HlsManifestCreateOrUpdateParameters
 *         AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH" || "DATERANGE",
 *         AdTriggers: [ // AdTriggers
 *           "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 *         ],
 *         AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 *         Id: "STRING_VALUE", // required
 *         IncludeIframeOnlyStream: true || false,
 *         ManifestName: "STRING_VALUE",
 *         PlaylistType: "NONE" || "EVENT" || "VOD",
 *         PlaylistWindowSeconds: Number("int"),
 *         ProgramDateTimeIntervalSeconds: Number("int"),
 *       },
 *     ],
 *     SegmentDurationSeconds: Number("int"),
 *     SegmentPrefix: "STRING_VALUE",
 *     StreamSelection: { // StreamSelection
 *       MaxVideoBitsPerSecond: Number("int"),
 *       MinVideoBitsPerSecond: Number("int"),
 *       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 *     },
 *   },
 *   DashPackage: { // DashPackage
 *     AdTriggers: [
 *       "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 *     ],
 *     AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 *     Encryption: { // DashEncryption
 *       KeyRotationIntervalSeconds: Number("int"),
 *       SpekeKeyProvider: {
 *         CertificateArn: "STRING_VALUE",
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *         SystemIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *     IncludeIframeOnlyStream: true || false,
 *     ManifestLayout: "FULL" || "COMPACT" || "DRM_TOP_LEVEL_COMPACT",
 *     ManifestWindowSeconds: Number("int"),
 *     MinBufferTimeSeconds: Number("int"),
 *     MinUpdatePeriodSeconds: Number("int"),
 *     PeriodTriggers: [ // __listOf__PeriodTriggersElement
 *       "ADS",
 *     ],
 *     Profile: "NONE" || "HBBTV_1_5" || "HYBRIDCAST" || "DVB_DASH_2014",
 *     SegmentDurationSeconds: Number("int"),
 *     SegmentTemplateFormat: "NUMBER_WITH_TIMELINE" || "TIME_WITH_TIMELINE" || "NUMBER_WITH_DURATION",
 *     StreamSelection: {
 *       MaxVideoBitsPerSecond: Number("int"),
 *       MinVideoBitsPerSecond: Number("int"),
 *       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 *     },
 *     SuggestedPresentationDelaySeconds: Number("int"),
 *     UtcTiming: "NONE" || "HTTP-HEAD" || "HTTP-ISO" || "HTTP-XSDATE",
 *     UtcTimingUri: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   HlsPackage: { // HlsPackage
 *     AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH" || "DATERANGE",
 *     AdTriggers: [
 *       "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 *     ],
 *     AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 *     Encryption: { // HlsEncryption
 *       ConstantInitializationVector: "STRING_VALUE",
 *       EncryptionMethod: "AES_128" || "SAMPLE_AES",
 *       KeyRotationIntervalSeconds: Number("int"),
 *       RepeatExtXKey: true || false,
 *       SpekeKeyProvider: {
 *         CertificateArn: "STRING_VALUE",
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *         SystemIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *     IncludeDvbSubtitles: true || false,
 *     IncludeIframeOnlyStream: true || false,
 *     PlaylistType: "NONE" || "EVENT" || "VOD",
 *     PlaylistWindowSeconds: Number("int"),
 *     ProgramDateTimeIntervalSeconds: Number("int"),
 *     SegmentDurationSeconds: Number("int"),
 *     StreamSelection: {
 *       MaxVideoBitsPerSecond: Number("int"),
 *       MinVideoBitsPerSecond: Number("int"),
 *       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 *     },
 *     UseAudioRenditionGroup: true || false,
 *   },
 *   Id: "STRING_VALUE", // required
 *   ManifestName: "STRING_VALUE",
 *   MssPackage: { // MssPackage
 *     Encryption: { // MssEncryption
 *       SpekeKeyProvider: {
 *         CertificateArn: "STRING_VALUE",
 *         EncryptionContractConfiguration: {
 *           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *         SystemIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *     ManifestWindowSeconds: Number("int"),
 *     SegmentDurationSeconds: Number("int"),
 *     StreamSelection: {
 *       MaxVideoBitsPerSecond: Number("int"),
 *       MinVideoBitsPerSecond: Number("int"),
 *       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 *     },
 *   },
 *   Origination: "ALLOW" || "DENY",
 *   StartoverWindowSeconds: Number("int"),
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TimeDelaySeconds: Number("int"),
 *   Whitelist: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateOriginEndpointResponse
 * //   Arn: "STRING_VALUE",
 * //   Authorization: { // Authorization
 * //     CdnIdentifierSecret: "STRING_VALUE", // required
 * //     SecretsRoleArn: "STRING_VALUE", // required
 * //   },
 * //   ChannelId: "STRING_VALUE",
 * //   CmafPackage: { // CmafPackage
 * //     Encryption: { // CmafEncryption
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       EncryptionMethod: "SAMPLE_AES" || "AES_CTR",
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       SpekeKeyProvider: { // SpekeKeyProvider
 * //         CertificateArn: "STRING_VALUE",
 * //         EncryptionContractConfiguration: { // EncryptionContractConfiguration
 * //           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SystemIds: [ // __listOf__string // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     HlsManifests: [ // __listOfHlsManifest
 * //       { // HlsManifest
 * //         AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH" || "DATERANGE",
 * //         Id: "STRING_VALUE", // required
 * //         IncludeIframeOnlyStream: true || false,
 * //         ManifestName: "STRING_VALUE",
 * //         PlaylistType: "NONE" || "EVENT" || "VOD",
 * //         PlaylistWindowSeconds: Number("int"),
 * //         ProgramDateTimeIntervalSeconds: Number("int"),
 * //         Url: "STRING_VALUE",
 * //         AdTriggers: [ // AdTriggers
 * //           "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 * //         ],
 * //         AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 * //       },
 * //     ],
 * //     SegmentDurationSeconds: Number("int"),
 * //     SegmentPrefix: "STRING_VALUE",
 * //     StreamSelection: { // StreamSelection
 * //       MaxVideoBitsPerSecond: Number("int"),
 * //       MinVideoBitsPerSecond: Number("int"),
 * //       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //     },
 * //   },
 * //   CreatedAt: "STRING_VALUE",
 * //   DashPackage: { // DashPackage
 * //     AdTriggers: [
 * //       "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 * //     ],
 * //     AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 * //     Encryption: { // DashEncryption
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       SpekeKeyProvider: {
 * //         CertificateArn: "STRING_VALUE",
 * //         EncryptionContractConfiguration: {
 * //           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SystemIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     IncludeIframeOnlyStream: true || false,
 * //     ManifestLayout: "FULL" || "COMPACT" || "DRM_TOP_LEVEL_COMPACT",
 * //     ManifestWindowSeconds: Number("int"),
 * //     MinBufferTimeSeconds: Number("int"),
 * //     MinUpdatePeriodSeconds: Number("int"),
 * //     PeriodTriggers: [ // __listOf__PeriodTriggersElement
 * //       "ADS",
 * //     ],
 * //     Profile: "NONE" || "HBBTV_1_5" || "HYBRIDCAST" || "DVB_DASH_2014",
 * //     SegmentDurationSeconds: Number("int"),
 * //     SegmentTemplateFormat: "NUMBER_WITH_TIMELINE" || "TIME_WITH_TIMELINE" || "NUMBER_WITH_DURATION",
 * //     StreamSelection: {
 * //       MaxVideoBitsPerSecond: Number("int"),
 * //       MinVideoBitsPerSecond: Number("int"),
 * //       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //     },
 * //     SuggestedPresentationDelaySeconds: Number("int"),
 * //     UtcTiming: "NONE" || "HTTP-HEAD" || "HTTP-ISO" || "HTTP-XSDATE",
 * //     UtcTimingUri: "STRING_VALUE",
 * //   },
 * //   Description: "STRING_VALUE",
 * //   HlsPackage: { // HlsPackage
 * //     AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH" || "DATERANGE",
 * //     AdTriggers: [
 * //       "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 * //     ],
 * //     AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 * //     Encryption: { // HlsEncryption
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       EncryptionMethod: "AES_128" || "SAMPLE_AES",
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       RepeatExtXKey: true || false,
 * //       SpekeKeyProvider: {
 * //         CertificateArn: "STRING_VALUE",
 * //         EncryptionContractConfiguration: {
 * //           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SystemIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     IncludeDvbSubtitles: true || false,
 * //     IncludeIframeOnlyStream: true || false,
 * //     PlaylistType: "NONE" || "EVENT" || "VOD",
 * //     PlaylistWindowSeconds: Number("int"),
 * //     ProgramDateTimeIntervalSeconds: Number("int"),
 * //     SegmentDurationSeconds: Number("int"),
 * //     StreamSelection: {
 * //       MaxVideoBitsPerSecond: Number("int"),
 * //       MinVideoBitsPerSecond: Number("int"),
 * //       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //     },
 * //     UseAudioRenditionGroup: true || false,
 * //   },
 * //   Id: "STRING_VALUE",
 * //   ManifestName: "STRING_VALUE",
 * //   MssPackage: { // MssPackage
 * //     Encryption: { // MssEncryption
 * //       SpekeKeyProvider: {
 * //         CertificateArn: "STRING_VALUE",
 * //         EncryptionContractConfiguration: {
 * //           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SystemIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     ManifestWindowSeconds: Number("int"),
 * //     SegmentDurationSeconds: Number("int"),
 * //     StreamSelection: {
 * //       MaxVideoBitsPerSecond: Number("int"),
 * //       MinVideoBitsPerSecond: Number("int"),
 * //       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //     },
 * //   },
 * //   Origination: "ALLOW" || "DENY",
 * //   StartoverWindowSeconds: Number("int"),
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TimeDelaySeconds: Number("int"),
 * //   Url: "STRING_VALUE",
 * //   Whitelist: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateOriginEndpointCommandInput - {@link CreateOriginEndpointCommandInput}
 * @returns {@link CreateOriginEndpointCommandOutput}
 * @see {@link CreateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 * @public
 */
export class CreateOriginEndpointCommand extends $Command
  .classBuilder<
    CreateOriginEndpointCommandInput,
    CreateOriginEndpointCommandOutput,
    MediaPackageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaPackageClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaPackage", "CreateOriginEndpoint", {})
  .n("MediaPackageClient", "CreateOriginEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateOriginEndpointCommand)
  .de(de_CreateOriginEndpointCommand)
  .build() {}
