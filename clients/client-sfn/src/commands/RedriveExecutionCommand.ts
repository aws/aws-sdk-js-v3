// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RedriveExecutionInput, RedriveExecutionOutput } from "../models/models_0";
import { RedriveExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RedriveExecutionCommand}.
 */
export interface RedriveExecutionCommandInput extends RedriveExecutionInput {}
/**
 * @public
 *
 * The output of {@link RedriveExecutionCommand}.
 */
export interface RedriveExecutionCommandOutput extends RedriveExecutionOutput, __MetadataBearer {}

/**
 * Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days. These include failed, aborted, or timed out executions. When you [redrive](https://docs.aws.amazon.com/step-functions/latest/dg/redrive-executions.html) an execution, it continues the failed execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven executions use the same state machine definition and execution ARN as the original execution attempt.
 *
 * For workflows that include an [Inline Map](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html) or [Parallel](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html) state, `RedriveExecution` API action reschedules and redrives only the iterations and branches that failed or aborted.
 *
 * To redrive a workflow that includes a Distributed Map state whose Map Run failed, you must redrive the [parent workflow](https://docs.aws.amazon.com/step-functions/latest/dg/use-dist-map-orchestrate-large-scale-parallel-workloads.html#dist-map-orchestrate-parallel-workloads-key-terms). The parent workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt, the redriven parent workflow starts the Map Run.
 *
 * > **Note:**
 * >
 * > This API action is not supported by `EXPRESS` state machines.
 * >
 * > However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redriving its Map Run. When you redrive a Map Run, the Express child workflows are rerun using the StartExecution API action. For more information, see [Redriving Map Runs](https://docs.aws.amazon.com/step-functions/latest/dg/redrive-map-run.html).
 *
 * You can redrive executions if your original execution meets the following conditions:
 *
 * - The execution status isn't `SUCCEEDED`.
 * - Your workflow execution has not exceeded the redrivable period of 14 days. Redrivable period refers to the time during which you can redrive a given execution. This period starts from the day a state machine completes its execution.
 * - The workflow execution has not exceeded the maximum open time of one year. For more information about state machine quotas, see [Quotas related to state machine executions](https://docs.aws.amazon.com/step-functions/latest/dg/limits-overview.html#service-limits-state-machine-executions).
 * - The execution event history count is less than 24,999. Redriven executions append their event history to the existing event history. Make sure your workflow execution contains less than 24,999 events to accommodate the `ExecutionRedriven` history event and at least one other history event.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, RedriveExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, RedriveExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // RedriveExecutionInput
 *   executionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RedriveExecutionCommand(input);
 * const response = await client.send(command);
 * // { // RedriveExecutionOutput
 * //   redriveDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param RedriveExecutionCommandInput - {@link RedriveExecutionCommandInput}
 * @returns {@link RedriveExecutionCommandOutput}
 * @see {@link RedriveExecutionCommandInput} for command's `input` shape.
 * @see {@link RedriveExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *
 * The specified execution does not exist.
 *
 * @throws {@link ExecutionLimitExceeded} (client fault)
 *
 * The maximum number of running executions has been reached. Running executions must end or be stopped before a new execution can be started.
 *
 * @throws {@link ExecutionNotRedrivable} (client fault)
 *
 * The execution Amazon Resource Name (ARN) that you specified for `executionArn` cannot be redriven.
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class RedriveExecutionCommand extends command<RedriveExecutionCommandInput, RedriveExecutionCommandOutput>(
  _ep0,
  _mw0,
  "RedriveExecution",
  RedriveExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RedriveExecutionInput;
      output: RedriveExecutionOutput;
    };
    sdk: {
      input: RedriveExecutionCommandInput;
      output: RedriveExecutionCommandOutput;
    };
  };
}
