// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetMaintenanceWindowExecutionTaskRequest,
  GetMaintenanceWindowExecutionTaskResult,
  GetMaintenanceWindowExecutionTaskResultFilterSensitiveLog,
} from "../models/models_1";
import {
  de_GetMaintenanceWindowExecutionTaskCommand,
  se_GetMaintenanceWindowExecutionTaskCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMaintenanceWindowExecutionTaskCommand}.
 */
export interface GetMaintenanceWindowExecutionTaskCommandInput extends GetMaintenanceWindowExecutionTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetMaintenanceWindowExecutionTaskCommand}.
 */
export interface GetMaintenanceWindowExecutionTaskCommandOutput
  extends GetMaintenanceWindowExecutionTaskResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the details about a specific task run as part of a maintenance window
 *    execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionTaskCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowExecutionTaskCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetMaintenanceWindowExecutionTaskRequest
 *   WindowExecutionId: "STRING_VALUE", // required
 *   TaskId: "STRING_VALUE", // required
 * };
 * const command = new GetMaintenanceWindowExecutionTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetMaintenanceWindowExecutionTaskResult
 * //   WindowExecutionId: "STRING_VALUE",
 * //   TaskExecutionId: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   ServiceRole: "STRING_VALUE",
 * //   Type: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA",
 * //   TaskParameters: [ // MaintenanceWindowTaskParametersList
 * //     { // MaintenanceWindowTaskParameters
 * //       "<keys>": { // MaintenanceWindowTaskParameterValueExpression
 * //         Values: [ // MaintenanceWindowTaskParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   Priority: Number("int"),
 * //   MaxConcurrency: "STRING_VALUE",
 * //   MaxErrors: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED" || "TIMED_OUT" || "CANCELLING" || "CANCELLED" || "SKIPPED_OVERLAPPING",
 * //   StatusDetails: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   AlarmConfiguration: { // AlarmConfiguration
 * //     IgnorePollAlarmFailure: true || false,
 * //     Alarms: [ // AlarmList // required
 * //       { // Alarm
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   TriggeredAlarms: [ // AlarmStateInformationList
 * //     { // AlarmStateInformation
 * //       Name: "STRING_VALUE", // required
 * //       State: "UNKNOWN" || "ALARM", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMaintenanceWindowExecutionTaskCommandInput - {@link GetMaintenanceWindowExecutionTaskCommandInput}
 * @returns {@link GetMaintenanceWindowExecutionTaskCommandOutput}
 * @see {@link GetMaintenanceWindowExecutionTaskCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionTaskCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetMaintenanceWindowExecutionTaskCommand extends $Command
  .classBuilder<
    GetMaintenanceWindowExecutionTaskCommandInput,
    GetMaintenanceWindowExecutionTaskCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetMaintenanceWindowExecutionTask", {})
  .n("SSMClient", "GetMaintenanceWindowExecutionTaskCommand")
  .f(void 0, GetMaintenanceWindowExecutionTaskResultFilterSensitiveLog)
  .ser(se_GetMaintenanceWindowExecutionTaskCommand)
  .de(de_GetMaintenanceWindowExecutionTaskCommand)
  .build() {}
