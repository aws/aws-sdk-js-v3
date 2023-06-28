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
import { ExecutePolicyType } from "../models/models_0";
import { de_ExecutePolicyCommand, se_ExecutePolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecutePolicyCommand}.
 */
export interface ExecutePolicyCommandInput extends ExecutePolicyType {}
/**
 * @public
 *
 * The output of {@link ExecutePolicyCommand}.
 */
export interface ExecutePolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Executes the specified policy. This can be useful for testing the design of your
 *             scaling policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ExecutePolicyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ExecutePolicyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // ExecutePolicyType
 *   AutoScalingGroupName: "STRING_VALUE",
 *   PolicyName: "STRING_VALUE", // required
 *   HonorCooldown: true || false,
 *   MetricValue: Number("double"),
 *   BreachThreshold: Number("double"),
 * };
 * const command = new ExecutePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExecutePolicyCommandInput - {@link ExecutePolicyCommandInput}
 * @returns {@link ExecutePolicyCommandOutput}
 * @see {@link ExecutePolicyCommandInput} for command's `input` shape.
 * @see {@link ExecutePolicyCommandOutput} for command's `response` shape.
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
 * @example To execute a scaling policy
 * ```javascript
 * // This example executes the specified policy.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "BreachThreshold": 50,
 *   "MetricValue": 59,
 *   "PolicyName": "my-step-scale-out-policy"
 * };
 * const command = new ExecutePolicyCommand(input);
 * await client.send(command);
 * // example id: autoscaling-execute-policy-1
 * ```
 *
 */
export class ExecutePolicyCommand extends $Command<
  ExecutePolicyCommandInput,
  ExecutePolicyCommandOutput,
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
  constructor(readonly input: ExecutePolicyCommandInput) {
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
  ): Handler<ExecutePolicyCommandInput, ExecutePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExecutePolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "ExecutePolicyCommand";
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
  private serialize(input: ExecutePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecutePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecutePolicyCommandOutput> {
    return de_ExecutePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
