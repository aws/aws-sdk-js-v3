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
import { CreateBudgetRequest, CreateBudgetRequestFilterSensitiveLog, CreateBudgetResponse } from "../models/models_0";
import { de_CreateBudgetCommand, se_CreateBudgetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBudgetCommand}.
 */
export interface CreateBudgetCommandInput extends CreateBudgetRequest {}
/**
 * @public
 *
 * The output of {@link CreateBudgetCommand}.
 */
export interface CreateBudgetCommandOutput extends CreateBudgetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a budget and, if included, notifications and subscribers. </p>
 *          <important>
 *             <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // CreateBudgetRequest
 *   AccountId: "STRING_VALUE", // required
 *   Budget: { // Budget
 *     BudgetName: "STRING_VALUE", // required
 *     BudgetLimit: { // Spend
 *       Amount: "STRING_VALUE", // required
 *       Unit: "STRING_VALUE", // required
 *     },
 *     PlannedBudgetLimits: { // PlannedBudgetLimits
 *       "<keys>": {
 *         Amount: "STRING_VALUE", // required
 *         Unit: "STRING_VALUE", // required
 *       },
 *     },
 *     CostFilters: { // CostFilters
 *       "<keys>": [ // DimensionValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *     CostTypes: { // CostTypes
 *       IncludeTax: true || false,
 *       IncludeSubscription: true || false,
 *       UseBlended: true || false,
 *       IncludeRefund: true || false,
 *       IncludeCredit: true || false,
 *       IncludeUpfront: true || false,
 *       IncludeRecurring: true || false,
 *       IncludeOtherSubscription: true || false,
 *       IncludeSupport: true || false,
 *       IncludeDiscount: true || false,
 *       UseAmortized: true || false,
 *     },
 *     TimeUnit: "DAILY" || "MONTHLY" || "QUARTERLY" || "ANNUALLY", // required
 *     TimePeriod: { // TimePeriod
 *       Start: new Date("TIMESTAMP"),
 *       End: new Date("TIMESTAMP"),
 *     },
 *     CalculatedSpend: { // CalculatedSpend
 *       ActualSpend: {
 *         Amount: "STRING_VALUE", // required
 *         Unit: "STRING_VALUE", // required
 *       },
 *       ForecastedSpend: {
 *         Amount: "STRING_VALUE", // required
 *         Unit: "STRING_VALUE", // required
 *       },
 *     },
 *     BudgetType: "USAGE" || "COST" || "RI_UTILIZATION" || "RI_COVERAGE" || "SAVINGS_PLANS_UTILIZATION" || "SAVINGS_PLANS_COVERAGE", // required
 *     LastUpdatedTime: new Date("TIMESTAMP"),
 *     AutoAdjustData: { // AutoAdjustData
 *       AutoAdjustType: "HISTORICAL" || "FORECAST", // required
 *       HistoricalOptions: { // HistoricalOptions
 *         BudgetAdjustmentPeriod: Number("int"), // required
 *         LookBackAvailablePeriods: Number("int"),
 *       },
 *       LastAutoAdjustTime: new Date("TIMESTAMP"),
 *     },
 *   },
 *   NotificationsWithSubscribers: [ // NotificationWithSubscribersList
 *     { // NotificationWithSubscribers
 *       Notification: { // Notification
 *         NotificationType: "ACTUAL" || "FORECASTED", // required
 *         ComparisonOperator: "GREATER_THAN" || "LESS_THAN" || "EQUAL_TO", // required
 *         Threshold: Number("double"), // required
 *         ThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE",
 *         NotificationState: "OK" || "ALARM",
 *       },
 *       Subscribers: [ // Subscribers // required
 *         { // Subscriber
 *           SubscriptionType: "SNS" || "EMAIL", // required
 *           Address: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateBudgetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateBudgetCommandInput - {@link CreateBudgetCommandInput}
 * @returns {@link CreateBudgetCommandOutput}
 * @see {@link CreateBudgetCommandInput} for command's `input` shape.
 * @see {@link CreateBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link CreationLimitExceededException} (client fault)
 *  <p>You've exceeded the notification or subscriber limit.</p>
 *
 * @throws {@link DuplicateRecordException} (client fault)
 *  <p>The budget name already exists. Budget names must be unique within an account.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 */
export class CreateBudgetCommand extends $Command<
  CreateBudgetCommandInput,
  CreateBudgetCommandOutput,
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
  constructor(readonly input: CreateBudgetCommandInput) {
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
  ): Handler<CreateBudgetCommandInput, CreateBudgetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBudgetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "CreateBudgetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBudgetRequestFilterSensitiveLog,
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
  private serialize(input: CreateBudgetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBudgetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBudgetCommandOutput> {
    return de_CreateBudgetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
