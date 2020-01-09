import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import {
  ImportRestApiRequest,
  RestApi,
} from "../models/index";
import {
  deserializeAws_restJson1_1ImportRestApiCommand,
  serializeAws_restJson1_1ImportRestApiCommand,
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

export type ImportRestApiCommandInput = ImportRestApiRequest;
export type ImportRestApiCommandOutput = RestApi;

export class ImportRestApiCommand extends $Command<ImportRestApiCommandInput, ImportRestApiCommandOutput, APIGatewayClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportRestApiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportRestApiCommandInput, ImportRestApiCommandOutput> {
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
    input: ImportRestApiCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ImportRestApiCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ImportRestApiCommandOutput> {
    return deserializeAws_restJson1_1ImportRestApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
