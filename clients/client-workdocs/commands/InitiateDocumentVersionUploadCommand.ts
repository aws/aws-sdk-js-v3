import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { InitiateDocumentVersionUploadRequest, InitiateDocumentVersionUploadResponse } from "../models/models_0";
import {
  deserializeAws_restJson1InitiateDocumentVersionUploadCommand,
  serializeAws_restJson1InitiateDocumentVersionUploadCommand,
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

export type InitiateDocumentVersionUploadCommandInput = InitiateDocumentVersionUploadRequest;
export type InitiateDocumentVersionUploadCommandOutput = InitiateDocumentVersionUploadResponse & __MetadataBearer;

/**
 * <p>Creates a new document object and version object.</p>
 *         <p>The client specifies the parent folder ID and name of the document to upload. The
 *             ID is optionally specified when creating a new version of an existing document. This is
 *             the first step to upload a document. Next, upload the document to the URL returned from
 *             the call, and then call <a>UpdateDocumentVersion</a>.</p>
 *         <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>
 */
export class InitiateDocumentVersionUploadCommand extends $Command<
  InitiateDocumentVersionUploadCommandInput,
  InitiateDocumentVersionUploadCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InitiateDocumentVersionUploadCommandInput) {
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
  ): Handler<InitiateDocumentVersionUploadCommandInput, InitiateDocumentVersionUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "InitiateDocumentVersionUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateDocumentVersionUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InitiateDocumentVersionUploadResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitiateDocumentVersionUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InitiateDocumentVersionUploadCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InitiateDocumentVersionUploadCommandOutput> {
    return deserializeAws_restJson1InitiateDocumentVersionUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
