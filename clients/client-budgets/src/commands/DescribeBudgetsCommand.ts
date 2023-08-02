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

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetsRequest, DescribeBudgetsResponse } from "../models/models_0";
import { de_DescribeBudgetsCommand, se_DescribeBudgetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetsCommand}.
 */
export interface DescribeBudgetsCommandInput extends DescribeBudgetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetsCommand}.
 */
export interface DescribeBudgetsCommandOutput extends DescribeBudgetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the budgets that are associated with an account.</p>
 *          <important>
 *             <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetsCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetsCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetsRequest
 *   AccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetsResponse
 * //   Budgets: [ // Budgets
 * //     { // Budget
 * //       BudgetName: "STRING_VALUE", // required
 * //       BudgetLimit: { // Spend
 * //         Amount: "STRING_VALUE", // required
 * //         Unit: "STRING_VALUE", // required
 * //       },
 * //       PlannedBudgetLimits: { // PlannedBudgetLimits
 * //         "<keys>": {
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       CostFilters: { // CostFilters
 * //         "<keys>": [ // DimensionValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CostTypes: { // CostTypes
 * //         IncludeTax: true || false,
 * //         IncludeSubscription: true || false,
 * //         UseBlended: true || false,
 * //         IncludeRefund: true || false,
 * //         IncludeCredit: true || false,
 * //         IncludeUpfront: true || false,
 * //         IncludeRecurring: true || false,
 * //         IncludeOtherSubscription: true || false,
 * //         IncludeSupport: true || false,
 * //         IncludeDiscount: true || false,
 * //         UseAmortized: true || false,
 * //       },
 * //       TimeUnit: "DAILY" || "MONTHLY" || "QUARTERLY" || "ANNUALLY", // required
 * //       TimePeriod: { // TimePeriod
 * //         Start: new Date("TIMESTAMP"),
 * //         End: new Date("TIMESTAMP"),
 * //       },
 * //       CalculatedSpend: { // CalculatedSpend
 * //         ActualSpend: {
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //         ForecastedSpend: {
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       BudgetType: "USAGE" || "COST" || "RI_UTILIZATION" || "RI_COVERAGE" || "SAVINGS_PLANS_UTILIZATION" || "SAVINGS_PLANS_COVERAGE", // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       AutoAdjustData: { // AutoAdjustData
 * //         AutoAdjustType: "HISTORICAL" || "FORECAST", // required
 * //         HistoricalOptions: { // HistoricalOptions
 * //           BudgetAdjustmentPeriod: Number("int"), // required
 * //           LookBackAvailablePeriods: Number("int"),
 * //         },
 * //         LastAutoAdjustTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetsCommandInput - {@link DescribeBudgetsCommandInput}
 * @returns {@link DescribeBudgetsCommandOutput}
 * @see {@link DescribeBudgetsCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetsCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *  <p>The pagination token expired.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can’t locate the resource that you specified.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 */
export class DescribeBudgetsCommand extends $Command<
  DescribeBudgetsCommandInput,
  DescribeBudgetsCommandOutput,
  BudgetsClientResolvedConfig
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
  constructor(readonly input: DescribeBudgetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetsCommand";
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
  private serialize(input: DescribeBudgetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBudgetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBudgetsCommandOutput> {
    return de_DescribeBudgetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
