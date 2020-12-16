import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ActivateEventSourceRequest } from "../models/models_0";
import {
  deserializeAws_json1_1ActivateEventSourceCommand,
  serializeAws_json1_1ActivateEventSourceCommand,
} from "../protocols/Aws_json1_1";
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

export type ActivateEventSourceCommandInput = ActivateEventSourceRequest;
export type ActivateEventSourceCommandOutput = __MetadataBearer;

/**
 * <p>Activates a partner event source that has been deactivated. Once activated, your
 *             matching event bus will start receiving events from the event source.</p>
 */
export class ActivateEventSourceCommand extends $Command<
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ActivateEventSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ActivateEventSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateEventSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ActivateEventSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ActivateEventSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateEventSourceCommandOutput> {
    return deserializeAws_json1_1ActivateEventSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
