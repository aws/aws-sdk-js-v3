// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { SendCustomVerificationEmailRequest, SendCustomVerificationEmailResponse } from "../models/models_1";
import {
  de_SendCustomVerificationEmailCommand,
  se_SendCustomVerificationEmailCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendCustomVerificationEmailCommand}.
 */
export interface SendCustomVerificationEmailCommandInput extends SendCustomVerificationEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendCustomVerificationEmailCommand}.
 */
export interface SendCustomVerificationEmailCommandOutput
  extends SendCustomVerificationEmailResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *                 Amazon Web Services Region and attempts to verify it. As a result of executing this
 *             operation, a customized verification email is sent to the specified address.</p>
 *          <p>To use this operation, you must first create a custom verification email template. For
 *             more information about creating and using custom verification email templates, see
 *                 <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
 *                 custom verification email templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendCustomVerificationEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, SendCustomVerificationEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // SendCustomVerificationEmailRequest
 *   EmailAddress: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE", // required
 *   ConfigurationSetName: "STRING_VALUE",
 * };
 * const command = new SendCustomVerificationEmailCommand(input);
 * const response = await client.send(command);
 * // { // SendCustomVerificationEmailResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendCustomVerificationEmailCommandInput - {@link SendCustomVerificationEmailCommandInput}
 * @returns {@link SendCustomVerificationEmailCommandOutput}
 * @see {@link SendCustomVerificationEmailCommandInput} for command's `input` shape.
 * @see {@link SendCustomVerificationEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *  <p>The message can't be sent because the sending domain isn't verified.</p>
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>The message can't be sent because it contains invalid content.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link SendingPausedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class SendCustomVerificationEmailCommand extends $Command<
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: SendCustomVerificationEmailCommandInput) {
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
  ): Handler<SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendCustomVerificationEmailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "SendCustomVerificationEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "SendCustomVerificationEmail",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SendCustomVerificationEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendCustomVerificationEmailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendCustomVerificationEmailCommandOutput> {
    return de_SendCustomVerificationEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
