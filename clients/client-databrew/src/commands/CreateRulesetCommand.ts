// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRulesetRequest, CreateRulesetResponse } from "../models/models_0";
import { de_CreateRulesetCommand, se_CreateRulesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRulesetCommand}.
 */
export interface CreateRulesetCommandInput extends CreateRulesetRequest {}
/**
 * @public
 *
 * The output of {@link CreateRulesetCommand}.
 */
export interface CreateRulesetCommandOutput extends CreateRulesetResponse, __MetadataBearer {}

/**
 * <p>Creates a new ruleset that can be used in a profile job to validate
 *             the data quality of a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // CreateRulesetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TargetArn: "STRING_VALUE", // required
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
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRulesetCommand(input);
 * const response = await client.send(command);
 * // { // CreateRulesetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRulesetCommandInput - {@link CreateRulesetCommandInput}
 * @returns {@link CreateRulesetCommandOutput}
 * @see {@link CreateRulesetCommandInput} for command's `input` shape.
 * @see {@link CreateRulesetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
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
export class CreateRulesetCommand extends $Command
  .classBuilder<
    CreateRulesetCommandInput,
    CreateRulesetCommandOutput,
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
  .s("AWSGlueDataBrew", "CreateRuleset", {})
  .n("DataBrewClient", "CreateRulesetCommand")
  .f(void 0, void 0)
  .ser(se_CreateRulesetCommand)
  .de(de_CreateRulesetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRulesetRequest;
      output: CreateRulesetResponse;
    };
    sdk: {
      input: CreateRulesetCommandInput;
      output: CreateRulesetCommandOutput;
    };
  };
}
