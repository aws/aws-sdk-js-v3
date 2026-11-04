// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeprecateWorkflowTypeInput } from "../models/models_0";
import { DeprecateWorkflowType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeprecateWorkflowTypeCommand}.
 */
export interface DeprecateWorkflowTypeCommandInput extends DeprecateWorkflowTypeInput {}
/**
 * @public
 *
 * The output of {@link DeprecateWorkflowTypeCommand}.
 */
export interface DeprecateWorkflowTypeCommandOutput extends __MetadataBearer {}

/**
 * Deprecates the specified *workflow type*. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.
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
 * import { SWFClient, DeprecateWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DeprecateWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // DeprecateWorkflowTypeInput
 *   domain: "STRING_VALUE", // required
 *   workflowType: { // WorkflowType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DeprecateWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateWorkflowTypeCommandInput - {@link DeprecateWorkflowTypeCommandInput}
 * @returns {@link DeprecateWorkflowTypeCommandOutput}
 * @see {@link DeprecateWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateWorkflowTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
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
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class DeprecateWorkflowTypeCommand extends command<DeprecateWorkflowTypeCommandInput, DeprecateWorkflowTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeprecateWorkflowType",
  DeprecateWorkflowType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateWorkflowTypeInput;
      output: {};
    };
    sdk: {
      input: DeprecateWorkflowTypeCommandInput;
      output: DeprecateWorkflowTypeCommandOutput;
    };
  };
}
