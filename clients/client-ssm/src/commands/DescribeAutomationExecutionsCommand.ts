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

import { DescribeAutomationExecutionsRequest, DescribeAutomationExecutionsResult } from "../models/models_0";
import {
  de_DescribeAutomationExecutionsCommand,
  se_DescribeAutomationExecutionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutomationExecutionsCommand}.
 */
export interface DescribeAutomationExecutionsCommandInput extends DescribeAutomationExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAutomationExecutionsCommand}.
 */
export interface DescribeAutomationExecutionsCommandOutput
  extends DescribeAutomationExecutionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides details about all active and terminated Automation executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAutomationExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAutomationExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeAutomationExecutionsRequest
 *   Filters: [ // AutomationExecutionFilterList
 *     { // AutomationExecutionFilter
 *       Key: "DocumentNamePrefix" || "ExecutionStatus" || "ExecutionId" || "ParentExecutionId" || "CurrentAction" || "StartTimeBefore" || "StartTimeAfter" || "AutomationType" || "TagKey" || "TargetResourceGroup" || "AutomationSubtype" || "OpsItemId", // required
 *       Values: [ // AutomationExecutionFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAutomationExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAutomationExecutionsResult
 * //   AutomationExecutionMetadataList: [ // AutomationExecutionMetadataList
 * //     { // AutomationExecutionMetadata
 * //       AutomationExecutionId: "STRING_VALUE",
 * //       DocumentName: "STRING_VALUE",
 * //       DocumentVersion: "STRING_VALUE",
 * //       AutomationExecutionStatus: "Pending" || "InProgress" || "Waiting" || "Success" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "PendingApproval" || "Approved" || "Rejected" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "CompletedWithSuccess" || "CompletedWithFailure",
 * //       ExecutionStartTime: new Date("TIMESTAMP"),
 * //       ExecutionEndTime: new Date("TIMESTAMP"),
 * //       ExecutedBy: "STRING_VALUE",
 * //       LogFile: "STRING_VALUE",
 * //       Outputs: { // AutomationParameterMap
 * //         "<keys>": [ // AutomationParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Mode: "Auto" || "Interactive",
 * //       ParentAutomationExecutionId: "STRING_VALUE",
 * //       CurrentStepName: "STRING_VALUE",
 * //       CurrentAction: "STRING_VALUE",
 * //       FailureMessage: "STRING_VALUE",
 * //       TargetParameterName: "STRING_VALUE",
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       TargetMaps: [ // TargetMaps
 * //         { // TargetMap
 * //           "<keys>": [ // TargetMapValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ResolvedTargets: { // ResolvedTargets
 * //         ParameterValues: [ // TargetParameterList
 * //           "STRING_VALUE",
 * //         ],
 * //         Truncated: true || false,
 * //       },
 * //       MaxConcurrency: "STRING_VALUE",
 * //       MaxErrors: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       AutomationType: "CrossAccount" || "Local",
 * //       AlarmConfiguration: { // AlarmConfiguration
 * //         IgnorePollAlarmFailure: true || false,
 * //         Alarms: [ // AlarmList // required
 * //           { // Alarm
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       TriggeredAlarms: [ // AlarmStateInformationList
 * //         { // AlarmStateInformation
 * //           Name: "STRING_VALUE", // required
 * //           State: "UNKNOWN" || "ALARM", // required
 * //         },
 * //       ],
 * //       AutomationSubtype: "ChangeRequest",
 * //       ScheduledTime: new Date("TIMESTAMP"),
 * //       Runbooks: [ // Runbooks
 * //         { // Runbook
 * //           DocumentName: "STRING_VALUE", // required
 * //           DocumentVersion: "STRING_VALUE",
 * //           Parameters: {
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           TargetParameterName: "STRING_VALUE",
 * //           Targets: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           TargetMaps: [
 * //             {
 * //               "<keys>": [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           MaxConcurrency: "STRING_VALUE",
 * //           MaxErrors: "STRING_VALUE",
 * //           TargetLocations: [ // TargetLocations
 * //             { // TargetLocation
 * //               Accounts: [ // Accounts
 * //                 "STRING_VALUE",
 * //               ],
 * //               Regions: [ // Regions
 * //                 "STRING_VALUE",
 * //               ],
 * //               TargetLocationMaxConcurrency: "STRING_VALUE",
 * //               TargetLocationMaxErrors: "STRING_VALUE",
 * //               ExecutionRoleName: "STRING_VALUE",
 * //               TargetLocationAlarmConfiguration: {
 * //                 IgnorePollAlarmFailure: true || false,
 * //                 Alarms: [ // required
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       OpsItemId: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       ChangeRequestName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAutomationExecutionsCommandInput - {@link DescribeAutomationExecutionsCommandInput}
 * @returns {@link DescribeAutomationExecutionsCommandOutput}
 * @see {@link DescribeAutomationExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutomationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
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
export class DescribeAutomationExecutionsCommand extends $Command<
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
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
  constructor(readonly input: DescribeAutomationExecutionsCommandInput) {
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
  ): Handler<DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutomationExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAutomationExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DescribeAutomationExecutions",
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
  private serialize(input: DescribeAutomationExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAutomationExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutomationExecutionsCommandOutput> {
    return de_DescribeAutomationExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
