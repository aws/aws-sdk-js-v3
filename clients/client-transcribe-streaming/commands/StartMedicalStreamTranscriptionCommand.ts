import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingClientResolvedConfig,
} from "../TranscribeStreamingClient";
import { StartMedicalStreamTranscriptionRequest, StartMedicalStreamTranscriptionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartMedicalStreamTranscriptionCommand,
  serializeAws_restJson1StartMedicalStreamTranscriptionCommand,
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

export type StartMedicalStreamTranscriptionCommandInput = StartMedicalStreamTranscriptionRequest;
export type StartMedicalStreamTranscriptionCommandOutput = StartMedicalStreamTranscriptionResponse & __MetadataBearer;

/**
 * <p>Starts a bidirectional HTTP/2 stream where audio is streamed to Amazon Transcribe Medical and the transcription
 *             results are streamed to your application.</p>
 */
export class StartMedicalStreamTranscriptionCommand extends $Command<
  StartMedicalStreamTranscriptionCommandInput,
  StartMedicalStreamTranscriptionCommandOutput,
  TranscribeStreamingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    this.middlewareStack.use(getEventStreamPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeStreamingClient";
    const commandName = "StartMedicalStreamTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMedicalStreamTranscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartMedicalStreamTranscriptionResponse.filterSensitiveLog,
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
