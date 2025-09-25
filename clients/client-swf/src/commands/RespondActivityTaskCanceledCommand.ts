// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RespondActivityTaskCanceledInput } from "../models/models_0";
import { RespondActivityTaskCanceled } from "../schemas/schemas_4_Task";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RespondActivityTaskCanceledCommand}.
 */
export interface RespondActivityTaskCanceledCommandInput extends RespondActivityTaskCanceledInput {}
/**
 * @public
 *
 * The output of {@link RespondActivityTaskCanceledCommand}.
 */
export interface RespondActivityTaskCanceledCommandOutput extends __MetadataBearer {}

/**
 * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified
 *       by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can
 *       be provided using the <code>details</code> argument.</p>
 *          <p>These <code>details</code> (if provided) appear in the
 *         <code>ActivityTaskCanceled</code> event added to the workflow history.</p>
 *          <important>
 *             <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the
 *         activity can be safely undone or abandoned.</p>
 *          </important>
 *          <p>A task is considered open from the time that it is scheduled until it is closed.
 *       Therefore a task is reported as open while a worker is processing it. A task is closed after
 *       it has been specified in a call to <a>RespondActivityTaskCompleted</a>,
 *       RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has
 *         <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed
 *         out</a>.</p>
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
 * import { SWFClient, RespondActivityTaskCanceledCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RespondActivityTaskCanceledCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // RespondActivityTaskCanceledInput
 *   taskToken: "STRING_VALUE", // required
 *   details: "STRING_VALUE",
 * };
 * const command = new RespondActivityTaskCanceledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RespondActivityTaskCanceledCommandInput - {@link RespondActivityTaskCanceledCommandInput}
 * @returns {@link RespondActivityTaskCanceledCommandOutput}
 * @see {@link RespondActivityTaskCanceledCommandInput} for command's `input` shape.
 * @see {@link RespondActivityTaskCanceledCommandOutput} for command's `response` shape.
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
export class RespondActivityTaskCanceledCommand extends $Command
  .classBuilder<
    RespondActivityTaskCanceledCommandInput,
    RespondActivityTaskCanceledCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "RespondActivityTaskCanceled", {})
  .n("SWFClient", "RespondActivityTaskCanceledCommand")
  .sc(RespondActivityTaskCanceled)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RespondActivityTaskCanceledInput;
      output: {};
    };
    sdk: {
      input: RespondActivityTaskCanceledCommandInput;
      output: RespondActivityTaskCanceledCommandOutput;
    };
  };
}
