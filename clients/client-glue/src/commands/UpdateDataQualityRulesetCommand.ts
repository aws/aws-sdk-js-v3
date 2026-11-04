// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDataQualityRulesetRequest, UpdateDataQualityRulesetResponse } from "../models/models_3";
import { UpdateDataQualityRuleset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDataQualityRulesetCommand}.
 */
export interface UpdateDataQualityRulesetCommandInput extends UpdateDataQualityRulesetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataQualityRulesetCommand}.
 */
export interface UpdateDataQualityRulesetCommandOutput extends UpdateDataQualityRulesetResponse, __MetadataBearer {}

/**
 * Updates the specified data quality ruleset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateDataQualityRulesetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateDataQualityRulesetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateDataQualityRulesetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Ruleset: "STRING_VALUE",
 * };
 * const command = new UpdateDataQualityRulesetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataQualityRulesetResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Ruleset: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDataQualityRulesetCommandInput - {@link UpdateDataQualityRulesetCommandInput}
 * @returns {@link UpdateDataQualityRulesetCommandOutput}
 * @see {@link UpdateDataQualityRulesetCommandInput} for command's `input` shape.
 * @see {@link UpdateDataQualityRulesetCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * The same unique identifier was associated with two different records.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateDataQualityRulesetCommand extends command<UpdateDataQualityRulesetCommandInput, UpdateDataQualityRulesetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataQualityRuleset",
  UpdateDataQualityRuleset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataQualityRulesetRequest;
      output: UpdateDataQualityRulesetResponse;
    };
    sdk: {
      input: UpdateDataQualityRulesetCommandInput;
      output: UpdateDataQualityRulesetCommandOutput;
    };
  };
}
