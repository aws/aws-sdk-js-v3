// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { SearchOutput } from "../models/models_2";
import type { SearchInput } from "../models/models_3";
import { Search$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchCommand}.
 */
export interface SearchCommandInput extends SearchInput {}
/**
 * @public
 *
 * The output of {@link SearchCommand}.
 */
export interface SearchCommandOutput extends SearchOutput, __MetadataBearer {}

/**
 * <p>Searches for assets in Glue Data Catalog using full-text search, filters, sorting, and aggregations. Returns matching assets with relevance-ranked results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, SearchCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, SearchCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // SearchInput
 *   SearchText: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Sort: { // SearchSort
 *     Attribute: "STRING_VALUE", // required
 *     Order: "ASCENDING" || "DESCENDING",
 *   },
 *   FilterClause: { // SearchFilterClause Union: only one key present
 *     AndAllFilters: [ // SearchFilterClauseList
 *       {//  Union: only one key present
 *         AndAllFilters: [
 *           "<SearchFilterClause>",
 *         ],
 *         OrAnyFilters: [
 *           "<SearchFilterClause>",
 *         ],
 *         AttributeFilter: { // SearchAttributeFilter
 *           Attribute: "STRING_VALUE", // required
 *           Operator: "equals" || "greaterThan" || "greaterThanOrEquals" || "lessThan" || "lessThanOrEquals" || "notExists", // required
 *           Value: { // SearchFilterValue Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             LongValue: Number("long"),
 *           },
 *         },
 *         MapFilter: { // SearchMapFilter
 *           Attribute: "STRING_VALUE", // required
 *           Key: "STRING_VALUE", // required
 *           Value: { // SearchMapFilterValue Union: only one key present
 *             StringValue: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *     OrAnyFilters: [
 *       "<SearchFilterClause>",
 *     ],
 *     AttributeFilter: {
 *       Attribute: "STRING_VALUE", // required
 *       Operator: "equals" || "greaterThan" || "greaterThanOrEquals" || "lessThan" || "lessThanOrEquals" || "notExists", // required
 *       Value: {//  Union: only one key present
 *         StringValue: "STRING_VALUE",
 *         LongValue: Number("long"),
 *       },
 *     },
 *     MapFilter: {
 *       Attribute: "STRING_VALUE", // required
 *       Key: "STRING_VALUE", // required
 *       Value: {//  Union: only one key present
 *         StringValue: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * // { // SearchOutput
 * //   Items: [ // SearchResultItemList
 * //     { // SearchResultItem
 * //       Id: "STRING_VALUE",
 * //       AssetName: "STRING_VALUE",
 * //       AssetDescription: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       AssetTypeId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchCommandInput - {@link SearchCommandInput}
 * @returns {@link SearchCommandOutput}
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class SearchCommand extends $Command
  .classBuilder<
    SearchCommandInput,
    SearchCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "Search", {})
  .n("GlueClient", "SearchCommand")
  .sc(Search$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchInput;
      output: SearchOutput;
    };
    sdk: {
      input: SearchCommandInput;
      output: SearchCommandOutput;
    };
  };
}
