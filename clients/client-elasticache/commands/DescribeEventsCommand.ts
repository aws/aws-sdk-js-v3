import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeEventsMessage, EventsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeEventsCommand,
  serializeAws_queryDescribeEventsCommand,
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

export type DescribeEventsCommandInput = DescribeEventsMessage;
export type DescribeEventsCommandOutput = EventsMessage & __MetadataBearer;

/**
 * <p>Returns events related to clusters, cache
 *             security groups, and cache parameter groups. You can obtain events specific to a
 *             particular cluster, cache security group, or cache parameter group by providing
 *             the name as a parameter.</p>
 *         <p>By default, only the events occurring within the last hour are returned;
 *             however, you can retrieve up to 14 days' worth of events if necessary.</p>
 */
export class DescribeEventsCommand extends $Command<
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventsCommandInput, DescribeEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EventsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventsCommandOutput> {
    return deserializeAws_queryDescribeEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
