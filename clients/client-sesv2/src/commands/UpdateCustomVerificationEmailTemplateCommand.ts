import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import {
  UpdateCustomVerificationEmailTemplateRequest,
  UpdateCustomVerificationEmailTemplateResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand,
  serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand,
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

export interface UpdateCustomVerificationEmailTemplateCommandInput
  extends UpdateCustomVerificationEmailTemplateRequest {}
export interface UpdateCustomVerificationEmailTemplateCommandOutput
  extends UpdateCustomVerificationEmailTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing custom verification email template.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new UpdateCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateCustomVerificationEmailTemplateCommand extends $Command<
  UpdateCustomVerificationEmailTemplateCommandInput,
  UpdateCustomVerificationEmailTemplateCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCustomVerificationEmailTemplateCommandInput) {
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
  ): Handler<UpdateCustomVerificationEmailTemplateCommandInput, UpdateCustomVerificationEmailTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "UpdateCustomVerificationEmailTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCustomVerificationEmailTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCustomVerificationEmailTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCustomVerificationEmailTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
