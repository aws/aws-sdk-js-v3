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

import { DescribeAutomationStepExecutionsRequest, DescribeAutomationStepExecutionsResult } from "../models/models_0";
import {
  de_DescribeAutomationStepExecutionsCommand,
  se_DescribeAutomationStepExecutionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutomationStepExecutionsCommand}.
 */
export interface DescribeAutomationStepExecutionsCommandInput extends DescribeAutomationStepExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAutomationStepExecutionsCommand}.
 */
export interface DescribeAutomationStepExecutionsCommandOutput
  extends DescribeAutomationStepExecutionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Information about all active and terminated step executions in an Automation
 *    workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAutomationStepExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAutomationStepExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeAutomationStepExecutionsRequest
 *   AutomationExecutionId: "STRING_VALUE", // required
 *   Filters: [ // StepExecutionFilterList
 *     { // StepExecutionFilter
 *       Key: "StartTimeBefore" || "StartTimeAfter" || "StepExecutionStatus" || "StepExecutionId" || "StepName" || "Action", // required
 *       Values: [ // StepExecutionFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ReverseOrder: true || false,
 * };
 * const command = new DescribeAutomationStepExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAutomationStepExecutionsResult
 * //   StepExecutions: [ // StepExecutionList
 * //     { // StepExecution
 * //       StepName: "STRING_VALUE",
 * //       Action: "STRING_VALUE",
 * //       TimeoutSeconds: Number("long"),
 * //       OnFailure: "STRING_VALUE",
 * //       MaxAttempts: Number("int"),
 * //       ExecutionStartTime: new Date("TIMESTAMP"),
 * //       ExecutionEndTime: new Date("TIMESTAMP"),
 * //       StepStatus: "Pending" || "InProgress" || "Waiting" || "Success" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "PendingApproval" || "Approved" || "Rejected" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "CompletedWithSuccess" || "CompletedWithFailure",
 * //       ResponseCode: "STRING_VALUE",
 * //       Inputs: { // NormalStringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Outputs: { // AutomationParameterMap
 * //         "<keys>": [ // AutomationParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Response: "STRING_VALUE",
 * //       FailureMessage: "STRING_VALUE",
 * //       FailureDetails: { // FailureDetails
 * //         FailureStage: "STRING_VALUE",
 * //         FailureType: "STRING_VALUE",
 * //         Details: {
 * //           "<keys>": [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       StepExecutionId: "STRING_VALUE",
 * //       OverriddenParameters: {
 * //         "<keys>": [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       IsEnd: true || false,
 * //       NextStep: "STRING_VALUE",
 * //       IsCritical: true || false,
 * //       ValidNextSteps: [ // ValidNextStepList
 * //         "STRING_VALUE",
 * //       ],
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       TargetLocation: { // TargetLocation
 * //         Accounts: [ // Accounts
 * //           "STRING_VALUE",
 * //         ],
 * //         Regions: [ // Regions
 * //           "STRING_VALUE",
 * //         ],
 * //         TargetLocationMaxConcurrency: "STRING_VALUE",
 * //         TargetLocationMaxErrors: "STRING_VALUE",
 * //         ExecutionRoleName: "STRING_VALUE",
 * //         TargetLocationAlarmConfiguration: { // AlarmConfiguration
 * //           IgnorePollAlarmFailure: true || false,
 * //           Alarms: [ // AlarmList // required
 * //             { // Alarm
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       TriggeredAlarms: [ // AlarmStateInformationList
 * //         { // AlarmStateInformation
 * //           Name: "STRING_VALUE", // required
 * //           State: "UNKNOWN" || "ALARM", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAutomationStepExecutionsCommandInput - {@link DescribeAutomationStepExecutionsCommandInput}
 * @returns {@link DescribeAutomationStepExecutionsCommandOutput}
 * @see {@link DescribeAutomationStepExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutomationStepExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AutomationExecutionNotFoundException} (client fault)
 *  <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidFilterValue} (client fault)
 *  <p>The filter value isn't valid. Verify the value and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeAutomationStepExecutionsCommand extends $Command<
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DescribeAutomationStepExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAutomationStepExecutionsCommandInput, DescribeAutomationStepExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutomationStepExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAutomationStepExecutionsCommand";
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
  private serialize(
    input: DescribeAutomationStepExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAutomationStepExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutomationStepExecutionsCommandOutput> {
    return de_DescribeAutomationStepExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
