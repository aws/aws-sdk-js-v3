import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingClientResolvedConfig,
} from "../TranscribeStreamingClient";
import { StartStreamTranscriptionRequest, StartStreamTranscriptionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartStreamTranscriptionCommand,
  serializeAws_restJson1StartStreamTranscriptionCommand,
} from "../protocols/Aws_restJson1";
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type StartStreamTranscriptionCommandInput = StartStreamTranscriptionRequest;
export type StartStreamTranscriptionCommandOutput = StartStreamTranscriptionResponse & __MetadataBearer;

/**
 * <p>Starts a bidirectional HTTP2 stream where audio is streamed to Amazon Transcribe and the transcription
 *       results are streamed to your application.</p>
 *          <p>The following are encoded as HTTP2 headers:</p>
 *          <ul>
 *             <li>
 *                <p>x-amzn-transcribe-language-code</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-media-encoding</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-sample-rate</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-session-id</p>
 *             </li>
 *          </ul>
 */
export class StartStreamTranscriptionCommand extends $Command<
  StartStreamTranscriptionCommandInput,
  StartStreamTranscriptionCommandOutput,
  TranscribeStreamingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartStreamTranscriptionCommandInput) {
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
  ): Handler<StartStreamTranscriptionCommandInput, StartStreamTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEventStreamPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeStreamingClient";
    const commandName = "StartStreamTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartStreamTranscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartStreamTranscriptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartStreamTranscriptionCommandInput,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartStreamTranscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<StartStreamTranscriptionCommandOutput> {
    return deserializeAws_restJson1StartStreamTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
