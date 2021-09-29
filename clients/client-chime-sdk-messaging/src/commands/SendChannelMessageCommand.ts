import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { SendChannelMessageRequest, SendChannelMessageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SendChannelMessageCommand,
  serializeAws_restJson1SendChannelMessageCommand,
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

export interface SendChannelMessageCommandInput extends SendChannelMessageRequest {}
export interface SendChannelMessageCommandOutput extends SendChannelMessageResponse, __MetadataBearer {}

/**
 * <p>Sends a message to a particular channel that the member is a part of.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *
 *             <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata.
 *                <code>CONTROL</code> messages can contain 30 bytes of data and no metadata.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, SendChannelMessageCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, SendChannelMessageCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new SendChannelMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendChannelMessageCommandInput} for command's `input` shape.
 * @see {@link SendChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendChannelMessageCommand extends $Command<
  SendChannelMessageCommandInput,
  SendChannelMessageCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendChannelMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendChannelMessageCommandInput, SendChannelMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "SendChannelMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendChannelMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendChannelMessageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendChannelMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendChannelMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendChannelMessageCommandOutput> {
    return deserializeAws_restJson1SendChannelMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
