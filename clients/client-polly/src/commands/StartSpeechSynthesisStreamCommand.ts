// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { StartSpeechSynthesisStreamInput, StartSpeechSynthesisStreamOutput } from "../models/models_0";
import { StartSpeechSynthesisStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *                   <a href="https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html">SynthesizeSpeech</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>To use a custom voice, specify its ID in <code>VoiceId</code>. The
 *       voice must be in <code>active</code> status. If the voice is in
 *       <code>pending</code> or <code>failed</code> status, the request fails with
 *       <code>ConflictException</code>. If no custom voice with the specified ID
 *       exists in your account and Region, the request fails with
 *       <code>ResourceNotFoundException</code>. If the custom voice uses a
 *       customer managed key, you need <code>kms:Decrypt</code> permission on the
 *       key. If you disabled the key or scheduled it for deletion, the request
 *       fails with <code>ValidationException</code>. If you don't have permission
 *       to use the key, the request fails with
 *       <code>AccessDeniedException</code>. If Amazon Web Services KMS throttles Amazon Polly's
 *       request to use the key, the request fails with
 *       <code>ThrottlingException</code>.</p>
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
 *   OutputFormat: "json" || "mp3" || "ogg_opus" || "ogg_vorbis" || "pcm" || "mulaw" || "alaw", // required
 *   SampleRate: "STRING_VALUE",
 *   VoiceId: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd" || "Danielle" || "Gregory" || "Burcu" || "Jitka" || "Sabrina" || "Jasmine" || "Jihye" || "Ambre" || "Beatrice" || "Florian" || "Lennart" || "Lorenzo" || "Tiffany" || "Arjun" || "Carlos" || "Carolina" || "Curtis" || "Hyunduk" || "Kenneth" || "Kiara" || "Leo" || "Nate" || "Tina", // required
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
 * //       reason: "unsupportedOperation" || "fieldValidationFailed" || "other" || "invalidInboundEvent" || "kmsKeyNotFound" || "kmsKeyUnusable", // required
 * //       fields: [ // ValidationExceptionFieldList
 * //         { // ValidationExceptionField
 * //           name: "STRING_VALUE", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     ServiceQuotaExceededException: { // ServiceQuotaExceededException
 * //       message: "STRING_VALUE", // required
 * //       quotaCode: "input-stream-inbound-event-timeout" || "input-stream-timeout" || "custom-voice-max-count", // required
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
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For
 *       a custom voice, the voice isn't in the status that the operation
 *       requires. Check the status with <code>GetVoice</code>, and then try
 *       again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Polly can't find the specified resource. Verify that the resource
 *       exists in the Amazon Web Services account and Region of the request and that its ARN or
 *       ID is spelled correctly, and then try again.</p>
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
export class StartSpeechSynthesisStreamCommand extends command<StartSpeechSynthesisStreamCommandInput, StartSpeechSynthesisStreamCommandOutput>(
  _ep0,
  _mw1,
  "StartSpeechSynthesisStream",
  StartSpeechSynthesisStream$
) {
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
