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

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import {
  DescribeBudgetActionsForAccountRequest,
  DescribeBudgetActionsForAccountRequestFilterSensitiveLog,
  DescribeBudgetActionsForAccountResponse,
  DescribeBudgetActionsForAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetActionsForAccountCommand,
  serializeAws_json1_1DescribeBudgetActionsForAccountCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeBudgetActionsForAccountCommandInput extends DescribeBudgetActionsForAccountRequest {}
export interface DescribeBudgetActionsForAccountCommandOutput
  extends DescribeBudgetActionsForAccountResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Describes all of the budget actions for an account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionsForAccountCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionsForAccountCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetActionsForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetActionsForAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionsForAccountCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 */
export class DescribeBudgetActionsForAccountCommand extends $Command<
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
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

  constructor(readonly input: DescribeBudgetActionsForAccountCommandInput) {
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
      inputFilterSensitiveLog: DescribeBudgetActionsForAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetActionsForAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeBudgetActionsForAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBudgetActionsForAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetActionsForAccountCommandOutput> {
    return deserializeAws_json1_1DescribeBudgetActionsForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
