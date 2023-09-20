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
import { PutWarmPoolAnswer, PutWarmPoolType } from "../models/models_0";
import { de_PutWarmPoolCommand, se_PutWarmPoolCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutWarmPoolCommand}.
 */
export interface PutWarmPoolCommandInput extends PutWarmPoolType {}
/**
 * @public
 *
 * The output of {@link PutWarmPoolCommand}.
 */
export interface PutWarmPoolCommandOutput extends PutWarmPoolAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of
 *             pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your
 *             application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new
 *             desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>This operation must be called from the Region in which the Auto Scaling group was created.
 *             This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a
 *             launch template or launch configuration that requests Spot Instances.</p>
 *          <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the
 *                 <a>DeleteWarmPool</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // PutWarmPoolType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   MaxGroupPreparedCapacity: Number("int"),
 *   MinSize: Number("int"),
 *   PoolState: "Stopped" || "Running" || "Hibernated",
 *   InstanceReusePolicy: { // InstanceReusePolicy
 *     ReuseOnScaleIn: true || false,
 *   },
 * };
 * const command = new PutWarmPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWarmPoolCommandInput - {@link PutWarmPoolCommandInput}
 * @returns {@link PutWarmPoolCommandOutput}
 * @see {@link PutWarmPoolCommandInput} for command's `input` shape.
 * @see {@link PutWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To create a warm pool for an Auto Scaling group
 * ```javascript
 * // This example creates a warm pool for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "InstanceReusePolicy": {
 *     "ReuseOnScaleIn": true
 *   },
 *   "MinSize": 30,
 *   "PoolState": "Hibernated"
 * };
 * const command = new PutWarmPoolCommand(input);
 * await client.send(command);
 * // example id: to-add-a-warm-pool-to-an-auto-scaling-group-1617818810383
 * ```
 *
 */
export class PutWarmPoolCommand extends $Command<
  PutWarmPoolCommandInput,
  PutWarmPoolCommandOutput,
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
  constructor(readonly input: PutWarmPoolCommandInput) {
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
  ): Handler<PutWarmPoolCommandInput, PutWarmPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutWarmPoolCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutWarmPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "PutWarmPool",
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
  private serialize(input: PutWarmPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutWarmPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutWarmPoolCommandOutput> {
    return de_PutWarmPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
