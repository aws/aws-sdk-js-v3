// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { Run, StartWorkflowExecutionInput } from "../models/models_0";
import { StartWorkflowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts an execution of the workflow type in the specified domain using the provided `workflowId` and input data.
 *
 * This action returns the newly started workflow execution.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `tagList.member.0`: The key is `swf:tagList.member.0`.
 *   - `tagList.member.1`: The key is `swf:tagList.member.1`.
 *   - `tagList.member.2`: The key is `swf:tagList.member.2`.
 *   - `tagList.member.3`: The key is `swf:tagList.member.3`.
 *   - `tagList.member.4`: The key is `swf:tagList.member.4`.
 *   - `taskList`: String constraint. The key is `swf:taskList.name`.
 *   - `workflowType.name`: String constraint. The key is `swf:workflowType.name`.
 *   - `workflowType.version`: String constraint. The key is `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, StartWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, StartWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
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
 *
 * The `StartWorkflowExecution` API action was called without the required parameters set.
 *
 * Some workflow execution parameters, such as the decision `taskList`, must be set to start the execution. However, these parameters might have been set as defaults when the workflow type was registered. In this case, you can omit these parameters from the `StartWorkflowExecution` call and Amazon SWF uses the values defined in the workflow type.
 *
 * > **Note:** If these parameters aren't set and no default parameters were defined in the workflow type, this error is displayed.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link TypeDeprecatedFault} (client fault)
 *
 * Returned when the specified activity or workflow type was already deprecated.
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *
 * Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.
 *
 * @throws {@link WorkflowExecutionAlreadyStartedFault} (client fault)
 *
 * Returned by StartWorkflowExecution when an open execution with the same workflowId is already running in the specified domain.
 *
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class StartWorkflowExecutionCommand extends command<StartWorkflowExecutionCommandInput, StartWorkflowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartWorkflowExecution",
  StartWorkflowExecution$
) {
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
