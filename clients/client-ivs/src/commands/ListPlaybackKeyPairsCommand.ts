// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { ListPlaybackKeyPairsRequest, ListPlaybackKeyPairsResponse } from "../models/models_0";
import { ListPlaybackKeyPairs } from "../schemas/schemas_7_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlaybackKeyPairsCommand}.
 */
export interface ListPlaybackKeyPairsCommandInput extends ListPlaybackKeyPairsRequest {}
/**
 * @public
 *
 * The output of {@link ListPlaybackKeyPairsCommand}.
 */
export interface ListPlaybackKeyPairsCommandOutput extends ListPlaybackKeyPairsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private
 *         Channels</a> in the <i>Amazon IVS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListPlaybackKeyPairsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListPlaybackKeyPairsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // ListPlaybackKeyPairsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPlaybackKeyPairsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlaybackKeyPairsResponse
 * //   keyPairs: [ // PlaybackKeyPairList // required
 * //     { // PlaybackKeyPairSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlaybackKeyPairsCommandInput - {@link ListPlaybackKeyPairsCommandInput}
 * @returns {@link ListPlaybackKeyPairsCommandOutput}
 * @see {@link ListPlaybackKeyPairsCommandInput} for command's `input` shape.
 * @see {@link ListPlaybackKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class ListPlaybackKeyPairsCommand extends $Command
  .classBuilder<
    ListPlaybackKeyPairsCommandInput,
    ListPlaybackKeyPairsCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "ListPlaybackKeyPairs", {})
  .n("IvsClient", "ListPlaybackKeyPairsCommand")
  .sc(ListPlaybackKeyPairs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlaybackKeyPairsRequest;
      output: ListPlaybackKeyPairsResponse;
    };
    sdk: {
      input: ListPlaybackKeyPairsCommandInput;
      output: ListPlaybackKeyPairsCommandOutput;
    };
  };
}
