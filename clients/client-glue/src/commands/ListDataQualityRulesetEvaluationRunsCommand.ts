// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  ListDataQualityRulesetEvaluationRunsRequest,
  ListDataQualityRulesetEvaluationRunsResponse,
} from "../models/models_2";
import { ListDataQualityRulesetEvaluationRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataQualityRulesetEvaluationRunsCommand}.
 */
export interface ListDataQualityRulesetEvaluationRunsCommandInput extends ListDataQualityRulesetEvaluationRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityRulesetEvaluationRunsCommand}.
 */
export interface ListDataQualityRulesetEvaluationRunsCommandOutput
  extends ListDataQualityRulesetEvaluationRunsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityRulesetEvaluationRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityRulesetEvaluationRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityRulesetEvaluationRunsRequest
 *   Filter: { // DataQualityRulesetEvaluationRunFilter
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
 *       DataQualityGlueTable: { // DataQualityGlueTable
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         PreProcessingQuery: "STRING_VALUE",
 *       },
 *     },
 *     StartedBefore: new Date("TIMESTAMP"),
 *     StartedAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataQualityRulesetEvaluationRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityRulesetEvaluationRunsResponse
 * //   Runs: [ // DataQualityRulesetEvaluationRunList
 * //     { // DataQualityRulesetEvaluationRunDescription
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
 * //         DataQualityGlueTable: { // DataQualityGlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           PreProcessingQuery: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityRulesetEvaluationRunsCommandInput - {@link ListDataQualityRulesetEvaluationRunsCommandInput}
 * @returns {@link ListDataQualityRulesetEvaluationRunsCommandOutput}
 * @see {@link ListDataQualityRulesetEvaluationRunsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityRulesetEvaluationRunsCommandOutput} for command's `response` shape.
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
export class ListDataQualityRulesetEvaluationRunsCommand extends $Command
  .classBuilder<
    ListDataQualityRulesetEvaluationRunsCommandInput,
    ListDataQualityRulesetEvaluationRunsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListDataQualityRulesetEvaluationRuns", {})
  .n("GlueClient", "ListDataQualityRulesetEvaluationRunsCommand")
  .sc(ListDataQualityRulesetEvaluationRuns$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityRulesetEvaluationRunsRequest;
      output: ListDataQualityRulesetEvaluationRunsResponse;
    };
    sdk: {
      input: ListDataQualityRulesetEvaluationRunsCommandInput;
      output: ListDataQualityRulesetEvaluationRunsCommandOutput;
    };
  };
}
