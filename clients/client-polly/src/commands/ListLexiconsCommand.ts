// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListLexiconsInput, ListLexiconsOutput } from "../models/models_0";
import type { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { ListLexicons$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLexiconsCommand}.
 */
export interface ListLexiconsCommandInput extends ListLexiconsInput {}
/**
 * @public
 *
 * The output of {@link ListLexiconsCommand}.
 */
export interface ListLexiconsCommandOutput extends ListLexiconsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, ListLexiconsCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, ListLexiconsCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // ListLexiconsInput
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLexiconsCommand(input);
 * const response = await client.send(command);
 * // { // ListLexiconsOutput
 * //   Lexicons: [ // LexiconDescriptionList
 * //     { // LexiconDescription
 * //       Name: "STRING_VALUE",
 * //       Attributes: { // LexiconAttributes
 * //         Alphabet: "STRING_VALUE",
 * //         LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 * //         LastModified: new Date("TIMESTAMP"),
 * //         LexiconArn: "STRING_VALUE",
 * //         LexemesCount: Number("int"),
 * //         Size: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLexiconsCommandInput - {@link ListLexiconsCommandInput}
 * @returns {@link ListLexiconsCommandOutput}
 * @see {@link ListLexiconsCommandInput} for command's `input` shape.
 * @see {@link ListLexiconsCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The NextToken is invalid. Verify that it's spelled correctly, and
 *       then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 *
 * @example To list all lexicons in a region
 * ```javascript
 * // Returns a list of pronunciation lexicons stored in an AWS Region.
 * const input = { /* empty *\/ };
 * const command = new ListLexiconsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Lexicons: [
 *     {
 *       Attributes: {
 *         Alphabet: "ipa",
 *         LanguageCode: "en-US",
 *         LastModified: 1.478542980117E9,
 *         LexemesCount: 1,
 *         LexiconArn: "arn:aws:polly:us-east-1:123456789012:lexicon/example",
 *         Size: 503
 *       },
 *       Name: "example"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListLexiconsCommand extends $Command
  .classBuilder<
    ListLexiconsCommandInput,
    ListLexiconsCommandOutput,
    PollyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PollyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Parrot_v1", "ListLexicons", {})
  .n("PollyClient", "ListLexiconsCommand")
  .sc(ListLexicons$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLexiconsInput;
      output: ListLexiconsOutput;
    };
    sdk: {
      input: ListLexiconsCommandInput;
      output: ListLexiconsCommandOutput;
    };
  };
}
