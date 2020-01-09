import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LambdaClient";
import { AliasConfiguration, CreateAliasRequest } from "../models/index";
import {
  deserializeAws_restJson1_1CreateAliasCommand,
  serializeAws_restJson1_1CreateAliasCommand
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

export type CreateAliasCommandInput = CreateAliasRequest;
export type CreateAliasCommandOutput = AliasConfiguration;

export class CreateAliasCommand extends $Command<
  CreateAliasCommandInput,
  CreateAliasCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAliasCommandInput, CreateAliasCommandOutput> {
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
    input: CreateAliasCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateAliasCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateAliasCommandOutput> {
    return deserializeAws_restJson1_1CreateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
