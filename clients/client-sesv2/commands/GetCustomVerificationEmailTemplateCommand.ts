import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import {
  GetCustomVerificationEmailTemplateRequest,
  GetCustomVerificationEmailTemplateResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand,
  serializeAws_restJson1GetCustomVerificationEmailTemplateCommand,
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

export type GetCustomVerificationEmailTemplateCommandInput = GetCustomVerificationEmailTemplateRequest;
export type GetCustomVerificationEmailTemplateCommandOutput = GetCustomVerificationEmailTemplateResponse &
  __MetadataBearer;

/**
 * <p>Returns the custom email verification template for the template name you
 *             specify.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class GetCustomVerificationEmailTemplateCommand extends $Command<
  GetCustomVerificationEmailTemplateCommandInput,
  GetCustomVerificationEmailTemplateCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCustomVerificationEmailTemplateCommandInput) {
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
  ): Handler<GetCustomVerificationEmailTemplateCommandInput, GetCustomVerificationEmailTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetCustomVerificationEmailTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCustomVerificationEmailTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCustomVerificationEmailTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCustomVerificationEmailTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCustomVerificationEmailTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCustomVerificationEmailTemplateCommandOutput> {
    return deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
