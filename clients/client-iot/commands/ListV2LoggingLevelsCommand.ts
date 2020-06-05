import {
  IoTClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTClient";
import {
  ListV2LoggingLevelsRequest,
  ListV2LoggingLevelsResponse
} from "../models/index";
import {
  deserializeAws_restJson1ListV2LoggingLevelsCommand,
  serializeAws_restJson1ListV2LoggingLevelsCommand
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

export type ListV2LoggingLevelsCommandInput = ListV2LoggingLevelsRequest;
export type ListV2LoggingLevelsCommandOutput = ListV2LoggingLevelsResponse &
  __MetadataBearer;

export class ListV2LoggingLevelsCommand extends $Command<
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListV2LoggingLevelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListV2LoggingLevelsCommandInput,
    ListV2LoggingLevelsCommandOutput
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
    input: ListV2LoggingLevelsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListV2LoggingLevelsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListV2LoggingLevelsCommandOutput> {
    return deserializeAws_restJson1ListV2LoggingLevelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
