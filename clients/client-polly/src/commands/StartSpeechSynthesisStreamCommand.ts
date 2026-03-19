// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartSpeechSynthesisStreamInput, StartSpeechSynthesisStreamOutput } from "../models/models_0";
import type { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { StartSpeechSynthesisStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSpeechSynthesisStreamCommand}.
 */
export interface StartSpeechSynthesisStreamCommandInput extends StartSpeechSynthesisStreamInput {}
/**
 * @public
 *
 * The output of {@link StartSpeechSynthesisStreamCommand}.
 */
export interface StartSpeechSynthesisStreamCommandOutput extends StartSpeechSynthesisStreamOutput, __MetadataBearer {}

/**
 * <p>Synthesizes UTF-8 input, plain text, or SSML over a bidirectional streaming connection.
 *       Specify synthesis parameters in HTTP/2 headers, send text incrementally as events on the input stream,
 *        and receive synthesized audio as it becomes available.</p>
 *          <p>This operation serves as a bidirectional counterpart to <code>SynthesizeSpeech</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/polly/latest/API/API_SynthesizeSpeech.html">SynthesizeSpeech</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, StartSpeechSynthesisStreamCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, StartSpeechSynthesisStreamCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // StartSpeechSynthesisStreamInput
 *   Engine: "standard" || "neural" || "long-form" || "generative", // required
 *   LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE" || "cs-CZ" || "de-CH" || "en-SG",
 *   LexiconNames: [ // LexiconNameList
 *     "STRING_VALUE",
 *   ],
 *   OutputFormat: "json" || "mp3" || "ogg_opus" || "ogg_vorbis" || "pcm", // required
 *   SampleRate: "STRING_VALUE",
 *   VoiceId: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd" || "Danielle" || "Gregory" || "Burcu" || "Jitka" || "Sabrina" || "Jasmine" || "Jihye" || "Ambre" || "Beatrice" || "Florian" || "Lennart" || "Lorenzo" || "Tiffany", // required
 *   ActionStream: { // StartSpeechSynthesisStreamActionStream Union: only one key present
 *     TextEvent: { // TextEvent
 *       Text: "STRING_VALUE", // required
 *       TextType: "ssml" || "text",
 *       FlushStreamConfiguration: { // FlushStreamConfiguration
 *         Force: true || false,
 *       },
 *     },
 *     CloseStreamEvent: {},
 *   },
 * };
 * const command = new StartSpeechSynthesisStreamCommand(input);
 * const response = await client.send(command);
 * // { // StartSpeechSynthesisStreamOutput
 * //   EventStream: { // StartSpeechSynthesisStreamEventStream Union: only one key present
 * //     AudioEvent: { // AudioEvent
 * //       AudioChunk: new Uint8Array(),
 * //     },
 * //     StreamClosedEvent: { // StreamClosedEvent
 * //       RequestCharacters: Number("int"),
 * //     },
 * //     ValidationException: { // ValidationException
 * //       message: "STRING_VALUE", // required
 * //       reason: "unsupportedOperation" || "fieldValidationFailed" || "other" || "invalidInboundEvent", // required
 * //       fields: [ // ValidationExceptionFieldList
 * //         { // ValidationExceptionField
 * //           name: "STRING_VALUE", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     ServiceQuotaExceededException: { // ServiceQuotaExceededException
 * //       message: "STRING_VALUE", // required
 * //       quotaCode: "input-stream-inbound-event-timeout" || "input-stream-timeout", // required
 * //       serviceCode: "polly", // required
 * //     },
 * //     ServiceFailureException: { // ServiceFailureException
 * //       message: "STRING_VALUE",
 * //     },
 * //     ThrottlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //       throttlingReasons: [ // ThrottlingReasonList
 * //         { // ThrottlingReason
 * //           reason: "STRING_VALUE",
 * //           resource: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSpeechSynthesisStreamCommandInput - {@link StartSpeechSynthesisStreamCommandInput}
 * @returns {@link StartSpeechSynthesisStreamCommandOutput}
 * @see {@link StartSpeechSynthesisStreamCommandInput} for command's `input` shape.
 * @see {@link StartSpeechSynthesisStreamCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 *
 * @public
 */
export class StartSpeechSynthesisStreamCommand extends $Command
  .classBuilder<
    StartSpeechSynthesisStreamCommandInput,
    StartSpeechSynthesisStreamCommandOutput,
    PollyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PollyClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
    ];
  })
  .s("Parrot_v1", "StartSpeechSynthesisStream", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("PollyClient", "StartSpeechSynthesisStreamCommand")
  .sc(StartSpeechSynthesisStream$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSpeechSynthesisStreamInput;
      output: StartSpeechSynthesisStreamOutput;
    };
    sdk: {
      input: StartSpeechSynthesisStreamCommandInput;
      output: StartSpeechSynthesisStreamCommandOutput;
    };
  };
}
