// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveAliasInput } from "../models/models_0";
import { RemoveAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveAliasCommand}.
 */
export interface RemoveAliasCommandInput extends RemoveAliasInput {}
/**
 * @public
 *
 * The output of {@link RemoveAliasCommand}.
 */
export interface RemoveAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes an alias from a stack. After the alias is removed successfully, it can no longer be used to
 *       reference the stack in API calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RemoveAliasCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RemoveAliasCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // RemoveAliasInput
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new RemoveAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveAliasCommandInput - {@link RemoveAliasCommandInput}
 * @returns {@link RemoveAliasCommandOutput}
 * @see {@link RemoveAliasCommandInput} for command's `input` shape.
 * @see {@link RemoveAliasCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @example Example – Remove an alias from a stack
 * ```javascript
 * // The following example removes the alias MyAlias from your stack:
 * const input = {
 *   AliasName: "MyAlias"
 * };
 * const command = new RemoveAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveAliasCommand extends command<RemoveAliasCommandInput, RemoveAliasCommandOutput>(
  _ep0,
  _mw0,
  "RemoveAlias",
  RemoveAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAliasInput;
      output: {};
    };
    sdk: {
      input: RemoveAliasCommandInput;
      output: RemoveAliasCommandOutput;
    };
  };
}
