// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  DescribeMaintenanceWindowExecutionTaskInvocationsResult,
  DescribeMaintenanceWindowExecutionTaskInvocationsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  se_DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
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
 * The input for {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommand}.
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput
  extends DescribeMaintenanceWindowExecutionTaskInvocationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommand}.
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput
  extends DescribeMaintenanceWindowExecutionTaskInvocationsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the individual task executions (one per target) for a particular task run as part
 *    of a maintenance window execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowExecutionTaskInvocationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowExecutionTaskInvocationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowExecutionTaskInvocationsRequest
 *   WindowExecutionId: "STRING_VALUE", // required
 *   TaskId: "STRING_VALUE", // required
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
 * const command = new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowExecutionTaskInvocationsResult
 * //   WindowExecutionTaskInvocationIdentities: [ // MaintenanceWindowExecutionTaskInvocationIdentityList
 * //     { // MaintenanceWindowExecutionTaskInvocationIdentity
 * //       WindowExecutionId: "STRING_VALUE",
 * //       TaskExecutionId: "STRING_VALUE",
 * //       InvocationId: "STRING_VALUE",
 * //       ExecutionId: "STRING_VALUE",
 * //       TaskType: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA",
 * //       Parameters: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED" || "TIMED_OUT" || "CANCELLING" || "CANCELLED" || "SKIPPED_OVERLAPPING",
 * //       StatusDetails: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       OwnerInformation: "STRING_VALUE",
 * //       WindowTargetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput - {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput}
 * @returns {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput}
 * @see {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput} for command's `response` shape.
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
export class DescribeMaintenanceWindowExecutionTaskInvocationsCommand extends $Command
  .classBuilder<
    DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
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
  .s("AmazonSSM", "DescribeMaintenanceWindowExecutionTaskInvocations", {})
  .n("SSMClient", "DescribeMaintenanceWindowExecutionTaskInvocationsCommand")
  .f(void 0, DescribeMaintenanceWindowExecutionTaskInvocationsResultFilterSensitiveLog)
  .ser(se_DescribeMaintenanceWindowExecutionTaskInvocationsCommand)
  .de(de_DescribeMaintenanceWindowExecutionTaskInvocationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
      output: DescribeMaintenanceWindowExecutionTaskInvocationsResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput;
      output: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput;
    };
  };
}
