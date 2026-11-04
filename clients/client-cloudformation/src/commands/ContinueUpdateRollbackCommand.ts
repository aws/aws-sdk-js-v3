// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ContinueUpdateRollbackInput, ContinueUpdateRollbackOutput } from "../models/models_0";
import { ContinueUpdateRollback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ContinueUpdateRollbackCommand}.
 */
export interface ContinueUpdateRollbackCommandInput extends ContinueUpdateRollbackInput {}
/**
 * @public
 *
 * The output of {@link ContinueUpdateRollbackCommand}.
 */
export interface ContinueUpdateRollbackCommandOutput extends ContinueUpdateRollbackOutput, __MetadataBearer {}

/**
 * Continues rolling back a stack from `UPDATE_ROLLBACK_FAILED` to `UPDATE_ROLLBACK_COMPLETE` state. Depending on the cause of the failure, you can manually fix the error and continue the rollback. By continuing the rollback, you can return your stack to a working state (the `UPDATE_ROLLBACK_COMPLETE` state) and then try to update the stack again.
 *
 * A stack enters the `UPDATE_ROLLBACK_FAILED` state when CloudFormation can't roll back all changes after a failed stack update. For example, this might occur when a stack attempts to roll back to an old database that was deleted outside of CloudFormation. Because CloudFormation doesn't know the instance was deleted, it assumes the instance still exists and attempts to roll back to it, causing the update rollback to fail.
 *
 * For more information, see [Continue rolling back an update](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html) in the *CloudFormation User Guide*. For information for troubleshooting a failed update rollback, see [Update rollback failed](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed).
 *
 * `ForceRollback` and `ResourcesToSkip` are mutually exclusive. For details, see ContinueUpdateRollbackInput$ForceRollback.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ContinueUpdateRollbackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ContinueUpdateRollbackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ContinueUpdateRollbackInput
 *   StackName: "STRING_VALUE", // required
 *   RoleARN: "STRING_VALUE",
 *   ResourcesToSkip: [ // ResourcesToSkip
 *     "STRING_VALUE",
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   ForceRollback: true || false,
 * };
 * const command = new ContinueUpdateRollbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ContinueUpdateRollbackCommandInput - {@link ContinueUpdateRollbackCommandInput}
 * @returns {@link ContinueUpdateRollbackCommandOutput}
 * @see {@link ContinueUpdateRollbackCommandInput} for command's `input` shape.
 * @see {@link ContinueUpdateRollbackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *
 * A client request token already exists.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class ContinueUpdateRollbackCommand extends command<ContinueUpdateRollbackCommandInput, ContinueUpdateRollbackCommandOutput>(
  _ep0,
  _mw0,
  "ContinueUpdateRollback",
  ContinueUpdateRollback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ContinueUpdateRollbackInput;
      output: {};
    };
    sdk: {
      input: ContinueUpdateRollbackCommandInput;
      output: ContinueUpdateRollbackCommandOutput;
    };
  };
}
