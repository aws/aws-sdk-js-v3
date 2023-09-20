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
import { DescribeAlarmHistoryInput, DescribeAlarmHistoryOutput } from "../models/models_0";
import { de_DescribeAlarmHistoryCommand, se_DescribeAlarmHistoryCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlarmHistoryCommand}.
 */
export interface DescribeAlarmHistoryCommandInput extends DescribeAlarmHistoryInput {}
/**
 * @public
 *
 * The output of {@link DescribeAlarmHistoryCommand}.
 */
export interface DescribeAlarmHistoryCommandOutput extends DescribeAlarmHistoryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type.
 * 			If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p>
 *          <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p>
 *          <p>To use this operation and return information about a composite alarm, you must be signed on with
 * 			the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information
 * 			about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmHistoryCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmHistoryCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeAlarmHistoryInput
 *   AlarmName: "STRING_VALUE",
 *   AlarmTypes: [ // AlarmTypes
 *     "CompositeAlarm" || "MetricAlarm",
 *   ],
 *   HistoryItemType: "ConfigurationUpdate" || "StateUpdate" || "Action",
 *   StartDate: new Date("TIMESTAMP"),
 *   EndDate: new Date("TIMESTAMP"),
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ScanBy: "TimestampDescending" || "TimestampAscending",
 * };
 * const command = new DescribeAlarmHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlarmHistoryOutput
 * //   AlarmHistoryItems: [ // AlarmHistoryItems
 * //     { // AlarmHistoryItem
 * //       AlarmName: "STRING_VALUE",
 * //       AlarmType: "CompositeAlarm" || "MetricAlarm",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       HistoryItemType: "ConfigurationUpdate" || "StateUpdate" || "Action",
 * //       HistorySummary: "STRING_VALUE",
 * //       HistoryData: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAlarmHistoryCommandInput - {@link DescribeAlarmHistoryCommandInput}
 * @returns {@link DescribeAlarmHistoryCommandOutput}
 * @see {@link DescribeAlarmHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmHistoryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class DescribeAlarmHistoryCommand extends $Command<
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
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
  constructor(readonly input: DescribeAlarmHistoryCommandInput) {
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
  ): Handler<DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAlarmHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAlarmHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GraniteServiceVersion20100801",
        operation: "DescribeAlarmHistory",
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
  private serialize(input: DescribeAlarmHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAlarmHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlarmHistoryCommandOutput> {
    return de_DescribeAlarmHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
