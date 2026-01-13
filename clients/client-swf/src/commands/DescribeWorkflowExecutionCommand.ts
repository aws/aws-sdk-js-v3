// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWorkflowExecutionInput, WorkflowExecutionDetail } from "../models/models_0";
import { DescribeWorkflowExecution$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkflowExecutionCommand}.
 */
export interface DescribeWorkflowExecutionCommandInput extends DescribeWorkflowExecutionInput {}
/**
 * @public
 *
 * The output of {@link DescribeWorkflowExecutionCommand}.
 */
export interface DescribeWorkflowExecutionCommandOutput extends WorkflowExecutionDetail, __MetadataBearer {}

/**
 * <p>Returns information about the specified workflow execution including its type and some
 *       statistics.</p>
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
 * import { SWFClient, DescribeWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DescribeWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // DescribeWorkflowExecutionInput
 *   domain: "STRING_VALUE", // required
 *   execution: { // WorkflowExecution
 *     workflowId: "STRING_VALUE", // required
 *     runId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DescribeWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // WorkflowExecutionDetail
 * //   executionInfo: { // WorkflowExecutionInfo
 * //     execution: { // WorkflowExecution
 * //       workflowId: "STRING_VALUE", // required
 * //       runId: "STRING_VALUE", // required
 * //     },
 * //     workflowType: { // WorkflowType
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     startTimestamp: new Date("TIMESTAMP"), // required
 * //     closeTimestamp: new Date("TIMESTAMP"),
 * //     executionStatus: "OPEN" || "CLOSED", // required
 * //     closeStatus: "COMPLETED" || "FAILED" || "CANCELED" || "TERMINATED" || "CONTINUED_AS_NEW" || "TIMED_OUT",
 * //     parent: {
 * //       workflowId: "STRING_VALUE", // required
 * //       runId: "STRING_VALUE", // required
 * //     },
 * //     tagList: [ // TagList
 * //       "STRING_VALUE",
 * //     ],
 * //     cancelRequested: true || false,
 * //   },
 * //   executionConfiguration: { // WorkflowExecutionConfiguration
 * //     taskStartToCloseTimeout: "STRING_VALUE", // required
 * //     executionStartToCloseTimeout: "STRING_VALUE", // required
 * //     taskList: { // TaskList
 * //       name: "STRING_VALUE", // required
 * //     },
 * //     taskPriority: "STRING_VALUE",
 * //     childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON", // required
 * //     lambdaRole: "STRING_VALUE",
 * //   },
 * //   openCounts: { // WorkflowExecutionOpenCounts
 * //     openActivityTasks: Number("int"), // required
 * //     openDecisionTasks: Number("int"), // required
 * //     openTimers: Number("int"), // required
 * //     openChildWorkflowExecutions: Number("int"), // required
 * //     openLambdaFunctions: Number("int"),
 * //   },
 * //   latestActivityTaskTimestamp: new Date("TIMESTAMP"),
 * //   latestExecutionContext: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkflowExecutionCommandInput - {@link DescribeWorkflowExecutionCommandInput}
 * @returns {@link DescribeWorkflowExecutionCommandOutput}
 * @see {@link DescribeWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkflowExecutionCommandOutput} for command's `response` shape.
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
export class DescribeWorkflowExecutionCommand extends $Command
  .classBuilder<
    DescribeWorkflowExecutionCommandInput,
    DescribeWorkflowExecutionCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "DescribeWorkflowExecution", {})
  .n("SWFClient", "DescribeWorkflowExecutionCommand")
  .sc(DescribeWorkflowExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkflowExecutionInput;
      output: WorkflowExecutionDetail;
    };
    sdk: {
      input: DescribeWorkflowExecutionCommandInput;
      output: DescribeWorkflowExecutionCommandOutput;
    };
  };
}
