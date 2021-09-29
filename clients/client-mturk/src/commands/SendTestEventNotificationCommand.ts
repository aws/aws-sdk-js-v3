import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { SendTestEventNotificationRequest, SendTestEventNotificationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SendTestEventNotificationCommand,
  serializeAws_json1_1SendTestEventNotificationCommand,
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

export interface SendTestEventNotificationCommandInput extends SendTestEventNotificationRequest {}
export interface SendTestEventNotificationCommandOutput extends SendTestEventNotificationResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send
 *             a notification message as if a HIT event occurred, according to the provided
 *             notification specification. This allows you to test notifications without
 *             setting up notifications for a real HIT type and trying to trigger them using the website.
 *             When you call this operation, the service attempts to send the test notification immediately.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, SendTestEventNotificationCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, SendTestEventNotificationCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new SendTestEventNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendTestEventNotificationCommandInput} for command's `input` shape.
 * @see {@link SendTestEventNotificationCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendTestEventNotificationCommand extends $Command<
  SendTestEventNotificationCommandInput,
  SendTestEventNotificationCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendTestEventNotificationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTestEventNotificationCommandInput, SendTestEventNotificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "SendTestEventNotificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendTestEventNotificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendTestEventNotificationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendTestEventNotificationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendTestEventNotificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendTestEventNotificationCommandOutput> {
    return deserializeAws_json1_1SendTestEventNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
