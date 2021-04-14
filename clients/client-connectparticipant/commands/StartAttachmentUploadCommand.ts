import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { StartAttachmentUploadRequest, StartAttachmentUploadResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartAttachmentUploadCommand,
  serializeAws_restJson1StartAttachmentUploadCommand,
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

export type StartAttachmentUploadCommandInput = StartAttachmentUploadRequest;
export type StartAttachmentUploadCommandOutput = StartAttachmentUploadResponse & __MetadataBearer;

/**
 * <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to
 *             S3.</p>
 */
export class StartAttachmentUploadCommand extends $Command<
  StartAttachmentUploadCommandInput,
  StartAttachmentUploadCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartAttachmentUploadCommandInput) {
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
  ): Handler<StartAttachmentUploadCommandInput, StartAttachmentUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "StartAttachmentUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAttachmentUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartAttachmentUploadResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAttachmentUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartAttachmentUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAttachmentUploadCommandOutput> {
    return deserializeAws_restJson1StartAttachmentUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
