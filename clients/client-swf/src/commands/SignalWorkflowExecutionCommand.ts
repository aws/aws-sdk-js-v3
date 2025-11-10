// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SignalWorkflowExecutionInput } from "../models/models_0";
import { SignalWorkflowExecution } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SignalWorkflowExecutionCommand}.
 */
export interface SignalWorkflowExecutionCommandInput extends SignalWorkflowExecutionInput {}
/**
 * @public
 *
 * The output of {@link SignalWorkflowExecutionCommand}.
 */
export interface SignalWorkflowExecutionCommandOutput extends __MetadataBearer {}

/**
 * <p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution
 *       history and creates a decision task for the workflow execution identified by the given domain,
 *       workflowId and runId. The event is recorded with the specified user defined signalName and
 *       input (if provided).</p>
 *          <note>
 *             <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is
 *         recorded in the history of the current open workflow with the matching workflowId in the
 *         domain.</p>
 *          </note>
 *          <note>
 *             <p>If the specified workflow execution isn't open, this method fails with
 *           <code>UnknownResource</code>.</p>
 *          </note>
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
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
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
 * import { SWFClient, SignalWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, SignalWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // SignalWorkflowExecutionInput
 *   domain: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   runId: "STRING_VALUE",
 *   signalName: "STRING_VALUE", // required
 *   input: "STRING_VALUE",
 * };
 * const command = new SignalWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SignalWorkflowExecutionCommandInput - {@link SignalWorkflowExecutionCommandInput}
 * @returns {@link SignalWorkflowExecutionCommandOutput}
 * @see {@link SignalWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link SignalWorkflowExecutionCommandOutput} for command's `response` shape.
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
export class SignalWorkflowExecutionCommand extends $Command
  .classBuilder<
    SignalWorkflowExecutionCommandInput,
    SignalWorkflowExecutionCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "SignalWorkflowExecution", {})
  .n("SWFClient", "SignalWorkflowExecutionCommand")
  .sc(SignalWorkflowExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SignalWorkflowExecutionInput;
      output: {};
    };
    sdk: {
      input: SignalWorkflowExecutionCommandInput;
      output: SignalWorkflowExecutionCommandOutput;
    };
  };
}
