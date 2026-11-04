// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeChannelRequest, DescribeChannelResponse } from "../models/models_0";
import { DescribeChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes a channel. For information about MediaTailor channels, see [Working with channels](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html) in the *MediaTailor User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
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
 * //       DualStackPlaybackUrl: "STRING_VALUE",
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
 *
 * Base exception class for all service exceptions from MediaTailor service.
 *
 * @public
 */
export class DescribeChannelCommand extends command<DescribeChannelCommandInput, DescribeChannelCommandOutput>(
  _ep0,
  _mw0,
  "DescribeChannel",
  DescribeChannel$
) {
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
