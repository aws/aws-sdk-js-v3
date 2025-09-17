// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterWorkflowTypeInput } from "../models/models_0";
import { de_RegisterWorkflowTypeCommand, se_RegisterWorkflowTypeCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterWorkflowTypeCommand}.
 */
export interface RegisterWorkflowTypeCommandInput extends RegisterWorkflowTypeInput {}
/**
 * @public
 *
 * The output of {@link RegisterWorkflowTypeCommand}.
 */
export interface RegisterWorkflowTypeCommandOutput extends __MetadataBearer {}

/**
 * <p>Registers a new <i>workflow type</i> and its configuration settings in
 *       the specified domain.</p>
 *          <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p>
 *          <important>
 *             <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned.
 *         You cannot change the configuration settings of a workflow type once it is registered and it
 *         must be registered as a new version.</p>
 *          </important>
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
 *                         <code>defaultTaskList.name</code>: String constraint. The key is
 *                 <code>swf:defaultTaskList.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>name</code>: String constraint. The key is <code>swf:name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>version</code>: String constraint. The key is
 *               <code>swf:version</code>.</p>
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
 * import { SWFClient, RegisterWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RegisterWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // RegisterWorkflowTypeInput
 *   domain: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   defaultTaskStartToCloseTimeout: "STRING_VALUE",
 *   defaultExecutionStartToCloseTimeout: "STRING_VALUE",
 *   defaultTaskList: { // TaskList
 *     name: "STRING_VALUE", // required
 *   },
 *   defaultTaskPriority: "STRING_VALUE",
 *   defaultChildPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON",
 *   defaultLambdaRole: "STRING_VALUE",
 * };
 * const command = new RegisterWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterWorkflowTypeCommandInput - {@link RegisterWorkflowTypeCommandInput}
 * @returns {@link RegisterWorkflowTypeCommandOutput}
 * @see {@link RegisterWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link RegisterWorkflowTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link TypeAlreadyExistsFault} (client fault)
 *  <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
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
export class RegisterWorkflowTypeCommand extends $Command
  .classBuilder<
    RegisterWorkflowTypeCommandInput,
    RegisterWorkflowTypeCommandOutput,
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
  .s("SimpleWorkflowService", "RegisterWorkflowType", {})
  .n("SWFClient", "RegisterWorkflowTypeCommand")
  .f(void 0, void 0)
  .ser(se_RegisterWorkflowTypeCommand)
  .de(de_RegisterWorkflowTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterWorkflowTypeInput;
      output: {};
    };
    sdk: {
      input: RegisterWorkflowTypeCommandInput;
      output: RegisterWorkflowTypeCommandOutput;
    };
  };
}
