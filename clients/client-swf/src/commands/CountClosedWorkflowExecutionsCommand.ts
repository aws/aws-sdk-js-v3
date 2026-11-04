// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CountClosedWorkflowExecutionsInput, WorkflowExecutionCount } from "../models/models_0";
import { CountClosedWorkflowExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CountClosedWorkflowExecutionsCommand}.
 */
export interface CountClosedWorkflowExecutionsCommandInput extends CountClosedWorkflowExecutionsInput {}
/**
 * @public
 *
 * The output of {@link CountClosedWorkflowExecutionsCommand}.
 */
export interface CountClosedWorkflowExecutionsCommandOutput extends WorkflowExecutionCount, __MetadataBearer {}

/**
 * Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `tagFilter.tag`: String constraint. The key is `swf:tagFilter.tag`.
 *   - `typeFilter.name`: String constraint. The key is `swf:typeFilter.name`.
 *   - `typeFilter.version`: String constraint. The key is `swf:typeFilter.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, CountClosedWorkflowExecutionsCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, CountClosedWorkflowExecutionsCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // CountClosedWorkflowExecutionsInput
 *   domain: "STRING_VALUE", // required
 *   startTimeFilter: { // ExecutionTimeFilter
 *     oldestDate: new Date("TIMESTAMP"), // required
 *     latestDate: new Date("TIMESTAMP"),
 *   },
 *   closeTimeFilter: {
 *     oldestDate: new Date("TIMESTAMP"), // required
 *     latestDate: new Date("TIMESTAMP"),
 *   },
 *   executionFilter: { // WorkflowExecutionFilter
 *     workflowId: "STRING_VALUE", // required
 *   },
 *   typeFilter: { // WorkflowTypeFilter
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE",
 *   },
 *   tagFilter: { // TagFilter
 *     tag: "STRING_VALUE", // required
 *   },
 *   closeStatusFilter: { // CloseStatusFilter
 *     status: "COMPLETED" || "FAILED" || "CANCELED" || "TERMINATED" || "CONTINUED_AS_NEW" || "TIMED_OUT", // required
 *   },
 * };
 * const command = new CountClosedWorkflowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // WorkflowExecutionCount
 * //   count: Number("int"), // required
 * //   truncated: true || false,
 * // };
 *
 * ```
 *
 * @param CountClosedWorkflowExecutionsCommandInput - {@link CountClosedWorkflowExecutionsCommandInput}
 * @returns {@link CountClosedWorkflowExecutionsCommandOutput}
 * @see {@link CountClosedWorkflowExecutionsCommandInput} for command's `input` shape.
 * @see {@link CountClosedWorkflowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *
 * Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.
 *
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class CountClosedWorkflowExecutionsCommand extends command<CountClosedWorkflowExecutionsCommandInput, CountClosedWorkflowExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "CountClosedWorkflowExecutions",
  CountClosedWorkflowExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CountClosedWorkflowExecutionsInput;
      output: WorkflowExecutionCount;
    };
    sdk: {
      input: CountClosedWorkflowExecutionsCommandInput;
      output: CountClosedWorkflowExecutionsCommandOutput;
    };
  };
}
