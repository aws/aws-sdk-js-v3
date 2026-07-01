// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetMaintenanceWindowExecutionTaskInvocationRequest,
  GetMaintenanceWindowExecutionTaskInvocationResult,
} from "../models/models_0";
import { GetMaintenanceWindowExecutionTaskInvocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMaintenanceWindowExecutionTaskInvocationCommand}.
 */
export interface GetMaintenanceWindowExecutionTaskInvocationCommandInput extends GetMaintenanceWindowExecutionTaskInvocationRequest {}
/**
 * @public
 *
 * The output of {@link GetMaintenanceWindowExecutionTaskInvocationCommand}.
 */
export interface GetMaintenanceWindowExecutionTaskInvocationCommandOutput extends GetMaintenanceWindowExecutionTaskInvocationResult, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific task running on a specific target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionTaskInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowExecutionTaskInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetMaintenanceWindowExecutionTaskInvocationRequest
 *   WindowExecutionId: "STRING_VALUE", // required
 *   TaskId: "STRING_VALUE", // required
 *   InvocationId: "STRING_VALUE", // required
 * };
 * const command = new GetMaintenanceWindowExecutionTaskInvocationCommand(input);
 * const response = await client.send(command);
 * // { // GetMaintenanceWindowExecutionTaskInvocationResult
 * //   WindowExecutionId: "STRING_VALUE",
 * //   TaskExecutionId: "STRING_VALUE",
 * //   InvocationId: "STRING_VALUE",
 * //   ExecutionId: "STRING_VALUE",
 * //   TaskType: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA",
 * //   Parameters: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED" || "TIMED_OUT" || "CANCELLING" || "CANCELLED" || "SKIPPED_OVERLAPPING",
 * //   StatusDetails: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   OwnerInformation: "STRING_VALUE",
 * //   WindowTargetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMaintenanceWindowExecutionTaskInvocationCommandInput - {@link GetMaintenanceWindowExecutionTaskInvocationCommandInput}
 * @returns {@link GetMaintenanceWindowExecutionTaskInvocationCommandOutput}
 * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommandOutput} for command's `response` shape.
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
export class GetMaintenanceWindowExecutionTaskInvocationCommand extends command<GetMaintenanceWindowExecutionTaskInvocationCommandInput, GetMaintenanceWindowExecutionTaskInvocationCommandOutput>(
  _ep0,
  _mw0,
  "GetMaintenanceWindowExecutionTaskInvocation",
  GetMaintenanceWindowExecutionTaskInvocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMaintenanceWindowExecutionTaskInvocationRequest;
      output: GetMaintenanceWindowExecutionTaskInvocationResult;
    };
    sdk: {
      input: GetMaintenanceWindowExecutionTaskInvocationCommandInput;
      output: GetMaintenanceWindowExecutionTaskInvocationCommandOutput;
    };
  };
}
