// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  GetDataQualityRuleRecommendationRunRequest,
  GetDataQualityRuleRecommendationRunResponse,
} from "../models/models_1";
import { GetDataQualityRuleRecommendationRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityRuleRecommendationRunCommand}.
 */
export interface GetDataQualityRuleRecommendationRunCommandInput extends GetDataQualityRuleRecommendationRunRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityRuleRecommendationRunCommand}.
 */
export interface GetDataQualityRuleRecommendationRunCommandOutput
  extends GetDataQualityRuleRecommendationRunResponse,
    __MetadataBearer {}

/**
 * <p>Gets the specified recommendation run that was used to generate rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityRuleRecommendationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityRuleRecommendationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityRuleRecommendationRunRequest
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityRuleRecommendationRunCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityRuleRecommendationRunResponse
 * //   RunId: "STRING_VALUE",
 * //   DataSource: { // DataSource
 * //     GlueTable: { // GlueTable
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       CatalogId: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //       AdditionalOptions: { // GlueTableAdditionalOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     DataQualityGlueTable: { // DataQualityGlueTable
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       CatalogId: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //       AdditionalOptions: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       PreProcessingQuery: "STRING_VALUE",
 * //     },
 * //   },
 * //   Role: "STRING_VALUE",
 * //   NumberOfWorkers: Number("int"),
 * //   Timeout: Number("int"),
 * //   Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //   ErrorString: "STRING_VALUE",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   ExecutionTime: Number("int"),
 * //   RecommendedRuleset: "STRING_VALUE",
 * //   CreatedRulesetName: "STRING_VALUE",
 * //   DataQualitySecurityConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataQualityRuleRecommendationRunCommandInput - {@link GetDataQualityRuleRecommendationRunCommandInput}
 * @returns {@link GetDataQualityRuleRecommendationRunCommandOutput}
 * @see {@link GetDataQualityRuleRecommendationRunCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityRuleRecommendationRunCommandOutput} for command's `response` shape.
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
export class GetDataQualityRuleRecommendationRunCommand extends $Command
  .classBuilder<
    GetDataQualityRuleRecommendationRunCommandInput,
    GetDataQualityRuleRecommendationRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetDataQualityRuleRecommendationRun", {})
  .n("GlueClient", "GetDataQualityRuleRecommendationRunCommand")
  .sc(GetDataQualityRuleRecommendationRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataQualityRuleRecommendationRunRequest;
      output: GetDataQualityRuleRecommendationRunResponse;
    };
    sdk: {
      input: GetDataQualityRuleRecommendationRunCommandInput;
      output: GetDataQualityRuleRecommendationRunCommandOutput;
    };
  };
}
