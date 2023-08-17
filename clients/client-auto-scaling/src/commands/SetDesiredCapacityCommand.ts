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
import { SetDesiredCapacityType } from "../models/models_0";
import { de_SetDesiredCapacityCommand, se_SetDesiredCapacityCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetDesiredCapacityCommand}.
 */
export interface SetDesiredCapacityCommandInput extends SetDesiredCapacityType {}
/**
 * @public
 *
 * The output of {@link SetDesiredCapacityCommand}.
 */
export interface SetDesiredCapacityCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets the size of the specified Auto Scaling group.</p>
 *          <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value
 *             that is lower than the current size of the group, the Auto Scaling group uses its termination
 *             policy to determine which instances to terminate. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetDesiredCapacityCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // SetDesiredCapacityType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   DesiredCapacity: Number("int"), // required
 *   HonorCooldown: true || false,
 * };
 * const command = new SetDesiredCapacityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetDesiredCapacityCommandInput - {@link SetDesiredCapacityCommandInput}
 * @returns {@link SetDesiredCapacityCommandOutput}
 * @see {@link SetDesiredCapacityCommandInput} for command's `input` shape.
 * @see {@link SetDesiredCapacityCommandOutput} for command's `response` shape.
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
 * @example To set the desired capacity for an Auto Scaling group
 * ```javascript
 * // This example sets the desired capacity for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "DesiredCapacity": 2,
 *   "HonorCooldown": true
 * };
 * const command = new SetDesiredCapacityCommand(input);
 * await client.send(command);
 * // example id: autoscaling-set-desired-capacity-1
 * ```
 *
 */
export class SetDesiredCapacityCommand extends $Command<
  SetDesiredCapacityCommandInput,
  SetDesiredCapacityCommandOutput,
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
  constructor(readonly input: SetDesiredCapacityCommandInput) {
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
  ): Handler<SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetDesiredCapacityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "SetDesiredCapacityCommand";
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
  private serialize(input: SetDesiredCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetDesiredCapacityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetDesiredCapacityCommandOutput> {
    return de_SetDesiredCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
