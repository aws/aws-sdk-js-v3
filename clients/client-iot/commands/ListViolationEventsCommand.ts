import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListViolationEventsRequest, ListViolationEventsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListViolationEventsCommand,
  serializeAws_restJson1ListViolationEventsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListViolationEventsCommandInput = ListViolationEventsRequest;
export type ListViolationEventsCommandOutput = ListViolationEventsResponse & __MetadataBearer;

/**
 * <p>Lists the Device Defender security profile violations discovered during the given time period.
 *       You can use filters to limit the results to those alerts issued for a particular security profile,
 *       behavior, or thing (device).</p>
 */
export class ListViolationEventsCommand extends $Command<
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListViolationEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListViolationEventsCommandInput, ListViolationEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListViolationEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListViolationEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListViolationEventsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListViolationEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListViolationEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListViolationEventsCommandOutput> {
    return deserializeAws_restJson1ListViolationEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
