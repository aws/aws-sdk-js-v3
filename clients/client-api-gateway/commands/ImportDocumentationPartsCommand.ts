import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import {
  DocumentationPartIds,
  ImportDocumentationPartsRequest,
} from "../models/index";
import {
  deserializeAws_restJson1_1ImportDocumentationPartsCommand,
  serializeAws_restJson1_1ImportDocumentationPartsCommand,
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type ImportDocumentationPartsCommandInput = ImportDocumentationPartsRequest;
export type ImportDocumentationPartsCommandOutput = DocumentationPartIds;

export class ImportDocumentationPartsCommand extends $Command<ImportDocumentationPartsCommandInput, ImportDocumentationPartsCommandOutput, APIGatewayClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportDocumentationPartsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportDocumentationPartsCommandInput, ImportDocumentationPartsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ImportDocumentationPartsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ImportDocumentationPartsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ImportDocumentationPartsCommandOutput> {
    return deserializeAws_restJson1_1ImportDocumentationPartsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
