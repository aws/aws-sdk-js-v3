// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDataQualityRulesetRequest, DeleteDataQualityRulesetResponse } from "../models/models_1";
import { DeleteDataQualityRuleset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDataQualityRulesetCommand}.
 */
export interface DeleteDataQualityRulesetCommandInput extends DeleteDataQualityRulesetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataQualityRulesetCommand}.
 */
export interface DeleteDataQualityRulesetCommandOutput extends DeleteDataQualityRulesetResponse, __MetadataBearer {}

/**
 * <p>Deletes a data quality ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteDataQualityRulesetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteDataQualityRulesetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteDataQualityRulesetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataQualityRulesetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataQualityRulesetCommandInput - {@link DeleteDataQualityRulesetCommandInput}
 * @returns {@link DeleteDataQualityRulesetCommandOutput}
 * @see {@link DeleteDataQualityRulesetCommandInput} for command's `input` shape.
 * @see {@link DeleteDataQualityRulesetCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteDataQualityRulesetCommand extends command<DeleteDataQualityRulesetCommandInput, DeleteDataQualityRulesetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataQualityRuleset",
  DeleteDataQualityRuleset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataQualityRulesetRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataQualityRulesetCommandInput;
      output: DeleteDataQualityRulesetCommandOutput;
    };
  };
}
