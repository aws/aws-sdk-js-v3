import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeEventsMessage, EventsMessage } from "../models/models_1";
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
 * <p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, and DB cluster snapshots for the past 14 days.
 *           Events specific to a particular DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, and DB cluster snapshots group can be
 *           obtained by providing the name as a parameter.</p>
 *          <note>
 *             <p>By default, the past hour of events are returned.</p>
 *          </note>
 */
export class DescribeEventsCommand extends $Command<
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
  RDSClientResolvedConfig
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
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventsCommandInput, DescribeEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
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
