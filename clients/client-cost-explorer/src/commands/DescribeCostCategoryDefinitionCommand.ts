// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DescribeCostCategoryDefinitionRequest, DescribeCostCategoryDefinitionResponse } from "../models/models_0";
import {
  de_DescribeCostCategoryDefinitionCommand,
  se_DescribeCostCategoryDefinitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCostCategoryDefinitionCommand}.
 */
export interface DescribeCostCategoryDefinitionCommandInput extends DescribeCostCategoryDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCostCategoryDefinitionCommand}.
 */
export interface DescribeCostCategoryDefinitionCommandOutput
  extends DescribeCostCategoryDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a
 *       Cost Category that's defined in the account.</p>
 *          <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's
 *       active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost
 *       Category that's effective on the current date. If Cost Category is still effective,
 *         <code>EffectiveEnd</code> is omitted in the response. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DescribeCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DescribeCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // DescribeCostCategoryDefinitionRequest
 *   CostCategoryArn: "STRING_VALUE", // required
 *   EffectiveOn: "STRING_VALUE",
 * };
 * const command = new DescribeCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCostCategoryDefinitionResponse
 * //   CostCategory: { // CostCategory
 * //     CostCategoryArn: "STRING_VALUE", // required
 * //     EffectiveStart: "STRING_VALUE", // required
 * //     EffectiveEnd: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     RuleVersion: "CostCategoryExpression.v1", // required
 * //     Rules: [ // CostCategoryRulesList // required
 * //       { // CostCategoryRule
 * //         Value: "STRING_VALUE",
 * //         Rule: { // Expression
 * //           Or: [ // Expressions
 * //             {
 * //               Or: [
 * //                 "<Expression>",
 * //               ],
 * //               And: [
 * //                 "<Expression>",
 * //               ],
 * //               Not: "<Expression>",
 * //               Dimensions: { // DimensionValues
 * //                 Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 * //                 Values: [ // Values
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 MatchOptions: [ // MatchOptions
 * //                   "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //                 ],
 * //               },
 * //               Tags: { // TagValues
 * //                 Key: "STRING_VALUE",
 * //                 Values: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 MatchOptions: [
 * //                   "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //                 ],
 * //               },
 * //               CostCategories: { // CostCategoryValues
 * //                 Key: "STRING_VALUE",
 * //                 Values: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 MatchOptions: [
 * //                   "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //           And: [
 * //             "<Expression>",
 * //           ],
 * //           Not: "<Expression>",
 * //           Dimensions: {
 * //             Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //             MatchOptions: [
 * //               "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //             ],
 * //           },
 * //           Tags: {
 * //             Key: "STRING_VALUE",
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //             MatchOptions: [
 * //               "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //             ],
 * //           },
 * //           CostCategories: {
 * //             Key: "STRING_VALUE",
 * //             Values: "<Values>",
 * //             MatchOptions: "<MatchOptions>",
 * //           },
 * //         },
 * //         InheritedValue: { // CostCategoryInheritedValueDimension
 * //           DimensionName: "LINKED_ACCOUNT_NAME" || "TAG",
 * //           DimensionKey: "STRING_VALUE",
 * //         },
 * //         Type: "REGULAR" || "INHERITED_VALUE",
 * //       },
 * //     ],
 * //     SplitChargeRules: [ // CostCategorySplitChargeRulesList
 * //       { // CostCategorySplitChargeRule
 * //         Source: "STRING_VALUE", // required
 * //         Targets: [ // CostCategorySplitChargeRuleTargetsList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Method: "FIXED" || "PROPORTIONAL" || "EVEN", // required
 * //         Parameters: [ // CostCategorySplitChargeRuleParametersList
 * //           { // CostCategorySplitChargeRuleParameter
 * //             Type: "ALLOCATION_PERCENTAGES", // required
 * //             Values: [ // CostCategorySplitChargeRuleParameterValuesList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ProcessingStatus: [ // CostCategoryProcessingStatusList
 * //       { // CostCategoryProcessingStatus
 * //         Component: "COST_EXPLORER",
 * //         Status: "PROCESSING" || "APPLIED",
 * //       },
 * //     ],
 * //     DefaultValue: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCostCategoryDefinitionCommandInput - {@link DescribeCostCategoryDefinitionCommandInput}
 * @returns {@link DescribeCostCategoryDefinitionCommandOutput}
 * @see {@link DescribeCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class DescribeCostCategoryDefinitionCommand extends $Command<
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeCostCategoryDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCostCategoryDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "DescribeCostCategoryDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeCostCategoryDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeCostCategoryDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCostCategoryDefinitionCommandOutput> {
    return de_DescribeCostCategoryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
