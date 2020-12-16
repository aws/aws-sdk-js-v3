import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DeleteBudgetActionRequest, DeleteBudgetActionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBudgetActionCommand,
  serializeAws_json1_1DeleteBudgetActionCommand,
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

export type DeleteBudgetActionCommandInput = DeleteBudgetActionRequest;
export type DeleteBudgetActionCommandOutput = DeleteBudgetActionResponse & __MetadataBearer;

/**
 * <p>
 *          Deletes a budget action.
 *       </p>
 */
export class DeleteBudgetActionCommand extends $Command<
  DeleteBudgetActionCommandInput,
  DeleteBudgetActionCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBudgetActionCommandInput) {
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
  ): Handler<DeleteBudgetActionCommandInput, DeleteBudgetActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DeleteBudgetActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBudgetActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBudgetActionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBudgetActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBudgetActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBudgetActionCommandOutput> {
    return deserializeAws_json1_1DeleteBudgetActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
