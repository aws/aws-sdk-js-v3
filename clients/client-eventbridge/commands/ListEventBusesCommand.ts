import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  ListEventBusesRequest,
  ListEventBusesResponse,
} from "../models/index";
import {
  deserializeAws_json1_1ListEventBusesCommand,
  serializeAws_json1_1ListEventBusesCommand,
} from "../protocols/Aws_json1_1";
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

export type ListEventBusesCommandInput = ListEventBusesRequest;
export type ListEventBusesCommandOutput = ListEventBusesResponse;

export class ListEventBusesCommand extends $Command<ListEventBusesCommandInput, ListEventBusesCommandOutput, EventBridgeClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEventBusesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventBusesCommandInput, ListEventBusesCommandOutput> {
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
    input: ListEventBusesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEventBusesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListEventBusesCommandOutput> {
    return deserializeAws_json1_1ListEventBusesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
