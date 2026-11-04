// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartSavingsPlansPurchaseRecommendationGenerationRequest,
  StartSavingsPlansPurchaseRecommendationGenerationResponse,
} from "../models/models_0";
import { StartSavingsPlansPurchaseRecommendationGeneration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.
 *
 * > **Note:** `StartSavingsPlansPurchaseRecommendationGeneration` has no request syntax because no input parameters are needed to support this operation.
 *
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
 *
 * The requested data is unavailable.
 *
 * @throws {@link GenerationExistsException} (client fault)
 *
 * A request to generate a recommendation or analysis is already in progress.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You made too many calls in a short period of time. Try again later.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've reached the limit on the number of resources you can create, or exceeded the size of an individual resource.
 *
 * @throws {@link CostExplorerServiceException}
 *
 * Base exception class for all service exceptions from CostExplorer service.
 *
 * @public
 */
export class StartSavingsPlansPurchaseRecommendationGenerationCommand extends command<StartSavingsPlansPurchaseRecommendationGenerationCommandInput, StartSavingsPlansPurchaseRecommendationGenerationCommandOutput>(
  _ep0,
  _mw0,
  "StartSavingsPlansPurchaseRecommendationGeneration",
  StartSavingsPlansPurchaseRecommendationGeneration$
) {
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
