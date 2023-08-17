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
} from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AttachLoadBalancersResultType, AttachLoadBalancersType } from "../models/models_0";
import { de_AttachLoadBalancersCommand, se_AttachLoadBalancersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AttachLoadBalancersCommand}.
 */
export interface AttachLoadBalancersCommandInput extends AttachLoadBalancersType {}
/**
 * @public
 *
 * The output of {@link AttachLoadBalancersCommand}.
 */
export interface AttachLoadBalancersCommandOutput extends AttachLoadBalancersResultType, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This API operation is superseded by <a>AttachTrafficSources</a>, which
 *                 can attach multiple traffic sources types. We recommend using
 *                     <code>AttachTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>AttachLoadBalancers</code>. You can use both
 *                 the original <code>AttachLoadBalancers</code> API operation and
 *                     <code>AttachTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the
 *             running instances with these Classic Load Balancers.</p>
 *          <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling
 *             group, call the <a>DetachLoadBalancers</a> API.</p>
 *          <p>This operation is additive and does not detach existing Classic Load Balancers or
 *             target groups from the Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to
 *                 distribute traffic across the instances in your Auto Scaling group</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // AttachLoadBalancersType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LoadBalancerNames: [ // LoadBalancerNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AttachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachLoadBalancersCommandInput - {@link AttachLoadBalancersCommandInput}
 * @returns {@link AttachLoadBalancersCommandOutput}
 * @see {@link AttachLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To attach a load balancer to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified load balancer to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "LoadBalancerNames": [
 *     "my-load-balancer"
 *   ]
 * };
 * const command = new AttachLoadBalancersCommand(input);
 * await client.send(command);
 * // example id: autoscaling-attach-load-balancers-1
 * ```
 *
 */
export class AttachLoadBalancersCommand extends $Command<
  AttachLoadBalancersCommandInput,
  AttachLoadBalancersCommandOutput,
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
  constructor(readonly input: AttachLoadBalancersCommandInput) {
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
  ): Handler<AttachLoadBalancersCommandInput, AttachLoadBalancersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachLoadBalancersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "AttachLoadBalancersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: AttachLoadBalancersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AttachLoadBalancersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachLoadBalancersCommandOutput> {
    return de_AttachLoadBalancersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
