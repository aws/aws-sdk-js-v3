import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ActivityType, TerminateInstanceInAutoScalingGroupType } from "../models/models_0";
import {
  deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand,
  serializeAws_queryTerminateInstanceInAutoScalingGroupCommand,
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

export type TerminateInstanceInAutoScalingGroupCommandInput = TerminateInstanceInAutoScalingGroupType;
export type TerminateInstanceInAutoScalingGroupCommandOutput = ActivityType & __MetadataBearer;

/**
 * <p>Terminates the specified instance and optionally adjusts the desired group size. </p>
 *         <p>This call simply makes a termination request. The instance is not terminated
 *             immediately. When an instance is terminated, the instance status changes to
 *                 <code>terminated</code>. You can't connect to or start an instance after you've
 *             terminated it.</p>
 *         <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
 *             instances to replace the ones that are terminated. </p>
 *         <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you
 *             decrement the desired capacity, your Auto Scaling group can become unbalanced between
 *             Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might
 *             terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class TerminateInstanceInAutoScalingGroupCommand extends $Command<
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TerminateInstanceInAutoScalingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateInstanceInAutoScalingGroupCommandInput, TerminateInstanceInAutoScalingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "TerminateInstanceInAutoScalingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateInstanceInAutoScalingGroupType.filterSensitiveLog,
      outputFilterSensitiveLog: ActivityType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: TerminateInstanceInAutoScalingGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryTerminateInstanceInAutoScalingGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> {
    return deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
