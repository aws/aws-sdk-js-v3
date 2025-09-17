// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ContinueUpdateRollbackInput, ContinueUpdateRollbackOutput } from "../models/models_0";
import { de_ContinueUpdateRollbackCommand, se_ContinueUpdateRollbackCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Continues rolling back a stack from <code>UPDATE_ROLLBACK_FAILED</code> to
 *         <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can
 *       manually fix the error and continue the rollback. By continuing the rollback, you can return
 *       your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state) and then try
 *       to update the stack again.</p>
 *          <p>A stack enters the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll
 *       back all changes after a failed stack update. For example, this might occur when a stack
 *       attempts to roll back to an old database that was deleted outside of CloudFormation. Because
 *       CloudFormation doesn't know the instance was deleted, it assumes the instance still exists and
 *       attempts to roll back to it, causing the update rollback to fail.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html">Continue rolling back an update</a> in the <i>CloudFormation User Guide</i>. For
 *       information for troubleshooting a failed update rollback, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed">Update rollback failed</a>.</p>
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
 *  <p>A client request token already exists.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ContinueUpdateRollbackCommand extends $Command
  .classBuilder<
    ContinueUpdateRollbackCommandInput,
    ContinueUpdateRollbackCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ContinueUpdateRollback", {})
  .n("CloudFormationClient", "ContinueUpdateRollbackCommand")
  .f(void 0, void 0)
  .ser(se_ContinueUpdateRollbackCommand)
  .de(de_ContinueUpdateRollbackCommand)
  .build() {
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
