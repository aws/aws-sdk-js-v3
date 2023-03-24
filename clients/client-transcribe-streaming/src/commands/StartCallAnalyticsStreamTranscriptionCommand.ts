// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  EventStreamSerdeContext as __EventStreamSerdeContext,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  StartCallAnalyticsStreamTranscriptionRequest,
  StartCallAnalyticsStreamTranscriptionRequestFilterSensitiveLog,
  StartCallAnalyticsStreamTranscriptionResponse,
  StartCallAnalyticsStreamTranscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommand,
  serializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingClientResolvedConfig,
} from "../TranscribeStreamingClient";

/**
 * @public
 *
 * The input for {@link StartCallAnalyticsStreamTranscriptionCommand}.
 */
export interface StartCallAnalyticsStreamTranscriptionCommandInput
  extends StartCallAnalyticsStreamTranscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StartCallAnalyticsStreamTranscriptionCommand}.
 */
export interface StartCallAnalyticsStreamTranscriptionCommandOutput
  extends StartCallAnalyticsStreamTranscriptionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 *       Amazon Transcribe and the transcription results are streamed to your application. Use this operation
 *       for <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Call Analytics</a> transcriptions.</p>
 *          <p>The following parameters are required:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>language-code</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>media-encoding</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>sample-rate</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information on streaming with Amazon Transcribe, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartCallAnalyticsStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartCallAnalyticsStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * const client = new TranscribeStreamingClient(config);
 * const input = {
 *   LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR", // required
 *   MediaSampleRateHertz: Number("int"), // required
 *   MediaEncoding: "pcm" || "ogg-opus" || "flac", // required
 *   VocabularyName: "STRING_VALUE",
 *   SessionId: "STRING_VALUE",
 *   AudioStream: { // Union: only one key present
 *     AudioEvent: {
 *       AudioChunk: "BLOB_VALUE",
 *     },
 *     ConfigurationEvent: {
 *       ChannelDefinitions: [
 *         {
 *           ChannelId: Number("int"), // required
 *           ParticipantRole: "AGENT" || "CUSTOMER", // required
 *         },
 *       ],
 *       PostCallAnalyticsSettings: {
 *         OutputLocation: "STRING_VALUE", // required
 *         DataAccessRoleArn: "STRING_VALUE", // required
 *         ContentRedactionOutput: "redacted" || "redacted_and_unredacted",
 *         OutputEncryptionKMSKeyId: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   VocabularyFilterName: "STRING_VALUE",
 *   VocabularyFilterMethod: "remove" || "mask" || "tag",
 *   LanguageModelName: "STRING_VALUE",
 *   EnablePartialResultsStabilization: true || false,
 *   PartialResultsStability: "high" || "medium" || "low",
 *   ContentIdentificationType: "PII",
 *   ContentRedactionType: "PII",
 *   PiiEntityTypes: "STRING_VALUE",
 * };
 * const command = new StartCallAnalyticsStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartCallAnalyticsStreamTranscriptionCommandInput - {@link StartCallAnalyticsStreamTranscriptionCommandInput}
 * @returns {@link StartCallAnalyticsStreamTranscriptionCommandOutput}
 * @see {@link StartCallAnalyticsStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartCallAnalyticsStreamTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for TranscribeStreamingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One or more arguments to the <code>StartStreamTranscription</code>,
 *       <code>StartMedicalStreamTranscription</code>, or <code>StartCallAnalyticsStreamTranscription</code>
 *       operation was not valid. For example, <code>MediaEncoding</code> or <code>LanguageCode</code>
 *       used not valid values. Check the specified parameters and try your request again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A new stream started with the same session ID. The current stream has been terminated.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>A problem occurred while processing the audio. Amazon Transcribe terminated
 *       processing.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Your client has exceeded one of the Amazon Transcribe limits. This is typically the audio length
 *       limit. Break your audio stream into smaller chunks and try your request again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable. Try your request later.</p>
 *
 *
 */
export class StartCallAnalyticsStreamTranscriptionCommand extends $Command<
  StartCallAnalyticsStreamTranscriptionCommandInput,
  StartCallAnalyticsStreamTranscriptionCommandOutput,
  TranscribeStreamingClientResolvedConfig
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
  constructor(readonly input: StartCallAnalyticsStreamTranscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeStreamingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartCallAnalyticsStreamTranscriptionCommandInput, StartCallAnalyticsStreamTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartCallAnalyticsStreamTranscriptionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getEventStreamPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeStreamingClient";
    const commandName = "StartCallAnalyticsStreamTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartCallAnalyticsStreamTranscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartCallAnalyticsStreamTranscriptionResponseFilterSensitiveLog,
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
  private serialize(
    input: StartCallAnalyticsStreamTranscriptionCommandInput,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<StartCallAnalyticsStreamTranscriptionCommandOutput> {
    return deserializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
