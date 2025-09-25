// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { GetPlaybackKeyPairRequest, GetPlaybackKeyPairResponse } from "../models/models_0";
import { GetPlaybackKeyPair } from "../schemas/schemas_9_Playback";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPlaybackKeyPairCommand}.
 */
export interface GetPlaybackKeyPairCommandInput extends GetPlaybackKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link GetPlaybackKeyPairCommand}.
 */
export interface GetPlaybackKeyPairCommandOutput extends GetPlaybackKeyPairResponse, __MetadataBearer {}

/**
 * <p>Gets a specified playback authorization key pair and returns the <code>arn</code> and
 *         <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to
 *       generate viewer authorization tokens, to grant viewers access to private channels. For more
 *       information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User
 *       Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetPlaybackKeyPairCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetPlaybackKeyPairCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetPlaybackKeyPairRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetPlaybackKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // GetPlaybackKeyPairResponse
 * //   keyPair: { // PlaybackKeyPair
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     fingerprint: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPlaybackKeyPairCommandInput - {@link GetPlaybackKeyPairCommandInput}
 * @returns {@link GetPlaybackKeyPairCommandOutput}
 * @see {@link GetPlaybackKeyPairCommandInput} for command's `input` shape.
 * @see {@link GetPlaybackKeyPairCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
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
export class GetPlaybackKeyPairCommand extends $Command
  .classBuilder<
    GetPlaybackKeyPairCommandInput,
    GetPlaybackKeyPairCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "GetPlaybackKeyPair", {})
  .n("IvsClient", "GetPlaybackKeyPairCommand")
  .sc(GetPlaybackKeyPair)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlaybackKeyPairRequest;
      output: GetPlaybackKeyPairResponse;
    };
    sdk: {
      input: GetPlaybackKeyPairCommandInput;
      output: GetPlaybackKeyPairCommandOutput;
    };
  };
}
