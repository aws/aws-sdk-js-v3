// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCommitmentPurchaseAnalysesRequest, ListCommitmentPurchaseAnalysesResponse } from "../models/models_0";
import {
  de_ListCommitmentPurchaseAnalysesCommand,
  se_ListCommitmentPurchaseAnalysesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCommitmentPurchaseAnalysesCommand}.
 */
export interface ListCommitmentPurchaseAnalysesCommandInput extends ListCommitmentPurchaseAnalysesRequest {}
/**
 * @public
 *
 * The output of {@link ListCommitmentPurchaseAnalysesCommand}.
 */
export interface ListCommitmentPurchaseAnalysesCommandOutput
  extends ListCommitmentPurchaseAnalysesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the commitment purchase analyses for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCommitmentPurchaseAnalysesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCommitmentPurchaseAnalysesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CostExplorerClient(config);
 * const input = { // ListCommitmentPurchaseAnalysesRequest
 *   AnalysisStatus: "SUCCEEDED" || "PROCESSING" || "FAILED",
 *   NextPageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   AnalysisIds: [ // AnalysisIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListCommitmentPurchaseAnalysesCommand(input);
 * const response = await client.send(command);
 * // { // ListCommitmentPurchaseAnalysesResponse
 * //   AnalysisSummaryList: [ // AnalysisSummaryList
 * //     { // AnalysisSummary
 * //       EstimatedCompletionTime: "STRING_VALUE",
 * //       AnalysisCompletionTime: "STRING_VALUE",
 * //       AnalysisStartedTime: "STRING_VALUE",
 * //       AnalysisStatus: "SUCCEEDED" || "PROCESSING" || "FAILED",
 * //       ErrorCode: "NO_USAGE_FOUND" || "INTERNAL_FAILURE" || "INVALID_SAVINGS_PLANS_TO_ADD" || "INVALID_SAVINGS_PLANS_TO_EXCLUDE" || "INVALID_ACCOUNT_ID",
 * //       AnalysisId: "STRING_VALUE",
 * //       CommitmentPurchaseAnalysisConfiguration: { // CommitmentPurchaseAnalysisConfiguration
 * //         SavingsPlansPurchaseAnalysisConfiguration: { // SavingsPlansPurchaseAnalysisConfiguration
 * //           AccountScope: "PAYER" || "LINKED",
 * //           AccountId: "STRING_VALUE",
 * //           AnalysisType: "MAX_SAVINGS" || "CUSTOM_COMMITMENT", // required
 * //           SavingsPlansToAdd: [ // SavingsPlansToAdd // required
 * //             { // SavingsPlans
 * //               PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION",
 * //               SavingsPlansType: "COMPUTE_SP" || "EC2_INSTANCE_SP" || "SAGEMAKER_SP",
 * //               Region: "STRING_VALUE",
 * //               InstanceFamily: "STRING_VALUE",
 * //               TermInYears: "ONE_YEAR" || "THREE_YEARS",
 * //               SavingsPlansCommitment: Number("double"),
 * //               OfferingId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           SavingsPlansToExclude: [ // SavingsPlansToExclude
 * //             "STRING_VALUE",
 * //           ],
 * //           LookBackTimePeriod: { // DateInterval
 * //             Start: "STRING_VALUE", // required
 * //             End: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCommitmentPurchaseAnalysesCommandInput - {@link ListCommitmentPurchaseAnalysesCommandInput}
 * @returns {@link ListCommitmentPurchaseAnalysesCommandOutput}
 * @see {@link ListCommitmentPurchaseAnalysesCommandInput} for command's `input` shape.
 * @see {@link ListCommitmentPurchaseAnalysesCommandOutput} for command's `response` shape.
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
export class ListCommitmentPurchaseAnalysesCommand extends $Command
  .classBuilder<
    ListCommitmentPurchaseAnalysesCommandInput,
    ListCommitmentPurchaseAnalysesCommandOutput,
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
  .s("AWSInsightsIndexService", "ListCommitmentPurchaseAnalyses", {})
  .n("CostExplorerClient", "ListCommitmentPurchaseAnalysesCommand")
  .f(void 0, void 0)
  .ser(se_ListCommitmentPurchaseAnalysesCommand)
  .de(de_ListCommitmentPurchaseAnalysesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCommitmentPurchaseAnalysesRequest;
      output: ListCommitmentPurchaseAnalysesResponse;
    };
    sdk: {
      input: ListCommitmentPurchaseAnalysesCommandInput;
      output: ListCommitmentPurchaseAnalysesCommandOutput;
    };
  };
}
