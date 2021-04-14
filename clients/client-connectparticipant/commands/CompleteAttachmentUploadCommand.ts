import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { CompleteAttachmentUploadRequest, CompleteAttachmentUploadResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CompleteAttachmentUploadCommand,
  serializeAws_restJson1CompleteAttachmentUploadCommand,
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

export type CompleteAttachmentUploadCommandInput = CompleteAttachmentUploadRequest;
export type CompleteAttachmentUploadCommandOutput = CompleteAttachmentUploadResponse & __MetadataBearer;

/**
 * <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL
 *             provided in StartAttachmentUpload API. </p>
 */
export class CompleteAttachmentUploadCommand extends $Command<
  CompleteAttachmentUploadCommandInput,
  CompleteAttachmentUploadCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CompleteAttachmentUploadCommandInput) {
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
  ): Handler<CompleteAttachmentUploadCommandInput, CompleteAttachmentUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "CompleteAttachmentUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteAttachmentUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CompleteAttachmentUploadResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CompleteAttachmentUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CompleteAttachmentUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteAttachmentUploadCommandOutput> {
    return deserializeAws_restJson1CompleteAttachmentUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
