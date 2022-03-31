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

import { DeleteDefaultSenderIdRequest, DeleteDefaultSenderIdResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0DeleteDefaultSenderIdCommand,
  serializeAws_json1_0DeleteDefaultSenderIdCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteDefaultSenderIdCommandInput extends DeleteDefaultSenderIdRequest {}
export interface DeleteDefaultSenderIdCommandOutput extends DeleteDefaultSenderIdResult, __MetadataBearer {}

/**
 * <p>Deletes an existing default sender ID on a configuration set.</p>
 *         <p>A default sender ID is the identity that appears on recipients' devices when they
 *             receive SMS messages. Support for sender ID capabilities varies by country or
 *             region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteDefaultSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteDefaultSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new DeleteDefaultSenderIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDefaultSenderIdCommandInput} for command's `input` shape.
 * @see {@link DeleteDefaultSenderIdCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class DeleteDefaultSenderIdCommand extends $Command<
  DeleteDefaultSenderIdCommandInput,
  DeleteDefaultSenderIdCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDefaultSenderIdCommandInput) {
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
  ): Handler<DeleteDefaultSenderIdCommandInput, DeleteDefaultSenderIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DeleteDefaultSenderIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDefaultSenderIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDefaultSenderIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDefaultSenderIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteDefaultSenderIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDefaultSenderIdCommandOutput> {
    return deserializeAws_json1_0DeleteDefaultSenderIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
