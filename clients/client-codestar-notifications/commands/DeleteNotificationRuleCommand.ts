import {
  ServiceInputTypes,
  ServiceOutputTypes,
  codestarnotificationsClientResolvedConfig
} from "../codestarnotificationsClient";
import {
  DeleteNotificationRuleRequest,
  DeleteNotificationRuleResult
} from "../models/index";
import {
  deserializeAws_restJson1DeleteNotificationRuleCommand,
  serializeAws_restJson1DeleteNotificationRuleCommand
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

export type DeleteNotificationRuleCommandInput = DeleteNotificationRuleRequest;
export type DeleteNotificationRuleCommandOutput = DeleteNotificationRuleResult &
  __MetadataBearer;

export class DeleteNotificationRuleCommand extends $Command<
  DeleteNotificationRuleCommandInput,
  DeleteNotificationRuleCommandOutput,
  codestarnotificationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNotificationRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: codestarnotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteNotificationRuleCommandInput,
    DeleteNotificationRuleCommandOutput
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
    input: DeleteNotificationRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteNotificationRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNotificationRuleCommandOutput> {
    return deserializeAws_restJson1DeleteNotificationRuleCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
