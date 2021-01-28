import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeNotificationsForBudgetRequest, DescribeNotificationsForBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeNotificationsForBudgetCommand,
  serializeAws_json1_1DescribeNotificationsForBudgetCommand,
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

export type DescribeNotificationsForBudgetCommandInput = DescribeNotificationsForBudgetRequest;
export type DescribeNotificationsForBudgetCommandOutput = DescribeNotificationsForBudgetResponse & __MetadataBearer;

/**
 * <p>Lists the notifications that are associated with a budget.</p>
 */
export class DescribeNotificationsForBudgetCommand extends $Command<
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNotificationsForBudgetCommandInput) {
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
  ): Handler<DescribeNotificationsForBudgetCommandInput, DescribeNotificationsForBudgetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeNotificationsForBudgetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNotificationsForBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeNotificationsForBudgetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNotificationsForBudgetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeNotificationsForBudgetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNotificationsForBudgetCommandOutput> {
    return deserializeAws_json1_1DescribeNotificationsForBudgetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
