// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CountPendingDecisionTasksInput, PendingTaskCount } from "../models/models_0";
import { CountPendingDecisionTasks$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the estimated number of decision tasks in the specified task list. The count
 *       returned is an approximation and isn't guaranteed to be exact. If you specify a task list that
 *       no decision task was ever scheduled in then <code>0</code> is returned.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the <code>taskList.name</code> parameter by using a
 *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
 *           action to access only certain task lists.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
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
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 *
 * @public
 */
export class CountPendingDecisionTasksCommand extends $Command
  .classBuilder<
    CountPendingDecisionTasksCommandInput,
    CountPendingDecisionTasksCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "CountPendingDecisionTasks", {})
  .n("SWFClient", "CountPendingDecisionTasksCommand")
  .sc(CountPendingDecisionTasks$)
  .build() {
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
