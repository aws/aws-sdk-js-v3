import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ActivitiesType, DescribeScalingActivitiesType } from "../models/models_0";
import {
  deserializeAws_queryDescribeScalingActivitiesCommand,
  serializeAws_queryDescribeScalingActivitiesCommand,
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

export type DescribeScalingActivitiesCommandInput = DescribeScalingActivitiesType;
export type DescribeScalingActivitiesCommandOutput = ActivitiesType & __MetadataBearer;

/**
 * <p>Describes one or more scaling activities for the specified Auto Scaling group.</p>
 *         <p>To view the scaling activities from the Amazon EC2 Auto Scaling console, choose the <b>Activity</b> tab of the Auto Scaling group. When scaling events occur,
 *             you see scaling activity messages in the <b>Activity
 *                 history</b>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling
 *                 activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class DescribeScalingActivitiesCommand extends $Command<
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScalingActivitiesCommandInput) {
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
  ): Handler<DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeScalingActivitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalingActivitiesType.filterSensitiveLog,
      outputFilterSensitiveLog: ActivitiesType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingActivitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeScalingActivitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingActivitiesCommandOutput> {
    return deserializeAws_queryDescribeScalingActivitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
