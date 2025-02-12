// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_ListSpeechSynthesisTasksCommand, se_ListSpeechSynthesisTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSpeechSynthesisTasksCommand}.
 */
export interface ListSpeechSynthesisTasksCommandInput extends ListSpeechSynthesisTasksInput {}
/**
 * @public
 *
 * The output of {@link ListSpeechSynthesisTasksCommand}.
 */
export interface ListSpeechSynthesisTasksCommandOutput extends ListSpeechSynthesisTasksOutput, __MetadataBearer {}

/**
 * <p>Returns a list of SpeechSynthesisTask objects ordered by their
 *       creation date. This operation can filter the tasks by their status, for
 *       example, allowing users to list only tasks that are completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, ListSpeechSynthesisTasksCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, ListSpeechSynthesisTasksCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const input = { // ListSpeechSynthesisTasksInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Status: "scheduled" || "inProgress" || "completed" || "failed",
 * };
 * const command = new ListSpeechSynthesisTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListSpeechSynthesisTasksOutput
 * //   NextToken: "STRING_VALUE",
 * //   SynthesisTasks: [ // SynthesisTasks
 * //     { // SynthesisTask
 * //       Engine: "standard" || "neural" || "long-form" || "generative",
 * //       TaskId: "STRING_VALUE",
 * //       TaskStatus: "scheduled" || "inProgress" || "completed" || "failed",
 * //       TaskStatusReason: "STRING_VALUE",
 * //       OutputUri: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       RequestCharacters: Number("int"),
 * //       SnsTopicArn: "STRING_VALUE",
 * //       LexiconNames: [ // LexiconNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       OutputFormat: "json" || "mp3" || "ogg_vorbis" || "pcm",
 * //       SampleRate: "STRING_VALUE",
 * //       SpeechMarkTypes: [ // SpeechMarkTypeList
 * //         "sentence" || "ssml" || "viseme" || "word",
 * //       ],
 * //       TextType: "ssml" || "text",
 * //       VoiceId: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd" || "Danielle" || "Gregory" || "Burcu" || "Jitka" || "Sabrina" || "Jasmine",
 * //       LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSpeechSynthesisTasksCommandInput - {@link ListSpeechSynthesisTasksCommandInput}
 * @returns {@link ListSpeechSynthesisTasksCommandOutput}
 * @see {@link ListSpeechSynthesisTasksCommandInput} for command's `input` shape.
 * @see {@link ListSpeechSynthesisTasksCommandOutput} for command's `response` shape.
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
 */
export class ListSpeechSynthesisTasksCommand extends $Command
  .classBuilder<
    ListSpeechSynthesisTasksCommandInput,
    ListSpeechSynthesisTasksCommandOutput,
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
  .s("Parrot_v1", "ListSpeechSynthesisTasks", {})
  .n("PollyClient", "ListSpeechSynthesisTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListSpeechSynthesisTasksCommand)
  .de(de_ListSpeechSynthesisTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSpeechSynthesisTasksInput;
      output: ListSpeechSynthesisTasksOutput;
    };
    sdk: {
      input: ListSpeechSynthesisTasksCommandInput;
      output: ListSpeechSynthesisTasksCommandOutput;
    };
  };
}
