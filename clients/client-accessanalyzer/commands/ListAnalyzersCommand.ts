import {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AccessAnalyzerClient";
import { ListAnalyzersRequest, ListAnalyzersResponse } from "../models/index";
import {
  deserializeAws_restJson1ListAnalyzersCommand,
  serializeAws_restJson1ListAnalyzersCommand
} from "../protocols/Aws_restJson1";
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

export type ListAnalyzersCommandInput = ListAnalyzersRequest;
export type ListAnalyzersCommandOutput = ListAnalyzersResponse &
  __MetadataBearer;

export class ListAnalyzersCommand extends $Command<
  ListAnalyzersCommandInput,
  ListAnalyzersCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAnalyzersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnalyzersCommandInput, ListAnalyzersCommandOutput> {
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
    input: ListAnalyzersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnalyzersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnalyzersCommandOutput> {
    return deserializeAws_restJson1ListAnalyzersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
