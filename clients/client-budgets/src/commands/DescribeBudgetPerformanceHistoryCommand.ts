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
import { DescribeBudgetPerformanceHistoryRequest, DescribeBudgetPerformanceHistoryResponse } from "../models/models_0";
import {
  de_DescribeBudgetPerformanceHistoryCommand,
  se_DescribeBudgetPerformanceHistoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetPerformanceHistoryCommand}.
 */
export interface DescribeBudgetPerformanceHistoryCommandInput extends DescribeBudgetPerformanceHistoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetPerformanceHistoryCommand}.
 */
export interface DescribeBudgetPerformanceHistoryCommandOutput
  extends DescribeBudgetPerformanceHistoryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetPerformanceHistoryCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetPerformanceHistoryCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetPerformanceHistoryRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   TimePeriod: { // TimePeriod
 *     Start: new Date("TIMESTAMP"),
 *     End: new Date("TIMESTAMP"),
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetPerformanceHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetPerformanceHistoryResponse
 * //   BudgetPerformanceHistory: { // BudgetPerformanceHistory
 * //     BudgetName: "STRING_VALUE",
 * //     BudgetType: "USAGE" || "COST" || "RI_UTILIZATION" || "RI_COVERAGE" || "SAVINGS_PLANS_UTILIZATION" || "SAVINGS_PLANS_COVERAGE",
 * //     CostFilters: { // CostFilters
 * //       "<keys>": [ // DimensionValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CostTypes: { // CostTypes
 * //       IncludeTax: true || false,
 * //       IncludeSubscription: true || false,
 * //       UseBlended: true || false,
 * //       IncludeRefund: true || false,
 * //       IncludeCredit: true || false,
 * //       IncludeUpfront: true || false,
 * //       IncludeRecurring: true || false,
 * //       IncludeOtherSubscription: true || false,
 * //       IncludeSupport: true || false,
 * //       IncludeDiscount: true || false,
 * //       UseAmortized: true || false,
 * //     },
 * //     TimeUnit: "DAILY" || "MONTHLY" || "QUARTERLY" || "ANNUALLY",
 * //     BudgetedAndActualAmountsList: [ // BudgetedAndActualAmountsList
 * //       { // BudgetedAndActualAmounts
 * //         BudgetedAmount: { // Spend
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //         ActualAmount: {
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //         TimePeriod: { // TimePeriod
 * //           Start: new Date("TIMESTAMP"),
 * //           End: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetPerformanceHistoryCommandInput - {@link DescribeBudgetPerformanceHistoryCommandInput}
 * @returns {@link DescribeBudgetPerformanceHistoryCommandOutput}
 * @see {@link DescribeBudgetPerformanceHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetPerformanceHistoryCommandOutput} for command's `response` shape.
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
export class DescribeBudgetPerformanceHistoryCommand extends $Command<
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
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
  constructor(readonly input: DescribeBudgetPerformanceHistoryCommandInput) {
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
  ): Handler<DescribeBudgetPerformanceHistoryCommandInput, DescribeBudgetPerformanceHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetPerformanceHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetPerformanceHistoryCommand";
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
    input: DescribeBudgetPerformanceHistoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeBudgetPerformanceHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetPerformanceHistoryCommandOutput> {
    return de_DescribeBudgetPerformanceHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
