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
  SetVoiceMessageSpendLimitOverrideRequest,
  SetVoiceMessageSpendLimitOverrideRequestFilterSensitiveLog,
  SetVoiceMessageSpendLimitOverrideResult,
  SetVoiceMessageSpendLimitOverrideResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand,
  serializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand,
} from "../protocols/Aws_json1_0";

export interface SetVoiceMessageSpendLimitOverrideCommandInput extends SetVoiceMessageSpendLimitOverrideRequest {}
export interface SetVoiceMessageSpendLimitOverrideCommandOutput
  extends SetVoiceMessageSpendLimitOverrideResult,
    __MetadataBearer {}

/**
 * <p>Sets an account level monthly spend limit override for sending voice messages. The
 *             requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is
 *             set by Amazon Web Services. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetVoiceMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetVoiceMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new SetVoiceMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetVoiceMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetVoiceMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class SetVoiceMessageSpendLimitOverrideCommand extends $Command<
  SetVoiceMessageSpendLimitOverrideCommandInput,
  SetVoiceMessageSpendLimitOverrideCommandOutput,
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

  constructor(readonly input: SetVoiceMessageSpendLimitOverrideCommandInput) {
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
  ): Handler<SetVoiceMessageSpendLimitOverrideCommandInput, SetVoiceMessageSpendLimitOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetVoiceMessageSpendLimitOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "SetVoiceMessageSpendLimitOverrideCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetVoiceMessageSpendLimitOverrideRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SetVoiceMessageSpendLimitOverrideResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetVoiceMessageSpendLimitOverrideCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetVoiceMessageSpendLimitOverrideCommandOutput> {
    return deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
