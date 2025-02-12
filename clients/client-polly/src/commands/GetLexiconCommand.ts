// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLexiconInput, GetLexiconOutput, GetLexiconOutputFilterSensitiveLog } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_GetLexiconCommand, se_GetLexiconCommand } from "../protocols/Aws_restJson1";

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
 * @public
 * @example To retrieve a lexicon
 * ```javascript
 * // Returns the content of the specified pronunciation lexicon stored in an AWS Region.
 * const input = {
 *   "Name": ""
 * };
 * const command = new GetLexiconCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Lexicon": {
 *     "Content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<lexicon version=\"1.0\" \r\n      xmlns=\"http://www.w3.org/2005/01/pronunciation-lexicon\"\r\n      xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \r\n      xsi:schemaLocation=\"http://www.w3.org/2005/01/pronunciation-lexicon \r\n        http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd\"\r\n      alphabet=\"ipa\" \r\n      xml:lang=\"en-US\">\r\n  <lexeme>\r\n    <grapheme>W3C</grapheme>\r\n    <alias>World Wide Web Consortium</alias>\r\n  </lexeme>\r\n</lexicon>",
 *     "Name": "example"
 *   },
 *   "LexiconAttributes": {
 *     "Alphabet": "ipa",
 *     "LanguageCode": "en-US",
 *     "LastModified": 1478542980.117,
 *     "LexemesCount": 1,
 *     "LexiconArn": "arn:aws:polly:us-east-1:123456789012:lexicon/example",
 *     "Size": 503
 *   }
 * }
 * *\/
 * // example id: to-retrieve-a-lexicon-1481912870836
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Parrot_v1", "GetLexicon", {})
  .n("PollyClient", "GetLexiconCommand")
  .f(void 0, GetLexiconOutputFilterSensitiveLog)
  .ser(se_GetLexiconCommand)
  .de(de_GetLexiconCommand)
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
