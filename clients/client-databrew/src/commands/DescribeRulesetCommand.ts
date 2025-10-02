// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRulesetRequest, DescribeRulesetResponse } from "../models/models_0";
import { de_DescribeRulesetCommand, se_DescribeRulesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRulesetCommand}.
 */
export interface DescribeRulesetCommandInput extends DescribeRulesetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRulesetCommand}.
 */
export interface DescribeRulesetCommandOutput extends DescribeRulesetResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about the ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DescribeRulesetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeRulesetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRulesetResponse
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   TargetArn: "STRING_VALUE",
 * //   Rules: [ // RuleList
 * //     { // Rule
 * //       Name: "STRING_VALUE", // required
 * //       Disabled: true || false,
 * //       CheckExpression: "STRING_VALUE", // required
 * //       SubstitutionMap: { // ValuesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Threshold: { // Threshold
 * //         Value: Number("double"), // required
 * //         Type: "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN",
 * //         Unit: "COUNT" || "PERCENTAGE",
 * //       },
 * //       ColumnSelectors: [ // ColumnSelectorList
 * //         { // ColumnSelector
 * //           Regex: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   CreatedBy: "STRING_VALUE",
 * //   LastModifiedBy: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   ResourceArn: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRulesetCommandInput - {@link DescribeRulesetCommandInput}
 * @returns {@link DescribeRulesetCommandOutput}
 * @see {@link DescribeRulesetCommandInput} for command's `input` shape.
 * @see {@link DescribeRulesetCommandOutput} for command's `response` shape.
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
export class DescribeRulesetCommand extends $Command
  .classBuilder<
    DescribeRulesetCommandInput,
    DescribeRulesetCommandOutput,
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
  .s("AWSGlueDataBrew", "DescribeRuleset", {})
  .n("DataBrewClient", "DescribeRulesetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRulesetCommand)
  .de(de_DescribeRulesetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRulesetRequest;
      output: DescribeRulesetResponse;
    };
    sdk: {
      input: DescribeRulesetCommandInput;
      output: DescribeRulesetCommandOutput;
    };
  };
}
