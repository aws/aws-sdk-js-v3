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
import { DescribeScheduledActionsType, ScheduledActionsType } from "../models/models_0";
import { de_DescribeScheduledActionsCommand, se_DescribeScheduledActionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandInput extends DescribeScheduledActionsType {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandOutput extends ScheduledActionsType, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the scheduled actions that haven't run or that have not reached
 *             their end time.</p>
 *          <p>To describe the scaling activities for scheduled actions that have already run, call
 *             the <a>DescribeScalingActivities</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScheduledActionsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScheduledActionsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeScheduledActionsType
 *   AutoScalingGroupName: "STRING_VALUE",
 *   ScheduledActionNames: [ // ScheduledActionNames
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // ScheduledActionsType
 * //   ScheduledUpdateGroupActions: [ // ScheduledUpdateGroupActions
 * //     { // ScheduledUpdateGroupAction
 * //       AutoScalingGroupName: "STRING_VALUE",
 * //       ScheduledActionName: "STRING_VALUE",
 * //       ScheduledActionARN: "STRING_VALUE",
 * //       Time: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Recurrence: "STRING_VALUE",
 * //       MinSize: Number("int"),
 * //       MaxSize: Number("int"),
 * //       DesiredCapacity: Number("int"),
 * //       TimeZone: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScheduledActionsCommandInput - {@link DescribeScheduledActionsCommandInput}
 * @returns {@link DescribeScheduledActionsCommandOutput}
 * @see {@link DescribeScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe scheduled actions
 * ```javascript
 * // This example describes the scheduled actions for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ScheduledUpdateGroupActions": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "DesiredCapacity": 4,
 *       "MaxSize": 6,
 *       "MinSize": 2,
 *       "Recurrence": "30 0 1 12 0",
 *       "ScheduledActionARN": "arn:aws:autoscaling:us-west-2:123456789012:scheduledUpdateGroupAction:8e86b655-b2e6-4410-8f29-b4f094d6871c:autoScalingGroupName/my-auto-scaling-group:scheduledActionName/my-scheduled-action",
 *       "ScheduledActionName": "my-scheduled-action",
 *       "StartTime": "2016-12-01T00:30:00Z",
 *       "Time": "2016-12-01T00:30:00Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-scheduled-actions-1
 * ```
 *
 */
export class DescribeScheduledActionsCommand extends $Command<
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
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
  constructor(readonly input: DescribeScheduledActionsCommandInput) {
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
  ): Handler<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScheduledActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeScheduledActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "DescribeScheduledActions",
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
  private serialize(input: DescribeScheduledActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScheduledActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScheduledActionsCommandOutput> {
    return de_DescribeScheduledActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
