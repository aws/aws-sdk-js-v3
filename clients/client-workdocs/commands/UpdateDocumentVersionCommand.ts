import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { UpdateDocumentVersionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDocumentVersionCommand,
  serializeAws_restJson1UpdateDocumentVersionCommand,
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

export type UpdateDocumentVersionCommandInput = UpdateDocumentVersionRequest;
export type UpdateDocumentVersionCommandOutput = __MetadataBearer;

/**
 * <p>Changes the status of the document version to ACTIVE. </p>
 *         <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step
 *             in a document upload, after the client uploads the document to an S3-presigned URL
 *             returned by <a>InitiateDocumentVersionUpload</a>. </p>
 */
export class UpdateDocumentVersionCommand extends $Command<
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDocumentVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentVersionCommandInput, UpdateDocumentVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "UpdateDocumentVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDocumentVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDocumentVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDocumentVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDocumentVersionCommandOutput> {
    return deserializeAws_restJson1UpdateDocumentVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
