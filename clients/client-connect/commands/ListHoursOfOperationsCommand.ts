import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListHoursOfOperationsRequest, ListHoursOfOperationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListHoursOfOperationsCommand,
  serializeAws_restJson1ListHoursOfOperationsCommand,
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

export type ListHoursOfOperationsCommandInput = ListHoursOfOperationsRequest;
export type ListHoursOfOperationsCommandOutput = ListHoursOfOperationsResponse & __MetadataBearer;

/**
 * <p>Provides information about the hours of operation for the specified Amazon Connect instance.</p>
 *          <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a
 *     Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class ListHoursOfOperationsCommand extends $Command<
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHoursOfOperationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHoursOfOperationsCommandInput, ListHoursOfOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListHoursOfOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHoursOfOperationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListHoursOfOperationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHoursOfOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListHoursOfOperationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHoursOfOperationsCommandOutput> {
    return deserializeAws_restJson1ListHoursOfOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
