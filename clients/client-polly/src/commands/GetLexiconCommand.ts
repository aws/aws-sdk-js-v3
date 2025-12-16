// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLexiconInput, GetLexiconOutput } from "../models/models_0";
import type { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { GetLexicon$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLexiconCommand}.
 */
export interface GetLexiconCommandInput extends GetLexiconInput {}
/**
 * @public
 *
 * The output of {@link GetLexiconCommand}.
 */
export interface GetLexiconCommandOutput extends GetLexiconOutput, __MetadataBearer {}

/**
 * <p>Returns the content of the specified pronunciation lexicon stored
 *       in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, GetLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, GetLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // GetLexiconInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetLexiconCommand(input);
 * const response = await client.send(command);
 * // { // GetLexiconOutput
 * //   Lexicon: { // Lexicon
 * //     Content: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * //   LexiconAttributes: { // LexiconAttributes
 * //     Alphabet: "STRING_VALUE",
 * //     LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 * //     LastModified: new Date("TIMESTAMP"),
 * //     LexiconArn: "STRING_VALUE",
 * //     LexemesCount: Number("int"),
 * //     Size: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLexiconCommandInput - {@link GetLexiconCommandInput}
 * @returns {@link GetLexiconCommandOutput}
 * @see {@link GetLexiconCommandInput} for command's `input` shape.
 * @see {@link GetLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link LexiconNotFoundException} (client fault)
 *  <p>Amazon Polly can't find the specified lexicon. This could be caused by a
 *       lexicon that is missing, its name is misspelled or specifying a lexicon
 *       that is in a different region.</p>
 *          <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled
 *       correctly. Then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 *
 * @public
 */
export class GetLexiconCommand extends $Command
  .classBuilder<
    GetLexiconCommandInput,
    GetLexiconCommandOutput,
    PollyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PollyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Parrot_v1", "GetLexicon", {})
  .n("PollyClient", "GetLexiconCommand")
  .sc(GetLexicon$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLexiconInput;
      output: GetLexiconOutput;
    };
    sdk: {
      input: GetLexiconCommandInput;
      output: GetLexiconCommandOutput;
    };
  };
}
