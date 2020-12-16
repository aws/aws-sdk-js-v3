import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutEventsRequest, PutEventsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutEventsCommand, serializeAws_json1_1PutEventsCommand } from "../protocols/Aws_json1_1";
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

export type PutEventsCommandInput = PutEventsRequest;
export type PutEventsCommandOutput = PutEventsResponse & __MetadataBearer;

/**
 * <p>Sends custom events to Amazon EventBridge so that they can be matched to
 *             rules.</p>
 */
export class PutEventsCommand extends $Command<
  PutEventsCommandInput,
  PutEventsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEventsCommandInput, PutEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "PutEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEventsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEventsCommandOutput> {
    return deserializeAws_json1_1PutEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
