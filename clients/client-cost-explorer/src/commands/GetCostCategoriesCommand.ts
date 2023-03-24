// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostCategoriesRequest, GetCostCategoriesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCostCategoriesCommand,
  serializeAws_json1_1GetCostCategoriesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetCostCategoriesCommand}.
 */
export interface GetCostCategoriesCommandInput extends GetCostCategoriesRequest {}
/**
 * @public
 *
 * The output of {@link GetCostCategoriesCommand}.
 */
export interface GetCostCategoriesCommandOutput extends GetCostCategoriesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves an array of Cost Category names and values incurred cost.</p>
 *          <note>
 *             <p>If some Cost Category names and values are not associated with any cost, they will not
 *         be returned by this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostCategoriesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostCategoriesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = {
 *   SearchString: "STRING_VALUE",
 *   TimePeriod: {
 *     Start: "STRING_VALUE", // required
 *     End: "STRING_VALUE", // required
 *   },
 *   CostCategoryName: "STRING_VALUE",
 *   Filter: {
 *     Or: [
 *       {
 *         Or: [
 *           {
 *             Or: "<Expression>",
 *             And: [
 *               "<Expressions>",
 *             ],
 *             Not: {
 *               Or: "<Expression>",
 *               And: [
 *                 "<Expressions>",
 *               ],
 *               Not: {
 *                 Or: "<Expression>",
 *                 And: "<Expression>",
 *                 Not: "<Expression>",
 *                 Dimensions: {
 *                   Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *                   Values: [
 *                     "STRING_VALUE",
 *                   ],
 *                   MatchOptions: [
 *                     "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *                   ],
 *                 },
 *                 Tags: {
 *                   Key: "STRING_VALUE",
 *                   Values: [
 *                     "STRING_VALUE",
 *                   ],
 *                   MatchOptions: [
 *                     "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *                   ],
 *                 },
 *                 CostCategories: {
 *                   Key: "STRING_VALUE",
 *                   Values: [
 *                     "STRING_VALUE",
 *                   ],
 *                   MatchOptions: [
 *                     "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *                   ],
 *                 },
 *               },
 *               Dimensions: {
 *                 Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *                 Values: [
 *                   "STRING_VALUE",
 *                 ],
 *                 MatchOptions: [
 *                   "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *                 ],
 *               },
 *               Tags: {
 *                 Key: "STRING_VALUE",
 *                 Values: [
 *                   "STRING_VALUE",
 *                 ],
 *                 MatchOptions: [
 *                   "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *                 ],
 *               },
 *               CostCategories: {
 *                 Key: "STRING_VALUE",
 *                 Values: [
 *                   "STRING_VALUE",
 *                 ],
 *                 MatchOptions: [
 *                   "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *                 ],
 *               },
 *             },
 *             Dimensions: "<Expression>",
 *             Tags: "<Expression>",
 *             CostCategories: "<Expression>",
 *           },
 *         ],
 *         And: "<Expression>",
 *         Not: "<Expression>",
 *         Dimensions: "<Expression>",
 *         Tags: "<Expression>",
 *         CostCategories: "<Expression>",
 *       },
 *     ],
 *     And: "<Expression>",
 *     Not: "<Expression>",
 *     Dimensions: "<Expression>",
 *     Tags: "<Expression>",
 *     CostCategories: "<Expression>",
 *   },
 *   SortBy: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new GetCostCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetCostCategoriesCommandInput - {@link GetCostCategoriesCommandInput}
 * @returns {@link GetCostCategoriesCommandOutput}
 * @see {@link GetCostCategoriesCommandInput} for command's `input` shape.
 * @see {@link GetCostCategoriesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link BillExpirationException} (client fault)
 *  <p>The requested report expired. Update the date interval and try again.</p>
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
 * @throws {@link RequestChangedException} (client fault)
 *  <p>Your request parameters changed between pages. Try again with the old parameters or
 *             without a pagination token.</p>
 *
 *
 */
export class GetCostCategoriesCommand extends $Command<
  GetCostCategoriesCommandInput,
  GetCostCategoriesCommandOutput,
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
  constructor(readonly input: GetCostCategoriesCommandInput) {
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
  ): Handler<GetCostCategoriesCommandInput, GetCostCategoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCostCategoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetCostCategoriesCommand";
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
  private serialize(input: GetCostCategoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCostCategoriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCostCategoriesCommandOutput> {
    return deserializeAws_json1_1GetCostCategoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
