// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  ListDataQualityRulesetEvaluationRunsRequest,
  ListDataQualityRulesetEvaluationRunsResponse,
} from "../models/models_2";
import {
  de_ListDataQualityRulesetEvaluationRunsCommand,
  se_ListDataQualityRulesetEvaluationRunsCommand,
} from "../protocols/Aws_json1_1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ListDataQualityRulesetEvaluationRuns", {})
  .n("GlueClient", "ListDataQualityRulesetEvaluationRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataQualityRulesetEvaluationRunsCommand)
  .de(de_ListDataQualityRulesetEvaluationRunsCommand)
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
