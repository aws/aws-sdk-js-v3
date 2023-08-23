// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import {
  SynthesizeSpeechInput,
  SynthesizeSpeechOutput,
  SynthesizeSpeechOutputFilterSensitiveLog,
} from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_SynthesizeSpeechCommand, se_SynthesizeSpeechCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SynthesizeSpeechCommand}.
 */
export interface SynthesizeSpeechCommandInput extends SynthesizeSpeechInput {}
/**
 * @public
 *
 * The output of {@link SynthesizeSpeechCommand}.
 */
export interface SynthesizeSpeechCommandOutput extends Omit<SynthesizeSpeechOutput, "AudioStream">, __MetadataBearer {
  AudioStream?: StreamingBlobPayloadOutputTypes;
}

/**
 * @public
 * <p>Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes.
 *       SSML input must be valid, well-formed SSML. Some alphabets might not be
 *       available with all the voices (for example, Cyrillic might not be read at
 *       all by English voices) unless phoneme mapping is used. For more
 *       information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, SynthesizeSpeechCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const input = { // SynthesizeSpeechInput
 *   Engine: "standard" || "neural",
 *   LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE",
 *   LexiconNames: [ // LexiconNameList
 *     "STRING_VALUE",
 *   ],
 *   OutputFormat: "json" || "mp3" || "ogg_vorbis" || "pcm", // required
 *   SampleRate: "STRING_VALUE",
 *   SpeechMarkTypes: [ // SpeechMarkTypeList
 *     "sentence" || "ssml" || "viseme" || "word",
 *   ],
 *   Text: "STRING_VALUE", // required
 *   TextType: "ssml" || "text",
 *   VoiceId: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd", // required
 * };
 * const command = new SynthesizeSpeechCommand(input);
 * const response = await client.send(command);
 * // { // SynthesizeSpeechOutput
 * //   AudioStream: "STREAMING_BLOB_VALUE",
 * //   ContentType: "STRING_VALUE",
 * //   RequestCharacters: Number("int"),
 * // };
 *
 * ```
 *
 * @param SynthesizeSpeechCommandInput - {@link SynthesizeSpeechCommandInput}
 * @returns {@link SynthesizeSpeechCommandOutput}
 * @see {@link SynthesizeSpeechCommandInput} for command's `input` shape.
 * @see {@link SynthesizeSpeechCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link EngineNotSupportedException} (client fault)
 *  <p>This engine is not compatible with the voice that you have designated.
 *       Choose a new voice that is compatible with the engine or change the engine
 *       and restart the operation.</p>
 *
 * @throws {@link InvalidSampleRateException} (client fault)
 *  <p>The specified sample rate is not valid.</p>
 *
 * @throws {@link InvalidSsmlException} (client fault)
 *  <p>The SSML you provided is invalid. Verify the SSML syntax, spelling
 *       of tags and values, and then try again.</p>
 *
 * @throws {@link LanguageNotSupportedException} (client fault)
 *  <p>The language specified is not currently supported by Amazon Polly in this
 *       capacity.</p>
 *
 * @throws {@link LexiconNotFoundException} (client fault)
 *  <p>Amazon Polly can't find the specified lexicon. This could be caused by a
 *       lexicon that is missing, its name is misspelled or specifying a lexicon
 *       that is in a different region.</p>
 *          <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled
 *       correctly. Then try again.</p>
 *
 * @throws {@link MarksNotSupportedForFormatException} (client fault)
 *  <p>Speech marks are not supported for the <code>OutputFormat</code>
 *       selected. Speech marks are only available for content in <code>json</code>
 *       format.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link SsmlMarksNotSupportedForTextTypeException} (client fault)
 *  <p>SSML speech marks are not supported for plain text-type
 *       input.</p>
 *
 * @throws {@link TextLengthExceededException} (client fault)
 *  <p>The value of the "Text" parameter is longer than the accepted
 *       limits. For the <code>SynthesizeSpeech</code> API, the limit for input
 *       text is a maximum of 6000 characters total, of which no more than 3000 can
 *       be billed characters. For the <code>StartSpeechSynthesisTask</code> API,
 *       the maximum is 200,000 characters, of which no more than 100,000 can be
 *       billed characters. SSML tags are not counted as billed
 *       characters.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 * @example To synthesize speech
 * ```javascript
 * // Synthesizes plain text or SSML into a file of human-like speech.
 * const input = {
 *   "LexiconNames": [
 *     "example"
 *   ],
 *   "OutputFormat": "mp3",
 *   "SampleRate": "8000",
 *   "Text": "All Gaul is divided into three parts",
 *   "TextType": "text",
 *   "VoiceId": "Joanna"
 * };
 * const command = new SynthesizeSpeechCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AudioStream": "TEXT",
 *   "ContentType": "audio/mpeg",
 *   "RequestCharacters": 37
 * }
 * *\/
 * // example id: to-synthesize-speech-1482186064046
 * ```
 *
 */
export class SynthesizeSpeechCommand extends $Command<
  SynthesizeSpeechCommandInput,
  SynthesizeSpeechCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: SynthesizeSpeechCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SynthesizeSpeechCommandInput, SynthesizeSpeechCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SynthesizeSpeechCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "SynthesizeSpeechCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: SynthesizeSpeechOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SynthesizeSpeechCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SynthesizeSpeechCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<SynthesizeSpeechCommandOutput> {
    return de_SynthesizeSpeechCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
