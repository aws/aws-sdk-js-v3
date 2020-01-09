import {
  OutpostsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../OutpostsClient";
import { ListOutpostsInput, ListOutpostsOutput } from "../models/index";
import {
  deserializeAws_restJson1_1ListOutpostsCommand,
  serializeAws_restJson1_1ListOutpostsCommand
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

export type ListOutpostsCommandInput = ListOutpostsInput;
export type ListOutpostsCommandOutput = ListOutpostsOutput;

export class ListOutpostsCommand extends $Command<
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput,
  OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOutpostsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOutpostsCommandInput, ListOutpostsCommandOutput> {
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
    input: ListOutpostsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListOutpostsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListOutpostsCommandOutput> {
    return deserializeAws_restJson1_1ListOutpostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
