import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LambdaClient";
import {
  ListFunctionEventInvokeConfigsRequest,
  ListFunctionEventInvokeConfigsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListFunctionEventInvokeConfigsCommand,
  serializeAws_restJson1_1ListFunctionEventInvokeConfigsCommand
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

export type ListFunctionEventInvokeConfigsCommandInput = ListFunctionEventInvokeConfigsRequest;
export type ListFunctionEventInvokeConfigsCommandOutput = ListFunctionEventInvokeConfigsResponse;

export class ListFunctionEventInvokeConfigsCommand extends $Command<
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFunctionEventInvokeConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListFunctionEventInvokeConfigsCommandInput,
    ListFunctionEventInvokeConfigsCommandOutput
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
    input: ListFunctionEventInvokeConfigsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListFunctionEventInvokeConfigsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListFunctionEventInvokeConfigsCommandOutput> {
    return deserializeAws_restJson1_1ListFunctionEventInvokeConfigsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
