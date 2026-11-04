// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWorkflowExecutionInput, WorkflowExecutionDetail } from "../models/models_0";
import { DescribeWorkflowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about the specified workflow execution including its type and some statistics.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
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
export class DescribeWorkflowExecutionCommand extends command<DescribeWorkflowExecutionCommandInput, DescribeWorkflowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWorkflowExecution",
  DescribeWorkflowExecution$
) {
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
