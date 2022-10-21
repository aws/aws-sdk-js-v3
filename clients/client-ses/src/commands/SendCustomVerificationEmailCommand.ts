// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  SendCustomVerificationEmailRequest,
  SendCustomVerificationEmailRequestFilterSensitiveLog,
  SendCustomVerificationEmailResponse,
  SendCustomVerificationEmailResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySendCustomVerificationEmailCommand,
  serializeAws_querySendCustomVerificationEmailCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

export interface SendCustomVerificationEmailCommandInput extends SendCustomVerificationEmailRequest {}
export interface SendCustomVerificationEmailCommandOutput
  extends SendCustomVerificationEmailResponse,
    __MetadataBearer {}

/**
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *             AWS Region and attempts to verify it. As a result of executing this operation, a
 *             customized verification email is sent to the specified address.</p>
 *         <p>To use this operation, you must first create a custom verification email template. For
 *             more information about creating and using custom verification email templates, see
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom
 *                 Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendCustomVerificationEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendCustomVerificationEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new SendCustomVerificationEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendCustomVerificationEmailCommandInput} for command's `input` shape.
 * @see {@link SendCustomVerificationEmailCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class SendCustomVerificationEmailCommand extends $Command<
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
  SESClientResolvedConfig
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
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendCustomVerificationEmailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SendCustomVerificationEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendCustomVerificationEmailRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendCustomVerificationEmailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendCustomVerificationEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySendCustomVerificationEmailCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendCustomVerificationEmailCommandOutput> {
    return deserializeAws_querySendCustomVerificationEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
