import {
  FirehoseClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../FirehoseClient";
import {
  ListDeliveryStreamsInput,
  ListDeliveryStreamsOutput
} from "../models/index";
import {
  deserializeAws_json1_1ListDeliveryStreamsCommand,
  serializeAws_json1_1ListDeliveryStreamsCommand
} from "../protocols/Aws_json1_1";
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

export type ListDeliveryStreamsCommandInput = ListDeliveryStreamsInput;
export type ListDeliveryStreamsCommandOutput = ListDeliveryStreamsOutput;

export class ListDeliveryStreamsCommand extends $Command<
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
  FirehoseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeliveryStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListDeliveryStreamsCommandInput,
    ListDeliveryStreamsCommandOutput
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
    input: ListDeliveryStreamsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeliveryStreamsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListDeliveryStreamsCommandOutput> {
    return deserializeAws_json1_1ListDeliveryStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
