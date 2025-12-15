// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeprecateWorkflowTypeInput } from "../models/models_0";
import { DeprecateWorkflowType$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprecateWorkflowTypeCommand}.
 */
export interface DeprecateWorkflowTypeCommandInput extends DeprecateWorkflowTypeInput {}
/**
 * @public
 *
 * The output of {@link DeprecateWorkflowTypeCommand}.
 */
export interface DeprecateWorkflowTypeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deprecates the specified <i>workflow type</i>. After a workflow type has
 *       been deprecated, you cannot create new executions of that type. Executions that were started
 *       before the type was deprecated continues to run. A deprecated workflow type may still be used
 *       when calling visibility actions.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not
 *         exactly reflect recent updates and changes.</p>
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
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.name</code>: String constraint. The key is
 *                 <code>swf:workflowType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.version</code>: String constraint. The key is
 *                 <code>swf:workflowType.version</code>.</p>
 *                   </li>
 *                </ul>
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
 * import { SWFClient, DeprecateWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DeprecateWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // DeprecateWorkflowTypeInput
 *   domain: "STRING_VALUE", // required
 *   workflowType: { // WorkflowType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DeprecateWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateWorkflowTypeCommandInput - {@link DeprecateWorkflowTypeCommandInput}
 * @returns {@link DeprecateWorkflowTypeCommandOutput}
 * @see {@link DeprecateWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateWorkflowTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link TypeDeprecatedFault} (client fault)
 *  <p>Returned when the specified activity or workflow type was already deprecated.</p>
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
export class DeprecateWorkflowTypeCommand extends $Command
  .classBuilder<
    DeprecateWorkflowTypeCommandInput,
    DeprecateWorkflowTypeCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "DeprecateWorkflowType", {})
  .n("SWFClient", "DeprecateWorkflowTypeCommand")
  .sc(DeprecateWorkflowType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateWorkflowTypeInput;
      output: {};
    };
    sdk: {
      input: DeprecateWorkflowTypeCommandInput;
      output: DeprecateWorkflowTypeCommandOutput;
    };
  };
}
