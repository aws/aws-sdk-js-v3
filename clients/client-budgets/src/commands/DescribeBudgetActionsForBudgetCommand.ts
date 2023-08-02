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
import {
  DescribeBudgetActionsForBudgetRequest,
  DescribeBudgetActionsForBudgetResponse,
  DescribeBudgetActionsForBudgetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeBudgetActionsForBudgetCommand,
  se_DescribeBudgetActionsForBudgetCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetActionsForBudgetCommand}.
 */
export interface DescribeBudgetActionsForBudgetCommandInput extends DescribeBudgetActionsForBudgetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetActionsForBudgetCommand}.
 */
export interface DescribeBudgetActionsForBudgetCommandOutput
  extends DescribeBudgetActionsForBudgetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Describes all of the budget actions for a budget.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionsForBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionsForBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetActionsForBudgetRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetActionsForBudgetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetActionsForBudgetResponse
 * //   Actions: [ // Actions // required
 * //     { // Action
 * //       ActionId: "STRING_VALUE", // required
 * //       BudgetName: "STRING_VALUE", // required
 * //       NotificationType: "ACTUAL" || "FORECASTED", // required
 * //       ActionType: "APPLY_IAM_POLICY" || "APPLY_SCP_POLICY" || "RUN_SSM_DOCUMENTS", // required
 * //       ActionThreshold: { // ActionThreshold
 * //         ActionThresholdValue: Number("double"), // required
 * //         ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 * //       },
 * //       Definition: { // Definition
 * //         IamActionDefinition: { // IamActionDefinition
 * //           PolicyArn: "STRING_VALUE", // required
 * //           Roles: [ // Roles
 * //             "STRING_VALUE",
 * //           ],
 * //           Groups: [ // Groups
 * //             "STRING_VALUE",
 * //           ],
 * //           Users: [ // Users
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ScpActionDefinition: { // ScpActionDefinition
 * //           PolicyId: "STRING_VALUE", // required
 * //           TargetIds: [ // TargetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         SsmActionDefinition: { // SsmActionDefinition
 * //           ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 * //           Region: "STRING_VALUE", // required
 * //           InstanceIds: [ // InstanceIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ExecutionRoleArn: "STRING_VALUE", // required
 * //       ApprovalModel: "AUTOMATIC" || "MANUAL", // required
 * //       Status: "STANDBY" || "PENDING" || "EXECUTION_IN_PROGRESS" || "EXECUTION_SUCCESS" || "EXECUTION_FAILURE" || "REVERSE_IN_PROGRESS" || "REVERSE_SUCCESS" || "REVERSE_FAILURE" || "RESET_IN_PROGRESS" || "RESET_FAILURE", // required
 * //       Subscribers: [ // Subscribers // required
 * //         { // Subscriber
 * //           SubscriptionType: "SNS" || "EMAIL", // required
 * //           Address: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetActionsForBudgetCommandInput - {@link DescribeBudgetActionsForBudgetCommandInput}
 * @returns {@link DescribeBudgetActionsForBudgetCommandOutput}
 * @see {@link DescribeBudgetActionsForBudgetCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionsForBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
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
export class DescribeBudgetActionsForBudgetCommand extends $Command<
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
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
  constructor(readonly input: DescribeBudgetActionsForBudgetCommandInput) {
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
  ): Handler<DescribeBudgetActionsForBudgetCommandInput, DescribeBudgetActionsForBudgetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetActionsForBudgetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetActionsForBudgetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeBudgetActionsForBudgetResponseFilterSensitiveLog,
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
    input: DescribeBudgetActionsForBudgetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeBudgetActionsForBudgetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetActionsForBudgetCommandOutput> {
    return de_DescribeBudgetActionsForBudgetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
