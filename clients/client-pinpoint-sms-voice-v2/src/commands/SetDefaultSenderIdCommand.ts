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
  SetDefaultSenderIdRequest,
  SetDefaultSenderIdRequestFilterSensitiveLog,
  SetDefaultSenderIdResult,
  SetDefaultSenderIdResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0SetDefaultSenderIdCommand,
  serializeAws_json1_0SetDefaultSenderIdCommand,
} from "../protocols/Aws_json1_0";

export interface SetDefaultSenderIdCommandInput extends SetDefaultSenderIdRequest {}
export interface SetDefaultSenderIdCommandOutput extends SetDefaultSenderIdResult, __MetadataBearer {}

/**
 * <p>Sets default sender ID on a configuration set.</p>
 *         <p>When sending a text message to a destination country that supports sender IDs, the
 *             default sender ID on the configuration set specified will be used if no dedicated
 *             origination phone numbers or registered sender IDs are available in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetDefaultSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetDefaultSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new SetDefaultSenderIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDefaultSenderIdCommandInput} for command's `input` shape.
 * @see {@link SetDefaultSenderIdCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class SetDefaultSenderIdCommand extends $Command<
  SetDefaultSenderIdCommandInput,
  SetDefaultSenderIdCommandOutput,
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

  constructor(readonly input: SetDefaultSenderIdCommandInput) {
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
  ): Handler<SetDefaultSenderIdCommandInput, SetDefaultSenderIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetDefaultSenderIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "SetDefaultSenderIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetDefaultSenderIdRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SetDefaultSenderIdResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetDefaultSenderIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SetDefaultSenderIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetDefaultSenderIdCommandOutput> {
    return deserializeAws_json1_0SetDefaultSenderIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
