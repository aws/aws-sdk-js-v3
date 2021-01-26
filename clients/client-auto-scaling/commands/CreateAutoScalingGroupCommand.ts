import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CreateAutoScalingGroupType } from "../models/models_0";
import {
  deserializeAws_queryCreateAutoScalingGroupCommand,
  serializeAws_queryCreateAutoScalingGroupCommand,
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

export type CreateAutoScalingGroupCommandInput = CreateAutoScalingGroupType;
export type CreateAutoScalingGroupCommandOutput = __MetadataBearer;

/**
 * <p>Creates an Auto Scaling group with the specified name and attributes. </p>
 *         <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit,
 *             call the <a>DescribeAccountLimits</a> API. For information about updating
 *             this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling service
 *                 quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with
 *                 Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a
 *                 scaled and load-balanced application</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling
 *                 groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>Every Auto Scaling group has three size parameters (<code>DesiredCapacity</code>,
 *                 <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based
 *             on a specific number of instances. However, if you configure a mixed instances policy
 *             that defines weights for the instance types, you must specify these sizes with the same
 *             units that you use for weighting instances.</p>
 */
export class CreateAutoScalingGroupCommand extends $Command<
  CreateAutoScalingGroupCommandInput,
  CreateAutoScalingGroupCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAutoScalingGroupCommandInput) {
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
  ): Handler<CreateAutoScalingGroupCommandInput, CreateAutoScalingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CreateAutoScalingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAutoScalingGroupType.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAutoScalingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateAutoScalingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAutoScalingGroupCommandOutput> {
    return deserializeAws_queryCreateAutoScalingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
