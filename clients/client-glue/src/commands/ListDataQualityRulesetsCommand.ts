// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListDataQualityRulesetsRequest, ListDataQualityRulesetsResponse } from "../models/models_2";
import { de_ListDataQualityRulesetsCommand, se_ListDataQualityRulesetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataQualityRulesetsCommand}.
 */
export interface ListDataQualityRulesetsCommandInput extends ListDataQualityRulesetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityRulesetsCommand}.
 */
export interface ListDataQualityRulesetsCommandOutput extends ListDataQualityRulesetsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of rulesets for the specified list of Glue tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityRulesetsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityRulesetsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityRulesetsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // DataQualityRulesetFilterCriteria
 *     Name: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *     LastModifiedBefore: new Date("TIMESTAMP"),
 *     LastModifiedAfter: new Date("TIMESTAMP"),
 *     TargetTable: { // DataQualityTargetTable
 *       TableName: "STRING_VALUE", // required
 *       DatabaseName: "STRING_VALUE", // required
 *       CatalogId: "STRING_VALUE",
 *     },
 *   },
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListDataQualityRulesetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityRulesetsResponse
 * //   Rulesets: [ // DataQualityRulesetList
 * //     { // DataQualityRulesetListDetails
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       TargetTable: { // DataQualityTargetTable
 * //         TableName: "STRING_VALUE", // required
 * //         DatabaseName: "STRING_VALUE", // required
 * //         CatalogId: "STRING_VALUE",
 * //       },
 * //       RecommendationRunId: "STRING_VALUE",
 * //       RuleCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityRulesetsCommandInput - {@link ListDataQualityRulesetsCommandInput}
 * @returns {@link ListDataQualityRulesetsCommandOutput}
 * @see {@link ListDataQualityRulesetsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityRulesetsCommandOutput} for command's `response` shape.
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
export class ListDataQualityRulesetsCommand extends $Command
  .classBuilder<
    ListDataQualityRulesetsCommandInput,
    ListDataQualityRulesetsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ListDataQualityRulesets", {})
  .n("GlueClient", "ListDataQualityRulesetsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataQualityRulesetsCommand)
  .de(de_ListDataQualityRulesetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityRulesetsRequest;
      output: ListDataQualityRulesetsResponse;
    };
    sdk: {
      input: ListDataQualityRulesetsCommandInput;
      output: ListDataQualityRulesetsCommandOutput;
    };
  };
}
