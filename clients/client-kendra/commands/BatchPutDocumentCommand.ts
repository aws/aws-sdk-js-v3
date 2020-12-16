import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { BatchPutDocumentRequest, BatchPutDocumentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchPutDocumentCommand,
  serializeAws_json1_1BatchPutDocumentCommand,
} from "../protocols/Aws_json1_1";
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

export type BatchPutDocumentCommandInput = BatchPutDocumentRequest;
export type BatchPutDocumentCommandOutput = BatchPutDocumentResponse & __MetadataBearer;

/**
 * <p>Adds one or more documents to an index.</p>
 *          <p>The <code>BatchPutDocument</code> operation enables you to ingest inline documents or a
 *       set of documents stored in an Amazon S3 bucket. Use this operation to ingest your text and
 *       unstructured text into an index, add custom attributes to the documents, and to attach an
 *       access control list to the documents added to the index.</p>
 *          <p>The documents are indexed asynchronously. You can see the progress of the batch using AWS
 *       CloudWatch. Any error messages related to processing the batch are sent to your AWS CloudWatch
 *       log.</p>
 */
export class BatchPutDocumentCommand extends $Command<
  BatchPutDocumentCommandInput,
  BatchPutDocumentCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchPutDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "BatchPutDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchPutDocumentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchPutDocumentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchPutDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchPutDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutDocumentCommandOutput> {
    return deserializeAws_json1_1BatchPutDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
