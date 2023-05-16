// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetInstanceHealthQuery } from "../models/models_0";
import { de_SetInstanceHealthCommand, se_SetInstanceHealthCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link SetInstanceHealthCommand}.
 */
export interface SetInstanceHealthCommandInput extends SetInstanceHealthQuery {}
/**
 * @public
 *
 * The output of {@link SetInstanceHealthCommand}.
 */
export interface SetInstanceHealthCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets the health status of the specified instance.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling
 *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetInstanceHealthCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetInstanceHealthCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // SetInstanceHealthQuery
 *   InstanceId: "STRING_VALUE", // required
 *   HealthStatus: "STRING_VALUE", // required
 *   ShouldRespectGracePeriod: true || false,
 * };
 * const command = new SetInstanceHealthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetInstanceHealthCommandInput - {@link SetInstanceHealthCommandInput}
 * @returns {@link SetInstanceHealthCommandOutput}
 * @see {@link SetInstanceHealthCommandInput} for command's `input` shape.
 * @see {@link SetInstanceHealthCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To set the health status of an instance
 * ```javascript
 * // This example sets the health status of the specified instance to Unhealthy.
 * const input = {
 *   "HealthStatus": "Unhealthy",
 *   "InstanceId": "i-93633f9b"
 * };
 * const command = new SetInstanceHealthCommand(input);
 * await client.send(command);
 * // example id: autoscaling-set-instance-health-1
 * ```
 *
 */
export class SetInstanceHealthCommand extends $Command<
  SetInstanceHealthCommandInput,
  SetInstanceHealthCommandOutput,
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
  constructor(readonly input: SetInstanceHealthCommandInput) {
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
  ): Handler<SetInstanceHealthCommandInput, SetInstanceHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetInstanceHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "SetInstanceHealthCommand";
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
  private serialize(input: SetInstanceHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetInstanceHealthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetInstanceHealthCommandOutput> {
    return de_SetInstanceHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
