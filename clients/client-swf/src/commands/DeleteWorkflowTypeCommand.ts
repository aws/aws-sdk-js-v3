// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkflowTypeInput } from "../models/models_0";
import { DeleteWorkflowType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified *workflow type*.
 *
 * Note: Prior to deletion, workflow types must first be **deprecated**.
 *
 * After a workflow type has been deleted, you cannot create new executions of that type. Executions that started before the type was deleted will continue to run.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `workflowType.name`: String constraint. The key is `swf:workflowType.name`.
 *   - `workflowType.version`: String constraint. The key is `swf:workflowType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, DeleteWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DeleteWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
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
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link TypeNotDeprecatedFault} (client fault)
 *
 * Returned when the resource type has not been deprecated.
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
export class DeleteWorkflowTypeCommand extends command<DeleteWorkflowTypeCommandInput, DeleteWorkflowTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkflowType",
  DeleteWorkflowType$
) {
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
