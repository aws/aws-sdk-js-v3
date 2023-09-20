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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { CreateCostCategoryDefinitionRequest, CreateCostCategoryDefinitionResponse } from "../models/models_0";
import {
  de_CreateCostCategoryDefinitionCommand,
  se_CreateCostCategoryDefinitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a new Cost Category with the requested name and rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
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
 *               Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
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
 *           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
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
 */
export class CreateCostCategoryDefinitionCommand extends $Command<
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput,
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
  constructor(readonly input: CreateCostCategoryDefinitionCommandInput) {
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
  ): Handler<CreateCostCategoryDefinitionCommandInput, CreateCostCategoryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCostCategoryDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "CreateCostCategoryDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSInsightsIndexService",
        operation: "CreateCostCategoryDefinition",
      },
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
  private serialize(input: CreateCostCategoryDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCostCategoryDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCostCategoryDefinitionCommandOutput> {
    return de_CreateCostCategoryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
