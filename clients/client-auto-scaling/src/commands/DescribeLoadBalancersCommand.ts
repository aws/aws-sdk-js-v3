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
  DescribeLoadBalancersRequest,
  DescribeLoadBalancersRequestFilterSensitiveLog,
  DescribeLoadBalancersResponse,
  DescribeLoadBalancersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeLoadBalancersCommand,
  serializeAws_queryDescribeLoadBalancersCommand,
} from "../protocols/Aws_query";

export interface DescribeLoadBalancersCommandInput extends DescribeLoadBalancersRequest {}
export interface DescribeLoadBalancersCommandOutput extends DescribeLoadBalancersResponse, __MetadataBearer {}

/**
 * <p>Gets information about the load balancers for the specified Auto Scaling group.</p>
 *          <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancer, use the
 *                 <a>DescribeLoadBalancerTargetGroups</a> API instead.</p>
 *          <p>To determine the attachment status of the load balancer, use the <code>State</code>
 *             element in the response. When you attach a load balancer to an Auto Scaling group, the initial
 *                 <code>State</code> value is <code>Adding</code>. The state transitions to
 *                 <code>Added</code> after all Auto Scaling instances are registered with the load balancer.
 *             If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to
 *                 <code>InService</code> after at least one Auto Scaling instance passes the health check.
 *             When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate
 *             and replace any instances that are reported as unhealthy. If no registered instances
 *             pass the health checks, the load balancer doesn't enter the <code>InService</code>
 *             state. </p>
 *          <p>Load balancers also have an <code>InService</code> state if you attach them in the
 *                 <a>CreateAutoScalingGroup</a> API call. If your load balancer state is
 *                 <code>InService</code>, but it is not working properly, check the scaling activities
 *             by calling <a>DescribeScalingActivities</a> and take any corrective actions
 *             necessary.</p>
 *          <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling:
 *                 Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more
 *             information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to
 *                 distribute traffic across the instances in your Auto Scaling group</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeLoadBalancersCommand extends $Command<
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
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

  constructor(readonly input: DescribeLoadBalancersCommandInput) {
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
  ): Handler<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBalancersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLoadBalancersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoadBalancersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoadBalancersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLoadBalancersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLoadBalancersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLoadBalancersCommandOutput> {
    return deserializeAws_queryDescribeLoadBalancersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
