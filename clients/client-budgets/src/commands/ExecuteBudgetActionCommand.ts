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
import { ExecuteBudgetActionRequest, ExecuteBudgetActionResponse } from "../models/models_0";
import { de_ExecuteBudgetActionCommand, se_ExecuteBudgetActionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecuteBudgetActionCommand}.
 */
export interface ExecuteBudgetActionCommandInput extends ExecuteBudgetActionRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteBudgetActionCommand}.
 */
export interface ExecuteBudgetActionCommandOutput extends ExecuteBudgetActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Executes a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, ExecuteBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, ExecuteBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // ExecuteBudgetActionRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   ActionId: "STRING_VALUE", // required
 *   ExecutionType: "APPROVE_BUDGET_ACTION" || "RETRY_BUDGET_ACTION" || "REVERSE_BUDGET_ACTION" || "RESET_BUDGET_ACTION", // required
 * };
 * const command = new ExecuteBudgetActionCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteBudgetActionResponse
 * //   AccountId: "STRING_VALUE", // required
 * //   BudgetName: "STRING_VALUE", // required
 * //   ActionId: "STRING_VALUE", // required
 * //   ExecutionType: "APPROVE_BUDGET_ACTION" || "RETRY_BUDGET_ACTION" || "REVERSE_BUDGET_ACTION" || "RESET_BUDGET_ACTION", // required
 * // };
 *
 * ```
 *
 * @param ExecuteBudgetActionCommandInput - {@link ExecuteBudgetActionCommandInput}
 * @returns {@link ExecuteBudgetActionCommandOutput}
 * @see {@link ExecuteBudgetActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can’t locate the resource that you specified.</p>
 *
 * @throws {@link ResourceLockedException} (client fault)
 *  <p> The request was received and recognized by the server, but the server rejected that
 *       particular method for the requested resource. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 */
export class ExecuteBudgetActionCommand extends $Command<
  ExecuteBudgetActionCommandInput,
  ExecuteBudgetActionCommandOutput,
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
  constructor(readonly input: ExecuteBudgetActionCommandInput) {
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
  ): Handler<ExecuteBudgetActionCommandInput, ExecuteBudgetActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteBudgetActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "ExecuteBudgetActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBudgetServiceGateway",
        operation: "ExecuteBudgetAction",
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
  private serialize(input: ExecuteBudgetActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteBudgetActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteBudgetActionCommandOutput> {
    return de_ExecuteBudgetActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
