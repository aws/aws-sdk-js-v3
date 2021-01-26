import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeEventSubscriptionsMessage, EventSubscriptionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeEventSubscriptionsCommand,
  serializeAws_queryDescribeEventSubscriptionsCommand,
} from "../protocols/Aws_query";
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

export type DescribeEventSubscriptionsCommandInput = DescribeEventSubscriptionsMessage;
export type DescribeEventSubscriptionsCommandOutput = EventSubscriptionsMessage & __MetadataBearer;

/**
 * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a
 *             customer account. If you specify a subscription name, lists the description for that
 *             subscription.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all event notification subscriptions that match any combination of the specified keys
 *             and values. For example, if you have <code>owner</code> and <code>environment</code> for
 *             tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions
 *             that have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, subscriptions are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 */
export class DescribeEventSubscriptionsCommand extends $Command<
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventSubscriptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeEventSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventSubscriptionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EventSubscriptionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEventSubscriptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventSubscriptionsCommandOutput> {
    return deserializeAws_queryDescribeEventSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
