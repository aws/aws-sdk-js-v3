// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { GetOriginEndpointRequest, GetOriginEndpointResponse } from "../models/models_0";
import { de_GetOriginEndpointCommand, se_GetOriginEndpointCommand } from "../protocols/Aws_restJson1";

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
 * //           "CLEAR_KEY_AES_128" || "FAIRPLAY" || "PLAYREADY" || "WIDEVINE",
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
 * //       },
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
 * //       },
 * //     },
 * //   ],
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
 * //     },
 * //   ],
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
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "GetOriginEndpoint", {})
  .n("MediaPackageV2Client", "GetOriginEndpointCommand")
  .f(void 0, void 0)
  .ser(se_GetOriginEndpointCommand)
  .de(de_GetOriginEndpointCommand)
  .build() {}
