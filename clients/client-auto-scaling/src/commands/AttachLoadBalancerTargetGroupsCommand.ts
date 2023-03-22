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
import { AttachLoadBalancerTargetGroupsResultType, AttachLoadBalancerTargetGroupsType } from "../models/models_0";
import {
  deserializeAws_queryAttachLoadBalancerTargetGroupsCommand,
  serializeAws_queryAttachLoadBalancerTargetGroupsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link AttachLoadBalancerTargetGroupsCommand}.
 */
export interface AttachLoadBalancerTargetGroupsCommandInput extends AttachLoadBalancerTargetGroupsType {}
/**
 * @public
 *
 * The output of {@link AttachLoadBalancerTargetGroupsCommand}.
 */
export interface AttachLoadBalancerTargetGroupsCommandOutput
  extends AttachLoadBalancerTargetGroupsResultType,
    __MetadataBearer {}

/**
 * @public
 * <p>Attaches one or more target groups to the specified Auto Scaling group.</p>
 *          <p>This operation is used with the following load balancer types: </p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and
 *                     HTTPS. </p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and
 *                     UDP. </p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *          <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from
 *             the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p>
 *          <p>This operation is additive and does not detach existing target groups or Classic Load
 *             Balancers from the Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to
 *                 distribute traffic across the instances in your Auto Scaling group</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachLoadBalancerTargetGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachLoadBalancerTargetGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new AttachLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AttachLoadBalancerTargetGroupsCommandInput - {@link AttachLoadBalancerTargetGroupsCommandInput}
 * @returns {@link AttachLoadBalancerTargetGroupsCommandOutput}
 * @see {@link AttachLoadBalancerTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancerTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 *
 * @example To attach a target group to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified target group to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "TargetGroupARNs": [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *   ]
 * };
 * const command = new AttachLoadBalancerTargetGroupsCommand(input);
 * await client.send(command);
 * // example id: autoscaling-attach-load-balancer-target-groups-1
 * ```
 *
 */
export class AttachLoadBalancerTargetGroupsCommand extends $Command<
  AttachLoadBalancerTargetGroupsCommandInput,
  AttachLoadBalancerTargetGroupsCommandOutput,
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
  constructor(readonly input: AttachLoadBalancerTargetGroupsCommandInput) {
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
  ): Handler<AttachLoadBalancerTargetGroupsCommandInput, AttachLoadBalancerTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachLoadBalancerTargetGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "AttachLoadBalancerTargetGroupsCommand";
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
    input: AttachLoadBalancerTargetGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAttachLoadBalancerTargetGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachLoadBalancerTargetGroupsCommandOutput> {
    return deserializeAws_queryAttachLoadBalancerTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
