// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { ImportPlaybackKeyPairRequest, ImportPlaybackKeyPairResponse } from "../models/models_0";
import { de_ImportPlaybackKeyPairCommand, se_ImportPlaybackKeyPairCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportPlaybackKeyPairCommand}.
 */
export interface ImportPlaybackKeyPairCommandInput extends ImportPlaybackKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link ImportPlaybackKeyPairCommand}.
 */
export interface ImportPlaybackKeyPairCommandOutput extends ImportPlaybackKeyPairResponse, __MetadataBearer {}

/**
 * <p>Imports the public portion of a new key pair and returns its <code>arn</code> and
 *         <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer
 *       authorization tokens, to grant viewers access to private channels. For more information, see
 *         <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up
 *         Private Channels</a> in the <i>Amazon IVS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ImportPlaybackKeyPairCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ImportPlaybackKeyPairCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // ImportPlaybackKeyPairRequest
 *   publicKeyMaterial: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ImportPlaybackKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // ImportPlaybackKeyPairResponse
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
 * @param ImportPlaybackKeyPairCommandInput - {@link ImportPlaybackKeyPairCommandInput}
 * @returns {@link ImportPlaybackKeyPairCommandOutput}
 * @see {@link ImportPlaybackKeyPairCommandInput} for command's `input` shape.
 * @see {@link ImportPlaybackKeyPairCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
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
export class ImportPlaybackKeyPairCommand extends $Command
  .classBuilder<
    ImportPlaybackKeyPairCommandInput,
    ImportPlaybackKeyPairCommandOutput,
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
  .s("AmazonInteractiveVideoService", "ImportPlaybackKeyPair", {})
  .n("IvsClient", "ImportPlaybackKeyPairCommand")
  .f(void 0, void 0)
  .ser(se_ImportPlaybackKeyPairCommand)
  .de(de_ImportPlaybackKeyPairCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportPlaybackKeyPairRequest;
      output: ImportPlaybackKeyPairResponse;
    };
    sdk: {
      input: ImportPlaybackKeyPairCommandInput;
      output: ImportPlaybackKeyPairCommandOutput;
    };
  };
}
