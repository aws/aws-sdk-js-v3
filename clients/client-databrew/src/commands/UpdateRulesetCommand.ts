// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRulesetRequest, UpdateRulesetResponse } from "../models/models_0";
import { de_UpdateRulesetCommand, se_UpdateRulesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRulesetCommand}.
 */
export interface UpdateRulesetCommandInput extends UpdateRulesetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRulesetCommand}.
 */
export interface UpdateRulesetCommandOutput extends UpdateRulesetResponse, __MetadataBearer {}

/**
 * <p>Updates specified ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // UpdateRulesetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Rules: [ // RuleList // required
 *     { // Rule
 *       Name: "STRING_VALUE", // required
 *       Disabled: true || false,
 *       CheckExpression: "STRING_VALUE", // required
 *       SubstitutionMap: { // ValuesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       Threshold: { // Threshold
 *         Value: Number("double"), // required
 *         Type: "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN",
 *         Unit: "COUNT" || "PERCENTAGE",
 *       },
 *       ColumnSelectors: [ // ColumnSelectorList
 *         { // ColumnSelector
 *           Regex: "STRING_VALUE",
 *           Name: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateRulesetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRulesetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateRulesetCommandInput - {@link UpdateRulesetCommandInput}
 * @returns {@link UpdateRulesetCommandOutput}
 * @see {@link UpdateRulesetCommandInput} for command's `input` shape.
 * @see {@link UpdateRulesetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
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
export class UpdateRulesetCommand extends $Command
  .classBuilder<
    UpdateRulesetCommandInput,
    UpdateRulesetCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "UpdateRuleset", {})
  .n("DataBrewClient", "UpdateRulesetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRulesetCommand)
  .de(de_UpdateRulesetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRulesetRequest;
      output: UpdateRulesetResponse;
    };
    sdk: {
      input: UpdateRulesetCommandInput;
      output: UpdateRulesetCommandOutput;
    };
  };
}
