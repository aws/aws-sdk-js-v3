import {
  ListConfigurationRevisionsRequest,
  ListConfigurationRevisionsResponse
} from "../models/index";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  mqClientResolvedConfig
} from "../mqClient";
import {
  deserializeAws_restJson1_1ListConfigurationRevisionsCommand,
  serializeAws_restJson1_1ListConfigurationRevisionsCommand
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

export type ListConfigurationRevisionsCommandInput = ListConfigurationRevisionsRequest;
export type ListConfigurationRevisionsCommandOutput = ListConfigurationRevisionsResponse;

export class ListConfigurationRevisionsCommand extends $Command<
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
  mqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConfigurationRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: mqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListConfigurationRevisionsCommandInput,
    ListConfigurationRevisionsCommandOutput
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
    input: ListConfigurationRevisionsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListConfigurationRevisionsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListConfigurationRevisionsCommandOutput> {
    return deserializeAws_restJson1_1ListConfigurationRevisionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
