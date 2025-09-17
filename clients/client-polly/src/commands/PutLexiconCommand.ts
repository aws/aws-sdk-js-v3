// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutLexiconInput, PutLexiconInputFilterSensitiveLog, PutLexiconOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_PutLexiconCommand, se_PutLexiconCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLexiconCommand}.
 */
export interface PutLexiconCommandInput extends PutLexiconInput {}
/**
 * @public
 *
 * The output of {@link PutLexiconCommand}.
 */
export interface PutLexiconCommandOutput extends PutLexiconOutput, __MetadataBearer {}

/**
 * <p>Stores a pronunciation lexicon in an Amazon Web Services Region. If
 *       a lexicon with the same name already exists in the region, it is
 *       overwritten by the new lexicon. Lexicon operations have eventual
 *       consistency, therefore, it might take some time before the lexicon is
 *       available to the SynthesizeSpeech operation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, PutLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, PutLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // PutLexiconInput
 *   Name: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 * };
 * const command = new PutLexiconCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLexiconCommandInput - {@link PutLexiconCommandInput}
 * @returns {@link PutLexiconCommandOutput}
 * @see {@link PutLexiconCommandInput} for command's `input` shape.
 * @see {@link PutLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link InvalidLexiconException} (client fault)
 *  <p>Amazon Polly can't find the specified lexicon. Verify that the lexicon's
 *       name is spelled correctly, and then try again.</p>
 *
 * @throws {@link LexiconSizeExceededException} (client fault)
 *  <p>The maximum size of the specified lexicon would be exceeded by this
 *       operation.</p>
 *
 * @throws {@link MaxLexemeLengthExceededException} (client fault)
 *  <p>The maximum size of the lexeme would be exceeded by this
 *       operation.</p>
 *
 * @throws {@link MaxLexiconsNumberExceededException} (client fault)
 *  <p>The maximum number of lexicons would be exceeded by this
 *       operation.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link UnsupportedPlsAlphabetException} (client fault)
 *  <p>The alphabet specified by the lexicon is not a supported alphabet.
 *       Valid values are <code>x-sampa</code> and <code>ipa</code>.</p>
 *
 * @throws {@link UnsupportedPlsLanguageException} (client fault)
 *  <p>The language specified in the lexicon is unsupported. For a list of
 *       supported languages, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html">Lexicon Attributes</a>.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 *
 * @example To save a lexicon
 * ```javascript
 * // Stores a pronunciation lexicon in an AWS Region.
 * const input = {
 *   Content: "<Lexicon Content>",
 *   Name: "W3C"
 * };
 * const command = new PutLexiconCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutLexiconCommand extends $Command
  .classBuilder<
    PutLexiconCommandInput,
    PutLexiconCommandOutput,
    PollyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PollyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Parrot_v1", "PutLexicon", {})
  .n("PollyClient", "PutLexiconCommand")
  .f(PutLexiconInputFilterSensitiveLog, void 0)
  .ser(se_PutLexiconCommand)
  .de(de_PutLexiconCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLexiconInput;
      output: {};
    };
    sdk: {
      input: PutLexiconCommandInput;
      output: PutLexiconCommandOutput;
    };
  };
}
