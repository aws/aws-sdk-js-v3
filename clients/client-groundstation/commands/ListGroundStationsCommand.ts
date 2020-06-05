import {
  GroundStationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GroundStationClient";
import {
  ListGroundStationsRequest,
  ListGroundStationsResponse
} from "../models/index";
import {
  deserializeAws_restJson1ListGroundStationsCommand,
  serializeAws_restJson1ListGroundStationsCommand
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

export type ListGroundStationsCommandInput = ListGroundStationsRequest;
export type ListGroundStationsCommandOutput = ListGroundStationsResponse &
  __MetadataBearer;

export class ListGroundStationsCommand extends $Command<
  ListGroundStationsCommandInput,
  ListGroundStationsCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroundStationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroundStationsCommandInput, ListGroundStationsCommandOutput> {
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
    input: ListGroundStationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGroundStationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListGroundStationsCommandOutput> {
    return deserializeAws_restJson1ListGroundStationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
