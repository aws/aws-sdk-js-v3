// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StartCommitmentPurchaseAnalysisRequest,
  StartCommitmentPurchaseAnalysisResponse,
} from "../models/models_0";
import { StartCommitmentPurchaseAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCommitmentPurchaseAnalysisCommand}.
 */
export interface StartCommitmentPurchaseAnalysisCommandInput extends StartCommitmentPurchaseAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link StartCommitmentPurchaseAnalysisCommand}.
 */
export interface StartCommitmentPurchaseAnalysisCommandOutput extends StartCommitmentPurchaseAnalysisResponse, __MetadataBearer {}

/**
 * <p>Specifies the parameters of a planned commitment purchase and starts the generation of the
 *       analysis. This enables you to estimate the cost, coverage, and utilization impact of your
 *       planned commitment purchases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, StartCommitmentPurchaseAnalysisCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, StartCommitmentPurchaseAnalysisCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // StartCommitmentPurchaseAnalysisRequest
 *   CommitmentPurchaseAnalysisConfiguration: { // CommitmentPurchaseAnalysisConfiguration
 *     SavingsPlansPurchaseAnalysisConfiguration: { // SavingsPlansPurchaseAnalysisConfiguration
 *       AccountScope: "PAYER" || "LINKED",
 *       AccountId: "STRING_VALUE",
 *       AnalysisType: "MAX_SAVINGS" || "CUSTOM_COMMITMENT", // required
 *       SavingsPlansToAdd: [ // SavingsPlansToAdd // required
 *         { // SavingsPlans
 *           PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION",
 *           SavingsPlansType: "COMPUTE_SP" || "EC2_INSTANCE_SP" || "SAGEMAKER_SP" || "DATABASE_SP",
 *           Region: "STRING_VALUE",
 *           InstanceFamily: "STRING_VALUE",
 *           TermInYears: "ONE_YEAR" || "THREE_YEARS",
 *           SavingsPlansCommitment: Number("double"),
 *           OfferingId: "STRING_VALUE",
 *         },
 *       ],
 *       SavingsPlansToExclude: [ // SavingsPlansToExclude
 *         "STRING_VALUE",
 *       ],
 *       LookBackTimePeriod: { // DateInterval
 *         Start: "STRING_VALUE", // required
 *         End: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 * };
 * const command = new StartCommitmentPurchaseAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // StartCommitmentPurchaseAnalysisResponse
 * //   AnalysisId: "STRING_VALUE", // required
 * //   AnalysisStartedTime: "STRING_VALUE", // required
 * //   EstimatedCompletionTime: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartCommitmentPurchaseAnalysisCommandInput - {@link StartCommitmentPurchaseAnalysisCommandInput}
 * @returns {@link StartCommitmentPurchaseAnalysisCommandOutput}
 * @see {@link StartCommitmentPurchaseAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartCommitmentPurchaseAnalysisCommandOutput} for command's `response` shape.
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
export class StartCommitmentPurchaseAnalysisCommand extends $Command
  .classBuilder<
    StartCommitmentPurchaseAnalysisCommandInput,
    StartCommitmentPurchaseAnalysisCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "StartCommitmentPurchaseAnalysis", {})
  .n("CostExplorerClient", "StartCommitmentPurchaseAnalysisCommand")
  .sc(StartCommitmentPurchaseAnalysis$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCommitmentPurchaseAnalysisRequest;
      output: StartCommitmentPurchaseAnalysisResponse;
    };
    sdk: {
      input: StartCommitmentPurchaseAnalysisCommandInput;
      output: StartCommitmentPurchaseAnalysisCommandOutput;
    };
  };
}
