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
import { ExitStandbyAnswer, ExitStandbyQuery } from "../models/models_0";
import { de_ExitStandbyCommand, se_ExitStandbyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExitStandbyCommand}.
 */
export interface ExitStandbyCommandInput extends ExitStandbyQuery {}
/**
 * @public
 *
 * The output of {@link ExitStandbyCommand}.
 */
export interface ExitStandbyCommandOutput extends ExitStandbyAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Moves the specified instances out of the standby state.</p>
 *          <p>After you put the instances back in service, the desired capacity is
 *             incremented.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing
 *                 instances from your Auto Scaling group</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ExitStandbyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ExitStandbyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // ExitStandbyQuery
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new ExitStandbyCommand(input);
 * const response = await client.send(command);
 * // { // ExitStandbyAnswer
 * //   Activities: [ // Activities
 * //     { // Activity
 * //       ActivityId: "STRING_VALUE", // required
 * //       AutoScalingGroupName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       Cause: "STRING_VALUE", // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StatusCode: "PendingSpotBidPlacement" || "WaitingForSpotInstanceRequestId" || "WaitingForSpotInstanceId" || "WaitingForInstanceId" || "PreInService" || "InProgress" || "WaitingForELBConnectionDraining" || "MidLifecycleAction" || "WaitingForInstanceWarmup" || "Successful" || "Failed" || "Cancelled" || "WaitingForConnectionDraining", // required
 * //       StatusMessage: "STRING_VALUE",
 * //       Progress: Number("int"),
 * //       Details: "STRING_VALUE",
 * //       AutoScalingGroupState: "STRING_VALUE",
 * //       AutoScalingGroupARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ExitStandbyCommandInput - {@link ExitStandbyCommandInput}
 * @returns {@link ExitStandbyCommandOutput}
 * @see {@link ExitStandbyCommandInput} for command's `input` shape.
 * @see {@link ExitStandbyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To move instances out of standby mode
 * ```javascript
 * // This example moves the specified instance out of standby mode.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "InstanceIds": [
 *     "i-93633f9b"
 *   ]
 * };
 * const command = new ExitStandbyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Activities": [
 *     {
 *       "ActivityId": "142928e1-a2dc-453a-9b24-b85ad6735928",
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "Cause": "At 2015-04-12T15:14:29Z instance i-93633f9b was moved out of standby in response to a user request, increasing the capacity from 1 to 2.",
 *       "Description": "Moving EC2 instance out of Standby: i-93633f9b",
 *       "Details": "details",
 *       "Progress": 30,
 *       "StartTime": "2015-04-12T15:14:29.886Z",
 *       "StatusCode": "PreInService"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-exit-standby-1
 * ```
 *
 */
export class ExitStandbyCommand extends $Command<
  ExitStandbyCommandInput,
  ExitStandbyCommandOutput,
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
  constructor(readonly input: ExitStandbyCommandInput) {
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
  ): Handler<ExitStandbyCommandInput, ExitStandbyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExitStandbyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "ExitStandbyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "ExitStandby",
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
  private serialize(input: ExitStandbyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExitStandbyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExitStandbyCommandOutput> {
    return de_ExitStandbyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
