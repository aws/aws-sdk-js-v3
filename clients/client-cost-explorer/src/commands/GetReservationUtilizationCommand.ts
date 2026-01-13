// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReservationUtilizationRequest, GetReservationUtilizationResponse } from "../models/models_0";
import { GetReservationUtilization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReservationUtilizationCommand}.
 */
export interface GetReservationUtilizationCommandInput extends GetReservationUtilizationRequest {}
/**
 * @public
 *
 * The output of {@link GetReservationUtilizationCommand}.
 */
export interface GetReservationUtilizationCommandOutput extends GetReservationUtilizationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the reservation utilization for your account. Management account in an
 *       organization have access to member accounts. You can filter data by dimensions in a time
 *       period. You can use <code>GetDimensionValues</code> to determine the possible dimension
 *       values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationUtilizationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationUtilizationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetReservationUtilizationRequest
 *   TimePeriod: { // DateInterval
 *     Start: "STRING_VALUE", // required
 *     End: "STRING_VALUE", // required
 *   },
 *   GroupBy: [ // GroupDefinitions
 *     { // GroupDefinition
 *       Type: "DIMENSION" || "TAG" || "COST_CATEGORY",
 *       Key: "STRING_VALUE",
 *     },
 *   ],
 *   Granularity: "DAILY" || "MONTHLY" || "HOURLY",
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
 *           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
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
 *       Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
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
 *   SortBy: { // SortDefinition
 *     Key: "STRING_VALUE", // required
 *     SortOrder: "ASCENDING" || "DESCENDING",
 *   },
 *   NextPageToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetReservationUtilizationCommand(input);
 * const response = await client.send(command);
 * // { // GetReservationUtilizationResponse
 * //   UtilizationsByTime: [ // UtilizationsByTime // required
 * //     { // UtilizationByTime
 * //       TimePeriod: { // DateInterval
 * //         Start: "STRING_VALUE", // required
 * //         End: "STRING_VALUE", // required
 * //       },
 * //       Groups: [ // ReservationUtilizationGroups
 * //         { // ReservationUtilizationGroup
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           Attributes: { // Attributes
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           Utilization: { // ReservationAggregates
 * //             UtilizationPercentage: "STRING_VALUE",
 * //             UtilizationPercentageInUnits: "STRING_VALUE",
 * //             PurchasedHours: "STRING_VALUE",
 * //             PurchasedUnits: "STRING_VALUE",
 * //             TotalActualHours: "STRING_VALUE",
 * //             TotalActualUnits: "STRING_VALUE",
 * //             UnusedHours: "STRING_VALUE",
 * //             UnusedUnits: "STRING_VALUE",
 * //             OnDemandCostOfRIHoursUsed: "STRING_VALUE",
 * //             NetRISavings: "STRING_VALUE",
 * //             TotalPotentialRISavings: "STRING_VALUE",
 * //             AmortizedUpfrontFee: "STRING_VALUE",
 * //             AmortizedRecurringFee: "STRING_VALUE",
 * //             TotalAmortizedFee: "STRING_VALUE",
 * //             RICostForUnusedHours: "STRING_VALUE",
 * //             RealizedSavings: "STRING_VALUE",
 * //             UnrealizedSavings: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Total: {
 * //         UtilizationPercentage: "STRING_VALUE",
 * //         UtilizationPercentageInUnits: "STRING_VALUE",
 * //         PurchasedHours: "STRING_VALUE",
 * //         PurchasedUnits: "STRING_VALUE",
 * //         TotalActualHours: "STRING_VALUE",
 * //         TotalActualUnits: "STRING_VALUE",
 * //         UnusedHours: "STRING_VALUE",
 * //         UnusedUnits: "STRING_VALUE",
 * //         OnDemandCostOfRIHoursUsed: "STRING_VALUE",
 * //         NetRISavings: "STRING_VALUE",
 * //         TotalPotentialRISavings: "STRING_VALUE",
 * //         AmortizedUpfrontFee: "STRING_VALUE",
 * //         AmortizedRecurringFee: "STRING_VALUE",
 * //         TotalAmortizedFee: "STRING_VALUE",
 * //         RICostForUnusedHours: "STRING_VALUE",
 * //         RealizedSavings: "STRING_VALUE",
 * //         UnrealizedSavings: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Total: "<ReservationAggregates>",
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReservationUtilizationCommandInput - {@link GetReservationUtilizationCommandInput}
 * @returns {@link GetReservationUtilizationCommandOutput}
 * @see {@link GetReservationUtilizationCommandInput} for command's `input` shape.
 * @see {@link GetReservationUtilizationCommandOutput} for command's `response` shape.
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
export class GetReservationUtilizationCommand extends $Command
  .classBuilder<
    GetReservationUtilizationCommandInput,
    GetReservationUtilizationCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "GetReservationUtilization", {})
  .n("CostExplorerClient", "GetReservationUtilizationCommand")
  .sc(GetReservationUtilization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReservationUtilizationRequest;
      output: GetReservationUtilizationResponse;
    };
    sdk: {
      input: GetReservationUtilizationCommandInput;
      output: GetReservationUtilizationCommandOutput;
    };
  };
}
