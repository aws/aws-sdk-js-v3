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
  StartMedicalStreamTranscriptionRequest,
  StartMedicalStreamTranscriptionRequestFilterSensitiveLog,
  StartMedicalStreamTranscriptionResponse,
  StartMedicalStreamTranscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartMedicalStreamTranscriptionCommand,
  serializeAws_restJson1StartMedicalStreamTranscriptionCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingClientResolvedConfig,
} from "../TranscribeStreamingClient";

/**
 * The input for {@link StartMedicalStreamTranscriptionCommand}.
 */
export interface StartMedicalStreamTranscriptionCommandInput extends StartMedicalStreamTranscriptionRequest {}
/**
 * The output of {@link StartMedicalStreamTranscriptionCommand}.
 */
export interface StartMedicalStreamTranscriptionCommandOutput
  extends StartMedicalStreamTranscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 *             Amazon Transcribe Medical and the transcription results are streamed to your
 *             application.</p>
 *         <p>The following parameters are required:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>language-code</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>media-encoding</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>sample-rate</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>For more information on streaming with Amazon Transcribe Medical, see
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing
 *                 streaming audio</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartMedicalStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartMedicalStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * const client = new TranscribeStreamingClient(config);
 * const command = new StartMedicalStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMedicalStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartMedicalStreamTranscriptionCommandOutput} for command's `response` shape.
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
export class StartMedicalStreamTranscriptionCommand extends $Command<
  StartMedicalStreamTranscriptionCommandInput,
  StartMedicalStreamTranscriptionCommandOutput,
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

  constructor(readonly input: StartMedicalStreamTranscriptionCommandInput) {
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
  ): Handler<StartMedicalStreamTranscriptionCommandInput, StartMedicalStreamTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMedicalStreamTranscriptionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getEventStreamPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeStreamingClient";
    const commandName = "StartMedicalStreamTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMedicalStreamTranscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartMedicalStreamTranscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartMedicalStreamTranscriptionCommandInput,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartMedicalStreamTranscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<StartMedicalStreamTranscriptionCommandOutput> {
    return deserializeAws_restJson1StartMedicalStreamTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
