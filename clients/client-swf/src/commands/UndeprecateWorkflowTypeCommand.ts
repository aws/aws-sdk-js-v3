// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UndeprecateWorkflowTypeInput } from "../models/models_0";
import { UndeprecateWorkflowType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UndeprecateWorkflowTypeCommand}.
 */
export interface UndeprecateWorkflowTypeCommandInput extends UndeprecateWorkflowTypeInput {}
/**
 * @public
 *
 * The output of {@link UndeprecateWorkflowTypeCommand}.
 */
export interface UndeprecateWorkflowTypeCommandOutput extends __MetadataBearer {}

/**
 * Undeprecates a previously deprecated *workflow type*. After a workflow type has been undeprecated, you can create new executions of that type.
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
 * import { SWFClient, UndeprecateWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, UndeprecateWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // UndeprecateWorkflowTypeInput
 *   domain: "STRING_VALUE", // required
 *   workflowType: { // WorkflowType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UndeprecateWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UndeprecateWorkflowTypeCommandInput - {@link UndeprecateWorkflowTypeCommandInput}
 * @returns {@link UndeprecateWorkflowTypeCommandOutput}
 * @see {@link UndeprecateWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link UndeprecateWorkflowTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link TypeAlreadyExistsFault} (client fault)
 *
 * Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.
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
export class UndeprecateWorkflowTypeCommand extends command<UndeprecateWorkflowTypeCommandInput, UndeprecateWorkflowTypeCommandOutput>(
  _ep0,
  _mw0,
  "UndeprecateWorkflowType",
  UndeprecateWorkflowType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UndeprecateWorkflowTypeInput;
      output: {};
    };
    sdk: {
      input: UndeprecateWorkflowTypeCommandInput;
      output: UndeprecateWorkflowTypeCommandOutput;
    };
  };
}
