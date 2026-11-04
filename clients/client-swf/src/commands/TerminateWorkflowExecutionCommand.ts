// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TerminateWorkflowExecutionInput } from "../models/models_0";
import { TerminateWorkflowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TerminateWorkflowExecutionCommand}.
 */
export interface TerminateWorkflowExecutionCommandInput extends TerminateWorkflowExecutionInput {}
/**
 * @public
 *
 * The output of {@link TerminateWorkflowExecutionCommand}.
 */
export interface TerminateWorkflowExecutionCommandOutput extends __MetadataBearer {}

/**
 * Records a `WorkflowExecutionTerminated` event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.
 *
 * > **Important:** If the identified workflow execution was in progress, it is terminated immediately.
 *
 * > **Note:** If a runId isn't specified, then the `WorkflowExecutionTerminated` event is recorded in the history of the current open workflow with the matching workflowId in the domain.
 *
 * > **Note:** You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't.
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
 * import { SWFClient, TerminateWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, TerminateWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // TerminateWorkflowExecutionInput
 *   domain: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   runId: "STRING_VALUE",
 *   reason: "STRING_VALUE",
 *   details: "STRING_VALUE",
 *   childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON",
 * };
 * const command = new TerminateWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateWorkflowExecutionCommandInput - {@link TerminateWorkflowExecutionCommandInput}
 * @returns {@link TerminateWorkflowExecutionCommandOutput}
 * @see {@link TerminateWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkflowExecutionCommandOutput} for command's `response` shape.
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
export class TerminateWorkflowExecutionCommand extends command<TerminateWorkflowExecutionCommandInput, TerminateWorkflowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "TerminateWorkflowExecution",
  TerminateWorkflowExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateWorkflowExecutionInput;
      output: {};
    };
    sdk: {
      input: TerminateWorkflowExecutionCommandInput;
      output: TerminateWorkflowExecutionCommandOutput;
    };
  };
}
