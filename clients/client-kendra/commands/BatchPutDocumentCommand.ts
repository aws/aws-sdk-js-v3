import {
  ServiceInputTypes,
  ServiceOutputTypes,
  kendraClientResolvedConfig
} from "../kendraClient";
import {
  BatchPutDocumentRequest,
  BatchPutDocumentResponse
} from "../models/index";
import {
  deserializeAws_json1_1BatchPutDocumentCommand,
  serializeAws_json1_1BatchPutDocumentCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type BatchPutDocumentCommandInput = BatchPutDocumentRequest;
export type BatchPutDocumentCommandOutput = BatchPutDocumentResponse &
  __MetadataBearer;

export class BatchPutDocumentCommand extends $Command<
  BatchPutDocumentCommandInput,
  BatchPutDocumentCommandOutput,
  kendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchPutDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: kendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchPutDocumentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchPutDocumentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchPutDocumentCommandOutput> {
    return deserializeAws_json1_1BatchPutDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
