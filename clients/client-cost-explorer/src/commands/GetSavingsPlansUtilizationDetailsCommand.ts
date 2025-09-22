// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSavingsPlansUtilizationDetailsRequest,
  GetSavingsPlansUtilizationDetailsResponse,
} from "../models/models_0";
import { GetSavingsPlansUtilizationDetails } from "../schemas/schemas_2_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSavingsPlansUtilizationDetailsCommand}.
 */
export interface GetSavingsPlansUtilizationDetailsCommandInput extends GetSavingsPlansUtilizationDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetSavingsPlansUtilizationDetailsCommand}.
 */
export interface GetSavingsPlansUtilizationDetailsCommandOutput
  extends GetSavingsPlansUtilizationDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves attribute data along with aggregate utilization and savings data for a given
 *       time period. This doesn't support granular or grouped data (daily/monthly) in response. You
 *       can't retrieve data by dates in a single response similar to
 *         <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to
 *         <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use
 *         <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible
 *       dimension values.</p>
 *          <note>
 *             <p>
 *                <code>GetSavingsPlanUtilizationDetails</code> internally groups data by
 *           <code>SavingsPlansArn</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansUtilizationDetailsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansUtilizationDetailsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetSavingsPlansUtilizationDetailsRequest
 *   TimePeriod: { // DateInterval
 *     Start: "STRING_VALUE", // required
 *     End: "STRING_VALUE", // required
 *   },
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
 *   DataType: [ // SavingsPlansDataTypes
 *     "ATTRIBUTES" || "UTILIZATION" || "AMORTIZED_COMMITMENT" || "SAVINGS",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortBy: { // SortDefinition
 *     Key: "STRING_VALUE", // required
 *     SortOrder: "ASCENDING" || "DESCENDING",
 *   },
 * };
 * const command = new GetSavingsPlansUtilizationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetSavingsPlansUtilizationDetailsResponse
 * //   SavingsPlansUtilizationDetails: [ // SavingsPlansUtilizationDetails // required
 * //     { // SavingsPlansUtilizationDetail
 * //       SavingsPlanArn: "STRING_VALUE",
 * //       Attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Utilization: { // SavingsPlansUtilization
 * //         TotalCommitment: "STRING_VALUE",
 * //         UsedCommitment: "STRING_VALUE",
 * //         UnusedCommitment: "STRING_VALUE",
 * //         UtilizationPercentage: "STRING_VALUE",
 * //       },
 * //       Savings: { // SavingsPlansSavings
 * //         NetSavings: "STRING_VALUE",
 * //         OnDemandCostEquivalent: "STRING_VALUE",
 * //       },
 * //       AmortizedCommitment: { // SavingsPlansAmortizedCommitment
 * //         AmortizedRecurringCommitment: "STRING_VALUE",
 * //         AmortizedUpfrontCommitment: "STRING_VALUE",
 * //         TotalAmortizedCommitment: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Total: { // SavingsPlansUtilizationAggregates
 * //     Utilization: {
 * //       TotalCommitment: "STRING_VALUE",
 * //       UsedCommitment: "STRING_VALUE",
 * //       UnusedCommitment: "STRING_VALUE",
 * //       UtilizationPercentage: "STRING_VALUE",
 * //     },
 * //     Savings: {
 * //       NetSavings: "STRING_VALUE",
 * //       OnDemandCostEquivalent: "STRING_VALUE",
 * //     },
 * //     AmortizedCommitment: {
 * //       AmortizedRecurringCommitment: "STRING_VALUE",
 * //       AmortizedUpfrontCommitment: "STRING_VALUE",
 * //       TotalAmortizedCommitment: "STRING_VALUE",
 * //     },
 * //   },
 * //   TimePeriod: { // DateInterval
 * //     Start: "STRING_VALUE", // required
 * //     End: "STRING_VALUE", // required
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSavingsPlansUtilizationDetailsCommandInput - {@link GetSavingsPlansUtilizationDetailsCommandInput}
 * @returns {@link GetSavingsPlansUtilizationDetailsCommandOutput}
 * @see {@link GetSavingsPlansUtilizationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansUtilizationDetailsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetSavingsPlansUtilizationDetailsCommand extends $Command
  .classBuilder<
    GetSavingsPlansUtilizationDetailsCommandInput,
    GetSavingsPlansUtilizationDetailsCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "GetSavingsPlansUtilizationDetails", {})
  .n("CostExplorerClient", "GetSavingsPlansUtilizationDetailsCommand")
  .sc(GetSavingsPlansUtilizationDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSavingsPlansUtilizationDetailsRequest;
      output: GetSavingsPlansUtilizationDetailsResponse;
    };
    sdk: {
      input: GetSavingsPlansUtilizationDetailsCommandInput;
      output: GetSavingsPlansUtilizationDetailsCommandOutput;
    };
  };
}
