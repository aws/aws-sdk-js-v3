import {
  SecurityHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SecurityHubClient";
import {
  CreateActionTargetRequest,
  CreateActionTargetResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1CreateActionTargetCommand,
  serializeAws_restJson1_1CreateActionTargetCommand
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

export type CreateActionTargetCommandInput = CreateActionTargetRequest;
export type CreateActionTargetCommandOutput = CreateActionTargetResponse;

export class CreateActionTargetCommand extends $Command<
  CreateActionTargetCommandInput,
  CreateActionTargetCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateActionTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateActionTargetCommandInput, CreateActionTargetCommandOutput> {
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
    input: CreateActionTargetCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateActionTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateActionTargetCommandOutput> {
    return deserializeAws_restJson1_1CreateActionTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
