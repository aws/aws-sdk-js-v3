import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { CreateNotificationRuleRequest, CreateNotificationRuleResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateNotificationRuleCommand,
  serializeAws_restJson1CreateNotificationRuleCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateNotificationRuleCommandInput = CreateNotificationRuleRequest;
export type CreateNotificationRuleCommandOutput = CreateNotificationRuleResult & __MetadataBearer;

/**
 * <p>Creates a notification rule for a resource. The rule specifies the events you want
 *             notifications about and the targets (such as SNS topics) where you want to receive
 *             them.</p>
 */
export class CreateNotificationRuleCommand extends $Command<
  CreateNotificationRuleCommandInput,
  CreateNotificationRuleCommandOutput,
  CodestarNotificationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNotificationRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodestarNotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNotificationRuleCommandInput, CreateNotificationRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "CreateNotificationRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNotificationRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNotificationRuleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNotificationRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNotificationRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNotificationRuleCommandOutput> {
    return deserializeAws_restJson1CreateNotificationRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
