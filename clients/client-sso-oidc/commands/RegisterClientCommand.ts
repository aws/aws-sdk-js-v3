import {
  SSOOIDCClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SSOOIDCClient";
import {
  RegisterClientRequest,
  RegisterClientResponse,
} from "../models/index";
import {
  deserializeAws_restJson1_1RegisterClientCommand,
  serializeAws_restJson1_1RegisterClientCommand,
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

export type RegisterClientCommandInput = RegisterClientRequest;
export type RegisterClientCommandOutput = RegisterClientResponse;

export class RegisterClientCommand extends $Command<RegisterClientCommandInput, RegisterClientCommandOutput, SSOOIDCClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterClientCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOOIDCClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterClientCommandInput, RegisterClientCommandOutput> {
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
    input: RegisterClientCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1RegisterClientCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<RegisterClientCommandOutput> {
    return deserializeAws_restJson1_1RegisterClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
