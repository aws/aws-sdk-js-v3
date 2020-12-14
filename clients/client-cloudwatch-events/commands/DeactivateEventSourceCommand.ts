import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DeactivateEventSourceRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeactivateEventSourceCommand,
  serializeAws_json1_1DeactivateEventSourceCommand,
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

export type DeactivateEventSourceCommandInput = DeactivateEventSourceRequest;
export type DeactivateEventSourceCommandOutput = __MetadataBearer;

/**
 * <p>You can use this operation to temporarily stop receiving events from the specified
 *             partner event source. The matching event bus is not deleted. </p>
 *         <p>When you deactivate a partner event source, the source goes into PENDING state. If it
 *             remains in PENDING state for more than two weeks, it is deleted.</p>
 *         <p>To activate a deactivated partner event source, use <a>ActivateEventSource</a>.</p>
 */
export class DeactivateEventSourceCommand extends $Command<
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeactivateEventSourceCommandInput) {
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
  ): Handler<DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DeactivateEventSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeactivateEventSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeactivateEventSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeactivateEventSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeactivateEventSourceCommandOutput> {
    return deserializeAws_json1_1DeactivateEventSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
