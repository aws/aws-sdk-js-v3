// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSavingsPlanPurchaseRecommendationDetailsRequest,
  GetSavingsPlanPurchaseRecommendationDetailsResponse,
} from "../models/models_0";
import {
  de_GetSavingsPlanPurchaseRecommendationDetailsCommand,
  se_GetSavingsPlanPurchaseRecommendationDetailsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSavingsPlanPurchaseRecommendationDetailsCommand}.
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsCommandInput
  extends GetSavingsPlanPurchaseRecommendationDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetSavingsPlanPurchaseRecommendationDetailsCommand}.
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsCommandOutput
  extends GetSavingsPlanPurchaseRecommendationDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the details for a Savings Plan recommendation. These details include the hourly
 *       data-points that construct the cost, coverage, and utilization charts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlanPurchaseRecommendationDetailsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlanPurchaseRecommendationDetailsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetSavingsPlanPurchaseRecommendationDetailsRequest
 *   RecommendationDetailId: "STRING_VALUE", // required
 * };
 * const command = new GetSavingsPlanPurchaseRecommendationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetSavingsPlanPurchaseRecommendationDetailsResponse
 * //   RecommendationDetailId: "STRING_VALUE",
 * //   RecommendationDetailData: { // RecommendationDetailData
 * //     AccountScope: "PAYER" || "LINKED",
 * //     LookbackPeriodInDays: "SEVEN_DAYS" || "THIRTY_DAYS" || "SIXTY_DAYS",
 * //     SavingsPlansType: "COMPUTE_SP" || "EC2_INSTANCE_SP" || "SAGEMAKER_SP",
 * //     TermInYears: "ONE_YEAR" || "THREE_YEARS",
 * //     PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION",
 * //     AccountId: "STRING_VALUE",
 * //     CurrencyCode: "STRING_VALUE",
 * //     InstanceFamily: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     OfferingId: "STRING_VALUE",
 * //     GenerationTimestamp: "STRING_VALUE",
 * //     LatestUsageTimestamp: "STRING_VALUE",
 * //     CurrentAverageHourlyOnDemandSpend: "STRING_VALUE",
 * //     CurrentMaximumHourlyOnDemandSpend: "STRING_VALUE",
 * //     CurrentMinimumHourlyOnDemandSpend: "STRING_VALUE",
 * //     EstimatedAverageUtilization: "STRING_VALUE",
 * //     EstimatedMonthlySavingsAmount: "STRING_VALUE",
 * //     EstimatedOnDemandCost: "STRING_VALUE",
 * //     EstimatedOnDemandCostWithCurrentCommitment: "STRING_VALUE",
 * //     EstimatedROI: "STRING_VALUE",
 * //     EstimatedSPCost: "STRING_VALUE",
 * //     EstimatedSavingsAmount: "STRING_VALUE",
 * //     EstimatedSavingsPercentage: "STRING_VALUE",
 * //     ExistingHourlyCommitment: "STRING_VALUE",
 * //     HourlyCommitmentToPurchase: "STRING_VALUE",
 * //     UpfrontCost: "STRING_VALUE",
 * //     CurrentAverageCoverage: "STRING_VALUE",
 * //     EstimatedAverageCoverage: "STRING_VALUE",
 * //     MetricsOverLookbackPeriod: [ // MetricsOverLookbackPeriod
 * //       { // RecommendationDetailHourlyMetrics
 * //         StartTime: "STRING_VALUE",
 * //         EstimatedOnDemandCost: "STRING_VALUE",
 * //         CurrentCoverage: "STRING_VALUE",
 * //         EstimatedCoverage: "STRING_VALUE",
 * //         EstimatedNewCommitmentUtilization: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSavingsPlanPurchaseRecommendationDetailsCommandInput - {@link GetSavingsPlanPurchaseRecommendationDetailsCommandInput}
 * @returns {@link GetSavingsPlanPurchaseRecommendationDetailsCommandOutput}
 * @see {@link GetSavingsPlanPurchaseRecommendationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlanPurchaseRecommendationDetailsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 *
 * @public
 */
export class GetSavingsPlanPurchaseRecommendationDetailsCommand extends $Command
  .classBuilder<
    GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
    GetSavingsPlanPurchaseRecommendationDetailsCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSInsightsIndexService", "GetSavingsPlanPurchaseRecommendationDetails", {})
  .n("CostExplorerClient", "GetSavingsPlanPurchaseRecommendationDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetSavingsPlanPurchaseRecommendationDetailsCommand)
  .de(de_GetSavingsPlanPurchaseRecommendationDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSavingsPlanPurchaseRecommendationDetailsRequest;
      output: GetSavingsPlanPurchaseRecommendationDetailsResponse;
    };
    sdk: {
      input: GetSavingsPlanPurchaseRecommendationDetailsCommandInput;
      output: GetSavingsPlanPurchaseRecommendationDetailsCommandOutput;
    };
  };
}
