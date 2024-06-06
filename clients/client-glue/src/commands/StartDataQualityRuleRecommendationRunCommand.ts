// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StartDataQualityRuleRecommendationRunRequest,
  StartDataQualityRuleRecommendationRunResponse,
} from "../models/models_2";
import {
  de_StartDataQualityRuleRecommendationRunCommand,
  se_StartDataQualityRuleRecommendationRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDataQualityRuleRecommendationRunCommand}.
 */
export interface StartDataQualityRuleRecommendationRunCommandInput
  extends StartDataQualityRuleRecommendationRunRequest {}
/**
 * @public
 *
 * The output of {@link StartDataQualityRuleRecommendationRunCommand}.
 */
export interface StartDataQualityRuleRecommendationRunCommandOutput
  extends StartDataQualityRuleRecommendationRunResponse,
    __MetadataBearer {}

/**
 * <p>Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.</p>
 *          <p>Recommendation runs are automatically deleted after 90 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartDataQualityRuleRecommendationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartDataQualityRuleRecommendationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
 *   },
 *   Role: "STRING_VALUE", // required
 *   NumberOfWorkers: Number("int"),
 *   Timeout: Number("int"),
 *   CreatedRulesetName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
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
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
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
 * @public
 */
export class StartDataQualityRuleRecommendationRunCommand extends $Command
  .classBuilder<
    StartDataQualityRuleRecommendationRunCommandInput,
    StartDataQualityRuleRecommendationRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StartDataQualityRuleRecommendationRun", {})
  .n("GlueClient", "StartDataQualityRuleRecommendationRunCommand")
  .f(void 0, void 0)
  .ser(se_StartDataQualityRuleRecommendationRunCommand)
  .de(de_StartDataQualityRuleRecommendationRunCommand)
  .build() {}
