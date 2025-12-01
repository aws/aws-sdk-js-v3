// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReservationCoverageRequest, GetReservationCoverageResponse } from "../models/models_0";
import { GetReservationCoverage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReservationCoverageCommand}.
 */
export interface GetReservationCoverageCommandInput extends GetReservationCoverageRequest {}
/**
 * @public
 *
 * The output of {@link GetReservationCoverageCommand}.
 */
export interface GetReservationCoverageCommandOutput extends GetReservationCoverageResponse, __MetadataBearer {}

/**
 * <p>Retrieves the reservation coverage for your account, which you can use to see how much
 *       of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service,
 *       or Amazon Redshift usage is covered by a reservation. An organization's management account can
 *       see the coverage of the associated member accounts. This supports dimensions, Cost Categories,
 *       and nested expressions. For any time period, you can filter data about reservation usage by
 *       the following dimensions:</p>
 *          <ul>
 *             <li>
 *                <p>AZ</p>
 *             </li>
 *             <li>
 *                <p>CACHE_ENGINE</p>
 *             </li>
 *             <li>
 *                <p>DATABASE_ENGINE</p>
 *             </li>
 *             <li>
 *                <p>DEPLOYMENT_OPTION</p>
 *             </li>
 *             <li>
 *                <p>INSTANCE_TYPE</p>
 *             </li>
 *             <li>
 *                <p>LINKED_ACCOUNT</p>
 *             </li>
 *             <li>
 *                <p>OPERATING_SYSTEM</p>
 *             </li>
 *             <li>
 *                <p>PLATFORM</p>
 *             </li>
 *             <li>
 *                <p>REGION</p>
 *             </li>
 *             <li>
 *                <p>SERVICE</p>
 *             </li>
 *             <li>
 *                <p>TAG</p>
 *             </li>
 *             <li>
 *                <p>TENANCY</p>
 *             </li>
 *          </ul>
 *          <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code>
 *       operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationCoverageCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationCoverageCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetReservationCoverageRequest
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
 *   Metrics: [ // MetricNames
 *     "STRING_VALUE",
 *   ],
 *   NextPageToken: "STRING_VALUE",
 *   SortBy: { // SortDefinition
 *     Key: "STRING_VALUE", // required
 *     SortOrder: "ASCENDING" || "DESCENDING",
 *   },
 *   MaxResults: Number("int"),
 * };
 * const command = new GetReservationCoverageCommand(input);
 * const response = await client.send(command);
 * // { // GetReservationCoverageResponse
 * //   CoveragesByTime: [ // CoveragesByTime // required
 * //     { // CoverageByTime
 * //       TimePeriod: { // DateInterval
 * //         Start: "STRING_VALUE", // required
 * //         End: "STRING_VALUE", // required
 * //       },
 * //       Groups: [ // ReservationCoverageGroups
 * //         { // ReservationCoverageGroup
 * //           Attributes: { // Attributes
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           Coverage: { // Coverage
 * //             CoverageHours: { // CoverageHours
 * //               OnDemandHours: "STRING_VALUE",
 * //               ReservedHours: "STRING_VALUE",
 * //               TotalRunningHours: "STRING_VALUE",
 * //               CoverageHoursPercentage: "STRING_VALUE",
 * //             },
 * //             CoverageNormalizedUnits: { // CoverageNormalizedUnits
 * //               OnDemandNormalizedUnits: "STRING_VALUE",
 * //               ReservedNormalizedUnits: "STRING_VALUE",
 * //               TotalRunningNormalizedUnits: "STRING_VALUE",
 * //               CoverageNormalizedUnitsPercentage: "STRING_VALUE",
 * //             },
 * //             CoverageCost: { // CoverageCost
 * //               OnDemandCost: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Total: {
 * //         CoverageHours: {
 * //           OnDemandHours: "STRING_VALUE",
 * //           ReservedHours: "STRING_VALUE",
 * //           TotalRunningHours: "STRING_VALUE",
 * //           CoverageHoursPercentage: "STRING_VALUE",
 * //         },
 * //         CoverageNormalizedUnits: {
 * //           OnDemandNormalizedUnits: "STRING_VALUE",
 * //           ReservedNormalizedUnits: "STRING_VALUE",
 * //           TotalRunningNormalizedUnits: "STRING_VALUE",
 * //           CoverageNormalizedUnitsPercentage: "STRING_VALUE",
 * //         },
 * //         CoverageCost: {
 * //           OnDemandCost: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Total: "<Coverage>",
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReservationCoverageCommandInput - {@link GetReservationCoverageCommandInput}
 * @returns {@link GetReservationCoverageCommandOutput}
 * @see {@link GetReservationCoverageCommandInput} for command's `input` shape.
 * @see {@link GetReservationCoverageCommandOutput} for command's `response` shape.
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
export class GetReservationCoverageCommand extends $Command
  .classBuilder<
    GetReservationCoverageCommandInput,
    GetReservationCoverageCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "GetReservationCoverage", {})
  .n("CostExplorerClient", "GetReservationCoverageCommand")
  .sc(GetReservationCoverage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReservationCoverageRequest;
      output: GetReservationCoverageResponse;
    };
    sdk: {
      input: GetReservationCoverageCommandInput;
      output: GetReservationCoverageCommandOutput;
    };
  };
}
