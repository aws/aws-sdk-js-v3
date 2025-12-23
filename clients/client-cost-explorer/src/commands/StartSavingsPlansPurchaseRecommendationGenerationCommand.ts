// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StartSavingsPlansPurchaseRecommendationGenerationRequest,
  StartSavingsPlansPurchaseRecommendationGenerationResponse,
} from "../models/models_0";
import { StartSavingsPlansPurchaseRecommendationGeneration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSavingsPlansPurchaseRecommendationGenerationCommand}.
 */
export interface StartSavingsPlansPurchaseRecommendationGenerationCommandInput extends StartSavingsPlansPurchaseRecommendationGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartSavingsPlansPurchaseRecommendationGenerationCommand}.
 */
export interface StartSavingsPlansPurchaseRecommendationGenerationCommandOutput extends StartSavingsPlansPurchaseRecommendationGenerationResponse, __MetadataBearer {}

/**
 * <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh
 *       set of Savings Plans recommendations that takes your latest usage data and current Savings
 *       Plans inventory into account. You can refresh Savings Plans recommendations up to three times
 *       daily for a consolidated billing family.</p>
 *          <note>
 *             <p>
 *                <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax
 *         because no input parameters are needed to support this operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, StartSavingsPlansPurchaseRecommendationGenerationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, StartSavingsPlansPurchaseRecommendationGenerationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = {};
 * const command = new StartSavingsPlansPurchaseRecommendationGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartSavingsPlansPurchaseRecommendationGenerationResponse
 * //   RecommendationId: "STRING_VALUE",
 * //   GenerationStartedTime: "STRING_VALUE",
 * //   EstimatedCompletionTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSavingsPlansPurchaseRecommendationGenerationCommandInput - {@link StartSavingsPlansPurchaseRecommendationGenerationCommandInput}
 * @returns {@link StartSavingsPlansPurchaseRecommendationGenerationCommandOutput}
 * @see {@link StartSavingsPlansPurchaseRecommendationGenerationCommandInput} for command's `input` shape.
 * @see {@link StartSavingsPlansPurchaseRecommendationGenerationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link GenerationExistsException} (client fault)
 *  <p>A request to generate a recommendation or analysis is already in progress.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> You've reached the limit on the number of resources you can create, or exceeded the
 *             size of an individual resource. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 *
 * @public
 */
export class StartSavingsPlansPurchaseRecommendationGenerationCommand extends $Command
  .classBuilder<
    StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
    StartSavingsPlansPurchaseRecommendationGenerationCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "StartSavingsPlansPurchaseRecommendationGeneration", {})
  .n("CostExplorerClient", "StartSavingsPlansPurchaseRecommendationGenerationCommand")
  .sc(StartSavingsPlansPurchaseRecommendationGeneration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: StartSavingsPlansPurchaseRecommendationGenerationResponse;
    };
    sdk: {
      input: StartSavingsPlansPurchaseRecommendationGenerationCommandInput;
      output: StartSavingsPlansPurchaseRecommendationGenerationCommandOutput;
    };
  };
}
