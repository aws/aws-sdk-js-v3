// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SignalWorkflowExecutionInput } from "../models/models_0";
import { SignalWorkflowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Records a `WorkflowExecutionSignaled` event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).
 *
 * > **Note:** If a runId isn't specified, then the `WorkflowExecutionSignaled` event is recorded in the history of the current open workflow with the matching workflowId in the domain.
 *
 * > **Note:** If the specified workflow execution isn't open, this method fails with `UnknownResource`.
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
export class SignalWorkflowExecutionCommand extends command<SignalWorkflowExecutionCommandInput, SignalWorkflowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "SignalWorkflowExecution",
  SignalWorkflowExecution$
) {
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
