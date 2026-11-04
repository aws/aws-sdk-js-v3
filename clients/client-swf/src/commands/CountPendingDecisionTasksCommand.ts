// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CountPendingDecisionTasksInput, PendingTaskCount } from "../models/models_0";
import { CountPendingDecisionTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CountPendingDecisionTasksCommand}.
 */
export interface CountPendingDecisionTasksCommandInput extends CountPendingDecisionTasksInput {}
/**
 * @public
 *
 * The output of {@link CountPendingDecisionTasksCommand}.
 */
export interface CountPendingDecisionTasksCommandOutput extends PendingTaskCount, __MetadataBearer {}

/**
 * Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then `0` is returned.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the `taskList.name` parameter by using a `Condition` element with the `swf:taskList.name` key to allow the action to access only certain task lists.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, CountPendingDecisionTasksCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, CountPendingDecisionTasksCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // CountPendingDecisionTasksInput
 *   domain: "STRING_VALUE", // required
 *   taskList: { // TaskList
 *     name: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CountPendingDecisionTasksCommand(input);
 * const response = await client.send(command);
 * // { // PendingTaskCount
 * //   count: Number("int"), // required
 * //   truncated: true || false,
 * // };
 *
 * ```
 *
 * @param CountPendingDecisionTasksCommandInput - {@link CountPendingDecisionTasksCommandInput}
 * @returns {@link CountPendingDecisionTasksCommandOutput}
 * @see {@link CountPendingDecisionTasksCommandInput} for command's `input` shape.
 * @see {@link CountPendingDecisionTasksCommandOutput} for command's `response` shape.
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
export class CountPendingDecisionTasksCommand extends command<CountPendingDecisionTasksCommandInput, CountPendingDecisionTasksCommandOutput>(
  _ep0,
  _mw0,
  "CountPendingDecisionTasks",
  CountPendingDecisionTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CountPendingDecisionTasksInput;
      output: PendingTaskCount;
    };
    sdk: {
      input: CountPendingDecisionTasksCommandInput;
      output: CountPendingDecisionTasksCommandOutput;
    };
  };
}
