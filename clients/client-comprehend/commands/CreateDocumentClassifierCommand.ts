import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { CreateDocumentClassifierRequest, CreateDocumentClassifierResponse } from "../models/index";
import {
  deserializeAws_json1_1CreateDocumentClassifierCommand,
  serializeAws_json1_1CreateDocumentClassifierCommand,
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

export type CreateDocumentClassifierCommandInput = CreateDocumentClassifierRequest;
export type CreateDocumentClassifierCommandOutput = CreateDocumentClassifierResponse & __MetadataBearer;

export class CreateDocumentClassifierCommand extends $Command<
  CreateDocumentClassifierCommandInput,
  CreateDocumentClassifierCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDocumentClassifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDocumentClassifierCommandInput, CreateDocumentClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateDocumentClassifierRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDocumentClassifierResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDocumentClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDocumentClassifierCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDocumentClassifierCommandOutput> {
    return deserializeAws_json1_1CreateDocumentClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
