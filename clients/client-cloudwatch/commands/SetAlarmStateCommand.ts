import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { SetAlarmStateInput } from "../models/models_0";
import {
  deserializeAws_querySetAlarmStateCommand,
  serializeAws_querySetAlarmStateCommand,
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

export type SetAlarmStateCommandInput = SetAlarmStateInput;
export type SetAlarmStateCommandOutput = __MetadataBearer;

/**
 * <p>Temporarily sets the state of an alarm for testing purposes. When the updated
 * 			state differs from the previous value, the action configured for
 * 			the appropriate state is invoked. For example, if your alarm is configured to send an
 * 			Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to
 * 			<code>ALARM</code> sends an SNS message.</p>
 * 		       <p>Metric alarms
 * 			returns to their actual state quickly, often within seconds. Because the metric alarm state change
 * 			happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p>
 * 		       <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return
 * 			to its actual state. It
 * 			returns to its actual state only once any of its children alarms change state. It is also
 * 			reevaluated if you update its
 * 			configuration.</p>
 * 		       <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include
 * 		information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>
 */
export class SetAlarmStateCommand extends $Command<
  SetAlarmStateCommandInput,
  SetAlarmStateCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetAlarmStateCommandInput) {
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
  ): Handler<SetAlarmStateCommandInput, SetAlarmStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "SetAlarmStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetAlarmStateInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetAlarmStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetAlarmStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetAlarmStateCommandOutput> {
    return deserializeAws_querySetAlarmStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
