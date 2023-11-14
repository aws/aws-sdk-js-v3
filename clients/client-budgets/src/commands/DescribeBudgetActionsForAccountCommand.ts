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

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import {
  DescribeBudgetActionsForAccountRequest,
  DescribeBudgetActionsForAccountResponse,
  DescribeBudgetActionsForAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeBudgetActionsForAccountCommand,
  se_DescribeBudgetActionsForAccountCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetActionsForAccountCommand}.
 */
export interface DescribeBudgetActionsForAccountCommandInput extends DescribeBudgetActionsForAccountRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetActionsForAccountCommand}.
 */
export interface DescribeBudgetActionsForAccountCommandOutput
  extends DescribeBudgetActionsForAccountResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Describes all of the budget actions for an account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionsForAccountCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionsForAccountCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetActionsForAccountRequest
 *   AccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetActionsForAccountCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetActionsForAccountResponse
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
 * @param DescribeBudgetActionsForAccountCommandInput - {@link DescribeBudgetActionsForAccountCommandInput}
 * @returns {@link DescribeBudgetActionsForAccountCommandOutput}
 * @see {@link DescribeBudgetActionsForAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionsForAccountCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 */
export class DescribeBudgetActionsForAccountCommand extends $Command<
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
  BudgetsClientResolvedConfig
> {
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
  constructor(readonly input: DescribeBudgetActionsForAccountCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetActionsForAccountCommandInput, DescribeBudgetActionsForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetActionsForAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetActionsForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeBudgetActionsForAccountResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBudgetServiceGateway",
        operation: "DescribeBudgetActionsForAccount",
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
  private serialize(
    input: DescribeBudgetActionsForAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeBudgetActionsForAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetActionsForAccountCommandOutput> {
    return de_DescribeBudgetActionsForAccountCommand(output, context);
  }
}
