// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListSavingsPlansPurchaseRecommendationGenerationRequest,
  ListSavingsPlansPurchaseRecommendationGenerationResponse,
} from "../models/models_0";
import {
  de_ListSavingsPlansPurchaseRecommendationGenerationCommand,
  se_ListSavingsPlansPurchaseRecommendationGenerationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSavingsPlansPurchaseRecommendationGenerationCommand}.
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationCommandInput
  extends ListSavingsPlansPurchaseRecommendationGenerationRequest {}
/**
 * @public
 *
 * The output of {@link ListSavingsPlansPurchaseRecommendationGenerationCommand}.
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationCommandOutput
  extends ListSavingsPlansPurchaseRecommendationGenerationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of your historical recommendation generations within the past 30
 *       days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListSavingsPlansPurchaseRecommendationGenerationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListSavingsPlansPurchaseRecommendationGenerationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // ListSavingsPlansPurchaseRecommendationGenerationRequest
 *   GenerationStatus: "SUCCEEDED" || "PROCESSING" || "FAILED",
 *   RecommendationIds: [ // RecommendationIdList
 *     "STRING_VALUE",
 *   ],
 *   PageSize: Number("int"),
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new ListSavingsPlansPurchaseRecommendationGenerationCommand(input);
 * const response = await client.send(command);
 * // { // ListSavingsPlansPurchaseRecommendationGenerationResponse
 * //   GenerationSummaryList: [ // GenerationSummaryList
 * //     { // GenerationSummary
 * //       RecommendationId: "STRING_VALUE",
 * //       GenerationStatus: "SUCCEEDED" || "PROCESSING" || "FAILED",
 * //       GenerationStartedTime: "STRING_VALUE",
 * //       GenerationCompletionTime: "STRING_VALUE",
 * //       EstimatedCompletionTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSavingsPlansPurchaseRecommendationGenerationCommandInput - {@link ListSavingsPlansPurchaseRecommendationGenerationCommandInput}
 * @returns {@link ListSavingsPlansPurchaseRecommendationGenerationCommandOutput}
 * @see {@link ListSavingsPlansPurchaseRecommendationGenerationCommandInput} for command's `input` shape.
 * @see {@link ListSavingsPlansPurchaseRecommendationGenerationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 * @public
 */
export class ListSavingsPlansPurchaseRecommendationGenerationCommand extends $Command
  .classBuilder<
    ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
    ListSavingsPlansPurchaseRecommendationGenerationCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSInsightsIndexService", "ListSavingsPlansPurchaseRecommendationGeneration", {})
  .n("CostExplorerClient", "ListSavingsPlansPurchaseRecommendationGenerationCommand")
  .f(void 0, void 0)
  .ser(se_ListSavingsPlansPurchaseRecommendationGenerationCommand)
  .de(de_ListSavingsPlansPurchaseRecommendationGenerationCommand)
  .build() {}
