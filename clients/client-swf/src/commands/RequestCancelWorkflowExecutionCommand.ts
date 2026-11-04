// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RequestCancelWorkflowExecutionInput } from "../models/models_0";
import { RequestCancelWorkflowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RequestCancelWorkflowExecutionCommand}.
 */
export interface RequestCancelWorkflowExecutionCommandInput extends RequestCancelWorkflowExecutionInput {}
/**
 * @public
 *
 * The output of {@link RequestCancelWorkflowExecutionCommand}.
 */
export interface RequestCancelWorkflowExecutionCommandOutput extends __MetadataBearer {}

/**
 * Records a `WorkflowExecutionCancelRequested` event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event.
 *
 * > **Note:** If the runId isn't specified, the `WorkflowExecutionCancelRequested` event is recorded in the history of the current open workflow execution with the specified workflowId in the domain.
 *
 * > **Note:** Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when possible.
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
 * import { SWFClient, RequestCancelWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RequestCancelWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // RequestCancelWorkflowExecutionInput
 *   domain: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   runId: "STRING_VALUE",
 * };
 * const command = new RequestCancelWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RequestCancelWorkflowExecutionCommandInput - {@link RequestCancelWorkflowExecutionCommandInput}
 * @returns {@link RequestCancelWorkflowExecutionCommandOutput}
 * @see {@link RequestCancelWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link RequestCancelWorkflowExecutionCommandOutput} for command's `response` shape.
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
export class RequestCancelWorkflowExecutionCommand extends command<RequestCancelWorkflowExecutionCommandInput, RequestCancelWorkflowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "RequestCancelWorkflowExecution",
  RequestCancelWorkflowExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RequestCancelWorkflowExecutionInput;
      output: {};
    };
    sdk: {
      input: RequestCancelWorkflowExecutionCommandInput;
      output: RequestCancelWorkflowExecutionCommandOutput;
    };
  };
}
