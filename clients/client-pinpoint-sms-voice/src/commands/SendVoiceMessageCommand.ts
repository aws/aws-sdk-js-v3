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
  SendVoiceMessageRequest,
  SendVoiceMessageRequestFilterSensitiveLog,
  SendVoiceMessageResponse,
  SendVoiceMessageResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import {
  deserializeAws_restJson1SendVoiceMessageCommand,
  serializeAws_restJson1SendVoiceMessageCommand,
} from "../protocols/Aws_restJson1";

export interface SendVoiceMessageCommandInput extends SendVoiceMessageRequest {}
export interface SendVoiceMessageCommandOutput extends SendVoiceMessageResponse, __MetadataBearer {}

/**
 * Create a new voice message and send it to a recipient's phone number.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, SendVoiceMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, SendVoiceMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new SendVoiceMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendVoiceMessageCommandInput} for command's `input` shape.
 * @see {@link SendVoiceMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for PinpointSMSVoiceClient's `config` shape.
 *
 */
export class SendVoiceMessageCommand extends $Command<
  SendVoiceMessageCommandInput,
  SendVoiceMessageCommandOutput,
  PinpointSMSVoiceClientResolvedConfig
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

  constructor(readonly input: SendVoiceMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendVoiceMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceClient";
    const commandName = "SendVoiceMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendVoiceMessageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendVoiceMessageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendVoiceMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendVoiceMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendVoiceMessageCommandOutput> {
    return deserializeAws_restJson1SendVoiceMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
