// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCostCategoryDefinitionRequest, CreateCostCategoryDefinitionResponse } from "../models/models_0";
import { CreateCostCategoryDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCostCategoryDefinitionCommand}.
 */
export interface CreateCostCategoryDefinitionCommandInput extends CreateCostCategoryDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCostCategoryDefinitionCommand}.
 */
export interface CreateCostCategoryDefinitionCommandOutput
  extends CreateCostCategoryDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new cost category with the requested name and rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // CreateCostCategoryDefinitionRequest
 *   Name: "STRING_VALUE", // required
 *   EffectiveStart: "STRING_VALUE",
 *   RuleVersion: "CostCategoryExpression.v1", // required
 *   Rules: [ // CostCategoryRulesList // required
 *     { // CostCategoryRule
 *       Value: "STRING_VALUE",
 *       Rule: { // Expression
 *         Or: [ // Expressions
 *           {
 *             Or: [
 *               "<Expression>",
 *             ],
 *             And: [
 *               "<Expression>",
 *             ],
 *             Not: "<Expression>",
 *             Dimensions: { // DimensionValues
 *               Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *               Values: [ // Values
 *                 "STRING_VALUE",
 *               ],
 *               MatchOptions: [ // MatchOptions
 *                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *               ],
 *             },
 *             Tags: { // TagValues
 *               Key: "STRING_VALUE",
 *               Values: [
 *                 "STRING_VALUE",
 *               ],
 *               MatchOptions: [
 *                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *               ],
 *             },
 *             CostCategories: { // CostCategoryValues
 *               Key: "STRING_VALUE",
 *               Values: [
 *                 "STRING_VALUE",
 *               ],
 *               MatchOptions: [
 *                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *               ],
 *             },
 *           },
 *         ],
 *         And: [
 *           "<Expression>",
 *         ],
 *         Not: "<Expression>",
 *         Dimensions: {
 *           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *         Tags: {
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *         CostCategories: {
 *           Key: "STRING_VALUE",
 *           Values: "<Values>",
 *           MatchOptions: "<MatchOptions>",
 *         },
 *       },
 *       InheritedValue: { // CostCategoryInheritedValueDimension
 *         DimensionName: "LINKED_ACCOUNT_NAME" || "TAG",
 *         DimensionKey: "STRING_VALUE",
 *       },
 *       Type: "REGULAR" || "INHERITED_VALUE",
 *     },
 *   ],
 *   DefaultValue: "STRING_VALUE",
 *   SplitChargeRules: [ // CostCategorySplitChargeRulesList
 *     { // CostCategorySplitChargeRule
 *       Source: "STRING_VALUE", // required
 *       Targets: [ // CostCategorySplitChargeRuleTargetsList // required
 *         "STRING_VALUE",
 *       ],
 *       Method: "FIXED" || "PROPORTIONAL" || "EVEN", // required
 *       Parameters: [ // CostCategorySplitChargeRuleParametersList
 *         { // CostCategorySplitChargeRuleParameter
 *           Type: "ALLOCATION_PERCENTAGES", // required
 *           Values: [ // CostCategorySplitChargeRuleParameterValuesList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   ResourceTags: [ // ResourceTagList
 *     { // ResourceTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCostCategoryDefinitionResponse
 * //   CostCategoryArn: "STRING_VALUE",
 * //   EffectiveStart: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCostCategoryDefinitionCommandInput - {@link CreateCostCategoryDefinitionCommandInput}
 * @returns {@link CreateCostCategoryDefinitionCommandOutput}
 * @see {@link CreateCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
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
export class CreateCostCategoryDefinitionCommand extends $Command
  .classBuilder<
    CreateCostCategoryDefinitionCommandInput,
    CreateCostCategoryDefinitionCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "CreateCostCategoryDefinition", {})
  .n("CostExplorerClient", "CreateCostCategoryDefinitionCommand")
  .sc(CreateCostCategoryDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCostCategoryDefinitionRequest;
      output: CreateCostCategoryDefinitionResponse;
    };
    sdk: {
      input: CreateCostCategoryDefinitionCommandInput;
      output: CreateCostCategoryDefinitionCommandOutput;
    };
  };
}
