import {
  ServiceInputTypes,
  ServiceOutputTypes,
  codestarnotificationsClientResolvedConfig
} from "../codestarnotificationsClient";
import {
  UpdateNotificationRuleRequest,
  UpdateNotificationRuleResult
} from "../models/index";
import {
  deserializeAws_restJson1UpdateNotificationRuleCommand,
  serializeAws_restJson1UpdateNotificationRuleCommand
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type UpdateNotificationRuleCommandInput = UpdateNotificationRuleRequest;
export type UpdateNotificationRuleCommandOutput = UpdateNotificationRuleResult &
  __MetadataBearer;

export class UpdateNotificationRuleCommand extends $Command<
  UpdateNotificationRuleCommandInput,
  UpdateNotificationRuleCommandOutput,
  codestarnotificationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNotificationRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: codestarnotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateNotificationRuleCommandInput,
    UpdateNotificationRuleCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateNotificationRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateNotificationRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNotificationRuleCommandOutput> {
    return deserializeAws_restJson1UpdateNotificationRuleCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
