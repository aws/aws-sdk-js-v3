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
import { ActivityType, TerminateInstanceInAutoScalingGroupType } from "../models/models_0";
import {
  deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand,
  serializeAws_queryTerminateInstanceInAutoScalingGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link TerminateInstanceInAutoScalingGroupCommand}.
 */
export interface TerminateInstanceInAutoScalingGroupCommandInput extends TerminateInstanceInAutoScalingGroupType {}
/**
 * @public
 *
 * The output of {@link TerminateInstanceInAutoScalingGroupCommand}.
 */
export interface TerminateInstanceInAutoScalingGroupCommandOutput extends ActivityType, __MetadataBearer {}

/**
 * @public
 * <p>Terminates the specified instance and optionally adjusts the desired group size. This
 *             operation cannot be called on instances in a warm pool.</p>
 *          <p>This call simply makes a termination request. The instance is not terminated
 *             immediately. When an instance is terminated, the instance status changes to
 *                 <code>terminated</code>. You can't connect to or start an instance after you've
 *             terminated it.</p>
 *          <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
 *             instances to replace the ones that are terminated. </p>
 *          <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you
 *             decrement the desired capacity, your Auto Scaling group can become unbalanced between
 *             Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might
 *             terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, TerminateInstanceInAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, TerminateInstanceInAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new TerminateInstanceInAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param TerminateInstanceInAutoScalingGroupCommandInput - {@link TerminateInstanceInAutoScalingGroupCommandInput}
 * @returns {@link TerminateInstanceInAutoScalingGroupCommandOutput}
 * @see {@link TerminateInstanceInAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link TerminateInstanceInAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ScalingActivityInProgressFault} (client fault)
 *  <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 *
 *
 * @example To terminate an instance in an Auto Scaling group
 * ```javascript
 * // This example terminates the specified instance from the specified Auto Scaling group without updating the size of the group. Auto Scaling launches a replacement instance after the specified instance terminates.
 * const input = {
 *   "InstanceId": "i-93633f9b",
 *   "ShouldDecrementDesiredCapacity": false
 * };
 * const command = new TerminateInstanceInAutoScalingGroupCommand(input);
 * await client.send(command);
 * // example id: autoscaling-terminate-instance-in-auto-scaling-group-1
 * ```
 *
 */
export class TerminateInstanceInAutoScalingGroupCommand extends $Command<
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateInstanceInAutoScalingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "TerminateInstanceInAutoScalingGroupCommand";
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
    input: TerminateInstanceInAutoScalingGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryTerminateInstanceInAutoScalingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> {
    return deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
