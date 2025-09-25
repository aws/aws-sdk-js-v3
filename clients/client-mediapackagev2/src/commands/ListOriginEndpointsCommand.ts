// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { ListOriginEndpointsRequest, ListOriginEndpointsResponse } from "../models/models_0";
import { ListOriginEndpoints } from "../schemas/schemas_5_Origin";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOriginEndpointsCommand}.
 */
export interface ListOriginEndpointsCommandInput extends ListOriginEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListOriginEndpointsCommand}.
 */
export interface ListOriginEndpointsCommandOutput extends ListOriginEndpointsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all origin endpoints in a specific channel that are configured in AWS Elemental MediaPackage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, ListOriginEndpointsCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, ListOriginEndpointsCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // ListOriginEndpointsRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOriginEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListOriginEndpointsResponse
 * //   Items: [ // OriginEndpointsList
 * //     { // OriginEndpointListConfiguration
 * //       Arn: "STRING_VALUE", // required
 * //       ChannelGroupName: "STRING_VALUE", // required
 * //       ChannelName: "STRING_VALUE", // required
 * //       OriginEndpointName: "STRING_VALUE", // required
 * //       ContainerType: "TS" || "CMAF" || "ISM", // required
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       HlsManifests: [ // ListHlsManifests
 * //         { // ListHlsManifestConfiguration
 * //           ManifestName: "STRING_VALUE", // required
 * //           ChildManifestName: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LowLatencyHlsManifests: [ // ListLowLatencyHlsManifests
 * //         { // ListLowLatencyHlsManifestConfiguration
 * //           ManifestName: "STRING_VALUE", // required
 * //           ChildManifestName: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DashManifests: [ // ListDashManifests
 * //         { // ListDashManifestConfiguration
 * //           ManifestName: "STRING_VALUE", // required
 * //           Url: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MssManifests: [ // ListMssManifests
 * //         { // ListMssManifestConfiguration
 * //           ManifestName: "STRING_VALUE", // required
 * //           Url: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ForceEndpointErrorConfiguration: { // ForceEndpointErrorConfiguration
 * //         EndpointErrorConditions: [ // EndpointErrorConditions
 * //           "STALE_MANIFEST" || "INCOMPLETE_MANIFEST" || "MISSING_DRM_KEY" || "SLATE_INPUT",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOriginEndpointsCommandInput - {@link ListOriginEndpointsCommandInput}
 * @returns {@link ListOriginEndpointsCommandOutput}
 * @see {@link ListOriginEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListOriginEndpointsCommandOutput} for command's `response` shape.
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
 * @example Listing all OriginEndpoints
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel"
 * };
 * const command = new ListOriginEndpointsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpointTS",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannel",
 *       ContainerType: "TS",
 *       CreatedAt: "2022-10-18T09:36:00.00Z",
 *       Description: "Description for exampleOriginEndpointTS",
 *       ForceEndpointErrorConfiguration: {
 *         EndpointErrorConditions: [
 *           "STALE_MANIFEST",
 *           "INCOMPLETE_MANIFEST",
 *           "MISSING_DRM_KEY",
 *           "SLATE_INPUT"
 *         ]
 *       },
 *       HlsManifests: [
 *         {
 *           ChildManifestName: "exampleChildManifest1",
 *           ManifestName: "exampleManifest1",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointTS/exampleManifest1.m3u8"
 *         },
 *         {
 *           ChildManifestName: "exampleManifest2",
 *           ManifestName: "exampleManifest2",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointTS/exampleManifest2.m3u8"
 *         }
 *       ],
 *       LowLatencyHlsManifests: [
 *         {
 *           ChildManifestName: "exampleLLChildManifest1",
 *           ManifestName: "exampleLLManifest1",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointTS/exampleLLManifest1.m3u8"
 *         },
 *         {
 *           ChildManifestName: "exampleLLManifest2",
 *           ManifestName: "exampleLLManifest2",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointTS/exampleLLManifest2.m3u8"
 *         }
 *       ],
 *       ModifiedAt: "2022-10-18T09:36:00.00Z",
 *       OriginEndpointName: "exampleOriginEndpointTS"
 *     },
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpointCMAF",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannel",
 *       ContainerType: "CMAF",
 *       CreatedAt: "2022-10-18T09:36:00.00Z",
 *       DashManifests: [
 *         {
 *           ManifestName: "exampleDashManifest1",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleDashManifest1.mpd"
 *         },
 *         {
 *           ManifestName: "exampleDashManifest2",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleDashManifest2.mpd"
 *         }
 *       ],
 *       ForceEndpointErrorConfiguration: {
 *         EndpointErrorConditions: [
 *           "STALE_MANIFEST",
 *           "INCOMPLETE_MANIFEST",
 *           "MISSING_DRM_KEY",
 *           "SLATE_INPUT"
 *         ]
 *       },
 *       HlsManifests: [
 *         {
 *           ChildManifestName: "exampleChildManifest1",
 *           ManifestName: "exampleManifest1",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleManifest1.m3u8"
 *         },
 *         {
 *           ChildManifestName: "exampleManifest2",
 *           ManifestName: "exampleManifest2",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleManifest2.m3u8"
 *         }
 *       ],
 *       LowLatencyHlsManifests: [
 *         {
 *           ChildManifestName: "exampleLLChildManifest1",
 *           ManifestName: "exampleLLManifest1",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleLLManifest1.m3u8"
 *         },
 *         {
 *           ChildManifestName: "exampleLLManifest2",
 *           ManifestName: "exampleLLManifest2",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointCMAF/exampleLLManifest2.m3u8"
 *         }
 *       ],
 *       ModifiedAt: "2022-10-18T09:36:00.00Z",
 *       OriginEndpointName: "exampleOriginEndpointCMAF"
 *     },
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpointISM",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannel",
 *       ContainerType: "ISM",
 *       CreatedAt: "2022-10-18T09:36:00.00Z",
 *       Description: "Description for exampleOriginEndpointISM",
 *       ForceEndpointErrorConfiguration: {
 *         EndpointErrorConditions: [
 *           "STALE_MANIFEST",
 *           "INCOMPLETE_MANIFEST",
 *           "MISSING_DRM_KEY",
 *           "SLATE_INPUT"
 *         ]
 *       },
 *       ModifiedAt: "2022-10-18T09:36:00.00Z",
 *       MssManifests: [
 *         {
 *           ManifestName: "exampleMssManifest1",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointISM/exampleMssManifest1.ism/Manifest"
 *         },
 *         {
 *           ManifestName: "exampleMssManifest2",
 *           Url: "https://abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com/out/v1/exampleChannelGroup/exampleChannel/exampleOriginEndpointISM/exampleMssManifest2.ism/Manifest"
 *         }
 *       ],
 *       OriginEndpointName: "exampleOriginEndpointISM"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListOriginEndpointsCommand extends $Command
  .classBuilder<
    ListOriginEndpointsCommandInput,
    ListOriginEndpointsCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "ListOriginEndpoints", {})
  .n("MediaPackageV2Client", "ListOriginEndpointsCommand")
  .sc(ListOriginEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOriginEndpointsRequest;
      output: ListOriginEndpointsResponse;
    };
    sdk: {
      input: ListOriginEndpointsCommandInput;
      output: ListOriginEndpointsCommandOutput;
    };
  };
}
