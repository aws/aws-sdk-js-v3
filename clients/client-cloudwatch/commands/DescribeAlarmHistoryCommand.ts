import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAlarmHistoryInput, DescribeAlarmHistoryOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeAlarmHistoryCommand,
  serializeAws_queryDescribeAlarmHistoryCommand,
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

export type DescribeAlarmHistoryCommandInput = DescribeAlarmHistoryInput;
export type DescribeAlarmHistoryCommandOutput = DescribeAlarmHistoryOutput & __MetadataBearer;

/**
 * <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type.
 * 			If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p>
 * 		       <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p>
 */
export class DescribeAlarmHistoryCommand extends $Command<
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAlarmHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAlarmHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAlarmHistoryInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAlarmHistoryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAlarmHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAlarmHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlarmHistoryCommandOutput> {
    return deserializeAws_queryDescribeAlarmHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
