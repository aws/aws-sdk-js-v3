import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetActionsForBudgetRequest, DescribeBudgetActionsForBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand,
  serializeAws_json1_1DescribeBudgetActionsForBudgetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeBudgetActionsForBudgetCommandInput = DescribeBudgetActionsForBudgetRequest;
export type DescribeBudgetActionsForBudgetCommandOutput = DescribeBudgetActionsForBudgetResponse & __MetadataBearer;

/**
 * <p>
 *          Describes all of the budget actions for a budget.
 *       </p>
 */
export class DescribeBudgetActionsForBudgetCommand extends $Command<
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetActionsForBudgetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBudgetActionsForBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetActionsForBudgetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeBudgetActionsForBudgetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBudgetActionsForBudgetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetActionsForBudgetCommandOutput> {
    return deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
