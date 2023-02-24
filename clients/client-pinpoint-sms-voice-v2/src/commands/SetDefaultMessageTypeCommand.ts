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
  SetDefaultMessageTypeRequest,
  SetDefaultMessageTypeRequestFilterSensitiveLog,
  SetDefaultMessageTypeResult,
  SetDefaultMessageTypeResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0SetDefaultMessageTypeCommand,
  serializeAws_json1_0SetDefaultMessageTypeCommand,
} from "../protocols/Aws_json1_0";

export interface SetDefaultMessageTypeCommandInput extends SetDefaultMessageTypeRequest {}
export interface SetDefaultMessageTypeCommandOutput extends SetDefaultMessageTypeResult, __MetadataBearer {}

/**
 * <p>Sets the default message type on a configuration set.</p>
 *         <p>Choose the category of SMS messages that you plan to send from this account. If you
 *             send account-related messages or time-sensitive messages such as one-time passcodes,
 *             choose <b>Transactional</b>. If you plan to send messages that
 *             contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetDefaultMessageTypeCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetDefaultMessageTypeCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new SetDefaultMessageTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDefaultMessageTypeCommandInput} for command's `input` shape.
 * @see {@link SetDefaultMessageTypeCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class SetDefaultMessageTypeCommand extends $Command<
  SetDefaultMessageTypeCommandInput,
  SetDefaultMessageTypeCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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

  constructor(readonly input: SetDefaultMessageTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetDefaultMessageTypeCommandInput, SetDefaultMessageTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetDefaultMessageTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "SetDefaultMessageTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetDefaultMessageTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SetDefaultMessageTypeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetDefaultMessageTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SetDefaultMessageTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetDefaultMessageTypeCommandOutput> {
    return deserializeAws_json1_0SetDefaultMessageTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
