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
  DeleteTextMessageSpendLimitOverrideRequest,
  DeleteTextMessageSpendLimitOverrideRequestFilterSensitiveLog,
  DeleteTextMessageSpendLimitOverrideResult,
  DeleteTextMessageSpendLimitOverrideResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand,
  serializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteTextMessageSpendLimitOverrideCommandInput extends DeleteTextMessageSpendLimitOverrideRequest {}
export interface DeleteTextMessageSpendLimitOverrideCommandOutput
  extends DeleteTextMessageSpendLimitOverrideResult,
    __MetadataBearer {}

/**
 * <p>Deletes an account-level monthly spending limit override for sending text messages.
 *             Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the
 *                 <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more
 *             information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a>
 *             in the <i>Amazon Pinpoint Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteTextMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteTextMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new DeleteTextMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTextMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteTextMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class DeleteTextMessageSpendLimitOverrideCommand extends $Command<
  DeleteTextMessageSpendLimitOverrideCommandInput,
  DeleteTextMessageSpendLimitOverrideCommandOutput,
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

  constructor(readonly input: DeleteTextMessageSpendLimitOverrideCommandInput) {
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
  ): Handler<DeleteTextMessageSpendLimitOverrideCommandInput, DeleteTextMessageSpendLimitOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTextMessageSpendLimitOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DeleteTextMessageSpendLimitOverrideCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTextMessageSpendLimitOverrideRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTextMessageSpendLimitOverrideResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteTextMessageSpendLimitOverrideCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput> {
    return deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
