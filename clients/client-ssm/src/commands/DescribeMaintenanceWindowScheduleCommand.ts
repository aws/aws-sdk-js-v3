// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMaintenanceWindowScheduleRequest, DescribeMaintenanceWindowScheduleResult } from "../models/models_1";
import {
  de_DescribeMaintenanceWindowScheduleCommand,
  se_DescribeMaintenanceWindowScheduleCommand,
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
 * The input for {@link DescribeMaintenanceWindowScheduleCommand}.
 */
export interface DescribeMaintenanceWindowScheduleCommandInput extends DescribeMaintenanceWindowScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowScheduleCommand}.
 */
export interface DescribeMaintenanceWindowScheduleCommandOutput
  extends DescribeMaintenanceWindowScheduleResult,
    __MetadataBearer {}

/**
 * <p>Retrieves information about upcoming executions of a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowScheduleCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowScheduleCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowScheduleRequest
 *   WindowId: "STRING_VALUE",
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ResourceType: "INSTANCE" || "RESOURCE_GROUP",
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMaintenanceWindowScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowScheduleResult
 * //   ScheduledWindowExecutions: [ // ScheduledWindowExecutionList
 * //     { // ScheduledWindowExecution
 * //       WindowId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ExecutionTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowScheduleCommandInput - {@link DescribeMaintenanceWindowScheduleCommandInput}
 * @returns {@link DescribeMaintenanceWindowScheduleCommandOutput}
 * @see {@link DescribeMaintenanceWindowScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowScheduleCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeMaintenanceWindowScheduleCommand extends $Command
  .classBuilder<
    DescribeMaintenanceWindowScheduleCommandInput,
    DescribeMaintenanceWindowScheduleCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DescribeMaintenanceWindowSchedule", {})
  .n("SSMClient", "DescribeMaintenanceWindowScheduleCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMaintenanceWindowScheduleCommand)
  .de(de_DescribeMaintenanceWindowScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMaintenanceWindowScheduleRequest;
      output: DescribeMaintenanceWindowScheduleResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowScheduleCommandInput;
      output: DescribeMaintenanceWindowScheduleCommandOutput;
    };
  };
}
