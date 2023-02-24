// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import {
  DescribeLoadBalancerTargetGroupsRequest,
  DescribeLoadBalancerTargetGroupsRequestFilterSensitiveLog,
  DescribeLoadBalancerTargetGroupsResponse,
  DescribeLoadBalancerTargetGroupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand,
  serializeAws_queryDescribeLoadBalancerTargetGroupsCommand,
} from "../protocols/Aws_query";

export interface DescribeLoadBalancerTargetGroupsCommandInput extends DescribeLoadBalancerTargetGroupsRequest {}
export interface DescribeLoadBalancerTargetGroupsCommandOutput
  extends DescribeLoadBalancerTargetGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p>
 *          <p>To determine the attachment status of the target group, use the <code>State</code>
 *             element in the response. When you attach a target group to an Auto Scaling group, the initial
 *                 <code>State</code> value is <code>Adding</code>. The state transitions to
 *                 <code>Added</code> after all Auto Scaling instances are registered with the target group. If
 *             Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to
 *                 <code>InService</code> after at least one Auto Scaling instance passes the health check.
 *             When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and
 *             replace any instances that are reported as unhealthy. If no registered instances pass
 *             the health checks, the target group doesn't enter the <code>InService</code> state. </p>
 *          <p>Target groups also have an <code>InService</code> state if you attach them in the
 *                 <a>CreateAutoScalingGroup</a> API call. If your target group state is
 *                 <code>InService</code>, but it is not working properly, check the scaling activities
 *             by calling <a>DescribeScalingActivities</a> and take any corrective actions
 *             necessary.</p>
 *          <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling:
 *                 Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more
 *             information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to
 *                 distribute traffic across the instances in your Auto Scaling group</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 *          <note>
 *             <p>You can use this operation to describe target groups that were attached by using
 *                     <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that
 *                 were attached by using <a>AttachTrafficSources</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLoadBalancerTargetGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLoadBalancerTargetGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBalancerTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeLoadBalancerTargetGroupsCommand extends $Command<
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DescribeLoadBalancerTargetGroupsCommandInput) {
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
  ): Handler<DescribeLoadBalancerTargetGroupsCommandInput, DescribeLoadBalancerTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBalancerTargetGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLoadBalancerTargetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoadBalancerTargetGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoadBalancerTargetGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLoadBalancerTargetGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLoadBalancerTargetGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> {
    return deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
