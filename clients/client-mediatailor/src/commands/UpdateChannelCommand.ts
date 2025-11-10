// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateChannelRequest, UpdateChannelResponse } from "../models/models_0";
import { UpdateChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandInput extends UpdateChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandOutput extends UpdateChannelResponse, __MetadataBearer {}

/**
 * <p>Updates a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // UpdateChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 *   FillerSlate: { // SlateSource
 *     SourceLocationName: "STRING_VALUE",
 *     VodSourceName: "STRING_VALUE",
 *   },
 *   Outputs: [ // RequestOutputs // required
 *     { // RequestOutputItem
 *       DashPlaylistSettings: { // DashPlaylistSettings
 *         ManifestWindowSeconds: Number("int"),
 *         MinBufferTimeSeconds: Number("int"),
 *         MinUpdatePeriodSeconds: Number("int"),
 *         SuggestedPresentationDelaySeconds: Number("int"),
 *       },
 *       HlsPlaylistSettings: { // HlsPlaylistSettings
 *         ManifestWindowSeconds: Number("int"),
 *         AdMarkupType: [ // adMarkupTypes
 *           "DATERANGE" || "SCTE35_ENHANCED",
 *         ],
 *       },
 *       ManifestName: "STRING_VALUE", // required
 *       SourceGroup: "STRING_VALUE", // required
 *     },
 *   ],
 *   TimeShiftConfiguration: { // TimeShiftConfiguration
 *     MaxTimeDelaySeconds: Number("int"), // required
 *   },
 *   Audiences: [ // Audiences
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelName: "STRING_VALUE",
 * //   ChannelState: "RUNNING" || "STOPPED",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   FillerSlate: { // SlateSource
 * //     SourceLocationName: "STRING_VALUE",
 * //     VodSourceName: "STRING_VALUE",
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   Outputs: [ // ResponseOutputs
 * //     { // ResponseOutputItem
 * //       DashPlaylistSettings: { // DashPlaylistSettings
 * //         ManifestWindowSeconds: Number("int"),
 * //         MinBufferTimeSeconds: Number("int"),
 * //         MinUpdatePeriodSeconds: Number("int"),
 * //         SuggestedPresentationDelaySeconds: Number("int"),
 * //       },
 * //       HlsPlaylistSettings: { // HlsPlaylistSettings
 * //         ManifestWindowSeconds: Number("int"),
 * //         AdMarkupType: [ // adMarkupTypes
 * //           "DATERANGE" || "SCTE35_ENHANCED",
 * //         ],
 * //       },
 * //       ManifestName: "STRING_VALUE", // required
 * //       PlaybackUrl: "STRING_VALUE", // required
 * //       SourceGroup: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   PlaybackMode: "STRING_VALUE",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tier: "STRING_VALUE",
 * //   TimeShiftConfiguration: { // TimeShiftConfiguration
 * //     MaxTimeDelaySeconds: Number("int"), // required
 * //   },
 * //   Audiences: [ // Audiences
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateChannelCommandInput - {@link UpdateChannelCommandInput}
 * @returns {@link UpdateChannelCommandOutput}
 * @see {@link UpdateChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class UpdateChannelCommand extends $Command
  .classBuilder<
    UpdateChannelCommandInput,
    UpdateChannelCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "UpdateChannel", {})
  .n("MediaTailorClient", "UpdateChannelCommand")
  .sc(UpdateChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelRequest;
      output: UpdateChannelResponse;
    };
    sdk: {
      input: UpdateChannelCommandInput;
      output: UpdateChannelCommandOutput;
    };
  };
}
