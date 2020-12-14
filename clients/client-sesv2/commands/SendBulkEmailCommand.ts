import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { SendBulkEmailRequest, SendBulkEmailResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SendBulkEmailCommand,
  serializeAws_restJson1SendBulkEmailCommand,
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

export type SendBulkEmailCommandInput = SendBulkEmailRequest;
export type SendBulkEmailCommandOutput = SendBulkEmailResponse & __MetadataBearer;

/**
 * <p>Composes an email message to multiple destinations.</p>
 */
export class SendBulkEmailCommand extends $Command<
  SendBulkEmailCommandInput,
  SendBulkEmailCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendBulkEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBulkEmailCommandInput, SendBulkEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "SendBulkEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendBulkEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendBulkEmailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendBulkEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendBulkEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBulkEmailCommandOutput> {
    return deserializeAws_restJson1SendBulkEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
