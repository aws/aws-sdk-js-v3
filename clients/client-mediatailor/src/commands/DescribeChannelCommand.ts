// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DescribeChannelRequest, DescribeChannelResponse } from "../models/models_0";
import { de_DescribeChannelCommand, se_DescribeChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandInput extends DescribeChannelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandOutput extends DescribeChannelResponse, __MetadataBearer {}

/**
 * <p>Describes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // DescribeChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelResponse
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
 * //   LogConfiguration: { // LogConfigurationForChannel
 * //     LogTypes: [ // LogTypes
 * //       "AS_RUN",
 * //     ],
 * //   },
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
 * @param DescribeChannelCommandInput - {@link DescribeChannelCommandInput}
 * @returns {@link DescribeChannelCommandOutput}
 * @see {@link DescribeChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DescribeChannelCommand extends $Command
  .classBuilder<
    DescribeChannelCommandInput,
    DescribeChannelCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "DescribeChannel", {})
  .n("MediaTailorClient", "DescribeChannelCommand")
  .f(void 0, void 0)
  .ser(se_DescribeChannelCommand)
  .de(de_DescribeChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelRequest;
      output: DescribeChannelResponse;
    };
    sdk: {
      input: DescribeChannelCommandInput;
      output: DescribeChannelCommandOutput;
    };
  };
}
