// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { GetPlaybackKeyPairRequest, GetPlaybackKeyPairResponse } from "../models/models_0";
import { de_GetPlaybackKeyPairCommand, se_GetPlaybackKeyPairCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "GetPlaybackKeyPair", {})
  .n("IvsClient", "GetPlaybackKeyPairCommand")
  .f(void 0, void 0)
  .ser(se_GetPlaybackKeyPairCommand)
  .de(de_GetPlaybackKeyPairCommand)
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
