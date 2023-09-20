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

import {
  DescribeMaintenanceWindowTasksRequest,
  DescribeMaintenanceWindowTasksResult,
  DescribeMaintenanceWindowTasksResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeMaintenanceWindowTasksCommand,
  se_DescribeMaintenanceWindowTasksCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceWindowTasksCommand}.
 */
export interface DescribeMaintenanceWindowTasksCommandInput extends DescribeMaintenanceWindowTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowTasksCommand}.
 */
export interface DescribeMaintenanceWindowTasksCommandOutput
  extends DescribeMaintenanceWindowTasksResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the tasks in a maintenance window.</p>
 *          <note>
 *             <p>For maintenance window tasks without a specified target, you can't supply values for
 *      <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a
 *     placeholder value of <code>1</code>, which may be reported in the response to this command.
 *     These values don't affect the running of your task and can be ignored.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowTasksCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowTasksCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowTasksRequest
 *   WindowId: "STRING_VALUE", // required
 *   Filters: [ // MaintenanceWindowFilterList
 *     { // MaintenanceWindowFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // MaintenanceWindowFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMaintenanceWindowTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowTasksResult
 * //   Tasks: [ // MaintenanceWindowTaskList
 * //     { // MaintenanceWindowTask
 * //       WindowId: "STRING_VALUE",
 * //       WindowTaskId: "STRING_VALUE",
 * //       TaskArn: "STRING_VALUE",
 * //       Type: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA",
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       TaskParameters: { // MaintenanceWindowTaskParameters
 * //         "<keys>": { // MaintenanceWindowTaskParameterValueExpression
 * //           Values: [ // MaintenanceWindowTaskParameterValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       Priority: Number("int"),
 * //       LoggingInfo: { // LoggingInfo
 * //         S3BucketName: "STRING_VALUE", // required
 * //         S3KeyPrefix: "STRING_VALUE",
 * //         S3Region: "STRING_VALUE", // required
 * //       },
 * //       ServiceRoleArn: "STRING_VALUE",
 * //       MaxConcurrency: "STRING_VALUE",
 * //       MaxErrors: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CutoffBehavior: "CONTINUE_TASK" || "CANCEL_TASK",
 * //       AlarmConfiguration: { // AlarmConfiguration
 * //         IgnorePollAlarmFailure: true || false,
 * //         Alarms: [ // AlarmList // required
 * //           { // Alarm
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowTasksCommandInput - {@link DescribeMaintenanceWindowTasksCommandInput}
 * @returns {@link DescribeMaintenanceWindowTasksCommandOutput}
 * @see {@link DescribeMaintenanceWindowTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowTasksCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeMaintenanceWindowTasksCommand extends $Command<
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
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
  constructor(readonly input: DescribeMaintenanceWindowTasksCommandInput) {
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
  ): Handler<DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMaintenanceWindowTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeMaintenanceWindowTasksResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DescribeMaintenanceWindowTasks",
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
  private serialize(
    input: DescribeMaintenanceWindowTasksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMaintenanceWindowTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowTasksCommandOutput> {
    return de_DescribeMaintenanceWindowTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
