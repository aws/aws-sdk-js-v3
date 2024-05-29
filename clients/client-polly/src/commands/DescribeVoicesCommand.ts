// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVoicesInput, DescribeVoicesOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_DescribeVoicesCommand, se_DescribeVoicesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVoicesCommand}.
 */
export interface DescribeVoicesCommandInput extends DescribeVoicesInput {}
/**
 * @public
 *
 * The output of {@link DescribeVoicesCommand}.
 */
export interface DescribeVoicesCommandOutput extends DescribeVoicesOutput, __MetadataBearer {}

/**
 * <p>Returns the list of voices that are available for use when
 *       requesting speech synthesis. Each voice speaks a specified language, is
 *       either male or female, and is identified by an ID, which is the ASCII
 *       version of the voice name. </p>
 *          <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you
 *       provide the voice ID for the voice you want from the list of voices
 *       returned by <code>DescribeVoices</code>.</p>
 *          <p>For example, you want your news reader application to read news in
 *       a specific language, but giving a user the option to choose the voice.
 *       Using the <code>DescribeVoices</code> operation you can provide the user
 *       with a list of available voices to select from.</p>
 *          <p> You can optionally specify a language code to filter the available
 *       voices. For example, if you specify <code>en-US</code>, the operation
 *       returns a list of all available US English voices. </p>
 *          <p>This operation requires permissions to perform the
 *         <code>polly:DescribeVoices</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, DescribeVoicesCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, DescribeVoicesCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const input = { // DescribeVoicesInput
 *   Engine: "standard" || "neural" || "long-form" || "generative",
 *   LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE",
 *   IncludeAdditionalLanguageCodes: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVoicesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVoicesOutput
 * //   Voices: [ // VoiceList
 * //     { // Voice
 * //       Gender: "Female" || "Male",
 * //       Id: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd" || "Danielle" || "Gregory" || "Burcu",
 * //       LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE",
 * //       LanguageName: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       AdditionalLanguageCodes: [ // LanguageCodeList
 * //         "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE",
 * //       ],
 * //       SupportedEngines: [ // EngineList
 * //         "standard" || "neural" || "long-form" || "generative",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVoicesCommandInput - {@link DescribeVoicesCommandInput}
 * @returns {@link DescribeVoicesCommandOutput}
 * @see {@link DescribeVoicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVoicesCommandOutput} for command's `response` shape.
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
 * @public
 * @example To describe available voices
 * ```javascript
 * // Returns the list of voices that are available for use when requesting speech synthesis. Displayed languages are those within the specified language code. If no language code is specified, voices for all available languages are displayed.
 * const input = {
 *   "LanguageCode": "en-GB"
 * };
 * const command = new DescribeVoicesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Voices": [
 *     {
 *       "Gender": "Female",
 *       "Id": "Emma",
 *       "LanguageCode": "en-GB",
 *       "LanguageName": "British English",
 *       "Name": "Emma"
 *     },
 *     {
 *       "Gender": "Male",
 *       "Id": "Brian",
 *       "LanguageCode": "en-GB",
 *       "LanguageName": "British English",
 *       "Name": "Brian"
 *     },
 *     {
 *       "Gender": "Female",
 *       "Id": "Amy",
 *       "LanguageCode": "en-GB",
 *       "LanguageName": "British English",
 *       "Name": "Amy"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-available-voices-1482180557753
 * ```
 *
 */
export class DescribeVoicesCommand extends $Command
  .classBuilder<
    DescribeVoicesCommandInput,
    DescribeVoicesCommandOutput,
    PollyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PollyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Parrot_v1", "DescribeVoices", {})
  .n("PollyClient", "DescribeVoicesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVoicesCommand)
  .de(de_DescribeVoicesCommand)
  .build() {}
