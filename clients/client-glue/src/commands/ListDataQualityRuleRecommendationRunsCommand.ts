// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  ListDataQualityRuleRecommendationRunsRequest,
  ListDataQualityRuleRecommendationRunsResponse,
} from "../models/models_2";
import {
  de_ListDataQualityRuleRecommendationRunsCommand,
  se_ListDataQualityRuleRecommendationRunsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataQualityRuleRecommendationRunsCommand}.
 */
export interface ListDataQualityRuleRecommendationRunsCommandInput
  extends ListDataQualityRuleRecommendationRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityRuleRecommendationRunsCommand}.
 */
export interface ListDataQualityRuleRecommendationRunsCommandOutput
  extends ListDataQualityRuleRecommendationRunsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the recommendation runs meeting the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityRuleRecommendationRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityRuleRecommendationRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityRuleRecommendationRunsRequest
 *   Filter: { // DataQualityRuleRecommendationRunFilter
 *     DataSource: { // DataSource
 *       GlueTable: { // GlueTable
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: { // GlueTableAdditionalOptions
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     StartedBefore: new Date("TIMESTAMP"),
 *     StartedAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataQualityRuleRecommendationRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityRuleRecommendationRunsResponse
 * //   Runs: [ // DataQualityRuleRecommendationRunList
 * //     { // DataQualityRuleRecommendationRunDescription
 * //       RunId: "STRING_VALUE",
 * //       Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       DataSource: { // DataSource
 * //         GlueTable: { // GlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: { // GlueTableAdditionalOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityRuleRecommendationRunsCommandInput - {@link ListDataQualityRuleRecommendationRunsCommandInput}
 * @returns {@link ListDataQualityRuleRecommendationRunsCommandOutput}
 * @see {@link ListDataQualityRuleRecommendationRunsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityRuleRecommendationRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class ListDataQualityRuleRecommendationRunsCommand extends $Command
  .classBuilder<
    ListDataQualityRuleRecommendationRunsCommandInput,
    ListDataQualityRuleRecommendationRunsCommandOutput,
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
  .s("AWSGlue", "ListDataQualityRuleRecommendationRuns", {})
  .n("GlueClient", "ListDataQualityRuleRecommendationRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataQualityRuleRecommendationRunsCommand)
  .de(de_ListDataQualityRuleRecommendationRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityRuleRecommendationRunsRequest;
      output: ListDataQualityRuleRecommendationRunsResponse;
    };
    sdk: {
      input: ListDataQualityRuleRecommendationRunsCommandInput;
      output: ListDataQualityRuleRecommendationRunsCommandOutput;
    };
  };
}
