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
  SetTextMessageSpendLimitOverrideRequest,
  SetTextMessageSpendLimitOverrideRequestFilterSensitiveLog,
  SetTextMessageSpendLimitOverrideResult,
  SetTextMessageSpendLimitOverrideResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0SetTextMessageSpendLimitOverrideCommand,
  serializeAws_json1_0SetTextMessageSpendLimitOverrideCommand,
} from "../protocols/Aws_json1_0";

export interface SetTextMessageSpendLimitOverrideCommandInput extends SetTextMessageSpendLimitOverrideRequest {}
export interface SetTextMessageSpendLimitOverrideCommandOutput
  extends SetTextMessageSpendLimitOverrideResult,
    __MetadataBearer {}

/**
 * <p>Sets an account level monthly spend limit override for sending text messages. The
 *             requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is
 *             set by Amazon Web Services. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetTextMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetTextMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new SetTextMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTextMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetTextMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class SetTextMessageSpendLimitOverrideCommand extends $Command<
  SetTextMessageSpendLimitOverrideCommandInput,
  SetTextMessageSpendLimitOverrideCommandOutput,
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

  constructor(readonly input: SetTextMessageSpendLimitOverrideCommandInput) {
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
  ): Handler<SetTextMessageSpendLimitOverrideCommandInput, SetTextMessageSpendLimitOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetTextMessageSpendLimitOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "SetTextMessageSpendLimitOverrideCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetTextMessageSpendLimitOverrideRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SetTextMessageSpendLimitOverrideResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetTextMessageSpendLimitOverrideCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0SetTextMessageSpendLimitOverrideCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetTextMessageSpendLimitOverrideCommandOutput> {
    return deserializeAws_json1_0SetTextMessageSpendLimitOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
