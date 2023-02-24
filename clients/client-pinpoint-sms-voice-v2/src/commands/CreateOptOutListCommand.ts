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
  CreateOptOutListRequest,
  CreateOptOutListRequestFilterSensitiveLog,
  CreateOptOutListResult,
  CreateOptOutListResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0CreateOptOutListCommand,
  serializeAws_json1_0CreateOptOutListCommand,
} from "../protocols/Aws_json1_0";

export interface CreateOptOutListCommandInput extends CreateOptOutListRequest {}
export interface CreateOptOutListCommandOutput extends CreateOptOutListResult, __MetadataBearer {}

/**
 * <p>Creates a new opt-out list.</p>
 *         <p>If the opt-out list name already exists, an Error is returned.</p>
 *         <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send
 *             SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for
 *             the phone number is added to the opt-out list. In addition to STOP, your recipients can
 *             use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported
 *             opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout">
 *                 SMS opt out </a> in the <i>Amazon Pinpoint User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateOptOutListCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateOptOutListCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new CreateOptOutListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOptOutListCommandInput} for command's `input` shape.
 * @see {@link CreateOptOutListCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class CreateOptOutListCommand extends $Command<
  CreateOptOutListCommandInput,
  CreateOptOutListCommandOutput,
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

  constructor(readonly input: CreateOptOutListCommandInput) {
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
  ): Handler<CreateOptOutListCommandInput, CreateOptOutListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOptOutListCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "CreateOptOutListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOptOutListRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateOptOutListResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOptOutListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateOptOutListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOptOutListCommandOutput> {
    return deserializeAws_json1_0CreateOptOutListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
