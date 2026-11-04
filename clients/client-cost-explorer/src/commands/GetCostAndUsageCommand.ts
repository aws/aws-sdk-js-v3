// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCostAndUsageRequest, GetCostAndUsageResponse } from "../models/models_0";
import { GetCostAndUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCostAndUsageCommand}.
 */
export interface GetCostAndUsageCommandInput extends GetCostAndUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetCostAndUsageCommand}.
 */
export interface GetCostAndUsageCommandOutput extends GetCostAndUsageResponse, __MetadataBearer {}

/**
 * Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify `BlendedCosts` or `UsageQuantity`. You can also filter and group your data by various dimensions, such as `SERVICE` or `AZ`, in a specific time range. For a complete list of valid dimensions, see the [GetDimensionValues](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html) operation. Management account in an organization in Organizations have access to all member accounts.
 *
 * For information about filter limitations, see [Quotas and restrictions](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html) in the *Billing and Cost Management User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostAndUsageCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostAndUsageCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetCostAndUsageRequest
 *   TimePeriod: { // DateInterval
 *     Start: "STRING_VALUE", // required
 *     End: "STRING_VALUE", // required
 *   },
 *   Granularity: "DAILY" || "MONTHLY" || "HOURLY", // required
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
 *           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE" || "PRODUCT_ATTRIBUTE",
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
 *         ProductAttributes: { // ProductAttributeValues
 *           Key: "STRING_VALUE", // required
 *           Values: [ // ProductAttributeValueList
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
 *       Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE" || "PRODUCT_ATTRIBUTE",
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
 *       MatchOptions: "<MatchOptions>",
 *     },
 *     CostCategories: {
 *       Key: "STRING_VALUE",
 *       Values: "<Values>",
 *       MatchOptions: "<MatchOptions>",
 *     },
 *     ProductAttributes: {
 *       Key: "STRING_VALUE", // required
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *       MatchOptions: "<MatchOptions>",
 *     },
 *   },
 *   Metrics: [ // MetricNames // required
 *     "STRING_VALUE",
 *   ],
 *   GroupBy: [ // GroupDefinitions
 *     { // GroupDefinition
 *       Type: "DIMENSION" || "TAG" || "COST_CATEGORY" || "PRODUCT_ATTRIBUTE",
 *       Key: "STRING_VALUE",
 *     },
 *   ],
 *   BillingViewArn: "STRING_VALUE",
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new GetCostAndUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetCostAndUsageResponse
 * //   NextPageToken: "STRING_VALUE",
 * //   GroupDefinitions: [ // GroupDefinitions
 * //     { // GroupDefinition
 * //       Type: "DIMENSION" || "TAG" || "COST_CATEGORY" || "PRODUCT_ATTRIBUTE",
 * //       Key: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ResultsByTime: [ // ResultsByTime
 * //     { // ResultByTime
 * //       TimePeriod: { // DateInterval
 * //         Start: "STRING_VALUE", // required
 * //         End: "STRING_VALUE", // required
 * //       },
 * //       Total: { // Metrics
 * //         "<keys>": { // MetricValue
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //       Groups: [ // Groups
 * //         { // Group
 * //           Keys: [ // Keys
 * //             "STRING_VALUE",
 * //           ],
 * //           Metrics: {
 * //             "<keys>": {
 * //               Amount: "STRING_VALUE",
 * //               Unit: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Estimated: true || false,
 * //     },
 * //   ],
 * //   DimensionValueAttributes: [ // DimensionValuesWithAttributesList
 * //     { // DimensionValuesWithAttributes
 * //       Value: "STRING_VALUE",
 * //       Attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCostAndUsageCommandInput - {@link GetCostAndUsageCommandInput}
 * @returns {@link GetCostAndUsageCommandOutput}
 * @see {@link GetCostAndUsageCommandInput} for command's `input` shape.
 * @see {@link GetCostAndUsageCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link BillExpirationException} (client fault)
 *
 * The requested report expired. Update the date interval and try again.
 *
 * @throws {@link BillingViewHealthStatusException} (client fault)
 *
 * The billing view status must be `HEALTHY` to perform this action. Try again when the status is `HEALTHY`.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *
 * The requested data is unavailable.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The pagination token is invalid. Try again without a pagination token.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You made too many calls in a short period of time. Try again later.
 *
 * @throws {@link RequestChangedException} (client fault)
 *
 * Your request parameters changed between pages. Try again with the old parameters or without a pagination token.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified ARN in the request doesn't exist.
 *
 * @throws {@link CostExplorerServiceException}
 *
 * Base exception class for all service exceptions from CostExplorer service.
 *
 * @public
 */
export class GetCostAndUsageCommand extends command<GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput>(
  _ep0,
  _mw0,
  "GetCostAndUsage",
  GetCostAndUsage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCostAndUsageRequest;
      output: GetCostAndUsageResponse;
    };
    sdk: {
      input: GetCostAndUsageCommandInput;
      output: GetCostAndUsageCommandOutput;
    };
  };
}
