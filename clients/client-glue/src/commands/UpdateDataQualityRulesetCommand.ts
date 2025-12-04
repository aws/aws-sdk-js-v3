// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { UpdateDataQualityRulesetRequest, UpdateDataQualityRulesetResponse } from "../models/models_2";
import { UpdateDataQualityRuleset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the specified data quality ruleset.</p>
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
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateDataQualityRulesetCommand extends $Command
  .classBuilder<
    UpdateDataQualityRulesetCommandInput,
    UpdateDataQualityRulesetCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateDataQualityRuleset", {})
  .n("GlueClient", "UpdateDataQualityRulesetCommand")
  .sc(UpdateDataQualityRuleset)
  .build() {
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
