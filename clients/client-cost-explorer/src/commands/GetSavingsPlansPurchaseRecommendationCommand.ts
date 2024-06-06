// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSavingsPlansPurchaseRecommendationRequest,
  GetSavingsPlansPurchaseRecommendationResponse,
} from "../models/models_0";
import {
  de_GetSavingsPlansPurchaseRecommendationCommand,
  se_GetSavingsPlansPurchaseRecommendationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSavingsPlansPurchaseRecommendationCommand}.
 */
export interface GetSavingsPlansPurchaseRecommendationCommandInput
  extends GetSavingsPlansPurchaseRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetSavingsPlansPurchaseRecommendationCommand}.
 */
export interface GetSavingsPlansPurchaseRecommendationCommandOutput
  extends GetSavingsPlansPurchaseRecommendationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the Savings Plans recommendations for your account. First use
 *         <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of
 *       recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve
 *       them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansPurchaseRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansPurchaseRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // GetSavingsPlansPurchaseRecommendationRequest
 *   SavingsPlansType: "COMPUTE_SP" || "EC2_INSTANCE_SP" || "SAGEMAKER_SP", // required
 *   TermInYears: "ONE_YEAR" || "THREE_YEARS", // required
 *   PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION", // required
 *   AccountScope: "PAYER" || "LINKED",
 *   NextPageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   LookbackPeriodInDays: "SEVEN_DAYS" || "THIRTY_DAYS" || "SIXTY_DAYS", // required
 *   Filter: { // Expression
 *     Or: [ // Expressions
 *       {
 *         Or: [
 *           "<Expression>",
 *         ],
 *         And: [
 *           "<Expression>",
 *         ],
 *         Not: "<Expression>",
 *         Dimensions: { // DimensionValues
 *           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *           Values: [ // Values
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [ // MatchOptions
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *         Tags: { // TagValues
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *         CostCategories: { // CostCategoryValues
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *       },
 *     ],
 *     And: [
 *       "<Expression>",
 *     ],
 *     Not: "<Expression>",
 *     Dimensions: {
 *       Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *       MatchOptions: [
 *         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *       ],
 *     },
 *     Tags: {
 *       Key: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *       MatchOptions: [
 *         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *       ],
 *     },
 *     CostCategories: {
 *       Key: "STRING_VALUE",
 *       Values: "<Values>",
 *       MatchOptions: "<MatchOptions>",
 *     },
 *   },
 * };
 * const command = new GetSavingsPlansPurchaseRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetSavingsPlansPurchaseRecommendationResponse
 * //   Metadata: { // SavingsPlansPurchaseRecommendationMetadata
 * //     RecommendationId: "STRING_VALUE",
 * //     GenerationTimestamp: "STRING_VALUE",
 * //     AdditionalMetadata: "STRING_VALUE",
 * //   },
 * //   SavingsPlansPurchaseRecommendation: { // SavingsPlansPurchaseRecommendation
 * //     AccountScope: "PAYER" || "LINKED",
 * //     SavingsPlansType: "COMPUTE_SP" || "EC2_INSTANCE_SP" || "SAGEMAKER_SP",
 * //     TermInYears: "ONE_YEAR" || "THREE_YEARS",
 * //     PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION",
 * //     LookbackPeriodInDays: "SEVEN_DAYS" || "THIRTY_DAYS" || "SIXTY_DAYS",
 * //     SavingsPlansPurchaseRecommendationDetails: [ // SavingsPlansPurchaseRecommendationDetailList
 * //       { // SavingsPlansPurchaseRecommendationDetail
 * //         SavingsPlansDetails: { // SavingsPlansDetails
 * //           Region: "STRING_VALUE",
 * //           InstanceFamily: "STRING_VALUE",
 * //           OfferingId: "STRING_VALUE",
 * //         },
 * //         AccountId: "STRING_VALUE",
 * //         UpfrontCost: "STRING_VALUE",
 * //         EstimatedROI: "STRING_VALUE",
 * //         CurrencyCode: "STRING_VALUE",
 * //         EstimatedSPCost: "STRING_VALUE",
 * //         EstimatedOnDemandCost: "STRING_VALUE",
 * //         EstimatedOnDemandCostWithCurrentCommitment: "STRING_VALUE",
 * //         EstimatedSavingsAmount: "STRING_VALUE",
 * //         EstimatedSavingsPercentage: "STRING_VALUE",
 * //         HourlyCommitmentToPurchase: "STRING_VALUE",
 * //         EstimatedAverageUtilization: "STRING_VALUE",
 * //         EstimatedMonthlySavingsAmount: "STRING_VALUE",
 * //         CurrentMinimumHourlyOnDemandSpend: "STRING_VALUE",
 * //         CurrentMaximumHourlyOnDemandSpend: "STRING_VALUE",
 * //         CurrentAverageHourlyOnDemandSpend: "STRING_VALUE",
 * //         RecommendationDetailId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SavingsPlansPurchaseRecommendationSummary: { // SavingsPlansPurchaseRecommendationSummary
 * //       EstimatedROI: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       EstimatedTotalCost: "STRING_VALUE",
 * //       CurrentOnDemandSpend: "STRING_VALUE",
 * //       EstimatedSavingsAmount: "STRING_VALUE",
 * //       TotalRecommendationCount: "STRING_VALUE",
 * //       DailyCommitmentToPurchase: "STRING_VALUE",
 * //       HourlyCommitmentToPurchase: "STRING_VALUE",
 * //       EstimatedSavingsPercentage: "STRING_VALUE",
 * //       EstimatedMonthlySavingsAmount: "STRING_VALUE",
 * //       EstimatedOnDemandCostWithCurrentCommitment: "STRING_VALUE",
 * //     },
 * //   },
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSavingsPlansPurchaseRecommendationCommandInput - {@link GetSavingsPlansPurchaseRecommendationCommandInput}
 * @returns {@link GetSavingsPlansPurchaseRecommendationCommandOutput}
 * @see {@link GetSavingsPlansPurchaseRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansPurchaseRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
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
export class GetSavingsPlansPurchaseRecommendationCommand extends $Command
  .classBuilder<
    GetSavingsPlansPurchaseRecommendationCommandInput,
    GetSavingsPlansPurchaseRecommendationCommandOutput,
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
  .s("AWSInsightsIndexService", "GetSavingsPlansPurchaseRecommendation", {})
  .n("CostExplorerClient", "GetSavingsPlansPurchaseRecommendationCommand")
  .f(void 0, void 0)
  .ser(se_GetSavingsPlansPurchaseRecommendationCommand)
  .de(de_GetSavingsPlansPurchaseRecommendationCommand)
  .build() {}
