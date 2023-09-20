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

import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { DescribeAlarmRequest, DescribeAlarmResponse } from "../models/models_0";
import { de_DescribeAlarmCommand, se_DescribeAlarmCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlarmCommand}.
 */
export interface DescribeAlarmCommandInput extends DescribeAlarmRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAlarmCommand}.
 */
export interface DescribeAlarmCommandOutput extends DescribeAlarmResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about an alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, DescribeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, DescribeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const input = { // DescribeAlarmRequest
 *   alarmModelName: "STRING_VALUE", // required
 *   keyValue: "STRING_VALUE",
 * };
 * const command = new DescribeAlarmCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlarmResponse
 * //   alarm: { // Alarm
 * //     alarmModelName: "STRING_VALUE",
 * //     alarmModelVersion: "STRING_VALUE",
 * //     keyValue: "STRING_VALUE",
 * //     alarmState: { // AlarmState
 * //       stateName: "DISABLED" || "NORMAL" || "ACTIVE" || "ACKNOWLEDGED" || "SNOOZE_DISABLED" || "LATCHED",
 * //       ruleEvaluation: { // RuleEvaluation
 * //         simpleRuleEvaluation: { // SimpleRuleEvaluation
 * //           inputPropertyValue: "STRING_VALUE",
 * //           operator: "GREATER" || "GREATER_OR_EQUAL" || "LESS" || "LESS_OR_EQUAL" || "EQUAL" || "NOT_EQUAL",
 * //           thresholdValue: "STRING_VALUE",
 * //         },
 * //       },
 * //       customerAction: { // CustomerAction
 * //         actionName: "SNOOZE" || "ENABLE" || "DISABLE" || "ACKNOWLEDGE" || "RESET",
 * //         snoozeActionConfiguration: { // SnoozeActionConfiguration
 * //           snoozeDuration: Number("int"),
 * //           note: "STRING_VALUE",
 * //         },
 * //         enableActionConfiguration: { // EnableActionConfiguration
 * //           note: "STRING_VALUE",
 * //         },
 * //         disableActionConfiguration: { // DisableActionConfiguration
 * //           note: "STRING_VALUE",
 * //         },
 * //         acknowledgeActionConfiguration: { // AcknowledgeActionConfiguration
 * //           note: "STRING_VALUE",
 * //         },
 * //         resetActionConfiguration: { // ResetActionConfiguration
 * //           note: "STRING_VALUE",
 * //         },
 * //       },
 * //       systemEvent: { // SystemEvent
 * //         eventType: "STATE_CHANGE",
 * //         stateChangeConfiguration: { // StateChangeConfiguration
 * //           triggerType: "SNOOZE_TIMEOUT",
 * //         },
 * //       },
 * //     },
 * //     severity: Number("int"),
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAlarmCommandInput - {@link DescribeAlarmCommandInput}
 * @returns {@link DescribeAlarmCommandOutput}
 * @see {@link DescribeAlarmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsDataServiceException}
 * <p>Base exception class for all service exceptions from IoTEventsData service.</p>
 *
 */
export class DescribeAlarmCommand extends $Command<
  DescribeAlarmCommandInput,
  DescribeAlarmCommandOutput,
  IoTEventsDataClientResolvedConfig
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
  constructor(readonly input: DescribeAlarmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAlarmCommandInput, DescribeAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeAlarmCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "DescribeAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotColumboDataService",
        operation: "DescribeAlarm",
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
  private serialize(input: DescribeAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAlarmCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlarmCommandOutput> {
    return de_DescribeAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
