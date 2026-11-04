// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartDataQualityRuleRecommendationRunRequest,
  StartDataQualityRuleRecommendationRunResponse,
} from "../models/models_3";
import { StartDataQualityRuleRecommendationRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDataQualityRuleRecommendationRunCommand}.
 */
export interface StartDataQualityRuleRecommendationRunCommandInput extends StartDataQualityRuleRecommendationRunRequest {}
/**
 * @public
 *
 * The output of {@link StartDataQualityRuleRecommendationRunCommand}.
 */
export interface StartDataQualityRuleRecommendationRunCommandOutput extends StartDataQualityRuleRecommendationRunResponse, __MetadataBearer {}

/**
 * Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.
 *
 * Recommendation runs are automatically deleted after 90 days.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartDataQualityRuleRecommendationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartDataQualityRuleRecommendationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartDataQualityRuleRecommendationRunRequest
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
 *   CreatedRulesetName: "STRING_VALUE",
 *   DataQualitySecurityConfiguration: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   AdditionalRunOptions: { // DataQualityRuleRecommendationRunAdditionalRunOptions
 *     CustomLogGroupPrefix: "STRING_VALUE",
 *   },
 *   RecommendationMode: "BASIC" || "ADVANCED",
 * };
 * const command = new StartDataQualityRuleRecommendationRunCommand(input);
 * const response = await client.send(command);
 * // { // StartDataQualityRuleRecommendationRunResponse
 * //   RunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDataQualityRuleRecommendationRunCommandInput - {@link StartDataQualityRuleRecommendationRunCommandInput}
 * @returns {@link StartDataQualityRuleRecommendationRunCommandOutput}
 * @see {@link StartDataQualityRuleRecommendationRunCommandInput} for command's `input` shape.
 * @see {@link StartDataQualityRuleRecommendationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The `CreatePartitions` API was called on a table that has indexes enabled.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class StartDataQualityRuleRecommendationRunCommand extends command<StartDataQualityRuleRecommendationRunCommandInput, StartDataQualityRuleRecommendationRunCommandOutput>(
  _ep0,
  _mw0,
  "StartDataQualityRuleRecommendationRun",
  StartDataQualityRuleRecommendationRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataQualityRuleRecommendationRunRequest;
      output: StartDataQualityRuleRecommendationRunResponse;
    };
    sdk: {
      input: StartDataQualityRuleRecommendationRunCommandInput;
      output: StartDataQualityRuleRecommendationRunCommandOutput;
    };
  };
}
