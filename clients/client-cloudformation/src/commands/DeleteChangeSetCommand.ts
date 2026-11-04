// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteChangeSetInput, DeleteChangeSetOutput } from "../models/models_0";
import { DeleteChangeSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteChangeSetCommand}.
 */
export interface DeleteChangeSetCommandInput extends DeleteChangeSetInput {}
/**
 * @public
 *
 * The output of {@link DeleteChangeSetCommand}.
 */
export interface DeleteChangeSetCommandOutput extends DeleteChangeSetOutput, __MetadataBearer {}

/**
 * Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.
 *
 * If the call successfully completes, CloudFormation successfully deleted the change set.
 *
 * If `IncludeNestedStacks` specifies `True` during the creation of the nested change set, then `DeleteChangeSet` will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of `REVIEW_IN_PROGRESS`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DeleteChangeSetInput
 *   ChangeSetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 * };
 * const command = new DeleteChangeSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChangeSetCommandInput - {@link DeleteChangeSetCommandInput}
 * @returns {@link DeleteChangeSetCommandOutput}
 * @see {@link DeleteChangeSetCommandInput} for command's `input` shape.
 * @see {@link DeleteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidChangeSetStatusException} (client fault)
 *
 * The specified change set can't be used to update the stack. For example, the change set status might be `CREATE_IN_PROGRESS`, or the stack status might be `UPDATE_IN_PROGRESS`.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class DeleteChangeSetCommand extends command<DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteChangeSet",
  DeleteChangeSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChangeSetInput;
      output: {};
    };
    sdk: {
      input: DeleteChangeSetCommandInput;
      output: DeleteChangeSetCommandOutput;
    };
  };
}
