// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRulesetRequest, DeleteRulesetResponse } from "../models/models_0";
import { DeleteRuleset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRulesetCommand}.
 */
export interface DeleteRulesetCommandInput extends DeleteRulesetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRulesetCommand}.
 */
export interface DeleteRulesetCommandOutput extends DeleteRulesetResponse, __MetadataBearer {}

/**
 * <p>Deletes a ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DeleteRulesetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteRulesetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRulesetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteRulesetCommandInput - {@link DeleteRulesetCommandInput}
 * @returns {@link DeleteRulesetCommandOutput}
 * @see {@link DeleteRulesetCommandInput} for command's `input` shape.
 * @see {@link DeleteRulesetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class DeleteRulesetCommand extends command<DeleteRulesetCommandInput, DeleteRulesetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRuleset",
  DeleteRuleset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRulesetRequest;
      output: DeleteRulesetResponse;
    };
    sdk: {
      input: DeleteRulesetCommandInput;
      output: DeleteRulesetCommandOutput;
    };
  };
}
