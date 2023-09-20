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
import { DetachLoadBalancersResultType, DetachLoadBalancersType } from "../models/models_0";
import { de_DetachLoadBalancersCommand, se_DetachLoadBalancersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetachLoadBalancersCommand}.
 */
export interface DetachLoadBalancersCommandInput extends DetachLoadBalancersType {}
/**
 * @public
 *
 * The output of {@link DetachLoadBalancersCommand}.
 */
export interface DetachLoadBalancersCommandOutput extends DetachLoadBalancersResultType, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This API operation is superseded by <a>DetachTrafficSources</a>, which
 *                 can detach multiple traffic sources types. We recommend using
 *                     <code>DetachTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>DetachLoadBalancers</code>. You can use both
 *                 the original <code>DetachLoadBalancers</code> API operation and
 *                     <code>DetachTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p>
 *          <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or
 *             Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p>
 *          <p>When you detach a load balancer, it enters the <code>Removing</code> state while
 *             deregistering the instances in the group. When all instances are deregistered, then you
 *             can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DetachLoadBalancersType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LoadBalancerNames: [ // LoadBalancerNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DetachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachLoadBalancersCommandInput - {@link DetachLoadBalancersCommandInput}
 * @returns {@link DetachLoadBalancersCommandOutput}
 * @see {@link DetachLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To detach a load balancer from an Auto Scaling group
 * ```javascript
 * // This example detaches the specified load balancer from the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "LoadBalancerNames": [
 *     "my-load-balancer"
 *   ]
 * };
 * const command = new DetachLoadBalancersCommand(input);
 * await client.send(command);
 * // example id: autoscaling-detach-load-balancers-1
 * ```
 *
 */
export class DetachLoadBalancersCommand extends $Command<
  DetachLoadBalancersCommandInput,
  DetachLoadBalancersCommandOutput,
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
  constructor(readonly input: DetachLoadBalancersCommandInput) {
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
  ): Handler<DetachLoadBalancersCommandInput, DetachLoadBalancersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachLoadBalancersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DetachLoadBalancersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "DetachLoadBalancers",
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
  private serialize(input: DetachLoadBalancersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetachLoadBalancersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachLoadBalancersCommandOutput> {
    return de_DetachLoadBalancersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
