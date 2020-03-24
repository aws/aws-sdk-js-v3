import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import {
  ApiKey,
  CreateApiKeyRequest,
} from "../models/index";
import {
  deserializeAws_restJson1_1CreateApiKeyCommand,
  serializeAws_restJson1_1CreateApiKeyCommand,
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

export type CreateApiKeyCommandInput = CreateApiKeyRequest;
export type CreateApiKeyCommandOutput = ApiKey;

export class CreateApiKeyCommand extends $Command<CreateApiKeyCommandInput, CreateApiKeyCommandOutput, APIGatewayClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApiKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApiKeyCommandInput, CreateApiKeyCommandOutput> {
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
    input: CreateApiKeyCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateApiKeyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateApiKeyCommandOutput> {
    return deserializeAws_restJson1_1CreateApiKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
