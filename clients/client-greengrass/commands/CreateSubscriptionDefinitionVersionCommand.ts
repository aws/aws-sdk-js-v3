import {
  GreengrassClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GreengrassClient";
import {
  CreateSubscriptionDefinitionVersionRequest,
  CreateSubscriptionDefinitionVersionResponse
} from "../models/index";
import {
  deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand,
  serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand
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

export type CreateSubscriptionDefinitionVersionCommandInput = CreateSubscriptionDefinitionVersionRequest;
export type CreateSubscriptionDefinitionVersionCommandOutput = CreateSubscriptionDefinitionVersionResponse &
  __MetadataBearer;

export class CreateSubscriptionDefinitionVersionCommand extends $Command<
  CreateSubscriptionDefinitionVersionCommandInput,
  CreateSubscriptionDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSubscriptionDefinitionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateSubscriptionDefinitionVersionCommandInput,
    CreateSubscriptionDefinitionVersionCommandOutput
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
    input: CreateSubscriptionDefinitionVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSubscriptionDefinitionVersionCommandOutput> {
    return deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
