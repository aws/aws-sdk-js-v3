import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import {
  SetIdentityFeedbackForwardingEnabledRequest,
  SetIdentityFeedbackForwardingEnabledResponse,
} from "../models/models_0";
import {
  deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand,
  serializeAws_querySetIdentityFeedbackForwardingEnabledCommand,
} from "../protocols/Aws_query";
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

export interface SetIdentityFeedbackForwardingEnabledCommandInput extends SetIdentityFeedbackForwardingEnabledRequest {}
export interface SetIdentityFeedbackForwardingEnabledCommandOutput
  extends SetIdentityFeedbackForwardingEnabledResponse,
    __MetadataBearer {}

/**
 * <p>Given an identity (an email address or a domain), enables or disables whether Amazon SES
 *             forwards bounce and complaint notifications as email. Feedback forwarding can only be
 *             disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and
 *             complaints.</p>
 *         <note>
 *             <p>Feedback forwarding does not apply to delivery notifications. Delivery
 *                 notifications are only available through Amazon SNS.</p>
 *         </note>
 *         <p>You can execute this operation no more than once per second.</p>
 *         <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityFeedbackForwardingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityFeedbackForwardingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new SetIdentityFeedbackForwardingEnabledCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIdentityFeedbackForwardingEnabledCommandInput} for command's `input` shape.
 * @see {@link SetIdentityFeedbackForwardingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetIdentityFeedbackForwardingEnabledCommand extends $Command<
  SetIdentityFeedbackForwardingEnabledCommandInput,
  SetIdentityFeedbackForwardingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetIdentityFeedbackForwardingEnabledCommandInput) {
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
  ): Handler<SetIdentityFeedbackForwardingEnabledCommandInput, SetIdentityFeedbackForwardingEnabledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetIdentityFeedbackForwardingEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIdentityFeedbackForwardingEnabledRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetIdentityFeedbackForwardingEnabledResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetIdentityFeedbackForwardingEnabledCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_querySetIdentityFeedbackForwardingEnabledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> {
    return deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
