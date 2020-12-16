import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { CreateBudgetRequest, CreateBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBudgetCommand,
  serializeAws_json1_1CreateBudgetCommand,
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

export type CreateBudgetCommandInput = CreateBudgetRequest;
export type CreateBudgetCommandOutput = CreateBudgetResponse & __MetadataBearer;

/**
 * <p>Creates a budget and, if included, notifications and subscribers. </p>
 * 		       <important>
 * 			         <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p>
 * 		       </important>
 */
export class CreateBudgetCommand extends $Command<
  CreateBudgetCommandInput,
  CreateBudgetCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "CreateBudgetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBudgetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBudgetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBudgetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBudgetCommandOutput> {
    return deserializeAws_json1_1CreateBudgetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
