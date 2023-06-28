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
import { PutScheduledUpdateGroupActionType } from "../models/models_0";
import {
  de_PutScheduledUpdateGroupActionCommand,
  se_PutScheduledUpdateGroupActionCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutScheduledUpdateGroupActionCommand}.
 */
export interface PutScheduledUpdateGroupActionCommandInput extends PutScheduledUpdateGroupActionType {}
/**
 * @public
 *
 * The output of {@link PutScheduledUpdateGroupActionCommand}.
 */
export interface PutScheduledUpdateGroupActionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a
 *             scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p>
 *          <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error
 *             message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutScheduledUpdateGroupActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutScheduledUpdateGroupActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // PutScheduledUpdateGroupActionType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScheduledActionName: "STRING_VALUE", // required
 *   Time: new Date("TIMESTAMP"),
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Recurrence: "STRING_VALUE",
 *   MinSize: Number("int"),
 *   MaxSize: Number("int"),
 *   DesiredCapacity: Number("int"),
 *   TimeZone: "STRING_VALUE",
 * };
 * const command = new PutScheduledUpdateGroupActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutScheduledUpdateGroupActionCommandInput - {@link PutScheduledUpdateGroupActionCommandInput}
 * @returns {@link PutScheduledUpdateGroupActionCommandOutput}
 * @see {@link PutScheduledUpdateGroupActionCommandInput} for command's `input` shape.
 * @see {@link PutScheduledUpdateGroupActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link AlreadyExistsFault} (client fault)
 *  <p>You already have an Auto Scaling group or launch configuration with this name.</p>
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
 * @example To add a scheduled action to an Auto Scaling group
 * ```javascript
 * // This example adds the specified scheduled action to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "DesiredCapacity": 4,
 *   "EndTime": "2014-05-12T08:00:00Z",
 *   "MaxSize": 6,
 *   "MinSize": 2,
 *   "ScheduledActionName": "my-scheduled-action",
 *   "StartTime": "2014-05-12T08:00:00Z"
 * };
 * const command = new PutScheduledUpdateGroupActionCommand(input);
 * await client.send(command);
 * // example id: autoscaling-put-scheduled-update-group-action-1
 * ```
 *
 */
export class PutScheduledUpdateGroupActionCommand extends $Command<
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
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
  constructor(readonly input: PutScheduledUpdateGroupActionCommandInput) {
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
  ): Handler<PutScheduledUpdateGroupActionCommandInput, PutScheduledUpdateGroupActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutScheduledUpdateGroupActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutScheduledUpdateGroupActionCommand";
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
  private serialize(input: PutScheduledUpdateGroupActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutScheduledUpdateGroupActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutScheduledUpdateGroupActionCommandOutput> {
    return de_PutScheduledUpdateGroupActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
