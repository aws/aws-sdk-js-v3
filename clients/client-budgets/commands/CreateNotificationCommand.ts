import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { CreateNotificationRequest, CreateNotificationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateNotificationCommand,
  serializeAws_json1_1CreateNotificationCommand,
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

export type CreateNotificationCommandInput = CreateNotificationRequest;
export type CreateNotificationCommandOutput = CreateNotificationResponse & __MetadataBearer;

/**
 * <p>Creates a notification. You must create the budget before you create the associated notification.</p>
 */
export class CreateNotificationCommand extends $Command<
  CreateNotificationCommandInput,
  CreateNotificationCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNotificationCommandInput) {
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
  ): Handler<CreateNotificationCommandInput, CreateNotificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "CreateNotificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNotificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNotificationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNotificationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateNotificationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNotificationCommandOutput> {
    return deserializeAws_json1_1CreateNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
