// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTagsRequest, GetTagsResponse } from "../models/models_0";
import { GetTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTagsCommand}.
 */
export interface GetTagsCommandInput extends GetTagsRequest {}
/**
 * @public
 *
 * The output of {@link GetTagsCommand}.
 */
export interface GetTagsCommandOutput extends GetTagsResponse, __MetadataBearer {}

/**
 * Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetTagsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetTagsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetTagsRequest
 *   SearchString: "STRING_VALUE",
 *   TimePeriod: { // DateInterval
 *     Start: "STRING_VALUE", // required
 *     End: "STRING_VALUE", // required
 *   },
 *   TagKey: "STRING_VALUE",
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
 *   SortBy: [ // SortDefinitions
 *     { // SortDefinition
 *       Key: "STRING_VALUE", // required
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *   ],
 *   BillingViewArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new GetTagsCommand(input);
 * const response = await client.send(command);
 * // { // GetTagsResponse
 * //   NextPageToken: "STRING_VALUE",
 * //   Tags: [ // TagList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   ReturnSize: Number("int"), // required
 * //   TotalSize: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetTagsCommandInput - {@link GetTagsCommandInput}
 * @returns {@link GetTagsCommandOutput}
 * @see {@link GetTagsCommandInput} for command's `input` shape.
 * @see {@link GetTagsCommandOutput} for command's `response` shape.
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
export class GetTagsCommand extends command<GetTagsCommandInput, GetTagsCommandOutput>(
  _ep0,
  _mw0,
  "GetTags",
  GetTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTagsRequest;
      output: GetTagsResponse;
    };
    sdk: {
      input: GetTagsCommandInput;
      output: GetTagsCommandOutput;
    };
  };
}
