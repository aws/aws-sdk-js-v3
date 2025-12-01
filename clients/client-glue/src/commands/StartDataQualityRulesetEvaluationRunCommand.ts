// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  StartDataQualityRulesetEvaluationRunRequest,
  StartDataQualityRulesetEvaluationRunResponse,
} from "../models/models_2";
import { StartDataQualityRulesetEvaluationRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDataQualityRulesetEvaluationRunCommand}.
 */
export interface StartDataQualityRulesetEvaluationRunCommandInput extends StartDataQualityRulesetEvaluationRunRequest {}
/**
 * @public
 *
 * The output of {@link StartDataQualityRulesetEvaluationRunCommand}.
 */
export interface StartDataQualityRulesetEvaluationRunCommandOutput
  extends StartDataQualityRulesetEvaluationRunResponse,
    __MetadataBearer {}

/**
 * <p>Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartDataQualityRulesetEvaluationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartDataQualityRulesetEvaluationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartDataQualityRulesetEvaluationRunRequest
 *   DataSource: { // DataSource
 *     GlueTable: { // GlueTable
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       CatalogId: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *       AdditionalOptions: { // GlueTableAdditionalOptions
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     DataQualityGlueTable: { // DataQualityGlueTable
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       CatalogId: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *       AdditionalOptions: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       PreProcessingQuery: "STRING_VALUE",
 *     },
 *   },
 *   Role: "STRING_VALUE", // required
 *   NumberOfWorkers: Number("int"),
 *   Timeout: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   AdditionalRunOptions: { // DataQualityEvaluationRunAdditionalRunOptions
 *     CloudWatchMetricsEnabled: true || false,
 *     ResultsS3Prefix: "STRING_VALUE",
 *     CompositeRuleEvaluationMethod: "COLUMN" || "ROW",
 *   },
 *   RulesetNames: [ // RulesetNames // required
 *     "STRING_VALUE",
 *   ],
 *   AdditionalDataSources: { // DataSourceMap
 *     "<keys>": {
 *       GlueTable: {
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       DataQualityGlueTable: {
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
 *   },
 * };
 * const command = new StartDataQualityRulesetEvaluationRunCommand(input);
 * const response = await client.send(command);
 * // { // StartDataQualityRulesetEvaluationRunResponse
 * //   RunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDataQualityRulesetEvaluationRunCommandInput - {@link StartDataQualityRulesetEvaluationRunCommandInput}
 * @returns {@link StartDataQualityRulesetEvaluationRunCommandOutput}
 * @see {@link StartDataQualityRulesetEvaluationRunCommandInput} for command's `input` shape.
 * @see {@link StartDataQualityRulesetEvaluationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
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
export class StartDataQualityRulesetEvaluationRunCommand extends $Command
  .classBuilder<
    StartDataQualityRulesetEvaluationRunCommandInput,
    StartDataQualityRulesetEvaluationRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StartDataQualityRulesetEvaluationRun", {})
  .n("GlueClient", "StartDataQualityRulesetEvaluationRunCommand")
  .sc(StartDataQualityRulesetEvaluationRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataQualityRulesetEvaluationRunRequest;
      output: StartDataQualityRulesetEvaluationRunResponse;
    };
    sdk: {
      input: StartDataQualityRulesetEvaluationRunCommandInput;
      output: StartDataQualityRulesetEvaluationRunCommandOutput;
    };
  };
}
