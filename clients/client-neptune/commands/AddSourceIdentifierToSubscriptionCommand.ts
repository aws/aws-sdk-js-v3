import {
  NeptuneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../NeptuneClient";
import {
  AddSourceIdentifierToSubscriptionMessage,
  AddSourceIdentifierToSubscriptionResult
} from "../models/index";
import {
  deserializeAws_queryAddSourceIdentifierToSubscriptionCommand,
  serializeAws_queryAddSourceIdentifierToSubscriptionCommand
} from "../protocols/Aws_query";
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

export type AddSourceIdentifierToSubscriptionCommandInput = AddSourceIdentifierToSubscriptionMessage;
export type AddSourceIdentifierToSubscriptionCommandOutput = AddSourceIdentifierToSubscriptionResult &
  __MetadataBearer;

export class AddSourceIdentifierToSubscriptionCommand extends $Command<
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddSourceIdentifierToSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AddSourceIdentifierToSubscriptionCommandInput,
    AddSourceIdentifierToSubscriptionCommandOutput
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
    input: AddSourceIdentifierToSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAddSourceIdentifierToSubscriptionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput> {
    return deserializeAws_queryAddSourceIdentifierToSubscriptionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
