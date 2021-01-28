import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DeleteBudgetRequest, DeleteBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBudgetCommand,
  serializeAws_json1_1DeleteBudgetCommand,
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

export type DeleteBudgetCommandInput = DeleteBudgetRequest;
export type DeleteBudgetCommandOutput = DeleteBudgetResponse & __MetadataBearer;

/**
 * <p>Deletes a budget. You can delete your budget at any time.</p>
 * 		       <important>
 * 			         <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p>
 * 		       </important>
 */
export class DeleteBudgetCommand extends $Command<
  DeleteBudgetCommandInput,
  DeleteBudgetCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBudgetCommandInput) {
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
  ): Handler<DeleteBudgetCommandInput, DeleteBudgetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DeleteBudgetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBudgetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBudgetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBudgetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBudgetCommandOutput> {
    return deserializeAws_json1_1DeleteBudgetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
