import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeEventBusRequest, DescribeEventBusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEventBusCommand,
  serializeAws_json1_1DescribeEventBusCommand,
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

export type DescribeEventBusCommandInput = DescribeEventBusRequest;
export type DescribeEventBusCommandOutput = DescribeEventBusResponse & __MetadataBearer;

/**
 * <p>Displays details about an event bus in your account. This can include the external
 *             AWS accounts that are permitted to write events to your default event bus, and the
 *             associated policy. For custom event buses and partner event buses, it displays the name,
 *             ARN, policy, state, and creation time.</p>
 *         <p> To enable your account to receive events from other accounts on its default event
 *             bus, use <a>PutPermission</a>.</p>
 *         <p>For more information about partner event buses, see <a>CreateEventBus</a>.</p>
 */
export class DescribeEventBusCommand extends $Command<
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventBusCommandInput) {
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
  ): Handler<DescribeEventBusCommandInput, DescribeEventBusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "DescribeEventBusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventBusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventBusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventBusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventBusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventBusCommandOutput> {
    return deserializeAws_json1_1DescribeEventBusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
