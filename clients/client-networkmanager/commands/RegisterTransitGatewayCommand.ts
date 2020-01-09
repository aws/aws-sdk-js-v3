import {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../NetworkManagerClient";
import {
  RegisterTransitGatewayRequest,
  RegisterTransitGatewayResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1RegisterTransitGatewayCommand,
  serializeAws_restJson1_1RegisterTransitGatewayCommand
} from "../protocols/Aws_restJson1_1";
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type RegisterTransitGatewayCommandInput = RegisterTransitGatewayRequest;
export type RegisterTransitGatewayCommandOutput = RegisterTransitGatewayResponse;

export class RegisterTransitGatewayCommand extends $Command<
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterTransitGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterTransitGatewayCommandInput,
    RegisterTransitGatewayCommandOutput
  > {
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
    input: RegisterTransitGatewayCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1RegisterTransitGatewayCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<RegisterTransitGatewayCommandOutput> {
    return deserializeAws_restJson1_1RegisterTransitGatewayCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
