// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCommitmentPurchaseAnalysisRequest, GetCommitmentPurchaseAnalysisResponse } from "../models/models_0";
import {
  de_GetCommitmentPurchaseAnalysisCommand,
  se_GetCommitmentPurchaseAnalysisCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCommitmentPurchaseAnalysisCommand}.
 */
export interface GetCommitmentPurchaseAnalysisCommandInput extends GetCommitmentPurchaseAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link GetCommitmentPurchaseAnalysisCommand}.
 */
export interface GetCommitmentPurchaseAnalysisCommandOutput
  extends GetCommitmentPurchaseAnalysisResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a commitment purchase analysis result based on the
 *       <code>AnalysisId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCommitmentPurchaseAnalysisCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCommitmentPurchaseAnalysisCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // GetCommitmentPurchaseAnalysisRequest
 *   AnalysisId: "STRING_VALUE", // required
 * };
 * const command = new GetCommitmentPurchaseAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // GetCommitmentPurchaseAnalysisResponse
 * //   EstimatedCompletionTime: "STRING_VALUE", // required
 * //   AnalysisCompletionTime: "STRING_VALUE",
 * //   AnalysisStartedTime: "STRING_VALUE", // required
 * //   AnalysisId: "STRING_VALUE", // required
 * //   AnalysisStatus: "SUCCEEDED" || "PROCESSING" || "FAILED", // required
 * //   ErrorCode: "NO_USAGE_FOUND" || "INTERNAL_FAILURE" || "INVALID_SAVINGS_PLANS_TO_ADD" || "INVALID_SAVINGS_PLANS_TO_EXCLUDE" || "INVALID_ACCOUNT_ID",
 * //   AnalysisDetails: { // AnalysisDetails
 * //     SavingsPlansPurchaseAnalysisDetails: { // SavingsPlansPurchaseAnalysisDetails
 * //       CurrencyCode: "STRING_VALUE",
 * //       LookbackPeriodInHours: "STRING_VALUE",
 * //       CurrentAverageCoverage: "STRING_VALUE",
 * //       CurrentAverageHourlyOnDemandSpend: "STRING_VALUE",
 * //       CurrentMaximumHourlyOnDemandSpend: "STRING_VALUE",
 * //       CurrentMinimumHourlyOnDemandSpend: "STRING_VALUE",
 * //       CurrentOnDemandSpend: "STRING_VALUE",
 * //       ExistingHourlyCommitment: "STRING_VALUE",
 * //       HourlyCommitmentToPurchase: "STRING_VALUE",
 * //       EstimatedAverageCoverage: "STRING_VALUE",
 * //       EstimatedAverageUtilization: "STRING_VALUE",
 * //       EstimatedMonthlySavingsAmount: "STRING_VALUE",
 * //       EstimatedOnDemandCost: "STRING_VALUE",
 * //       EstimatedOnDemandCostWithCurrentCommitment: "STRING_VALUE",
 * //       EstimatedROI: "STRING_VALUE",
 * //       EstimatedSavingsAmount: "STRING_VALUE",
 * //       EstimatedSavingsPercentage: "STRING_VALUE",
 * //       EstimatedCommitmentCost: "STRING_VALUE",
 * //       LatestUsageTimestamp: "STRING_VALUE",
 * //       UpfrontCost: "STRING_VALUE",
 * //       AdditionalMetadata: "STRING_VALUE",
 * //       MetricsOverLookbackPeriod: [ // MetricsOverLookbackPeriod
 * //         { // RecommendationDetailHourlyMetrics
 * //           StartTime: "STRING_VALUE",
 * //           EstimatedOnDemandCost: "STRING_VALUE",
 * //           CurrentCoverage: "STRING_VALUE",
 * //           EstimatedCoverage: "STRING_VALUE",
 * //           EstimatedNewCommitmentUtilization: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   CommitmentPurchaseAnalysisConfiguration: { // CommitmentPurchaseAnalysisConfiguration
 * //     SavingsPlansPurchaseAnalysisConfiguration: { // SavingsPlansPurchaseAnalysisConfiguration
 * //       AccountScope: "PAYER" || "LINKED",
 * //       AccountId: "STRING_VALUE",
 * //       AnalysisType: "MAX_SAVINGS" || "CUSTOM_COMMITMENT", // required
 * //       SavingsPlansToAdd: [ // SavingsPlansToAdd // required
 * //         { // SavingsPlans
 * //           PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION",
 * //           SavingsPlansType: "COMPUTE_SP" || "EC2_INSTANCE_SP" || "SAGEMAKER_SP",
 * //           Region: "STRING_VALUE",
 * //           InstanceFamily: "STRING_VALUE",
 * //           TermInYears: "ONE_YEAR" || "THREE_YEARS",
 * //           SavingsPlansCommitment: Number("double"),
 * //           OfferingId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SavingsPlansToExclude: [ // SavingsPlansToExclude
 * //         "STRING_VALUE",
 * //       ],
 * //       LookBackTimePeriod: { // DateInterval
 * //         Start: "STRING_VALUE", // required
 * //         End: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCommitmentPurchaseAnalysisCommandInput - {@link GetCommitmentPurchaseAnalysisCommandInput}
 * @returns {@link GetCommitmentPurchaseAnalysisCommandOutput}
 * @see {@link GetCommitmentPurchaseAnalysisCommandInput} for command's `input` shape.
 * @see {@link GetCommitmentPurchaseAnalysisCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link AnalysisNotFoundException} (client fault)
 *  <p>The requested analysis can't be found.</p>
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
export class GetCommitmentPurchaseAnalysisCommand extends $Command
  .classBuilder<
    GetCommitmentPurchaseAnalysisCommandInput,
    GetCommitmentPurchaseAnalysisCommandOutput,
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
  .s("AWSInsightsIndexService", "GetCommitmentPurchaseAnalysis", {})
  .n("CostExplorerClient", "GetCommitmentPurchaseAnalysisCommand")
  .f(void 0, void 0)
  .ser(se_GetCommitmentPurchaseAnalysisCommand)
  .de(de_GetCommitmentPurchaseAnalysisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommitmentPurchaseAnalysisRequest;
      output: GetCommitmentPurchaseAnalysisResponse;
    };
    sdk: {
      input: GetCommitmentPurchaseAnalysisCommandInput;
      output: GetCommitmentPurchaseAnalysisCommandOutput;
    };
  };
}
