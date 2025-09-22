// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSpeechSynthesisTaskInput, GetSpeechSynthesisTaskOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { GetSpeechSynthesisTask } from "../schemas/schemas_1_Speech";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSpeechSynthesisTaskCommand}.
 */
export interface GetSpeechSynthesisTaskCommandInput extends GetSpeechSynthesisTaskInput {}
/**
 * @public
 *
 * The output of {@link GetSpeechSynthesisTaskCommand}.
 */
export interface GetSpeechSynthesisTaskCommandOutput extends GetSpeechSynthesisTaskOutput, __MetadataBearer {}

/**
 * <p>Retrieves a specific SpeechSynthesisTask object based on its TaskID.
 *       This object contains information about the given speech synthesis task,
 *       including the status of the task, and a link to the S3 bucket containing
 *       the output of the task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, GetSpeechSynthesisTaskCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, GetSpeechSynthesisTaskCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // GetSpeechSynthesisTaskInput
 *   TaskId: "STRING_VALUE", // required
 * };
 * const command = new GetSpeechSynthesisTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetSpeechSynthesisTaskOutput
 * //   SynthesisTask: { // SynthesisTask
 * //     Engine: "standard" || "neural" || "long-form" || "generative",
 * //     TaskId: "STRING_VALUE",
 * //     TaskStatus: "scheduled" || "inProgress" || "completed" || "failed",
 * //     TaskStatusReason: "STRING_VALUE",
 * //     OutputUri: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     RequestCharacters: Number("int"),
 * //     SnsTopicArn: "STRING_VALUE",
 * //     LexiconNames: [ // LexiconNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     OutputFormat: "json" || "mp3" || "ogg_opus" || "ogg_vorbis" || "pcm",
 * //     SampleRate: "STRING_VALUE",
 * //     SpeechMarkTypes: [ // SpeechMarkTypeList
 * //       "sentence" || "ssml" || "viseme" || "word",
 * //     ],
 * //     TextType: "ssml" || "text",
 * //     VoiceId: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd" || "Danielle" || "Gregory" || "Burcu" || "Jitka" || "Sabrina" || "Jasmine" || "Jihye",
 * //     LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSpeechSynthesisTaskCommandInput - {@link GetSpeechSynthesisTaskCommandInput}
 * @returns {@link GetSpeechSynthesisTaskCommandOutput}
 * @see {@link GetSpeechSynthesisTaskCommandInput} for command's `input` shape.
 * @see {@link GetSpeechSynthesisTaskCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link InvalidTaskIdException} (client fault)
 *  <p>The provided Task ID is not valid. Please provide a valid Task ID and
 *       try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link SynthesisTaskNotFoundException} (client fault)
 *  <p>The Speech Synthesis task with requested Task ID cannot be
 *       found.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 *
 * @public
 */
export class GetSpeechSynthesisTaskCommand extends $Command
  .classBuilder<
    GetSpeechSynthesisTaskCommandInput,
    GetSpeechSynthesisTaskCommandOutput,
    PollyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PollyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Parrot_v1", "GetSpeechSynthesisTask", {})
  .n("PollyClient", "GetSpeechSynthesisTaskCommand")
  .sc(GetSpeechSynthesisTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpeechSynthesisTaskInput;
      output: GetSpeechSynthesisTaskOutput;
    };
    sdk: {
      input: GetSpeechSynthesisTaskCommandInput;
      output: GetSpeechSynthesisTaskCommandOutput;
    };
  };
}
