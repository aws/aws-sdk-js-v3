// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMaintenanceWindowTasksRequest, DescribeMaintenanceWindowTasksResult } from "../models/models_0";
import { DescribeMaintenanceWindowTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeMaintenanceWindowTasksCommandOutput extends DescribeMaintenanceWindowTasksResult, __MetadataBearer {}

/**
 * Lists the tasks in a maintenance window.
 *
 * > **Note:** For maintenance window tasks without a specified target, you can't supply values for `--max-errors` and `--max-concurrency`. Instead, the system inserts a placeholder value of `1`, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowTasksCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowTasksCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
 *
 * Error returned when the ID specified for a resource, such as a maintenance window or patch baseline, doesn't exist.
 *
 * For information about resource quotas in Amazon Web Services Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribeMaintenanceWindowTasksCommand extends command<DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMaintenanceWindowTasks",
  DescribeMaintenanceWindowTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMaintenanceWindowTasksRequest;
      output: DescribeMaintenanceWindowTasksResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowTasksCommandInput;
      output: DescribeMaintenanceWindowTasksCommandOutput;
    };
  };
}
