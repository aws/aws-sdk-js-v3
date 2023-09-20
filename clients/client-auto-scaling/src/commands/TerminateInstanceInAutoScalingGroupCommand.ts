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
import { ActivityType, TerminateInstanceInAutoScalingGroupType } from "../models/models_0";
import {
  de_TerminateInstanceInAutoScalingGroupCommand,
  se_TerminateInstanceInAutoScalingGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * const input = { // TerminateInstanceInAutoScalingGroupType
 *   InstanceId: "STRING_VALUE", // required
 *   ShouldDecrementDesiredCapacity: true || false, // required
 * };
 * const command = new TerminateInstanceInAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * // { // ActivityType
 * //   Activity: { // Activity
 * //     ActivityId: "STRING_VALUE", // required
 * //     AutoScalingGroupName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Cause: "STRING_VALUE", // required
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"),
 * //     StatusCode: "PendingSpotBidPlacement" || "WaitingForSpotInstanceRequestId" || "WaitingForSpotInstanceId" || "WaitingForInstanceId" || "PreInService" || "InProgress" || "WaitingForELBConnectionDraining" || "MidLifecycleAction" || "WaitingForInstanceWarmup" || "Successful" || "Failed" || "Cancelled" || "WaitingForConnectionDraining", // required
 * //     StatusMessage: "STRING_VALUE",
 * //     Progress: Number("int"),
 * //     Details: "STRING_VALUE",
 * //     AutoScalingGroupState: "STRING_VALUE",
 * //     AutoScalingGroupARN: "STRING_VALUE",
 * //   },
 * // };
 *
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
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
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
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "TerminateInstanceInAutoScalingGroup",
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
  private serialize(
    input: TerminateInstanceInAutoScalingGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_TerminateInstanceInAutoScalingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> {
    return de_TerminateInstanceInAutoScalingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
