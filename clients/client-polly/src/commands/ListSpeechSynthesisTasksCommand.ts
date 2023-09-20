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
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { de_ListSpeechSynthesisTasksCommand, se_ListSpeechSynthesisTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * //       Engine: "standard" || "neural",
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
 * //       VoiceId: "Aditi" || "Amy" || "Astrid" || "Bianca" || "Brian" || "Camila" || "Carla" || "Carmen" || "Celine" || "Chantal" || "Conchita" || "Cristiano" || "Dora" || "Emma" || "Enrique" || "Ewa" || "Filiz" || "Gabrielle" || "Geraint" || "Giorgio" || "Gwyneth" || "Hans" || "Ines" || "Ivy" || "Jacek" || "Jan" || "Joanna" || "Joey" || "Justin" || "Karl" || "Kendra" || "Kevin" || "Kimberly" || "Lea" || "Liv" || "Lotte" || "Lucia" || "Lupe" || "Mads" || "Maja" || "Marlene" || "Mathieu" || "Matthew" || "Maxim" || "Mia" || "Miguel" || "Mizuki" || "Naja" || "Nicole" || "Olivia" || "Penelope" || "Raveena" || "Ricardo" || "Ruben" || "Russell" || "Salli" || "Seoyeon" || "Takumi" || "Tatyana" || "Vicki" || "Vitoria" || "Zeina" || "Zhiyu" || "Aria" || "Ayanda" || "Arlet" || "Hannah" || "Arthur" || "Daniel" || "Liam" || "Pedro" || "Kajal" || "Hiujin" || "Laura" || "Elin" || "Ida" || "Suvi" || "Ola" || "Hala" || "Andres" || "Sergio" || "Remi" || "Adriano" || "Thiago" || "Ruth" || "Stephen" || "Kazuha" || "Tomoko" || "Niamh" || "Sofie" || "Lisa" || "Isabelle" || "Zayd",
 * //       LanguageCode: "arb" || "cmn-CN" || "cy-GB" || "da-DK" || "de-DE" || "en-AU" || "en-GB" || "en-GB-WLS" || "en-IN" || "en-US" || "es-ES" || "es-MX" || "es-US" || "fr-CA" || "fr-FR" || "is-IS" || "it-IT" || "ja-JP" || "hi-IN" || "ko-KR" || "nb-NO" || "nl-NL" || "pl-PL" || "pt-BR" || "pt-PT" || "ro-RO" || "ru-RU" || "sv-SE" || "tr-TR" || "en-NZ" || "en-ZA" || "ca-ES" || "de-AT" || "yue-CN" || "ar-AE" || "fi-FI" || "en-IE" || "nl-BE" || "fr-BE",
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
 */
export class ListSpeechSynthesisTasksCommand extends $Command<
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
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
  constructor(readonly input: ListSpeechSynthesisTasksCommandInput) {
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
  ): Handler<ListSpeechSynthesisTasksCommandInput, ListSpeechSynthesisTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSpeechSynthesisTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "ListSpeechSynthesisTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Parrot_v1",
        operation: "ListSpeechSynthesisTasks",
      },
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
  private serialize(input: ListSpeechSynthesisTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSpeechSynthesisTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSpeechSynthesisTasksCommandOutput> {
    return de_ListSpeechSynthesisTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
