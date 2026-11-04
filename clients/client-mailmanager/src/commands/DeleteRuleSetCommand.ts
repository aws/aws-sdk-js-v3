// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRuleSetRequest, DeleteRuleSetResponse } from "../models/models_0";
import { DeleteRuleSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRuleSetCommand}.
 */
export interface DeleteRuleSetCommandInput extends DeleteRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuleSetCommand}.
 */
export interface DeleteRuleSetCommandOutput extends DeleteRuleSetResponse, __MetadataBearer {}

/**
 * Delete a rule set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteRuleSetCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteRuleSetCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // DeleteRuleSetRequest
 *   RuleSetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRuleSetCommandInput - {@link DeleteRuleSetCommandInput}
 * @returns {@link DeleteRuleSetCommandOutput}
 * @see {@link DeleteRuleSetCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleSetCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request validation has failed. For details, see the accompanying error message.
 *
 * @throws {@link MailManagerServiceException}
 *
 * Base exception class for all service exceptions from MailManager service.
 *
 * @public
 */
export class DeleteRuleSetCommand extends command<DeleteRuleSetCommandInput, DeleteRuleSetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRuleSet",
  DeleteRuleSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRuleSetRequest;
      output: {};
    };
    sdk: {
      input: DeleteRuleSetCommandInput;
      output: DeleteRuleSetCommandOutput;
    };
  };
}
