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
import { DetachLoadBalancerTargetGroupsResultType, DetachLoadBalancerTargetGroupsType } from "../models/models_0";
import {
  de_DetachLoadBalancerTargetGroupsCommand,
  se_DetachLoadBalancerTargetGroupsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetachLoadBalancerTargetGroupsCommand}.
 */
export interface DetachLoadBalancerTargetGroupsCommandInput extends DetachLoadBalancerTargetGroupsType {}
/**
 * @public
 *
 * The output of {@link DetachLoadBalancerTargetGroupsCommand}.
 */
export interface DetachLoadBalancerTargetGroupsCommandOutput
  extends DetachLoadBalancerTargetGroupsResultType,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This API operation is superseded by <a>DetachTrafficSources</a>, which
 *                 can detach multiple traffic sources types. We recommend using
 *                     <code>DetachTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can
 *                 use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and
 *                     <code>DetachTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Detaches one or more target groups from the specified Auto Scaling group.</p>
 *          <p>When you detach a target group, it enters the <code>Removing</code> state while
 *             deregistering the instances in the group. When all instances are deregistered, then you
 *             can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain
 *             running.</p>
 *          <note>
 *             <p>You can use this operation to detach target groups that were attached by using
 *                     <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that
 *                 were attached by using <a>AttachTrafficSources</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachLoadBalancerTargetGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachLoadBalancerTargetGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DetachLoadBalancerTargetGroupsType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TargetGroupARNs: [ // TargetGroupARNs // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DetachLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachLoadBalancerTargetGroupsCommandInput - {@link DetachLoadBalancerTargetGroupsCommandInput}
 * @returns {@link DetachLoadBalancerTargetGroupsCommandOutput}
 * @see {@link DetachLoadBalancerTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancerTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To detach a target group from an Auto Scaling group
 * ```javascript
 * // This example detaches the specified target group from the specified Auto Scaling group
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "TargetGroupARNs": [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *   ]
 * };
 * const command = new DetachLoadBalancerTargetGroupsCommand(input);
 * await client.send(command);
 * // example id: autoscaling-detach-load-balancer-target-groups-1
 * ```
 *
 */
export class DetachLoadBalancerTargetGroupsCommand extends $Command<
  DetachLoadBalancerTargetGroupsCommandInput,
  DetachLoadBalancerTargetGroupsCommandOutput,
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
  constructor(readonly input: DetachLoadBalancerTargetGroupsCommandInput) {
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
  ): Handler<DetachLoadBalancerTargetGroupsCommandInput, DetachLoadBalancerTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachLoadBalancerTargetGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DetachLoadBalancerTargetGroupsCommand";
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
  private serialize(
    input: DetachLoadBalancerTargetGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DetachLoadBalancerTargetGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachLoadBalancerTargetGroupsCommandOutput> {
    return de_DetachLoadBalancerTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
