// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetAliasInput } from "../models/models_0";
import { SetAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetAliasCommand}.
 */
export interface SetAliasCommandInput extends SetAliasInput {}
/**
 * @public
 *
 * The output of {@link SetAliasCommand}.
 */
export interface SetAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Assigns an alias to an existing stack. An alias is an alternative name for a stack that
 *       can be used in place of the stack name in any CloudFormation API call that accepts the
 *       <code>StackName</code> parameter. This enables you to effectively rename a stack without
 *       recreating it.</p>
 *          <p>After setting an alias, both the original stack name and the alias resolve to the same
 *       stack. Setting an alias does not change the stack's ARN, physical resource IDs, or any
 *       deployed resources.</p>
 *          <note>
 *             <p>Each stack can have at most one alias. To change a stack's alias, first remove the
 *         existing alias using <a>RemoveAlias</a>, then set a new one.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetAliasCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetAliasCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // SetAliasInput
 *   StackName: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new SetAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetAliasCommandInput - {@link SetAliasCommandInput}
 * @returns {@link SetAliasCommandOutput}
 * @see {@link SetAliasCommandInput} for command's `input` shape.
 * @see {@link SetAliasCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource with the name requested already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the
 *    <i>CloudFormation User Guide</i>.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @example Example – Set an alias for a stack
 * ```javascript
 * // The following example assigns the alias MyAlias to the stack MyStack:
 * const input = {
 *   AliasName: "MyAlias",
 *   StackName: "MyStack"
 * };
 * const command = new SetAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetAliasCommand extends command<SetAliasCommandInput, SetAliasCommandOutput>(
  _ep0,
  _mw0,
  "SetAlias",
  SetAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetAliasInput;
      output: {};
    };
    sdk: {
      input: SetAliasCommandInput;
      output: SetAliasCommandOutput;
    };
  };
}
