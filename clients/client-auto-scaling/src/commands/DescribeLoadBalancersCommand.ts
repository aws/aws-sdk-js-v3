// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLoadBalancersRequest, DescribeLoadBalancersResponse } from "../models/models_0";
import { de_DescribeLoadBalancersCommand, se_DescribeLoadBalancersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancersCommand}.
 */
export interface DescribeLoadBalancersCommandInput extends DescribeLoadBalancersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancersCommand}.
 */
export interface DescribeLoadBalancersCommandOutput extends DescribeLoadBalancersResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This API operation is superseded by <a>DescribeTrafficSources</a>,
 *                 which can describe multiple traffic sources types. We recommend using
 *                     <code>DescribeTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>DescribeLoadBalancers</code>. You can use both
 *                 the original <code>DescribeLoadBalancers</code> API operation and
 *                     <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Gets information about the load balancers for the specified Auto Scaling group.</p>
 *          <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the
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
 * const input = { // DescribeLoadBalancersRequest
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancersResponse
 * //   LoadBalancers: [ // LoadBalancerStates
 * //     { // LoadBalancerState
 * //       LoadBalancerName: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancersCommandInput - {@link DescribeLoadBalancersCommandInput}
 * @returns {@link DescribeLoadBalancersCommandOutput}
 * @see {@link DescribeLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe the load balancers for an Auto Scaling group
 * ```javascript
 * // This example describes the load balancers attached to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancers": [
 *     {
 *       "LoadBalancerName": "my-load-balancer",
 *       "State": "Added"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-load-balancers-1
 * ```
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "DescribeLoadBalancers",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeLoadBalancersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLoadBalancersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLoadBalancersCommandOutput> {
    return de_DescribeLoadBalancersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
