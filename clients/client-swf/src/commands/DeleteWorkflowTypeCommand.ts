// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWorkflowTypeInput } from "../models/models_0";
import { de_DeleteWorkflowTypeCommand, se_DeleteWorkflowTypeCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowTypeCommand}.
 */
export interface DeleteWorkflowTypeCommandInput extends DeleteWorkflowTypeInput {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowTypeCommand}.
 */
export interface DeleteWorkflowTypeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified <i>workflow type</i>.</p>
 *          <p>Note: Prior to deletion, workflow types must first be <b>deprecated</b>.</p>
 *          <p>
 *          After a workflow type has been deleted, you cannot create new executions of that type. Executions that
 *       started before the type was deleted will continue to run.
 *      </p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *             only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *             action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *             the appropriate keys.</p>
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
 *         parameter values fall outside the specified constraints, the action fails. The associated
 *         event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *         For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, DeleteWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DeleteWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SWFClient(config);
 * const input = { // DeleteWorkflowTypeInput
 *   domain: "STRING_VALUE", // required
 *   workflowType: { // WorkflowType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DeleteWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkflowTypeCommandInput - {@link DeleteWorkflowTypeCommandInput}
 * @returns {@link DeleteWorkflowTypeCommandOutput}
 * @see {@link DeleteWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link TypeNotDeprecatedFault} (client fault)
 *  <p>Returned when the resource type has not been deprecated.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 * @public
 */
export class DeleteWorkflowTypeCommand extends $Command
  .classBuilder<
    DeleteWorkflowTypeCommandInput,
    DeleteWorkflowTypeCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleWorkflowService", "DeleteWorkflowType", {})
  .n("SWFClient", "DeleteWorkflowTypeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkflowTypeCommand)
  .de(de_DeleteWorkflowTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkflowTypeInput;
      output: {};
    };
    sdk: {
      input: DeleteWorkflowTypeCommandInput;
      output: DeleteWorkflowTypeCommandOutput;
    };
  };
}
