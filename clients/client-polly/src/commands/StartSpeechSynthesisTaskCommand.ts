// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSpeechSynthesisTaskInput, StartSpeechSynthesisTaskOutput } from "../models/models_0";
import { StartSpeechSynthesisTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSpeechSynthesisTaskCommand}.
 */
export interface StartSpeechSynthesisTaskCommandInput extends StartSpeechSynthesisTaskInput {}
/**
 * @public
 *
 * The output of {@link StartSpeechSynthesisTaskCommand}.
 */
export interface StartSpeechSynthesisTaskCommandOutput extends StartSpeechSynthesisTaskOutput, __MetadataBearer {}

/**
 * Allows the creation of an asynchronous synthesis task, by starting a new `SpeechSynthesisTask`. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (`OutputS3KeyPrefix` and `SnsTopicArn`). Once the synthesis task is created, this operation will return a `SpeechSynthesisTask` object, which will include an identifier of this task as well as the current status. The `SpeechSynthesisTask` object is available for 72 hours after starting the asynchronous synthesis task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, StartSpeechSynthesisTaskCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, StartSpeechSynthesisTaskCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // StartSpeechSynthesisTaskInput
 *   Engine: "standard" || "neural" || "long-form" || "generative",
 *   LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 *   LexiconNames: [ // LexiconNameList
 *     "STRING_VALUE",
 *   ],
 *   OutputFormat: "json" || "mp3" || "ogg_opus" || "ogg_vorbis" || "pcm" || "mulaw" || "alaw", // required
 *   OutputS3BucketName: "STRING_VALUE", // required
 *   OutputS3KeyPrefix: "STRING_VALUE",
 *   SampleRate: "STRING_VALUE",
 *   SnsTopicArn: "STRING_VALUE",
 *   SpeechMarkTypes: [ // SpeechMarkTypeList
 *     "sentence" || "ssml" || "viseme" || "word",
 *   ],
 *   Text: "STRING_VALUE", // required
 *   TextType: "ssml" || "text",
 *   VoiceId: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd" || "Danielle" || "Gregory" || "Burcu" || "Jitka" || "Sabrina" || "Jasmine" || "Jihye" || "Ambre" || "Beatrice" || "Florian" || "Lennart" || "Lorenzo" || "Tiffany" || "Arjun" || "Carlos" || "Carolina" || "Curtis" || "Hyunduk" || "Kenneth" || "Kiara" || "Leo" || "Nate" || "Tina", // required
 * };
 * const command = new StartSpeechSynthesisTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartSpeechSynthesisTaskOutput
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
 * //     OutputFormat: "json" || "mp3" || "ogg_opus" || "ogg_vorbis" || "pcm" || "mulaw" || "alaw",
 * //     SampleRate: "STRING_VALUE",
 * //     SpeechMarkTypes: [ // SpeechMarkTypeList
 * //       "sentence" || "ssml" || "viseme" || "word",
 * //     ],
 * //     TextType: "ssml" || "text",
 * //     VoiceId: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd" || "Danielle" || "Gregory" || "Burcu" || "Jitka" || "Sabrina" || "Jasmine" || "Jihye" || "Ambre" || "Beatrice" || "Florian" || "Lennart" || "Lorenzo" || "Tiffany" || "Arjun" || "Carlos" || "Carolina" || "Curtis" || "Hyunduk" || "Kenneth" || "Kiara" || "Leo" || "Nate" || "Tina",
 * //     LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSpeechSynthesisTaskCommandInput - {@link StartSpeechSynthesisTaskCommandInput}
 * @returns {@link StartSpeechSynthesisTaskCommandOutput}
 * @see {@link StartSpeechSynthesisTaskCommandInput} for command's `input` shape.
 * @see {@link StartSpeechSynthesisTaskCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link EngineNotSupportedException} (client fault)
 *
 * This engine is not compatible with the voice that you have designated. Choose a new voice that is compatible with the engine or change the engine and restart the operation.
 *
 * @throws {@link InvalidS3BucketException} (client fault)
 *
 * The provided Amazon S3 bucket name is invalid. Please check your input with S3 bucket naming requirements and try again.
 *
 * @throws {@link InvalidS3KeyException} (client fault)
 *
 * The provided Amazon S3 key prefix is invalid. Please provide a valid S3 object key name.
 *
 * @throws {@link InvalidSampleRateException} (client fault)
 *
 * The specified sample rate is not valid.
 *
 * @throws {@link InvalidSnsTopicArnException} (client fault)
 *
 * The provided SNS topic ARN is invalid. Please provide a valid SNS topic ARN and try again.
 *
 * @throws {@link InvalidSsmlException} (client fault)
 *
 * The SSML you provided is invalid. Verify the SSML syntax, spelling of tags and values, and then try again.
 *
 * @throws {@link LanguageNotSupportedException} (client fault)
 *
 * The language specified is not currently supported by Amazon Polly in this capacity.
 *
 * @throws {@link LexiconNotFoundException} (client fault)
 *
 * Amazon Polly can't find the specified lexicon. This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon that is in a different region.
 *
 * Verify that the lexicon exists, is in the region (see ListLexicons) and that you spelled its name is spelled correctly. Then try again.
 *
 * @throws {@link MarksNotSupportedForFormatException} (client fault)
 *
 * Speech marks are not supported for the `OutputFormat` selected. Speech marks are only available for content in `json` format.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * An unknown condition has caused a service failure.
 *
 * @throws {@link SsmlMarksNotSupportedForTextTypeException} (client fault)
 *
 * SSML speech marks are not supported for plain text-type input.
 *
 * @throws {@link TextLengthExceededException} (client fault)
 *
 * The value of the "Text" parameter is longer than the accepted limits. For the `SynthesizeSpeech` API, the limit for input text is a maximum of 6000 characters total, of which no more than 3000 can be billed characters. For the `StartSpeechSynthesisTask` API, the maximum is 200,000 characters, of which no more than 100,000 can be billed characters. SSML tags are not counted as billed characters.
 *
 * @throws {@link PollyServiceException}
 *
 * Base exception class for all service exceptions from Polly service.
 *
 * @public
 */
export class StartSpeechSynthesisTaskCommand extends command<StartSpeechSynthesisTaskCommandInput, StartSpeechSynthesisTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartSpeechSynthesisTask",
  StartSpeechSynthesisTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSpeechSynthesisTaskInput;
      output: StartSpeechSynthesisTaskOutput;
    };
    sdk: {
      input: StartSpeechSynthesisTaskCommandInput;
      output: StartSpeechSynthesisTaskCommandOutput;
    };
  };
}
