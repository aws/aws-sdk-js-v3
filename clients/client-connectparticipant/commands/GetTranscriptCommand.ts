import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { GetTranscriptRequest, GetTranscriptResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetTranscriptCommand,
  serializeAws_restJson1GetTranscriptCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetTranscriptCommandInput = GetTranscriptRequest;
export type GetTranscriptCommandOutput = GetTranscriptResponse & __MetadataBearer;

/**
 * <p>Retrieves a transcript of the session. Note that ConnectionToken is used for invoking
 *             this API instead of ParticipantToken.</p>
 */
export class GetTranscriptCommand extends $Command<
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTranscriptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectParticipantClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTranscriptCommandInput, GetTranscriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "GetTranscriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTranscriptRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTranscriptResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTranscriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTranscriptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTranscriptCommandOutput> {
    return deserializeAws_restJson1GetTranscriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
