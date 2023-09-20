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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { SetAlarmStateInput } from "../models/models_0";
import { de_SetAlarmStateCommand, se_SetAlarmStateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetAlarmStateCommand}.
 */
export interface SetAlarmStateCommandInput extends SetAlarmStateInput {}
/**
 * @public
 *
 * The output of {@link SetAlarmStateCommand}.
 */
export interface SetAlarmStateCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Temporarily sets the state of an alarm for testing purposes. When the updated
 * 			state differs from the previous value, the action configured for
 * 			the appropriate state is invoked. For example, if your alarm is configured to send an
 * 			Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to
 * 			<code>ALARM</code> sends an SNS message.</p>
 *          <p>Metric alarms
 * 			returns to their actual state quickly, often within seconds. Because the metric alarm state change
 * 			happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p>
 *          <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return
 * 			to its actual state. It
 * 			returns to its actual state only once any of its children alarms change state. It is also
 * 			reevaluated if you update its
 * 			configuration.</p>
 *          <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include
 * 		information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, SetAlarmStateCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, SetAlarmStateCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // SetAlarmStateInput
 *   AlarmName: "STRING_VALUE", // required
 *   StateValue: "OK" || "ALARM" || "INSUFFICIENT_DATA", // required
 *   StateReason: "STRING_VALUE", // required
 *   StateReasonData: "STRING_VALUE",
 * };
 * const command = new SetAlarmStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetAlarmStateCommandInput - {@link SetAlarmStateCommandInput}
 * @returns {@link SetAlarmStateCommandOutput}
 * @see {@link SetAlarmStateCommandInput} for command's `input` shape.
 * @see {@link SetAlarmStateCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidFormatFault} (client fault)
 *  <p>Data was not syntactically valid JSON.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class SetAlarmStateCommand extends $Command<
  SetAlarmStateCommandInput,
  SetAlarmStateCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: SetAlarmStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetAlarmStateCommandInput, SetAlarmStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SetAlarmStateCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "SetAlarmStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GraniteServiceVersion20100801",
        operation: "SetAlarmState",
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
  private serialize(input: SetAlarmStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetAlarmStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetAlarmStateCommandOutput> {
    return de_SetAlarmStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
