// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Run, StartWorkflowExecutionInput } from "../models/models_0";
import { de_StartWorkflowExecutionCommand, se_StartWorkflowExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartWorkflowExecutionCommand}.
 */
export interface StartWorkflowExecutionCommandInput extends StartWorkflowExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartWorkflowExecutionCommand}.
 */
export interface StartWorkflowExecutionCommandOutput extends Run, __MetadataBearer {}

/**
 * <p>Starts an execution of the workflow type in the specified domain using the provided
 *         <code>workflowId</code> and input data.</p>
 *          <p>This action returns the newly started workflow execution.</p>
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
 *                         <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>taskList</code>: String constraint. The key is
 *               <code>swf:taskList.name</code>.</p>
 *                   </li>
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
 * import { SWFClient, StartWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, StartWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SWFClient(config);
 * const input = { // StartWorkflowExecutionInput
 *   domain: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   workflowType: { // WorkflowType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 *   taskList: { // TaskList
 *     name: "STRING_VALUE", // required
 *   },
 *   taskPriority: "STRING_VALUE",
 *   input: "STRING_VALUE",
 *   executionStartToCloseTimeout: "STRING_VALUE",
 *   tagList: [ // TagList
 *     "STRING_VALUE",
 *   ],
 *   taskStartToCloseTimeout: "STRING_VALUE",
 *   childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON",
 *   lambdaRole: "STRING_VALUE",
 * };
 * const command = new StartWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // Run
 * //   runId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartWorkflowExecutionCommandInput - {@link StartWorkflowExecutionCommandInput}
 * @returns {@link StartWorkflowExecutionCommandOutput}
 * @see {@link StartWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link StartWorkflowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link DefaultUndefinedFault} (client fault)
 *  <p>The <code>StartWorkflowExecution</code> API action was called without the required
 *       parameters set.</p>
 *          <p>Some workflow execution parameters, such as the decision <code>taskList</code>, must be
 *       set to start the execution. However, these parameters might have been set as defaults when the
 *       workflow type was registered. In this case, you can omit these parameters from the
 *         <code>StartWorkflowExecution</code> call and Amazon SWF uses the values defined in the workflow
 *       type.</p>
 *          <note>
 *             <p>If these parameters aren't set and no default parameters were defined in the workflow
 *         type, this error is displayed.</p>
 *          </note>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
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
 * @throws {@link WorkflowExecutionAlreadyStartedFault} (client fault)
 *  <p>Returned by <a>StartWorkflowExecution</a> when an open execution with the same workflowId is already running in
 *       the specified domain.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 * @public
 */
export class StartWorkflowExecutionCommand extends $Command
  .classBuilder<
    StartWorkflowExecutionCommandInput,
    StartWorkflowExecutionCommandOutput,
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
  .s("SimpleWorkflowService", "StartWorkflowExecution", {})
  .n("SWFClient", "StartWorkflowExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StartWorkflowExecutionCommand)
  .de(de_StartWorkflowExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartWorkflowExecutionInput;
      output: Run;
    };
    sdk: {
      input: StartWorkflowExecutionCommandInput;
      output: StartWorkflowExecutionCommandOutput;
    };
  };
}
