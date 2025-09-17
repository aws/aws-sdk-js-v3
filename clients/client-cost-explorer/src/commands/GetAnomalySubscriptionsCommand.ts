// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAnomalySubscriptionsRequest, GetAnomalySubscriptionsResponse } from "../models/models_0";
import { de_GetAnomalySubscriptionsCommand, se_GetAnomalySubscriptionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnomalySubscriptionsCommand}.
 */
export interface GetAnomalySubscriptionsCommandInput extends GetAnomalySubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link GetAnomalySubscriptionsCommand}.
 */
export interface GetAnomalySubscriptionsCommandOutput extends GetAnomalySubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the cost anomaly subscription objects for your account. You can filter using a
 *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomalySubscriptionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomalySubscriptionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetAnomalySubscriptionsRequest
 *   SubscriptionArnList: [ // Values
 *     "STRING_VALUE",
 *   ],
 *   MonitorArn: "STRING_VALUE",
 *   NextPageToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetAnomalySubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetAnomalySubscriptionsResponse
 * //   AnomalySubscriptions: [ // AnomalySubscriptions // required
 * //     { // AnomalySubscription
 * //       SubscriptionArn: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       MonitorArnList: [ // MonitorArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subscribers: [ // Subscribers // required
 * //         { // Subscriber
 * //           Address: "STRING_VALUE",
 * //           Type: "EMAIL" || "SNS",
 * //           Status: "CONFIRMED" || "DECLINED",
 * //         },
 * //       ],
 * //       Threshold: Number("double"),
 * //       Frequency: "DAILY" || "IMMEDIATE" || "WEEKLY", // required
 * //       SubscriptionName: "STRING_VALUE", // required
 * //       ThresholdExpression: { // Expression
 * //         Or: [ // Expressions
 * //           {
 * //             Or: [
 * //               "<Expression>",
 * //             ],
 * //             And: [
 * //               "<Expression>",
 * //             ],
 * //             Not: "<Expression>",
 * //             Dimensions: { // DimensionValues
 * //               Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 * //               Values: [ // Values
 * //                 "STRING_VALUE",
 * //               ],
 * //               MatchOptions: [ // MatchOptions
 * //                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //               ],
 * //             },
 * //             Tags: { // TagValues
 * //               Key: "STRING_VALUE",
 * //               Values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               MatchOptions: [
 * //                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //               ],
 * //             },
 * //             CostCategories: { // CostCategoryValues
 * //               Key: "STRING_VALUE",
 * //               Values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               MatchOptions: [
 * //                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //         And: [
 * //           "<Expression>",
 * //         ],
 * //         Not: "<Expression>",
 * //         Dimensions: {
 * //           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 * //           Values: [
 * //             "STRING_VALUE",
 * //           ],
 * //           MatchOptions: [
 * //             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //           ],
 * //         },
 * //         Tags: {
 * //           Key: "STRING_VALUE",
 * //           Values: [
 * //             "STRING_VALUE",
 * //           ],
 * //           MatchOptions: [
 * //             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //           ],
 * //         },
 * //         CostCategories: {
 * //           Key: "STRING_VALUE",
 * //           Values: "<Values>",
 * //           MatchOptions: "<MatchOptions>",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAnomalySubscriptionsCommandInput - {@link GetAnomalySubscriptionsCommandInput}
 * @returns {@link GetAnomalySubscriptionsCommandOutput}
 * @see {@link GetAnomalySubscriptionsCommandInput} for command's `input` shape.
 * @see {@link GetAnomalySubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link UnknownSubscriptionException} (client fault)
 *  <p>The cost anomaly subscription does not exist for the account. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 *
 * @public
 */
export class GetAnomalySubscriptionsCommand extends $Command
  .classBuilder<
    GetAnomalySubscriptionsCommandInput,
    GetAnomalySubscriptionsCommandOutput,
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
  .s("AWSInsightsIndexService", "GetAnomalySubscriptions", {})
  .n("CostExplorerClient", "GetAnomalySubscriptionsCommand")
  .f(void 0, void 0)
  .ser(se_GetAnomalySubscriptionsCommand)
  .de(de_GetAnomalySubscriptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnomalySubscriptionsRequest;
      output: GetAnomalySubscriptionsResponse;
    };
    sdk: {
      input: GetAnomalySubscriptionsCommandInput;
      output: GetAnomalySubscriptionsCommandOutput;
    };
  };
}
