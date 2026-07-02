// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListChannelsRequest, ListChannelsResponse } from "../models/models_0";
import { ListChannels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandInput extends ListChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandOutput extends ListChannelsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the channels that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListChannelsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListChannelsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // ListChannelsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsResponse
 * //   Items: [ // __listOfChannel
 * //     { // Channel
 * //       Arn: "STRING_VALUE", // required
 * //       ChannelName: "STRING_VALUE", // required
 * //       ChannelState: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FillerSlate: { // SlateSource
 * //         SourceLocationName: "STRING_VALUE",
 * //         VodSourceName: "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       Outputs: [ // ResponseOutputs // required
 * //         { // ResponseOutputItem
 * //           DashPlaylistSettings: { // DashPlaylistSettings
 * //             ManifestWindowSeconds: Number("int"),
 * //             MinBufferTimeSeconds: Number("int"),
 * //             MinUpdatePeriodSeconds: Number("int"),
 * //             SuggestedPresentationDelaySeconds: Number("int"),
 * //           },
 * //           HlsPlaylistSettings: { // HlsPlaylistSettings
 * //             ManifestWindowSeconds: Number("int"),
 * //             AdMarkupType: [ // adMarkupTypes
 * //               "DATERANGE" || "SCTE35_ENHANCED",
 * //             ],
 * //           },
 * //           ManifestName: "STRING_VALUE", // required
 * //           PlaybackUrl: "STRING_VALUE", // required
 * //           DualStackPlaybackUrl: "STRING_VALUE",
 * //           SourceGroup: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       PlaybackMode: "STRING_VALUE", // required
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Tier: "STRING_VALUE", // required
 * //       LogConfiguration: { // LogConfigurationForChannel
 * //         LogTypes: [ // LogTypes
 * //           "AS_RUN",
 * //         ],
 * //       },
 * //       Audiences: [ // Audiences
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsCommandInput - {@link ListChannelsCommandInput}
 * @returns {@link ListChannelsCommandOutput}
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class ListChannelsCommand extends command<ListChannelsCommandInput, ListChannelsCommandOutput>(
  _ep0,
  _mw0,
  "ListChannels",
  ListChannels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelsRequest;
      output: ListChannelsResponse;
    };
    sdk: {
      input: ListChannelsCommandInput;
      output: ListChannelsCommandOutput;
    };
  };
}
